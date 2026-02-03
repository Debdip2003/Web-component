import React from 'react'

const MechanicalButton = ({
  text = 'Click Me',
  icon,
  backgroundColor = '#ffffff',
  textColor = '#000000',
  border = '2px solid rgba(0,0,0,0.2)',
  borderRadius = '8px',
  fontWeight = '600',
  fontSize = '16px',
  onClick
}) => {
  const buttonStyle = {
    backgroundColor,
    color: textColor,
    borderRadius,
    border,
    boxShadow: `
      0 6px 0 rgba(0,0,0,0.2),
      0 8px 1px rgba(0,0,0,0.15),
      0 10px 15px rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.3),
      inset 0 -1px 0 rgba(0,0,0,0.2)
    `,
    transition: 'all 0.1s ease',
    transform: 'translateY(0)',
    fontWeight: fontWeight,
    fontSize: fontSize,
    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    userSelect: 'none'
  }

  const hoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: `
      0 8px 0 rgba(0,0,0,0.2),
      0 10px 1px rgba(0,0,0,0.15),
      0 12px 18px rgba(0,0,0,0.35),
      inset 0 1px 0 rgba(255,255,255,0.3),
      inset 0 -1px 0 rgba(0,0,0,0.2)
    `
  }

  const activeStyle = {
    transform: 'translateY(4px)',
    boxShadow: `
      0 2px 0 rgba(0,0,0,0.2),
      0 3px 1px rgba(0,0,0,0.15),
      0 4px 8px rgba(0,0,0,0.25),
      inset 0 1px 3px rgba(0,0,0,0.3)
    `
  }

  const [isHover, setIsHover] = React.useState(false)
  const [isActive, setIsActive] = React.useState(false)
  const [ripples, setRipples] = React.useState([])

  const currentStyle = {
    ...buttonStyle,
    ...(isHover && !isActive ? hoverStyle : {}),
    ...(isActive ? activeStyle : {})
  }

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      id: Date.now(),
      x,
      y
    }

    setRipples(prev => [...prev, newRipple])

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)

    if (onClick) onClick(e)
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => { setIsHover(false); setIsActive(false) }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      style={currentStyle}
      className="relative flex items-center justify-center gap-2 px-8 py-3 overflow-hidden"
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.7)',
            transform: 'translate(-50%, -50%)',
            animation: 'ripple 0.6s ease-out',
            pointerEvents: 'none'
          }}
        />
      ))}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {text}
      </span>
      <style>{`
        @keyframes ripple {
          0% {
            width: 10px;
            height: 10px;
            opacity: 1;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }
      `}</style>
    </button>
  )
}

export default MechanicalButton
