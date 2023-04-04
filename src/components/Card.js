import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Link from 'next/link';

export default function Card({ titleCard, imgCard, router, type, dataDetails }) {

    return (
        <Link href={`/project/${router}`} replace className='flex relative flex-col bg-primary-light w-full rounded-2xl overflow-hidden'>
            <Image src={imgCard} height={400} width={600} className='w-full h-full opacity-50 hover:opacity-80 transition-opacity delay-300n ease-in-out' alt="" />
            <div className='flex absolute w-full bg-primary-light bottom-8 justify-center items-center py-4'>
                <p className='text-seconday font-bold uppercase text-xl'>{titleCard ? titleCard : "Default"}</p>
            </div>
            <div className='flex absolute top-0 bg-seconday left-4 shadow-lg rounded-b-lg'>
                <p className='px-4 py-2 font-semibold'>{type}</p>
            </div>
        </Link>
    )
}
