import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 px-4 text-white '>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p>
                        Sign up to our weekly newsletter and stay up to date.
                    </p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='p-3 flex-1 rounded-md text-black'
                        />
                        <button className='bg-[#4361ee] text-white font-bold rounded-md px-6 py-3 ml-4 w-full sm:w-auto mt-4 sm:mt-0'>
                            Notify Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter