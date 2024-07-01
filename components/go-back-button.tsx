"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import ArrowLeftIcon from "@/public/assets/shared/icon-arrow-left.svg";

export const GoBackButton = () => {
  const router = useRouter();

  return (
    <div
      className="w-full flex flex-row items-center justify-start hover:underline cursor-pointer"
      onClick={() => router.back()}
    >
      <Image src={ArrowLeftIcon} className="mr-2" alt="Arrow left icon" />
      <p className="font-bold text-feedback_paragraph">Go Back</p>
    </div>
  );
};
