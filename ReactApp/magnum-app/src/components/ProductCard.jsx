import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col h-full"
    >
      {/* Product Image */}
      <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Product Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {product.name}
        </h3>

        {/* Chemical Formula */}
        <p className="text-2xl font-mono text-blue-700 mb-4">
          {product.formula}
        </p>

        {/* Product Details Grid */}
        <div className="space-y-2 mb-4 flex-grow">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 font-medium">CAS Number:</span>
            <span className="text-gray-900 font-semibold">{product.casNumber}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 font-medium">Purity:</span>
            <span className="text-gray-900 font-semibold">{product.purity}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 font-medium">Molecular Weight:</span>
            <span className="text-gray-900 font-semibold">{product.molecularWeight}</span>
          </div>
        </div>

        {/* Hazard Warnings */}
        {product.hazards && product.hazards.length > 0 && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs font-semibold text-amber-900 mb-1">Hazard Warnings:</p>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {product.hazards.slice(0, 2).join('. ')}
                  {product.hazards.length > 2 && '...'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* View Details Button */}
        <Link to={`/product/${product.id}`} className="w-full">
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            View Details
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;