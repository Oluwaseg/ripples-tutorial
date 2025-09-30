import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Calendar,
  Clock,
  GraduationCap,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
} from 'lucide-react';

export default function OneOnOneTuitionPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-accent via-primary to-secondary text-primary-foreground py-24 md:py-40 overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 right-10 h-96 w-96 bg-secondary/30 rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-10 left-20 h-80 w-80 bg-accent/30 rounded-full blur-3xl animate-pulse delay-700' />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary-foreground/5 rounded-full blur-3xl' />
        </div>

        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1200&width=2000')] bg-cover bg-center opacity-10" />

        <div className='container mx-auto px-4 md:px-6 relative z-10'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <Badge className='mb-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all hover:scale-105 px-6 py-2 text-sm font-medium shadow-lg'>
                  <Star className='h-4 w-4 mr-2 inline' />
                  Premium Personalised Learning
                </Badge>
                <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-tight tracking-tight'>
                  One-on-One
                  <span className='block text-secondary mt-2'>
                    Private Tuition
                  </span>
                </h1>
                <p className='text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed text-pretty'>
                  Do you need{' '}
                  <strong className='text-secondary'>
                    highly personalized guidance
                  </strong>
                  , extra confidence-building, or have unique learning needs?
                  Then our{' '}
                  <strong className='text-secondary'>One-On-One tuition</strong>{' '}
                  is for you.
                </p>
                <div className='flex flex-col sm:flex-row gap-6'>
                  <Button
                    size='lg'
                    variant='secondary'
                    className='text-lg px-8 py-6 h-auto hover:scale-105 transition-all shadow-xl hover:shadow-2xl group'
                  >
                    Book Your First Session
                    <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='text-lg px-8 py-6 h-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-xl'
                  >
                    View Pricing
                  </Button>
                </div>
              </div>

              <div className='relative'>
                <div className='relative h-[500px] rounded-3xl overflow-hidden bg-muted shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] group'>
                  <img
                    src='/placeholder.svg?height=600&width=500'
                    alt='One-on-One Tutoring'
                    className='w-full h-full object-cover transition-transform group-hover:scale-110 duration-500'
                  />
                </div>

                {/* Floating stat cards */}
                <div className='absolute -bottom-6 -left-6 bg-card border-2 border-border rounded-2xl p-6 shadow-2xl max-w-xs hover:scale-105 transition-all hover:shadow-3xl'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center'>
                      <Target className='h-6 w-6 text-accent' />
                    </div>
                    <div>
                      <div className='text-2xl font-bold'>100%</div>
                      <div className='text-xs text-muted-foreground'>
                        Personalised
                      </div>
                    </div>
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Fully tailored to your needs
                  </div>
                </div>

                <div className='absolute -top-6 -right-6 bg-card border-2 border-border rounded-2xl p-6 shadow-2xl hover:scale-105 transition-all hover:shadow-3xl'>
                  <div className='flex items-center gap-3'>
                    <div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Clock className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <div className='text-2xl font-bold'>Flexible</div>
                      <div className='text-xs text-muted-foreground'>
                        Your Schedule
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12 md:mb-16'>
            <Badge
              className='mb-4 hover:scale-105 transition-transform'
              variant='outline'
            >
              Why Choose One-on-One?
            </Badge>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-balance'>
              Advantages of One-on-One Tuition
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto text-pretty'>
              Experience the ultimate in personalised education with dedicated
              attention, customised learning plans, and flexible pacing designed
              exclusively for you.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {[
              {
                icon: User,
                title: 'Personalized Attention',
                description:
                  'Tutor focuses entirely on the strengths and weaknesses of the student, ensuring every minute is optimised for maximum learning impact.',
                color: 'primary',
              },
              {
                icon: Target,
                title: 'Tailored Learning Style',
                description:
                  'Tutor adapts teaching methods to match how the student learns best, whether visual, auditory, kinesthetic, or a combination of styles.',
                color: 'accent',
              },
              {
                icon: Clock,
                title: 'Flexible Pacing',
                description:
                  'Student can move faster or slower depending on their needs, spending extra time on challenging topics without holding back on areas of strength.',
                color: 'secondary',
              },
              {
                icon: Shield,
                title: 'Privacy & Confidence',
                description:
                  'The student can ask questions freely without peers present, building confidence in a safe, judgment-free learning environment.',
                color: 'primary',
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className='border-2 hover:border-primary transition-all hover:shadow-2xl hover:scale-[1.03] group'
              >
                <CardHeader>
                  <div className='flex items-start gap-4'>
                    <div className='h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all'>
                      <advantage.icon className='h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors' />
                    </div>
                    <div>
                      <CardTitle className='text-xl mb-2 group-hover:text-primary transition-colors'>
                        {advantage.title}
                      </CardTitle>
                      <p className='text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors'>
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge
              className='mb-4 hover:scale-105 transition-transform'
              variant='outline'
            >
              Available Programmes
            </Badge>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-balance'>
              Personalised Tuition Across All Levels
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
              From 11+ preparation to A-Level mastery, our expert tutors provide
              bespoke support tailored to your individual needs.
            </p>
          </div>

          <div className='max-w-6xl mx-auto space-y-8'>
            {/* 11Plus Programme */}
            <Card className='overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.01] border-2 hover:border-primary group'>
              <div className='grid lg:grid-cols-2 gap-0'>
                <div className='relative h-64 lg:h-auto'>
                  <img
                    src='/placeholder.svg?height=400&width=600'
                    alt='11Plus Programme'
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center p-8'>
                    <div>
                      <Badge className='mb-3 bg-secondary text-secondary-foreground hover:scale-105 transition-transform'>
                        Ages 8-11
                      </Badge>
                      <h3 className='text-3xl font-bold text-primary-foreground mb-2'>
                        11Plus Programme
                      </h3>
                      <p className='text-primary-foreground/90 text-sm'>
                        A personalised tutor handles all sections
                      </p>
                    </div>
                  </div>
                </div>

                <CardContent className='p-8'>
                  <div className='space-y-6'>
                    <div>
                      <h4 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                        <BookOpen className='h-5 w-5 text-primary' />
                        Subjects Covered:
                      </h4>
                      <div className='grid gap-3'>
                        {[
                          {
                            subject: 'MATHS',
                            topics: 'Problem Solving, Arithmetic and Reasoning',
                            icon: '🔢',
                          },
                          {
                            subject: 'ENGLISH',
                            topics:
                              'Reading, Comprehension, Grammar, Vocabulary, and Writing',
                            icon: '📚',
                          },
                          {
                            subject: 'VERBAL REASONING',
                            topics: 'Logic, Word Patterns, and Sequence',
                            icon: '🧠',
                          },
                          {
                            subject: 'NON-VERBAL REASONING',
                            topics:
                              'Shapes, Spatial Reasoning, Visual Problem-Solving',
                            icon: '🔷',
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className='p-4 bg-muted rounded-lg hover:bg-muted/70 transition-all hover:shadow-md hover:scale-[1.02] group/item'
                          >
                            <div className='flex items-start gap-3'>
                              <span className='text-2xl'>{item.icon}</span>
                              <div>
                                <div className='font-semibold text-primary mb-1 group-hover/item:text-accent transition-colors'>
                                  {item.subject}
                                </div>
                                <div className='text-sm text-muted-foreground group-hover/item:text-foreground transition-colors'>
                                  {item.topics}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className='w-full hover:scale-105 transition-all group/btn shadow-lg'>
                      Apply for 11Plus Tuition
                      <ArrowRight className='ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform' />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* GCSE Programme */}
            <Card className='overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.01] border-2 hover:border-secondary group'>
              <div className='grid lg:grid-cols-2 gap-0'>
                <div className='order-2 lg:order-1'>
                  <CardContent className='p-8'>
                    <div className='space-y-6'>
                      <div>
                        <Badge className='mb-3 bg-secondary text-secondary-foreground hover:scale-105 transition-transform'>
                          Years 10-11
                        </Badge>
                        <h3 className='text-3xl font-bold mb-3 group-hover:text-secondary transition-colors'>
                          GCSE Year Programme
                        </h3>
                        <p className='text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors'>
                          We provide One-on-One tuition{' '}
                          <strong>
                            exclusively for students in Years 10 and 11
                          </strong>
                          . These students are preparing for their GCSE, so our
                          tailored support focuses on strengthening weak areas
                          and tackling the most challenging topics.
                        </p>
                      </div>

                      <div className='bg-accent/10 border border-accent/20 rounded-lg p-5 hover:bg-accent/20 transition-all hover:shadow-lg'>
                        <div className='flex items-start gap-3 mb-3'>
                          <Users className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                          <div>
                            <h4 className='font-semibold text-accent mb-2'>
                              For Years 7, 8, and 9:
                            </h4>
                            <p className='text-sm text-muted-foreground'>
                              We offer{' '}
                              <strong>Group-Based Tuition (GCSE Junior)</strong>{' '}
                              instead of One-on-One sessions for these year
                              groups.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className='bg-primary/5 border border-primary/20 rounded-lg p-5 hover:bg-primary/10 transition-all hover:shadow-lg'>
                        <div className='flex items-start gap-3'>
                          <Sparkles className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
                          <div>
                            <h4 className='font-semibold text-primary mb-2'>
                              Important Note:
                            </h4>
                            <p className='text-sm text-muted-foreground'>
                              Tuition is <strong>subject-based</strong>, meaning
                              students may enrol in one subject at a time. We do
                              not currently offer packages - students pay per
                              subject.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button
                        variant='secondary'
                        className='w-full hover:scale-105 transition-all group/btn shadow-lg'
                      >
                        Apply for GCSE Tuition
                        <ArrowRight className='ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform' />
                      </Button>
                    </div>
                  </CardContent>
                </div>

                <div className='relative h-64 lg:h-auto order-1 lg:order-2'>
                  <img
                    src='/placeholder.svg?height=400&width=600'
                    alt='GCSE Programme'
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-l from-secondary/80 to-transparent' />
                </div>
              </div>
            </Card>

            {/* A-Level Programme */}
            <Card className='overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.01] border-2 hover:border-accent group'>
              <div className='grid lg:grid-cols-2 gap-0'>
                <div className='relative h-64 lg:h-auto'>
                  <img
                    src='/placeholder.svg?height=400&width=600'
                    alt='A-Level Programme'
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-accent/80 to-transparent flex items-center p-8'>
                    <div>
                      <Badge className='mb-3 bg-primary text-primary-foreground hover:scale-105 transition-transform'>
                        Ages 16-18
                      </Badge>
                      <h3 className='text-3xl font-bold text-primary-foreground mb-2'>
                        A LEVEL+ Programme
                      </h3>
                      <p className='text-primary-foreground/90 text-sm'>
                        Hourly tuition for advanced subjects
                      </p>
                    </div>
                  </div>
                </div>

                <CardContent className='p-8'>
                  <div className='space-y-6'>
                    <div>
                      <h4 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                        <GraduationCap className='h-5 w-5 text-accent' />
                        For A LEVELs, we provide hourly tuition for:
                      </h4>
                      <div className='grid md:grid-cols-2 gap-3'>
                        {[
                          { subject: 'Mathematics', icon: '📐' },
                          { subject: 'English Language', icon: '✍️' },
                          { subject: 'English Literature', icon: '📖' },
                          { subject: 'Physics', icon: '⚛️' },
                          { subject: 'Chemistry', icon: '🧪' },
                          { subject: 'Biology', icon: '🧬' },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className='flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/70 transition-all hover:shadow-md hover:scale-[1.02] group/item'
                          >
                            <span className='text-xl'>{item.icon}</span>
                            <span className='font-medium text-sm group-hover/item:text-accent transition-colors'>
                              {item.subject}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className='bg-secondary/10 border border-secondary/30 rounded-lg p-5 hover:bg-secondary/20 transition-all hover:shadow-lg'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Award className='h-5 w-5 text-secondary-foreground' />
                        <h4 className='font-semibold text-secondary-foreground'>
                          Premium Support
                        </h4>
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        A-Level tuition includes university preparation
                        guidance, UCAS support, and advanced study techniques.
                      </p>
                    </div>

                    <Button
                      variant='outline'
                      className='w-full hover:scale-105 transition-all group/btn border-2 shadow-lg bg-transparent'
                    >
                      Apply for A-Level Tuition
                      <ArrowRight className='ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform' />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge
              className='mb-4 hover:scale-105 transition-transform'
              variant='outline'
            >
              Simple Process
            </Badge>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              How One-on-One Tuition Works
            </h2>
          </div>

          <div className='grid md:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {[
              {
                step: '01',
                title: 'Initial Assessment',
                description:
                  'We evaluate your current level and identify specific areas for improvement.',
                icon: Target,
              },
              {
                step: '02',
                title: 'Match with Tutor',
                description:
                  'We pair you with an expert tutor who specialises in your subject and learning style.',
                icon: User,
              },
              {
                step: '03',
                title: 'Customised Plan',
                description:
                  'Your tutor creates a personalised learning plan tailored to your goals and timeline.',
                icon: Calendar,
              },
              {
                step: '04',
                title: 'Regular Sessions',
                description:
                  'Attend flexible one-on-one sessions and track your progress towards exam success.',
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-2xl transition-all hover:scale-[1.05] group border-2 hover:border-primary'
              >
                <CardHeader>
                  <div className='mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all'>
                    <item.icon className='h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors' />
                  </div>
                  <div className='text-4xl font-bold text-primary/20 mb-2 group-hover:text-primary/40 transition-colors'>
                    {item.step}
                  </div>
                  <CardTitle className='text-lg group-hover:text-primary transition-colors'>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <Badge
                  className='mb-4 hover:scale-105 transition-transform'
                  variant='outline'
                >
                  Premium Features
                </Badge>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 text-balance'>
                  What Makes Our One-on-One Tuition Special
                </h2>
                <div className='space-y-4'>
                  {[
                    {
                      icon: Brain,
                      title: 'Expert Subject Specialists',
                      description:
                        'All our tutors are qualified teachers or subject experts with proven track records of student success.',
                    },
                    {
                      icon: Calendar,
                      title: 'Flexible Scheduling',
                      description:
                        'Book sessions at times that suit you, including evenings and weekends, with easy rescheduling options.',
                    },
                    {
                      icon: MessageCircle,
                      title: 'Ongoing Communication',
                      description:
                        'Regular progress updates and direct communication with your tutor between sessions via our platform.',
                    },
                    {
                      icon: Award,
                      title: 'Exam-Focused Approach',
                      description:
                        'Strategic preparation targeting exam boards, mark schemes, and proven techniques for maximising grades.',
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className='flex gap-4 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-all hover:shadow-lg hover:scale-[1.02] group border border-transparent hover:border-primary/20'
                    >
                      <div className='flex-shrink-0'>
                        <div className='h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all'>
                          <feature.icon className='h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors' />
                        </div>
                      </div>
                      <div>
                        <h3 className='font-semibold mb-1 group-hover:text-primary transition-colors'>
                          {feature.title}
                        </h3>
                        <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                          {feature.description}
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
                    alt='One-on-One Features'
                    className='w-full h-full object-cover transition-transform group-hover:scale-110 duration-500'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-24 bg-gradient-to-br from-accent via-primary to-secondary text-primary-foreground relative overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 left-10 h-72 w-72 bg-secondary/20 rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-20 right-10 h-96 w-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700' />
        </div>
        <div className='container mx-auto px-4 md:px-6 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
              Ready for Personalised Learning Excellence?
            </h2>
            <p className='text-lg text-primary-foreground/90 mb-8 text-pretty'>
              Book your first one-on-one session today and experience the
              difference that personalised attention can make to your academic
              success.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                variant='secondary'
                className='hover:scale-105 transition-all shadow-xl group'
              >
                Book Your First Session
                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-xl'
              >
                Speak to an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
