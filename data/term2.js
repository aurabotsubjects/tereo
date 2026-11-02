/* ═════════════════════════════════════════════════════════════════════════════
   data/term2.js  ·  TERM 2 · MŌHIO  ·  “Tōku kura, tōku ao”  (Our school and our world)
   Weeks 1–10 · 20 lessons.  Term value: Mōhio (know God, His story and our place in it).
   -----------------------------------------------------------------------------
   Needs data/shared.js loaded first.  One block per week; each block adds that
   week's glossary words and its two lessons (A and B).

   HOW TO READ A LESSON
     P  plan + presenter notes       w/l/ch/sub/say/pron  title slide        li/succ  learning intention + success
        wp/ref/mom/q  Whakaaro Pono   recall  "Remember when…" cards       vsay/dsay/xlook/xresc/xpron  slide notes
        cur/vr/prep/three/diff/look/nx/rec/rtxt/refl/next  lesson-plan fields
     D  classroom content            VOC  words of the week   STEPS  build-a-sentence steps
        DR  drama   EX  exit ticket (5)   CE  common errors   T  label   LP  printable vocab-card text
   Chunk syntax in `ch` and STEPS:  text|role  ( ~ = space,  * = the new piece )
        roles:  k = Ko / Kei te …   p = name   a = I / you / he-she   q = question word   n = noun / thing   w = greeting
═════════════════════════════════════════════════════════════════════════════ */
(() => {

  const MV = "Mōhio: know God, His story and our place in it";   // term value line used in each lesson's “Christian values link”


  /* Term overview: shown in the lesson menu and on the printable Term pack. rubric = Week 10 showcase criteria. */
  defineTerm(2, {
    value: "Mōhio",
    theme: "Our school and our world",
    valueLine: "Mōhio: know God, His story and our place in it",
    weeks: ["What is this?","Where is it?","Colours","Describing things","Days of the week","Weather & seasons","Mine, yours, theirs","Asking questions","Knowing God’s world","Whakaaturanga"],
    rubric: [
          ['Names things','Names one thing with help (He pene tēnei)','Names things and asks He aha tēnei?','Names, asks and answers for near and far things'],
          ['Colours and describing','Says one colour or describing word','Says the colour or what it is like (He whero te pene)','Joins colour and describing words smoothly'],
          ['Where and when','Says one place word, day or weather','Says where it is (Kei runga i te teepu) or the day and weather','Says where, the day and the weather in order'],
          ['Whose and how many','Says Ko tāku … tēnei with help','Says whose (tāku or tōku) and asks Nā wai?','Says whose, asks Nā wai? and E hia ngā …?'],
          ['God’s world and thanks','Says Kia ora','Says Nā te Atua i hanga te …','Says Nā te Atua i hanga … and Kia ora mō …'],
          ['Pronunciation','Some vowels unclear','Mostly clear vowels','Clear vowels and macrons throughout'],
          ['Confidence and encouragement','Needs prompts','Speaks with some support','Speaks clearly and cheers others (Ka pai! Kia kaha!)']
        ]
  });


  /* ──────── WEEK 1 · What is this? ──────── */
  {
    addGlossary({
      "he":["a / an (says what kind of thing)","heh",1,2],
      "he aha":["what (is it)","heh AH-hah",1,2],
      "tēnei":["this (near me)","TEH-neh-ee",1,2],
      "tēnā":["that (near you)","TEH-nah",1,2],
      "tērā":["that (over there, away from us both)","TEH-rah",1,2],
      "pene":["pen / pencil","PEH-neh",1,2],
      "pukapuka":["book","POO-kah-POO-kah",1,2],
      "teepu":["table","TEH-eh-poo",1,2],
      "tūru":["chair","TOO-roo",1,2],
      "pēke":["bag","PEH-keh",1,2],
      "rūri":["ruler","ROO-ree",1,2],
      "pepa":["paper","PEH-pah",1,2]
    });

    // ── Lesson A · He aha tēnei? — What is this? ──
    const A = {
      P: {
        t:2,
        w:1,
        l:'A',
        ch:'He|k aha|q tēnei?|a',
        sub:'Term 2 begins! Today we name things in our classroom and ask what something is.',
        say:'Kia ora everyone, and welcome to Term 2! Last term we learned about people: who we are, how we feel and our whānau. This term we explore our school and our world. Today we name things around us and ask ‘What is this?’ Still no writing: listen, think and speak. Have a pen, a book and a bag ready to hold up.',
        pron:'He aha tēnei? = heh AH-hah TEH-neh-ee',
        li:'name things in our classroom and say which are near me, near you and over there.',
        succ:['I can say the names of three classroom things: pene, pukapuka, teepu.','I can say ‘This is a pen’: He pene tēnei.','I can ask ‘What is this?’ and answer for something near and far: He aha tērā? He ___ tērā.'],
        wp:'Everything belongs to God, and we look after it.',
        ref:'Psalm 24:1',
        mom:'The earth is the Lord’s, and everything in it. When we name the things around us and look after them, we show that we know whose they are.',
        q:'What is something in our classroom we can look after better?',
        recall:[['How do you say: Hello, I am Sam.','Kia ora. Ko Sam ahau.'],['How do you say: I am happy.','Kei te harikoa ahau.'],['How do you say: I want to play.','Kei te pīrangi ahau ki te tākaro.']],
        rtag:'Term 1 · Weeks 1 to 9',
        rtxt:'Remember when… Term 1 (3 quick prompts)',
        refl:'What did you notice in our classroom today that you had not named before?',
        next:'Lesson B: asking yes or no questions (He pene tēnei?)',
        vsay:'Say each word and the class echoes. Hold up the real object as you say each noun: pene, pukapuka, teepu, tūru, pēke. Then the three pointing words with gestures: tēnei (point to something in your hand or near you), tēnā (point to something near the class) and tērā (point across the room). He means a or an, and aha means what.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: He first, tēnei last. Prompt 3: tērā is far away.',
        xresc:'Common error: Ko for things. Say: Ko is for who someone is (Ko Sam ahau). He is for what kind of thing something is.',
        xpron:'tēnei = TEH-neh-ee · tēnā = TEH-nah · tērā = TEH-rah',
        cur:curriculumRows('Communication (naming classroom objects and asking what something is) · Language Knowledge (He + noun + tēnei / tēnā / tērā; He aha …?) · Cultural Knowledge (te reo in our own classroom; caring for what we have been given)','Recalls Term 1 greetings, feelings and wants in the warm-up. Prepare real objects (pen, book, bag) so students touch and point.'),
        vr:valueRows('Psalm 24:1','The earth is the Lord’s, and everything in it. When we name the things around us and look after them, we show that we know whose they are.','What is something in our classroom we can look after better?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Bring real objects to hold up: a pen, a book and a bag. Use the table and chair already in the room.','Print the weekly vocab card, one per student.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise tēnei (near me), tēnā (near you) and tērā (far away) with pointing gestures before class.'],
        three:'(1) <i>He</i> means a or an: it says what kind of thing something is (<i>He pene</i>, a pen). <i>Ko</i> is still for who someone is (<i>Ko Sam ahau</i>). (2) The pointing word comes last, like <i>ahau</i> did: <i>He pene tēnei</i>, this is a pen. (3) <i>Tēnei</i> is near me, <i>tēnā</i> is near you, <i>tērā</i> is over there.',
        diff:['Echo as a whole class. Use only pene, pukapuka and tēnei at first, holding up the real object. Pair with a confident partner and allow whispering first.','Complete all steps. Use all three pointing words with real objects around the room.','Ask and answer in pairs (He aha tēnā? He ___ tēnā.). Add Ka pai! to encourage a partner. Explain in English how Ko and He are different.'],
        look:'Clear vowels (pene, tūru, pēke); He first and the pointing word last; the right pointing word for near me, near you and far away; confident holding up and pointing at real objects.',
        nx:'revisit tēnā and tērā with real objects for students in Starting; build yes or no questions in Lesson B.',
        rec:'Term 1 greetings, feelings and wants are recalled in the warm-up; Ko and He are compared in the steps; thanks and encouragement (Kia ora mō…, Ka pai) return in the drama.'
      },
      D: {
        VOC:['he','he aha','tēnei','tēnā','tērā','pene','pukapuka','teepu','tūru','pēke'],
        STEPS:[
          ['The word for pen is pene. Say: pene.','pene|n*','PEH-neh','pene = pen. It sounds a little like the English word.','Hold up a pen. Listen: pene. It means pen. It sounds a bit like the English word, so it’s an easy one. Say it with me: pene.','Echo'],
          ['The word for book is pukapuka. Say: pukapuka.','pukapuka|n*','POO-kah-POO-kah','pukapuka = book. It is one word said twice: puka puka.','Hold up a book. This one is a double word: puka, puka. Pukapuka means book. Say it with me.','Echo'],
          ['In te reo, the little word he means a or an. How would you say: a pen?','He|k* pene|n','heh PEH-neh','He says what kind of thing something is: a pen, a book.','Remember Ko Sam ahau? Ko points at a person. For a thing, we use he. He means a or an. So, how would you say ‘a pen’? Take a moment… (wait 3 seconds)… He pene. Say it with me.','Echo'],
          ['How would you say: a book?','He|k pukapuka|n','heh POO-kah-POO-kah','Same pattern: He + thing.',null,'Whole class'],
          ['Hold the pen in your hand and say: This is a pen. (tēnei means this, near me)','He|k pene|n tēnei.|a*','heh PEH-neh TEH-neh-ee','He + thing + tēnei. The pointing word comes last, like ahau did.','Hold up the pen. Tēnei means this, near me. In te reo the pointing word comes last, just like ahau did in Ko Sam ahau. He pene tēnei. Say it with me, holding up something of your own.','Echo'],
          ['Point to a book near your partner and say: That is a book. (tēnā means that, near you)','He|k pukapuka|n tēnā.|a*','heh POO-kah-POO-kah TEH-nah','tēnā = that, near the person you are talking to.','Tēnā is a word you’ve met in tēnā koe. Here it means that, near you. Point to your partner’s book and say it: He pukapuka tēnā.','Whole class'],
          ['Point across the room and say: That is a book. (tērā means that over there)','He|k pukapuka|n tērā.|a*','heh POO-kah-POO-kah TEH-rah','tērā = that over there, far from both of us.','Tēnei is near me. Tēnā is near you. Tērā is over there, far from us both. Point across the room: He pukapuka tērā.','Whole class'],
          ['Three more words: table, chair and bag. Say: teepu, tūru, pēke.','teepu|n* tūru|n* pēke|n*','TEH-eh-poo · TOO-roo · PEH-keh','teepu = table, tūru = chair, pēke = bag.','Point to each one as you say it: teepu (table), tūru (chair), pēke (bag). Echo each word after me. The macrons mean hold the vowel: tūru, pēke.','Echo'],
          ['This is a table. That (near you) is a chair. That over there is a bag.','He|k teepu|n tēnei.|a He|k tūru|n tēnā.|a He|k pēke|n tērā.|a','heh TEH-eh-poo TEH-neh-ee · heh TOO-roo TEH-nah · heh PEH-keh TEH-rah','Three sentences, same pattern.',null,'Whole class'],
          ['How would you ask: What is this? (You already know aha: Kei te aha koe?)','He|k aha|q* tēnei?|a*','heh AH-hah TEH-neh-ee','He aha? = what? Put the pointing word last.','You know aha from Kei te aha koe? That meant what are you doing. Here He aha means what is it. Take a moment… (wait 3 seconds)… He aha tēnei? Say it with me, holding something up.','Echo'],
          ['What is that near you? It is a chair. And over there: what is that? It is a bag.','He|k aha|q tēnā?|a He|k tūru|n tēnā.|a He|k aha|q tērā?|a He|k pēke|n tērā.|a','heh AH-hah TEH-nah · heh TOO-roo TEH-nah · heh AH-hah TEH-rah · heh PEH-keh TEH-rah','Ask the question, then answer it with the same pointing word.',null,'Whole class'],
          ['Partner game: point to things in the room. Ask and answer with tēnei, tēnā or tērā.','He|k aha|q tēnei?|a He|k ___|n tēnei.|a','heh AH-hah TEH-neh-ee · heh ___ TEH-neh-ee','Use real things. Swap after three questions.','Turn to your partner. One person points to something and asks He aha tēnei? (or tēnā, or tērā). The other answers He ___ tēnei. If you don’t know the word, look at the vocab card. Swap after three questions.','Pairs'],
          ['Class chain: hold up an object, ask the next person what it is, and they answer. Then they ask the next person.','He|k aha|q tēnei?|a He|k ___|n tēnei.|a Ka~pai!|w','heh AH-hah TEH-neh-ee · heh ___ TEH-neh-ee · kah PIE','Real kōrero with real things. Ka pai! after every answer.','Pass an object around the circle. Each person asks the next He aha tēnei? and the next answers and says Ka pai!. If someone is stuck, that’s my fault, not theirs. I’ll help.','Individual']],
        DR:{title:'Te Akomanga — Our Classroom',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Haere mai.','Hello, children! Come in.','(opens her arms)','T1W1'],
          ['Hana','Kia ora, Kaiako. He aha tēnei?','Hello, teacher. What is this?','(holds up an object)'],
          ['Kaiako Rose','He pene tēnei.','This is a pen.','(smiles)'],
          ['Tama','He aha tērā, Kaiako?','What is that over there, teacher?','(points across the room)'],
          ['Kaiako Rose','He pukapuka tērā. Ka pai, Tama!','That is a book. Good, Tama!','(thumbs up)','T1W10'],
          ['Hana','He aha tēnā, Tama?','What is that, Tama?','(points at Tama’s bag)'],
          ['Tama','He pēke tēnei. Kei te harikoa ahau!','This is a bag. I am happy!','(grins)','T1W2'],
          ['Kaiako Rose','He aha tērā, Hana?','What is that over there, Hana?','(points across the room)'],
          ['Hana','He teepu tērā. Kei te pai ahau!','That is a table. I am well!','(smiles)','T1W2'],
          ['Kaiako Rose','Tēnā koa, noho mai. He tūru tēnei.','Please sit. This is a chair.','(pats the chair)','T1W8'],
          ['Kaiako Rose','Kia ora mō ōku ākonga!','Thank you for my students!','(to the audience, in English) God made everything we use and everyone we meet. When we learn its name, we notice it, and when we notice it, we look after it.','T1W9'],
          ['Tama','Kia ora mō te tūru, Kaiako.','Thank you for the chair, teacher.','(sits down)','T1W9']]},
        EX:[['Say in te reo: ‘This is a pen.’','He pene tēnei.'],['What does He aha tēnā? mean?','What is that (near you)?'],['Choose the word for ‘that over there’: tēnei / tēnā / tērā','tērā'],['Say in te reo: ‘That (near you) is a book.’','He pukapuka tēnā.'],['Stretch: point to something in the room, ask what it is, then answer your own question.','He aha tēnei? He ___ tēnei. (tēnā or tērā are also correct, if the thing is near the partner or far away)']],
        CE:['Using Ko instead of He for things','Putting tēnei first (English order)','Mixing up tēnā and tērā','Leaving out He','Forgetting that aha means what'],
        T:'T2 W1 Lesson A',
        LP:{title:'He aha tēnei? — What is this?',val:'Mōhio · Psalm 24:1',pat:['He ________ tēnei.','He ________ tēnā.','He ________ tērā.'],swap:'Swap the middle word (pene, pukapuka, teepu, tūru, pēke) and choose tēnei (near me), tēnā (near you) or tērā (over there).'}
      }
    };

    // ── Lesson B · He pene tēnei? — Is this a pen? ──
    const B = {
      P: {
        t:2,
        w:1,
        l:'B',
        ch:'He|k pene|n tēnei?|a',
        sub:'Is it a pen? Today we ask yes or no questions about the things around us.',
        say:'Kia ora everyone! Last lesson we named things and asked ‘What is this?’ Today we ask yes or no questions: ‘Is this a pen?’ and answer Āe or Kāo. Still no writing: listen, think and speak. Have your real objects ready.',
        pron:'rūri = ROO-ree · pepa = PEH-pah',
        li:'ask yes or no questions about things and answer with Āe or Kāo.',
        succ:['I can ask ‘Is this a pen?’ He pene tēnei?','I can answer with Āe (yes) or Kāo (no) and say what it is.','I can ask a partner yes or no questions about things near and far.'],
        wp:'God gives wisdom and understanding.',
        ref:'Proverbs 2:6',
        mom:'God gives wisdom and understanding. Asking good questions is one way we grow in knowing.',
        q:'What is something you are curious to learn more about?',
        recall:[['How do you say: Hello, I am Sam.','Kia ora. Ko Sam ahau.'],['How do you say: Please sit down.','Tēnā koa, noho mai.'],['How do you say: Thank you for the food.','Kia ora mō te kai.']],
        rtag:'Term 1 · Weeks 1 to 9',
        rtxt:'Remember when… Term 1 and Lesson A (3 quick prompts)',
        refl:'What good question did you ask today?',
        next:'Week 2: Where is it? (Kei hea te pene?)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: rūri (ruler) and pepa (paper). Hold up a real ruler and a sheet of paper as you say them. Remind students that a yes or no question uses the same words as a statement, just with a rising voice.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: rising voice, no extra word. Prompt 2: Kāo, then the real thing.',
        xresc:'Common error: using Āe for no. Say: Āe is yes, Kāo is no. Practise with real objects.',
        xpron:'Āe = AH-eh · Kāo = KAH-oh',
        cur:curriculumRows('Communication (asking and answering yes or no questions about things around us) · Language Knowledge (He ___ tēnei? questions; Āe and Kāo answers; rising intonation) · Cultural Knowledge (curiosity and asking questions as a way of learning)','Recycles Lesson A and Term 1. Prepare real objects so students can answer honestly (Āe or Kāo).'),
        vr:valueRows('Proverbs 2:6','God gives wisdom and understanding. Asking good questions is one way we grow in knowing.','What is something you are curious to learn more about?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Bring real objects: a pen, a book, a bag, a ruler and some paper.','Use the same vocab card as Lesson A. Add rūri (ruler) and pepa (paper) as the two stretch words.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise raising your voice at the end of a question in te reo (He pene tēnei?).'],
        three:'(1) A yes or no question uses the same words as the statement, with a rising voice: <i>He pene tēnei?</i> (2) Answer with <i>Āe</i> (yes) or <i>Kāo</i> (no) and then say what it is: <i>Kāo, he pukapuka.</i> (3) The pointing words work the same way: <i>tēnei, tēnā, tērā</i>.',
        diff:['Echo as a whole class. Use only pene, pukapuka and tēnei at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer yes or no questions with all three pointing words.','Ask three questions and give both answers (yes and no). Add Ka pai! and thanks (Kia ora mō te …). Challenge a partner with a trick question.'],
        look:'A rising voice for questions; Āe and Kāo used correctly; the thing named after the answer; correct pointing words; clear vowels in rūri and pepa.',
        nx:'revisit Āe and Kāo with real objects for students in Starting; start Week 2: Where is it?',
        rec:'Lesson A (He ___ tēnei / tēnā / tērā, He aha?) is recalled; Term 1 greetings, classroom commands, feelings and thanks return in the warm-up and drama.'
      },
      D: {
        VOC:[...A.D.VOC,'rūri','pepa'],
        STEPS:[
          ['Quick recap: This is a pen. That is a book. That over there is a bag.','He|k pene|n tēnei.|a He|k pukapuka|n tēnā.|a He|k pēke|n tērā.|a','heh PEH-neh TEH-neh-ee · heh POO-kah-POO-kah TEH-nah · heh PEH-keh TEH-rah','Lesson A, stacked.',null,'Whole class'],
          ['Two new words: ruler is rūri, and paper is pepa. Say them.','rūri|n* pepa|n*','ROO-ree · PEH-pah','rūri = ruler (hold the ū). pepa = paper.','Hold up a ruler. Rūri. Hold up paper. Pepa. Say them with me. The macron on rūri means hold that vowel.','Echo'],
          ['This is a ruler. That over there is paper.','He|k rūri|n tēnei.|a He|k pepa|n tērā.|a','heh ROO-ree TEH-neh-ee · heh PEH-pah TEH-rah','Same pattern, new words.',null,'Whole class'],
          ['Make it a question: Is this a pen? Raise your voice at the end.','He|k pene|n tēnei?|a*','heh PEH-neh TEH-neh-ee?','Same words as the statement; the voice rises at the end.','In English we add words to ask a question: is this a pen? In te reo, you keep the same words and raise your voice at the end. Take a moment… (wait 3 seconds)… He pene tēnei? Say it with me, with a question face.','Echo'],
          ['Answer: Yes, it is a pen.','Āe,|w* he|k pene.|n','AH-eh, heh PEH-neh','Āe = yes. Then say what it is.',null,'Whole class'],
          ['Answer: No, it is a book.','Kāo,|w* he|k pukapuka.|n','KAH-oh, heh POO-kah-POO-kah','Kāo = no. Then say what it really is.','Kāo means no. After kāo we say what it is. Kāo, he pukapuka.','Whole class'],
          ['Ask: Is that (near you) a chair? Answer yes. Now answer no: it is a table.','He|k tūru|n tēnā?|a Āe,|w he|k tūru.|n Kāo,|w he|k teepu.|n','heh TOO-roo TEH-nah? · AH-eh, heh TOO-roo · KAH-oh, heh TEH-eh-poo','Question, then yes, then no.',null,'Whole class'],
          ['Ask: Is that over there a bag? Answer: Yes, it is a bag.','He|k pēke|n tērā?|a Āe,|w he|k pēke.|n','heh PEH-keh TEH-rah? · AH-eh, heh PEH-keh','tērā for far away.',null,'Whole class'],
          ['Partner game: hold up a thing and ask your partner a yes or no question. Your partner answers Āe or Kāo and says what it is.','He|k ___|n tēnei?|a Āe,|w he|k ___.|n Kāo,|w he|k ___.|n','heh ___ TEH-neh-ee? · AH-eh, heh ___ · KAH-oh, heh ___','Sometimes ask a trick question!','Turn to your partner. Hold up something and ask a yes or no question. It can be a trick question! Your partner answers Āe or Kāo and says what it really is. Swap after three goes. Take 2 minutes.','Pairs'],
          ['Ask: What is this? Answer: It is a ruler.','He|k aha|q tēnei?|a He|k rūri|n tēnei.|a','heh AH-hah TEH-neh-ee? · heh ROO-ree TEH-neh-ee','Open question (He aha?) or yes or no question (He rūri tēnei?).',null,'Whole class'],
          ['Say thank you to a friend for the book.','Kia~ora|w mō|q te|a pukapuka.|n','KEE-ah OR-ah mor teh POO-kah-POO-kah','Term 1: Kia ora mō … = thank you for …',null,'Whole class'],
          ['Class chain: ask the next person a yes or no question about something near or far. They answer and ask the next person.','He|k ___|n tēnā?|a Āe,|w he|k ___.|n Ka~pai!|w','heh ___ TEH-nah? · AH-eh, heh ___ · kah PIE','Real questions, real answers.','Pass it around the circle. Each person asks the next person a yes or no question about a thing in the room. The next person answers Āe or Kāo, says what it is, and then asks the next person. Ka pai! after each. If someone is stuck, that’s my fault, not theirs.','Individual']],
        DR:{title:'Te Pēke Ngaro — The Lost Bag',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! He aha tēnei?','Hello, children! What is this?','(holds up a bag)','T1W1'],
          ['Hana','He pene tēnei?','Is this a pen?','(looks closely)'],
          ['Kuia Mere','Kāo, he pēke tēnei.','No, this is a bag.','(shakes her head, smiling)'],
          ['Tama','He pukapuka tērā?','Is that over there a book?','(points to the table)'],
          ['Kuia Mere','Āe, he pukapuka tērā. Ka pai, Tama!','Yes, that is a book. Good, Tama!','(claps)','T1W10'],
          ['Hana','He rūri tēnā, Tama?','Is that a ruler, Tama?','(points at Tama’s hand)'],
          ['Tama','Āe, he rūri tēnei. Kei te harikoa ahau!','Yes, this is a ruler. I am happy!','(holds up the ruler)','T1W2'],
          ['Kuia Mere','Kei te pēhea koe, Hana?','How are you, Hana?','','T1W2'],
          ['Hana','Kei te pai ahau. Kei te pīrangi ahau ki te kai.','I am well. I want to eat.','(rubs her tummy)','T1W6'],
          ['Kuia Mere','Tēnā koa, noho mai. He tūru tēnā.','Please sit. That is a chair.','(points to a chair)','T1W8'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Asking questions helps us learn about the world God has made. Keep asking, keep noticing and keep giving thanks.','T1W10'],
          ['Hana','Kia ora mō te pēke, Kuia.','Thank you for the bag, Kuia.','(takes the bag)','T1W9'],
          ['Tama','Ka kite, Kuia!','See you, Kuia!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘Is this a pen?’','He pene tēnei?'],['Say in te reo: ‘No, it is a book.’','Kāo, he pukapuka.'],['Choose: He ____ tēnei. (This is a ruler.) (rūri / pepa)','rūri'],['What does He aha tērā? mean?','What is that over there?'],['Stretch: ask your partner a yes or no question about something in the room, then give both answers (yes and no).','He ___ tēnā? Āe, he ___. Kāo, he ___.']],
        CE:['Forgetting to raise the voice for a question','Using Āe when the answer is no','Mixing up tēnā and tērā','Using Ko instead of He','Missing the Āe or Kāo answer'],
        T:'T2 W1 Lesson B',
        LP:{title:'He pene tēnei? — Is this a pen?',val:'Mōhio · Proverbs 2:6',pat:['He ________ tēnei?','Āe, he ________.','Kāo, he ________.'],swap:'Ask about something, then answer Āe (yes) or Kāo (no) and say what it really is.'}
      }
    };

    addLessons({ '2.1.A': A, '2.1.B': B });
  }

  /* ──────── WEEK 2 · Where is it? ──────── */
  {
    addGlossary({
      "kei":["is at (a place)","kay",2,2],
      "kei hea":["where is","kay HEH-ah",2,2],
      "runga":["on / on top of / above","ROO-ngah",2,2],
      "raro":["under / below","RAH-roh",2,2],
      "roto":["in / inside","ROH-toh",2,2],
      "waho":["outside","WAH-hoh",2,2],
      "mua":["in front of","MOO-ah",2,2],
      "muri":["behind","MOO-ree",2,2],
      "pouaka":["box","POH-oo-AH-kah",2,2],
      "kapu":["cup","KAH-poo",2,2],
      "akomanga":["classroom","AH-koh-MAH-ngah",2,2],
      "matapihi":["window","MAH-tah-PEE-hee",2,2],
      "kei runga i":["is on top of","kay ROO-ngah ee",2,2],
      "kei raro i":["is under","kay RAH-roh ee",2,2],
      "kei roto i":["is in","kay ROH-toh ee",2,2],
      "kei waho i":["is outside","kay WAH-hoh ee",2,2],
      "kei mua i":["is in front of","kay MOO-ah ee",2,2],
      "kei muri i":["is behind","kay MOO-ree ee",2,2]
    });

    // ── Lesson A · Kei hea te pene? — Where is the pen? ──
    const A = {
      P: {
        t:2,
        w:2,
        l:'A',
        ch:'Kei|k hea|q te|a pene?|n',
        sub:'Where is it? Today we say where things are: on, under, in, outside, in front and behind.',
        say:'Kia ora everyone! Last week we named things and asked what they are. Today we say where things are. Is the pen on the table, under the chair, or in the bag? Still no writing: listen, think and speak. Have a pen, a bag and a box ready to move around.',
        pron:'Kei hea te pene? = kay HEH-ah teh PEH-neh',
        li:'ask where something is and say where it is using runga, raro, roto, waho, mua and muri.',
        succ:['I can say where something is with one place word: Kei runga i te teepu.','I can ask and answer: Kei hea te pene? Kei roto i te pēke.','I can use four or more place words and ask a partner where things are.'],
        wp:'God is above us, below us, in front and behind. We are never out of God’s sight.',
        ref:'Psalm 139:7-10',
        mom:'There is nowhere we can go where God is not with us: up, down, in or out. Knowing this gives us courage.',
        q:'How does it feel to know God is with you wherever you are?',
        recall:[['How do you say: This is a pen.','He pene tēnei.'],['How do you say: What is that over there?','He aha tērā?'],['How do you say: Hello, how are you?','Kia ora. Kei te pēhea koe?']],
        rtag:'Term 2 Week 1 and Term 1',
        rtxt:'Remember when… Week 1 and Term 1 (3 quick prompts)',
        refl:'Where did you notice God’s care for you today?',
        next:'Lesson B: asking where people are (Kei hea a Hana?)',
        vsay:'Say each word and the class echoes. Use your hands: flat hand above for runga, below for raro, cupped hands for roto, hands apart for waho, step forward for mua, step back for muri. Hold up a real box (pouaka) and cup (kapu) to move around. Kei hea means where is it, and kei means is at.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Kei, then the place word, then i te and the thing. Prompt 4: no te after kei.',
        xresc:'Common error: Kei te for place. Say: Kei te goes with an action (Kei te kai ahau). For a place, use Kei, then the place word.',
        xpron:'runga = ROO-ngah · raro = RAH-roh · roto = ROH-toh · waho = WAH-hoh',
        cur:curriculumRows('Communication (asking and answering where things are) · Language Knowledge (Kei hea te …? Kei + place word + i te + thing; runga, raro, roto, waho, mua, muri) · Cultural Knowledge (te reo in our classroom; noticing and looking after our place)','Recalls Week 1 (He … tēnei / tēnā / tērā, He aha?) and Term 1 greetings in the warm-up. Prepare real objects to move around.'),
        vr:valueRows('Psalm 139:7-10','Wherever we go (up, down, in or out), God is with us. Knowing where we are in God’s world gives us confidence.','How does it feel to know God is with you wherever you are?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Bring a pen, a bag, a box and a cup. You will move them on, under, in and outside things.','Print the weekly vocab card, one per student.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the hand actions for runga, raro, roto, waho, mua and muri before class.'],
        three:'(1) <i>Kei hea te pene?</i> means where is the pen? <i>Kei</i> means is at a place, and <i>hea</i> means where (you met it in <i>Nō hea koe?</i>). (2) To answer, use <i>Kei</i> + a place word + <i>i te</i> + the thing: <i>Kei runga i te teepu</i>. (3) <i>Kei</i> is for places; <i>Kei te</i> is for actions (<i>Kei te kai ahau</i>).',
        diff:['Echo as a whole class. Use only runga, raro and roto at first, with real objects and hand actions. Pair with a confident partner and allow whispering first.','Complete all steps. Use all six place words with real objects.','Ask and answer in pairs with all six place words. Add Āe and Kāo (Kei roto i te pēke? Āe.). Add Ka pai! and Kia ora mō … to thank a partner.'],
        look:'Clear vowels and the ng in runga; Kei then the place word, then i te and the thing; no te after kei; the right place word for the real position of the object; confident movement of real objects.',
        nx:'revisit raro and roto with real objects for students in Starting; build questions about people in Lesson B.',
        rec:'Week 1 (He ___ tēnei, He aha?) and Term 1 (greetings, feelings, thanks) are recalled in the warm-up and drama; Āe and Kāo return in the drama.'
      },
      D: {
        VOC:['kei hea','kei','runga','raro','roto','waho','mua','muri','pouaka','kapu'],
        STEPS:[
          ['Quick recap: This is a pen. That over there is a table.','He|k pene|n tēnei.|a He|k teepu|n tērā.|a','heh PEH-neh TEH-neh-ee · heh TEH-eh-poo TEH-rah','Week 1, stacked.',null,'Whole class'],
          ['The word for on or on top of is runga. Say: runga.','runga|n*','ROO-ngah','runga = on, above. The ng sounds like the end of singer.','Put your hand flat above something. Runga means on top, above. The ng is soft, like the end of the English word singer. Say it with me: runga.','Echo'],
          ['The word for the is te. How would you say: the table?','te|a* teepu|n','teh TEH-eh-poo','te = the. You have heard it in Kia ora mō te kai.','Do you remember Kia ora mō te kai? Thank you for the food. Te means the. So how would you say ‘the table’? Take a moment… (wait 3 seconds)… te teepu. Say it with me.','Echo'],
          ['It is on the table.','Kei|k* runga|q i|a* te|a teepu.|n','kay ROO-ngah ee teh TEH-eh-poo','Kei + place word + i + te + thing. It frames the place.','Here is the little frame for a place: Kei, then the place word, then i, then te and the thing. Kei runga i te teepu. It is on the table. Say it while you put your hand flat on your table.','Echo'],
          ['raro means under. How would you say: It is under the chair?','Kei|k raro|q* i|a te|a tūru.|n','kay RAH-roh ee teh TOO-roo','Same frame, new place word.','Raro means under or below. Put your hand low. Same frame as before. Take a moment… (wait 3 seconds)… Kei raro i te tūru. Say it while you point under your chair.','Whole class'],
          ['roto means in. How would you say: It is in the bag?','Kei|k roto|q* i|a te|a pēke.|n','kay ROH-toh ee teh PEH-keh','roto = in, inside. Cup your hands.',null,'Whole class'],
          ['waho means outside. How would you say: It is outside the bag?','Kei|k waho|q* i|a te|a pēke.|n','kay WAH-hoh ee teh PEH-keh','waho = outside. Spread your hands apart.',null,'Whole class'],
          ['Now ask: Where is the pen? (kei hea = where is)','Kei|k* hea|q* te|a pene?|n','kay HEH-ah teh PEH-neh','You know hea from Nō hea koe? (where from). Kei hea = where is?','You know hea from Nō hea koe? Where are you from. Now Kei hea means where is. Kei hea te pene? Say it with me, looking around for the pen.','Echo'],
          ['Ask and answer: Where is the book? It is on the table.','Kei|k hea|q te|a pukapuka?|n Kei|k runga|q i|a te|a teepu.|n','kay HEH-ah teh POO-kah-POO-kah · kay ROO-ngah ee teh TEH-eh-poo','Ask the question, then answer with the frame.',null,'Whole class'],
          ['mua means in front of. How would you say: It is in front of the chair?','Kei|k mua|q* i|a te|a tūru.|n','kay MOO-ah ee teh TOO-roo','mua = in front of. Step forward.','Mua means in front of. Take a step forward when you say it. Kei mua i te tūru.','Whole class'],
          ['muri means behind. How would you say: It is behind the chair?','Kei|k muri|q* i|a te|a tūru.|n','kay MOO-ree ee teh TOO-roo','muri = behind. Step back.','Muri means behind. Step back when you say it. Kei muri i te tūru. Mua and muri sound similar, so use your feet to remember: mua is forward, muri is back.','Whole class'],
          ['Partner game: one person hides a pen or points at one. Ask where it is. Your partner answers with a place word.','Kei|k hea|q te|a ___?|n Kei|k ___|q i|a te|a ___.|n','kay HEH-ah teh ___ · kay ___ ee teh ___','Use real things in the room. Swap after three questions.','Turn to your partner. One person asks Kei hea te pene? (or another thing). The other answers using a place word and a thing in the room, for example Kei runga i te teepu. Check the real position by looking. Swap after three questions. Take 2 minutes.','Pairs'],
          ['Class chain: ask the next person where something is. They answer, say Ka pai!, then ask the next person.','Kei|k hea|q te|a ___?|n Kei|k ___|q i|a te|a ___.|n Ka~pai!|w','kay HEH-ah teh ___ · kay ___ ee teh ___ · kah PIE','Real questions, real answers, with Ka pai! after each.','Pass it around the circle. Each person asks the next Kei hea te ___? (any thing in the room). The next person answers with Kei and a place word, says Ka pai! and then asks the next person. If someone is stuck, that’s my fault, not theirs. I’ll help.','Individual']],
        DR:{title:'Te Rapu Pene — Finding the Pen',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei hea te pene?','Hello, children! Where is the pen?','(looks around, puzzled)','T1W1'],
          ['Hana','Kei runga i te teepu?','Is it on the table?','(checks the table)'],
          ['Kaiako Rose','Kāo. Kei hea te pene, Tama?','No. Where is the pen, Tama?','(shakes her head)'],
          ['Tama','Kei raro i te tūru?','Is it under the chair?','(peeks under the chair)'],
          ['Kaiako Rose','Kāo. Kei hea?','No. Where is it?','(throws up her hands)'],
          ['Hana','Kei roto i te pēke!','It is in the bag!','(opens the bag)'],
          ['Kaiako Rose','Āe! Ka pai, Hana!','Yes! Good, Hana!','(claps)','T1W10'],
          ['Tama','Kei hea te pukapuka?','Where is the book?','(looks around)'],
          ['Hana','Kei mua i te tūru.','It is in front of the chair.','(points)'],
          ['Tama','Kia ora, Hana. Kei te harikoa ahau!','Thank you, Hana. I am happy!','(hugs the book)','T1W2'],
          ['Kaiako Rose','Kia ora mō ōku ākonga! E aroha ana te Atua ki a koutou.','Thank you for my students! God loves all of you.','(to the audience, in English) God knows where everything is, even the things we lose, and God always knows where each of us is.','T1W9'],
          ['Tama','Ka kite, Kaiako!','See you, teacher!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘It is on the table.’','Kei runga i te teepu.'],['What does Kei hea te pene? mean?','Where is the pen?'],['Choose the word for ‘in’: Kei ____ i te pēke. (roto / raro)','roto'],['Fix the sentence: ‘Kei te runga i te teepu.’ (It should say: It is on the table.)','Kei runga i te teepu.'],['Stretch: ask where something in the room is, then answer your own question.','Kei hea te ___? Kei ___ i te ___.']],
        CE:['Using Kei te instead of Kei','Leaving out i','Mixing up runga and raro','Mixing up mua and muri','Putting te straight after kei'],
        T:'T2 W2 Lesson A',
        LP:{title:'Kei hea te pene? — Where is the pen?',val:'Mōhio · Psalm 139:7-10',pat:['Kei hea te ________?','Kei ________ i te ________.','(runga · raro · roto · waho · mua · muri)'],swap:'Swap the place word and the thing: Kei runga i te teepu. Kei roto i te pēke. Kei muri i te tūru.'}
      }
    };

    // ── Lesson B · Kei hea a Hana? — Where is Hana? ──
    const B = {
      P: {
        t:2,
        w:2,
        l:'B',
        ch:'Kei|k hea|q a|a Hana?|p',
        sub:'Where is she? Where is he? Today we ask where people are and answer with ia.',
        say:'Kia ora everyone! Last lesson we said where things are. Today we say where people are. When we ask about a person, we add the little word a before the name: Kei hea a Hana? Still no writing: listen, think and speak. Think of the people in our classroom.',
        pron:'Kei hea a Hana? = kay HEH-ah ah HAH-nah',
        li:'ask and say where people are using Kei hea a …? and Kei … ia i te ….',
        succ:['I can ask where a person is: Kei hea a Hana?','I can answer: Kei roto ia i te akomanga.','I can ask and answer about people and things with yes or no (Āe, Kāo).'],
        wp:'God searches for each of us, like a shepherd looking for a lost sheep.',
        ref:'Luke 15:4-6',
        mom:'Jesus told a story about a shepherd who looked everywhere for one lost sheep. God never stops looking for us, and that shows great aroha.',
        q:'Who looks for you when you are lost or worried?',
        recall:[['How do you say: This is a pen.','He pene tēnei.'],['How do you say: It is in the bag.','Kei roto i te pēke.'],['How do you say: Thank you for the food.','Kia ora mō te kai.']],
        rtag:'Term 2 Weeks 1 and 2',
        rtxt:'Remember when… Weeks 1 and 2 (3 quick prompts)',
        refl:'Who helps you when you are lost, and how can you help someone else?',
        next:'Week 3: Colours (He whero te pene)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: akomanga (classroom) and matapihi (window). Point to the real classroom and window as you say them. Remind students that ia means she or he, and a goes before a person’s name when we ask where they are.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: a before the name. Prompt 3: waho means outside.',
        xresc:'Common error: leaving out a before the name. Say: for a person, Kei hea a Hana? (not Kei hea Hana?).',
        xpron:'akomanga = AH-koh-MAH-ngah · matapihi = MAH-tah-PEE-hee',
        cur:curriculumRows('Communication (asking and answering where people are; yes or no questions about place) · Language Knowledge (Kei hea a …? Kei + place word + ia + i te …; ia = she or he) · Cultural Knowledge (looking out for one another; God’s care for each person)','Recycles Lesson A and Week 1. Prepare a hide-and-seek moment (a student hides, the class asks Kei hea a …?).'),
        vr:valueRows('Luke 15:4-6','Jesus told a story about a shepherd who looked everywhere for one lost sheep. God never stops looking for us, and that shows great aroha.','Who looks for you when you are lost or worried?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Choose a student to hide for a moment (behind a chair, outside the door) so the class can ask Kei hea a …?','Use the same vocab card as Lesson A. Add akomanga (classroom) and matapihi (window) as the two stretch words.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise Kei hea a Hana? and Kei roto ia i te akomanga before class.'],
        three:'(1) When we ask about a person, add <i>a</i> before the name: <i>Kei hea a Hana?</i> (2) <i>Ia</i> means she or he (you met it in <i>Ko wai ia?</i>): <i>Kei roto ia i te akomanga</i>, she or he is in the classroom. (3) The place frame is the same as Lesson A: <i>Kei</i> + place word + <i>i te</i> + place.',
        diff:['Echo as a whole class. Use only roto and waho at first, with real students and the real classroom. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer about people with at least four place words.','Ask and answer about people and things with yes or no (Kei roto ia i te akomanga? Āe.). Add Ka pai! and Kia ora mō … to thank a partner. Give clues for a hidden friend.'],
        look:'Clear vowels; a before a person’s name; ia used for she or he; the right place word for the real position; confident asking and answering with a partner.',
        nx:'revisit a and ia for students in Starting; start Week 3: Colours.',
        rec:'Lesson A (Kei hea te …? Kei + place word + i te) is recalled; Week 1 (He ___ tēnei), Āe and Kāo, and Term 1 thanks and greetings return in the warm-up and drama.'
      },
      D: {
        VOC:[...A.D.VOC,'akomanga','matapihi'],
        STEPS:[
          ['Quick recap: Where is the pen? It is on the table. Where is the book? It is under the chair.','Kei|k hea|q te|a pene?|n Kei|k runga|q i|a te|a teepu.|n Kei|k hea|q te|a pukapuka?|n Kei|k raro|q i|a te|a tūru.|n','kay HEH-ah teh PEH-neh · kay ROO-ngah ee teh TEH-eh-poo · kay HEH-ah teh POO-kah-POO-kah · kay RAH-roh ee teh TOO-roo','Lesson A, stacked.',null,'Whole class'],
          ['Two new words: classroom is akomanga, and window is matapihi. Say them.','akomanga|n* matapihi|n*','AH-koh-MAH-ngah · MAH-tah-PEE-hee','akomanga = classroom. matapihi = window.','Point to the classroom: akomanga. Point to the window: matapihi. Say each one with me. Akomanga: ah-ko-MA-nga. Matapihi: ma-ta-PEE-hee.','Echo'],
          ['It is in the classroom.','Kei|k roto|q i|a te|a akomanga.|n','kay ROH-toh ee teh AH-koh-MAH-ngah','Same frame as Lesson A.',null,'Whole class'],
          ['It is in front of the window.','Kei|k mua|q i|a te|a matapihi.|n','kay MOO-ah ee teh MAH-tah-PEE-hee','Same frame, new thing.',null,'Whole class'],
          ['Now ask where a person is. When we ask about a person, a goes before the name. How would you say: Where is Hana?','Kei|k hea|q a|a* Hana?|p','kay HEH-ah ah HAH-nah','a goes before a person’s name when we ask where they are.','When we ask where a thing is, we say Kei hea te pene? For a person, we add the little word a before the name. Take a moment… (wait 3 seconds)… Kei hea a Hana? Say it with me and look around for Hana.','Echo'],
          ['Answer: She is in the classroom. (ia means she or he)','Kei|k roto|q ia|p* i|a te|a akomanga.|n','kay ROH-toh EE-ah ee teh AH-koh-MAH-ngah','ia = she or he. You know it from Ko wai ia? It goes after the place word.','You know ia from Ko wai ia? Who is she or he? Here ia means she or he again. It goes right after the place word. Kei roto ia i te akomanga. She is in the classroom. Say it with me.','Echo'],
          ['Where is Tama? He is outside the classroom.','Kei|k hea|q a|a Tama?|p Kei|k waho|q ia|p i|a te|a akomanga.|n','kay HEH-ah ah TAH-mah · kay WAH-hoh EE-ah ee teh AH-koh-MAH-ngah','a before the name, ia after the place word.',null,'Whole class'],
          ['Where is Kaiako? She is in front of the window.','Kei|k hea|q a|a Kaiako?|p Kei|k mua|q ia|p i|a te|a matapihi.|n','kay HEH-ah ah KYE-ah-koh · kay MOO-ah EE-ah ee teh MAH-tah-PEE-hee','Same pattern with a different person and place.',null,'Whole class'],
          ['Partner game: ask where a person in the room is. Your partner answers with a place word.','Kei|k hea|q a|a ___?|p Kei|k ___|q ia|p i|a te|a ___.|n','kay HEH-ah ah ___ · kay ___ EE-ah ee teh ___','Use real people in the room. Swap after three questions.','Turn to your partner. One person asks Kei hea a ___? using the name of someone in the room. The other answers with Kei, a place word, ia and the place. Check the real position by looking. Swap after three questions. Take 2 minutes.','Pairs'],
          ['Yes or no: Is the pen in the bag? Yes, it is in the bag. No, it is under the table.','Kei|k roto|q i|a te|a pēke?|n Āe,|w kei|k roto.|q Kāo,|w kei|k raro|q i|a te|a teepu.|n','kay ROH-toh ee teh PEH-keh? · AH-eh, kay ROH-toh · KAH-oh, kay RAH-roh ee teh TEH-eh-poo','Week 1’s Āe and Kāo, with a place answer.',null,'Whole class'],
          ['Say thank you for the pen, and cheer your partner on.','Kia~ora|w mō|q te|a pene.|n Ka~pai!|w','KEE-ah OR-ah mor teh PEH-neh · kah PIE','Term 1: Kia ora mō … = thank you for …',null,'Whole class'],
          ['Hide and seek chain: one person hides, the class asks where they are, and the hider answers. Then the next person hides.','Kei|k hea|q a|a ___?|p Kei|k ___|q ia|p i|a te|a ___.|n Ka~pai!|w','kay HEH-ah ah ___ · kay ___ EE-ah ee teh ___ · kah PIE','Real hiding, real kōrero.','Ask one student to step out of sight (behind a chair, outside the door). The class asks Kei hea a ___? Others answer with clues, like Kei waho ia i te akomanga. Then bring the student back and say Ka pai! Repeat with a different student. If someone is stuck, that’s my fault, not theirs.','Individual']],
        DR:{title:'Huna Huna — Hide and Seek',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, Hana! Kei hea a Tama?','Hello, Hana! Where is Tama?','(looks around)','T1W1'],
          ['Hana','Kei roto ia i te akomanga?','Is he in the classroom?','(looks inside)'],
          ['Kuia Mere','Kāo. Kei hea a Tama?','No. Where is Tama?','(shakes her head)'],
          ['Hana','Kei waho ia i te akomanga?','Is he outside the classroom?','(points outside)'],
          ['Kuia Mere','Kāo. Kei raro ia i te teepu?','No. Is he under the table?','(peeks under the table)'],
          ['Tama','Kāo!','No!','(giggles from his hiding place)'],
          ['Hana','Kei muri ia i te tūru?','Is he behind the chair?','(creeps up to the chair)'],
          ['Tama','Āe! Kei muri ahau i te tūru!','Yes! I am behind the chair!','(jumps out)','T1W3'],
          ['Kuia Mere','Ka pai, Tama! Kei hea te pene?','Good, Tama! Where is the pen?','(laughs)','T1W10'],
          ['Tama','Kei roto i tōku pēke.','It is in my bag.','(holds up his bag)'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Jesus told a story about a shepherd who searched until the lost sheep was found. God always looks for us, and God always finds us.','T1W9'],
          ['Hana','Kia ora mō tōku hoa, Kuia.','Thank you for my friend, Kuia.','(hand on heart)','T1W9'],
          ['Tama','Ka kite, Kuia!','See you, Kuia!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘Where is Hana?’','Kei hea a Hana?'],['What does Kei roto ia i te akomanga mean?','She (or he) is in the classroom.'],['Choose the word for ‘outside’: Kei ____ ia i te akomanga. (waho / roto)','waho'],['Fix the sentence: ‘Kei hea Tama?’ (It should say: Where is Tama?)','Kei hea a Tama?'],['Stretch: ask a partner where a person in the room is, then answer with a place word.','Kei hea a ___? Kei ___ ia i te ___.']],
        CE:['Leaving out a before the name','Mixing up roto and waho','Using Kei te instead of Kei','Mixing up mua and muri','Forgetting i before the place'],
        T:'T2 W2 Lesson B',
        LP:{title:'Kei hea a Hana? — Where is Hana?',val:'Mōhio · Luke 15:4-6',pat:['Kei hea a ________?','Kei ________ ia i te ________.','Āe, kei ________. · Kāo, kei ________.'],swap:'Swap the person, the place word and the place: Kei roto ia i te akomanga. Kei waho ia i te akomanga. Kei mua ia i te matapihi.'}
      }
    };

    addLessons({ '2.2.A': A, '2.2.B': B });
  }

  /* ──────── WEEK 3 · Colours ──────── */
  {
    addGlossary({
      "tae":["colour","TAH-eh",3,2],
      "he aha te tae o":["what colour is","heh AH-hah teh TAH-eh or",3,2],
      "whero":["red","FEH-roh",3,2],
      "kākāriki":["green","KAH-KAH-ree-kee",3,2],
      "kōwhai":["yellow","KOR-fye",3,2],
      "kikorangi":["blue","KEE-koh-RAH-ngee",3,2],
      "pango":["black","PAH-ngoh",3,2],
      "he mā":["white (we say He mā; mā alone also means and)","heh MAH",3,2],
      "parauri":["brown","PAH-rah-OO-ree",3,2],
      "karaka":["orange","KAH-rah-kah",3,2],
      "māwhero":["pink (white + red)","MAH-FEH-roh",3,2],
      "waiporoporo":["purple","WYE-poh-roh-POH-roh",3,2],
      "hina":["grey","HEE-nah",3,2],
      "tōna":["his / her","TOH-nah",3,2]
    });

    // ── Lesson A · He whero te pene — The pen is red ──
    const A = {
      P: {
        t:2,
        w:3,
        l:'A',
        ch:'He|k whero|q te|a pene.|n',
        sub:'Colours! Today we say what colour things are and ask what colour something is.',
        say:'Kia ora everyone! Last week we said where things are. Today we say what colour things are. Look around the room: what is red, green, yellow or blue? Still no writing: listen, think and speak. Have coloured pens, books or counters ready to hold up.',
        pron:'whero = FEH-roh (wh sounds like f) · tae = TAH-eh',
        li:'say what colour something is and ask what colour it is, using nine colour words.',
        succ:['I can say three colours in te reo: whero, kākāriki, kōwhai.','I can say what colour something is: He whero te pene.','I can ask and answer: He aha te tae o te pene? He kākāriki te pukapuka.'],
        wp:'The colours of the sky and the earth tell us how great God is.',
        ref:'Psalm 19:1',
        mom:'The heavens declare the glory of God. Every colour of the sky, the sea and the land points us to the One who made them, and to the glory that belongs to God alone.',
        q:'What is the most beautiful colour you have seen in God’s world this week?',
        recall:[['How do you say: Where is the pen?','Kei hea te pene?'],['How do you say: It is under the chair.','Kei raro i te tūru.'],['How do you say: What is this?','He aha tēnei?']],
        rtag:'Term 2 Weeks 1 and 2',
        rtxt:'Remember when… Weeks 1 and 2 (3 quick prompts)',
        refl:'What colour in God’s world made you say wow today?',
        next:'Lesson B: whose is it? (He kōwhai tōku pēke)',
        vsay:'Say each colour and the class echoes. Hold up a real object of each colour as you say the word: whero (red), kākāriki (green), kōwhai (yellow), kikorangi (blue), pango (black), white (he mā), parauri (brown), karaka (orange), māwhero (pink). Remember wh sounds like f, and tae means colour. Note: mā on its own also means and (tekau mā tahi), so we say He mā for white.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: He first, colour next, then te and the thing. Prompt 4: the colour comes before the thing.',
        xresc:'Common error: English word order (the pen red). Say: in te reo the colour comes first: He whero te pene.',
        xpron:'whero = FEH-roh · kōwhai = KOR-fye · kākāriki = KAH-KAH-ree-kee',
        cur:curriculumRows('Communication (describing and asking about colours) · Language Knowledge (He + colour + te + thing; He aha te tae o …?; nine colour words) · Cultural Knowledge (colours in God’s creation and in the world around us)','Recalls Weeks 1 and 2 (He aha tēnei? Kei hea te …?) in the warm-up. Prepare real objects in different colours.'),
        vr:valueRows('Psalm 19:1','The heavens declare the glory of God. Every colour in the sky, sea and land points us to the One who made them.','What is the most beautiful colour you have seen in God’s world this week?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Gather coloured objects: pens, books, counters or paper in red, green, yellow, blue, black, white, brown, orange and pink.','Print the weekly vocab card, one per student.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise wh (sounds like f) and the macrons: whero, kākāriki, kōwhai, māwhero.'],
        three:'(1) The colour comes first: <i>He whero te pene</i> (literally: a red the pen). (2) To ask: <i>He aha te tae o te pene?</i> <i>Tae</i> means colour. (3) For white we say <i>He mā</i>, because <i>mā</i> on its own also means and (<i>tekau mā tahi</i>).',
        diff:['Echo as a whole class. Use only whero, kākāriki and kōwhai at first, holding up the real object. Pair with a confident partner and allow whispering first.','Complete all steps. Use all nine colours with real objects around the room.','Ask and answer in pairs with all nine colours. Add Kei hea te …? from Week 2 (Kei hea te pene? Kei runga i te teepu.). Add Ka pai! to cheer a partner.'],
        look:'Clear vowels and wh as f; He first, then the colour, then te and the thing; the right colour for the real object; confident holding up and pointing.',
        nx:'revisit the colours students mix up (whero and karaka are often confused) with real objects; build possessives in Lesson B.',
        rec:'Weeks 1 and 2 (He aha tēnei? Kei hea te …?) are recalled in the warm-up and drama; thanks and greetings from Term 1 return in the drama.'
      },
      D: {
        VOC:['tae','whero','kākāriki','kōwhai','kikorangi','pango','he mā','parauri','karaka','māwhero'],
        STEPS:[
          ['Quick recap: Where is the pen? It is on the table.','Kei|k hea|q te|a pene?|n Kei|k runga|q i|a te|a teepu.|n','kay HEH-ah teh PEH-neh · kay ROO-ngah ee teh TEH-eh-poo','Week 2, stacked.',null,'Whole class'],
          ['The word for red is whero. Say: whero.','whero|q*','FEH-roh','whero = red. wh sounds like f.','Hold up something red. Whero means red. In te reo, wh sounds like f, so we say FEH-roh. Say it with me: whero.','Echo'],
          ['In te reo, the colour comes first. How would you say: The pen is red?','He|k whero|q te|a pene.|n*','heh FEH-roh teh PEH-neh','He + colour + te + thing. The colour comes first, the thing last.','In English we say the pen is red. In te reo, we say the colour first: a red, the pen. He whero te pene. Take a moment… (wait 3 seconds)… He whero te pene. Say it with me, holding up something red.','Echo'],
          ['kākāriki means green. How would you say: The book is green?','He|k kākāriki|q* te|a pukapuka.|n','heh KAH-KAH-ree-kee teh POO-kah-POO-kah','Same frame, new colour.','Kākāriki means green, and it is also the name of a green parrot. Hold the long ā each time. Take a moment… (wait 3 seconds)… He kākāriki te pukapuka.','Whole class'],
          ['kōwhai means yellow. How would you say: The bag is yellow?','He|k kōwhai|q* te|a pēke.|n','heh KOR-fye teh PEH-keh','kōwhai = yellow, like the kōwhai tree flowers.',null,'Whole class'],
          ['kikorangi means blue. How would you say: The chair is blue?','He|k kikorangi|q* te|a tūru.|n','heh KEE-koh-RAH-ngee teh TOO-roo','kikorangi = blue. Hear ‘rangi’ in the middle, the sky.',null,'Whole class'],
          ['pango means black. How would you say: The table is black?','He|k pango|q* te|a teepu.|n','heh PAH-ngoh teh TEH-eh-poo','pango = black. The ng is soft, like singer.',null,'Whole class'],
          ['White is mā. For white we say He mā. How would you say: The paper is white?','He|k mā|q* te|a pepa.|n','heh MAH teh PEH-pah','He mā = white. (mā also means and, as in tekau mā tahi, so we always say He mā for white.)','Mā means white. You have heard mā before in tekau mā tahi, eleven, where it means and. So we always say He mā for white. He mā te pepa. Say it with me and hold up something white.','Whole class'],
          ['Three more colours: brown is parauri, orange is karaka, pink is māwhero. Say them.','parauri|q* karaka|q* māwhero|q*','PAH-rah-OO-ree · KAH-rah-kah · MAH-FEH-roh','māwhero = mā + whero: white + red makes pink!','Say each one with me. Māwhero is mā plus whero: white plus red makes pink. Isn’t that clever? Parauri, karaka, māwhero.','Echo'],
          ['Now ask: What colour is the pen? (tae means colour)','He|k aha|q te|a tae|n* o|a te|a pene?|n','heh AH-hah teh TAH-eh or teh PEH-neh','He aha te tae o … = what colour is …? You know He aha from Week 1.','You know He aha: what is it. Add te tae o and the thing: what is the colour of the pen? Take a moment… (wait 3 seconds)… He aha te tae o te pene? Say it with me, holding up a pen.','Echo'],
          ['Ask and answer: What colour is the book? The book is green.','He|k aha|q te|a tae|n o|a te|a pukapuka?|n He|k kākāriki|q te|a pukapuka.|n','heh AH-hah teh TAH-eh or teh POO-kah-POO-kah · heh KAH-KAH-ree-kee teh POO-kah-POO-kah','Ask the question, then answer with the frame.',null,'Whole class'],
          ['Partner game: point to things in the room. Ask what colour they are and answer.','He|k aha|q te|a tae|n o|a te|a ___?|n He|k ___|q te|a ___.|n','heh AH-hah teh TAH-eh or teh ___ · heh ___ teh ___','Use real things. Swap after three questions.','Turn to your partner. One person points to something and asks He aha te tae o te ___? The other answers He ___ te ___. Check the real colour by looking. Swap after three questions. Take 2 minutes.','Pairs'],
          ['Class chain: ask the next person what colour something is. They answer, say Ka pai!, then ask the next person.','He|k aha|q te|a tae|n o|a te|a ___?|n He|k ___|q te|a ___.|n Ka~pai!|w','heh AH-hah teh TAH-eh or teh ___ · heh ___ teh ___ · kah PIE','Real questions, real answers, with Ka pai! after each.','Pass it around the circle. Each person asks the next He aha te tae o te ___? (any thing in the room). The next person answers He ___ te ___, says Ka pai!, and asks the next person. If someone is stuck, that’s my fault, not theirs. I’ll help.','Individual']],
        DR:{title:'Te Pene Tae — Colourful Pens',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! He aha te tae o te pene?','Hello, children! What colour is the pen?','(holds up a pen)','T1W1'],
          ['Hana','He whero te pene.','The pen is red.','(raises her hand)'],
          ['Kaiako Rose','Āe! Ka pai, Hana! He aha te tae o te pukapuka?','Yes! Good, Hana! What colour is the book?','(holds up a book)','T1W10'],
          ['Tama','He kākāriki te pukapuka.','The book is green.','(points)'],
          ['Kaiako Rose','Ka pai, Tama! He aha te tae o te pēke?','Good, Tama! What colour is the bag?','(lifts a bag)'],
          ['Hana','He kōwhai te pēke.','The bag is yellow.','(smiles)'],
          ['Tama','He kikorangi te tūru. He pango te teepu.','The chair is blue. The table is black.','(points to each)'],
          ['Hana','Kei hea te pukapuka, Kaiako?','Where is the book, teacher?','(looks around)','T2W2'],
          ['Kaiako Rose','Kei runga i te teepu. He mā te pepa. He parauri te pouaka.','It is on the table. The paper is white. The box is brown.','(points to each)','T2W2'],
          ['Tama','Kia ora mō te pene, Kaiako. Kei te harikoa ahau!','Thank you for the pen, teacher. I am happy!','(grins)','T1W2'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God painted the world in every colour: green hills, blue sky and yellow kōwhai flowers. Every colour shows us how creative God is.','T1W9'],
          ['Hana','Ka kite, Kaiako!','See you, teacher!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘The pen is red.’','He whero te pene.'],['What does He aha te tae o te pēke? mean?','What colour is the bag?'],['Choose the word for yellow: kōwhai / kākāriki','kōwhai'],['Fix the sentence: ‘Te pene whero.’ (It should say: The pen is red.)','He whero te pene.'],['Stretch: choose something in the room, ask what colour it is, then answer your own question.','He aha te tae o te ___? He ___ te ___.']],
        CE:['Putting the colour after the thing (English order)','Leaving out He','Mixing up whero (red) and kākāriki (green)','Mixing up kōwhai (yellow) and karaka (orange)','Leaving out o in He aha te tae o …'],
        T:'T2 W3 Lesson A',
        LP:{title:'He whero te pene — The pen is red',val:'Mōhio · Psalm 19:1',pat:['He ________ te ________.','He aha te tae o te ________?','(whero · kākāriki · kōwhai · kikorangi · pango · he mā · parauri · karaka · māwhero)'],swap:'Swap the colour and the thing: He whero te pene. He kōwhai te pēke. He kikorangi te tūru. For white say He mā.'}
      }
    };

    // ── Lesson B · He kōwhai tōku pēke — My bag is yellow ──
    const B = {
      P: {
        t:2,
        w:3,
        l:'B',
        ch:'He|k kōwhai|q tōku|a pēke.|n',
        sub:'My bag, your bag, her bag. Today we say what colour our things are and ask about other people’s things.',
        say:'Kia ora everyone! Last lesson we said what colour things are. Today we say whose things they are. My bag is yellow. Your pen is red. Her bag is blue. You already know tōku (my) and tō (your). Still no writing: listen, think and speak. Have your own bag or pencil case ready.',
        pron:'tōku = TOH-koo · tōna = TOH-nah · waiporoporo = WYE-poh-roh-POH-roh',
        li:'say what colour my, your and her or his things are, and ask a friend about their things.',
        succ:['I can say what colour my things are: He kōwhai tōku pēke.','I can ask: He aha te tae o tō pēke? and answer.','I can talk about my things, your things and her or his things, with yes or no questions.'],
        wp:'God put a rainbow in the sky as a promise.',
        ref:'Genesis 9:13-16',
        mom:'After the flood, God put a rainbow in the sky as a promise. When we see the colours of a rainbow, we remember that God keeps His promises.',
        q:'What promise from God are you thankful for?',
        recall:[['How do you say: The pen is red.','He whero te pene.'],['How do you say: Where is the bag?','Kei hea te pēke?'],['How do you say: Where is Hana?','Kei hea a Hana?']],
        rtag:'Term 2 Weeks 2 and 3',
        rtxt:'Remember when… Weeks 2 and 3 (3 quick prompts)',
        refl:'What promise from God can you remember when you see a rainbow?',
        next:'Week 4: Describing things (He pukapuka nui)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: waiporoporo (purple) and hina (grey). Hold up something purple and something grey. Remind students that tōku means my, tō means your and tōna means her or his, and that the colour still comes first.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: colour first, then tōku. Prompt 3: tōna means her or his.',
        xresc:'Common error: tōku for someone else’s thing. Say: tōku = my, tō = your, tōna = her or his.',
        xpron:'tōku = TOH-koo · tō = TOH · tōna = TOH-nah',
        cur:curriculumRows('Communication (talking about our own and others’ belongings and colours; yes or no questions) · Language Knowledge (He + colour + tōku / tō / tōna + thing; He aha te tae o tō …?) · Cultural Knowledge (God’s promises and the rainbow in God’s story)','Recycles Lesson A, Week 2 (Kei hea …?) and Week 1. Prepare students’ own bags or pencil cases.'),
        vr:valueRows('Genesis 9:13-16','After the flood, God put a rainbow in the sky as a promise. When we see the colours of a rainbow, we remember that God keeps His promises.','What promise from God are you thankful for?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Ask students to put their bag, pencil case or book on the desk so they can talk about their own things.','Use the same vocab card as Lesson A. Add waiporoporo (purple) and hina (grey) as the two stretch words.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise tōku, tō and tōna, and the question He aha te tae o tō pēke?'],
        three:'(1) Swap <i>te</i> for <i>tōku</i> (my), <i>tō</i> (your) or <i>tōna</i> (her or his): <i>He kōwhai tōku pēke</i>. (2) The colour still comes first. (3) To ask a friend: <i>He aha te tae o tō pēke?</i> To ask yes or no, raise your voice: <i>He whero tō pene?</i>',
        diff:['Echo as a whole class. Use only tōku with a few colours at first, holding up real things. Pair with a confident partner and allow whispering first.','Complete all steps. Use tōku, tō and tōna with real things and a partner.','Ask and answer about a friend’s things (tōna). Add Kei hea …? (Kei hea tō pēke? Kei runga i te teepu.). Add Ka pai! and Kia ora mō … to thank a partner.'],
        look:'Colour first; tōku, tō and tōna used for the right person; the o in He aha te tae o …; clear vowels; confident asking and answering with a partner.',
        nx:'revisit tōku, tō and tōna with real things for students in Starting; start Week 4: Describing things.',
        rec:'Lesson A (He whero te pene, He aha te tae o …?), Week 2 (Kei hea …?) and Week 1 (Āe, Kāo) are recalled in the warm-up, steps and drama; thanks and greetings from Term 1 return.'
      },
      D: {
        VOC:[...A.D.VOC,'waiporoporo','hina'],
        STEPS:[
          ['Quick recap: The pen is red. The book is green. The bag is yellow.','He|k whero|q te|a pene.|n He|k kākāriki|q te|a pukapuka.|n He|k kōwhai|q te|a pēke.|n','heh FEH-roh teh PEH-neh · heh KAH-KAH-ree-kee teh POO-kah-POO-kah · heh KOR-fye teh PEH-keh','Lesson A, stacked.',null,'Whole class'],
          ['Two new colours: purple is waiporoporo, and grey is hina. Say them.','waiporoporo|q* hina|q*','WYE-poh-roh-POH-roh · HEE-nah','waiporoporo = purple (it says ‘poro’ twice!). hina = grey.','Hold up something purple: waiporoporo. Say it slowly: wai-po-ro-po-ro. Hold up something grey: hina. Say each with me.','Echo'],
          ['The paper is purple. The table is grey.','He|k waiporoporo|q te|a pepa.|n He|k hina|q te|a teepu.|n','heh WYE-poh-roh-POH-roh teh PEH-pah · heh HEE-nah teh TEH-eh-poo','Same frame, new colours.',null,'Whole class'],
          ['You know tōku means my. Swap te for tōku. How would you say: My bag is yellow?','He|k kōwhai|q tōku|a* pēke.|n','heh KOR-fye TOH-koo PEH-keh','Swap te for tōku: the colour still comes first.','You know tōku from Ko Sam tōku ingoa: my. Take away the te and put tōku instead. The colour still comes first. Take a moment… (wait 3 seconds)… He kōwhai tōku pēke. Say it, holding up your own bag.','Echo'],
          ['My pen is red. My book is green.','He|k whero|q tōku|a pene.|n He|k kākāriki|q tōku|a pukapuka.|n','heh FEH-roh TOH-koo PEH-neh · heh KAH-KAH-ree-kee TOH-koo POO-kah-POO-kah','Use your own things!',null,'Whole class'],
          ['Now ask a friend: What colour is your bag? (tō means your)','He|k aha|q te|a tae|n o|a tō|a* pēke?|n','heh AH-hah teh TAH-eh or TOH PEH-keh','o + tō + thing: of your bag. You know tō from Ko wai tō ingoa?','You know tō from Ko wai tō ingoa? What is your name. Here tō means your again. He aha te tae o tō pēke? Say it with me, turning to a friend.','Echo'],
          ['Her bag is blue. (tōna means her or his)','He|k kikorangi|q tōna|a* pēke.|n','heh KEE-koh-RAH-ngee TOH-nah PEH-keh','tōna = her or his. Same word, different person.','You know tōna from Ko wai tōna ingoa? Tōna means her or his. Point to a friend’s bag and say it: He kikorangi tōna pēke.','Whole class'],
          ['Yes or no: Is your pen red? Yes, it is red. No, it is blue.','He|k whero|q tō|a pene?|n Āe,|w he|k whero.|q Kāo,|w he|k kikorangi.|q','heh FEH-roh TOH PEH-neh? · AH-eh, heh FEH-roh · KAH-oh, heh KEE-koh-RAH-ngee','Question with a rising voice, then Āe or Kāo.',null,'Whole class'],
          ['Partner game: ask your partner what colour their things are. Answer about your own things.','He|k aha|q te|a tae|n o|a tō|a ___?|n He|k ___|q tōku|a ___.|n','heh AH-hah teh TAH-eh or TOH ___ · heh ___ TOH-koo ___','Use real things. Swap after three questions.','Turn to your partner. One person asks He aha te tae o tō ___? (pene, pukapuka, pēke). The other answers He ___ tōku ___. Look at the real thing to check. Swap after three questions. Take 2 minutes.','Pairs'],
          ['Where is your bag? It is on the table. It is yellow.','Kei|k hea|q tō|a pēke?|n Kei|k runga|q i|a te|a teepu.|n He|k kōwhai|q tōku|a pēke.|n','kay HEH-ah TOH PEH-keh · kay ROO-ngah ee teh TEH-eh-poo · heh KOR-fye TOH-koo PEH-keh','Week 2 and Week 3 together.',null,'Whole class'],
          ['Thank your friend for their pen, and cheer them on.','Kia~ora|w mō|q tō|a pene.|n Ka~pai!|w','KEE-ah OR-ah mor TOH PEH-neh · kah PIE','Term 1: Kia ora mō … = thank you for …',null,'Whole class'],
          ['Class chain: ask the next person what colour their thing is. They answer about their own thing, then ask the next person.','He|k aha|q te|a tae|n o|a tō|a ___?|n He|k ___|q tōku|a ___.|n Ka~pai!|w','heh AH-hah teh TAH-eh or TOH ___ · heh ___ TOH-koo ___ · kah PIE','Real things, real questions.','Pass it around the circle. Each person asks the next He aha te tae o tō ___? (pēke, pene, pukapuka). The next person answers He ___ tōku ___, says Ka pai!, and asks the next. If someone is stuck, that’s my fault, not theirs. I’ll help.','Individual']],
        DR:{title:'Te Rapu Pēke — Lost Property',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! He aha te tae o tō pēke, Hana?','Hello, children! What colour is your bag, Hana?','(holds up a bag)','T1W1'],
          ['Hana','He kōwhai tōku pēke.','My bag is yellow.','(points to her bag)'],
          ['Kuia Mere','He aha te tae o tō pēke, Tama?','What colour is your bag, Tama?','(turns to Tama)'],
          ['Tama','He kikorangi tōku pēke. He whero tōku pene.','My bag is blue. My pen is red.','(holds up both)'],
          ['Kuia Mere','He waiporoporo tō pēke, Tama?','Is your bag purple, Tama?','(squints, teasing)'],
          ['Tama','Kāo. He kikorangi tōku pēke!','No. My bag is blue!','(laughs)','T2W1'],
          ['Hana','Kei hea tō pēke, Tama?','Where is your bag, Tama?','(looks around)','T2W2'],
          ['Tama','Kei raro i te tūru.','It is under the chair.','(points under the chair)','T2W2'],
          ['Hana','He kākāriki te tūru. Kei te harikoa ahau!','The chair is green. I am happy!','(giggles)','T1W2'],
          ['Kuia Mere','Ka pai, tamariki! He mā tōku pēke.','Good, children! My bag is white.','(shows her bag)','T1W10'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) After the flood, God put a rainbow in the sky as a promise. Every colour reminds us that God keeps His promises.','T1W9'],
          ['Hana','Kia ora mō tōku pēke, Kuia.','Thank you for my bag, Kuia.','(hand on heart)','T1W9'],
          ['Tama','Ka kite, Kuia!','See you, Kuia!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘My bag is yellow.’','He kōwhai tōku pēke.'],['What does He aha te tae o tō pēke? mean?','What colour is your bag?'],['Choose the word for ‘her or his’: He kikorangi ____ pēke. (tōku / tōna)','tōna'],['Fix the sentence: ‘He aha te tae tō pēke?’ (It should say: What colour is your bag?)','He aha te tae o tō pēke?'],['Stretch: ask a partner what colour their bag is, then tell them what colour yours is.','He aha te tae o tō pēke? He ___ tōku pēke.']],
        CE:['Leaving out o in the question','Mixing up tōku (my) and tōna (her or his)','Mixing up tō (your) and tōku (my)','Putting the colour after the thing','Mixing up pango (black) and parauri (brown)'],
        T:'T2 W3 Lesson B',
        LP:{title:'He kōwhai tōku pēke — My bag is yellow',val:'Mōhio · Genesis 9:13-16',pat:['He ________ tōku ________.','He aha te tae o tō ________?','He ________ tōna ________.'],swap:'Swap the colour and the thing, and choose tōku (my), tō (your) or tōna (her or his): He kōwhai tōku pēke. He whero tō pene? Āe. Kāo.'}
      }
    };

    addLessons({ '2.3.A': A, '2.3.B': B });
  }

  /* ──────── WEEK 4 · Describing things ──────── */
  {
    addGlossary({
      "nui":["big / large","NOO-ee",4,2],
      "iti":["small / little","EE-tee",4,2],
      "roa":["long / tall","ROH-ah",4,2],
      "poto":["short","POH-toh",4,2],
      "hou":["new","HOH-oo",4,2],
      "tawhito":["old (for things, never for people)","TAH-fee-toh",4,2],
      "kino":["bad / poor","KEE-noh",4,2],
      "ātaahua":["beautiful","AH-tah-AH-hoo-ah",4,2],
      "ngāwari":["easy / gentle","NGAH-wah-ree",4,2],
      "uaua":["difficult / hard","OO-ah-OO-ah",4,2],
      "āhua":["appearance / what something is like","AH-hoo-ah",4,2],
      "he aha te āhua o":["what is … like","heh AH-hah teh AH-hoo-ah or",4,2]
    });

    // ── Lesson A · He pukapuka nui — A big book ──
    const A = {
      P: {
        t:2,
        w:4,
        l:'A',
        ch:'He|k pukapuka|n nui.|q',
        sub:'Big, small, long, short, new, old. Today we describe things, like a big book or a small pen.',
        say:'Kia ora everyone! Last week we said what colour things are. Today we describe things: big, small, long, short, new and old. Look around the room: what is big, what is small, what is beautiful? Still no writing: listen, think and speak. Have a few real things ready to hold up, like a big book, a small pen and a long ruler.',
        pron:'nui = NOO-ee · iti = EE-tee · tawhito = TAH-fee-toh (wh sounds like f) · ātaahua = AH-tah-AH-hoo-ah',
        li:'describe things using words like big, small, long, short, new and old, and ask what something is.',
        succ:['I can say three describing words in te reo: nui, iti, roa.','I can describe a thing: He pukapuka nui. He pene iti.','I can ask and answer: He aha tēnei? He pēke hou tēnei.'],
        wp:'God looked at everything he had made and saw that it was very good.',
        ref:'Genesis 1:31',
        mom:'God made big things and small things, old things and new things, and every one of them has its place in his world. When we describe the world carefully, we notice how good it is, and the glory belongs to God alone.',
        q:'What is something big or beautiful in God’s world that makes you say wow?',
        recall:[['How do you say: What is this? It is a book.','He aha tēnei? He pukapuka tēnei.'],['How do you say: Where is the pen? It is on the table.','Kei hea te pene? Kei runga i te teepu.'],['How do you say: The pen is red.','He whero te pene.']],
        rtag:'Term 2 Weeks 1 to 3',
        rtxt:'Remember when… Term 2 Weeks 1 to 3 (3 quick prompts)',
        refl:'What did you notice today that is big, small or beautiful?',
        next:'Lesson B: the book is big (He nui te pukapuka)',
        vsay:'Say each word and the class echoes, with an action: arms wide for nui (big), finger and thumb close together for iti (small), hands far apart for roa (long or tall), hands close together for poto (short), hold up something new for hou, wipe a dusty book for tawhito (old), thumbs up for pai (good), a gentle thumbs down for kino (bad), hand on heart for ātaahua (beautiful). Remember wh sounds like f in tawhito. Important: tawhito is only for things, never for people. We do not call a person tawhito. We use respectful words like kuia and koroua.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: He first, then the thing, then the describing word. Prompt 4: the describing word comes after the thing.',
        xresc:'Common error: English word order (a big book becomes He nui pukapuka). Say: in te reo the thing comes first and the describing word follows: a book big, He pukapuka nui.',
        xpron:'nui = NOO-ee · tawhito = TAH-fee-toh · ātaahua = AH-tah-AH-hoo-ah',
        cur:curriculumRows('Communication (describing and asking about things) · Language Knowledge (He + thing + describing word; He aha tēnei?; nine describing words plus tino) · Cultural Knowledge (noticing and describing the world God made; respect shown in word choice, tawhito for things only)','Recalls Term 2 Weeks 1 to 3 (He aha tēnei? Kei hea te …? He whero te pene) in the warm-up. Prepare real objects of different sizes.'),
        vr:valueRows('Genesis 1:31','God looked at everything he had made and saw that it was very good. When we describe the world carefully, we notice how good it is.','What is something big or beautiful in God’s world that makes you say wow?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Gather real objects to contrast: a big and a small book, a long and a short pencil, a new and an old item, a beautiful bag or picture.','Print the weekly vocab card, one per student.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the macrons and wh: tawhito, ātaahua.'],
        three:'(1) The describing word comes after the thing: <i>He pukapuka nui</i> (literally: a book big). (2) To ask what something is: <i>He aha tēnei?</i> and answer <i>He pukapuka nui tēnei.</i> (3) <i>Tawhito</i> (old) is only for things, never for people.',
        diff:['Echo as a whole class. Use only nui, iti and roa at first, holding up the real object each time. Pair with a confident partner and allow whispering first.','Complete all steps. Use all nine describing words with real objects around the room.','Ask and answer in pairs with all nine words. Add Kei hea te …? from Week 2 (Kei hea te pukapuka nui?) and colours from Week 3 (He pene whero).'],
        look:'Clear vowels and wh as f; He first, then the thing, then the describing word; the right word for the real object; confident holding up and pointing.',
        nx:'revisit the pairs students mix up (nui and iti, hou and tawhito) with real objects; build the pattern He nui te pukapuka in Lesson B.',
        rec:'Term 2 Weeks 1 to 3 (He aha tēnei? Kei hea te …? He whero te pene) are recalled in the warm-up and drama; greetings, thanks and God’s love from Term 1 return in the drama.'
      },
      D: {
        VOC:['nui','iti','roa','poto','hou','tawhito','pai','kino','ātaahua','tino'],
        STEPS:[
          ['Quick recap: What is this? It is a pen. The pen is red.','He|k aha|q tēnei?|a He|k pene|n tēnei.|a He|k whero|q te|a pene.|n','heh AH-hah TEH-neh-ee · heh PEH-neh TEH-neh-ee · heh FEH-roh teh PEH-neh','Term 2 Weeks 1 and 3, stacked.',null,'Whole class'],
          ['nui means big. How would you say: a big book?','He|k pukapuka|n nui.|q*','heh POO-kah-POO-kah NOO-ee','The describing word comes after the thing: a book big.','In English the describing word comes first: a big book. In te reo the thing comes first and the describing word follows: a book big. Take a moment… (wait 3 seconds)… He pukapuka nui. Say it with me, spreading your arms wide.','Echo'],
          ['iti means small. How would you say: a small pen?','He|k pene|n iti.|q*','heh PEH-neh EE-tee','Same frame, new describing word.',null,'Whole class'],
          ['roa means long or tall, and poto means short. How would you say: a long ruler, a short pen?','He|k rūri|n roa.|q* He|k pene|n poto.|q*','heh ROO-ree ROH-ah · heh PEH-neh POH-toh','roa = long or tall, poto = short. The thing still comes first.','Hold your hands wide apart for roa, close together for poto. Say each with me: He rūri roa. He pene poto.','Echo'],
          ['hou means new. How would you say: a new bag?','He|k pēke|n hou.|q*','heh PEH-keh HOH-oo','hou = new.',null,'Whole class'],
          ['tawhito means old, for things. How would you say: an old table?','He|k teepu|n tawhito.|q*','heh TEH-eh-poo TAH-fee-toh','tawhito = old. wh sounds like f. For things only, never for people.','Tawhito means old, and it is only for things. We never call a person tawhito. For our older family and friends we use respectful words like kuia and koroua. Take a moment… (wait 3 seconds)… He teepu tawhito. Say it with me.','Echo'],
          ['pai means good and kino means bad. How would you say: a good book, a bad ruler?','He|k pukapuka|n pai.|q He|k rūri|n kino.|q*','heh POO-kah-POO-kah PIE · heh ROO-ree KEE-noh','pai = good (you know it from Kei te pai ahau), kino = bad or poor.',null,'Whole class'],
          ['ātaahua means beautiful. How would you say: a beautiful bag?','He|k pēke|n ātaahua.|q*','heh PEH-keh AH-tah-AH-hoo-ah','ātaahua = beautiful. Hear two long ā sounds.','Say it slowly in chunks: ā-taa-hua. Then say it with me with your hand on your heart: ātaahua. He pēke ātaahua.','Echo'],
          ['You know tino means very. How would you say: a very big table?','He|k teepu|n tino|q nui.|q*','heh TEH-eh-poo TEE-nor NOO-ee','tino goes before the describing word: very big.','Tino means very, like in Kei te tino pai ahau. It goes just before the describing word: He teepu tino nui. Say it with me and stretch your arms as wide as you can.','Whole class'],
          ['Colours are describing words too! How would you say: a red pen?','He|k pene|n whero.|q*','heh PEH-neh FEH-roh','Last week He whero te pene (the pen is red). Today the thing comes first: a pen red.','Last week we said He whero te pene, the pen is red. Today we say the thing first: a pen red. Both are right, and they say different things. Take a moment… (wait 3 seconds)… He pene whero. Say it with me.','Echo'],
          ['What is this? It is a big book.','He|k aha|q tēnei?|a He|k pukapuka|n nui|q tēnei.|a','heh AH-hah TEH-neh-ee · heh POO-kah-POO-kah NOO-ee TEH-neh-ee','tēnei goes at the end: this.',null,'Whole class'],
          ['Partner game: hold up things in the room. Ask what it is and answer with a describing word.','He|k aha|q tēnei?|a He|k ___|n ___|q tēnei.|a','heh AH-hah TEH-neh-ee · heh ___ ___ TEH-neh-ee','Use real things. Swap after three questions.','Turn to your partner. One person holds up something and asks He aha tēnei? The other answers He ___ ___ tēnei, for example He pene iti tēnei. Swap after three questions. Take 2 minutes.','Pairs'],
          ['Class chain: ask the next person what something is. They answer, say Ka pai!, then ask the next person.','He|k aha|q tēnei?|a He|k ___|n ___|q tēnei.|a Ka~pai!|w','heh AH-hah TEH-neh-ee · heh ___ ___ TEH-neh-ee · kah PIE','Real questions, real answers, with Ka pai! after each.','Pass it around the circle. Each person holds up something and asks the next He aha tēnei? The next person answers He ___ ___ tēnei, says Ka pai!, and asks the next person. If someone is stuck, that’s my fault, not theirs. I’ll help.','Individual']],
        DR:{title:'Ngā Pukapuka — The Books',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! He aha tēnei?','Hello, children! What is this?','(holds up a book)','T2W1'],
          ['Hana','He pukapuka nui tēnei.','This is a big book.','(spreads her arms wide)'],
          ['Kaiako Rose','Āe! Ka pai, Hana! He aha tērā?','Yes! Good, Hana! What is that?','(points across the room)','T2W1'],
          ['Tama','He pene iti tērā.','That is a small pen.','(squints)'],
          ['Hana','He rūri roa tēnei. He pene poto tērā.','This is a long ruler. That is a short pen.','(holds up each one)'],
          ['Tama','He pēke hou tēnei.','This is a new bag.','(shows his bag)'],
          ['Kaiako Rose','He teepu tawhito tērā. He teepu pai!','That is an old table. A good table!','(pats the table)'],
          ['Hana','He pēke ātaahua tēnei! He pēke whero.','This is a beautiful bag! A red bag.','(hand on heart)','T2W3'],
          ['Tama','Kei hea te pukapuka nui?','Where is the big book?','(looks around)','T2W2'],
          ['Kaiako Rose','Kei runga i te teepu.','It is on the table.','(points)','T2W2'],
          ['Tama','Kia ora mō te pukapuka, Kaiako.','Thank you for the book, teacher.','(hand on heart)','T1W9'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God made big things and small things, old things and new things, and he saw that all of it was very good. Let us thank him for everything he made.','T1W9'],
          ['Hana','Ka kite, Kaiako!','See you, teacher!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘a big book.’','He pukapuka nui.'],['What does He pene iti mean?','A small pen.'],['Choose the word for ‘old’: He teepu ____ (hou / tawhito)','tawhito'],['Fix the sentence: ‘He nui pukapuka.’ (It should say: a big book.)','He pukapuka nui.'],['Stretch: hold up something in the room. Ask your partner what it is, then answer your own question with a describing word.','He aha tēnei? He ___ ___ tēnei.']],
        CE:['Putting the describing word before the thing (English order)','Mixing up nui (big) and iti (small)','Mixing up hou (new) and tawhito (old)','Putting the describing word first','Leaving out He or tēnei'],
        T:'T2 W4 Lesson A',
        LP:{title:'He pukapuka nui — A big book',val:'Mōhio · Genesis 1:31',pat:['He ________ ________.','He aha tēnei? He ________ ________ tēnei.','(nui · iti · roa · poto · hou · tawhito · pai · kino · ātaahua)'],swap:'Swap the thing and the describing word: He pukapuka nui. He pene iti. He pēke hou. The describing word comes after the thing. Tawhito (old) is for things only.'}
      }
    };

    // ── Lesson B · He nui te pukapuka — The book is big ──
    const B = {
      P: {
        t:2,
        w:4,
        l:'B',
        ch:'He|k nui|q te|a pukapuka.|n',
        sub:'The book is big. My bag is new. Today we say what things are like and ask about other people’s things.',
        say:'Kia ora everyone! Last lesson we said a big book, a small pen. Today we say what things are like: the book is big, my bag is new, her bag is beautiful. You already know this frame from colours: He whero te pene. Still no writing: listen, think and speak. Have your own bag or pencil case ready.',
        pron:'ngāwari = NGAH-wah-ree · uaua = OO-ah-OO-ah · āhua = AH-hoo-ah',
        li:'say what things are like, whose they are, and ask a friend what their things are like.',
        succ:['I can say what something is like: He nui te pukapuka.','I can ask: He aha te āhua o te pukapuka? and answer.','I can talk about my things, your things and her or his things.'],
        wp:'God has made everything beautiful in its time.',
        ref:'Ecclesiastes 3:11',
        mom:'God has made everything beautiful in its time: big things and small things, old things and new things. When we say what is beautiful and good, we learn to see the world the way God sees it.',
        q:'What is something old or small that you think is beautiful?',
        recall:[['How do you say: a big book.','He pukapuka nui.'],['How do you say: The pen is red.','He whero te pene.'],['How do you say: My bag is yellow.','He kōwhai tōku pēke.']],
        rtag:'Term 2 Weeks 3 and 4',
        rtxt:'Remember when… Weeks 3 and 4 (3 quick prompts)',
        refl:'What is something beautiful you noticed today?',
        next:'Week 5: Days of the week (Ko te Rāhina tēnei rā)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: ngāwari (easy) and uaua (difficult or hard). Say them slowly. Show an easy task and a hard task. Remind students that the thing came first last lesson (He pukapuka nui) and the describing word comes first today (He nui te pukapuka).',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: He first, then the describing word, then te and the thing. Prompt 4: the describing word comes before te.',
        xresc:'Common error: mixing the two patterns. Say: a big book is He pukapuka nui, and the book is big is He nui te pukapuka. Say the second one with te.',
        xpron:'ngāwari = NGAH-wah-ree · uaua = OO-ah-OO-ah · āhua = AH-hoo-ah',
        cur:curriculumRows('Communication (describing things, asking and answering about them, yes or no questions) · Language Knowledge (He + describing word + te + thing; He aha te āhua o …?; tōku, tō and tōna) · Cultural Knowledge (seeing and valuing what God has made; kind and respectful description)','Recalls Weeks 3 and 4 in the warm-up. Prepare real objects and let students use their own bags and pencil cases.'),
        vr:valueRows('Ecclesiastes 3:11','God has made everything beautiful in its time. When we say what is beautiful and good, we learn to see the world the way God sees it.','What is something old or small that you think is beautiful?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add ngāwari (easy) and uaua (difficult) as the two stretch words, written or spoken.','Have students put their own bag, pencil case or book on the desk.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the two patterns side by side: He pukapuka nui and He nui te pukapuka.'],
        three:'(1) The describing word comes first when we say what something is like: <i>He nui te pukapuka</i> (the book is big), the same frame as <i>He whero te pene</i>. (2) To ask: <i>He aha te āhua o te pukapuka?</i> <i>Āhua</i> means what something is like. (3) Swap <i>te</i> for <i>tōku</i> (my), <i>tō</i> (your) or <i>tōna</i> (her or his).',
        diff:['Echo as a whole class. Use only nui, iti and hou at first, holding up the real object each time. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer about real things in pairs with the nine words.','Add the stretch words ngāwari and uaua with mahi (He mahi ngāwari). Describe a friend’s thing and use colours too: He roa te pene whero.'],
        look:'He first, then the describing word, then te or tōku and the thing; the right describing word for the real object; clear vowels (ngāwari, uaua, āhua); students asking He aha te āhua o …? unprompted.',
        nx:'revisit the difference between He pukapuka nui and He nui te pukapuka; move to Week 5 (Days of the week).',
        rec:'Lesson A (He pukapuka nui, He aha tēnei?), Week 3 (He whero te pene, He kōwhai tōku pēke), Week 2 (Kei hea te …?) and Term 1 (Āe, Kāo, thanks and greetings) are recalled in the warm-up, steps and drama.'
      },
      D: {
        VOC:[...A.D.VOC,'ngāwari','uaua'],
        STEPS:[
          ['Quick recap: a big book, a small pen, a new bag.','He|k pukapuka|n nui.|q He|k pene|n iti.|q He|k pēke|n hou.|q','heh POO-kah-POO-kah NOO-ee · heh PEH-neh EE-tee · heh PEH-keh HOH-oo','Lesson A, stacked.',null,'Whole class'],
          ['You know He whero te pene: the pen is red. Use the same frame. How would you say: The book is big?','He|k nui|q te|a pukapuka.|n*','heh NOO-ee teh POO-kah-POO-kah','Same frame as colours: He + describing word + te + thing.','Last lesson we said a big book, He pukapuka nui. Now we say the book is big. It works just like colours: He whero te pene, the pen is red. Swap the colour for nui and say the thing last. Take a moment… (wait 3 seconds)… He nui te pukapuka. Say it with me.','Echo'],
          ['The pen is small.','He|k iti|q te|a pene.|n*','heh EE-tee teh PEH-neh','Same frame, new describing word.',null,'Whole class'],
          ['The ruler is long. The pen is short.','He|k roa|q te|a rūri.|n* He|k poto|q te|a pene.|n*','heh ROH-ah teh ROO-ree · heh POH-toh teh PEH-neh','Describing word first, thing last.',null,'Echo'],
          ['You know tōku means my. How would you say: My bag is new?','He|k hou|q tōku|a* pēke.|n','heh HOH-oo TOH-koo PEH-keh','Swap te for tōku. The describing word still comes first.','You know tōku from He kōwhai tōku pēke. Take away the te and put tōku instead. Take a moment… (wait 3 seconds)… He hou tōku pēke. Say it, holding up your own bag.','Echo'],
          ['Your bag is big. (tō means your)','He|k nui|q tō|a* pēke.|n','heh NOO-ee TOH PEH-keh','tō = your.',null,'Whole class'],
          ['Her bag is beautiful. (tōna means her or his)','He|k ātaahua|q tōna|a* pēke.|n','heh AH-tah-AH-hoo-ah TOH-nah PEH-keh','tōna = her or his. Same word, different person.','Point to a friend’s bag and say it: He ātaahua tōna pēke. Tōna means her or his.','Whole class'],
          ['Yes or no: Is the book big? Yes, it is big. No, it is small.','He|k nui|q te|a pukapuka?|n Āe,|w he|k nui.|q Kāo,|w he|k iti.|q','heh NOO-ee teh POO-kah-POO-kah? · AH-eh, heh NOO-ee · KAH-oh, heh EE-tee','Question with a rising voice, then Āe or Kāo.',null,'Whole class'],
          ['Now ask what something is like. āhua means what something is like. How would you say: What is the book like?','He|k aha|q te|a āhua|n* o|a te|a pukapuka?|n','heh AH-hah teh AH-hoo-ah or teh POO-kah-POO-kah','He aha te āhua o … = what is … like? Just like He aha te tae o … for colours.','You know He aha te tae o te pene, what colour is the pen. Swap tae for āhua, which means what something is like. Take a moment… (wait 3 seconds)… He aha te āhua o te pukapuka? Say it with me, holding up a book.','Echo'],
          ['Ask and answer: What is the bag like? The bag is new.','He|k aha|q te|a āhua|n o|a te|a pēke?|n He|k hou|q te|a pēke.|n','heh AH-hah teh AH-hoo-ah or teh PEH-keh · heh HOH-oo teh PEH-keh','Ask the question, then answer with the frame.',null,'Whole class'],
          ['Partner game: ask your partner what their things are like. Answer about your own things.','He|k aha|q te|a āhua|n o|a tō|a ___?|n He|k ___|q tōku|a ___.|n','heh AH-hah teh AH-hoo-ah or TOH ___ · heh ___ TOH-koo ___','Use real things. Swap after three questions.','Turn to your partner. One person asks He aha te āhua o tō ___? (pēke, pene, pukapuka). The other answers He ___ tōku ___. Look at the real thing to check. Swap after three questions. Take 2 minutes.','Pairs'],
          ['Add a colour. How would you say: The red pen is long?','He|k roa|q te|a pene|n whero.|q','heh ROH-ah teh PEH-neh FEH-roh','te pene whero = the red pen. Weeks 3 and 4 together.',null,'Whole class'],
          ['Two stretch words: ngāwari means easy and uaua means hard. How would you say: an easy job, a hard job?','He|k mahi|n ngāwari.|q* He|k mahi|n uaua.|q*','heh MAH-hee NGAH-wah-ree · heh MAH-hee OO-ah-OO-ah','mahi = work or job, from Term 1 Week 5.','You know mahi from Kei te mahi ahau, I am working. A job is a mahi. Say it with me: He mahi ngāwari. He mahi uaua.','Echo'],
          ['Class chain: ask the next person what their thing is like. They answer about their own thing, then ask the next person.','He|k aha|q te|a āhua|n o|a tō|a ___?|n He|k ___|q tōku|a ___.|n Ka~pai!|w','heh AH-hah teh AH-hoo-ah or TOH ___ · heh ___ TOH-koo ___ · kah PIE','Real things, real questions.','Pass it around the circle. Each person asks the next He aha te āhua o tō ___? (pēke, pene, pukapuka). The next person answers He ___ tōku ___, says Ka pai!, and asks the next. If someone is stuck, that’s my fault, not theirs. I’ll help.','Individual']],
        DR:{title:'Te Pēke Hou — The New Bag',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! He aha te āhua o tō pēke, Hana?','Hello, children! What is your bag like, Hana?','(holds up a bag)','T1W1'],
          ['Hana','He nui tōku pēke. He kōwhai tōku pēke.','My bag is big. My bag is yellow.','(holds it up)','T2W3'],
          ['Kuia Mere','He aha te āhua o tō pēke, Tama?','What is your bag like, Tama?','(turns to Tama)'],
          ['Tama','He iti tōku pēke. He hou tōku pēke.','My bag is small. My bag is new.','(shows his bag)'],
          ['Hana','He ātaahua tō pēke, Tama!','Your bag is beautiful, Tama!','(smiles)'],
          ['Tama','Kia ora, Hana! Kei te harikoa ahau!','Thank you, Hana! I am happy!','(grins)','T1W2'],
          ['Kuia Mere','He aha te āhua o te teepu?','What is the table like?','(taps the table)'],
          ['Hana','He tawhito te teepu. He roa te teepu.','The table is old. The table is long.','(spreads her arms)'],
          ['Tama','Kei hea te pukapuka, Kuia?','Where is the book, Kuia?','(looks around)','T2W2'],
          ['Kuia Mere','Kei runga i te teepu. He nui te pukapuka!','It is on the table. The book is big!','(lifts the book)','T2W2'],
          ['Hana','He mahi uaua tēnei!','This is a hard job!','(pretends to struggle)'],
          ['Kuia Mere','Kāo, he mahi ngāwari! E aroha ana te Atua ki a koutou.','No, an easy job! God loves all of you.','(to the audience, in English) God has made everything beautiful in its time, big and small, old and new. He made you too, and he loves you.','T1W9'],
          ['Hana','Ka kite, Kuia!','See you, Kuia!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘The book is big.’','He nui te pukapuka.'],['What does He aha te āhua o te pēke? mean?','What is the bag like?'],['Choose the word for ‘new’: He ____ tōku pēke. (hou / tawhito)','hou'],['Fix the sentence: ‘Te pukapuka nui.’ (It should say: The book is big.)','He nui te pukapuka.'],['Stretch: ask a partner what their bag is like, then tell them what yours is like.','He aha te āhua o tō pēke? He ___ tōku pēke.']],
        CE:['Mixing up He nui te pukapuka (the book is big) and He pukapuka nui (a big book)','Leaving out o in the question','Mixing up hou (new) and tawhito (old)','Leaving out He and the describing word order','Mixing up tōku (my) and tō (your)'],
        T:'T2 W4 Lesson B',
        LP:{title:'He nui te pukapuka — The book is big',val:'Mōhio · Ecclesiastes 3:11',pat:['He ________ te ________.','He aha te āhua o te ________?','He ________ tōku ________.'],swap:'Swap the describing word and the thing, and choose te, tōku (my), tō (your) or tōna (her or his): He nui te pukapuka. He hou tōku pēke. He ātaahua tōna pēke. Stretch: ngāwari · uaua.'}
      }
    };

    addLessons({ '2.4.A': A, '2.4.B': B });
  }

  /* ──────── WEEK 5 · Days of the week ──────── */
  {
    addGlossary({
      "rā":["day (also sun)","RAH",5,2],
      "tēnei rā":["today / this day","TEH-neh-ee RAH",5,2],
      "he aha te rā i tēnei rā":["what day is it today","heh AH-hah teh RAH ee TEH-neh-ee RAH",5,2],
      "rāhina":["Monday","RAH-hee-nah",5,2],
      "rātū":["Tuesday","RAH-too",5,2],
      "rāapa":["Wednesday","RAH-ah-pah",5,2],
      "rāpare":["Thursday","RAH-pah-reh",5,2],
      "rāmere":["Friday","RAH-meh-reh",5,2],
      "rāhoroi":["Saturday","RAH-hoh-roy",5,2],
      "rātapu":["Sunday (a special, set-apart day)","RAH-tah-poo",5,2],
      "ināianei":["now","ee-NAH-ee-ah-nay",5,2],
      "wiki":["week","WEE-kee",5,2],
      "ngā":["the (more than one)","NGAH",5,2]
    });

    // ── Lesson A · Ko te Rāhina tēnei rā — Today is Monday ──
    const A = {
      P: {
        t:2,
        w:5,
        l:'A',
        ch:'Ko|k te|a Rāhina|n tēnei|q rā.|a',
        sub:'Monday, Tuesday, Wednesday… Today we learn the seven days of the week and say what day it is today.',
        say:'Kia ora everyone! So far in Term 2 we have said what things are, where they are, what colour they are and what they are like. Today we say what day it is. Have the class calendar or a weekly timetable ready to point to. Still no writing: listen, think and speak. Each day has its own name, and the first part of every name is the same, rā, which means day.',
        pron:'rā = RAH · Rāhina = RAH-hee-nah · Rātū = RAH-too · Rāapa = RAH-ah-pah · Rāhoroi = RAH-hoh-roy',
        li:'say the seven days of the week in te reo and say and ask what day it is today.',
        succ:['I can say three days in te reo: Rāhina, Rātū, Rāapa.','I can say what day it is today: Ko te Rāhina tēnei rā.','I can ask and answer: He aha te rā i tēnei rā? Ko te Rāmere tēnei rā.'],
        wp:'On the seventh day God rested from his work and made that day holy.',
        ref:'Genesis 2:2-3',
        mom:'God made our days and gave us a rhythm of work and rest. Each day of the week is a gift from him, and the seventh day is a special day, set apart for rest and worship. When we name our days, we remember who gave them to us.',
        q:'What is one thing you are thankful for on a school day, and one on a rest day?',
        recall:[['How do you say: What is this? It is a big book.','He aha tēnei? He pukapuka nui tēnei.'],['How do you say: The pen is red.','He whero te pene.'],['How do you say: Where is the pen? It is on the table.','Kei hea te pene? Kei runga i te teepu.']],
        rtag:'Term 2 Weeks 2 to 4',
        rtxt:'Remember when… Term 2 Weeks 2 to 4 (3 quick prompts)',
        refl:'Which day of the week are you most thankful for, and why?',
        next:'Lesson B: is today Tuesday? (Ko te Rātū tēnei rā?)',
        vsay:'Say each day and the class echoes. Point to each day on the calendar or timetable as you say it, and clap the beats. Use gestures: rā = hands make a circle like the sun, Rāhina to Rāmere = tap five fingers, Rāhoroi = wash your hands (horoi means wash), Rātapu = hands together. Remember the long ā in every day name. rā also means sun, so we say tēnei rā for today and the sun is also rā, and the sentence tells us which one.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Ko first, then te, the day name, tēnei and rā. Prompt 4: Ko at the start.',
        xresc:'Common error: leaving out Ko. Say: ko points at which day it is, just like Ko Sam ahau points at who I am: Ko te Rāhina tēnei rā.',
        xpron:'Rāapa = RAH-ah-pah · Rāhoroi = RAH-hoh-roy · ināianei = ee-NAH-ee-ah-nay',
        cur:curriculumRows('Communication (saying and asking what day it is) · Language Knowledge (Ko te + day + tēnei rā; He aha te rā i tēnei rā?; the seven days; ināianei) · Cultural Knowledge (the rhythm of the week and the seventh day of rest)','Mathematics and Health link: days, weeks and routines. Recalls Term 2 Weeks 2 to 4 in the warm-up. Have the class calendar ready.'),
        vr:valueRows('Genesis 2:2-3','God rested on the seventh day and made it holy. Each day is a gift from him, and when we name our days, we remember who gave them to us.','What is one thing you are thankful for on a school day, and one on a rest day?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Have a class calendar or weekly timetable ready to point to, with each day clearly shown.','Print the weekly vocab card, one per student.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the long ā in every day name and the endings: Rāhoroi (RAH-hoh-roy), Rāapa (RAH-ah-pah).'],
        three:'(1) Every day starts with <i>Rā</i> (day). (2) To say what day it is: <i>Ko te Rāhina tēnei rā</i> (Monday this day). (3) To ask: <i>He aha te rā i tēnei rā?</i> (What is the day on this day?) Answer with <i>Ko te … tēnei rā.</i>',
        diff:['Echo as a whole class. Use only Rāhina, Rātū and Rāapa at first, pointing to the real day. Pair with a confident partner and allow whispering first.','Complete all steps. Say all seven days in order and ask and answer with a partner.','Say the days backwards or from any day. Add ināianei: Kei te mahi ahau ināianei. Add colours or describing words: He rā pai tēnei.'],
        look:'Clear vowels, with the long ā in every day; Ko first, then te, the day, tēnei rā; the right day for the real calendar; confident pointing.',
        nx:'revisit the days students mix up (Rāpare and Rāmere, Rātū and Rāhina) by pointing to the calendar; build yes or no questions in Lesson B.',
        rec:'Term 2 Weeks 2 to 4 (He aha tēnei? Kei hea te …? He whero te pene) are recalled in the warm-up and drama; feelings and greetings from Term 1 return in the drama.'
      },
      D: {
        VOC:['rā','rāhina','rātū','rāapa','rāpare','rāmere','rāhoroi','rātapu','ināianei','he aha te rā i tēnei rā'],
        STEPS:[
          ['Quick recap: What is this? It is a big book.','He|k aha|q tēnei?|a He|k pukapuka|n nui|q tēnei.|a','heh AH-hah TEH-neh-ee · heh POO-kah-POO-kah NOO-ee TEH-neh-ee','Term 2 Weeks 1 and 4, stacked.',null,'Whole class'],
          ['rā means day. How would you say: this day, or today?','tēnei|q rā|n*','TEH-neh-ee RAH','rā = day. tēnei rā = this day, so today.','Rā means day. You know tēnei from He aha tēnei? What is this. Together, tēnei rā means this day, so today. Take a moment… (wait 3 seconds)… tēnei rā. Say it with me.','Echo'],
          ['Monday is Rāhina. How would you say: Today is Monday?','Ko|k te|a Rāhina|n* tēnei|q rā.|a','kor teh RAH-hee-nah TEH-neh-ee RAH','Ko points at which day it is, like Ko Sam ahau.','You know ko from Ko Sam ahau, which points at who someone is. Here it points at which day today is. Take a moment… (wait 3 seconds)… Ko te Rāhina tēnei rā. Say it with me, and point to Monday on the calendar.','Echo'],
          ['Tuesday is Rātū. How would you say: Today is Tuesday?','Ko|k te|a Rātū|n* tēnei|q rā.|a','kor teh RAH-too TEH-neh-ee RAH','Same frame, new day.',null,'Whole class'],
          ['Wednesday is Rāapa. How would you say: Today is Wednesday?','Ko|k te|a Rāapa|n* tēnei|q rā.|a','kor teh RAH-ah-pah TEH-neh-ee RAH','Hold both a sounds: Rā-a-pa.',null,'Whole class'],
          ['Thursday is Rāpare and Friday is Rāmere. How would you say: Today is Thursday. Today is Friday.','Ko|k te|a Rāpare|n* tēnei|q rā.|a Ko|k te|a Rāmere|n* tēnei|q rā.|a','kor teh RAH-pah-reh TEH-neh-ee RAH · kor teh RAH-meh-reh TEH-neh-ee RAH','Rāpare = Thursday, Rāmere = Friday.','Thursday is Rāpare and Friday is Rāmere. Tap four fingers, then five. Say each with me: Ko te Rāpare tēnei rā. Ko te Rāmere tēnei rā.','Echo'],
          ['Saturday is Rāhoroi and Sunday is Rātapu. How would you say: Today is Saturday. Today is Sunday.','Ko|k te|a Rāhoroi|n* tēnei|q rā.|a Ko|k te|a Rātapu|n* tēnei|q rā.|a','kor teh RAH-hoh-roy TEH-neh-ee RAH · kor teh RAH-tah-poo TEH-neh-ee RAH','Rātapu has tapu in it: a special, set-apart day.','Rāhoroi is Saturday. Rātapu is Sunday, and you can hear tapu in it, which means special or set apart. In our Bible reading, God made the seventh day special. Say each one with me.','Echo'],
          ['Say all seven days in order, with a clap on each one.','Rāhina|n Rātū|n Rāapa|n Rāpare|n Rāmere|n Rāhoroi|n Rātapu|n','RAH-hee-nah · RAH-too · RAH-ah-pah · RAH-pah-reh · RAH-meh-reh · RAH-hoh-roy · RAH-tah-poo','Point to each day on the calendar as you say it.','Say all seven days together, slowly, clapping on each one. Then say them again a little faster. Point to each day on the calendar so everyone can see.','Whole class'],
          ['Now ask: What day is it today?','He|k aha|q te|a rā|n* i|a tēnei|q rā?|a','heh AH-hah teh RAH ee TEH-neh-ee RAH','He aha te … = what is the …? You know He aha tēnei? from Week 1.','You know He aha tēnei? What is this. Add te rā and i tēnei rā: what is the day on this day? Take a moment… (wait 3 seconds)… He aha te rā i tēnei rā? Say it with me, pointing to the calendar.','Echo'],
          ['Ask and answer: What day is it today? Today is Wednesday.','He|k aha|q te|a rā|n i|a tēnei|q rā?|a Ko|k te|a Rāapa|n tēnei|q rā.|a','heh AH-hah teh RAH ee TEH-neh-ee RAH · kor teh RAH-ah-pah TEH-neh-ee RAH','Ask the question, then answer with the frame.',null,'Whole class'],
          ['ināianei means now. How would you say: I am working now?','Kei|k te|a mahi|n ahau|p ināianei.|q*','kay teh MAH-hee ah-HOW ee-NAH-ee-ah-nay','Term 1 Week 5: Kei te mahi ahau. Add ināianei at the end: now.','You know Kei te mahi ahau, I am working. Add ināianei at the end and it means I am working now. Take a moment… (wait 3 seconds)… Kei te mahi ahau ināianei. Say it with me.','Echo'],
          ['Partner game: choose a day on the calendar. Ask your partner what day it is and answer.','He|k aha|q te|a rā|n i|a tēnei|q rā?|a Ko|k te|a ___|n tēnei|q rā.|a','heh AH-hah teh RAH ee TEH-neh-ee RAH · kor teh ___ TEH-neh-ee RAH','Point to the day on the calendar each time.','Turn to your partner. One person points to a day on the calendar and asks He aha te rā i tēnei rā? The other answers Ko te ___ tēnei rā. Swap after three days. Take 2 minutes.','Pairs'],
          ['Class chain: point to a day, ask the next person what day it is. They answer, say Ka pai!, then ask the next person.','He|k aha|q te|a rā|n i|a tēnei|q rā?|a Ko|k te|a ___|n tēnei|q rā.|a Ka~pai!|w','heh AH-hah teh RAH ee TEH-neh-ee RAH · kor teh ___ TEH-neh-ee RAH · kah PIE','Real questions, real answers, with Ka pai! after each.','Pass it around the circle. Each person points to a different day on the calendar and asks the next He aha te rā i tēnei rā? The next person answers Ko te ___ tēnei rā, says Ka pai!, and asks the next person. If someone is stuck, that’s my fault, not theirs. I’ll help.','Individual']],
        DR:{title:'Te Wiki Hou — A New Week',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! He aha te rā i tēnei rā?','Hello, children! What day is it today?','(points to the calendar)','T1W1'],
          ['Hana','Ko te Rāhina tēnei rā.','Today is Monday.','(holds up the calendar)'],
          ['Kaiako Rose','Āe! Ka pai, Hana! Kei te pēhea koe?','Yes! Good, Hana! How are you?','','T1W2'],
          ['Hana','Kei te ngenge ahau. Ko te Rāhina tēnei rā!','I am tired. Today is Monday!','(yawns)','T1W2'],
          ['Tama','Ko te Rāmere tēnei rā!','Today is Friday!','(grins, cheeky)'],
          ['Kaiako Rose','Kāo, Tama! Ko te Rāhina tēnei rā.','No, Tama! Today is Monday.','(laughs)'],
          ['Tama','Rātū, Rāapa, Rāpare, Rāmere!','Tuesday, Wednesday, Thursday, Friday!','(counts on his fingers)'],
          ['Hana','Rāhoroi, Rātapu!','Saturday, Sunday!','(jumps up)'],
          ['Kaiako Rose','Ka pai, tamariki! He rā pai tēnei.','Good, children! This is a good day.','(smiles)','T2W4'],
          ['Tama','Kei te kai ahau ināianei.','I am eating now.','(pretends to eat)','T1W5'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God made the days of the week, and on the seventh day he rested and made it holy. Every day is a gift from him.','T1W9'],
          ['Hana','Ka kite, Kaiako!','See you, teacher!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘Today is Monday.’','Ko te Rāhina tēnei rā.'],['What does He aha te rā i tēnei rā? mean?','What day is it today?'],['Choose the word for Friday: Rāmere / Rāpare','Rāmere'],['Fix the sentence: ‘Te Rātū tēnei rā.’ (It should say: Today is Tuesday.)','Ko te Rātū tēnei rā.'],['Stretch: ask your partner what day it is today, then answer.','He aha te rā i tēnei rā? Ko te ___ tēnei rā.']],
        CE:['Leaving out Ko','Mixing up the question and the answer','Mixing up Rāpare (Thursday) and Rāmere (Friday)','Leaving out Ko at the start','Mixing up the day names'],
        T:'T2 W5 Lesson A',
        LP:{title:'Ko te Rāhina tēnei rā — Today is Monday',val:'Mōhio · Genesis 2:2-3',pat:['Ko te ________ tēnei rā.','He aha te rā i tēnei rā?','Kei te ________ ahau ināianei.'],swap:'Swap the day: Rāhina · Rātū · Rāapa · Rāpare · Rāmere · Rāhoroi · Rātapu. Rā means day.'}
      }
    };

    // ── Lesson B · Ko te Rātū tēnei rā? — Is today Tuesday? ──
    const B = {
      P: {
        t:2,
        w:5,
        l:'B',
        ch:'Ko|k te|a Rātū|n tēnei|q rā?|a',
        sub:'Is today Tuesday? Today we ask yes or no questions about the day and say what kind of day it is.',
        say:'Kia ora everyone! Last lesson we said what day it is. Today we ask yes or no questions about the day, and we say what kind of day it is: a good day, a beautiful day. You already know describing words from last week. Have the class calendar ready. Still no writing: listen, think and speak.',
        pron:'wiki = WEE-kee · ngā = NGAH · Ko te Rātū tēnei rā? = kor teh RAH-too TEH-neh-ee RAH',
        li:'ask and answer yes or no questions about what day it is, and say what kind of day it is.',
        succ:['I can answer yes or no: Āe, ko te Rātū tēnei rā.','I can ask: Ko te Rāpare tēnei rā?','I can say what kind of day it is: He rā pai tēnei.'],
        wp:'This is the day the Lord has made.',
        ref:'Psalm 118:24',
        mom:'The psalm says, ‘This is the day the Lord has made; let us rejoice and be glad in it.’ Every day is a gift from God, and we can be glad in it, whether it is a school day or a rest day.',
        q:'What is one thing you can be glad about today?',
        recall:[['How do you say: Today is Monday.','Ko te Rāhina tēnei rā.'],['How do you say: What day is it today?','He aha te rā i tēnei rā?'],['How do you say: The book is big.','He nui te pukapuka.']],
        rtag:'Term 2 Weeks 4 and 5',
        rtxt:'Remember when… Weeks 4 and 5 (3 quick prompts)',
        refl:'What are you glad about today?',
        next:'Week 6: Weather and seasons (Kei te ua)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: wiki (week) and ngā (the, for more than one thing). Together they make ngā rā o te wiki, the days of the week. Say them slowly and point to the whole week on the calendar.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: the question uses the same words as the statement, with a rising voice. Prompt 3: pai (good).',
        xresc:'Common error: forgetting Āe or Kāo. Say: yes is Āe and no is Kāo, then say the full answer.',
        xpron:'wiki = WEE-kee · ngā = NGAH',
        cur:curriculumRows('Communication (yes or no questions about the day, saying what kind of day it is) · Language Knowledge (Ko te + day + tēnei rā?; Āe/Kāo; He rā pai tēnei; ngā rā o te wiki) · Cultural Knowledge (gratitude for each day; a rhythm of work and rest)','Recalls Weeks 4 and 5 in the warm-up. Describing words from Week 4 return: He rā ātaahua tēnei.'),
        vr:valueRows('Psalm 118:24','This is the day the Lord has made. Every day is a gift from God, and we can be glad in it.','What is one thing you can be glad about today?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add wiki (week) and ngā (the, for more than one) as the two stretch words, written or spoken.','Have the class calendar or weekly timetable ready to point to.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the question voice: the same words as the statement, with your voice going up.'],
        three:'(1) A yes or no question uses the same words as the statement, but your voice goes up: <i>Ko te Rātū tēnei rā?</i> (2) Answer <i>Āe</i> or <i>Kāo</i>, then the full sentence. (3) <i>He rā pai tēnei</i> (this is a good day) uses the describing words from Week 4: the describing word comes after the thing.',
        diff:['Echo as a whole class. Use only three or four days at first, pointing to the real calendar each time. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer yes or no questions about all seven days in pairs.','Add wiki and ngā: ngā rā o te wiki. Say what kind of day it is with a describing word from Week 4: He rā ātaahua tēnei.'],
        look:'Rising voice for questions; Āe and Kāo used naturally; Ko te + day + tēnei rā in the right order; He rā pai tēnei with the describing word after the thing; confident pointing.',
        nx:'revisit the days students mix up with the calendar; move to Week 6 (Weather and seasons).',
        rec:'Lesson A (Ko te Rāhina tēnei rā, He aha te rā i tēnei rā?), Week 4 (He nui te pukapuka, He rā pai), Week 3 (colours) and Term 1 (Āe, Kāo, Kei te harikoa, Ka kite) are recalled in the warm-up, steps and drama.'
      },
      D: {
        VOC:[...A.D.VOC,'wiki','ngā'],
        STEPS:[
          ['Quick recap: Today is Monday. What day is it today?','Ko|k te|a Rāhina|n tēnei|q rā.|a He|k aha|q te|a rā|n i|a tēnei|q rā?|a','kor teh RAH-hee-nah TEH-neh-ee RAH · heh AH-hah teh RAH ee TEH-neh-ee RAH','Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Is today Monday?','Ko|k te|a Rāhina|n tēnei|q rā?|a*','kor teh RAH-hee-nah TEH-neh-ee RAH','The same words as a statement, but your voice goes up.','Last lesson we said Ko te Rāhina tēnei rā. Say the same words, but lift your voice at the end, and it becomes a question. Take a moment… (wait 3 seconds)… Ko te Rāhina tēnei rā? Say it with me.','Echo'],
          ['How would you say: Yes, today is Monday.','Āe,|w* ko|k te|a Rāhina|n tēnei|q rā.|a','AH-eh, kor teh RAH-hee-nah TEH-neh-ee RAH','Āe = yes, then the full sentence.',null,'Echo'],
          ['How would you say: No, today is Tuesday.','Kāo,|w* ko|k te|a Rātū|n tēnei|q rā.|a','KAH-oh, kor teh RAH-too TEH-neh-ee RAH','Kāo = no, then say what day it really is.',null,'Echo'],
          ['Ask: Is today Friday? Answer: No, today is Wednesday.','Ko|k te|a Rāmere|n tēnei|q rā?|a Kāo,|w ko|k te|a Rāapa|n tēnei|q rā.|a','kor teh RAH-meh-reh TEH-neh-ee RAH? · KAH-oh, kor teh RAH-ah-pah TEH-neh-ee RAH','Question, then Kāo, then the real day.',null,'Whole class'],
          ['Partner game: guess the day. One person says a day as a question, the other says Āe or Kāo and answers.','Ko|k te|a ___|n tēnei|q rā?|a Āe/Kāo,|w ko|k te|a ___|n tēnei|q rā.|a','kor teh ___ TEH-neh-ee RAH? · AH-eh / KAH-oh, kor teh ___ TEH-neh-ee RAH','Point to the calendar to check the real day.','Turn to your partner. One person asks Ko te ___ tēnei rā? with a day from the calendar. The other says Āe or Kāo and says the real day. Swap after three questions. Take 2 minutes.','Pairs'],
          ['You know pai means good, and describing words come after the thing. How would you say: This is a good day?','He|k rā|n pai|q tēnei.|a*','heh RAH PIE TEH-neh-ee','He + thing + describing word + tēnei. Like He pukapuka nui tēnei.','Last week we said He pukapuka nui tēnei, this is a big book. A day is a rā, so a good day is rā pai. Take a moment… (wait 3 seconds)… He rā pai tēnei. Say it with me.','Echo'],
          ['How would you say: This is a beautiful day.','He|k rā|n ātaahua|q tēnei.|a','heh RAH AH-tah-AH-hoo-ah TEH-neh-ee','Same frame, new describing word from Week 4.',null,'Whole class'],
          ['How would you say: Today is Friday. I am happy.','Ko|k te|a Rāmere|n tēnei|q rā.|a Kei|k te|a harikoa|n ahau.|p','kor teh RAH-meh-reh TEH-neh-ee RAH · kay teh HAH-ree-KOR-ah ah-HOW','Term 1 Week 2’s Kei te harikoa ahau joins today’s frame.',null,'Pairs'],
          ['Two stretch words: wiki means week and ngā means the, for more than one. How would you say: the days of the week?','ngā|a* rā|n o|a te|a wiki|n*','NGAH RAH or teh WEE-kee','ngā rā = the days. o te wiki = of the week.','Wiki means week, and ngā means the, when there is more than one. Ngā rā means the days. Ngā rā o te wiki means the days of the week. Say it with me, pointing to the whole week on the calendar.','Echo'],
          ['Say the days of the week together, with a clap on each one.','Rāhina|n Rātū|n Rāapa|n Rāpare|n Rāmere|n Rāhoroi|n Rātapu|n','RAH-hee-nah · RAH-too · RAH-ah-pah · RAH-pah-reh · RAH-meh-reh · RAH-hoh-roy · RAH-tah-poo','Lesson A’s days, a little faster.',null,'Whole class'],
          ['How would you say: Hello, I am Sam. Today is Wednesday. This is a beautiful day.','Kia~ora.|w Ko|k Sam|p ahau.|a Ko|k te|a Rāapa|n tēnei|q rā.|a He|k rā|n ātaahua|q tēnei.|a','KEE-ah OR-ah. kor Sam ah-HOW. kor teh RAH-ah-pah TEH-neh-ee RAH. heh RAH AH-tah-AH-hoo-ah TEH-neh-ee','Term 1 Week 1, Lesson A and Week 4 together.',null,'Pairs'],
          ['Class chain: greet, say your name, say what day it is and what kind of day it is, ask the next person, say goodbye.','Kia~ora.|w Ko|k ___|p ahau.|a Ko|k te|a ___|n tēnei|q rā.|a He|k rā|n ___|q tēnei.|a Ka~kite!|w','KEE-ah OR-ah… kor ___ ah-HOW… kor teh ___ TEH-neh-ee RAH… heh RAH ___ TEH-neh-ee… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person turns to the next, greets them, says their name and what day it is, and says what kind of day it is. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Rā Pai — A Good Day',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! He aha te rā i tēnei rā, Hana?','Hello, children! What day is it today, Hana?','(points to the calendar)','T1W1'],
          ['Hana','Ko te Rāapa tēnei rā.','Today is Wednesday.','(points)'],
          ['Kuia Mere','Ko te Rāpare tēnei rā?','Is today Thursday?','(teasing, tilting her head)'],
          ['Tama','Kāo! Ko te Rāapa tēnei rā!','No! Today is Wednesday!','(waves his arms)'],
          ['Kuia Mere','Āe! Ka pai, Tama! He rā pai tēnei.','Yes! Good, Tama! This is a good day.','(smiles)','T2W4'],
          ['Hana','He rā ātaahua tēnei! Kei te harikoa ahau.','This is a beautiful day! I am happy.','(spins around)','T1W2'],
          ['Tama','Ko ngā rā o te wiki: Rāhina, Rātū, Rāapa, Rāpare, Rāmere, Rāhoroi, Rātapu.','The days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.','(counts on his fingers)'],
          ['Kuia Mere','Ka pai! Kei te pēhea koe, Hana?','Good! How are you, Hana?','','T1W2'],
          ['Hana','Kei te pai ahau. Kei hea te pukapuka nui?','I am well. Where is the big book?','(looks around)','T2W2'],
          ['Kuia Mere','Kei runga i te teepu.','It is on the table.','(points)','T2W2'],
          ['Tama','Kia ora mō te rā pai, Kuia.','Thank you for the good day, Kuia.','(hand on heart)','T1W9'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) This is the day the Lord has made. Let us rejoice and be glad in it.','T1W9'],
          ['Hana','Ka kite, Kuia!','See you, Kuia!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘Is today Tuesday?’','Ko te Rātū tēnei rā?'],['What does Kāo, ko te Rāapa tēnei rā mean?','No, today is Wednesday.'],['Choose the word for ‘good’: He rā ____ tēnei. (pai / nui)','pai'],['Say in te reo: ‘This is a beautiful day.’','He rā ātaahua tēnei.'],['Stretch: say hello, your name, what day it is and what kind of day it is.','Kia ora. Ko ___ ahau. Ko te ___ tēnei rā. He rā ___ tēnei.']],
        CE:['Forgetting a question is the same words with a rising voice','Forgetting Āe or Kāo','Mixing up pai (good) and nui (big)','Putting the describing word before rā','Missing part of the introduction'],
        T:'T2 W5 Lesson B',
        LP:{title:'Ko te Rātū tēnei rā? — Is today Tuesday?',val:'Mōhio · Psalm 118:24',pat:['Ko te ________ tēnei rā?','Āe / Kāo, ko te ________ tēnei rā.','He rā ________ tēnei.'],swap:'Swap the day and the describing word: Ko te Rātū tēnei rā? He rā pai tēnei. He rā ātaahua tēnei. Stretch: wiki · ngā (ngā rā o te wiki).'}
      }
    };

    addLessons({ '2.5.A': A, '2.5.B': B });
  }

  /* ──────── WEEK 6 · Weather & seasons ──────── */
  {
    addGlossary({
      "ua":["rain / raining","OO-ah",6,2],
      "hau":["wind / windy","HOW",6,2],
      "kapua":["cloud / cloudy","KAH-poo-ah",6,2],
      "rangi":["sky / weather","RAH-ngee",6,2],
      "kei te pēhea te rangi":["how is the weather","kay teh PEH-heh-ah teh RAH-ngee",6,2],
      "raumati":["summer","ROW-mah-tee",6,2],
      "ngahuru":["autumn","NGAH-hoo-roo",6,2],
      "hōtoke":["winter","HOR-toh-keh",6,2],
      "kōanga":["spring","KOR-ah-ngah",6,2],
      "hukarere":["snow / snowing","HOO-kah-REH-reh",6,2],
      "paki":["fine / clear (weather)","PAH-kee",6,2]
    });

    // ── Lesson A · Kei te ua — It is raining ──
    const A = {
      P: {
        t:2,
        w:6,
        l:'A',
        ch:'Kei~te|k ua.|n',
        sub:'Rain, wind, cloud, hot and cold. Today we say what the weather is like and name the four seasons.',
        say:'Kia ora everyone! Last week we said what day it is. Today we say what the weather is like. Look out the window: what is the weather doing? You already know kei te from feelings and actions, so today you will be surprised how much you can already say. Still no writing: listen, think and speak. Have a few weather pictures ready, or look outside together.',
        pron:'ua = OO-ah · hau = HOW · kapua = KAH-poo-ah · rangi = RAH-ngee · raumati = ROW-mah-tee · ngahuru = NGAH-hoo-roo · hōtoke = HOR-toh-keh · kōanga = KOR-ah-ngah',
        li:'say what the weather is like and say and ask how the weather is, and name the four seasons.',
        succ:['I can say three weather words in te reo: ua, hau, makariri.','I can say what the weather is like: Kei te ua. Kei te makariri te rangi.','I can ask and answer: Kei te pēhea te rangi? Kei te wera te rangi.'],
        wp:'God covers the sky with clouds and supplies the earth with rain.',
        ref:'Psalm 147:8',
        mom:'Rain, wind, cloud and sunshine all come from God’s hand. The weather is part of how he looks after his world, and when we say what the weather is like, we notice his care and give the glory to him alone.',
        q:'What kind of weather are you most thankful for, and why?',
        recall:[['How do you say: Today is Monday.','Ko te Rāhina tēnei rā.'],['How do you say: This is a good day.','He rā pai tēnei.'],['How do you say: What day is it today?','He aha te rā i tēnei rā?']],
        rtag:'Term 2 Weeks 4 and 5',
        rtxt:'Remember when… Term 2 Weeks 4 and 5 (3 quick prompts)',
        refl:'What is the weather doing right now, and what are you thankful for about it?',
        next:'Lesson B: is it raining? (Kei te ua?) and the seasons',
        vsay:'Say each word and the class echoes, with an action: wiggle your fingers down for ua (rain), blow and sway for hau (wind), cup your hands over your head for kapua (cloud), fan yourself for wera (hot), shiver for makariri (cold), a circle with your hands for rā (the sun, as well as day). Point up for rangi (sky or weather). Remember that ua is two sounds: OO-ah. Note: for the weather we do not add ahau. We say Kei te ua, not Kei te ua ahau, because the weather is not I.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Kei te first, then the weather word, with no ahau. Prompt 4: no ahau after the weather word.',
        xresc:'Common error: adding ahau (Kei te ua ahau). Say: ahau means I, and the rain is not I. So we just say Kei te ua.',
        xpron:'ua = OO-ah · hau = HOW · kapua = KAH-poo-ah · rangi = RAH-ngee',
        cur:curriculumRows('Communication (saying and asking what the weather is like) · Language Knowledge (Kei te + weather word; Kei te pēhea te rangi?; Kei te makariri te rangi; Kei te wera i te raumati) · Cultural Knowledge (noticing the weather and the seasons in Aotearoa, and God’s care for creation)','Science and Health link: weather, seasons and what to wear. Recalls Term 2 Weeks 4 and 5 in the warm-up. Have weather pictures ready or look out the window.'),
        vr:valueRows('Psalm 147:8','God covers the sky with clouds and supplies the earth with rain. When we say what the weather is like, we notice his care.','What kind of weather are you most thankful for, and why?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Have weather pictures ready (rain, wind, clouds, sun, cold), or stand where students can see out a window.','Print the weekly vocab card, one per student.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the vowels: ua (OO-ah), hau (HOW), kapua (KAH-poo-ah), and the seasons: raumati, ngahuru, hōtoke, kōanga.'],
        three:'(1) <i>Kei te</i> + weather word, with no <i>ahau</i>: <i>Kei te ua</i> (it is raining). (2) To ask: <i>Kei te pēhea te rangi?</i> (How is the sky or weather?) Answer <i>Kei te makariri te rangi.</i> (3) To name a season: <i>Kei te wera i te raumati</i> (It is hot in summer).',
        diff:['Echo as a whole class. Use only ua, hau and makariri at first, with a picture or the real weather. Pair with a confident partner and allow whispering first.','Complete all steps. Use all the weather words with pictures or the real weather, then name the seasons.','Say what the weather is like in each season. Add tino (very): Kei te tino makariri. Add ināianei from Week 5: Kei te pēhea te rangi ināianei?'],
        look:'Clear vowels (ua, hau, kapua); Kei te first, with no ahau; the right weather word for the picture or window; te rangi in the question; confident gestures.',
        nx:'revisit the weather words students mix up (makariri and wera; hau and ua) with pictures; build yes or no questions in Lesson B.',
        rec:'Term 2 Weeks 4 and 5 (He rā pai tēnei, Ko te Rāhina tēnei rā, He aha te rā i tēnei rā?) are recalled in the warm-up and drama; feelings, greetings and thanks from Term 1 return in the drama.'
      },
      D: {
        VOC:['ua','hau','kapua','wera','makariri','rā','rangi','raumati','hōtoke','kōanga'],
        STEPS:[
          ['Quick recap: Today is Monday. This is a good day.','Ko|k te|a Rāhina|n tēnei|q rā.|a He|k rā|n pai|q tēnei.|a','kor teh RAH-hee-nah TEH-neh-ee RAH · heh RAH PIE TEH-neh-ee','Term 2 Week 5 and Week 4, stacked.',null,'Whole class'],
          ['ua means rain. You know kei te from Kei te pai ahau. How would you say: It is raining?','Kei~te|k ua.|n*','kay teh OO-ah','Kei te + the weather word. No ahau, because the rain is not I.','You know kei te from Kei te pai ahau, I am well. Kei te also tells what is happening right now. Here the weather is the subject, so we do not add ahau. Take a moment… (wait 3 seconds)… Kei te ua. Say it with me, wiggling your fingers down like rain.','Echo'],
          ['hau means wind. How would you say: It is windy?','Kei~te|k hau.|n*','kay teh HOW','Same frame, new weather word.',null,'Whole class'],
          ['kapua means cloud. How would you say: It is cloudy?','Kei~te|k kapua.|n*','kay teh KAH-poo-ah','kapua = cloud. Hear ‘poo-ah’ in the middle.',null,'Whole class'],
          ['You know wera and makariri from Term 1. How would you say: It is hot. It is cold.','Kei~te|k wera.|n Kei~te|k makariri.|n','kay teh WEH-rah · kay teh mah-kah-REE-ree','Term 1 Week 2: wera = hot, makariri = cold. Now they describe the weather.',null,'Whole class'],
          ['rangi means sky or weather. How would you say: How is the weather?','Kei~te|k pēhea|q te|a rangi?|n*','kay teh PEH-heh-ah teh RAH-ngee','You know Kei te pēhea koe? How are you. Swap koe for te rangi: how is the weather?','You know Kei te pēhea koe? How are you. Swap koe for te rangi, which means the sky or the weather. Take a moment… (wait 3 seconds)… Kei te pēhea te rangi? Say it with me, pointing up.','Echo'],
          ['How would you say: The weather is cold.','Kei~te|k makariri|q te|a rangi.|n','kay teh mah-kah-REE-ree teh RAH-ngee','Kei te + weather word + te rangi: the weather is cold.',null,'Whole class'],
          ['rā can also mean the sun. How would you say: The sun is hot.','Kei~te|k wera|q te|a rā.|n*','kay teh WEH-rah teh RAH','te rā = the sun. You know rā means day too: the sentence tells us which.','You know rā means day from last week. It also means the sun. The sentence tells us which one. Take a moment… (wait 3 seconds)… Kei te wera te rā. Say it with me, making a circle for the sun.','Echo'],
          ['Now the seasons. raumati is summer. How would you say: It is hot in summer?','Kei~te|k wera|q i|a te|a raumati.|n*','kay teh WEH-rah ee teh ROW-mah-tee','i te + season = in the season.','Raumati is summer. To say in summer, we use i te: i te raumati. Take a moment… (wait 3 seconds)… Kei te wera i te raumati. Say it with me.','Echo'],
          ['hōtoke is winter. How would you say: It is cold in winter?','Kei~te|k makariri|q i|a te|a hōtoke.|n*','kay teh mah-kah-REE-ree ee teh HOR-toh-keh','hōtoke = winter. Hear the long ō.',null,'Whole class'],
          ['ngahuru is autumn and kōanga is spring. How would you say: It is windy in autumn. It is raining in spring.','Kei~te|k hau|q i|a te|a ngahuru.|n* Kei~te|k ua|q i|a te|a kōanga.|n*','kay teh HOW ee teh NGAH-hoo-roo · kay teh OO-ah ee teh KOR-ah-ngah','ngahuru = autumn, kōanga = spring.','Say each season with me and point to the weather you see in each one: raumati, ngahuru, hōtoke, kōanga.','Echo'],
          ['Partner game: look outside or at the weather picture. Ask how the weather is and answer.','Kei~te|k pēhea|q te|a rangi?|n Kei~te|k ___|q te|a rangi.|n','kay teh PEH-heh-ah teh RAH-ngee · kay teh ___ teh RAH-ngee','Point to the real weather or a picture each time.','Turn to your partner. One person points to a weather picture or the window and asks Kei te pēhea te rangi? The other answers Kei te ___ te rangi. Swap after three questions. Take 2 minutes.','Pairs'],
          ['Class chain: ask the next person how the weather is. They answer, say Ka pai!, then ask the next person.','Kei~te|k pēhea|q te|a rangi?|n Kei~te|k ___|q te|a rangi.|n Ka~pai!|w','kay teh PEH-heh-ah teh RAH-ngee · kay teh ___ teh RAH-ngee · kah PIE','Real questions, real answers, with Ka pai! after each.','Pass it around the circle. Each person asks the next Kei te pēhea te rangi? The next person answers Kei te ___ te rangi, says Ka pai!, and asks the next person. If someone is stuck, that’s my fault, not theirs. I’ll help.','Individual']],
        DR:{title:'Te Rangi — The Weather',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te pēhea te rangi?','Hello, children! How is the weather?','(looks out the window)','T1W1'],
          ['Hana','Kei te ua.','It is raining.','(wiggles her fingers down)'],
          ['Kaiako Rose','Āe! Ka pai, Hana! Kei te makariri te rangi?','Yes! Good, Hana! Is the weather cold?','(rubs her arms)'],
          ['Tama','Āe, kei te makariri. Kei te hau!','Yes, it is cold. It is windy!','(shivers and sways)'],
          ['Hana','Kei te kapua te rangi. Kei te pōuri ahau.','The sky is cloudy. I am sad.','(sighs)','T1W2'],
          ['Tama','Kāo! Kei te wera te rā!','No! The sun is hot!','(points up, grinning)'],
          ['Hana','Kei te harikoa ahau! He rā pai tēnei.','I am happy! This is a good day.','(spins around)','T2W4'],
          ['Kaiako Rose','He aha te rā i tēnei rā, Tama?','What day is it today, Tama?','','T2W5'],
          ['Tama','Ko te Rāpare tēnei rā.','Today is Thursday.','(points to the calendar)','T2W5'],
          ['Tama','Kei te makariri i te hōtoke. Kei te wera i te raumati.','It is cold in winter. It is hot in summer.','(shivers, then fans himself)'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God sends the clouds, the rain and the sun. In every kind of weather he looks after his world, and he looks after us.','T1W9'],
          ['Hana','Kia ora mō te ua, Kaiako.','Thank you for the rain, teacher.','(hand on heart)','T1W9'],
          ['Tama','Ka kite, Kaiako!','See you, teacher!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘It is raining.’','Kei te ua.'],['What does Kei te pēhea te rangi? mean?','How is the weather?'],['Choose the word for cold: makariri / wera','makariri'],['Fix the sentence: ‘Kei te ua ahau.’ (It should say: It is raining.)','Kei te ua.'],['Stretch: look outside. Ask your partner how the weather is, then answer.','Kei te pēhea te rangi? Kei te ___ te rangi.']],
        CE:['Adding ahau after the weather word','Mixing up the question and the answer','Mixing up makariri (cold) and wera (hot)','Adding ahau (I) to the weather','Leaving out te rangi'],
        T:'T2 W6 Lesson A',
        LP:{title:'Kei te ua — It is raining',val:'Mōhio · Psalm 147:8',pat:['Kei te ________.','Kei te pēhea te rangi?','Kei te ________ i te ________.'],swap:'Swap the weather word: ua · hau · kapua · wera · makariri. Swap the season: raumati · ngahuru · hōtoke · kōanga. No ahau after the weather.'}
      }
    };

    // ── Lesson B · Kei te ua? — Is it raining? ──
    const B = {
      P: {
        t:2,
        w:6,
        l:'B',
        ch:'Kei~te|k ua?|n',
        sub:'Is it raining? Today we ask yes or no questions about the weather and talk about the weather in each season.',
        say:'Kia ora everyone! Last lesson we said what the weather is like and named the four seasons. Today we ask yes or no questions about the weather, and we talk about how the weather is in each season. You know how to turn a sentence into a question: the same words, with your voice going up. Still no writing: listen, think and speak. Have the weather pictures or the window ready.',
        pron:'hukarere = HOO-kah-REH-reh · paki = PAH-kee · Kei te ua? = kay teh OO-ah',
        li:'ask and answer yes or no questions about the weather, and say what the weather is like in each season.',
        succ:['I can answer yes or no: Āe, kei te ua.','I can ask: Kei te makariri te rangi?','I can ask about a season: Kei te pēhea te rangi i te hōtoke?'],
        wp:'As long as the earth endures, summer and winter will never cease.',
        ref:'Genesis 8:22',
        mom:'After the flood, God promised that seedtime and harvest, cold and heat, summer and winter will never stop. The seasons come back year after year because God keeps his promises. When we name the seasons, we remember his faithfulness.',
        q:'What is your favourite season, and what can you thank God for in it?',
        recall:[['How do you say: It is raining.','Kei te ua.'],['How do you say: How is the weather?','Kei te pēhea te rangi?'],['How do you say: What day is it today?','He aha te rā i tēnei rā?']],
        rtag:'Term 2 Weeks 5 and 6',
        rtxt:'Remember when… Weeks 5 and 6 (3 quick prompts)',
        refl:'What season are we in, and what is one thing you are thankful for in it?',
        next:'Week 7: Mine, yours, theirs (Ko tōku pene tēnei)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: hukarere (snow) and paki (fine, clear weather). Show a picture of snow and a picture of a clear sky. Hukarere is HOO-kah-REH-reh, so say it in chunks.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: the question uses the same words as the statement, with a rising voice. Prompt 4: i te + the season.',
        xresc:'Common error: forgetting i te before the season. Say: i te means in, so it is cold in winter: Kei te makariri i te hōtoke.',
        xpron:'hukarere = HOO-kah-REH-reh · paki = PAH-kee',
        cur:curriculumRows('Communication (yes or no questions about the weather, talking about the seasons) · Language Knowledge (Kei te + weather?; Āe/Kāo; Kei te pēhea te rangi i te …?; i te + season) · Cultural Knowledge (the four seasons in Aotearoa and God’s faithfulness in the seasons)','Science link: weather and seasons. Recalls Weeks 5 and 6 in the warm-up. ināianei from Week 5 returns: Kei te pēhea te rangi ināianei?'),
        vr:valueRows('Genesis 8:22','God promised that summer and winter, cold and heat, will never cease. Each season is a gift from him.','What is your favourite season, and what can you thank God for in it?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add hukarere (snow) and paki (fine weather) as the two stretch words, written or spoken.','Have weather pictures ready for each season, including snow and a clear sky.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the question voice: the same words as the statement, with your voice going up.'],
        three:'(1) A yes or no question uses the same words as the statement, but your voice goes up: <i>Kei te ua?</i> (2) Answer <i>Āe</i> or <i>Kāo</i>, then the full sentence. (3) To ask about a season: <i>Kei te pēhea te rangi i te hōtoke?</i> and answer <i>Kei te makariri i te hōtoke.</i>',
        diff:['Echo as a whole class. Use only three or four weather words at first, with a picture each time. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer yes or no questions about the weather and all four seasons in pairs.','Add hukarere and paki. Add tino: Kei te tino makariri. Ask about the weather now with ināianei and talk about the season with i te.'],
        look:'Rising voice for questions; Āe and Kāo used naturally; Kei te first, with no ahau; i te before the season; te rangi in the question; confident gestures.',
        nx:'revisit the seasons and the weather words students mix up; move to Week 7 (Mine, yours, theirs).',
        rec:'Lesson A (Kei te ua, Kei te pēhea te rangi?), Term 2 Week 5 (He aha te rā i tēnei rā?, ināianei) and Term 1 (Āe, Kāo, Kei te harikoa, Ka kite) are recalled in the warm-up, steps and drama.'
      },
      D: {
        VOC:[...A.D.VOC,'hukarere','paki'],
        STEPS:[
          ['Quick recap: It is raining. It is cold. How is the weather?','Kei~te|k ua.|n Kei~te|k makariri.|n Kei~te|k pēhea|q te|a rangi?|n','kay teh OO-ah · kay teh mah-kah-REE-ree · kay teh PEH-heh-ah teh RAH-ngee','Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Is it raining?','Kei~te|k ua?|n*','kay teh OO-ah','The same words as a statement, but your voice goes up.','Last lesson we said Kei te ua, it is raining. Say the same words, but lift your voice at the end, and it becomes a question. Take a moment… (wait 3 seconds)… Kei te ua? Say it with me.','Echo'],
          ['How would you say: Yes, it is raining.','Āe,|w* kei~te|k ua.|n','AH-eh, kay teh OO-ah','Āe = yes, then the full sentence.',null,'Echo'],
          ['How would you say: No, it is windy.','Kāo,|w* kei~te|k hau.|n','KAH-oh, kay teh HOW','Kāo = no, then say what the weather really is.',null,'Echo'],
          ['Ask: Is the weather cold? Answer: No, it is hot.','Kei~te|k makariri|q te|a rangi?|n Kāo,|w kei~te|k wera.|n','kay teh mah-kah-REE-ree teh RAH-ngee? · KAH-oh, kay teh WEH-rah','Question, then Kāo, then the real weather.',null,'Whole class'],
          ['Partner game: guess the weather. One person says a weather word as a question, the other says Āe or Kāo and answers.','Kei~te|k ___?|n Āe/Kāo,|w kei~te|k ___.|n','kay teh ___? · AH-eh / KAH-oh, kay teh ___','Point to a picture or look outside to check the real weather.','Turn to your partner. One person asks Kei te ___? with a weather word. The other says Āe or Kāo and says the real weather. Swap after three questions. Take 2 minutes.','Pairs'],
          ['hukarere means snow. How would you say: It is snowing?','Kei~te|k hukarere.|n*','kay teh HOO-kah-REH-reh','hukarere = snow. Say it in chunks: hu-ka-re-re.','Hukarere means snow. Say it slowly in chunks: hu-ka-re-re. Take a moment… (wait 3 seconds)… Kei te hukarere. Say it with me, wiggling your fingers down slowly like snow.','Echo'],
          ['paki means fine, clear weather. How would you say: The weather is fine?','Kei~te|k paki|q te|a rangi.|n*','kay teh PAH-kee teh RAH-ngee','paki = fine, clear. Kei te paki te rangi = the weather is fine.',null,'Echo'],
          ['Add ināianei. How would you say: How is the weather now?','Kei~te|k pēhea|q te|a rangi|n ināianei?|q','kay teh PEH-heh-ah teh RAH-ngee ee-NAH-ee-ah-nay','ināianei = now, from Week 5.',null,'Whole class'],
          ['Ask about a season. How would you say: How is the weather in winter?','Kei~te|k pēhea|q te|a rangi|n i|a te|a hōtoke?|n*','kay teh PEH-heh-ah teh RAH-ngee ee teh HOR-toh-keh','i te hōtoke = in winter.','Add i te and the season at the end: i te hōtoke, in winter. Take a moment… (wait 3 seconds)… Kei te pēhea te rangi i te hōtoke? Say it with me and shiver.','Echo'],
          ['Answer: It is cold in winter. It is hot in summer.','Kei~te|k makariri|q i|a te|a hōtoke.|n Kei~te|k wera|q i|a te|a raumati.|n','kay teh mah-kah-REE-ree ee teh HOR-toh-keh · kay teh WEH-rah ee teh ROW-mah-tee','Season answers use i te + the season.',null,'Whole class'],
          ['How would you say: Hello, I am Sam. Today is Monday. The weather is cold.','Kia~ora.|w Ko|k Sam|p ahau.|a Ko|k te|a Rāhina|n tēnei|q rā.|a Kei~te|k makariri|q te|a rangi.|n','KEE-ah OR-ah. kor Sam ah-HOW. kor teh RAH-hee-nah TEH-neh-ee RAH. kay teh mah-kah-REE-ree teh RAH-ngee','Term 1 Week 1, Week 5 and Week 6 together.',null,'Pairs'],
          ['Class chain: greet, say your name, say what the weather is like, ask the next person, say goodbye.','Kia~ora.|w Ko|k ___|p ahau.|a Kei~te|k ___|q te|a rangi.|n Kei~te|k pēhea|q te|a rangi?|n Ka~kite!|w','KEE-ah OR-ah… kor ___ ah-HOW… kay teh ___ teh RAH-ngee… kay teh PEH-heh-ah teh RAH-ngee… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person turns to the next, greets them, says their name and what the weather is like, and asks how the weather is. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Rangi o te Tau — Weather Through the Year',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Kei te pēhea te rangi ināianei?','Hello, children! How is the weather now?','(looks out the window)','T1W1'],
          ['Hana','Kei te paki te rangi.','The weather is fine.','(points up)'],
          ['Kuia Mere','Kei te ua?','Is it raining?','(teasing, tilting her head)'],
          ['Tama','Kāo! Kei te paki te rangi!','No! The weather is fine!','(waves his arms)'],
          ['Kuia Mere','Āe! Ka pai, Tama! Kei te pēhea te rangi i te hōtoke?','Yes! Good, Tama! How is the weather in winter?','(shivers)'],
          ['Tama','Kei te makariri i te hōtoke. Kei te hukarere!','It is cold in winter. It is snowing!','(wiggles his fingers down)'],
          ['Hana','Kei te wera i te raumati. Kei te harikoa ahau!','It is hot in summer. I am happy!','(fans herself)','T1W2'],
          ['Hana','Kei te hau i te ngahuru. Kei te ua i te kōanga.','It is windy in autumn. It is raining in spring.','(sways, then wiggles her fingers)'],
          ['Kuia Mere','He aha te rā i tēnei rā, Hana?','What day is it today, Hana?','','T2W5'],
          ['Hana','Ko te Rāmere tēnei rā. He rā pai tēnei.','Today is Friday. This is a good day.','(smiles)','T2W5'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God promised that summer and winter, cold and heat, will never stop. Every season is his gift, and he keeps his promises.','T1W9'],
          ['Tama','Kia ora mō te raumati, Kuia.','Thank you for summer, Kuia.','(hand on heart)','T1W9'],
          ['Hana','Ka kite, Kuia!','See you, Kuia!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘Is it raining?’','Kei te ua?'],['What does Kāo, kei te hau mean?','No, it is windy.'],['Choose the word for winter: hōtoke / raumati','hōtoke'],['Say in te reo: ‘It is cold in winter.’','Kei te makariri i te hōtoke.'],['Stretch: ask a partner how the weather is now, then answer.','Kei te pēhea te rangi ināianei? Kei te ___ te rangi.']],
        CE:['Forgetting a question is the same words with a rising voice','Forgetting Āe or Kāo','Mixing up hōtoke (winter) and raumati (summer)','Leaving out i te before the season','Leaving out ināianei or te rangi'],
        T:'T2 W6 Lesson B',
        LP:{title:'Kei te ua? — Is it raining?',val:'Mōhio · Genesis 8:22',pat:['Kei te ________?','Āe / Kāo, kei te ________.','Kei te ________ i te ________.'],swap:'Swap the weather word and the season: Kei te ua? Kei te makariri i te hōtoke. Stretch: hukarere · paki.'}
      }
    };

    addLessons({ '2.6.A': A, '2.6.B': B });
  }

  /* ──────── WEEK 7 · Mine, yours, theirs ──────── */
  {
    addGlossary({
      "tāku":["my (things I hold, use or make)","TAH-koo",7,2],
      "tāu":["your (things you hold, use or make)","TAH-oo",7,2],
      "tāna":["his / her (things he or she holds, uses or makes)","TAH-nah",7,2],
      "nā":["belongs to (for tāku-type things)","NAH",7,2],
      "nā wai":["whose (a thing someone holds, uses or made)","NAH WHY",7,2],
      "nō wai":["whose (a thing someone wears, sits in or belongs to)","NOR WHY",7,2]
    });

    // ── Lesson A · Ko tāku pene tēnei — This is my pen ──
    const A = {
      P: {
        t:2,
        w:7,
        l:'A',
        ch:'Ko|k tāku|a pene|n tēnei.|q',
        sub:'Mine, yours, hers and his. Today we say whose things are whose, using tāku and tōku.',
        say:'Kia ora everyone! So far in Term 2 we have named things, said where they are, what colour they are and what they are like. Today we say whose things they are: my pen, your book, her bag. You already know tōku, tō and tōna from Term 1. Today we meet a second family of words: tāku, tāu and tāna. Still no writing: listen, think and speak. Have your own pen, book and bag ready to hold up.',
        pron:'Ko tāku pene tēnei = kor TAH-koo PEH-neh TEH-neh-ee',
        li:'say whose things are whose, using my, your and her or his, and tell the two kinds of ‘my’ apart (tāku and tōku).',
        succ:['I can say something is mine: Ko tāku pene tēnei.','I can say something is yours or hers: Ko tāu pene tēnā. Ko tāna pene tērā.','I can use both kinds of my (tāku pene, tōku pēke) and say its colour: He whero tāku pene.'],
        wp:'Every good gift comes from God.',
        ref:'James 1:17',
        mom:'Our pens, our books and our bags are all gifts. When we know whose things are whose and look after them, we say thank you for what we have been given.',
        q:'What is one thing you have that you are thankful for?',
        recall:[['How do you say: What is this? It is a pen.','He aha tēnei? He pene tēnei.'],['How do you say: The pen is red.','He whero te pene.'],['How do you say: It is raining.','Kei te ua.']],
        rtag:'Term 2 Weeks 1 to 6',
        rtxt:'Remember when… Term 2 Weeks 1 to 6 (3 quick prompts)',
        refl:'What is one thing that belongs to you that you can share kindly?',
        next:'Lesson B: whose is this? (Nā wai tēnei pene?)',
        vsay:'Say each word and the class echoes. Hold up your own things: tāku pene (my pen), then point to a student’s pen for tāu, then to a pen across the room for tāna. Then do the same with a bag for tōku, tō and tōna. Say tāku as TAH-koo, tāu as TAH-oo and tāna as TAH-nah, with a long ā each time.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Ko first, then tāku, the thing, then tēnei. Prompt 3: tāku for a book.',
        xresc:'Common error: tōku pene. Say: tāku is for things I hold, use or make, like a pen. Tōku is for things like my bag and my whānau.',
        xpron:'tāku = TAH-koo · tāu = TAH-oo · tāna = TAH-nah',
        cur:curriculumRows('Communication (saying and asking whose things are whose) · Language Knowledge (Ko + tāku / tāu / tāna or tōku / tō / tōna + thing + tēnei / tēnā / tērā; two kinds of possessive) · Cultural Knowledge (ownership, sharing and looking after what we are given)','Recalls Term 2 Weeks 1 to 6 in the warm-up. The a and o kinds of possessive are introduced as two pairs to learn by example; check the finer rules with your te reo lead.'),
        vr:valueRows('James 1:17','Every good gift comes from God. When we know whose things are whose and look after them, we say thank you for what we have been given.','What is one thing you have that you are thankful for?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Bring real objects: a pen, a book, a bag, a ball. Ask students to put their own pen, book and bag on the desk.','Print the weekly vocab card, one per student.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the six words side by side: tāku, tāu, tāna and tōku, tō, tōna. Say them with the long ā and ō.'],
        three:'(1) Te reo has two kinds of my. <i>Tāku</i> goes with things I hold, use or make (<i>tāku pene</i>). <i>Tōku</i> goes with things like my bag, my chair, my school and my whānau (<i>tōku pēke</i>). (2) Each has a your and a her or his: <i>tāu</i> and <i>tāna</i>, <i>tō</i> and <i>tōna</i>. (3) To say whose, begin with <i>Ko</i> and finish with the pointing word: <i>Ko tāku pene tēnei.</i>',
        diff:['Echo as a whole class and hold up the real object each time. Use only tāku, tāu and tāna with pene at first. Pair with a confident partner and allow whispering first.','Complete all steps. Use both kinds of my with real things in pairs, and say the colour too.','Sort things into two piles: tāku things and tōku things. Ask a partner Ko tāu pene tēnā? Explain in English why there are two kinds of my.'],
        look:'Long ā in tāku, tāu and tāna; Ko first and the pointing word last; tāku for things held or used and tōku for bag, chair and whānau; the right word for me, you and her or his; confident holding up and pointing.',
        nx:'revisit tāku and tōku with real things for students in Starting; build yes or no questions and Nā wai tēnei …? in Lesson B.',
        rec:'Term 2 Weeks 1 to 6 (He aha tēnei? He whero te pene. Kei te ua.) are recalled in the warm-up; the Week 3 pattern He kōwhai tōku pēke and Week 2 Kei hea …? return in the steps and drama; Term 1 greetings, thanks and God’s love return in the drama.'
      },
      D: {
        VOC:['tāku','tāu','tāna','tōku','tō','tōna','pene','pukapuka','pēke','tūru'],
        STEPS:[
          ['Quick recap: This is a pen. The pen is red.','He|k pene|n tēnei.|q He|k whero|q te|a pene.|n','heh PEH-neh TEH-neh-ee · heh FEH-roh teh PEH-neh','Term 2 Week 1 and Week 3, stacked.',null,'Whole class'],
          ['You know He pene tēnei, this is a pen. Now say whose it is. How would you say: This is my pen?','Ko|k tāku|a* pene|n tēnei.|q','kor TAH-koo PEH-neh TEH-neh-ee','Ko + tāku (my) + the thing + tēnei.','Last week you said He pene tēnei, this is a pen. Now it is my pen, so we start with ko, the same ko that points at who someone is. Then the little word tāku means my. Take a moment… (wait 3 seconds)… Ko tāku pene tēnei. Say it with me, holding up your own pen.','Echo'],
          ['How would you say: That (near you) is your pen?','Ko|k tāu|a* pene|n tēnā.|q','kor TAH-oo PEH-neh TEH-nah','tāu = your. tēnā = near you.',null,'Echo'],
          ['How would you say: That (over there) is her pen.','Ko|k tāna|a* pene|n tērā.|q','kor TAH-nah PEH-neh TEH-rah','tāna = his or her. tērā = over there.',null,'Echo'],
          ['How would you say: This is my book. That is your book.','Ko|k tāku|a pukapuka|n tēnei.|q Ko|k tāu|a pukapuka|n tēnā.|q','kor TAH-koo poo-kah-POO-kah TEH-neh-ee · kor TAH-oo poo-kah-POO-kah TEH-nah','Same frame, new thing.',null,'Whole class'],
          ['Now a bag. Te reo has a second kind of my. How would you say: This is my bag?','Ko|k tōku|a* pēke|n tēnei.|q','kor TOH-koo PEH-keh TEH-neh-ee','tōku = my, for things like a bag. You already know tōku ingoa and tōku hoa.','Te reo has two kinds of my. Tāku is for things I hold, use or make, like a pen or a book. Tōku is for things like my bag, my chair, my school and my whānau. You already know tōku ingoa and tōku hoa. Take a moment… (wait 3 seconds)… Ko tōku pēke tēnei. Say it with me.','Echo'],
          ['How would you say: That is your bag. That is her bag.','Ko|k tō|a pēke|n tēnā.|q Ko|k tōna|a pēke|n tērā.|q','kor TOH PEH-keh TEH-nah · kor TOH-nah PEH-keh TEH-rah','tō = your. tōna = his or her.',null,'Whole class'],
          ['Sort game. Hold up a pen, a book, a bag and a ball. Which kind of my fits: tāku or tōku?','Ko|k tāku|a ___|n tēnei.|q Ko|k tōku|a ___|n tēnei.|q','kor TAH-koo ___ TEH-neh-ee · kor TOH-koo ___ TEH-neh-ee','Held or used things (pene, pukapuka, pōro) take tāku. Bag, chair, school and whānau take tōku.','Hold up each real thing and say Ko tāku or Ko tōku for it. If you are not sure, that is fine: say it and I will say it back to you. Learn them as pairs: tāku pene, tōku pēke.','Whole class'],
          ['How would you say: My pen is red. My bag is yellow.','He|k whero|q tāku|a pene.|n He|k kōwhai|q tōku|a pēke.|n','heh FEH-roh TAH-koo PEH-neh · heh KOR-fye TOH-koo PEH-keh','Week 3 colours, now with my.',null,'Pairs'],
          ['How would you say: What is that? It is her book.','He|k aha|q tērā?|a Ko|k tāna|a pukapuka|n tērā.|q','heh AH-hah TEH-rah · kor TAH-nah poo-kah-POO-kah TEH-rah','Week 1 question, then whose.',null,'Whole class'],
          ['Partner task: show your partner something of yours and something of theirs, and say whose each is.','Ko|k tāku|a ___|n tēnei.|q Ko|k tāu|a ___|n tēnā.|q','kor TAH-koo ___ TEH-neh-ee · kor TAH-oo ___ TEH-nah','Use tāku for your things and tāu for your partner’s.','Turn to your partner. Hold up one of your things and say Ko tāku ___ tēnei. Then point to one of theirs and say Ko tāu ___ tēnā. Swap after one minute. Take 2 minutes while I listen.','Pairs'],
          ['How would you say: Hello, I am Sam. This is my bag. My bag is yellow.','Kia~ora.|w Ko|k Sam|p ahau.|a Ko|k tōku|a pēke|n tēnei.|q He|k kōwhai|q tōku|a pēke.|n','KEE-ah OR-ah. kor Sam ah-HOW. kor TOH-koo PEH-keh TEH-neh-ee. heh KOR-fye TOH-koo PEH-keh','Term 1 Week 1 and Term 2 Weeks 1, 3 and 7 together.',null,'Whole class'],
          ['Class chain: greet, show your thing and say it is yours, ask about the next person’s, say goodbye.','Kia~ora.|w Ko|k tāku|a ___|n tēnei.|q Ko|k tāu|a ___|n tēnā?|q Ka~kite!|w','KEE-ah OR-ah… kor TAH-koo ___ TEH-neh-ee… kor TAH-oo ___ TEH-nah… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person turns to the next, greets them, holds up one of their own things and asks about the other person’s. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ki te Kura — Whose Is This?',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki!','Hello, children!','(smiles at the class)','T1W1'],
          ['Hana','Tēnā koe, Kaiako. Ko tāku pene tēnei.','Greetings, teacher. This is my pen.','(holds up a pen)'],
          ['Tama','Ko tōku pēke tēnei. He kōwhai tōku pēke.','This is my bag. My bag is yellow.','(lifts a yellow bag)','T2W3'],
          ['Kaiako Rose','Ka pai! Ko tāu pukapuka tēnā, Tama?','Well done! Is that your book, Tama?','(points at a book near Tama)','T1W10'],
          ['Tama','Kāo. Ko tāna pukapuka tērā.','No. That is her book.','(points across the room)'],
          ['Hana','Āe! Ko tāku pukapuka tērā. Kia ora, Tama!','Yes! That is my book. Thank you, Tama!','(takes the book)','T1W9'],
          ['Kaiako Rose','Kei hea tō pēke, Hana?','Where is your bag, Hana?','(looks around)','T2W2'],
          ['Hana','Kei raro i te tūru.','It is under the chair.','(points down)','T2W2'],
          ['Hana','Tama, ko tāku pōro tēnei. Kei te pīrangi koe ki te tākaro?','Tama, this is my ball. Do you want to play?','(holds out a ball)','T1W6'],
          ['Tama','Āe! Kia ora, Hana!','Yes! Thank you, Hana!','(grins)'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Everything we have is a gift from God, and sharing it is a way to show his love.','T1W9'],
          ['Hana','Ka kite, Kaiako!','See you, teacher!','(Tama waves too)','T1W1']]},
        EX:[['Say in te reo: ‘This is my pen.’','Ko tāku pene tēnei.'],['What does ‘Ko tāna pukapuka tērā’ mean?','That is her (or his) book.'],['Choose the word for ‘my’: Ko ____ pukapuka tēnei. (tāku / tōku)','tāku'],['Say in te reo: ‘That is your bag.’','Ko tō pēke tēnā.'],['Stretch: show a partner something of yours and something of theirs, and say whose each is.','Ko tāku ___ tēnei. Ko tāu ___ tēnā.']],
        CE:['Using tōku for a pen (tōku pene)','Mixing up tāna (her or his) and tāku (my)','Choosing tōku for a book','Leaving out Ko or the pointing word','Mixing up tāku and tāu'],
        T:'T2 W7 Lesson A',
        LP:{title:'Ko tāku pene tēnei — This is my pen',val:'Mōhio · James 1:17',pat:['Ko tāku ________ tēnei.','Ko tāu ________ tēnā.','Ko tāna ________ tērā.'],swap:'Swap the person and the thing: tāku · tāu · tāna (pene, pukapuka) and tōku · tō · tōna (pēke, tūru).'}
      }
    };

    // ── Lesson B · Nā wai tēnei pene? — Whose pen is this? ──
    const B = {
      P: {
        t:2,
        w:7,
        l:'B',
        ch:'Nā|k wai|q tēnei|a pene?|n',
        sub:'Whose is this? Today we ask yes or no questions about whose things are whose, and ask Nā wai and Nō wai.',
        say:'Kia ora everyone! Last lesson we said whose things are whose: tāku pene, tōku pēke. Today we ask questions: is this your pen, and whose pen is this? You will meet two new little question words, nā wai and nō wai. They follow the same two families as last lesson. Still no writing: listen, think and speak. Have your own things on your desk.',
        pron:'Nā wai tēnei pene? = NAH WHY TEH-neh-ee PEH-neh',
        li:'ask and answer yes or no questions about whose things are whose, and ask whose something is with Nā wai and Nō wai.',
        succ:['I can answer yes or no: Āe, ko tāku pene tēnei.','I can ask whose something is: Nā wai tēnei pene?','I can ask about a bag and answer: Nō wai tēnei pēke? Nō Tama tēnei pēke.'],
        wp:'It is more blessed to give than to receive.',
        ref:'Acts 20:35',
        mom:'Jesus taught that giving brings more joy than keeping. When we hand back something lost, or share what is ours, we show aroha.',
        q:'What is one thing you can share or give back this week?',
        recall:[['How do you say: This is my pen.','Ko tāku pene tēnei.'],['How do you say: That is her book.','Ko tāna pukapuka tērā.'],['How do you say: Where is the bag? It is under the chair.','Kei hea te pēke? Kei raro i te tūru.'],['How do you say: What day is it today? It is Monday.','He aha te rā i tēnei rā? Ko te Rāhina tēnei rā.']],
        rtag:'Term 2 Weeks 2 to 7',
        rtxt:'Remember when… Term 2 Weeks 2 to 7 (4 quick prompts)',
        refl:'What did you share or hand back kindly today?',
        next:'Week 8: Asking questions (Ko wai? He aha? Kei hea? Nō hea?)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: nā wai and nō wai (whose). Hold up a pen and say nā wai, then a bag and say nō wai. Remind students that nā goes with tāku-type things and nō goes with tōku-type things. They already know nō from Nō hea koe?',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: Nā wai, then tēnei, then the thing. Prompt 4: Ko tāna, not Ko tōna, for a book.',
        xresc:'Common error: Nō wai for a pen. Say: pen goes with tāku, so it is Nā wai. Bag goes with tōku, so it is Nō wai.',
        xpron:'nā = NAH · nō = NOR · wai = WHY',
        cur:curriculumRows('Communication (yes or no questions, asking and answering whose something is) · Language Knowledge (Ko + tāku / tāu / tāna + thing + tēnei?; Nā wai tēnei …? Nō wai tēnei …?; Āe / Kāo) · Cultural Knowledge (returning what is lost, sharing, manaakitanga)','Recycles Lesson A and Term 2 Weeks 2 to 6. Let students use their own things so every answer is real. Check the nā and nō forms with your te reo lead.'),
        vr:valueRows('Acts 20:35','It is more blessed to give than to receive. When we hand back something lost or share what is ours, we show aroha.','What is one thing you can share or give back this week?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add nā wai and nō wai as the two stretch words, written or spoken.','Collect a pen, a book, a bag and a ball from students (with permission) to ask whose each one is.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the question voice: the same words as the statement, with your voice going up.'],
        three:'(1) A yes or no question uses the same words as the statement, with a rising voice: <i>Ko tāu pene tēnei?</i> (2) To ask whose something is, use <i>Nā wai</i> for tāku-type things and <i>Nō wai</i> for tōku-type things, then the pointing word and the thing: <i>Nā wai tēnei pene?</i> <i>Nō wai tēnei pēke?</i> (3) Answer with the person: <i>Nā Hana tēnei pene.</i> <i>Nō Tama tēnei pēke.</i>',
        diff:['Echo as a whole class and use real things. Use only the yes or no question and Nā wai with pene at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer Nā wai and Nō wai with real things in pairs.','Add the colour (Nā wai tēnei pene whero?). Ask about a third person (Ko tāna pene tērā?). Explain in English how nā and nō match tāku and tōku.'],
        look:'A rising voice for questions; Āe and Kāo used naturally; Nā wai with pen and book, Nō wai with bag; the person’s name straight after nā or nō; clear vowels in nā and nō.',
        nx:'revisit tāku, tōku, nā and nō with real things for students in Starting; move to Week 8 (Asking questions).',
        rec:'Lesson A (tāku, tāu, tāna, tōku, tō, tōna) is recalled in the warm-up and steps 1 to 6; Week 3 (He kōwhai tōku pēke), Week 2 (Kei hea te pēke?) and Week 5 (Ko te Rāhina tēnei rā) return in the warm-up and drama; Term 1 greetings and thanks return in the drama. Week 8 will recall Nā wai and Nō hea.'
      },
      D: {
        VOC:[...A.D.VOC,'nā wai','nō wai'],
        STEPS:[
          ['Quick recap: This is my pen. That is your bag.','Ko|k tāku|a pene|n tēnei.|q Ko|k tō|a pēke|n tēnā.|q','kor TAH-koo PEH-neh TEH-neh-ee · kor TOH PEH-keh TEH-nah','Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Is this your pen?','Ko|k tāu|a pene|n tēnei?|q*','kor TAH-oo PEH-neh TEH-neh-ee','The same words as a statement, but your voice goes up.','Last lesson we said Ko tāu pene tēnā, that is your pen. Say the same words but lift your voice at the end, and it becomes a question. Take a moment… (wait 3 seconds)… Ko tāu pene tēnei? Say it with me.','Echo'],
          ['How would you say: Yes, this is my pen.','Āe,|w* ko|k tāku|a pene|n tēnei.|q','AH-eh, kor TAH-koo PEH-neh TEH-neh-ee','Āe = yes, then the full sentence.',null,'Echo'],
          ['How would you say: No, this is her pen.','Kāo,|w* ko|k tāna|a pene|n tēnei.|q','KAH-oh, kor TAH-nah PEH-neh TEH-neh-ee','Kāo = no, then say whose it really is.',null,'Echo'],
          ['Partner game: ask if something is theirs, and answer yes or no.','Ko|k tāu|a ___|n tēnā?|q Āe/Kāo,|w ko|k ___|a ___|n tēnei.|q','kor TAH-oo ___ TEH-nah? · AH-eh / KAH-oh, kor ___ ___ TEH-neh-ee','Point to a real thing to check the real answer.','Turn to your partner. One person points to a thing and asks Ko tāu ___ tēnā? The other says Āe or Kāo and says whose it is. Swap after three questions. Take 2 minutes while I listen.','Pairs'],
          ['New question. How would you say: Whose pen is this?','Nā|k* wai|q* tēnei|a pene?|n','NAH WHY TEH-neh-ee PEH-neh','Nā wai = whose, for things held, used or made.','Now a new question: whose pen is this? We say nā wai. You know wai from Ko wai koe?, it means who. Nā wai is like asking: by who? Take a moment… (wait 3 seconds)… Nā wai tēnei pene? Say it with me.','Echo'],
          ['How would you say: It is Hana’s pen.','Nā|k* Hana|p tēnei|a pene.|n','NAH HAH-nah TEH-neh-ee PEH-neh','Nā + the person, then the pointing word and the thing.',null,'Echo'],
          ['Whose book is that over there? It is Tama’s.','Nā|k wai|q tērā|a pukapuka?|n Nā|k Tama|p tērā|a pukapuka.|n','NAH WHY TEH-rah poo-kah-POO-kah · NAH TAH-mah TEH-rah poo-kah-POO-kah','Same frame with tērā.',null,'Whole class'],
          ['Partner task: hold up a classmate’s thing and ask whose it is.','Nā|k wai|q tēnei|a ___?|n Nā|k ___|p tēnei|a ___.|n','NAH WHY TEH-neh-ee ___ · NAH ___ TEH-neh-ee ___','Use the name of the owner.','Hold up a pen or a book from the desk. Ask Nā wai tēnei ___? and let your partner answer with the owner’s name. Swap. Take 2 minutes while I listen.','Pairs'],
          ['Now a bag. The question changes a little. How would you say: Whose bag is this?','Nō|k* wai|q* tēnei|a pēke?|n','NOR WHY TEH-neh-ee PEH-keh','Bag goes with tōku, so we say Nō wai. You know nō from Nō hea koe?','A bag is a tōku thing, so the question changes from nā to nō. You already know nō from Nō hea koe? Nō wai tēnei pēke? Take a moment… (wait 3 seconds)… Nō wai tēnei pēke? Say it with me.','Echo'],
          ['How would you say: It is Tama’s bag.','Nō|k* Tama|p tēnei|a pēke.|n','NOR TAH-mah TEH-neh-ee PEH-keh','Nō + the person, then the pointing word and the thing.',null,'Whole class'],
          ['How would you say: Hello. Whose bag is this? It is my bag.','Kia~ora.|w Nō|k wai|q tēnei|a pēke?|n Ko|k tōku|a pēke|n tēnei.|q','KEE-ah OR-ah. NOR WHY TEH-neh-ee PEH-keh. kor TOH-koo PEH-keh TEH-neh-ee','Week 1, Lesson A and Lesson B together.',null,'Pairs'],
          ['Class chain: greet, ask whose the thing is, answer with a name, say goodbye.','Kia~ora.|w Nā|k wai|q tēnei|a ___?|n Nā|k ___|p tēnei|a ___.|n Ka~kite!|w','KEE-ah OR-ah… NAH WHY TEH-neh-ee ___… NAH ___ TEH-neh-ee ___… kah KEE-teh','Real conversation, nothing memorised.','Pass a real thing around the circle. Each person turns to the next, greets them, asks whose it is and answers. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Pēke Ngaro — The Lost Bag',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Kei te pēhea koutou?','Hello, children! How are you all?','(arms open wide)','T1W2'],
          ['Tama','Kei te pai, Kuia. Nā wai tēnei pene?','We are well, Kuia. Whose pen is this?','(holds up a pen)'],
          ['Kuia Mere','Ko tāu pene tēnei, Tama?','Is this your pen, Tama?','(tilts her head)'],
          ['Tama','Kāo. Ko tāna pene tēnei.','No. This is her pen.','(looks at Hana)'],
          ['Hana','Āe! Ko tāku pene tēnei. Kia ora, Tama!','Yes! This is my pen. Thank you, Tama!','(takes the pen)','T1W9'],
          ['Kuia Mere','Nō wai tēnei pēke? He kikorangi te pēke.','Whose bag is this? The bag is blue.','(holds up a blue bag)','T2W3'],
          ['Hana','Kāo. He kōwhai tōku pēke.','No. My bag is yellow.','(shakes her head)','T2W3'],
          ['Tama','Ko tōku pēke tēnei! Kia ora, Kuia.','This is my bag! Thank you, Kuia.','(hand on heart)'],
          ['Kuia Mere','Kei hea tō pēke, Hana?','Where is your bag, Hana?','(looks around)','T2W2'],
          ['Hana','Kei raro i te tūru.','It is under the chair.','(points down)','T2W2'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Everything we have is a gift from God. When we hand back what is lost and share what we have, we show his love.','T1W9'],
          ['Tama','Ka kite, Kuia!','See you, Kuia!','(Hana waves too)','T1W1']]},
        EX:[['Say in te reo: ‘Whose pen is this?’','Nā wai tēnei pene?'],['What does ‘Nō Tama tēnei pēke’ mean?','This bag is Tama’s.'],['Your friend asks Ko tāu pene tēnei? It is yours. Say: ____, ko tāku pene tēnei. (Āe / Kāo)','Āe'],['Say in te reo: ‘That is his book.’','Ko tāna pukapuka tērā.'],['Stretch: ask whose a bag is, then answer with a classmate’s name.','Nō wai tēnei pēke? Nō ___ tēnei pēke.']],
        CE:['Using nō for a pen (Nō wai tēnei pene?)','Forgetting nō goes with tōku things, nā with tāku things','Forgetting Āe or Kāo','Using tōna for a book instead of tāna','Putting the person before nā or nō'],
        T:'T2 W7 Lesson B',
        LP:{title:'Nā wai tēnei pene? — Whose pen is this?',val:'Mōhio · Acts 20:35',pat:['Ko tāu ________ tēnei?','Nā wai tēnei ________?','Nō wai tēnei ________?'],swap:'Swap the thing and the person: Nā wai tēnei pene? Nā Hana. Nō wai tēnei pēke? Nō Tama. Stretch: nā wai · nō wai.'}
      }
    };

    addLessons({ '2.7.A': A, '2.7.B': B });
  }

  /* ──────── WEEK 8 · Asking questions ──────── */
  {
    addGlossary({
      "ki hea":["to where","kee HEH-ah",8,2]
    });

    // ── Lesson A · Ko wai? He aha? Kei hea? — Four ways to ask ──
    const A = {
      P: {
        t:2,
        w:8,
        l:'A',
        ch:'Ko|k wai?|q He|k aha?|q Kei|k hea?|q',
        sub:'Four ways to ask. Today we sort the question words we know: who, what, where and where from.',
        say:'Kia ora everyone! You already know a lot of question words, and you have been using them all term without noticing. Today we put them side by side and learn to choose the right one. Here is the big idea: the question word sits exactly where the answer will go. Still no writing: listen, think and speak.',
        pron:'Ko wai? He aha? Kei hea? Nō hea? = kor WHY · heh AH-hah · kay HEH-ah · nor HEH-ah',
        li:'choose the right question word (Ko wai, He aha, Kei hea, Nō hea) and answer each one in te reo.',
        succ:['I can ask and answer: Ko wai tēnei? Ko Hana tēnei.','I can ask about things and places: He aha tēnei? Kei hea te pene?','I can match each answer to its question word, and ask Ko wai koe? Nō hea koe?'],
        wp:'God invites us to ask questions.',
        ref:'Matthew 7:7',
        mom:'Jesus said, ask and it will be given to you, seek and you will find. Good questions are one way we come to know God and his world.',
        q:'What is one big question you would love to ask about God’s world?',
        recall:[['How do you say: Whose pen is this?','Nā wai tēnei pene?'],['How do you say: Where is the pen? It is on the table.','Kei hea te pene? Kei runga i te teepu.'],['How do you say: What day is it today?','He aha te rā i tēnei rā?']],
        rtag:'Term 2 Weeks 1 to 7',
        rtxt:'Remember when… Term 2 Weeks 1 to 7 (3 quick prompts)',
        refl:'What good question did you ask today?',
        next:'Lesson B: how many? (E hia ngā pene?)',
        vsay:'Say each question word and the class echoes with a gesture: tap your shoulder for ko wai (a person), open both hands for he aha (a thing), shade your eyes and look around for kei hea (where is it), sweep an arm from far away to your chest for nō hea (where from). Point out that hea shows up in both kei hea and nō hea, because hea means where.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Ko wai, then tēnei. Prompt 3: Nō hea, not Kei hea, for where from.',
        xresc:'Common error: Kei hea for where you are from. Say: kei hea asks where something is. Nō hea asks where someone is from.',
        xpron:'wai = WHY · aha = AH-hah · hea = HEH-ah',
        cur:curriculumRows('Communication (asking and answering questions about people, things, places and where someone is from) · Language Knowledge (question words Ko wai, He aha, Kei hea, Nō hea; the question word sits where the answer goes) · Cultural Knowledge (curiosity, welcoming a newcomer with kind questions)','Consolidates Term 1 Weeks 1 to 3 and Term 2 Weeks 1 to 7. Good moment to use the question words in real classroom routines.'),
        vr:valueRows('Matthew 7:7','God invites us to ask questions. Good questions are one way we come to know God and his world.','What is one big question you would love to ask about God’s world?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. It doubles as a question-word menu.','Bring real objects (a pen, a book, a bag) and a map or picture of Aotearoa for the Nō hea step.','Choose three drama readers (Hana, Sam, Kaiako Rose) and rotate roles.','Practise the four gestures for the four question words before class.'],
        three:'(1) The question word sits where the answer will go: <i>Ko wai tēnei?</i> is answered <i>Ko Hana tēnei.</i> (2) <i>Hea</i> means where. It appears in <i>Kei hea</i> (where is it) and <i>Nō hea</i> (where from). (3) <i>Wai</i> means who and <i>aha</i> means what, so you can spot the question word and say the answer in the same slot.',
        diff:['Echo as a whole class and use the four gestures. Start with only Ko wai and He aha. Pair with a confident partner and allow whispering first.','Complete all steps. Choose the right question word for each answer, then ask and answer in pairs.','Play the backwards game: say an answer, partner asks the question. Add more questions to the chat (Kei te pēhea koe? Nā wai tēnei?). Explain in English why hea appears twice.'],
        look:'The right question word for the answer wanted; hea in both kei hea and nō hea; Ko wai and He aha used in the right place; clear vowels in wai, aha and hea; students switching between question words unprompted.',
        nx:'revisit the pairs students mix up (kei hea and nō hea) with a map; build yes or no questions and How many? in Lesson B.',
        rec:'Term 1 Weeks 1 to 3 (Ko wai koe? Nō hea koe? Kei te pēhea koe?) and Term 2 Weeks 1, 2, 3, 4, 5 and 7 (He aha tēnei? Kei hea te pene? He aha te tae o …? Nā wai tēnei?) are recalled in the warm-up, steps and drama.'
      },
      D: {
        VOC:['ko wai','he aha','kei hea','nō hea','pēhea','nā wai','nō wai','e hia','aha','hea'],
        STEPS:[
          ['Quick recap: Whose pen is this? It is Hana’s. Where is the pen?','Nā|k wai|q tēnei|a pene?|n Nā|k Hana|p tēnei|a pene.|n Kei|k hea|q te|a pene?|n','NAH WHY TEH-neh-ee PEH-neh · NAH HAH-nah TEH-neh-ee PEH-neh · kay HEH-ah teh PEH-neh','Week 7 and Week 2, stacked.',null,'Whole class'],
          ['You already know several question words. How would you say: Who is this?','Ko|k wai|q* tēnei?|a','kor WHY TEH-neh-ee','wai = who. The question word sits where the answer will go.','You already own a handful of question words, and today we sort them. Here is the big idea: the question word sits exactly where the answer will go. Ko wai tēnei? Who is this? Take a moment… (wait 3 seconds)… Ko wai tēnei? Say it with me.','Echo'],
          ['How would you say: This is Hana.','Ko|k Hana|p* tēnei.|a','kor HAH-nah TEH-neh-ee','Hana takes the place of wai.',null,'Echo'],
          ['How would you say: What is this? It is a pen.','He|k aha|q tēnei?|a He|k pene|n tēnei.|a','heh AH-hah TEH-neh-ee · heh PEH-neh TEH-neh-ee','aha = what. The thing takes the place of aha.',null,'Whole class'],
          ['How would you say: Where is the pen? It is on the table.','Kei|k hea|q te|a pene?|n Kei|k runga|n i|a te|a teepu.|n','kay HEH-ah teh PEH-neh · kay ROO-ngah ee teh TEH-eh-poo','hea = where. The place takes the place of hea.',null,'Whole class'],
          ['How would you say: Where are you from? I am from Aotearoa.','Nō|k hea|q koe?|a Nō|k Aotearoa|n ahau.|a','nor HEH-ah KOH-eh · nor ow-TEH-ah-ROR-ah ah-HOW','nō hea = where from. hea is where in both kei hea and nō hea.','Listen for hea. It shows up twice: kei hea, where is it, and nō hea, where from. Hea always means where. Take a moment… (wait 3 seconds)… Nō hea koe? Nō Aotearoa ahau. Say it with me.','Echo'],
          ['Sort game. I say each question in English, you pick the question word: Who is she? What is that? Where is the bag? Where is he from?','Ko|k wai|q ia?|a He|k aha|q tērā?|a Kei|k hea|q te|a pēke?|n Nō|k hea|q ia?|a','kor WHY EE-ah · heh AH-hah TEH-rah · kay HEH-ah teh PEH-keh · nor HEH-ah EE-ah','Pick the question word that matches the answer you want.','I will say each question in English. Take a moment to choose the question word, then say it in te reo and I will say it back to you. Take 2 minutes.','Whole class'],
          ['How would you say: What colour is the bag? What day is it today?','He|k aha|q te|a tae|n o|a te|a pēke?|n He|k aha|q te|a rā|n i|a tēnei|a rā?|n','heh AH-hah teh TAH-eh or teh PEH-keh · heh AH-hah teh RAH ee TEH-neh-ee RAH','He aha shows up in Week 3 and Week 5 questions too.',null,'Whole class'],
          ['Where is Hana? She is in the classroom.','Kei|k hea|q a|a Hana?|p Kei|k roto|n ia|a i|a te|a akomanga.|n','kay HEH-ah ah HAH-nah · kay ROH-toh EE-ah ee teh AH-koh-MAH-ngah','Week 2 Lesson B: a goes before a person’s name.',null,'Whole class'],
          ['Backwards game. I say the answer, you say the question. Answer: Nō Ōtepoti ahau.','Nō|k hea|q koe?|a','nor HEH-ah KOH-eh','Hear the answer, find the question word.','Now I say an answer and you say the question. Nō Ōtepoti ahau. Take a moment… (wait 3 seconds)… Nō hea koe? Let us try more: Ko Hana tēnei. He pene tēnei. Kei runga i te teepu.','Whole class'],
          ['Partner game: one says an answer, the other asks the question.','Ko|k Hana|p tēnei.|a →|x Ko|k wai|q tēnei?|a','kor HAH-nah TEH-neh-ee → kor WHY TEH-neh-ee','Match each answer to the question word that goes with it.','Turn to your partner. One says an answer from the board: Ko Hana tēnei. He pene tēnei. Kei runga i te teepu. Nō Ōtautahi ahau. The other asks the question that fits. Swap after four. Take 2 minutes while I listen.','Pairs'],
          ['How would you say: Hello. Who are you? Where are you from? How are you?','Kia~ora.|w Ko|k wai|q koe?|a Nō|k hea|q koe?|a Kei~te|k pēhea|q koe?|a','KEE-ah OR-ah. kor WHY KOH-eh. nor HEH-ah KOH-eh. kay teh PEH-heh-ah KOH-eh','Term 1 Weeks 1, 2 and 3 together: three questions in a row.',null,'Pairs'],
          ['Class chain: greet, ask who they are, ask where they are from, say goodbye.','Kia~ora.|w Ko|k wai|q koe?|a Nō|k hea|q koe?|a Ka~kite!|w','KEE-ah OR-ah… kor WHY KOH-eh… nor HEH-ah KOH-eh… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person turns to the next, greets them, asks who they are and where they are from, and answers. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Tauira Hou — The New Student',cast:CAST_SAM_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Haere mai, Sam.','Hello, children! Welcome, Sam.','(opens the door)','T1W1'],
          ['Hana','Kia ora! Ko wai koe?','Hello! Who are you?','(smiles)'],
          ['Sam','Ko Sam ahau. Ko wai koe?','I am Sam. Who are you?','(smiles back)'],
          ['Hana','Ko Hana ahau. Nō hea koe, Sam?','I am Hana. Where are you from, Sam?','','T1W3'],
          ['Sam','Nō Ōtepoti ahau. He aha tērā?','I am from Dunedin. What is that?','(points across the room)'],
          ['Hana','He pukapuka nui tērā.','That is a big book.','','T2W4'],
          ['Sam','Kei hea te pene?','Where is the pen?','(looks around)'],
          ['Hana','Kei runga i te teepu.','It is on the table.','(points)','T2W2'],
          ['Kaiako Rose','Kei te pēhea koe, Sam?','How are you, Sam?','(kindly)','T1W2'],
          ['Sam','Kei te whakamā ahau.','I am shy.','(looks at his feet)','T1W8'],
          ['Kaiako Rose','Kaua e whakamā. E aroha ana te Atua ki a koe.','Don’t be shy. God loves you.','(to the audience, in English) When someone new arrives, we ask kind questions and listen well. That is how we welcome the stranger.','T1W9'],
          ['Hana','Ka kite, Kaiako! Ka kite, Sam!','See you, teacher! See you, Sam!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘Who is this?’','Ko wai tēnei?'],['What does ‘Kei hea te pene?’ mean?','Where is the pen?'],['Choose the question for ‘Where are you from?’: ____ koe? (Nō hea / Kei hea)','Nō hea'],['Say in te reo: ‘What is this?’','He aha tēnei?'],['Stretch: ask your partner who they are, where they are from and how they are.','Ko wai koe? Nō hea koe? Kei te pēhea koe?']],
        CE:['Mixing up wai (who) and aha (what)','Forgetting hea means where','Using Kei hea for where someone is from','Leaving out tēnei','Missing one of the three questions'],
        T:'T2 W8 Lesson A',
        LP:{title:'Ko wai? He aha? Kei hea? — Four ways to ask',val:'Mōhio · Matthew 7:7',pat:['Ko wai ________?','He aha ________?','Kei hea ________? Nō hea ________?'],swap:'Swap the question word and the answer: Ko wai? → Ko Hana. He aha? → He pene. Kei hea? → Kei runga i te teepu. Nō hea? → Nō Aotearoa.'}
      }
    };

    // ── Lesson B · E hia ngā pene? — How many pens? ──
    const B = {
      P: {
        t:2,
        w:8,
        l:'B',
        ch:'E~hia|q ngā|a pene?|n',
        sub:'How many? Today we count things, ask whose they are and where, and ask where someone is going.',
        say:'Kia ora everyone! Last lesson we sorted four question words. Today we add one more, how many, and we mix them all together. You already know the numbers from Term 1. Still no writing: listen, think and speak. Have a few real things on the desk to count.',
        pron:'E hia ngā pene? = eh HEE-ah NGAH PEH-neh',
        li:'ask and answer how many, whose and where, and ask where someone is going, in te reo.',
        succ:['I can ask and answer how many: E hia ngā pene? E rima ngā pene.','I can ask whose and where: Nā wai ngā pene? Kei hea ngā pene?','I can choose the right question word and ask where someone is going: Kei te haere koe ki hea?'],
        wp:'God knows the number of the stars and calls each one by name.',
        ref:'Psalm 147:4',
        mom:'The psalm says God counts the stars and knows each one by name. He knows how many, and he knows who. When we ask E hia and Ko wai, we are learning to notice the world the way he does.',
        q:'What is something you can count today that makes you thankful?',
        recall:[['How do you say: Who is this?','Ko wai tēnei?'],['How do you say: Where are you from?','Nō hea koe?'],['How do you say: How old are you?','E hia ō tau?'],['How do you say: Whose bag is this?','Nō wai tēnei pēke?']],
        rtag:'Term 2 Weeks 2 to 8',
        rtxt:'Remember when… Term 2 Weeks 2 to 8 (4 quick prompts)',
        refl:'What did you count today, and what were you thankful for?',
        next:'Week 9: Knowing God’s world (He … te …)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: ki hea (to where) and ngā (the, for more than one thing). Hold up two and then five pens as you say ngā pene. Point out that E hia, how many, you already met in E hia ō tau?',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: E hia, then ngā, then the thing. Prompt 4: Kei hea, not E hia, for where.',
        xresc:'Common error: leaving out ngā. Say: ngā means the for more than one, so E hia ngā pene? is how many pens.',
        xpron:'ngā = NGAH · hia = HEE-ah · ki hea = kee HEH-ah',
        cur:curriculumRows('Communication (asking and answering how many, whose and where; asking where someone is going) · Language Knowledge (E hia ngā …? E + number + ngā + thing; Nā wai / Nō wai ngā …?; Kei hea ngā …?; Kei te haere koe ki hea?) · Cultural Knowledge (noticing and counting God’s gifts; thankfulness)','Recycles Term 1 Week 7 numbers and Term 2 Weeks 2, 5 and 7. Mathematics link: counting and number words.'),
        vr:valueRows('Psalm 147:4','God knows the number of the stars and calls each one by name. When we ask how many and who, we learn to notice the world the way he does.','What is something you can count today that makes you thankful?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add ki hea (to where) and ngā (the, for more than one) as the two stretch words, written or spoken.','Gather sets of real things to count: pens, books, bags, counters (between one and ten).','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Revisit the numbers one to ten (tahi, rua, toru, whā, rima, ono, whitu, waru, iwa, tekau) before class.'],
        three:'(1) <i>E hia</i> means how many. To ask about more than one thing, add <i>ngā</i>: <i>E hia ngā pene?</i> (2) To answer, say <i>E</i> + the number + <i>ngā</i> + the thing: <i>E rima ngā pene.</i> (3) The other question words work the same way with ngā: <i>Nā wai ngā pene? Kei hea ngā pene?</i>',
        diff:['Echo as a whole class and count real things. Use only E hia and the numbers one to five at first. Pair with a confident partner and allow whispering first.','Complete all steps. Count real things up to ten, ask whose and where, then ask where someone is going.','Count in pairs and add colours (E toru ngā pene whero). Ask about a third person. Explain in English why ngā is needed for more than one thing.'],
        look:'E hia then ngā then the thing; E + number + ngā in the answer; the right question word for the answer wanted; clear vowels in ngā and hia; confident counting.',
        nx:'revisit E hia and the numbers with real things for students in Starting; move to Week 9 (Knowing God’s world).',
        rec:'Lesson A (Ko wai? He aha? Kei hea? Nō hea?), Term 1 Week 7 (E hia ō tau? and the numbers), Term 2 Week 7 (Nā wai? Nō wai?) and Week 2 (Kei hea?) are recalled in the warm-up, steps and drama; Term 1 thanks and greetings return in the drama. Week 9 recalls all the question words.'
      },
      D: {
        VOC:[...A.D.VOC,'ki hea','ngā'],
        STEPS:[
          ['Quick recap: Who are you? Where are you from? Where is the pen?','Ko|k wai|q koe?|a Nō|k hea|q koe?|a Kei|k hea|q te|a pene?|n','kor WHY KOH-eh · nor HEH-ah KOH-eh · kay HEH-ah teh PEH-neh','Lesson A, stacked.',null,'Whole class'],
          ['You know E hia from E hia ō tau? How would you say: How many pens?','E~hia|q* ngā|a* pene?|n','eh HEE-ah NGAH PEH-neh','E hia = how many. ngā = the, for more than one thing.','You asked E hia ō tau? in Term 1, how old are you? E hia means how many. For more than one thing we add ngā. Take a moment… (wait 3 seconds)… E hia ngā pene? Say it with me.','Echo'],
          ['How would you say: There are five pens.','E|k rima|n* ngā|a pene.|n','eh REE-mah NGAH PEH-neh','E + the number + ngā + the thing.',null,'Echo'],
          ['How would you say: There are three books.','E|k toru|n ngā|a pukapuka.|n','eh TOH-roo NGAH poo-kah-POO-kah','Same frame, new number and thing.',null,'Whole class'],
          ['Partner game: ask how many things, and answer.','E|k hia|q ngā|a ___?|n E|k ___|n ngā|a ___.|n','eh HEE-ah NGAH ___ · eh ___ NGAH ___','Count the real things on the desk.','Turn to your partner. One person points to some things on the desk and asks E hia ngā ___? The other counts and answers E ___ ngā ___. Swap after three questions. Take 2 minutes while I listen.','Pairs'],
          ['How would you say: Whose pens are they? They are Hana’s pens.','Nā|k wai|q ngā|a pene?|n Nā|k Hana|p ngā|a pene.|n','NAH WHY NGAH PEH-neh · NAH HAH-nah NGAH PEH-neh','Nā wai from Week 7, with ngā for more than one.',null,'Whole class'],
          ['How would you say: Whose bags are they? They are Tama’s bags.','Nō|k wai|q ngā|a pēke?|n Nō|k Tama|p ngā|a pēke.|n','NOR WHY NGAH PEH-keh · NOR TAH-mah NGAH PEH-keh','Bags go with nō, just like last lesson.',null,'Whole class'],
          ['How would you say: Where are the books? They are in the bag.','Kei|k hea|q ngā|a pukapuka?|n Kei|k roto|n i|a te|a pēke.|n','kay HEH-ah NGAH poo-kah-POO-kah · kay ROH-toh ee teh PEH-keh','Kei hea from Week 2, with ngā.',null,'Whole class'],
          ['Where are you going? How would you say it?','Kei~te|k haere|n koe|a ki|q* hea?|q*','kay teh HIGH-reh KOH-eh kee HEH-ah','ki hea = to where. You know ki te from Kei te haere ahau ki te kura.','You know Kei te haere ahau ki te kura, I am going to school. To ask where, swap te kura for hea: ki hea. Take a moment… (wait 3 seconds)… Kei te haere koe ki hea? Say it with me.','Echo'],
          ['How would you say: I am going to school.','Kei~te|k haere|n ahau|a ki|q te|a kura.|n','kay teh HIGH-reh ah-HOW kee teh KOO-rah','ki te kura answers ki hea.',null,'Whole class'],
          ['Backwards game. I say the answer, you say the question. Answer: E rima ngā pene.','E|k hia|q ngā|a pene?|n','eh HEE-ah NGAH PEH-neh','Hear the answer, find the question word.','Now I say an answer and you say the question. E rima ngā pene. Take a moment… (wait 3 seconds)… E hia ngā pene? Next: Nā Hana ngā pene. Kei roto i te pēke. Kei te haere ahau ki te kura.','Whole class'],
          ['How would you say: Hello. Who are you? How old are you?','Kia~ora.|w Ko|k wai|q koe?|a E|k hia|q ō|a tau?|n','KEE-ah OR-ah. kor WHY KOH-eh. eh HEE-ah OH TOW','Term 1 Weeks 1 and 7 together.',null,'Pairs'],
          ['Class chain: greet, ask how many things, answer, say goodbye.','Kia~ora.|w E|k hia|q ngā|a ___?|n E|k ___|n ngā|a ___.|n Ka~kite!|w','KEE-ah OR-ah… eh HEE-ah NGAH ___… eh ___ NGAH ___… kah KEE-teh','Real conversation, nothing memorised.','Pass a set of real things around the circle. Each person turns to the next, greets them, asks how many and answers. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Tātaitanga — The Counting',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Kei te mahi koutou?','Hello, children! Are you working?','(looks around)','T1W5'],
          ['Tama','Āe, Kuia. E hia ngā pene?','Yes, Kuia. How many pens?','(counts on his fingers)'],
          ['Hana','E rima ngā pene.','There are five pens.','(holds them up)'],
          ['Tama','Nā wai ngā pene?','Whose pens are they?','(tilts his head)'],
          ['Hana','Nā Kuia Mere ngā pene.','They are Kuia Mere’s pens.','(hands them back)'],
          ['Kuia Mere','Āe! E toru ngā pukapuka. Kei hea ngā pukapuka?','Yes! There are three books. Where are the books?','(looks under the table)'],
          ['Hana','Kei runga i te teepu.','They are on the table.','(points)','T2W2'],
          ['Tama','Nō wai ngā pēke? E rua ngā pēke.','Whose bags are they? There are two bags.','(lifts two bags)'],
          ['Hana','Nō Kuia Mere ngā pēke.','They are Kuia Mere’s bags.','(smiles)'],
          ['Kuia Mere','Kei te haere koutou ki hea?','Where are you going?','(hands on hips)','T1W10'],
          ['Tama','Kei te haere ahau ki te kāinga. Kia ora mō ngā pene, Kuia.','I am going home. Thank you for the pens, Kuia.','(hand on heart)','T1W9'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God knows how many stars there are and he knows each of us by name. Counting what we have helps us say thank you.','T1W9'],
          ['Hana','Ka kite, Kuia!','See you, Kuia!','(Tama waves too)','T1W1']]},
        EX:[['Say in te reo: ‘How many pens?’','E hia ngā pene?'],['What does ‘E toru ngā pukapuka’ mean?','There are three books.'],['Say in te reo: ‘Whose pens are they?’','Nā wai ngā pene?'],['Choose the question for ‘Where are the bags?’: ____ ngā pēke? (Kei hea / E hia)','Kei hea'],['Stretch: ask your partner where they are going, then answer.','Kei te haere koe ki hea? Kei te haere ahau ki te ___.']],
        CE:['Leaving out ngā for more than one','Mixing up E hia (how many) and Kei hea (where)','Leaving out the number or ngā in the answer','Mixing up Kei hea and E hia','Forgetting ki hea ends the question'],
        T:'T2 W8 Lesson B',
        LP:{title:'E hia ngā pene? — How many pens?',val:'Mōhio · Psalm 147:4',pat:['E hia ngā ________?','E ________ ngā ________.','Kei te haere koe ki hea?'],swap:'Swap the number and the thing: E hia ngā pene? E rima ngā pene. Nā wai ngā pene? Kei hea ngā pene? Stretch: ki hea · ngā.'}
      }
    };

    addLessons({ '2.8.A': A, '2.8.B': B });
  }

  /* ──────── WEEK 9 · Knowing God’s world ──────── */
  {
    addGlossary({
      "whenua":["land / earth","FEH-noo-ah",9,2],
      "moana":["sea / ocean","moh-AH-nah",9,2],
      "maunga":["mountain","MOW-ngah",9,2],
      "awa":["river","AH-wah",9,2],
      "rākau":["tree","RAH-kow",9,2],
      "manu":["bird","MAH-noo",9,2],
      "ika":["fish","EE-kah",9,2],
      "hanga":["make / build","HAH-ngah",9,2],
      "tiaki":["look after / care for","TEE-ah-kee",9,2],
      "nā te atua i hanga":["God made (by God was made)","nah teh AH-too-ah ee HAH-ngah",9,2]
    });

    // ── Lesson A · He nui te maunga — The mountain is big ──
    const A = {
      P: {
        t:2,
        w:9,
        l:'A',
        ch:'He|k nui|q te|a maunga.|n',
        sub:'The mountain is big. Today we name the things God made (sky, land, sea, mountain, river, tree, bird and fish) and say what they are like.',
        say:'Kia ora everyone! This week is all about knowing God’s world. You already own the frame we need: He nui te pukapuka, the book is big. Today we swap the book for things God made: the mountain, the sea, the river, a tree. Still no writing: listen, think and speak. Look at your nature pictures or look out the window, and have your gestures ready.',
        pron:'maunga = MOW-ngah · moana = moh-AH-nah · whenua = FEH-noo-ah · rākau = RAH-kow · manu = MAH-noo',
        li:'name things in God’s world (rangi, whenua, moana, maunga, awa, rākau, manu, ika) and say what they are like and where they are.',
        succ:['I can say three nature words in te reo: maunga, moana, awa.','I can say what something is like: He nui te maunga. He kikorangi te rangi.','I can ask and answer where something is: Kei hea te manu? Kei runga i te rākau.'],
        wp:'In the beginning God created the heavens and the earth.',
        ref:'Genesis 1:1',
        mom:'Everything we can see, from the sky to the sea to the smallest bird, was made by God. When we learn the names of the things in his world, we come to know him better, and the glory belongs to him alone.',
        q:'What is your favourite thing in God’s world, and what does it tell you about God?',
        recall:[['How do you say: The book is big.','He nui te pukapuka.'],['How do you say: Where is the pen? It is on the table.','Kei hea te pene? Kei runga i te teepu.'],['How do you say: The sky is blue. (He kikorangi te …)','He kikorangi te rangi.']],
        rtag:'Term 2 Weeks 2 to 8',
        rtxt:'Remember when… Term 2 Weeks 2 to 8 (3 quick prompts)',
        refl:'What is one thing in God’s world you noticed today and can thank him for?',
        next:'Lesson B: who made it? (Nā te Atua i hanga te rangi)',
        vsay:'Say each word and the class echoes, with an action: arms up high for rangi (sky), pat the floor for whenua (land), wave arms like waves for moana (sea), a peak with your hands for maunga (mountain), a wiggling river with your arm for awa, arms like branches for rākau (tree), flap your arms for manu (bird), swim your hand for ika (fish), point up and hands on heart for Atua. You already know rangi from Kei te pēhea te rangi? and nui from Week 4. Say maunga as MOW-ngah (the ng is soft, like singer).',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: He first, then the describing word, then te and the thing. Prompt 3: awa (river), not moana (sea).',
        xresc:'Common error: putting the thing first (He maunga nui te). Say: this week the describing word comes first, just like He whero te pene: He nui te maunga.',
        xpron:'whenua = FEH-noo-ah · moana = moh-AH-nah · rākau = RAH-kow',
        cur:curriculumRows('Communication (naming and describing things in nature, saying where they are) · Language Knowledge (He + describing word + te + noun; Kei hea te …? Kei + place word + i te + thing; eight nature nouns) · Cultural Knowledge (Māori names for the natural world; God as Creator; noticing and valuing creation)','Science link: the natural world. Recalls Term 2 Weeks 2 to 8 (He nui te pukapuka, Kei hea te …?, colours, He aha tēnei?) in the warm-up. Prepare pictures of a mountain, sea, river, tree, bird and fish, or take students outside.'),
        vr:valueRows('Genesis 1:1','In the beginning God created the heavens and the earth. When we learn the names of the things in his world, we come to know him better.','What is your favourite thing in God’s world, and what does it tell you about God?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Gather pictures of a mountain, sea, river, tree, bird and fish, or plan a short look outside.','Print the weekly vocab card, one per student.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the vowels: maunga (MOW-ngah), moana (moh-AH-nah), whenua (FEH-noo-ah, wh as f), rākau (RAH-kow).'],
        three:'(1) The frame is the one from Week 4: <i>He</i> + describing word + <i>te</i> + thing. <i>He nui te maunga</i>, the mountain is big. (2) <i>Te</i> means the. The eight nouns are <i>rangi, whenua, moana, maunga, awa, rākau, manu, ika</i>. (3) Where things are uses the Week 2 frame: <i>Kei hea te manu? Kei runga i te rākau.</i>',
        diff:['Echo as a whole class and use the gestures and pictures every time. Start with maunga, moana, awa and nui. Pair with a confident partner and allow whispering first.','Complete all steps. Use all eight nouns with pictures, say what each is like and where it is.','Add colours (He kākāriki te rākau) and Week 4 describing words (He roa te awa). Ask a partner about a picture. Explain in English how He nui te maunga and He maunga nui are different.'],
        look:'Clear vowels (maunga, moana, whenua, rākau); He first, then the describing word, then te and the noun; the right word for each picture; Kei + place word + i te in the answer; confident gestures.',
        nx:'revisit the nouns students mix up (awa and moana, manu and ika) with pictures; build Nā te Atua i hanga … and counting in Lesson B.',
        rec:'Term 2 Week 4 (He nui te pukapuka), Week 2 (Kei hea te …?), Week 3 (colours) and Week 1 (He aha tēnei?) are recalled in the warm-up and steps; Term 1 greetings, feelings, thanks and God’s love return in the drama.'
      },
      D: {
        VOC:['rangi','whenua','moana','maunga','awa','rākau','manu','ika','Atua','nui'],
        STEPS:[
          ['Quick recap: The book is big. This is a book.','He|k nui|q te|a pukapuka.|n He|k pukapuka|n tēnei.|a','heh NOO-ee teh poo-kah-POO-kah · heh poo-kah-POO-kah TEH-neh-ee','Week 4 and Week 1, stacked.',null,'Whole class'],
          ['You know rangi from Kei te pēhea te rangi? It means sky or weather. How would you say: the sky?','te|a rangi|n*','teh RAH-ngee','te = the. rangi = sky.','This week we talk about God’s world. You already know rangi from Kei te pēhea te rangi? How is the weather. Rangi means the sky as well. Take a moment… (wait 3 seconds)… te rangi. Say it with me, with your arms up high.','Echo'],
          ['You know kikorangi means blue. Now say: The sky is blue.','He|k kikorangi|q te|a rangi.|n','heh KEE-koh-RAH-ngee teh RAH-ngee','Week 3 colours: hear rangi inside kikorangi. Blue like the sky!','Listen: kikorangi has rangi inside it. Blue like the sky. Say it with me: He kikorangi te rangi.','Whole class'],
          ['whenua means land or earth. How would you say: The land is green?','He|k kākāriki|q te|a whenua.|n*','heh KAH-KAH-ree-kee teh FEH-noo-ah','whenua = land, earth. wh sounds like f.','Pat the floor. Whenua means land or earth. Remember that wh sounds like f. Take a moment… (wait 3 seconds)… He kākāriki te whenua. Say it with me.','Echo'],
          ['moana means sea. How would you say: The sea is big?','He|k nui|q te|a moana.|n*','heh NOO-ee teh moh-AH-nah','moana = sea. Say it in chunks: mo-a-na.','Wave your arms like the sea. Moana means sea. Say it in chunks: mo-a-na. Take a moment… (wait 3 seconds)… He nui te moana. Say it with me.','Echo'],
          ['maunga means mountain. How would you say: The mountain is tall?','He|k roa|q te|a maunga.|n*','heh ROH-ah teh MOW-ngah','maunga = mountain. The ng is soft, like singer. roa = tall or long.','Make a peak with your hands. Maunga means mountain, and the ng is soft, like the end of singer. Take a moment… (wait 3 seconds)… He roa te maunga. Say it with me.','Echo'],
          ['awa means river. How would you say: The river is long?','He|k roa|q te|a awa.|n*','heh ROH-ah teh AH-wah','awa = river.','Wiggle your arm like a river. Awa means river. Say it with me: He roa te awa.','Whole class'],
          ['rākau means tree. How would you say: The tree is beautiful?','He|k ātaahua|q te|a rākau.|n*','heh AH-tah-AH-hoo-ah teh RAH-kow','rākau = tree. Hold the long ā.','Make branches with your arms. Rākau means tree. Say it with me: He ātaahua te rākau.','Whole class'],
          ['manu means bird, and ika means fish. How would you say: The bird is small. The fish is beautiful.','He|k iti|q te|a manu.|n* He|k ātaahua|q te|a ika.|n*','heh EE-tee teh MAH-noo · heh AH-tah-AH-hoo-ah teh EE-kah','manu = bird, ika = fish.','Flap your arms for manu, swim your hand for ika. Say each one with me.','Echo'],
          ['You know where from Week 2. How would you say: Where is the bird? It is on the tree.','Kei|k hea|q te|a manu?|n Kei|k runga|q i|a te|a rākau.|n','kay HEH-ah teh MAH-noo · kay ROO-ngah ee teh RAH-kow','Week 2: Kei hea … ? Kei + place word + i te + thing.',null,'Whole class'],
          ['Where is the fish? It is in the river.','Kei|k hea|q te|a ika?|n Kei|k roto|q i|a te|a awa.|n','kay HEH-ah teh EE-kah · kay ROH-toh ee teh AH-wah','Same frame, new nouns.',null,'Whole class'],
          ['What is that over there? It is a big mountain.','He|k aha|q tērā?|a He|k maunga|n nui|q tērā.|a','heh AH-hah TEH-rah · heh MOW-ngah NOO-ee TEH-rah','Week 1 and Week 4 together.',null,'Pairs'],
          ['Partner game: look at a nature picture. Ask what it is and what it is like, then say where it is.','He|k aha|q tēnei?|a He|k ___|n tēnei.|a He|k ___|q te|a ___.|n','heh AH-hah TEH-neh-ee · heh ___ TEH-neh-ee · heh ___ teh ___','Use the pictures or look outside. Swap after three.','Turn to your partner. Hold up a nature picture. One person asks He aha tēnei? The other answers He ___ tēnei, then says what it is like: He ___ te ___. Swap after three pictures. Take 2 minutes while I listen.','Pairs'],
          ['Class chain: greet, say what you can see in God’s world, say thank you, say goodbye.','Kia~ora.|w He|k ___|q te|a ___.|n Kia~ora|w mō|q te|a ___.|n Ka~kite!|w','KEE-ah OR-ah… heh ___ teh ___… KEE-ah OR-ah mor teh ___… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person turns to the next, greets them, says one sentence about something in God’s world, and thanks God for it. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Hīkoi — The Nature Walk',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te pēhea koutou?','Hello, children! How are you all?','(arms open wide)','T1W2'],
          ['Hana','Kei te harikoa ahau, Kaiako! He rā pai tēnei.','I am happy, teacher! This is a good day.','(spins around)','T2W5'],
          ['Tama','Titiro, Kaiako! He maunga nui tērā.','Look, teacher! That is a big mountain.','(points across the field)'],
          ['Kaiako Rose','Āe! He aha te āhua o te maunga?','Yes! What is the mountain like?','','T2W4'],
          ['Hana','He roa te maunga. He ātaahua te maunga!','The mountain is tall. The mountain is beautiful!','(makes a peak with her hands)'],
          ['Tama','He kikorangi te rangi. He kākāriki te rākau.','The sky is blue. The tree is green.','(points up, then at the tree)','T2W3'],
          ['Hana','Kei hea te manu?','Where is the bird?','(looks around)','T2W2'],
          ['Tama','Kei runga i te rākau!','It is on the tree!','(points)'],
          ['Kaiako Rose','Ka pai! Kei hea te ika?','Good! Where is the fish?','','T1W10'],
          ['Hana','Kei roto i te awa.','It is in the river.','(wiggles her arm like a river)'],
          ['Tama','He moana tērā? He nui te moana!','Is that the sea? The sea is big!','(spreads his arms)'],
          ['Kaiako Rose','Āe! E aroha ana te Atua ki a koutou.','Yes! God loves all of you.','(to the audience, in English) God made the sky, the land, the sea and everything in them. The more we notice his world, the more we know him.','T1W9'],
          ['Hana','Kia ora mō te whenua, Kaiako. Ka kite!','Thank you for the land, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘The mountain is big.’','He nui te maunga.'],['What does He kikorangi te rangi mean?','The sky is blue.'],['Choose the word for river: He roa te ____ (awa / moana)','awa'],['Say in te reo: ‘Where is the bird? It is on the tree.’','Kei hea te manu? Kei runga i te rākau.'],['Stretch: look at a nature picture and say two sentences about it.','He ___ te ___. He ___ te ___.']],
        CE:['Putting the noun first (He maunga nui te)','Forgetting He or te','Mixing up awa (river) and moana (sea)','Mixing up the question and the answer, or leaving out i te','Stopping at one sentence'],
        T:'T2 W9 Lesson A',
        LP:{title:'He nui te maunga — The mountain is big',val:'Mōhio · Genesis 1:1',pat:['He ________ te ________.','Kei hea te ________?','Kei ________ i te ________.'],swap:'Swap the describing word and the noun: He nui te maunga. He kikorangi te rangi. He roa te awa. Nouns: rangi · whenua · moana · maunga · awa · rākau · manu · ika.'}
      }
    };

    // ── Lesson B · Nā te Atua i hanga te rangi — God made the sky ──
    const B = {
      P: {
        t:2,
        w:9,
        l:'B',
        ch:'Nā|k te~Atua|n i|a hanga|q te|a rangi.|n',
        sub:'God made the sky. Today we say that God made the things in his world, ask who made them, count them and say we look after them.',
        say:'Kia ora everyone! Last lesson we named things in God’s world and said what they are like. Today we say who made them: God made the sky, God made the sea. We also ask who made something, count how many there are, and say we look after God’s world. You know nā from Nā wai tēnei pene? Today it tells us who made something. Still no writing: listen, think and speak. Have your nature pictures ready.',
        pron:'Nā te Atua i hanga te rangi = NAH teh AH-too-ah ee HAH-ngah teh RAH-ngee · tiaki = TEE-ah-kee',
        li:'say that God made the things in his world, ask and answer who made something, and say we look after God’s world, in te reo.',
        succ:['I can say who made something: Nā te Atua i hanga te moana.','I can ask and answer: Nā wai i hanga te maunga? Nā te Atua.','I can count and care: E toru ngā manu. Kei te tiaki ahau i te rākau.'],
        wp:'The sea is his, for he made it, and his hands formed the dry land.',
        ref:'Psalm 95:5',
        mom:'The psalmist says the sea belongs to God because he made it, and his hands shaped the dry land. Everything in the world is a gift from the Maker, so we look after it and give thanks to him alone.',
        q:'How can you look after something God made this week?',
        recall:[['How do you say: The mountain is big.','He nui te maunga.'],['How do you say: Whose pen is this?','Nā wai tēnei pene?'],['How do you say: How many pens?','E hia ngā pene?'],['How do you say: Thank you for the land.','Kia ora mō te whenua.']],
        rtag:'Term 2 Weeks 7 to 9',
        rtxt:'Remember when… Term 2 Weeks 7 to 9 (4 quick prompts)',
        refl:'What is one thing God made that you can look after this week?',
        next:'Week 10: Whakaaturanga (our showcase)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: hanga (make) and tiaki (look after, care for). Mime making something with your hands for hanga, and gently cupping something precious for tiaki. Remind students that nā asks by whom, and they already met it in Nā wai tēnei pene?',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: Nā te Atua i hanga, then te and the thing. Prompt 3: Nā wai i hanga for who made.',
        xresc:'Common error: leaving out i before hanga. Say: i hanga means made. It travels as a pair, like kei te.',
        xpron:'hanga = HAH-ngah · tiaki = TEE-ah-kee',
        cur:curriculumRows('Communication (saying who made something, asking and answering who made it, counting and caring) · Language Knowledge (Nā + person + i hanga + te + noun; Nā wai i hanga …? E + number + ngā + noun; Kei te tiaki ahau i te …) · Cultural Knowledge (God as Creator and Māori concepts of caring for the natural world; kaitiakitanga)','Science link: the natural world and caring for the environment. Previews kaitiakitanga for Term 4. Recycles Term 2 Weeks 4, 7 and 8. Check the hanga and tiaki sentences with your te reo lead.'),
        vr:valueRows('Psalm 95:5','The sea is God’s, for he made it, and his hands formed the dry land. Everything in the world is a gift from its Maker, so we look after it and give thanks.','How can you look after something God made this week?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add hanga (make) and tiaki (look after) as the two stretch words, written or spoken.','Have nature pictures with small groups of things to count (for example three birds, five trees).','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise Nā te Atua i hanga te rangi in pieces first, then as a whole.'],
        three:'(1) <i>Nā te Atua i hanga te rangi</i> means God made the sky. Learn <i>i hanga</i> as one little piece, like <i>kei te</i>. (2) To ask who made something: <i>Nā wai i hanga te maunga?</i> Answer <i>Nā te Atua.</i> (3) <i>Kei te tiaki ahau i te rākau</i> uses the Week 2 frame to say I am looking after the tree.',
        diff:['Echo as a whole class. Say the sentence in pieces first and use the nature pictures. Start with only Nā te Atua i hanga te rangi and te moana. Pair with a confident partner and allow whispering first.','Complete all steps. Say who made each of the eight things, ask Nā wai i hanga …? and count real things.','Add the stretch words hanga and tiaki. Combine with describing words (Nā te Atua i hanga te maunga nui). Explain in English how Nā wai tēnei pene? and Nā wai i hanga te maunga? are alike.'],
        look:'Clear vowels (hanga with the ng, tiaki, Atua); Nā te Atua i hanga in the right order; the thing straight after i hanga; Nā wai i hanga as the question; E + number + ngā in counting; warm, thankful tone.',
        nx:'revisit i hanga and Nā wai i hanga with pictures for students in Starting; move to Week 10 (Whakaaturanga, our showcase).',
        rec:'Lesson A (He nui te maunga, Kei hea te manu?), Week 7 (Nā wai tēnei pene?), Week 8 (E hia ngā pene?) and Term 1 (Kia ora mō …, E aroha ana te Atua) are recalled in the warm-up, steps and drama. Week 10 will recall all of Term 2.'
      },
      D: {
        VOC:[...A.D.VOC,'hanga','tiaki'],
        STEPS:[
          ['Quick recap: The mountain is big. The sky is blue. Where is the bird? It is on the tree.','He|k nui|q te|a maunga.|n He|k kikorangi|q te|a rangi.|n Kei|k hea|q te|a manu?|n Kei|k runga|q i|a te|a rākau.|n','heh NOO-ee teh MOW-ngah · heh KEE-koh-RAH-ngee teh RAH-ngee · kay HEH-ah teh MAH-noo · kay ROO-ngah ee teh RAH-kow','Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Is the mountain big? Yes, it is big.','He|k nui|q te|a maunga?|n Āe,|w he|k nui.|q','heh NOO-ee teh MOW-ngah? · AH-eh, heh NOO-ee','The same words as a statement, but your voice goes up.',null,'Whole class'],
          ['You know nā from Nā wai tēnei pene? Now it says who made something. hanga means make. How would you say: God made the sky?','Nā|k* te~Atua|n i|a* hanga|q* te|a rangi.|n','NAH teh AH-too-ah ee HAH-ngah teh RAH-ngee','Nā + who + i hanga + te + thing. Learn i hanga as one little piece, like kei te.','You know nā from Nā wai tēnei pene? Whose pen is this. Here nā tells us who made something. Hanga means make, and i hanga goes together, like kei te. Take a moment… (wait 3 seconds)… Nā te Atua i hanga te rangi. Say it with me, with your arms up high.','Echo'],
          ['God made the land. God made the sea.','Nā|k te~Atua|n i|a hanga|q te|a whenua.|n Nā|k te~Atua|n i|a hanga|q te|a moana.|n','NAH teh AH-too-ah ee HAH-ngah teh FEH-noo-ah · NAH teh AH-too-ah ee HAH-ngah teh moh-AH-nah','Same frame, new nouns.',null,'Whole class'],
          ['God made the mountain. God made the river.','Nā|k te~Atua|n i|a hanga|q te|a maunga.|n Nā|k te~Atua|n i|a hanga|q te|a awa.|n','NAH teh AH-too-ah ee HAH-ngah teh MOW-ngah · NAH teh AH-too-ah ee HAH-ngah teh AH-wah','Say it with a gesture for each noun.',null,'Whole class'],
          ['God made the tree, the bird and the fish. Say all three.','Nā|k te~Atua|n i|a hanga|q te|a rākau.|n Nā|k te~Atua|n i|a hanga|q te|a manu.|n Nā|k te~Atua|n i|a hanga|q te|a ika.|n','NAH teh AH-too-ah ee HAH-ngah teh RAH-kow · … teh MAH-noo · … teh EE-kah','All eight things in God’s world: rangi, whenua, moana, maunga, awa, rākau, manu, ika.',null,'Whole class'],
          ['Now ask who made something. You know wai means who. How would you say: Who made the mountain?','Nā|k wai|q* i|a hanga|q te|a maunga?|n','NAH WHY ee HAH-ngah teh MOW-ngah','Nā wai = who made. Same question as Nā wai tēnei pene?','Remember Nā wai tēnei pene? Whose pen is this. Swap tēnei pene for i hanga te maunga and it asks who made the mountain. Take a moment… (wait 3 seconds)… Nā wai i hanga te maunga? Say it with me.','Echo'],
          ['Answer: God did. (Nā te Atua.)','Nā|k te~Atua.|n*','NAH teh AH-too-ah','Short answer: Nā te Atua.',null,'Echo'],
          ['Partner game: ask who made something in a picture, and answer.','Nā|k wai|q i|a hanga|q te|a ___?|n Nā|k te~Atua|n i|a hanga|q te|a ___.|n','NAH WHY ee HAH-ngah teh ___ · NAH teh AH-too-ah ee HAH-ngah teh ___','Use the nature pictures. Swap after three.','Turn to your partner. One person points to a nature picture and asks Nā wai i hanga te ___? The other answers Nā te Atua i hanga te ___. Swap after three pictures. Take 2 minutes while I listen.','Pairs'],
          ['You know E hia from Week 8. How would you say: How many birds? There are three birds.','E|k hia|q ngā|a manu?|n E|k toru|n ngā|a manu.|n','eh HEE-ah NGAH MAH-noo · eh TOH-roo NGAH MAH-noo','Week 8: E hia ngā …? E + number + ngā + noun.',null,'Whole class'],
          ['Count the things in the picture. How many trees? There are five trees.','E|k hia|q ngā|a rākau?|n E|k rima|n ngā|a rākau.|n','eh HEE-ah NGAH RAH-kow · eh REE-mah NGAH RAH-kow','Count real things in a picture.',null,'Pairs'],
          ['tiaki means look after. How would you say: I am looking after the tree?','Kei~te|k tiaki|q* ahau|a i|a te|a rākau.|n','kay teh TEE-ah-kee ah-HOW ee teh RAH-kow','Kei te + tiaki + ahau + i te + thing. i joins the action to the thing.','Cup your hands gently around something precious. Tiaki means look after. Kei te, ahau, and i te join it to the thing. Take a moment… (wait 3 seconds)… Kei te tiaki ahau i te rākau. Say it with me.','Echo'],
          ['We are looking after the land. Say thank you for the sea.','Kei~te|k tiaki|q tātou|a i|a te|a whenua.|n Kia~ora|w mō|q te|a moana.|n','kay teh TEE-ah-kee TAH-toh ee teh FEH-noo-ah · KEE-ah OR-ah mor teh moh-AH-nah','tātou = all of us (Term 1 Week 9). Kia ora mō = thank you for.',null,'Whole class'],
          ['Class chain: greet, say who made something, say you look after God’s world, say goodbye.','Kia~ora.|w Nā|k te~Atua|n i|a hanga|q te|a ___.|n Kei~te|k tiaki|q ahau|a i|a te|a ___.|n Ka~kite!|w','KEE-ah OR-ah… NAH teh AH-too-ah ee HAH-ngah teh ___… kay teh TEE-ah-kee ah-HOW ee teh ___… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person turns to the next, greets them, says who made something and says they look after it. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Pikinga i te Maunga — Climbing the Mountain',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Kei te pēhea koutou?','Hello, children! How are you all?','(waves from the path)','T1W2'],
          ['Hana','Kei te harikoa ahau, Kuia. Kei te ngenge a Tama.','I am happy, Kuia. Tama is tired.','(points at Tama)','T1W2'],
          ['Tama','Kāo! Kei te pai ahau. Titiro, he maunga nui tērā!','No! I am well. Look, that is a big mountain!','(stretches and stands tall)','T2W4'],
          ['Kuia Mere','Āe! Nā wai i hanga te maunga?','Yes! Who made the mountain?','(smiles)'],
          ['Hana','Nā te Atua i hanga te maunga.','God made the mountain.','(hand on heart)'],
          ['Tama','Nā te Atua i hanga te rangi. Nā te Atua i hanga te moana.','God made the sky. God made the sea.','(points up, then ahead)'],
          ['Kuia Mere','Kei hea te manu?','Where is the bird?','','T2W2'],
          ['Hana','Kei runga i te rākau! E toru ngā manu.','It is on the tree! There are three birds.','(counts on her fingers)','T2W8'],
          ['Tama','He ātaahua te awa. Kei roto te ika i te awa.','The river is beautiful. The fish is in the river.','(peeks into the water)'],
          ['Kuia Mere','Ka pai! Kei te tiaki tātou i te whenua?','Well done! Are we looking after the land?','','T1W10'],
          ['Hana','Āe, Kuia. Kei te tiaki tātou i te whenua.','Yes, Kuia. We are looking after the land.','(picks up a piece of rubbish)'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God made the world and trusted us to look after it. When we care for the land, the sea and the animals, we thank their Maker.','T1W9'],
          ['Tama','Kia ora mō te maunga, Kuia. Ka kite!','Thank you for the mountain, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘God made the sky.’','Nā te Atua i hanga te rangi.'],['What does Nā wai i hanga te moana? mean?','Who made the sea?'],['Choose the word for ‘made’: Nā te Atua i ____ te maunga. (hanga / tiaki)','hanga'],['Say in te reo: ‘There are three birds.’','E toru ngā manu.'],['Stretch: say who made something and that you look after it.','Nā te Atua i hanga te ___. Kei te tiaki ahau i te ___.']],
        CE:['Leaving out i before hanga','Forgetting wai means who','Mixing up hanga (make) and tiaki (look after)','Leaving out ngā or E','Stopping after one sentence'],
        T:'T2 W9 Lesson B',
        LP:{title:'Nā te Atua i hanga te rangi — God made the sky',val:'Mōhio · Psalm 95:5',pat:['Nā te Atua i hanga te ________.','Nā wai i hanga te ________?','Kei te tiaki ahau i te ________.'],swap:'Swap the noun: Nā te Atua i hanga te rangi. Nā te Atua i hanga te moana. Nouns: rangi · whenua · moana · maunga · awa · rākau · manu · ika. Stretch: hanga · tiaki.'}
      }
    };

    addLessons({ '2.9.A': A, '2.9.B': B });
  }

  /* ──────── WEEK 10 · Whakaaturanga ──────── */
  {
    addGlossary({
      "me":["and (joining things in a list)","meh",10,2]
    });

    // ── Lesson A · Ko tāku pukapuka tēnei — Show and tell ──
    const A = {
      P: {
        t:2,
        w:10,
        l:'A',
        ch:'Ko|k tāku|a pukapuka|n tēnei.|q',
        sub:'Show and tell! Today we stack everything from Term 2 into one conversation about something we have brought to share.',
        say:'Kia ora everyone! This is our Term 2 showcase week. You already own every piece: naming things, saying where they are, colours, what they are like, the day, the weather, whose things they are, the question words and God’s world. Today we stack them into a show-and-tell kōrero, and next lesson we share it. Still no writing: listen, think and speak. There is no new grammar, only new ways to join the pieces you know. Have your own object ready to hold up.',
        pron:'Ko tāku pukapuka tēnei = kor TAH-koo poo-kah-POO-kah TEH-neh-ee',
        li:'join sentences from Term 2 into one short show-and-tell about something we have brought, using at least six sentences.',
        succ:['I can say what something is and whose it is: He pukapuka tēnei. Ko tāku pukapuka tēnei.','I can say what it is like and where it is: He whero. He nui. Kei runga i te teepu.','I can tell a partner a show-and-tell kōrero of six or more sentences.'],
        wp:'The fear of the Lord is the beginning of knowledge.',
        ref:'Proverbs 1:7',
        mom:'Knowing God’s world is where knowledge begins. Everything we have learned this term, from our things to the sky and the sea, points back to the One who made them. When we share what we know with joy, the glory is his alone.',
        q:'What is one thing you have learned this term about God’s world that you want to share?',
        recall:[['How do you say: This is my pen.','Ko tāku pene tēnei.'],['How do you say: Where is the pen? It is on the table.','Kei hea te pene? Kei runga i te teepu.'],['How do you say: The sky is blue.','He kikorangi te rangi.'],['How do you say: What day is it today? It is Monday.','He aha te rā i tēnei rā? Ko te Rāhina tēnei rā.']],
        rtag:'Term 2 Weeks 1 to 9',
        rtxt:'Remember when… Term 2 Weeks 1 to 9 (4 quick prompts)',
        refl:'What did you share today that you are proud of?',
        next:'Lesson B: our showcase day',
        vsay:'Say each word and the class echoes. Every word is an old friend from Term 2. Hold up your own object (a pen, a book, a bag) as you say tāku and tōku. Gestures: a pointing finger for tēnei, hands wide for nui, hold up something red for whero, a thumbs up for ka pai, sweep an arm across the room for tēnā koutou.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: tāku for a pen or book. Prompt 3: the colour before the thing.',
        xresc:'Common error: tōku pukapuka. Say: pukapuka is a tāku thing, something I hold or use. Tōku is for things like my bag, my chair and my whānau.',
        xpron:'tāku = TAH-koo · tōku = TOH-koo',
        cur:curriculumRows('Communication (sharing a short show-and-tell, asking and answering questions with a partner) · Language Knowledge (joining He … tēnei, Ko tāku … tēnei, colours, describing words, Kei hea, the day and the weather in one kōrero) · Cultural Knowledge (sharing and celebrating learning; Mōhio, knowing God and his world)','Recycles all of Term 2, Weeks 1 to 9. Prepare a low-stakes showcase for another class, whānau or the school. Use the Showcase rubric (Term 2 pack) as assessment evidence.'),
        vr:valueRows('Proverbs 1:7','The fear of the Lord is the beginning of knowledge. Knowing God’s world is where knowledge begins, and the glory is his alone.','What is one thing you have learned this term about God’s world that you want to share?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Ask every student to bring (or choose in class) one object to show: a pen, book, bag, ruler or a nature picture.','Print the weekly vocab card, one per student. It doubles as a sentence menu for their kōrero.','Print the Term 2 pack (📊 button): the Showcase rubric lets you listen and tick as students share.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles. Shy students may read in a pair.'],
        three:'(1) Nothing here is new grammar: every sentence is one you already own. (2) Build the kōrero in order: greeting, what it is, whose it is, its colour, what it is like, where it is, then the day or weather, and a thank you. (3) <i>Tāku</i> goes with things I hold or use (a pen, a book); <i>tōku</i> goes with things like my bag and my whānau.',
        diff:['Echo as a whole class. Use the vocab card as a sentence menu and choose only four sentences. Pair with a confident partner and allow whispering first.','Complete all steps. Share a kōrero of six or more sentences with a partner, in order.','Add a question for the partner (Nā wai tēnei? Kei hea tō pene?). Add God’s world (Nā te Atua i hanga te maunga). Encourage others with Ka pai!'],
        look:'Clear vowels and macrons; each sentence in the right pattern (He … tēnei, Ko tāku … tēnei, He whero …, Kei … i te …); tāku and tōku used correctly; students choosing and joining at least six sentences in order; warm encouragement of partners.',
        nx:'revisit the pattern with the most errors for students in Starting; ask every student to choose their object and kōrero for Lesson B.',
        rec:'All of Term 2 Weeks 1 to 9 are recalled: the warm-up (Weeks 7, 2, 3, 5), the steps (Weeks 1 to 9) and the drama (Weeks 1 to 9). Lesson B is the showcase.'
      },
      D: {
        VOC:['he aha','tēnei','kei hea','tāku','tōku','nui','whero','rā','ka pai','tēnā koutou'],
        STEPS:[
          ['Quick recap: Greetings everyone. I am Sam. This is a book.','Tēnā~koutou.|w Ko|k Sam|p ahau.|a He|k pukapuka|n tēnei.|a','TEH-nah KOH-toh. kor Sam ah-HOW. heh poo-kah-POO-kah TEH-neh-ee','Term 1 Week 10 and Term 2 Week 1, stacked.',null,'Whole class'],
          ['Hold up your own thing. How would you say: This is my book?','Ko|k tāku|a pukapuka|n tēnei.|q*','kor TAH-koo poo-kah-POO-kah TEH-neh-ee','Week 7: Ko + tāku + the thing + tēnei.','This week we put the whole term together in a show-and-tell. Hold up your own thing. Last time we said Ko tāku pukapuka tēnei, this is my book. Take a moment… (wait 3 seconds)… Ko tāku pukapuka tēnei. Say it with me, holding up your thing.','Echo'],
          ['Say what it is and what colour: It is a book. The book is red.','He|k pukapuka|n tēnei.|a He|k whero|q* te|a pukapuka.|n','heh poo-kah-POO-kah TEH-neh-ee · heh FEH-roh teh poo-kah-POO-kah','Week 1 and Week 3: He + thing + tēnei, then He + colour + te + thing.',null,'Whole class'],
          ['Say what it is like: The book is big. It is a beautiful book.','He|k nui|q te|a pukapuka.|n He|k pukapuka|n ātaahua|q tēnei.|a','heh NOO-ee teh poo-kah-POO-kah · heh poo-kah-POO-kah AH-tah-AH-hoo-ah TEH-neh-ee','Week 4: the describing word first with te, or after the thing.',null,'Whole class'],
          ['Say where it is: Where is my book? It is on the table.','Kei|k hea|q tāku|a pukapuka?|n Kei|k runga|n i|a te|a teepu.|n','kay HEH-ah TAH-koo poo-kah-POO-kah · kay ROO-ngah ee teh TEH-eh-poo','Week 2: Kei hea … ? Kei + place word + i te + thing.',null,'Whole class'],
          ['Now a bag. How would you say: This is my bag. My bag is yellow.','Ko|k tōku|a pēke|n tēnei.|q He|k kōwhai|q tōku|a pēke.|n','kor TOH-koo PEH-keh TEH-neh-ee · heh KOR-fye TOH-koo PEH-keh','Week 7 and Week 3: tōku for a bag, with its colour.',null,'Whole class'],
          ['Partner game: tell your partner what your thing is, whose it is, its colour and where it is. Then swap.','Ko|k tāku|a ___|n tēnei.|q He|k ___|q te|a ___.|n Kei|k ___|n i|a te|a ___.|n','kor TAH-koo ___ TEH-neh-ee · heh ___ teh ___ · kay ___ ee teh ___','Four pieces, in order, with nothing written down.','Turn to your partner. Hold up your thing and say three sentences: whose it is, what colour it is, and where it is. Then swap. If you forget a piece, look at the vocab card or ask your partner to help. Take 2 minutes while I listen.','Pairs'],
          ['Add the day and the weather: Today is Friday. It is raining.','Ko|k te|a Rāmere|n tēnei|q rā.|a Kei~te|k ua.|n','kor teh RAH-meh-reh TEH-neh-ee RAH · kay teh OO-ah','Week 5 and Week 6: Ko te … tēnei rā. Kei te + weather word.',null,'Whole class'],
          ['Ask your partner questions: Who made it? Whose is it? How many?','Nā|k wai|q i|a hanga?|n Nā|k wai|q tēnei?|a E|k hia|q ngā|a ___?|n','NAH WHY ee HAH-ngah · NAH WHY TEH-neh-ee · eh HEE-ah NGAH ___','Weeks 7, 8 and 9: Nā wai … ? E hia ngā …?',null,'Pairs'],
          ['Add God’s world: God made the mountain. The mountain is big.','Nā|k te~Atua|n i|a hanga|q te|a maunga.|n He|k nui|q te|a maunga.|n','NAH teh AH-too-ah ee HAH-ngah teh MOW-ngah · heh NOO-ee teh MOW-ngah','Week 9: Nā te Atua i hanga … and He + describing word + te + noun.',null,'Whole class'],
          ['Finish with thanks and goodbye: Thank you for the world. See you!','Kia~ora|w mō|q te|a whenua.|n Ka~pai!|w Ka~kite!|w','KEE-ah OR-ah mor teh FEH-noo-ah · kah PIE · kah KEE-teh','Term 1 Week 9: Kia ora mō … Then cheer each other: Ka pai!',null,'Whole class'],
          ['Stack it all: greet the group, say what it is, whose it is, its colour, where it is and a thank you.','Tēnā~koutou.|w He|k ___|n tēnei.|a Ko|k tāku|a ___|n tēnei.|q He|k ___|q te|a ___.|n Kei|k ___|n i|a te|a ___.|n Kia~ora|w mō|q ___.|n','TEH-nah KOH-toh. heh ___ TEH-neh-ee. kor TAH-koo ___ TEH-neh-ee. heh ___ teh ___. kay ___ ee teh ___. KEE-ah OR-ah mor ___','Six sentences, in order: greeting, what, whose, colour, where, thanks.','Choose one object. Say your six sentences in order to your partner. If you forget a piece, glance at the vocab card. Your partner listens, says Ka pai!, and tells you one star. Then swap. Take 2 minutes.','Pairs'],
          ['Class chain: greet the next person, show them your thing in three sentences, say Ka pai! to them, goodbye.','Kia~ora.|w Ko|k tāku|a ___|n tēnei.|q He|k ___|q te|a ___.|n Ka~pai!|w Ka~kite!|w','KEE-ah OR-ah… kor TAH-koo ___ TEH-neh-ee… heh ___ teh ___… kah PIE… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person turns to the next, holds up their thing, says three sentences about it, and the next person answers Ka pai! If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Whakaaturanga — Show and Tell',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Tēnā koutou, tamariki! Kei te pēhea koutou?','Greetings, children! How are you all?','(arms wide)','T1W10'],
          ['Hana','Kei te harikoa ahau! Ko te Rāhina tēnei rā.','I am happy! Today is Monday.','(smiles)','T2W5'],
          ['Kaiako Rose','Ka pai! He aha tēnei, Hana?','Good! What is this, Hana?','(points at her bag)','T2W1'],
          ['Hana','He pēke tēnei. Ko tōku pēke tēnei.','This is a bag. This is my bag.','(holds it up)','T2W7'],
          ['Tama','He aha te tae o tō pēke?','What colour is your bag?','','T2W3'],
          ['Hana','He kōwhai tōku pēke. He nui te pēke!','My bag is yellow. The bag is big!','(spreads her arms)','T2W4'],
          ['Kaiako Rose','Kei hea tō pēke, Hana?','Where is your bag, Hana?','','T2W2'],
          ['Hana','Kei runga i te teepu.','It is on the table.','(puts it down)','T2W2'],
          ['Tama','Ko tāku pukapuka tēnei. He kikorangi te pukapuka.','This is my book. The book is blue.','(holds up a book)'],
          ['Kaiako Rose','Kei te ua te rangi. Nā te Atua i hanga te ua!','The weather is rainy. God made the rain!','(looks at the window)','T2W9'],
          ['Hana','He rā pai tēnei. Kei te harikoa ahau.','This is a good day. I am happy.','(spins around)','T2W5'],
          ['Kaiako Rose','Kia kaha, tamariki! Ka rawe!','Be strong, children! Awesome!','(to the audience, in English) Everything we know about God’s world is a gift from him. Next time we share it with everyone.','T1W10'],
          ['Tama','Kia ora mō te kura, Kaiako. Ka kite!','Thank you for the school, teacher. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘This is my pen.’','Ko tāku pene tēnei.'],['What does Kei hea tō pēke? mean?','Where is your bag?'],['Choose the word for ‘my’: Ko ____ pēke tēnei. (tāku / tōku)','tōku'],['Say in te reo: ‘The book is big. It is on the table.’','He nui te pukapuka. Kei runga i te teepu.'],['Stretch: show something of yours and say six sentences about it in order.','Tēnā koutou. He ___ tēnei. Ko tāku ___ tēnei. He ___ te ___. Kei ___ i te ___. Kia ora mō ___.']],
        CE:['Using tōku for a pen or a book','Mixing up Kei hea (where) and He aha (what)','Choosing tāku for a bag','Putting the colour or describing word after te','Stopping at three sentences or leaving out the thank you'],
        T:'T2 W10 Lesson A',
        LP:{title:'Ko tāku pukapuka tēnei — Show and tell',val:'Mōhio · Proverbs 1:7',pat:['He ________ tēnei. Ko tāku ________ tēnei.','He ________ te ________. Kei ________ i te ________.','Kia ora mō ________. Ka kite!'],swap:'Choose sentences from Term 2 and join them in order: greeting · what it is · whose it is · colour · what it is like · where it is · day or weather · God’s world · thanks.'}
      }
    };

    // ── Lesson B · Ka pai! Ka rawe! — Our showcase ──
    const B = {
      P: {
        t:2,
        w:10,
        l:'B',
        ch:'Ka~pai!|w Ka~rawe!|w Kia~kaha!|w',
        sub:'Showcase day! Today we share what we know, cheer each other on and give thanks to God for his world.',
        say:'Kia ora everyone! Today is our Term 2 showcase. This term you learned to name things, say where they are, say what colour and what they are like, talk about the day and the weather, say whose things are whose, and name the things God made. Nobody has written a thing, and you can say all of it. Remember: if you stumble, that’s my fault, not yours. We cheer for every voice. Ka pai!',
        pron:'Ka pai = kah PIE · Ka rawe = kah RAH-weh · Kia kaha = KEE-ah KAH-hah',
        li:'share a short show-and-tell kōrero in te reo, encourage others, and give thanks to God for what we have learned about his world.',
        succ:['I can say six sentences about something I have brought: what it is, whose it is, its colour, what it is like and where it is.','I can ask my partner questions and answer them.','I can share my kōrero with an audience and say Ka pai! to others.'],
        wp:'Great are the works of the Lord, studied by all who delight in them.',
        ref:'Psalm 111:2',
        mom:'The psalmist says the works of the Lord are great, and everyone who delights in them studies them. This term we have been studying his world in a new language. Whatever we do, we do it for his glory.',
        q:'What are you most proud of learning in te reo this term?',
        recall:[['How do you say: Who made the mountain?','Nā wai i hanga te maunga?'],['How do you say: Whose bag is this?','Nō wai tēnei pēke?'],['How do you say: What colour is the pen?','He aha te tae o te pene?'],['How do you say: How many pens?','E hia ngā pene?'],['How do you say: The weather is cold.','Kei te makariri te rangi.']],
        rtag:'Term 2 Weeks 1 to 9',
        rtxt:'Remember when… Term 2 Weeks 1 to 9 (5 quick prompts)',
        refl:'What are you proud of this term, and who helped you?',
        next:'Term 3: Manaaki, Kai, whānau, hākari (Kei te hiakai ahau)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: kia kaha (be strong) and ka rawe (awesome). Say them with big encouraging voices and a fist pump. Remind students these are the words we use to cheer for every performer.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 3: Kei hea for where. Prompt 4: three or more sentences, each in the right pattern.',
        xresc:'Common error: mixing up the question words. Say: Ko wai asks who, He aha asks what, Kei hea asks where, Nā wai asks whose or who made.',
        xpron:'kia kaha = KEE-ah KAH-hah · ka rawe = kah RAH-weh',
        cur:curriculumRows('Communication (sharing a kōrero with an audience, asking and answering questions, giving encouragement) · Language Knowledge (consolidating Term 2 patterns; Ka pai, Ka rawe, Kia kaha; question words) · Cultural Knowledge (sharing learning as mihi and manaakitanga; celebrating knowing God’s world)','Recycles all of Term 2. Invite the audience to respond with Ka pai! Use the Showcase rubric (Term 2 pack) as assessment evidence for the term.'),
        vr:valueRows('Psalm 111:2','The works of the Lord are great. When we study his world and share what we know with joy, we give him the glory.','What are you most proud of learning in te reo this term?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria, the school motto.',MV),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add kia kaha (be strong) and ka rawe (awesome) as the two stretch words.','Print the Showcase rubric (Term 2 pack, 📊 button) and have a pen ready to tick as students share.','Arrange the audience (another class, whānau or the school) and a simple stage area. Remind each student to bring their object.','Choose three drama readers (Hana, Tama, Kuia Mere). Plan a kind finish: every performer gets Ka pai! from the whole class.'],
        three:'(1) Every sentence is one students already own; the showcase is about joining them with confidence. (2) <i>Ka pai</i>, <i>ka rawe</i> and <i>kia kaha</i> are cheering words: use them for every performer. (3) The four question words are <i>Ko wai</i> (who), <i>He aha</i> (what), <i>Kei hea</i> (where) and <i>Nā wai</i> (whose or who made).',
        diff:['Echo as a whole class. Perform in a pair or trio. Use the vocab card as a sentence menu and choose four sentences. Allow whispering first.','Share a kōrero of six or more sentences in order with a partner, then for the class.','Add questions for the audience (Kei hea tō pene? Nā wai i hanga te maunga?). Swap in God’s world nouns. Lead the cheering with Ka pai! Ka rawe!'],
        look:'Clear vowels and macrons; each sentence in the right pattern; students joining at least six pieces in order; the right question word for each answer; encouragement of others (Ka pai! Kia kaha!); brave attempts, even with help from a partner.',
        nx:'record each student’s showcase level on the rubric; plan to recycle Term 2 patterns in the Term 3 “Remember when…” warm-ups.',
        rec:'All of Term 2 Weeks 1 to 9 are recalled: the warm-up (Weeks 9, 7, 3, 8, 6), the steps (Weeks 1 to 9) and the drama (Weeks 1 to 9). Term 3 continues to recycle Term 1 and 2 patterns.'
      },
      D: {
        VOC:[...A.D.VOC,'kia kaha','ka rawe'],
        STEPS:[
          ['Quick recap: Greetings everyone. This is my book. The book is red.','Tēnā~koutou.|w Ko|k tāku|a pukapuka|n tēnei.|q He|k whero|q te|a pukapuka.|n','TEH-nah KOH-toh. kor TAH-koo poo-kah-POO-kah TEH-neh-ee. heh FEH-roh teh poo-kah-POO-kah','Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Good! Well done! Awesome! Be strong!','Ka~pai!|w Ka~rawe!|w Kia~kaha!|w','kah PIE · kah RAH-weh · KEE-ah KAH-hah','Cheering words for every performer. kia kaha = be strong, said to someone who is nervous.','These are the most useful little phrases in the showcase. When someone shares their kōrero, we all say Ka pai! Ka rawe! And if someone is nervous, we say Kia kaha! Say them with me, with a thumbs up.','Echo'],
          ['Ask three questions: Who is this? What is this? Where is it?','Ko|k wai|q tēnei?|a He|k aha|q tēnei?|a Kei|k hea|q ___?|n','kor WHY TEH-neh-ee · heh AH-hah TEH-neh-ee · kay HEH-ah ___','Term 2 Week 8: Ko wai? He aha? Kei hea?',null,'Whole class'],
          ['Ask more: Whose is this? Who made it? How many?','Nā|k wai|q tēnei?|a Nā|k wai|q i|a hanga?|n E|k hia|q ngā|a ___?|n','NAH WHY TEH-neh-ee · NAH WHY ee HAH-ngah · eh HEE-ah NGAH ___','Weeks 7, 9 and 8: Nā wai … ? E hia ngā …?',null,'Whole class'],
          ['Interview your partner with any four questions from the vocab card, then swap. Finish with Ka pai!','Nā|k wai|q tēnei?|a He|k aha|q te|a tae|n o|a ___?|n Kei|k hea|q ___?|n Ka~pai!|w','NAH WHY TEH-neh-ee · heh AH-hah teh TAH-eh or ___ · kay HEH-ah ___ · kah PIE','Real questions, real answers, nothing written.','Turn to your partner. Ask any four questions, listen to the answers, then swap. When you finish, say Ka pai! I’ll walk around and listen. Take 2 minutes.','Pairs'],
          ['Answer: It is my pen. The pen is red. It is in the bag.','Ko|k tāku|a pene|n tēnei.|q He|k whero|q te|a pene.|n Kei|k roto|n i|a te|a pēke.|n','kor TAH-koo PEH-neh TEH-neh-ee · heh FEH-roh teh PEH-neh · kay ROH-toh ee teh PEH-keh','Weeks 7, 3 and 2 joined.',null,'Whole class'],
          ['Say the day and the weather: Today is Wednesday. The weather is fine.','Ko|k te|a Rāapa|n tēnei|q rā.|a Kei~te|k paki|q te|a rangi.|n','kor teh RAH-ah-pah TEH-neh-ee RAH · kay teh PAH-kee teh RAH-ngee','Weeks 5 and 6 joined.',null,'Whole class'],
          ['Say who made the world, to the audience: God made the sky, the sea and the mountain.','Nā|k te~Atua|n i|a hanga|q te|a rangi,|n te|a moana|n me|q te|a maunga.|n','NAH teh AH-too-ah ee HAH-ngah teh RAH-ngee, teh moh-AH-nah meh teh MOW-ngah','Week 9. me = and (for lists of things). A new little word: say it as one phrase.','You know mā means and between numbers. For a list of things, we say me. Take a moment… (wait 3 seconds)… Nā te Atua i hanga te rangi, te moana me te maunga. Say it with me, arms wide.','Echo'],
          ['Say it to the audience: God loves all of you. Be strong!','E~aroha~ana|k te~Atua|n ki~a~koutou.|a Kia~kaha!|w','eh ah-ROH-hah AH-nah teh AH-too-ah kee ah KOH-toh · KEE-ah KAH-hah','Term 1 Week 10: ki a koutou for three or more people.',null,'Whole class'],
          ['Say thank you to God and to your whānau.','Kei~te|k whakawhetai|q ahau|a ki~te~Atua.|n Kia~ora|w mō|q tōku~whānau.|n','kay teh FAH-kah-FEH-tye ah-HOW kee teh AH-too-ah · KEE-ah OR-ah mor TOH-koo FAH-now','Term 1 Week 9: whakawhetai, mō.',null,'Whole class'],
          ['Rehearse your showcase kōrero with a partner: at least six sentences, then goodbye.','Tēnā~koutou.|w He|k ___|n tēnei.|a Ko|k tāku|a ___|n tēnei.|q He|k ___|q te|a ___.|n Kei|k ___|n i|a te|a ___.|n Kia~ora|w mō|q ___.|n Ka~kite!|w','TEH-nah KOH-toh. heh ___ TEH-neh-ee. kor TAH-koo ___ TEH-neh-ee. heh ___ teh ___. kay ___ ee teh ___. KEE-ah OR-ah mor ___. kah KEE-teh','Choose from the vocab card in this order: greeting, what, whose, colour, where, thanks, goodbye.','Turn to your partner. Say your whole kōrero once. Your partner listens, says Ka pai!, and tells you one star. Then swap. If you forget a piece, glance at the vocab card. Take 2 minutes.','Pairs'],
          ['Showcase: share your kōrero. Everyone else says Ka pai!','Ka~pai!|w Ka~rawe!|w Kia~kaha!|w','kah PIE · kah RAH-weh · KEE-ah KAH-hah','Celebrate every voice.','Invite pairs or trios to share, one after another. After each, the whole class says Ka pai! Remind them: if someone stumbles, that’s my fault, not theirs. Finish with a class Ka rawe!','Individual']],
        DR:{title:'Te Whakaaturanga o te Kura — The School Showcase',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Tēnā koutou, tamariki! Haere mai!','Greetings, children! Welcome!','(arms open wide)','T1W10'],
          ['Hana','Tēnā koe, Kuia. Ko tāku pene tēnei. He whero te pene.','Greetings, Kuia. This is my pen. The pen is red.','(holds it up)','T2W7'],
          ['Tama','Ko tōku pēke tēnei. He kikorangi tōku pēke.','This is my bag. My bag is blue.','(holds it up)','T2W3'],
          ['Kuia Mere','Ka pai! Kei hea te pukapuka?','Good! Where is the book?','','T2W2'],
          ['Hana','Kei runga i te teepu.','It is on the table.','(points)','T2W2'],
          ['Tama','Ko te Rātū tēnei rā. Kei te ua.','Today is Tuesday. It is raining.','(wiggles his fingers down)','T2W5'],
          ['Kuia Mere','Nā wai i hanga te ua?','Who made the rain?','(smiles)','T2W9'],
          ['Hana','Nā te Atua i hanga te ua!','God made the rain!','(hand on heart)','T2W9'],
          ['Tama','He nui te maunga. He ātaahua te moana.','The mountain is big. The sea is beautiful.','(spreads his arms)','T2W4'],
          ['Kuia Mere','E hia ngā manu?','How many birds?','','T2W8'],
          ['Hana','E toru ngā manu!','There are three birds!','(counts on her fingers)'],
          ['Kuia Mere','Ka rawe! E aroha ana te Atua ki a koutou.','Awesome! God loves all of you.','(to the audience, in English) You have worked hard this term to know God’s world in a new language. Everything we do is a gift, so let us say together: Soli Deo Gloria, to God alone the glory.','T1W10'],
          ['Tama','Ka kite, Kuia! Ka kite, whānau!','See you, Kuia! See you, everyone!','(Hana waves too)','T1W1']]},
        EX:[['Say in te reo: ‘Be strong! Well done!’','Kia kaha! Ka pai!'],['What does Nā wai i hanga te moana? mean?','Who made the sea?'],['Choose the question for ‘Where is the pen?’: ____ te pene? (Kei hea / He aha)','Kei hea'],['Say in te reo: ‘This is my pen. The pen is red.’','Ko tāku pene tēnei. He whero te pene.'],['Stretch: say six sentences about something you brought: what it is, whose it is, its colour, what it is like, where it is and a thank you.','Tēnā koutou. He ___ tēnei. Ko tāku ___ tēnei. He ___ te ___. Kei ___ i te ___. Kia ora mō ___.']],
        CE:['Mixing up Ka pai and Kia kaha','Mixing up Nā wai (whose or who made) and Ko wai (who)','Choosing He aha instead of Kei hea','Using tōku for a pen, or putting the colour after te','Stopping at four sentences or missing the thank you'],
        T:'T2 W10 Lesson B',
        LP:{title:'Ka pai! Ka rawe! — Our showcase',val:'Mōhio · Psalm 111:2',pat:['Ka pai! · Ka rawe! · Kia kaha!','Nā te Atua i hanga te ________.','Kia ora mō ________.'],swap:'Cheer others with Ka pai! Ka rawe! Kia kaha! Share your kōrero in order, then say thank you.'}
      }
    };

    addLessons({ '2.10.A': A, '2.10.B': B });
  }

})();
