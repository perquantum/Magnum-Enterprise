import React from 'react';
import { Mail, Phone, MapPin, AlertTriangle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Information */}
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Magnum Enterprise
            </span>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Your trusted partner for high-quality laboratory chemicals and reagents since 2024.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Contact Us</span>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+91 96625 21048</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>magnumenterprise@mail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span>Gandhinagar</span>
              </div>
            </div>
          </div>

          {/* Safety Information */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Safety & Compliance</span>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                <AlertTriangle className="w-4 h-4" />
                <span>Material Safety Data Sheets</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                <AlertTriangle className="w-4 h-4" />
                <span>Handling & Storage Guidelines</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                <AlertTriangle className="w-4 h-4" />
                <span>Emergency Response</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Magnum Enterprise. All rights reserved. | ISO 9001:2015 Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;