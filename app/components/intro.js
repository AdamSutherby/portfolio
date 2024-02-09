'use client';

import { useState, useEffect } from "react";

export default function Intro() {
    const [introVisible, setIntroVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 2 seconds!')
            setIntroVisible(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-1000 bg-black ${introVisible ? '' : 'opacity-0 pointer-events-none'}`}>
            <h1 className={`text-4xl text-white transition-transform duration-1000 ${introVisible ? 'translate-x-0 translate-y-0' : '-translate-y-full'}`}>Hello!</h1>
        </div>
  
    );
    }