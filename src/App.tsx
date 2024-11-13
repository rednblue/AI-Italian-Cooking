import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <p className="text-center text-gray-600">© 2024 AI Italian Cooking. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;