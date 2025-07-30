"use client";
import React from "react";

import { FaAndroid } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

import Image1 from "../../../../public/assets/CapaBB.png";
import { useTranslation } from "@/hooks/useTranslation";

export default function BancoBrasilPage() {
  const t = useTranslation();

  return (
    <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%] pt-10">
      <div className="flex flex-col w-6/6 md:w-4/6 pt-[20%] sm:pt-[5%] mx-auto justify-center items-center space-y-6">
        <p className="text-seconday text-2xl font-normal tracking-widest text-center uppercase">
          {t("pages.bancoBrasil.title")}
        </p>
        <div
          className="text-gray-light"
          dangerouslySetInnerHTML={{
            __html: t("pages.bancoBrasil.description"),
          }}
        />

        <div className="flex flex-row justify-center">
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            SwiftUI
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            MVVM
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Expo
          </p>
        </div>
        <Link
          href={
            "https://play.google.com/store/apps/details?id=br.com.bb.android"
          }
          target="_blank"
          className="bg-seconday rounded-full flex items-center flex-row py-2 px-4 gap-2"
        >
          <p className="text-primary  uppercase text-xs font-semibold">
            {t("pages.btnLink")}
          </p>
          <FaAndroid className=" text-2xl" />
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
