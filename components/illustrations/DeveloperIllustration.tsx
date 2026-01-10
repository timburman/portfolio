const DeveloperIllustration = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Desk */}
      <path
        d="M50 220 L350 220 L370 280 L30 280 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      
      {/* Monitor */}
      <rect
        x="120"
        y="80"
        width="160"
        height="100"
        rx="8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.8"
      />
      
      {/* Monitor Stand */}
      <path
        d="M180 180 L180 210 L220 210 L220 180"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M160 210 L240 210"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />
      
      {/* Code lines on screen */}
      <line x1="135" y1="100" x2="195" y2="100" stroke="hsl(350 95% 60%)" strokeWidth="2" opacity="0.6" />
      <line x1="135" y1="115" x2="175" y2="115" stroke="hsl(223 95% 60%)" strokeWidth="2" opacity="0.6" />
      <line x1="145" y1="130" x2="210" y2="130" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="145" y1="145" x2="190" y2="145" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="135" y1="160" x2="165" y2="160" stroke="hsl(350 95% 60%)" strokeWidth="2" opacity="0.6" />
      
      {/* Keyboard */}
      <rect
        x="140"
        y="230"
        width="120"
        height="30"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      
      {/* Coffee cup */}
      <ellipse cx="320" cy="225" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M300 225 L305 255 L335 255 L340 225" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M340 230 Q360 230 360 245 Q360 255 340 255" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
      
      {/* Steam */}
      <path d="M315 210 Q310 200 315 190" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M325 210 Q330 198 325 185" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      
      {/* Plant */}
      <rect x="60" y="200" width="30" height="25" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M75 200 Q75 180 65 170" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M75 200 Q75 175 85 165" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M75 195 Q80 185 75 175" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      
      {/* Floating blockchain/Web3 elements */}
      <g opacity="0.4">
        {/* Hexagon 1 */}
        <polygon
          points="320,60 335,70 335,90 320,100 305,90 305,70"
          stroke="hsl(223 95% 60%)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Hexagon 2 */}
        <polygon
          points="80,100 92,108 92,124 80,132 68,124 68,108"
          stroke="hsl(350 95% 60%)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Connection lines */}
        <line x1="92" y1="116" x2="120" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="305" y1="80" x2="280" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </g>
    </svg>
  );
};

export default DeveloperIllustration;
