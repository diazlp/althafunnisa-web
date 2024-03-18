import DisplayImageCard from '@/components/display-card'
import React from 'react'

export default function HomeCategorySection(): React.ReactNode {
  return (
    <section className="my-5">
      <p className="text-center text-menu-title font-bold mb-5">Kategori</p>

      <div className="flex gap-5">
        <DisplayImageCard
          src="/assets/home/home-category-1.png"
          alt="Home Category 1"
          isCategorySection
          categoryTitle="WANITA"
        />
        <DisplayImageCard
          src="/assets/home/home-category-2.png"
          alt="Home Category 2"
          isCategorySection
          categoryTitle="PRIA"
        />
        <DisplayImageCard
          src="/assets/home/home-category-3.png"
          alt="Home Category 3"
          isCategorySection
          categoryTitle="Anak-Anak"
        />
      </div>
    </section>
  )
}
