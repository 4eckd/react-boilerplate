import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Sun, Moon, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { useTheme } from '@/context/ThemeContext';

export const ThemeDemo: React.FC = () => {
  const { themeConfig } = useTheme();

  return (
    <PageLayout
      title="Theme Showcase"
      description="Experience all 5 beautiful themes with interactive components"
    >
      {/* Theme Controls */}
      <SectionLayout
        title="Theme Controls"
        description="Switch between themes to see the changes in real-time"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader title="Dropdown Theme Selector" />
            <CardContent>
              <ThemeToggle variant="dropdown" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader title="Button Theme Cycler" />
            <CardContent>
              <ThemeToggle variant="button" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader title="Compact Theme Picker" />
            <CardContent>
              <ThemeToggle variant="compact" />
            </CardContent>
          </Card>
        </div>
      </SectionLayout>

      {/* Current Theme Info */}
      <SectionLayout
        title="Current Theme"
        description="Information about the currently active theme"
      >
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {themeConfig.name} Theme
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Variant:</span>
                    <span className="text-foreground">{themeConfig.variant}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-foreground">
                      {themeConfig.isDark ? 'Dark' : 'Light'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-foreground mb-3">
                  Color Palette
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded bg-primary border border-border"></div>
                    <span className="text-xs text-muted-foreground">Primary</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded bg-secondary border border-border"></div>
                    <span className="text-xs text-muted-foreground">Secondary</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded bg-accent border border-border"></div>
                    <span className="text-xs text-muted-foreground">Accent</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded bg-muted border border-border"></div>
                    <span className="text-xs text-muted-foreground">Muted</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </SectionLayout>

      {/* Component Showcase */}
      <SectionLayout
        title="Component Showcase"
        description="See how different components look with the current theme"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buttons */}
          <Card>
            <CardHeader title="Buttons" />
            <CardContent className="space-y-3">
              <Button variant="primary" fullWidth>
                Primary Button
              </Button>
              <Button variant="secondary" fullWidth>
                Secondary Button
              </Button>
              <Button variant="outline" fullWidth>
                Outline Button
              </Button>
              <Button variant="ghost" fullWidth>
                Ghost Button
              </Button>
            </CardContent>
          </Card>

          {/* Inputs */}
          <Card>
            <CardHeader title="Form Elements" />
            <CardContent className="space-y-4">
              <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <Input
                label="Password"
                placeholder="Enter password"
                type="password"
              />
              <Button variant="primary" fullWidth>
                Submit
              </Button>
            </CardContent>
          </Card>

          {/* Icons & States */}
          <Card>
            <CardHeader title="Icons & States" />
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Sun className="h-5 w-5 text-primary" />
                <span className="text-foreground">Primary Icon</span>
              </div>
              <div className="flex items-center gap-3">
                <Moon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Muted Icon</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-destructive" />
                <span className="text-destructive">Destructive Icon</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-accent-foreground" />
                <span className="text-accent-foreground">Accent Icon</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionLayout>

      {/* Animated Cards */}
      <SectionLayout
        title="Animated Elements"
        description="Components with hover effects and animations"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hover clickable>
                <CardContent className="p-6 text-center">
                  <Palette className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Card {index}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Hover to see the animation effect
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default ThemeDemo;
