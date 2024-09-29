"use client";

import './Footer.css';
import { useState } from 'react';

const Footer: React.FC = () => {
    const [currentYear] = useState<number>(new Date().getFullYear());
    
    return (
        <footer className="w-full text-white text-center py-6">
            <div className="mt-4 sm:mt-0">
                Copyright &copy; {currentYear} DEVJINX
            </div>
        </footer>
    );
};

export default Footer;  