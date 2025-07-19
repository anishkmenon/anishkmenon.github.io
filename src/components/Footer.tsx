import { Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="container-minimal py-8">
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            <Github size={16} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
