import Image from "next/image";

import ArrowUpIcon from "@/public/assets/shared/icon-arrow-up.svg";
import CommentsIcon from "@/public/assets/shared/icon-comments.svg";
import { Arrow } from "@radix-ui/react-select";

interface FeedbackItemProp {
  title: string;
  details: string;
  catogory: string;
  votes: number;
}

export const FeedbackItem = ({
  title,
  details,
  catogory,
  votes,
}: FeedbackItemProp) => {
  return (
    <div className="bg-white w-[20.438rem] h-[12.5rem] md:w-[43.063rem] md:h-[9.438rem] rounded-lg p-5 md:px-5 md:p-0">
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
        <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] md:w-[2.5rem] md:h-[3.313rem] rounded-[0.55rem] flex items-center md:flex-col md:gap-2 justify-center gap-3 cursor-pointer hover:bg-feedback_tag_card_hover">
          <Image src={ArrowUpIcon} alt="arrow up icon" />
          <p className="font-bold text-feedback_title">{votes}</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Image src={CommentsIcon} alt="comments icon" />
          <p className="font-bold text-feedback_title">0</p>
        </div>
      </div>
    </div>
  );
};
