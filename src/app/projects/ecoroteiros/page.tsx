'use client'
import Link from "next/link";
import Image from "next/image";

import Image1 from "../../../../public/assets/aventurei1.png";
import Image2 from "../../../../public/assets/aventurei2.png";
import Image3 from "../../../../public/assets/aventurei3.png";
import { useTranslation } from "@/hooks/useTranslation";

export default function EcoroteirosPage() {
  const t = useTranslation();

  return (
    <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%]">
      <div className="flex flex-col w-6/6 md:w-4/6 pt-[20%] md:pt-[5%] mx-auto justify-center items-center space-y-6">
        <p className="text-seconday text-2xl font-bold tracking-widest text-center uppercase">
          {t("pages.ecoroteiros.title")}
        </p>
        <div
          className="text-gray-light"
          dangerouslySetInnerHTML={{
            __html: t("pages.ecoroteiros.description"),
          }}
        />
        <div className="flex flex-row justify-center">
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            React.js
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            Next.js
          </p>
          <p className="text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full">
            TaiwlandCSS
          </p>
        </div>
        <Link
          href={"https://www.ecoroteiros.com.br/"}
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
