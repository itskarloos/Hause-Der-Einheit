import React, { useState } from 'react';
import BlogPost from './BlogPost';
import BlogIndex from './BlogIndex';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const handlePostClick = (postId: number) => {
    setSelectedPost(postId);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  // If a post is selected, show the full post
  if (selectedPost) {
    return <BlogPost onBack={handleBackToBlog} />;
  }

  return <BlogIndex onPostClick={handlePostClick} />;
};

export default Blog;
