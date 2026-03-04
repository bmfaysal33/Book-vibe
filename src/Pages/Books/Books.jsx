import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

// Data Load Method 1

const Books = ({ data }) => {
  // Data Load Method 1 --- UseEffect

  //     const [allBooks , setAllBooks]= useState([]);

  //     useEffect(()=> {
  //         fetch("booksData.json")
  //         .then(res => res.json())
  //         .then(data => setAllBooks(data))

  //     },[])

  // Data Load Method 2

  // const bookPromise = fetch('booksData.json').then((res) => res.json());

  //  steps:
  // i> create suspense ii> enter the component which to render
  // iii> pass the promise iv> then load by (use) ; done

  // Data load method 3

  // i> pass from Route

  return (
    <div>
      <h1 className="text-4xl text-center p-6"> Books </h1>
      <Suspense fallback={<span> Loading....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
