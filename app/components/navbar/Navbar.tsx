import React from 'react';

function Navbar() {
  return (
    <section className=' justify-between px-8 py-6 px-25 lg:flex lg:gap-x-12  sticky top-0 left-0 right-0 bg-slate-50 shadow-black dark:bg-slate-800'>
             <div className='logo'>Port<span className=''>folio</span></div>
             <ul className='flex'>
                <li className='mx-5'><a href="#" className="text-sm font-semibold leading-6 text-gray-900">Product</a></li>
                <li className='mx-5'><a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a></li>
                <li className='mx-5'><a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a></li>
                <li className='mx-5'><a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a></li>
             </ul>
    </section>

  );
}

export default Navbar;
