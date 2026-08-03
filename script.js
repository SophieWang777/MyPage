// Theme Toggle (Light/Dark)
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeLabel();

function updateThemeLabel() {
    const label = document.querySelector('.theme-label');
    if (label) {
        label.textContent = html.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeLabel();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));

document.addEventListener('DOMContentLoaded', () => {
  if (typeof USER_CONFIG === 'undefined') return;
  populateSimpleFields(USER_CONFIG);
  populateLists(USER_CONFIG);
});

function populateSimpleFields(cfg) {
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (key === 'role_university') el.textContent = `${cfg.role} at ${cfg.university}`;
    else if (key === 'bio' && cfg[key] !== undefined) el.innerHTML = cfg[key];
    else if (cfg[key] !== undefined) el.textContent = cfg[key];
  });
  if (cfg.name) document.title = `${cfg.name} | Academic Homepage`;
  if (cfg.photo) {
    const av = document.querySelector('.image-placeholder, .hero-photo');
    if (av) av.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
  }
}

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

function sideLinkHTML(sidelink) {
  if (!sidelink) return '';
  return `<a href="${sidelink.url}" target="_blank" rel="noopener noreferrer" class="side-btn"><span>👀</span><span>${sidelink.label}</span></a>`;
}

function renderTimeline(items, mainField, subField) {
  return items.map(e => `
    <div class="exp-item">
      <div class="exp-period">${e.period}</div>
      ${sideLinkHTML(e.sidelink)}
      <div class="exp-details">
        <h4>${e.link ? `<a href="${e.link}" target="_blank" rel="noopener noreferrer" class="exp-link">${e[mainField]}</a>` : e[mainField]}</h4>
        <p>${e.institutionLink ? `<a href="${e.institutionLink}" target="_blank" rel="noopener noreferrer" class="exp-link">${e[subField]}</a>` : e[subField]}</p>
        ${e.people?.length ? `<div class="exp-people">${e.people.map(p => `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="exp-people-link">${p.label}</a>`).join(' | ')}</div>` : ''}
      </div>
    </div>`).join('');
}

function populateLists(cfg) {
  const pubList = document.getElementById('cfg-publications');
  if (pubList && cfg.publications?.length) {
    pubList.innerHTML = cfg.publications.map(p => `
      <article class="pub-card" data-year="${p.year}">
        <div class="pub-year">${p.year}</div>
        <div class="pub-content">
          <div class="pub-header">
            <h3 class="pub-title">${p.title}</h3>
            <div class="pub-links">${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="pub-link">${k.toUpperCase()}</a>`).join('')}</div>
          </div>
          <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
          <p class="pub-venue">${p.venue}</p>
        </div>
      </article>`).join('');
  }

  const newsList = document.getElementById('cfg-news');
  if (newsList && cfg.news?.length) {
    newsList.innerHTML = cfg.news.map(n => `
      <div class="news-item">
        <span class="news-date">${n.date}</span>
        ${sideLinkHTML(n.sidelink)}
        <div class="news-content">
          <span class="news-badge" data-type="${n.badge.toLowerCase()}">${n.badge}</span>
          <div class="news-text">${n.text}</div>
        </div>
      </div>`).join('');
  }

  const internshipsList = document.getElementById('cfg-internships');
  if (internshipsList && cfg.internships?.length) {
    internshipsList.innerHTML = renderTimeline(cfg.internships, 'role', 'institution');
  }

  const educationList = document.getElementById('cfg-education');
  if (educationList && cfg.education?.length) {
    educationList.innerHTML = renderTimeline(cfg.education, 'degree', 'institution');
  }

  const teachingList = document.getElementById('cfg-teaching');
  if (teachingList && cfg.teaching?.length) {
    teachingList.innerHTML = renderTimeline(cfg.teaching, 'role', 'institution');
  }

  const servicesList = document.getElementById('cfg-services');
  if (servicesList && cfg.services?.length) {
    servicesList.innerHTML = renderTimeline(cfg.services, 'role', 'institution');
  }
}
