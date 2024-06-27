import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <main className="min-h-screen bg-background_body font-jost">
      <div className="flex items-center justify-between h-[4.5rem] bg-cover bg-[url('/assets/suggestions/mobile/background-header.png')] p-4">
        <h1 className="text-white font-bold text-md">
          Frontend Mentor <br />
          <span className="text-header_faded font-normal">Feedback Board</span>
        </h1>
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <img
                src="assets/shared/mobile/icon-hamburger.svg"
                alt="hamburger menu icon"
                className="w-[1.25rem] h-[1.063rem] cursor-pointer"
              />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-background_body">
            <div className=" w-[16.938rem] h-[37.188rem] gap-7 absolute right-0 top-[4.5rem] flex flex-col items-center justify-center">
              <div className="bg-white w-[13.938rem] h-[11.125rem] rounded-lg flex flex-wrap gap-3 p-5 text-center">
                <button className="bg-background_body w-[3rem] h-[1.875rem] rounded-xl">
                  <p className="text-feedback_tag font-bold">All</p>
                </button>
                <button className="bg-background_body w-[3rem] h-[1.875rem] rounded-xl">
                  <p className="text-feedback_tag font-bold">UI</p>
                </button>
                <button className="bg-background_body w-[3rem] h-[1.875rem] rounded-xl">
                  <p className="text-feedback_tag font-bold">UX</p>
                </button>
                <button className="bg-background_body w-[6.938rem] h-[1.875rem] rounded-xl">
                  <p className="text-feedback_tag font-bold">Enhancement</p>
                </button>
                <button className="bg-background_body w-[3.5rem] h-[1.875rem] rounded-xl">
                  <p className="text-feedback_tag font-bold">Bug</p>
                </button>
                <button className="bg-background_body w-[4.813rem] h-[1.875rem] rounded-xl">
                  <p className="text-feedback_tag font-bold">Feature</p>
                </button>
              </div>
              <div className="bg-white w-[13.938rem] h-[11.125rem] rounded-lg">
                <div className="flex p-6 justify-between items-center">
                  <h1 className="text-feedback_title font-bold text-xl">
                    Roadmap
                  </h1>
                  <a href="#" className="text-feedback_tag underline font-bold">
                    View
                  </a>
                </div>
                <div className="flex justify-between items-center">
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
          </SheetContent>
        </Sheet>
      </div>
      <div className="bg-suggestions_bar w-screen h-[3.5rem] flex items-center text-sm justify-between p-4 text-white">
        <p className="flex items-center gap-2">
          Sort by :
          <span className="font-semibold flex items-center justify-center gap-2">
            Most Upvotes
            <img
              src="assets/shared/icon-arrow-down.svg"
              alt="arrow down icon"
            />
          </span>
        </p>
        <button className="bg-add_feedback_button w-[8.375rem] h-[2.5rem] cursor-pointer rounded-xl font-semibold hover:bg-add_feedback_button_hover">
          + Add Feedback
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-7">
        <div className="bg-white w-[20.438rem] h-[12.5rem] rounded-lg p-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-feedback_title font-bold">
              Add tags for solutions
            </h1>
            <p className="text-feedback_paragraph text-sm font-normal w-[40ch]">
              Easier to search for solutions based on a specific stack.
            </p>

            <div className="bg-background-body w-[6.938rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
              <p className="text-feedback_tag font-bold text-sm">Enhancement</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] cursor-pointer hover:bg-background-body_hover flex items-center justify-center gap-3">
              <img src="assets/shared/icon-arrow-up.svg" alt="arrow up icon" />
              <p className="text-feedback_title font-bold">112</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src="assets/shared/icon-comments.svg" alt="comments icon" />
              <p className="text-feedback_title font-bold">2</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[20.438rem] h-[12.5rem] rounded-lg p-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-feedback_title font-bold">
              Add a dark theme option
            </h1>
            <p className="text-feedback_paragraph text-sm font-normal w-[35ch]">
              It would help people with light sensitivities and who prefer dark
              mode.
            </p>

            <div className="bg-background-body w-[4.813rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
              <p className="text-feedback_tag font-bold text-sm">Feature</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-background-body_hover">
              <img src="assets/shared/icon-arrow-up.svg" alt="arrow up icon" />
              <p className="text-feedback_title font-bold">99</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src="assets/shared/icon-comments.svg" alt="comments icon" />
              <p className="text-feedback_title font-bold">4</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[20.438rem] h-[12.5rem] rounded-lg p-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-feedback_title font-bold">
              Q&A within the challenge hubs
            </h1>
            <p className="text-feedback_paragraph text-sm font-normal w-[40ch]">
              Challenge-specific Q&A would make for easy reference.
            </p>

            <div className="bg-background-body w-[4.813rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
              <p className="text-feedback_tag font-bold text-sm">Feature</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-background-body_hover">
              <img src="assets/shared/icon-arrow-up.svg" alt="arrow up icon" />
              <p className="text-feedback_title font-bold">65</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src="assets/shared/icon-comments.svg" alt="comments icon" />
              <p className="text-feedback_title font-bold">2</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[20.438rem] h-[12.5rem] rounded-lg p-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-feedback_title font-bold">
              Allow image/video upload
            </h1>
            <p className="text-feedback_paragraph text-sm font-normal w-[37ch]">
              Images and screencasts can enhance comments on solutions.
            </p>

            <div className="bg-background-body w-[6.938rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
              <p className="text-feedback_tag font-bold text-sm">Enhancement</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-background-body_hover">
              <img src="assets/shared/icon-arrow-up.svg" alt="arrow up icon" />
              <p className="text-feedback_title font-bold">51</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src="assets/shared/icon-comments.svg" alt="comments icon" />
              <p className="text-feedback_title font-bold">2</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[20.438rem] h-[12.5rem] rounded-lg p-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-feedback_title font-bold">
              Ability to follow others
            </h1>
            <p className="text-feedback_paragraph text-sm font-normal w-[35ch]">
              Stay updated on comments and solutions other people post.
            </p>

            <div className="bg-background-body w-[4.813rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
              <p className="text-feedback_tag font-bold text-sm">Feature</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-background-body_hover">
              <img src="assets/shared/icon-arrow-up.svg" alt="arrow up icon" />
              <p className="text-feedback_title font-bold">42</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src="assets/shared/icon-comments.svg" alt="comments icon" />
              <p className="text-feedback_title font-bold">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[20.438rem] h-[12.5rem] rounded-lg p-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-feedback_title font-bold">
              Preview images not loading
            </h1>
            <p className="text-feedback_paragraph text-sm font-normal w-[40ch]">
              Challenge preview images are missing when you apply a filter.
            </p>

            <div className="bg-background-body w-[3.5rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
              <p className="text-feedback_tag font-bold text-sm">Bug</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-background-body_hover">
              <img src="assets/shared/icon-arrow-up.svg" alt="arrow up icon" />
              <p className="text-feedback_title font-bold">3</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src="assets/shared/icon-comments.svg" alt="comments icon" />
              <p className="text-feedback_title font-bold opacity-35">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-[20.438rem] h-[28.75rem] flex flex-col items-center justify-center text-center gap-5">
          <img
            src="assets/suggestions/illustration-empty.svg"
            alt="detective searching for something"
          />
          <h1 className="text-feedback_title font-extrabold mt-6">
            There is no feedback yet.
          </h1>
          <p className="text-feedback_paragraph text-sm">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <button className="bg-add_feedback_button w-[8.375rem] h-[2.5rem] rounded-xl font-semibold text-white text-sm hover:bg-add_feedback_button_hover">
            + Add Feedback
          </button>
        </div>
      </div> */}
    </main>
  );
}
