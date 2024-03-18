import DisplayImageCard from '@/components/display-card'
import React from 'react'

export default function NewProductSection(): React.ReactNode {
  return (
    <section className="my-5">
      <p className="text-center text-menu-title font-bold mb-5">Produk Baru</p>

      <div className="flex gap-5">
        <div className="flex flex-col">
          <DisplayImageCard
            src="/assets/home/new-display-1.png"
            alt="New Display 1"
            isNewProduct
          />
          <p className="text-heading-3 font-bold mt-4 mb-[8px]">
            SereRayya Family
          </p>
          <p className="text-brand-text text-gray-100">Khimar</p>
        </div>

        <div className="flex flex-col">
          <DisplayImageCard
            src="/assets/home/new-display-2.png"
            alt="New Display 2"
            isNewProduct
          />
          <p className="text-heading-3 font-bold mt-4 mb-[8px]">
            SereRayya Family
          </p>
          <p className="text-brand-text text-gray-100">Women Espresso</p>
        </div>

        <div className="flex flex-col">
          <DisplayImageCard
            src="/assets/home/new-display-3.png"
            alt="New Display 3"
            isNewProduct
          />
          <p className="text-heading-3 font-bold mt-4 mb-[8px]">
            SereRayya Family
          </p>
          <p className="text-brand-text text-gray-100">Women Espresso</p>
        </div>
      </div>
    </section>
  )
}
