import React from 'react'

function Obrazek(props) {
    const { hlavniNadpis, uvod, tlacitko } = props
    return (


        <section class="md:min-w-max max-w-6xl mx-auto items-center flex flex-col justify-between">



            <div class="flex flex-row justify-between max-w-lg items-center">
                <img src="https://via.placeholder.com/1200x750" class="object-none h-150 w-full"/>


            </div>
        </section>)
}


export default Obrazek