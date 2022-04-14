import React from "react";

type Props = {};

export default function Carousel({}: Props) {
  const [items] = React.useState([1, 2, 3, 4]);
  return (
    <div className="flex items-center mx-auto overflow-x-hidden">
      {items.map((num, idx) => {
        return (
          <div key={idx} className="flex flex-col items-center mx-4">
            <h1>{num}</h1>
            <div className="w-64 h-64 bg-green-400 rounded lg:w-80 lg:h-80"></div>
          </div>
        );
      })}
    </div>
  );
}
