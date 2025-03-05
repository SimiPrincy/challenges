"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const CoffeeCard = ({ coffee }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white relative">
      {coffee.popular && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
          Popular
        </span>
      )}
      <img src={coffee.image} alt={coffee.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-2 font-semibold">{coffee.name}</h3>
      <p className="text-sm text-gray-300">${coffee.price}</p>
      {coffee.rating && (
        <p className="text-yellow-400 text-sm">
          ⭐ {coffee.rating} ({coffee.votes} votes)
        </p>
      )}
      {!coffee.available && <p className="text-red-500 text-sm">Sold Out</p>}
    </div>
  );
};

export default function Home() {
  const [coffees, setCoffees] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
      .then((res) => res.json())
      .then((data) => setCoffees(data))
      .catch((error) => console.error("Error fetching coffee data:", error));
  }, []);

  const filteredCoffees = showAvailable ? coffees.filter(c => c.available) : coffees;
  return (
    <div className="bg-gray-950 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Image 
        src="/bg-cafe.jpg" 
        width={500} 
        height={500} 
        alt="cafe" 
        className="w-full h-[50vh] object-cover"
      />
      <div className="flex flex-row p-8 bg-gray-950 rounded-lg shadow-xl -mt-24 mx-36 relative">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-3xl font-bold">Our Collection</h1>
        <p className="text-gray-400 ">Introducing our coffee Collection, a selection of unique coffee from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <div className="mt-4">
          <button
            onClick={() => setShowAvailable(false)}
            className={`px-4 py-2 rounded-l-lg ${!showAvailable ? "bg-gray-700" : "bg-gray-500"}`}
          >
            All Products
          </button>
          <button
            onClick={() => setShowAvailable(true)}
            className={`px-4 py-2 rounded-r-lg ${showAvailable ? "bg-gray-700" : "bg-gray-500"}`}
          >
            Available Now
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredCoffees.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
