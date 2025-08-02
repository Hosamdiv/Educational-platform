// src/components/Navbar.tsx

import { Brain } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">MindLearn</h1>
                            <p className="text-xs text-gray-600">Philosophy & Psychology</p>
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#courses" className="text-gray-600 hover:text-purple-600 transition-colors">
                            Courses
                        </a>
                        <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">
                            About
                        </a>
                        <a href="#instructors" className="text-gray-600 hover:text-purple-600 transition-colors">
                            Instructors
                        </a>
                        <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                            Contact
                        </a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <button >Sign In</button>
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                            Get Started
                        </button>
                    </div>
                </div>
            </header>

        </nav>
    );
};

export default Navbar;
