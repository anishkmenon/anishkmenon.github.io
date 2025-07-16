const Events = () => {
  const events = [
    {
      title: "Leading from Curiosity",
      format: "Online Workshop",
      date: "Sept 12, 2025",
      action: "Register Now",
      link: "/contact"
    },
    {
      title: "DICE Program",
      format: "Rotterdam",
      date: "Oct 3–4, 2025",
      action: "Invite-only",
      link: "/contact"
    },
    {
      title: "Outdoor Retreat: Presence in Practice",
      format: "Indian Himalayas",
      date: "Nov 16–20, 2025",
      action: "Apply",
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              <em>Experience the work, not just the words.</em>
            </h1>
            <div className="w-24 h-px bg-primary mx-auto"></div>
          </div>

          <div className="mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
              I run open workshops, retreats, and private sessions—online, in person, and in nature. 
              Join me live or invite me to your organisation.
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-muted/20 p-8 rounded-lg border border-border/20 transition-smooth hover:bg-muted/30"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground mb-2">
                      "{event.title}"
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span>{event.format}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <a 
                      href={event.link}
                      className="inline-flex items-center px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium"
                    >
                      {event.action}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-muted/20 p-8 rounded-lg border border-border/20 inline-block">
              <p className="text-lg text-foreground mb-4">
                Interested in hosting or co-creating?
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;