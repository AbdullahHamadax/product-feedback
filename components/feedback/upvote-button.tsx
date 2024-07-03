"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowUpIcon from "@/public/assets/shared/icon-arrow-up.svg";

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
      className={`h-16 md:w-[4.313rem] md:h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer ${
        votedOn
          ? "bg-blue-500"
          : "bg-feedback_upvote hover:bg-feedback_tag_card_hover"
      }`}
    >
      <Image src={ArrowUpIcon} alt="arrow up icon" />
      <p className="font-bold text-feedback_title">{votes}</p>
    </div>
  );
};
