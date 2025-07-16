import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="mailto:anish@yourdomain.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail size={20} />
              <span>anish@yourdomain.com</span>
            </a>
            <a
              href="https://linkedin.com/in/anishkmenon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Anish Menon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
