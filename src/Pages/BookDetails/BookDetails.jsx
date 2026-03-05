import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams(); // name must be "id", cause you named the dynamic route /:id   other names don't work , undefined

  // type of {id} is now string ; to make type similar for { find } function ; make it integer
  const intId = parseInt(id); // now it's integer; type matches in find

  const data = useLoaderData();
  const singleData = data.find((book) => book.bookId === intId);

  const { bookName, image } = singleData;

  return (
    <div className="border-2 w-2/3 mx-auto">
      <img className="w-44" src={image} alt="" />
      <h4>{bookName}</h4>

      <button className="btn btn-info m-2">Read</button>
      <button className="btn btn-success m-2">WishList</button>
    </div>
  );
};

export default BookDetails;
