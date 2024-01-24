import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import {signOut} from "next-auth/react";


const handler = NextAuth({
    providers: [
        GoogleProvider(
            {
                clientId: process.env.GOOGLE_CLIENT_ID ?? "",
                clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
            }
        )
    ],
    callbacks: {
        redirect({url, baseUrl}) {
            return `${baseUrl}/dashboard`
        }
    }

})

export {
    handler as GET,
    handler as POST
}