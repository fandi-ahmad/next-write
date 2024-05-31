"use client"
import { useRouter } from "next/navigation"
import Label from "./label"

interface dataCard {
  src?: string,
  head: string,
  body: string,
  created_at: string,
  username?: string | null | undefined,
  label?: string,
}

export default function Card(props: dataCard) {
  const router = useRouter()

  return (
    <div className="text-gray-700 mb-6 sm:mb-8">
      <div className="flex justify-between">

        <div className="cursor-pointer" onClick={() => router.push('/article')}>
          <div>
            <h2 className="text-sm sm:text-xl lg:text-2xl font-semibold">{props.head}</h2>
            <span className="hidden sm:block">{props.body}</span>
          </div>
          <Label created_at={props.created_at} username={props.username} label={props.label} />
        </div>

        <img
          src={props.src || '/thumbnail.webp'}
          alt="blog card content"
          className="min-w-28 max-w-28 md:min-w-40 md:max-w-40 lg:min-w-52 lg:max-w-52 min-h-16 max-h-16 md:min-h-20 md:max-h-20 lg:min-h-28 lg:max-h-28 object-cover rounded-md ms-4 my-auto"
        />

      </div>
    </div>
  )
}