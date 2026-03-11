import { useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Login(){

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

<div>

<Navbar/>

<div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">

<h1 className="text-2xl font-bold mb-4">
Login
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-2 rounded"
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
className="w-full border p-2 rounded"
/>

<button
className="bg-blue-600 text-white px-4 py-2 rounded w-full"
>
Login
</button>

</form>

</div>

</div>

);

}