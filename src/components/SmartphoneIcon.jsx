function SmartphoneIcon({color}) {
    return (
        <svg width="auto" height="100%" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_96_162)">
            <rect x="114.5" y="11.5" width="190" height="397" rx="28.5" stroke={color} strokeWidth="23"/>
            <rect x="316.5" y="85.5" width="6" height="30" fill={color} stroke={color}/>
            <rect x="96.5" y="85.5" width="6" height="30" fill={color} stroke={color}/>
            <rect x="96.5" y="121.5" width="6" height="30" fill={color} stroke={color}/>
            <rect x="171.5" y="53.5" width="17" height="77" rx="8.5" transform="rotate(-90 171.5 53.5)" fill={color} stroke={color}/>
            </g>
            <defs>
            <clipPath id="clip0_96_162">
            <rect width="420" height="420" fill={color} transform="matrix(0 1 1 0 0 0)"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default SmartphoneIcon