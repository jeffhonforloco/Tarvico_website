import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founder Letter',
  description:
    'Building for the Next Era — A letter from Jeff Yèmalín Bienvenu Honforloco, Founder & CEO of Tarvico Inc. On the origins of Tarvico, the conviction behind it, and the vision for what comes next.',
  keywords: [
    'Tarvico founder letter',
    'Jeff Honforloco',
    'Jeff Yèmalín Bienvenu Honforloco',
    'Tarvico vision',
    'AI company founder story',
    'technology holding company vision',
  ],
  openGraph: {
    title: 'Founder Letter — Tarvico Inc.',
    description:
      'A letter from Jeff Yèmalín Bienvenu Honforloco, Founder & CEO. On the origins of Tarvico and the vision for enduring AI-native technology companies.',
    url: 'https://www.tarvico.com/vision',
  },
  twitter: {
    title: 'Founder Letter — Tarvico Inc.',
    description:
      'On the origins of Tarvico and the long-term vision from Founder & CEO Jeff Honforloco.',
  },
  alternates: {
    canonical: 'https://www.tarvico.com/vision',
  },
}

const paragraphs = [
  { lead: true, text: 'When I moved to the United States more than a decade ago, I did not arrive with a roadmap for building a technology company. I came with ambition, curiosity, and a belief that creativity and persistence could open doors that once felt impossible.' },
  { text: 'My background was not in Silicon Valley. I began as a professional photographer — someone deeply interested in people, storytelling, design, emotion, and the way technology shapes human experience. Photography taught me how to observe details, how to think creatively, and how to see possibilities where others might not.' },
  { text: 'Over time, that curiosity expanded far beyond creative work. I became increasingly fascinated by software, systems, automation, artificial intelligence, and the future of how people work and live. Without a traditional technical background, I started teaching myself how to build using modern AI tools, experimenting constantly, learning through iteration, and turning ideas into working products.' },
  { text: 'That journey became the foundation for Tarvico Inc.' },
  { bold: true, text: 'Tarvico was created from a simple belief: The next generation of great companies will not just build software. They will build systems that improve how people operate, create, communicate, and solve problems in everyday life.' },
  { text: 'We are entering a new technological era where AI is becoming an operational layer across business, creativity, productivity, infrastructure, and daily human interaction. I believe this shift will redefine how companies are built and how individuals access opportunity.' },
  { text: 'Our goal at Tarvico is to participate meaningfully in that transformation.' },
  { text: 'Today, we are building AI-native products focused on intelligent workflows, automation, digital operations, and scalable systems for businesses and individuals. Our flagship initiative — Vytre AWOS, an AI Workforce Operating System — represents the beginning of a much larger vision: creating technologies that help organizations operate more intelligently while giving people more leverage over their time, creativity, and potential.' },
  { text: 'But our ambitions extend beyond software alone.' },
  { text: 'Over the long term, I envision Tarvico becoming a diversified technology company that develops products, platforms, and everyday tools that people genuinely rely on — across digital experiences, infrastructure, AI systems, and eventually consumer products that integrate naturally into daily life.' },
  { text: 'The companies that inspire me most are not defined by a single product. They are defined by their ability to evolve, experiment, and continuously build for the future. What began as search engines, social networks, or software platforms eventually became ecosystems that shaped industries and human behavior at global scale.' },
  { text: 'That long-term mindset deeply influences how we think about Tarvico.' },
  { text: 'We are still at the beginning of our journey. Many of our products are in early development. We are a small team with large ambitions, learning and building every day. But history has shown that transformative companies often begin with small groups of determined people willing to think differently, move relentlessly, and commit themselves to a vision larger than their current circumstances.' },
  { text: 'At Tarvico, we believe innovation should be practical, accessible, and human-centered. Technology should not exist only to impress people — it should genuinely improve how people work, create, and live.' },
  { text: 'We also believe the future belongs to builders who combine creativity with adaptability. The rise of AI is making it possible for individuals and small teams to accomplish what once required enormous organizations. That shift is empowering a new generation of creators and entrepreneurs around the world, including people whose paths into technology may not have been traditional.' },
  { bold: true, text: 'I see myself in that future.' },
  { text: 'Tarvico exists because I believe ambitious ideas should not be limited by background, geography, or conventional expectations. What matters most is vision, persistence, execution, and the willingness to continue building even when the path is uncertain.' },
  { text: 'This company is being built with long-term conviction. We are focused on creating enduring products, meaningful technology, and a culture centered around curiosity, discipline, creativity, and continuous innovation.' },
  { text: 'The work ahead will take years. There will be challenges, pivots, experimentation, and growth. But we are building with the belief that the technologies created today can shape how people and businesses operate for decades to come.' },
  { text: 'Thank you to everyone following our journey, supporting our work, and believing in what Tarvico can become.' },
  { bold: true, text: 'We are only getting started.' },
]

export default function VisionPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '72px' }}>
      <div className="mob-px" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 3rem 3rem', borderBottom: '1px solid var(--border-w)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
          <span style={{ display: 'block', width: 20, height: 1, background: 'var(--gold)' }} />
          <span style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>Founder Letter · 2026</span>
        </div>
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'end' }}>
          <h1 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            fontWeight: 400,
            lineHeight: 0.96,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
          }}>
            Building for<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>the Next Era</em>
          </h1>
          <div style={{ paddingBottom: '0.5rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-2)', fontWeight: 300, marginBottom: '0.25rem' }}>
              Jeff Yèmalín Bienvenu Honforloco
            </div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 500 }}>
              Founder & Chief Executive Officer
            </div>
          </div>
        </div>
      </div>

      <article className="mob-px" style={{ maxWidth: 680, margin: '0 auto', padding: '6rem 3rem 10rem' }}>
        {paragraphs.map((p, i) => {
          if (p.lead) return (
            <p key={i} style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--text)',
              lineHeight: 1.5,
              marginBottom: '3rem',
              paddingLeft: '2rem',
              borderLeft: '2px solid var(--gold)',
              letterSpacing: '-0.01em',
            }}>
              "{p.text}"
            </p>
          )
          if (p.bold) return (
            <p key={i} style={{
              fontSize: '1.05rem',
              color: 'var(--text)',
              lineHeight: 1.9,
              fontWeight: 400,
              marginBottom: '2rem',
              marginTop: i > 0 ? '1rem' : 0,
            }}>
              {p.text}
            </p>
          )
          return (
            <p key={i} style={{
              fontSize: '1.05rem',
              color: 'var(--text-2)',
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: '1.75rem',
            }}>
              {p.text}
            </p>
          )
        })}

        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border-w)' }}>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.8rem', fontWeight: 300, color: 'var(--text)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
            Jeff Yèmalín Bienvenu Honforloco
          </div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.3rem' }}>
            Founder & Chief Executive Officer
          </div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 400 }}>
            Tarvico Inc. · 2026
          </div>
        </div>
      </article>
    </div>
  )
}
