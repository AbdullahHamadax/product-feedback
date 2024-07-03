"use server";

import { db } from "@/lib/db";
import { feedbackFormSchema } from "@/lib/schemas";
import { currentUser } from "@clerk/nextjs/server";
import { error } from "console";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createFeedback(formData : z.infer<typeof feedbackFormSchema>) {

  const validatedForm = feedbackFormSchema.safeParse(formData)
  
  if(!validatedForm.success){

    let errorMsg = ""

    validatedForm.error.issues.forEach((issue) => {
      errorMsg += issue.path[0] + ": " + issue.message + "."
    })

    return {error : errorMsg}
  }


  try{
    const result = await db.feedback.create({
      data:{
        title : validatedForm.data.title,
        detail: validatedForm.data.detail,
        category: validatedForm.data.catogory,
        userId: "0"
      }
    })
    // redirect('/home')

    return {success : "Feedback added successfully"}

  } catch(error) {
    console.log(error)
    return {error : "Internal server error"}

  }

}

export async function editFeedback(id : string, formData : z.infer<typeof feedbackFormSchema>) {

  const validatedForm = feedbackFormSchema.safeParse(formData)
  
  if(!validatedForm.success){

    let errorMsg = ""

    validatedForm.error.issues.forEach((issue) => {
      errorMsg += issue.path[0] + ": " + issue.message + "."
    })

    return {error : errorMsg}
  }


  try{
    const result = await db.feedback.update({
      where: {
        id: id
      },
      data:{
        title : validatedForm.data.title,
        detail: validatedForm.data.detail,
        category: validatedForm.data.catogory,
      }
    })
    // redirect('/home')

    return {success : "Feedback updated successfully"}

  } catch(error) {
    console.log(error)
    return {error : "Internal server error"}

  }

}

export async function deleteFeedback(id : string) {


  try{
    const result = await db.feedback.delete({
      where: {
        id: id
      },
    })
    // redirect('/home')

    return {success : "Feedback deleted successfully"}

  } catch(error) {
    console.log(error)
    return {error : "Internal server error"}

  }

}

export async function upvoteFeedback(id : string) {
  
  const user = await currentUser();

  if(!user)
    return {error : "user doesn't exist"}


  try{

    const profile = await db.profile.findUnique({
      where: {
          userId: user?.id
      }
      });

    if(!profile)
      return {error : "unauthorized"}

    const result = await db.$transaction(async (tx) => {

     
      const existingUpvote = await tx.upvote.findUnique({
        where: {
          profileId_feedbackId: {
            profileId: profile.id,
            feedbackId: id,
          },
        },
      });

      if(existingUpvote) {
        await tx.upvote.delete({
          where: {
            id: existingUpvote.id,
          },
        });

        const updatedFeedback = await tx.feedback.update({
          where: {
            id: id,
          },
          data: {
            upvotes: {
              decrement: 1,
            },
          },
        });
        return {votes : updatedFeedback.upvotes, upvoted : false};
      }
      else {
        await tx.upvote.create({
          data: {
            profileId: profile.id,
            feedbackId: id,
          },
        });

        const updatedFeedback = await tx.feedback.update({
          where: {
            id: id,
          },
          data: {
            upvotes: {
              increment: 1,
            },
          },
        });

        return {votes : updatedFeedback.upvotes, upvoted : true}
      }

    })

    return {success : "Feedback deleted successfully", votes : result}

  } catch(error) {
    console.log(error)
    return {error : "Internal server error"}
  }

}