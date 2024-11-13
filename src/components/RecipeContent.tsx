import React from 'react';

const RecipeContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ingredients</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">For the Meat Sauce:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>1 lb ground beef</li>
              <li>1 lb Italian sausage</li>
              <li>1 large onion, finely diced</li>
              <li>6 garlic cloves, minced</li>
              <li>2 (28 oz) cans crushed tomatoes</li>
              <li>2 tbsp tomato paste</li>
              <li>2 tsp dried basil</li>
              <li>2 tsp dried oregano</li>
              <li>Salt and pepper to taste</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">For the Cheese Mixture:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>32 oz ricotta cheese</li>
              <li>2 eggs</li>
              <li>2 cups freshly grated Parmesan</li>
              <li>4 cups mozzarella cheese</li>
              <li>1/4 cup fresh basil, chopped</li>
              <li>1 package lasagna noodles</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li className="pl-4">
            <span className="font-medium text-gray-900">Prepare the Meat Sauce:</span>
            <p className="mt-2">In a large pot, brown the ground beef and Italian sausage over medium heat. Add onion and garlic, cooking until softened. Stir in crushed tomatoes, tomato paste, and herbs. Simmer for 30 minutes.</p>
          </li>
          <li className="pl-4">
            <span className="font-medium text-gray-900">Make the Cheese Mixture:</span>
            <p className="mt-2">In a large bowl, combine ricotta, eggs, 1 cup Parmesan, and chopped basil. Mix well and set aside.</p>
          </li>
          <li className="pl-4">
            <span className="font-medium text-gray-900">Cook the Pasta:</span>
            <p className="mt-2">Cook lasagna noodles according to package directions. Drain and lay flat on wax paper to prevent sticking.</p>
          </li>
          <li className="pl-4">
            <span className="font-medium text-gray-900">Layer the Lasagna:</span>
            <p className="mt-2">Spread 1 cup of meat sauce in a 9x13 baking dish. Layer with noodles, ricotta mixture, mozzarella, and meat sauce. Repeat layers, finishing with cheese on top.</p>
          </li>
          <li className="pl-4">
            <span className="font-medium text-gray-900">Bake:</span>
            <p className="mt-2">Cover with foil and bake at 375°F for 25 minutes. Remove foil and bake for an additional 25 minutes until bubbly and golden brown.</p>
          </li>
        </ol>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Chef's Tips</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Let the lasagna rest for 15 minutes before serving to set properly.</li>
          <li>• Use fresh mozzarella for the top layer for the best melting quality.</li>
          <li>• Don't overcook the pasta - it will continue to cook in the oven.</li>
        </ul>
      </section>
    </div>
  );
};

export default RecipeContent;