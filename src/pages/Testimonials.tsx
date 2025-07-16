const Testimonials = () => {
  const testimonials = [
    {
      quote: "Anish holds space where it feels safe to reflect and be vulnerable—it makes growth feel natural.",
      author: "Senior Product Manager, FinTech, Netherlands"
    },
    {
      quote: "The way Anish facilitates creates an environment where real conversations happen. People leave feeling heard and empowered.",
      author: "Head of Learning & Development, Banking, UAE"
    },
    {
      quote: "His approach to leadership development is refreshingly human. It's not about techniques—it's about finding your authentic voice.",
      author: "Team Lead, Tech Startup, Singapore"
    },
    {
      quote: "The outdoor leadership experience was transformative. Nature became our classroom, and vulnerability became our strength.",
      author: "Operations Director, Manufacturing, India"
    },
    {
      quote: "Anish doesn't just teach presence—he embodies it. His facilitation creates moments of genuine insight and connection.",
      author: "HR Director, Financial Services, Netherlands"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              <em>What People Say</em>
            </h1>
            <div className="w-24 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-muted/20 p-8 rounded-lg border border-border/20 transition-smooth hover:bg-muted/30"
              >
                <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-muted-foreground font-medium not-italic">
                  — {testimonial.author}
                </cite>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to experience this kind of growth with your team?
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;