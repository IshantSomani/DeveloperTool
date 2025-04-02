import React, { useEffect, useState } from 'react'
import Image_Link from '../assets/link.png'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const VSCodeExtension = () => {
    const [categories, setCategories] = useState([])

    const fetchCategory = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}`)
            const data = await response.json()
            setCategories(data['vscode-extension'])
        } catch (error) {
            console.error('Error fetching categories:', error)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    return (
        <>
            <Title title="VS Code Extension" />
            <div className="flex items-center place-self-center mb-4 text-sm">
                <Link
                    to="/"
                >
                    Home
                </Link>
                <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </span>
                <span className="text-gray-600">VS Code Extension</span>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8">
                {categories.map((item) => (
                    <div
                        key={item.id}
                        className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4"
                        >
                            <div className="flex justify-between items-start">
                                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blacktransition-colors duration-200">
                                    {item.title}
                                </h2>
                                <img
                                    src={Image_Link}
                                    alt="link"
                                    className="w-4 h-4 mt-1 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300"
                                />
                            </div>

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                        </a>
                    </div>
                ))}
            </section>
        </>
    )
}

export default VSCodeExtension