"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  FileText,
  Laptop,
  PresentationIcon,
  Target,
  TrendingUp,
  Video,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function SelfTuitionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen mt-10 md:mt-0">
      {/* Hero Section - Diagonal Split Design */}
      <section className="relative min-h-[85vh] md:min-h-screen overflow-hidden">
        {/* Diagonal Background Split */}
        <div className="absolute inset-0">
          {/* Left side - Solid color */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />

          {/* Right side - Image with diagonal clip */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3808060/pexels-photo-3808060.jpeg')",
              clipPath: "polygon(40% 0, 100% 0, 100% 100%, 30% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/20 to-primary" />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full min-h-[85vh] md:min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-primary-foreground">
                <Badge className="mb-4 md:mb-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all hover:scale-105 px-3 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium shadow-lg">
                  <Zap className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 inline" />
                  Flexible Learning Solutions
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-8 text-balance leading-tight tracking-tight">
                  Self-Tuition with
                  <span className="block text-secondary mt-1 md:mt-2">
                    Balance & Excellence
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-6 md:mb-8 leading-relaxed text-pretty">
                  To self-tuition, carry your balance studies with hobbies or
                  personal commitments. If you are{" "}
                  <strong className="text-secondary">
                    disciplined, responsible
                  </strong>
                  , and have excellent time management of your around-the-clock,
                  then <strong className="text-secondary">SELF-TUITION</strong>{" "}
                  should be fine for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-6">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-sm md:text-base lg:text-lg px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 h-auto hover:scale-105 transition-all shadow-xl hover:shadow-2xl group"
                  >
                    Explore Programmes
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-sm md:text-base lg:text-lg px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 h-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-xl"
                  >
                    View Sample Materials
                  </Button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-3 md:gap-6 mt-8 md:mt-12">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all hover:scale-105">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1">
                      98%
                    </div>
                    <div className="text-xs md:text-sm text-primary-foreground/80">
                      Success Rate
                    </div>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all hover:scale-105">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1">
                      24/7
                    </div>
                    <div className="text-xs md:text-sm text-primary-foreground/80">
                      Access Anytime
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Horizontal Cards with Icons */}
      <section className="py-12 md:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <Badge
              className="mb-3 md:mb-4 hover:scale-105 transition-transform text-xs md:text-sm"
              variant="outline"
            >
              Why Choose Self-Tuition?
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance px-4">
              Learn at Your Own Pace, Achieve at the Highest Level
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              Our self-tuition model combines flexibility with structure, giving
              you the freedom to study when it suits you while maintaining
              rigorous academic standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Flexible Schedule",
                description:
                  "Study anytime, anywhere. Perfect for balancing academics with extracurricular activities and personal commitments.",
                color: "primary",
              },
              {
                icon: Target,
                title: "Personalised Learning",
                description:
                  "Progress at your own pace. Spend more time on challenging topics and move quickly through familiar material.",
                color: "accent",
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description:
                  "Our course materials have been tested and refined over the past few years, delivering consistent excellent outcomes.",
                color: "secondary",
              },
              {
                icon: Award,
                title: "Comprehensive Resources",
                description:
                  "Access videos, assessments, PowerPoints, and PDF worksheets - everything you need for exam success.",
                color: "primary",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all hover:shadow-2xl hover:scale-[1.03] group"
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <benefit.icon className="h-5 w-5 md:h-7 md:w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-base md:text-lg lg:text-xl group-hover:text-primary transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Materials Section - Alternating Layout */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <Badge
                className="mb-3 md:mb-4 hover:scale-105 transition-transform text-xs md:text-sm"
                variant="outline"
              >
                Comprehensive Learning Materials
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-balance px-4">
                Everything You Need for Exam Success
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
                For self-tuition, course materials have been tested and refined
                over the past few years. The following are provided within each
                course to ensure comprehensive coverage of all examination
                requirements:
              </p>
            </div>

            <div className="space-y-6 md:space-y-12">
              {[
                {
                  icon: Video,
                  title: "Video Lessons",
                  description:
                    "High-quality recorded lessons covering every topic in detail, available 24/7 for unlimited viewing.",
                  image:
                    "https://images.pexels.com/photos/8499501/pexels-photo-8499501.jpeg",
                  reverse: false,
                },
                {
                  icon: FileText,
                  title: "Online Assessments",
                  description:
                    "Regular quizzes and mock exams with instant feedback to track your progress and identify areas for improvement.",
                  image:
                    "https://images.pexels.com/photos/7105593/pexels-photo-7105593.jpeg",
                  reverse: true,
                },
                {
                  icon: PresentationIcon,
                  title: "PowerPoint Presentations",
                  description:
                    "Comprehensive slide decks summarising key concepts, perfect for revision and quick reference.",
                  image:
                    "https://images.pexels.com/photos/8926556/pexels-photo-8926556.jpeg",
                  reverse: false,
                },
                {
                  icon: Download,
                  title: "PDF Worksheets",
                  description:
                    "Printable practice exercises, past papers, and revision guides to reinforce your learning.",
                  image:
                    "https://images.pexels.com/photos/4143798/pexels-photo-4143798.jpeg",
                  reverse: true,
                },
              ].map((material, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center ${
                    material.reverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={material.reverse ? "md:order-2" : ""}>
                    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="flex-shrink-0 h-10 w-10 md:h-14 md:w-14 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all group">
                        <material.icon className="h-5 w-5 md:h-7 md:w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 hover:text-primary transition-colors">
                          {material.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {material.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={material.reverse ? "md:order-1" : ""}>
                    <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden bg-muted shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] group">
                      <img
                        src={material.image || "/placeholder.svg"}
                        alt={material.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Offered - Enhanced Tabs */}
      <section className="py-12 md:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <Badge
              className="mb-3 md:mb-4 hover:scale-105 transition-transform text-xs md:text-sm"
              variant="outline"
            >
              Our Programmes
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance px-4">
              Comprehensive Coverage Across All Levels
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              From 11+ preparation to A-Level mastery, we offer structured
              programmes tailored to UK examination requirements.
            </p>
          </div>

          <Tabs defaultValue="11plus" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8 h-auto p-1">
              <TabsTrigger
                value="11plus"
                className="text-xs sm:text-sm md:text-base py-2 md:py-3 hover:scale-105 transition-all data-[state=active]:shadow-lg"
              >
                11 Plus
              </TabsTrigger>
              <TabsTrigger
                value="gcse"
                className="text-xs sm:text-sm md:text-base py-2 md:py-3 hover:scale-105 transition-all data-[state=active]:shadow-lg"
              >
                GCSE
              </TabsTrigger>
              <TabsTrigger
                value="alevel"
                className="text-xs sm:text-sm md:text-base py-2 md:py-3 hover:scale-105 transition-all data-[state=active]:shadow-lg"
              >
                A-Level
              </TabsTrigger>
            </TabsList>

            {/* 11 Plus Content */}
            <TabsContent value="11plus" className="space-y-6 md:space-y-8">
              <Card className="hover:shadow-2xl transition-all">
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-xl md:text-2xl">
                    11 Plus Programme
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm">
                    Comprehensive preparation for grammar school and independent
                    school entrance examinations
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        Core Subjects
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <div className="font-semibold text-sm md:text-base text-primary mb-2">
                            Mathematics
                          </div>
                          <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Number Concepts & Place Value
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Arithmetic Operations
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Fractions, Decimals & Percentages
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Ratios & Proportions
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Algebra & Problem Solving
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Geometry & Measurement
                            </li>
                          </ul>
                        </div>

                        <div className="p-3 md:p-4 bg-accent/5 rounded-lg border border-accent/20">
                          <div className="font-semibold text-sm md:text-base text-accent mb-2">
                            English
                          </div>
                          <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Reading Comprehension
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Grammar & Punctuation
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Vocabulary Development
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Creative Writing Skills
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Spelling & Word Patterns
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
                        <Brain className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        Reasoning Skills
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 md:p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                          <div className="font-semibold text-sm md:text-base text-secondary-foreground mb-2">
                            Verbal Reasoning
                          </div>
                          <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Word Relationships & Analogies
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Letter & Number Sequences
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Code Breaking & Logic
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Verbal Classification
                            </li>
                          </ul>
                        </div>

                        <div className="p-3 md:p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                          <div className="font-semibold text-sm md:text-base text-secondary-foreground mb-2">
                            Non-Verbal Reasoning
                          </div>
                          <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Pattern Recognition
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Spatial Awareness
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Shape Sequences & Rotations
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                              Visual Problem Solving
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-6 p-3 md:p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                          <span className="font-semibold text-sm md:text-base">
                            Programme Highlights
                          </span>
                        </div>
                        <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                          <li>• Mock exam practice papers</li>
                          <li>• Timed assessment training</li>
                          <li>• Exam technique workshops</li>
                          <li>• Progress tracking dashboard</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* GCSE Content */}
            <TabsContent value="gcse" className="space-y-6 md:space-y-8">
              <Card className="hover:shadow-2xl transition-all">
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-xl md:text-2xl">
                    GCSE Programme
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm">
                    Complete coverage of GCSE specifications across core and
                    optional subjects
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {[
                      {
                        subject: "Mathematics",
                        level: "Foundation & Higher Tier",
                        topics: [
                          "Number",
                          "Algebra",
                          "Geometry",
                          "Statistics",
                          "Probability",
                        ],
                        color: "primary",
                      },
                      {
                        subject: "English Language",
                        level: "AQA Specification",
                        topics: [
                          "Reading Skills",
                          "Writing Skills",
                          "Spoken Language",
                          "Literary Analysis",
                        ],
                        color: "accent",
                      },
                      {
                        subject: "English Literature",
                        level: "AQA Specification",
                        topics: [
                          "Shakespeare",
                          "19th Century Novel",
                          "Modern Texts",
                          "Poetry",
                        ],
                        color: "accent",
                      },
                      {
                        subject: "Physics",
                        level: "Combined & Separate Science",
                        topics: [
                          "Energy",
                          "Forces",
                          "Waves",
                          "Electricity",
                          "Magnetism",
                        ],
                        color: "secondary",
                      },
                      {
                        subject: "Chemistry",
                        level: "Combined & Separate Science",
                        topics: [
                          "Atomic Structure",
                          "Bonding",
                          "Reactions",
                          "Organic Chemistry",
                        ],
                        color: "secondary",
                      },
                      {
                        subject: "Biology",
                        level: "Combined & Separate Science",
                        topics: [
                          "Cell Biology",
                          "Organisation",
                          "Infection",
                          "Bioenergetics",
                          "Ecology",
                        ],
                        color: "secondary",
                      },
                    ].map((subject, index) => (
                      <Card
                        key={index}
                        className="border-2 hover:border-primary transition-all hover:shadow-xl hover:scale-[1.03] group"
                      >
                        <CardHeader className="p-3 md:p-4">
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-sm md:text-base lg:text-lg group-hover:text-primary transition-colors">
                              {subject.subject}
                            </CardTitle>
                            <Badge
                              variant="outline"
                              className="text-[10px] md:text-xs hover:scale-105 transition-transform"
                            >
                              {subject.level}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-3 md:p-4 pt-0">
                          <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                            {subject.topics.map((topic, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 hover:text-foreground transition-colors"
                              >
                                <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-6 md:mt-8 p-4 md:p-6 bg-primary/5 rounded-xl border border-primary/20 hover:bg-primary/10 transition-all hover:shadow-lg">
                    <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
                      What's Included in GCSE Programme:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                      <ul className="space-y-2 text-xs md:text-sm">
                        <li className="flex items-center gap-2 hover:text-primary transition-colors">
                          <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-accent flex-shrink-0" />
                          <span>Complete specification coverage</span>
                        </li>
                        <li className="flex items-center gap-2 hover:text-primary transition-colors">
                          <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-accent flex-shrink-0" />
                          <span>Past paper practice (10+ years)</span>
                        </li>
                        <li className="flex items-center gap-2 hover:text-primary transition-colors">
                          <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-accent flex-shrink-0" />
                          <span>Mark scheme guidance</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-xs md:text-sm">
                        <li className="flex items-center gap-2 hover:text-primary transition-colors">
                          <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-accent flex-shrink-0" />
                          <span>Exam technique masterclasses</span>
                        </li>
                        <li className="flex items-center gap-2 hover:text-primary transition-colors">
                          <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-accent flex-shrink-0" />
                          <span>Revision timetable templates</span>
                        </li>
                        <li className="flex items-center gap-2 hover:text-primary transition-colors">
                          <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-accent flex-shrink-0" />
                          <span>Grade prediction tools</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* A-Level Content */}
            <TabsContent value="alevel" className="space-y-6 md:space-y-8">
              <Card className="hover:shadow-2xl transition-all">
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-xl md:text-2xl">
                    A-Level Programme
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm">
                    Advanced study programmes preparing students for university
                    and beyond
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="mb-6 md:mb-8 p-4 md:p-6 bg-secondary/10 rounded-xl border border-secondary/30 hover:bg-secondary/20 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Award className="h-5 w-5 md:h-6 md:w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg">
                          A-Level Syllabus
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          Subjects currently in development - Coming Soon
                        </p>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      We are currently developing comprehensive A-Level
                      programmes across a range of subjects. Our A-Level courses
                      will maintain the same high standards and comprehensive
                      approach as our 11+ and GCSE offerings.
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      Launching September 2025
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
                        Planned Subjects Include:
                      </h3>
                      <div className="space-y-2">
                        {[
                          "Mathematics (Pure & Applied)",
                          "Further Mathematics",
                          "Physics",
                          "Chemistry",
                          "Biology",
                          "English Literature",
                          "History",
                          "Economics",
                        ].map((subject, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-2 md:p-3 bg-muted rounded-lg hover:bg-muted/80 transition-all hover:shadow-md hover:scale-[1.02] group"
                          >
                            <div className="h-2 w-2 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                            <span className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors">
                              {subject}
                            </span>
                            <Badge
                              variant="outline"
                              className="ml-auto text-[10px] md:text-xs hover:scale-105 transition-transform"
                            >
                              Pending
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
                        What to Expect:
                      </h3>
                      <div className="space-y-3 md:space-4">
                        <div className="p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-all hover:shadow-lg hover:scale-[1.02] group">
                          <div className="font-semibold text-sm md:text-base mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                            <Video className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                            In-Depth Video Lectures
                          </div>
                          <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            University-level teaching covering all specification
                            content in detail
                          </p>
                        </div>

                        <div className="p-3 md:p-4 bg-accent/5 rounded-lg border border-accent/20 hover:bg-accent/10 transition-all hover:shadow-lg hover:scale-[1.02] group">
                          <div className="font-semibold text-sm md:text-base mb-2 flex items-center gap-2 group-hover:text-accent transition-colors">
                            <FileText className="h-3 w-3 md:h-4 md:w-4 text-accent" />
                            Advanced Problem Sets
                          </div>
                          <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            Challenging questions to develop critical thinking
                            and analytical skills
                          </p>
                        </div>

                        <div className="p-3 md:p-4 bg-secondary/10 rounded-lg border border-secondary/30 hover:bg-secondary/20 transition-all hover:shadow-lg hover:scale-[1.02] group">
                          <div className="font-semibold text-sm md:text-base mb-2 flex items-center gap-2 group-hover:text-secondary-foreground transition-colors">
                            <Target className="h-3 w-3 md:h-4 md:w-4 text-secondary-foreground" />
                            University Preparation
                          </div>
                          <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            UCAS guidance, personal statement support, and
                            interview preparation
                          </p>
                        </div>
                      </div>

                      <Button
                        className="w-full mt-4 md:mt-6 hover:scale-105 transition-all group bg-transparent text-xs md:text-sm"
                        variant="outline"
                      >
                        Register Interest for A-Levels
                        <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Learning Approach - Timeline Style */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <Badge
                className="mb-3 md:mb-4 hover:scale-105 transition-transform text-xs md:text-sm"
                variant="outline"
              >
                Our Methodology
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">
                How Self-Tuition Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Card className="text-center hover:shadow-2xl transition-all hover:scale-[1.05] group border-2 hover:border-primary">
                <CardHeader className="p-4 md:p-6">
                  <div className="mx-auto h-12 w-12 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Laptop className="h-6 w-6 md:h-8 md:w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-base md:text-lg lg:text-xl group-hover:text-primary transition-colors">
                    Access Platform
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Log in to your personal learning dashboard and access all
                    course materials, videos, and assessments 24/7 from any
                    device.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-2xl transition-all hover:scale-[1.05] group border-2 hover:border-accent">
                <CardHeader className="p-4 md:p-6">
                  <div className="mx-auto h-12 w-12 md:h-16 md:w-16 rounded-full bg-accent/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                    <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-base md:text-lg lg:text-xl group-hover:text-accent transition-colors">
                    Study & Practice
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Work through video lessons, complete practice exercises, and
                    take regular assessments to reinforce your understanding.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-2xl transition-all hover:scale-[1.05] group border-2 hover:border-secondary">
                <CardHeader className="p-4 md:p-6">
                  <div className="mx-auto h-12 w-12 md:h-16 md:w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all">
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-secondary-foreground group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-base md:text-lg lg:text-xl group-hover:text-secondary-foreground transition-colors">
                    Track Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Monitor your performance with detailed analytics, identify
                    weak areas, and receive personalised recommendations for
                    improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Card Style with Avatars */}
      <section className="py-12 md:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <Badge
              className="mb-3 md:mb-4 hover:scale-105 transition-transform text-xs md:text-sm"
              variant="outline"
            >
              Student Success Stories
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">
              What Our Students Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {[
              {
                name: "Emily Thompson",
                programme: "GCSE Mathematics & Sciences",
                grade: "9 A* grades",
                quote:
                  "The flexibility of self-tuition allowed me to balance my studies with competitive swimming. The video lessons were incredibly clear, and I could revisit difficult topics as many times as needed.",
              },
              {
                name: "James Patterson",
                programme: "11+ Preparation",
                grade: "Grammar School Place",
                quote:
                  "The structured approach and comprehensive materials gave me confidence going into my 11+ exams. The practice papers were especially helpful in preparing for the real thing.",
              },
              {
                name: "Aisha Khan",
                programme: "GCSE English & Humanities",
                grade: "8 A*/A grades",
                quote:
                  "Being able to study at my own pace was perfect for me. The online assessments with instant feedback helped me identify exactly where I needed to improve.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all hover:scale-[1.03] group border-2 hover:border-primary"
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm md:text-lg group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <CardTitle className="text-sm md:text-base group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-[10px] md:text-xs">
                        {testimonial.programme}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="w-fit hover:scale-105 transition-transform text-xs"
                  >
                    {testimonial.grade}
                  </Badge>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed group-hover:text-foreground transition-colors">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Unique Gradient with Overlay */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 md:top-20 left-5 md:left-10 h-48 w-48 md:h-72 md:w-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 h-64 w-64 md:h-96 md:w-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-balance px-4">
              Ready to Begin Your Self-Tuition Journey?
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground/90 mb-6 md:mb-8 text-pretty px-4">
              Join our community of successful self-directed learners and
              achieve your academic goals with flexibility and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-sm md:text-base hover:scale-105 transition-all shadow-xl group px-4 py-3 md:px-6 md:py-4"
              >
                Enrol in Self-Tuition
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm md:text-base bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-xl px-4 py-3 md:px-6 md:py-4"
              >
                View Sample Lessons
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion Style */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <Badge
                className="mb-3 md:mb-4 hover:scale-105 transition-transform text-xs md:text-sm"
                variant="outline"
              >
                Frequently Asked Questions
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">
                Got Questions?
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4">
              {[
                {
                  q: "How much time should I dedicate to self-tuition each week?",
                  a: "We recommend 5-10 hours per week depending on your programme level and number of subjects. The beauty of self-tuition is you can adjust this based on your schedule and learning pace.",
                },
                {
                  q: "Can I switch from self-tuition to group tuition?",
                  a: "Yes, subject to availability. If you find self-tuition isn't the right fit, we can discuss transferring to our group-based tuition programmes.",
                },
                {
                  q: "What happens if I fall behind in my studies?",
                  a: "Our platform tracks your progress and will alert you if you're falling behind the recommended pace. You'll also have access to tutor support via our messaging system for guidance.",
                },
                {
                  q: "Are the materials aligned with UK examination boards?",
                  a: "Absolutely. All our materials are specifically designed to meet the requirements of major UK examination boards including AQA, Edexcel, OCR, and WJEC.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all group border-2 hover:border-primary cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <CardTitle className="text-sm md:text-base lg:text-lg group-hover:text-primary transition-colors text-left">
                        {faq.q}
                      </CardTitle>
                      <ChevronDown
                        className={`h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent className="p-4 md:p-6 pt-0 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
