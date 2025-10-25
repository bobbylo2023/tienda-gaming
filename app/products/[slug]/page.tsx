import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'
import AddToCartButton from '@/components/AddToCartButton'

interface PageProps {
  params: { slug: string }
}

async function getProduct(slug: string) {
  const supabase = createClient()
  const { data, error } = await supabase.from('products').select('*').eq('slug', slug).single()
  return data
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.slug)

  if (!product) return <div>Producto no encontrado</div>

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 aspect-square relative">
        <Image src={product.image_url} alt={product.name} fill className="object-cover rounded-lg" />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-3xl font-semibold">${(product.price / 100).toFixed(2)}</p>
        <p className="text-gray-700">{product.description}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}