import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, ChevronRight, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';
import ProductCard from '@/components/ProductCard';
import { useToast } from '@/components/ui/use-toast';

const products = Array.isArray(productsData)
  ? productsData
  : productsData.products;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const product = useMemo(() => {
    return products.find(p => p.id === parseInt(id));
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/catalogue">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                Back to Catalogue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - Magnum Enterprise</title>
        <meta name="description" content={`${product.name} (${product.formula}) - ${product.description}. CAS: ${product.casNumber}, Purity: ${product.purity}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-gray-600 mb-6"
          >
            <Link to="/" className="hover:text-blue-800 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/catalogue" className="hover:text-blue-800 transition-colors">Catalogue</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8"
          >
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="hover:bg-blue-50 hover:text-blue-800 hover:border-blue-800 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back
            </Button>
          </motion.div>

          {/* Product Detail Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="h-96 lg:h-auto bg-gradient-to-br from-blue-50 to-gray-50">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Information */}
              <div className="p-8 lg:p-12">
                {/* Category Badge */}
                <span className="inline-block px-4 py-2 text-sm font-semibold bg-blue-100 text-blue-800 rounded-full mb-4">
                  {product.category}
                </span>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                <p className="text-3xl font-mono text-blue-700 mb-6">
                  {product.formula}
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Specifications Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">CAS Number</p>
                    <p className="text-lg font-bold text-gray-900">{product.casNumber}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Purity</p>
                    <p className="text-lg font-bold text-gray-900">{product.purity}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Molecular Weight</p>
                    <p className="text-lg font-bold text-gray-900">{product.molecularWeight}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Density</p>
                    <p className="text-lg font-bold text-gray-900">{product.density}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Boiling Point</p>
                    <p className="text-lg font-bold text-gray-900">{product.boilingPoint}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Melting Point</p>
                    <p className="text-lg font-bold text-gray-900">{product.meltingPoint}</p>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6"
                >
                  <Package className="mr-2 w-5 h-5" />
                  Request Quote
                </Button>
              </div>
            </div>

            {/* Hazard Warnings Section */}
            {product.hazards && product.hazards.length > 0 && (
              <div className="bg-amber-50 border-t-4 border-amber-500 p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">
                      Hazard Warnings
                    </h3>
                    <ul className="space-y-2">
                      {product.hazards.map((hazard, index) => (
                        <li key={index} className="flex items-start gap-2 text-amber-800">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>{hazard}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Storage Requirements */}
            <div className="bg-blue-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Storage Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.storageRequirements}
              </p>
            </div>
          </motion.div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-gray-900 mb-8"
              >
                Related Products
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <ProductCard product={relatedProduct} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;