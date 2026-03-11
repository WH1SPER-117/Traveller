import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {

const router = useRouter();
const [isLoggedIn,setIsLoggedIn] = useState(false);

useEffect(()=>{

const token = localStorage.getItem("token");
setIsLoggedIn(!!token);

},[]);

const handleLogout = ()=>{

localStorage.removeItem("token");
setIsLoggedIn(false);
router.push("/login");

};

return(

<nav className="absolute top-0 left-0 w-full z-50">

<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center backdrop-blur-md bg-black/20 rounded-b-xl">

{/* logo + name */}
<Link href="/" className="flex items-center gap-2">

<img
src="/travellerlogo.png"
className="h-14 w-auto"
/>

<span className="text-3xl font-bold text-white">
Traveller
</span>

</Link>

{/* navigation */}
<div className="flex items-center gap-6 text-lg text-white">

<Link href="/" className="hover:text-orange-300">
Home
</Link>

{isLoggedIn && (

<Link href="/dashboard" className="hover:text-orange-300">
Dashboard
</Link>

)}

{isLoggedIn ? (

<button
onClick={handleLogout}
className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded-lg"
>
Logout
</button>

) : (

<Link href="/login" className="hover:text-orange-300">
Login
</Link>

)}

</div>

</div>

</nav>

);
}