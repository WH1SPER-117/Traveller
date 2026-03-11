import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">

      <h1 className="font-bold text-xl">
        TravelXP
      </h1>

      <div className="space-x-4">

        <Link href="/">Home</Link>

        <Link href="/create">Create</Link>

        <Link href="/dashboard">Dashboard</Link>

        <Link href="/login">Login</Link>

        <Link href="/register">Register</Link>

      </div>

    </nav>
  );
}