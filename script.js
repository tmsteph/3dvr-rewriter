function getNotes() {
  return JSON.parse(localStorage.getItem("rewriter-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("rewriter-notes", JSON.stringify(notes));
}

function createNote() {
  const id = Date.now().toString();
  const notes = getNotes();
  notes.push({ id, title: "Untitled", original: "", rewrite: "" });
  saveNotes(notes);
  location.href = `note.html?id=${id}`;
}

function loadNotes() {
  const notes = getNotes();
  const list = document.getElementById("notesList");
  notes.forEach(note => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="note.html?id=${note.id}">${note.title}</a>`;
    list.appendChild(li);
  });
}

function loadNote() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const notes = getNotes();
  const note = notes.find(n => n.id === id);
  if (!note) return;

  document.getElementById("title").value = note.title;
  document.getElementById("original").value = note.original;
  document.getElementById("rewrite").value = note.rewrite;

  window._currentNoteId = id;
}

function saveNote() {
  const id = window._currentNoteId;
  const notes = getNotes();
  const note = notes.find(n => n.id === id);
  if (!note) return;

  note.title = document.getElementById("title").value;
  note.original = document.getElementById("original").value;
  note.rewrite = document.getElementById("rewrite").value;
  saveNotes(notes);

  alert("Saved!");
}
