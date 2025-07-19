import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 'learning-from-failure',
    title: 'Learning from Failure: A Guide to Growth',
    excerpt: 'How embracing our mistakes can become the foundation for meaningful development and authentic leadership.',
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 'presence-over-performance',
    title: 'Presence Over Performance',
    excerpt: 'Why being fully present in learning moments matters more than achieving perfect outcomes.',
    date: 'February 28, 2024',
    readTime: '4 min read'
  },
  {
    id: 'creating-safe-spaces',
    title: 'Creating Safe Spaces for Vulnerability',
    excerpt: 'The art of holding space where people feel safe to explore, question, and grow authentically.',
    date: 'February 12, 2024',
    readTime: '6 min read'
  },
  {
    id: 'leadership-through-curiosity',
    title: 'Leadership Through Curiosity',
    excerpt: 'How asking better questions can transform teams and create cultures of continuous learning.',
    date: 'January 30, 2024',
    readTime: '7 min read'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Thoughts & Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reflections on learning, leadership, and the human experience of growth.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="shadow-card hover:shadow-warm transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-smooth">
                        <Link to={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Button asChild variant="outline" className="mt-4">
                        <Link to={`/blog/${post.id}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;