import { assets } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const features = [
  "Everything Online",
  "Real Results",
  "Focused Learning",
  "Trackable Progress",
  "Parental Updates",
  "Student Login History",
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div
            className="relative order-2 lg:order-1 lg:col-span-5 pb-12"
            data-aos="fade-right"
          >
            {/* Decorative gradient blobs */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 lg:w-48 lg:h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -top-10 -right-10 w-32 h-32 lg:w-40 lg:h-40 bg-accent/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />

            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-accent/30 rounded-br-3xl" />

            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35)] transition-all duration-700 group">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />

              <Image
                src={assets.whyUs || "/placeholder.svg"}
                alt="Students collaborating in classroom"
                width={600}
                height={700}
                className="w-full object-cover object-top group-hover:scale-110 transition-transform duration-700
                           max-h-[300px] sm:max-h-[400px] md:max-h-[450px]"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-xl flex items-center gap-2 animate-bounce [animation-duration:3s] z-20 whitespace-nowrap">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-semibold text-sm">
                Trusted by 1000+ Students
              </span>
            </div>
          </div>

          <div
            className="space-y-10 order-1 lg:order-2 lg:col-span-7"
            data-aos="fade-left"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Why Choose Us
              </span>
            </div>

            <div className="space-y-6">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] text-balance"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                Why Choose{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Ripples</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -rotate-1" />
                </span>{" "}
                Tutorials?
              </h2>
              <p
                className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                At Ripples, we focus on what truly helps students succeed –
                clear teaching, real support, and flexible learning designed for
                your pace. Here's what makes us different:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative flex items-center gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100 + 200}`}
                >
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Image
                        src={assets.checkIcon || "/placeholder.svg"}
                        alt="Check"
                        width={20}
                        height={20}
                        className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300 brightness-0 group-hover:brightness-0 group-hover:invert"
                      />
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <span className="relative text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="flex flex-wrap gap-4 pt-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 rounded-full text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">LEARN MORE</span>
                <ArrowRight className="relative ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Stats indicator */}
              <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-muted/50 border border-border">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-semibold text-muted-foreground">
                  6 Key Benefits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
