'use client';

import { useState, useEffect } from "react";

export default function Intro() {
    const [introVisible, setIntroVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
            setIntroVisible(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`intro-page ${introVisible ? '' : ''} bg-slate-900 transition-opacity-100 duration-10`}>
      <h1 className="text-4xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Hello</h1>
    </div>
  
    );
    }