import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import Image1 from '../../assets/Mobile1.png'

export default function Lott_Games() {
    return (
        <>
            <Head>
                <title>Lott Games | João Miguel - Portfólio</title>
                <meta name="description" content="É uma plataforma para conectar viajantes com novos lugares a serem explorados." />
            </Head>
            <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%]">
                <Link href={'/'} className='bg-seconday rounded-full w-fit hover:opacity-50'>
                    <BsArrowLeftShort className='text-primary' size={30} />
                </Link>
                <div className='flex flex-col w-6/6 md:w-4/6 pt-20 mx-auto justify-center items-center space-y-6'>
                    <p className='text-seconday text-2xl font-normal tracking-widest text-center uppercase'>Lott Games</p>
                    <p className='text-gray-light'>
                    O aplicativo desenvolvido é uma plataforma de mini games que utiliza as tecnologias React Native e Firebase, permitindo que os usuários naveguem por jogos e joguem em diferentes idiomas com o sistema de tradução i18n. O aplicativo também oferece recursos como autenticação de usuários e notificações push para melhorar a experiência do usuário.<br/><br/>
                    Utilizei as funcionalidades do React Native para criar uma interface de usuário responsiva e intuitiva, permitindo que os usuários naveguem pelos jogos e selecionem aqueles que desejam jogar. Além disso, implementei recursos como autenticação de usuários e notificações push para melhorar a experiência dos usuários.<br/><br/>
                    Para armazenar e gerenciar os dados do aplicativo, utilizei o sistema de gerenciamento Firebase, que permite o armazenamento seguro e a sincronização em tempo real dos dados do aplicativo em diferentes dispositivos. Utilizei também recursos do Firebase, como autenticação de usuários e análise de dados, para melhorar a segurança e a eficácia do aplicativo.
                    </p>
                    <div className='flex flex-row justify-center'>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>React Native</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Firebase</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Expo</p>
                    </div>
                    <Link href={'https://play.google.com/store/apps/details?id=com.ni.LottGames'} target="_blank" className='bg-seconday rounded-full'>
                        <p className='text-primary py-2 px-4 uppercase text-xs font-semibold'>link do projeto</p>
                    </Link>

                    <Image src={Image1} height={400} width={600} className='w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl' alt="" />
                </div>
            </div>
        </>
    )
}
