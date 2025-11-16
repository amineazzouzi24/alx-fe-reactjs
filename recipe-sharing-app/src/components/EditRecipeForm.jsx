import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

function EditRecipeForm({ recipe }) {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);

    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe(recipe.id, { title, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button type="submit">Save</button>
        </form>
    );
}

export default EditRecipeForm;
