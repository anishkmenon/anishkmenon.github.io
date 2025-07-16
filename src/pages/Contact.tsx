import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="hero-text text-foreground">
              Reach out. Reflect in. Let's start a conversation.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you want to explore leadership journeys, need a facilitator who values presence over performance, or just want to say hi—I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your learning journey or what you'd like to explore..."
                      rows={6}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full shadow-warm">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:anish@yourdomain.com"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        anish@yourdomain.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/anishmenon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">Discovery Call</p>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        Book a conversation
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-accent/10">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    "I believe the best conversations happen when we bring our whole selves to the table. 
                    Whether you're curious about a specific program or just want to explore what's possible, 
                    I'm here to listen and learn with you."
                  </p>
                  <p className="mt-4 text-sm text-primary font-medium">— Anish</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;