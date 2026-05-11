import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Tarvico Inc. — Private Technology Holding Company'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#07070A',
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
              'linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)',
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
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(201,164,71,0.10) 0%, transparent 70%)',
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
          {/* Top row — logo + domain */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Gold mark */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: '1.5px solid rgba(201,164,71,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: '24px', height: '24px', background: '#C9A447', borderRadius: '1px' }} />
              </div>
              <div
                style={{
                  fontSize: '22px',
                  fontFamily: 'serif',
                  fontWeight: 300,
                  color: '#F0EDE6',
                  letterSpacing: '0.12em',
                }}
              >
                TARVICO INC.
              </div>
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'rgba(201,164,71,0.7)',
                letterSpacing: '0.22em',
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
                Private Technology Holding Company
              </div>
            </div>

            <div
              style={{
                fontSize: '64px',
                fontFamily: 'serif',
                fontWeight: 300,
                color: '#F0EDE6',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              Built to hold.
              <br />
              <span style={{ color: '#C9A447' }}>Engineered to scale.</span>
            </div>

            <div
              style={{
                fontSize: '18px',
                color: 'rgba(240,237,230,0.55)',
                fontFamily: 'sans-serif',
                fontWeight: 300,
                lineHeight: 1.5,
                maxWidth: '680px',
              }}
            >
              Tarvico builds, acquires, and operates a portfolio of AI-native software and
              technology ventures — engineered for long-term value creation and global scale.
            </div>
          </div>

          {/* Bottom row — portfolio indicators */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '32px' }}>
              {['Vytre AWOS', 'SireIQ', 'SEOAgentPro', 'Fycra'].map((name) => (
                <div
                  key={name}
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: 'rgba(240,237,230,0.35)',
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
                fontSize: '11px',
                letterSpacing: '0.18em',
                color: 'rgba(201,164,71,0.45)',
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
            background: 'rgba(201,164,71,0.18)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
