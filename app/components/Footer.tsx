interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`text-center py-8 text-gray-400 ${className}`}>
      © {new Date().getFullYear()} Matt Trombley. All rights reserved.
    </footer>
  );
}
