import { useRecipeStore } from "./recipeStore";

function RecipeDetails({ recipeId }) {
    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => r.id === recipeId)
    );

    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>ID: {recipe.id}</p>     {/*✔*/}
            <p>{recipe.description}</p>
        </div>
    );
}

export default RecipeDetails;
