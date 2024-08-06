import { FeedbackList } from "@/components/feedback/feedback-list";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";

import Image from "next/image";

import ArrowDownIcon from "@/public/assets/shared/icon-arrow-down-white.svg";
import SuggestionsIcon from "@/public/assets/suggestions/icon-suggestions.svg";
import GradientBackgroundTablet from "@/public/assets/suggestions/tablet/background-header.png";
import GradientBackgroundMobile from "@/public/assets/suggestions/mobile/background-header.png";
import GradientBackgroundDesktop from "@/public/assets/suggestions/desktop/background-header.png";

import HamburgerMenuIcon from "@/public/assets/shared/mobile/icon-hamburger.svg";
import HamburgerMenuCloseIcon from "@/public/assets/shared/mobile/icon-close.svg";

import { initialProfile } from "@/lib/create-profile";

export default async function Home() { 
  const profile = await initialProfile();

  return (
    <main className="relative md:flex md:flex-col md:items-center  min-h-screen w-screen md:p-6 bg-background_body font-jost">
      <div
        className="md:hidden bg-cover bg-[url('/assets/suggestions/mobile/background-header.png')]
"
      >
        <div className="flex items-center justify-between h-[4.5rem] p-4  ">
          <h1 className="font-bold text-white text-md">
            Frontend Mentor <br />
            <span className="font-normal text-header_faded">
              Feedback Board
            </span>
          </h1>
          <Image
            src={HamburgerMenuIcon}
            alt="Hamburger Menu Icon"
            className=" w-[1.25rem]  h-[1.063rem] "
          ></Image>
        </div>
      </div>
      <div className="md:flex md:flex-col md:gap-10 lg:flex-row lg:gap-6">
        <div className="md:flex md:gap-3 hidden lg:flex-col lg:gap-6">
          <div>
            <h1 className="absolute flex flex-col p-5 mt-[5.7rem] font-bold text-white text-md lg:mt-[3rem] lg:text-lg">
              Frontend Mentor <br />
              <span className="font-medium text-header_faded lg:text-[0.94rem]">
                Feedback Board
              </span>
            </h1>
            <Image
              src={GradientBackgroundTablet}
              alt="Gradient background tablet"
              className="rounded-xl hidden md:block lg:hidden"
            />
            <Image
              src={GradientBackgroundDesktop}
              alt="Gradient background desktop"
              className="rounded-xl hidden lg:block"
            />
          </div>
          <div className="bg-white w-[13.938rem] h-[11.125rem] rounded-lg text-center p-6 flex flex-wrap gap-2 lg:w-[15.938rem] lg:h-[10.375rem] ">
            <div className="w-[3rem] h-[1.875rem] bg-feedback_tag_card rounded-xl text-feedback_tag hover:bg-feedback_tag_card_hover cursor-pointer font-bold flex items-center justify-center  ">
              All
            </div>
            <div className="w-[3rem] h-[1.875rem] bg-feedback_tag_card rounded-xl text-feedback_tag hover:bg-feedback_tag_card_hover cursor-pointer  font-bold flex items-center justify-center  ">
              UI
            </div>
            <div className="w-[3rem] h-[1.875rem] bg-feedback_tag_card rounded-xl text-feedback_tag hover:bg-feedback_tag_card_hover cursor-pointer  font-bold flex items-center justify-center  ">
              UX
            </div>
            <div className="w-[6.938rem] h-[1.875rem] bg-feedback_tag_card rounded-xl text-feedback_tag hover:bg-feedback_tag_card_hover cursor-pointer font-bold flex items-center justify-center  ">
              Enhancement
            </div>
            <div className="w-[3.5rem] h-[1.875rem] bg-feedback_tag_card rounded-xl text-feedback_tag hover:bg-feedback_tag_card_hover cursor-pointer  font-bold flex items-center justify-center  ">
              Bug
            </div>
            <div className="w-[4.813rem] h-[1.875rem] bg-feedback_tag_card rounded-xl text-feedback_tag hover:bg-feedback_tag_card_hover cursor-pointer  font-bold flex items-center justify-center  ">
              Feature
            </div>
          </div>
          <div className="bg-white w-[13.938rem] h-[11.125rem]  rounded-lg lg:w-[15.938rem] ">
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
        {/* <div className="flex items-center justify-between h-[4.5rem] p-4 md:hidden ">
        <h1 className="font-bold text-white text-md">
          Frontend Mentor <br />
          <span className="font-normal text-header_faded">Feedback Board</span>
        </h1>
        <Sidebar />
      </div> */}
        <div className="lg:flex lg:flex-col ">
          <div className="bg-suggestions_bar w-screen h-[3.5rem] md:rounded-lg md:w-[43.063rem] md:h-[4.5rem] lg:w-[51.563rem] flex items-center text-sm justify-between p-4 text-white">
            <div className="flex gap-5 items-center">
              <Image
                src={SuggestionsIcon}
                alt="Suggestion icon"
                className="block"
              />
              <p className="font-bold block">0 suggestions</p>
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
        </div>
      </div>
    </main>
  );
}
