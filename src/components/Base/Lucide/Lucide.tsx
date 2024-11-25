import React from 'react';
import * as lucideIcons from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface LucideProps extends React.SVGAttributes<SVGElement> {
  icon: keyof typeof lucideIcons;
  title?: string;
}

const Lucide: React.FC<LucideProps> = ({ icon, className, ...rest }) => {
  const IconComponent = lucideIcons[icon] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  const computedClass = twMerge('stroke-[1] w-5 h-5', className);

  return <IconComponent className={computedClass} {...rest} />;
};

export default Lucide;