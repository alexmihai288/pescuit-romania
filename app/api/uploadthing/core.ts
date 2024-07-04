import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = 1;

      if (user !== 1) throw new UploadThingError("Unauthorized");

      return { user: user };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.user);

      console.log("file url", file.url);

      return { uploadedBy: metadata.user};
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
