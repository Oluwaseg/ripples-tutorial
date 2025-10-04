import { assets } from "@/assets";
import Image from "next/image";

const stats = [
  {
    value: "4,000+",
    label: "Active Learners",
  },
  {
    value: "96%",
    label: "User Satisfaction",
  },
  {
    value: "3,679+",
    label: "Registration",
  },
  {
    value: "10+",
    label: "Course Category",
  },
];

export default function ConfidenceSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
            mb-4 sm:mb-6 text-center leading-tight max-w-4xl mx-auto break-words"
          >
            <span className="inline-block text-balance">
              Helping Students Build Confidence
            </span>
            <span className="block mt-2 text-accent">One Class At A Time</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[color:var(--neutral-700)] leading-relaxed max-w-4xl mx-auto px-4">
            Our Online tuition classes are tailored for student success. We
            focus on small group learning, enabling tutors to connect with each
            student, provide real-time feedback, and offer materials like notes,
            videos, and PowerPoint summaries for continued learning after class.
          </p>
        </div>

        {/* Image */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-blue)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <Image
              src={assets.onlineTuition || "/placeholder.svg"}
              alt="Online tuition teacher with student"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-[var(--background)] rounded-xl sm:rounded-2xl
              p-5 sm:p-6 md:p-8 lg:p-10 text-center shadow-sm hover:shadow-xl
              transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              {/* gradient hover overlay */}
              <div
                className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100
                transition-opacity duration-300 bg-gradient-to-br
                from-primary/10 via-accent/10 to-transparent
                dark:from-primary/20 dark:via-accent/20"
              />

              <div className="relative z-10">
                {/* Value */}
                <div
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold
                  bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                  mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div
                  className="font-semibold text-xs sm:text-sm lg:text-base tracking-wide uppercase
                  text-muted-foreground dark:text-secondary-foreground"
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
