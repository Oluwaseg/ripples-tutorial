import { assets } from "@/assets";
import { Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10 py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-5 md:space-y-6">
            <div className="flex items-center">
              <Image
                src={assets.logo || "/placeholder.svg"}
                alt="Ripples Tutorials"
                className="h-8 sm:h-10 w-auto"
                width={200}
                height={40}
              />
            </div>
            <p className="text-primary-foreground/90 leading-relaxed max-w-sm text-sm sm:text-base">
              A place where excellence meets opportunity, and where every
              learner is guided to reach their fullest potential.
            </p>

            <div className="flex gap-2.5 sm:gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group relative w-10 h-10 sm:w-11 sm:h-11 border-2 border-primary-foreground/30 rounded-full flex items-center justify-center hover:border-accent transition-all duration-300 cursor-pointer hover:scale-110"
                >
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 rounded-full transition-colors duration-300" />
                  <Icon className="relative h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground/80 group-hover:text-accent transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-5 md:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-primary-foreground relative inline-block">
              Useful Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-primary-foreground/80 text-sm sm:text-base">
              {["About Us", "How it Works", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-4 space-y-5 md:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-primary-foreground relative inline-block">
              Subscribe Now
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full" />
            </h4>
            <p className="text-primary-foreground/80 leading-relaxed text-sm sm:text-base">
              Don't miss our future updates! Get Subscribed Today!
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email here"
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground placeholder-primary-foreground/50 border-2 border-primary-foreground/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 text-sm sm:text-base"
              />
              <button className="w-full px-5 sm:px-6 py-3 sm:py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-accent/50 font-semibold text-sm sm:text-base">
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container py-5 sm:py-6 px-4 sm:px-6">
          <p className="text-center text-primary-foreground/90 text-xs sm:text-sm font-medium">
            ©2025 ripplestutorials. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
