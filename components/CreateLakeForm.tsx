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

const formSchema = z.object({
  nume_baltă: z.string().min(2, {
    message: "Numele bății trebuie să conțină cel putin 2 caractere.",
  }),
});
export const CreateLakeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nume_baltă: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-white mt-20 shadow-indigo-500/90 shadow-sm rounded-md w-full max-w-5xl container pt-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="nume_baltă"
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>{" "}
    </div>
  );
};
