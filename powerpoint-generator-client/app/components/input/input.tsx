"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import structure from './structure';

const InputArea = () => {
    const [topic, setTopic] = useState({'title': '', 'description': ''});

    const handleChange = (e: any) => {
      setTopic({...topic, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: any) => {
      console.log(topic);
      e.preventDefault();
      const genBtn = document.getElementById('GenBtn');
      if (genBtn) {
        genBtn.innerHTML = '<span class="loading loading-dots loading-lg"></span>';
      }
      try {
        const response = await fetch('https://ppt-generator.vercel.app/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(topic)
        });
        const data = await response.json();
        // console.log(data.rawText);
        // console.log(data.text);

        localStorage.setItem("RawText",JSON.stringify(structure(data.rawText)));
        // PowerPoint(data.text);
        window.location.href = '/download';
      }
      catch (error) {
        console.log(error);
        const desArea = document.getElementById('desArea');
        if (desArea) {
          desArea.textContent = "Error: " + error;
        }
      }
      if (genBtn) {
        genBtn.innerHTML = 'Generate';
      }
    }

    useEffect(() => {
      let textarea = document.getElementById('desArea') as HTMLTextAreaElement;
      textarea.oninput = function() {
        textarea.style.height = "100px";
        textarea.style.height = Math.max(Math.min(textarea.scrollHeight, 300), 100) + "px";
      }
    }, [])
    

    
  return (
    <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center space-y-5">
        <input type="text" placeholder="Title" className="input input-bordered w-5/6 max-w-l"
        name="title" value={topic.title} onChange={(e) => handleChange(e)} />
        <textarea placeholder="Description" id="desArea" className="input input-bordered w-5/6 max-w-l py-2"
        style={{resize: 'none', height: '100px'}}
        name="description" value={topic.description} onChange={(e) => {handleChange(e)}}></textarea>
        <button id="GenBtn" className="btn btn-secondary">Generate</button>
        </div>
        
    </form>
  )
}

export default InputArea