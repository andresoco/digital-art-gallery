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
    'collection.tag': '01 / Curaduría',
    'collection.title': 'Piezas maestras',
    'artists.tag': 'Nuestra comunidad',
    'artists.title': 'Protagonistas',
    'process.tag': '02 / El proceso',
    'process.title': 'Cómo ser parte de la élite digital',
    'cta.title': 'Escribe tu propio capítulo en la historia.',
    'cta.button': 'Comenzar legado',
    'footer.explore': 'Explorar',
    'footer.follow': 'Seguir'
  },
  en: {
    menu: 'Menu',
    revista: 'Magazine',
    'hero.kicker': 'Spring 2026 edition',
    'hero.title': 'The aesthetics of the ephemeral',
    'hero.buttonPrimary': 'View exhibition',
    'hero.buttonSecondary': 'Dive in',
    'collection.tag': '01 / Curation',
    'collection.title': 'Masterpieces',
    'artists.tag': 'Our community',
    'artists.title': 'Featured artists',
    'process.tag': '02 / The process',
    'process.title': 'How to become part of the digital elite',
    'cta.title': 'Write your own chapter in the story.',
    'cta.button': 'Start the legacy',
    'footer.explore': 'Explore',
    'footer.follow': 'Follow'
  },
  fr: {
    menu: 'Menu',
    revista: 'Magazine',
    'hero.kicker': 'Édition printemps 2026',
    'hero.title': "L’esthétique de l’éphémère",
    'hero.buttonPrimary': 'Voir l’exposition',
    'hero.buttonSecondary': 'Se plonger',
    'collection.tag': '01 / Curatèle',
    'collection.title': 'Pièces maîtresses',
    'artists.tag': 'Notre communauté',
    'artists.title': 'Artistes',
    'process.tag': '02 / Le processus',
    'process.title': "Comment faire partie de l’élite digitale",
    'cta.title': 'Écrivez votre propre chapitre de l’histoire.',
    'cta.button': 'Commencer le legs',
    'footer.explore': 'Explorer',
    'footer.follow': 'Suivre'
  },
  de: {
    menu: 'Menü',
    revista: 'Magazin',
    'hero.kicker': 'Frühlingsausgabe 2026',
    'hero.title': 'Die Ästhetik des Vergänglichen',
    'hero.buttonPrimary': 'Ausstellung ansehen',
    'hero.buttonSecondary': 'Eintauchen',
    'collection.tag': '01 / Kurierung',
    'collection.title': 'Meisterwerke',
    'artists.tag': 'Unsere Gemeinschaft',
    'artists.title': 'Protagonisten',
    'process.tag': '02 / Prozess',
    'process.title': 'Wie man Teil der digitalen Elite wird',
    'cta.title': 'Schreibe dein eigenes Kapitel der Geschichte.',
    'cta.button': 'Erbe starten',
    'footer.explore': 'Entdecken',
    'footer.follow': 'Folgen'
  },
  pt: {
    menu: 'Menu',
    revista: 'Revista',
    'hero.kicker': 'Edição primavera 2026',
    'hero.title': 'A estética do efêmero',
    'hero.buttonPrimary': 'Ver exposição',
    'hero.buttonSecondary': 'Mergulhar',
    'collection.tag': '01 / Curadoria',
    'collection.title': 'Peças-primas',
    'artists.tag': 'Nossa comunidade',
    'artists.title': 'Protagonistas',
    'process.tag': '02 / Processo',
    'process.title': 'Como fazer parte da elite digital',
    'cta.title': 'Escreva seu próprio capítulo na história.',
    'cta.button': 'Começar legado',
    'footer.explore': 'Explorar',
    'footer.follow': 'Seguir'
  },
  it: {
    menu: 'Menu',
    revista: 'Rivista',
    'hero.kicker': 'Edizione primavera 2026',
    'hero.title': "L’estetica dell’effimero",
    'hero.buttonPrimary': 'Vedi mostra',
    'hero.buttonSecondary': 'Immergiti',
    'collection.tag': '01 / Curatela',
    'collection.title': 'Opere principali',
    'artists.tag': 'La nostra comunità',
    'artists.title': 'Protagonisti',
    'process.tag': '02 / Processo',
    'process.title': "Come fare parte dell’élite digitale",
    'cta.title': 'Scrivi il tuo capitolo nella storia.',
    'cta.button': 'Inizia il lascito',
    'footer.explore': 'Esplora',
    'footer.follow': 'Segui'
  },
  ja: {
    menu: 'メニュー',
    revista: '雑誌',
    'hero.kicker': '2026年春号',
    'hero.title': '儚さの美学',
    'hero.buttonPrimary': '展覧会を見る',
    'hero.buttonSecondary': '没入する',
    'collection.tag': '01 / キュレーション',
    'collection.title': '傑作',
    'artists.tag': '私たちのコミュニティ',
    'artists.title': '主役たち',
    'process.tag': '02 / プロセス',
    'process.title': 'デジタルエリートの一員になる方法',
    'cta.title': 'あなたの物語を刻みましょう。',
    'cta.button': '遺産を始める',
    'footer.explore': '探索',
    'footer.follow': 'フォロー'
  },
  ar: {
    menu: 'القائمة',
    revista: 'المجلة',
    'hero.kicker': 'إصدار الربيع 2026',
    'hero.title': 'جمال الزوال',
    'hero.buttonPrimary': 'عرض المعرض',
    'hero.buttonSecondary': 'الغمر',
    'collection.tag': '01 / المعرض',
    'collection.title': 'القطع المميزة',
    'artists.tag': 'مجتمعنا',
    'artists.title': 'الأبطال',
    'process.tag': '02 / العملية',
    'process.title': 'كيفية أن تصبح جزءًا من النخبة الرقمية',
    'cta.title': 'اكتب فصلًا خاصًا بك في القصة.',
    'cta.button': 'ابدأ الإرث',
    'footer.explore': 'استكشاف',
    'footer.follow': 'متابعة'
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
