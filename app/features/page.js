import Layout, { Section, Hero, Card, Button } from '../components/Layout';
import { theme } from '../styles/theme';

export default function Features() {
  return (
    <Layout>
      <Hero
        title="Powerful Features for Modern Restaurants"
        subtitle="Everything you need to streamline your ordering process and delight your customers"
        className="py-20"
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="animate-fadeIn">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Ordering</h3>
            <p className="text-gray-600 mb-4">
              Customers can easily browse the menu, customize orders, and place them directly from their table.
            </p>
            <Button variant="outline">Learn More</Button>
          </Card>

          <Card className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600 mb-4">
              Multiple payment options with secure processing and instant confirmation.
            </p>
            <Button variant="outline">Learn More</Button>
          </Card>

          <Card className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Track orders, analyze customer behavior, and optimize your menu with detailed insights.
            </p>
            <Button variant="outline">Learn More</Button>
          </Card>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className={theme.typography.h2}>Ready to Transform Your Restaurant?</h2>
          <p className={`${theme.typography.body} mt-4 max-w-2xl mx-auto`}>
            70% Reduce Labor Costs with OrderMachine.
          </p>
        </div>
        <div className="flex justify-center">
          <Button>Get Free Trial Device</Button>
        </div>
      </Section>
    </Layout>
  );
} 