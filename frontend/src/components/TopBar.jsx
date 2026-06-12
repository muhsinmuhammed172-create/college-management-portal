import React from 'react'

const TopBar = () => {
  return (
    <div className="bg-red-900 text-white h-10 flex items-center justify-end px-10">
     <div className="flex gap-8 text-sm font-medium">
         <a href="#" className="hover:text-gray-300">NIRF</a>
         <a href="#" className="hover:text-gray-300">NAAC</a>
     </div>
    </div>
  )
}

export default TopBar