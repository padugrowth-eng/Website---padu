
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 pb-8 border-b border-border/50">
          <img
            src="https://horizons-cdn.hostinger.com/100e8a77-7cd3-4f2f-948d-a18f2e215865/243bdba71193ebb3788f22f6383ab6e7.png"
            alt="PADU Growth logo"
            className="h-10 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-sm leading-relaxed opacity-80">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">{t('footer.quickLinks')}</span>
            <nav className="space-y-2">
              <Link to="/about" className="block text-sm opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200">
                {t('nav.about')}
              </Link>
              <Link to="/services" className="block text-sm opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200">
                {t('nav.services')}
              </Link>
              <Link to="/how-we-work" className="block text-sm opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200">
                {t('nav.howWeWork')}
              </Link>
              <Link to="/insights" className="block text-sm opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200">
                {t('nav.insights')}
              </Link>
              <Link to="/contact" className="block text-sm opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">{t('footer.contact')}</span>
            <div className="space-y-3">
              <a
                href="mailto:Halo@padu.id"
                className="flex items-center gap-2 text-sm opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200"
              >
                <Mail size={16} />
                <span>Halo@padu.id</span>
              </a>
              <a
                href="https://www.padu.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200"
              >
                <Globe size={16} />
                <span>www.padu.id</span>
              </a>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="#"
                  className="opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/padugrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:text-primary hover:opacity-100 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            © {currentYear} {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-sm opacity-70 hover:text-primary hover:opacity-100 transition-all duration-200">
              {t('footer.privacy')}
            </Link>
            <Link to="#" className="text-sm opacity-70 hover:text-primary hover:opacity-100 transition-all duration-200">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
