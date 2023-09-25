"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Server name must be at least 3 characters." })
    .max(30, { message: "Server name must be less than 30 characters." }),
  imageUrl: z.string().min(1, { message: "Server image is required" }),
});

export const InitialModal = ({ name }: { name?: string }) => {
  // hydration error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  if (!isMounted) return null;

  return (
    <Dialog defaultOpen>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
        <UserButton afterSignOutUrl="/" />
        <span>{name}</span>
        <div className="flex gap-2">
          <DialogTrigger asChild>
            <Button variant="outline">Create Your First Server</Button>
          </DialogTrigger>
          <ModeToggle />
        </div>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Your Server</DialogTitle>
          <DialogDescription>
            Give your server an identity with a name and an image.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Server Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Create</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
