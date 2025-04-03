import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckIcon } from "lucide-react";

interface OperatingHour {
  day: string;
  hours: string;
}

const operatingHours: OperatingHour[] = [
  { day: "Monday", hours: "12:00 PM - 11:30 PM" },
  { day: "Tuesday", hours: "12:00 PM - 11:30 PM" },
  { day: "Wednesday", hours: "12:00 PM - 11:30 PM" },
  { day: "Thursday", hours: "12:00 PM - 11:30 PM" },
  { day: "Friday", hours: "12:00 PM - 10:30 PM" },
  { day: "Saturday", hours: "12:00 PM - 11:30 PM" },
  { day: "Sunday", hours: "12:00 PM - 11:30 PM" }
];

const features = [
  "Accepts Credit Cards",
  "Dog Friendly",
  "Free Wifi",
  "Outdoor Seating",
  "Wheelchair Accessible",
  "Full Bar with Wine and Beer"
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 section-heading">Find Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold mb-2">Address</h3>
                  <p className="text-neutral-600">
                    Rruga Pavlo Flloko<br />
                    Perballe me Hotel Regina City<br />
                    Vlore 9401, Albania
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold mb-2">Contact Information</h3>
                  <p className="text-neutral-600 flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-accent" />
                    <a href="tel:+355696539596" className="hover:text-accent transition-colors">
                      +355 69 653 9596
                    </a>
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold mb-2">Hours of Operation</h3>
                  <ul className="space-y-2 text-neutral-600">
                    {operatingHours.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.day}:</span>
                        <span>{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.map((feature, index) => (
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.638453064319!2d19.495735415361578!3d40.628290979342385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM3JzQxLjgiTiAxOcKwMjknNDkuMSJF!5e0!3m2!1sen!2sus!4v1625584362583!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Restaurant location on map"
                aria-label="Map showing Restorant Titanic location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
