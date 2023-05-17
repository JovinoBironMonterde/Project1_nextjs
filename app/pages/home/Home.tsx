import React from 'react';

function Home() {
  return (
   <section className='w-full h-full pt-10'>
    <div className="w-full h-full flex justify-center mt-10 ">
        <div className="profile w-56 ">
          <img src="https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="w-2/4  place-items-center  gap-14 place-content-evenly">
          <h4>Hello, I'm</h4>
          <h2>Jovino Monterde</h2>
          <h4>Im web developer</h4>
        </div>
    </div>
   </section>
  );
}

export default Home;
