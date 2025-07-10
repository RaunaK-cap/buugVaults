import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { number, z } from "zod"


const codeschema  = z.object({

    title: z.string(),
    code: z.string(),
    usererror: z.string(),
    solutions: z.string(),
    dbuserid : number(),
    links : z.string().optional()
})

export async function POST(req: NextRequest) {
    const body = await req.json()
    const verifiedbody = codeschema.safeParse(body)
    if(!verifiedbody.success){
        return NextResponse.json({message:"enter valid data"})
    }

    const { title  , code , usererror , solutions , links , dbuserid } = verifiedbody.data
    try {
        await prisma.codedata.create({
            data: {
                code: code ,
                solutions : solutions,
                title : title,
                usererror: usererror,
                links : links,
                user: {

                    connect : {id : dbuserid}
                }
            }
        })

        return NextResponse.json({
            message:"data saved "
        })
    } catch (error) {
        
            return NextResponse.json({
                message:"error while adding data . please try again"
            })
    }
  
}