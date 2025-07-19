import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container-minimal">
        <div className="space-y-12">
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-4xl font-normal leading-tight">
              Helping people grow into who they already are — not who they're told to be.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I design experiential learning journeys where people feel safe to be human—where leadership begins with awareness, not authority.
            </p>
          </div>

          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed">
              Hi, I'm Anish. I help people and teams grow through human-first, insight-led learning rooted in presence, not performance. Whether around a campfire, a boardroom table, or sticky notes on a virtual whiteboard, I create spaces where growth unfolds naturally.
            </p>
            <p className="text-base leading-relaxed">
              If you're redesigning leadership or learning, or simply want to go deeper, I'm glad you're here.
            </p>
          </div>

          {/* Simple navigation */}
          <div className="space-y-2">
            <div>
              <Link to="/about" className="blog-link text-base">More about me →</Link>
            </div>
            <div>
              <Link to="/services" className="blog-link text-base">See my work →</Link>
            </div>
            <div>
              <Link to="/contact" className="blog-link text-base">Start a conversation →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;