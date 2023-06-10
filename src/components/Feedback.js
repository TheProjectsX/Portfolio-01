import React from 'react'
import person_01 from "../img/profile-01.png"
import person_02 from "../img/profile-02.png"
import person_03 from "../img/profile-03.png"

const Feedback = (props) => {
  return (
    <div className='p-10' id={props.id}>
      <h3 className='text-3xl sm:text-4xl md:text-5xl sm:w-2/3 md:w-1/2 font-bold mb-10'>Some Possitive Feedback That Encourage Us</h3>
      <div className="feedbacks flex flex-col gap-6 md:flex-row">
        <div className="item p-8 rounded-md border border-gray-300">
            <div className='flex items-center gap-3 mb-6'>
                <img src={person_01} alt="" className='w-20'/>
                <div>
                    <p className='text-red-400 font-bold mb-2'>Bradley Erickson</p>
                    <p className='text-gray-500'>UI/UX Designer</p>
                </div>
            </div>
            <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
        </div>
        <div className="item p-8 rounded-md border border-gray-300">
            <div className='flex items-center gap-3 mb-6'>
                <img src={person_02} alt="" className='w-20'/>
                <div>
                    <p className='text-red-400 font-bold mb-2'>Bradley Erickson</p>
                    <p className='text-gray-500'>UI/UX Designer</p>
                </div>
            </div>
            <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
        </div>
        <div className="item p-8 rounded-md border border-gray-300">
            <div className='flex items-center gap-3 mb-6'>
                <img src={person_03} alt="" className='w-20'/>
                <div>
                    <p className='text-red-400 font-bold mb-2'>Bradley Erickson</p>
                    <p className='text-gray-500'>UI/UX Designer</p>
                </div>
            </div>
            <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback
