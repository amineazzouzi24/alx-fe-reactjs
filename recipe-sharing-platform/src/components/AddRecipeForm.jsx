import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(''); // Added the steps field
  const [errors, setErrors] = useState({});

  // Form validation logic
  const validateForm = () => {
    let formErrors = {};
    if (!title) formErrors.title = "Title is required";
    if (!ingredients) formErrors.ingredients = "Ingredients are required";
    if (!steps) formErrors.steps = "Steps are required"; // Validate steps
    if (ingredients.split('\n').length < 2) formErrors.ingredients = "Ingredients should contain at least two items";
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Submit data here (e.g., send to API)
      console.log("Form submitted:", { title, ingredients, steps });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Title field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="ingredients">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            rows="4"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Steps field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="steps">
            Cooking Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            rows="6"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
