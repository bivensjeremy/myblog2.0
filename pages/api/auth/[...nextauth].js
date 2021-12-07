import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "password",
            credentials: {
                password: { label: "Password", type: "password" }
            },
            authorize: (credentials) => {
                if(credentials.password === process.env.NEXTAUTH_PASSWORD) {
                    return {
                        id: 1,
                        name: "Jeremy",
                        email: "admin@bivensblueprint.com"
                    };
                }
                //login failed
                return null;
            },
        })
    ],
    pages: {
        signIn: '/administration/signin',
    },
    callbacks: {
        jwt: ({ token, user}) => {
            if(user){
                token.id = user.id;
            }
            return token;
        },
        session: ({ session, token }) => {
            if(token) {
                session.id = token.id;
            }
            return session;
        }
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true,
    },
});