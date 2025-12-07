import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); //URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find(recipe => recipe.id === parseInt(id));
    setRecipe(selectedRecipe); 
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <h2 className="text-xl text-gray-600 mb-4">Ingredients</h2>
          <ul className="list-disc pl-6 mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-xl text-gray-600 mb-4">Cooking Instructions</h2>
          <p className="text-gray-700">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
