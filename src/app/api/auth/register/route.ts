import User from "@/Model/user.model";
import { NextRequest,NextResponse } from "next/server";
import {Jwt} from 'jsonwebtoken'
import { Connect } from "@/db/dbConfig";
Connect()
export async function POST(req:NextRequest){
    try {
        const body = await req.json();
        console.log(body)
        const newUser = new User(body)
        await newUser.save()
        console.log(newUser)
        return NextResponse.json(newUser,{status:200})
    } catch (error) {
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}