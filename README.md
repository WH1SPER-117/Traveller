# Traveller – Mini Travel Experience Platform

## Live Demo - https://traveller-two-gamma.vercel.app/
⚠️ Server Wake-Up Notice ⚠️

This app is hosted on Render's free tier.
If the site has been inactive for a while, the server may take up to a minute to start when you first visit.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Next.js
- Tailwind CSS
- Cloudinary
- JWT Authentication

## Features
- User registration and login
- Create travel experience listings
- Upload images
- Browse public feed
- Like listings
- User dashboard
- Edit/Delete listings

## Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
- Image Storage: Cloudinary

## Why I chose This tech-stack
I select the MERN style stack (Next js, Node js, Express, MongoDB) because it allows entire application to be built using JS across both frontend and backend it make easier to develop.
- Next.js provides server-side rendering and easy deployment on platforms like Vercel.
- Express.js with Node.js offers a lightweight and flexible backend for building REST APIs.
- MongoDB is easy to develop and well suited for this project because travel listings are document-based and scalable

## How authentication works in the application (JWT)
1. user register with email and password
2. password is encripting by using bcrypt before storing DB
3. when user log in server verify the credentials and if valid server genarate token and send it to client
4. The client stores the token and includes it in the Authorization header for protected API requests

##  How travel listings are stored in the database 
Travel listings are stored in MongoDB using a Mongoose schema and to store images use cloudinary
- title
- location
- imageURL (link of that image stored in cloudinary)
- description
- price
- creater (reference user ID)
- created timestamp

##  One improvement you would implement if you had more time 
if i had more time i would like to improve the Response of mobile UI.

this woluld improve the user experience because then users can even if he has small display(mobile phone). then user no need to Pc or Tab computer to access this web site.

## PRODUCT THINKING QUESTION 
To improve user experience and performance, I introduce infinite scrolling instead of pagination because pagination clicking pages feels like old school, and it breaks the flow in social-style apps by using scrolling, users stay longer and good for the feed, and it uses a lazy loading style, which increases the performance. By using search and filter, users can easily find or filter what kind of things or area of his/her needs with the help of database indexing. Instead of asking for the same request 50-60 times, we can implement catching strategies and store the results somewhere and reuse them, it reduce our server workload. improving how the API handles requests and returns data so responses are faster and servers handle more users. By implementing/adding those things, we can increase out performance user experience.
