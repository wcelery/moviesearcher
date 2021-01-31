import React from "react";
import UseAnimations from "react-useanimations";
import alertCircle from "react-useanimations/lib/alertCircle";

export default function Error() {
  return (
    <div className="alert-msg">
      <UseAnimations animation={alertCircle} size={56} strokeColor="#f54c4c" />
      <h1>An error has occured</h1>
      <p>Must be an API network error, check back later</p>
    </div>
  );
}
