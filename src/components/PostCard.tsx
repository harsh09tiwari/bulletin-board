import React from 'react';
import { Calendar, Phone, Mail, AlertCircle } from 'lucide-react';
import { Post } from '../types';
import { categories } from '../data/categories';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const category = categories.find(cat => cat.id === post.category);
  const isEmail = post.contact.includes('@');
  const isPhone = post.contact.includes('(') || post.contact.includes('-');

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border-2 hover:shadow-md transition-all duration-200 ${
      post.urgent ? 'ring-2 ring-red-200 border-red-300' : 'border-gray-200 hover:border-blue-300'
    }`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${category?.bgColor} ${category?.color} border`}>
            <span>{category?.icon}</span>
            {category?.label}
          </div>
          {post.urgent && (
            <div className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
              <AlertCircle className="w-3 h-3" />
              Urgent
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.content}
        </p>

        <div className="space-y-2 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 font-medium">{post.author}</span>
            <div className="flex items-center gap-1 text-gray-400">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            {isEmail ? (
              <Mail className="w-4 h-4 text-gray-400" />
            ) : isPhone ? (
              <Phone className="w-4 h-4 text-gray-400" />
            ) : (
              <Phone className="w-4 h-4 text-gray-400" />
            )}
            <a 
              href={isEmail ? `mailto:${post.contact}` : `tel:${post.contact}`}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              {post.contact}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;