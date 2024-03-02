import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch! | Lorem ipsum dolor sit amet consectetur.",
  description: "Lorem ipsum dolor sit amet consectetur.",
}

export default function page() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center max-w-xl">
      <p>Hello 👋🏻, Lorem ipsum dolor sit amet consectetur.</p>
      <h1 className="text-center font-bold text-5xl">Get In Touch!</h1>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Sagittis facilisi urna ultrices risus.Ultrices nisl enim amet ornare eu a felis accumsan. Nisi natoque est lorem eget facilisis.</p>
      <p>Let's connect with me on below 👇🏻</p>
    </div>
  )
}
