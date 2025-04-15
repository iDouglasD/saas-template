import { handleSignIn } from "@/app/actions/handle-auth";


export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <h1 className="text-4xl font-bold">Login</h1>
      <form
        action={handleSignIn}
      >
        <button className="border border-gray-200 px-4 py-2 rounded-md bg-white cursor-pointer" type="submit">Signin with Google</button>
      </form>
    </div>
  )
} 