
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {BiHash} from 'react-icons/bi'
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <div className={`flex items-center pb-3 mb-3 ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'}`}>
            <span className="mr-2 text-red-400"><BiHash /></span>
            <span className={`cursor-pointer block`}>
              {category.name}
            </span>  
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;