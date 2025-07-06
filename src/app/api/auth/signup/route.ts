import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { string, z} from "zod"
import bcrypt from "bcryptjs";
import { version } from "os";


const userdata = z.object({
    firstname: z.string().min(2),
    lastname:z.string().min(2),
    email: z.string(),
    password:z.string().min(5).max(20)
})



export async function POST(req:NextRequest){
    const body = await req.json()
    const verifiedbody : any = userdata.safeParse(body)

    if(!verifiedbody.success){
        return NextResponse.json({
            message:"please enter the valid data"
        })
    }

    const { firstname , lastname , email , password } = verifiedbody.data

    const alreadyexistuser = await prisma.usersdata.findFirst({
        where:{
            firstname:firstname,
            email:email
        }
    })

    if(alreadyexistuser){
        return NextResponse.json({
            message:"users already exist"
        })
    }

    const hassedpassword = await bcrypt.hash(password , 12)

    try {
         const userdatasave = await prisma.usersdata.create({
            data:{
                email:email,
                firstname:firstname,
                lastname:lastname,
                password: hassedpassword
            }
         })

         return NextResponse.json({
            message:"signup done",
            userdatasave
         })
    } catch (error) {
        return NextResponse.json({
            message:"there's some error while signup"
        })
    }
    
   
}