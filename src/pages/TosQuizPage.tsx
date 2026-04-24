import { Link } from 'react-router-dom'
import { quizPrompts, tosPrototypeMeta } from '../data/tosPrototypeDocument'
import './TosQuizPage.css'

export function TosQuizPage() {
  return (
    <div className="tos-quiz">
      <header className="tos-quiz__header">
        <h1>Check your understanding</h1>
        <p className="tos-quiz__meta">{tosPrototypeMeta.serviceName}</p>
        <p className="tos-quiz__intro">
          Short free-response prompts about high-impact parts of the Terms. This prototype does not
          store or grade answers.
        </p>
        <p className="tos-quiz__back">
          <Link to="/" className="tos-quiz__back-link">
            ← Back to Terms of Service
          </Link>
        </p>
      </header>

      <section className="tos-quiz__section" aria-labelledby="tos-quiz-fields-heading">
        <h2 id="tos-quiz-fields-heading" className="tos-quiz__sr-only">
          Questions
        </h2>
        <div className="tos-quiz__fields">
          {quizPrompts.map((q) => (
            <div key={q.id} className="tos-quiz__field">
              <label className="tos-quiz__label" htmlFor={q.id}>
                {q.question}
              </label>
              {q.helper ? (
                <p id={`${q.id}-hint`} className="tos-quiz__hint">
                  {q.helper}
                </p>
              ) : null}
              <textarea
                id={q.id}
                className="tos-quiz__input"
                name={q.id}
                rows={4}
                aria-describedby={q.helper ? `${q.id}-hint` : undefined}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
