import React from 'react'

const MechanicalButton = ({
  text = 'Click Me',
  icon,
  backgroundColor = '#f4f4f5',
  textColor='#18181b ',
  borderColor='#9f9fa9',
  borderRadius='6px',
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor, textColor, borderColor, borderRadius }}
      className="relative flex items-center justify-center gap-2 px-10 py-3 border shadow-[0_10px_0_#6b7280,0_10px_18px_rgba(0,0,0,0.45)] before:absolute before:inset-0 before:rounded-md before:bg-lineaer-to-b before:from-white/60 before:to-transparent before:pointer-events-none transition-all duration-75 ease-out hover:-translate-y-px hover:shadow-[0_10px_0_#6b7280,0_12px_22px_rgba(0,0,0,0.5)] active:translate-y-0.75 active:shadow-[0_2px_0_#4b5563,0_4px_8px_rgba(0,0,0,0.4)] hover:cursor-pointer"
    >
      {icon}
      {text}
    </button>
  )
}

export default MechanicalButton
