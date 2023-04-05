import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";

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
                        Esta aplicação foi criada para fins educativos e utilizando a biblioteca React.js juntamente com o Leaflet Maps para exibir um polígono georreferenciado, fornecido em formato GeoJSON, que representa uma determinada área rural. Além disso, a aplicação possui funcionalidades para gerenciar pontos de coleta georreferenciados, que podem ser representados por marcadores no mapa. Com isso, o produtor tem a possibilidade de inserir novos pontos, bem como movimentar ou excluir pontos já existentes, de acordo com as suas necessidades.
                    </p>
                    <div className='flex flex-row justify-center'>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>React Native</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Leaflet Maps</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Expo</p>
                    </div>
                    <Link href={'https://github.com/joaomiiiguel/FarmTest'} target="_blank" className='bg-seconday rounded-full'>
                        <p className='text-primary py-2 px-4 uppercase text-xs font-semibold'>link do projeto</p>
                    </Link>

                    <Image src={Image1} height={600} width={1000} className='w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl' alt="" />
                </div>
            </div>
        </>
    )
}
