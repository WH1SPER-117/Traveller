import { useEffect, useState } from "react";
import API from "../services/api";
import ListingCard from "../components/ListingCard";
import Navbar from "../components/Navbar";

export default function Home() {

const [listings,setListings] = useState([]);

useEffect(()=>{
fetchListings();
},[]);

const fetchListings = async ()=>{

const res = await API.get("/listings");

setListings(res.data);

};

return (

<div>

<Navbar/>

<div className="max-w-6xl mx-auto p-6">

<h1 className="text-3xl font-bold mb-6">
Travel Experiences
</h1>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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