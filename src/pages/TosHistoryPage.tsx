import { Link } from 'react-router-dom'
import {
  stanceShiftLabel,
  tosOverallTrend,
  tosRevisionHistory,
  tosTopicTrendArcs,
} from '../data/tosRevisionHistory'
import './TosHistoryPage.css'

function formatEffectiveDate(iso: string) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

export function TosHistoryPage() {
  const oldest = tosRevisionHistory[tosRevisionHistory.length - 1]
  const newest = tosRevisionHistory[0]

  return (
    <div className="tos-history">
      <header className="tos-history__header">
        <h1>Terms of Service — Revision history</h1>
        <p className="tos-history__intro">
          Fictional changelog for this prototype. Each entry summarizes what
          shifted between versions so you can see the{' '}
          <strong className="tos-history__intro-strong">overall drift</strong>{' '}
          of the document, not every edited comma.
        </p>
        <p className="tos-history__intro tos-history__intro--secondary">
          <Link to="/" className="tos-history__link">
            ← Back to Terms of Service
          </Link>
        </p>
      </header>

      <section className="tos-history__section" aria-labelledby="trend-heading">
        <h2 id="trend-heading" className="tos-history__h2">
          General trend
        </h2>
        <div className="tos-trend-banner">
          <p className="tos-trend-banner__headline">{tosOverallTrend.headline}</p>
          <p className="tos-trend-banner__body">{tosOverallTrend.body}</p>
          <div className="tos-trend-span" aria-hidden>
            <span className="tos-trend-span__label">{formatEffectiveDate(oldest.effectiveDate)}</span>
            <span className="tos-trend-span__track">
              <span className="tos-trend-span__fill" />
            </span>
            <span className="tos-trend-span__label">{formatEffectiveDate(newest.effectiveDate)}</span>
          </div>
          <p className="tos-trend-span__caption">
            Illustrative arc: baseline consumer terms → broader data and content
            use → firmer dispute and liability limits.
          </p>
        </div>
      </section>

      <section className="tos-history__section" aria-labelledby="topics-heading">
        <h2 id="topics-heading" className="tos-history__h2">
          Topic-level drift
        </h2>
        <p className="tos-history__lede">
          How each theme moved across the same revisions (still prototype
          narrative).
        </p>
        <ul className="tos-topic-arc-list">
          {tosTopicTrendArcs.map((topic) => (
            <li key={topic.termId} className="tos-topic-arc">
              <div className="tos-topic-arc__head">
                <h3 className="tos-topic-arc__title">{topic.termTitle}</h3>
                <span
                  className={`tos-topic-arc__badge tos-topic-arc__badge--${topic.stanceShift}`}
                >
                  {stanceShiftLabel(topic.stanceShift)}
                </span>
              </div>
              <p className="tos-topic-arc__summary">{topic.arcSummary}</p>
              <p className="tos-topic-arc__jump">
                <Link
                  to={`/?focus=${encodeURIComponent(topic.termId)}`}
                  className="tos-history__link"
                >
                  See current summary for this topic →
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="tos-history__section" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="tos-history__h2">
          Revisions (newest first)
        </h2>
        <ol className="tos-revision-timeline">
          {tosRevisionHistory.map((rev, index) => (
            <li key={rev.id} className="tos-revision">
              <div className="tos-revision__marker" aria-hidden>
                {index === 0 ? <span className="tos-revision__dot tos-revision__dot--current" /> : <span className="tos-revision__dot" />}
              </div>
              <article className="tos-revision__card">
                <div className="tos-revision__meta">
                  <time dateTime={rev.effectiveDate} className="tos-revision__date">
                    {formatEffectiveDate(rev.effectiveDate)}
                  </time>
                  <span className="tos-revision__version">{rev.versionLabel}</span>
                </div>
                <h3 className="tos-revision__title">{rev.title}</h3>
                <p className="tos-revision__narrative">{rev.narrative}</p>
                <h4 className="tos-revision__bullets-label">Highlights</h4>
                <ul className="tos-revision__bullets">
                  {rev.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
