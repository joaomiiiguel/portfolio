import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Raleway } from 'next/font/google'

import { MdFileDownload, MdMail } from 'react-icons/md';
import { BsLinkedin, BsInstagram, BsWhatsapp } from 'react-icons/bs';

import ButtonComp from '@/components/ButtonComp'
import Card from '@/components/Card';

import Perfil from '../../public/miguelPerfil.webp'
import Capa1 from '../assets/CapaWeb1.png'
import Capa2 from '../assets/CapaMobile1.png'
import Capa3 from '../assets/CapaWeb2.png'
import Capa4 from '../assets/CapaWeb3.png'
import Capa5 from '../assets/CapaMobile2.png'
import Capa6 from '../assets/CapaMobile3.png'

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>João Miguel - Portfólio</title>
        <meta name="description" content="Desde 2018 criando ideias e desenvolvendo soluções em React e React Native, usando criatividade e conhecimento técnico para criar aplicações." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="flex flex-col bg-primary min-h-screen py-4">
        <div className="flex flex-col items-center text-white w-[90%] md:w-5/6 lg:w-4/6 mx-auto mt-20 md:flex-row">
          <Image src={Perfil} className='w-1/2 md:w-2/6 lg:w-[30%] h-fit' alt="Foto de perfil" />
          <div className="flex flex-col justify-center text-white space-y-4 m-10 w-[90%]">
            <h1 className="text-gray-light text-5xl font-bold	">JOÃO MIGUEL</h1>
            <div className='flex flex-col lg:flex-row'>
              <p className="text-gray-light text-2xl font-normal">DESENVOLVEDOR</p>
              <p className="text-seconday text-2xl lg:ml-2 font-bold">FRONT-END</p>
            </div>
            <p className="text-gray-light text-justify">Desde 2018 criando ideias e desenvolvendo soluções em React e React Native, usando criatividade e conhecimento técnico para criar aplicações.</p>
            <div className='flex flex-row space-x-2 items-center w-[90%]'>
                        <p className='text-gray-light bg-primary-light px-4 py-2 text-xs rounded-full'>React.js</p>
                        <p className='text-gray-light bg-primary-light px-4 py-2 text-xs rounded-full'>RN</p>
                        <p className='text-gray-light bg-primary-light px-4 py-2 text-xs rounded-full'>Next.js</p>
                        <p className='text-gray-light bg-primary-light px-4 py-2 text-xs rounded-full'>Swift</p>
                        <p className='text-gray-light bg-primary-light px-4 py-2 text-xs rounded-full'>Firebase</p>
                        <p className='text-gray-light bg-primary-light px-4 py-2 text-xs rounded-full'>TaiwlandCSS</p>
                    </div>
            <div className='flex flex-row justify-center md:justify-start space-x-6 items-center'>
              <Link href={'https://www.instagram.com/dev.joaomiguel/'} target="_blank"><BsInstagram className='text-seconday text-2xl' /></Link>
              <Link href={'https://www.linkedin.com/in/joaomiiiguel'} target="_blank"><BsLinkedin className='text-seconday text-2xl' /></Link>
              <Link href={'mailto:joaomiguel.farias@gmail.com'} target="_blank"><MdMail className='text-seconday text-2xl' /></Link>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center space-x-6 w-[85%] md:w-5/6 lg:w-4/6 mx-auto'>
          <ButtonComp title={'Currículo'} link={'../../public/CurrículoJoaoMiguel-BR.pdf'} icon={<MdFileDownload />} />
          <ButtonComp title={'Contato'} link={'https://api.whatsapp.com/send?phone=5583981390385&text=Ol%C3%A1%2C%20Gostei%20do%20seu%20portfolio%20e%20fiquei%20interessado(a)%20no%20seu%20trabalho.'} icon={<BsWhatsapp className='text-seconday' />} darkButton />
        </div>
        <div className='flex flex-col justify-center w-[90%] md:w-5/6 lg:w-4/6 my-10 mx-auto'>
          <p className='text-seconday text-2xl font-normal tracking-widest my-4 mb-10 text-center'>PROJETOS</p>
        
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 '>
              <Card titleCard={'aventurei'} imgCard={Capa1} router={'aventurei'} type={'Web'}/>
              <Card titleCard={'lott games'} imgCard={Capa2} router={'lott_games'} type={'Mobile'}/>
              <Card titleCard={'1xpix'} imgCard={Capa4} router={'1xpix'} type={'Web'}/>
              <Card titleCard={'Movies App'} imgCard={Capa6} router={'movies'} type={'Mobile'}/>
              <Card titleCard={'Farm maps'} imgCard={Capa3} router={'farm_maps'} type={'Web'}/>
              <Card titleCard={'Reddit'} imgCard={Capa5} router={'reddit'} type={'Mobile'}/>
            </div>
        </div>
      </main>
    </>
  )
}
