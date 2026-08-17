const drawer = document.querySelector('.side-drawer');
const overlay = document.querySelector('.drawer-overlay');
const toggleButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');
const navLinks = document.querySelectorAll('.drawer-link, .nav-link');
const header = document.querySelector('.site-header');
const revealItems = document.querySelectorAll('.reveal');
const themeToggle = document.getElementById('themeToggle');
const langMenu = document.querySelector('.lang-menu');
const langButton = document.querySelector('.lang-button');
const langOptions = document.querySelectorAll('.lang-option');
const langLabel = document.querySelector('.lang-label');
const artistTrack = document.getElementById('artistTrack');
const artistNavButtons = document.querySelectorAll('.artist-nav');
const flipCards = document.querySelectorAll('.flip-card');

const translations = {
  es: {
    menu: 'Menú',
    revista: 'Revista',
    'hero.kicker': 'Edición primavera 2026',
    'hero.title': 'La estética de lo efímero',
    'hero.buttonPrimary': 'Ver exposición',
    'hero.buttonSecondary': 'Sumergirse',
    'hero.revista': 'Revista',
    'collection.tag': '01 / Curaduría',
    'collection.title': 'Piezas maestras',
    'artists.tag': 'Nuestra comunidad',
    'artists.title': 'Protagonistas',
    'process.tag': '02 / El proceso',
    'process.title': 'Cómo ser parte de la élite digital',
    'cta.title': 'Escribe tu propio capítulo en la historia.',
    'cta.button': 'Comenzar legado',
    'exposiciones.tag': '03 / Exposiciones',
    'exposiciones.title': 'Exposiciones actuales',
    'exposiciones.desc': 'Consulta las muestras y curadurías vigentes. Si quieres ver la lista completa y detalles, abre la página de exposiciones.',
    'exposiciones.open': 'Abrir la página de exposiciones',
    'exposiciones.salaA': 'Edición Primavera — Sala A',
    'exposiciones.salaAdesc': 'Curaduría: Selección temática y obras destacadas.',
    'exposiciones.salaB': 'Nuevas Voces — Sala B',
    'exposiciones.salaBdesc': 'Proyectos de artistas emergentes en formato digital.',
    'map.tag': 'Mapa',
    'map.title': 'Visítanos',
    'map.desc': 'Aquí tienes nuestra ubicación de ejemplo para facilitar la visita. Haz click en el mapa para abrir en Google Maps.',
    'sobrenosotros.tag': '04 / Sobre nosotros',
    'sobrenosotros.title': 'Dónde encontrarnos',
    'sobrenosotros.desc': 'Artelía es un espacio dedicado a la difusión de arte contemporáneo en formato digital.',
    'sobrenosotros.horarioLabel': 'Horario:',
    'sobrenosotros.horario': 'Lun–Vie 10:00–18:00 · Sáb 11:00–16:00',
    'sobrenosotros.contactoLabel': 'Contacto:',
    'sobrenosotros.mapIntro': 'Si vienes en persona, aquí tienes nuestra ubicación de ejemplo.',
    'revista.title': 'Revista Artelía',
    'revista.desc': 'Ediciones, artículos y entrevistas. Explora nuestra revista digital.',
    'revista.button': 'Leer revista',
    'footer.explore': 'Explorar',
    'footer.follow': 'Seguir',
    'footer.galeria': 'Galería virtual',
    'footer.exposiciones': 'Exposiciones',
    'footer.artistas': 'Artistas residentes',
    'footer.sobrenosotros': 'Sobre nosotros',
    'footer.archivo': 'Archivo histórico'
  },
  en: {
    menu: 'Menu',
    revista: 'Magazine',
    'hero.kicker': 'Spring 2026 edition',
    'hero.title': 'The aesthetics of the ephemeral',
    'hero.buttonPrimary': 'View exhibition',
    'hero.buttonSecondary': 'Dive in',
    'hero.revista': 'Magazine',
    'collection.tag': '01 / Curation',
    'collection.title': 'Masterpieces',
    'artists.tag': 'Our community',
    'artists.title': 'Featured artists',
    'process.tag': '02 / The process',
    'process.title': 'How to become part of the digital elite',
    'cta.title': 'Write your own chapter in the story.',
    'cta.button': 'Start the legacy',
    'exposiciones.tag': '03 / Exhibitions',
    'exposiciones.title': 'Current exhibitions',
    'exposiciones.desc': 'Browse current shows and curations. For full details open the exhibitions page.',
    'exposiciones.open': 'Open exhibitions page',
    'exposiciones.salaA': 'Spring Edition — Hall A',
    'exposiciones.salaAdesc': 'Curation: thematic selection and featured works.',
    'exposiciones.salaB': 'New Voices — Hall B',
    'exposiciones.salaBdesc': 'Projects by emerging digital artists.',
    'map.tag': 'Map',
    'map.title': 'Visit us',
    'map.desc': 'Sample location to help visitors. Click the map to open Google Maps.',
    'sobrenosotros.tag': '04 / About us',
    'sobrenosotros.title': 'Where to find us',
    'sobrenosotros.desc': 'Artelía is a space dedicated to promoting contemporary art in digital format.',
    'sobrenosotros.horarioLabel': 'Hours:',
    'sobrenosotros.horario': 'Mon–Fri 10:00–18:00 · Sat 11:00–16:00',
    'sobrenosotros.contactoLabel': 'Contact:',
    'sobrenosotros.mapIntro': 'If you visit in person, here is our sample location.',
    'revista.title': 'Artelía Magazine',
    'revista.desc': 'Issues, articles and interviews. Explore our digital magazine.',
    'revista.button': 'Read magazine',
    'footer.explore': 'Explore',
    'footer.follow': 'Follow',
    'footer.galeria': 'Virtual gallery',
    'footer.exposiciones': 'Exhibitions',
    'footer.artistas': 'Resident artists',
    'footer.sobrenosotros': 'About us',
    'footer.archivo': 'Archive'
  },
  fr: {
    menu: 'Menu',
    revista: 'Magazine',
    'hero.kicker': 'Édition printemps 2026',
    'hero.title': "L’esthétique de l’éphémère",
    'hero.buttonPrimary': 'Voir l’exposition',
    'hero.buttonSecondary': 'Se plonger',
    'hero.revista': 'Magazine',
    'collection.tag': '01 / Curatèle',
    'collection.title': 'Pièces maîtresses',
    'artists.tag': 'Notre communauté',
    'artists.title': 'Artistes',
    'process.tag': '02 / Le processus',
    'process.title': "Comment faire partie de l’élite digitale",
    'cta.title': 'Écrivez votre propre chapitre de l’histoire.',
    'cta.button': 'Commencer le legs',
    'exposiciones.tag': '03 / Expositions',
    'exposiciones.title': 'Expositions en cours',
    'exposiciones.desc': 'Consultez les expositions en cours. Pour plus de détails, ouvrez la page des expositions.',
    'exposiciones.open': 'Ouvrir la page des expositions',
    'map.tag': 'Carte',
    'map.title': 'Visitez-nous',
    'map.desc': 'Emplacement d’exemple pour aider les visiteurs.',
    'sobrenosotros.tag': '04 / À propos',
    'sobrenosotros.title': 'Où nous trouver',
    'revista.title': 'Magazine Artelía',
    'revista.desc': 'Numéros, articles et interviews. Découvrez notre magazine numérique.',
    'revista.button': 'Lire le magazine',
    'footer.explore': 'Explorer',
    'footer.follow': 'Suivre',
    'footer.galeria': 'Galerie virtuelle',
    'footer.exposiciones': 'Expositions',
    'footer.artistas': 'Artistes',
    'footer.sobrenosotros': 'À propos',
    'footer.archivo': 'Archive'
  },
  de: {
    menu: 'Menü',
    revista: 'Magazin',
    'hero.kicker': 'Frühlingsausgabe 2026',
    'hero.title': 'Die Ästhetik des Vergänglichen',
    'hero.buttonPrimary': 'Ausstellung ansehen',
    'hero.buttonSecondary': 'Eintauchen',
    'hero.revista': 'Magazin',
    'collection.tag': '01 / Kurierung',
    'collection.title': 'Meisterwerke',
    'artists.tag': 'Unsere Gemeinschaft',
    'artists.title': 'Protagonisten',
    'process.tag': '02 / Prozess',
    'process.title': 'Wie man Teil der digitalen Elite wird',
    'cta.title': 'Schreibe dein eigenes Kapitel der Geschichte.',
    'cta.button': 'Erbe starten',
    'exposiciones.tag': '03 / Ausstellungen',
    'exposiciones.title': 'Aktuelle Ausstellungen',
    'map.tag': 'Karte',
    'map.title': 'Besuchen Sie uns',
    'revista.title': 'Artelía Magazin',
    'revista.desc': 'Ausgaben, Artikel und Interviews. Entdecken Sie unser Magazin.',
    'revista.button': 'Magazin lesen',
    'footer.explore': 'Entdecken',
    'footer.follow': 'Folgen',
    'footer.galeria': 'Virtuelle Galerie',
    'footer.exposiciones': 'Ausstellungen',
    'footer.artistas': 'Künstler',
    'footer.sobrenosotros': 'Über uns',
    'footer.archivo': 'Archiv'
  },
  pt: {
    menu: 'Menu',
    revista: 'Revista',
    'hero.kicker': 'Edição primavera 2026',
    'hero.title': 'A estética do efêmero',
    'hero.buttonPrimary': 'Ver exposição',
    'hero.buttonSecondary': 'Mergulhar',
    'hero.revista': 'Revista',
    'collection.tag': '01 / Curadoria',
    'collection.title': 'Peças-primas',
    'artists.tag': 'Nossa comunidade',
    'artists.title': 'Protagonistas',
    'process.tag': '02 / Processo',
    'process.title': 'Como fazer parte da elite digital',
    'cta.title': 'Escreva seu próprio capítulo na história.',
    'cta.button': 'Começar legado',
    'revista.title': 'Revista Artelía',
    'revista.desc': 'Edições, artigos e entrevistas. Explore nossa revista digital.',
    'revista.button': 'Ler revista',
    'footer.explore': 'Explorar',
    'footer.follow': 'Seguir',
    'footer.galeria': 'Galeria virtual',
    'footer.exposiciones': 'Exposições',
    'footer.artistas': 'Artistas residentes',
    'footer.sobrenosotros': 'Sobre nós',
    'footer.archivo': 'Arquivo'
  },
  it: {
    menu: 'Menu',
    revista: 'Rivista',
    'hero.kicker': 'Edizione primavera 2026',
    'hero.title': "L’estetica dell’effimero",
    'hero.buttonPrimary': 'Vedi mostra',
    'hero.buttonSecondary': 'Immergiti',
    'hero.revista': 'Rivista',
    'collection.tag': '01 / Curatela',
    'collection.title': 'Opere principali',
    'artists.tag': 'La nostra comunità',
    'artists.title': 'Protagonisti',
    'process.tag': '02 / Processo',
    'process.title': "Come fare parte dell’élite digitale",
    'cta.title': 'Scrivi il tuo capitolo nella storia.',
    'cta.button': 'Inizia il lascito',
    'revista.title': 'Rivista Artelía',
    'revista.desc': 'Numeri, articoli e interviste. Esplora la nostra rivista digitale.',
    'revista.button': 'Leggi la rivista',
    'footer.explore': 'Esplora',
    'footer.follow': 'Segui',
    'footer.galeria': 'Galleria virtuale',
    'footer.exposiciones': 'Esposizioni',
    'footer.artistas': 'Artisti',
    'footer.sobrenosotros': 'Chi siamo',
    'footer.archivo': 'Archivio'
  },
  ja: {
    menu: 'メニュー',
    revista: '雑誌',
    'hero.kicker': '2026年春号',
    'hero.title': '儚さの美学',
    'hero.buttonPrimary': '展覧会を見る',
    'hero.buttonSecondary': '没入する',
    'hero.revista': '雑誌',
    'collection.tag': '01 / キュレーション',
    'collection.title': '傑作',
    'artists.tag': '私たちのコミュニティ',
    'artists.title': '主役たち',
    'process.tag': '02 / プロセス',
    'process.title': 'デジタルエリートの一員になる方法',
    'cta.title': 'あなたの物語を刻みましょう。',
    'cta.button': '遺産を始める',
    'revista.title': 'Artelía マガジン',
    'revista.desc': '号、記事、インタビュー。デジタル雑誌をチェックしてください。',
    'revista.button': '雑誌を読む',
    'footer.explore': '探索',
    'footer.follow': 'フォロー',
    'footer.galeria': 'バーチャルギャラリー',
    'footer.exposiciones': '展示',
    'footer.artistas': 'アーティスト',
    'footer.sobrenosotros': '私たちについて',
    'footer.archivo': 'アーカイブ'
  },
  ar: {
    menu: 'القائمة',
    revista: 'المجلة',
    'hero.kicker': 'إصدار الربيع 2026',
    'hero.title': 'جمال الزوال',
    'hero.buttonPrimary': 'عرض المعرض',
    'hero.buttonSecondary': 'الغمر',
    'hero.revista': 'المجلة',
    'collection.tag': '01 / المعرض',
    'collection.title': 'القطع المميزة',
    'artists.tag': 'مجتمعنا',
    'artists.title': 'الأبطال',
    'process.tag': '02 / العملية',
    'process.title': 'كيفية أن تصبح جزءًا من النخبة الرقمية',
    'cta.title': 'اكتب فصلًا خاصًا بك في القصة.',
    'cta.button': 'ابدأ الإرث',
    'revista.title': 'مجلة Artelía',
    'revista.desc': 'الإصدارات والمقالات والمقابلات. استكشف مجلتنا الرقمية.',
    'revista.button': 'اقرأ المجلة',
    'footer.explore': 'استكشاف',
    'footer.follow': 'متابعة',
    'footer.galeria': 'المعرض الافتراضي',
    'footer.exposiciones': 'المعارض',
    'footer.artistas': 'الفنانون',
    'footer.sobrenosotros': 'من نحن',
    'footer.archivo': 'الأرشيف'
  }
};

const supportedLanguages = {
  es: 'ES',
  en: 'EN',
  fr: 'FR',
  de: 'DE',
  pt: 'PT',
  it: 'IT',
  ja: 'JP',
  ar: 'AR'
};

function setTheme(theme) {
  document.body.dataset.theme = theme;
  if (themeToggle) {
    const icon = themeToggle.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
  }
  localStorage.setItem('artelia-theme', theme);
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  if (langLabel) langLabel.textContent = supportedLanguages[lang] || 'ES';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) element.textContent = dict[key];
  });

  langOptions.forEach((option) => {
    option.classList.toggle('active', option.dataset.lang === lang);
  });

  localStorage.setItem('artelia-lang', lang);
}

function toggleDrawer() {
  const isOpen = drawer.classList.contains('is-open');

  drawer.classList.toggle('is-open', !isOpen);
  overlay.classList.toggle('is-visible', !isOpen);
  document.body.style.overflow = !isOpen ? 'hidden' : '';
}

if (toggleButton) toggleButton.addEventListener('click', toggleDrawer);
if (closeButton) closeButton.addEventListener('click', toggleDrawer);
if (overlay) overlay.addEventListener('click', toggleDrawer);

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  });
});

const headerObserver = () => {
  if (window.scrollY > 24) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', headerObserver);
headerObserver();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    const image = hero.querySelector('.hero-media img');
    if (image) {
      image.style.transform = `scale(1.12) translate(${offsetX * 18}px, ${offsetY * 18}px)`;
    }
  });

  hero.addEventListener('pointerleave', () => {
    const image = hero.querySelector('.hero-media img');
    if (image) {
      image.style.transform = 'scale(1.1)';
    }
  });
}

flipCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('.mini-flip-btn')) {
      event.stopPropagation();
    }
    card.classList.toggle('is-flipped');
  });
});

if (artistTrack && artistNavButtons.length) {
  artistNavButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.classList.contains('next') ? 1 : -1;
      artistTrack.scrollBy({
        left: direction * 340,
        behavior: 'smooth'
      });
    });
  });
}

const savedTheme = localStorage.getItem('artelia-theme') || 'light';
setTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
}

if (langButton) {
  langButton.addEventListener('click', () => {
    langMenu.classList.toggle('is-open');
    langButton.setAttribute('aria-expanded', String(langMenu.classList.contains('is-open')));
  });
}

langOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const lang = option.dataset.lang;
    applyTranslations(lang);
    if (langMenu) langMenu.classList.remove('is-open');
    if (langButton) langButton.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.lang-menu')) {
    if (langMenu) langMenu.classList.remove('is-open');
    if (langButton) langButton.setAttribute('aria-expanded', 'false');
  }
});

const savedLang = localStorage.getItem('artelia-lang') || 'es';
applyTranslations(savedLang);

// Back to top button behavior
const backBtn = document.getElementById('backToTop');
if (backBtn) {
  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const checkBackBtn = () => {
    if (window.scrollY > 300) backBtn.classList.add('visible'); else backBtn.classList.remove('visible');
  };

  window.addEventListener('scroll', checkBackBtn);
  checkBackBtn();
}
