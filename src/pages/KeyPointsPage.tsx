import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { termsSummary } from '../data/termsSummary'
import { ExpandableTermCard } from '../components/ExpandableTermCard'
import '../App.css'

export function KeyPointsPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const focusId = searchParams.get('focus')
    if (!focusId) return
    const el = document.getElementById(focusId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const next = new URLSearchParams(searchParams)
    next.delete('focus')
    setSearchParams(next, { replace: true })
  }, [searchParams, setSearchParams])

  return (
    <div className="tos-page">
      <header className="tos-header">
        <h1>Terms of Service — Key points</h1>
        <p className="tos-intro">
          This is a UI prototype: short summaries of common clauses, not legal
          advice or the terms of any real service.
        </p>
      </header>
      <ul className="tos-list">
        {termsSummary.map((item) => (
          <li key={item.id} id={item.id} className="tos-list__item">
            <ExpandableTermCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
