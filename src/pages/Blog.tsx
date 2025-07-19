import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'presence-in-practice',
    title: 'Presence in Practice',
    date: 'Dec 15, 2024',
    slug: 'presence-in-practice'
  },
  {
    id: 'leading-from-curiosity',
    title: 'Leading from Curiosity',
    date: 'Nov 22, 2024',
    slug: 'leading-from-curiosity'
  },
  {
    id: 'growth-through-reflection',
    title: 'Growth Through Reflection',
    date: 'Oct 18, 2024',
    slug: 'growth-through-reflection'
  },
  {
    id: 'spaces-for-learning',
    title: 'Creating Spaces for Learning',
    date: 'Sep 30, 2024',
    slug: 'spaces-for-learning'
  },
  {
    id: 'outdoor-leadership',
    title: 'Leadership in Natural Settings',
    date: 'Aug 25, 2024',
    slug: 'outdoor-leadership'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container-minimal">
        <h1 className="text-4xl font-normal mb-12">Blog</h1>
        
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex items-center gap-4 group">
              <span className="blog-date shrink-0 w-20">{post.date}</span>
              <Link 
                to={`/blog/${post.slug}`}
                className="blog-link text-lg"
              >
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;