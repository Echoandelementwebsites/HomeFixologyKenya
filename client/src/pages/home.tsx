import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useIsMobile } from "@/hooks/use-mobile";
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
  DoorOpen,
  Thermometer,
  Fan,
  Zap,
  Bolt,
  Calendar,
  PhoneCall,
  Send,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  AlertTriangle,
  Tag,
  CheckCircle
} from "lucide-react";

interface ServiceRequestForm {
  name: string;
  phone: string;
  email: string;
  appliance: string;
  area: string;
  description: string;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState<ServiceRequestForm>({
    name: "",
    phone: "",
    email: "",
    appliance: "",
    area: "",
    description: ""
  });
  
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const submitServiceRequest = useMutation({
    mutationFn: async (data: ServiceRequestForm) => {
      const response = await apiRequest("POST", "/api/service-request", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Service Request Submitted",
        description: data.message,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        appliance: "",
        area: "",
        description: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitServiceRequest.mutate(formData);
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
              <h1 className="text-xl font-bold text-primary flex items-center">
                <Bolt className="mr-2" size={24} />
                Home & Office Fixology
              </h1>
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
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert Appliance Repair in{" "}
                <span className="text-accent">Nairobi</span>
              </h2>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Professional washing machine and refrigerator repair services. 
                Fast, reliable, and guaranteed solutions for your home and office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button onClick={() => scrollToSection('contact')} className="bg-accent text-white px-8 py-4 text-lg font-semibold hover:bg-green-600">
                  <Calendar className="mr-2" size={20} />
                  Book Service
                </Button>
                <Button variant="outline" asChild className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary bg-transparent">
                  <a href="tel:+254700123456" className="text-white hover:text-primary">
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
                alt="Professional technician repairing washing machine" 
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

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Washing Machine Service */}
            <Card className="bg-neutral-light shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary text-white p-4 rounded-lg mr-4">
                    <Wrench size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-dark">Washing Machine Repair</h4>
                </div>
                
                <div className="mb-6">
                  <img 
                    src="/attached_assets/56f253be-4a87-4075-9de3-de3bb13603c5_1752432325601.jpeg" 
                    alt="Washing machine repair service" 
                    className="rounded-lg w-full h-64 object-cover" 
                  />
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-neutral-dark">
                    <Wrench className="text-accent mr-3" size={20} />
                    <span>Drum and motor repairs</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Droplets className="text-accent mr-3" size={20} />
                    <span>Drainage and pump issues</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Cpu className="text-accent mr-3" size={20} />
                    <span>Control panel and electronics</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <DoorOpen className="text-accent mr-3" size={20} />
                    <span>Door and seal replacement</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button onClick={() => scrollToSection('contact')} className="bg-primary text-white px-6 py-3 font-semibold hover:bg-blue-700">
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Refrigerator Service */}
            <Card className="bg-neutral-light shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary text-white p-4 rounded-lg mr-4">
                    <Snowflake size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-dark">Refrigerator Repair</h4>
                </div>
                
                <div className="mb-6">
                  <img 
                    src="/attached_assets/3a107325-79ae-420b-8227-a327a839dbb8_1752432325602.jpeg" 
                    alt="Refrigerator repair service" 
                    className="rounded-lg w-full h-64 object-cover" 
                  />
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-neutral-dark">
                    <Thermometer className="text-accent mr-3" size={20} />
                    <span>Temperature control issues</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Fan className="text-accent mr-3" size={20} />
                    <span>Compressor and cooling system</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Zap className="text-accent mr-3" size={20} />
                    <span>Electrical and defrost problems</span>
                  </li>
                  <li className="flex items-center text-neutral-dark">
                    <Bolt className="text-accent mr-3" size={20} />
                    <span>Ice maker and water dispenser</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Button onClick={() => scrollToSection('contact')} className="bg-primary text-white px-6 py-3 font-semibold hover:bg-blue-700">
                    Get Quote
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
            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-neutral-dark mb-6">Request Service</h4>
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-neutral-dark mb-2">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-neutral-dark mb-2">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+254 700 123 456"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="email" className="text-sm font-medium text-neutral-dark mb-2">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="appliance" className="text-sm font-medium text-neutral-dark mb-2">Appliance Type</Label>
                      <Select value={formData.appliance} onValueChange={(value) => setFormData({ ...formData, appliance: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select appliance" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="washing-machine">Washing Machine</SelectItem>
                          <SelectItem value="refrigerator">Refrigerator/Fridge</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="area" className="text-sm font-medium text-neutral-dark mb-2">Service Area</Label>
                      <Select value={formData.area} onValueChange={(value) => setFormData({ ...formData, area: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="westlands">Westlands</SelectItem>
                          <SelectItem value="karen">Karen</SelectItem>
                          <SelectItem value="kilimani">Kilimani</SelectItem>
                          <SelectItem value="lavington">Lavington</SelectItem>
                          <SelectItem value="runda">Runda</SelectItem>
                          <SelectItem value="kileleshwa">Kileleshwa</SelectItem>
                          <SelectItem value="parklands">Parklands</SelectItem>
                          <SelectItem value="south-bc">South B/C</SelectItem>
                          <SelectItem value="kasarani">Kasarani</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <Label htmlFor="description" className="text-sm font-medium text-neutral-dark mb-2">Problem Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe the issue with your appliance..."
                      required
                      rows={4}
                      className="mt-2"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-white px-6 py-4 font-semibold hover:bg-blue-700"
                    disabled={submitServiceRequest.isPending}
                  >
                    <Send className="mr-2" size={20} />
                    {submitServiceRequest.isPending ? "Submitting..." : "Submit Service Request"}
                  </Button>
                </form>
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
                        <p className="text-neutral-medium">+254 700 123 456</p>
                        <p className="text-sm text-accent">Quick Response Service</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary text-white p-3 rounded-lg mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-dark">Email</h5>
                        <p className="text-neutral-medium">info@homeofficefixology.co.ke</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary text-white p-3 rounded-lg mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-dark">Service Area</h5>
                        <p className="text-neutral-medium">Nairobi and surrounding areas</p>
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
                    <span>8:00 AM - 4:00 PM</span>
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
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-accent transition duration-200">Get Quote</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-accent transition duration-200">Maintenance Plans</button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Phone className="mr-2 text-accent" size={16} />
                  +254 700 123 456
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 text-accent" size={16} />
                  info@homeofficefixology.co.ke
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 text-accent" size={16} />
                  Nairobi, Kenya
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Home & Office Fixology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
