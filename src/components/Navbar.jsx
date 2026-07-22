import { useState } from 'react'
import './Navbar.css'

const LINKS = [
  { label: 'Boutique', href: '#boutique' },
  { label: 'Nouveautés', href: '#nouveautes' },
  { label: 'Notre histoire', href: '#histoire' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#accueil" className="navbar__brand">
          Classe Bique
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#boutique" className="navbar__cta" onClick={() => setOpen(false)}>
            Acheter
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
