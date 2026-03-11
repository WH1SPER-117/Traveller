import API from "../services/api";

export default function LikeButton({ listing, setListing }) {

const handleLike = async () => {

try {

const res = await API.post(`/listings/${listing._id}/like`);

setListing({
...listing,
likes: Array(res.data.likes).fill("x")
});

} catch (err) {

alert("Login required to like");

}

};

return (

<button
onClick={handleLike}
className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg hover:bg-white/20 transition text-orange-400"
>

<span className="text-xl hover:scale-110 transition">❤️</span>

<span className="font-semibold">
{listing.likes.length}
</span>

</button>

);

}