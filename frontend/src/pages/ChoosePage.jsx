import { use, useState } from "react";
import { motion } from "framer-motion";

const categories = ["vietnam", "thailand", "indonesia", "malaysia"];

const ChoosePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
    });

    return (
        <div>
            <label htmlFor='category' className='block text-sm font-medium text-gray-300'>
                Choose team
            </label>
            <select
                id='category'
                name='category'
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md
						 shadow-sm py-2 px-3 text-white focus:outline-none 
						 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                required
            >
                <option value=''>Select a team</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

             <label htmlFor='category' className='block text-sm font-medium text-gray-300'>
                Choose team
            </label>
            <select
                id='category'
                name='category'
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md
						 shadow-sm py-2 px-3 text-white focus:outline-none 
						 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                required
            >
                <option value=''>Select a team</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ChoosePage