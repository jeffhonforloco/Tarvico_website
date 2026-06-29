'use client'

import { PageHero, SectionLabel, Divider } from '@/components/ui'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      {
        subtitle: 'Agreement to Terms',
        body: 'By accessing or using tarvico.com (the "Site"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you may not access or use the Site. These Terms apply to all visitors, users, and others who access the Site.',
      },
      {
        subtitle: 'Modifications',
        body: 'Tarvico Inc. reserves the right to modify these Terms at any time. Changes will be effective upon posting to the Site with an updated "Last Updated" date. Your continued use of the Site following any modification constitutes your acceptance of the revised Terms.',
      },
    ],
  },
  {
    title: 'About Tarvico Inc.',
    content: [
      {
        subtitle: 'Corporate Identity',
        body: 'Tarvico Inc. is a private technology holding company incorporated under the laws of the State of Delaware, United States. The Site serves as an informational and corporate communications platform for Tarvico Inc. and its portfolio of AI-native technology ventures.',
      },
      {
        subtitle: 'Not an Offer or Solicitation',
        body: 'Nothing on this Site constitutes an offer to sell or a solicitation of an offer to buy any securities. Any information relating to investment opportunities is intended solely for qualified investors and does not constitute a public offering under any applicable securities laws.',
      },
    ],
  },
  {
    title: 'Permitted Use',
    content: [
      {
        subtitle: 'Personal, Non-Commercial Use',
        body: 'The Site is provided for your personal, non-commercial informational use only. You may access and view content on the Site for lawful purposes consistent with these Terms.',
      },
      {
        subtitle: 'Prohibited Conduct',
        body: 'You may not: (a) reproduce, distribute, modify, or create derivative works of any Site content without prior written consent from Tarvico Inc.; (b) use the Site in any manner that could damage, disable, or impair the Site or interfere with any other party\'s use; (c) attempt to gain unauthorized access to any portion of the Site or any systems connected to it; (d) use automated tools, bots, or scrapers to extract data from the Site; (e) use the Site to transmit unsolicited communications or to impersonate any person or entity.',
      },
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      {
        subtitle: 'Ownership',
        body: 'All content on this Site — including but not limited to text, graphics, logos, images, data compilations, software, and the overall design — is the exclusive property of Tarvico Inc. or its content suppliers and is protected by United States and international intellectual property laws.',
      },
      {
        subtitle: 'Trademarks',
        body: '"Tarvico," the Tarvico logo, and the names and logos of Tarvico\'s portfolio companies (including Vytre AWOS, SireIQ, SEOAgentPro, Fycra, and Fycera) are trademarks or service marks of Tarvico Inc. Unauthorized use of any Tarvico trademark is strictly prohibited.',
      },
      {
        subtitle: 'Limited License',
        body: 'Tarvico Inc. grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Site solely for your personal informational purposes in accordance with these Terms. No other rights are granted.',
      },
    ],
  },
  {
    title: 'Disclaimers',
    content: [
      {
        subtitle: 'No Warranties',
        body: 'THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TARVICO INC. EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      },
      {
        subtitle: 'Forward-Looking Statements',
        body: 'The Site may contain forward-looking statements about Tarvico Inc. and its portfolio companies. These statements involve known and unknown risks and uncertainties that may cause actual results to differ materially. Tarvico Inc. undertakes no obligation to update any forward-looking statement.',
      },
      {
        subtitle: 'Accuracy of Information',
        body: 'While Tarvico Inc. endeavors to keep information on the Site current and accurate, we make no representations or warranties regarding the completeness, accuracy, or timeliness of any content. Reliance on any information provided on the Site is at your own risk.',
      },
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      {
        subtitle: 'Exclusion of Damages',
        body: 'TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TARVICO INC. AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SITE, EVEN IF TARVICO INC. HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
      },
      {
        subtitle: 'Cap on Liability',
        body: 'In no event shall Tarvico Inc.\'s total aggregate liability to you for any claim arising out of or related to these Terms or the Site exceed one hundred U.S. dollars (US$100.00).',
      },
    ],
  },
  {
    title: 'Third-Party Links',
    content: [
      {
        subtitle: 'External Resources',
        body: 'The Site may contain links to third-party websites, including portfolio company sites and partner resources. These links are provided for convenience only. Tarvico Inc. does not control, endorse, or assume responsibility for the content, privacy practices, or terms of any third-party site. Your use of third-party sites is at your own risk.',
      },
    ],
  },
  {
    title: 'Governing Law and Dispute Resolution',
    content: [
      {
        subtitle: 'Governing Law',
        body: 'These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.',
      },
      {
        subtitle: 'Jurisdiction',
        body: 'Any dispute arising from or relating to these Terms or the Site shall be subject to the exclusive jurisdiction of the state and federal courts located in the State of Delaware. You consent to the personal jurisdiction of such courts.',
      },
    ],
  },
  {
    title: 'General Provisions',
    content: [
      {
        subtitle: 'Entire Agreement',
        body: 'These Terms, together with the Privacy Policy and Legal Disclosures, constitute the entire agreement between you and Tarvico Inc. regarding your use of the Site and supersede all prior agreements and understandings.',
      },
      {
        subtitle: 'Severability',
        body: 'If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of the remaining provisions.',
      },
      {
        subtitle: 'Waiver',
        body: 'No waiver by Tarvico Inc. of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition.',
      },
    ],
  },
  {
    title: 'Contact',
    content: [
      {
        subtitle: 'Legal Inquiries',
        body: 'For questions regarding these Terms of Use, please contact:\n\nTarvico Inc.\nLegal Department\n8 The Green, #5275\nDover, DE 19901\nUnited States\nlegal@tarvico.com',
      },
    ],
  },
]

export default function TermsPage() {
  const year = new Date().getFullYear()
  return (
    <>
      <PageHero
        label="Terms of Use"
        title={<>Clear terms.<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Honest standards.</em></>}
        subtitle="Last Updated: May 2026 — These Terms of Use govern your access to and use of tarvico.com and are binding upon all visitors."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 860, margin: '0 auto', padding: '5rem 3rem 7rem' }}>

        {sections.map((section, si) => (
          <div key={section.title} style={{ marginBottom: '3.5rem' }}>
            <SectionLabel>{String(si + 1).padStart(2, '0')}</SectionLabel>
            <h2 style={{
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              fontWeight: 400,
              color: 'var(--text)',
              marginBottom: '2rem',
              letterSpacing: '0.01em',
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
                  fontSize: '0.88rem',
                  color: 'var(--text-2)',
                  lineHeight: 1.85,
                  fontWeight: 300,
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
