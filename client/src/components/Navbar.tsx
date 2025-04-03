import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "wouter";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: t('nav.home') },
    { href: "#about", label: t('nav.about') },
    { href: "#menu", label: t('nav.menu') },
    { href: "#gallery", label: t('nav.gallery') },
    { href: "#contact", label: t('nav.contact') },
  ];

  // Toggle language between English and Albanian
  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'al' : 'en';
    setLanguage(newLanguage);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicked
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full bg-white shadow-md z-40 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-display font-bold text-primary">Restorant Titanic</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="font-medium hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Language Toggle */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className="ml-4 font-medium"
          >
            {language === 'en' ? 'AL' : 'EN'}
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          {/* Language Toggle for Mobile */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className="mr-4 font-medium"
          >
            {language === 'en' ? 'AL' : 'EN'}
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="focus:outline-none">
                <Menu className="h-6 w-6 text-primary" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="mt-8">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="block py-2 font-medium hover:text-accent transition-colors"
                        onClick={handleNavClick}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
