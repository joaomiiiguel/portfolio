"use client";
import Image from "next/image";

import ButtonComp from "@/components/ButtonComp";
import Card from "@/components/Card";

import Perfil from "../../public/miguelPerfil.webp";
import Capa1 from "../../public/assets/CapaWeb1.png";
import Capa2 from "../../public/assets/Mobile1.png";
import Capa3 from "../../public/assets/CapaWeb2.png";
import CapaBB from "../../public/assets/CapaBB.png";
import Capa5 from "../../public/assets/Mobile2.png";
import Capa6 from "../../public/assets/Mobile3.png";

import { MdFileDownload, MdMail } from "react-icons/md";
import { BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

const listSkill = [
  "React.js",
  "React Native",
  "Next.js",
  "Nest.js",
  "Node.js",
  "Leaflet Maps",
  "TaiwlandCSS",
  "Expo",
];

export default function Page() {
  const t = useTranslation();

  return (
    <main className="flex flex-col bg-primary min-h-screen py-4">
      <div className="flex flex-col items-center text-white w-[90%] md:w-5/6 lg:w-4/6 mx-auto mt-20 md:flex-row">
        <Image
          src={Perfil}
          className="w-1/2 md:w-2/6 lg:w-[30%] h-fit"
          alt="Foto de perfil"
        />
        <div className="flex flex-col justify-center text-white space-y-4 m-10 w-[90%]">
          <h1 className="text-gray-light text-5xl font-bold	">JOÃO MIGUEL</h1>
          <div className="flex flex-col lg:flex-row">
            <p className="text-gray-light text-2xl font-normal uppercase">
              {t("pages.home.title")}
            </p>
            <p className="text-seconday text-2xl lg:ml-2 font-bold">
              FULLSTACK
            </p>
          </div>
          <p className="text-gray-light text-justify">
            {t("pages.home.description")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
            {listSkill.map((item) => (
              <p key={item} className="text-gray-light bg-primary-light px-4 py-1 text-xs rounded-full">
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-row justify-center md:justify-start space-x-6 items-center">
            <Link
              href={"https://www.instagram.com/joaaomiiiguel/"}
              target="_blank"
            >
              <BsInstagram className="text-seconday text-2xl" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/joaomiiiguel"}
              target="_blank"
            >
              <BsLinkedin className="text-seconday text-2xl" />
            </Link>
            <Link href={"mailto:joaomiguel.farias@gmail.com"} target="_blank">
              <MdMail className="text-seconday text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-6 w-[85%] md:w-5/6 lg:w-4/6 mx-auto">
        <ButtonComp
          title={t("pages.home.btnCurriculum")}
          link={"../../public/CurrículoJoaoMiguel-BR.pdf"}
          icon={<MdFileDownload className="text-primary-light" />}
          darkButton={undefined}
        />
        <ButtonComp
          title={t("pages.home.btnContact")}
          link={"https://api.whatsapp.com/send?phone=34663484245"}
          icon={<BsWhatsapp className="text-seconday" />}
          darkButton
        />
      </div>
      <div className="flex flex-col justify-center w-[90%] md:w-5/6 lg:w-4/6 my-10 mx-auto">
        <p className="text-seconday text-2xl font-normal uppercase tracking-widest my-4 mb-10 text-center">
          {t("pages.home.titleProjects")}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <Card
            titleCard={"EcoRoteiros"}
            imgCard={Capa1}
            router={"ecoroteiros"}
            type={"Web"}
            dataDetails={undefined}
          />
          <Card
            titleCard={"Banco do Brasil"}
            imgCard={CapaBB}
            router={"banco-brasil"}
            type={"Mobile"}
            dataDetails={undefined}
          />
          <Card
            titleCard={"lott games"}
            imgCard={Capa2}
            router={"lott-games"}
            type={"Mobile"}
            dataDetails={undefined}
          />
          {/* <Card titleCard={'1xpix'} imgCard={Capa4} router={'1xpix'} type={'Web'}/> */}
          <Card
            titleCard={"Movies App"}
            imgCard={Capa6}
            router={"movies"}
            type={"Mobile"}
            dataDetails={undefined}
          />
          <Card
            titleCard={"Farm maps"}
            imgCard={Capa3}
            router={"farm-maps"}
            type={"Web"}
            dataDetails={undefined}
          />
          <Card
            titleCard={"Reddit"}
            imgCard={Capa5}
            router={"reddit"}
            type={"Mobile"}
            dataDetails={undefined}
          />
        </div>
      </div>
    </main>
  );
}
