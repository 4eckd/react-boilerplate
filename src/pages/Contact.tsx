import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Github, Twitter } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: 'Email',
    description: 'Send us an email and we\'ll respond within 24 hours.',
    contact: 'contact@fusedgaming.com',
    href: 'mailto:contact@fusedgaming.com',
  },
  {
    icon: <Github className="h-6 w-6 text-primary" />,
    title: 'GitHub',
    description: 'Report issues or contribute to the project.',
    contact: 'github.com/fusedgaming',
    href: 'https://github.com/fusedgaming',
  },
  {
    icon: <Twitter className="h-6 w-6 text-primary" />,
    title: 'Twitter',
    description: 'Follow us for updates and announcements.',
    contact: '@fusedgaming',
    href: 'https://twitter.com/fusedgaming',
  },
];

export const Contact: React.FC = () => {
  const handleFormSubmit = async (data: any) => {
    // Implement your form submission logic here
    // This could integrate with services like Formspree, Netlify Forms, etc.
    console.log('Form submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo purposes, we'll just log the data
    // In a real application, you would send this to your backend or form service
  };

  return (
    <PageLayout
      title="Get in Touch"
      description="Have questions about the boilerplate? We'd love to hear from you."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm
            onSubmit={handleFormSubmit}
            title="Send us a Message"
            description="Fill out the form below and we'll get back to you as soon as possible."
          />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Contact Methods */}
          <SectionLayout
            title="Other Ways to Reach Us"
            description="Choose the method that works best for you"
          >
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Card hover clickable>
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            {method.icon}
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-semibold text-foreground">
                              {method.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                            <p className="text-sm text-primary font-medium">
                              {method.contact}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </SectionLayout>

          {/* FAQ Section */}
          <SectionLayout
            title="Frequently Asked Questions"
            description="Quick answers to common questions"
          >
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    How do I get started with the boilerplate?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Clone the repository, install dependencies with npm install, 
                    and run npm run dev to start the development server.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Can I customize the theme colors?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! The boilerplate includes 5 built-in themes and you can 
                    easily customize colors in the theme configuration files.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Is this suitable for production use?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! The boilerplate includes production-ready configurations 
                    for building, testing, and deploying your application.
                  </p>
                </div>
              </CardContent>
            </Card>
          </SectionLayout>

          {/* Support Notice */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Community Support
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Join our community discussions on GitHub for peer support, 
                feature requests, and to share your projects built with this boilerplate.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Contact;
