import Image from "next/image";
import ArrowLeftIconWhite from "@/public/assets/shared/icon-arrow-left-white.svg";
import { GoBackButtonWhite } from "@/components/go-back-button-white";

export default function roadmap() {
  return (
    <main className="min-h-screen font-jost bg-background_body">
      <div className="bg-suggestions_bar h-[6.25rem] flex justify-between items-center w-screen p-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4">
            <GoBackButtonWhite />
          </div>
          <p className="text-lg font-bold text-white">Roadmap</p>
        </div>

        <button className="bg-add_feedback_button text-sm text-white w-[8.375rem] h-[2.5rem] cursor-pointer rounded-xl font-semibold hover:bg-add_feedback_button_hover">
          + Add Feedback
        </button>
      </div>

      {/* <!-- ! In Progress  variation --> */}

      <div>
        <ul className="flex items-center justify-between p-4 text-center">
          <li className="font-bold text-roadmap_items_not_checked">
            Planned (2)
          </li>
          <li className="font-bold mr-7 text-feedback_title">
            In-Progress (3)
          </li>
          <li className="font-bold text-roadmap_items_not_checked">Live (1)</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="w-[7.813rem] h-[0.25rem] bg-add_feedback_button self-center"></div>
        <hr className="border-[0.09rem]" />
      </div>
      <div className="p-6">
        <h1 className="font-bold text-feedback_title">In-Progress (3)</h1>
        <p className="font-normal text-feedback_paragraph">
          Features currently being developed
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <div>
            <div className="w-[20.438rem] h-[0.375rem] bg-add_feedback_button rounded-lg rounded-bl-none rounded-br-none"></div>
          </div>

          <div className="bg-white w-[20.438rem] h-[14.563rem] rounded-lg p-5">
            <div className="flex flex-col gap-2">
              <ul className="flex items-center gap-2 font-normal text-feedback_paragraph">
                <div className="bg-add_feedback_button w-[0.5rem] h-[0.5rem] rounded-full"></div>
                <li>In Progress</li>
              </ul>
              <h1 className="font-bold text-feedback_title">
                One-click portfolio generation
              </h1>
              <p className="text-feedback_paragraph text-sm font-normal w-[35ch]">
                Add ability to create professional looking portfolio from
                profile.
              </p>

              <div className="bg-background_body w-[4.813rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
                <p className="text-sm font-bold text-feedback_tag">Feature</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-feedback_tag_card_hover">
                <img
                  src="../assets/shared/icon-arrow-up.svg"
                  alt="arrow up icon"
                />
                <p className="font-bold text-feedback_title">62</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="../assets/shared/icon-comments.svg"
                  alt="comments icon"
                />
                <p className="font-bold text-feedback_title">1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <div className="w-[20.438rem] h-[0.375rem] bg-add_feedback_button rounded-lg rounded-bl-none rounded-br-none"></div>
          </div>

          <div className="bg-white w-[20.438rem] h-[14.563rem] rounded-lg p-5">
            <div className="flex flex-col gap-2">
              <ul className="flex items-center gap-2 font-normal text-feedback_paragraph">
                <div className="bg-add_feedback_button w-[0.5rem] h-[0.5rem] rounded-full"></div>
                <li>In Progress</li>
              </ul>
              <h1 className="font-bold text-feedback_title">
                Bookmark challenges
              </h1>
              <p className="text-feedback_paragraph text-sm font-normal w-[35ch]">
                Be able to bookmark challenges to take later on.
              </p>

              <div className="bg-background_body w-[4.813rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
                <p className="text-sm font-bold text-feedback_tag">Feature</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-feedback_tag_card_hover">
                <img
                  src="../assets/shared/icon-arrow-up.svg"
                  alt="arrow up icon"
                />
                <p className="font-bold text-feedback_title">31</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="../assets/shared/icon-comments.svg"
                  alt="comments icon"
                />
                <p className="font-bold text-feedback_title">1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <div className="w-[20.438rem] h-[0.375rem] bg-add_feedback_button rounded-lg rounded-bl-none rounded-br-none"></div>
          </div>

          <div className="bg-white w-[20.438rem] h-[14.563rem] rounded-lg p-5">
            <div className="flex flex-col gap-2">
              <ul className="flex items-center gap-2 font-normal text-feedback_paragraph">
                <div className="bg-add_feedback_button w-[0.5rem] h-[0.5rem] rounded-full"></div>
                <li>In Progress</li>
              </ul>
              <h1 className="font-bold text-feedback_title">
                Animated solution screenshots
              </h1>
              <p className="text-feedback_paragraph text-sm font-normal w-[35ch]">
                Screenshots of solutions with animations don’t display content.
              </p>

              <div className="bg-background_body w-[3.5rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]">
                <p className="text-sm font-bold text-feedback_tag">Bug</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-feedback_tag_card_hover">
                <img
                  src="../assets/shared/icon-arrow-up.svg"
                  alt="arrow up icon"
                />
                <p className="font-bold text-feedback_title">9</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="../assets/shared/icon-comments.svg"
                  alt="comments icon"
                />
                <p className="font-bold text-feedback_title opacity-35">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ! In Progress  variation end -->

    <!-- ! Planned variation --> */}

      {/* <!-- <div>
      <ul className="flex items-center justify-between p-4 text-center">
        <li className="font-bold text-feedback_title">Planned (2)</li>
        <li className="font-bold mr-7 text-roadmap_items_not_checked">
          In-Progress (3)
        </li>
        <li className="font-bold text-roadmap_items_not_checked">Live (1)</li>
      </ul>
    </div>
    <div className="flex flex-col">
      <div className="w-[7.813rem] h-[0.25rem] bg-list_orange self-start"></div>
      <hr className="border-[0.09rem]" />
    </div>
    <div className="p-6">
      <h1 className="font-bold text-feedback_title">Planned (2)</h1>
      <p className="font-normal text-feedback_paragraph">
        Ideas prioritized for research
      </p>
    </div>

    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <div>
          <div
            className="w-[20.438rem] h-[0.375rem] bg-list_orange rounded-lg rounded-bl-none rounded-br-none"
          ></div>
        </div>

        <div className="bg-white w-[20.438rem] h-[14.563rem] rounded-lg p-5">
          <div className="flex flex-col gap-2">
            <ul
              className="flex items-center gap-2 font-normal text-feedback_paragraph"
            >
              <div
                className="bg-list_orange w-[0.5rem] h-[0.5rem] rounded-full"
              ></div>
              <li>Planned</li>
            </ul>
            <h1 className="font-bold text-feedback_title">Teams/Duos</h1>
            <p className="text-feedback_paragraph text-sm font-normal w-[35ch]">
              Enable team collaboration with a partner to work on the same
              challenge solution.
            </p>

            <div
              className="bg-background_body w-[6.938rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]"
            >
              <p className="text-sm font-bold text-feedback_tag">Enchancement</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div
              className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-feedback_tag_card_hover"
            >
              <img
                src="../assets/shared/icon-arrow-up.svg"
                alt="arrow up icon"
              />
              <p className="font-bold text-feedback_title">230</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img
                src="../assets/shared/icon-comments.svg"
                alt="comments icon"
              />
              <p className="font-bold text-feedback_title">55</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <div
            className="w-[20.438rem] h-[0.375rem] bg-list_orange rounded-lg rounded-bl-none rounded-br-none"
          ></div>
        </div>

        <div className="bg-white w-[20.438rem] h-[14.563rem] rounded-lg p-5">
          <div className="flex flex-col gap-2">
            <ul
              className="flex items-center gap-2 font-normal text-feedback_paragraph"
            >
              <div
                className="bg-list_orange w-[0.5rem] h-[0.5rem] rounded-full"
              ></div>
              <li>Planned</li>
            </ul>
            <h1 className="font-bold text-feedback_title">Challenge Streaks</h1>
            <p className="text-feedback_paragraph text-sm font-normal w-[35ch]">
              rewards users for completing daily challenges consecutively,
              encouraging discipline.
            </p>

            <div
              className="bg-background_body w-[6.938rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]"
            >
              <p className="text-sm font-bold text-feedback_tag">Enchancement</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div
              className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-feedback_tag_card_hover"
            >
              <img
                src="../assets/shared/icon-arrow-up.svg"
                alt="arrow up icon"
              />
              <p className="font-bold text-feedback_title">31</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img
                src="../assets/shared/icon-comments.svg"
                alt="comments icon"
              />
              <p className="font-bold text-feedback_title">1</p>
            </div>
          </div>
        </div>
      </div>
    </div> --> */}

      {/* <!-- ! Planned variation end -->

    <!-- ! Live varation  -->

    <!-- <div>
      <ul className="flex items-center justify-between p-4 text-center">
        <li className="font-bold text-roadmap_items_not_checked">Planned (2)</li>
        <li className="font-bold mr-7 text-roadmap_items_not_checked">
          In-Progress (3)
        </li>
        <li className="font-bold text-feedback_title">Live (1)</li>
      </ul>
    </div>
    <div className="flex flex-col">
      <div className="w-[7.813rem] h-[0.25rem] bg-list_cyan self-end"></div>
      <hr className="border-[0.09rem]" />
    </div>
    <div className="p-6">
      <h1 className="font-bold text-feedback_title">Live (1)</h1>
      <p className="font-normal text-feedback_paragraph">Released features</p>
    </div>

    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <div>
          <div
            className="w-[20.438rem] h-[0.375rem] bg-list_cyan rounded-lg rounded-bl-none rounded-br-none"
          ></div>
        </div>

        <div className="bg-white w-[20.438rem] h-[14.563rem] rounded-lg p-5">
          <div className="flex flex-col gap-2">
            <ul
              className="flex items-center gap-2 font-normal text-feedback_paragraph"
            >
              <div
                className="bg-list_cyan w-[0.5rem] h-[0.5rem] rounded-full"
              ></div>
              <li>Live</li>
            </ul>
            <h1 className="font-bold text-feedback_title">
              Challenges by Difficulty
            </h1>
            <p className="text-feedback_paragraph text-sm font-normal w-[35ch]">
              Enable users to filter challenges by difficulty levels, to find
              tasks more easily.
            </p>

            <div
              className="bg-background_body w-[6.938rem] h-[1.875rem] flex items-center justify-center rounded-[0.55rem]"
            >
              <p className="text-sm font-bold text-feedback_tag">Enchancement</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div
              className="bg-feedback_upvote w-[4.313rem] h-[2rem] rounded-[0.55rem] flex items-center justify-center gap-3 cursor-pointer hover:bg-feedback_tag_card_hover"
            >
              <img
                src="../assets/shared/icon-arrow-up.svg"
                alt="arrow up icon"
              />
              <p className="font-bold text-feedback_title">350</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img
                src="../assets/shared/icon-comments.svg"
                alt="comments icon"
              />
              <p className="font-bold text-feedback_title">90</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- ! Live variation end --> */}
    </main>
  );
}
