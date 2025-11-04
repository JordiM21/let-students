import BackHeader from '@/components/BackHeader';
import { db } from '@/config/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function CreateCategories() {
  const [categories, setCategories] = useState([])
  const [expandedCategory, setExpandedCategory] = useState(null)

  const toggleCategory = (categoryName) => {
    setExpandedCategory((prev) => (prev === categoryName ? null : categoryName))
  }

  const validLevels = ['First', 'Second', 'Third']

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'flashCards'))
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        // id: doc.id,
      }))
      setCategories(newData?.[0] || {})
    }
    fetchData()
  }, [])


  return (
    <div className="mx-4 max-w-4xl md:mx-auto mt-8 mb-20 pt-20 min-h-screen py-8">
      <BackHeader largeTitle={'Flash Admin'} parentTitle={'Volver'} />
      <h2 className="text-2xl font-bold mb-4">All Categories</h2>
      {Object.entries(categories)
        .sort(([aName], [bName]) => aName.localeCompare(bName))
        .map(([categoryName, categoryData]) => {
          const isExpanded = expandedCategory === categoryName
          return (
            <div key={categoryName} className="mb-6 border-b pb-4">
              <button
                onClick={() => toggleCategory(categoryName)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-xl font-semibold text-blue-700">{categoryName}</h3>
                <span className="text-sm text-gray-600">{isExpanded ? '▲ Hide' : '▼ Show'}</span>
              </button>

              {categoryData.cover && (
                <Image src={categoryData.cover} alt={`${categoryName} cover`} className="w-48 my-2 rounded shadow" />
              )}
              {isExpanded && categoryData.levels && (
                <div>
                  {Object.entries(categoryData.levels)
                    .filter(([levelName, levelItems]) => validLevels.includes(levelName))
                    .sort(
                      ([a], [b]) => ['First', 'Second', 'Third'].indexOf(a) - ['First', 'Second', 'Third'].indexOf(b)
                    )
                    .map(([levelName, levelItems]) => (
                      <div key={levelName} className="ml-4 mb-4">
                        <h4 className="text-lg font-medium text-green-700">{levelName} Level</h4>
                        <ul className="ml-4 list-disc">
                          {Array.isArray(levelItems) &&
                            levelItems.map((item, index) => (
                              <li key={index} className="mb-1">
                                <strong>{item.word}</strong>
                                {item.img && (
                                  <Image
                                    src={item.img}
                                    alt={item.word}
                                    className="inline-block w-16 h-16 ml-2 object-cover rounded"
                                  />
                                )}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )
        })}
    </div>
  )
}