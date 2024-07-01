import { FeedbackList } from "@/components/feedback/feedback-list";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";

import Image from "next/image";

import ArrowDownIcon from "@/public/assets/shared/icon-arrow-down-white.svg";
import SuggestionsIcon from "@/public/assets/suggestions/icon-suggestions.svg";
import { initialProfile } from "@/lib/create-profile";

export default async function Home() {
  const profile = await initialProfile();

  return (
    <main className="md:flex md:flex-col md:items-center min-h-screen w-screen md:p-6 bg-background_body font-jost ">
      <div className="flex items-center justify-between bg-cover bg-[url('/assets/suggestions/mobile/background-header.png')] h-[4.5rem] p-4">
        <h1 className="font-bold text-white text-md">
          Frontend Mentor <br />
          <span className="font-normal text-header_faded">Feedback Board</span>
        </h1>
        <Sidebar />
      </div>
      <div className="bg-suggestions_bar w-screen h-[3.5rem] md:rounded-lg md:w-[43.063rem] md:h-[4.5rem] flex items-center text-sm justify-between p-4 text-white">
        <div className="flex gap-5 items-center">
          <Image
            src={SuggestionsIcon}
            alt="Suggestion icon"
            className="hidden md:block"
          />
          <p className="font-bold hidden md:block">0 suggestions</p>
          <p className="flex items-center gap-2 md:mx-10 ">
            Sort by :
            <span className="flex items-center justify-center gap-2 font-semibold">
              Most Upvotes
              <Image src={ArrowDownIcon} alt="arrow down icon" />
            </span>
          </p>
        </div>
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
