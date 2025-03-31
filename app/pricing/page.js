import Layout, { Section, Hero, Card, Button } from '../components/Layout';
import { theme } from '../styles/theme';

export default function Pricing() {
  return (
    <Layout>
      <Hero
        title="Simple, Transparent Pricing"
        subtitle="Choose the perfect plan for your restaurant"
        className="py-20"
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-fadeIn">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-gray-600 mb-4">Perfect for small restaurants</p>
              <div className="text-4xl font-bold text-primary mb-4">$29<span className="text-lg text-gray-600">/month</span></div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Up to 50 orders/month
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Basic analytics
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Email support
              </li>
            </ul>
            <Button variant="outline" className="w-full">Get Started</Button>
          </Card>

          <Card className="animate-fadeIn border-2 border-primary" style={{ animationDelay: '0.1s' }}>
            <div className="text-center mb-8">
              <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-4">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">For growing restaurants</p>
              <div className="text-4xl font-bold text-primary mb-4">$79<span className="text-lg text-gray-600">/month</span></div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited orders
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced analytics
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom branding
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </Card>

          <Card className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For large restaurant chains</p>
              <div className="text-4xl font-bold text-primary mb-4">$199<span className="text-lg text-gray-600">/month</span></div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited everything
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom integrations
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                24/7 dedicated support
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                API access
              </li>
            </ul>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </Card>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="text-center">
          <h2 className={theme.typography.h2}>Need a Custom Solution?</h2>
          <p className={`${theme.typography.body} mt-4 max-w-2xl mx-auto`}>
            We offer custom pricing for restaurants with special requirements. Contact us to learn more.
          </p>
          <div className="mt-8">
            <Button>Contact Sales Team</Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
} 