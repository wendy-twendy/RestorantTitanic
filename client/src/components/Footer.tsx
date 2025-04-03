import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Restorant Titanic</h3>
            <p className="mb-4 text-primary-100">Authentic Italian & Fresh Seafood on the Adriatic Coast</p>
            <p className="text-sm text-primary-200">© 2025 Restorant Titanic. All Rights Reserved.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="flex items-start mb-2">
              <MapPin className="h-5 w-5 mr-2 text-accent mt-0.5" />
              <span>
                Rruga Pavllo Floqi<br />
                Vlore 9401, Albania
              </span>
            </p>
            <p className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2 text-accent" />
              <a 
                href="tel:+355696539596" 
                className="hover:text-accent transition-colors"
              >
                +355 69 653 9596
              </a>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <p className="mb-4 text-primary-100">Follow us on social media for updates and special offers</p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-accent transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-accent transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-700">
          <ul className="flex flex-wrap justify-center space-x-8">
            <li>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                Accessibility Statement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
