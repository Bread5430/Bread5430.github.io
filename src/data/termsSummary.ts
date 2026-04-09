export type SummarySegment =
  | { type: 'plain'; text: string }
  | { type: 'keyword'; text: string }

export interface TermSummaryItem {
  id: string
  title: string
  summarySegments: SummarySegment[]
  details: string
  example: string
}

export const termsSummary: TermSummaryItem[] = [
  {
    id: 'data-sharing',
    title: 'Data and third parties',
    summarySegments: [
      { type: 'plain', text: 'Your activity may be shared with ' },
      { type: 'keyword', text: 'advertising partners' },
      { type: 'plain', text: ' and used for ' },
      { type: 'keyword', text: 'targeted ads' },
      { type: 'plain', text: ' unless you opt out where offered.' },
    ],
    details:
      'Many services combine account data, device signals, and on-site behavior into profiles that are shared with ad networks, analytics vendors, and sometimes data brokers. Opt-out tools may be buried in settings, apply only to certain jurisdictions, or not cover “aggregated” or “de-identified” data that can still be risky.',
    example:
      'You sign up for a fitness app; it logs workouts and location. The policy allows sharing “usage data” with partners. You later see ads for supplements tied to your training habits—suggesting segments built from your in-app activity.',
  },
  {
    id: 'arbitration',
    title: 'Disputes and arbitration',
    summarySegments: [
      { type: 'plain', text: 'You may waive the right to ' },
      { type: 'keyword', text: 'sue in court' },
      { type: 'plain', text: ' or join a ' },
      { type: 'keyword', text: 'class action' },
      { type: 'plain', text: ', routing claims to private arbitration instead.' },
    ],
    details:
      'Binding arbitration clauses often require individual arbitration, which can make it costly or impractical to challenge small harms at scale. Some agreements include carve-outs; others let the company update dispute terms with notice only.',
    example:
      'A subscription overcharges thousands of users by a few dollars each. A class action could recover those amounts efficiently; an arbitration clause may force each person to arbitrate separately, which many will not pursue.',
  },
  {
    id: 'auto-renewal',
    title: 'Subscriptions and cancellation',
    summarySegments: [
      { type: 'plain', text: 'Plans may ' },
      { type: 'keyword', text: 'auto-renew' },
      { type: 'plain', text: ' and require cancellation ' },
      { type: 'keyword', text: 'before the billing date' },
      { type: 'plain', text: ' to avoid the next charge.' },
    ],
    details:
      'Free trials that convert to paid plans, annual billing with monthly-looking prices, and “cancel anytime” language that still bills through the end of a period are common friction points. Refund policies are often strict or discretionary.',
    example:
      'You start a 7-day trial, forget to cancel on day six, and are charged for a year because the fine print said the trial converts to an annual plan. Support cites the terms: no refund after renewal.',
  },
  {
    id: 'content-license',
    title: 'Content you upload',
    summarySegments: [
      { type: 'plain', text: 'Posting content can grant the service a ' },
      { type: 'keyword', text: 'broad license' },
      { type: 'plain', text: ' to use, display, and ' },
      { type: 'keyword', text: 'sublicense' },
      { type: 'plain', text: ' your material.' },
    ],
    details:
      '“License” clauses let platforms host and share your posts so the product works. Some go further: perpetual, irrevocable, worldwide rights for marketing, AI training, or redistribution—sometimes even after you delete your account, for copies already made.',
    example:
      'You upload photos to a creative community. The terms allow the company to use submissions in promotional campaigns without extra payment. A billboard appears featuring your image; the license in the ToS permitted “marketing and promotional use.”',
  },
  {
    id: 'liability-cap',
    title: 'Liability limits',
    summarySegments: [
      { type: 'plain', text: 'Damages may be capped at ' },
      { type: 'keyword', text: 'fees paid in the last month' },
      { type: 'plain', text: ' or ' },
      { type: 'keyword', text: 'disclaimer of indirect damages' },
      { type: 'plain', text: ' like lost profits.' },
    ],
    details:
      'Limitation-of-liability sections try to narrow what you can recover if something goes wrong—outages, data loss, security incidents, or harmful content. Enforceability varies by region and situation, but the language shapes what users expect they can claim.',
    example:
      'A paid tool loses a week of your project data during an outage. The terms cap liability at your last monthly payment ($9). Replacing the lost work costs far more, but the agreement points to the cap.',
  },
  {
    id: 'terms-changes',
    title: 'Changes to the terms',
    summarySegments: [
      { type: 'plain', text: 'The company can update terms with ' },
      { type: 'keyword', text: 'notice' },
      { type: 'plain', text: '; continued use may count as ' },
      { type: 'keyword', text: 'acceptance' },
      { type: 'plain', text: ' of the new version.' },
    ],
    details:
      'Update policies range from email + in-app banners to a posted revision date only. “Continued use” acceptance means not closing your account can lock you into new rules, including for data, fees, or dispute resolution.',
    example:
      'You joined under terms that allowed export of your data. A revision removes that guarantee and says continued use after 30 days means you agree. You keep using the app and only notice months later when you try to leave.',
  },
]
