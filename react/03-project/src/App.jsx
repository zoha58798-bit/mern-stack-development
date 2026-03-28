import React from 'react'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center gap-6 flex-wrap p-10">
      <ProductCard
      image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"
      title="Vintage Leather Bag"
      description="handmade leather totes, women's leather accessories, handbags and purses, work..."
      price={299}
      />

      <ProductCard
      image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"
      title="Vintage Leather"
      description="handmade leather totes, women's leather accessories, handbags and purses, work..."
      price={299}
      />

      <ProductCard
      image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"
      title="Vintage Leather Bag"
      description="handmade leather totes, women's leather accessories, handbags and purses, work..."
      price={299}
      />
    </div>
  )
}

export default App