"use server";

import { db } from "@/lib/db";
import { feedbackFormSchema } from "@/lib/types";
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