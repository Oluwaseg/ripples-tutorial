import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
} from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground py-24 md:py-40 overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 left-10 h-72 w-72 bg-secondary/20 rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-20 right-10 h-96 w-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700' />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary-foreground/5 rounded-full blur-3xl' />
        </div>

        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1200&width=2000')] bg-cover bg-center opacity-5" />

        <div className='container mx-auto px-4 md:px-6 relative z-10'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-12'>
              <Badge className='mb-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all hover:scale-105 px-6 py-2 text-sm font-medium shadow-lg'>
                <Sparkles className='h-4 w-4 mr-2 inline' />
                Admissions Open for 2025/26 Academic Year
              </Badge>
              <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-tight tracking-tight'>
                Begin Your Journey to
                <span className='block text-secondary mt-2'>
                  Academic Excellence
                </span>
              </h1>
              <p className='text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed'>
                Join hundreds of successful students who have achieved
                outstanding results through our structured, comprehensive
                tutorial programmes across 11+, GCSE, and A-Level
                qualifications.
              </p>
              <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                <Button
                  size='lg'
                  variant='secondary'
                  className='text-lg px-8 py-6 h-auto hover:scale-105 transition-all shadow-xl hover:shadow-2xl group'
                >
                  Start Your Application
                  <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='text-lg px-8 py-6 h-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-xl'
                >
                  Download Prospectus
                </Button>
              </div>
            </div>

            {/* Quick stats in hero */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16'>
              {[
                { value: '98%', label: 'Success Rate', icon: Award },
                { value: '500+', label: 'Students Enrolled', icon: Users },
                {
                  value: '15+',
                  label: 'Years Experience',
                  icon: GraduationCap,
                },
                { value: 'A*-B', label: 'Average Grade', icon: TrendingUp },
              ].map((stat, index) => (
                <div
                  key={index}
                  className='text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all hover:scale-105 hover:shadow-xl group'
                >
                  <stat.icon className='h-10 w-10 mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform' />
                  <div className='text-4xl md:text-5xl font-bold text-secondary mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-primary-foreground/80 font-medium'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className='py-12 bg-muted/50 border-b'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
            {[
              { value: '98%', label: 'Success Rate', icon: Award },
              { value: '500+', label: 'Students Enrolled', icon: Users },
              { value: '15+', label: 'Years Experience', icon: GraduationCap },
              { value: 'A*-B', label: 'Average Grade', icon: TrendingUp },
            ].map((stat, index) => (
              <div key={index} className='text-center'>
                <stat.icon className='h-8 w-8 mx-auto mb-3 text-primary' />
                <div className='text-3xl md:text-4xl font-bold text-primary mb-1'>
                  {stat.value}
                </div>
                <div className='text-sm text-muted-foreground'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4 Stages Process */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12 md:mb-16'>
            <Badge
              className='mb-4 hover:scale-105 transition-transform'
              variant='outline'
            >
              Our Admissions Process
            </Badge>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-balance'>
              Four Simple Steps to Success
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
              Our streamlined admissions process ensures every student receives
              personalised attention and is placed in the most suitable
              programme for their academic goals.
            </p>
          </div>

          <div className='max-w-5xl mx-auto'>
            {/* Stage 1 */}
            <div className='relative mb-12 md:mb-16 group'>
              <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div className='order-2 md:order-1'>
                  <div className='relative h-64 md:h-80 rounded-2xl overflow-hidden bg-muted hover:shadow-2xl transition-all group-hover:scale-[1.02]'>
                    <img
                      src='/placeholder.svg?height=400&width=600'
                      alt='Show Interest'
                      className='w-full h-full object-cover transition-transform group-hover:scale-110 duration-500'
                    />
                  </div>
                </div>
                <div className='order-1 md:order-2'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform'>
                      01
                    </div>
                    <div>
                      <Badge className='mb-2 bg-accent text-accent-foreground hover:scale-105 transition-transform'>
                        Stage One
                      </Badge>
                      <h3 className='text-2xl md:text-3xl font-bold'>
                        Show Interest
                      </h3>
                    </div>
                  </div>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>
                    Students must first express their interest in our
                    programmes, as we are often managing a large waiting list.
                    This requirement applies to both{' '}
                    <strong>Group-Based Tuition</strong> and{' '}
                    <strong>One-on-One Tuition</strong>.
                  </p>
                  <p className='text-muted-foreground leading-relaxed'>
                    To show interest, simply visit our <strong>SAMPLE</strong>{' '}
                    page and complete the brief enquiry form. This helps us
                    understand your educational needs and academic aspirations.
                  </p>
                  <Button
                    className='mt-6 hover:scale-105 transition-all group bg-transparent'
                    variant='outline'
                  >
                    Express Interest Now
                    <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className='hidden md:block w-1 h-12 bg-border mx-auto mb-12' />

            {/* Stage 2 */}
            <div className='relative mb-12 md:mb-16 group'>
              <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform'>
                      02
                    </div>
                    <div>
                      <Badge className='mb-2 bg-accent text-accent-foreground hover:scale-105 transition-transform'>
                        Stage Two
                      </Badge>
                      <h3 className='text-2xl md:text-3xl font-bold'>
                        Student Registration
                      </h3>
                    </div>
                  </div>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>
                    As soon as a vacancy arises, those who previously expressed
                    interest will be contacted to register as students. This
                    ensures fair allocation of places based on enquiry date.
                  </p>
                  <p className='text-muted-foreground leading-relaxed'>
                    During registration, we collect essential information about
                    the student's current academic level, subjects of interest,
                    preferred learning style, and any specific educational
                    requirements or learning support needs.
                  </p>
                  <div className='mt-6 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors hover:shadow-lg'>
                    <p className='text-sm font-medium mb-2'>
                      What You'll Need:
                    </p>
                    <ul className='text-sm text-muted-foreground space-y-1'>
                      <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                        <CheckCircle2 className='h-4 w-4 text-accent' />
                        Recent school reports or academic records
                      </li>
                      <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                        <CheckCircle2 className='h-4 w-4 text-accent' />
                        Identification documents
                      </li>
                      <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                        <CheckCircle2 className='h-4 w-4 text-accent' />
                        Emergency contact information
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className='relative h-64 md:h-80 rounded-2xl overflow-hidden bg-muted hover:shadow-2xl transition-all group-hover:scale-[1.02]'>
                    <img
                      src='/placeholder.svg?height=400&width=600'
                      alt='Student Registration'
                      className='w-full h-full object-cover transition-transform group-hover:scale-110 duration-500'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className='hidden md:block w-1 h-12 bg-border mx-auto mb-12' />

            {/* Stage 3 */}
            <div className='relative mb-12 md:mb-16 group'>
              <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div className='order-2 md:order-1'>
                  <div className='relative h-64 md:h-80 rounded-2xl overflow-hidden bg-muted hover:shadow-2xl transition-all group-hover:scale-[1.02]'>
                    <img
                      src='/placeholder.svg?height=400&width=600'
                      alt='Student Induction'
                      className='w-full h-full object-cover transition-transform group-hover:scale-110 duration-500'
                    />
                  </div>
                </div>
                <div className='order-1 md:order-2'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform'>
                      03
                    </div>
                    <div>
                      <Badge className='mb-2 bg-accent text-accent-foreground hover:scale-105 transition-transform'>
                        Stage Three
                      </Badge>
                      <h3 className='text-2xl md:text-3xl font-bold'>
                        Student Induction
                      </h3>
                    </div>
                  </div>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>
                    At this stage, the registered student is provided with a{' '}
                    <strong>Student Username</strong> but cannot yet complete
                    the Student Induction process independently.
                  </p>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>
                    During the induction, the prospective student is introduced
                    to the expectations and responsibilities of becoming a
                    member of our academic community. A short assessment and
                    interview are also conducted to gauge current ability levels
                    and learning preferences.
                  </p>
                  <p className='text-muted-foreground leading-relaxed'>
                    <strong>Important:</strong> Failure to attend the assessment
                    will result in the admission being declined, as we need to
                    ensure proper placement and programme suitability for every
                    student.
                  </p>
                  <div className='mt-6 flex flex-wrap gap-3'>
                    <Badge
                      variant='secondary'
                      className='text-sm hover:scale-105 transition-transform'
                    >
                      <Clock className='h-3 w-3 mr-1' />
                      Duration: 60-90 minutes
                    </Badge>
                    <Badge
                      variant='secondary'
                      className='text-sm hover:scale-105 transition-transform'
                    >
                      <Users className='h-3 w-3 mr-1' />
                      One-on-one session
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className='hidden md:block w-1 h-12 bg-border mx-auto mb-12' />

            {/* Stage 4 */}
            <div className='relative group'>
              <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform'>
                      04
                    </div>
                    <div>
                      <Badge className='mb-2 bg-secondary text-secondary-foreground hover:scale-105 transition-transform'>
                        Final Stage
                      </Badge>
                      <h3 className='text-2xl md:text-3xl font-bold'>
                        Student Admission
                      </h3>
                    </div>
                  </div>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>
                    At this final stage, tuition fees are paid, login
                    credentials are provided, and academic activities formally
                    commence. Welcome to our learning community!
                  </p>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>
                    Students gain full access to our comprehensive learning
                    platform, including video lessons, online assessments,
                    PowerPoint presentations, and PDF worksheets. All course
                    materials have been tested and refined over the past few
                    years.
                  </p>
                  <div className='bg-accent/10 border border-accent/20 rounded-lg p-6 mt-6 hover:bg-accent/20 transition-all hover:shadow-lg'>
                    <h4 className='font-semibold text-accent mb-3 flex items-center gap-2'>
                      <Award className='h-5 w-5' />
                      What's Included:
                    </h4>
                    <ul className='space-y-2 text-sm text-muted-foreground'>
                      <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                        <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                        <span>
                          Full access to digital learning platform (24/7)
                        </span>
                      </li>
                      <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                        <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                        <span>
                          Comprehensive video lessons for all subjects
                        </span>
                      </li>
                      <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                        <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                        <span>
                          Regular online assessments with instant feedback
                        </span>
                      </li>
                      <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                        <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                        <span>
                          Downloadable resources (PowerPoints, worksheets, past
                          papers)
                        </span>
                      </li>
                      <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                        <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                        <span>Progress tracking and performance analytics</span>
                      </li>
                      <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                        <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                        <span>Direct tutor support via messaging system</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className='relative h-64 md:h-80 rounded-2xl overflow-hidden bg-muted hover:shadow-2xl transition-all group-hover:scale-[1.02]'>
                    <img
                      src='/placeholder.svg?height=400&width=600'
                      alt='Student Admission'
                      className='w-full h-full object-cover transition-transform group-hover:scale-110 duration-500'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Types Section */}
      <section className='py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12 md:mb-16'>
            <Badge
              className='mb-4 hover:scale-105 transition-transform'
              variant='outline'
            >
              Choose Your Learning Style
            </Badge>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-balance'>
              Three Flexible Tuition Options
            </h2>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto text-pretty'>
              Whether you prefer independent study, collaborative group
              learning, or personalised one-on-one attention, we have the
              perfect programme to match your learning style and academic goals.
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            {/* Self-Tuition */}
            <Card className='relative overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-2 hover:border-primary group'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500' />
              <CardHeader className='relative'>
                <div className='h-48 -mx-6 -mt-6 mb-6 relative overflow-hidden rounded-t-lg'>
                  <img
                    src='/placeholder.svg?height=300&width=400'
                    alt='Self-Tuition'
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
                  <Badge className='absolute bottom-4 left-4 bg-primary text-primary-foreground hover:scale-105 transition-transform'>
                    Most Flexible
                  </Badge>
                </div>
                <CardTitle className='text-2xl flex items-center gap-2'>
                  <BookOpen className='h-6 w-6 text-primary' />
                  Self-Tuition
                </CardTitle>
                <p className='text-muted-foreground text-sm'>
                  Independent learning at your own pace with comprehensive
                  digital resources
                </p>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div>
                  <h4 className='font-semibold mb-3 flex items-center gap-2'>
                    <Sparkles className='h-4 w-4 text-accent' />
                    Perfect For:
                  </h4>
                  <ul className='space-y-2 text-sm text-muted-foreground'>
                    <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                      <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                      <span>
                        Self-motivated students who prefer independent study
                      </span>
                    </li>
                    <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                      <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                      <span>
                        Those seeking flexible, study-anywhere convenience
                      </span>
                    </li>
                    <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                      <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                      <span>
                        Students balancing studies with hobbies or
                        responsibilities
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='border-t pt-4'>
                  <h4 className='font-semibold mb-3 flex items-center gap-2'>
                    <Award className='h-4 w-4 text-primary' />
                    Included Resources:
                  </h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {[
                      { icon: '📹', label: 'Recorded Videos' },
                      { icon: '📄', label: 'PDF Worksheets' },
                      { icon: '📊', label: 'PowerPoint Slides' },
                      { icon: '🎓', label: 'Online LMS' },
                      { icon: '✅', label: 'Self-Assessments' },
                      { icon: '📚', label: 'Study Guides' },
                    ].map((resource, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs p-2 rounded-lg bg-muted hover:bg-muted/70 transition-all hover:scale-105 hover:shadow-md'
                      >
                        <span className='text-base'>{resource.icon}</span>
                        <span className='text-muted-foreground hover:text-foreground transition-colors'>
                          {resource.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='bg-accent/10 border border-accent/20 rounded-lg p-4 hover:bg-accent/20 transition-all'>
                  <p className='text-sm font-medium text-accent mb-2'>
                    Key Features:
                  </p>
                  <ul className='space-y-1 text-xs text-muted-foreground'>
                    <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                      <Clock className='h-3 w-3 text-accent' />
                      24/7 access to all materials
                    </li>
                    <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                      <TrendingUp className='h-3 w-3 text-accent' />
                      Progress tracking dashboard
                    </li>
                    <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                      <Users className='h-3 w-3 text-accent' />
                      Email tutor support
                    </li>
                  </ul>
                </div>

                <Button
                  className='w-full hover:scale-105 transition-all group bg-transparent'
                  variant='outline'
                >
                  Learn More About Self-Tuition
                  <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </Button>
              </CardContent>
            </Card>

            {/* Group-Based Tuition */}
            <Card className='relative overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-2 hover:border-secondary group lg:scale-105'>
              <div className='absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary via-accent to-secondary' />
              <Badge className='absolute top-4 right-4 bg-secondary text-secondary-foreground z-10 hover:scale-110 transition-transform shadow-lg'>
                Most Popular
              </Badge>
              <div className='absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500' />
              <CardHeader className='relative'>
                <div className='h-48 -mx-6 -mt-6 mb-6 relative overflow-hidden rounded-t-lg'>
                  <img
                    src='/placeholder.svg?height=300&width=400'
                    alt='Group-Based Tuition'
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
                </div>
                <CardTitle className='text-2xl flex items-center gap-2'>
                  <Users className='h-6 w-6 text-secondary' />
                  Group-Based Tuition
                </CardTitle>
                <p className='text-muted-foreground text-sm'>
                  Interactive live classes with peers and expert tutors
                </p>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div>
                  <h4 className='font-semibold mb-3 flex items-center gap-2'>
                    <Sparkles className='h-4 w-4 text-accent' />
                    Perfect For:
                  </h4>
                  <ul className='space-y-2 text-sm text-muted-foreground'>
                    <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                      <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                      <span>
                        Students who thrive in collaborative environments
                      </span>
                    </li>
                    <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                      <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                      <span>Those who enjoy peer learning and discussion</span>
                    </li>
                    <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                      <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                      <span>
                        Learners seeking structured, scheduled sessions
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='border-t pt-4'>
                  <h4 className='font-semibold mb-3 flex items-center gap-2'>
                    <Award className='h-4 w-4 text-secondary' />
                    Included Resources:
                  </h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {[
                      { icon: '💻', label: 'Live Zoom Classes' },
                      { icon: '📓', label: 'Notebook Tasks' },
                      { icon: '✅', label: 'Online Assessments' },
                      { icon: '📊', label: 'PowerPoint Slides' },
                      { icon: '📹', label: 'Recorded Videos' },
                      { icon: '🌐', label: 'Student Portal' },
                      { icon: '📈', label: 'Progress History' },
                      { icon: '👨‍👩‍👧', label: 'Parent Updates' },
                      { icon: '📝', label: 'Class Notes' },
                      { icon: '🗂️', label: 'Archived Work' },
                    ].map((resource, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs p-2 rounded-lg bg-muted hover:bg-muted/70 transition-all hover:scale-105 hover:shadow-md'
                      >
                        <span className='text-base'>{resource.icon}</span>
                        <span className='text-muted-foreground hover:text-foreground transition-colors'>
                          {resource.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='bg-secondary/10 border border-secondary/20 rounded-lg p-4 hover:bg-secondary/20 transition-all'>
                  <p className='text-sm font-medium text-secondary mb-2'>
                    Key Features:
                  </p>
                  <ul className='space-y-1 text-xs text-muted-foreground'>
                    <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                      <Clock className='h-3 w-3 text-secondary' />
                      Weekly scheduled sessions
                    </li>
                    <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                      <TrendingUp className='h-3 w-3 text-secondary' />
                      Small class sizes (max 8 students)
                    </li>
                    <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                      <Users className='h-3 w-3 text-secondary' />
                      Interactive Q&A sessions
                    </li>
                  </ul>
                </div>

                <Button className='w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all group shadow-lg'>
                  Enrol in Group Tuition
                  <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </Button>
              </CardContent>
            </Card>

            {/* One-on-One Tuition */}
            <Card className='relative overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-2 hover:border-accent group'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500' />
              <CardHeader className='relative'>
                <div className='h-48 -mx-6 -mt-6 mb-6 relative overflow-hidden rounded-t-lg'>
                  <img
                    src='/placeholder.svg?height=300&width=400'
                    alt='One-on-One Tuition'
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
                  <Badge className='absolute bottom-4 left-4 bg-accent text-accent-foreground hover:scale-105 transition-transform'>
                    Premium
                  </Badge>
                </div>
                <CardTitle className='text-2xl flex items-center gap-2'>
                  <GraduationCap className='h-6 w-6 text-accent' />
                  One-on-One Tuition
                </CardTitle>
                <p className='text-muted-foreground text-sm'>
                  Personalised private tutoring tailored to your unique needs
                </p>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div>
                  <h4 className='font-semibold mb-3 flex items-center gap-2'>
                    <Sparkles className='h-4 w-4 text-accent' />
                    Perfect For:
                  </h4>
                  <ul className='space-y-2 text-sm text-muted-foreground'>
                    <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                      <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                      <span>
                        Students requiring personalised attention and pacing
                      </span>
                    </li>
                    <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                      <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                      <span>
                        Those with specific learning needs or exam preparation
                      </span>
                    </li>
                    <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                      <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                      <span>
                        Learners seeking maximum flexibility and customisation
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='border-t pt-4'>
                  <h4 className='font-semibold mb-3 flex items-center gap-2'>
                    <Award className='h-4 w-4 text-accent' />
                    Included Resources:
                  </h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {[
                      { icon: '💻', label: 'Private Zoom Sessions' },
                      { icon: '✅', label: 'Online Assessments' },
                      { icon: '📊', label: 'Custom Materials' },
                      { icon: '📝', label: 'Personalised Notes' },
                      { icon: '🌐', label: 'Student Portal' },
                      { icon: '📈', label: 'Progress Tracking' },
                      { icon: '👨‍👩‍👧', label: 'Parent Updates' },
                      { icon: '🗂️', label: 'Archived Sessions' },
                    ].map((resource, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs p-2 rounded-lg bg-muted hover:bg-muted/70 transition-all hover:scale-105 hover:shadow-md'
                      >
                        <span className='text-base'>{resource.icon}</span>
                        <span className='text-muted-foreground hover:text-foreground transition-colors'>
                          {resource.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='bg-accent/10 border border-accent/20 rounded-lg p-4 hover:bg-accent/20 transition-all'>
                  <p className='text-sm font-medium text-accent mb-2'>
                    Key Features:
                  </p>
                  <ul className='space-y-1 text-xs text-muted-foreground'>
                    <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                      <Clock className='h-3 w-3 text-accent' />
                      Flexible scheduling
                    </li>
                    <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                      <TrendingUp className='h-3 w-3 text-accent' />
                      Customised lesson plans
                    </li>
                    <li className='flex items-center gap-2 hover:text-foreground transition-colors'>
                      <Users className='h-3 w-3 text-accent' />
                      Dedicated tutor relationship
                    </li>
                  </ul>
                </div>

                <Button className='w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all group shadow-lg'>
                  Book Private Tuition
                  <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className='mt-16 max-w-5xl mx-auto'>
            <h3 className='text-2xl font-bold text-center mb-8'>
              Quick Comparison
            </h3>
            <div className='overflow-x-auto'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='border-b-2'>
                    <th className='text-left p-4 font-semibold'>Feature</th>
                    <th className='text-center p-4 font-semibold'>
                      Self-Tuition
                    </th>
                    <th className='text-center p-4 font-semibold bg-secondary/5'>
                      Group-Based
                    </th>
                    <th className='text-center p-4 font-semibold'>
                      One-on-One
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: 'Live Classes',
                      self: false,
                      group: true,
                      oneOnOne: true,
                    },
                    {
                      feature: 'Flexible Schedule',
                      self: true,
                      group: false,
                      oneOnOne: true,
                    },
                    {
                      feature: 'Peer Interaction',
                      self: false,
                      group: true,
                      oneOnOne: false,
                    },
                    {
                      feature: 'Personalised Pace',
                      self: true,
                      group: false,
                      oneOnOne: true,
                    },
                    {
                      feature: 'Recorded Content',
                      self: true,
                      group: true,
                      oneOnOne: true,
                    },
                    {
                      feature: 'Direct Tutor Support',
                      self: false,
                      group: true,
                      oneOnOne: true,
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className='border-b hover:bg-muted/50 transition-colors'
                    >
                      <td className='p-4 font-medium'>{row.feature}</td>
                      <td className='text-center p-4'>
                        {row.self ? (
                          <CheckCircle2 className='h-5 w-5 text-primary mx-auto' />
                        ) : (
                          <span className='text-muted-foreground'>—</span>
                        )}
                      </td>
                      <td className='text-center p-4 bg-secondary/5'>
                        {row.group ? (
                          <CheckCircle2 className='h-5 w-5 text-secondary mx-auto' />
                        ) : (
                          <span className='text-muted-foreground'>—</span>
                        )}
                      </td>
                      <td className='text-center p-4'>
                        {row.oneOnOne ? (
                          <CheckCircle2 className='h-5 w-5 text-accent mx-auto' />
                        ) : (
                          <span className='text-muted-foreground'>—</span>
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
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Entry Requirements
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              We welcome students of all abilities and tailor our programmes to
              individual needs
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
            <Card className='hover:shadow-xl transition-all hover:scale-[1.02] hover:border-primary'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <BookOpen className='h-5 w-5 text-primary' />
                  11+ Programme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Ages 8-11 years old</span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Basic literacy and numeracy skills</span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Commitment to regular attendance</span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Parental support for homework</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='hover:shadow-xl transition-all hover:scale-[1.02] hover:border-primary'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <GraduationCap className='h-5 w-5 text-primary' />
                  GCSE Programme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Ages 14-16 years old</span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Key Stage 3 completion or equivalent</span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Strong motivation to succeed</span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Willingness to complete coursework</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='hover:shadow-xl transition-all hover:scale-[1.02] hover:border-primary'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Award className='h-5 w-5 text-primary' />
                  A-Level Programme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Ages 16-18 years old</span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Minimum 5 GCSEs at grade 4/C or above</span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Grade 6 in chosen A-Level subjects</span>
                  </li>
                  <li className='flex items-start gap-2 hover:text-foreground transition-colors'>
                    <CheckCircle2 className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
                    <span>Independent study skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden'>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5" />
        <div className='container mx-auto px-4 md:px-6 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
              Ready to Start Your Application?
            </h2>
            <p className='text-lg text-primary-foreground/90 mb-8 text-pretty'>
              Don't miss out on securing your place for the upcoming academic
              year. Our programmes fill up quickly, so express your interest
              today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                variant='secondary'
                className='hover:scale-105 transition-all shadow-xl group'
              >
                Begin Application Process
                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 shadow-xl group'
              >
                <Phone className='mr-2 h-5 w-5 group-hover:rotate-12 transition-transform' />
                Speak to Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-12 border-t'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            <div className='text-center group hover:scale-105 transition-transform'>
              <div className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110'>
                <Phone className='h-6 w-6' />
              </div>
              <h3 className='font-semibold mb-2'>Call Us</h3>
              <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                +44 (0) 20 1234 5678
              </p>
              <p className='text-xs text-muted-foreground mt-1'>
                Mon-Fri, 9am-6pm
              </p>
            </div>
            <div className='text-center group hover:scale-105 transition-transform'>
              <div className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110'>
                <Mail className='h-6 w-6' />
              </div>
              <h3 className='font-semibold mb-2'>Email Us</h3>
              <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                admissions@tutorial.co.uk
              </p>
              <p className='text-xs text-muted-foreground mt-1'>
                Response within 24 hours
              </p>
            </div>
            <div className='text-center group hover:scale-105 transition-transform'>
              <div className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110'>
                <MapPin className='h-6 w-6' />
              </div>
              <h3 className='font-semibold mb-2'>Visit Us</h3>
              <p className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                123 Education Street
              </p>
              <p className='text-xs text-muted-foreground mt-1'>London, UK</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
