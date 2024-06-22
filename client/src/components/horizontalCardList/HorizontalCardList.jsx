import React from 'react'
import VerticalItemCard from '../verticalCard/VerticalItemCard'

const HorizontalCardList = () => {
  return (
    <div className="flex flex-col gap-1 ">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
        <VerticalItemCard key={index} />
      ))}
    </div>
  );
}

export default HorizontalCardList