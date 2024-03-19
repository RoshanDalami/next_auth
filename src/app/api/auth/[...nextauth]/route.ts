import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/Model/user.model";
import { Connect } from "@/db/dbConfig";
Connect()
export const authOptions = {
  
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { },
            password: {  }
          },
          async authorize(credentials, req) {
            const user = await User.findOne({email:credentials?.email});
          
            const isPasswordValid = user.password === credentials?.password
            console.log(isPasswordValid)
            if(isPasswordValid){
              return {
                id:user._id,
                email:user.email,
                password:user.password
              }
            }
            return null
          }
        })
      ]
}

export const handler = NextAuth(  { session:{
  strategy:'jwt'
} , ...authOptions});

export { handler as POST,handler as GET};