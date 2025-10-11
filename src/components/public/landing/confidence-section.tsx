import Image from "next/image";
import { assets } from "@/assets";
import Link from "next/link";
const features = [
  {
    backgroundColor: "bg-primary/20",
    iconImage: assets.onlineTuition1,
    alt: "Notes and materials",
    href: "/notes",
  },
  {
    backgroundColor: "bg-accent/20",
    iconImage: assets.onlineTuition2,
    alt: "Video lessons",
    href: "/lessons",
  },
  {
    backgroundColor: "bg-primary/25",
    iconImage: assets.onlineTuition3,
    alt: "PowerPoint summaries",
    href: "/summaries",
  },
  {
    backgroundColor: "bg-accent/25",
    iconImage: assets.onlineTuition4,
    alt: "Scheduled classes",
    href: "/classes",
  },
];

export default function ConfidenceSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-26 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-7 sm:mb-7 lg:mb-6" data-aos="fade-left">
          <h2
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
            mb-4 sm:mb-6 text-center leading-tight max-w-4xl mx-auto break-words"
          >
            <span className="inline-block text-balance text-primary">
              Helping Students Build Confidence
            </span>
            <span className="block mt-2 text-accent">One Class At A Time</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4">
            Our Online tuition classes are tailored for student success. We
            focus on small group learning, enabling tutors to connect with each
            student, provide real-time feedback, and offer materials like notes,
            videos, and PowerPoint summaries for continued learning after class.
            Parents are kept in the loop through regular communication, making
            us a trusted online school for exam preparation.
          </p>
        </div>

        <div className="hidden md:grid max-w-5xl mx-auto" data-aos="fade-up">
          <div className="relative max-w-5xl mx-auto">
            {/* Image layer */}
            <div className="flex items-center justify-center">
              <Image
                src={assets.onlineTuition || "/placeholder.svg"}
                alt="Online tuition teacher with headphones"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Feature cards layer */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-30%] w-full px-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="grid grid-cols-4 gap-3 lg:gap-4 max-w-4xl w-full mx-auto">
                {features.map((feature, index) => (
                  <Link
                    href={feature.href}
                    key={index}
                    className={`
                      ${feature.backgroundColor} rounded-lg lg:rounded-xl
                      shadow-md border border-border/50
                      h-24 lg:h-28 flex items-center justify-center p-3 lg:p-4
                      transition-transform hover:scale-105 hover:shadow-lg
                    `}
                  >
                    <div className="relative w-12 h-12 lg:w-20 lg:h-20">
                      <Image
                        src={feature.iconImage || "/placeholder.svg"}
                        alt={feature.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Version */}
        <div className="md:hidden relative max-w-5xl mx-auto">
          {/* Image layer */}
          <div className="flex items-center justify-center">
            <Image
              src={assets.onlineTuition || "/placeholder.svg"}
              alt="Online tuition teacher with headphones"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Feature cards layer */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-20%] w-full px-4">
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
              {features.map((feature, index) => (
                <Link
                  href={feature.href}
                  key={index}
                  className={`
                    ${feature.backgroundColor} rounded-lg shadow-md border border-border/50
                    h-20 flex items-center justify-center p-3
                    transition-transform hover:scale-105 hover:shadow-lg
                  `}
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src={feature.iconImage || "/placeholder.svg"}
                      alt={feature.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
