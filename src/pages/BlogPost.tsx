import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const blogPosts = {
  'learning-from-failure': {
    title: 'Learning from Failure: A Guide to Growth',
    date: 'March 15, 2024',
    readTime: '5 min read',
    content: `
      <p>Failure isn't the opposite of success—it's the foundation of it. In my years of facilitating learning experiences, I've witnessed countless moments where the most profound growth emerged not from perfect execution, but from honest reckoning with what didn't work.</p>

      <p>The traditional approach to failure in professional settings often involves damage control, blame assignment, and quick fixes. But what if we approached failure differently? What if we saw it as raw material for wisdom?</p>

      <h2>The Anatomy of Learning from Failure</h2>

      <p>True learning from failure requires three essential elements:</p>

      <ol>
        <li><strong>Presence</strong> - The ability to sit with discomfort without immediately moving to fix or explain it away</li>
        <li><strong>Curiosity</strong> - Asking "What can this teach us?" instead of "Who is to blame?"</li>
        <li><strong>Community</strong> - Creating spaces where failure can be examined safely, without judgment</li>
      </ol>

      <p>When these elements come together, failure transforms from a source of shame into a catalyst for innovation and growth.</p>

      <h2>Creating Safe-to-Fail Environments</h2>

      <p>Organizations and teams that learn fastest are those that have mastered the art of failing safely. This doesn't mean being reckless—it means being intentional about how we design experiments, how we debrief outcomes, and how we support each other through the inevitable messiness of growth.</p>

      <p>The question isn't whether we'll fail. The question is whether we'll learn.</p>
    `
  },
  'presence-over-performance': {
    title: 'Presence Over Performance',
    date: 'February 28, 2024',
    readTime: '4 min read',
    content: `
      <p>In a world obsessed with metrics, outcomes, and performance optimization, there's a quiet revolution happening in how we think about human development. It starts with a simple but radical idea: being fully present matters more than performing perfectly.</p>

      <p>I've seen it countless times in workshops and coaching sessions. The moment someone stops trying to have the "right" answer and starts being genuinely curious about their experience, everything shifts. The quality of their attention changes. Their capacity for insight expands. Their ability to connect with others deepens.</p>

      <h2>The Performance Trap</h2>

      <p>Performance orientation isn't inherently wrong, but it becomes problematic when it's our only mode of engagement. When we're constantly focused on how we're doing, we're not fully available to what we're doing. We're observing ourselves instead of experiencing ourselves.</p>

      <p>This self-monitoring creates a subtle but persistent background noise that interferes with our natural capacity for learning, creativity, and connection.</p>

      <h2>The Gift of Presence</h2>

      <p>Presence, by contrast, is about being fully available to the moment at hand. It's about listening without preparing your response. It's about feeling without immediately needing to fix or change what you're feeling. It's about engaging with what is, rather than what should be.</p>

      <p>When we operate from presence, several things become possible:</p>

      <ul>
        <li>We notice more—subtleties that performance orientation tends to miss</li>
        <li>We respond more skillfully—from awareness rather than reaction</li>
        <li>We learn more deeply—because we're actually here for the experience</li>
        <li>We connect more authentically—because we're not performing connection, we're living it</li>
      </ul>

      <p>The paradox is that presence often leads to better performance anyway. But that's not why we cultivate it. We cultivate it because it's a more human way to be.</p>
    `
  },
  'creating-safe-spaces': {
    title: 'Creating Safe Spaces for Vulnerability',
    date: 'February 12, 2024',
    readTime: '6 min read',
    content: `
      <p>The phrase "safe space" has become so common that we might assume we all mean the same thing by it. But creating genuinely safe spaces for vulnerability—spaces where people can explore their edges, admit their struggles, and grow into their potential—is both an art and a science.</p>

      <p>True psychological safety isn't just the absence of threat. It's the presence of conditions that invite authentic expression and courageous inquiry.</p>

      <h2>The Elements of Safety</h2>

      <p>In my work facilitating groups, I've identified several essential elements that contribute to genuine safety:</p>

      <h3>Confidentiality</h3>
      <p>What's shared in the room stays in the room. This isn't just a rule—it's a sacred agreement that honors the courage it takes to be vulnerable.</p>

      <h3>Non-judgment</h3>
      <p>This doesn't mean we don't have opinions or perspectives. It means we hold space for multiple truths and resist the urge to immediately categorize experiences as right or wrong.</p>

      <h3>Curious inquiry</h3>
      <p>Questions that open rather than close. Questions that invite exploration rather than justification. "What was that like for you?" rather than "Why did you do that?"</p>

      <h3>Shared humanity</h3>
      <p>Recognition that we're all here figuring it out as we go. That we all have blind spots, growing edges, and moments of brilliance.</p>

      <h2>The Leader's Role</h2>

      <p>As facilitators, our job isn't to be perfect or to have all the answers. Our job is to model the very vulnerability we're inviting from others. To share our own struggles and uncertainties. To demonstrate that growth happens in the messy middle, not in polished presentations.</p>

      <p>The moment we pretend to have it all figured out is the moment we break the very safety we're trying to create.</p>

      <h2>Beyond the Workshop</h2>

      <p>The real test of safety isn't what happens in formal learning environments—it's what happens in everyday interactions. How do we respond when a colleague admits they're struggling? How do we react when someone shares an unpopular perspective? How do we handle our own discomfort when others are being vulnerable?</p>

      <p>Creating safe spaces is ultimately about creating cultures where human beings can be human beings—complex, imperfect, learning, growing human beings.</p>
    `
  },
  'leadership-through-curiosity': {
    title: 'Leadership Through Curiosity',
    date: 'January 30, 2024',
    readTime: '7 min read',
    content: `
      <p>The best leaders I know aren't the ones with all the answers. They're the ones with the best questions. They've discovered that curiosity is not just a nice-to-have leadership quality—it's the foundation of everything else that matters.</p>

      <p>In a world that rewards certainty and punishes not-knowing, choosing curiosity over certainty is a radical act. It's also an essential one.</p>

      <h2>The Certainty Trap</h2>

      <p>We're conditioned to believe that leadership means having answers. That confidence requires certainty. That admitting we don't know something is a sign of weakness.</p>

      <p>But this creates a dangerous dynamic. Leaders start performing knowledge they don't actually have. Teams stop bringing up problems because they assume the leader should already know about them. Innovation stagnates because exploration feels risky when everyone expects expertise.</p>

      <h2>The Power of "I Don't Know"</h2>

      <p>Some of the most transformative moments I've witnessed in organizations have started with a leader saying, "I don't know." Not as a confession of inadequacy, but as an invitation to discover together.</p>

      <p>When leaders model genuine curiosity, several things become possible:</p>

      <ul>
        <li><strong>Teams feel permission to experiment</strong> - If the leader doesn't have all the answers, maybe it's okay for team members to explore and make mistakes too</li>
        <li><strong>Real problems surface</strong> - People start sharing what's actually happening instead of what they think the leader wants to hear</li>
        <li><strong>Collective intelligence emerges</strong> - The wisdom that exists throughout the organization becomes accessible</li>
        <li><strong>Learning accelerates</strong> - When we're genuinely curious, we pay attention differently and notice things we would otherwise miss</li>
      </ul>

      <h2>Practical Curiosity</h2>

      <p>Curiosity isn't just an attitude—it's a practice. Here are some ways to cultivate it:</p>

      <h3>Ask questions you don't know the answer to</h3>
      <p>Notice when you're asking questions to make a point versus asking questions to learn something. The energy is completely different.</p>

      <h3>Follow your genuine confusion</h3>
      <p>When something doesn't make sense to you, don't just move on. Get curious about the confusion itself. What are you missing? What assumptions are you making?</p>

      <h3>Practice "Tell me more"</h3>
      <p>Three simple words that can transform any conversation. Instead of immediately responding with your perspective, invite more depth from the other person.</p>

      <h3>Embrace beginner's mind</h3>
      <p>Even in areas where you have expertise, can you approach with fresh eyes? What would you notice if you were encountering this for the first time?</p>

      <h2>The Courage to Not Know</h2>

      <p>Leading through curiosity requires a particular kind of courage—the courage to not know. To sit in uncertainty. To resist the pressure to have immediate answers.</p>

      <p>This isn't about being passive or indecisive. It's about being present to complexity, open to surprise, and committed to learning your way forward.</p>

      <p>In a world that's changing faster than any of us can predict, curiosity isn't just a leadership advantage—it's a survival skill.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Post Not Found</h1>
            <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </Button>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg max-w-none text-muted-foreground [&>h2]:text-foreground [&>h2]:font-bold [&>h2]:text-2xl [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-foreground [&>h3]:font-semibold [&>h3]:text-xl [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6 [&>li]:mb-2"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;