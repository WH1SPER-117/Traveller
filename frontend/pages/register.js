import { useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Register() {

const router = useRouter();

const [form,setForm] = useState({
name:"",
email:"",
password:""
});

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const handleSubmit = async (e)=>{
e.preventDefault();

try{

const res = await API.post("/auth/register",form);

localStorage.setItem("token",res.data.token);

router.push("/");

}catch(err){

alert("Registration failed");

}

};

return(

<div>

<Navbar/>

<div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">

<h1 className="text-2xl font-bold mb-4">
Register
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
name="name"
placeholder="Name"
onChange={handleChange}
className="w-full border p-2 rounded"
/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
className="w-full border p-2 rounded"
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
className="w-full border p-2 rounded"
/>

<button
className="bg-blue-600 text-white px-4 py-2 rounded w-full"
>
Register
</button>

</form>

</div>

</div>

);

}