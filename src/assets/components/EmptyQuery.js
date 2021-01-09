import React from "react";
import UseAnimations from "react-useanimations";
import alertCircle from "react-useanimations/lib/alertCircle";

export default function EmptyQuery() {
  return (
    <div className="alert-msg">
      <UseAnimations animation={alertCircle} size={56} strokeColor="#f54c4c" />
      <h1>No empty strings!</h1>
      <p>Specify a query to search</p>
    </div>
  );
}
