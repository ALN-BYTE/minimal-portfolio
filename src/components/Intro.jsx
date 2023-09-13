import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Allan H.</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Computer Science Student</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a computer science student and I aspire to be a 
            <br />
            My github is right here {""}
            <a
               href="https://github.com/ALN-BYTE"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               ALN-BYTE
            </a>{" "}
            Check out my website.
         </p>
      </div>
   )
}

export default Intro;