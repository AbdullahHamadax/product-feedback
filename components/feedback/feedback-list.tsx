import { db } from "@/lib/db";
import { Feedback } from "@prisma/client";
import { FeedbackItem } from "@/components/feedback/feedback-item";

export const FeedbackList = async () => {
  const feedbacks = await db.feedback.findMany();

  return feedbacks.length === 0 ? (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white w-[20.438rem] h-[28.75rem] flex flex-col items-center justify-center text-center gap-5">
        <img
          src="assets/suggestions/illustration-empty.svg"
          alt="detective searching for something"
        />
        <h1 className="mt-6 font-extrabold text-feedback_title">
          There is no feedback yet.
        </h1>
        <p className="text-sm text-feedback_paragraph">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <button className="bg-add_feedback_button w-[8.375rem] h-[2.5rem] rounded-xl font-semibold text-white text-sm hover:bg-add_feedback_button_hover">
          + Add Feedback
        </button>
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
