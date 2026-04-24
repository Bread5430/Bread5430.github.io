export interface OppositionMovement {
  title: string
  description: string
}

export interface TosPrototypeSection {
  id: string
  legalHeading: string
  legalParagraphs: string[]
  cardTitle: string
  cardSummary: string
  translationExcerpt: string
  detailNarrative: string
  userScenario: string
  oppositionMovements: OppositionMovement[]
}

export interface QuizPrompt {
  id: string
  question: string
  helper?: string
}

export const tosPrototypeMeta = {
  serviceName: 'ExampleCloud Services (fictional)',
  effectiveDate: 'April 1, 2026',
  disclaimer:
    'This is a classroom UI prototype. It is not legal advice and does not describe any real company.',
}

export const tosSections: TosPrototypeSection[] = [
  {
    id: 'acceptance',
    legalHeading: '1. Acceptance of terms',
    legalParagraphs: [
      'By creating an account, clicking “I agree,” or otherwise accessing or using ExampleCloud Services (“the Services”), you (“User”) enter into a binding agreement with ExampleCloud, Inc. (“Company”) governed by these Terms of Service (“Terms”), our Privacy Policy, and any additional terms presented at the point of purchase or enrollment.',
      'If you do not agree, you must not use the Services. Company may refuse service, close accounts, or change eligibility criteria at any time, subject to applicable law.',
    ],
    cardTitle: 'Acceptance',
    cardSummary:
      'Using the product counts as signing a contract that includes these Terms and the Privacy Policy.',
    translationExcerpt:
      'In plain terms: the moment you make an account or even use the site without one, you are telling the company you have read and accept their rules. If you disagree, you are not supposed to use the service at all. The company can also decide who is allowed to sign up.',
    detailNarrative:
      'Courts often treat clickwrap and browsewrap acceptance as enforceable when the user had reasonable notice. Disputes frequently turn on whether updated terms were presented clearly and whether “continued use” language was conspicuous.',
    userScenario:
      'You download a mobile app and tap through a signup flow. A link to the Terms appears in small text under the primary button. You never open the PDF, but you complete registration—most interfaces will treat that as acceptance.',
    oppositionMovements: [
      {
        title: 'Fair Terms Coalition (illustrative)',
        description:
          'Advocates for clearer upfront summaries and limits on “bundled” policies that users cannot negotiate.',
      },
      {
        title: 'Student digital-rights reading group (placeholder)',
        description:
          'Runs workshops comparing clickwrap patterns across consumer apps; no endorsement of any vendor.',
      },
    ],
  },
  {
    id: 'accounts',
    legalHeading: '2. Accounts, credentials, and security',
    legalParagraphs: [
      'You are responsible for maintaining the confidentiality of passwords, API keys, and other credentials. You must notify Company promptly of any unauthorized access. Company is not liable for losses arising from your failure to secure credentials, except where prohibited by law.',
      'Company may require multi-factor authentication, rotate tokens, or suspend accounts that appear compromised. You grant Company permission to take technical measures it reasonably believes are necessary to protect the Services and other users.',
    ],
    cardTitle: 'Your account',
    cardSummary:
      'You are on the hook for password and key leaks; the company can lock accounts if they look compromised.',
    translationExcerpt:
      'Plain language: if someone steals your password because you reused it elsewhere, the contract usually says that is your problem, not theirs. They can also freeze your account while they investigate suspicious logins.',
    detailNarrative:
      'Security clauses allocate risk between the provider and the customer. Enterprise contracts sometimes negotiate carve-outs; consumer terms are typically one-sided.',
    userScenario:
      'You share a staging API key in a public GitHub gist by mistake. A scraper finds it within minutes. Under many terms, you remain responsible for charges or misuse until you rotate the key—even if the dashboard UI made rotation awkward.',
    oppositionMovements: [
      {
        title: 'Credential hygiene nonprofit (placeholder)',
        description:
          'Pushes vendors to offer safer defaults, such as scoped tokens and breach notifications without blaming users.',
      },
    ],
  },
  {
    id: 'data-ads',
    legalHeading: '3. Data collection, analytics, and advertising',
    legalParagraphs: [
      'Company may collect identifiers, device characteristics, usage telemetry, and content you submit to the Services. Company and its affiliates, subprocessors, and advertising partners may use this information to operate, personalize, secure, market, and improve products, including by building aggregated or inferred audience segments.',
      'Where required by law, Company will obtain consent for certain processing. Otherwise, you agree that Company may rely on legitimate interests, contract performance, and other lawful bases described in the Privacy Policy. You may have limited opt-out rights depending on jurisdiction.',
    ],
    cardTitle: 'Data and ads',
    cardSummary:
      'The service can log a lot about you and share it with ad and analytics partners; opt-outs may be limited.',
    translationExcerpt:
      'Everyday meaning: they can track clicks, device type, and what you upload. That data can go to vendors who help run the site and to ad networks that try to show you relevant promotions. Depending on where you live, you might get a cookie banner or a “do not sell” link—or you might not.',
    detailNarrative:
      'Modern stacks combine first-party data with partner graphs. “Aggregated” data can still be sensitive when combined with other sources. Regulatory regimes (GDPR, CPRA, etc.) change what must be disclosed, but contracts often claim broad rights first.',
    userScenario:
      'You use a free tier project tracker. The vendor’s ad partners receive event streams labeled with a stable device ID. Later, you see ads for a competitor’s conference that matches your in-app keywords. The Terms allowed marketing use of “usage data.”',
    oppositionMovements: [
      {
        title: 'Privacy reform working group (illustrative)',
        description:
          'Campaigns for stronger default-off marketing signals and clearer lists of subprocessors.',
      },
      {
        title: 'Ad-tech accountability circle (placeholder)',
        description:
          'Documents opaque data flows between publishers and brokers; prototype reference only.',
      },
    ],
  },
  {
    id: 'content-license',
    legalHeading: '4. License to your content',
    legalParagraphs: [
      'You retain ownership of content you upload. You grant Company a worldwide, non-exclusive, royalty-free, sublicensable license to host, reproduce, modify, adapt, publish, publicly display, distribute, and create derivative works from your content solely to operate, promote, and improve the Services, including training and evaluating automated systems, unless you opt out where an opt-out is offered.',
      'The license continues for a commercially reasonable period after you delete content to allow backups and caches to expire. Company may remove content that violates law or these Terms.',
    ],
    cardTitle: 'Your uploads',
    cardSummary:
      'You still “own” files, but you give the company a broad license to use them to run and promote the product.',
    translationExcerpt:
      'What this usually means: they need permission to store your files on servers and show thumbnails to teammates. Some terms go further and mention training automated systems, which can be controversial. Deleted posts may linger in backups for a while.',
    detailNarrative:
      'License scope is a major friction point for creators, educators, and enterprises. “Promotional use” and “derivative works” language can sweep in marketing reuse beyond what users intuitively expect.',
    userScenario:
      'You upload lesson slides to a collaboration space. A future marketing email features an anonymized screenshot of the editor with your diagram style visible. The license language permitted “promotional materials relating to the Services.”',
    oppositionMovements: [
      {
        title: 'Creator license fairness initiative (placeholder)',
        description:
          'Asks platforms to separate “hosting” rights from “marketing” and “model training” rights.',
      },
    ],
  },
  {
    id: 'billing',
    legalHeading: '5. Fees, trials, renewal, and refunds',
    legalParagraphs: [
      'Paid plans renew automatically at the then-current rate unless you cancel before the renewal date in accordance with the billing interface. Free trials convert to paid subscriptions if you do not cancel before the trial ends, even if you did not intend to continue.',
      'Except where mandated by law, fees are non-refundable once a billing period begins. Company may change prices prospectively with notice. If you dispute a charge, you must notify billing support within thirty (30) days.',
    ],
    cardTitle: 'Billing',
    cardSummary:
      'Subscriptions renew automatically; trials can flip to paid; refunds are often narrow.',
    translationExcerpt:
      'Simple version: if you forget to cancel before the renewal timestamp, your card will likely be charged. Trials that auto-upgrade surprise people often. Refunds may be impossible after the period starts unless local law says otherwise.',
    detailNarrative:
      'Auto-renewal complaints are common in consumer protection dockets. Notice design (email vs. in-app only) matters for fairness perceptions even when the contract allows changes.',
    userScenario:
      'You start a seven-day trial on March 1. The fine print says billing is March 7 at 23:59 UTC. You cancel on March 8 local time, but UTC already rolled—you are charged for a year. Support cites the renewal policy.',
    oppositionMovements: [
      {
        title: 'Auto-renewal transparency project (illustrative)',
        description:
          'Publishes design patterns for clearer trial end times and double-confirm flows.',
      },
    ],
  },
  {
    id: 'arbitration',
    legalHeading: '6. Dispute resolution and arbitration',
    legalParagraphs: [
      'Except for small-claims matters or claims for injunctive relief, any dispute arising out of these Terms or the Services shall be resolved by binding individual arbitration administered under the rules of the Example Arbitration Forum, rather than in court. You and Company waive any right to a jury trial and any right to participate in a class, collective, or representative action.',
      'The Federal Arbitration Act governs this section to the fullest extent permitted. If any portion is held unenforceable, the remainder remains in effect.',
    ],
    cardTitle: 'Disputes',
    cardSummary:
      'Many claims must go to private arbitration, not a public lawsuit, and usually not as a class action.',
    translationExcerpt:
      'If something goes wrong, this clause tries to move the fight out of open court into a private process with an arbitrator. It also tries to block joining forces with other users in one big case.',
    detailNarrative:
      'Arbitration clauses are contested in legislation and litigation. Some jurisdictions limit their use for certain claims. Users often discover them only after a harm occurs.',
    userScenario:
      'Thousands of users each lose a small amount because of an alleged billing bug. A class action could be efficient; arbitration language may require each person to file separately, which many will not do.',
    oppositionMovements: [
      {
        title: 'Forced arbitration reform network (placeholder)',
        description:
          'Organizes around procedural fairness and public access to outcomes; illustrative only.',
      },
      {
        title: 'Consumer class-action study collective (illustrative)',
        description:
          'Tracks how arbitration impacts recovery rates in consumer finance and software markets.',
      },
    ],
  },
  {
    id: 'liability',
    legalHeading: '7. Limitation of liability',
    legalParagraphs: [
      'To the maximum extent permitted by law, Company’s aggregate liability for any claim arising from the Services shall not exceed the greater of (a) amounts you paid to Company in the twelve (12) months preceding the claim or (b) one hundred U.S. dollars (US$100). Company shall not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, goodwill, data, or other intangibles, even if advised of the possibility.',
      'Some jurisdictions do not allow certain limitations; in those jurisdictions, Company’s liability is limited to the fullest extent still enforceable.',
    ],
    cardTitle: 'Liability cap',
    cardSummary:
      'If they are found liable, recovery may be tiny compared to your actual losses, and many damage types are excluded.',
    translationExcerpt:
      'They are saying: even if they mess up badly, the contract tries to cap what you can collect—often tied to your recent payments—and says indirect losses like lost profits may not be recoverable at all.',
    detailNarrative:
      'Caps interact with warranty disclaimers and exclusive remedies elsewhere in the agreement. Businesses negotiating enterprise deals frequently redline these sections; consumers rarely can.',
    userScenario:
      'A paid sync tool corrupts a month of research notes. Reconstructing the work costs far more than your subscription. The liability cap points to your last twelve months of fees—perhaps $48 total.',
    oppositionMovements: [
      {
        title: 'Liability transparency lab (placeholder)',
        description:
          'Models how caps shift risk onto users for outages and data-loss incidents.',
      },
    ],
  },
  {
    id: 'changes',
    legalHeading: '8. Changes to the Terms',
    legalParagraphs: [
      'Company may modify these Terms at any time by posting an updated version and revising the “Last updated” date. For material changes, Company will provide reasonable notice via the Services or email where appropriate. Your continued use after the effective date constitutes acceptance unless applicable law requires express consent.',
      'If you do not agree to modified Terms, you must stop using the Services and may terminate your account. Certain provisions that by their nature should survive will survive termination.',
    ],
    cardTitle: 'Changes',
    cardSummary:
      'The company can update the rules; keeping the product after a date often means you accept the new version.',
    translationExcerpt:
      'They can post a new version of the contract. If they think the change is big, they might email you or show a banner—but many people miss that. Continuing to log in is treated as “yes” to the new rules in many markets.',
    detailNarrative:
      'Material change processes vary widely. Regulators sometimes intervene when terms alter privacy or dispute rights retroactively without meaningful choice.',
    userScenario:
      'You joined when data export was guaranteed. A revision removes the export promise. You miss the email; six months later you discover you cannot bulk-download your archive. The site says continued use after thirty days meant acceptance.',
    oppositionMovements: [
      {
        title: 'Notice design for policy shifts (illustrative)',
        description:
          'Advocates for blocking flows until users acknowledge high-impact changes; prototype placeholder.',
      },
    ],
  },
]

export const quizPrompts: QuizPrompt[] = [
  {
    id: 'quiz-arbitration',
    question:
      'In your own words, what does the dispute section mean for your ability to sue in court or join a class action?',
    helper: 'Refer to Section 6 in the legal column.',
  },
  {
    id: 'quiz-data',
    question:
      'Describe one way “usage data” under Section 3 could be used in a way that surprises a typical user.',
    helper: 'Think about partners and marketing.',
  },
  {
    id: 'quiz-billing',
    question:
      'What steps would you take to avoid an unwanted charge after a free trial under Section 5?',
    helper: 'Be specific about timing and where you would look in a real app.',
  },
]
