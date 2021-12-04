import React from 'react'

function DruhyNadpis(props) {
    const { barevny, druhyNadpis } = props
    return (


        <section class="md:min-w-max max-w-2xl mx-auto items-center flex flex-col justify-between mb-10">


            <h3 className="text-base pb-2 sm:text-base lg:text-basee font-semibold  bg-clip-text  text-center text-purple-500">{barevny}</h3>
            <h2 class="text-3xl sm:text-3xl lg:text-3xl font-semibold  bg-clip-text  text-center text-black-900"> {druhyNadpis}</h2>

        </section>)
}


export default DruhyNadpis