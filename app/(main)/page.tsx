import { FeedbackList } from "@/components/feedback/feedback-list";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";

import Image from "next/image";

import ArrowDownIcon from "@/public/assets/shared/icon-arrow-down-white.svg";
import SuggestionsIcon from "@/public/assets/suggestions/icon-suggestions.svg";
import GradientBackgroundTablet from "@/public/assets/suggestions/tablet/background-header.png";
import GradientBackgroundMobile from "@/public/assets/suggestions/mobile/background-header.png";
import { initialProfile } from "@/lib/create-profile";

export default async function Home() { 
  const profile = await initialProfile();

  return (
    <main className="relative md:flex md:flex-col md:items-center min-h-screen w-screen md:p-6 bg-background_body font-jost  ">
      <Image
        src={GradientBackgroundMobile}
        alt="Gradient background"
        className="w-screen md:hidden h-[4.5rem] absolute "
      />
      <div className="md:flex md:gap-2 hidden">
        <Image
          src={GradientBackgroundTablet}
          alt="Gradient background"
          className="rounded-xl hidden md:block"
        />
        <div className="bg-white w-[13.938rem] h-[11.125rem]  rounded-lg ">
          <div className="flex items-center justify-between p-6  ">
            <h1 className="text-xl font-bold text-feedback_title">Roadmap</h1>
            <a href="#" className="font-bold underline text-feedback_tag">
              View
            </a>
          </div>
          <div className="flex items-center justify-between">
            <ul className="list-disc flex flex-col justify-center items-start ml-[2.8rem] text-feedback_paragraph">
              <li className="marker:text-list_orange">
                <p>Planned</p>
              </li>
              <li className="marker:text-add_feedback_button">
                <p>In-Progress</p>
              </li>
              <li className="marker:text-list_cyan">
                <p>Live</p>
              </li>
            </ul>
            <div className="flex flex-col mr-[1.5rem] font-bold text-feedback_paragraph">
              <p>2</p>
              <p>3</p>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between h-[4.5rem] p-4 ">
        <h1 className="font-bold text-white text-md">
          Frontend Mentor <br />
          <span className="font-normal text-header_faded">Feedback Board</span>
        </h1>
        <Sidebar />
      </div>
      <div className="bg-suggestions_bar w-screen h-[3.5rem] md:rounded-lg md:w-[43.063rem] md:h-[4.5rem] lg:w-[51.563rem] flex items-center text-sm justify-between p-4 text-white">
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
        className="flex flex-col items-center justify-center gap-4 p-7 "
        id="mainview"
      >
        <FeedbackList />
      </div>
    </main>
  );
}
