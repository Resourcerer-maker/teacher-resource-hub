// Reads resources.json and populates the resource cards on a subject page.
// Call renderResources('biology') etc. at the bottom of each subject page.

async function renderResources(subjectKey) {
  let all = [];
  try {
    const res = await fetch('resources.json');
    all = await res.json();
  } catch (err) {
    console.error('Could not load resources.json', err);
    return;
  }

  const items = all.filter(r => r.subject === subjectKey);
  const bySubtopic = {};
  items.forEach(r => {
    if (!bySubtopic[r.subtopic]) bySubtopic[r.subtopic] = [];
    bySubtopic[r.subtopic].push(r);
  });

  document.querySelectorAll('.subtopic-card').forEach(card => {
    const list = bySubtopic[card.id];
    if (!list || !list.length) return; // leave "coming soon" placeholder as-is

    const emptyState = card.querySelector('.empty-state');
    const ul = document.createElement('ul');
    ul.className = 'resource-list';

    list.forEach(r => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = 'resources/' + subjectKey + '/' + r.filename;
      a.textContent = r.title;
      a.target = '_blank';
      a.rel = 'noopener';

      const tag = document.createElement('span');
      tag.className = 'format-tag';
      tag.textContent = r.format;

      li.appendChild(a);
      li.appendChild(tag);
      if (r.yearLevel) {
        const yr = document.createElement('span');
        yr.className = 'year-tag';
        yr.textContent = r.yearLevel;
        li.appendChild(yr);
      }
      ul.appendChild(li);
    });

    if (emptyState) emptyState.replaceWith(ul);
  });
}
