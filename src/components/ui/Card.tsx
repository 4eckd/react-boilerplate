import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  clickable?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const cardVariants = {
  default: 'bg-card border border-border',
  elevated: 'bg-card shadow-lg border border-border/50',
  outlined: 'bg-transparent border-2 border-border',
};

const cardPadding = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  hover = false,
  clickable = false,
  children,
  className,
  ...props
}) => {
  const MotionComponent = clickable ? motion.div : 'div';
  
  return (
    <MotionComponent
      whileHover={
        hover || clickable
          ? { scale: 1.02, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }
          : {}
      }
      whileTap={clickable ? { scale: 0.98 } : {}}
      className={clsx(
        // Base styles
        'rounded-lg transition-all duration-200',

        // Variant styles
        cardVariants[variant],

        // Padding
        cardPadding[padding],

        // Interactive styles
        clickable && 'cursor-pointer',

        className
      )}
      {...(props as any)}
    >
      {children}
    </MotionComponent>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'flex items-start justify-between space-y-1.5',
        className
      )}
      {...props}
    >
      <div className="space-y-1">
        {title && (
          <h3 className="text-lg font-semibold leading-none tracking-tight text-card-foreground">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-sm text-muted-foreground">
            {subtitle}
          </p>
        )}
        {children}
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx('text-card-foreground', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between pt-4 text-card-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
