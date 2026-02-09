import Product from '@/app/types/Products';
import ProductCard from './ProductCard';
import Products from '@/app/types/Products';


export default function ProductRow({products}: {products:Product[]}) {
    return (
      <div className='flex overflow-x-auto no-scrollbar ml-30 mt-4 pb-4 gap-6 whitespace-nowrap'>
        {products.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))}</div>
        
    
    );
}