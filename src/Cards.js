import React from 'react'
import Obrazek from './Obrazek'

function Cards(props) {
    const { nazev1, nazev2, nazev3, nazev4, vypln1, vypln2, vypln3, vypln4 } = props
    return (


        <section class="mx-auto max-w-5xl px-10 lg:5 py-5 lg:py-10">


            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-6 lg:gap-x-32 gap-y-12">
                <div>
                    <div class="flex items-center filter drop-shadow-lg  justify-center w-8 h-8 mb-4 text-red-600 bg-red-100 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            class="w-15 h-15"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <h3 class="mb-6 text-left font-bold leading-tight text-gray-900">
                        {nazev1}
                    </h3>
                    <p class="text-left text-gray-500">
                        {vypln1}
                    </p>
                </div>
                <div>
                    <div class="flex items-center filter drop-shadow-lg  justify-center w-8 h-8 mb-4 text-pink-600 bg-pink-100 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-15 h-15"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                        </svg>
                    </div>
                    <h3 class="mb-6 text-left font-bold leading-tight text-gray-900">
                        {nazev2}
                    </h3>
                    <p class="text-left text-gray-500">
                    {vypln2}

                    </p>
                </div>
                <div>
                    <div class="flex items-center filter drop-shadow-lg  justify-center w-8 h-8 mb-4 text-yellow-600 bg-yellow-100 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-15 h-15"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                        </svg>
                    </div>
                    <h3 class="mb-6 text-left font-bold leading-tight text-gray-900">
                        {nazev3}
                    </h3>
                    <p class="text-left text-gray-500">
                    {vypln3}

                    </p>
                </div>

                <div>
                    <div class="filter drop-shadow-lg  flex items-center justify-center w-8 h-8 mb-4 text-yellow-600 bg-yellow-100 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-15 h-15"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                        </svg>
                    </div>
                    <h3 class="mb-6 text-left font-bold leading-tight text-gray-900">
                        {nazev4}
                    </h3>
                    <p class="text-left text-gray-500">
                    {vypln4}

                    </p>
                </div>





            </div>
        </section>
    )
}

export default Cards