import NextAuth, { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import prisma from "@/lib/prisma"

import bcrypt from "bcryptjs"
import { error } from "console"
import { NextResponse } from "next/server"


export const authOptions: NextAuthOptions = {

    providers: [
        // Credentials Provider for email/password authentication
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        return null

                    }

                    const user = await prisma.usersdata.findFirst({
                        where: {
                            email: credentials?.email

                        }
                    })

                    if (!user?.email || !user.password) {
                        throw new Error("no accound found please sign up first ")
                    }

                    const ispassword = await bcrypt.compare(credentials.password, user.password)
                    if (!ispassword) {
                        throw new Error("please enter the correct password")
                    }

                    console.log("authenticated sucessfully ")

                    return {
                        id: user.id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email
                    }
                } catch (error) {
                    console.log(  "your errors:",error.message)
                    throw error
                }},
        }),

        // GitHub OAuth Provider
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],

    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    callbacks: {
        // JWT callback - runs whenever JWT is created/updated
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },

        // Session callback - runs whenever session is accessed
        async session({ session, token }) {
            if (token) {
                session.user!.id = token.id as string;
            }
            return session;
        },
    },



    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }