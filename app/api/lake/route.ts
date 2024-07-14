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
    const {
      adresa,
      adresa_mail,
      galerie,
      facilitati,
      imagine_coperta,
      nume_administrator,
      logo,
      nume_balta,
      telefon,
      descriere_regulament,
    } = data;

    const lake = await db.lake.create({
      data: {
        lakeName: nume_balta,
        location: adresa,
        logoUrl: logo,
        mainImageUrl: imagine_coperta,
        galleryImageUrls: galerie,
        facilities: facilitati,
        phoneNumber: telefon,
        adminName: nume_administrator,
        email: adresa_mail,
        lakeInfo: descriere_regulament,
      },
    });

    return NextResponse.json(lake);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error");
  }
}
