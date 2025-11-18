import React from 'react'

function Card(props) {
  return (
    <>
        <div className='mt-32 max-w-6xl mx-auto'>
            <div class="relative flex flex-col items-center group">
                <div class="overflow-hidden rounded-[50%] relative">
                    <img src={props.image} alt="Men" class="rounded-[50%] h-72 w-64 object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[50%]">
                        <button class="relative overflow-hidden z-10 border-2 px-4 py-2 text-sm font-sans rounded-3xl bg-black text-white cursor-pointer after:absolute after:text-black after:content-[''] after:left-0 after:bottom-0 after:h-full after:-z-10 after:rounded-lg after:bg-red-600 after:w-0 after:transition-all after:duration-300 hover:after:w-full">Shop Now</button>
                    </div>
                </div>
                <p class="text-2xl my-4">{props.title}</p>
            </div>
        </div>
    </>
  )
}

export default Card
