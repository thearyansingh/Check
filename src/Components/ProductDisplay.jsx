import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Shopcontext } from '../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(Shopcontext); // ✅ Correct hook

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0'>

      {/* Left Images Section */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 md:h-[500px]">
          <img src={product.image} alt="Product" className='md:h-[163px] w-[100px]' />
          <img src={product.image1} alt="Product" className='md:h-[163px] w-[100px]' />
          <img src={product.image2} alt="Product" className='md:h-[163px] w-[100px]' />
          <img src={product.image3} alt="Product" className='md:h-[163px] w-[100px]' />
        </div>
        <div>
          <img src={product.image} alt="Main Product" className='md:h-[580px]' />
        </div>
      </div>

      {/* Right Product Info Section */}
      <div className='flex flex-col md:w-1/2 mt-8 md:mt-0'>
        <h1 className='text-[#3d3d3d] text-4xl font-bold'>{product.name}</h1>

        <div className="flex items-center gap-1 text-[#1c1c1c] text-lg mt-4">
          <Star fill="red" /><Star fill="red" /><Star fill="red" /><Star fill="red" /><Star fill="gray" />
          <p>(122)</p>
        </div>

        <div className="flex gap-5 font-semibold items-center my-5">
          <div className="text-gray-500 text-2xl line-through">${product.old_price}</div>
          <div className="text-red-500 text-3xl">${product.new_price}</div>
        </div>

        <div className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate dolor!
        </div>

        <div className="mt-6">
          <h1 className='font-semibold text-gray-400 text-xl'>Select Size</h1>
          <div className="flex gap-4 items-center my-4">
            <div className='border bg-gray-100 p-4 cursor-pointer'>S</div>
            <div className='border bg-gray-100 p-4 cursor-pointer'>M</div>
            <div className='border bg-gray-100 p-4 cursor-pointer'>L</div>
            <div className='border bg-gray-100 p-4 cursor-pointer'>XL</div>
            <div className='border bg-gray-100 p-4 cursor-pointer'>XXL</div>
          </div>
        </div>

        <Link to="/cart">
          <button onClick={() => addToCart(product.id)} className='bg-red-500 text-white px-6 py-3 my-4 w-max hover:bg-red-600 transition'>
            Add to Cart
          </button>
        </Link>

        <p><span className="font-semibold">Category:</span> Women, T-shirts, Crop Top</p>
        <p><span className="font-semibold">Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
