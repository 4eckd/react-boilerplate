import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';

const values = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Community First',
    description: 'We believe in building tools that bring developers together and foster collaboration.',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Quality Focus',
    description: 'Every component and feature is crafted with attention to detail and best practices.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Excellence',
    description: 'We strive for excellence in code quality, performance, and developer experience.',
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Passion Driven',
    description: 'Built by developers who are passionate about creating amazing web experiences.',
  },
];

export const About: React.FC = () => {
  return (
    <PageLayout
      title="About FUSED GAMING"
      description="Learn more about our mission, values, and the team behind this boilerplate."
    >
      {/* Mission Section */}
      <SectionLayout
        title="Our Mission"
        description="Empowering developers to build exceptional web applications"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At FUSED GAMING, we're passionate about creating tools and resources that 
                help developers build amazing web applications. Our React TypeScript boilerplate 
                is designed to eliminate the tedious setup process and let you focus on what 
                matters most - creating great user experiences.
              </p>
              <br />
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that good developer tools should be accessible, well-documented, 
                and built with modern best practices. That's why we've created this comprehensive 
                boilerplate with everything you need to get started quickly and scale effectively.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Values Section */}
      <SectionLayout
        title="Our Values"
        description="The principles that guide everything we do"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Technology Section */}
      <SectionLayout
        title="Technology Stack"
        description="Built with modern tools and best practices"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Frontend Technologies
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• React 18 with modern hooks and patterns</li>
                    <li>• TypeScript for type safety and better DX</li>
                    <li>• Tailwind CSS for utility-first styling</li>
                    <li>• Framer Motion for smooth animations</li>
                    <li>• React Router for client-side routing</li>
                    <li>• Lucide React for beautiful icons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Development Tools
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Vite for lightning-fast development</li>
                    <li>• Vitest for comprehensive testing</li>
                    <li>• ESLint and Prettier for code quality</li>
                    <li>• React Hook Form with Zod validation</li>
                    <li>• GitHub Actions for CI/CD</li>
                    <li>• Vercel-ready deployment configuration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Team Section */}
      <SectionLayout
        title="Built by Its Different Productions"
        description="A team dedicated to creating exceptional developer experiences"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">
                  Its Different Productions
                </h4>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're a team of passionate developers and designers who believe in 
                  creating tools that make a difference. Our goal is to help developers 
                  build better applications faster, with less friction and more joy.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default About;
