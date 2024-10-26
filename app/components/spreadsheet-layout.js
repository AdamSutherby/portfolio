import React, { useState, useEffect } from 'react';
import SpreadsheetDemo from './spreadsheet';

const SpreadsheetLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    const element = document.getElementById('spreadsheet-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div 
      id="spreadsheet-section"
      className="w-[80%] mx-auto my-8"
      style={{
        transform: `translateX(${isVisible ? '0' : '-100%'})`,
        opacity: isVisible ? 1 : 0,
        transition: 'transform 1000ms cubic-bezier(0.4, 0, 0.2, 1), opacity 1000ms ease-out'
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Spreadsheet takes up 3 columns */}
        <div className="lg:col-span-3">
          <SpreadsheetDemo />
        </div>
        
        {/* Description takes up 2 columns */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Interactive Spreadsheet Demo</h2>
          
          <div className="prose prose-slate">
            <p className="text-slate-400 pb-1">
              This interactive spreadsheet allows you to manage and calculate product data with ease. 
              Features include:
            </p>
            
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>Multi-cell selection and bulk editing</li>
              <li>Keyboard navigation using arrow keys</li>
              <li>Automatic calculations for totals</li>
              <li>Text selection on cell focus</li>
              <li>Dynamic row addition</li>
            </ul>
            
            <p className="text-slate-400 mt-4 pb-1">
              Try it out by:
            </p>
            
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>Using arrow keys to navigate between cells</li>
              <li>Clicking and dragging to select multiple cells</li>
              <li>Typing in values to see automatic calculations</li>
              <li>Using Tab or Enter to move between cells</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetLayout;