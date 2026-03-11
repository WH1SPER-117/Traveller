import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";

export default function Home(){

const [listings,setListings] = useState([]);

useEffect(()=>{
fetchListings();
},[]);

const fetchListings = async ()=>{

const res = await API.get("/listings");
setListings(res.data);

};

return(

<div
className="relative min-h-screen bg-cover bg-center"
style={{ backgroundImage: "url('/travellerBG4.png')" }}
>

{/* overlay */}
<div className="absolute inset-0 bg-black/60"></div>

<Navbar/>

<div className="relative max-w-6xl mx-auto px-6 pt-32 pb-16 text-white">

{/* hero section */}
<div className="text-center mb-12">

<h1 className="text-4xl md:text-5xl font-bold">
Discover Travel Experiences
</h1>

<p className="mt-3 text-gray-200">
Explore adventures shared by travelers around the world
</p>

</div>

{/* listings */}
<div className="space-y-6">

{listings.map((listing)=>(

<ListingCard
key={listing._id}
listing={listing}
/>

))}

</div>

</div>

</div>

);
}