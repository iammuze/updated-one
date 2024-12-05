import React from 'react';
import { MapPin, Clock, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GymCardProps {
  gym: {
    id: number;
    name: string;
    address: string;
    distance: string;
    rating: number;
    hours: string;
    image: string;
  };
  index: number;
}

export function GymCard({ gym, index }: GymCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={gym.image}
          alt={gym.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{gym.name}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{gym.address}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{gym.hours}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{gym.distance}</span>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900 mr-1">{gym.rating}</span>
              <span className="text-yellow-400">★</span>
            </div>
          </div>
        </div>
        <button
          className={cn(
            "mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent",
            "text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          )}
        >
          <Dumbbell className="h-4 w-4 mr-2" />
          View Details
        </button>
      </div>
    </motion.div>
  );
}