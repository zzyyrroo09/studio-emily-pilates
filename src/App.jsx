import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar onAdminClick={() => setAdminOpen(true)} />
      <main>
        <Hero />
        <About />
        <Services />
        <BookingForm />
      </main>
      <Footer />
      <AdminDashboard open={adminOpen} onClose={() => setAdminOpen(false)} />
    </div>
  );
}
