import './App.css';

function App() {
  return (
    <div>
      <style>
        {`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        .header {
            background: #2d5f4f;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            color: white;
            font-size: 1.8rem;
            font-weight: bold;
            text-decoration: none;
        }

        .whatsapp-header {
            background: #25d366;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
        }

        .whatsapp-header:hover {
            background: #1ca653;
            transform: translateY(-2px);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, rgba(45, 95, 79, 0.9), rgba(45, 95, 79, 0.7));
            min-height: 100vh;
            display: flex;
            align-items: center;
            color: white;
            text-align: center;
            position: relative;
        }

        .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .hero-text h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            line-height: 1.2;
            color: #c49b7a;
        }

        .hero-text p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .hero-image {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .doctor-placeholder {
            width: 400px;
            height: 500px;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px dashed rgba(255,255,255,0.3);
            backdrop-filter: blur(10px);
            font-size: 6rem;
            opacity: 0.5;
        }

        .cta-button {
            background: #25d366;
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-size: 1.1rem;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }

        .cta-button:hover {
            background: #1ca653;
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        .hero-info {
            margin-top: 2rem;
            font-size: 0.9rem;
            opacity: 0.8;
        }

        /* Features Section */
        .features {
            background: #c49b7a;
            padding: 2rem 0;
            color: white;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            text-align: center;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .feature-item .icon {
            font-size: 2rem;
            color: #2d5f4f;
        }

        .feature-text h4 {
            margin-bottom: 0.5rem;
        }

        /* Services Section */
        .services {
            padding: 5rem 0;
            background: #4a4a4a;
            color: white;
        }

        .services h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: white;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .service-card {
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
        }

        .service-card .icon {
            font-size: 3rem;
            color: #c49b7a;
            margin-bottom: 1rem;
            background: rgba(196, 155, 122, 0.2);
            padding: 20px;
            border-radius: 50%;
            display: inline-block;
        }

        .service-card h3 {
            margin-bottom: 1rem;
            color: #c49b7a;
        }

        .service-card p {
            margin-bottom: 1.5rem;
            opacity: 0.9;
        }

        .service-card ul {
            text-align: left;
            opacity: 0.8;
        }

        .service-card ul li {
            margin-bottom: 0.5rem;
            padding-left: 1rem;
            position: relative;
        }

        .service-card ul li:before {
            content: "•";
            color: #c49b7a;
            position: absolute;
            left: 0;
        }

        /* About Section */
        .about {
            padding: 5rem 0;
            background: rgba(240,240,240,1);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
            align-items: center;
        }

        .about-logo {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .logo-placeholder {
            width: 200px;
            height: 200px;
            background: #2d5f4f;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .about-text h2 {
            color: #4a4a4a;
            margin-bottom: 1rem;
        }

        .lawyer-name {
            color: #c49b7a;
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        .about-text p {
            margin-bottom: 1.5rem;
            color: #666;
        }

        /* FAQ Section */
        .faq {
            padding: 5rem 0;
            background: #4a4a4a;
            color: white;
        }

        .faq-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
            align-items: start;
        }

        .faq h2 {
            font-size: 3rem;
            color: white;
            line-height: 1.2;
        }

        .faq-item {
            background: #c49b7a;
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .faq-item:hover {
            background: #b8916d;
            transform: translateX(10px);
        }

        .faq-item h4 {
            color: white;
            font-size: 1.1rem;
        }

        /* Contact Section */
        .contact {
            padding: 5rem 0;
            background: #4a4a4a;
            color: white;
            text-align: center;
        }

        .contact h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .contact p {
            margin-bottom: 3rem;
            font-size: 1.1rem;
            opacity: 0.9;
        }

        /* Location Section */
        .location {
            padding: 5rem 0;
            background: #4a4a4a;
            color: white;
        }

        .location-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .location-info h2 {
            color: #c49b7a;
            margin-bottom: 1rem;
        }

        .location-details {
            margin-bottom: 2rem;
        }

        .location-details p {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .location-details .icon {
            color: #c49b7a;
            width: 20px;
        }

        .map-placeholder {
            width: 100%;
            height: 300px;
            background: rgba(255,255,255,0.1);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px dashed rgba(255,255,255,0.3);
            font-size: 4rem;
            opacity: 0.5;
        }

        /* Footer */
        .footer {
            background: #2d5f4f;
            color: white;
            text-align: center;
            padding: 2rem 0;
        }

        .footer p {
            opacity: 0.8;
        }

        /* Input Fields for Client */
        .editable {
            background: rgba(255,255,255,0.1);
            border: 1px dashed rgba(255,255,255,0.5);
            padding: 5px;
            border-radius: 5px;
            color: inherit;
            min-width: 200px;
            display: inline-block;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero-content,
            .about-content,
            .location-content,
            .faq-content {
                grid-template-columns: 1fr;
            }

            .services-grid,
            .features-grid {
                grid-template-columns: 1fr;
            }

            .hero-text h1 {
                font-size: 2.5rem;
            }

            .feature-item {
                justify-content: center;
                text-align: center;
            }
        }
        `}
      </style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
            <span className="editable">[NOME DO ESCRITÓRIO]</span>
          </a>
          <a href="#" className="whatsapp-header">
            <span>📱</span>
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Soluções Jurídicas Especializadas em Direito Médico e da Saúde</h1>
              <p><strong>Proteção jurídica na prática médica</strong> – Descubra como advogados especializados podem auxiliar a estruturar sua carreira e orientar em questões legais complexas.</p>
              <a href="#" className="cta-button">
                <span>📱</span>
                Fale conosco agora pelo WhatsApp
              </a>
              <p className="hero-info">Atendimento online ou presencial | Advogados altamente capacitados para te atender</p>
            </div>
            <div className="hero-image">
              <div className="doctor-placeholder">
                👨‍⚕️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <span className="icon">🛡️</span>
              <div className="feature-text">
                <h4>Atuar ético e responsável em defesa de médicos e profissionais de saúde</h4>
              </div>
            </div>
            <div className="feature-item">
              <span className="icon">👨‍⚕️</span>
              <div className="feature-text">
                <h4>Advocacia especializada em Direito Médico, com atendimento individualizado</h4>
              </div>
            </div>
            <div className="feature-item">
              <span className="icon">📅</span>
              <div className="feature-text">
                <h4>Mais de <span className="editable">[X]</span> anos de experiência</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Como Podemos te Ajudar?</h2>
          <div className="services-grid">
            <div className="service-card">
              <span className="icon">📋</span>
              <h3>Preventivo Médico</h3>
              <p>Visa trazer segurança à documentação médica e bem registrar o atuar ético e responsável, minimizando o risco de eventuais problemas jurídicos.</p>
              <ul>
                <li><strong>Serviços preventivos mais buscados</strong></li>
                <li>Mapeamento de documentação e tratamento de dados, elaboração de protocolo para dados sigilosos, com adequação à LGPD</li>
                <li>Regularização sanitária de clínicas, hospitais e consultórios</li>
                <li>Elaboração de contratos, TCLEs, Termo de Satisfação do Paciente, entre outros termos</li>
                <li>Assessoria para preenchimento</li>
              </ul>
            </div>
            
            <div className="service-card">
              <span className="icon">⚖️</span>
              <h3>Contencioso Ético-profissional</h3>
              <p>Defesa jurídica em sindicâncias e processos ético-profissionais perante os respectivos Conselhos.</p>
            </div>
            
            <div className="service-card">
              <span className="icon">🏛️</span>
              <h3>Contencioso Judicial</h3>
              <p>Defesa jurídica em ações judiciais perante todos os Tribunais do Brasil.</p>
              <ul>
                <li><strong>Ações judiciais mais comuns</strong></li>
                <li>Defesa de profissionais de saúde em ações indenizatórias por suposto erro médico</li>
                <li>Patrocínio de ações em busca autorização de tratamentos de alto custo</li>
                <li>Patrocínio de ações em face de ilegalidades de planos de saúde</li>
                <li>Ações para conversão em pecúnia de auxílio moradia para médicos residentes</li>
                <li>Ressarcimento de INSS pago a</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-logo">
              <div className="logo-placeholder">
                <span className="editable">[LOGO]</span>
              </div>
              <h3 className="editable">[NOME DO ADVOGADO]</h3>
            </div>
            <div className="about-text">
              <h2>Conte conosco para assegurar seus direitos</h2>
              <p className="lawyer-name"><span className="editable">[Nome Completo]</span> Advocacia Médica – <span className="editable">[OAB/XX XXX.XXX]</span></p>
              
              <p><span className="editable">[Descrição da experiência e formação acadêmica do advogado - inserir informações sobre graduação, pós-graduação, especializações, tempo de atuação, etc.]</span></p>
              
              <p><span className="editable">[Descrição da atuação atual, áreas de especialização, tipos de clientes atendidos, filosofia de trabalho, etc.]</span></p>
              
              <a href="#" className="cta-button">
                <span>📱</span>
                Fale conosco agora pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="faq-content">
            <div>
              <h2>Perguntas Frequentes</h2>
            </div>
            <div className="faq-list">
              <div className="faq-item">
                <h4>❯ Qual a diferença entre Direito Médico e Direito da Saúde?</h4>
              </div>
              <div className="faq-item">
                <h4>❯ Dra., a Sra. atua para pacientes?</h4>
              </div>
              <div className="faq-item">
                <h4>❯ O Direito Médico ajuda também os profissionais em início de carreira?</h4>
              </div>
              <div className="faq-item">
                <h4>❯ Tenho um seguro de responsabilidade civil. Preciso contratar um advogado?</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Entre em contato! Será um prazer atendê-lo</h2>
          <p>Não hesite na hora de contratar um advogado que entenda do assunto e que realmente possa lhe oferecer as melhores soluções.</p>
          <a href="#" className="cta-button">
            <span>📱</span>
            Fale conosco agora pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Location Section */}
      <section className="location">
        <div className="container">
          <div className="location-content">
            <div className="map-placeholder">
              📍
            </div>
            <div className="location-info">
              <h2>Fale conosco agora</h2>
              <p>Clicando no botão verde para o WhatsApp, o atendimento é imediato</p>
              
              <div className="location-details">
                <p><span className="icon">✉️</span> <span className="editable">[email@escritorio.com.br]</span></p>
                <p><span className="icon">📞</span> <span className="editable">[(XX) XXXXX-XXXX]</span></p>
                <p><span className="icon">📍</span> <span className="editable">[Endereço completo do escritório]</span></p>
              </div>
              
              <a href="#" className="cta-button">
                <span>📱</span>
                Fale conosco agora pelo WhatsApp
              </a>
              
              <p style={{marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8}}>
                Atendimento online ou presencial | Advogados altamente capacitados para te atender
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p><span className="editable">[Nome do Advogado]</span> Advocacia Médica e TODOS OS DIREITOS RESERVADOS</p>
          <p style={{fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7}}>
            Esse site não faz parte do Google LLC nem do Facebook Inc. e não oferecemos nenhum tipo de serviço oficial do governo. Trabalhamos exclusivamente com serviços jurídicos.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;