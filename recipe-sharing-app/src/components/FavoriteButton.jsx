import React from "react";
import useRecipeStore from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
    const favorites = useRecipeStore((state) => state.favorites);
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

    const isFavorite = favorites.includes(recipeId);

    return (
        <button
            onClick={() =>
                isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)
            }
            style={{
                background: isFavorite ? "gold" : "#ddd",
                padding: "10px",
                borderRadius: "8px",
                marginTop: "10px",
            }}
        >
            {isFavorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
        </button>
    );
};

export default FavoriteButton;
