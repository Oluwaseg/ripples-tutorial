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
          <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[color:var(--neutral-900)] mb-6 sm:mb-8 text-balance leading-[1.1] max-w-5xl mx-auto">
            Helping Students Build Confidence
            <br className="hidden sm:block" />
            <span className="block mt-2 text-primary">One Class At A Time</span>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[color:var(--neutral-200)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/5 to-[color:var(--brand-green)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-primary bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-accent font-semibold text-xs sm:text-sm lg:text-base tracking-wide uppercase">
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
