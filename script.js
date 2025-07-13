function getNotes() {
  return JSON.parse(localStorage.getItem("rewriter-notes") || "[]");
}
<<<<<<< HEAD

function saveNotes(notes) {
  localStorage.setItem("rewriter-notes", JSON.stringify(notes));
}

=======
function saveNotes(notes) {
  localStorage.setItem("rewriter-notes", JSON.stringify(notes));
}
>>>>>>> 3d591ed (Initial commit – Rewriter Notebook MVP)
function createNote() {
  const id = Date.now().toString();
  const notes = getNotes();
  notes.push({ id, title: "Untitled", original: "", rewrite: "" });
  saveNotes(notes);
  location.href = `note.html?id=${id}`;
}
<<<<<<< HEAD

=======
>>>>>>> 3d591ed (Initial commit – Rewriter Notebook MVP)
function loadNotes() {
  const notes = getNotes();
  const list = document.getElementById("notesList");
  notes.forEach(note => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="note.html?id=${note.id}">${note.title}</a>`;
    list.appendChild(li);
  });
}
<<<<<<< HEAD

=======
>>>>>>> 3d591ed (Initial commit – Rewriter Notebook MVP)
function loadNote() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const notes = getNotes();
  const note = notes.find(n => n.id === id);
  if (!note) return;
<<<<<<< HEAD

  document.getElementById("title").value = note.title;
  document.getElementById("original").value = note.original;
  document.getElementById("rewrite").value = note.rewrite;

  window._currentNoteId = id;
}

=======
  document.getElementById("title").value = note.title;
  document.getElementById("original").value = note.original;
  document.getElementById("rewrite").value = note.rewrite;
  window._currentNoteId = id;
}
>>>>>>> 3d591ed (Initial commit – Rewriter Notebook MVP)
function saveNote() {
  const id = window._currentNoteId;
  const notes = getNotes();
  const note = notes.find(n => n.id === id);
  if (!note) return;
<<<<<<< HEAD

=======
>>>>>>> 3d591ed (Initial commit – Rewriter Notebook MVP)
  note.title = document.getElementById("title").value;
  note.original = document.getElementById("original").value;
  note.rewrite = document.getElementById("rewrite").value;
  saveNotes(notes);
<<<<<<< HEAD

=======
>>>>>>> 3d591ed (Initial commit – Rewriter Notebook MVP)
  alert("Saved!");
}
