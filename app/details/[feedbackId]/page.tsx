import { FeedbackItem } from "@/components/feedback/feedback-item";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface FeedbackIdProp {
  params: {
    feedbackId: string;
  };
}

export default async function feedbackDetails({ params }: FeedbackIdProp) {
  const feedback = await db.feedback.findUnique({
    where: {
      id: params.feedbackId,
    },
  });

  if (!feedback) redirect("/");

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between p-1 mt-3">
        <div className="flex items-center gap-4">
          <img
            src="../assets/shared/icon-arrow-left.svg"
            alt="arrow left icon"
          />
          <p className="font-bold text-feedback_paragraph hover:underline">
            Go Back
          </p>
        </div>
        <button className="bg-feedback_tag w-[7.438rem] h-[2.5rem] text-white font-bold rounded-xl text-sm hover:bg-edit_feedback_button_hover">
          Edit Feedback
        </button>
      </div>

      <div className="flex flex-col items-center gap-6">
        <FeedbackItem
          title={feedback.title}
          details={feedback.detail}
          catogory={feedback.category}
          votes={feedback.upvotes}
        ></FeedbackItem>

        <div className="bg-white w-[20.438rem] p-5 h-[52.313rem] rounded-lg">
          <p className="text-lg font-bold text-feedback_title">4 Comments</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 mt-5">
              <img
                src="/assets/user-images/image-elijah.jpg"
                alt="Elijah Moss"
                className="w-[2.5rem] h-[2.5rem] rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-bold text-feedback_title">Elijah Moss</p>
                <p className="font-normal text-feedback_paragraph">
                  @hexagon.bestagon
                </p>
              </div>
            </div>
            <button className="font-bold text-feedback_tag">Reply</button>
          </div>
          <p className="mt-3 text-sm font-normal text-feedback_paragraph">
            Also, please allow styles to be applied based on system preferences.
            I would love to be able to browse Frontend Mentor in the evening
            after my device’s dark mode turns on without the bright background
            it currently has.
          </p>
          <hr className="mt-5" />
          <div className="flex items-center justify-between">
            <div className="flex gap-4 mt-5">
              <img
                src="../assets/user-images/image-james.jpg"
                alt="James Skinner"
                className="w-[2.5rem] h-[2.5rem] rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-bold text-feedback_title">James Skinner</p>
                <p className="font-normal text-feedback_paragraph">
                  @hummingbird1
                </p>
              </div>
            </div>
            <button className="font-bold text-feedback_tag">Reply</button>
          </div>
          <p className="mt-3 text-sm font-normal text-feedback_paragraph">
            Second this! I do a lot of late night coding and reading. Adding a
            dark theme can be great for preventing eye strain and the headaches
            that result. It’s also quite a trend with modern apps and apparently
            saves battery life.
          </p>
          <div className="flex items-center justify-between ml-6">
            <div className="flex gap-4 mt-5">
              <img
                src="../assets/user-images/image-anne.jpg"
                alt="Anne Valentine"
                className="w-[2.5rem] h-[2.5rem] rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-bold text-feedback_title">Anne Valentine</p>
                <p className="font-normal text-feedback_paragraph">
                  @annev1990
                </p>
              </div>
            </div>
            <button className="font-bold text-feedback_tag">Reply</button>
          </div>

          <p className="mt-3 ml-6 text-sm font-normal text-feedback_paragraph">
            <span className="font-bold text-add_feedback_button">
              @hummingbird1
            </span>
            While waiting for dark mode, there are browser extensions that will
            also do the job. Search for "dark theme” followed by your browser.
            There might be a need to turn off the extension for sites with
            naturally black backgrounds though.
          </p>
          <div className="flex items-center justify-between ml-6">
            <div className="flex gap-4 mt-5">
              <img
                src="../assets/user-images/image-ryan.jpg"
                alt="Ryan Welles "
                className="w-[2.5rem] h-[2.5rem] rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-bold text-feedback_title">Ryan Welles</p>
                <p className="font-normal text-feedback_paragraph">
                  @voyager.344
                </p>
              </div>
            </div>
            <button className="font-bold text-feedback_tag">Reply</button>
          </div>

          <p className="mt-3 ml-6 text-sm font-normal text-feedback_paragraph">
            <span className="font-bold text-add_feedback_button">
              @annev1990
            </span>
            Good point! Using any kind of style extension is great and can be
            highly customizable, like the ability to change contrast and
            brightness. I'd prefer not to use one of such extensions, however,
            for security and privacy reasons.
          </p>
        </div>

        <div className="bg-white w-[20.438rem] h-[14.625rem] rounded-lg flex flex-col p-5 gap-5">
          <p className="text-lg font-bold text-feedback_title">Add Comment</p>
          <div className="flex items-center justify-center">
            <input
              type="text"
              className="bg-background_body w-[17.438rem] h-[5rem] rounded-lg text-center"
              placeholder="Type your comment here"
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-feedback_paragraph">250 Characters left</p>
            <button className="bg-add_feedback_button w-[7.438rem] h-[2.5rem] rounded-lg text-white text-center font-bold text-sm hover:bg-add_feedback_button_hover">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
