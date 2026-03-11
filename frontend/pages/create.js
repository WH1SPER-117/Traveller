import { useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Create(){

const router = useRouter();

const [title,setTitle] = useState("");
const [location,setLocation] = useState("");
const [description,setDescription] = useState("");
const [price,setPrice] = useState("");
const [image,setImage] = useState(null);

const handleSubmit = async(e)=>{

e.preventDefault();

const formData = new FormData();

formData.append("title",title);
formData.append("location",location);
formData.append("description",description);
formData.append("price",price);
formData.append("image",image);

try{

await API.post("/listings",formData,{
headers:{
"Content-Type":"multipart/form-data"
}
});

router.push("/dashboard");

}catch(err){

alert("Creation failed");

}

};

return(

<div>

<Navbar/>

<div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">

<h1 className="text-2xl font-bold mb-4">
Create Listing
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
placeholder="Title"
onChange={(e)=>setTitle(e.target.value)}
className="w-full border p-2"
/>

<input
placeholder="Location"
onChange={(e)=>setLocation(e.target.value)}
className="w-full border p-2"
/>

<textarea
placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
className="w-full border p-2"
/>

<input
placeholder="Price"
onChange={(e)=>setPrice(e.target.value)}
className="w-full border p-2"
/>

<input
type="file"
onChange={(e)=>setImage(e.target.files[0])}
/>

<button
className="bg-blue-600 text-white px-4 py-2 rounded w-full"
>
Create
</button>

</form>

</div>

</div>

);
}