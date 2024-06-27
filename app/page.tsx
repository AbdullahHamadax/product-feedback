import { FeedbackItem } from "@/components/feedback-item";
import { Sidebar } from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { db } from "@/lib/db";
import { Feedback } from "@prisma/client";

export default async function Home() {
  const feedbacks = await db.feedback.findMany();

  return (
    <main className="min-h-screen bg-background_body font-jost ">
      <div className="flex items-center justify-between h-[4.5rem] bg-cover bg-[url('/assets/suggestions/mobile/background-header.png')] p-4">
        <h1 className="font-bold text-white text-md">
          Frontend Mentor <br />
          <span className="font-normal text-header_faded">Feedback Board</span>
        </h1>
        <Sidebar />
      </div>
      <div className="bg-suggestions_bar w-screen h-[3.5rem] flex items-center text-sm justify-between p-4 text-white">
        <p className="flex items-center gap-2">
          Sort by :
          <span className="flex items-center justify-center gap-2 font-semibold">
            Most Upvotes
            <img
              src="assets/shared/icon-arrow-down.svg"
              alt="arrow down icon"
            />
          </span>
        </p>
        <button className="bg-add_feedback_button w-[8.375rem] h-[2.5rem] cursor-pointer rounded-xl font-semibold hover:bg-add_feedback_button_hover">
          + Add Feedback
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-7">
        {feedbacks.length === 0 ? (
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
            ></FeedbackItem>
          ))
        )}
      </div>
    </main>
  );
}