// components/ProductCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

interface Product {
  id: number
  name: string
  slug: string
  price: number
  image_url: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-square relative">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600">${(product.price / 100).toFixed(2)}</p>
        <Button className="w-full mt-4">Añadir al Carrito</Button>
      </CardContent>
    </Card>
  )
}