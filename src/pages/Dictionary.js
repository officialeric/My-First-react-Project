import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary(){

    const [word,setWord] = useState();
    const navigate = useNavigate();

    return (
        <>
        <div className="block m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <form onSubmit={()=>{
                 navigate('/meaning/' + word);       
        }} className="flex">
        <input type='text' 
               placeholder='Any Word...'
               value={word} 
               onChange={(e)=>{setWord(e.target.value)}}
               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
               />
         <button className='shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                 type="submit" >
             Submit            
            </button>
            </form>
        </div>
        </>
    );
}