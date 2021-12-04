import React from 'react'

function Header(props) {
    const { menuItem1, menuItem2, menuItem3, menuItem4, buttonText } = props
    return (
        <div class="pt-5 items-center space-x-5">



            <a href="#" class="py-4 px-4 text-base font-medium text-gray-500 hover:text-purple-900">
                {menuItem1}
            </a>
            <a href="#" class="py-4 px-4 text-base font-medium text-gray-500 hover:text-purple-900">
                {menuItem2}
            </a>
            <a href="#" class="py-4 px-4 text-base font-medium text-gray-500 hover:text-purple-900">
                {menuItem3}
            </a>
            <a href="#" class="py-4 px-4 text-base font-medium text-gray-500 hover:text-purple-900 ">
                {menuItem4}
            </a>


            <button class= "inline-block text-sm px-4 py-2 hover:text-purple-900  hover:border-purple-900 text-purple-500 font-semibold   border border-purple-500 rounded-full ">
                {buttonText}
            </button>



        </div>
    )
}

export default Header