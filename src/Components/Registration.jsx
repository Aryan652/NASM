
import React, {useState} from "react";

// react icons
import {MdDone} from "react-icons/md";
import {IoSearchOutline} from "react-icons/io5";
import {BsCashStack} from "react-icons/bs";
import {SlLocationPin} from "react-icons/sl";
import {HiOutlineUpload} from "react-icons/hi";

const Registration = () => {

    const [step, setStep] = useState(1)

    const handleNextStep = () => {
        if(step < 4) {
            setStep(step + 1)
        }
    };
    const handlePrevStep = () => setStep(step - 1);

    const steps = [
        {
            id: 1,
            name: "account type"
        },
        {
            id: 2,
            name: "personal info"
        },
        {
            id: 3,
            name: "profile data"
        },
    ]

    const [selectedPostionCardId, setSelectedPositionCardId] = useState(false);

    const positionCards = [
        {
            id: 1,
            title: "Front-End Developer",
            description: "remove a border style that was applied at a smaller breakpoint.",
            from_start: 50,
        },
        {
            id: 2,
            title: "Back-End Developer",
            description: "remove a border style that was applied at a smaller breakpoint.",
            from_start: 100,
        },
        {
            id: 3,
            title: "Laravel Developer",
            description: "remove a border style that was applied at a smaller breakpoint.",
            from_start: 80,
        },
        {
            id: 4,
            title: "Mern Stack Developer",
            description: "remove a border style that was applied at a smaller breakpoint.",
            from_start: 110,
        }
    ]

    return (
        <div className="w-full sm:w-[90%] max-w-[700px] mx-auto  p-2 md:p-4 lg:p-6">
            <div className="w-full sm:w-[90%] max-w-[700px] mx-auto text-center">
                <span className="text-brandColor font-[700] text-[35] md:text-[40px] leading-[3rem] md:leading-[4.5rem] drop-shadow-md style={{ textShadow: '0 0 10px rgba(0, 0, 255, 0.5), 0 0 20px rgba(0, 0, 255, 0.3)' }}">
                    Registration
                </span>
            </div>
            <div className="w-full sm:flex-row flex-col flex items-center gap-[20px] sm:gap-[10px]">
                
                {
                    steps?.map((stepItem, index) => (
                        <p key={index} className="flex items-center w-full gap-[10px]">
                            {
                                step <= stepItem.id && (
                                    <p className={`w-[30px] h-[30px] p-[20px] text-gray-500 flex items-center justify-center text-[1.2rem] rounded-full bg-gray-50`}>{stepItem?.id}</p>
                                )
                            }

                            {
                                step >= (stepItem.id + 1) && (
                                    <div
                                        className="p-[10px] h-[40px] w-[40px] rounded-full bg-blue-500 text-white flex items-center justify-center">
                                        <MdDone className="text-[3rem]"/>
                                    </div>
                                )
                            }

                            <p className={`${step > stepItem.id ? "text-blue-500" : "text-gray-600"} text-[0.9rem] font-[400] sm:w-[75%] min-w-fit`}>{stepItem?.name}</p>

                            {
                                index < steps?.length - 1 && (
                                    <div className={`${
                                        step >= (stepItem.id + 1) ? "bg-blue-500" : "bg-gray-300"
                                    } w-full h-[5px] rounded-full`}></div>
                                )
                            }
                        </p>
                    ))
                }
            </div>

            <form className="mt-16 w-full">
                {
                    step === 1 && (
                        <div className="flex flex-col w-full">
                            <div className="w-full relative">
                                <label className="text-[1rem] text-gray-600">Name</label> <br/>
                                <input type="text" placeholder="Jon Snow"
                                       className="py-2.5 pl-4 pr-[40px] border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                            </div>
                            <div className="w-full relative mt-4">
                                <label className="text-[1rem] text-gray-600">Address</label> <br/>
                                <input type="text" placeholder="Biratnagar-10, Morang"
                                       className="py-2.5 pl-4 pr-[40px] border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                            
                            </div>

                            
                        </div>
                    )
                }

                {
                    step === 2 && (
                        <div className="flex flex-col gap-[20px] w-full">
                            <div className="w-full relative">
                                <label className="text-[1rem] text-gray-600">Roles</label> <br/>
                                <input type="text" placeholder="Job title, position"
                                       className="py-2.5 pl-4 pr-[40px] border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                                <IoSearchOutline
                                    className="absolute text-[1.2rem] top-[40px] right-3 text-gray-500"/>
                            </div>

                            <p className="text-[1rem] font-[400] text-gray-500 mt-8">Suggestions</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                                {
                                    positionCards?.map((card, index) => (
                                        <div key={index}
                                             onClick={() => setSelectedPositionCardId(card?.id)}
                                             className={`${selectedPostionCardId === card?.id ? "border-primary" : "border-gray-300"} border cursor-pointer rounded-md p-[15px]`}>
                                            <div
                                                className="flex items-center gap-[10px] justify-between w-full">
                                                <h1 className="text-[1.1rem] font-[500]">{card?.title}</h1>
                                                <div
                                                    className={` ${selectedPostionCardId === card?.od && "border-primary"} w-[21px] h-[21px] border border-gray-300  rounded-full flex items-center justify-center cursor-pointer `}>
                                                    <div className={`${
                                                        selectedPostionCardId === card?.id ? "bg-[#3B9DF8] scale-[1]" : "bg-transparent scale-[0.7]"} w-[11px] h-[11px] transition-all duration-200 rounded-full`}></div>
                                                </div>
                                            </div>
                                            <p className="text-[0.9rem] text-gray-500 font-[300] mt-1">{card?.description}</p>

                                            <p className="flex items-center gap-[10px] mt-3 text-[0.8rem] text-gray-700 bg-gray-100 py-[5px] px-[10px] w-max">
                                                <BsCashStack/>
                                                from ${card?.from_start} per hour
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }

                {
                    step === 3 && (
                        <div className="flex flex-col gap-[20px] w-full">
                            <div className="w-full">
                                <label className="text-[1rem] text-gray-600">Location</label> <br/>
                                <input type="text" placeholder="e.g. Juri, Moulvibazar"
                                       className="py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                            </div>
                            <div className="w-full">
                                <label className="text-[1rem] text-gray-600">Roles</label> <br/>
                                <input type="text" placeholder="e.g. 360 operator, steel fixer"
                                       className="py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                            </div>
                            <div className="w-full">
                                <label className="text-[1rem] text-gray-600">Name</label> <br/>
                                <input type="text" placeholder="e.g. Jhon Deo"
                                       className="py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                            </div>

                            <div className="w-full">
                                <label className="text-[1rem] text-gray-600">Phone</label> <br/>
                                <input type="number" placeholder="e.g. +8801305282768"
                                       className="py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                            </div>

                            <div className="w-full">
                                <label className="text-[1rem] text-gray-600">Certification <span
                                    className="text-gray-300 font-[400] text-[0.9rem]">(optional)</span></label>
                                <br/>
                                <label
                                    className="w-full h-[200px] border-2 border-dashed border-gray-300 flex items-center flex-col justify-center rounded-md mt-1">
                                    <HiOutlineUpload className="text-[2.7rem] text-blue-300"/>
                                    <p className="flex sm:flex-row flex-col items-center gap-[5px] text-[1rem] mt-2">
                                        <a className="underline text-gray-700 font-bold ">Click
                                            to upload</a>
                                        or drag & drop
                                    </p>
                                    <input type="file"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 rounded-md outline-none hidden"/>
                                </label>
                            </div>
                        </div>
                    )
                }

                {
                    step === 4 && (
                        <div className="flex items-center justify-center w-full flex-col">
                            <img src="https://i.ibb.co/LC1yhZG/Prize-cup-for-the-first-place-removebg-preview.png"
                                 alt="vector" className="w-[200px]"/>

                            <h1 className="text-[1.4rem] font-[600] mt-4">We"ve receive your application!</h1>
                            <p className="text-gray-500 text-[1rem] font-[400] mt-1">We will process it and reach out to you
                                in a days.</p>
                        </div>
                    )
                }

                <div className="w-full flex items-end justify-start mt-12 ">
                    <button disabled={step <= 1} type="button" onClick={handlePrevStep}
                            className={`${step <= 1 && "cursor-not-allowed"} text-[1rem] text-gray-500 px-6 py-2.5`}>Previous
                    </button>
                    <button disabled={step > 3} type="button" onClick={handleNextStep}
                            className={`${step > 3 && "!bg-blue-300 cursor-not-allowed"} bg-blue-500 py-2.5 px-6 rounded-md text-white`}>
                        {step > 2 ? "Submit" : "Next"}
                    </button>
                    
                </div>
            </form>
            <br></br>
            <br></br>
        </div>
    );
};

export default Registration;
{/* 
To integrate MongoDB with your React application using Cloudflare's serverless functions, you can follow these general steps:


Set Up MongoDB Atlas:

Create a MongoDB Atlas account and set up a cluster.
Obtain your MongoDB connection string (MONGODB_URI) from the Atlas dashboard.

Create a Cloudflare Worker:

Log in to your Cloudflare account and create a new Worker.
Use the Cloudflare Workers dashboard to create and manage your serverless functions.

Install MongoDB Node.js Driver:

Since Cloudflare Workers use JavaScript, you can use the MongoDB Node.js driver to interact with 
your MongoDB Atlas cluster.

Write Your Serverless Function:

Create a JavaScript file for your Cloudflare Worker. Here is an example of how you can connect to 
MongoDB and perform a simple query:

const { MongoClient } = require('mongodb');
const MONGODB_URI = 'YOUR_ATLAS_URI_HERE';
const client = new MongoClient(MONGODB_URI);
async function handleRequest(request) {
    try {
        await client.connect();
        const database = client.db('example');
        const collection = database.collection('people');
        const people = await collection.find({}).toArray();
        return new Response(JSON.stringify(people), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response('Error connecting to MongoDB', { status: 500 });
    } finally {
        await client.close();
    }
}
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});


Deploy Your Worker:

Deploy your Cloudflare Worker using the Cloudflare dashboard or the Wrangler CLI.

Integrate with Your React Application:

In your React application, make HTTP requests to your Cloudflare Worker endpoint to fetch data from MongoDB.
 For example:

import React, { useEffect, useState } from 'react';
function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('YOUR_CLOUDFLARE_WORKER_URL')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <h1>People</h1>
            <ul>
                {data.map(person => (
                    <li key={person._id}>{person.firstname} {person.lastname}</li>
                ))}
            </ul>
        </div>
    );
}
export default App;

By following these steps, you can integrate MongoDB with your React application using Cloudflare's
 serverless functions. This setup allows you to leverage the scalability and flexibility of serverless 
 architecture while interacting with your MongoDB Atlas database.
    */}