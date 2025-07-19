import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="hero-text text-foreground">
              Outside In
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey from quiet classrooms to creating spaces where growth unfolds naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi, I'm Anish. I design learning journeys that help people grow into who they already are—not who they're told to be.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My learning story began quiet, in classrooms where questions were often silenced. Everything shifted after a professor invited me to ask differently. That spark led me on a 15,000 km motorcycle journey across India, wilderness training, and into experiential learning—where I found home.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over 16+ years across APAC & Europe, I've built learning experiences that honour presence over performance. I've co-designed leadership programs with Adyen, facilitated journeys at Dubai Islamic Bank, and led outdoor adventures through Off-Road Adventures & Learning.
                </p>
                
                <div className="bg-accent/30 p-6 rounded-lg">
                  <p className="text-lg text-foreground font-medium italic text-center">
                    "Growth doesn't happen because someone tells you how to lead. Growth happens when someone holds space for you to find how you want to lead."
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I bring systems coaching (ORSC), Nonviolent Communication (NVC), experiential design, and deep facilitation experience to make learning real, contextual, and human.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wherever we meet—campfire, boardroom, or virtual—my goal is to help people reconnect with their voice and awareness.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Thanks for being here. Let's create something that matters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;