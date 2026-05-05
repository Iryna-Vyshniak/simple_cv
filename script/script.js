// Language switcher functionality
let currentLang = 'en';

async function loadTranslations() {
  try {
    const response = await fetch('assets/translations.json');
    const translations = await response.json();
    return translations;
  } catch (error) {
    console.error('Error loading translations:', error);
    return null;
  }
}

function setLanguage(lang, translations) {
  currentLang = lang;
  const data = translations[lang];

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'uk';

  // Update name and role, city and country
  document.querySelector('h1[itemprop="name"]').textContent = data.name;
  document.querySelector('.role-title').textContent = data.role;
  document.querySelector('span[itemprop="addressLocality"]').textContent = data.city;
  document.querySelector('span[itemprop="addressCountry"]').textContent = data.country;

  // Update summary
  document.getElementById('summary-heading').textContent = data.summaryHeading;
  document.querySelector('#summary p').textContent = data.summaryText;

  // Update skills
  document.getElementById('skills-heading').textContent = data.skillsHeading;
  const skillsList = document.querySelector('#technical-skills ul');
  skillsList.innerHTML = `
    <li><strong>Frontend:</strong> ${data.skills.frontend}</li>
    <li><strong>UI / Styling:</strong> ${data.skills.ui}</li>
    <li><strong>State Management & Forms:</strong> ${data.skills.state}</li>
    <li><strong>Backend (Basic):</strong> ${data.skills.backend}</li>
    <li><strong>APIs & Services:</strong> ${data.skills.apis}</li>
    <li><strong>Maps & Geo:</strong> ${data.skills.maps}</li>
    <li><strong>Tools:</strong> ${data.skills.tools}</li>
  `;

  // Update projects
  document.getElementById('projects-heading').textContent = data.projectsHeading;
  const projectsSection = document.getElementById('project-experience');
  const projectArticles = projectsSection.querySelectorAll('article');

  // Self-directed projects
  projectArticles[0].querySelector('h3').textContent = data.projects.selfDirected;
  projectArticles[0].querySelector('ul').innerHTML = data.projects.selfDirectedDesc
    .split('. ')
    .map((item) => `<li>${item}.</li>`)
    .join('');

  // Real Estate
  projectArticles[1].querySelector('h4').textContent = data.projects.realEstate;
  projectArticles[1].querySelectorAll('ul')[0].innerHTML = data.projects.realEstateDesc
    .split('. ')
    .map((item) => `<li>${item}.</li>`)
    .join('');

  // LittleLingo
  projectArticles[2].querySelector('h4').textContent = data.projects.littleLingo;
  projectArticles[2].querySelectorAll('ul')[0].innerHTML = data.projects.littleLingoDesc
    .split('. ')
    .map((item) => `<li>${item}.</li>`)
    .join('');

  // Events
  projectArticles[3].querySelector('h4').textContent = data.projects.events;
  projectArticles[3].querySelectorAll('ul')[0].innerHTML = data.projects.eventsDesc
    .split('. ')
    .map((item) => `<li>${item}.</li>`)
    .join('');

  // HealthyCare
  projectArticles[4].querySelector('h4').textContent = data.projects.healthycare;
  projectArticles[4].querySelectorAll('ul')[0].innerHTML = data.projects.healthycareDesc
    .split('. ')
    .map((item) => `<li>${item}.</li>`)
    .join('');

  // Update professional experience
  document.getElementById('professional-heading').textContent = data.professionalHeading;
  const profArticles = document.querySelectorAll('#professional-experience article');

  profArticles[0].querySelector('h3').textContent = data.professional.freelance;
  profArticles[0].querySelector('p').textContent = data.professional.freelanceDesc;
  profArticles[0].querySelector('ul').innerHTML = data.professional.freelanceDesc
    .split('. ')
    .slice(1)
    .map((item) => `<li>${item}.</li>`)
    .join('');

  profArticles[1].querySelector('h3').textContent = data.professional.manager;
  profArticles[1].querySelector('ul').innerHTML = data.professional.managerDesc
    .split('. ')
    .map((item) => `<li>${item}.</li>`)
    .join('');

  profArticles[2].querySelector('h3').textContent = data.professional.principal;
  profArticles[2].querySelector('ul').innerHTML = data.professional.principalDesc
    .split('. ')
    .map((item) => `<li>${item}.</li>`)
    .join('');

  // Update education
  document.getElementById('education-heading').textContent = data.educationHeading;
  document.querySelector('#education h3').textContent = data.education;

  // Update languages
  document.getElementById('languages-heading').textContent = data.languagesHeading;
  const langList = document.querySelector('#languages ul');
  langList.innerHTML = `
    <li><strong>Ukrainian:</strong> ${data.languages.ukrainian.split(': ')[1]}</li>
    <li><strong>Russian:</strong> ${data.languages.russian.split(': ')[1]}</li>
    <li><strong>English:</strong> ${data.languages.english.split(': ')[1]}</li>
  `;

  // Update strengths
  document.getElementById('strengths-heading').textContent = data.strengthsHeading;
  const strengthsList = document.querySelector('#key-strengths ul');
  strengthsList.innerHTML = data.strengths.map((strength) => `<li>${strength}</li>`).join('');

  // Update button states
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-en').setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
  document.getElementById('lang-ua').classList.toggle('active', lang === 'ua');
  document.getElementById('lang-ua').setAttribute('aria-pressed', lang === 'ua' ? 'true' : 'false');
}

document.addEventListener('DOMContentLoaded', async () => {
  const translations = await loadTranslations();
  if (translations) {
    // Set initial language
    setLanguage('en', translations);

    // Add event listeners to buttons
    document
      .getElementById('lang-en')
      .addEventListener('click', () => setLanguage('en', translations));
    document
      .getElementById('lang-ua')
      .addEventListener('click', () => setLanguage('ua', translations));
  }
});
