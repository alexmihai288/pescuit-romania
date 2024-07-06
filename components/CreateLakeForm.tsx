"use client";
import React from "react";
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
import { MapPin } from "lucide-react";
import { UploadLogo } from "./UploadLogo";
import { FaImage } from "react-icons/fa6";

const formSchema = z.object({
  nume_balta: z.string().min(2, {
    message: "Numele bălții trebuie să conțină cel putin 2 caractere.",
  }),
  adresa: z.string().min(3, {
    message: "Locația trebuie să conțină mai mult de 2 caractere",
  }),
  logo: z.string(),
});
export const CreateLakeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nume_balta: "",
      adresa: "",
      logo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                <FormDescription></FormDescription>
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
                <FormDescription></FormDescription>
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>{" "}
    </div>
  );
};
