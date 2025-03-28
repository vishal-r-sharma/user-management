import React from 'react';
import { Globe, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-4 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-600 mb-2 sm:mb-0">
            <span className="font-semibold text-gray-900">Developer:</span> Vishal Sharma
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:contact@vishalsharmadev.in"
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <Mail className="w-4 h-4 mr-1" />
              contact@vishalsharmadev.in
            </a>
            <a
              href="https://vishalsharmadev.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <Globe className="w-4 h-4 mr-1" />
              vishalsharmadev.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;