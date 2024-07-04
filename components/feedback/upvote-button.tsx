"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowUpIcon from "@/public/assets/shared/icon-arrow-up.svg";
import ArrowUpIconWhite from "@/public/assets/shared/icon-arrow-up-white.svg";

interface UpvoteButtonProp {
  votes: number;
  votedOn: boolean;
  onUpvote: () => void;
}

export const UpvoteButton = ({
  votes,
  votedOn,
  onUpvote,
}: UpvoteButtonProp) => {
  const handleUpvote = () => {
    onUpvote();
  };

  return (
    <div
      onClick={handleUpvote}
      className={`w-[4.313rem] h-[2rem] md:w-[2.5rem] md:h-[3.313rem] text-feedback_title rounded-[0.55rem] md:flex-col md:gap-1 flex items-center justify-center gap-3 cursor-pointer ${
        votedOn
          ? "bg-feedback_tag text-white"
          : "bg-feedback_upvote hover:bg-feedback_tag_card_hover "
      }`}
    >
      <Image
        src={votedOn ? ArrowUpIconWhite : ArrowUpIcon}
        alt="arrow up icon"
      />
      <p className="font-bold ">{votes}</p>
    </div>
  );
};
