import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { assets } from "@/assets";
import Image from "next/image";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 h-72 w-72 bg-accent/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 h-96 w-96 bg-secondary/30 rounded-full blur-3xl animate-pulse [animation-delay:700ms]" />
          <div className="absolute top-1/2 left-1/4 h-64 w-64 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse [animation-delay:1400ms]" />
          <div className="absolute bottom-1/3 right-1/4 h-80 w-80 bg-accent/20 rounded-full blur-3xl animate-pulse [animation-delay:2100ms]" />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${assets.admissionsHero.src})` }}
        />

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="mb-6 bg-accent/20 backdrop-blur-sm text-primary-foreground border-2 border-accent hover:bg-accent hover:scale-105 transition-all px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 text-xs sm:text-sm font-semibold shadow-2xl animate-bounce [animation-duration:3s]">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 inline animate-pulse" />
                <span className="whitespace-nowrap">
                  Admissions Open 2025/26
                </span>
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-balance leading-tight tracking-tight px-4">
                Begin Your Journey to
                <span className="block text-accent mt-2 drop-shadow-lg">
                  Academic Excellence
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 md:mb-12 max-w-4xl mx-auto text-pretty leading-relaxed px-4">
                Join hundreds of successful students who have achieved
                outstanding results through our structured, comprehensive
                tutorial programmes across 11+, GCSE, and A-Level
                qualifications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto hover:scale-105 transition-all shadow-2xl hover:shadow-accent/50 group"
                >
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-2xl"
                >
                  Download Prospectus
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 px-4">
              {[
                { value: "98%", label: "Success Rate", icon: Award },
                { value: "500+", label: "Students Enrolled", icon: Users },
                {
                  value: "15+",
                  label: "Years Experience",
                  icon: GraduationCap,
                },
                { value: "A*-B", label: "Average Grade", icon: TrendingUp },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 md:p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border-2 border-primary-foreground/20 hover:bg-primary-foreground/20 hover:border-accent transition-all hover:scale-105 hover:shadow-2xl group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <stat.icon className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-3 md:mb-4 text-accent group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-primary-foreground/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Stages Process */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16 px-4">
            <Badge
              className="mb-4 hover:scale-105 transition-transform bg-primary/10 text-primary border-primary/20"
              variant="outline"
            >
              Our Admissions Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Four Simple Steps to Success
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Our streamlined admissions process ensures every student receives
              personalised attention and is placed in the most suitable
              programme for their academic goals.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            {/* Stage 1 */}
            <div className="relative mb-12 md:mb-20 group">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-muted shadow-xl hover:shadow-2xl transition-all group-hover:scale-[1.02]">
                    <Image
                      src={assets.showingInterest}
                      width={600}
                      height={600}
                      alt="Show Interest"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-14 w-14 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-xl md:text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                      01
                    </div>
                    <div>
                      <Badge className="mb-2 bg-accent text-accent-foreground hover:scale-105 transition-transform">
                        Stage One
                      </Badge>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        Show Interest
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                    Students must first express their interest in our
                    programmes, as we are often managing a large waiting list.
                    This requirement applies to both{" "}
                    <strong className="text-foreground">
                      Group-Based Tuition
                    </strong>{" "}
                    and{" "}
                    <strong className="text-foreground">
                      One-on-One Tuition
                    </strong>
                    .
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    To show interest, simply visit our{" "}
                    <strong className="text-foreground">SAMPLE</strong> page and
                    complete the brief enquiry form. This helps us understand
                    your educational needs and academic aspirations.
                  </p>
                  <Button
                    className="mt-6 hover:scale-105 transition-all group/btn"
                    variant="outline"
                  >
                    Express Interest Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center gap-2 mb-12 md:mb-20">
              <div className="w-1 h-8 bg-border" />
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <div className="w-1 h-8 bg-border" />
            </div>

            {/* Stage 2 */}
            <div className="relative mb-12 md:mb-20 group">
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-accent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-14 w-14 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground text-xl md:text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                      02
                    </div>
                    <div>
                      <Badge className="mb-2 bg-primary text-primary-foreground hover:scale-105 transition-transform">
                        Stage Two
                      </Badge>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        Student Registration
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                    As soon as a vacancy arises, those who previously expressed
                    interest will be contacted to register as students. This
                    ensures fair allocation of places based on enquiry date.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                    During registration, we collect essential information about
                    the student's current academic level, subjects of interest,
                    preferred learning style, and any specific educational
                    requirements or learning support needs.
                  </p>
                  <div className="mt-6 p-4 md:p-5 bg-gradient-to-br from-muted to-muted/50 border-2 border-border rounded-xl hover:border-accent transition-all hover:shadow-lg">
                    <p className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      What You'll Need:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2 hover:text-foreground transition-colors pl-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Recent school reports or academic records
                      </li>
                      <li className="flex items-center gap-2 hover:text-foreground transition-colors pl-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Identification documents
                      </li>
                      <li className="flex items-center gap-2 hover:text-foreground transition-colors pl-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Emergency contact information
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-muted shadow-xl hover:shadow-2xl transition-all group-hover:scale-[1.02]">
                    <Image
                      src={assets.registration}
                      width={600}
                      height={400}
                      alt="Student Registration"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center gap-2 mb-12 md:mb-20">
              <div className="w-1 h-8 bg-border" />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse [animation-delay:500ms]" />
              <div className="w-1 h-8 bg-border" />
            </div>

            {/* Stage 3 */}
            <div className="relative mb-12 md:mb-20 group">
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-primary rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-muted shadow-xl hover:shadow-2xl transition-all group-hover:scale-[1.02]">
                    <Image
                      src={assets.induction}
                      width={600}
                      height={400}
                      alt="Student Induction"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-14 w-14 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-xl md:text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                      03
                    </div>
                    <div>
                      <Badge className="mb-2 bg-accent text-accent-foreground hover:scale-105 transition-transform">
                        Stage Three
                      </Badge>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        Student Induction
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                    At this stage, the registered student is provided with a{" "}
                    <strong className="text-foreground">
                      Student Username
                    </strong>{" "}
                    but cannot yet complete the Student Induction process
                    independently.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                    During the induction, the prospective student is introduced
                    to the expectations and responsibilities of becoming a
                    member of our academic community. A short assessment and
                    interview are also conducted to gauge current ability levels
                    and learning preferences.
                  </p>
                  <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-4 mb-6">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong className="text-destructive">Important:</strong>{" "}
                      Failure to attend the assessment will result in the
                      admission being declined, as we need to ensure proper
                      placement and programme suitability for every student.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge
                      variant="secondary"
                      className="text-sm hover:scale-105 transition-transform"
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      Duration: 60-90 minutes
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-sm hover:scale-105 transition-transform"
                    >
                      <Users className="h-3 w-3 mr-1" />
                      One-on-one session
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center gap-2 mb-12 md:mb-20">
              <div className="w-1 h-8 bg-border" />
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse [animation-delay:1000ms]" />
              <div className="w-1 h-8 bg-border" />
            </div>

            {/* Stage 4 */}
            <div className="relative group">
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-accent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-14 w-14 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground text-xl md:text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                      04
                    </div>
                    <div>
                      <Badge className="mb-2 bg-primary text-primary-foreground hover:scale-105 transition-transform">
                        Final Stage
                      </Badge>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        Student Admission
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                    At this final stage, tuition fees are paid, login
                    credentials are provided, and academic activities formally
                    commence. Welcome to our learning community!
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                    Students gain full access to our comprehensive learning
                    platform, including video lessons, online assessments,
                    PowerPoint presentations, and PDF worksheets. All course
                    materials have been tested and refined over the past few
                    years.
                  </p>
                  <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-2 border-accent/30 rounded-xl p-5 md:p-6 hover:border-accent hover:shadow-xl transition-all">
                    <h4 className="font-semibold text-accent mb-4 flex items-center gap-2 text-base md:text-lg">
                      <Award className="h-5 w-5" />
                      What's Included:
                    </h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-3 hover:text-foreground transition-colors group/item">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>
                          Full access to digital learning platform (24/7)
                        </span>
                      </li>
                      <li className="flex items-start gap-3 hover:text-foreground transition-colors group/item">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>
                          Comprehensive video lessons for all subjects
                        </span>
                      </li>
                      <li className="flex items-start gap-3 hover:text-foreground transition-colors group/item">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>
                          Regular online assessments with instant feedback
                        </span>
                      </li>
                      <li className="flex items-start gap-3 hover:text-foreground transition-colors group/item">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>
                          Downloadable resources (PowerPoints, worksheets, past
                          papers)
                        </span>
                      </li>
                      <li className="flex items-start gap-3 hover:text-foreground transition-colors group/item">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>Progress tracking and performance analytics</span>
                      </li>
                      <li className="flex items-start gap-3 hover:text-foreground transition-colors group/item">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span>Direct tutor support via messaging system</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-muted shadow-xl hover:shadow-2xl transition-all group-hover:scale-[1.02]">
                    <Image
                      src={assets.successFull}
                      width={600}
                      height={400}
                      alt="Student Admission"
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent text-accent-foreground shadow-lg">
                        <Award className="h-3 w-3 mr-1" />
                        Welcome!
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Types Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16 px-4">
            <Badge
              className="mb-4 hover:scale-105 transition-transform bg-accent/10 text-accent border-accent/20"
              variant="outline"
            >
              Choose Your Learning Style
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Three Flexible Tuition Options
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Whether you prefer independent study, collaborative group
              learning, or personalised one-on-one attention, we have the
              perfect programme to match your learning style and academic goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
            {/* Self-Tuition */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-2 hover:border-primary group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative">
                <div className="h-40 md:h-48 -mx-6 -mt-6 mb-6 relative overflow-hidden rounded-t-lg">
                  <Image
                    src={assets.selfStudying}
                    width={600}
                    height={400}
                    alt="Self-Tuition"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <Badge className="absolute bottom-4 left-4 bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-lg">
                    Most Flexible
                  </Badge>
                </div>
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Self-Tuition
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Independent learning at your own pace with comprehensive
                  digital resources
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Sparkles className="h-4 w-4 text-accent" />
                    Perfect For:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Self-motivated students who prefer independent study
                      </span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Those seeking flexible, study-anywhere convenience
                      </span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Students balancing studies with hobbies or
                        responsibilities
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Award className="h-4 w-4 text-primary" />
                    Included Resources:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: "📹", label: "Recorded Videos" },
                      { icon: "📄", label: "PDF Worksheets" },
                      { icon: "📊", label: "PowerPoint Slides" },
                      { icon: "🎓", label: "Online LMS" },
                      { icon: "✅", label: "Self-Assessments" },
                      { icon: "📚", label: "Study Guides" },
                    ].map((resource, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs p-2 rounded-lg bg-muted hover:bg-muted/70 transition-all hover:scale-105 hover:shadow-md"
                      >
                        <span className="text-base">{resource.icon}</span>
                        <span className="text-muted-foreground hover:text-foreground transition-colors">
                          {resource.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 hover:bg-accent/20 transition-all">
                  <p className="text-sm font-medium text-accent mb-2">
                    Key Features:
                  </p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <Clock className="h-3 w-3 text-accent" />
                      24/7 access to all materials
                    </li>
                    <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <TrendingUp className="h-3 w-3 text-accent" />
                      Progress tracking dashboard
                    </li>
                    <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <Users className="h-3 w-3 text-accent" />
                      Email tutor support
                    </li>
                  </ul>
                </div>

                <Button
                  className="w-full hover:scale-105 transition-all group/btn"
                  variant="outline"
                >
                  Learn More About Self-Tuition
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Group-Based Tuition */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-2 hover:border-accent group lg:scale-105 lg:z-10">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-primary to-accent" />
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground z-10 hover:scale-110 transition-transform shadow-xl animate-pulse [animation-duration:2s]">
                Most Popular
              </Badge>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative">
                <div className="h-40 md:h-48 -mx-6 -mt-6 mb-6 relative overflow-hidden rounded-t-lg">
                  <Image
                    src={assets.groupStudy}
                    width={600}
                    height={400}
                    alt="Group-Based Tuition"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  Group-Based Tuition
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Interactive live classes with peers and expert tutors
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Sparkles className="h-4 w-4 text-accent" />
                    Perfect For:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Students who thrive in collaborative environments
                      </span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Those who enjoy peer learning and discussion</span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Learners seeking structured, scheduled sessions
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Award className="h-4 w-4 text-accent" />
                    Included Resources:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: "💻", label: "Live Zoom Classes" },
                      { icon: "📓", label: "Notebook Tasks" },
                      { icon: "✅", label: "Online Assessments" },
                      { icon: "📊", label: "PowerPoint Slides" },
                      { icon: "📹", label: "Recorded Videos" },
                      { icon: "🌐", label: "Student Portal" },
                      { icon: "📈", label: "Progress History" },
                      { icon: "👨‍👩‍👧", label: "Parent Updates" },
                      { icon: "📝", label: "Class Notes" },
                      { icon: "🗂️", label: "Archived Work" },
                    ].map((resource, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs p-2 rounded-lg bg-muted hover:bg-muted/70 transition-all hover:scale-105 hover:shadow-md"
                      >
                        <span className="text-base">{resource.icon}</span>
                        <span className="text-muted-foreground hover:text-foreground transition-colors">
                          {resource.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 hover:bg-accent/20 transition-all">
                  <p className="text-sm font-medium text-accent mb-2">
                    Key Features:
                  </p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <Clock className="h-3 w-3 text-accent" />
                      Weekly scheduled sessions
                    </li>
                    <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <TrendingUp className="h-3 w-3 text-accent" />
                      Small class sizes (max 8 students)
                    </li>
                    <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <Users className="h-3 w-3 text-accent" />
                      Interactive Q&A sessions
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all group/btn shadow-lg">
                  Enrol in Group Tuition
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* One-on-One Tuition */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-2 hover:border-primary group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative">
                <div className="h-40 md:h-48 -mx-6 -mt-6 mb-6 relative overflow-hidden rounded-t-lg">
                  <Image
                    src={assets.oneOnOne}
                    width={600}
                    height={400}
                    alt="One-on-One Tuition"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <Badge className="absolute bottom-4 left-4 bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-lg">
                    Premium
                  </Badge>
                </div>
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  One-on-One Tuition
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Personalised private tutoring tailored to your unique needs
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Sparkles className="h-4 w-4 text-accent" />
                    Perfect For:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Students requiring personalised attention and pacing
                      </span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Those with specific learning needs or exam preparation
                      </span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>
                        Learners seeking maximum flexibility and customisation
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Award className="h-4 w-4 text-primary" />
                    Included Resources:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: "💻", label: "Private Zoom Sessions" },
                      { icon: "✅", label: "Online Assessments" },
                      { icon: "📊", label: "Custom Materials" },
                      { icon: "📝", label: "Personalised Notes" },
                      { icon: "🌐", label: "Student Portal" },
                      { icon: "📈", label: "Progress Tracking" },
                      { icon: "👨‍👩‍👧", label: "Parent Updates" },
                      { icon: "🗂️", label: "Archived Sessions" },
                    ].map((resource, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs p-2 rounded-lg bg-muted hover:bg-muted/70 transition-all hover:scale-105 hover:shadow-md"
                      >
                        <span className="text-base">{resource.icon}</span>
                        <span className="text-muted-foreground hover:text-foreground transition-colors">
                          {resource.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 hover:bg-accent/20 transition-all">
                  <p className="text-sm font-medium text-accent mb-2">
                    Key Features:
                  </p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <Clock className="h-3 w-3 text-accent" />
                      Flexible scheduling
                    </li>
                    <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <TrendingUp className="h-3 w-3 text-accent" />
                      Customised lesson plans
                    </li>
                    <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <Users className="h-3 w-3 text-accent" />
                      Dedicated tutor relationship
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all group/btn shadow-lg">
                  Book Private Tuition
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 md:mt-16 max-w-5xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
              Quick Comparison
            </h3>
            <div className="overflow-x-auto rounded-xl border-2 border-border shadow-lg">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 bg-muted/50">
                    <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">
                      Feature
                    </th>
                    <th className="text-center p-3 md:p-4 font-semibold text-sm md:text-base">
                      Self-Tuition
                    </th>
                    <th className="text-center p-3 md:p-4 font-semibold bg-accent/10 text-sm md:text-base">
                      Group-Based
                    </th>
                    <th className="text-center p-3 md:p-4 font-semibold text-sm md:text-base">
                      One-on-One
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Live Classes",
                      self: false,
                      group: true,
                      oneOnOne: true,
                    },
                    {
                      feature: "Flexible Schedule",
                      self: true,
                      group: false,
                      oneOnOne: true,
                    },
                    {
                      feature: "Peer Interaction",
                      self: false,
                      group: true,
                      oneOnOne: false,
                    },
                    {
                      feature: "Personalised Pace",
                      self: true,
                      group: false,
                      oneOnOne: true,
                    },
                    {
                      feature: "Recorded Content",
                      self: true,
                      group: true,
                      oneOnOne: true,
                    },
                    {
                      feature: "Direct Tutor Support",
                      self: false,
                      group: true,
                      oneOnOne: true,
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-3 md:p-4 font-medium text-sm md:text-base">
                        {row.feature}
                      </td>
                      <td className="text-center p-3 md:p-4">
                        {row.self ? (
                          <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground text-lg">
                            —
                          </span>
                        )}
                      </td>
                      <td className="text-center p-3 md:p-4 bg-accent/5">
                        {row.group ? (
                          <CheckCircle2 className="h-5 w-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-muted-foreground text-lg">
                            —
                          </span>
                        )}
                      </td>
                      <td className="text-center p-3 md:p-4">
                        {row.oneOnOne ? (
                          <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground text-lg">
                            —
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-12 md:py-20 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 px-4">
            <Badge
              className="mb-4 bg-primary/10 text-primary border-primary/20"
              variant="outline"
            >
              Entry Requirements
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Entry Requirements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              We welcome students of all abilities and tailor our programmes to
              individual needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            <Card className="hover:shadow-xl transition-all hover:scale-[1.02] hover:border-primary border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <BookOpen className="h-5 w-5 text-primary" />
                  11+ Programme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Ages 8-11 years old</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Basic literacy and numeracy skills</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Commitment to regular attendance</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Parental support for homework</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-[1.02] hover:border-accent border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  GCSE Programme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Ages 14-16 years old</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Key Stage 3 completion or equivalent</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Strong motivation to succeed</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Willingness to complete coursework</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-[1.02] hover:border-primary border-2 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Award className="h-5 w-5 text-primary" />
                  A-Level Programme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Ages 16-18 years old</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Minimum 5 GCSEs at grade 4/C or above</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Grade 6 in chosen A-Level subjects</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Independent study skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 h-64 w-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 h-80 w-80 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${assets.educationSuccess.src})` }}
        />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">
              Ready to Start Your Application?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-8 md:mb-10 text-pretty leading-relaxed">
              Don't miss out on securing your place for the upcoming academic
              year. Our programmes fill up quickly, so express your interest
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all shadow-2xl group"
              >
                Begin Application Process
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-2xl group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Speak to Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16 border-t bg-muted/20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            <div className="text-center group hover:scale-105 transition-transform p-6 rounded-2xl hover:bg-muted/50">
              <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-3 md:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110 shadow-lg">
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-base md:text-lg">
                Call Us
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                +44 (0) 20 1234 5678
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Mon-Fri, 9am-6pm
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform p-6 rounded-2xl hover:bg-muted/50">
              <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-accent/10 text-accent mb-3 md:mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all group-hover:scale-110 shadow-lg">
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-base md:text-lg">
                Email Us
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                admissions@tutorial.co.uk
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Response within 24 hours
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform p-6 rounded-2xl hover:bg-muted/50 sm:col-span-2 lg:col-span-1">
              <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-3 md:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110 shadow-lg">
                <MapPin className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-base md:text-lg">
                Visit Us
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                123 Education Street
              </p>
              <p className="text-xs text-muted-foreground mt-1">London, UK</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
