import Link from "next/link"
import Image from "next/image"
import ThumbnailBlack from '@/public/Thumbnail-Bragada.ui.jpg'
import ThumbnailWhite from '@/public/Thumbnail-Bragada.ui-Light.jpg'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="md:ms-[120px] md:me-[20px] w-full min-h-screen flex flex-col gap-8 md:gap-14 bg-[#fafafa] dark:bg-maBlack py-40 md:pt-32">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-center font-bold text-5xl text-maBlack dark:text-white">{params.slug}</h1>
        <p className='text-maDarkGray dark:text-maGray'>Designed by <Link href='https://instagram.com/helloalen.dev' className='italic font-medium text-maOrange
        ' target="_blank">Helloalen.dev</Link></p>
      </div>
      <div className="flex flex-col items-center gap-3 px-8">
        <Image src={ThumbnailBlack} alt="Thumbnail" className="dark:hidden w-[800px] rounded-3xl" />
        <Image src={ThumbnailWhite} alt="Thumbnail" className="hidden dark:block w-[800px] rounded-3xl" />
        <p>Download Project : <Link href='https://drive.google.com/drive/folders/1LRXIq62a2SNkwjLtT86ynGhI_I8JyckE?usp=sharing' className="italic font-semibold text-maOrange" target='_blank'>Download</Link></p>
        <p>Prototype : <Link href='https://www.figma.com/proto/NRQtkOFaQQHqoX05hmpRe0/Bragada.ui?page-id=7%3A4&type=design&node-id=7-5&viewport=190%2C395%2C0.19&t=IgnNYNhqWDfgIxzM-1&scaling=scale-down&starting-point-node-id=7%3A5&mode=design' className="italic font-semibold text-maOrange" target='_blank'>Preview</Link></p>
      </div>
    </main>
  )
}