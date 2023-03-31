import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { database } from '../api/firebase'
import { getDatabase, ref, onValue } from "firebase/database";
import { getStorage, getDownloadURL } from "firebase/storage";

import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';


export default function ProjectID() {
    const router = useRouter()
    const [projectDet, setProjectDet] = useState([])
    const [loading, setLoading] = useState(true)


    async function loadAllProjects() {
        const dataProjet = []
        const db = await getDatabase(database);
        const starRef = await ref(db, 'jobs/')
        onValue(starRef, (snapshot) => {
            const data = snapshot.val();
            dataProjet.push(data.filter(item => item.router === router.query.id))
            setProjectDet(dataProjet[0][0]);
            setLoading(false)
        })
    }

    useEffect(() => {
        loadAllProjects()
    }, [loading])



    return (
        <>
            <Head>
                <title>{router.query.id} - Portfólio</title>
                <meta name="description" content={projectDet?.description} />
            </Head>
            <div className="flex flex-col bg-primary min-h-screen py-4 px-[10%]">
                <Link href={'/'} className='bg-seconday rounded-full w-fit hover:opacity-50'>
                    <BsArrowLeftShort className='text-primary' size={30} />
                </Link>
                {loading ?
                    <p className='text-gray-light text-center mt-4'>Loading...</p>
                    :
                    <div className='flex flex-col w-6/6 md:w-4/6 pt-20 mx-auto justify-center items-center space-y-6'>
                        <p className='text-seconday text-2xl font-normal tracking-widest text-center uppercase'>{projectDet?.title}</p>
                        <p className='text-gray-light'>{projectDet?.description}</p>
                        <div className='flex flex-row justify-center'>
                            {projectDet?.tecnologias.map((item, index) =>
                                <p key={index} className='text-gray-light bg-primary-light mr-2 px-4 py-2 text-sm rounded-full'>{item}</p>
                            )}
                        </div>
                        <Link href={projectDet?.link || '#'} target="_blank" className='bg-seconday rounded-full'>
                            <p className='text-primary py-2 px-4 uppercase text-xs font-semibold'>link do projeto</p>
                        </Link>
                        {projectDet?.images.map((item, index) =>
                            <Image key={index} src={item} height={200} width={200} className='w-full h-full transition-opacity delay-300n ease-in-out' alt="" />
                        )}
                    </div>
                }
            </div>
        </>
    )
}
