export const metadata = {
  title: 'Founder Letter — Tarvico Inc.',
  description: 'Building for the Next Era — A letter from Jeff Honforloco, Founder & CEO of Tarvico Inc.',
}

const paragraphs = [
  { lead: true, text: 'When I moved to the United States more than a decade ago, I did not arrive with a roadmap for building a technology company. I came with ambition, curiosity, and a belief that creativity and persistence could open doors that once felt impossible.' },
  { text: 'My background was not in Silicon Valley. I began as a professional photographer — someone deeply interested in people, storytelling, design, emotion, and the way technology shapes human experience. Photography taught me how to observe details, how to think creatively, and how to see possibilities where others might not.' },
  { text: 'Over time, that curiosity expanded far beyond creative work. I became increasingly fascinated by software, systems, automation, artificial intelligence, and the future of how people work and live. Without a traditional technical background, I started teaching myself how to build using modern AI tools, experimenting constantly, learning through iteration, and turning ideas into working products.' },
  { text: 'That journey became the foundation for Tarvico Inc.' },
  { bold: true, text: 'Tarvico was created from a simple belief: The next generation of great companies will not just build software. They will build systems that improve how people operate, create, communicate, and solve problems in everyday life.' },
  { text: 'We are entering a new technological era where AI is becoming an operational layer across business, creativity, productivity, infrastructure, and daily human interaction. I believe this shift will redefine how companies are built and how individuals access opportunity.' },
  { text: 'Our goal at Tarvico is to participate meaningfully in that transformation.' },
  { text: 'Today, we are building AI-native products focused on intelligent workflows, automation, digital operations, and scalable systems for businesses and individuals. Our flagship initiative — an AI Workforce Operating System — represents the beginning of a much larger vision: creating technologies that help organizations operate more intelligently while giving people more leverage over their time, creativity, and potential.' },
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
    <article style={{ maxWidth: 720, margin: '0 auto', padding: '8rem 3rem' }}>

      {/* Header */}
      <header style={{ marginBottom: '5rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '1rem' }}>
          Tarvico Inc. · Founder Letter · 2025
        </div>
        <h1 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 300,
          lineHeight: 1.0,
          color: 'var(--text)',
          marginBottom: '1.5rem',
        }}>
          Building for<br />the Next Era
        </h1>
        <div style={{ fontSize: '0.82rem', color: 'var(--text-2)', fontWeight: 300 }}>
          By Jeff Yèmalín Bienvenu Honforloco, Founder & CEO
        </div>
      </header>

      {/* Body */}
      <div>
        {paragraphs.map((p, i) => {
          if (p.lead) return (
            <p key={i} style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.5rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--text)',
              lineHeight: 1.45,
              marginBottom: '2.5rem',
            }}>
              "{p.text}"
            </p>
          )
          if (p.bold) return (
            <p key={i} style={{
              fontSize: '1.05rem',
              color: 'var(--text)',
              lineHeight: 1.85,
              fontWeight: 400,
              marginBottom: '1.75rem',
            }}>
              {p.text}
            </p>
          )
          return (
            <p key={i} style={{
              fontSize: '1.05rem',
              color: 'var(--text-2)',
              lineHeight: 1.85,
              fontWeight: 300,
              marginBottom: '1.75rem',
            }}>
              {p.text}
            </p>
          )
        })}
      </div>

      {/* Signature */}
      <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border-w)' }}>
        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.6rem', fontWeight: 300, color: 'var(--text)', marginBottom: '0.4rem' }}>
          Jeff Yèmalín Bienvenu Honforloco
        </div>
        <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-2)' }}>
          Founder & Chief Executive Officer, Tarvico Inc.
        </div>
      </div>

    </article>
  )
}
