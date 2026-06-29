'use client'

import { PageHero, SectionLabel, Divider } from '@/components/ui'

const sections = [
  {
    title: 'Corporate Information',
    content: [
      {
        subtitle: 'Legal Entity',
        body: 'Tarvico Inc. is a private technology holding company incorporated under the General Corporation Law of the State of Delaware, United States. Tarvico Inc. is not a publicly traded company and its securities are not registered with the U.S. Securities and Exchange Commission (SEC) pursuant to a public offering.',
      },
      {
        subtitle: 'Registered Agent',
        body: 'Tarvico Inc. maintains a registered agent in the State of Delaware in accordance with Delaware corporate law. Inquiries regarding corporate structure or registered agent information may be directed to legal@tarvico.com.',
      },
      {
        subtitle: 'Principal Office',
        body: '8 The Green, #5275, Dover, DE 19901, United States. Tel: +1 (302) 439-6442. Correspondence and legal notices should be addressed to Tarvico Inc. at this address or via email at legal@tarvico.com.',
      },
    ],
  },
  {
    title: 'Investment and Securities Disclosures',
    content: [
      {
        subtitle: 'No Public Offering',
        body: 'This website does not constitute an offer to sell or the solicitation of an offer to buy any securities of Tarvico Inc. or any of its portfolio companies. Any information regarding investment opportunities is directed solely to accredited investors and qualified institutional buyers as defined under applicable U.S. securities laws.',
      },
      {
        subtitle: 'Private Placement',
        body: 'Any securities of Tarvico Inc. are offered and sold in reliance upon exemptions from the registration requirements of the Securities Act of 1933, as amended, and applicable state securities laws. Prospective investors must satisfy applicable suitability standards and complete required documentation before participating in any offering.',
      },
      {
        subtitle: 'No Investment Advice',
        body: 'Nothing on this Site constitutes investment, financial, legal, or tax advice. Tarvico Inc. is not a registered investment adviser. Prospective investors should consult their own independent legal, financial, and tax advisors before making any investment decision.',
      },
      {
        subtitle: 'Risk Factors',
        body: 'Investment in early-stage private technology companies involves substantial risk, including the possible loss of the entire investment. Past performance of any portfolio company is not indicative of future results. Tarvico Inc. makes no representation or warranty regarding the future performance of any venture within its portfolio.',
      },
    ],
  },
  {
    title: 'Forward-Looking Statements',
    content: [
      {
        subtitle: 'Safe Harbor Notice',
        body: 'Certain statements on this Site may constitute "forward-looking statements" within the meaning of the Private Securities Litigation Reform Act of 1995 and other applicable securities laws. These statements relate to future events or future financial performance and involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially from those expressed or implied.',
      },
      {
        subtitle: 'No Obligation to Update',
        body: 'Tarvico Inc. undertakes no obligation to publicly update or revise any forward-looking statement, whether as a result of new information, future events, or otherwise, except as required by applicable law. Forward-looking statements should not be relied upon as predictions of future events.',
      },
    ],
  },
  {
    title: 'Intellectual Property Rights',
    content: [
      {
        subtitle: 'Proprietary Rights',
        body: 'All intellectual property rights in and to this Site, including all content, software, design elements, trademarks, service marks, and trade names, are owned by or licensed to Tarvico Inc. These rights are protected under the laws of the United States and applicable international treaties.',
      },
      {
        subtitle: 'Trademark Notice',
        body: '"TARVICO," the Tarvico logo with the gold triangle motif, and the names of portfolio companies including "Vytre AWOS," "SireIQ," "SEOAgentPro," "Fycra," "Fycera," and "Urs79" are trademarks or service marks of Tarvico Inc. or its affiliated entities. Unauthorized use of any Tarvico trademark, trade name, or logo is prohibited and may constitute trademark infringement.',
      },
      {
        subtitle: 'Copyright Notice',
        body: 'All content on this Site is © {year} Tarvico Inc. All rights reserved. No part of this Site may be reproduced, distributed, modified, or transmitted in any form or by any means without the prior written permission of Tarvico Inc., except as expressly permitted under these legal terms.',
      },
    ],
  },
  {
    title: 'Regulatory Compliance',
    content: [
      {
        subtitle: 'Anti-Money Laundering (AML)',
        body: 'Tarvico Inc. maintains policies and procedures designed to comply with applicable anti-money laundering and counter-terrorism financing laws, including the Bank Secrecy Act and applicable OFAC regulations. Tarvico Inc. reserves the right to refuse or terminate any engagement where it reasonably suspects non-compliance with applicable law.',
      },
      {
        subtitle: 'Export Controls',
        body: 'The technologies and information accessible through this Site may be subject to U.S. export control laws, including the Export Administration Regulations (EAR). You agree to comply fully with all applicable export control laws and not to transfer any content from this Site in violation thereof.',
      },
      {
        subtitle: 'GDPR and Global Privacy',
        body: 'To the extent Tarvico Inc. processes personal data of individuals in the European Economic Area, it does so in compliance with the General Data Protection Regulation (GDPR). Tarvico Inc. has implemented appropriate technical and organizational measures to protect such data. For further information, please refer to our Privacy Policy.',
      },
    ],
  },
  {
    title: 'Portfolio Company Liability',
    content: [
      {
        subtitle: 'Subsidiary Autonomy',
        body: 'Each company within the Tarvico Inc. portfolio operates as a legally distinct entity. Tarvico Inc. is not responsible for the products, services, statements, or actions of its portfolio companies, including Vytre AWOS, SireIQ, SEOAgentPro, Fycra, Fycera, or Urs79, except as expressly stated.',
      },
      {
        subtitle: 'No Cross-Liability',
        body: 'The obligations and liabilities of Tarvico Inc. are separate and distinct from those of any portfolio company. Nothing on this Site should be construed to create joint or several liability between Tarvico Inc. and any portfolio entity.',
      },
    ],
  },
  {
    title: 'Limitation of Liability and Indemnification',
    content: [
      {
        subtitle: 'Limitation of Liability',
        body: 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TARVICO INC., ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH THIS SITE OR THESE LEGAL TERMS.',
      },
      {
        subtitle: 'Indemnification',
        body: 'You agree to defend, indemnify, and hold harmless Tarvico Inc. and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or relating to your violation of these legal terms or your use of the Site.',
      },
    ],
  },
  {
    title: 'Governing Law',
    content: [
      {
        subtitle: 'Delaware Law',
        body: 'These legal disclosures and any dispute arising from your use of this Site shall be governed by and construed in accordance with the General Corporation Law of the State of Delaware and the laws of the United States, without regard to conflicts of law principles.',
      },
      {
        subtitle: 'Venue',
        body: 'Any legal action or proceeding relating to this Site shall be brought exclusively in the state or federal courts located in Delaware. You waive any objection to jurisdiction or venue in such courts.',
      },
    ],
  },
  {
    title: 'Contact — Legal',
    content: [
      {
        subtitle: 'Legal Notices',
        body: 'All formal legal notices to Tarvico Inc. should be submitted in writing to:\n\nTarvico Inc.\nLegal Department\n8 The Green, #5275\nDover, DE 19901\nUnited States\nTel: +1 (302) 439-6442\nlegal@tarvico.com\n\nFor investor relations inquiries: investors@tarvico.com\nFor general inquiries: info@tarvico.com',
      },
    ],
  },
]

export default function LegalPage() {
  const year = new Date().getFullYear()
  return (
    <>
      <PageHero
        label="Legal Disclosures"
        title={<>Governed by <span className="text-gradient-gold">integrity.</span></>}
        subtitle="Last Updated: May 2026 — Legal disclosures, regulatory compliance statements, and corporate governance information for Tarvico Inc."
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
                  {item.body.replace('{year}', String(year))}
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
