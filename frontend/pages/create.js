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

const handleSubmit = async (e)=>{

e.preventDefault();

/* validation */
if(!title.trim() || !location.trim() || !description.trim()){
  alert("Title, location and description are required.");
  return;
}

if(!image){
  alert("Please upload an image.");
  return;
}

const formData = new FormData();

formData.append("title",title);
formData.append("location",location);
formData.append("description",description);
formData.append("price",price);
formData.append("image",image);

try{

await API.post("/listings",formData,{
headers:{ "Content-Type":"multipart/form-data" }
});

router.push("/dashboard");

}catch(err){
alert("Creation failed");
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
Create Travel Experience
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<input
placeholder="Title"
required
onChange={(e)=>setTitle(e.target.value)}
className="w-full p-3 rounded-lg bg-white/20 outline-none"
/>

<input
placeholder="Location"
required
onChange={(e)=>setLocation(e.target.value)}
className="w-full p-3 rounded-lg bg-white/20 outline-none"
/>

<textarea
placeholder="Description"
required
onChange={(e)=>setDescription(e.target.value)}
className="w-full p-3 rounded-lg bg-white/20 outline-none"
/>

<input
placeholder="Price"
onChange={(e)=>setPrice(e.target.value)}
className="w-full p-3 rounded-lg bg-white/20 outline-none"
/>

<input
type="file"
required
onChange={(e)=>setImage(e.target.files[0])}
className="w-full"
/>

<button
className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold"
>
Create Listing
</button>

</form>

</div>

</div>

</div>

);
}