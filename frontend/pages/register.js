import { useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";

export default function Register() {

const router = useRouter();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async (e)=>{

e.preventDefault();

try{

const res = await API.post("/auth/register",{
name,
email,
password
});

localStorage.setItem("token",res.data.token);

router.push("/dashboard");

}catch(err){

alert("Registration failed");

}

};

return(

<div
className="min-h-screen bg-cover bg-center flex items-center justify-center"
style={{ backgroundImage: "url('/travellerBG.png')" }}
>

{/* overlay */}
<div className="absolute inset-0 bg-black/60"></div>

{/* signup card */}
<div className="relative bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl w-[380px] text-white">

{/* logo + title */}
<div className="flex flex-col items-center mb-6">

<img
src="/travellerlogo.png"
className="h-16 mb-2"
/>

<h1 className="text-3xl font-bold">
Create Account
</h1>

</div>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 outline-none focus:ring-2 focus:ring-orange-400"
/>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 outline-none focus:ring-2 focus:ring-orange-400"
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 outline-none focus:ring-2 focus:ring-orange-400"
/>

<button
className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-lg font-semibold"
>
Sign Up
</button>

</form>

<p className="text-center mt-4 text-sm">

Already have an account?

<span
onClick={()=>router.push("/login")}
className="ml-1 text-orange-300 cursor-pointer"
>
Login
</span>

</p>

</div>

</div>

);
}