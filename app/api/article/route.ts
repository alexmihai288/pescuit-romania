import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // const profile = await currentProfile();
    // if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    // const { userId } = await req.json();

    // if (!userId) return new NextResponse("UserId is empy", { status: 400 });

    // const existingConversation = await db.conversation.findFirst({
    //   where: {
    //     OR: [
    //       {
    //         memberOneId: profile.userId,
    //         memberTwoId: userId,
    //       },
    //       {
    //         memberOneId: userId,
    //         memberTwoId: profile.userId,
    //       },
    //     ],
    //   },
    // });

    // if (existingConversation)
    //   return new NextResponse("Conversation already exists", { status: 400 });

    // const conversation = await db.conversation.create({
    //   data: {
    //     memberOneId: profile.userId,
    //     memberTwoId: userId,
    //   },
    //   include:{
    //     memberTwo:true
    //   }
    // });

    const data = await req.json();
    const { title, adresa, galerie, telefon, infoArticol, pret } = data;

    const article = await db.article.create({
      data: {
        title: title,
        location: adresa,
        images: galerie,
        phoneNumber: telefon,
        articleInfo: infoArticol,
        price: pret,
      },
    });

    return NextResponse.json(article);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error");
  }
}
