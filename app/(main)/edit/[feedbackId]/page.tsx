import { FeedbackEdit } from "@/components/feedback/feedback-edit";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface FeedbackIdProp {
  params: {
    feedbackId: string;
  };
}

export default async function editFeed({ params }: FeedbackIdProp) {
  const feedback = await db.feedback.findUnique({
    where: {
      id: params.feedbackId,
    },
  });

  if (!feedback) {
    redirect("/");
  }

  return (
    <FeedbackEdit
      id={params.feedbackId}
      title={feedback.title}
      detail={feedback.detail}
      catogory={feedback.category}
    />
  );
}
