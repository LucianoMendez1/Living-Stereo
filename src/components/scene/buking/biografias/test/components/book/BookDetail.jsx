import React from 'react'
import './bookDetail.css'
import Marquee from "react-fast-marquee";

const BookDetail = ({arrBook}) => {
  return (
    <div className="box_book_detail">
        <Marquee className='marquee_book'>
        {
            arrBook.map((data, index) => (
               <img key={index} src={data.img } alt="img book" />
            ))
        }
        </Marquee>
    </div>
  )
}

export default BookDetail