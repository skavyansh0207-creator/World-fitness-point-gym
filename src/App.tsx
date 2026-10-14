import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileQuickActions } from './components/MobileQuickActions';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SchedulePage } from './pages/SchedulePage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Free Trial & Movement Assessment');

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('Free Trial & Movement Assessment');
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* 5-Page Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('Free Trial Pass')}
      />

      {/* Main 5-Page Viewport Container */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onSelectService={handleOpenBooking} />
        )}
        {currentPage === 'schedule' && (
          <SchedulePage onBookSession={handleOpenBooking} />
        )}
        {currentPage === 'pricing' && (
          <PricingPage onSelectPlan={handleOpenBooking} />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Clean 5-Page Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Trial & Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        initialService={selectedService}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Mobile Quick Action Strip (<=15% mobile viewport cap) */}
      <MobileQuickActions onOpenBooking={() => handleOpenBooking('Mobile Free Pass')} />
    </div>
  );
}
