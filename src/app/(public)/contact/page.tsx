"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen my-9 md:my-0">
      {/* Hero Section - Clean Centered Design */}
      <section className="relative py-12 md:py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 h-48 w-48 md:h-96 md:w-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 h-64 w-64 md:h-[32rem] md:w-[32rem] bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div
          className="container mx-auto px-4 md:px-6 relative z-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 md:mb-6 hover:scale-105 transition-transform text-xs md:text-sm">
              <MessageSquare className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 inline" />
              Get in Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance">
              We're Here to Help You
              <span className="block text-primary mt-2">Succeed</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 text-pretty leading-relaxed">
              Have questions about our programmes? Need guidance on which
              tuition option is right for you? Our team is ready to assist you
              on your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards - Floating Style */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto -mt-16 md:-mt-24 relative z-20">
            {[
              {
                icon: Phone,
                title: "Phone",
                info: "+44 (0) 20 1234 5678",
                subInfo: "Mon-Fri, 9am-6pm",
                color: "primary",
              },
              {
                icon: Mail,
                title: "Email",
                info: "info@ripplestutorials.com",
                subInfo: "24/7 Response",
                color: "accent",
              },
              {
                icon: MapPin,
                title: "Location",
                info: "London, United Kingdom",
                subInfo: "Online Nationwide",
                color: "secondary",
              },
              {
                icon: Clock,
                title: "Office Hours",
                info: "Mon-Fri: 9am-6pm",
                subInfo: "Sat: 10am-4pm",
                color: "primary",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="bg-card border-2 hover:border-primary transition-all hover:shadow-2xl hover:scale-105 group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="700"
              >
                <CardHeader className="p-4 md:p-6 text-center">
                  <div className="mx-auto h-12 w-12 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <contact.icon className="h-6 w-6 md:h-8 md:w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-sm md:text-base group-hover:text-primary transition-colors">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0 text-center">
                  <p className="text-xs md:text-sm font-semibold mb-1">
                    {contact.info}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {contact.subInfo}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section - Split Layout */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Contact Form */}
              <div data-aos="fade-right" data-aos-duration="800">
                <div className="mb-6 md:mb-8">
                  <Badge
                    className="mb-3 md:mb-4 hover:scale-105 transition-transform text-xs md:text-sm"
                    variant="outline"
                  >
                    Send Us a Message
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <Card className="border-2 hover:shadow-2xl transition-all">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 md:space-y-6"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-xs md:text-sm">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="h-10 md:h-12 text-sm md:text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-xs md:text-sm">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-10 md:h-12 text-sm md:text-base"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-xs md:text-sm">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+44 20 1234 5678"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-10 md:h-12 text-sm md:text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="subject"
                            className="text-xs md:text-sm"
                          >
                            Subject *
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Programme Enquiry"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="h-10 md:h-12 text-sm md:text-base"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-xs md:text-sm">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your requirements..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="resize-none text-sm md:text-base"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-sm md:text-base py-4 md:py-6 hover:scale-105 transition-all group"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Info Cards */}
              <div
                className="space-y-6 md:space-y-8"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div>
                  <Badge
                    className="mb-3 md:mb-4 hover:scale-105 transition-transform text-xs md:text-sm"
                    variant="outline"
                  >
                    Why Choose Us?
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                    Expert Educational Support
                  </h2>
                </div>

                <Card
                  className="border-2 hover:border-primary transition-all hover:shadow-xl group"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="700"
                >
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Users className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <CardTitle className="text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
                          Experienced Team
                        </CardTitle>
                        <CardDescription className="text-xs md:text-sm">
                          Our tutors are qualified teachers with years of
                          experience in UK examination systems.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card
                  className="border-2 hover:border-accent transition-all hover:shadow-xl group"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="700"
                >
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                        <Calendar className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <div>
                        <CardTitle className="text-base md:text-lg mb-2 group-hover:text-accent transition-colors">
                          Flexible Scheduling
                        </CardTitle>
                        <CardDescription className="text-xs md:text-sm">
                          Book a consultation at a time that suits you. We offer
                          evening and weekend appointments.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card
                  className="border-2 hover:border-secondary transition-all hover:shadow-xl group"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="700"
                >
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all">
                        <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-secondary-foreground group-hover:text-secondary-foreground transition-colors" />
                      </div>
                      <div>
                        <CardTitle className="text-base md:text-lg mb-2 group-hover:text-secondary-foreground transition-colors">
                          Proven Results
                        </CardTitle>
                        <CardDescription className="text-xs md:text-sm">
                          98% of our students achieve their target grades or
                          higher with our comprehensive support.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Map Placeholder */}
                <Card
                  className="overflow-hidden border-2 hover:shadow-xl transition-all"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="700"
                >
                  <div className="relative h-48 md:h-64 bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-3 md:mb-4" />
                        <p className="text-xs md:text-sm text-muted-foreground font-medium">
                          Serving Students Across the UK
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Online & In-Person Options Available
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
              <Badge
                className="mb-3 px-4 py-2 bg-primary text-white md:mb-4 hover:scale-105 transition-transform text-xs md:text-sm"
                variant="outline"
              >
                Quick Access
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                Explore Our Programmes
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Not sure which programme is right for you? Browse our offerings
                to find the perfect fit.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "One-on-One Tuition",
                  description: "Personalised attention with dedicated tutors",
                  link: "/",
                },
                {
                  title: "Group-Based Tuition",
                  description: "Collaborative learning in small groups",
                  link: "/group-based",
                },
                {
                  title: "Self-Tuition",
                  description: "Flexible, self-paced learning materials",
                  link: "/self-tuition",
                },
              ].map((programme, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all hover:shadow-2xl hover:scale-105 group cursor-pointer"
                  data-aos="slide-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="700"
                >
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-base md:text-lg group-hover:text-primary transition-colors">
                      {programme.title}
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      {programme.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <Button
                      variant="outline"
                      className="w-full text-xs md:text-sm hover:scale-105 transition-all group/btn bg-transparent"
                    >
                      Learn More
                      <Send className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
