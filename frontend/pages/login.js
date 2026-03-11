import { useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";

export default function Login() {

const router = useRouter();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async (e)=>{

e.preventDefault();

try{

const res = await API.post("/auth/login",{
email,
password
});

localStorage.setItem("token",res.data.token);

router.push("/");

}catch(err){

alert("Login failed");

}

};

return(

<div
className="min-h-screen bg-cover bg-center flex items-center justify-center"
style={{ backgroundImage: "url('/travellerBG.png')" }}
>

{/* dark overlay */}
<div className="absolute inset-0 bg-black/50"></div>

{/* login card */}
<div className="relative bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl w-[380px] text-white">

{/* logo */}
<div className="flex flex-col items-center mb-6">

<img
src="/travellerlogo.png"
className="h-16 mb-2"
/>

<h1 className="text-3xl font-bold">
Welcome Back
</h1>

</div>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 outline-none"
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 outline-none"
/>

<button
className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-lg font-semibold"
>
Login
</button>

</form>

<p className="text-center mt-4 text-sm">

Don't have an account?

<span
onClick={()=>router.push("/register")}
className="ml-1 text-orange-300 cursor-pointer"
>
Sign Up
</span>

</p>

</div>

</div>

);
}