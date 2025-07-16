import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Mountain, MessageSquare, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Leadership Learning Journeys",
      description: "Custom programs for new & seasoned leaders, meeting people where they actually are.",
      features: [
        "Team Lead Essentials (Adyen): 3-month blended learning journey",
        "Leading Self Programs: exploring readiness for leadership",
        "DICE: Decoding Intercultural Collaboration, Empathically"
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Experiential Workshops",
      description: "Facilitated sessions online, onsite, or in nature—rooted in reflection, dialogue & application.",
      features: [
        "Psychological safety workshops",
        "Feedback and empathy sessions",
        "Collaboration and change navigation",
        "Custom team development"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Facilitation & Coaching",
      description: "Guiding teams and leaders through meaningful conversations amidst complexity & growth.",
      features: [
        "1:1 coaching for emerging leaders",
        "Team alignment sessions",
        "Strategy offsite reflections",
        "Organizational development"
      ]
    },
    {
      icon: <Mountain className="w-8 h-8 text-primary" />,
      title: "Nature-Based Learning",
      description: "Immersive leadership experiences in natural settings for teams wanting to reset and reconnect.",
      features: [
        "Multi-day outdoor programs",
        "Team building in nature",
        "Leadership through adventure",
        "Reflection and renewal retreats"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Leadership Journey Design (Adyen)",
      description: "A 3-month blended learning journey for 100+ new team leads across Europe & APAC.",
      role: "Designer, facilitator, coach",
      badge: "Enterprise"
    },
    {
      title: "DICE Program (EMEA Clients)",
      description: "Intercultural learning to boost empathy and team communication—improving reflection scores by 40%.",
      role: "Lead facilitator, co-designer",
      badge: "Cross-cultural"
    },
    {
      title: "Outdoor Leadership Lab",
      description: "Multi-day immersive learning for companies like ATOS, Voltas, Siemens.",
      role: "Founder, designer, lead facilitator",
      badge: "Nature-based"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="hero-text text-foreground">
              Learning with depth, design with care.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I help people and organisations grow with learning that feels personal, relevant, and real.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-foreground">
              What I Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-warm transition-smooth">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      {service.icon}
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-foreground">
              Recent Work
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{study.title}</CardTitle>
                      <Badge variant="secondary">{study.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{study.description}</p>
                    <p className="text-sm text-primary font-medium">
                      My role: {study.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to design your learning journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's explore how we can create experiences that honor your team's unique needs and aspirations.
            </p>
            <Button asChild size="lg" className="shadow-warm">
              <Link to="/contact">Let's Work Together</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;