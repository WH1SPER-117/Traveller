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

const res = await API.get(`/listings/${id}`);

setListing(res.data);

};

if(!listing){
return <div>Loading...</div>;
}

return(

<div>

<Navbar/>

<div className="max-w-4xl mx-auto p-6">

<img
src={listing.imageUrl}
className="w-full h-96 object-cover rounded"
/>

<h1 className="text-3xl font-bold mt-4">
{listing.title}
</h1>

<p className="text-gray-600">
{listing.location}
</p>

<p className="mt-4">
{listing.description}
</p>

<p className="mt-2 font-semibold">
Price: ${listing.price}
</p>

<p className="text-sm text-gray-500">
By {listing.creator?.name}
</p>

<LikeButton listing={listing} setListing={setListing}/>

</div>

</div>

);

}