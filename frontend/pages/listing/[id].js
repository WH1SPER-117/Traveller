import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/Navbar";
import LikeButton from "../../components/LikeButton";

export default function ListingDetail(){

const router = useRouter();
const { id } = router.query;

const [listing,setListing] = useState(null);

useEffect(()=>{

if(id){
fetchListing();
}

},[id]);

const fetchListing = async ()=>{

try{

const res = await API.get(`/listings/${id}`);
setListing(res.data);

}catch(err){
console.error(err);
}

};

if(!listing){
return <div className="text-center text-white mt-40">Loading...</div>;
}

return(

<div
className="min-h-screen bg-cover bg-center"
style={{ backgroundImage: "url('/travellerBG4.png')" }}
>

<div className="absolute inset-0 bg-black/60"></div>

<Navbar/>

<div className="relative max-w-5xl mx-auto px-6 pt-32 pb-16 text-white">

<div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden">

<img
src={listing.imageUrl}
className="w-full h-[420px] object-cover"
/>

<div className="p-8">

<h1 className="text-4xl font-bold">
{listing.title}
</h1>

<p className="text-xl text-gray-300 mt-2">
📍 {listing.location}
</p>

<p className="mt-6 text-gray-200 leading-relaxed">
{listing.description}
</p>

{listing.price && (
<p className="mt-4 text-lg font-semibold text-orange-400">
Price: ${listing.price}
</p>
)}

<p className="mt-2 text-sm text-gray-400">
By {listing.creator?.name}
</p>

<div className="mt-6">
<LikeButton listing={listing} setListing={setListing}/>
</div>

</div>

</div>

</div>

</div>

);
}