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

<div>

<Navbar/>

<div className="max-w-6xl mx-auto p-6">

<div className="flex justify-between items-center mb-6">

<h1 className="text-3xl font-bold">
My Listings
</h1>

<button
onClick={()=>router.push("/create")}
className="bg-blue-600 text-white px-4 py-2 rounded"
>
Create Listing
</button>

</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{listings.map((listing)=>(

<div key={listing._id} className="bg-white p-4 rounded shadow">

<img
src={listing.imageUrl}
className="w-full h-40 object-cover rounded"
/>

<h2 className="font-semibold mt-2">
{listing.title}
</h2>

<div className="flex gap-3 mt-3">

<button
onClick={()=>router.push(`/edit/${listing._id}`)}
className="text-blue-600"
>
Edit
</button>

<button
onClick={()=>deleteListing(listing._id)}
className="text-red-600"
>
Delete
</button>

</div>

</div>

))}

</div>

</div>

</div>

);
}