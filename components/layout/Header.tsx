import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <span className="site-header__brand">AgenticClinic</span>
      <nav className="site-header__nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
      </nav>
    </header>
  )
}
