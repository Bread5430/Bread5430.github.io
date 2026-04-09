import './App.css'
import { termsSummary } from './data/termsSummary'
import { ExpandableTermCard } from './components/ExpandableTermCard'

function App() {
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
          <li key={item.id} className="tos-list__item">
            <ExpandableTermCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
