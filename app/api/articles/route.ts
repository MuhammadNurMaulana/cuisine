import { retrieveData, retrieveDataById } from "@/common/service/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  if (id) {
    const blog = await retrieveDataById("articles", id);

    if (blog) {
      return NextResponse.json({ status: 200, message: "Success get blog", data: blog });
    }

    return NextResponse.json({
      status: 404,
      message: "Failed get menu",
      data: {},
    });
  }

  const data = await retrieveData("articles");
  return NextResponse.json({ status: 200, message: "Success get blog", data });
}
