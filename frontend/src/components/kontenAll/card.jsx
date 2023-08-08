import React, { useState, useEffect } from "react";

const Card = ({ title, description, image }) => {
  const [kategori, setKategori] = useState([]);

  useEffect(() => {
    fetchKategori();
  }, []);

  const fetchKategori = async () => {
    try {
      const response = await fetch("http://localhost:3100/kategori/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setKategori(data);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  return (
    <>
      {kategori.map(
        (
          item // Rename the kategori parameter inside the map to avoid conflict
        ) => (
          <div
            key={item.id} // Add a unique key to each mapped element (e.g., use 'id' property)
            className="bg-white shadow-lg rounded-lg overflow-hidden w-[239px] mr-5 h-[290px] mt-5"
          >
            <img
              className="w-20 h-20 mt-5 ml-5 rounded-full object-cover"
              src={`http://localhost:3100/images/kategori/${item.image}`}
              alt="Card Image"
            />
            <div className="p-4 mt-12">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Card;
