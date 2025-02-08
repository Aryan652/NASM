import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">National Academy</h3>
            <p className="text-gray-400 mb-4">
              Empowering minds and shaping futures through excellence in education.
            </p>
            <div className="flex space-x-4">
              <a href='https://www.facebook.com/nationalacademybrt'>
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </a>
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">Sansari Maisthan, Main Road <br></br> Biratnagar, Morang</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">+977 9811057110</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">NationalAcademy.rbb@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Hours of Operation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div className="text-gray-400">
                  <p>Sunday - Thrusday: 8:00 AM - 6:00 PM</p>
                  <p>Friday: 9:00 AM - 1:00 PM</p>
                  <p>Saturday : Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} National Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;