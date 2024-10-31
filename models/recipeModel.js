// Simple storage for recipes
let recipes = [
    {
        id: 1,
        title: "Mom's Famous Cookies",
        category: "Dessert",
        difficulty: "Easy",
        timeInMinutes: 45,
        ingredients: ["flour", "sugar", "butter", "chocolate chips"],
        instructions: "Mix, shape, bake with love!",
        createdBy: "Alexandria"
    },
    {
        id: 2,
        title: "Cozy Morning Oatmeal",
        category: "Breakfast",
        difficulty: "Easy",
        timeInMinutes: 15,
        ingredients: ["oats", "milk", "honey", "berries"],
        instructions: "Simmer and serve warm!",
        createdBy: "Alexandria"
    }
];
// Helper functions for working with recipe data
const RecipeModel = {
    getAll: () => recipes,
    getById: (id) => recipes.find(recipe => recipe.id === parseInt(id)),
    create: (recipe) => {
        const newRecipe = {
            id: recipes.length + 1,
            ...recipe
        };