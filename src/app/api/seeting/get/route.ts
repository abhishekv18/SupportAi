import connectDb from "@/lib/db";
import Seetings from "@/models/seetings.model";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req:NextRequest){
   try {
    const { ownerId} = await req.json();
    if(!ownerId){
        return NextResponse.json({error:"OwnerId is required"},{status:400});
    }
    await connectDb();
    const seetings=await Seetings.findOne({ownerId});
    return NextResponse.json(seetings);
   } catch (error) {
    return NextResponse.json({error:"Internal Server Error"},{status:500});
   }
}