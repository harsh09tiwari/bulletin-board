import React from 'react';
import { MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Community Bulletin</h1>
              <p className="text-sm text-gray-600">Stay connected with your neighborhood</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm text-gray-500">
              <p>Riverside Heights Community</p>
              <p className="font-medium text-gray-700">1,247 residents connected</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;