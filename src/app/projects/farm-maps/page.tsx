'use client'
import React, { useEffect, useState } from "react";
import { BsArrowLeftShort, BsGithub } from "react-icons/bs";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Image1 from "../../../../public/assets/Web2-1.png";
import Image2 from "../../../../public/assets/Web2-2.png";
import Image3 from "../../../../public/assets/Web2-3.png";
import { useTranslation } from "@/hooks/useTranslation";

export default function Farm_Maps() {
  const t = useTranslation();

  return (
    <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%]">
      <div className="flex flex-col w-6/6 md:w-4/6 pt-[20%] md:pt-[5%] mx-auto justify-center items-center space-y-6">
        <p className="text-seconday text-2xl font-normal tracking-widest text-center uppercase">
          {t("pages.farmMaps.title")}
        </p>
        <div
          className="text-gray-light"
          dangerouslySetInnerHTML={{
            __html: t("pages.farmMaps.description"),
          }}
        />
        <div className="flex flex-row justify-center">
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            React Native
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Leaflet Maps
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            ContextAPI
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Expo
          </p>
        </div>
        <Link
          href={"https://github.com/joaomiiiguel/FarmTest"}
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
          height={400}
          width={600}
          className="w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl"
          alt=""
        />
        <Image
          src={Image2}
          height={400}
          width={600}
          className="w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl"
          alt=""
        />
        <Image
          src={Image3}
          height={400}
          width={600}
          className="w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
}
