import { useId, useState } from 'react'
import type { TermSummaryItem } from '../data/termsSummary'
import './ExpandableTermCard.css'

interface ExpandableTermCardProps {
  item: TermSummaryItem
}

export function ExpandableTermCard({ item }: ExpandableTermCardProps) {
  const [expanded, setExpanded] = useState(false)
  const baseId = useId()
  const titleId = `${baseId}-title`
  const panelId = `${baseId}-panel`

  return (
    <article className="term-card">
      <button
        type="button"
        className="term-card__toggle"
        aria-expanded={expanded}
        aria-controls={panelId}
        id={`${baseId}-toggle`}
        onClick={() => setExpanded((v) => !v)}
      >
        <span className="term-card__toggle-main">
          <span id={titleId} className="term-card__title">
            {item.title}
          </span>
          <span className="term-card__summary">
            {item.summarySegments.map((seg, i) =>
              seg.type === 'keyword' ? (
                <mark key={i} className="term-card__keyword">
                  {seg.text}
                </mark>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
          </span>
        </span>
        <span className="term-card__chevron" aria-hidden>
          {expanded ? '▾' : '▸'}
        </span>
        <span className="term-card__hint">
          {expanded ? 'Show less' : 'Show details'}
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={titleId}
        hidden={!expanded}
        className="term-card__panel"
      >
        <h3 className="term-card__subhead">Details</h3>
        <p className="term-card__body">{item.details}</p>
        <h3 className="term-card__subhead">Example case</h3>
        <p className="term-card__body term-card__example">{item.example}</p>
      </div>
    </article>
  )
}
