"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Image1 from "../../../../public/assets/Mobile2.png";
import { useTranslation } from "@/hooks/useTranslation";

export default function Reddit() {
  const t = useTranslation();

  return (
    <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%]">
      <div className="flex flex-col w-6/6 md:w-4/6 pt-[20%] md:pt-[5%] mx-auto justify-center items-center space-y-6">
        <p className="text-seconday text-2xl font-normal tracking-widest text-center uppercase">
          {t("pages.reddit.title")}
        </p>
        <div
          className="text-gray-light"
          dangerouslySetInnerHTML={{
            __html: t("pages.reddit.description"),
          }}
        />
        <div className="flex flex-row justify-center">
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            React Native
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            MobX
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Typescript
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Axios
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Styled Components
          </p>
        </div>
        <Link
          href={"https://github.com/joaomiiiguel/Reddit"}
          target="_blank"
          className="bg-seconday rounded-full flex flex-row items-center px-6"
        >
          <p className="text-primary py-2 px-4 uppercase text-xs font-semibold">
            {t("pages.btnLink")}
          </p>
          <BsGithub className="text-primary" size={18} />
        </Link>
        <Image
          src={Image1}
          height={600}
          width={1000}
          className="w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
}
