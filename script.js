function save() {
  const original = document.getElementById('original').value;
  const rewrite = document.getElementById('rewrite').value;

  const data = {
    original,
    rewrite,
    timestamp: new Date().toISOString()
  };

  const id = Date.now().toString();
  localStorage.setItem(`rewrite-${id}`, JSON.stringify(data));

  const link = `${location.origin}${location.pathname}#${id}`;
  document.getElementById('savedLink').innerHTML = `
    Saved! <a href="${link}">${link}</a>
  `;
}

function load() {
  const hash = location.hash.slice(1);
  if (!hash) return;

  const saved = localStorage.getItem(`rewrite-${hash}`);
  if (!saved) return;

  const data = JSON.parse(saved);
  document.getElementById('original').value = data.original;
  document.getElementById('rewrite').value = data.rewrite;
}

window.onload = load;
