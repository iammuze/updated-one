import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Enter your location or zip code"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 pl-12 pr-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
      </div>
    </motion.div>
  );
}