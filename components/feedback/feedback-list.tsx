import { db } from "@/lib/db";
import { Feedback } from "@prisma/client";
import { FeedbackItem } from "@/components/feedback/feedback-item";

import Link from "next/link";
import Image from "next/image";

import DetectiveIcon from "@/public/assets/suggestions/illustration-empty.svg";

export const FeedbackList = async () => {
  const feedbacks = await db.feedback.findMany();

  return feedbacks.length === 0 ? (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white w-[20.438rem] h-[28.75rem] md:w-[43.063rem] md:h-[37.5rem] rounded-lg flex flex-col items-center justify-center text-center gap-5 md:gap-6">
        <Image src={DetectiveIcon} alt="Detective searching for something" />
        <h1 className="mt-6 font-extrabold text-feedback_title">
          There is no feedback yet.
        </h1>
        <p className="text-sm text-feedback_paragraph md:max-w-[45ch]">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Link
          href="/create"
          className="flex items-center text-white text-sm justify-center bg-add_feedback_button w-[8.375rem] h-[2.5rem] cursor-pointer rounded-xl font-semibold hover:bg-add_feedback_button_hover"
        >
          + Add Feedback
        </Link>
      </div>
    </div>
  ) : (
    feedbacks.map((feedback: Feedback) => (
      <FeedbackItem
        key={feedback.id}
        title={feedback.title}
        details={feedback.detail}
        catogory={feedback.category}
        votes={feedback.upvotes}
      ></FeedbackItem>
    ))
  );
};
