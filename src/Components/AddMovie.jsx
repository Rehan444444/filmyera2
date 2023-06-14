// import React from 'react'
import React, { useState } from "react";
import {TailSpin}from "react-loader-spinner";
// import {AddDoc} from "firebase/firestore";
// import {movieref} from "../Firebase/Firebase";
// import swal from "sweetalert";

const AddMovie = () => {
    const [Loading, setLoading]= useState(false);

    const AddMovie = async() => {
        setLoading(true);
      await AddDoc( movieref, form);
      swal({
         title:"Sucessfully added",
         icon:"Success",
         button:"false",
         timer:3000
      })
      setLoading(false);
    }


    const [form, setForm] = useState({
        title: " ",
        year: " ",
        description: " ",
        image:" "
    });
    return (
        <>
            <div className=''>
                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                            <h1  class="sm:text-3xl text-3xl  font-medium title-font mb-4 text-white ">Sign-Up Here</h1>

                        </div>
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-white">First Name</label>
                                        <input type="text" id="name" name="name" placeholder="Ex-John"  value={form.title} onChange={(e)=> setForm({...form, title:e.target.value})} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-white">Last Name</label>
                                        <input type="email" id="email" name="email"  value={form.year} onChange={(e)=> setForm({...form, year:e.target.value})} class="w-full bg-white bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                                    </div>
                                </div>
                                <div className="image ">
                                <label for="name" class="leading-7 text-sm text-white my-2 mx-2">Email</label>
                                <input id="message" name="message" 
                                        value={form.image} onChange={(e)=> setForm({...form, image:e.target.value})} class="  bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 mx-3 my-3 w-[38rem] h-10 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-sm text-white">Review of this site</label>
                                        <textarea id="message" name="message" placeholder='Give any Message about this Movie'
                                        value={form.description} onChange={(e)=> setForm({...form, description:e.target.value})} class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                <button onClick={AddMovie} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{Loading? <TailSpin height={25} color="white"/> :'Submit'}</button>
                                </div>
                               <div className="mx-56 p-3 text-green-500 underline  text-xl font-medium hover:text-blue-700 hover:cursor-pointer active:text-purple-600 hover:underline">
                                    <h1>  Login as old User</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>



        </>
    )
}

export default AddMovie
