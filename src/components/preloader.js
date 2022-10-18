import React from 'react';
import { useState } from 'react/cjs/react.production.min';
import Goku1 from "../assets/goku1.png";

export default function Preloader() {
  const quotes = [
    // {quote: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine"},
    // {quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein"},
    {quote: "It's unbelievable how much you don't know about the game you've been playing all your life.", author: "Mickey Mantel"},
    {quote: "With great power comes great resposibility.", author: "Stan Lee"},
    {quote: "You’ll laugh at your fears when you find out who you really are.", author: "Picollo"}
  ]
  const random = Math.floor(Math.random()*(quotes.length));
  return (
    <div class="preloader space-y-2">
      <div className="w-32 text-center goku-bg">
        <img src={Goku1} className=" invert"></img>
      </div>
      <div className='text-gray-200 font-light max-w-[400px]'>“{quotes[random].quote}”</div>
      <div className='text-sky-400 font-light max-w-[400px] text-sm'> - {quotes[random].author}</div>
      {/* <div className="lds-ripple">
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
}
