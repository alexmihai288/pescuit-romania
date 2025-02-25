"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Loader2, MapPin } from "lucide-react";
import { TfiImage } from "react-icons/tfi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { MdDescription } from "react-icons/md";
import { useRouter } from "next/navigation";
import { UploadArticleGallery } from "./UploadArticleGallery";
import { RiPriceTag3Line } from "react-icons/ri";
import dynamic from "next/dynamic";
const ArticleDescription = dynamic(() => import("./ArticleDescription"), {
  ssr: false,
});
export const ArticleFormSchema = z.object({
  title: z.string().min(2, {
    message: "Titlul articolului trebuie să conțină cel putin 2 caractere.",
  }),
  adresa: z.string().min(3, {
    message: "Locația trebuie să conțină mai mult de 2 caractere",
  }),
  galerie: z.array(z.string()).min(1, {
    message: "Galeria trebuie să conțină cel puțin un element",
  }),
  telefon: z.string().min(3, {
    message: "Adăugați numărul de telefon al administratorului",
  }),
  infoArticol: z.string().min(3, {
    message: "Adăugați o descriere articolului",
  }),
  pret: z
    .string()
    .min(1, { message: "Adăugați prețul articolului" })
    .refine((value) => !isNaN(Number(value)), {
      message: "Prețul trebuie să fie un număr valid",
    }),
});
const CreateArticleForm = () => {
  const router = useRouter();
  const { mutate: createLake, isPending } = useMutation({
    mutationFn: async (articleInfo: z.infer<typeof ArticleFormSchema>) => {
      const { data } = await axios.post("/api/article", articleInfo);
      return data;
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  const form = useForm<z.infer<typeof ArticleFormSchema>>({
    resolver: zodResolver(ArticleFormSchema),
    defaultValues: {
      title: "",
      adresa: "",
      galerie: [],
      telefon: "",
      infoArticol: "",
      pret: "",
    },
  });

  function onSubmit(values: z.infer<typeof ArticleFormSchema>) {
    createLake(values);
  }

  return (
    <div className="bg-white my-20 shadow-[#047857] shadow-sm rounded-md w-full max-w-5xl container py-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <MdDriveFileRenameOutline /> Titlu articol
                </FormLabel>
                <FormControl>
                  <Input placeholder="Denumirea articolului dvs." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pret"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <RiPriceTag3Line /> Preț articol
                </FormLabel>
                <FormControl>
                  <Input placeholder="Prețul de vânzare" {...field} />
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
                    placeholder="Adresa unde se află articolul"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="galerie"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <TfiImage className="w-[14px] h-[14px]" />
                  Poze articol
                </FormLabel>
                <FormControl>
                  <Input className="hidden" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <UploadArticleGallery
            setValue={form.setValue}
            getValues={form.getValues}
          />

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
                    placeholder="Numărul de telefon al vânzătorului"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="infoArticol"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 font-bold">
                  <MdDescription className="w-[14px] h-[14px]" />
                  Descriere articol
                </FormLabel>
                <FormControl>
                  <Input className="hidden" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ArticleDescription setValue={form.setValue} />

          <div className="w-full flex justify-end">
            <Button type="submit" className="mt-10" disabled={isPending}>
              {isPending && (
                <Loader2 className="mr-2 animate-spin w-[16px] h-[16px]" />
              )}{" "}
              Adaugă articol
            </Button>
          </div>
        </form>
      </Form>{" "}
    </div>
  );
};

export default CreateArticleForm;
