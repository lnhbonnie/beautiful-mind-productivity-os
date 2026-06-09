import React, { useState } from 'react';
import './_group.css';

export function Homepage() {
  const [navExpanded, setNavExpanded] = useState(true);

  return (
    <div style={{
      fontFamily: 'var(--font-primary)',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, var(--mint-bg), var(--mint-bg-fade))',
      color: 'var(--text-main)',
      display: 'grid',
      gridTemplateColumns: '240px minmax(640px, 1fr) 320px',
      gap: '24px',
      padding: '24px',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      
      {/* LEFT NAV */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid rgba(0,0,0,0.06)',
        paddingRight: '24px',
        position: 'relative'
      }}>
        <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="8"/>
            <path d="M12 8v4l3 3"/>
          </svg>
          Timeflow
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div className="nav-item active" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '8px', fontWeight: 600 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </div>
          <div className="nav-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '8px', color: 'var(--text-muted)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Planning
          </div>
          <div className="nav-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '8px', color: 'var(--text-muted)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2c-4 0-8 3-8 8 0 5 8 12 8 12s8-7 8-12c0-5-4-8-8-8z"/>
              <path d="M12 2v20"/>
            </svg>
            Focus
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.06)', margin: '20px 0' }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="nav-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderRadius: '6px', fontWeight: 600 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--color-high)' }}></div>
                High
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', background: 'rgba(0,0,0,0.04)', padding: '2px 8px', borderRadius: '12px' }}>2</span>
            </div>
            
            {navExpanded && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '20px' }}>
                <div className="nav-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '6px', fontSize: '14px' }}>
                  <div style={{ background: '#FFF1F2', padding: '4px', borderRadius: '6px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316" stroke="none">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5c-1.26-1.5-2-5-2-5z"/>
                      <path d="M12 15l-3-3a22 22 0 0 1 12-11 22 22 0 0 1-11 12z"/>
                      <path d="M9 9l3 3"/>
                    </svg>
                  </div>
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Build homepage prototype</span>
                </div>
                <div className="nav-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '6px', fontSize: '14px' }}>
                  <div style={{ background: '#EFF6FF', padding: '4px', borderRadius: '6px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#3B82F6" stroke="none">
                      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
                      <path d="M3 7l9 6 9-6"/>
                    </svg>
                  </div>
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Submit application</span>
                </div>
              </div>
            )}
          </div>

          <div className="nav-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderRadius: '6px', fontWeight: 600 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--color-medium)' }}></div>
              Medium
            </div>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>3</span>
          </div>

          <div className="nav-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderRadius: '6px', fontWeight: 600 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--color-low)' }}></div>
              Low
            </div>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>4</span>
          </div>

          <div className="nav-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderRadius: '6px', fontWeight: 600 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--color-braindump)' }}></div>
              Brain Dump
            </div>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>7</span>
          </div>

          <div className="nav-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderRadius: '6px', fontWeight: 600 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--color-done)' }}></div>
              Done
            </div>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>4</span>
          </div>

        </div>

        <div className="nav-item" style={{ position: 'absolute', bottom: '24px', left: 0, padding: '8px 12px', borderRadius: '6px', fontWeight: 600 }}>
          Bonnie L
        </div>
      </div>

      {/* CENTER & RIGHT CONTENT WRAPPER */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(640px, 1fr) 320px', gap: '24px' }}>
        
        {/* TOP TIME HEADER */}
        <div style={{ gridColumn: '1 / -1', padding: '20px 0 40px 0', textAlign: 'center' }}>
          <div style={{ fontSize: '44px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '8px' }}>2:34 PM</div>
          <div style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text-muted)' }}>5h 26m until 8:00 PM</div>
        </div>

        {/* CENTER CONTENT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', paddingRight: '24px', borderRight: '1px solid rgba(0,0,0,0.06)' }}>
          
          {/* Today + Current Focus */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-muted)' }}>Today · Mon, Jun 8</div>
            
            <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>1 thing</div>
              <div style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>Build homepage prototype</div>

              <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ background: '#FFF1F2', padding: '6px', borderRadius: '8px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#F97316" stroke="none">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5c-1.26-1.5-2-5-2-5z"/>
                        <path d="M12 15l-3-3a22 22 0 0 1 12-11 22 22 0 0 1-11 12z"/>
                        <path d="M9 9l3 3"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '20px', fontWeight: 600 }}>Build homepage prototype</span>
                  </div>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>62 min left</span>
                </div>

                <div style={{ height: '24px', background: '#F3F4F6', borderRadius: '12px', overflow: 'hidden', position: 'relative', marginBottom: '16px' }}>
                  <div style={{ width: '69%', height: '100%', background: '#10B981', display: 'flex', alignItems: 'center', paddingLeft: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'white' }}>69%</span>
                  </div>
                </div>

                <div className="hover-text" style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-muted)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', transition: 'color 0.2s' }}>
                  Start focus
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Flow */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div className="flow-block" style={{ background: 'rgba(255, 229, 154, 0.35)', borderRadius: '16px', padding: '20px 24px' }}>
              <div className="flow-line"></div>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'rgba(0,0,0,0.6)' }}>Morning · 08:00–12:00</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 1, position: 'relative' }}>
                <div className="task-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '8px', marginLeft: '-12px' }}>
                  <span style={{ width: '45px', fontSize: '14px', color: 'var(--text-muted)' }}>09:00</span>
                  <div style={{ background: '#FEF3C7', padding: '6px', borderRadius: '8px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                      <circle cx="12" cy="12" r="5"></circle>
                      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px' }}>Warm start</span>
                </div>
                <div className="task-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '8px', marginLeft: '-12px' }}>
                  <span style={{ width: '45px', fontSize: '14px', color: 'var(--text-muted)' }}>10:00</span>
                  <div style={{ background: '#D1FAE5', padding: '6px', borderRadius: '8px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#10B981" stroke="none">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px' }}>Light admin</span>
                </div>
              </div>
            </div>

            <div className="flow-block" style={{ background: 'rgba(191, 239, 219, 0.35)', borderRadius: '16px', padding: '20px 24px' }}>
              <div className="flow-line"></div>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'rgba(0,0,0,0.6)' }}>Afternoon · 12:00–17:00</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 1, position: 'relative' }}>
                <div className="task-row active" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '8px', marginLeft: '-12px' }}>
                  <span style={{ width: '45px', fontSize: '14px', fontWeight: 600 }}>2:30</span>
                  <div style={{ background: '#FFF1F2', padding: '6px', borderRadius: '8px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#F97316" stroke="none">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5c-1.26-1.5-2-5-2-5z"/>
                      <path d="M12 15l-3-3a22 22 0 0 1 12-11 22 22 0 0 1-11 12z"/>
                      <path d="M9 9l3 3"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: 600 }}>Build homepage prototype</span>
                </div>
                <div className="task-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '8px', marginLeft: '-12px' }}>
                  <span style={{ width: '45px', fontSize: '14px', color: 'var(--text-muted)' }}>4:00</span>
                  <div style={{ background: '#FEF3C7', padding: '6px', borderRadius: '8px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#B45309" stroke="none">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px' }}>Break</span>
                </div>
                <div className="task-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '8px', marginLeft: '-12px' }}>
                  <span style={{ width: '45px', fontSize: '14px', color: 'var(--text-muted)' }}>4:15</span>
                  <div style={{ background: '#EFF6FF', padding: '6px', borderRadius: '8px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#3B82F6" stroke="none">
                      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
                      <path d="M3 7l9 6 9-6"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px' }}>Submit application</span>
                </div>
              </div>
            </div>

            <div className="flow-block" style={{ background: 'rgba(216, 210, 255, 0.35)', borderRadius: '16px', padding: '20px 24px' }}>
              <div className="flow-line" style={{ height: '30px' }}></div>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'rgba(0,0,0,0.6)' }}>Evening · 17:00–20:00</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 1, position: 'relative' }}>
                <div className="task-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '8px', marginLeft: '-12px' }}>
                  <span style={{ width: '45px', fontSize: '14px', color: 'var(--text-muted)' }}>6:30</span>
                  <div style={{ background: '#CCFBF1', padding: '6px', borderRadius: '8px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0D9488" stroke="none">
                      <path d="M12 2L2 12h3v8h14v-8h3L12 2z"></path>
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px' }}>Light cleanup</span>
                </div>
                <div className="task-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 12px', borderRadius: '8px', marginLeft: '-12px' }}>
                  <span style={{ width: '45px', fontSize: '14px', color: 'var(--text-muted)' }}>7:30</span>
                  <div style={{ background: '#EDE9FE', padding: '6px', borderRadius: '8px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#6366F1" stroke="none">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px' }}>Shutdown + tomorrow setup</span>
                </div>
              </div>
            </div>

            <div className="hover-text" style={{ padding: '8px 12px', color: 'var(--text-muted)', fontSize: '15px', fontWeight: 600, cursor: 'pointer', display: 'inline-block', transition: 'color 0.2s' }}>
              + Add task
            </div>

          </div>

          <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }}></div>

          {/* Next 2 Days */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '40px' }}>
            <div style={{ fontSize: '16px', fontWeight: 600 }}>Next 2 Days</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              
              <div className="rail-card" style={{ flex: 1, background: 'rgba(255,255,255,0.4)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Tue, Jun 9</div>
                <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Tomorrow · 4 tasks</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.4' }}>Submit application · Polish prototype</div>
              </div>

              <div className="rail-card" style={{ flex: 1, background: 'rgba(255,255,255,0.4)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Wed, Jun 10</div>
                <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Day After · 2 tasks</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.4' }}>Follow up · Rest/admin</div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT RAIL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/>
              </svg>
              First 3 Steps
            </div>
            <div style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '4px' }}>Build homepage prototype</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div className="rail-card" style={{ padding: '8px 12px', borderRadius: '6px', fontSize: '14px', display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--text-muted)' }}>1</span>
                Open Replit
              </div>
              <div className="rail-card" style={{ padding: '8px 12px', borderRadius: '6px', fontSize: '14px', display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--text-muted)' }}>2</span>
                Build shell
              </div>
              <div className="rail-card" style={{ padding: '8px 12px', borderRadius: '6px', fontSize: '14px', display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--text-muted)' }}>3</span>
                Add right rail
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Future Unlock
            </div>
            <div style={{ padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.03)', fontSize: '14px', lineHeight: '1.6' }}>
              <div style={{ fontWeight: 600 }}>Build homepage prototype</div>
              <div style={{ color: 'var(--text-muted)', margin: '4px 0' }}>↓</div>
              <div>Replit submission</div>
              <div style={{ color: 'var(--text-muted)' }}>• possible interview</div>
            </div>
          </div>

          <div className="rail-card" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="8" width="18" height="14" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="22"></line>
              <path d="M12 8H8a2 2 0 0 1 0-4h4v4z"></path>
              <path d="M12 8h4a2 2 0 0 0 0-4h-4v4z"></path>
            </svg>
            <span style={{ fontSize: '18px', fontWeight: 700 }}>Dopamine</span>
          </div>

          <div className="rail-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', borderRadius: '12px' }}>
            <div style={{ fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              Your Wins
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>• Setup shell project</div>
              <div>• Configured styling</div>
            </div>
          </div>

          {/* Daily Shutdown at bottom */}
          <div className="rail-card" style={{ position: 'absolute', bottom: '24px', left: 0, right: 0, padding: '12px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <span style={{ fontSize: '16px', fontWeight: 600 }}>Daily Shutdown</span>
          </div>

        </div>
      </div>
    </div>
  );
}
