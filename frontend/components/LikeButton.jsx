import API from "../services/api";

export default function LikeButton({listing,setListing}){

const handleLike = async ()=>{

try{

const res = await API.post(`/listings/${listing._id}/like`);

setListing({
...listing,
likes:Array(res.data.likes).fill("x")
});

}catch(err){

alert("Login required to like");

}

};

return(

<button
onClick={handleLike}
className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
>

❤️ {listing.likes.length}

</button>

);

}