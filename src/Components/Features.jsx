import { Truck, Lock, RotateCcw, Clock } from 'lucide-react';
import React from 'react';

const Features = () => {
  const features = [
    { icon: Truck, text: "Free Shipping", subtext: "on orders over $100" },
    { icon: Lock, text: "Secure Payment", subtext: "100% protected payments" },
    { icon: RotateCcw, text: "Easy Returns", subtext: "30-day return policy" },
    { icon: Clock, text: "24/7 Support", subtext: "Dedicated customer service" },
  ];

  return (
    <div className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className='flex flex-col items-center text-center sm:items-start sm:text-left'>
                <Icon className='h-10 w-10 text-gray-600 mb-2' aria-hidden="true" />
                <p className='text-base font-medium text-gray-900'>{feature.text}</p>
                <p className='mt-1 text-sm text-gray-500'>{feature.subtext}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
