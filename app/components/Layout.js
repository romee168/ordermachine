import Navbar from './Navbar';
import Footer from './Footer';
import { theme } from '../styles/theme';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function Section({ children, className = '' }) {
  return (
    <section className={`${theme.spacing.section} ${className}`}>
      <div className={theme.spacing.container}>
        {children}
      </div>
    </section>
  );
}

export function Hero({ title, subtitle, children, className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <h1 className={`${theme.typography.h1} mb-6 animate-fadeIn`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`${theme.typography.body} max-w-xl mb-8 animate-slideUp`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
}

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const buttonClasses = `${theme.buttons[variant]} ${className}`;
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
} 