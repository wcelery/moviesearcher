import React from "react";
import UseAnimations from "react-useanimations";
import alertCircle from "react-useanimations/lib/alertCircle";

export default function NotFound() {
  return (
    <div className="alert-msg">
      <UseAnimations animation={alertCircle} size={56} strokeColor="#f54c4c" />
      <h1>Not Found</h1>
      <p>Try to search for something else</p>
    </div>
  );
}
