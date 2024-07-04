"use client";

import Image from "next/image";

import ArrowUpIcon from "@/public/assets/shared/icon-arrow-up.svg";
import CommentsIcon from "@/public/assets/shared/icon-comments.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { upvoteFeedback } from "@/actions/feedback";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { UpvoteButton } from "./upvote-button";

interface FeedbackItemProp {
  id: string;
  title: string;
  details: string;
  catogory: string;
  votes: number;
  votedOn: boolean;
}

export const FeedbackItem = ({
  id,
  title,
  details,
  catogory,
  votes,
  votedOn,
}: FeedbackItemProp) => {
  const [upvotes, setUpvotes] = useState(votes);
  const [votedOnState, setVotedOnState] = useState(votedOn);

  const [isDesktop, setDesktop] = useState(false);
  const { toast } = useToast();

  const updateWindow = () => setDesktop(window.innerWidth > 767);

  useEffect(() => {
    window.addEventListener("resize", updateWindow);
    return () => window.removeEventListener("resize", updateWindow);
  });

  const upvote = async () => {
    if (votedOnState) setUpvotes(upvotes - 1);
    else setUpvotes(upvotes + 1);

    setVotedOnState(!votedOnState);

    const response = await upvoteFeedback(id);
    if (response?.error) {
      console.log(response.error);

      toast({
        variant: "destructive",
        title: "Error",
        description: response.error,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }

    if (response?.success) {
      console.log(response.votes);
      // setUpvotes(response.votes.votes);
      // setVotedOnState(response.votes.upvoted);
    }
  };

  if (isDesktop)
    return (
      <div className="flex flex-row justify-start items-center h-42 bg-white rounded-lg p-5 gap-x-4 md:w-[43.063rem] md:h-[9.438rem]">
        <UpvoteButton
          votes={upvotes}
          votedOn={votedOnState}
          onUpvote={upvote}
        ></UpvoteButton>

        {/* <div
          onClick={() => upvote()}
          className="bg-feedback_upvote p-2 rounded-[0.55rem] h-16 flex items-center justify-center cursor-pointer hover:bg-feedback_tag_card_hover"
        >
          <Image src={ArrowUpIcon} alt="arrow up icon" />
          <p className="font-bold text-feedback_title">{upvotes}</p>
        </div> */}

        <div className="flex flex-col gap-2 ">
          <h1 className="font-bold text-feedback_title">{title}</h1>
          <p className="text-feedback_paragraph text-sm font-normal w-[40ch]">
            {details}
          </p>

          <div className="bg-background_body w-[6.938rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
            <p className="text-sm font-bold text-feedback_tag capitalize">
              {catogory.toLocaleLowerCase()}
            </p>
          </div>
        </div>
        <Link href={"/details/" + id}>
          <div className="flex items-center justify-center gap-3">
            <Image src={CommentsIcon} alt="comments icon" />
            <p className="font-bold text-feedback_title">0</p>
          </div>
        </Link>
      </div>
    );
  else
    return (
      <div className="bg-white w-[20.438rem] h-[12.5rem] rounded-lg p-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-feedback_title">{title}</h1>
          <p className="text-feedback_paragraph text-sm font-normal w-[40ch]">
            {details}
          </p>

          <div className="bg-background_body w-[6.938rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
            <p className="text-sm font-bold text-feedback_tag capitalize">
              {catogory.toLocaleLowerCase()}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <UpvoteButton
            votes={upvotes}
            votedOn={votedOnState}
            onUpvote={upvote}
          ></UpvoteButton>

          <Link href={"/details/" + id}>
            <div className="flex items-center justify-center gap-3">
              <Image src={CommentsIcon} alt="comments icon" />
              <p className="font-bold text-feedback_title">0</p>
            </div>
          </Link>
        </div>
      </div>
    );
};
