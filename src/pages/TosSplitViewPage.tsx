import { useCallback, useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react'
import { tosPrototypeMeta, tosSections, type TosPrototypeSection } from '../data/tosPrototypeDocument'
import './TosSplitViewPage.css'

function getSection(id: string | null): TosPrototypeSection | undefined {
  if (!id) return undefined
  return tosSections.find((s) => s.id === id)
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function sectionMatchesQuery(section: TosPrototypeSection, q: string): boolean {
  const blob = [
    section.legalHeading,
    ...section.legalParagraphs,
    section.cardTitle,
    section.cardSummary,
    section.translationExcerpt,
  ]
    .join('\u0000')
    .toLowerCase()
  return blob.includes(q)
}

function highlightMatches(text: string, query: string): ReactNode {
  const q = query.trim()
  if (!q) return text
  const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, 'gi'))
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="tos-split__hl">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export function TosSplitViewPage() {
  const dialogTitleId = useId()
  const searchFieldId = useId()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastCardTriggerRef = useRef<HTMLButtonElement | null>(null)

  const searchNeedle = searchQuery.trim().toLowerCase()

  const filteredSections = useMemo(() => {
    if (!searchNeedle) return tosSections
    return tosSections.filter((s) => sectionMatchesQuery(s, searchNeedle))
  }, [searchNeedle])

  const selected = getSection(selectedSectionId)
  const overlayOpen = Boolean(selected)

  useEffect(() => {
    if (!overlayOpen) return
    closeButtonRef.current?.focus()
  }, [overlayOpen])

  useEffect(() => {
    if (!selectedSectionId) return
    const el = document.getElementById(`legal-${selectedSectionId}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [selectedSectionId])

  useEffect(() => {
    if (!searchNeedle || !selectedSectionId) return
    const s = getSection(selectedSectionId)
    if (!s || !sectionMatchesQuery(s, searchNeedle)) {
      setSelectedSectionId(null)
    }
  }, [searchNeedle, selectedSectionId])

  const closeOverlay = useCallback(() => {
    setSelectedSectionId(null)
    queueMicrotask(() => {
      lastCardTriggerRef.current?.focus()
      lastCardTriggerRef.current = null
    })
  }, [])

  useEffect(() => {
    if (!overlayOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeOverlay()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [overlayOpen, closeOverlay])

  const onCardActivate = (section: TosPrototypeSection, trigger: HTMLButtonElement) => {
    lastCardTriggerRef.current = trigger
    setSelectedSectionId(section.id)
  }

  return (
    <div className="tos-split">
      <header className="tos-split__header">
        <div className="tos-split__header-main">
          <h1>Terms of Service</h1>
          <p className="tos-split__meta">
            {tosPrototypeMeta.serviceName} · Effective {tosPrototypeMeta.effectiveDate}
          </p>
          <p className="tos-split__disclaimer">{tosPrototypeMeta.disclaimer}</p>
        </div>
        <div className="tos-split__header-search">
          <label className="tos-split__search-label" htmlFor={searchFieldId}>
            Search terms and summaries
          </label>
          <input
            id={searchFieldId}
            className="tos-split__search-input"
            type="search"
            placeholder="e.g. arbitration, data, refund…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
          <p className="tos-split__search-status" role="status" aria-live="polite">
            {searchNeedle
              ? `${filteredSections.length} matching section${filteredSections.length === 1 ? '' : 's'}`
              : `${tosSections.length} sections`}
          </p>
        </div>
      </header>

      <div className="tos-split__grid" aria-label="Terms and plain-language views">
        <div className="tos-split__pane tos-split__pane--legal" tabIndex={-1}>
          <h2 className="tos-split__pane-title">Legal document</h2>
          <div className="tos-split__legal-body">
            {filteredSections.length === 0 ? (
              <p className="tos-split__empty">
                No sections match your search. Try a different keyword.
              </p>
            ) : (
              filteredSections.map((section) => (
                <section
                  key={section.id}
                  id={`legal-${section.id}`}
                  className={
                    'tos-split__legal-section' +
                    (selectedSectionId === section.id ? ' tos-split__legal-section--active' : '')
                  }
                  aria-current={selectedSectionId === section.id ? 'true' : undefined}
                >
                  <h3 className="tos-split__legal-heading">
                    {highlightMatches(section.legalHeading, searchQuery)}
                  </h3>
                  {section.legalParagraphs.map((p, i) => (
                    <p key={i} className="tos-split__legal-p">
                      {highlightMatches(p, searchQuery)}
                    </p>
                  ))}
                </section>
              ))
            )}
          </div>
        </div>

        <div className="tos-split__pane tos-split__pane--right">
          <h2 className="tos-split__pane-title">Plain-language summary</h2>
          <div className="tos-split__summary-shell">
            <ul className="tos-split__cards" aria-label="Section summaries">
              {filteredSections.length === 0 ? (
                <li className="tos-split__cards-item tos-split__cards-item--empty">
                  <p className="tos-split__empty">No summary cards match your search.</p>
                </li>
              ) : (
                filteredSections.map((section) => (
                  <li key={section.id} className="tos-split__cards-item">
                    <button
                      type="button"
                      className={
                        'tos-split__card' +
                        (selectedSectionId === section.id ? ' tos-split__card--selected' : '')
                      }
                      aria-pressed={selectedSectionId === section.id}
                      onClick={(e) => onCardActivate(section, e.currentTarget)}
                    >
                      <span className="tos-split__card-title">
                        {highlightMatches(section.cardTitle, searchQuery)}
                      </span>
                      <span className="tos-split__card-summary">
                        {highlightMatches(section.cardSummary, searchQuery)}
                      </span>
                      <span className="tos-split__card-translation">
                        {highlightMatches(section.translationExcerpt, searchQuery)}
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>

            {overlayOpen && selected ? (
              <div
                className="tos-split__overlay"
                role="dialog"
                aria-modal="true"
                aria-labelledby={dialogTitleId}
              >
                <div className="tos-split__overlay-inner">
                  <div className="tos-split__overlay-head">
                    <h3 id={dialogTitleId} className="tos-split__overlay-title">
                      {selected.cardTitle}
                    </h3>
                    <button
                      ref={closeButtonRef}
                      type="button"
                      className="tos-split__overlay-close"
                      onClick={closeOverlay}
                    >
                      Close
                    </button>
                  </div>
                  <div className="tos-split__overlay-body">
                    <h4 className="tos-split__overlay-sub">More detail</h4>
                    <p className="tos-split__overlay-p">{selected.detailNarrative}</p>
                    <h4 className="tos-split__overlay-sub">How this could apply to you</h4>
                    <p className="tos-split__overlay-p tos-split__overlay-example">
                      {selected.userScenario}
                    </p>
                    <h4 className="tos-split__overlay-sub">
                      Movements and campaigns that push back on this kind of clause
                    </h4>
                    <p className="tos-split__overlay-note">
                      Illustrative placeholders only — not real endorsements or live resources.
                    </p>
                    <ul className="tos-split__opposition-list">
                      {selected.oppositionMovements.map((m) => (
                        <li key={m.title} className="tos-split__opposition-item">
                          <span
                            className="tos-split__fake-link"
                            title="Prototype placeholder — not a real link"
                          >
                            {m.title}
                          </span>
                          <p className="tos-split__opposition-desc">{m.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
