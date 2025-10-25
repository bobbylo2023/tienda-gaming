import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CancelPage() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold text-red-600">Pago Cancelado</h1>
      <p className="mt-4">El proceso de pago fue cancelado. No se ha realizado ningún cargo.</p>
      <p className="mt-2">Puedes volver a intentarlo cuando quieras.</p>
      <Link href="/cart">
        <Button className="mt-6">Volver al Carrito</Button>
      </Link>
    </div>
  )
}