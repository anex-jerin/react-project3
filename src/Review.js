import React from 'react';
import data from './data';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];
  console.log(index)
  const surprise = ()=>{
    setIndex( Math.floor(Math.random()*data.length))
  }
  const nextPerson = () => {
    setIndex((index) => {
      if (index < data.length-1) {
        let newIndex = index + 1;
        return newIndex;
      }else{
        let newIndex = 0
        return newIndex
      } 
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      if (index !==0) {
        let newIndex = index-1;
        return newIndex;
      } else {
        let newIndex = data.length-1;
        return newIndex;
      }
    });
  };
  return (
    <div className='card'>
      <img src={image} alt='' />
      <span>
        <FaQuoteRight />
      </span>
      <h1>{name}</h1>
      <h3>{job}</h3>
      <p>{text}</p>
      <div className='btns'>
        <button onClick={prevPerson}>
          <FaChevronLeft className='icon' />
        </button>
        <button onClick={nextPerson}>
          <FaChevronRight className='icon' />
        </button>
      </div>
      <button className='s-btn' onClick={surprise}>surprise me</button>
    </div>
  );
};

export default Review;
