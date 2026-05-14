import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Tarvico Inc. — A Private Technology Holding Company'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#070707',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'serif',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Gold top border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #C9A447 30%, #D4B55A 50%, #C9A447 70%, transparent)',
          }}
        />

        {/* Gold glow top-center */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(201,164,71,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Content area */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '56px 72px 52px',
          }}
        >
          {/* Top row — logo mark + wordmark + domain */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              {/* New Tarvico icon mark — white A chevron with gold inner triangle */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer white A chevron */}
                <polygon
                  points="50,5 95,90 80,90 50,35 20,90 5,90"
                  fill="white"
                />
                {/* Black cutout center to create chevron gap */}
                <polygon
                  points="50,28 78,82 22,82"
                  fill="#070707"
                />
                {/* Gold inner triangle */}
                <polygon
                  points="50,52 67,82 33,82"
                  fill="#C9A447"
                />
              </svg>
              <div
                style={{
                  fontSize: '22px',
                  fontFamily: 'serif',
                  fontWeight: 300,
                  color: '#F0EDE6',
                  letterSpacing: '0.14em',
                }}
              >
                TARVICO INC.
              </div>
            </div>
            <div
              style={{
                fontSize: '12px',
                color: 'rgba(201,164,71,0.65)',
                letterSpacing: '0.25em',
                fontFamily: 'sans-serif',
                fontWeight: 400,
              }}
            >
              TARVICO.COM
            </div>
          </div>

          {/* Main headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <div style={{ width: '32px', height: '1px', background: '#C9A447' }} />
              <div
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.30em',
                  color: '#C9A447',
                  fontFamily: 'sans-serif',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                }}
              >
                A Private Technology Holding Company
              </div>
            </div>

            <div
              style={{
                fontSize: '62px',
                fontFamily: 'serif',
                fontWeight: 300,
                color: '#F0EDE6',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
              }}
            >
              Built to hold.
              <br />
              <span style={{ color: '#C9A447' }}>Engineered to scale.</span>
            </div>

            <div
              style={{
                fontSize: '17px',
                color: 'rgba(240,237,230,0.52)',
                fontFamily: 'sans-serif',
                fontWeight: 300,
                lineHeight: 1.55,
                maxWidth: '660px',
              }}
            >
              Tarvico builds, acquires, and operates a portfolio of AI-native software and
              technology ventures — engineered for long-term value creation and global scale.
            </div>
          </div>

          {/* Bottom row — portfolio indicators */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '32px' }}>
              {['Vytre AWOS', 'SireIQ', 'SEOAgentPro', 'Fycra', 'Fycera'].map((name) => (
                <div
                  key={name}
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.16em',
                    color: 'rgba(240,237,230,0.30)',
                    fontFamily: 'sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: '10px',
                letterSpacing: '0.20em',
                color: 'rgba(201,164,71,0.40)',
                fontFamily: 'sans-serif',
              }}
            >
              EST. 2026
            </div>
          </div>
        </div>

        {/* Gold bottom border */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'rgba(201,164,71,0.15)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
