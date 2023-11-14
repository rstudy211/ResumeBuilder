'use client'
import Form from '@components/Form'
import ResumeTemplate from '@components/ResumeTemplate'
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   globalThis?.addEventListener('beforeprint', () => {
  //     globalThis.document.title = `Resume_Builder_${Date.now()}`;
  //   });

  //   globalThis?.addEventListener('afterprint', () => {
  //     globalThis.document.title = 'Single Page Resume Builder';
  //   });
  // }, []);

  // useEffect(() => {
  //   const generatePDF = () => {
  //     if (typeof window !== 'undefined') {
  //       window.print();
  //     }
  //   };

  //   // Attach the generatePDF function to a global scope so that it can be accessed from the button click event
  //   window.generatePDF = generatePDF;
  // }, []);

  
  return (
    <section className='w-full print:m-0 flex-center flex-col'>
      <div className="flex w-full justify-between items-center">
      <div className="">
      <h1 className='print:hidden head_text text-left blue_gradient '>Resume Builder</h1>
      <h1 className='print:hidden text-xl tracking-wide my-2 font-medium text-slate-600'>Welcome to the Resume Builder</h1>
      </div>
  <button className='print:hidden black_btn block'   onClick={globalThis?.print}npm>Download</button>
      

      </div>
      

      <div className="flex w-full items-start justify-end gap-5">
      <Form></Form>

<ResumeTemplate />
      </div>
      
      
    </section>
  )
}
