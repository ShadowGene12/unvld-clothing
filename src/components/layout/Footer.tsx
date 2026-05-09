import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to UNVLD",
        description: "You've been added to our mailing list.",
      });
      setEmail('');
    }
  };

  const worldLinks = [
    { name: 'All Worlds', path: '/worlds' },
    { name: 'Ascend', path: '/worlds/ascend' },
    { name: 'Japanese', path: '/worlds/japanese' },
    { name: 'Streetwear', path: '/worlds/streetwear' },
    { name: 'Subtle', path: '/worlds/subtle' },
  ];

  const supportLinks = [
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Shipping', path: '/shipping' },
    { name: 'Returns', path: '/returns' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const companyLinks = [
    { name: 'About', path: '/about' },
    { name: 'Dream Fund', path: '/dream-fund' },
    { name: 'Terms', path: '/terms' },
    { name: 'Privacy', path: '/privacy' },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container-brand py-12 md:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-display mb-3">Join the Movement</h3>
            <p className="text-background/60 mb-6">
              First access to new drops, exclusive content, and stories from the community.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-background/60 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container-brand py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">Worlds</h4>
            <ul className="space-y-3">
              {worldLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-background/60 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-background/60 hover:text-background transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/dream-fund" className="text-sm text-background/60 hover:text-background transition-colors">
                  Dream Fund
                </Link>
              </li>
              <li>
                <Link to="/early-access" className="text-sm text-background/60 hover:text-background transition-colors">
                  Early Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-sm text-background/60 hover:text-background transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-background/60 hover:text-background transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">Connect</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/find-your-line" className="text-sm text-background/60 hover:text-background transition-colors">
                  Find Your Line
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-background/20 hover:border-background/60 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-background/20 hover:border-background/60 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-brand py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/40">
            <p>© {new Date().getFullYear()} UNVLD. All rights reserved.</p>
            <p>
              Designed for those who dare to be{' '}
              <span className="text-primary">unveiled</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
