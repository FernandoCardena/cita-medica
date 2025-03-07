import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import ServicesSection from './components/ServicesSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import FormularioCita from './components/FormularioCita';

const App = () => {
  return (
    <div className="text-base">
      <Header />
      <main className="mx-auto -mt-4 relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <WelcomeSection />
                <ServicesSection />
                <SpecialtiesSection />
              </>
            }
          />
          <Route path="/formulario-cita" element={<FormularioCita />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
