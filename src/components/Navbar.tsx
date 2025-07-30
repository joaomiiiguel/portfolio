"use client"
import React from "react";
import { Button } from "@heroui/react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter()
    
  return (
    <div className="fixed top-0 left-[10%] py-4">
      <Button isIconOnly aria-label="back" className="bg-seconday rounded-full" onPress={() => router.push('/')} >
        <BsArrowLeftShort className="text-primary" size={30} />
      </Button>
    </div>
  );
}
