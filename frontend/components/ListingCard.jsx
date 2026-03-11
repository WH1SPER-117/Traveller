import Link from "next/link";
import { formatDistanceToNow } from "date-fns";



export default function ListingCard({ listing }) {

    const timeAgo = formatDistanceToNow(new Date(listing.createdAt), {
  addSuffix: true
});
return(

<div className="bg-white/10 backdrop-blur-md rounded-xl flex overflow-hidden shadow-lg hover:shadow-xl transition">

<img
src={listing.imageUrl}
className="w-72 h-48 object-cover"
/>

<div className="p-6 flex flex-col justify-between flex-1 text-white">

<div>

<h2 className="text-3xl font-bold">
{listing.title}
</h2>

<p className="text-1xl text-gray-300 font-bold">
{listing.location}
</p>

<p className="mt-2 text-sm text-gray-200 line-clamp-2">
{listing.description}
</p>

<p className="text-xs text-gray-400">
Posted {timeAgo}
</p>

</div>

<div className="flex justify-between items-center mt-4">

<span className="text-sm text-gray-300">
By {listing.creator?.name}
</span>



<Link
href={`/listing/${listing._id}`}
className="text-orange-400 hover:text-orange-300"
>
View Details →
</Link>

</div>

</div>

</div>

);
}