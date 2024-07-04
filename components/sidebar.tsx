import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

import MenuIcon from "@/public/assets/shared/mobile/icon-hamburger.svg";

export const Sidebar = () => {
  const catogories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Image
            src={MenuIcon}
            alt="hamburger menu icon"
            className="w-[1.25rem] h-[1.063rem] cursor-pointer md:hidden"
          />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-background_body">
        <div className=" w-[16.938rem]  gap-7 absolute right-0 top-[4.5rem] flex flex-col items-center justify-center">
          <div className="bg-white w-[13.938rem] h-[11.125rem] rounded-lg flex flex-wrap gap-3 p-5 text-center">
            {catogories.map((catogory) => (
              <button key={catogory} className="bg-background_body rounded-xl">
                <p className="font-bold text-feedback_tag p-2">{catogory}</p>
              </button>
            ))}
          </div>
          <div className="bg-white w-[13.938rem] h-[11.125rem] rounded-lg">
            <div className="flex items-center justify-between p-6">
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
      </SheetContent>
    </Sheet>
  );
};
