import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Check, 
  Shield, 
  Clock, 
  DollarSign,
  Wrench,
  Snowflake,
  Droplets,
  Cpu,
  Thermometer,
  Fan,
  Zap,
  Bolt,
  Calendar,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Tag,
  CheckCircle,
  Power,
  Sun,
  Wind,
  Settings,
  Battery
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Create mailto link with pre-filled service request template
  const createEmailLink = () => {
    const email = "homeofficefixology@gmail.com";
    const subject = "Service Request - Home & Office Fixology";
    const body = `Hello Home & Office Fixology,

I would like to request service for my appliance/equipment.

Please provide the following details:
- Your Name:
- Phone Number:
- Email Address:
- Service Type (Washing Machine/Refrigerator/Generator/Solar/Air Conditioning):
- Service Area in Nairobi:
- Problem Description:
- Preferred Service Time:

Thank you for your professional service!

Best regards`;

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-primary flex items-center" role="heading" aria-level={2}>
                <Bolt className="mr-2" size={24} />
                Home & Office Fixology
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-neutral-dark hover:text-primary px-3 py-2 text-sm font-medium transition duration-200">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-neutral-dark hover:text-primary px-3 py-2 text-sm font-medium transition duration-200">
                About
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-neutral-dark hover:text-primary px-3 py-2 text-sm font-medium transition duration-200">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-neutral-dark hover:text-primary px-3 py-2 text-sm font-medium transition duration-200">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-neutral-dark hover:text-primary">Services</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-neutral-dark hover:text-primary">About</button>
                <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-neutral-dark hover:text-primary">Reviews</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-neutral-dark hover:text-primary">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1603712725038-7cd6b6e42b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert Appliance Repair in{" "}
                <span className="text-accent">Nairobi</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Professional appliance repair, generator service, solar installation, and air conditioning solutions. 
                Fast, reliable, and guaranteed services for your home and office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild className="bg-accent text-white px-8 py-4 text-lg font-semibold hover:bg-green-600">
                  <a href={createEmailLink()}>
                    <Mail className="mr-2" size={20} />
                    Email Us for Service
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary bg-transparent">
                  <a href="tel:+254768028298" className="text-white hover:text-primary">
                    <Phone className="mr-2" size={20} />
                    Call Now
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="text-accent mr-2" size={20} />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center">
                  <Shield className="text-accent mr-2" size={20} />
                  <span>90-Day Warranty</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-accent mr-2" size={20} />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center">
                  <Star className="text-accent mr-2" size={20} />
                  <span>5-Star Rated</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional appliance repair technician repairing washing machine"
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">
              Our Expert Services
            </h3>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Specialized repair solutions for your essential home and office appliances. 
              Our certified technicians handle all major brands and models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Washing Machine Service */}
            <Card className="bg-neutral-light shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-accent text-white p-3 rounded-lg mr-3">
                    <Wrench size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-dark">Washing Machine Repair</h4>
                </div>
                
                <div className="mb-4">
                  <img 
                    src="/images/washing-machine.jpeg" 
                    alt="Washing machine repair service" 
                    className="rounded-lg w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>

                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-center text-neutral-dark">
                    <Wrench className="text-accent mr-2" size={16} />
                    <span>Drum and motor repairs</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Droplets className="text-accent mr-2" size={16} />
                    <span>Drainage and pump issues</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Cpu className="text-accent mr-2" size={16} />
                    <span>Control panel and electronics</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button asChild className="bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700">
                    <a href={createEmailLink()}>
                      <Mail className="mr-2" size={14} />
                      Get Quote
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Refrigerator Service */}
            <Card className="bg-neutral-light shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white p-3 rounded-lg mr-3">
                    <Snowflake size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-dark">Refrigerator Repair</h4>
                </div>
                
                <div className="mb-4">
                  <img 
                    src="/images/refrigerator.jpeg" 
                    alt="Refrigerator repair service" 
                    className="rounded-lg w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>

                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-center text-neutral-dark">
                    <Thermometer className="text-accent mr-2" size={16} />
                    <span>Temperature control issues</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Fan className="text-accent mr-2" size={16} />
                    <span>Compressor and cooling system</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Zap className="text-accent mr-2" size={16} />
                    <span>Electrical and defrost problems</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button asChild className="bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700">
                    <a href={createEmailLink()}>
                      <Mail className="mr-2" size={14} />
                      Get Quote
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Generator Service */}
            <Card className="bg-neutral-light shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-accent text-white p-3 rounded-lg mr-3">
                    <Power size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-dark">Generator Repair</h4>
                </div>
                
                <div className="mb-4">
                  <img 
                    src="/images/generator.jpg" 
                    alt="Generator repair service" 
                    className="rounded-lg w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>

                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-center text-neutral-dark">
                    <Power className="text-accent mr-2" size={16} />
                    <span>Engine and alternator repairs</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Settings className="text-accent mr-2" size={16} />
                    <span>Control panel diagnostics</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Wrench className="text-accent mr-2" size={16} />
                    <span>Maintenance and servicing</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button asChild className="bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700">
                    <a href={createEmailLink()}>
                      <Mail className="mr-2" size={14} />
                      Get Quote
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Solar Service */}
            <Card className="bg-neutral-light shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white p-3 rounded-lg mr-3">
                    <Sun size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-dark">Solar Installation</h4>
                </div>
                
                <div className="mb-4">
                  <img 
                    src="/images/solar.jpg" 
                    alt="Solar installation service" 
                    className="rounded-lg w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>

                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-center text-neutral-dark">
                    <Sun className="text-accent mr-2" size={16} />
                    <span>Solar panel installation</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Battery className="text-accent mr-2" size={16} />
                    <span>Battery backup systems</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Zap className="text-accent mr-2" size={16} />
                    <span>Inverter setup and maintenance</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button asChild className="bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700">
                    <a href={createEmailLink()}>
                      <Mail className="mr-2" size={14} />
                      Get Quote
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Air Conditioning Service */}
            <Card className="bg-neutral-light shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-accent text-white p-3 rounded-lg mr-3">
                    <Wind size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-dark">Air Conditioning</h4>
                </div>
                
                <div className="mb-4">
                  <img 
                    src="/images/air-conditioning.jpg" 
                    alt="Air conditioning repair service" 
                    className="rounded-lg w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>

                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-center text-neutral-dark">
                    <Wind className="text-accent mr-2" size={16} />
                    <span>AC installation and repair</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Thermometer className="text-accent mr-2" size={16} />
                    <span>Temperature control issues</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Settings className="text-accent mr-2" size={16} />
                    <span>Regular maintenance service</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button asChild className="bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700">
                    <a href={createEmailLink()}>
                      <Mail className="mr-2" size={14} />
                      Get Quote
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Process */}
          <div className="bg-gradient-to-r from-primary to-blue-800 rounded-xl p-8 text-white">
            <h4 className="text-2xl font-bold text-center mb-8">Our Simple Service Process</h4>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h5 className="font-semibold mb-2">1. Call Us</h5>
                <p className="text-blue-100 text-sm">Describe your appliance issue</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={32} />
                </div>
                <h5 className="font-semibold mb-2">2. Schedule</h5>
                <p className="text-blue-100 text-sm">Choose convenient time slot</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bolt size={32} />
                </div>
                <h5 className="font-semibold mb-2">3. Repair</h5>
                <p className="text-blue-100 text-sm">Expert diagnosis and fix</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} />
                </div>
                <h5 className="font-semibold mb-2">4. Warranty</h5>
                <p className="text-blue-100 text-sm">90-day service guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-6">
                Why Choose Home & Office Fixology?
              </h3>
              <p className="text-lg text-neutral-medium mb-8 leading-relaxed">
                With over 10 years of experience serving Nairobi, we've built our reputation 
                on reliable service, honest pricing, and expert craftsmanship. Our certified 
                technicians are equipped to handle all major appliance brands.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-accent text-white p-3 rounded-lg mr-4 mt-1">
                    <Tag size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-dark mb-1">Certified Technicians</h5>
                    <p className="text-neutral-medium text-sm">Factory-trained experts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent text-white p-3 rounded-lg mr-4 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-dark mb-1">Fast Response</h5>
                    <p className="text-neutral-medium text-sm">Same-day service available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent text-white p-3 rounded-lg mr-4 mt-1">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-dark mb-1">Warranty Guarantee</h5>
                    <p className="text-neutral-medium text-sm">90-day parts & labor</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent text-white p-3 rounded-lg mr-4 mt-1">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-dark mb-1">Transparent Pricing</h5>
                    <p className="text-neutral-medium text-sm">No hidden fees</p>
                  </div>
                </div>
              </div>

              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-neutral-dark mb-3">Service Coverage Areas</h5>
                  <div className="grid sm:grid-cols-3 gap-2 text-sm text-neutral-medium">
                    <span>• Westlands</span>
                    <span>• Karen</span>
                    <span>• Kilimani</span>
                    <span>• Lavington</span>
                    <span>• Runda</span>
                    <span>• Kileleshwa</span>
                    <span>• Parklands</span>
                    <span>• South B/C</span>
                    <span>• Kasarani</span>
                  </div>
                  <p className="text-xs text-neutral-medium mt-3">And many more areas across Nairobi</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                alt="Professional appliance repair technician with diagnostic tools" 
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">
              What Our Customers Say
            </h3>
            <p className="text-xl text-neutral-medium">
              Over 2,000 satisfied customers across Nairobi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-neutral-light shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-warning mr-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-medium">5.0</span>
                </div>
                <p className="text-neutral-dark mb-4 italic">
                  "My washing machine was completely dead, but their technician fixed it the same day! 
                  Professional service and fair pricing. Highly recommended."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold">MK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">Mary Kariuki</div>
                    <div className="text-sm text-neutral-medium">Westlands</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-light shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-warning mr-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-medium">5.0</span>
                </div>
                <p className="text-neutral-dark mb-4 italic">
                  "Excellent fridge repair service! They diagnosed the problem quickly and had it running 
                  perfectly. The 90-day warranty gives great peace of mind."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold">JO</span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">James Ochieng</div>
                    <div className="text-sm text-neutral-medium">Karen</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-light shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-warning mr-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-medium">5.0</span>
                </div>
                <p className="text-neutral-dark mb-4 italic">
                  "Professional, punctual, and honest. They repaired our office refrigerator and washing 
                  machine with transparent pricing. Will definitely use again!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold">AM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">Alice Mwangi</div>
                    <div className="text-sm text-neutral-medium">Kilimani</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-neutral-light px-6 py-3 rounded-lg">
              <div className="text-warning mr-2 text-2xl flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-neutral-dark font-semibold mr-2">4.9/5</span>
              <span className="text-neutral-medium">Average Rating (200+ Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">
              Get Your Appliance Fixed Today
            </h3>
            <p className="text-xl text-neutral-medium">
              Contact us for fast, reliable repair service
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Email Contact */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-neutral-dark mb-6">Request Service</h4>
                <div className="text-center">
                  <div className="bg-primary text-white p-6 rounded-lg mb-6">
                    <Mail size={48} className="mx-auto mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Contact Us via Email</h5>
                    <p className="text-blue-100">
                      Click the button below to send us an email with your service request details
                    </p>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-accent text-white px-8 py-4 text-lg font-semibold hover:bg-green-600 mb-4"
                  >
                    <a href={createEmailLink()}>
                      <Mail className="mr-2" size={20} />
                      Send Service Request Email
                    </a>
                  </Button>
                  
                  <div className="text-sm text-neutral-medium">
                    <p className="mb-2">This will open your email client with a pre-filled template ready for use.</p>
                    <p>Just add your details and send - we'll respond within 30 minutes!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div>
              <Card className="bg-white shadow-lg mb-8">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-neutral-dark mb-6">Contact Information</h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary text-white p-3 rounded-lg mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-dark">Phone</h5>
                        <p className="text-neutral-medium">+254 768 028 298</p>
                        <p className="text-sm text-accent">Quick Response Service</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary text-white p-3 rounded-lg mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-dark">Email Address</h5>
                        <p className="text-neutral-medium">homeofficefixology@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary text-white p-3 rounded-lg mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-dark">Location</h5>
                        <p className="text-neutral-medium">Kingara Road, opposite Levels hotel</p>
                        <p className="text-neutral-medium text-sm">Serving Nairobi and surrounding areas</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary text-white p-8 rounded-xl">
                <h4 className="text-2xl font-bold mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>12:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2" size={20} />
                    <span className="font-semibold">Same Day Service Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-2xl font-bold mb-4 flex items-center">
                <Bolt className="mr-2 text-accent" size={24} />
                Home & Office Fixology
              </h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Your trusted appliance repair partner in Nairobi. We specialize in washing machine 
                and refrigerator repairs with guaranteed service and transparent pricing.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-accent transition duration-200">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition duration-200">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition duration-200">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition duration-200">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-accent transition duration-200">Washing Machine Repair</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-accent transition duration-200">Refrigerator Repair</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-accent transition duration-200">Generator Repair</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-accent transition duration-200">Solar Installation</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-accent transition duration-200">Air Conditioning</button></li>
                <li><a href={createEmailLink()} className="hover:text-accent transition duration-200">Get Quote</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contact </h5>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Phone className="mr-2 text-accent" size={16} />
                  +254 768 028 298
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 text-accent" size={16} />
                  homeofficefixology@gmail.com
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 text-accent" size={16} />
                  Kingara Road, opposite Levels hotel, Nairobi
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Home & Office Fixology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
