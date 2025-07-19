import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const blogContent: Record<string, { title: string; date: string; content: string }> = {
  'presence-in-practice': {
    title: 'Presence in Practice',
    date: 'Dec 15, 2024',
    content: `
# Presence in Practice

Presence isn't about being calm all the time. It's about being aware of what's happening right now—the discomfort, the uncertainty, the moments when you want to fix or solve or move past something quickly.

In leadership learning, I've noticed that the most powerful shifts happen not when someone learns a new technique, but when they become present to their own patterns. When they notice the impulse to have all the answers. When they catch themselves rushing to fill silence.

## What presence looks like in practice

It's the team lead who pauses before responding to a challenging question, creating space for their own uncertainty before creating space for others.

It's the facilitator who notices their own discomfort with conflict and doesn't immediately move to smooth things over.

It's the coach who sits with not knowing how to help, rather than rushing to offer solutions.

## The practice

Presence is exactly that—a practice. Not a destination, but a way of being that we return to, again and again.

In our leadership journeys, I invite people to notice:
- Where do you rush?
- What discomfort do you try to fix quickly?
- When do you perform presence rather than practice it?

These aren't questions to answer once, but invitations to keep exploring.

Because leadership that creates genuine transformation—leadership that helps people grow into who they already are—begins with our own willingness to be present to what is, rather than what we think should be.
    `
  },
  'leading-from-curiosity': {
    title: 'Leading from Curiosity',
    date: 'Nov 22, 2024',
    content: `
# Leading from Curiosity

What if the most powerful leadership tool isn't having answers, but asking better questions?

I've spent years designing learning experiences, and the pattern is consistent: transformation happens not when someone tells you what to do, but when someone helps you discover what you already know.

## The shift from authority to inquiry

Traditional leadership often defaults to authority—having the right answer, making the decision, solving the problem. But curious leadership invites something different.

It asks: What if we don't know yet? What if the answer emerges from the conversation rather than from the person with the title?

## Practical curiosity

In workshops, I notice the facilitators who transform groups aren't the ones with the most expertise. They're the ones who can hold genuine curiosity about what wants to emerge.

They ask questions like:
- "What are you noticing?"
- "Where does that land for you?"
- "What wants your attention right now?"

These aren't techniques to deploy. They're expressions of genuine curiosity about human experience.

## The courage to not know

Leading from curiosity requires something radical: the courage to not know.

To sit in uncertainty without rushing to solutions. To trust that groups can find their own wisdom when given space and structure.

This isn't about abdicating responsibility. It's about expanding our understanding of what responsible leadership looks like.

Sometimes the most responsible thing is to say: "I don't know. Let's explore this together."
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen py-16">
        <div className="container-minimal">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth mb-8">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <h1 className="text-4xl font-normal">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container-minimal">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth mb-8">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-normal mb-2">{post.title}</h1>
            <p className="blog-date">{post.date}</p>
          </div>
          
          <div className="leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;