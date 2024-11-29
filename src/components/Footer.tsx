import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-6">
            <span className="text-blue-400">A</span>GABA
          </div>
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com" className="hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:agabasylvester@gmail.com" className="hover:text-blue-400">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AGABA Sylvester. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}