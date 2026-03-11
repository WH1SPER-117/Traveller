import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Dashboard(){

const router = useRouter();
const [listings,setListings] = useState([]);

useEffect(()=>{

const token = localStorage.getItem("token");

if(!token){
router.push("/login");
return;
}

fetchListings();

},[]);

const fetchListings = async ()=>{

try{

const res = await API.get("/listings/my");
setListings(res.data);

}catch(err){
console.error(err);
}

};

const deleteListing = async(id)=>{

try{

await API.delete(`/listings/${id}`);
fetchListings();

}catch(err){
alert("Delete failed");
}

};

return(

<div
className="min-h-screen bg-cover bg-center"
style={{ backgroundImage: "url('/travellerBG2.png')" }}
>

{/* overlay */}
<div className="absolute inset-0 bg-black/60"></div>

<Navbar/>

<div className="relative max-w-6xl mx-auto px-6 pt-32 pb-16 text-white">

{/* header */}
<div className="flex justify-between items-center mb-10">

<h1 className="text-4xl font-bold drop-shadow-lg">
Your Travel Listings
</h1>

<button
onClick={()=>router.push("/create")}
className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold"
>
+ Create Listing
</button>


</div>



{/* listings */}
<div className="space-y-6">

{listings.map((listing)=>(

<div
key={listing._id}
className="bg-white/10 backdrop-blur-md rounded-xl flex overflow-hidden shadow-lg hover:shadow-xl transition"
>

<img
src={listing.imageUrl}
className="w-72 h-48 object-cover"
/>

<div className="p-6 flex flex-col justify-between flex-1">

<div>

<h2 className="text-xl font-semibold">
{listing.title}
</h2>

<p className="text-gray-300">
{listing.location}
</p>

<p className="text-sm text-gray-200 mt-2 line-clamp-2">
{listing.description}
</p>

</div>

<div className="flex gap-4 mt-4">

<button
onClick={()=>router.push(`/edit/${listing._id}`)}
className="text-orange-400 hover:text-orange-300"
>
Edit
</button>

<button
onClick={()=>deleteListing(listing._id)}
className="text-red-400 hover:text-red-300"
>
Delete
</button>

</div>

</div>



</div>

))}

</div>

</div>

</div>

);
}