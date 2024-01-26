import { retrieveData, retrieveDataById } from "@/common/service/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  if (id) {
    const menu = await retrieveDataById("menu", id);
    if (menu) {
      return NextResponse.json({
        status: 200,
        message: "Success get menu",
        data: menu,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Failed get menu",
      data: {},
    });
  }

  const menu = await retrieveData("menu");

  return NextResponse.json({
    status: 200,
    message: "Success get menu",
    data: menu,
  });
}
