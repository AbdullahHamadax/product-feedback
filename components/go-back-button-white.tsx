"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import ArrowLeftIconWhite from "@/public/assets/shared/icon-arrow-left-white.svg";

export const GoBackButtonWhite = () => {
  const router = useRouter();

  return (
    <div
      className="w-full flex flex-row items-center justify-start hover:underline hover:text-white cursor-pointer"
      onClick={() => router.back()}
    >
      <Image
        src={ArrowLeftIconWhite}
        className="mr-2"
        alt="Arrow left white icon"
      />
      <p className="font-bold text-white ">Go Back</p>
    </div>
  );
};
