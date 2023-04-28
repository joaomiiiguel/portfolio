import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import Image1 from '../../assets/Web3-1.png'
import Image2 from '../../assets/Web3-2.png'
import Image3 from '../../assets/Web3-3.png'

export default function OneXpix() {
    return (
        <>
            <Head>
                <title>1xpix | João Miguel - Portfólio</title>
                <meta name="description" content="É uma plataforma para conectar viajantes com novos lugares a serem explorados." />
            </Head>
            <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%]">
                <Link href={'/'} className='bg-seconday rounded-full w-fit hover:opacity-50'>
                    <BsArrowLeftShort className='text-primary' size={30} />
                </Link>
                {/* <div className='flex flex-col w-6/6 md:w-4/6 pt-20 mx-auto justify-center items-center space-y-6'>
                    <p className='text-seconday text-2xl font-normal tracking-widest text-center uppercase'>1xpix</p>
                    <p className='text-gray-light'>
                    A 1xpix é um projeto criado pela empresa Pixbet com o intuito de modernizar o seu sistema de gestão de apostas esportivas. A proposta do produto é oferecer uma plataforma mais ágil, confiável e segura para os clientes da empresa, permitindo que os usuários possam realizar suas apostas com maior facilidade e eficiência.
                    <br/> <br/>
                    Para desenvolver a 1xpix, a Pixbet optou por uma abordagem multitenant, que permite que vários clientes utilizem a mesma infraestrutura de software, com recursos e dados isolados e personalizados. Dessa forma, é possível garantir uma maior escalabilidade e flexibilidade no sistema, além de uma maior facilidade de manutenção e atualização.
                    <br/> <br/>
                    No processo de desenvolvimento da 1xpix, a equipe de front-end desempenhou um papel fundamental, sendo responsável pela modernização das telas do novo sistema utilizando a tecnologia Vue.js. A equipe de front-end trabalhou na criação de telas mais responsivas, com design mais moderno e atraente, além de funções mais práticas e eficientes para o usuário. Dessa forma, o resultado final do projeto é um sistema de apostas esportivas mais intuitivo, dinâmico e fácil de usar, que atende às expectativas dos usuários e contribui para o crescimento da Pixbet no mercado de apostas esportivas.
                    </p>
                    <div className='flex flex-row justify-center'>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Vue.js</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>Arquitetura Multi-tenancy</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>TaiwlandCSS</p>
                        <p className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>ContextAPI</p>
                    </div>
                    <Link href={'https://1xpix.com/'} target="_blank" className='bg-seconday rounded-full'>
                        <p className='text-primary py-2 px-4 uppercase text-xs font-semibold'>link do projeto</p>
                    </Link>

                    <Image src={Image1} height={400} width={600} className='w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl' alt="" />
                    <Image src={Image2} height={400} width={600} className='w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl' alt="" />
                    <Image src={Image3} height={400} width={600} className='w-full h-full transition-opacity delay-300n ease-in-out rounded-2xl' alt="" />
                </div> */}
            </div>
        </>
    )
}
