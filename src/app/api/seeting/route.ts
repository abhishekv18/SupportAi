import connectDb from "@/lib/db";
import Seetings from "@/models/seetings.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
   try {
        const body = await req.json();
    console.log("FULL BODY RECEIVED:", body);
    const { ownerId,
    businessName,
    businessEmail,
    knowledge} = body;
    if(!ownerId || !businessName || !businessEmail){
        return NextResponse.json({error:"All fields are required"},{status:400});
    }
    await connectDb();
  const seetings=  await Seetings.findOneAndUpdate(
  { ownerId },
  {
    $set: {
      businessName,
      businessEmail,
      knowledge:knowledge || "",
    }
  },
//   {
//     new: true,
//     upsert: true
//   }
 { returnDocument: "after", upsert: true } 
);
console.log("SEETINGS AFTER UPDATE OR CREATE:", seetings);
    return NextResponse.json(seetings);
   } catch (error) {
    return NextResponse.json({error:"Internal Server Error"},{status:500});
   }
}