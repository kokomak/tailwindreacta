import React from 'react'
import Obrazek from './Obrazek'

function ObrazekKarty(props) {
    const { nazev1, nazev2, nazev3, nazev4, vypln1, vypln2, vypln3, vypln4 } = props
    return (


        <section class="mx-auto max-w-5xl px-10 lg:5 py-5 lg:py-10 items-center">

            <div className="grid grid-cols-2">

                <img className="pt-10 filter drop-shadow-2xl " src="https://via.placeholder.com/500"></img>


                <div className="grid-cols-1 ">

                    <h3 className="text-base pb-2 sm:text-base lg:text-base font-semibold  bg-clip-text  text-left text-purple-500">OUR SERVICES</h3>
                    <h2 class="text-3xl sm:text-3xl lg:text-3xl font-semibold  bg-clip-text  text-left text-black-900">Business Goals<br></br>Achieved with Design</h2>


                    <div className="">
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


                    <div className="">
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

                </div>













            </div>
        </section>
    )
}

export default ObrazekKarty