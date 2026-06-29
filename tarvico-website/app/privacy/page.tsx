'use client'

import { PageHero, SectionLabel, Divider } from '@/components/ui'

const sections = [
  {
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide',
        body: 'When you contact us, request information, or engage with our investor relations team, we may collect your name, email address, phone number, company affiliation, and any other information you choose to provide.',
      },
      {
        subtitle: 'Automatically Collected Information',
        body: 'When you visit our website, we automatically collect certain information about your device and usage, including IP address, browser type, operating system, referring URLs, pages viewed, and the date and time of your visit. This information is collected through standard server logs and analytics tools.',
      },
      {
        subtitle: 'Cookies and Tracking Technologies',
        body: 'We use essential cookies necessary for the operation of our website. We do not use advertising cookies or sell your data to third parties. You may disable cookies in your browser settings; however, some portions of the site may not function correctly as a result.',
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'Operational Purposes',
        body: 'We use the information we collect to respond to your inquiries, deliver requested information about Tarvico Inc. and its portfolio companies, process investor communications, and maintain the security and integrity of our website.',
      },
      {
        subtitle: 'Compliance and Legal Obligations',
        body: 'We may process your information as required to comply with applicable laws and regulations, including securities laws, anti-money laundering obligations, and other regulatory requirements applicable to a private technology holding company.',
      },
      {
        subtitle: 'Legitimate Business Interests',
        body: 'We may use aggregated and anonymized data to analyze website performance, understand visitor behavior, and improve our online presence. This data does not identify any individual.',
      },
    ],
  },
  {
    title: 'How We Share Your Information',
    content: [
      {
        subtitle: 'Service Providers',
        body: 'We engage trusted third-party service providers who assist us in operating our website and conducting our business (e.g., hosting providers, analytics platforms, email infrastructure). These providers are contractually obligated to handle your data only as directed by Tarvico Inc. and in accordance with this Policy.',
      },
      {
        subtitle: 'Legal Disclosure',
        body: 'We may disclose your information if required to do so by law, regulation, court order, or governmental authority, or where we believe in good faith that disclosure is necessary to protect the rights, property, or safety of Tarvico Inc., its affiliates, or the public.',
      },
      {
        subtitle: 'No Sale of Personal Data',
        body: 'Tarvico Inc. does not sell, rent, or trade your personal information to third parties for their marketing purposes.',
      },
    ],
  },
  {
    title: 'Data Retention',
    content: [
      {
        subtitle: 'Retention Periods',
        body: 'We retain personal information for as long as necessary to fulfill the purposes for which it was collected, to comply with legal and regulatory obligations, and to resolve disputes. When information is no longer needed, we take reasonable steps to destroy or de-identify it securely.',
      },
    ],
  },
  {
    title: 'Your Rights',
    content: [
      {
        subtitle: 'Access and Correction',
        body: 'You have the right to request access to the personal information we hold about you and to request correction of any inaccuracies. To exercise these rights, contact us at privacy@tarvico.com.',
      },
      {
        subtitle: 'Deletion',
        body: 'Subject to applicable legal and regulatory constraints, you may request deletion of your personal information. We will acknowledge and respond to your request within 30 days.',
      },
      {
        subtitle: 'California Residents (CCPA)',
        body: 'California residents may have additional rights under the California Consumer Privacy Act, including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the sale of personal information. Tarvico Inc. does not sell personal information.',
      },
      {
        subtitle: 'EEA and UK Residents (GDPR)',
        body: 'If you are located in the European Economic Area or the United Kingdom, you have rights under the General Data Protection Regulation including access, rectification, erasure, restriction of processing, data portability, and the right to object. Our lawful basis for processing is legitimate interests or, where required, your consent.',
      },
    ],
  },
  {
    title: 'Data Security',
    content: [
      {
        subtitle: 'Security Measures',
        body: 'Tarvico Inc. implements industry-standard administrative, technical, and physical safeguards designed to protect your personal information against unauthorized access, disclosure, alteration, and destruction. Despite these measures, no method of transmission over the internet is completely secure.',
      },
    ],
  },
  {
    title: 'Third-Party Links',
    content: [
      {
        subtitle: 'External Websites',
        body: 'Our website may contain links to third-party websites, portfolio company sites, and partner resources. This Privacy Policy applies solely to tarvico.com. We are not responsible for the privacy practices of external websites and encourage you to review their privacy policies independently.',
      },
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      {
        subtitle: 'Policy Updates',
        body: 'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The "Last Updated" date at the top of this page will reflect the most recent revision. Continued use of our website following any update constitutes your acceptance of the revised Policy.',
      },
    ],
  },
  {
    title: 'Contact Us',
    content: [
      {
        subtitle: 'Privacy Inquiries',
        body: 'For any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:\n\nTarvico Inc.\nPrivacy Office\n8 The Green, #5275\nDover, DE 19901\nUnited States\nTel: +1 (302) 439-6442\nprivacy@tarvico.com',
      },
    ],
  },
]

export default function PrivacyPage() {
  const year = new Date().getFullYear()
  return (
    <>
      <PageHero
        label="Privacy Policy"
        title={<>Your data. <span className="text-gradient-gold">Our responsibility.</span></>}
        subtitle="Last Updated: May 2026 — This Privacy Policy describes how Tarvico Inc. collects, uses, and protects information about visitors to tarvico.com."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 860, margin: '0 auto', padding: '5rem 3rem 7rem' }}>

        {sections.map((section, si) => (
          <div key={section.title} style={{ marginBottom: '3.5rem' }}>
            <SectionLabel>{String(si + 1).padStart(2, '0')}</SectionLabel>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '2rem',
              letterSpacing: '-0.025em',
            }}>
              {section.title}
            </h2>

            {section.content.map(item => (
              <div key={item.subtitle} style={{ marginBottom: '1.75rem' }}>
                <h3 style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontWeight: 500,
                  marginBottom: '0.6rem',
                }}>
                  {item.subtitle}
                </h3>
                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-2)',
                  lineHeight: 1.8,
                  fontWeight: 400,
                  whiteSpace: 'pre-line',
                }}>
                  {item.body}
                </p>
              </div>
            ))}

            {si < sections.length - 1 && <Divider />}
          </div>
        ))}

        <div style={{
          borderTop: '1px solid var(--border-w)',
          paddingTop: '2rem',
          marginTop: '1rem',
        }}>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-3)', fontWeight: 300 }}>
            © {year} Tarvico Inc. — Delaware, United States. All rights reserved.
          </p>
        </div>

      </div>
    </>
  )
}
