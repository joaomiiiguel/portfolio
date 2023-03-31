import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Link from 'next/link';

export default function Card({ titleCard, imgCard, router, type, dataDetails }) {
    const [image, setImage] = useState()

    async function loadImagens() {
        const storage = getStorage()
        const cardRef = ref(storage, `jobs/${imgCard}`)
        getDownloadURL(cardRef)
            .then((url) => {
                setImage(url);
            })
            .catch((error) => {
                switch (error.code) {
                    case 'storage/object-not-found':
                        alert('File doesnot exist')
                        break;
                    case 'storage/unauthorized':
                        alert('User doesnot have permission to access the object')
                        break;
                    case 'storage/canceled':
                        alert('User canceled the upload')
                        break;
                    case 'storage/unknown':
                        alert('Unknown error occurred, inspect the server response')
                        break;
                }
            });
    }

    useEffect(() => {
        loadImagens()
    }, [])

    return (
        <Link href={`/project/${router}`} replace className='flex relative flex-col bg-primary-light w-full rounded-2xl overflow-hidden'>
            {imgCard && <Image src={image} height={200} width={200} className='w-full h-full opacity-50 hover:opacity-80 transition-opacity delay-300n ease-in-out' alt="" />}
            <div className='flex absolute w-full bg-primary-light bottom-8 justify-center items-center py-4'>
                <p className='text-seconday font-bold uppercase text-xl'>{titleCard ? titleCard : "Default"}</p>
            </div>
            <div className='flex absolute top-0 bg-seconday left-4 shadow-lg rounded-b-lg'>
                <p className='px-4 py-2 font-semibold'>{type}</p>
            </div>
        </Link>
    )
}
