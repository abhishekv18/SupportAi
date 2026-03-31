// import { scalekit } from "@/lib/scalekit";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//     const redirectUri=`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;
//   const authorizationUrl = scalekit.getAuthorizationUrl(redirectUri);
//   console.log("Redirecting to:", authorizationUrl);
//     return NextResponse.redirect(authorizationUrl, 302);
// }
import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

  console.log("Redirect URI:", redirectUri); // DEBUG

  const authorizationUrl = scalekit.getAuthorizationUrl(redirectUri);

  console.log("Redirecting to:", authorizationUrl);

  return NextResponse.redirect(authorizationUrl, 302);
}