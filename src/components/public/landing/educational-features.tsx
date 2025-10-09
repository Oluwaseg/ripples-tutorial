import { assets } from "@/assets";
import Image from "next/image";

const features = [
  {
    icon: () => (
      <Image
        src={assets.understandingIcon || "/placeholder.svg"}
        alt="Understand Icon"
        width={56}
        height={56}
        className="object-contain"
      />
    ),
    title: "Understand Better",
    description:
      "Understand each topic with simple explanation and expert tutors.",
  },
  {
    icon: () => (
      <Image
        src={assets.flexibleIcon || "/placeholder.svg"}
        alt="Flexible Icon"
        width={56}
        height={56}
        className="object-contain"
      />
    ),
    title: "Flexible Scheduling",
    description:
      "Pick class time that work around your school and life routine.",
  },
  {
    icon: () => (
      <Image
        src={assets.supportIcon || "/placeholder.svg"}
        alt="Support Icon"
        width={56}
        height={56}
        className="object-contain"
      />
    ),
    title: "Ongoing Support",
    description: "Need Help? You can reach out anytime- before or after class.",
  },
  {
    icon: () => (
      <Image
        src={assets.pcIcon || "/placeholder.svg"}
        alt="PC Icon"
        width={56}
        height={56}
        className="object-contain"
      />
    ),
    title: "Replay Anytime",
    description: "Use recorded lessons and note to revise at your own space.",
  },
];

export default function EducationalFeatures() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10"  data-aos='fade-right' >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left text section - Takes 5 columns on large screens */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm"  data-aos='flip-right' data-aos-delay='400'>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-accent" >
                Why Choose Us
              </span>
            </div>

            <div className="space-y-5 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] text-balance" data-aos='fade-left' data-aos-delay='200'>
                Check Out Our{" "}
                <span className="text-primary relative inline-block">
                  Educational
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-accent/30"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C60 2 140 2 198 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                Features
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl" data-aos='fade-left' data-aos-delay='300'>
                Because we deliver expert tutors, small-group classes, and
                proven results, all online, flexible, and focused on your
                child's success.
              </p>
            </div>

            {/* Stats row for extra visual interest */}
            <div className="flex flex-wrap gap-6 pt-4"  data-aos='flip-right' data-aos-delay='200'>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Key Features
                  </p>
                  <p className="text-xs text-muted-foreground">
                    For your success
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right grid section - Takes 7 columns on large screens */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl lg:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-lg border-2 border-border hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full"  data-aos='flip-' data-aos-delay='400'>
                    {/* Icon container with enhanced styling */}
                    <div className="mb-5 sm:mb-6 flex items-center justify-start">
                      <div className="relative">
                        {/* Glow effect behind icon */}
                        <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition-all duration-500" />

                        {/* Icon wrapper */}
                        <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 group-hover:from-accent/20 group-hover:to-primary/20 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-accent/20 group-hover:border-accent/40">
                          <div className="w-9 h-9 sm:w-11 sm:h-11">
                            <feature.icon />
                          </div>
                        </div>

                        {/* Decorative dot */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="space-y-3 flex-1 flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
                        {feature.description}
                      </p>

                      {/* Decorative arrow that appears on hover */}
                      <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 pt-2">
                        <span className="text-sm font-semibold">
                          Learn more
                        </span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
