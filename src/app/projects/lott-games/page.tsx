'use client'
import React from "react";

import Link from "next/link";
import Image from "next/image";

import Image1 from "../../../../public/assets/Mobile1.png";
import { useTranslation } from "@/hooks/useTranslation";

export default function Lott_Games() {
  const t = useTranslation();
  return (
    <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%]">
      <div className="flex flex-col w-6/6 md:w-4/6 pt-[20%] md:pt-[5%] mx-auto justify-center items-center space-y-6">
        <p className="text-seconday text-2xl font-normal tracking-widest text-center uppercase">
          {t("pages.lottGames.title")}
        </p>
        <div
          className="text-gray-light"
          dangerouslySetInnerHTML={{
            __html: t("pages.lottGames.description"),
          }}
        />
        <div className="flex flex-row justify-center">
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            React Native
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Firebase
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Expo
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            i18n
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Notifications
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Auth
          </p>
        </div>
        <Link
          href={
            "https://play.google.com/store/apps/details?id=com.ni.LottGames"
          }
          target="_blank"
          className="bg-seconday rounded-full"
        >
          <p className="text-primary py-2 px-4 uppercase text-xs font-semibold">
            {t("pages.btnLink")}
          </p>
        </Link>

        <Image
          src={Image1}
          height={400}
          width={600}
          className="w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
}
