"use client"; // Ensure it's a client component
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "next-themes";
import Loading from './loading';

export default function Proider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <ThemeProvider defaultTheme="system" attribute="class">
        <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
}