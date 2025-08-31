import React from 'react'

function CompetitionCard() {
  return (
    <section className='flex flex-col items-center justify-around max-w-[390px] min-h-[380px] bg-gradient-to-r from-[#280087] to-[#C00000] rounded-2xl p-1 text-center gap-5'>
            <div className='flex flex-col items-center justify-around w-full h-full bg-black rounded-2xl p-5 text-center gap-5'>
              <img src="/img/indo.png" alt="" />
            <h1 className='text-white font-semibold text-2xl'>1st Place for ISSC Event By Presmanesia</h1>
            <p className='text-white text-center text-sm'>"I'am proudly secured 1st place in the ISSC Event, making it a truly memorable milestone."</p>
            <a href="https://drive.google.com/drive/folders/1lQhCp73UNCH-Ky69UEpVG6vwcLmMPa2v"  target='_blank' className="my-7 cursor-pointer">
            <button className="text-white font-semibold bg-gradient-to-tr hover:scale-105 from-[#280087] to-[#C00000] cursor-pointer  p-3 rounded-xl">See More</button>
          </a>
            </div>
        </section>
  )
}

export default CompetitionCard
