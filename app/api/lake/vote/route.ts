import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const data = await req.json();
    const { lakeId } = data;

    if (!lakeId) return new NextResponse("Lake ID is required", { status: 400 });

    // Increment votes by 1
    const lake = await db.lake.update({
      where: { id: lakeId },
      data: {
        votes: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(lake);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
