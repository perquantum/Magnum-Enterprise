import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const features = [
    {
      icon: Beaker,
      title: "Premium Quality",
      description: "Laboratory-grade chemicals with guaranteed purity levels"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Complete MSDS documentation and safety compliance"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick processing and reliable shipping worldwide"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Magnum Enterprise - Professional Laboratory Chemicals & Reagents</title>
        <meta name="description" content="Your trusted source for high-quality laboratory chemicals, reagents, and scientific supplies. Browse our extensive catalogue of premium chemical products." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <div 
          className="relative h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-gray-900/90" />
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
                Chemical Catalogue
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                Premium laboratory chemicals and reagents for research, education, and industrial applications
              </p>
              <Link to="/catalogue">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Browse Catalogue
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Features Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Magnum Enterprise?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry-leading quality, safety, and service for all your chemical needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-br from-blue-900 to-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Explore our extensive catalogue of premium chemicals and reagents
              </p>
              <Link to="/catalogue">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-blue-400/50 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;