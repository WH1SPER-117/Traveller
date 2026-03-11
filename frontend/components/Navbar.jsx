import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">

        {/* Logo + Website Name */}
        <Link href="/" className="flex items-center gap-2">

          <Image
            src="/travellerlogo.png"
            alt="Traveller Logo"
            width={40}
            height={40}
          />

          <span className="font-bold text-xl text-blue-600">
            Traveller
          </span>

        </Link>

        {/* Navigation */}
        <div className="space-x-6 flex items-center">

          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>

          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-700"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}