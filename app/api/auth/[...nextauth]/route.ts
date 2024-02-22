import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Your User name",
                },
                password: {
                    label: "password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.username,
                    },
                });
                if (!user) throw new Error("User does not exist");
                if (!credentials?.password) throw new Error("Provide your password");
                const isPasswordCorrect = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isPasswordCorrect)
                throw new Error("User details not correct")

                const {password, ...userWithoutPass} = user;
                return userWithoutPass
            },
        }),
    ],
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}