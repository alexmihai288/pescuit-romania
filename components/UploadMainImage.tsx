"use client";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { ImageIcon, Loader2, MousePointerSquareDashed } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { UseFormSetValue } from "react-hook-form";

export const UploadMainImage = ({
  setValue,
}: {
  setValue: UseFormSetValue<{
    nume_balta: string;
    adresa: string;
    logo: string;
    imagine_coperta: string;
    galerie: string[];
    telefon: string;
    adresa_mail: string;
    nume_administrator:string
    descriere_regulament:string
  }>;
}) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const { toast } = useToast();
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      setImageUrl(data.url);
      setValue("imagine_coperta", data.url);
      toast({
        title: `You uploaded succesfully`,
        variant: "default",
      });
    },
    onUploadProgress(p) {
      setUploadProgress(p);
    },
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;

    setIsDragOver(false);

    toast({
      title: `${file.file.type} is not supported.`,
      description: "Please choose a PNG, JPG, or JPEG image instead.",
      variant: "destructive",
    });
  };

  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles);

    setIsDragOver(false);
  };

  if (imageUrl !== "")
    return (
      <Image
        src={imageUrl}
        width={8000}
        height={8000}
        className="max-w-[400px] max-h-[400px] rounded-md"
        alt="logo"
      />
    );
  return (
    <div
      className={cn(
        "relative h-full flex-1 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        { "ring-blue-900/25 bg-blue-900/10": isDragOver }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="h-full w-full flex-1 flex flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
              ) : isUploading ? (
                <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
              ) : (
                <ImageIcon className="h-6 w-6 text-zinc-500 mb-2" />
              )}

              <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Uploading...</p>
                    <Progress
                      value={uploadProgress}
                      className="mt-2 w-40 h-2 bg-gray-300"
                    />
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">Drop file</span>
                    to upload
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                )}
              </div>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};
