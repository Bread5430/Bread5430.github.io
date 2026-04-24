/** Matches clause ids in `termsSummary.ts` for cross-linking. */
export type TermTopicId =
  | 'data-sharing'
  | 'arbitration'
  | 'auto-renewal'
  | 'content-license'
  | 'liability-cap'
  | 'terms-changes'

export type StanceShift =
  | 'toward_company'
  | 'toward_user'
  | 'mixed'
  | 'stable'

export interface TosRevisionEntry {
  id: string
  effectiveDate: string
  versionLabel: string
  title: string
  /** Plain-language summary of what moved in this revision. */
  narrative: string
  bullets: string[]
}

export interface TopicTrendArc {
  termId: TermTopicId
  termTitle: string
  arcSummary: string
  stanceShift: StanceShift
}

export const tosOverallTrend = {
  headline: 'Direction of change (prototype narrative)',
  body: 'Across these sample revisions, the agreement steadily broadened how data can be used and shared, added firmer limits on lawsuits and damages, and made subscription and renewal language more explicit. Change-notice rules stayed light: users are nudged to review updates, but acceptance is still largely tied to continued use.',
}

/** Newest first. Fictional timeline for the UI prototype. */
export const tosRevisionHistory: TosRevisionEntry[] = [
  {
    id: 'rev-2026-01',
    effectiveDate: '2026-01-15',
    versionLabel: 'v4.1',
    title: 'AI training and partner sharing',
    narrative:
      'The newest revision expands licensed uses of uploaded content and clarifies that aggregated or model-derived outputs may be shared with partners for product improvement.',
    bullets: [
      'Content license: broader rights for “model improvement” and partner analytics.',
      'Data sharing: new category of “inference outputs” treated as non-personal data.',
      'Terms changes: shorter notice window for non-material updates (14 days).',
    ],
  },
  {
    id: 'rev-2024-06',
    effectiveDate: '2024-06-01',
    versionLabel: 'v3.5',
    title: 'Arbitration and subscription clarity',
    narrative:
      'Disputes moved to binding arbitration with a class-action waiver. Subscription terms gained explicit auto-renewal and refund carve-outs.',
    bullets: [
      'Arbitration: individual arbitration required; small-claims carve-out narrowed.',
      'Auto-renewal: trial conversion language highlighted; refunds more discretionary.',
      'Liability: cap lowered to last month’s fees (was three months).',
    ],
  },
  {
    id: 'rev-2021-03',
    effectiveDate: '2021-03-20',
    versionLabel: 'v2.0',
    title: 'Ads, analytics, and marketing use',
    narrative:
      'Advertising and measurement language replaced a narrower “service operation” framing, allowing more third-party tags and cohort-based ad delivery.',
    bullets: [
      'Data sharing: opt-out moved from default-off to “where available” wording.',
      'Content: promotional use of public posts allowed without extra consent.',
      'Liability: indirect damages disclaimer strengthened.',
    ],
  },
  {
    id: 'rev-2019-08',
    effectiveDate: '2019-08-10',
    versionLabel: 'v1.0',
    title: 'Baseline consumer terms',
    narrative:
      'The original public terms emphasized running the core product: hosting user content, basic analytics, and standard limitation-of-liability language typical of early-stage apps.',
    bullets: [
      'Data sharing: limited to service providers and legal compliance.',
      'No arbitration clause; disputes referenced “courts in our state.”',
      'Liability: cap tied to fees paid in the prior three months.',
    ],
  },
]

export const tosTopicTrendArcs: TopicTrendArc[] = [
  {
    termId: 'data-sharing',
    termTitle: 'Data and third parties',
    stanceShift: 'toward_company',
    arcSummary:
      'Third-party and advertising language widened over time: from narrow service-provider sharing to partner analytics, cohort ads, and broader “product improvement” use.',
  },
  {
    termId: 'arbitration',
    termTitle: 'Disputes and arbitration',
    stanceShift: 'toward_company',
    arcSummary:
      'Court lawsuits and class actions were available in v1.0; later versions routed most claims to individual arbitration with tighter carve-outs.',
  },
  {
    termId: 'auto-renewal',
    termTitle: 'Subscriptions and cancellation',
    stanceShift: 'toward_company',
    arcSummary:
      'Renewal and trial mechanics became more explicit, with stronger emphasis on billing dates and more limited refund discretion in later versions.',
  },
  {
    termId: 'content-license',
    termTitle: 'Content you upload',
    stanceShift: 'toward_company',
    arcSummary:
      'The license started as a practical hosting grant and grew to cover marketing, AI-related uses, and partner-facing analytics derived from user content.',
  },
  {
    termId: 'liability-cap',
    termTitle: 'Liability limits',
    stanceShift: 'toward_company',
    arcSummary:
      'Caps and disclaimers tightened: the monetary cap shrank and indirect-damage exclusions became more comprehensive.',
  },
  {
    termId: 'terms-changes',
    termTitle: 'Changes to the terms',
    stanceShift: 'mixed',
    arcSummary:
      'Notice remained email or in-product posts, but later updates shortened windows for minor changes while keeping “continued use” as acceptance.',
  },
]

export function stanceShiftLabel(shift: StanceShift): string {
  switch (shift) {
    case 'toward_company':
      return 'Trend: more protective of the company'
    case 'toward_user':
      return 'Trend: more protective of users'
    case 'mixed':
      return 'Trend: mixed or situational'
    case 'stable':
      return 'Trend: little substantive change'
    default:
      return ''
  }
}
