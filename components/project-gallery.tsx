"use client"

import { useState } from "react"

type GalleryImage = {
  src: string
  alt: string
}

type Props = {
  images: GalleryImage[]
  category: "research" | "protocol" | "application"
}

export function ProjectGallery({ images, category }: Props) {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const title =
    category === "research"
      ? "Architecture, Analysis & Validation"
      : category === "protocol"
      ? "System Architecture & Flow"
      : "Product Screenshots"

  if (!images || images.length === 0) return null

  return (
    <>
      {/* Visual Evidence */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primary Image */}
          <div
            className="md:col-span-2 row-span-2 rounded-lg overflow-hidden border border-white/20 bg-black/40 cursor-pointer"
            onClick={() => setActiveImage(images[0]?.src)}
          >
            <img
              src={images[0]?.src}
              alt={images[0]?.alt}
              className="w-full h-full object-cover hover:opacity-90 transition"
            />
          </div>

          {/* Secondary Images */}
          {images.slice(1, 3).map((img) => (
            <div
              key={img.src}
              className="rounded-lg overflow-hidden border border-white/20 bg-black/40 cursor-pointer"
              onClick={() => setActiveImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:opacity-90 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-100 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] rounded-lg border border-white/20"
          />
        </div>
      )}
    </>
  )
}
