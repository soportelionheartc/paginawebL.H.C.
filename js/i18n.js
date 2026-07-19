// Lightweight ES/EN toggle for the whole page.
// Each dictionary value may contain inline HTML (e.g. <strong>, <span>) —
// it is applied via innerHTML, so keep any markup identical in both languages.
const I18N_DICT = {
  'nav.inicio': { es: 'Inicio', en: 'Home' },
  'nav.nosotros': { es: 'Nosotros', en: 'About' },
  'nav.servicios': { es: 'Servicios', en: 'Services' },
  'nav.confianza': { es: 'Confianza', en: 'Trust' },
  'nav.contacto': { es: 'Contáctanos', en: 'Contact Us' },
  'nav.toggleAria': { es: 'Abrir menú', en: 'Open menu' },

  'ticker.1': { es: 'ASESORÍA FINANCIERA', en: 'FINANCIAL ADVISORY' },
  'ticker.2': { es: 'GESTIÓN DE FAMILY OFFICES', en: 'FAMILY OFFICE MANAGEMENT' },
  'ticker.3': { es: 'ANALÍTICA CON IA', en: 'AI-POWERED ANALYTICS' },
  'ticker.4': { es: 'GESTIÓN DE RIESGO', en: 'RISK MANAGEMENT' },
  'ticker.5': { es: 'MERCADOS Y DERIVADOS', en: 'MARKETS & DERIVATIVES' },
  'ticker.6': { es: 'ESTRUCTURACIÓN DE CAPITAL', en: 'CAPITAL STRUCTURING' },

  'hero.eyebrow': { es: 'Sector financiero colombiano · Medellín, Antioquia', en: 'Colombian financial sector · Medellín, Antioquia' },
  'hero.h1': {
    es: 'Asesoría financiera con <span class="accent">visión de legado</span>',
    en: 'Financial advisory with a <span class="accent">legacy vision</span>',
  },
  'hero.lead': {
    es: `En Lion Heart Capital acompañamos a personas, empresarios y familias colombianas en la
        construcción, protección y crecimiento de su patrimonio, combinando el rigor de una firma
        constituida bajo el registro mercantil colombiano con analítica financiera potenciada por
        inteligencia artificial.`,
    en: `At Lion Heart Capital we help individuals, entrepreneurs and Colombian families build,
        protect and grow their wealth, combining the rigor of a firm registered under Colombian
        commercial law with financial analytics powered by artificial intelligence.`,
  },
  'hero.ctaPrimary': { es: 'Conoce Gestión Family Office', en: 'Explore Family Office Management' },
  'hero.ctaGhost': { es: 'Agenda una asesoría', en: 'Book a consultation' },
  'hero.badge2Label': { es: 'Registro Mercantil', en: 'Business Registry' },
  'hero.badge2Value': { es: 'Cámara de Comercio de Medellín', en: 'Chamber of Commerce of Medellín' },
  'hero.badge3Label': { es: 'Objeto social', en: 'Corporate Purpose' },
  'hero.badge3Value': { es: 'Asesoría financiera y de inversiones', en: 'Financial and investment advisory' },
  'hero.chartTitle': { es: 'Analítica de portafolio', en: 'Portfolio Analytics' },
  'hero.chartBadge': { es: 'IA · en vivo', en: 'AI · live' },
  'hero.chip1': { es: 'Gestión patrimonial', en: 'Wealth management' },
  'hero.chip2': { es: 'Modelos predictivos', en: 'Predictive models' },
  'hero.chip3': { es: 'Control de riesgo', en: 'Risk control' },

  'nosotros.tag': { es: 'Quiénes somos', en: 'Who we are' },
  'nosotros.h2': {
    es: 'Una firma colombiana, con estructura legal sólida y visión de largo plazo',
    en: 'A Colombian firm with solid legal structure and a long-term vision',
  },
  'nosotros.p1': {
    es: `<strong>Lion Heart Capital S.A.S.</strong> es una sociedad comercial colombiana con
        domicilio principal en Medellín, Antioquia, constituida ante la Cámara de Comercio de
        Medellín para Antioquia. Nuestro objeto social está enfocado con preferencia a la
        <strong>asesoría financiera y de inversiones</strong>, actuando siempre dentro del marco
        legal y normativo del sector financiero colombiano.`,
    en: `<strong>Lion Heart Capital S.A.S.</strong> is a Colombian commercial company headquartered
        in Medellín, Antioquia, incorporated with the Chamber of Commerce of Medellín for
        Antioquia. Our corporate purpose is focused primarily on
        <strong>financial and investment advisory</strong>, always operating within the legal and
        regulatory framework of the Colombian financial sector.`,
  },
  'nosotros.p2': {
    es: `Creemos que la riqueza no se mide solo en cifras, sino en la tranquilidad de saber que
        el patrimonio propio y el de la familia está bien estructurado, bien asesorado y
        preparado para trascender generaciones.`,
    en: `We believe wealth isn't measured only in numbers, but in the peace of mind of knowing
        that your own and your family's assets are well structured, well advised, and prepared
        to last for generations.`,
  },
  'nosotros.li1': { es: 'Sociedad constituida y registrada legalmente en Colombia', en: 'Legally incorporated and registered company in Colombia' },
  'nosotros.li2': { es: 'Enfoque en asesoría financiera, inversiones y estructuración patrimonial', en: 'Focus on financial advisory, investments and wealth structuring' },
  'nosotros.li3': { es: 'Atención cercana, confidencial y a la medida de cada cliente', en: 'Close, confidential and tailored attention for every client' },
  'nosotros.li4': { es: 'Sede en Medellín, con alcance a clientes en todo el país', en: 'Based in Medellín, serving clients across the country' },
  'nosotros.value1Title': { es: 'Confianza', en: 'Trust' },
  'nosotros.value1Desc': { es: 'Respaldo legal, transparencia y confidencialidad en cada relación comercial.', en: 'Legal backing, transparency and confidentiality in every business relationship.' },
  'nosotros.value2Title': { es: 'Rigor financiero', en: 'Financial rigor' },
  'nosotros.value2Desc': { es: 'Análisis serio y decisiones fundamentadas antes que promesas fáciles.', en: 'Serious analysis and well-founded decisions instead of easy promises.' },
  'nosotros.value3Title': { es: 'Cercanía', en: 'Closeness' },
  'nosotros.value3Desc': { es: 'Acompañamiento personalizado, hablando el mismo idioma del empresario colombiano.', en: 'Personalized support, speaking the same language as the Colombian entrepreneur.' },
  'nosotros.value4Title': { es: 'Legado', en: 'Legacy' },
  'nosotros.value4Desc': { es: 'Estrategias pensadas para proteger y trascender el patrimonio familiar.', en: 'Strategies designed to protect family wealth and make it last.' },

  'servicios.tag': { es: 'Qué hacemos', en: 'What we do' },
  'servicios.h2': { es: 'Soluciones financieras integrales', en: 'Comprehensive financial solutions' },
  'servicios.lead': {
    es: `Acompañamos cada etapa del patrimonio: desde la asesoría inicial hasta la gestión
        integral de las finanzas de familias y empresas colombianas.`,
    en: `We support every stage of your wealth journey: from initial advisory to the full
        management of finances for Colombian families and businesses.`,
  },
  'servicios.card1Title': { es: 'Asesoría Financiera Estratégica', en: 'Strategic Financial Advisory' },
  'servicios.card1Desc': { es: 'Diagnóstico y plan financiero claro para tomar mejores decisiones de negocio y de inversión.', en: 'A clear financial diagnosis and plan for better business and investment decisions.' },
  'servicios.card2Title': { es: 'Gestión de Inversiones', en: 'Investment Management' },
  'servicios.card2Desc': { es: 'Estructuración de portafolios acordes al perfil de riesgo y los objetivos de cada cliente.', en: 'Portfolio structuring aligned with each client\'s risk profile and goals.' },
  'servicios.card3Title': { es: 'Estructuración de Capital', en: 'Capital Structuring' },
  'servicios.card3Desc': { es: 'Diseño de esquemas de financiación y capitalización para proyectos y compañías.', en: 'Designing financing and capitalization schemes for projects and companies.' },
  'servicios.card4Title': { es: 'Planeación Patrimonial', en: 'Wealth Planning' },
  'servicios.card4Desc': { es: 'Organización y protección de activos personales, familiares y societarios en el tiempo.', en: 'Organizing and protecting personal, family and corporate assets over time.' },
  'servicios.featuredTagline': { es: 'Servicio insignia', en: 'Flagship service' },
  'servicios.card5Desc': { es: 'Administración integral del patrimonio familiar: inversiones, gobierno familiar y sucesión.', en: 'Comprehensive management of family wealth: investments, family governance and succession.' },
  'servicios.featuredLink': { es: 'Ver más ↓', en: 'Learn more ↓' },
  'servicios.card6Title': { es: 'Consultoría Financiera y de Inversión', en: 'Financial & Investment Consulting' },
  'servicios.card6Desc': {
    es: 'Nuestro objeto social: acompañamos a personas, empresarios y familias en decisiones financieras y de inversión, con criterio profesional y respaldo legal.',
    en: 'Our corporate purpose: we guide individuals, entrepreneurs and families through financial and investment decisions with professional judgment and legal backing.',
  },
  'servicios.group1Title': { es: 'Servicios Contables y Tributarios', en: 'Accounting & Tax Services' },
  'servicios.mini1Title': { es: 'Contabilidad Empresarial', en: 'Business Accounting' },
  'servicios.mini1Desc': { es: 'Registros contables al día y en regla con la normativa vigente en Colombia.', en: 'Up-to-date accounting records compliant with current Colombian regulations.' },
  'servicios.mini2Title': { es: 'Declaraciones de Renta', en: 'Tax Return Filing' },
  'servicios.mini2Desc': { es: 'Preparación y presentación de declaraciones para personas naturales y jurídicas.', en: 'Preparing and filing tax returns for individuals and companies.' },
  'servicios.mini3Title': { es: 'Outsourcing Contable', en: 'Accounting Outsourcing' },
  'servicios.mini3Desc': { es: 'Tu área contable operando de la mano de nuestro equipo especializado.', en: 'Your accounting department running hand-in-hand with our specialized team.' },
  'servicios.mini4Title': { es: 'Auditorías Financieras', en: 'Financial Audits' },
  'servicios.mini4Desc': { es: 'Revisión juiciosa de tus estados financieros para respaldar decisiones seguras.', en: 'A careful review of your financial statements to support sound decisions.' },
  'servicios.mini5Title': { es: 'Asesoría Tributaria', en: 'Tax Advisory' },
  'servicios.mini5Desc': { es: 'Cumplimiento y optimización de las obligaciones fiscales de tu empresa o negocio.', en: 'Compliance and optimization of your business\'s tax obligations.' },
  'servicios.mini6Title': { es: 'Facturación Electrónica y POS', en: 'E-Invoicing & POS' },
  'servicios.mini6Desc': { es: 'Implementación de sistemas de facturación y punto de venta para tu operación.', en: 'Implementing invoicing and point-of-sale systems for your operation.' },
  'servicios.group2Title': { es: 'Inversiones y Gestión de Activos', en: 'Investments & Asset Management' },
  'servicios.group2Lead': {
    es: 'Acompañamiento especializado para hacer crecer el patrimonio con criterio y control del riesgo.',
    en: 'Specialized support to grow your wealth with sound judgment and risk control.',
  },
  'servicios.mini7Title': { es: 'Análisis de Mercados', en: 'Market Analysis' },
  'servicios.mini7Desc': { es: 'Seguimiento permanente de oportunidades en mercados locales, globales y de derivados.', en: 'Ongoing tracking of opportunities in local, global and derivatives markets.' },
  'servicios.mini8Title': { es: 'Gestión de Criptoactivos', en: 'Crypto Asset Management' },
  'servicios.mini8Desc': { es: 'Estrategias responsables para la exposición a criptomonedas y activos digitales.', en: 'Responsible strategies for exposure to cryptocurrencies and digital assets.' },
  'servicios.mini9Title': {
    es: 'Trading Algorítmico <span class="tag-ia">IA</span>',
    en: 'Algorithmic Trading <span class="tag-ia">AI</span>',
  },
  'servicios.mini9Desc': { es: 'Modelos automatizados de negociación basados en indicadores y reglas definidas.', en: 'Automated trading models based on indicators and defined rules.' },
  'servicios.mini10Title': {
    es: 'Analítica con Inteligencia Artificial <span class="tag-ia">IA</span>',
    en: 'Artificial Intelligence Analytics <span class="tag-ia">AI</span>',
  },
  'servicios.mini10Desc': { es: 'Modelos predictivos que apoyan mejores decisiones de inversión.', en: 'Predictive models that support better investment decisions.' },
  'servicios.ctaButton': { es: 'Escríbenos para una asesoría gratuita', en: 'Message us for a free consultation' },

  'fo.tag': { es: 'Nueva línea de servicio', en: 'New service line' },
  'fo.lead': {
    es: `Para las familias colombianas que han construido patrimonio y buscan protegerlo,
        organizarlo y hacerlo crecer con visión de varias generaciones, en Lion Heart Capital
        ofrecemos un servicio de <strong>Family Office</strong> hecho a la medida: un solo equipo
        de confianza que centraliza la estrategia financiera, legal y patrimonial de la familia.`,
    en: `For Colombian families who have built wealth and want to protect it, organize it and grow
        it with a multi-generational vision, at Lion Heart Capital we offer a tailored
        <strong>Family Office</strong> service: a single trusted team that centralizes the
        family's financial, legal and wealth strategy.`,
  },
  'fo.item1Title': { es: 'Planeación patrimonial multigeneracional', en: 'Multi-generational wealth planning' },
  'fo.item1Desc': { es: 'Estrategias para que el patrimonio familiar se mantenga y crezca en el tiempo, más allá de una sola generación.', en: 'Strategies to keep family wealth growing over time, beyond a single generation.' },
  'fo.item2Title': { es: 'Estructuración legal y societaria', en: 'Legal & corporate structuring' },
  'fo.item2Desc': { es: 'Organización de sociedades, holdings y estructuras familiares acorde a la normativa colombiana.', en: 'Organizing companies, holdings and family structures in line with Colombian regulations.' },
  'fo.item3Title': { es: 'Consolidación de activos e inversiones', en: 'Asset & investment consolidation' },
  'fo.item3Desc': { es: 'Visión unificada de todos los activos de la familia, con reportes claros y periódicos.', en: 'A unified view of all family assets, with clear, periodic reporting.' },
  'fo.item4Title': { es: 'Protocolo y gobierno de familia', en: 'Family protocol & governance' },
  'fo.item4Desc': { es: 'Acuerdos y reglas claras entre los miembros de la familia para prevenir conflictos y ordenar decisiones.', en: 'Clear agreements and rules among family members to prevent conflict and guide decisions.' },
  'fo.item5Title': { es: 'Sucesión y legado', en: 'Succession & legacy' },
  'fo.item5Desc': { es: 'Preparación de la transición patrimonial hacia la siguiente generación de forma ordenada y planificada.', en: 'Preparing an orderly, planned wealth transition to the next generation.' },
  'fo.item6Title': { es: 'Coordinación de asesores', en: 'Advisor coordination' },
  'fo.item6Desc': { es: 'Articulación con contadores, abogados y otros asesores externos de la familia bajo una sola hoja de ruta.', en: 'Coordinating accountants, lawyers and other external advisors under a single roadmap.' },
  'fo.ctaText': { es: '¿Tu familia o tu empresa necesita un Family Office a la medida?', en: 'Does your family or business need a tailored Family Office?' },
  'fo.ctaButton': { es: 'Hablemos de tu caso', en: "Let's talk about your case" },

  'confianza.tag': { es: 'Respaldo', en: 'Credentials' },
  'confianza.h2': { es: 'Una firma constituida legalmente en Colombia', en: 'A firm legally incorporated in Colombia' },
  'confianza.lead': {
    es: `La confianza empieza por la legalidad. Estos son los datos de registro oficial de
        Lion Heart Capital S.A.S. ante la Cámara de Comercio de Medellín para Antioquia.`,
    en: `Trust starts with legality. These are the official registration details of Lion Heart
        Capital S.A.S. with the Chamber of Commerce of Medellín for Antioquia.`,
  },
  'trust.label1': { es: 'Razón social', en: 'Legal name' },
  'trust.label3': { es: 'Matrícula mercantil', en: 'Business registration no.' },
  'trust.label4': { es: 'Domicilio principal', en: 'Registered address' },
  'trust.label5': { es: 'Actividad CIIU', en: 'CIIU activity code' },
  'trust.label6': { es: 'Cámara de Comercio', en: 'Chamber of Commerce' },

  'contacto.tag': { es: 'Hablemos', en: "Let's talk" },
  'contacto.h2': { es: 'Empecemos a construir tu estrategia financiera', en: "Let's start building your financial strategy" },
  'contacto.lead': {
    es: `Escríbenos y con gusto agendamos una primera conversación confidencial sobre tu
        situación financiera, empresarial o familiar.`,
    en: `Write to us and we'll gladly set up a first confidential conversation about your
        financial, business or family situation.`,
  },
  'form.labelNombre': { es: 'Nombre completo', en: 'Full name' },
  'form.placeholderNombre': { es: 'Tu nombre', en: 'Your name' },
  'form.labelCorreo': { es: 'Correo electrónico', en: 'Email' },
  'form.placeholderCorreo': { es: 'tucorreo@correo.com', en: 'youremail@email.com' },
  'form.labelTelefono': { es: 'Teléfono', en: 'Phone' },
  'form.labelServicio': { es: '¿Qué servicio te interesa?', en: 'Which service are you interested in?' },
  'form.opt1': { es: 'Asesoría Financiera Estratégica', en: 'Strategic Financial Advisory' },
  'form.opt2': { es: 'Gestión de Inversiones', en: 'Investment Management' },
  'form.opt3': { es: 'Estructuración de Capital', en: 'Capital Structuring' },
  'form.opt4': { es: 'Planeación Patrimonial', en: 'Wealth Planning' },
  'form.opt5': { es: 'Gestión de Family Office', en: 'Family Office Management' },
  'form.opt6': { es: 'Consultoría Financiera y de Inversión', en: 'Financial & Investment Consulting' },
  'form.labelMensaje': { es: 'Cuéntanos brevemente tu caso', en: 'Briefly tell us about your case' },
  'form.placeholderMensaje': { es: 'Escribe aquí...', en: 'Write here...' },
  'form.submit': { es: 'Enviar mensaje', en: 'Send message' },
  'form.hint': {
    es: 'Al enviar se abrirá tu programa de correo con el mensaje listo para Lion Heart Capital.',
    en: 'When you submit, your email app will open with the message ready to send to Lion Heart Capital.',
  },
  'form.sending': {
    es: 'Abriendo tu programa de correo para enviarnos el mensaje...',
    en: 'Opening your email app to send us the message...',
  },

  'footer.tagline': { es: 'Asesoría financiera, inversiones y gestión de Family Offices en Colombia.', en: 'Financial advisory, investments and Family Office management in Colombia.' },
  'footer.legal1': { es: 'NIT 901.868.428-2 · Matrícula mercantil 21-795855-12', en: 'Tax ID (NIT) 901.868.428-2 · Business registration no. 21-795855-12' },
  'footer.legal2': {
    es: 'Domicilio: Medellín, Antioquia, Colombia · Registrada ante la Cámara de Comercio de Medellín para Antioquia',
    en: 'Address: Medellín, Antioquia, Colombia · Registered with the Chamber of Commerce of Medellín for Antioquia',
  },
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },

  'fab.aria': { es: 'Contactar ahora', en: 'Contact now' },
};

const I18N_META = {
  title: {
    es: 'Lion Heart Capital S.A.S. | Asesoría Financiera, Inversiones y Family Office',
    en: 'Lion Heart Capital S.A.S. | Financial Advisory, Investments & Family Office',
  },
  description: {
    es: 'Lion Heart Capital S.A.S. — Asesoría financiera, gestión de inversiones y gestión de Family Offices en Medellín, Colombia. Confianza, rigor y respaldo legal.',
    en: 'Lion Heart Capital S.A.S. — Financial advisory, investment management and Family Office services in Medellín, Colombia. Trust, rigor and legal backing.',
  },
};

const LANG_STORAGE_KEY = 'lhc-lang';

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const entry = I18N_DICT[key];
    if (entry) el.innerHTML = entry[lang];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const entry = I18N_DICT[key];
    if (entry) el.setAttribute('placeholder', entry[lang]);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    const entry = I18N_DICT[key];
    if (entry) el.setAttribute('aria-label', entry[lang]);
  });

  document.title = I18N_META.title[lang];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', I18N_META.description[lang]);

  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  window.LHC_LANG = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
const initialLang = savedLang === 'en' || savedLang === 'es' ? savedLang : 'es';
applyLang(initialLang);

document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

window.LHC_I18N = {
  t(key) {
    const entry = I18N_DICT[key];
    if (!entry) return '';
    return entry[window.LHC_LANG || 'es'];
  },
};
