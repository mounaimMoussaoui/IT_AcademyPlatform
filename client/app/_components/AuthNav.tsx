"use client"

import { useSession } from "../lib/auth-client";
import Link from "next/link"
import Button from "../components/Button"
import Avatar from "../components/Avatar"

export default function AuthNav() {
  const { data: session, isPending } = useSession()


  if (isPending) return <p>Loading...</p>;  
  return session ? (
    <Link href="/Profile" >
      <Avatar/>
    </Link>
    ) : (
    <div className="flex space-x-4">

      <Link href="/auth/Sign-up">
          <Button button="Sign Up" w="" type={"button"}/>
      </Link>
      <Link href="/auth/Sign-In">
          <Button button="Sign In" w="" type={"button"}/>
      </Link>
    </div>
  )
}

