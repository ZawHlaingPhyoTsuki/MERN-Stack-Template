import React, { useState } from 'react'
import StoreCard from './StoreCard';


const AboutUs = () => {
    const [selectedCard, setSelectedCard] = useState(1)
  return (
    <section className=' '>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 self-center w-[80%] tet-justify">
          <h1 className="text-5xl font-semibold">Our Story</h1>
          <p className="font-sans mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            maxime quaerat, harum molestiae officia eligendi fugiat nostrum
            saepe repudiandae iste sint cum a. Labore sapiente dignissimos
            soluta ullam debitis. Atque.
          </p>
          <p className="font-sans ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium facere et quis, earum blanditiis corrupti omnis magnam
            reprehenderit pariatur labore?
          </p>
        </div>
        <div>
          <img
            className="rounded-md"
            src="../../../public/Pasted image.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8  place-content-between">
        {[0, 1, 2, 3].map((index) => (
          <StoreCard
            key={index}
            isActive={selectedCard === index}
            onClick={() => setSelectedCard(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutUs
