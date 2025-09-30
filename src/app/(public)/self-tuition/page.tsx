import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Laptop,
  PresentationIcon,
  Star,
  Target,
  TrendingUp,
  Video,
  Zap,
} from 'lucide-react';

export default function SelfTuitionsPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground py-24 md:py-40 overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-10 right-20 h-96 w-96 bg-secondary/30 rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-10 left-20 h-80 w-80 bg-accent/30 rounded-full blur-3xl animate-pulse delay-500' />
          <div className='absolute top-1/3 left-1/3 h-64 w-64 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse delay-1000' />
        </div>

        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1200&width=2000')] bg-cover bg-center opacity-5" />

        <div className='container mx-auto px-4 md:px-6 relative z-10'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <Badge className='mb-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all hover:scale-105 px-6 py-2 text-sm font-medium shadow-lg'>
                  <Zap className='h-4 w-4 mr-2 inline' />
                  Flexible Learning Solutions
                </Badge>
                <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-tight tracking-tight'>
                  Self-Tuition with
                  <span className='block text-secondary mt-2'>
                    Balance & Excellence
                  </span>
                </h1>
                <p className='text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed text-pretty'>
                  To self-tuition, carry your balance studies with hobbies or
                  personal commitments. If you are{' '}
                  <strong className='text-secondary'>
                    disciplined, responsible
                  </strong>
                  , and have excellent time management of your around-the-clock,
                  then <strong className='text-secondary'>SELF-TUITION</strong>{' '}
                  should be fine for you.
                </p>
                <div className='flex flex-col sm:flex-row gap-6'>
                  <Button
                    size='lg'
                    variant='secondary'
                    className='text-lg px-8 py-6 h-auto hover:scale-105 transition-all shadow-xl hover:shadow-2xl group'
                  >
                    Explore Programmes
                    <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='text-lg px-8 py-6 h-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-xl'
                  >
                    View Sample Materials
                  </Button>
                </div>
              </div>

              <div className='relative'>
                <div className='relative h-[500px] rounded-3xl overflow-hidden bg-muted shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] group'>
                  <img
                    src='/placeholder.svg?height=600&width=500'
                    alt='Learning Platform'
                    className='w-full h-full object-cover transition-transform group-hover:scale-110 duration-500'
                  />
                </div>

                {/* Floating stat cards */}
                <div className='absolute -bottom-6 -left-6 bg-card border-2 border-border rounded-2xl p-6 shadow-2xl max-w-xs hover:scale-105 transition-all hover:shadow-3xl'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center'>
                      <Star className='h-6 w-6 text-accent' />
                    </div>
                    <div>
                      <div className='text-2xl font-bold'>98%</div>
                      <div className='text-xs text-muted-foreground'>
                        Success Rate
                      </div>
                    </div>
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Students achieving A*-B grades
                  </div>
                </div>

                <div className='absolute -top-6 -right-6 bg-card border-2 border-border rounded-2xl p-6 shadow-2xl hover:scale-105 transition-all hover:shadow-3xl'>
                  <div className='flex items-center gap-3'>
                    <div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Clock className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <div className='text-2xl font-bold'>24/7</div>
                      <div className='text-xs text-muted-foreground'>
                        Access Anytime
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge
              className='mb-4 hover:scale-105 transition-transform'
              variant='outline'
            >
              Why Choose Self-Tuition?
            </Badge>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-balance'>
              Learn at Your Own Pace, Achieve at the Highest Level
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
              Our self-tuition model combines flexibility with structure, giving
              you the freedom to study when it suits you while maintaining
              rigorous academic standards.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {[
              {
                icon: Clock,
                title: 'Flexible Schedule',
                description:
                  'Study anytime, anywhere. Perfect for balancing academics with extracurricular activities and personal commitments.',
                color: 'primary',
              },
              {
                icon: Target,
                title: 'Personalised Learning',
                description:
                  'Progress at your own pace. Spend more time on challenging topics and move quickly through familiar material.',
                color: 'accent',
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description:
                  'Our course materials have been tested and refined over the past few years, delivering consistent excellent outcomes.',
                color: 'secondary',
              },
              {
                icon: Award,
                title: 'Comprehensive Resources',
                description:
                  'Access videos, assessments, PowerPoints, and PDF worksheets - everything you need for exam success.',
                color: 'primary',
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className='border-2 hover:border-primary transition-all hover:shadow-2xl hover:scale-[1.05] group'
              >
                <CardHeader>
                  <div className='h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all'>
                    <benefit.icon className='h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors' />
                  </div>
                  <CardTitle className='text-xl group-hover:text-primary transition-colors'>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors'>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Materials Section */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
              <div>
                <Badge
                  className='mb-4 hover:scale-105 transition-transform'
                  variant='outline'
                >
                  Comprehensive Learning Materials
                </Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 text-balance'>
                  Everything You Need for Exam Success
                </h2>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  For self-tuition, course materials have been tested and
                  refined over the past few years. The following are provided
                  within each course to ensure comprehensive coverage of all
                  examination requirements:
                </p>

                <div className='space-y-4'>
                  {[
                    {
                      icon: Video,
                      title: 'Video Lessons',
                      description:
                        'High-quality recorded lessons covering every topic in detail, available 24/7 for unlimited viewing.',
                    },
                    {
                      icon: FileText,
                      title: 'Online Assessments',
                      description:
                        'Regular quizzes and mock exams with instant feedback to track your progress and identify areas for improvement.',
                    },
                    {
                      icon: PresentationIcon,
                      title: 'PowerPoint Presentations',
                      description:
                        'Comprehensive slide decks summarising key concepts, perfect for revision and quick reference.',
                    },
                    {
                      icon: Download,
                      title: 'PDF Worksheets',
                      description:
                        'Printable practice exercises, past papers, and revision guides to reinforce your learning.',
                    },
                  ].map((material, index) => (
                    <div
                      key={index}
                      className='flex gap-4 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-all hover:shadow-lg hover:scale-[1.02] group border border-transparent hover:border-primary/20'
                    >
                      <div className='flex-shrink-0'>
                        <div className='h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all'>
                          <material.icon className='h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors' />
                        </div>
                      </div>
                      <div>
                        <h3 className='font-semibold mb-1 group-hover:text-primary transition-colors'>
                          {material.title}
                        </h3>
                        <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                          {material.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='relative'>
                <div className='relative h-[500px] rounded-3xl overflow-hidden bg-muted shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] group'>
                  <img
                    src='/placeholder.svg?height=600&width=500'
                    alt='Learning Platform'
                    className='w-full h-full object-cover transition-transform group-hover:scale-110 duration-500'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Offered */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge
              className='mb-4 hover:scale-105 transition-transform'
              variant='outline'
            >
              Our Programmes
            </Badge>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-balance'>
              Comprehensive Coverage Across All Levels
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
              From 11+ preparation to A-Level mastery, we offer structured
              programmes tailored to UK examination requirements.
            </p>
          </div>

          <Tabs defaultValue='11plus' className='max-w-6xl mx-auto'>
            <TabsList className='grid w-full grid-cols-3 mb-8 h-auto p-1'>
              <TabsTrigger
                value='11plus'
                className='text-base py-3 hover:scale-105 transition-all data-[state=active]:shadow-lg'
              >
                11 Plus
              </TabsTrigger>
              <TabsTrigger
                value='gcse'
                className='text-base py-3 hover:scale-105 transition-all data-[state=active]:shadow-lg'
              >
                GCSE
              </TabsTrigger>
              <TabsTrigger
                value='alevel'
                className='text-base py-3 hover:scale-105 transition-all data-[state=active]:shadow-lg'
              >
                A-Level
              </TabsTrigger>
            </TabsList>

            {/* 11 Plus Content */}
            <TabsContent value='11plus' className='space-y-8'>
              <Card className='hover:shadow-2xl transition-all'>
                <CardHeader>
                  <CardTitle className='text-2xl'>11 Plus Programme</CardTitle>
                  <CardDescription>
                    Comprehensive preparation for grammar school and independent
                    school entrance examinations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='grid md:grid-cols-2 gap-8'>
                    <div>
                      <h3 className='font-semibold text-lg mb-4 flex items-center gap-2'>
                        <BookOpen className='h-5 w-5 text-primary' />
                        Core Subjects
                      </h3>
                      <div className='space-y-3'>
                        <div className='p-4 bg-primary/5 rounded-lg border border-primary/20'>
                          <div className='font-semibold text-primary mb-2'>
                            Mathematics
                          </div>
                          <ul className='text-sm text-muted-foreground space-y-1'>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Number Concepts & Place Value
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Arithmetic Operations
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Fractions, Decimals & Percentages
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Ratios & Proportions
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Algebra & Problem Solving
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Geometry & Measurement
                            </li>
                          </ul>
                        </div>

                        <div className='p-4 bg-accent/5 rounded-lg border border-accent/20'>
                          <div className='font-semibold text-accent mb-2'>
                            English
                          </div>
                          <ul className='text-sm text-muted-foreground space-y-1'>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Reading Comprehension
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Grammar & Punctuation
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Vocabulary Development
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Creative Writing Skills
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Spelling & Word Patterns
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg mb-4 flex items-center gap-2'>
                        <Brain className='h-5 w-5 text-primary' />
                        Reasoning Skills
                      </h3>
                      <div className='space-y-3'>
                        <div className='p-4 bg-secondary/10 rounded-lg border border-secondary/30'>
                          <div className='font-semibold text-secondary-foreground mb-2'>
                            Verbal Reasoning
                          </div>
                          <ul className='text-sm text-muted-foreground space-y-1'>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Word Relationships & Analogies
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Letter & Number Sequences
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Code Breaking & Logic
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Verbal Classification
                            </li>
                          </ul>
                        </div>

                        <div className='p-4 bg-secondary/10 rounded-lg border border-secondary/30'>
                          <div className='font-semibold text-secondary-foreground mb-2'>
                            Non-Verbal Reasoning
                          </div>
                          <ul className='text-sm text-muted-foreground space-y-1'>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Pattern Recognition
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Spatial Awareness
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Shape Sequences & Rotations
                            </li>
                            <li className='flex items-center gap-2'>
                              <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                              Visual Problem Solving
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className='mt-6 p-4 bg-muted rounded-lg'>
                        <div className='flex items-center gap-2 mb-2'>
                          <Award className='h-5 w-5 text-primary' />
                          <span className='font-semibold'>
                            Programme Highlights
                          </span>
                        </div>
                        <ul className='text-sm text-muted-foreground space-y-1'>
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
            <TabsContent value='gcse' className='space-y-8'>
              <Card className='hover:shadow-2xl transition-all'>
                <CardHeader>
                  <CardTitle className='text-2xl'>GCSE Programme</CardTitle>
                  <CardDescription>
                    Complete coverage of GCSE specifications across core and
                    optional subjects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {[
                      {
                        subject: 'Mathematics',
                        level: 'Foundation & Higher Tier',
                        topics: [
                          'Number',
                          'Algebra',
                          'Geometry',
                          'Statistics',
                          'Probability',
                        ],
                        color: 'primary',
                      },
                      {
                        subject: 'English Language',
                        level: 'AQA Specification',
                        topics: [
                          'Reading Skills',
                          'Writing Skills',
                          'Spoken Language',
                          'Literary Analysis',
                        ],
                        color: 'accent',
                      },
                      {
                        subject: 'English Literature',
                        level: 'AQA Specification',
                        topics: [
                          'Shakespeare',
                          '19th Century Novel',
                          'Modern Texts',
                          'Poetry',
                        ],
                        color: 'accent',
                      },
                      {
                        subject: 'Physics',
                        level: 'Combined & Separate Science',
                        topics: [
                          'Energy',
                          'Forces',
                          'Waves',
                          'Electricity',
                          'Magnetism',
                        ],
                        color: 'secondary',
                      },
                      {
                        subject: 'Chemistry',
                        level: 'Combined & Separate Science',
                        topics: [
                          'Atomic Structure',
                          'Bonding',
                          'Reactions',
                          'Organic Chemistry',
                        ],
                        color: 'secondary',
                      },
                      {
                        subject: 'Biology',
                        level: 'Combined & Separate Science',
                        topics: [
                          'Cell Biology',
                          'Organisation',
                          'Infection',
                          'Bioenergetics',
                          'Ecology',
                        ],
                        color: 'secondary',
                      },
                    ].map((subject, index) => (
                      <Card
                        key={index}
                        className='border-2 hover:border-primary transition-all hover:shadow-xl hover:scale-[1.03] group'
                      >
                        <CardHeader>
                          <div className='flex items-start justify-between mb-2'>
                            <CardTitle className='text-lg group-hover:text-primary transition-colors'>
                              {subject.subject}
                            </CardTitle>
                            <Badge
                              variant='outline'
                              className='text-xs hover:scale-105 transition-transform'
                            >
                              {subject.level}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className='text-sm text-muted-foreground space-y-1'>
                            {subject.topics.map((topic, idx) => (
                              <li
                                key={idx}
                                className='flex items-center gap-2 hover:text-foreground transition-colors'
                              >
                                <CheckCircle2 className='h-3 w-3 text-accent flex-shrink-0' />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className='mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20 hover:bg-primary/10 transition-all hover:shadow-lg'>
                    <h3 className='font-semibold text-lg mb-4'>
                      What's Included in GCSE Programme:
                    </h3>
                    <div className='grid md:grid-cols-2 gap-4'>
                      <ul className='space-y-2 text-sm'>
                        <li className='flex items-center gap-2 hover:text-primary transition-colors'>
                          <CheckCircle2 className='h-4 w-4 text-accent flex-shrink-0' />
                          <span>Complete specification coverage</span>
                        </li>
                        <li className='flex items-center gap-2 hover:text-primary transition-colors'>
                          <CheckCircle2 className='h-4 w-4 text-accent flex-shrink-0' />
                          <span>Past paper practice (10+ years)</span>
                        </li>
                        <li className='flex items-center gap-2 hover:text-primary transition-colors'>
                          <CheckCircle2 className='h-4 w-4 text-accent flex-shrink-0' />
                          <span>Mark scheme guidance</span>
                        </li>
                      </ul>
                      <ul className='space-y-2 text-sm'>
                        <li className='flex items-center gap-2 hover:text-primary transition-colors'>
                          <CheckCircle2 className='h-4 w-4 text-accent flex-shrink-0' />
                          <span>Exam technique masterclasses</span>
                        </li>
                        <li className='flex items-center gap-2 hover:text-primary transition-colors'>
                          <CheckCircle2 className='h-4 w-4 text-accent flex-shrink-0' />
                          <span>Revision timetable templates</span>
                        </li>
                        <li className='flex items-center gap-2 hover:text-primary transition-colors'>
                          <CheckCircle2 className='h-4 w-4 text-accent flex-shrink-0' />
                          <span>Grade prediction tools</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* A-Level Content */}
            <TabsContent value='alevel' className='space-y-8'>
              <Card className='hover:shadow-2xl transition-all'>
                <CardHeader>
                  <CardTitle className='text-2xl'>A-Level Programme</CardTitle>
                  <CardDescription>
                    Advanced study programmes preparing students for university
                    and beyond
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='mb-8 p-6 bg-secondary/10 rounded-xl border border-secondary/30 hover:bg-secondary/20 transition-all hover:shadow-lg'>
                    <div className='flex items-center gap-3 mb-4'>
                      <div className='h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center'>
                        <Award className='h-6 w-6 text-secondary-foreground' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-lg'>
                          A-Level Syllabus
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          Subjects currently in development - Coming Soon
                        </p>
                      </div>
                    </div>
                    <p className='text-sm text-muted-foreground leading-relaxed mb-4'>
                      We are currently developing comprehensive A-Level
                      programmes across a range of subjects. Our A-Level courses
                      will maintain the same high standards and comprehensive
                      approach as our 11+ and GCSE offerings.
                    </p>
                    <Badge variant='secondary'>Launching September 2025</Badge>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <h3 className='font-semibold text-lg mb-4'>
                        Planned Subjects Include:
                      </h3>
                      <div className='space-y-2'>
                        {[
                          'Mathematics (Pure & Applied)',
                          'Further Mathematics',
                          'Physics',
                          'Chemistry',
                          'Biology',
                          'English Literature',
                          'History',
                          'Economics',
                        ].map((subject, index) => (
                          <div
                            key={index}
                            className='flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-all hover:shadow-md hover:scale-[1.02] group'
                          >
                            <div className='h-2 w-2 rounded-full bg-secondary group-hover:scale-150 transition-transform' />
                            <span className='text-sm font-medium group-hover:text-primary transition-colors'>
                              {subject}
                            </span>
                            <Badge
                              variant='outline'
                              className='ml-auto text-xs hover:scale-105 transition-transform'
                            >
                              Pending
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className='font-semibold text-lg mb-4'>
                        What to Expect:
                      </h3>
                      <div className='space-y-4'>
                        <div className='p-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-all hover:shadow-lg hover:scale-[1.02] group'>
                          <div className='font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors'>
                            <Video className='h-4 w-4 text-primary' />
                            In-Depth Video Lectures
                          </div>
                          <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                            University-level teaching covering all specification
                            content in detail
                          </p>
                        </div>

                        <div className='p-4 bg-accent/5 rounded-lg border border-accent/20 hover:bg-accent/10 transition-all hover:shadow-lg hover:scale-[1.02] group'>
                          <div className='font-semibold mb-2 flex items-center gap-2 group-hover:text-accent transition-colors'>
                            <FileText className='h-4 w-4 text-accent' />
                            Advanced Problem Sets
                          </div>
                          <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                            Challenging questions to develop critical thinking
                            and analytical skills
                          </p>
                        </div>

                        <div className='p-4 bg-secondary/10 rounded-lg border border-secondary/30 hover:bg-secondary/20 transition-all hover:shadow-lg hover:scale-[1.02] group'>
                          <div className='font-semibold mb-2 flex items-center gap-2 group-hover:text-secondary-foreground transition-colors'>
                            <Target className='h-4 w-4 text-secondary-foreground' />
                            University Preparation
                          </div>
                          <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                            UCAS guidance, personal statement support, and
                            interview preparation
                          </p>
                        </div>
                      </div>

                      <Button
                        className='w-full mt-6 hover:scale-105 transition-all group bg-transparent'
                        variant='outline'
                      >
                        Register Interest for A-Levels
                        <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Learning Approach */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <Badge
                className='mb-4 hover:scale-105 transition-transform'
                variant='outline'
              >
                Our Methodology
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                How Self-Tuition Works
              </h2>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <Card className='text-center hover:shadow-2xl transition-all hover:scale-[1.05] group border-2 hover:border-primary'>
                <CardHeader>
                  <div className='mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all'>
                    <Laptop className='h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors' />
                  </div>
                  <CardTitle className='group-hover:text-primary transition-colors'>
                    Access Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                    Log in to your personal learning dashboard and access all
                    course materials, videos, and assessments 24/7 from any
                    device.
                  </p>
                </CardContent>
              </Card>

              <Card className='text-center hover:shadow-2xl transition-all hover:scale-[1.05] group border-2 hover:border-accent'>
                <CardHeader>
                  <div className='mx-auto h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all'>
                    <BookOpen className='h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors' />
                  </div>
                  <CardTitle className='group-hover:text-accent transition-colors'>
                    Study & Practice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                    Work through video lessons, complete practice exercises, and
                    take regular assessments to reinforce your understanding.
                  </p>
                </CardContent>
              </Card>

              <Card className='text-center hover:shadow-2xl transition-all hover:scale-[1.05] group border-2 hover:border-secondary'>
                <CardHeader>
                  <div className='mx-auto h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all'>
                    <TrendingUp className='h-8 w-8 text-secondary-foreground group-hover:text-secondary-foreground transition-colors' />
                  </div>
                  <CardTitle className='group-hover:text-secondary-foreground transition-colors'>
                    Track Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
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

      {/* Testimonials */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge
              className='mb-4 hover:scale-105 transition-transform'
              variant='outline'
            >
              Student Success Stories
            </Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              What Our Students Say
            </h2>
          </div>

          <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {[
              {
                name: 'Emily Thompson',
                programme: 'GCSE Mathematics & Sciences',
                grade: '9 A* grades',
                quote:
                  'The flexibility of self-tuition allowed me to balance my studies with competitive swimming. The video lessons were incredibly clear, and I could revisit difficult topics as many times as needed.',
              },
              {
                name: 'James Patterson',
                programme: '11+ Preparation',
                grade: 'Grammar School Place',
                quote:
                  'The structured approach and comprehensive materials gave me confidence going into my 11+ exams. The practice papers were especially helpful in preparing for the real thing.',
              },
              {
                name: 'Aisha Khan',
                programme: 'GCSE English & Humanities',
                grade: '8 A*/A grades',
                quote:
                  'Being able to study at my own pace was perfect for me. The online assessments with instant feedback helped me identify exactly where I needed to improve.',
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className='hover:shadow-2xl transition-all hover:scale-[1.03] group border-2 hover:border-primary'
              >
                <CardHeader>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all'>
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <CardTitle className='text-base group-hover:text-primary transition-colors'>
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className='text-xs'>
                        {testimonial.programme}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant='secondary'
                    className='w-fit hover:scale-105 transition-transform'
                  >
                    {testimonial.grade}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground italic leading-relaxed group-hover:text-foreground transition-colors'>
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-24 bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground relative overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 left-10 h-72 w-72 bg-secondary/20 rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-20 right-10 h-96 w-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700' />
        </div>
        <div className='container mx-auto px-4 md:px-6 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
              Ready to Begin Your Self-Tuition Journey?
            </h2>
            <p className='text-lg text-primary-foreground/90 mb-8 text-pretty'>
              Join our community of successful self-directed learners and
              achieve your academic goals with flexibility and excellence.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                variant='secondary'
                className='hover:scale-105 transition-all shadow-xl group'
              >
                Enrol in Self-Tuition
                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-xl'
              >
                View Sample Lessons
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto'>
            <div className='text-center mb-12'>
              <Badge
                className='mb-4 hover:scale-105 transition-transform'
                variant='outline'
              >
                Frequently Asked Questions
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Got Questions?
              </h2>
            </div>

            <div className='space-y-4'>
              {[
                {
                  q: 'How much time should I dedicate to self-tuition each week?',
                  a: 'We recommend 5-10 hours per week depending on your programme level and number of subjects. The beauty of self-tuition is you can adjust this based on your schedule and learning pace.',
                },
                {
                  q: 'Can I switch from self-tuition to group tuition?',
                  a: "Yes, subject to availability. If you find self-tuition isn't the right fit, we can discuss transferring to our group-based tuition programmes.",
                },
                {
                  q: 'What happens if I fall behind in my studies?',
                  a: "Our platform tracks your progress and will alert you if you're falling behind the recommended pace. You'll also have access to tutor support via our messaging system for guidance.",
                },
                {
                  q: 'Are the materials aligned with UK examination boards?',
                  a: 'Absolutely. All our materials are specifically designed to meet the requirements of major UK examination boards including AQA, Edexcel, OCR, and WJEC.',
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className='hover:shadow-xl transition-all hover:scale-[1.02] group border-2 hover:border-primary'
                >
                  <CardHeader>
                    <CardTitle className='text-lg group-hover:text-primary transition-colors'>
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors'>
                      {faq.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
