import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Coins,
  FileText,
  GraduationCap,
  MessageSquare,
  School,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

export default function GroupBasedTuitionPage() {
  return (
    <main className="min-h-screen mt-8 md:mt-0">
      {/* Hero Section - Dynamic with Floating Stats */}
      <section className="relative min-h-screen bg-gradient-to-br from-secondary via-primary to-accent text-primary-foreground py-12 md:py-20 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg')] bg-cover bg-center opacity-50" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
            <div
              className="space-y-6 lg:space-y-8"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 px-3 py-1.5 md:px-6 md:py-3 text-xs md:text-sm font-bold inline-flex items-center gap-2">
                <Users className="h-3 w-3 md:h-4 md:w-4" aria-hidden="true" />
                Collaborative Learning Excellence
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
                Group-Based
                <span className="block text-white mt-2 md:mt-4">Tuition</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
                At Ripples Tutorials, we only offer{" "}
                <strong className="text-secondary">GCSE Core subjects</strong>{" "}
                (compulsory subjects). We aim for{" "}
                <strong className="text-secondary">Grades 8 and 9</strong>{" "}
                through collaborative learning and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-sm md:text-base lg:text-lg px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-7 h-auto hover:scale-105 transition-all shadow-xl hover:shadow-2xl group font-bold"
                  aria-label="Join a group tuition class"
                >
                  Join a Group
                  <ArrowRight
                    className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-sm md:text-base lg:text-lg px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-7 h-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent transition-all hover:scale-105 shadow-xl font-bold"
                  aria-label="View class timetable"
                >
                  View Timetable
                </Button>
              </div>
            </div>

            <div
              className="relative"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden bg-muted shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] group">
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                  alt="Students learning together in group-based tuition"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
              </div>

              {/* Floating stat cards - Repositioned for mobile */}
              <div
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card border-2 border-border rounded-xl md:rounded-2xl p-2 md:p-3 shadow-2xl max-w-[200px] md:max-w-xs hover:scale-105 transition-all hover:shadow-3xl"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="800"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                  <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Trophy
                      className="h-4 w-4 md:h-6 md:w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-black text-accent">
                      Grades 8-9
                    </div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">
                      Target Achievement
                    </div>
                  </div>
                </div>
                <div className="text-[10px] md:text-sm text-muted-foreground">
                  Excellence through collaboration
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-card border-2 border-border rounded-xl md:rounded-2xl p-2 md:p-3 shadow-2xl hover:scale-105 transition-all hover:shadow-3xl"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="800"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-accent/80 flex items-center justify-center flex-shrink-0">
                    <Users
                      className="h-4 w-4 md:h-6 md:w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-black text-accent">
                      2-12
                    </div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">
                      Students per Group
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Card Grid with Icons */}
      <section className="py-12 md:py-20 lg:py-24 bg-primary/20">
        <div className="container">
          <header
            className="text-center mb-8 md:mb-12 lg:mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Badge
              className="mb-3 md:mb-4 text-xs md:text-sm bg-accent text-white hover:scale-105 transition-transform px-3 py-1.5 md:px-4 md:py-2"
              variant="outline"
            >
              Our Offering
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 text-balance">
              GCSE Core Subjects
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We focus exclusively on compulsory GCSE subjects, ensuring
              comprehensive coverage and exceptional results.
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
            {[
              { subject: "English Language", icon: "✍️", color: "primary" },
              { subject: "English Literature", icon: "📚", color: "accent" },
              { subject: "Mathematics", icon: "🔢", color: "secondary" },
              { subject: "Science", icon: "🔬", color: "primary" },
              { subject: "Biology", icon: "🧬", color: "accent" },
              { subject: "Chemistry", icon: "🧪", color: "secondary" },
              { subject: "Physics", icon: "⚛️", color: "primary" },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all hover:scale-[1.05] group border-2 hover:border-primary"
                data-aos="flip-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                <CardHeader className="p-3 md:p-4 lg:p-6">
                  <div
                    className="text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3 group-hover:scale-110 transition-transform"
                    role="img"
                    aria-label={item.subject}
                  >
                    {item.icon}
                  </div>
                  <CardTitle className="text-xs md:text-sm lg:text-lg group-hover:text-primary transition-colors font-bold">
                    {item.subject}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div
            className="max-w-3xl mx-auto text-center"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div className="bg-accent/10 border-2 border-secondary/30 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:bg-accent/20 transition-all hover:shadow-2xl hover:scale-[1.02]">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Target
                  className="h-6 w-6 md:h-8 md:w-8 text-secondary-foreground flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-secondary-foreground">
                  Our Goal: Grades 8 and 9
                </h3>
              </div>
              <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                We maintain high standards and focus on achieving top grades
                through structured learning, regular assessments, and
                collaborative study environments that inspire excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group-Based Tuition Explained - Card with Image Overlay */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center mb-12 md:mb-16">
              <div data-aos="fade-right" data-aos-duration="1000">
                <Badge
                  className="mb-3 md:mb-4 bg-accent text-xs md:text-sm text-white hover:scale-105 transition-transform px-3 py-1.5 md:px-4 md:py-2"
                  variant="outline"
                >
                  What is Group-Based Tuition?
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-balance">
                  Collaborative Learning in Small Groups
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  In <strong>group-based tuition</strong>, where a tutor teaches
                  multiple students at once, each group typically consists of{" "}
                  <strong>2 to 12 students</strong> who share the same learning
                  category.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  This approach combines the benefits of expert teaching with
                  peer learning, creating a dynamic environment where students
                  learn from both their tutor and each other.
                </p>

                <div className="space-y-2 md:space-y-3">
                  <div
                    className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-all hover:shadow-md hover:scale-[1.02]"
                    data-aos="slide-right"
                    data-aos-delay="100"
                    data-aos-duration="600"
                  >
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users
                        className="h-4 w-4 md:h-5 md:w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-xs md:text-sm">
                        Small Class Sizes
                      </div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">
                        Maximum 12 students per group
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-accent/5 rounded-lg border border-accent/20 hover:bg-accent/10 transition-all hover:shadow-md hover:scale-[1.02]"
                    data-aos="slide-right"
                    data-aos-delay="200"
                    data-aos-duration="600"
                  >
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Target
                        className="h-4 w-4 md:h-5 md:w-5 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-xs md:text-sm">
                        Ability-Matched Groups
                      </div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">
                        Students grouped by learning level
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-secondary/10 rounded-lg border border-secondary/30 hover:bg-secondary/20 transition-all hover:shadow-md hover:scale-[1.02]"
                    data-aos="slide-right"
                    data-aos-delay="300"
                    data-aos-duration="600"
                  >
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <BookOpen
                        className="h-4 w-4 md:h-5 md:w-5 text-secondary-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-xs md:text-sm">
                        Structured Curriculum
                      </div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">
                        Following AQA syllabus
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="relative h-[300px] md:h-[450px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden bg-muted shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] group">
                  <img
                    src="https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg"
                    alt="Students collaborating in group learning environment"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Learning Categories */}
            <div
              className="text-center mb-6 md:mb-8"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 md:mb-4">
                Learning Categories
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">
                Students are grouped into appropriate categories based on their
                age and academic level
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  category: "11Plus",
                  description: "Preparation for grammar school entrance exams",
                  ages: "Ages 8-11",
                  color: "primary",
                },
                {
                  category: "GCSE Junior",
                  description: "Foundation building for Years 7-9",
                  ages: "Ages 11-14",
                  color: "accent",
                },
                {
                  category: "GCSE Senior",
                  description: "Exam preparation for Years 10-11",
                  ages: "Ages 14-16",
                  color: "secondary",
                },
              ].map((cat, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-2xl transition-all hover:scale-[1.05] group border-2 hover:border-primary"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  data-aos-duration="700"
                >
                  <CardHeader className="p-4 md:p-5 lg:p-6">
                    <Badge
                      className="mx-auto text-white text-xs md:text-sm bg-accent mb-2 md:mb-3 hover:scale-105 transition-transform px-2 py-1 md:px-3 md:py-1.5"
                      variant="secondary"
                    >
                      {cat.ages}
                    </Badge>
                    <CardTitle className="text-base md:text-lg lg:text-xl group-hover:text-primary transition-colors font-black">
                      {cat.category}
                    </CardTitle>
                    <CardDescription className="group-hover:text-foreground transition-colors text-xs md:text-sm">
                      {cat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Standard Grid (Different from One-on-One's Bento) */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container">
          <header
            className="text-center mb-8 md:mb-12 lg:mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Badge
              className="mb-3 md:mb-4 text-white text-xs md:text-sm bg-accent hover:scale-105 transition-transform px-3 py-1.5 md:px-4 md:py-2"
              variant="outline"
            >
              Why Choose Group-Based?
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 text-balance">
              Advantages of Group Based Tuition
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Experience the power of collaborative learning with expert
              guidance, peer support, and structured progression.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: MessageSquare,
                title: "Encourages Questions",
                description:
                  "Encourages students to ask questions within the group, creating an open learning environment where curiosity is celebrated.",
                color: "primary",
              },
              {
                icon: Users,
                title: "Peer Learning",
                description:
                  "Promotes discussions that allow students to learn from each other, gaining different perspectives and problem-solving approaches.",
                color: "accent",
              },
              {
                icon: TrendingUp,
                title: "Develops Skills",
                description:
                  "Develops teamwork, communication skills, and confidence in expressing ideas - essential for academic and professional success.",
                color: "secondary",
              },
              {
                icon: Trophy,
                title: "Healthy Competition",
                description:
                  "Inspires motivation and healthy competition among peers, leading to improved performance and higher achievement.",
                color: "primary",
              },
              {
                icon: Target,
                title: "Focused Syllabus",
                description:
                  "Enables Ripples Tutorials to stay focused on the AQA syllabus, ensuring comprehensive coverage of all examination requirements.",
                color: "accent",
              },
              {
                icon: Award,
                title: "Proven Results",
                description:
                  "Track record of exceptional results with students consistently achieving grades 8 and 9 through our group-based approach.",
                color: "secondary",
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all hover:scale-[1.03] group border-2 hover:border-primary"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="700"
              >
                <CardHeader className="p-4 md:p-5 lg:p-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <advantage.icon
                      className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary group-hover:text-primary-foreground transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-base md:text-lg lg:text-xl group-hover:text-primary transition-colors font-black mb-2 md:mb-3">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-5 lg:p-6 pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11Plus Programme Details - Cards with Overlays */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <header
              className="text-center mb-8 md:mb-12"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Badge
                className="mb-3 md:mb-4 hover:scale-105 transition-transform text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2"
                variant="outline"
              >
                11Plus Programme
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4">
                Grammar & Independent School Preparation
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                The 11Plus exam is a selective entrance test used in parts of
                the United Kingdom to determine admission into{" "}
                <strong>Grammar Schools</strong> and certain{" "}
                <strong>Independent Schools</strong>.
              </p>
            </header>

            <div
              className="bg-primary/5 border-2 border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 mb-8 md:mb-12 hover:bg-primary/10 transition-all hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap
                    className="h-5 w-5 md:h-6 md:w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-black mb-2">
                    Who Takes the 11Plus?
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Students preparing for the 11Plus are usually in{" "}
                    <strong>Year 4 or Year 5</strong>, as the exams are taken in
                    the early weeks of <strong>Year 6</strong>, when most pupils
                    are between <strong>10 and 11 years old</strong>.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {[
                  {
                    subject: "MATHS",
                    topics: "Problem Solving, Arithmetic and Reasoning",
                    icon: "🔢",
                  },
                  {
                    subject: "ENGLISH",
                    topics:
                      "Reading, Comprehension, Grammar, Vocabulary, and Writing",
                    icon: "📚",
                  },
                  {
                    subject: "VERBAL REASONING",
                    topics: "Logic, Word Patterns, and Sequence",
                    icon: "🧠",
                  },
                  {
                    subject: "NON-VERBAL REASONING",
                    topics: "Shapes, Spatial Reasoning, Visual Problem-Solving",
                    icon: "🔷",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 md:p-4 bg-background rounded-lg border hover:shadow-lg transition-all hover:scale-[1.02] group"
                    data-aos="slide-up"
                    data-aos-delay={idx * 100}
                    data-aos-duration="600"
                  >
                    <div
                      className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform"
                      role="img"
                      aria-label={item.subject}
                    >
                      {item.icon}
                    </div>
                    <div className="font-bold text-xs md:text-sm text-primary mb-1 group-hover:text-accent transition-colors">
                      {item.subject}
                    </div>
                    <div className="text-[10px] md:text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.topics}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* School Types Comparison */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Grammar Schools */}
              <Card
                className="overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-2 hover:border-primary group"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <div className="bg-primary/10 p-4 md:p-5 lg:p-6 border-b group-hover:bg-primary/20 transition-all">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <School
                        className="h-5 w-5 md:h-6 md:w-6 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-black group-hover:text-primary transition-colors">
                      Grammar Schools
                    </h3>
                  </div>
                  <Badge
                    variant="secondary"
                    className="hover:scale-105 transition-transform text-xs md:text-sm px-2 py-1 md:px-3 md:py-1.5"
                  >
                    Government Funded
                  </Badge>
                </div>
                <CardContent className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                  {[
                    { icon: Coins, label: "Parental Cost", value: "Free" },
                    {
                      icon: FileText,
                      label: "Selection",
                      value: "11Plus Exams",
                    },
                    {
                      icon: BookOpen,
                      label: "Curriculum",
                      value: "National Curriculum",
                    },
                    {
                      icon: Target,
                      label: "Accessibility",
                      value: "Open to any child in catchment area who passes",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-muted rounded-lg hover:bg-muted/70 transition-all hover:shadow-md hover:scale-[1.02]"
                    >
                      <item.icon
                        className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="font-bold text-xs md:text-sm">
                          {item.label}
                        </div>
                        <div className="text-[10px] md:text-xs text-muted-foreground">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Independent Schools */}
              <Card
                className="overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-2 hover:border-accent group"
                data-aos="fade-left"
                data-aos-duration="900"
              >
                <div className="bg-accent/10 p-4 md:p-5 lg:p-6 border-b group-hover:bg-accent/20 transition-all">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Building2
                        className="h-5 w-5 md:h-6 md:w-6 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-black group-hover:text-accent transition-colors">
                      Independent Schools
                    </h3>
                  </div>
                  <Badge
                    variant="secondary"
                    className="hover:scale-105 transition-transform text-xs md:text-sm px-2 py-1 md:px-3 md:py-1.5"
                  >
                    Privately Funded
                  </Badge>
                </div>
                <CardContent className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
                  {[
                    { icon: Coins, label: "Parental Cost", value: "Expensive" },
                    {
                      icon: FileText,
                      label: "Selection",
                      value: "Entrance Exams & Interviews",
                    },
                    {
                      icon: BookOpen,
                      label: "Curriculum",
                      value:
                        "Flexible (IGCSE, International Baccalaureate, etc.)",
                    },
                    {
                      icon: Target,
                      label: "Accessibility",
                      value:
                        "Depends on ability to pay, though scholarships exist",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-muted rounded-lg hover:bg-muted/70 transition-all hover:shadow-md hover:scale-[1.02]"
                    >
                      <item.icon
                        className="h-4 w-4 md:h-5 md:w-5 text-accent mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="font-bold text-xs md:text-sm">
                          {item.label}
                        </div>
                        <div className="text-[10px] md:text-xs text-muted-foreground">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-24 text-primary bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-20 left-10 h-72 w-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 h-96 w-96 bg-primary/20 rounded-full blur-xl animate-pulse delay-700" />
        </div>
        <div className="container relative z-10">
          <div
            className="max-w-3xl mx-auto text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 text-balance">
              Ready to Join Our Group-Based Programme?
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-accent mb-6 md:mb-8 text-pretty">
              Experience the benefits of collaborative learning with expert
              tutors and motivated peers. Enrol today and start your journey to
              grades 8 and 9.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                className="hover:scale-105 transition-all shadow-xl group text-sm md:text-base lg:text-lg px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-7 h-auto font-bold bg-primary text-white hover:bg-white hover:text-accent"
                aria-label="Enrol in group tuition programme"
              >
                Enrol in Group Tuition
                <ArrowRight
                  className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Button>
              <Button
                size="lg"
                className="bg-transparent text-accent border-2 border-primary-foreground hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-xl text-sm md:text-base lg:text-lg px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-7 h-auto font-bold"
                aria-label="View class schedule"
              >
                View Class Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
