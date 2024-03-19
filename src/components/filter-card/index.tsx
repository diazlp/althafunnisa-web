import React, { useState } from 'react'
import FilterItem from './filter-item'
import { FaPlus, FaMinus } from 'react-icons/fa6'

export default function FilterCard(): React.ReactNode {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0)

  const handleItemClick = (index: number) => {
    setHighlightedIndex(index === highlightedIndex ? 0 : index)
  }

  return (
    <section className="flex flex-col h-[600px] w-[266px] select-none gap-3">
      <div className="flex justify-between">
        <p className="text-gray-100">Filter by:</p>
        <p className="text-blue-700 cursor-pointer hover:underline">Clear</p>
      </div>

      <div className="flex flex-col border border-black w-full">
        <div className="flex items-center bg-yellow-100 h-10 p-2 justify-between">
          <p>Categorie</p>
          <FaMinus />
        </div>

        <div className="grid grid-cols-2 p-2 gap-2">
          <FilterItem
            highlighted={highlightedIndex === 0}
            onClick={() => handleItemClick(0)}
          >
            Khimar
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 1}
            onClick={() => handleItemClick(1)}
          >
            Baju Koko
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 2}
            onClick={() => handleItemClick(2)}
          >
            Gamis
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 3}
            onClick={() => handleItemClick(3)}
          >
            Parfume
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 4}
            onClick={() => handleItemClick(4)}
          >
            Abaya
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 5}
            onClick={() => handleItemClick(5)}
          >
            Outer
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 6}
            onClick={() => handleItemClick(6)}
          >
            Dress
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 7}
            onClick={() => handleItemClick(7)}
          >
            Set Scarf
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 8}
            onClick={() => handleItemClick(8)}
          >
            Scarf Polos
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 9}
            onClick={() => handleItemClick(9)}
          >
            Ring brooch
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 10}
            onClick={() => handleItemClick(10)}
          >
            Brooch
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 11}
            onClick={() => handleItemClick(11)}
          >
            Kemeja lengan panjang
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 12}
            onClick={() => handleItemClick(12)}
          >
            Baju Anak
          </FilterItem>
          <FilterItem
            highlighted={highlightedIndex === 13}
            onClick={() => handleItemClick(13)}
          >
            Kemeja lengan pendek
          </FilterItem>
        </div>
      </div>

      <div className="flex items-center border border-black w-full p-2 justify-between">
        <p>Warna</p>
        <FaPlus />
      </div>

      <div className="flex items-center border border-black w-full p-2 justify-between">
        <p>Series</p>
        <FaPlus />
      </div>

      <div className="flex items-center border border-black w-full p-2 justify-between">
        <p>Harga</p>
        <FaPlus />
      </div>
    </section>
  )
}
