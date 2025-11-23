import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0DD3B9] rounded-full"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-[#0ea5e9] rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your <span className="gradient-text">Virtual Health</span> Assistant
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              MediGenius uses advanced AI to analyze your symptoms, predict potential conditions, and provide personalized treatment recommendations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#symptom-checker" className="btn btn-primary flex items-center justify-center">
                Check Symptoms <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#how-it-works" className="btn btn-outline flex items-center justify-center">
                How It Works
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Medical AI Technology" 
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
