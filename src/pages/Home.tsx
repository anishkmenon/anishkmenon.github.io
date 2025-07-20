import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="hero-text text-foreground">
                Helping people grow into who they already are — not who they're told to be
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I design experiential learning journeys where people feel safe to be human—where
                leadership begins with awareness, not authority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="shadow-warm">
                  <Link to="/services">Let's Work Together</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">More About Me</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Anish Menon - Learning Facilitator"
                className="w-full rounded-lg shadow-warm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi, I'm Anish. I help people and teams grow through human-first, insight-led learning
                  rooted in presence, not performance. Whether around a campfire, a boardroom table, or
                  sticky notes on a virtual whiteboard, I create spaces where growth unfolds naturally.
                  If you're redesigning leadership or learning, or simply want to go deeper, I'm glad you're here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to start a conversation?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's explore how we can create learning experiences that honor who you are
              and where you want to go.
            </p>
            <Button asChild size="lg" className="shadow-warm">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
