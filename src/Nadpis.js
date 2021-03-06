import React from 'react'

function Nadpis(props) {
    const { hlavniNadpis, uvod, tlacitko } = props
    return (


        <section class="md:min-w-max max-w-6xl mx-auto items-center flex flex-col justify-between md:py-44 py-10 px-5 md:space-y-14 space-y-8 mb-10">

            <h1 class="text-4xl sm:text-5xl lg:text-7xl font-semibold  bg-clip-text  text-center text-black-900"> {hlavniNadpis} Top Quality Digital <br></br> Products To Explore </h1>

            <div class=" md:text-xl md:max-w-xl text-center font-normal text-black-900 "> {uvod} </div>

            <div class="flex flex-row justify-between max-w-lg items-center">
                <div class="w-full flex justify-start">
                    <a  class="inline-block rounded-full bg-brand-light text-white md:px-10 px-7 md:py-3 py-3 md:text-xl text-lg bg-purple-500 hover:border-purple-900 text-white-500 font-semibold    animate-pulse">{tlacitko}</a>
                </div>
            </div>




            <img className="pt-10 filter drop-shadow-2xl " src="https://via.placeholder.com/700x500"></img> 
        </section>)
}


export default Nadpis
