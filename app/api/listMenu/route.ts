import { retrieveData } from "@/common/service/lib/firebase/service";
import { NextResponse } from "next/server";

export async function GET() {
  const menu = await retrieveData("listMenu");

  return NextResponse.json({
    status: 200,
    message: "Success get menu",
    data: menu,
  });
}
