import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort, BsGithub } from "react-icons/bs";

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import Image1 from '../../assets/Mobile2.png'

export default function Reddit() {
    return (
        <>
            <Head>
                <title>Reddit | João Miguel - Portfólio</title>
                <meta name="description" content="É uma plataforma para conectar viajantes com novos lugares a serem explorados." />
            </Head>
            <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%]">
                <Link href={'/'} className='bg-seconday rounded-full w-fit hover:opacity-50'>
                    <BsArrowLeftShort className='text-primary' size={30} />
                </Link>
                <div className='flex flex-col w-6/6 md:w-4/6 pt-20 mx-auto justify-center items-center space-y-6'>
                    <p className='text-seconday text-2xl font-normal tracking-widest text-center uppercase'>
                        Reddit
                    </p>
                    <p className='text-gray-light'>
                    A aplicação foi desenvolvida com o objetivo educativo. Para isso, foram utilizadas o React Native, que é um framework muito popular para o desenvolvimento de aplicativos móveis e a aplicação se conecta com a API do Reddit, o que permite que o usuário possa acessar e visualizar conteúdo disponível nesta plataforma de rede social. Através desta conexão, é possível buscar por posts, comentários e outras informações que estejam disponíveis no Reddit.
                    <br/><br/>
                    Para a navegação entre as telas da aplicação, foi utilizado o React Navigation, um pacote de navegação que oferece diversas opções e recursos para a criação de um fluxo de navegação suave e intuitivo.
                    </p>
                    <div className='flex flex-row justify-center'>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>React Native</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>MobX</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Typescript</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Axios</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Styled Components</p>
                    </div>
                    <Link href={'https://github.com/joaomiiiguel/Reddit'} target="_blank" className='bg-seconday rounded-full flex flex-row items-center px-6'>
                        <p className='text-primary py-2 px-4 uppercase text-xs font-semibold'>link do projeto</p><BsGithub className='text-primary' size={18} />
                    </Link>

                    <Image src={Image1} height={600} width={1000} className='w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl' alt="" />
                </div>
            </div>
        </>
    )
}
