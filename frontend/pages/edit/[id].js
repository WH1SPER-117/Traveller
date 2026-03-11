import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/Navbar";

export default function EditListing(){

const router = useRouter();
const { id } = router.query;

const [form,setForm] = useState({
title:"",
location:"",
description:"",
price:""
});

useEffect(()=>{
if(id){
fetchListing();
}
},[id]);

const fetchListing = async ()=>{

const res = await API.get(`/listings/${id}`);
setForm(res.data);

};

const handleChange = (e)=>{

setForm({
...form,
[e.target.name]:e.target.value
});

};

const handleSubmit = async(e)=>{

e.preventDefault();

try{

await API.put(`/listings/${id}`,form);
router.push("/dashboard");

}catch(err){
alert("Update failed");
}

};

return(

<div
className="min-h-screen bg-cover bg-center"
style={{ backgroundImage: "url('/travellerBG3.png')" }}
>

<div className="absolute inset-0 bg-black/60"></div>

<Navbar/>

<div className="relative flex justify-center items-center pt-32 pb-16">

<div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 w-[420px] text-white">

<h1 className="text-3xl font-bold mb-6 text-center">
Edit Listing
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
name="title"
value={form.title}
onChange={handleChange}
className="w-full p-3 rounded-lg bg-white/20 outline-none"
/>

<input
name="location"
value={form.location}
onChange={handleChange}
className="w-full p-3 rounded-lg bg-white/20 outline-none"
/>

<textarea
name="description"
value={form.description}
onChange={handleChange}
className="w-full p-3 rounded-lg bg-white/20 outline-none"
/>

<input
name="price"
value={form.price}
onChange={handleChange}
className="w-full p-3 rounded-lg bg-white/20 outline-none"
/>

<button
className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold"
>
Update Listing
</button>

</form>

</div>

</div>

</div>

);
}