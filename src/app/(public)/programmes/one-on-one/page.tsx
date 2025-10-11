import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Calendar,
  Check,
  Clock,
  GraduationCap,
  MessageCircle,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

export default function OneOnOneTuitionPage() {
  return (
    <main className="min-h-screen pt-10">
      {/* Hero Section - Clean Split Screen */}
      <section className="relative min-h-screen flex items-center bg-primary/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12 lg:py-20">
            {/* Left Content */}
            <div
              className="space-y-6 lg:space-y-10 max-w-2xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 md:px-6 md:py-3 text-sm md:text-base font-bold inline-flex items-center gap-2">
                <Sparkles
                  className="h-4 w-4 md:h-5 md:w-5"
                  aria-hidden="true"
                />
                Premium Personalised Learning
              </Badge>

              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
                  One-on-One
                  <span className="block text-primary mt-2 md:mt-4">
                    Private Tuition
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Highly personalized guidance, extra confidence-building, and
                  tailored support for your unique learning needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  size="lg"
                  className="text-sm md:text-base lg:text-lg px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-7 h-auto group font-bold"
                  aria-label="Book your first tutoring session"
                >
                  Book Your First Session
                  <ArrowRight
                    className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-sm md:text-base lg:text-lg px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-7 h-auto border-2 font-bold bg-white"
                  aria-label="View pricing information"
                >
                  View Pricing
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8">
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-1 md:mb-2">
                    4.9/5
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-semibold">
                    Student Rating
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-1 md:mb-2">
                    500+
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-semibold">
                    Students Taught
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-1 md:mb-2">
                    98%
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-semibold">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="relative h-[400px] md:h-[500px] lg:h-[700px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg"
                alt="Student receiving personalized one-on-one tutoring"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Asymmetric Bento Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div
          className="absolute top-0 right-0 h-96 w-96 bg-accent/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="container">
          <header
            className="text-center mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Badge className="mb-4 md:mb-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform px-3 py-1.5 md:px-6 md:py-3 text-sm md:text-base font-bold">
              Why Choose One-on-One?
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 lg:mb-8 text-balance leading-tight">
              Advantages of <span className="text-primary">One-on-One</span>{" "}
              Tuition
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
              Experience the ultimate in personalised education with dedicated
              attention, customised learning plans, and flexible pacing designed
              exclusively for you.
            </p>
          </header>

          {/* Asymmetric Bento Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
            {/* Large Feature Card - Spans 4 columns */}
            <Card
              className="md:col-span-4 border-2 hover:border-primary transition-all hover:shadow-2xl group overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5"
              data-aos="flip-up"
              data-aos-duration="800"
            >
              <CardHeader className="p-5 md:p-8 lg:p-10">
                <div className="flex items-start gap-4 md:gap-6 lg:gap-8">
                  <div className="h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-2xl md:rounded-3xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all shadow-xl">
                    <User
                      className="h-7 w-7 md:h-10 md:w-10 lg:h-12 lg:w-12 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3 lg:mb-4 group-hover:text-primary transition-colors font-black">
                      Personalized Attention
                    </CardTitle>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      Tutor focuses entirely on the strengths and weaknesses of
                      the student, ensuring every minute is optimised for
                      maximum learning impact. No distractions, no waiting for
                      others—just pure, focused education.
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Tall Card - Spans 2 columns */}
            <Card
              className="md:col-span-2 md:row-span-2 border-2 hover:border-accent transition-all hover:shadow-2xl group bg-gradient-to-br from-accent/5 to-primary/5"
              data-aos="flip-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <CardHeader className="p-5 md:p-6 lg:p-8 h-full flex flex-col justify-center">
                <div className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-xl md:rounded-2xl bg-accent flex items-center justify-center mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-all shadow-xl mx-auto">
                  <Target
                    className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-accent-foreground"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-4 group-hover:text-accent transition-colors font-black text-center">
                  Tailored Learning Style
                </CardTitle>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors text-center">
                  Tutor adapts teaching methods to match how the student learns
                  best, whether visual, auditory, kinesthetic, or a combination
                  of styles.
                </p>
              </CardHeader>
            </Card>

            {/* Medium Card */}
            <Card
              className="md:col-span-2 border-2 hover:border-primary transition-all hover:shadow-2xl group"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="700"
            >
              <CardHeader className="p-5 md:p-6 lg:p-8">
                <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 lg:mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Clock
                    className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-primary group-hover:text-primary-foreground transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-base md:text-lg lg:text-xl mb-2 md:mb-3 group-hover:text-primary transition-colors font-bold">
                  Flexible Pacing
                </CardTitle>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  Student can move faster or slower depending on their needs,
                  spending extra time on challenging topics.
                </p>
              </CardHeader>
            </Card>

            {/* Medium Card */}
            <Card
              className="md:col-span-2 border-2 hover:border-accent transition-all hover:shadow-2xl group"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="700"
            >
              <CardHeader className="p-5 md:p-6 lg:p-8">
                <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center mb-3 md:mb-4 lg:mb-5 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <Shield
                    className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-accent group-hover:text-accent-foreground transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-base md:text-lg lg:text-xl mb-2 md:mb-3 group-hover:text-accent transition-colors font-bold">
                  Privacy & Confidence
                </CardTitle>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  Ask questions freely without peers present, building
                  confidence in a safe, judgment-free environment.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Programmes Section - ZIG-ZAG LAYOUT */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 h-96 w-96 bg-primary/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="container">
          <header
            className="text-center mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Badge className="mb-4 md:mb-6 bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-transform px-3 py-1.5 md:px-6 md:py-3 text-sm md:text-base font-bold">
              Available Programmes
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 lg:mb-8 text-balance leading-tight">
              Personalised Tuition{" "}
              <span className="text-accent">Across All Levels</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
              From 11+ preparation to A-Level mastery, our expert tutors provide
              bespoke support tailored to your individual needs.
            </p>
          </header>

          <div className="max-w-7xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
            {/* 11Plus Programme - IMAGE LEFT (Zig) */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Image */}
              <div
                className="relative group"
                data-aos="slide-right"
                data-aos-duration="1000"
              >
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                  aria-hidden="true"
                />
                <div className="relative h-[300px] md:h-[450px] lg:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/8364068/pexels-photo-8364068.jpeg"
                    alt="Young student preparing for 11+ exam"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 lg:p-10">
                    <Badge className="mb-2 md:mb-3 lg:mb-4 bg-accent text-accent-foreground hover:scale-105 transition-transform text-xs md:text-sm lg:text-base px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2">
                      Ages 8-11
                    </Badge>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2 lg:mb-3">
                      11Plus Programme
                    </h3>
                    <p className="text-white/95 text-sm md:text-base lg:text-lg font-medium">
                      A personalised tutor handles all sections
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className="space-y-6 md:space-y-8"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div>
                  <h4 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
                    <BookOpen
                      className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>Subjects Covered:</span>
                  </h4>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        subject: "MATHS",
                        topics: "Problem Solving, Arithmetic and Reasoning",
                        icon: "🔢",
                        color: "primary",
                      },
                      {
                        subject: "ENGLISH",
                        topics:
                          "Reading, Comprehension, Grammar, Vocabulary, and Writing",
                        icon: "📚",
                        color: "accent",
                      },
                      {
                        subject: "VERBAL REASONING",
                        topics: "Logic, Word Patterns, and Sequence",
                        icon: "🧠",
                        color: "primary",
                      },
                      {
                        subject: "NON-VERBAL REASONING",
                        topics:
                          "Shapes, Spatial Reasoning, Visual Problem-Solving",
                        icon: "🔷",
                        color: "accent",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 md:p-5 lg:p-6 bg-card rounded-xl md:rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] group/item border-2 border-transparent hover:border-primary/20"
                      >
                        <div className="flex items-start gap-3 md:gap-4">
                          <span
                            className="text-2xl md:text-3xl lg:text-4xl"
                            role="img"
                            aria-label={item.subject}
                          >
                            {item.icon}
                          </span>
                          <div className="flex-1">
                            <div className="font-black text-sm md:text-base lg:text-lg text-primary mb-1 md:mb-2 group-hover/item:text-accent transition-colors">
                              {item.subject}
                            </div>
                            <div className="text-xs md:text-sm text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                              {item.topics}
                            </div>
                          </div>
                          <Check
                            className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full hover:scale-105 transition-all group/btn shadow-xl text-sm md:text-base lg:text-lg py-5 md:py-6 lg:py-7 font-bold"
                  aria-label="Apply for 11Plus tuition programme"
                >
                  Apply for 11Plus Tuition
                  <ArrowRight
                    className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover/btn:translate-x-2 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </div>
            </div>

            {/* GCSE Programme - IMAGE RIGHT (Zag) */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Content */}
              <div
                className="space-y-6 md:space-y-8 lg:order-1"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div>
                  <Badge className="mb-3 md:mb-4 lg:mb-5 bg-accent text-accent-foreground hover:scale-105 transition-transform text-xs md:text-sm lg:text-base px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2">
                    Years 10-11
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 lg:mb-6 text-balance leading-tight">
                    GCSE Year <span className="text-accent">Programme</span>
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                    We provide One-on-One tuition{" "}
                    <strong className="text-foreground font-bold">
                      exclusively for students in Years 10 and 11
                    </strong>
                    . These students are preparing for their GCSE, so our
                    tailored support focuses on strengthening weak areas and
                    tackling the most challenging topics.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-5">
                  <div
                    className="bg-accent/10 border-2 border-accent/30 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:bg-accent/20 transition-all hover:shadow-xl"
                    role="note"
                  >
                    <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                      <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg md:rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                        <Users
                          className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-accent-foreground"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm md:text-base lg:text-lg text-accent mb-2 md:mb-3">
                          For Years 7, 8, and 9:
                        </h4>
                        <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                          We offer{" "}
                          <strong className="text-foreground">
                            Group-Based Tuition (GCSE Junior)
                          </strong>{" "}
                          instead of One-on-One sessions for these year groups.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-primary/10 border-2 border-primary/30 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:bg-primary/20 transition-all hover:shadow-xl"
                    role="note"
                  >
                    <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                      <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg md:rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                        <Sparkles
                          className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary-foreground"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm md:text-base lg:text-lg text-primary mb-2 md:mb-3">
                          Important Note:
                        </h4>
                        <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                          Tuition is{" "}
                          <strong className="text-foreground">
                            subject-based
                          </strong>
                          , meaning students may enrol in one subject at a time.
                          We do not currently offer packages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all group/btn shadow-xl text-sm md:text-base lg:text-lg py-5 md:py-6 lg:py-7 font-bold"
                  aria-label="Apply for GCSE tuition programme"
                >
                  Apply for GCSE Tuition
                  <ArrowRight
                    className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover/btn:translate-x-2 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </div>

              {/* Image */}
              <div
                className="relative group lg:order-2"
                data-aos="slide-left"
                data-aos-duration="1000"
              >
                <div
                  className="absolute -inset-4 bg-gradient-to-l from-accent to-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                  aria-hidden="true"
                />
                <div className="relative h-[300px] md:h-[450px] lg:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg"
                    alt="GCSE student studying with personalized tutor"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
                </div>
              </div>
            </div>

            {/* A-Level Programme - IMAGE LEFT (Zig) */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Image */}
              <div
                className="relative group"
                data-aos="slide-right"
                data-aos-duration="1000"
              >
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                  aria-hidden="true"
                />
                <div className="relative h-[300px] md:h-[450px] lg:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg"
                    alt="A-Level student receiving advanced tutoring"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 lg:p-10">
                    <Badge className="mb-2 md:mb-3 lg:mb-4 bg-accent text-accent-foreground hover:scale-105 transition-transform text-xs md:text-sm lg:text-base px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2">
                      Ages 16-18
                    </Badge>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2 lg:mb-3">
                      A LEVEL+ Programme
                    </h3>
                    <p className="text-white/95 text-sm md:text-base lg:text-lg font-medium">
                      Hourly tuition for advanced subjects
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className="space-y-6 md:space-y-8"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div>
                  <h4 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
                    <GraduationCap
                      className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>For A LEVELs, we provide hourly tuition for:</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {[
                      { subject: "Mathematics", icon: "📐" },
                      { subject: "English Language", icon: "✍️" },
                      { subject: "English Literature", icon: "📖" },
                      { subject: "Physics", icon: "⚛️" },
                      { subject: "Chemistry", icon: "🧪" },
                      { subject: "Biology", icon: "🧬" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 lg:p-5 bg-card rounded-lg md:rounded-xl hover:shadow-lg transition-all hover:scale-105 group/item border-2 border-transparent hover:border-primary/20"
                      >
                        <span
                          className="text-xl md:text-2xl lg:text-3xl"
                          role="img"
                          aria-label={item.subject}
                        >
                          {item.icon}
                        </span>
                        <span className="font-bold text-xs md:text-sm lg:text-base group-hover/item:text-primary transition-colors">
                          {item.subject}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="bg-accent/10 border-2 border-accent/30 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:bg-accent/20 transition-all hover:shadow-xl"
                  role="note"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg md:rounded-xl bg-accent flex items-center justify-center">
                      <Award className="h-5 w-5 md:h-6 md:w-6 text-accent-foreground" />
                    </div>
                    <h4 className="font-bold text-base md:text-lg lg:text-xl text-accent">
                      Premium Support
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    A-Level tuition includes university preparation guidance,
                    UCAS support, and advanced study techniques to ensure your
                    success.
                  </p>
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full hover:scale-105 transition-all group/btn border-2 shadow-xl bg-transparent hover:bg-primary hover:text-primary-foreground text-sm md:text-base lg:text-lg py-5 md:py-6 lg:py-7 font-bold"
                  aria-label="Apply for A-Level tuition programme"
                >
                  Apply for A-Level Tuition
                  <ArrowRight
                    className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover/btn:translate-x-2 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Modern Cards with Numbers */}
      <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div
          className="absolute top-0 right-0 h-96 w-96 bg-accent/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="container">
          <header
            className="text-center mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Badge className="mb-4 md:mb-6 bg-primary text-primary-foreground hover:scale-105 transition-transform px-3 py-1.5 md:px-6 md:py-3 text-sm md:text-base font-bold">
              Simple Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 lg:mb-8 text-balance leading-tight">
              How <span className="text-primary">One-on-One</span> Tuition Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
              Our streamlined four-step process ensures you get matched with the
              perfect tutor and start your learning journey quickly.
            </p>
          </header>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description:
                  "We evaluate your current level and identify specific areas for improvement.",
                icon: Target,
                color: "primary",
              },
              {
                step: "02",
                title: "Match with Tutor",
                description:
                  "We pair you with an expert tutor who specialises in your subject and learning style.",
                icon: User,
                color: "accent",
              },
              {
                step: "03",
                title: "Customised Plan",
                description:
                  "Your tutor creates a personalised learning plan tailored to your goals and timeline.",
                icon: Calendar,
                color: "primary",
              },
              {
                step: "04",
                title: "Regular Sessions",
                description:
                  "Attend flexible one-on-one sessions and track your progress towards exam success.",
                icon: TrendingUp,
                color: "accent",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="700"
              >
                <Card className="text-center hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-primary h-full relative overflow-hidden">
                  {/* Large Background Number */}
                  <div
                    className="absolute top-2 md:top-4 right-2 md:right-4 text-5xl md:text-7xl lg:text-8xl font-black text-primary/5 group-hover:text-primary/10 transition-colors"
                    aria-hidden="true"
                  >
                    {item.step}
                  </div>

                  <CardHeader className="pb-4 md:pb-6 relative z-10">
                    <div className="mx-auto h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-all shadow-xl">
                      <item.icon
                        className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-primary-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-3 md:mb-4"
                      aria-label={`Step ${item.step}`}
                    >
                      {item.step}
                    </div>
                    <CardTitle className="text-base md:text-lg lg:text-xl mb-3 md:mb-4 group-hover:text-primary transition-colors font-black">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features - Split with Large Image */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted/80 relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 h-96 w-96 bg-primary/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
              <div
                className="space-y-6 md:space-y-8 lg:space-y-10"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div>
                  <Badge
                    className="mb-4 md:mb-6 hover:scale-105 transition-transform px-3 py-1.5 md:px-6 md:py-3 text-sm md:text-base font-bold"
                    variant="outline"
                  >
                    Premium Features
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-balance leading-tight">
                    What Makes Our{" "}
                    <span className="text-accent">One-on-One</span> Tuition
                    Special
                  </h2>
                </div>

                <div className="space-y-4 md:space-y-5 lg:space-y-6">
                  {[
                    {
                      icon: Brain,
                      title: "Expert Subject Specialists",
                      description:
                        "All our tutors are qualified teachers or subject experts with proven track records of student success.",
                    },
                    {
                      icon: Calendar,
                      title: "Flexible Scheduling",
                      description:
                        "Book sessions at times that suit you, including evenings and weekends, with easy rescheduling options.",
                    },
                    {
                      icon: MessageCircle,
                      title: "Ongoing Communication",
                      description:
                        "Regular progress updates and direct communication with your tutor between sessions via our platform.",
                    },
                    {
                      icon: Award,
                      title: "Exam-Focused Approach",
                      description:
                        "Strategic preparation targeting exam boards, mark schemes, and proven techniques for maximising grades.",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 md:gap-5 lg:gap-6 p-4 md:p-5 lg:p-7 rounded-xl md:rounded-2xl bg-card hover:bg-card/80 transition-all hover:shadow-xl hover:scale-[1.02] group border-2 border-transparent hover:border-primary/30"
                      data-aos="slide-right"
                      data-aos-delay={index * 100}
                      data-aos-duration="600"
                    >
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-lg md:rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                          <feature.icon
                            className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-primary-foreground"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-black text-base md:text-lg lg:text-xl mb-2 md:mb-3 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-xs md:text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="relative"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div
                  className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse"
                  aria-hidden="true"
                />
                <div className="relative h-[400px] md:h-[550px] lg:h-[700px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] group">
                  <img
                    src="https://images.pexels.com/photos/5088174/pexels-photo-5088174.jpeg"
                    alt="Expert tutor providing personalized instruction"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Gradient */}
      <section className="py-16 md:py-24 lg:py-28 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div
            className="max-w-5xl mx-auto text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 text-balance leading-tight">
              Ready for Personalised Learning{" "}
              <span className="text-accent">Excellence?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  mb-8 md:mb-10 lg:mb-12 text-pretty leading-relaxed max-w-4xl mx-auto font-medium">
              Book your first one-on-one session today and experience the
              difference that personalised attention can make to your academic
              success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 lg:gap-6 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all shadow-2xl group text-sm md:text-base lg:text-lg xl:text-xl px-8 py-5 md:px-10 md:py-6 lg:px-12 lg:py-7 xl:px-14 xl:py-8 h-auto border-0 font-bold"
                aria-label="Book your first tutoring session now"
              >
                Book Your First Session
                <ArrowRight
                  className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 group-hover:translate-x-2 transition-transform"
                  aria-hidden="true"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 md:border-3 border-white text-accent hover:bg-white hover:text-primary transition-all hover:scale-105 shadow-2xl text-sm md:text-base lg:text-lg xl:text-xl px-8 py-5 md:px-10 md:py-6 lg:px-12 lg:py-7 xl:px-14 xl:py-8 h-auto bg-white/10 backdrop-blur-sm font-bold"
                aria-label="Speak to an advisor about tuition options"
              >
                Speak to an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
