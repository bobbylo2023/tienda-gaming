'use client'
import { useCartStore } from '@/lib/store'
import { Button } from './ui/button'
import { Product } from '@/lib/store'

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Button size="lg" className="w-full md:w-auto" onClick={() => addItem(product)}>
      Añadir al Carrito
    </Button>
  );
}