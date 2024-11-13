import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-red-600" />
            <span className="text-xl font-semibold text-gray-900">AI Italian Cooking</span>
          </Link>
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Recipes</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;