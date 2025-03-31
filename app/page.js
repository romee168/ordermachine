import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow bg-white px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
          Let customers scan and order<br className="hidden md:block" /> from each table
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
          Say goodbye to handwritten notes, lost orders and missed messages. OrderMachine gives each table a dedicated ordering tablet – fast, simple and synced.
        </p>
        <a
          href="/demo"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-xl shadow transition"
        >
          Get Your Free Demo
        </a>
      </main>
      <Footer />
    </div>
  );
} 