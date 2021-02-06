import React from "react";
import UseAnimations from "react-useanimations";
import alertCircle from "react-useanimations/lib/alertCircle";

export default function AlertMessage({ primaryText, secondaryText }) {
  return (
    <div className="alert-msg">
      <UseAnimations animation={alertCircle} size={56} strokeColor="#f54c4c" />
      <h1>{primaryText}</h1>
      <p>{secondaryText}</p>
    </div>
  );
}
