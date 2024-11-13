import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChevronDown } from 'lucide-react';
import recipeData from '../data/recipes/index.json';

const RecipeList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredRecipes = selectedCategory
    ? recipeData.recipes.filter(recipe => recipe.category === selectedCategory)
    : recipeData.recipes;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Italian Recipes</h1>
        <div className="relative">
          <div className="relative inline-block">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white pl-4 pr-10 py-2.5 text-sm font-medium text-gray-700 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm transition-all cursor-pointer min-w-[180px]"
            >
              <option value="">All Categories</option>
              {recipeData.categories.map(category => (
                <option key={category.id} value={category.id} className="py-1">
                  {category.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredRecipes.map(recipe => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <div className="flex items-center gap-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{recipe.prepTime} + {recipe.cookTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Serves {recipe.servings}</span>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {recipe.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;