import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
<<<<<<< HEAD
  baseURL: process.env.NEXT_PUBLIC_EXPRESS_URL || "http://localhost:8000",
=======
    /** The base URL of the server (optional if you're using the same domain) */
<<<<<<< HEAD
  baseURL: process.env.NEXT_PUBLIC_EXPRESS_URL || `"http://localhost:"${process.env.PORT}`,
=======
  baseURL: process.env.NEXT_PUBLIC_EXPRESS_URL || "http://localhost:8000",
>>>>>>> fadeac95cddd5dafc8550b362a042a357e7515b7
  plugins: [inferAdditionalFields<typeof auth>()],
>>>>>>> MNchanges
})

export const { signIn, signUp, signOut, useSession } = authClient;