import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  href: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const ReactContextSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Central node (Context) */}
    <circle cx="100" cy="100" r="4" fill="#61dafb">
      <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Outer nodes (Components) */}
    <circle cx="60" cy="60" r="3" fill="#61dafb" opacity="0.8" />
    <circle cx="140" cy="60" r="3" fill="#61dafb" opacity="0.8" />
    <circle cx="60" cy="140" r="3" fill="#61dafb" opacity="0.8" />
    <circle cx="140" cy="140" r="3" fill="#61dafb" opacity="0.8" />

    {/* Connection lines */}
    <line x1="64" y1="64" x2="96" y2="96" stroke="url(#lineGradient)" strokeWidth="1.5">
      <animate attributeName="stroke-dasharray" values="0,40;40,0;0,40" dur="3s" repeatCount="indefinite" />
    </line>
    <line x1="136" y1="64" x2="104" y2="96" stroke="url(#lineGradient)" strokeWidth="1.5">
      <animate attributeName="stroke-dasharray" values="0,40;40,0;0,40" dur="3s" repeatCount="indefinite" />
    </line>
    <line x1="64" y1="136" x2="96" y2="104" stroke="url(#lineGradient)" strokeWidth="1.5">
      <animate attributeName="stroke-dasharray" values="0,40;40,0;0,40" dur="3s" repeatCount="indefinite" />
    </line>
    <line x1="136" y1="136" x2="104" y2="104" stroke="url(#lineGradient)" strokeWidth="1.5">
      <animate attributeName="stroke-dasharray" values="0,40;40,0;0,40" dur="3s" repeatCount="indefinite" />
    </line>

    {/* React-inspired orbital rings */}
    <g filter="url(#glow)">
      <ellipse
        cx="100"
        cy="100"
        rx="50"
        ry="20"
        stroke="url(#ringGradient)"
        strokeWidth="1.5"
        fill="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="10s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse
        cx="100"
        cy="100"
        rx="50"
        ry="20"
        stroke="url(#ringGradient)"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(60 100 100)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="60 100 100"
          to="420 100 100"
          dur="14s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse
        cx="100"
        cy="100"
        rx="50"
        ry="20"
        stroke="url(#ringGradient)"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(-60 100 100)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="-60 100 100"
          to="300 100 100"
          dur="18s"
          repeatCount="indefinite"
        />
      </ellipse>
    </g>

    {/* Gradient definitions */}
    <defs>
      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
        <stop stopColor="#61dafb" stopOpacity="0.2" />
        <stop offset="1" stopColor="#61dafb" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
        <stop stopColor="#61dafb" stopOpacity="0.3" />
        <stop offset="1" stopColor="#61dafb" stopOpacity="0.7" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export function BlogCard({ href, title, description, date, image }: BlogCardProps) {
  return (
    <Link 
      href={href} 
      className="group block bg-card hover:bg-accent/5 rounded-lg transition-all duration-300 
                 border border-border shadow-sm hover:shadow-md overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
        {image === "react-context-svg" ? (
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-2 h-full">
            <ReactContextSVG />
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="border-t border-border" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <p className="mt-2 text-xs text-muted-foreground">{date}</p>
      </div>
    </Link>
  );
}