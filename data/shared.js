/* =============================================================================
   data/shared.js  ·  THE DATA LAYER  ·  must load BEFORE the term files
   -----------------------------------------------------------------------------
   Holds the three registries the app reads from, plus a few small helpers that
   the term files use so they don't repeat boilerplate.

     G      glossary   "word" -> [meaning, "say it", week, term]   (hover tooltips)
     LES    lessons    "term.week.A|B" -> { P:..., D:... }          (see below)
     TERMS  per-term   n -> { value, theme, valueLine, weeks[], rubric }

   Every term file (term1.js, term2.js …) is an IIFE that calls:
     defineTerm(n, {...})        once            — name, theme, week titles, rubric
     addGlossary({...})          once per week   — the new words (hover meanings)
     addLessons({...})           once per week   — Lesson A and Lesson B

   Each lesson has two halves:
     P  = plan & presenter notes  (title slide text, learning intention, success
          criteria, Whakaaro Pono, curriculum links, prep, differentiation,
          assessment, recycled learning, notes for each slide…)
     D  = classroom content       (VOC words, STEPS, DR drama, EX exit ticket,
          CE common errors, T label, LP printable vocab-card text)

   To add a new term: copy data/term4.js, fill it in, and add one <script> line
   to index.html after the other term files.
============================================================================= */

const G = {};       // glossary
const LES = {};     // lessons
const TERMS = {};   // per-term information

/** Register a term's overview information (used by the lesson menu and the Term pack printable). */
function defineTerm(n, info) { TERMS[n] = info; }

/** Add words to the glossary. Entry shape: "word": [meaning, "say it", week, term].  (term is omitted for Term 1) */
function addGlossary(entries) { Object.assign(G, entries); }

/** Words that are written with a capital in lesson vocab lists (place names, Atua) need a matching entry. */
function addCapitalised(names) { names.forEach(n => { G[n] = G[n.toLowerCase()]; }); }

/** Register lessons. Keys look like '2.5.A' (term 2, week 5, Lesson A). */
function addLessons(lessons) {
  for (const key of Object.keys(lessons)) {
    const L = lessons[key];
    // lets the printable lesson plan (which reads LP.P) find this lesson's plan data
    if (L.P && L.D && L.D.LP && !L.D.LP.P) L.D.LP.P = L.P;
    LES[key] = L;
  }
}

/* ---- Drama cast colours (the same three casts are reused all year) ---- */
const CAST_TAMA_KUIA   = { 'Hana': '#F2C98A', 'Tama': '#A1CD3F', 'Kuia Mere': '#56E5E5' };
const CAST_TAMA_KAIAKO = { 'Hana': '#F2C98A', 'Tama': '#A1CD3F', 'Kaiako Rose': '#56E5E5' };
const CAST_SAM_KAIAKO  = { 'Hana': '#F2C98A', 'Sam': '#A1CD3F',  'Kaiako Rose': '#56E5E5' };

/** "Curriculum links" table rows for the lesson plan. tataiako defaults to the usual pair. */
function curriculumRows(strands, other, tataiako) {
  return [
    ['<b>Learning area</b>', 'Learning Languages: Te Reo Māori (English-medium) · Years 5–6, about Level 2 (Phase 2)'],
    ['<b>Strands</b>', strands],
    ['<b>Key competencies</b>', 'Relating to others · Using language, symbols & texts'],
    ['<b>Tātaiako</b>', tataiako || 'Whanaungatanga · Tangata Whenuatanga'],
    ['<b>Other links</b>', other]
  ];
}

/** "Christian values link" table rows for the lesson plan. termValue defaults to Term 1's value line. */
function valueRows(scripture, moment, question, appearsIn, termValue) {
  return [
    ['<b>Term value</b>', termValue || 'Aroha: love God, others, self, world'],
    ['<b>Scripture</b>', scripture + ' (add the school’s preferred translation)'],
    ['<b>Whakaaro Pono</b>', moment],
    ['<b>Reflection question</b>', question],
    ['<b>Also appears in</b>', appearsIn]
  ];
}
