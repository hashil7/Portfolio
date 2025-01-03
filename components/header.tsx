'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center space-x-2" href="/">
          <span className="font-bold text-xl">Hashil Muhammed</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="hover:text-primary transition-colors" aria-label="About section">About</Link>
          <Link href="#experience" className="hover:text-primary transition-colors" aria-label="Experience section">Experience</Link>
          <Link href="#projects" className="hover:text-primary transition-colors" aria-label="Projects section">Projects</Link>
          <Link href="#skills" className="hover:text-primary transition-colors" aria-label="Skills section">Skills</Link>
          <Link href="#achievements" className="hover:text-primary transition-colors" aria-label="Achievements section">Achievements</Link>
          <Link href="#contact" className="hover:text-primary transition-colors" aria-label="Contact section">Contact</Link>
        </nav>
        <Button className="hidden md:inline-flex" asChild>
          <a href="/Hashil_Muhammed_Resume.pdf" download>Download CV</a>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="#about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)} aria-label="About section">About</Link>
            <Link href="#experience" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)} aria-label="Experience section">Experience</Link>
            <Link href="#projects" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)} aria-label="Projects section">Projects</Link>
            <Link href="#skills" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)} aria-label="Skills section">Skills</Link>
            <Link href="#achievements" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)} aria-label="Achievements section">Achievements</Link>
            <Link href="#contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)} aria-label="Contact section">Contact</Link>
            <Button asChild>
              <a href="/Hashil_Muhammed_Resume.pdf" download>Download CV</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

