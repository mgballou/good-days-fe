# Good Days

Good Days is a mental health tracking and journaling application meant to encourage mindful reflections throughout one's day.

Good Days is a full-stack MERN application primarily built during a 1-week sprint as a solo developer. This repo houses general README info for frontend and backend, but the backend code is available here - https://github.com/mgballou/good-days-be

Users can create journal entries across multiple days and review thiese, along with a user-defined numerical 'mood' value.

The app is currently in early development with a stable production release is available with core functionality implemented. 

https://main--fluffy-malabi-11ab39.netlify.app/


Demo Accounts are available to check out the app's features:

u: demo_user1  
p: demo_user1  

  

u: demo_user2  
p: demo_user2  

  

u: demo_user3  
p: demo_user3  

  

Future development cycles will focus on the following features:  

Mobile Responsive Design  
Ongoing Styling Iteration  
Implement trend visualization for mood values across multiple days  
Implement a calendar focused view that shows the same data as the timeline view  





     
Screenshots
<img width="1266" alt="Screen Shot 2023-05-15 at 9 31 27 AM" src="https://github.com/mgballou/good-days-fe/assets/125108218/09cd6dea-e553-41e8-987b-6ac6b7404a04">

<img width="1266" alt="Screen Shot 2023-05-15 at 9 31 46 AM" src="https://github.com/mgballou/good-days-fe/assets/125108218/00823c40-6f34-4f78-aa9b-92da151aeba9">

<img width="1266" alt="Screen Shot 2023-05-15 at 9 32 01 AM" src="https://github.com/mgballou/good-days-fe/assets/125108218/59af49a8-a8c2-49aa-8c78-034d4e5e35b9">

<img width="1266" alt="Screen Shot 2023-05-15 at 9 32 15 AM" src="https://github.com/mgballou/good-days-fe/assets/125108218/e7c4b5a0-f739-4aa3-ac6c-615ca57b64cd">

<img width="1266" alt="Screen Shot 2023-05-15 at 9 33 31 AM" src="https://github.com/mgballou/good-days-fe/assets/125108218/f708c7d9-218d-4b72-9e5b-6301119df9ab">  




      

Technologies Used:  
  
Front End:  
React  
TailwindCSS  
Heroicons  
date-fns  

  
Back End:  
Mongoose, MongoDB  
Passport, Passport-JWT  
BCrpyt  
Axios  

    
To set up this application to run in your local environment, you'll need to clone down this repository as well as the backend repository linked above.  

After navigating into the appropriate front end directory, run npm i to install dependencies. You'll need to create a .env.local file and include the following variables:  

REACT_APP_DAYS_URL = "http://localhost:0000/days"  
REACT_APP_ENTRIES_URL = "http://localhost:0000/entries"  
REACT_APP_AUTH_URL = "http://localhost:0000/auth"  

Please replace 0000 with the port that you'll be using on the backend.  

In the backend repository, you'll also need to install dependencies, then create a .env file. In this file, you'll need to point to your own MongoDB collection, specify the port, and include a JWT_SECRET.  


