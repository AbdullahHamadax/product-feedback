"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategoryType } from "@prisma/client";
import { useForm } from "react-hook-form";
import { object, z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  title: z.string().min(4).max(128),
  detail: z.string().max(250),
  catogory: z.nativeEnum(CategoryType),
});

export default function addFeed() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      detail: "",
      catogory: CategoryType.FEATURE,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <main className="min-h-screen bg-background_body font-jost flex items-start justify-center">
      <div className="flex flex-col items-center w-full justify-center m-8">
        <div className="bg-white w-full p-4 rounded-lg flex flex-col items-stretch justify-start">
          <h1 className="mt-6 font-extrabold text-feedback_title">
            Create New Feedback
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex flex-col  items-start justify-start">
                    <FormLabel className="mt-6 font-extrabold text-feedback_title text-sm">
                      Feedback Title
                    </FormLabel>
                    <FormDescription>
                      Add a short, descriptive headline
                    </FormDescription>
                    <FormControl>
                      <Input className="w-full border-0" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="catogory"
                render={({ field }) => (
                  <FormItem className="flex flex-col  items-start justify-start">
                    <FormLabel className="mt-6 font-extrabold text-feedback_title text-sm">
                      Category
                    </FormLabel>
                    <FormDescription>
                      Choose a category for your feedback
                    </FormDescription>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full bg-[#F7F8FD] border-0 capitalize">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(CategoryType).map((catogory) => (
                            <SelectItem
                              key={catogory}
                              value={catogory}
                              className="capitalize"
                            >
                              {catogory.toLocaleLowerCase()}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
