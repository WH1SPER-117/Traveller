const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
createListing,
getListings,
getListingById,
getMyListings,
updateListing,
deleteListing,
toggleLike
} = require("../controllers/listingController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getListings);
router.get("/my", protect, getMyListings);
router.get("/:id", getListingById);
router.post("/", protect, upload.single("image"), createListing);
router.put("/:id", protect, updateListing);
router.delete("/:id", protect, deleteListing);
router.post("/:id/like", protect, toggleLike);



module.exports = router;