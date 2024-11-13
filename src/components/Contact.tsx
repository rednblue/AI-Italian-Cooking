import React from 'react';
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">Have questions about Italian cooking? Let's connect!</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Based in Italy</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span>info@mauroleonelli.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>Available by appointment</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visit My Website</h2>
              <p className="text-gray-600 mb-4">
                For more information about my work and other projects, please visit my personal website:
              </p>
              <a 
                href="https://mauroleonelli.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
              >
                mauroleonelli.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556910096-6f5e72db6803?auto=format&fit=crop&q=80"
              alt="Italian countryside"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;