import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface OperatingHour {
  day: string;
  hours: string;
}

// Default values for when translations aren't loaded yet
const defaultOperatingHours: OperatingHour[] = [
  { day: "Monday", hours: "12:00 PM - 11:30 PM" },
  { day: "Tuesday", hours: "12:00 PM - 11:30 PM" },
  { day: "Wednesday", hours: "12:00 PM - 11:30 PM" },
  { day: "Thursday", hours: "12:00 PM - 11:30 PM" },
  { day: "Friday", hours: "12:00 PM - 10:30 PM" },
  { day: "Saturday", hours: "12:00 PM - 11:30 PM" },
  { day: "Sunday", hours: "12:00 PM - 11:30 PM" }
];

const defaultFeatures: string[] = [
  "Accepts Credit Cards",
  "Dog Friendly",
  "Free Wifi",
  "Outdoor Seating",
  "Wheelchair Accessible",
  "Full Bar with Wine and Beer"
];

export default function Contact() {
  const { t } = useTranslation();
  
  // Get operating hours and features from translations with fallbacks
  const operatingHours = t('contact.operatingHours', { returnObjects: true }) as OperatingHour[] || defaultOperatingHours;
  const features = t('contact.features', { returnObjects: true }) as string[] || defaultFeatures;

  return (
    <section id="contact" className="pt-10 pb-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 section-heading">
          {t('contact.title', 'Find Us')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold mb-2">{t('contact.addressTitle', 'Address')}</h3>
                  <p className="text-neutral-600">
                    Rruga Pavllo Floqi<br />
                    {t('contact.addressLine2', 'Perballe me Hotel Regina City')}<br />
                    {t('contact.addressLine3', 'Vlore 9401, Albania')}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold mb-2">{t('contact.contactInfoTitle', 'Contact Information')}</h3>
                  <p className="text-neutral-600 flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-accent" />
                    <a href="tel:+355696539596" className="hover:text-accent transition-colors">
                      +355 69 653 9596
                    </a>
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold mb-2">{t('contact.hoursTitle', 'Hours of Operation')}</h3>
                  <ul className="space-y-2 text-neutral-600">
                    {Array.isArray(operatingHours) && operatingHours.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.day}:</span>
                        <span>{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">{t('contact.featuresTitle', 'Features')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {Array.isArray(features) && features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckIcon className="h-5 w-5 mr-2 text-accent" />
                        <span className="text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map */}
          <div className="h-full min-h-[400px]">
            <div className="h-full rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.6984644800236!2d19.493032975723427!3d40.43767537143624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13453235b944dbdb%3A0xc7c33b44a0f8cdbb!2sRestorant%20Titanic!5e0!3m2!1sen!2s!4v1743693985957!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Restaurant location on map"
                aria-label="Map showing Restorant Titanic location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
