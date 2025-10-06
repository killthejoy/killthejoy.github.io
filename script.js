// Random header image
const headerImages = [
  'img/header1.jpg','img/header2.jpg','img/header3.jpg','img/header4.jpg','img/header5.jpg',
  'img/header6.jpg','img/header7.jpg','img/header8.jpg','img/header9.jpg','img/header10.jpg','img/header11.jpg'
];
const randomIndex = Math.floor(Math.random() * headerImages.length);
document.querySelector('header .image-wrapper img').src = headerImages[randomIndex];

// DOM Elements
const search = document.getElementById('search');
const trainerList = document.getElementById('trainer-list');
const noResults = document.getElementById('no-results');

// Embedded trainer data (local)
const trainers = [
    {
    title: "CULTIC Complete Edition *Plus 3 Trainer*",
    source: "CULTIC.Complete.Edition-TENOKE",
    link: "trn/cultic_complete_edition_plus_3_trainer-killjoy.zip"
  },
  {
    title: "GTA San Andreas DE v1.17.37984884 *Plus 5 Trainer*",
    source: "Grand_Theft_Auto_San_Andreas_The_Definitive_Edition_v1.17.37984884-Razor1911",
    link: "trn/gta.san.andreas.de.v1.17.37984884.plus.5.trainer-killjoy.rar"
  },
  {
    title: "The Precinct v1.4.18135 *Plus 4 Trainer*",
    source: "The.Precinct-RUNE",
    link: "trn/the.precinct.v1.4.18135.plus.4.trainer-killjoy.rar"
  }
];

// Render trainers
function renderTrainers(trainersToRender) {
  trainerList.innerHTML = '';
  trainersToRender.forEach(trainer => {
    const item = document.createElement('div');
    item.className = 'trainer-item';
    item.innerHTML = `
      <div class="trainer-info">
        <div class="trainer-title">${trainer.title}</div>
        <div class="trainer-source">Source: ${trainer.source}</div>
      </div>
      <a href="${trainer.link}">Download</a>
    `;
    trainerList.appendChild(item);
  });
}

// Initial render
renderTrainers(trainers);

// Search functionality (matches title or source)
search.addEventListener('input', () => {
  const query = search.value.toLowerCase();
  const filtered = trainers.filter(trainer =>
    trainer.title.toLowerCase().includes(query) ||
    trainer.source.toLowerCase().includes(query)
  );
  renderTrainers(filtered);
  noResults.style.display = filtered.length ? 'none' : 'block';
});

