import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Calendar, User, ArrowRight } from 'lucide-react';
import blogImage1 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06.jpeg';

interface BlogIndexProps {
  onPostClick: (postId: number) => void;
}

const BlogIndex: React.FC<BlogIndexProps> = ({ onPostClick }) => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: 'blog.first.title',
      excerpt: 'blog.first.excerpt',
      date: '2025-08-05',
      author: 'Hanna Heinrich',
      image: blogImage1,
      featured: true,
      readTime: '5 min read'
    }
    // Add more blog posts here in the future
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

        {/* Blog Posts Grid */}
        <div className="grid gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
              {/* Featured Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={post.image}
                  alt={t(post.title)}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {post.featured && (
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#2E8B57] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Information */}
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{t('blog.publishedOn')} {t('blog.date')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{t('blog.author')}: {post.author}</span>
                  </div>
                  <div className="text-[#2E8B57] font-medium">
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">
                  {t(post.title)}
                </h2>

                {/* Excerpt */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t(post.excerpt)}
                </p>

                {/* Read More Button */}
                <button 
                  onClick={() => onPostClick(post.id)}
                  className="inline-flex items-center space-x-2 bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  <span>{t('blog.readMore')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-16">
          <div className="bg-[#F5F5DC] rounded-2xl p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              {t('blog.comingSoon.title')}
            </h3>
            <p className="text-gray-600">
              {t('blog.comingSoon.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;
