import React from 'react'

const SidebarItem = ({ icon, text, active, onClick }) => {
  return (
    <div
      className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-200 ${active ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

export default SidebarItem
