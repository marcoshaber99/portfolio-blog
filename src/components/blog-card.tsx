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
    <circle cx="100" cy="100" r="90" fill="url(#gradient)" />
    <circle cx="100" cy="100" r="20" fill="#ffffff" />
    <circle cx="50" cy="50" r="15" fill="#ffffff" />
    <circle cx="150" cy="50" r="15" fill="#ffffff" />
    <circle cx="50" cy="150" r="15" fill="#ffffff" />
    <circle cx="150" cy="150" r="15" fill="#ffffff" />
    <line x1="65" y1="65" x2="85" y2="85" stroke="#ffffff" strokeWidth="2" />
    <line x1="135" y1="65" x2="115" y2="85" stroke="#ffffff" strokeWidth="2" />
    <line x1="65" y1="135" x2="85" y2="115" stroke="#ffffff" strokeWidth="2" />
    <line x1="135" y1="135" x2="115" y2="115" stroke="#ffffff" strokeWidth="2" />
    <path
      d="M100 90 A10 10 0 1 0 100 110 A10 10 0 1 0 100 90"
      fill="#61dafb"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="18"
      ry="7"
      stroke="#61dafb"
      strokeWidth="2"
      fill="none"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="18"
      ry="7"
      stroke="#61dafb"
      strokeWidth="2"
      fill="none"
      transform="rotate(60 100 100)"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="18"
      ry="7"
      stroke="#61dafb"
      strokeWidth="2"
      fill="none"
      transform="rotate(-60 100 100)"
    />
    <defs>
      <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(90)">
        <stop stopColor="#4F46E5" />
        <stop offset="1" stopColor="#7C3AED" />
      </radialGradient>
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
          <div className="bg-muted/30 rounded-lg p-2 h-full">
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