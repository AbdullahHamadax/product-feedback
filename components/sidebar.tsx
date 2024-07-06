import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

import MenuIcon from "@/public/assets/shared/mobile/icon-hamburger.svg";
import { Roadmap } from "@/components/roadmap";

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
          <Roadmap />
        </div>
      </SheetContent>
    </Sheet>
  );
};
