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

<div>

<Navbar/>

<div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">

<h1 className="text-2xl font-bold mb-4">
Edit Listing
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
name="title"
value={form.title}
onChange={handleChange}
className="w-full border p-2"
/>

<input
name="location"
value={form.location}
onChange={handleChange}
className="w-full border p-2"
/>

<textarea
name="description"
value={form.description}
onChange={handleChange}
className="w-full border p-2"
/>

<input
name="price"
value={form.price}
onChange={handleChange}
className="w-full border p-2"
/>

<button
className="bg-blue-600 text-white px-4 py-2 rounded w-full"
>
Update
</button>

</form>

</div>

</div>

);
}