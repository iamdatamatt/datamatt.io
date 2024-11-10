interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`text-center py-8 text-gray-400 ${className}`}>
      © Matt Trombley. All rights reserved.
    </footer>
  );
}
