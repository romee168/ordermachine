import Layout, { Section, Hero, Card, Button } from '../components/Layout';
import { theme } from '../styles/theme';

export default function About() {
  return (
    <Layout>
      <Hero
        title="About OrderMachine"
        subtitle="Revolutionizing restaurant ordering since 2020"
        className="py-20"
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className={theme.typography.h2}>Our Story</h2>
            <p className={`${theme.typography.body} mt-4`}>
              Founded in 2020, OrderMachine emerged from a simple observation: the restaurant industry needed a better way to handle orders. Our team of industry veterans and tech innovators came together to create a solution that would transform how restaurants operate.
            </p>
            <p className={`${theme.typography.body} mt-4`}>
              Today, we're proud to serve 70% Reduce Labor Costs, helping them streamline their operations and deliver exceptional customer experiences.
            </p>
            <div className="mt-8">
              <Button>Join Our Team</Button>
            </div>
          </div>
          <div className="relative h-96 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              alt="Restaurant interior"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className={theme.typography.h2}>Our Values</h2>
          <p className={`${theme.typography.body} mt-4 max-w-2xl mx-auto`}>
            These core values guide everything we do at OrderMachine
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-fadeIn">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly push the boundaries of what's possible in restaurant technology.
            </p>
          </Card>

          <Card className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              Our customers' success is our success. We're committed to their growth and satisfaction.
            </p>
          </Card>

          <Card className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We operate with transparency and honesty, building trust with our customers and partners.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className={theme.typography.h2}>Join Our Mission</h2>
          <p className={`${theme.typography.body} mt-4 max-w-2xl mx-auto`}>
            We're always looking for talented individuals who share our vision of transforming the restaurant industry.
          </p>
          <div className="mt-8">
            <Button>View Open Positions</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
} 