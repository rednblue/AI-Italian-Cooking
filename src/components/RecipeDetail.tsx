import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Facebook, Instagram, Linkedin } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import recipeData from '../data/recipes/index.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');
  const recipe = recipeData.recipes.find(r => r.id === id);

  useEffect(() => {
    if (recipe) {
      fetch(`/src/data/recipes/${recipe.id}.md`)
        .then(res => res.text())
        .then(text => setMarkdown(text))
        .catch(console.error);
    }
  }, [recipe]);

  const shareUrl = window.location.href;
  const shareTitle = recipe?.title || 'Amazing Italian Recipe';
  const shareText = recipe?.description || 'Check out this delicious Italian recipe!';

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      instagram: `https://www.instagram.com/` // Note: Direct sharing to Instagram feed isn't possible via URL
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Recipe not found</h2>
        <p className="mt-2 text-gray-600">The recipe you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
        
        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{recipe.prepTime} + {recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Serves {recipe.servings}</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button 
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-full transition-colors hover:bg-gray-100" 
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleShare('x')}
              className="p-2 rounded-full transition-colors hover:bg-gray-100" 
              aria-label="Share on X (Twitter)"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"/>
              </svg>
            </button>
            <button 
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-full transition-colors hover:bg-gray-100" 
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleShare('instagram')}
              className="p-2 rounded-full transition-colors hover:bg-gray-100" 
              aria-label="Share on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] mb-8 rounded-lg overflow-hidden shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <article className="prose prose-slate lg:prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-medium mt-6 mb-3" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-4" {...props} />,
              li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
              p: ({node, ...props}) => <p className="text-gray-700 mb-4" {...props} />,
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default RecipeDetail;