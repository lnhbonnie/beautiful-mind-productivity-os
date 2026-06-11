import React, { useState } from 'react';
import './_group.css';

const noop = () => {};

function TaskChip({ type }: { type: string }) {
  const chips: Record<string, { bg: string; el: React.ReactNode }> = {
    rocket: {
      bg: '#FFF1F2',
      el: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#F97316" stroke="none">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5c-1.26-1.5-2-5-2-5z"/>
          <path d="M12 15l-3-3a22 22 0 0 1 12-11 22 22 0 0 1-11 12z"/>
          <path d="M9 12l3 3"/>
        </svg>
      ),
    },
    envelope: {
      bg: '#EFF6FF',
      el: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#3B82F6" stroke="none">
          <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
          <path d="M3 7l9 6 9-6" fill="none" stroke="#3B82F6" strokeWidth="1.5"/>
        </svg>
      ),
    },
    coffee: {
      bg: '#FEF3C7',
      el: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#B45309" stroke="none">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
          <line x1="6" y1="1" x2="6" y2="4" stroke="#B45309" strokeWidth="1.5"/>
          <line x1="10" y1="1" x2="10" y2="4" stroke="#B45309" strokeWidth="1.5"/>
        </svg>
      ),
    },
    sun: {
      bg: '#FEF3C7',
      el: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    clipboard: {
      bg: '#D1FAE5',
      el: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#059669" stroke="none">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
          <rect x="8" y="2" width="8" height="4" rx="1"/>
          <path d="M9 14l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
    },
    broom: {
      bg: '#CCFBF1',
      el: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#0D9488" stroke="none">
          <path d="M3 21l9-9"/>
          <path d="M12.22 6.22a2.5 2.5 0 0 1 3.54-3.54l4.56 4.56a2.5 2.5 0 0 1-3.54 3.54l-.53.53-4.56-4.56z"/>
          <path d="M7 15l2 2-4 4-2-4z" fill="#0D9488"/>
        </svg>
      ),
    },
    moon: {
      bg: '#EDE9FE',
      el: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#6366F1" stroke="none">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ),
    },
  };
  const chip = chips[type] || chips.rocket;
  return (
    <div style={{
      background: chip.bg,
      width: '24px',
      height: '24px',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      {chip.el}
    </div>
  );
}

function HollowRing({ color }: { color: string }) {
  return (
    <div style={{
      width: '11px',
      height: '11px',
      borderRadius: '50%',
      border: `2.5px solid ${color}`,
      flexShrink: 0,
    }} />
  );
}

export function Homepage() {
  const [highExpanded, setHighExpanded] = useState(true);

  return (
    <div
      className="app-root"
      style={{
        fontFamily: 'var(--font-primary)',
        height: '100vh',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '220px 1fr 260px',
        gridTemplateRows: '1fr',
        padding: '16px 20px',
        gap: 0,
        background: '#FAFAF8',
        color: 'var(--text-main)',
        position: 'relative',
        zIndex: 0,
      }}
    >
      {/* ─── LEFT NAV ─── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        paddingRight: '16px',
        borderRight: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '20px',
          paddingTop: '4px',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="8"/>
            <path d="M12 8v4l2.5 2.5"/>
          </svg>
          <span style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em', opacity: 0.75 }}>
            Timeflow
          </span>
        </div>

        {/* Primary nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '8px' }}>
          <div className="nav-item active" onClick={noop} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '8px 10px', fontSize: '14px', fontWeight: 600,
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </div>
          <div className="nav-item" onClick={noop} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '8px 10px', fontSize: '14px', color: 'var(--text-muted)',
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Planning
          </div>
          <div className="nav-item" onClick={noop} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '8px 10px', fontSize: '14px', color: 'var(--text-muted)',
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            Focus
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '8px' }} />

        {/* Priority groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, overflow: 'hidden' }}>
          {/* High – expanded */}
          <div>
            <div
              className="nav-item"
              onClick={() => setHighExpanded(v => !v)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '6px 10px', fontSize: '13px', fontWeight: 600,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HollowRing color="var(--color-high)" />
                High
              </div>
              <span style={{
                fontSize: '12px', color: 'var(--text-secondary)',
                background: 'rgba(0,0,0,0.04)', padding: '1px 6px', borderRadius: '10px',
              }}>2</span>
            </div>
            {highExpanded && (
              <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '1px', marginTop: '1px' }}>
                <div className="nav-item" onClick={noop} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '5px 10px', fontSize: '13px',
                }}>
                  <TaskChip type="rocket" />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Build homepage</span>
                </div>
                <div className="nav-item" onClick={noop} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '5px 10px', fontSize: '13px',
                }}>
                  <TaskChip type="envelope" />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Submit application</span>
                </div>
              </div>
            )}
          </div>

          {/* Medium / Low / Brain Dump / Done – collapsed */}
          {[
            { label: 'Medium', count: 3, color: 'var(--color-medium)' },
            { label: 'Low', count: 4, color: 'var(--color-low)' },
            { label: 'Brain Dump', count: 7, color: 'var(--color-braindump)' },
            { label: 'Done', count: 4, color: 'var(--color-done)' },
          ].map(({ label, count, color }) => (
            <div key={label} className="nav-item" onClick={noop} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '6px 10px', fontSize: '13px', fontWeight: 600,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HollowRing color={color} />
                {label}
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{count}</span>
            </div>
          ))}
        </div>

        {/* Bonnie L — pinned bottom */}
        <div className="bonnie-btn" onClick={noop} style={{ marginTop: 'auto' }}>
          Bonnie L
        </div>
      </div>

      {/* ─── CENTER + RIGHT wrapper ─── */}
      <div style={{
        gridColumn: '2 / 4',
        display: 'grid',
        gridTemplateColumns: '1fr 260px',
        gridTemplateRows: 'auto 1fr',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* TOP TIME HEADER — spans both columns */}
        <div style={{
          gridColumn: '1 / 3',
          textAlign: 'center',
          paddingTop: '6px',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '12px',
        }}>
          <div style={{
            fontSize: '42px', fontWeight: 700, letterSpacing: '-0.025em',
            lineHeight: 1.1, color: 'var(--text-main)',
          }}>
            2:34 PM
          </div>
          <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-muted)', marginTop: '3px' }}>
            5h 26m until 8:00 PM
          </div>
        </div>

        {/* ─── CENTER COLUMN ─── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          paddingRight: '16px',
          borderRight: '1px solid var(--border-subtle)',
          height: '100%',
          overflow: 'hidden',
          minHeight: 0,
        }}>

          {/* Today section */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)',
              marginBottom: '6px', letterSpacing: '0.003em',
            }}>
              Today · Mon, Jun 8
            </div>
            <div className="clickable" onClick={noop} style={{
              background: 'var(--surface)',
              borderRadius: '12px',
              padding: '10px 14px',
              border: '1px solid rgba(255,255,255,0.9)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                1 thing
              </div>
              <div style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                Build homepage prototype
              </div>
            </div>
          </div>

          {/* Current Focus Card */}
          <div className="clickable" onClick={noop} style={{
            flexShrink: 0,
            background: 'var(--surface)',
            borderRadius: '12px',
            padding: '11px 14px',
            border: '1px solid rgba(255,255,255,0.9)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <TaskChip type="rocket" />
                <span style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  Build homepage prototype
                </span>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', flexShrink: 0 }}>62 min left</span>
            </div>

            {/* Progress bar */}
            <div style={{
              height: '22px',
              background: '#F3F4F6',
              borderRadius: '11px',
              overflow: 'hidden',
              marginBottom: '8px',
            }}>
              <div style={{
                width: '69%',
                height: '100%',
                background: 'linear-gradient(90deg, #10B981, #34D399)',
                borderRadius: '11px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '10px',
              }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'white' }}>69%</span>
              </div>
            </div>

            <button className="start-focus-btn" onClick={noop}>
              Start focus
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Today's Flow — flex: 1 to fill remaining space */}
          <div style={{
            flex: 1,
            minHeight: 0,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '5px', flexShrink: 0 }}>
              Today's Flow
            </div>

            {/* Blocks container */}
            <div style={{
              flex: 1,
              minHeight: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              overflow: 'hidden',
            }}>

              {/* Morning */}
              <div className="flow-block" style={{
                flex: '2 1 0',
                minHeight: 0,
                background: 'rgba(255,229,154,0.32)',
                borderRadius: '10px',
                padding: '7px 10px 7px 22px',
                overflow: 'hidden',
              }}>
                <div className="flow-line" />
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(0,0,0,0.5)', marginBottom: '5px' }}>
                  Morning · 08:00–12:00
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {[
                    { time: '09:00', chip: 'sun', label: 'Warm start' },
                    { time: '10:00', chip: 'clipboard', label: 'Light admin' },
                  ].map(({ time, chip, label }) => (
                    <div key={time} className="task-row" onClick={noop} style={{
                      display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px',
                    }}>
                      <span style={{ width: '38px', fontSize: '12px', color: 'var(--text-muted)', flexShrink: 0 }}>{time}</span>
                      <TaskChip type={chip} />
                      <span style={{ fontSize: '13px' }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Afternoon */}
              <div className="flow-block" style={{
                flex: '3 1 0',
                minHeight: 0,
                background: 'rgba(191,239,219,0.32)',
                borderRadius: '10px',
                padding: '7px 10px 7px 22px',
                overflow: 'hidden',
              }}>
                <div className="flow-line" />
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(0,0,0,0.5)', marginBottom: '5px' }}>
                  Afternoon · 12:00–16:00
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {[
                    { time: '2:30', chip: 'rocket', label: 'Build homepage prototype', active: true },
                    { time: '4:00', chip: 'coffee', label: 'Break', active: false },
                    { time: '4:15', chip: 'envelope', label: 'Submit application', active: false },
                  ].map(({ time, chip, label, active }) => (
                    <div key={time} className={`task-row${active ? ' active-row' : ''}`} onClick={noop} style={{
                      display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px',
                    }}>
                      <span style={{
                        width: '38px', fontSize: '12px', flexShrink: 0,
                        color: active ? 'var(--text-main)' : 'var(--text-muted)',
                        fontWeight: active ? 600 : 400,
                      }}>{time}</span>
                      <TaskChip type={chip} />
                      <span style={{ fontSize: '13px', fontWeight: active ? 600 : 400 }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evening */}
              <div className="flow-block" style={{
                flex: '2 1 0',
                minHeight: 0,
                background: 'rgba(216,210,255,0.32)',
                borderRadius: '10px',
                padding: '7px 10px 7px 22px',
                overflow: 'hidden',
              }}>
                <div className="flow-line" />
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(0,0,0,0.5)', marginBottom: '5px' }}>
                  Evening · 16:00–20:00
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {[
                    { time: '6:30', chip: 'broom', label: 'Light cleanup' },
                    { time: '7:30', chip: 'moon', label: 'Shutdown + tomorrow setup' },
                  ].map(({ time, chip, label }) => (
                    <div key={time} className="task-row" onClick={noop} style={{
                      display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px',
                    }}>
                      <span style={{ width: '38px', fontSize: '12px', color: 'var(--text-muted)', flexShrink: 0 }}>{time}</span>
                      <TaskChip type={chip} />
                      <span style={{ fontSize: '13px' }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* + Add task */}
            <div style={{ flexShrink: 0, paddingTop: '4px' }}>
              <span className="add-task-btn" onClick={noop}>+ Add task</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'var(--border-subtle)', flexShrink: 0 }} />

          {/* Next 2 Days */}
          <div style={{ flexShrink: 0, paddingBottom: '2px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Next 2 Days</div>
            <div className="clickable" onClick={noop} style={{
              display: 'flex', gap: '10px',
              background: 'transparent',
            }}>
              {[
                { date: 'Tue, Jun 9', label: 'Tomorrow · 4 tasks', tasks: 'Submit application · Polish prototype' },
                { date: 'Wed, Jun 10', label: 'Day After · 2 tasks', tasks: 'Follow up · Rest/admin' },
              ].map(({ date, label, tasks }) => (
                <div key={date} className="next2days-card" onClick={noop} style={{
                  flex: 1,
                  padding: '10px 12px',
                }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '3px', fontWeight: 500 }}>{date}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '3px' }}>{label}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.4 }}>{tasks}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── RIGHT RAIL ─── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden',
          paddingLeft: '16px',
          gap: '14px',
          minHeight: 0,
        }}>

          {/* First 3 Steps */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              fontSize: '14px', fontWeight: 600, marginBottom: '4px',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
              </svg>
              First 3 Steps
            </div>
            <div style={{ fontSize: '12px', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '5px' }}>
              Build homepage prototype
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {[['1', 'Open Replit'], ['2', 'Build shell'], ['3', 'Add right rail']].map(([n, step]) => (
                <div key={n} className="step-row" onClick={noop}>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 600, width: '14px', flexShrink: 0 }}>{n}</span>
                  <span style={{ fontSize: '13px' }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Unlock */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              fontSize: '14px', fontWeight: 600, marginBottom: '6px',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Future Unlock
            </div>
            <div className="rail-clickable" onClick={noop} style={{
              padding: '10px 12px',
              background: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(0,0,0,0.04)',
              borderRadius: '10px',
              fontSize: '13px',
              lineHeight: 1.55,
            }}>
              <div style={{ fontWeight: 600 }}>Build homepage prototype</div>
              <div style={{ color: 'var(--text-secondary)', margin: '2px 0', fontSize: '16px', lineHeight: 1 }}>↓</div>
              <div>Replit submission</div>
              <div style={{ color: 'var(--text-muted)' }}>• possible interview</div>
            </div>
          </div>

          {/* Dopamine */}
          <div className="rail-clickable" onClick={noop} style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 12px',
            background: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(0,0,0,0.04)',
            borderRadius: '10px',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 12 20 22 4 22 4 12"/>
              <rect x="2" y="7" width="20" height="5"/>
              <line x1="12" y1="22" x2="12" y2="7"/>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
            </svg>
            <span style={{ fontSize: '17px', fontWeight: 700 }}>Dopamine</span>
          </div>

          {/* Push bottom group to bottom */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Your Wins */}
            <div className="rail-clickable" onClick={noop} style={{
              padding: '10px 12px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.44)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                fontSize: '14px', fontWeight: 600, marginBottom: '6px',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
                Your Wins
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {['• Setup shell project', '• Configured styling', '• Placed first layout'].map(w => (
                  <div key={w} style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.4 }}>{w}</div>
                ))}
              </div>
            </div>

            {/* Daily Shutdown */}
            <div className="rail-clickable" onClick={noop} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 12px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.44)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Daily Shutdown</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
