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
        <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem]  flex items-center justify-center gap-3 cursor-pointer hover:bg-feedback_tag_card_hover">
          <img src="assets/shared/icon-arrow-up.svg" alt="arrow up icon" />
          <p className="font-bold text-feedback_title">{votes}</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <img src="assets/shared/icon-comments.svg" alt="comments icon" />
          <p className="font-bold text-feedback_title">0</p>
        </div>
      </div>
    </div>
  );
};
