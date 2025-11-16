import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Search term 
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filtered results 
  filteredRecipes: [],

  // Filter action 
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Existing actions
  setRecipes: (recipes) => set({ recipes }),
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
