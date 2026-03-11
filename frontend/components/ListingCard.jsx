import Link from "next/link";

export default function ListingCard({ listing }) {

return (

<div className="bg-white rounded-lg shadow-md overflow-hidden">

<img
src={listing.imageUrl}
className="w-full h-48 object-cover"
/>

<div className="p-4">

<h2 className="text-xl font-semibold">
{listing.title}
</h2>

<p className="text-gray-600">
{listing.location}
</p>

<p className="mt-2 text-sm text-gray-700">
{listing.description}
</p>

<p className="text-xs text-gray-500 mt-2">
By {listing.creator?.name}
</p>

<Link
href={`/listing/${listing._id}`}
className="text-blue-600 text-sm mt-2 block"
>
View Details
</Link>

</div>

</div>

);

}