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
import { Textarea } from "@/components/ui/textarea";
import { deleteFeedback, editFeedback } from "@/actions/feedback";
import { feedbackFormSchema } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Image from "next/image";

import ArrowLeftIcon from "@/public/assets/shared/icon-arrow-left.svg";
import EditFeedBackIcon from "@/public/assets/shared/icon-edit-feedback.svg";
import { GoBackButton } from "@/components/go-back-button";

interface FeedbackEditProp {
  id: string;
  title: string;
  detail: string;
  catogory: CategoryType;
}

export const FeedbackEdit = ({
  id,
  title,
  detail,
  catogory,
}: FeedbackEditProp) => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      title: title,
      detail: detail,
      catogory: catogory,
    },
  });

  const onSubmit = async (values: z.infer<typeof feedbackFormSchema>) => {
    const response = await editFeedback(id, values);
    if (response?.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    if (response?.success) {
      router.push("/");
    }
  };

  const onDelete = async () => {
    const response = await deleteFeedback(id);
    if (response?.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }

    if (response?.success) {
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen font-jost flex items-start justify-center">
      <div className="flex flex-col items-center w-full justify-center m-8">
        <GoBackButton />
        <div className="bg-white max-w-screen-sm md:w-[33.75rem] p-8 rounded-lg flex flex-col items-stretch justify-start mt-14">
          <Image
            className="mt-[-3.2rem] size-10"
            src={EditFeedBackIcon}
            alt="Edit feedback icon"
          />
          <h1 className="mt-6 mb-6 font-extrabold text-feedback_title">
            Editing '{title}'
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex flex-col  items-start justify-start">
                    <FormLabel className="font-extrabold text-feedback_title text-sm">
                      Feedback Title
                    </FormLabel>
                    <FormDescription>
                      Add a short, descriptive headline
                    </FormDescription>
                    <FormControl>
                      <Input
                        className=" md:w-[28.5rem] md:h-[3rem] bg-[#F7F8FD] border-0"
                        {...field}
                        placeholder="Like add x feature "
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="catogory"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start justify-start">
                    <FormLabel className="font-extrabold text-feedback_title text-sm">
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
                        <SelectTrigger className="md:w-[28.5rem] md:h-[3rem]  bg-[#F7F8FD] border-0 capitalize">
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
              <FormField
                control={form.control}
                name="detail"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start justify-start">
                    <FormLabel className="font-extrabold text-feedback_title text-sm">
                      Feedback Detail
                    </FormLabel>
                    <FormDescription>
                      Include any specific comments on what should be improved,
                      added, etc.
                    </FormDescription>
                    <FormControl>
                      <Textarea
                        className="md:w-[28.5rem] md:h-[3rem] border-0 bg-[#F7F8FD] "
                        {...field}
                        placeholder="Type your comments here"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-y-4 md:flex-row-reverse  md:items-center md:justify-between">
                <div className="flex flex-col gap-y-4 md:flex-row-reverse md:gap-4 md:items-center md:mr-5">
                  <Button
                    className="w-full md:w-[9rem] md:h-[2.75rem] bg-add_feedback_button hover:bg-add_feedback_button_hover rounded-lg"
                    type="submit"
                  >
                    Save Changes
                  </Button>
                  <Link href={"/"}>
                    <Button className="w-full bg-[#3A4374] hover:bg-[#505994] rounded-lg">
                      Cancel
                    </Button>
                  </Link>
                </div>
                <Button
                  onClick={() => onDelete()}
                  variant="destructive"
                  className="w-full rounded-lg md:w-[5.813rem] md:h-[2.75rem] hover:bg-delete_feedback_button_hover cursor-pointer"
                >
                  Delete
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};
