"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"

const products = [
  { id: 1, name: 'Coat "Maxi"', price: 8450, image: "https://i.pinimg.com/1200x/86/14/d6/8614d69983c685f04ce68da54f357866.jpg" },
  { id: 2, name: 'Pants "Bon"', price: 4500, image: "https://i.pinimg.com/1200x/80/50/0b/80500bf48ef0d30df67d0b1249407785.jpg" },
  { id: 3, name: 'Jacket "Tex"', price: 7800, image: "https://i.pinimg.com/1200x/16/36/61/163661867d8aa1bf6ee17be88052cb94.jpg" },
  { id: 4, name: 'Skirt "Olive"', price: 3200, image: "https://i.pinimg.com/1200x/e9/ff/a6/e9ffa625d9e75d802cbee119494c623a.jpg" },
  { id: 5, name: 'Jeans "Cargo"', price: 5400, image: "https://i.pinimg.com/736x/01/d6/3c/01d63cb1e9ca2202cb3fa1a77e8151fc.jpg" },
  { id: 6, name: 'Jacket "Deni"', price: 6700, image: "https://i.pinimg.com/1200x/d3/9f/fa/d39ffaadd70eff10ebae6daa60fb13e4.jpg" },
  { id: 7, name: 'Dress "Noir"', price: 9200, image: "https://i.pinimg.com/736x/f0/a7/08/f0a7089e50ae128e5d40f9007ea617df.jpg" },
  { id: 8, name: 'Shirt "Ruby"', price: 3800, image: "https://i.pinimg.com/736x/a4/cf/07/a4cf07a7dd1bf842a06ecdbdd11f9368.jpg" },
 { id: 9, name: 'Top "Sirène"', price: 5900, image: "https://i.pinimg.com/1200x/cb/af/af/cbafaf961fb3971db16b82284dfc36e8.jpg" },
  { id: 10, name: 'Set "Jeans"', price: 13900, image: "https://i.pinimg.com/736x/3a/3a/c5/3a3ac587a25386edb844fb5eba280362.jpg" },
  { id: 11, name: 'T-shirt "Pink"', price: 3500, image: "https://i.pinimg.com/1200x/d0/76/8f/d0768fb372eea542d554066c1bcd0216.jpg" },
  { id: 12, name: 'Set "Gilet"', price: 11900, image: "https://i.pinimg.com/736x/a4/cf/07/a4cf07a7dd1bf842a06ecdbdd11f9368.jpg" },
  { id: 13, name: 'Skirt "Long"', price: 7500, image: "https://i.pinimg.com/1200x/a5/0f/b9/a50fb92ad8b1e1d12d40f396f60c3c3d.jpg" },
  { id: 14, name: 'Coat "77"', price: 15500, image: "https://i.pinimg.com/736x/49/57/b0/4957b067237c2eec80b09c45a349bf1f.jpg" },
  { id: 15, name: 'Jacket "Cozy"', price: 9400, image: "https://i.pinimg.com/1200x/fb/0b/dd/fb0bddbcc797e99ae527acaf621dc528.jpg" },
  { id: 16, name: 'Top "Way"', price: 2900, image: "https://i.pinimg.com/1200x/9d/b3/99/9db399b3494428f3a047788414e139dc.jpg" },
]

export default function ShopPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.3,
      })

      // Header animation
      gsap.from(".page-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      })

      // Products stagger animation
      gsap.from(".product-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1,
        stagger: {
          amount: 0.8,
          grid: [4, 4],
          from: "start",
        },
      })

      // Footer animation
      gsap.from(".shop-footer", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.5,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white text-black">
      <div ref={overlayRef} className="fixed inset-0 bg-black z-50" />

       {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white">
        <div className="flex items-center justify-between px-6 py-4 text-xs tracking-wide">
          <div className="flex items-center gap-8">
            
            <Link href="/shop" className="hover:text-pink-500 transition-colors">
              Catalog
            </Link>
            <Link href="/" className="hover:text-pink-500 transition-colors">
              SALE
            </Link>
          </div>
          <Link href="/" className="text-pink-500 text-sm font-medium tracking-widest">
            asya/se
          </Link>
          <div className="flex items-center gap-8">
            <button className="hover:text-pink-500 transition-colors">Search</button>
            <button className="hover:text-pink-500 transition-colors">Account</button>
            
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-20 px-6">
        {/* Page Header */}
        <div className="py-8 border-b border-black/10">
          <h1 className="page-title text-6xl md:text-8xl font-extralight text-pink-500 tracking-tight">Shop</h1>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-black/60">/catalog</p>
            <button className="flex items-center gap-2 text-sm hover:text-pink-500 transition-colors">
              Filter
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 py-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="product-card group">
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-3">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs text-black/60">{product.name}</p>
                <p className="text-xs whitespace-nowrap">{product.price.toLocaleString()} DA</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center py-8 border-t border-black/10">
          <button className="text-sm hover:text-pink-500 transition-colors">More</button>
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="shop-footer py-16 px-6 border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-light leading-tight">
              Subscribe and find
              <br />
              out about the new
              <br />
              products first
            </h3>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-6xl md:text-8xl font-extralight text-black/20 text-right">asya/se</p>
          </div>
        </div>
        <div className="mt-12 max-w-md">
          <div className="flex items-center gap-4 border-b border-black pb-2">
            <span className="text-sm">E-mail</span>
            <input type="email" placeholder="" className="flex-1 bg-transparent outline-none text-sm" />
          </div>
          <p className="text-xs text-black/50 mt-4">I consent to the processing of personal data</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="shop-footer py-12 px-6 border-t border-black/10">
        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-light">Shop asya/se</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="space-y-2">
            <Link href="/shop" className="block text-black/60 hover:text-black transition-colors">
              Catalog
            </Link>
            <Link href="/shop" className="block text-black/60 hover:text-black transition-colors">
              Limited
            </Link>
            <Link href="/shop" className="block text-black/60 hover:text-black transition-colors">
              Bestsellers
            </Link>
            <Link href="/shop" className="block text-black/60 hover:text-black transition-colors">
              Aw Collection 25
            </Link>
          </div>
          <div></div>
          <div className="space-y-2">
            <span className="block text-black/60">Telegram</span>
            <span className="block text-black/60">Instagram</span>
          </div>
          <div className="space-y-2">
            <span className="block text-black/60">Facebook</span>
            <span className="block text-black/60">Twitter</span>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-black/10 text-xs text-black/40">
          © All rights are reserved at the request of the copyright holder
        </div>
      </footer>
    </div>
  )
}
