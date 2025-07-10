import NextAuth, { type NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),

        // GitHub OAuth Provider

        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],

    session:{
        strategy:"jwt"
    },

    callbacks:{
        async signIn(params){
            const existinguser = await prisma.usersdata.findFirst({
                where:{
                    email:params.user.email!
                }
            })

            if(!existinguser){
                const storinguserdata = await prisma.usersdata.create({
                    data:{
                         email:params.user.email ?? "",
                         name:params.user.name ?? ""
                    }
                })
                 
                if(!storinguserdata){
                   throw new Error("error while login ..")
                }
            }
                return true
        },
        async jwt({ token , user }){
            if(user){
                    const dbuserid = await prisma.usersdata.findFirst({
                        where:{
                            email:user.email!
                        }
                    })
                    token.id = dbuserid?.id
            }
            return token

        },
        async session ({ session , token }){
            if(session.user){
                session.user.id  = token.id
            }
            return session
        }
    },
    
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }