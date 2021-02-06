import React from "react";
import AlertMessage from "../../assets/components/AlertMessage";

export default function FavoritesContainer({ favorites, children }) {
  if (!Object.values(favorites).length) {
    return (
      <AlertMessage
        primaryText="No Favorites"
        secondaryText="Add movies to favorites by pressing heart icon next to title."
      />
    );
  } else return children;
}
