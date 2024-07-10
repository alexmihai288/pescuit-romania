"use client";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Loader2, MapPin } from "lucide-react";
import { UploadLogo } from "./UploadLogo";
import { FaImage } from "react-icons/fa6";
import { TfiImage } from "react-icons/tfi";
import { UploadMainImage } from "./UploadMainImage";
import { UploadGallery } from "./UploadGallery";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { RiContactsLine } from "react-icons/ri";

import { MdDescription } from "react-icons/md";
import dynamic from "next/dynamic";
const LakeDescription = dynamic(() => import("./LakeDescription"), {
  ssr: false,
});

export const LakeformSchema = z.object({
  nume_balta: z.string().min(2, {
    message: "Numele bălții trebuie să conțină cel putin 2 caractere.",
  }),
  adresa: z.string().min(3, {
    message: "Locația trebuie să conțină mai mult de 2 caractere",
  }),
  logo: z.string().min(3, {
    message: "Încărcați un logo",
  }),
  imagine_coperta: z.string().min(3, {
    message: "Încărcați o imagine principală",
  }),
  galerie: z.array(z.string()).min(1, {
    message: "Galeria trebuie să conțină cel puțin un element.",
  }),
  telefon: z.string().min(3, {
    message: "Adăugați numărul de telefon al administratorului",
  }),
  nume_administrator: z.string().min(3, {
    message: "Adăugați numele administratorului",
  }),
  adresa_mail: z.string().email(),
  descriere_regulament: z.string().min(3, {
    message: "Adăugați descrierea/regulamentul bălții",
  }),
});
export const CreateLakeForm = () => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log(description);
  }, [description]);

  const { mutate: createLake, isPending } = useMutation({
    mutationFn: async (lakeInfo: z.infer<typeof LakeformSchema>) => {
      const { data } = await axios.post("/api/lake", lakeInfo);
      return data;
    },
  });

  const form = useForm<z.infer<typeof LakeformSchema>>({
    resolver: zodResolver(LakeformSchema),
    defaultValues: {
      nume_balta: "",
      adresa: "",
      logo: "",
      imagine_coperta: "",
      galerie: [],
      telefon: "",
      nume_administrator: "",
      adresa_mail: "",
      descriere_regulament: "",
    },
  });

  function onSubmit(values: z.infer<typeof LakeformSchema>) {
    createLake(values);
  }

  return (
    <div className="bg-white my-20 shadow-indigo-500/90 shadow-sm rounded-md w-full max-w-5xl container py-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="nume_balta"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <MdDriveFileRenameOutline /> Nume baltă
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Numele sub care e cunoscută balta"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <MapPin className="w-[14px] h-[14px]" />
                  Adresa
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adresa bălții. Dacă balta nu are o adresă, introduceți localitatea din care face parte"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <FaImage className="w-[14px] h-[14px]" />
                  Logo
                </FormLabel>
                <FormControl>
                  <Input className="hidden" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <UploadLogo setValue={form.setValue} />
          <FormField
            control={form.control}
            name="imagine_coperta"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <TfiImage className="w-[14px] h-[14px]" />
                  Imagine de copertă
                </FormLabel>
                <FormControl>
                  <Input className="hidden" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <UploadMainImage setValue={form.setValue} />
          <FormField
            control={form.control}
            name="galerie"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <TfiImage className="w-[14px] h-[14px]" />
                  Galerie
                </FormLabel>
                <FormControl>
                  <Input className="hidden" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <UploadGallery setValue={form.setValue} getValues={form.getValues} />
          <FormField
            control={form.control}
            name="telefon"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <BsFillTelephoneFill /> Telefon
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Numărul de telefon al bății sau al administratorului"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nume_administrator"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <RiContactsLine /> Numele administratorului
                </FormLabel>
                <FormControl>
                  <Input placeholder="Numele administratorului" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adresa_mail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <CiMail /> Adresă de email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Adresă email de contact" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="descriere_regulament"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <MdDescription className="w-[14px] h-[14px]" />
                  Descriere/Regulament
                </FormLabel>
                <FormControl>
                  <Input className="hidden" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LakeDescription setValue={form.setValue} />

          <div className="w-full flex justify-end">
            <Button type="submit" className="mt-10" disabled={isPending}>
              {isPending && (
                <Loader2 className="mr-2 animate-spin w-[16px] h-[16px]" />
              )}{" "}
              Adaugă baltă
            </Button>
          </div>
        </form>
      </Form>{" "}
    </div>
  );
};
