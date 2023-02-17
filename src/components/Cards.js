import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Avengers Endgame",
      rating: 5,
      year: "2018",
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
        name: "Avengers Endgame",
        rating: 5,
        year: "2018",
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
      },
      {
        name: "Avengers Endgame",
        rating: 5,
        year: "2018",
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
      },
      {
        name: "Avengers Endgame",
        rating: 5,
        year: "2018",
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
      },
      {
        name: "Avengers Endgame",
        rating: 5,
        year: "2018",
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
      },
      {
        name: "Avengers Endgame",
        rating: 5,
        year: "2018",
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
      },{
        name: "Avengers Endgame",
        rating: 5,
        year: "2018",
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
      },
      {
        name: "Avengers Endgame",
        rating: 5,
        year: "2018",
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
      },
  ]);
  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {data.map((e, i) => {
        return (
          <div key={i} className="card p-2 hover:-translate-y-2 cursor-pointer font-medium mt-6 mr-3 transition-all duration-500">
            <img className="h-72 shadow-lg" src={e.img} alt="" />
            <h1>
              <span className="text-blue-500">Name:</span> {e.name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-blue-500 mr-1">Rating:</span>
              <ReactStars size={20} half={true} value={e.rating} edit={false}/>
            </h1>
            <h1>
              <span className="text-blue-500">Year:</span> {e.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
