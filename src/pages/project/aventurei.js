import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import Image1 from '../../assets/aventurei1.png'
import Image2 from '../../assets/aventurei2.png'
import Image3 from '../../assets/aventurei3.png'

export default function Aventurei() {
    return (
        <>
            <Head>
                <title>Aventurei | João Miguel - Portfólio</title>
                <meta name="description" content="É uma plataforma para conectar viajantes com novos lugares a serem explorados." />
            </Head>
            <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%]">
                <Link href={'/'} className='bg-seconday rounded-full w-fit hover:opacity-50'>
                    <BsArrowLeftShort className='text-primary' size={30} />
                </Link>
                <div className='flex flex-col w-6/6 md:w-4/6 pt-20 mx-auto justify-center items-center space-y-6'>
                    <p className='text-seconday text-2xl font-normal tracking-widest text-center uppercase'>Aventurei</p>
                    <p className='text-gray-light'>
                        É uma plataforma para conectar viajantes com novos lugares a serem explorados. O projeto tem como objetivo em auxiliar o viajante com todas as informações das atividades de ecoturismo e dos lugares para ser visitado com indicações de profissionais de guias turísticos para auxiliar no passeio. <br/><br/>
                        O projeto, que esta em andamento, consiste em uma plataforma desenvolvida em Next.js, uma estrutura de aplicativo da web de código aberto baseada em React, que permite a construção de aplicativos da web rápidos e escaláveis. Além disso, o projeto utiliza o Firebase, uma plataforma de desenvolvimento de aplicativos móveis e da web do Google, que fornece uma variedade de recursos para armazenamento de dados em tempo real, autenticação de usuários, hospedagem, entre outros.
                    </p>
                    <div className='flex flex-row justify-center'>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>React.js</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Next.js</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>TaiwlandCSS</p>
                    </div>
                    <Link href={'https://www.aventurei.com/'} target="_blank" className='bg-seconday rounded-full'>
                        <p className='text-primary py-2 px-4 uppercase text-xs font-semibold'>link do projeto</p>
                    </Link>

                    <Image src={Image1} height={400} width={600} className='w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl' alt="" />
                    <Image src={Image2} height={400} width={600} className='w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl' alt="" />
                    <Image src={Image3} height={400} width={600} className='w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl' alt="" />
                </div>
            </div>
        </>
    )
}
