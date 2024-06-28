import { FeedbackList } from "@/components/feedback/feedback-list";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen font-jost">
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
        <Link
          href="/create"
          className="flex items-center justify-center bg-add_feedback_button w-[8.375rem] h-[2.5rem] cursor-pointer rounded-xl font-semibold hover:bg-add_feedback_button_hover"
        >
          + Add Feedback
        </Link>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-4 p-7"
        id="mainview"
      >
        <FeedbackList />
      </div>
    </main>
  );
}
