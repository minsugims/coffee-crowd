import { useState } from "react";
import { submitCoffeeBean } from "../services/api";

const CoffeeBeanForm = () => {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitCoffeeBean({ name, origin });
    alert("Coffee bean submitted!");
    setName("");
    setOrigin("");
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex items-start justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Submit a Coffee Bean</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Bean Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Bean Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="origin" className="block text-gray-700 font-medium mb-2">Origin</label>
          <input
            id="origin"
            type="text"
            placeholder="Enter Bean Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all"
          />
        </div>

        <button type="submit" className="w-full py-3 bg-stone-400 text-white rounded-lg hover:bg-stone-500 transition-all cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CoffeeBeanForm;