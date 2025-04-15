import { handleSignOut } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/sign-in")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-2xl">Welcome {session?.user?.name}</p>
      <p className="text-2xl">Email: {session?.user?.email}</p>
      <form
        action={handleSignOut}
      >
        <button className="border border-gray-200 px-4 py-2 rounded-md bg-white cursor-pointer" type="submit">Sign out</button>
      </form>
    </div>
  );
}