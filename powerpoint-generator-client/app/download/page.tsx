"use client";
import React from 'react'
import PowerPoint from '../components/PowerPoint'

const download = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-10">Download PowerPoint Here</h1>
        <button className="btn btn-secondary btn-lg mt-5" onClick={() => {
            const rawText = localStorage.getItem("RawText");
            if (rawText) {
              PowerPoint(JSON.parse(rawText));
            }
        }}>Download</button>
    </div>
  )
}

export default download     