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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-primary to-accent text-primary-foreground py-24 md:py-40 overflow-hidden">
        {/* Animated background elements */}
        {/*<div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-10 left-20 h-96 w-96 bg-accent/30 rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-20 right-10 h-80 w-80 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-500' />
          <div className='absolute top-1/3 right-1/3 h-64 w-64 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse delay-1000' />
        </div>*/}

        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7092548/pexels-photo-7092548.jpeg')] bg-cover bg-center opacity-50" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 px-6 py-2 text-sm font-medium shadow-lg">
                  <Users className="h-4 w-4 mr-2 inline" />
                  Collaborative Learning Excellence
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight tracking-tight">
                  Group-Based
                  <span className="block text-white mt-2">Tuition</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed text-pretty">
                  At Ripples Tutorials, we only offer{" "}
                  <strong className="text-secondary">GCSE Core subjects</strong>{" "}
                  (compulsory subjects). We aim for{" "}
                  <strong className="text-secondary">Grades 8 and 9</strong>{" "}
                  through collaborative learning and expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 h-auto hover:scale-105 transition-all shadow-xl hover:shadow-2xl group"
                  >
                    Join a Group
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 h-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent transition-all hover:scale-105 shadow-xl"
                  >
                    View Timetable
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden bg-muted shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] group">
                  <img
                    src="https://images.pexels.com/photos/7092339/pexels-photo-7092339.jpeg"
                    alt="Group-Based Tuition"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-6 -left-6 bg-card border-2 border-border rounded-2xl px-3 py-2 shadow-2xl max-w-xs hover:scale-105 transition-all hover:shadow-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">
                        Grades 8-9
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Target Achievement
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Excellence through collaboration
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-card border-2 border-border rounded-2xl px-3 py-2 shadow-2xl hover:scale-105 transition-all hover:shadow-3xl">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-accent/80 flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">2-12</div>
                      <div className="text-xs text-muted-foreground">
                        Students per Group
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge
              className="mb-4 text-md bg-accent text-white hover:scale-105 transition-transform"
              variant="outline"
            >
              Our Offering
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              GCSE Core Subjects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We focus exclusively on compulsory GCSE subjects, ensuring
              comprehensive coverage and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
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
              >
                <CardHeader>
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {item.subject}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-accent/10 border-2 border-secondary/30 rounded-2xl p-8 hover:bg-accent/20 transition-all hover:shadow-2xl hover:scale-[1.02]">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="h-8 w-8 text-secondary-foreground" />
                <h3 className="text-2xl font-bold text-secondary-foreground">
                  Our Goal: Grades 8 and 9
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We maintain high standards and focus on achieving top grades
                through structured learning, regular assessments, and
                collaborative study environments that inspire excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group-Based Tuition Explained */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Badge
                  className="mb-4 bg-accent text-sm text-white hover:scale-105 transition-transform"
                  variant="outline"
                >
                  What is Group-Based Tuition?
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  Collaborative Learning in Small Groups
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  In <strong>group-based tuition</strong>, where a tutor teaches
                  multiple students at once, each group typically consists of{" "}
                  <strong>2 to 12 students</strong> who share the same learning
                  category.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  This approach combines the benefits of expert teaching with
                  peer learning, creating a dynamic environment where students
                  learn from both their tutor and each other.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-all hover:shadow-md hover:scale-[1.02]">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        Small Class Sizes
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Maximum 12 students per group
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg border border-accent/20 hover:bg-accent/10 transition-all hover:shadow-md hover:scale-[1.02]">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        Ability-Matched Groups
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Students grouped by learning level
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-secondary/30 hover:bg-secondary/20 transition-all hover:shadow-md hover:scale-[1.02]">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        Structured Curriculum
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Following AQA syllabus
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden bg-muted shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] group">
                  <img
                    src="https://images.pexels.com/photos/5538630/pexels-photo-5538630.jpeg"
                    alt="Group Learning"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Learning Categories */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Learning Categories</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Students are grouped into appropriate categories based on their
                age and academic level
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
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
                >
                  <CardHeader>
                    <Badge
                      className="mx-auto text-white text-sm bg-accent mb-3 hover:scale-105 transition-transform"
                      variant="secondary"
                    >
                      {cat.ages}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {cat.category}
                    </CardTitle>
                    <CardDescription className="group-hover:text-foreground transition-colors">
                      {cat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <Badge
              className="mb-4 text-white text-sm bg-accent hover:scale-105 transition-transform"
              variant="outline"
            >
              Why Choose Group-Based?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Advantages of Group Based Tuition
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Experience the power of collaborative learning with expert
              guidance, peer support, and structured progression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <advantage.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11Plus Programme Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge
                className="mb-4 hover:scale-105 transition-transform"
                variant="outline"
              >
                11Plus Programme
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Grammar & Independent School Preparation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                The 11Plus exam is a selective entrance test used in parts of
                the United Kingdom to determine admission into{" "}
                <strong>Grammar Schools</strong> and certain{" "}
                <strong>Independent Schools</strong>.
              </p>
            </div>

            <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 mb-12 hover:bg-primary/10 transition-all hover:shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Who Takes the 11Plus?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Students preparing for the 11Plus are usually in{" "}
                    <strong>Year 4 or Year 5</strong>, as the exams are taken in
                    the early weeks of <strong>Year 6</strong>, when most pupils
                    are between <strong>10 and 11 years old</strong>.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
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
                    className="p-4 bg-background rounded-lg border hover:shadow-lg transition-all hover:scale-[1.02] group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="font-semibold text-sm text-primary mb-1 group-hover:text-accent transition-colors">
                      {item.subject}
                    </div>
                    <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.topics}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* School Types Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Grammar Schools */}
              <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-2 hover:border-primary group">
                <div className="bg-primary/10 p-6 border-b group-hover:bg-primary/20 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <School className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      Grammar Schools
                    </h3>
                  </div>
                  <Badge
                    variant="secondary"
                    className="hover:scale-105 transition-transform"
                  >
                    Government Funded
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
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
                      className="flex items-start gap-3 p-3 bg-muted rounded-lg hover:bg-muted/70 transition-all hover:shadow-md hover:scale-[1.02]"
                    >
                      <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm">
                          {item.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Independent Schools */}
              <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-2 hover:border-accent group">
                <div className="bg-accent/10 p-6 border-b group-hover:bg-accent/20 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                      Independent Schools
                    </h3>
                  </div>
                  <Badge
                    variant="secondary"
                    className="hover:scale-105 transition-transform"
                  >
                    Privately Funded
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
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
                      className="flex items-start gap-3 p-3 bg-muted rounded-lg hover:bg-muted/70 transition-all hover:shadow-md hover:scale-[1.02]"
                    >
                      <item.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm">
                          {item.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent via-primary/40 to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 h-72 w-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 h-96 w-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Join Our Group-Based Programme?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-pretty">
              Experience the benefits of collaborative learning with expert
              tutors and motivated peers. Enrol today and start your journey to
              grades 8 and 9.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="hover:scale-105 transition-all shadow-xl group"
              >
                Enrol in Group Tuition
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-xl"
              >
                View Class Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
