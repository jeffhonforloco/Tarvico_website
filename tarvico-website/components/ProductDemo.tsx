'use client'

import { useEffect, useId, useRef, useState, type ReactNode } from 'react'

const sireiqExamples = [
  {
    name: 'Research',
    prompt: 'How should I compare three vendors for a small business?',
    response: 'Start with total cost, onboarding time and data handling. Ask each vendor the same three questions and record which answers you can verify in writing.',
  },
  {
    name: 'Build',
    prompt: 'Draft a simple intake form for a customer feedback program.',
    response: 'Ask for the task the customer was trying to complete, where they got stuck and what would have helped. Make contact details optional and explain how feedback will be used.',
  },
  {
    name: 'Understand',
    prompt: 'Explain the difference between revenue and cash flow.',
    response: 'Revenue measures what you earn from sales. Cash flow tracks when money actually moves. A sale on credit can increase revenue today while cash arrives later.',
  },
  {
    name: 'Plan',
    prompt: 'Help me plan a two-week pilot for a new help center.',
    response: 'Choose five common support questions, publish draft answers and ask a small customer group to use them. Track unresolved questions and revise the weakest articles before launch.',
  },
] as const

const workforceSteps = [
  { title: 'Business objective', detail: 'Prepare an internal briefing on the most common customer support requests.' },
  { title: 'AI manager', detail: 'The manager breaks the objective into a review of sample requests and a short briefing for the team.' },
  { title: 'Worker assignments', detail: 'An analysis worker groups sample requests by topic. A writing worker turns the findings into an outline.' },
  { title: 'Review', detail: 'The manager checks that the outline reflects the sample requests and flags gaps for a person to review.' },
  { title: 'Human approval', detail: 'A person reviews the proposed briefing and chooses whether to accept it. The walkthrough waits here.' },
  { title: 'Illustrative outcome', detail: 'The draft briefing is marked approved in this example. No message was sent and no work was executed outside the demo.' },
] as const

export default function ProductDemo({ product, children }: {
  product: 'sireiq' | 'vytre'
  children: ReactNode
}) {
  const isSireIQ = product === 'sireiq'
  const name = isSireIQ ? 'SireIQ' : 'Vytre'
  const id = useId()
  const trigger = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [scenario, setScenario] = useState(0)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const example = sireiqExamples[scenario]
  const end = isSireIQ ? 1 : workforceSteps.length - 1
  const approval = !isSireIQ && step === end - 1
  const finished = step === end

  useEffect(() => {
    if (open) panel.current?.focus()
  }, [open])

  useEffect(() => {
    if (!open || !playing || approval || finished) return
    const timer = window.setTimeout(() => {
      setStep(step + 1)
      if (step + 1 >= (isSireIQ ? end : end - 1)) setPlaying(false)
    }, 2000)
    return () => window.clearTimeout(timer)
  }, [approval, end, finished, isSireIQ, open, playing, step])

  function reset() {
    setStep(0)
    setPlaying(false)
  }

  function toggleDemo() {
    if (open) {
      reset()
      trigger.current?.focus()
    }
    setOpen(!open)
  }

  function togglePlayback() {
    if (approval) return
    if (finished) setStep(0)
    setPlaying(!playing)
  }

  function advance() {
    setPlaying(false)
    setStep(step + 1)
  }

  return (
    <div className="product-demo">
      <div hidden={open}>{children}</div>
      <button ref={trigger} type="button" className="demo-toggle" aria-expanded={open} aria-controls={id} onClick={toggleDemo}>
        {open ? 'Close' : 'Try'} the {name} demo <span aria-hidden="true">{open ? '×' : '↗'}</span>
      </button>
      <div id={id} ref={panel} tabIndex={-1} hidden={!open} className="demo-panel" role="group" aria-label={`${name} interactive demonstration`}
        onKeyDown={event => { if (event.key === 'Escape') toggleDemo() }}>
        {open && <>
          <header className="demo-header"><strong>{name}</strong><span>Simulated walkthrough</span></header>
          {isSireIQ ? (
            <div className="demo-content">
              <fieldset className="demo-examples">
                <legend>Choose an example</legend>
                {sireiqExamples.map((item, index) => (
                  <label key={item.name}>
                    <input type="radio" name={id} checked={scenario === index} onChange={() => { setScenario(index); reset() }} />
                    <span>{item.name}</span>
                  </label>
                ))}
              </fieldset>
              <p className="demo-prompt">{example.prompt}</p>
              <div className="demo-response" aria-live="polite">
                <strong>{finished ? 'Example response' : 'Response preview'}</strong>
                <p>{finished ? example.response : 'Run this example to see a prepared response.'}</p>
              </div>
            </div>
          ) : (
            <div className="demo-content">
              <ol className="demo-timeline" aria-label="Workflow stages">
                {workforceSteps.map((item, index) => (
                  <li key={item.title} aria-current={index === step ? 'step' : undefined}>{item.title}</li>
                ))}
              </ol>
              <div className="demo-response" aria-live="polite">
                <strong>{workforceSteps[step].title}</strong>
                <p>{workforceSteps[step].detail}</p>
              </div>
            </div>
          )}
          <div className="demo-controls">
            <button type="button" aria-pressed={playing} aria-disabled={approval} onClick={togglePlayback}>
              {finished ? 'Replay' : playing ? 'Pause' : 'Play'}
            </button>
            <button type="button" aria-disabled={finished} onClick={() => { if (!finished) advance() }}>
              {approval ? 'Approve example' : isSireIQ ? 'Show response' : 'Next step'}
            </button>
            <button type="button" onClick={reset}>Reset</button>
          </div>
          <p className="demo-note">{isSireIQ ? 'Prepared examples with no live AI connection.' : 'Illustrative workflow with no connection to live agents or systems.'}</p>
        </>}
      </div>
    </div>
  )
}
