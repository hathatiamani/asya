"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { useParams } from "next/navigation"

const products = [
  {
    id: 1,
    name: 'Coat "Maxi"',
    price: 8450,
    category: "Outerwear",
    image: "https://i.pinimg.com/1200x/86/14/d6/8614d69983c685f04ce68da54f357866.jpg",
    description: "Long black coat with elegant draping. Sophisticated warmth for cold days.",
  },
  {
    id: 2,
    name: 'Pants "Bon"',
    price: 4500,
    category: "Pants",
    image: "https://i.pinimg.com/1200x/80/50/0b/80500bf48ef0d30df67d0b1249407785.jpg",
    description: "Tailored pants with perfect fit. Versatile style for work or weekend.",
  },
  {
    id: 3,
    name: 'Jacket "Tex"',
    price: 7800,
    category: "Jackets",
    image: "https://i.pinimg.com/1200x/16/36/61/163661867d8aa1bf6ee17be88052cb94.jpg",
    description: "Textured blazer with modern cut. Elevate any outfit instantly.",
  },
  {
    id: 4,
    name: 'Skirt "Olive"',
    price: 3200,
    category: "Skirts",
    image: "https://i.pinimg.com/1200x/e9/ff/a6/e9ffa625d9e75d802cbee119494c623a.jpg",
    description: "Midi skirt in olive tones. Classic elegance with contemporary appeal.",
  },
  {
    id: 5,
    name: 'Jeans "Cargo"',
    price: 5400,
    category: "Jeans",
    image: "https://i.pinimg.com/736x/01/d6/3c/01d63cb1e9ca2202cb3fa1a77e8151fc.jpg",
    description: "Cargo-style jeans with utility pockets. Fashion-forward functionality.",
  },
  {
    id: 6,
    name: 'Jacket "Deni"',
    price: 6700,
    category: "Jackets",
    image: "https://i.pinimg.com/1200x/d3/9f/fa/d39ffaadd70eff10ebae6daa60fb13e4.jpg",
    description: "Classic denim jacket reimagined. Essential layering piece for any season.",
  },
  {
    id: 7,
    name: 'Dress "Noir"',
    price: 9200,
    category: "Dresses",
    image: "https://i.pinimg.com/736x/f0/a7/08/f0a7089e50ae128e5d40f9007ea617df.jpg",
    description: "Little black dress with modern twist. Timeless elegance for special moments.",
  },
  {
    id: 8,
    name: 'Shirt "Ruby"',
    price: 3800,
    category: "Tops",
    image: "https://i.pinimg.com/736x/a4/cf/07/a4cf07a7dd1bf842a06ecdbdd11f9368.jpg",
    description: "Elegant shirt in rich tones. Polished style for any occasion.",
  },
  {
    id: 9,
    name: 'Top "Sirène"',
    price: 5900,
    category: "Tops",
    image: "https://i.pinimg.com/1200x/cb/af/af/cbafaf961fb3971db16b82284dfc36e8.jpg",
    description: "Flowing top with elegant silhouette. Perfect for day to night transitions.",
  },
  {
    id: 10,
    name: 'Set "Jeans"',
    price: 13900,
    category: "Sets",
    image: "https://i.pinimg.com/736x/3a/3a/c5/3a3ac587a25386edb844fb5eba280362.jpg",
    description: "Complete denim set featuring coordinated pieces. Effortlessly stylish ensemble.",
  },
  {
    id: 11,
    name: 'T-shirt "Pink"',
    price: 3500,
    category: "Tops",
    image: "https://i.pinimg.com/1200x/d0/76/8f/d0768fb372eea542d554066c1bcd0216.jpg",
    description: "Soft pink tee in premium cotton. Casual comfort with feminine appeal.",
  },
  {
    id: 12,
    name: 'Set "Gilet"',
    price: 11900,
    category: "Sets",
    image: "https://i.pinimg.com/736x/a4/cf/07/a4cf07a7dd1bf842a06ecdbdd11f9368.jpg",
    description: "Coordinated set featuring stylish gilet. Sophisticated layered look.",
  },
  {
    id: 13,
    name: 'Skirt "Long"',
    price: 7500,
    category: "Skirts",
    image: "https://i.pinimg.com/1200x/a5/0f/b9/a50fb92ad8b1e1d12d40f396f60c3c3d.jpg",
    description: "Elegant long skirt with graceful drape. Timeless silhouette for special occasions.",
  },
  {
    id: 14,
    name: 'Coat "77"',
    price: 15500,
    category: "Outerwear",
    image: "https://i.pinimg.com/736x/49/57/b0/4957b067237c2eec80b09c45a349bf1f.jpg",
    description: "Statement coat with unique design. Premium outerwear for making an impression.",
  },
  {
    id: 15,
    name: 'Jacket "Cozy"',
    price: 9400,
    category: "Jackets",
    image: "https://i.pinimg.com/1200x/fb/0b/dd/fb0bddbcc797e99ae527acaf621dc528.jpg",
    description: "Comfortable jacket in soft materials. Perfect for relaxed yet stylish days.",
  },
  {
    id: 16,
    name: 'Top "Way"',
    price: 2900,
    category: "Tops",
    image: "https://i.pinimg.com/1200x/9d/b3/99/9db399b3494428f3a047788414e139dc.jpg",
    description: "Versatile top for everyday wear. Easy to style for various occasions.",
  },
]

const cities = [
  "Algiers",
  "Oran",
  "Constantine",
  "Annaba",
  "Blida",
  "Batna",
  "Djelfa",
  "Sétif",
  "Sidi Bel Abbès",
  "Biskra",
]

const deliveryFees: Record<string, number> = {
  Algiers: 400,
  Oran: 600,
  Constantine: 600,
  Annaba: 700,
  Blida: 400,
  Batna: 650,
  Djelfa: 550,
  Sétif: 600,
  "Sidi Bel Abbès": 650,
  Biskra: 700,
}

export default function ProductPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = products.find((p) => p.id === productId) || products[0]

  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    deliveryType: "home",
  })

  const deliveryFee = formData.city ? deliveryFees[formData.city] || 500 : 0
  const total = product.price + deliveryFee

  useEffect(() => {
    if (!overlayRef.current) return

    const ctx = gsap.context(() => {
      // Reveal animation
      gsap.to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
        ease: "power4.inOut",
      })

      // Content animations
      gsap.from(".product-image", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6,
      })

      gsap.from(".product-info", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
      })

      gsap.from(".order-form", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 1,
      })
    })

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `Order submitted!\n\nProduct: ${product.name}\nTotal: ${total.toLocaleString()} DA\n\nThank you for your order!`,
    )
  }

  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* Overlay */}
      <div ref={overlayRef} className="fixed inset-0 bg-black z-50 origin-top" />

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

      {/* Main Content */}
      <main ref={contentRef} className="pt-20 px-6">
        {/* Breadcrumb */}
        <div className="py-4 text-xs text-black/60 border-b border-black/10">
          <Link href="/" className="hover:text-pink-500 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-pink-500 transition-colors">
            Catalog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </div>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-8">
          {/* Product Image */}
          <div className="product-image relative aspect-[3/4] bg-neutral-100 overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          {/* Product Info & Order Form */}
          <div className="space-y-8">
            {/* Product Info */}
            <div className="product-info space-y-4">
              <p className="text-xs text-black/50 uppercase tracking-wide">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight">{product.name}</h1>
              <p className="text-2xl">{product.price.toLocaleString()} DA</p>
              <p className="text-sm text-black/60 leading-relaxed">{product.description}</p>
            </div>

            <div className="h-px bg-black/10" />

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="order-form space-y-6">
              <h2 className="text-sm font-medium uppercase tracking-wide">Customer Information</h2>

              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs text-black/60">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border border-black/20 bg-white text-black placeholder:text-black/30 focus:border-black focus:outline-none transition-colors text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-xs text-black/60">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-black/20 bg-white text-black placeholder:text-black/30 focus:border-black focus:outline-none transition-colors text-sm"
                  placeholder="0XXX XXX XXX"
                />
              </div>

              {/* City Select */}
              <div className="space-y-2">
                <label className="text-xs text-black/60">Select City *</label>
                <select
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 border border-black/20 bg-white text-black focus:border-black focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
                >
                  <option value="">Choose your city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delivery Type */}
              <div className="space-y-3">
                <label className="text-xs text-black/60">Delivery Type</label>
                <div className="flex gap-4">
                  <label
                    className={`flex-1 flex items-center justify-center px-4 py-3 border cursor-pointer transition-all text-sm ${formData.deliveryType === "home" ? "border-black bg-black text-white" : "border-black/20 hover:border-black/40"}`}
                  >
                    <input
                      type="radio"
                      name="deliveryType"
                      value="home"
                      checked={formData.deliveryType === "home"}
                      onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })}
                      className="sr-only"
                    />
                    Home Delivery
                  </label>
                  <label
                    className={`flex-1 flex items-center justify-center px-4 py-3 border cursor-pointer transition-all text-sm ${formData.deliveryType === "office" ? "border-black bg-black text-white" : "border-black/20 hover:border-black/40"}`}
                  >
                    <input
                      type="radio"
                      name="deliveryType"
                      value="office"
                      checked={formData.deliveryType === "office"}
                      onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })}
                      className="sr-only"
                    />
                    Office Delivery
                  </label>
                </div>
              </div>

              <div className="h-px bg-black/10" />

              {/* Order Summary */}
              <div className="space-y-4">
                <h2 className="text-sm font-medium uppercase tracking-wide">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-black/60">Product Price:</span>
                    <span>{product.price.toLocaleString()} DA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/60">Delivery Fee:</span>
                    <span>{formData.city ? `${deliveryFee.toLocaleString()} DA` : "-- DA"}</span>
                  </div>
                  <div className="h-px bg-black/10" />
                  <div className="flex justify-between text-base font-medium">
                    <span>Total:</span>
                    <span>
                      {formData.city ? `${total.toLocaleString()} DA` : `${product.price.toLocaleString()} DA`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-black text-white text-sm uppercase tracking-wide hover:bg-pink-500 transition-colors duration-300"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/10 mt-12">
        <div className="mb-8">
          <h4 className="text-2xl font-light">Shop asya/se</h4>
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
