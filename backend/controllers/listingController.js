const Listing = require("../models/Listing");

exports.createListing = async (req, res) => {
try {

const { title, location, description, price } = req.body;

if (!req.file) {
return res.status(400).json({ message: "Image is required" });
}

const imageUrl = req.file.path;

const listing = await Listing.create({
title,
location,
description,
price,
imageUrl,
creator: req.user.id
});

console.log(req.body);
console.log(req.file);

res.status(201).json(listing);



} catch (error) {
res.status(500).json({ message: error.message });
}
};

exports.getListings = async (req, res) => {
try {

const listings = await Listing.find()
.populate("creator", "name")
.sort({ createdAt: -1 });

res.json(listings);

} catch (error) {
res.status(500).json({ message: error.message });
}
};

exports.getListingById = async (req, res) => {
try {

const listing = await Listing.findById(req.params.id)
.populate("creator", "name");

if (!listing) {
return res.status(404).json({ message: "Listing not found" });
}

res.json(listing);

} catch (error) {
res.status(500).json({ message: error.message });
}
};

exports.getMyListings = async (req, res) => {
try {

const listings = await Listing.find({
creator: req.user.id
}).sort({ createdAt: -1 });

res.json(listings);

} catch (error) {
res.status(500).json({ message: error.message });
}
};

exports.updateListing = async (req, res) => {
try {

const listing = await Listing.findById(req.params.id);

if (!listing) {
return res.status(404).json({ message: "Listing not found" });
}

if (listing.creator.toString() !== req.user.id) {
return res.status(403).json({ message: "Not authorized" });
}

Object.assign(listing, req.body);

const updatedListing = await listing.save();

res.json(updatedListing);

} catch (error) {
res.status(500).json({ message: error.message });
}
};

exports.deleteListing = async (req, res) => {
try {

const listing = await Listing.findById(req.params.id);

if (!listing) {
return res.status(404).json({ message: "Listing not found" });
}

if (listing.creator.toString() !== req.user.id) {
return res.status(403).json({ message: "Not authorized" });
}

await listing.deleteOne();

res.json({ message: "Listing deleted" });

} catch (error) {
res.status(500).json({ message: error.message });
}
};

exports.toggleLike = async (req, res) => {
try {

const listing = await Listing.findById(req.params.id);

if (!listing) {
return res.status(404).json({ message: "Listing not found" });
}

const userId = req.user.id;

const alreadyLiked = listing.likes.includes(userId);

if (alreadyLiked) {
listing.likes = listing.likes.filter(
(id) => id.toString() !== userId
);
} else {
listing.likes.push(userId);
}

await listing.save();

res.json({
likes: listing.likes.length
});

} catch (error) {
res.status(500).json({ message: error.message });
}
};