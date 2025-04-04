import React from 'react';
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-xl font-bold">PAYLIC</span>
            </div>
            <p className="text-gray-400">
              Making finance simple for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Tools</h4>
            <ul className="space-y-2">
              {['EMI Calculator', 'SIP Calculator', 'Compound Interest'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FiTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FiGithub size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FiLinkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Paylic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;