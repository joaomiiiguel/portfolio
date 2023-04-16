import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort, BsGithub } from "react-icons/bs";

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import Image1 from '../../assets/Mobile3.png'

export default function Movies() {
    return (
        <>
            <Head>
                <title>Movies | João Miguel - Portfólio</title>
                <meta name="description" content="É uma plataforma para conectar viajantes com novos lugares a serem explorados." />
            </Head>
            <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%]">
                <Link href={'/'} className='bg-seconday rounded-full w-fit hover:opacity-50'>
                    <BsArrowLeftShort className='text-primary' size={30} />
                </Link>
                <div className='flex flex-col w-6/6 md:w-4/6 pt-20 mx-auto justify-center items-center space-y-6'>
                    <p className='text-seconday text-2xl font-normal tracking-widest text-center uppercase'>Movies App</p>
                    <p className='text-gray-light'>
                    Este aplicativo foi desenvolvido usando o React Native com integração da API do The Movie DB. Ao abrir o aplicativo, o usuário é recebido com a tela inicial que apresenta a lista dos filmes em alta na semana, destacando o primeiro lugar. O usuário pode facilmente visualizar a lista e escolher um filme para assistir.
                    <br/><br/>
                    Além disso, há uma barra de pesquisa que permite que o usuário pesquise qualquer filme pelo nome, mesmo que não esteja presente na lista de tendências. Isso proporciona maior flexibilidade e diversidade na escolha de filmes, permitindo que o usuário encontre filmes específicos de sua preferência.
                    <br/><br/>
                    Ao selecionar um filme, o usuário é redirecionado para a tela de detalhes, que exibe informações detalhadas sobre o filme, como sinopse, elenco, classificação etária, gênero, entre outros. Além disso, a tela de detalhes apresenta uma lista de tendências de outros filmes, permitindo que o usuário explore outros filmes relacionados e encontre novas opções para assistir.
                    </p>
                    <div className='flex flex-row justify-center'>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>React Native</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Axios</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Expo</p>
                    </div>
                    <Link href={'https://github.com/joaomiiiguel/TopMoviesApp'} target="_blank" className='bg-seconday rounded-full flex flex-row items-center px-6'>
                        <p className='text-primary py-2 px-4 uppercase text-xs font-semibold'>link do projeto</p><BsGithub className='text-primary' size={18} />
                    </Link>

                    <Image src={Image1} height={400} width={600} className='w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl' alt="" />
                </div>
            </div>
        </>
    )
}
