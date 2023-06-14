import React from 'react'
import {Link} from 'react-router-dom'







const Cards = () => {
    
    return (
        <>
        <div className='flex justify-between items-center'> <span><h1 className='text-3xl font-bold mx-8 position:relative mt-10 hover:text-purple-800 hover:cursor-pointer'>Latest Movie in 2023</h1></span>
        <Link to={'/ShowAll1'}>
        <span className='text-2xl font-bold bg-white mx-12 p-2 rounded-xl position:relative mt-10 text-black hover:bg-blue-600 hover:text-white '><button>Show All..</button></span>   
        </Link>
        </div>
        <div className='flex justify-between  items-center flex-wrap p-5  '>
        <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
              <Link to={'/AvengerInfinity'}><span> <img className='h-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/199925/AvengersInfinityWar-4K-1000x1000.jpg" alt="" />
               
               <h1 className='text-2xl p-1 
            hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Avengers Endgame</h1></span></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.5/5.0</h1>
              
               <h1 className='text-xl p-1  ' >Year:- 2019</h1>
           </div>
           <div className='hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
              <Link to={'/Strange'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" alt="" />
               </span>
               <h1 className='text-2xl p-1 
            hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Dr. Strange Multiverse</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2022</h1>
           </div>
           <div className=' hover:-translate-x-1md:mt-3 hover:translate-y-1'>
              <Link to={'/John'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBejmsN1tTboCGogzogDD7HkHZA376DRujetG2rx3JvCv2kuDupwhxAGS8cTinyMA_uM&usqp=CAU" alt="" />
               </span>
               <h1 className='text-2xl p-1 
            hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- John Wick Chapter-4</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2023</h1>
           </div>
           <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
              <Link to={'/Avatar2'}> <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="" />
               </span>
               <h1 className='text-2xl p-1 
            hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:-Avatar 2 Way of Water</h1></Link>

               <h1 className='text-xl p-1  ' >Rating:- 4.6/5.0</h1>
               <h1 className='text-xl p-1  ' >Year:- 2023</h1>
           </div>

       </div>
        <div className='flex justify-between items-center'> <span><h1 className='text-3xl font-bold mx-8 position:relative mt-10 hover:text-purple-800 hover:cursor-pointer'>Bollywood Superhit Movies Ever</h1></span>
        <Link to={'/ShowAll1'}>
        <span className='text-2xl font-bold bg-white mx-12 p-2 rounded-xl position:relative mt-10 text-black hover:bg-blue-600 hover:text-white '><button>Show All..</button></span>   
        </Link>
        </div>
        <div className='flex justify-between  items-center flex-wrap p-5  '>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/199925/AvengersInfinityWar-4K-1000x1000.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Avengers Endgame</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.5/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2019</h1>
            </div>
            <div className='hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Dr. Strange Multiverse</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2022</h1>
            </div>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBejmsN1tTboCGogzogDD7HkHZA376DRujetG2rx3JvCv2kuDupwhxAGS8cTinyMA_uM&usqp=CAU" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- John Wick Chapter-4</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2023</h1>
            </div>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:-Avatar 2 Way of Water</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.6/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2023</h1>
            </div>

        </div>
        <div className='flex justify-between items-center'> <span><h1 className='text-3xl font-bold mx-8 position:relative mt-10 hover:text-purple-800 hover:cursor-pointer'>Hollywood Superhit MOvie Ever</h1></span>
        <Link to={'/ShowAll1'}>
        <span className='text-2xl font-bold bg-white mx-12 p-2 rounded-xl position:relative mt-10 text-black hover:bg-blue-600 hover:text-white '><button>Show All..</button></span>   
        </Link>
        </div>
        <div className='flex justify-between  items-center flex-wrap  p-5  '>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/199925/AvengersInfinityWar-4K-1000x1000.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Avengers Endgame</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.5/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2019</h1>
            </div>
            <div className='hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Dr. Strange Multiverse</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2022</h1>
            </div>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBejmsN1tTboCGogzogDD7HkHZA376DRujetG2rx3JvCv2kuDupwhxAGS8cTinyMA_uM&usqp=CAU" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- John Wick Chapter-4</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2023</h1>
            </div>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:-Avatar 2 Way of Water</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.6/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2023</h1>
            </div>

        </div>
        <div className='flex justify-between items-center'> <span><h1 className='text-3xl font-bold mx-8 position:relative mt-10 hover:text-purple-800 hover:cursor-pointer'>Web Series in Hindi</h1></span>
        <Link to={'/ShowAll1'}>
        <span className='text-2xl font-bold bg-white mx-12 p-2 rounded-xl position:relative mt-10 text-black hover:bg-blue-600 hover:text-white '><button>Show All..</button></span>   
        </Link>
        </div>
        <div className='flex justify-between  items-center flex-wrap  p-5  '>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/199925/AvengersInfinityWar-4K-1000x1000.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Avengers Endgame</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.5/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2019</h1>
            </div>
            <div className='hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Dr. Strange Multiverse</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2022</h1>
            </div>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBejmsN1tTboCGogzogDD7HkHZA376DRujetG2rx3JvCv2kuDupwhxAGS8cTinyMA_uM&usqp=CAU" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- John Wick Chapter-4</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2023</h1>
            </div>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:-Avatar 2 Way of Water</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.6/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2023</h1>
            </div>

        </div>
        <div className='flex justify-between items-center'> <span><h1 className='text-3xl font-bold mx-8 position:relative mt-10 hover:text-purple-800 hover:cursor-pointer'>Cartoons for kids</h1></span>
        <Link to={'/ShowAll1'}>
        <span className='text-2xl font-bold bg-white mx-12 p-2 rounded-xl position:relative mt-10 text-black hover:bg-blue-600 hover:text-white '><button>Show All..</button></span>   
        </Link>
        </div>
        <div className='flex justify-between  items-center flex-wrap  p-5  '>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/199925/AvengersInfinityWar-4K-1000x1000.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Avengers Endgame</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.5/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2019</h1>
            </div>
            <div className='hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- Dr. Strange Multiverse</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2022</h1>
            </div>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBejmsN1tTboCGogzogDD7HkHZA376DRujetG2rx3JvCv2kuDupwhxAGS8cTinyMA_uM&usqp=CAU" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:- John Wick Chapter-4</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.4/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2023</h1>
            </div>
            <div className=' hover:-translate-x-1 md:mt-3 hover:translate-y-1'>
                <span> <img className='h-80 w-80 hover:cursor-pointer rounded-xl  hover:text-blue-600 active:text-purple-600 ' src="https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg" alt="" />
                </span>
                <h1 className='text-2xl p-1 
             hover:cursor-pointer hover:text-blue-600 active:text-purple-600'> Name:-Avatar 2 Way of Water</h1>
 
                <h1 className='text-xl p-1  ' >Rating:- 4.6/5.0</h1>
                <h1 className='text-xl p-1  ' >Year:- 2023</h1>
            </div>

        </div>
        
        </>
        
    )
}

export default Cards
