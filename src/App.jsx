import './app.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';


/* assets */
import headshot from './assets/headshot.png';
import crodaThumb from './assets/croda-thumb.png';
import tescoThumb from './assets/tesco-thumb.png';
import btcThumb   from './assets/btc-gold-thumb.png';
import aiThumb    from './assets/ai-app-thumb.png';
import swiggyThumb from './assets/swiggy-thumb.png';
import emThumb     from './assets/em-thumb.png';
import tescoCoverage from './assets/tesco-coverage.png';
import tescoLeverage from './assets/tesco-leverage.png';
import btcRolling    from './assets/btc-rolling-beta.png';
import btcBuckets    from './assets/btc-cpi-buckets.png';
import aiProfessor   from './assets/ai-professor.png';
import aiNudge       from './assets/ai-nudge.png';
import crodaSalesMix from './assets/croda-sales-mix.png';
import swiggyFig1 from './assets/writing/swiggy-fig1.png';
import emFig1 from './assets/writing/em-fig1.png';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


/* small: on-scroll reveal (optional; hooked to .fade-in) */
function useRevealOnScroll(){
  useEffect(()=>{
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
    },{threshold:0.15});
    document.querySelectorAll('.fade-in').forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);
}

/* ---------------- Home sections ---------------- */

function Hero() {
  useRevealOnScroll();
  return (
    <header id="about" className="hero">
      <div className="hero-grid">
        <div className="fade-in">
          <h1>Aran <span className="accent">Lakhanpaul</span></h1>
          <p>
            I’m Aran Lakhanpaul, an Imperial MSc Investment and Wealth Management graduate with a First in Economics from UCL.
            I enjoy connecting the dots across macro themes and markets, then tailoring the message so it lands with the right audience.
            Whether in analysis or client conversations, my edge is translating complexity into something clear, relevant and actionable.
          </p>
          <div className="row">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#writing" className="btn ghost">Read Writing</a>
          </div>
        </div>
        <img src={headshot} alt="Aran headshot" className="headshot fade-in" />
      </div>
    </header>
  );
}

function Projects() {
  const items = [
    { t:'Croda Stock Pitch',
      d:'Croda International (LSE:CRDA), a specialty ingredients supplier in health, beauty and agriculture, offers a resilient entry point as its high-return Life Sciences and Consumer Care segments expand despite cyclical headwinds.',
      img:crodaThumb, link:'/projects/croda' },
    { t:'Tesco Credit Analysis',
      d:'Analysed Tesco’s credit profile across leverage, interest coverage and bond maturities. Findings show improving resilience, proactive debt management and the potential for an S&P upgrade.',
      img:tescoThumb, link:'/projects/tesco' },
    { t:'Bitcoin vs Gold',
      d:'Applied Project, Imperial MSc Investment and Wealth Management: “Is Bitcoin a better inflation hedge than gold?” Using regression analysis and rolling betas around the January 2024 spot ETF approval, I found evidence that Bitcoin’s sensitivity to inflation expectations is rising, though it remains volatile and asymmetric. Gold continues to serve as the anchor hedge, while Bitcoin may offer value as a tactical complement.',
      img:btcThumb, link:'/projects/btc-gold' },
    { t:'AI Critical Thinking App',
      d:'To encourage the use of AI to hone critical thinking skills rather than replace them.',
      img:aiThumb, link:'/projects/ai-app' },
  ];

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2 className="fade-in">Featured Projects</h2>
        <div className="grid">
          {items.map(x=>(
            <article className="card fade-in" key={x.t}>
              <div className="thumbBox"><img src={x.img} alt={x.t} /></div>
              <h3>{x.t}</h3>
              <p className="muted">{x.d}</p>
              <Link className="btn" to={x.link}>Open</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  const items = [
    { t:"Swiggy IPO — India’s Poor Offering?",
      d:"Opinion Piece: Swiggy’s IPO captures India’s entrepreneurial energy but also exposes cracks in demand, credit and capital flows.",
      img: swiggyThumb, link: "/writing/swiggy" },
    { t:"Emerging Markets — A Fragile Renaissance?",
      d:"Opinion Piece: EMs are enjoying a rally on lower US rates and Chinese stimulus, but without deeper reforms the recovery risks being short-lived.",
      img: emThumb, link: "/writing/em-renaissance" },
  ];
  return (
    <section id="writing" className="section">
      <div className="wrap">
        <h2 className="fade-in">Macroeconomic Writing</h2>
        <div className="grid">
          {items.map(x=>(
            <article className="card fade-in" key={x.t}>
              <div className="thumbBox"><img src={x.img} alt={x.t} /></div>
              <h3>{x.t}</h3>
              <p className="muted">{x.d}</p>
              <Link className="btn" to={x.link}>Read</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CV() {
  return (
    <section id="cv" className="section cv">
      <div className="wrap">
        <h2 className="fade-in">CV</h2>

        <div className="cv-grid">
          {/* Left column */}
          <div className="cv-col fade-in">
            <h3>Education</h3>
            <ul className="cv-list">
              <li>MSc Investment and Wealth Management, Imperial College London (Distinction predicted)</li>
              <li>BSc Economics, University College London (First Class)</li>
            </ul>

            <h3>Skills &amp; Certifications</h3>
            <ul className="cv-list">
              <li>Excel (advanced, VBA), Bloomberg, R</li>
              <li>Imperial Excel Modelling Bootcamp Certificate</li>
            </ul>
          </div>

          {/* Right column */}
          <div className="cv-col fade-in">
            <h3>Selected Work</h3>
            <ul className="cv-list">
              <li>Applied Project – Bitcoin vs Gold: Quantitative analysis of Bitcoin’s inflation sensitivity post-ETF vs gold.</li>
              <li>Croda Stock Pitch: Equity thesis with catalysts, risks and valuation snapshot.</li>
              <li>Tesco Credit Analysis: Examined leverage, interest cover and bond maturities.</li>
              <li>L’Oréal (Commercial Executive Placement): Managed client relationships (£700k weekly revenue), delivered insights to senior stakeholders, automated product showcasing with VBA.</li>
              <li>Reditum Capital (Asset Management Experience): Produced market analysis on commercial real estate for investment directors.</li>
            </ul>

            <h3>Other</h3>
            <ul className="cv-list">
              <li>Manage a self-directed investment portfolio</li>
              <li>Built apps for language learning and AI-powered market research</li>
              <li>Keen golfer</li>
            </ul>
          </div>
        </div>

        <div className="cv-actions">
          <a className="btn" href="/Aran_Lakhanpaul_CV.pdf" target="_blank" rel="noreferrer">Download full CV here</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <h2 className="fade-in">Contact</h2>
        <p>
          <a href="mailto:aran.lakhanpaul@hotmail.co.uk">aran.lakhanpaul@hotmail.co.uk</a>
          {' · '}
          <a href="https://www.linkedin.com/in/aran-lakhanpaul-695ab4190" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}

/* --------------- Page shell --------------- */

function PageShell({ title, children }) {
  return (
    <main className="section">
      <div className="wrap">
        <Link className="btn ghost" to="/">← Back</Link>
        <h2 style={{marginTop: '16px'}}>{title}</h2>
        <div className="prose" style={{marginTop:'16px'}}>{children}</div>
      </div>
    </main>
  );
}

/* --------------- Project pages --------------- */

function CrodaPage() {
  return (
    <PageShell title="Croda International Plc (LSE: CRDA)">
      <p className="muted" style={{marginTop: 0}}>
        The invisible supplier to health, beauty, and agriculture.
      </p>

      <h3>Investment Thesis</h3>
      <ul>
        <li><strong>Essential, not flashy.</strong> Specialty ingredients embedded in supply chains.</li>
        <li><strong>Under-earning today.</strong> Destocking weighing on results.</li>
        <li><strong>Quality at entry point.</strong> High-ROIC compounder at discount.</li>
        <li><strong>Structural tailwind.</strong> Life Sciences tilt boosts margins.</li>
      </ul>

      <h3>Catalysts</h3>
      <ul>
        <li><strong>Health &amp; Pharma.</strong> RNA lipid demand.</li>
        <li><strong>Clean Beauty.</strong> Natural ingredient push.</li>
        <li><strong>Agri-science.</strong> Food security &amp; climate demand.</li>
        <li><strong>Cost savings.</strong> £100m targeted by 2027.</li>
      </ul>

      <h3>Why Now?</h3>
      <ul>
        <li><strong>Cyclical trough.</strong> Shares –26% YTD; destocking easing.</li>
        <li><strong>Structural shift.</strong> Strategic move to Life Sciences &amp; premium Care.</li>
        <li><strong>Execution tailwinds.</strong> £100m savings + easing capex → stronger FCF.</li>
      </ul>

      <div className="grid" style={{gridTemplateColumns:'1fr 1fr', gap:'18px'}}>
        <section className="card">
          <h4 style={{marginTop:0}}>Valuation Snapshot</h4>
          <dl style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:'8px 14px',margin:0}}>
            <dt>Share Price</dt><dd>£24.81</dd>
            <dt>P/E Ratio</dt><dd>16.1</dd>
            <dt>Dividend Yield</dt><dd>4.4%</dd>
            <dt>Market Cap</dt><dd>£3.44bn</dd>
            <dt>ROIC</dt><dd>6% (core &gt;20%)</dd>
            <dt>Consensus Target</dt><dd>£36.00</dd>
          </dl>
        </section>

        <section className="card">
          <h4 style={{marginTop:0}}>Risks &amp; Mitigants</h4>
          <dl style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:'8px 14px',margin:0}}>
            <dt>Risk</dt><dd>Mitigant</dd>
            <dt>Cyclical demand</dt><dd>Diversified sticky products</dd>
            <dt>Input-cost pressure</dt><dd>Cost pass-through track record</dd>
            <dt>Weak sentiment</dt><dd>Balance sheet + savings</dd>
          </dl>
        </section>
      </div>

      <p className="muted" style={{marginTop:'16px'}}>
        <strong>Structural tilt:</strong> Consumer Care + Life Sciences now ~88% of sales vs ~70% in 2021.
        Croda won’t make headlines, but it enables the companies that do and thus driving resilient, cash-generative growth.
      </p>

      <figure className="card" style={{marginTop:'16px'}}>
        <h4>Sales Mix</h4>
        <img src={crodaSalesMix} alt="Croda sales mix" />
      </figure>

      <p style={{marginTop:'24px'}}>
        <a className="btn" href="/Croda_OnePager_Final.pdf" target="_blank" rel="noreferrer">
          Download PDF
        </a>
      </p>
    </PageShell>
  );
}

function TescoPage() {
  return (
    <PageShell title="Tesco Credit Analysis (2021–2024)">
      <h3>Credit Ratings Overview</h3>
      <p>
        Tesco is rated as <strong>investment grade</strong> by all three major credit agencies, though
        near the cusp of speculative grade. <strong>S&amp;P’s positive outlook</strong> reflects potential
        for an upgrade if metrics continue to strengthen.
      </p>

      <table className="ratings">
        <thead>
          <tr>
            <th>Agency</th>
            <th>Short Term Rating</th>
            <th>Long Term Rating</th>
            <th>Outlook</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Fitch</td><td>F3</td><td>BBB-</td><td>Stable</td></tr>
          <tr><td>Moody’s</td><td>P-3</td><td>Baa3</td><td>Stable</td></tr>
          <tr><td>S&amp;P</td><td>A-3</td><td>BBB-</td><td>Positive</td></tr>
        </tbody>
      </table>

      <h3>Bond Issuances &amp; Maturity Profile</h3>
      <p>
        Tesco has a diverse portfolio of unsecured bonds with maturities stretching as far as
        <strong> 2057</strong>, smoothing refinancing risk.
      </p>
      <ul>
        <li><strong>Example 1:</strong> EUR 600m <strong>2047</strong> bond, reduced to EUR 185m outstanding.</li>
        <li><strong>Example 2:</strong> GBP 200m <strong>2029</strong> bond, only GBP 38m outstanding.</li>
      </ul>
      <p>
        Tesco also maintains <strong>£2.5bn</strong> in undrawn bank facilities as part of its risk management
        approach, ensuring liquidity in meeting near-term obligations.
      </p>

      <h3>Financial Performance and Key Ratios (2021–2024)</h3>
      <p><strong>Leverage (Debt-to-EBITDA)</strong></p>
      <ul>
        <li>Tesco’s Debt-to-EBITDA ratio improved from <strong>5.06</strong> in 2021 to <strong>3.07</strong> in 2024.</li>
        <li>Most significant improvement occurred between <strong>2023 and 2024</strong>.</li>
      </ul>

      <p><strong>Interest Coverage</strong></p>
      <ul>
        <li>Tesco’s Interest Coverage Ratio improved from <strong>4.45x</strong> in 2021 to <strong>5.90x</strong> in 2024.</li>
        <li>Indicates a strengthened capability of meeting interest obligations.</li>
      </ul>

      <p><strong>Liquidity Position</strong></p>
      <ul>
        <li>Current Ratio rose from <strong>0.68</strong> (2021) to <strong>0.81</strong> (2024).</li>
        <li>Current assets grew to <strong>£16.6bn</strong> in 2024, providing more cushion for short-term obligations.</li>
      </ul>

      <div className="grid" style={{marginTop:'20px', gridTemplateColumns:'1fr'}}>
        <figure className="card flush">
          <h4 style={{padding:'12px 16px 0', margin:0}}>Leverage (2021–2024)</h4>
          <img className="chart-lg" src={tescoLeverage} alt="Tesco leverage change 2021–2024" />
        </figure>
        <figure className="card flush">
          <h4 style={{padding:'12px 16px 0', margin:0}}>Interest Coverage (2021–2024)</h4>
          <img className="chart-lg" src={tescoCoverage} alt="Tesco interest coverage 2021–2024" />
        </figure>
      </div>

      <h3>Outlook</h3>
      <ul>
        <li>Solid investment grade entity with improving metrics.</li>
        <li>Smoothed maturity profile out to 2057.</li>
        <li>Liquidity still area to strengthen.</li>
        <li>S&amp;P upgrade possible if deleveraging continues.</li>
      </ul>

      <p className="muted">Originally written as a credit case study (2024).</p>

      <p style={{marginTop:'24px'}}>
        <a className="btn" href="/Tesco_Credit_Analysis.pdf" target="_blank" rel="noreferrer">
          Download PDF
        </a>
      </p>
    </PageShell>
  );
}

function BtcGoldPage() {
  return (
    <PageShell title="Bitcoin vs Gold — Applied Project">
      <h3>Executive Summary</h3>
      <p>
        This project investigates whether Bitcoin has become a more effective hedge against inflation
        compared with gold, particularly following the approval of US spot Bitcoin ETFs in January 2024.
        Using Bloomberg data, the analysis applied a combination of static regressions, structural
        dummy-interaction models and 60-day rolling regressions to capture both short-term and evolving
        relationships between asset returns and inflation measures. A manually constructed CPI surprise
        variable was incorporated to sharpen the identification of inflation shocks.
      </p>
      <p>
        The results show that Bitcoin’s inflation sensitivity is increasing, most notably with respect to
        breakeven inflation expectations. Rolling regressions indicate that Bitcoin’s beta to breakevens
        has trended upward post-ETF approval, suggesting a gradual structural shift. However, Bitcoin
        still reacts poorly to sharp upside inflation surprises, often behaving like a high-beta risk
        asset vulnerable to rate shocks. Gold, by contrast, remains broadly stable, showing its
        traditional role as a defensive long-term hedge.
      </p>
      <p>
        Overall, the findings suggest that while Bitcoin should not be viewed as a direct replacement for
        gold, it has potential as a tactical complement, particularly in environments where inflation
        expectations are rising steadily rather than spiking.
      </p>

      <div className="grid" style={{marginTop:'20px', gridTemplateColumns:'1fr'}}>
        <figure className="card">
          <h4>Rolling Beta vs Breakevens (60-day)</h4>
          <img className="chart-lg" src={btcRolling} alt="BTC rolling beta vs breakevens" />
        </figure>
        <figure className="card">
          <h4>CPI Surprise Buckets — Return Behavior</h4>
          <img className="chart-lg" src={btcBuckets} alt="BTC & Gold performance by CPI surprise buckets" />
        </figure>
      </div>

      <p className="muted" style={{marginTop:'16px'}}>
        Full paper available on request.
      </p>
      <p>
        <a
          className="btn"
          href="mailto:aran.lakhanpaul@hotmail.co.uk?subject=Request%20for%20Full%20Paper%20—%20Bitcoin%20vs%20Gold"
        >
          Request Full Paper
        </a>
      </p>
    </PageShell>
  );
}

function AiAppPage() {
  return (
    <PageShell title="AI Critical Thinking App">
      <p className="muted">Demo AI App for critical thinking</p>

      <h3>Executive Summary</h3>
      <p>
        Demo AI app designed to sharpen critical thinking through live news.
        A <strong>“Professor” persona</strong> delivers witty, ironic prompts, while features like
        <strong> Nudge</strong> and <strong>Ask for an Example</strong> push users beyond surface-level answers.
        The goal is to make reflection quick, engaging and habit-forming.
      </p>

      <h3>Key Features</h3>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'16px'}}>
        <div className="card"><strong>Professor Persona</strong><p className="muted">Witty, ironic prompts to challenge assumptions.</p></div>
        <div className="card"><strong>Nudge</strong><p className="muted">Pushes for more precise and thoughtful answers.</p></div>
        <div className="card"><strong>Ask for an Example</strong><p className="muted">Encourages concrete illustrations, not just theory.</p></div>
      </div>

      <h3 style={{marginTop:'24px'}}>Screenshots</h3>
      <div className="grid" style={{gridTemplateColumns:'1fr', gap:'32px'}}>
        <figure>
          <img src={aiProfessor} alt="Professor persona demo" style={{width:'100%'}} />
          <figcaption>Professor Persona in action</figcaption>
        </figure>
        <figure>
          <img src={aiNudge} alt="Nudge + Example demo" style={{width:'100%'}} />
          <figcaption>Nudge &amp; Ask for an Example</figcaption>
        </figure>
      </div>

      <p className="muted" style={{marginTop:'20px'}}>Rough demo only.</p>
    </PageShell>
  );
}

/* --------------- Writing pages --------------- */

function SwiggyPage() {
  return (
    <PageShell title="Swiggy IPO — India’s Poor Offering?">
      <article className="prose">
        <h3>IPO: India’s Poor Offering?</h3>
        <p>
          Swiggy, the food delivery app giant, is set to go public this Wednesday with a $1.3 billion IPO,
          but the excitement may be lukewarm (FT, 2024). Joining a surge of Indian companies looking to
          capitalise on public offerings, Swiggy represents a market that some analysts say is running on
          fumes. Swiggy is merely the latest to join the fray, following Hyundai’s underwhelming $3.3 billion IPO,
          the largest in Asia this year, which has struggled due to perceived overvaluation and slowing EV sales.
          Even early backers Tencent and Accel have decided to cash out now, perhaps signalling their own caution.
        </p>

        <h3>Indian markets running out of spice</h3>
        <p>
          The question looms: is Swiggy’s IPO a microcosm of larger economic issues? The Nifty index recently fell,
          as seen below, with a record-breaking $11.2 billion outflow from Indian equities in October (FT, 2024).
          Investors seem to be in search of ‘fine China’, where a new $1.4 trillion stimulus was announced, or are
          holding cash to navigate volatility post-U.S. election.
        </p>

        <figure>
          <img className="chart-tight" src={swiggyFig1} alt="Swiggy IPO market backdrop" />
        </figure>

        <h3>Inflation’s sticky wicket</h3>
        <p>
          Weakening demand is evident across corporate India, as sluggish earnings and Goldman Sachs’ equity downgrade
          from ‘overweight’ to ‘neutral’ suggest. Meanwhile, inflation remains stubbornly high at 6%, but the Reserve
          Bank of India (RBI) has been reluctant to cut interest rates from 6.5% with governor Shaktikanta Das
          cautioning it is too risky for an imminent rate cut (FT, 2024). Unlike India’s cricket obsession, where
          hitting 6s is revered, the RBI would be wise to aim closer to the inflation target of 4, to ensure
          middle-class spending power isn’t excessively eroded.
        </p>

        <h3>Credit no longer where it’s due</h3>
        <p>
          The RBI’s recent retail credit crackdown might be hitting the economy’s backbone, the middle class, who once
          drove India’s rally with aspirational spending. This demographic previously fuelled India’s economic rally,
          ploughing household savings and bank deposits into capital markets, but now finds itself squeezed by stricter
          lending criteria, with delinquencies set to rise by 30-50 basis points by March 2025 (FT, 2024). The rupee’s
          recent plunge and foreign stock ownership hitting a 12-year low beckons an overreliance on domestic investors
          to support markets; support they lack the capacity to offer.
        </p>

        <h3>Swiggy might be ‘Gettin’ Jiggy wit it’</h3>
        <p>
          Following casualties of similar players like Uber Eats and Dunzo, Swiggy’s future in an ‘uber-competitive’
          market (pun intended) is uncertain, but with rising smartphone usage and expanding infrastructure, it might
          still have a chance to become India’s next IPO ‘biggie’. It has the right elements to succeed, even if
          broader economic forces seem to be stacked against it.
        </p>

        <h3>End of the Innings, Is India a Sell?</h3>
        <p>
          With inflation stubbornly high, demand weakening, and foreign capital flowing out, India’s economic ‘boom’
          may be about to bomb. While Swiggy’s IPO reflects the country’s entrepreneurial spirit, it also raises
          questions about whether India’s economy has the resilience to support ambitious growth amid these pressures.
          Even if the RBI cuts interest rates, it may not be enough to shore up confidence or spark a lasting rally.
        </p>
        <p>
          The takeaway? Investors seem to be ‘out’ on India, not ‘in,’ and unless deeper challenges are addressed,
          India may find itself bowled out in the global economic game.
        </p>

        <p className="muted">Originally written as a macro commentary piece (2024). Views are my own.</p>
      </article>
    </PageShell>
  );
}

function EmPage() {
  return (
    <PageShell title="Emerging Markets — A Fragile Renaissance?">
      <article className="prose">
        <h3>Emerging Markets: A Fragile Renaissance?</h3>
        <p>
          Falling US interest rates and China’s pro-growth stimulus have sparked renewed optimism for
          emerging markets (EM). However, beneath this surface-level revival lie potential headwinds
          that warrant cautious consideration.
        </p>

        <h3>US Interest Rates and the Rally in Emerging Market Debt</h3>
        <p>
          Federal rate cuts are a double-edged sword for emerging markets. This long-awaited cut comes amid
          a relatively healthy US economy, stimulating 'animal spirits' and encouraging risk taking.
        </p>

        <figure>
          <img src={emFig1} alt="Fed Funds Rate vs EM debt flows" />
          <figcaption>(FRED, 2024; IMF, 2023)</figcaption>
        </figure>

        <p>
          As shown in the chart above, the relationship between the Fed Funds Rate (in orange) and EM debt
          flows (in green) demonstrates a clear inverse pattern as falling rates lower government bond yields,
          making higher-yielding EM debt more attractive. For instance, after the GFC, when the Fed slashed rates,
          debt flows to EMs increased, affirming that lower rates encourage risk-taking.
        </p>
        <p>
          Local currency bonds depend not just on lower US rates but also on a weaker dollar. With the US Dollar
          Index up 3.67% last month (CNBC, 2024), this assumption is challenged. A stronger dollar erodes the
          benefits of US rate cuts by making EM debt less attractive to international investors, who typically
          measure returns in dollars.
        </p>
        <p>
          The real challenge for EMs is converting inflows into long-term stability. Asian economies have built
          strong local currency bond markets with often under 5% of government debt denominated in US dollars.
          Compare this with Argentina at 55% which makes it highly sensitive to currency depreciation and
          interest rate shifts. This contrast highlights that while falling US rates may temporarily boost EM inflows,
          those without strong local currency markets remain vulnerable to external shocks.
        </p>

        <h3>China’s Unsteady Stimulus</h3>
        <p>
          Beijing’s stimulus fuelled a surge in Chinese equities, with $40bn in inflows to China equity funds in
          the first week of this month, according to EPFR (Financial Times, 2024). These measures aim to boost
          consumption and sustain demand for raw materials, benefiting EM suppliers. The outcome? EM debt funds have
          also seen their longest run of inflows in over a year. However, China’s property sector still faces
          deep-rooted structural issues, raising doubts about whether this wave of optimism will lead to long-term growth.
        </p>
        <p>
          Akin to South Korea’s reforms in the 1990s to reduce dependence on chaebols (conglomerates), China needs
          to shift from short-term boosts to deeper structural reforms. Until then, the spillover effects on EMs
          will remain shaky at best, built on fragile foundations.
        </p>

        <h3>The Beautiful Word that is ‘Tariff’</h3>
        <p>
          The ‘Elephant in the Room’ in this EM rally is the looming return of Donald Trump. Recently, he declared,
          “To me, the most beautiful word in the dictionary is tariff,” underscoring his preference for aggressive
          trade barriers with proposed tariffs including a 20% levy on imports.
        </p>
        <p>
          Such tariffs could drive US inflation, prompting the Fed to tighten policy again. Rising US rates would
          divert capital flows to safer US assets, raising borrowing costs for EM countries. UBS estimates that a
          Republican sweep, could lead to an 11% decline in the MSCI EM stocks index by 2025 end (Financial Times, 2024)
          reversing recent gains in both EM equities and debt.
        </p>
        <p>
          The previous US-China trade war under Trump offers a glimpse into what might unfold. We see it as imperative
          that EMs are proactive to diversify trade partnerships, such as the EU-Vietnam Free Trade Agreement (EVFTA)
          signed in 2019, rather than relying on favourable geopolitical outcomes.
        </p>

        <h3>The Road Ahead</h3>
        <p>
          We wish to assert that this moment of optimism shouldn’t lead to complacency. Instead, it should be a wake-up
          call for EMs to tackle their vulnerabilities. In a world where the next rate hike or trade war could erase gains,
          the true winners will be those prioritising long-term resilience over short-term gains.
        </p>

        <p className="muted">Originally written as a macro commentary piece (2024). Views are my own.</p>
      </article>
    </PageShell>
  );
}

export default function App() {
  return (
    <>
      <nav className="nav"><div className="brand">Aran Lakhanpaul</div></nav>

      {/* Always reset scroll on route change */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <CV />
            <Projects />
            <Writing />
            <Contact />
          </>
        } />

        {/* Project pages */}
        <Route path="/projects/croda" element={<CrodaPage />} />
        <Route path="/projects/tesco" element={<TescoPage />} />
        <Route path="/projects/btc-gold" element={<BtcGoldPage />} />
        <Route path="/projects/ai-app" element={<AiAppPage />} />

        {/* Writing pages */}
        <Route path="/writing/swiggy" element={<SwiggyPage />} />
        <Route path="/writing/em-renaissance" element={<EmPage />} />
      </Routes>
    </>
  );
}