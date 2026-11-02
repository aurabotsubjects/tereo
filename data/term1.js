/* ═════════════════════════════════════════════════════════════════════════════
   data/term1.js  ·  TERM 1 · AROHA  ·  “Ko wai au? Ko wai koe?”  (Me, you, our whānau)
   Weeks 1–10 · 20 lessons.  Term value: Aroha (love God, others, self, world).
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

  /* Term overview: shown in the lesson menu and on the printable Term pack. rubric = Week 10 showcase criteria. */
  defineTerm(1, {
    value: "Aroha",
    theme: "Me, you, our whānau",
    valueLine: "Aroha: love God, others, self, world",
    weeks: ["Who am I?","How are you?","Where are you from?","My whānau","What are you doing?","What do you want?","Numbers & ages","Classroom kōrero","Love & thanks","Whakaaturanga"],
    rubric: [
          ['Greets','Says Kia ora','Says Kia ora or Tēnā koe with some help','Greets confidently: Tēnā koe / Tēnā koutou'],
          ['Name and place','Says Ko ___ ahau with help','Says name and where from (Nō ___ ahau)','Says both smoothly, in order'],
          ['Age and feelings','Says one of these with help','Says age or feeling (Kei te ___ ahau)','Says both and asks a partner'],
          ['Whānau or wants','Names one whānau member','Says who is in their whānau or what they want','Says both (Ko ___ tōku māmā. Kei te pīrangi ahau ki te ___.)'],
          ['Thanks and values','Says Kia ora','Says Kia ora mō ___','Says Kia ora mō ___ and E aroha ana te Atua ki a ___'],
          ['Pronunciation','Some vowels unclear','Mostly clear vowels','Clear vowels and macrons throughout'],
          ['Confidence and encouragement','Needs prompts','Speaks with some support','Speaks clearly and cheers others (Ka pai! Kia kaha!)']
        ]
  });


  /* ──────── WEEK 1 · Who am I? ──────── */
  {
    addGlossary({
      "kia ora":["hello / thank you / be well","KEE-ah OR-ah"],
      "tēnā koe":["greetings to you (one person)","TEH-nah KOH-eh"],
      "ko wai":["who (is it)","kor WHY"],
      "ko":["is / am — points at who someone is","kor"],
      "ahau":["I / me","ah-HOW"],
      "koe":["you","KOH-eh"],
      "ia":["he / she","EE-ah"],
      "ingoa":["name","ee-NGOR-ah"],
      "tōku":["my","TOH-koo"],
      "tō":["your","TOH"],
      "wai":["who","WHY"],
      "haere mai":["welcome / come here","HIGH-reh MY"],
      "ka kite":["see you","kah KEE-teh"]
    });

    // ── Lesson A · Ko wai koe? — Who are you? ──
    const A = {
      P: {
        w:1,
        l:'A',
        ch:'Ko|k wai|q koe?|a',
        sub:'Who are you? Today we learn to say who we are in te reo Māori.',
        say:'Kia ora everyone! Welcome to te reo Māori. Today you’ll be saying whole sentences by the end — and nobody has to write anything down.',
        pron:'Ko wai koe? = kor WHY KOH-eh',
        li:'say who we are and ask who someone is in te reo Māori.',
        succ:['I can say my name: Ko ___ ahau.','I can ask “Who are you?”: Ko wai koe?','I can have a short introduction chat: Kia ora. Ko ___ ahau. Ko wai koe?'],
        wp:'God knows each of us by name.',
        ref:'Isaiah 43:1',
        mom:'When we learn to say someone’s name properly, we show aroha.',
        q:'Why does it feel good when someone remembers your name?',
        recall:[],
        rtxt:'Week 1: ‘Rules of the room’ slide (nothing to recall yet)',
        refl:'Who did you make feel welcome today?',
        next:'How are you?',
        vsay:'Say each word, class echoes. Add a gesture: wave for kia ora, point at yourself for ahau, point at a student for koe. Don’t linger — we’ll use them straight away.',
        dsay:'One line per click. The actor reads aloud; the class echoes. Press T to reveal English if needed. In the last-but-one line Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 3: ‘ahau’. Prompt 4: ‘tōku’ with a long ō.',
        xresc:'Common error: using koe for I. Remind: ahau = I, koe = you.',
        xpron:'Mia = MEE-ah · Ari = AH-ree',
        cur:curriculumRows('Communication (greetings, introductions, responding to spoken te reo) · Language Knowledge (the Ko ___ ahau pattern, word order, pronunciation) · Cultural Knowledge (the importance of names and greeting well)','Te Tiriti o Waitangi: te reo as a taonga. Introduce the local iwi name (confirm with local rūnanga).','Whanaungatanga · Manaakitanga'),
        vr:valueRows('Isaiah 43:1','God knows each of us by name. When we learn to say someone’s name properly, we show aroha.','Why does it feel good when someone remembers your name?','Opening and closing karakia; Kuia Mere’s line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides on the projector; press N for presenter notes on your screen.','Print the weekly vocab card, one per student (a reference to look at, point to and say).','Mini whiteboards and pens for the exit ticket (optional).','The opening and closing karakia are already on the karakia slides (Ashburton Christian School). Rehearse them with the class.','Choose three confident readers for the drama and rotate roles through the term.'],
        three:'(1) <i>Ko</i> points at who someone is and comes first. (2) The order is <i>Ko</i> + name + <i>ahau</i>. (3) To change the sentence, swap only the last word: <i>ahau</i> (I), <i>koe</i> (you), <i>ia</i> (he/she); to ask, swap the name for <i>wai</i> (who).',
        diff:['Echo as a whole class before pairs. Point to the colour-coded pieces. Use a sentence strip (Ko ___ ahau). Pair with a confident partner; allow whispering first.','Complete all 11 steps. Ask and answer Ko wai koe? with a partner, then give a short introduction from memory.','Add tōku ingoa / tō ingoa. Greet with Tēnā koe and finish with Ka kite. Swap in own names in the drama. Explain why ahau comes last.'],
        look:'clear vowels (ahau = ah-HOW (ow as in cow), wai = WHY, tōku with a long ō); Ko first and ahau (not koe) for “I”; students asking Ko wai koe? unprompted in pairs.',
        nx:'briefly revisit Ko + name + ahau for students in Starting.',
        rec:'First lesson: nothing recycled yet. This lesson plants Ko ___ ahau, Ko wai koe?, Kia ora and Ka kite for the “Remember when…” warm-ups in Lesson B and Week 2.'
      },
      D: {
        VOC:["kia ora","tēnā koe","ko","ahau","ingoa","tōku","tō","wai","haere mai","ka kite"],
        STEPS:[ // [prompt_en, answer chunks, say, why, script|null, action]
          ["Say the little word that means ‘is’ or ‘am’ and points at who someone is.","Ko|k*","kor","‘Ko’ points at who someone is. It always comes first.","In English we say ‘I am Sam’. In Māori, a little word goes first: ko. Don’t write anything down. Just say it with me: ko.","Echo"],
          ["How would you say: I am Sam?","Ko|k Sam|p ahau.|a*","kor Sam ah-HOW","Ko, then the name, then ‘ahau’ for ‘I’.","Don’t write anything down. Just listen and think. Ko goes first, then the name, then ‘ahau’ for ‘I’. So… how would you say ‘I am Sam’? Take a moment… (wait 3 seconds)… ‘Ko Sam ahau.’ Say it with me.","Echo"],
          ["Now say: I am… (your own name).","Ko|k ___|p ahau.|a","kor ___ ah-HOW","Same pattern, swap in your own name.",null,"Whole class"],
          ["How would you say: You are Sam?","Ko|k Sam|p koe.|a*","kor Sam KOH-eh","ahau = I, koe = you. Only that last word changes.",null,"Echo"],
          ["How would you say: Who are you?","Ko|k wai|q* koe?|a","kor WHY KOH-eh","‘wai’ means who. It slides into the name’s spot.",null,"Echo"],
          ["Ask your partner who they are, then answer.","Ko|k wai|q koe?|a Ko|k ___|p ahau.|a","kor WHY KOH-eh · kor ___ ah-HOW","Question and answer use the same pattern.","Turn to your partner. One asks, one answers, then swap. I’ll walk around and listen. Take 60 seconds.","Pairs"],
          ["How would you say: Who is she / he? And: She is Hana.","Ko|k wai|q ia?|a* →|x Ko|k Hana|p ia.|a","kor WHY EE-ah","ia = he or she. It sits where ahau and koe sat.",null,"Whole class"],
          ["How would you say: My name is Sam.","Ko|k Sam|p tōku|a* ingoa.|n*","kor Sam TOH-koo ee-NGOR-ah","tōku ingoa = my name. Say it with a rounded ‘oh’.",null,"Echo"],
          ["How would you say: What is your name?","Ko|k wai|q tō|a* ingoa?|n","kor WHY TOH ee-NGOR-ah","tō = your (tōku = my).",null,"Pairs"],
          ["How would you say: Hello, I am Sam. Who are you?","Kia~ora.|w* Ko|k Sam|p ahau.|a Ko|k wai|q koe?|a","KEE-ah OR-ah. kor Sam ah-HOW. kor WHY KOH-eh?","You now own every piece. Just stack them.",null,"Whole class"],
          ["Class chain: greet the next person, say your name, ask theirs, finish with goodbye.","Kia~ora.|w Ko|k ___|p ahau.|a Ka~kite!|w*","KEE-ah OR-ah… kah KEE-teh","Real conversation, nothing memorised.","Pass it around the room, each person turns to the next. Remember: if you stumble, that’s my fault, not yours — I’ll help.","Individual"]],
        DR:{title:"Te Rangi Tuatahi — The First Day",cast:{"Hana":"#F2C98A","Tama":"#A1CD3F","Kuia Mere":"#56E5E5"},lines:[
          ["Hana","Kia ora!","Hello!","(waves)"],["Tama","Kia ora! Ko Tama ahau. Ko wai koe?","Hello! I am Tama. Who are you?",""],["Hana","Ko Hana ahau.","I am Hana.",""],
          ["Kuia Mere","Kia ora, tamariki! Ko Kuia Mere ahau.","Hello, children! I am Kuia Mere.","(arms open wide)"],["Kuia Mere","Ko wai tō ingoa?","What is your name?","(to Tama)"],
          ["Tama","Ko Tama tōku ingoa.","My name is Tama.",""],["Kuia Mere","Haere mai, Tama.","Welcome, Tama.","(smiles)"],["Kuia Mere","Ko wai tō ingoa?","What is your name?","(to Hana)"],
          ["Hana","Ko Hana tōku ingoa. Tēnā koe, Kuia.","My name is Hana. Greetings, Kuia.","(bows head slightly)"],["Kuia Mere","Haere mai, Hana.","Welcome, Hana.","(to the audience, in English) God knows your names, and so do I."],
          ["Tama","Ka kite, Kuia!","See you, Kuia!","(Tama and Hana wave together)"]]},
        EX:[["Say in te reo: “I am Mia.”","Ko Mia ahau."],["What does “Ko wai koe?” mean?","Who are you?"],["Choose to say “I am Sam”: Ko Sam ____ (ahau / koe)","ahau"],["Say in te reo: “My name is Ari.”","Ko Ari tōku ingoa."],["Stretch: introduce yourself and ask your partner who they are.","Kia ora. Ko ___ ahau. Ko wai koe?"]],
        CE:["Using koe for I","Confusing wai with a name","Choosing koe","Leaving out tōku","Missing the question"],
        T:"T1 W1 Lesson A",
        LP:{title:'Ko wai koe? — Who are you?',val:'Aroha · Isaiah 43:1',pat:['Ko ________ ahau.','Ko wai koe?','Ko ________ tōku ingoa.'],swap:'Swap the last word: ahau = I · koe = you · ia = he/she'}
      }
    };

    // ── Lesson B · Ko wai tō hoa? — Who is your friend? ──
    const B = {
      P: {
        w:1,
        l:'B',
        ch:'Ko|k wai|q tō|a hoa?|n',
        sub:'Who is your friend? Today we build on who we are and talk about other people.',
        say:'Kia ora everyone! Last lesson we said who we are. Today we talk about other people: our teacher and our friends, and we greet respectfully. Still no writing: listen, think and speak.',
        pron:'Ko wai tō hoa? = kor WHY TOH HOR-ah',
        li:'ask and tell who other people are (teacher, friend) and greet respectfully in te reo.',
        succ:['I can say who someone is: Ko Hana ia.','I can ask and tell: Ko wai tō hoa? Ko Hana tōku hoa.','I can greet my teacher and introduce a friend: Tēnā koe. Ko Sam ahau. Ko Hana tōku hoa.'],
        wp:'Friends are a gift from God.',
        ref:'Proverbs 17:17',
        mom:'When we welcome someone and say their name well, we show aroha.',
        q:'How can you be a good friend to someone this week?',
        recall:[['How do you say: I am Sam?','Ko Sam ahau.'],['How do you say: What is your name?','Ko wai tō ingoa?'],['How do you say: My name is Sam?','Ko Sam tōku ingoa.']],
        refl:'Who did you welcome today?',
        next:'Week 2: How are you? (Kei te pēhea koe?)',
        vsay:'Say each word and the class echoes with a gesture. Same vocab card as Lesson A, with two stretch words today: hoa (friend) and kaiako (teacher).',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 10 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 3: tō (your), not tōku (my). Prompt 4: Tēnā koe first.',
        xresc:'Common error: tōku for tō. Say: tōku is mine, tō is yours.',
        xpron:'kaiako = KYE-ah-kor · hoa = HOR-ah',
        cur:[['<b>Learning area</b>','Learning Languages: Te Reo Māori (English-medium) · Years 5–6, about Level 2 (Phase 2)'],['<b>Strands</b>','Communication (introducing other people, greeting a teacher) · Language Knowledge (tōku / tō + noun, ia, Tēnā koe) · Cultural Knowledge (respectful greetings, manaakitanga, whanaungatanga)'],['<b>Key competencies</b>','Relating to others · Using language, symbols & texts'],['<b>Tātaiako</b>','Whanaungatanga · Manaakitanga'],['<b>Other links</b>','Te Tiriti o Waitangi: te reo as a taonga. Greet the teacher the way we would greet a kaumatua or guest.']],
        vr:[['<b>Term value</b>','Aroha: love God, others, self, world'],['<b>Scripture</b>','Proverbs 17:17 (add the school’s preferred translation)'],['<b>Whakaaro Pono</b>','Friends are a gift from God. When we welcome someone and say their name well, we show aroha.'],['<b>Reflection question</b>','How can you be a good friend to someone this week?'],['<b>Also appears in</b>','Opening and closing karakia; Kaiako Rose’s line in the drama (“A good friend is a gift from God”); Soli Deo Gloria.']],
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add hoa (friend) and kaiako (teacher) as the two stretch words, written or spoken.','Mini whiteboards and pens for the exit ticket (optional).','Rehearse the words below, especially kaiako and hoa.','Decide your own name for the ‘Ko ___ tōku kaiako’ step. Choose three drama readers (Hana, Tama, Kaiako Rose).'],
        three:'(1) <i>tōku</i> = my and <i>tō</i> = your, followed by the thing: <i>ingoa</i>, <i>kaiako</i> or <i>hoa</i>. (2) <i>ia</i> = he or she, in the same slot as <i>ahau</i> and <i>koe</i>. (3) <i>Tēnā koe</i> is a respectful hello to one person, like a teacher.',
        diff:['Echo as a whole class before pairs. Point to the colour-coded pieces. Use a sentence strip (Ko ___ tōku hoa). Pair with a confident partner.','Complete all steps. Ask and answer Ko wai tō hoa? with a partner, then greet the teacher and introduce a friend.','Swap in other people (Ko wai tō kaiako?). Explain the difference between tōku and tō. Act out the drama with their own friends’ names.'],
        look:'Clear vowels (kaiako = KYE-ah-kor, hoa = HOR-ah, tōku with a long ō); tō for ‘your’ and tōku for ‘my’; Ko first; students asking Ko wai tō hoa? unprompted.',
        nx:'revisit tōku vs tō with students in Starting; move to Week 2 (Kei te pēhea koe?).',
        rec:'Lesson A patterns (Ko ___ ahau, Ko wai koe?, Ko wai tō ingoa?) are recalled in the warm-up and steps 1, 9–11. Week 2 (Kei te pēhea koe?) recalls both Week 1 lessons.'
      },
      D: {
        VOC:['kia ora','tēnā koe','ko','ahau','ingoa','tōku','tō','wai','haere mai','ka kite','hoa','kaiako'],
        STEPS:[['Quick recap: say, Hello, I am Sam. Who are you?','Kia~ora.|w Ko|k Sam|p ahau.|a Ko|k wai|q koe?|a','KEE-ah OR-ah. kor Sam ah-HOW. kor WHY KOH-eh','Everything from Lesson A, stacked.',null,'Whole class'],['How would you say: Who is he? And: He is Tama.','Ko|k wai|q ia?|a Ko|k Tama|p ia.|a','kor WHY EE-ah · kor Tama EE-ah','ia = he or she, in the same slot as ahau and koe.',null,'Whole class'],['How would you say: Who is your teacher?','Ko|k wai|q tō|a kaiako?|n*','kor WHY TOH KYE-ah-kor','New word: kaiako = teacher. tō = your.','Last time we asked Ko wai tō ingoa? Now swap the last word. Kaiako means teacher. Take a moment… (wait 3 seconds)… Ko wai tō kaiako? Say it with me.','Echo'],['How would you say: My teacher is Miss Rose.','Ko|k ___|p tōku|a kaiako.|n','kor ___ TOH-koo KYE-ah-kor','Same shape as tōku ingoa: tōku + the thing.',null,'Whole class'],['How would you say: Who is your friend?','Ko|k wai|q tō|a hoa?|n*','kor WHY TOH HOR-ah','New word: hoa = friend.',null,'Echo'],['How would you say: Hana is my friend.','Ko|k Hana|p tōku|a hoa.|n','kor Hana TOH-koo HOR-ah','Swap the thing: ingoa, kaiako, hoa.',null,'Echo'],['Ask your partner who their friend is, then tell them who yours is.','Ko|k wai|q tō|a hoa?|n Ko|k ___|p tōku|a hoa.|n','kor WHY TOH HOR-ah · kor ___ TOH-koo HOR-ah','The question and the answer share one pattern.','Turn to your partner. Ask who their friend is and tell them yours. Then swap. Take 60 seconds while I listen.','Pairs'],['How would you say: Greetings to you (to one person, like a teacher).','Tēnā~koe.|w*','TEH-nah KOH-eh','Tēnā koe is a respectful hello to one person.','Say it to the teacher with a small nod: tēnā koe.','Echo'],['Greet your teacher and say who you are.','Tēnā~koe.|w Ko|k Sam|p ahau.|a','TEH-nah KOH-eh. kor Sam ah-HOW','Greeting + the pattern you already own.',null,'Whole class'],['Greet your teacher, say who you are, and ask their name.','Tēnā~koe.|w Ko|k Sam|p ahau.|a Ko|k wai|q tō|a ingoa?|n','TEH-nah KOH-eh. kor Sam ah-HOW. kor WHY TOH ee-NGOR-ah','Greeting, name, question.',null,'Pairs'],['How would you say: Hello, I am Sam. Hana is my friend.','Kia~ora.|w Ko|k Sam|p ahau.|a Ko|k Hana|p tōku|a hoa.|n','KEE-ah OR-ah. kor Sam ah-HOW. kor Hana TOH-koo HOR-ah','You can now build new sentences yourself.',null,'Whole class'],['Class chain: greet, say your name, introduce a friend, say goodbye.','Kia~ora.|w Ko|k ___|p ahau.|a Ko|k ___|p tōku|a hoa.|n Ka~kite!|w','KEE-ah OR-ah… kor ___ TOH-koo HOR-ah… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Ruma Akoranga — The Classroom',cast:{'Hana':'#F2C98A','Tama':'#A1CD3F','Kaiako Rose':'#56E5E5'},lines:[['Kaiako Rose','Kia ora, tamariki!','Hello, children!','(smiles at the class)'],['Hana','Tēnā koe, Kaiako. Ko Hana ahau.','Greetings, teacher. I am Hana.','(bows head slightly)'],['Tama','Tēnā koe, Kaiako. Ko Tama ahau.','Greetings, teacher. I am Tama.',''],['Kaiako Rose','Haere mai, Hana. Haere mai, Tama.','Welcome, Hana. Welcome, Tama.','(opens the door wide)'],['Hana','Ko wai tō ingoa, Kaiako?','What is your name, teacher?',''],['Kaiako Rose','Ko Kaiako Rose tōku ingoa.','My name is Kaiako Rose.',''],['Kaiako Rose','Ko wai ia?','Who is she?','(points to Hana, asking Tama)'],['Tama','Ko Hana ia. Ko Hana tōku hoa.','She is Hana. Hana is my friend.',''],['Hana','Ko Tama tōku hoa. Ko wai tō hoa, Kaiako?','Tama is my friend. Who is your friend, teacher?',''],['Kaiako Rose','Ko Kuia Mere tōku hoa.','Kuia Mere is my friend.','(to the audience, in English) A good friend is a gift from God.'],['Hana','Ka kite, Kaiako!','See you, teacher!','(Tama waves too)']]},
        EX:[['Say in te reo: ‘Who is your teacher?’','Ko wai tō kaiako?'],['What does ‘Ko Hana tōku hoa’ mean?','Hana is my friend.'],['Choose to ask ‘What is your name?’: Ko wai ____ ingoa? (tō / tōku)','tō'],['Say in te reo: ‘Greetings, teacher. I am Ari.’','Tēnā koe. Ko Ari ahau.'],['Stretch: introduce yourself and your friend.','Kia ora. Ko ___ ahau. Ko ___ tōku hoa.']],
        CE:['Mixing up tō and tōku','Forgetting hoa = friend','Choosing tōku','Leaving out Tēnā koe','Missing the friend sentence'],
        T:'T1 W1 Lesson B',
        LP:{title:'Ko wai tō hoa? — Who is your friend?',val:'Aroha · Proverbs 17:17',pat:['Ko ________ tōku hoa.','Ko wai tō hoa?','Ko ________ tōku kaiako.'],swap:'Swap the last word: ingoa = name · hoa = friend · kaiako = teacher'}
      }
    };

    addLessons({ '1.1.A': A, '1.1.B': B });
  }

  /* ──────── WEEK 2 · How are you? ──────── */
  {
    addGlossary({
      "kei te":["is / am / are (happening now)","kay teh",2],
      "pēhea":["how","PEH-heh-ah",2],
      "pai":["good / well","PIE",2],
      "harikoa":["happy","HAH-ree-KOR-ah",2],
      "ngenge":["tired","NGEH-ngeh",2],
      "hiakai":["hungry","HEE-ah-kye",2],
      "pōuri":["sad","POH-oo-ree",2],
      "hōhā":["bored / fed up","HOR-HAH",2],
      "mauiui":["sick / unwell","MOW-ee-oo-ee",2],
      "wera":["hot","WEH-rah",2],
      "makariri":["cold","mah-kah-REE-ree",2],
      "kāo":["no","KAH-or",2],
      "hoa":["friend","HOR-ah",1],
      "kaiako":["teacher","KYE-ah-kor",1],
      "āe":["yes","AH-eh",2],
      "tino":["very / really","TEE-nor",2]
    });

    // ── Lesson A · Kei te pēhea koe? — How are you? ──
    const A = {
      P: {
        w:2,
        l:'A',
        ch:'Kei~te|k pēhea|q koe?|a',
        sub:'How are you? Today we learn to ask how someone is and say how we feel.',
        say:'Kia ora everyone! Last time we said who we are. Today we ask how someone is feeling and say how we feel. Still no writing: just listen, think and speak.',
        pron:'Kei te pēhea koe? = kay teh PEH-heh-ah KOH-eh',
        li:'ask how someone is and say how we are feeling in te reo.',
        succ:['I can say how I am: Kei te pai ahau.','I can ask ‘How are you?’: Kei te pēhea koe?','I can chat: Kia ora. Kei te pēhea koe? Kei te … ahau.'],
        wp:'God cares how we are feeling.',
        ref:'1 Peter 5:7',
        mom:'When we ask ‘How are you?’ and really listen, we show aroha.',
        q:'How can you show aroha to someone who is tired or sad today?',
        recall:[['How do you say: I am Sam?','Ko Sam ahau.'],['How do you say: Who are you?','Ko wai koe?'],['Say hello, then say see you.','Kia ora · Ka kite']],
        refl:'Who did you ask ‘How are you?’ today, and did you listen?',
        next:'Lesson B: more feelings, and asking about others',
        vsay:'Say each word and class echoes. Act out the feeling (yawn for ngenge, rub tummy for hiakai, shiver for makariri). Kei te means ‘is happening now’.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 8 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 3: ahau. Prompt 4: Kei te hiakai ahau.',
        xresc:'Common error: Ko instead of Kei te. Say: ‘Ko’ is for who you are, ‘kei te’ is for how you are.',
        xpron:'hiakai = HEE-ah-kye',
        cur:[['<b>Learning area</b>','Learning Languages: Te Reo Māori (English-medium) · Years 5–6, about Level 2 (Phase 2)'],['<b>Strands</b>','Communication (asking and answering how someone is) · Language Knowledge (Kei te + feeling word + ahau/koe, word order) · Cultural Knowledge (caring for others’ wellbeing, manaakitanga)'],['<b>Key competencies</b>','Relating to others · Using language, symbols & texts'],['<b>Tātaiako</b>','Manaakitanga · Whanaungatanga'],['<b>Other links</b>','Hauora: naming and sharing feelings. Recycles Week 1 greetings.']],
        vr:[['<b>Term value</b>','Aroha: love God, others, self, world'],['<b>Scripture</b>','1 Peter 5:7 (add the school’s preferred translation)'],['<b>Whakaaro Pono</b>','God cares how we are feeling. When we ask ‘How are you?’ and really listen, we show aroha.'],['<b>Reflection question</b>','How can you show aroha to someone who is tired or sad today?'],['<b>Also appears in</b>','Opening and closing karakia; Kuia Mere noticing tired and hungry children in the drama; Soli Deo Gloria.']],
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student (a reference, not homework).','Mini whiteboards and pens for the exit ticket (optional).','Rehearse the words below. Practise a yawn for ngenge and a shiver for makariri.','Add the school’s karakia and choose three drama readers (rotate roles).'],
        three:'(1) <i>Kei te</i> means ‘is happening now’ and starts the sentence. (2) The order is <i>Kei te</i> + feeling word + <i>ahau</i> (I) or <i>koe</i> (you). (3) To ask, swap the feeling word for <i>pēhea</i> (how).',
        diff:['Echo as a whole class. Use faces or gestures for each feeling. Point to the colour-coded pieces. Pair with a confident partner.','Complete all steps. Ask and answer Kei te pēhea koe? with a partner, then chat using the Week 1 greeting.','Ask about someone else (Kei te pēhea ia?). Say Kāo (no) and give a reason in English. Act out the drama with their own feelings.'],
        look:'clear vowels (pēhea = PEH-heh-ah, ngenge with the ng of singer, hiakai ending in kye); Kei te first; ahau (not koe) for ‘I’; students asking Kei te pēhea koe? unprompted.',
        nx:'revisit Kei te + word + ahau for students in Starting; add ia in Lesson B.',
        rec:'Week 1: Ko ___ ahau, Ko wai koe?, Kia ora and Ka kite are recalled in the warm-up, steps 11–12 and the drama. Week 3 (Nō hea koe?) will recall Kei te pēhea koe?'
      },
      D: {
        VOC:['kei te','pēhea','pai','harikoa','ngenge','hiakai','pōuri','hōhā','mauiui','wera','makariri'],
        STEPS:[['Say the little pair of words that means ‘is happening right now’.','Kei~te|k*','kay teh','‘Kei te’ comes first. It says this is happening now.','In Māori, two little words start the sentence when something is happening right now: kei te. Just say it with me: kei te.','Echo'],['How would you say: How are you?','Kei~te|k pēhea|q* koe?|a','kay teh PEH-heh-ah KOH-eh','Kei te + pēhea (how) + koe (you).',null,'Echo'],['How would you say: I am well / good?','Kei~te|k pai|n* ahau.|a','kay teh PIE ah-HOW','Swap pēhea for a feeling word. pai = good, ahau = I.',null,'Echo'],['How would you say: I am happy?','Kei~te|k harikoa|n* ahau.|a','kay teh HAH-ree-KOR-ah ah-HOW','Only the feeling word changes.',null,'Whole class'],['How would you say: I am tired?','Kei~te|k ngenge|n* ahau.|a','kay teh NGEH-ngeh ah-HOW','ng is as in singer. Add a yawn!',null,'Whole class'],['Ask your partner how they are, then answer with a feeling.','Kei~te|k pēhea|q koe?|a Kei~te|k ___|n ahau.|a','kay teh PEH-heh-ah KOH-eh · kay teh ___ ah-HOW','The question and the answer use the same pattern.','Turn to your partner. One asks, one answers, then swap. Use any feeling you know. Take 60 seconds while I listen.','Pairs'],['How would you say: How is she / he? And: She is well.','Kei~te|k pēhea|q ia?|a* →|x Kei~te|k pai|n ia.|a','kay teh PEH-heh-ah EE-ah','ia = he or she, in the same spot as ahau and koe.',null,'Whole class'],['How would you say: I am hungry?','Kei~te|k hiakai|n* ahau.|a','kay teh HEE-ah-kye ah-HOW','hiakai ends like kai.',null,'Echo'],['Say: sad, bored, sick.','pōuri|n* hōhā|n* mauiui|n*','POH-oo-ree · HOR-HAH · MOW-ee-oo-ee','They drop into the same spot after Kei te.','Say each word, class echoes, then say a full sentence: Kei te pōuri ahau.','Echo'],['How would you say: I am hot. You are cold.','Kei~te|k wera|n* ahau.|a Kei~te|k makariri|n* koe.|a','kay teh WEH-rah ah-HOW · kay teh mah-kah-REE-ree KOH-eh','Same frame, new feeling, new person.',null,'Pairs'],['How would you say: Hello, I am Tama. How are you?','Kia~ora.|w Ko|k Tama|p ahau.|a Kei~te|k pēhea|q koe?|a','KEE-ah OR-ah. kor Tama ah-HOW. kay teh PEH-heh-ah KOH-eh','Week 1 and Week 2 together.',null,'Whole class'],['Class chain: greet, say your name, ask how they are, answer, say goodbye.','Kia~ora.|w Kei~te|k pēhea|q koe?|a Kei~te|k ___|n ahau.|a Ka~kite!|w','KEE-ah OR-ah… kay teh PEH-heh-ah KOH-eh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ki te Kura — At School',cast:{'Hana':'#F2C98A','Tama':'#A1CD3F','Kuia Mere':'#56E5E5'},lines:[['Hana','Kia ora, Tama! Kei te pēhea koe?','Hello, Tama! How are you?',''],['Tama','Kia ora, Hana. Kei te ngenge ahau.','Hello, Hana. I am tired.','(yawns)'],['Hana','Kei te mauiui koe?','Are you sick?','(looks worried)'],['Tama','Kāo, kei te hiakai ahau.','No, I am hungry.','(rubs tummy)'],['Kuia Mere','Kia ora, tamariki! Ko Kuia Mere ahau.','Hello, children! I am Kuia Mere.','(arms open wide)'],['Kuia Mere','Kei te pēhea koe, Hana?','How are you, Hana?',''],['Hana','Kei te harikoa ahau!','I am happy!','(smiles)'],['Kuia Mere','Haere mai, Tama.','Welcome, Tama.','(offers a sandwich; to the audience, in English) Aroha notices when someone is tired or hungry.'],['Tama','Tēnā koe, Kuia. Kei te pai ahau.','Thank you, Kuia. I am well.','(eats happily)'],['Hana','Ka kite, Kuia! Ka kite, Tama!','See you, Kuia! See you, Tama!','(waves)']]},
        EX:[['Say in te reo: ‘How are you?’','Kei te pēhea koe?'],['What does ‘Kei te harikoa ahau’ mean?','I am happy.'],['Choose to say ‘I am tired’: Kei te ngenge ____ (ahau / koe)','ahau'],['Say in te reo: ‘I am hungry.’','Kei te hiakai ahau.'],['Stretch: greet your partner, say your name, ask how they are and answer.','Kia ora. Ko ___ ahau. Kei te pēhea koe? Kei te ___ ahau.']],
        CE:['Starting with Ko instead of Kei te','Mixing up ahau and koe','Choosing koe','Leaving out Kei te','Missing a part of the chat'],
        T:'T1 W2 Lesson A',
        LP:{title:'Kei te pēhea koe? — How are you?',val:'Aroha · 1 Peter 5:7',pat:['Kei te pēhea koe?','Kei te ________ ahau.','Kei te ________ ia.'],swap:'Feelings: pai · harikoa · ngenge · hiakai · pōuri · hōhā · mauiui · wera · makariri'}
      }
    };

    // ── Lesson B · Kei te ngenge koe? — Are you tired? ──
    const B = {
      P: {
        w:2,
        l:'B',
        ch:'Kei~te|k ngenge|n koe?|a',
        sub:'Are you tired? Today we ask yes or no questions about feelings and say how strongly we feel.',
        say:'Kia ora everyone! Last time we said how we feel. Today we ask questions about feelings, answer yes or no, and say how strongly we feel. Still no writing: listen, think and speak.',
        pron:'Kei te ngenge koe? = kay teh NGEH-ngeh KOH-eh',
        li:'ask and answer yes or no questions about feelings and say how strongly we feel in te reo.',
        succ:['I can say how strongly I feel: Kei te tino harikoa ahau.','I can ask and answer: Kei te ngenge koe? Āe, kei te ngenge ahau.','I can ask about someone else: Kei te hiakai ia? Kāo, kei te harikoa ia.'],
        wp:'We can notice and care for each other.',
        ref:'Galatians 6:2',
        mom:'When we notice how others are feeling and help, we show aroha.',
        q:'What is one small thing you can do for someone who is tired or hungry?',
        recall:[['How do you say: How are you?','Kei te pēhea koe?'],['How do you say: I am tired?','Kei te ngenge ahau.'],['How do you say: Who are you?','Ko wai koe?'],['How do you say: My name is Sam?','Ko Sam tōku ingoa.']],
        rtag:'Weeks 1 and 2',
        rtxt:'Remember when… Week 1 and Week 2 patterns (4 quick prompts)',
        refl:'Who did you notice and care for today?',
        next:'Week 3: Where are you from? (Nō hea koe?)',
        vsay:'Say each word and the class echoes. Same vocab card as Lesson A, with two stretch words today: āe (yes) and tino (very). Act out the feelings again.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 10 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: a question uses the same words as a statement, with a rising voice. Prompt 3: Kāo.',
        xresc:'Common error: koe, ia or ahau in the wrong place. Say: Kei te + feeling + who. The who comes last.',
        xpron:'āe = AH-eh · tino = TEE-nor',
        cur:[['<b>Learning area</b>','Learning Languages: Te Reo Māori (English-medium) · Years 5–6, about Level 2 (Phase 2)'],['<b>Strands</b>','Communication (yes/no questions about feelings, asking about others) · Language Knowledge (Kei te + feeling + koe/ia/ahau, tino, āe/kāo) · Cultural Knowledge (noticing and caring for others, manaakitanga)'],['<b>Key competencies</b>','Relating to others · Using language, symbols & texts'],['<b>Tātaiako</b>','Manaakitanga · Whanaungatanga'],['<b>Other links</b>','Hauora: naming and sharing feelings. Recycles Week 1 and Week 2 Lesson A.']],
        vr:[['<b>Term value</b>','Aroha: love God, others, self, world'],['<b>Scripture</b>','Galatians 6:2 (add the school’s preferred translation)'],['<b>Whakaaro Pono</b>','We can notice and care for each other. When we notice how others are feeling and help, we show aroha.'],['<b>Reflection question</b>','What is one small thing you can do for someone who is tired or hungry?'],['<b>Also appears in</b>','Opening and closing karakia; Kuia Mere noticing tired and hungry children in the drama; Soli Deo Gloria.']],
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add āe (yes) and tino (very) as the two stretch words, written or spoken.','Mini whiteboards and pens for the exit ticket (optional).','Rehearse the words below. Practise a rising voice for the yes/no questions.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles through the term.'],
        three:'(1) A yes/no question uses the same words as the statement, but your voice goes up: <i>Kei te ngenge koe?</i> (2) Answer with <i>Āe</i> (yes) or <i>Kāo</i> (no), then the full sentence. (3) <i>tino</i> means very and goes straight after <i>kei te</i>.',
        diff:['Echo as a whole class before pairs. Use faces and gestures for each feeling. Use a sentence strip (Kei te ____ ahau). Pair with a confident partner.','Complete all steps. Ask and answer Kei te ngenge koe? with a partner, then chat about how someone else is.','Add tino to any answer. Ask about a third person. Explain how a question differs from a statement. Act out the drama with their own feelings.'],
        look:'Clear vowels (āe = AH-eh, tino = TEE-nor, pēhea, ngenge); a rising voice for questions; Kei te first with koe/ia/ahau at the end; Āe and Kāo used naturally.',
        nx:'revisit the question form with students in Starting; move to Week 3 (Nō hea koe?).',
        rec:'Week 1 greetings and names, and Week 2 Lesson A feelings, are recalled in the warm-up, steps 1, 11–12 and the drama. Week 3 (Nō hea koe?) will recall Kei te pēhea koe?'
      },
      D: {
        VOC:[...A.D.VOC,'āe','tino'],
        STEPS:[['Quick recap: say, Hello, I am Tama. How are you?','Kia~ora.|w Ko|k Tama|p ahau.|a Kei~te|k pēhea|q koe?|a','KEE-ah OR-ah. kor Tama ah-HOW. kay teh PEH-heh-ah KOH-eh','Weeks 1 and 2, stacked.',null,'Whole class'],['How would you say: I am very happy?','Kei~te|k tino|q* harikoa|n ahau.|a','kay teh TEE-nor HAH-ree-KOR-ah ah-HOW','tino = very. It goes straight after kei te.','Last lesson we said Kei te harikoa ahau. To say very happy, put one little word in: tino. Take a moment… (wait 3 seconds)… Kei te tino harikoa ahau. Say it with me.','Echo'],['How would you say: I am very tired?','Kei~te|k tino|q ngenge|n ahau.|a','kay teh TEE-nor NGEH-ngeh ah-HOW','Same tino, new feeling.',null,'Whole class'],['How would you say: Are you tired?','Kei~te|k ngenge|n koe?|a*','kay teh NGEH-ngeh KOH-eh','The same words as before, but koe now asks the question. Your voice goes up.',null,'Echo'],['How would you say: Yes, I am tired.','Āe,|w* kei~te|k ngenge|n ahau.|a','AH-eh, kay teh NGEH-ngeh ah-HOW','Āe = yes, then the full sentence.',null,'Echo'],['How would you say: No, I am hungry.','Kāo,|w* kei~te|k hiakai|n ahau.|a','KAH-or, kay teh HEE-ah-kye ah-HOW','Kāo = no, then say how you really are.',null,'Echo'],['Ask your partner if they are hungry, then answer yes or no.','Kei~te|k hiakai|n koe?|a Āe/Kāo,|w kei~te|k ___|n ahau.|a','kay teh HEE-ah-kye KOH-eh · AH-eh / KAH-or, kay teh ___ ah-HOW','Question, then yes or no, then the full sentence.','Turn to your partner. One asks if the other is hungry, the other answers yes or no, then swap. Try another feeling after. Take 60 seconds while I listen.','Pairs'],['How would you say: Is she / he sad?','Kei~te|k pōuri|n ia?|a*','kay teh POH-oo-ree EE-ah','ia = he or she, in the same slot as koe.',null,'Whole class'],['How would you say: No, she is happy.','Kāo,|w kei~te|k harikoa|n ia.|a','KAH-or, kay teh HAH-ree-KOR-ah EE-ah','Same frame, new person.',null,'Pairs'],['How would you say: How are you, Hana?','Kei~te|k pēhea|q koe,|a Hana?|p*','kay teh PEH-heh-ah KOH-eh, Hana','Put the name at the end to speak to someone.',null,'Echo'],['Greet a friend, ask how they are, and answer very well.','Kia~ora.|w Kei~te|k pēhea|q koe?|a Kei~te|k tino|q pai|n ahau.|a','KEE-ah OR-ah. kay teh PEH-heh-ah KOH-eh. kay teh TEE-nor PIE ah-HOW','All the pieces together.',null,'Whole class'],['Class chain: greet the next person, ask if they are hungry, answer, say goodbye.','Kia~ora.|w Kei~te|k hiakai|n koe?|a Kāo,|w kei~te|k ___|n ahau.|a Ka~kite!|w','KEE-ah OR-ah… kay teh HEE-ah-kye KOH-eh… KAH-or, kay teh ___ ah-HOW','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Wā Kai — Morning Tea',cast:{'Hana':'#F2C98A','Tama':'#A1CD3F','Kuia Mere':'#56E5E5'},lines:[['Hana','Kia ora, Tama! Kei te pēhea koe?','Hello, Tama! How are you?',''],['Tama','Kia ora, Hana. Kei te tino ngenge ahau.','Hello, Hana. I am very tired.','(yawns)'],['Hana','Kei te hiakai koe?','Are you hungry?','(rubs tummy)'],['Tama','Āe, kei te tino hiakai ahau!','Yes, I am very hungry!',''],['Kuia Mere','Kia ora, tamariki!','Hello, children!','(arms open wide)'],['Kuia Mere','Kei te pēhea koe, Hana?','How are you, Hana?',''],['Hana','Kei te pai ahau. Kei te ngenge ia.','I am well. He is tired.','(points at Tama)'],['Kuia Mere','Kei te hiakai koe, Tama?','Are you hungry, Tama?',''],['Tama','Āe, Kuia.','Yes, Kuia.',''],['Kuia Mere','Haere mai, Tama. Haere mai, Hana.','Welcome, Tama. Welcome, Hana.','(hands out food; to the audience, in English) We show aroha when we notice how others are and help.'],['Tama','Tēnā koe, Kuia. Kei te tino pai ahau.','Thank you, Kuia. I am very well.','(eats happily)'],['Hana','Ka kite, Kuia!','See you, Kuia!','(Tama waves too)']]},
        EX:[['Say in te reo: ‘Are you tired?’','Kei te ngenge koe?'],['What does ‘Kei te tino harikoa ahau’ mean?','I am very happy.'],['Choose to say ‘No, I am sad’: ____, kei te pōuri ahau. (Āe / Kāo)','Kāo'],['Say in te reo: ‘Is she hungry?’','Kei te hiakai ia?'],['Stretch: ask your partner if they are cold, and answer yes or no.','Kei te makariri koe? Āe, kei te makariri ahau. / Kāo, kei te ___ ahau.']],
        CE:['Putting koe or ia first (English order)','Forgetting tino = very','Choosing Āe','Using koe instead of ia','Forgetting Āe or Kāo'],
        T:'T1 W2 Lesson B',
        LP:{title:'Kei te ngenge koe? — Are you tired?',val:'Aroha · Galatians 6:2',pat:['Kei te ________ koe?','Āe / Kāo, kei te ________ ahau.','Kei te tino ________ ahau.'],swap:'Feelings: pai · harikoa · ngenge · hiakai · pōuri · hōhā · mauiui · wera · makariri'}
      }
    };

    addLessons({ '1.2.A': A, '1.2.B': B });
  }

  /* ──────── WEEK 3 · Where are you from? ──────── */
  {
    addGlossary({
      "nō":["from (where you belong)","nor",3],
      "nō hea":["where from","nor HEH-ah",3],
      "hea":["where / which","HEH-ah",3],
      "aotearoa":["New Zealand","ow-TEH-ah-ROR-ah",3],
      "te waipounamu":["the South Island","teh WHY-poh-oo-NAH-moo",3],
      "te ika-a-māui":["the North Island","teh EE-kah-ah-MAH-oo-ee",3],
      "tāone":["town / city","TAH-or-neh",3],
      "kāinga":["home","KAH-ee-ngah",3],
      "kura":["school","KOO-rah",3],
      "konei":["here","KOR-neh-ee",3],
      "ōtautahi":["Christchurch","OR-tow-TAH-hee",3],
      "ōtepoti":["Dunedin","OR-teh-POR-tee",3],
      "ahitereiria":["Australia","ah-hee-teh-RAY-ree-ah",3],
      "ingarangi":["England","ee-ngah-RAH-ngee",3]
    });
    addCapitalised(['Aotearoa','Te Waipounamu','Te Ika-a-Māui','Ōtautahi','Ōtepoti','Ahitereiria','Ingarangi']);

    // ── Lesson A · Nō hea koe? — Where are you from? ──
    const A = {
      P: {
        w:3,
        l:'A',
        ch:'Nō|k hea|q koe?|a',
        sub:'Where are you from? Today we learn to say where we are from and to ask someone else.',
        say:'Kia ora everyone! Week 1 was who we are, Week 2 was how we feel. Today we say where we are from. Still no writing: listen, think and speak.',
        pron:'Nō hea koe? = nor HEH-ah KOH-eh',
        li:'say where we are from and ask where someone is from in te reo.',
        succ:['I can say where I am from: Nō Aotearoa ahau.','I can ask ‘Where are you from?’: Nō hea koe?','I can chat: Kia ora. Ko ___ ahau. Nō ___ ahau. Nō hea koe?'],
        wp:'God knows where each of us comes from.',
        ref:'Acts 17:26',
        mom:'When we ask where someone is from and really listen to the answer, we show aroha.',
        q:'What is special about the place you call home?',
        recall:[['How do you say: Who are you?','Ko wai koe?'],['How do you say: I am tired?','Kei te ngenge ahau.'],['How do you say: How are you?','Kei te pēhea koe?']],
        rtag:'Weeks 1 and 2',
        rtxt:'Remember when… Weeks 1 and 2 (3 quick prompts)',
        refl:'Who did you ask where they are from, and what did you learn?',
        next:'Lesson B: where are our friends and teachers from?',
        vsay:'Say each word and the class echoes. Gestures: point down for konei (here), sweep an arm for Aotearoa, draw a roof for kāinga. Say place names slowly, one vowel at a time.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 10 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 3: nō, not ko. Prompt 4: ia, not koe.',
        xresc:'Common error: Ko for from. Say: ko is for who you are, nō is for where you are from.',
        xpron:'Ōtautahi = OR-tow-TAH-hee · konei = KOR-neh-ee',
        cur:curriculumRows('Communication (saying and asking where someone is from) · Language Knowledge (Nō + place + ahau/koe/ia, word order, place-name pronunciation) · Cultural Knowledge (places and belonging, Aotearoa and its two main islands)','Aotearoa New Zealand’s Histories: introduce the local iwi and local place names (confirm with local rūnanga). Recycles Weeks 1 and 2.'),
        vr:valueRows('Acts 17:26','God knows where each of us comes from. When we ask where someone is from and really listen, we show aroha.','What is special about the place you call home?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student (a reference, not homework).','Decide your own town or city name for step 6, and check its te reo name with your local rūnanga or te reo lead.','Rehearse the place names below, one vowel at a time.','Choose three drama readers (Hana, Sam, Kaiako Rose) and rotate roles through the term.'],
        three:'(1) <i>Nō</i> means ‘from’ and starts the sentence, with a long ō. (2) The order is <i>Nō</i> + place + <i>ahau</i> (I), <i>koe</i> (you) or <i>ia</i> (he/she). (3) To ask, swap the place for <i>hea</i> (where).',
        diff:['Echo as a whole class. Point to the colour-coded pieces. Use a sentence strip (Nō ___ ahau). Start with Aotearoa and konei, which are easiest to say. Pair with a confident partner.','Complete all steps. Ask and answer Nō hea koe? with a partner, then chat using the Week 1 and 2 patterns.','Add Ko ___ tōku tāone / kāinga / kura. Ask about a third person (Nō hea ia?). Explain why nō and ko are different.'],
        look:'Long ō in nō; clear vowels in place names (Ōtautahi = OR-tow-TAH-hee, konei = KOR-neh-ee); nō first with ahau/koe/ia last; students asking Nō hea koe? unprompted.',
        nx:'revisit Nō + place + ahau for students in Starting; add yes/no questions in Lesson B.',
        rec:'Weeks 1 and 2 (Ko wai koe?, Kei te pēhea koe?, Kei te ngenge ahau) are recalled in the warm-up. Steps 12–13 and the drama stack Weeks 1–3. Lesson B recalls Nō hea koe?'
      },
      D: {
        VOC:['nō','hea','Aotearoa','Te Waipounamu','Te Ika-a-Māui','tāone','kāinga','kura','konei','Ōtautahi'],
        STEPS:[
          ['Say the little word that means ‘from’, where you belong.','Nō|k*','nor','‘Nō’ says where you are from. It comes first and has a long, rounded ō.','Last week ko pointed at who someone is. Now a new little word points at where someone is from: nō. Don’t write anything down. Just say it with me: nō.','Echo'],
          ['How would you say: Where are you from?','Nō|k hea|q* koe?|a','nor HEH-ah KOH-eh','hea = where. It slides into the place’s spot.',null,'Echo'],
          ['How would you say: I am from New Zealand?','Nō|k Aotearoa|p* ahau.|a','nor ow-TEH-ah-ROR-ah ah-HOW','Nō + place + ahau (I).','Don’t write anything down. Nō goes first, then the place, then ahau for I. So… how would you say ‘I am from Aotearoa’? Take a moment… (wait 3 seconds)… ‘Nō Aotearoa ahau.’ Say it with me.','Echo'],
          ['How would you say: I am from Christchurch?','Nō|k Ōtautahi|p* ahau.|a','nor OR-tow-TAH-hee ah-HOW','Swap the place and the sentence stays the same.',null,'Echo'],
          ['How would you say: I am from here?','Nō|k konei|p* ahau.|a','nor KOR-neh-ee ah-HOW','konei = here.',null,'Whole class'],
          ['Now say where YOU are from.','Nō|k ___|p ahau.|a','nor ___ ah-HOW','Same pattern, your own place.','Use your own town or city (check its te reo name with your local rūnanga or te reo lead). Students from other places can say theirs in English.','Whole class'],
          ['Ask your partner where they are from, then answer.','Nō|k hea|q koe?|a Nō|k ___|p ahau.|a','nor HEH-ah KOH-eh · nor ___ ah-HOW','The question and the answer use the same pattern.','Turn to your partner. One asks, one answers, then swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: Where is she / he from? And: She is from Christchurch.','Nō|k hea|q ia?|a* →|x Nō|k Ōtautahi|p ia.|a','nor HEH-ah EE-ah','ia = he or she, in the same spot as ahau and koe.',null,'Whole class'],
          ['How would you say: I am from the South Island. He is from the North Island.','Nō|k Te~Waipounamu|p* ahau.|a Nō|k Te~Ika-a-Māui|p* ia.|a','nor teh WHY-poh-oo-NAH-moo ah-HOW · nor teh EE-kah-ah-MAH-oo-ee EE-ah','The two big islands are place names too.',null,'Echo'],
          ['How would you say: Christchurch is my city.','Ko|k Ōtautahi|p tōku|a tāone.|n*','kor OR-tow-TAH-hee TOH-koo TAH-or-neh','Ko is back from Week 1: Ko + place + tōku + thing. tāone = town or city.',null,'Echo'],
          ['How would you say: Aotearoa is my home. ___ is my school.','Ko|k Aotearoa|p tōku|a kāinga.|n* Ko|k ___|p tōku|a kura.|n*','kor ow-TEH-ah-ROR-ah TOH-koo KAH-ee-ngah · kor ___ TOH-koo KOO-rah','Same shape, new things: kāinga = home, kura = school.',null,'Whole class'],
          ['How would you say: Hello, I am Sam. How are you? I am from Christchurch.','Kia~ora.|w Ko|k Sam|p ahau.|a Kei~te|k pēhea|q koe?|a Nō|k Ōtautahi|p ahau.|a','KEE-ah OR-ah. kor Sam ah-HOW. kay teh PEH-heh-ah KOH-eh. nor OR-tow-TAH-hee ah-HOW','Weeks 1, 2 and 3 stacked.',null,'Whole class'],
          ['Class chain: greet, say your name, say where you are from, ask where they are from, goodbye.','Kia~ora.|w Ko|k ___|p ahau.|a Nō|k ___|p ahau.|a Nō|k hea|q koe?|a Ka~kite!|w','KEE-ah OR-ah… nor ___ ah-HOW. nor HEH-ah KOH-eh… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Manuhiri — The Visitor',cast:CAST_SAM_KAIAKO,lines:[['Kaiako Rose','Kia ora, tamariki! Haere mai, Sam.','Hello, children! Welcome, Sam.','(opens the door)'],['Sam','Tēnā koe, Kaiako. Ko Sam ahau.','Greetings, teacher. I am Sam.','(nervous smile)','T1W1'],['Hana','Kia ora, Sam. Ko Hana ahau. Nō hea koe?','Hello, Sam. I am Hana. Where are you from?','','T1W1'],['Sam','Nō Ōtepoti ahau.','I am from Dunedin.',''],['Hana','Nō konei ahau.','I am from here.','(points at the floor)'],['Kaiako Rose','Kei te pēhea koe, Sam?','How are you, Sam?','','T1W2'],['Sam','Kei te ngenge ahau, Kaiako.','I am tired, teacher.','(yawns)','T1W2'],['Kaiako Rose','Nō hea ia, Hana?','Where is he from, Hana?','(points at Sam)'],['Hana','Nō Ōtepoti ia.','He is from Dunedin.',''],['Kaiako Rose','Ko Aotearoa tōku kāinga. Haere mai, Sam!','Aotearoa is my home. Welcome, Sam!','(to the audience, in English) Everyone belongs here, and God knows where each of us comes from.'],['Sam','Tēnā koe, Kaiako. Kei te harikoa ahau!','Thank you, teacher. I am happy!','(smiles)'],['Hana','Ka kite, Kaiako!','See you, teacher!','(Sam waves too)']]},
        EX:[['Say in te reo: ‘Where are you from?’','Nō hea koe?'],['What does ‘Nō Ōtautahi ahau’ mean?','I am from Christchurch.'],['Choose to say ‘I am from Aotearoa’: ____ Aotearoa ahau. (Nō / Ko)','Nō'],['Say in te reo: ‘Where is she from?’','Nō hea ia?'],['Stretch: greet your partner, say your name and where you are from, then ask where they are from.','Kia ora. Ko ___ ahau. Nō ___ ahau. Nō hea koe?']],
        CE:['Using Ko instead of Nō for ‘from’','Forgetting nō means from','Choosing Ko','Using koe instead of ia','Missing a part of the chat'],
        T:'T1 W3 Lesson A',
        LP:{title:'Nō hea koe? — Where are you from?',val:'Aroha · Acts 17:26',pat:['Nō hea koe?','Nō ________ ahau.','Ko ________ tōku kāinga.'],swap:'Swap the last word: ahau = I · koe = you · ia = he/she. Places: Aotearoa · Te Waipounamu · Te Ika-a-Māui · Ōtautahi · konei'}
      }
    };

    // ── Lesson B · Nō hea tō hoa? — Where is your friend from? ──
    const B = {
      P: {
        w:3,
        l:'B',
        ch:'Nō|k hea|q tō|a hoa?|n',
        sub:'Where is your friend from? Today we ask yes or no questions about where people are from.',
        say:'Kia ora everyone! Last lesson we said where we are from. Today we talk about our friends and teachers, and ask yes or no questions. Still no writing: listen, think and speak.',
        pron:'Nō hea tō hoa? = nor HEH-ah TOH HOR-ah',
        li:'ask and answer where friends, teachers and others are from, including yes or no questions, in te reo.',
        succ:['I can say where someone is from: Nō Ōtepoti tōku hoa.','I can ask and answer: Nō Ōtautahi koe? Āe, nō Ōtautahi ahau.','I can ask about a friend and a teacher: Nō hea tō hoa? Nō hea tō kaiako?'],
        wp:'God asks us to welcome people we do not know yet.',
        ref:'Hebrews 13:2',
        mom:'When we welcome someone new and ask where they are from, we show aroha.',
        q:'How could you welcome someone new to your class this week?',
        recall:[['How do you say: Where are you from?','Nō hea koe?'],['How do you say: I am from Aotearoa?','Nō Aotearoa ahau.'],['How do you say: Who is your friend?','Ko wai tō hoa?'],['How do you say: Yes, I am well?','Āe, kei te pai ahau.']],
        rtag:'Weeks 1 to 3',
        rtxt:'Remember when… Weeks 1 to 3 (4 quick prompts)',
        refl:'Who did you welcome today?',
        next:'Week 4: My whānau (Ko wai tō māmā?)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: Ahitereiria (Australia) and Ingarangi (England). Say each word, class echoes. Say place names slowly, one vowel at a time.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 2: a question uses the same words as a statement, with a rising voice. Prompt 3: Kāo.',
        xresc:'Common error: tōku hoa before the place. Say: the place comes straight after nō.',
        xpron:'Ahitereiria = ah-hee-teh-RAY-ree-ah · Ingarangi = ee-ngah-RAH-ngee',
        cur:curriculumRows('Communication (yes/no questions, asking about friends and teachers) · Language Knowledge (Nō + place + koe/ia, tōku/tō + noun, Āe/Kāo) · Cultural Knowledge (welcoming newcomers, manaakitanga, places people belong to)','Recycles Weeks 1 and 2. Invite students from other countries to share their place (with permission).'),
        vr:valueRows('Hebrews 13:2','God asks us to welcome people we do not know yet. When we welcome someone new and ask where they are from, we show aroha.','How could you welcome someone new to your class this week?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add Ahitereiria (Australia) and Ingarangi (England) as the two stretch words, written or spoken.','Mini whiteboards and pens for the exit ticket (optional).','Rehearse the new place names below, one vowel at a time.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles through the term.'],
        three:'(1) A yes/no question uses the same words as the statement, but your voice goes up: <i>Nō Ōtautahi koe?</i> (2) Answer <i>Āe</i> or <i>Kāo</i>, then the full sentence. (3) To talk about someone, put the place first, then who: <i>Nō Ōtepoti tōku hoa.</i>',
        diff:['Echo as a whole class before pairs. Use a map or sentence strip (Nō ___ tōku hoa). Pair with a confident partner.','Complete all steps. Ask and answer Nō Ōtautahi koe? with a partner, then ask about a friend.','Ask about a teacher and a third person (Nō hea ia?). Add Ahitereiria and Ingarangi. Explain how a question differs from a statement.'],
        look:'Rising voice for questions; Āe and Kāo used naturally; the place directly after nō; tō (your) vs tōku (my); clear vowels in Ahitereiria and Ingarangi.',
        nx:'revisit the question form with students in Starting; move to Week 4 (My whānau).',
        rec:'Lesson A (Nō hea koe?, Nō ___ ahau) plus Week 1 (Ko wai tō hoa?, Tēnā koe) and Week 2 (Āe/Kāo, Kei te pēhea koe?) are recalled in the warm-up, steps 1, 6, 11 and the drama. Week 4 will recall tōku and tō.'
      },
      D: {
        VOC:[...A.D.VOC,'Ahitereiria','Ingarangi'],
        STEPS:[
          ['Quick recap: Hello, I am Sam. Where are you from? I am from Christchurch.','Kia~ora.|w Ko|k Sam|p ahau.|a Nō|k hea|q koe?|a Nō|k Ōtautahi|p ahau.|a','KEE-ah OR-ah. kor Sam ah-HOW. nor HEH-ah KOH-eh. nor OR-tow-TAH-hee ah-HOW','Everything from Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Are you from Christchurch?','Nō|k Ōtautahi|p koe?|a*','nor OR-tow-TAH-hee KOH-eh','Same words as a statement, but koe asks the question. Your voice goes up.','Last lesson we said Nō Ōtautahi ahau. Swap ahau for koe and lift your voice at the end, and it becomes a question. Take a moment… (wait 3 seconds)… Nō Ōtautahi koe? Say it with me.','Echo'],
          ['How would you say: Yes, I am from Christchurch.','Āe,|w* nō|k Ōtautahi|p ahau.|a','AH-eh, nor OR-tow-TAH-hee ah-HOW','Āe = yes, then the full sentence.',null,'Echo'],
          ['How would you say: No, I am from Dunedin.','Kāo,|w* nō|k Ōtepoti|p ahau.|a','KAH-or, nor OR-teh-POR-tee ah-HOW','Kāo = no, then say where you really are from.',null,'Echo'],
          ['Ask your partner if they are from Christchurch, then answer yes or no.','Nō|k Ōtautahi|p koe?|a Āe/Kāo,|w nō|k ___|p ahau.|a','nor OR-tow-TAH-hee KOH-eh · AH-eh / KAH-or, nor ___ ah-HOW','Question, then yes or no, then the full sentence.','Turn to your partner. One asks if the other is from Christchurch, the other answers yes or no, then swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: Where is your friend from?','Nō|k hea|q tō|a hoa?|n','nor HEH-ah TOH HOR-ah','Week 1’s tō hoa fits straight in.',null,'Echo'],
          ['How would you say: My friend is from Dunedin.','Nō|k Ōtepoti|p tōku|a hoa.|n*','nor OR-teh-POR-tee TOH-koo HOR-ah','The place comes straight after nō, then who it is about.',null,'Whole class'],
          ['How would you say: Where is your teacher from?','Nō|k hea|q tō|a kaiako?|n','nor HEH-ah TOH KYE-ah-kor','Swap the person: hoa, kaiako.',null,'Pairs'],
          ['How would you say: My teacher is from Australia.','Nō|k Ahitereiria|p* tōku|a kaiako.|n','nor ah-hee-teh-RAY-ree-ah TOH-koo KYE-ah-kor','Stretch word: Ahitereiria = Australia.',null,'Echo'],
          ['How would you say: Is he from England? No, he is from Australia.','Nō|k Ingarangi|p* ia?|a Kāo,|w nō|k Ahitereiria|p ia.|a','nor ee-ngah-RAH-ngee EE-ah? KAH-or, nor ah-hee-teh-RAY-ree-ah EE-ah','Ingarangi = England. ia = he or she.',null,'Whole class'],
          ['How would you say: Greetings, teacher. Where are you from?','Tēnā~koe.|w Nō|k hea|q koe?|a','TEH-nah KOH-eh. nor HEH-ah KOH-eh','A respectful greeting plus the question.',null,'Pairs'],
          ['Class chain: greet, ask if they are from a place, answer yes or no, say goodbye.','Kia~ora.|w Nō|k ___|p koe?|a Āe/Kāo,|w nō|k ___|p ahau.|a Ka~kite!|w','KEE-ah OR-ah… nor ___ KOH-eh… AH-eh / KAH-or, nor ___ ah-HOW','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Haere Mai! — Welcome!',cast:CAST_TAMA_KUIA,lines:[['Kuia Mere','Kia ora, tamariki!','Hello, children!','(arms open wide)'],['Tama','Tēnā koe, Kuia. Ko Tama ahau.','Greetings, Kuia. I am Tama.','','T1W1'],['Kuia Mere','Nō hea koe, Tama?','Where are you from, Tama?',''],['Tama','Nō konei ahau.','I am from here.',''],['Kuia Mere','Nō hea tō hoa?','Where is your friend from?','(looks at Hana)'],['Tama','Nō Ahitereiria tōku hoa.','My friend is from Australia.','','T1W1'],['Hana','Ko Hana ahau. Kia ora, Kuia!','I am Hana. Hello, Kuia!','(waves)','T1W1'],['Kuia Mere','Nō Ingarangi koe, Hana?','Are you from England, Hana?','(tilts head, smiling)'],['Hana','Kāo, nō Ahitereiria ahau!','No, I am from Australia!','(laughs)','T1W2'],['Kuia Mere','Kei te pēhea koe, Hana?','How are you, Hana?','','T1W2'],['Hana','Kei te harikoa ahau.','I am happy.',''],['Kuia Mere','Haere mai, Hana. Haere mai, Tama.','Welcome, Hana. Welcome, Tama.','(to the audience, in English) Everyone who comes to our school is welcome. That is aroha.'],['Tama','Ka kite, Kuia!','See you, Kuia!','(Hana waves too)']]},
        EX:[['Say in te reo: ‘Where is your friend from?’','Nō hea tō hoa?'],['What does ‘Nō Ōtepoti koe?’ mean?','Are you from Dunedin?'],['Choose to say ‘No, I am from England’: ____, nō Ingarangi ahau. (Āe / Kāo)','Kāo'],['Say in te reo: ‘My teacher is from Australia.’','Nō Ahitereiria tōku kaiako.'],['Stretch: ask your partner if they are from Christchurch, answer yes or no, then ask where their friend is from.','Nō Ōtautahi koe? Āe/Kāo, nō ___ ahau. Nō hea tō hoa?']],
        CE:['Forgetting a question is the same words with a rising voice','Mixing up Āe and Kāo','Choosing Āe','Putting tōku kaiako before the place','Leaving out nō'],
        T:'T1 W3 Lesson B',
        LP:{title:'Nō hea tō hoa? — Where is your friend from?',val:'Aroha · Hebrews 13:2',pat:['Nō ________ koe?','Āe / Kāo, nō ________ ahau.','Nō ________ tōku hoa.'],swap:'Swap the person: koe = you · ia = he/she · tōku hoa = my friend · tōku kaiako = my teacher'}
      }
    };

    addLessons({ '1.3.A': A, '1.3.B': B });
  }

  /* ──────── WEEK 4 · My whānau ──────── */
  {
    addGlossary({
      "whānau":["family / extended family","FAH-now",4],
      "māmā":["mum","MAH-mah",4],
      "pāpā":["dad","PAH-pah",4],
      "tuakana":["older brother or sister (same gender as you)","too-ah-KAH-nah",4],
      "teina":["younger brother or sister (same gender as you)","TEH-ee-nah",4],
      "kuia":["grandmother / respected older woman","KOO-ee-ah",4],
      "koroua":["grandfather / respected older man","koh-ROH-oo-ah",4],
      "tamariki":["children","tah-mah-REE-kee",4],
      "tungāne":["brother (of a girl or woman)","too-NGAH-neh",4],
      "tuahine":["sister (of a boy or man)","too-ah-HEE-neh",4]
    });

    // ── Lesson A · Ko wai tō māmā? — Who is your mum? ──
    const A = {
      P: {
        w:4,
        l:'A',
        ch:'Ko|k wai|q tō|a māmā?|n',
        sub:'Who is your mum? Today we learn the words for our whānau and how to say who they are.',
        say:'Kia ora everyone! So far we have said who we are, how we feel and where we are from. Today we talk about our whānau, our family. Still no writing: listen, think and speak. Remember that whānau is a big word. It includes any adult or relative who looks after you.',
        pron:'Ko wai tō māmā? = kor WHY TOH MAH-mah',
        li:'say who people in our whānau are and ask someone about their whānau in te reo.',
        succ:['I can say who someone in my whānau is: Ko ___ tōku māmā.','I can ask ‘Who is your mum?’: Ko wai tō māmā?','I can chat: Kia ora. Ko ___ ahau. Ko ___ tōku pāpā. Ko wai tō māmā?'],
        wp:'God places us in families.',
        ref:'Psalm 68:6',
        mom:'When we name the people who care for us and honour them, we show aroha.',
        q:'Who looks after you, and how can you show them aroha today?',
        recall:[['How do you say: Hana is my friend?','Ko Hana tōku hoa.'],['How do you say: I am tired?','Kei te ngenge ahau.'],['How do you say: I am from Aotearoa?','Nō Aotearoa ahau.']],
        rtag:'Weeks 1 to 3',
        rtxt:'Remember when… Weeks 1 to 3 (3 quick prompts)',
        refl:'Who in your whānau will you say something to in te reo today?',
        next:'Lesson B: how is your whānau? Brothers and sisters too',
        vsay:'Say each word and the class echoes. Gestures: hug yourself for whānau, wave low for tamariki, stoop with a walking stick for kuia and koroua. Hold the long ā in māmā and pāpā. Remind students whānau includes anyone who looks after them.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: tōku with a long ō and māmā with a long ā. Prompt 3: kuia (grandmother), not koroua.',
        xresc:'Common error: tō for tōku. Say: tōku is mine, tō is yours.',
        xpron:'tuakana = too-ah-KAH-nah · koroua = koh-ROH-oo-ah · tamariki = tah-mah-REE-kee',
        cur:curriculumRows('Communication (naming and asking about family members) · Language Knowledge (Ko + name + tōku + family word, Ko wai tō …?, family vocabulary) · Cultural Knowledge (whānau and whanaungatanga, honouring older people: kuia and koroua)','Whakapapa and whānau: invite students to share only what they are comfortable with, as families take many forms. Recycles Weeks 1 to 3.'),
        vr:valueRows('Psalm 68:6','God places us in families and cares for us. When we name the people who care for us and honour them, we show aroha.','Who looks after you, and how can you show them aroha today?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student (a reference, not homework).','Mini whiteboards and pens for the exit ticket (optional).','Rehearse the words below, especially tuakana, koroua and tamariki.','Be mindful that families look different. Students can name any adult or relative who cares for them. Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.'],
        three:'(1) <i>tōku</i> = my and <i>tō</i> = your, followed by the family word, just like <i>tōku ingoa</i>. (2) The order is <i>Ko</i> + name + <i>tōku</i> + family word. (3) To ask, swap the name for <i>wai</i>: <i>Ko wai tō māmā?</i>',
        diff:['Echo as a whole class before pairs. Start with māmā, pāpā and kuia. Use a sentence strip (Ko ___ tōku māmā). Let students name any caregiver. Pair with a confident partner.','Complete all steps. Ask and answer Ko wai tō māmā? with a partner, then use Week 1 to 3 greetings to chat.','Add kuia, koroua, tuakana and teina. Introduce a family member to a partner. Explain why tōku and tō are different.'],
        look:'Long ā in māmā and pāpā; tōku (my) vs tō (your); Ko first, then the name, then tōku and the family word; students asking Ko wai tō māmā? unprompted.',
        nx:'revisit tōku + family word with students in Starting; add questions about how family members are in Lesson B.',
        rec:'Week 1 (Ko ___ tōku hoa, Kia ora, Tēnā koe), Week 2 (Kei te pēhea koe?) and Week 3 (Nō hea koe?) are recalled in the warm-up, steps 1 and 11, and drama lines. Lesson B recalls Ko wai tō māmā? and adds Week 2 and 3 patterns for family.'
      },
      D: {
        VOC:['whānau','māmā','pāpā','tuakana','teina','kuia','koroua','tamariki','tōku','tō'],
        STEPS:[
          ['Quick recap: Hello, I am Sam. Hana is my friend.','Kia~ora.|w Ko|k Sam|p ahau.|a Ko|k Hana|p tōku|a hoa.|n','KEE-ah OR-ah. kor Sam ah-HOW. kor Hana TOH-koo HOR-ah','Week 1: tōku + the thing is today’s key.',null,'Whole class'],
          ['How would you say: my mum?','tōku|a māmā|n*','TOH-koo MAH-mah','māmā = mum. tōku = my, just like tōku ingoa.','Last time we said tōku hoa, my friend. Now swap the last word. In te reo, mum is māmā. Take a moment… (wait 3 seconds)… tōku māmā. Say it with me.','Echo'],
          ['How would you say: Mere is my mum.','Ko|k Mere|p tōku|a māmā.|n','kor MEH-reh TOH-koo MAH-mah','Ko + name + tōku + who they are to you.',null,'Echo'],
          ['How would you say: Tom is my dad.','Ko|k Tom|p tōku|a pāpā.|n*','kor Tom TOH-koo PAH-pah','Same shape, new word: pāpā = dad.',null,'Echo'],
          ['Now say who your mum or dad is. Use any adult who looks after you.','Ko|k ___|p tōku|a māmā/pāpā.|n','kor ___ TOH-koo MAH-mah / PAH-pah','Same pattern with your own whānau.','Every family is different. Students can use a nan, an aunty, a caregiver or any adult who looks after them. Whānau is a big word that includes all of them.','Whole class'],
          ['How would you say: Who is your mum?','Ko|k wai|q tō|a māmā?|n','kor WHY TOH MAH-mah','wai = who, tō = your. You already own these.',null,'Echo'],
          ['Ask your partner who their mum or dad is, then answer.','Ko|k wai|q tō|a māmā?|n Ko|k ___|p tōku|a māmā.|n','kor WHY TOH MAH-mah · kor ___ TOH-koo MAH-mah','The question and the answer use the same pattern.','Turn to your partner. One asks, one answers, then swap. Students may also use pāpā. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: Nan is my grandmother. Pop is my grandfather.','Ko|k Nan|p tōku|a kuia.|n* Ko|k Pop|p tōku|a koroua.|n*','kor Nan TOH-koo KOO-ee-ah · kor Pop TOH-koo koh-ROH-oo-ah','kuia and koroua also honour respected older people.',null,'Echo'],
          ['How would you say: Rangi is my older brother or sister. Aroha is my younger brother or sister.','Ko|k Rangi|p tōku|a tuakana.|n* Ko|k Aroha|p tōku|a teina.|n*','kor RAH-ngee TOH-koo too-ah-KAH-nah · kor ah-ROH-hah TOH-koo TEH-ee-nah','tuakana = older, teina = younger, with the same gender as you.','Tuakana is an older brother or sister of the same gender as you, and teina is a younger one. So a girl says tōku tuakana for her older sister, and a boy says it for his older brother. We learn brother and sister across genders in Lesson B.','Echo'],
          ['How would you say: Hello, children! Hello, family!','Kia~ora,|w tamariki!|n* Kia~ora,|w whānau!|n*','KEE-ah OR-ah, tah-mah-REE-kee · KEE-ah OR-ah, FAH-now','tamariki = children, whānau = family. Use them to greet a group.',null,'Whole class'],
          ['How would you say: Hello, I am Sam. Mere is my mum. Who is your mum?','Kia~ora.|w Ko|k Sam|p ahau.|a Ko|k Mere|p tōku|a māmā.|n Ko|k wai|q tō|a māmā?|n','KEE-ah OR-ah. kor Sam ah-HOW. kor MEH-reh TOH-koo MAH-mah. kor WHY TOH MAH-mah','Weeks 1 and 4 together.',null,'Pairs'],
          ['Class chain: greet the next person, say your name, tell who is in your whānau, ask about theirs, say goodbye.','Kia~ora.|w Ko|k ___|p ahau.|a Ko|k ___|p tōku|a pāpā.|n Ko|k wai|q tō|a pāpā?|n Ka~kite!|w','KEE-ah OR-ah… kor ___ TOH-koo PAH-pah… kor WHY TOH PAH-pah… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Whānau — The Family',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Kia ora, whānau!','Hello, children! Hello, family!','(arms open wide)'],
          ['Hana','Kia ora, Kuia. Ko Hana ahau.','Hello, Kuia. I am Hana.','(smiles)','T1W1'],
          ['Tama','Tēnā koe, Kuia. Kei te pēhea koe?','Greetings, Kuia. How are you?','','T1W2'],
          ['Kuia Mere','Kei te pai ahau. Ko wai tō māmā, Hana?','I am well. Who is your mum, Hana?','(leans in, interested)'],
          ['Hana','Ko Mere tōku māmā. Ko Tom tōku pāpā.','Mere is my mum. Tom is my dad.','(points across the room)'],
          ['Kuia Mere','Ko wai tō kuia, Tama?','Who is your grandmother, Tama?',''],
          ['Tama','Ko Nan tōku kuia. Ko Pop tōku koroua.','Nan is my grandmother. Pop is my grandfather.','(beams proudly)'],
          ['Hana','Ko Aroha tōku teina. Ko wai tō tuakana, Tama?','Aroha is my younger sister. Who is your older brother, Tama?',''],
          ['Tama','Ko Rangi tōku tuakana.','Rangi is my older brother.','(holds a hand up tall)'],
          ['Kuia Mere','Nō hea koe, Tama?','Where are you from, Tama?','','T1W3'],
          ['Tama','Nō konei ahau.','I am from here.','(points at the floor)','T1W3'],
          ['Kuia Mere','Haere mai, tamariki! Haere mai, whānau!','Welcome, children! Welcome, family!','(to the audience, in English) God places us in families, and a family is bigger than one house. Let us love one another.'],
          ['Hana','Ka kite, Kuia!','See you, Kuia!','(Tama waves too)']]},
        EX:[['Say in te reo: ‘Mere is my mum.’','Ko Mere tōku māmā.'],['What does ‘Ko wai tō pāpā?’ mean?','Who is your dad?'],['Choose to say ‘Nan is my grandmother’: Ko Nan tōku ____ (kuia / koroua)','kuia'],['Say in te reo: ‘Who is your mum?’','Ko wai tō māmā?'],['Stretch: introduce yourself and tell your partner who someone in your whānau is.','Kia ora. Ko ___ ahau. Ko ___ tōku ___.']],
        CE:['Using tō (your) instead of tōku (my)','Forgetting wai = who','Choosing koroua (grandfather)','Using tōku instead of tō','Missing a part of the introduction'],
        T:'T1 W4 Lesson A',
        LP:{title:'Ko wai tō māmā? — Who is your mum?',val:'Aroha · Psalm 68:6',pat:['Ko ________ tōku māmā.','Ko wai tō pāpā?','Ko ________ tōku kuia.'],swap:'Swap the family word: māmā · pāpā · kuia · koroua · tuakana · teina'}
      }
    };

    // ── Lesson B · Kei te pēhea tō māmā? — How is your mum? ──
    const B = {
      P: {
        w:4,
        l:'B',
        ch:'Kei~te|k pēhea|q tō|a māmā?|n',
        sub:'How is your mum? Today we ask about our whānau, brothers and sisters, and how they are.',
        say:'Kia ora everyone! Last lesson we said who is in our whānau. Today we say how they are, where they are from, and we learn brother and sister. Still no writing: listen, think and speak. Remember that every family looks different.',
        pron:'Kei te pēhea tō māmā? = kay teh PEH-heh-ah TOH MAH-mah',
        li:'ask and tell how our whānau are, where they are from, and name brothers and sisters in te reo.',
        succ:['I can say how someone in my whānau is: Kei te pai tōku māmā.','I can ask about someone’s whānau: Ko wai tō kuia? Kei te pēhea tō kuia?','I can say where they are from: Nō Ōtepoti tōku kuia.'],
        wp:'God asks us to honour and care for our family.',
        ref:'Exodus 20:12',
        mom:'When we ask about our whānau and really listen, we show aroha.',
        q:'What is one kind thing you can do for someone in your whānau this week?',
        recall:[['How do you say: Mere is my mum?','Ko Mere tōku māmā.'],['How do you say: Who is your dad?','Ko wai tō pāpā?'],['How do you say: How are you?','Kei te pēhea koe?'],['How do you say: Where are you from?','Nō hea koe?']],
        rtag:'Weeks 1 to 4',
        rtxt:'Remember when… Weeks 1 to 4 (4 quick prompts)',
        refl:'Who in your whānau did you notice and care for today?',
        next:'Week 5: What are you doing? (Kei te kai ahau)',
        vsay:'Say each word and the class echoes. Same vocab card as Lesson A, with two stretch words today: tungāne (brother of a girl) and tuahine (sister of a boy). Say them slowly and let students echo.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Kei te pēhea, then tō. Prompt 3: tungāne when a girl speaks about her brother.',
        xresc:'Common error: tōku for tō in the question. Say: you ask about their mum (tō), you answer about yours (tōku).',
        xpron:'tungāne = too-NGAH-neh · tuahine = too-ah-HEE-neh',
        cur:curriculumRows('Communication (asking and telling how family members are, where they are from) · Language Knowledge (Kei te + feeling + tōku/tō + family word, tungāne and tuahine, recycled Week 2 and 3 patterns) · Cultural Knowledge (whānau relationships and gender in sibling terms, manaakitanga)','Whakapapa and whānau: share only what students are comfortable with. Recycles Weeks 1 to 4.'),
        vr:valueRows('Exodus 20:12','God asks us to honour and care for our family. When we ask about our whānau and really listen, we show aroha.','What is one kind thing you can do for someone in your whānau this week?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add tungāne (brother) and tuahine (sister) as the two stretch words, written or spoken.','Mini whiteboards and pens for the exit ticket (optional).','Rehearse the words below, especially tungāne and tuahine.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles through the term.'],
        three:'(1) Ask about someone with <i>tō</i> (your): <i>Kei te pēhea tō māmā?</i> Answer with <i>tōku</i> (my): <i>Kei te pai tōku māmā.</i> (2) <i>Kei te</i> + feeling + who it is about, the same order as Week 2. (3) A girl says <i>tungāne</i> for her brother and a boy says <i>tuahine</i> for his sister.',
        diff:['Echo as a whole class before pairs. Use faces and gestures for each feeling. Use a sentence strip (Kei te ___ tōku māmā). Skip tungāne and tuahine until the class is confident. Pair with a confident partner.','Complete all steps. Ask and answer Kei te pēhea tō kuia? with a partner, then say where a family member is from.','Use tungāne and tuahine correctly for their own family. Add tino to a feeling. Explain the difference between tō and tōku.'],
        look:'tō (your) in questions and tōku (my) in answers; Kei te first; clear vowels (tungāne, tuahine, ngenge); Week 2 and 3 patterns reused naturally with whānau words.',
        nx:'revisit tō vs tōku with students in Starting; move to Week 5 (Kei te kai ahau).',
        rec:'Lesson A (Ko ___ tōku māmā, Ko wai tō pāpā?), Week 1 (Tēnā koe), Week 2 (Kei te pēhea koe?, feelings) and Week 3 (Nō hea koe?, Nō Ōtepoti) are recalled in the warm-up, steps 1, 7 to 11 and the drama. Week 5 will recall Kei te + word.'
      },
      D: {
        VOC:[...A.D.VOC,'tungāne','tuahine'],
        STEPS:[
          ['Quick recap: Hello, I am Sam. Mere is my mum. Tom is my dad.','Kia~ora.|w Ko|k Sam|p ahau.|a Ko|k Mere|p tōku|a māmā.|n Ko|k Tom|p tōku|a pāpā.|n','KEE-ah OR-ah. kor Sam ah-HOW. kor MEH-reh TOH-koo MAH-mah. kor Tom TOH-koo PAH-pah','Everything from Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Who is your grandmother?','Ko|k wai|q tō|a kuia?|n','kor WHY TOH KOO-ee-ah','Swap the last word: māmā, pāpā, kuia.',null,'Echo'],
          ['How would you say: Who is your older brother or sister?','Ko|k wai|q tō|a tuakana?|n','kor WHY TOH too-ah-KAH-nah','tuakana = older, with the same gender as you.',null,'Echo'],
          ['Ask your partner who their mum, dad or nan is, then answer.','Ko|k wai|q tō|a kuia?|n Ko|k ___|p tōku|a kuia.|n','kor WHY TOH KOO-ee-ah · kor ___ TOH-koo KOO-ee-ah','Question and answer share one pattern.','Turn to your partner. One asks, one answers, then swap. They can use māmā, pāpā or kuia. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: Rangi is my brother. (A girl speaking.)','Ko|k Rangi|p tōku|a tungāne.|n*','kor RAH-ngee TOH-koo too-NGAH-neh','A girl or woman says tungāne for her brother.','Last lesson tuakana and teina stayed with the same gender. When a girl talks about her brother, she says tungāne. Take a moment… (wait 3 seconds)… Ko Rangi tōku tungāne. Say it with me.','Echo'],
          ['How would you say: Mia is my sister. (A boy speaking.)','Ko|k Mia|p tōku|a tuahine.|n*','kor MEE-ah TOH-koo too-ah-HEE-neh','A boy or man says tuahine for his sister.',null,'Echo'],
          ['How would you say: How is your mum?','Kei~te|k pēhea|q tō|a māmā?|n*','kay teh PEH-heh-ah TOH MAH-mah','Week 2’s Kei te pēhea, now asking about a person.',null,'Echo'],
          ['How would you say: My mum is well.','Kei~te|k pai|n tōku|a māmā.|n','kay teh PIE TOH-koo MAH-mah','Feeling first, then who it is about.',null,'Whole class'],
          ['How would you say: My dad is very tired.','Kei~te|k tino|q ngenge|n tōku|a pāpā.|n','kay teh TEE-nor NGEH-ngeh TOH-koo PAH-pah','tino slots in again. Same frame, new person.',null,'Pairs'],
          ['Ask your partner how their mum, dad or nan is, then answer.','Kei~te|k pēhea|q tō|a kuia?|n Kei~te|k ___|n tōku|a kuia.|n','kay teh PEH-heh-ah TOH KOO-ee-ah · kay teh ___ TOH-koo KOO-ee-ah','Ask with tō (your), answer with tōku (my).','Turn to your partner. Ask how their mum, dad or nan is, then answer about yours. Swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: My nan is from Dunedin.','Nō|k Ōtepoti|p tōku|a kuia.|n','nor OR-teh-POR-tee TOH-koo KOO-ee-ah','Week 3’s place pattern, now for family.',null,'Whole class'],
          ['Class chain: greet, say your name, tell who is in your whānau and how they are, say goodbye.','Kia~ora.|w Ko|k ___|p ahau.|a Ko|k ___|p tōku|a māmā.|n Kei~te|k ___|n ia.|a Ka~kite!|w','KEE-ah OR-ah… kor ___ TOH-koo MAH-mah… kay teh ___ EE-ah… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Rā Whānau — Whānau Day',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kia ora, whānau!','Hello, children! Hello, family!','(welcomes everyone)'],
          ['Hana','Tēnā koe, Kaiako. Ko Hana ahau.','Greetings, teacher. I am Hana.','','T1W1'],
          ['Kaiako Rose','Ko wai tō māmā, Hana?','Who is your mum, Hana?',''],
          ['Hana','Ko Mere tōku māmā. Kei te pai ia.','Mere is my mum. She is well.','(points to the back)','T1W2'],
          ['Kaiako Rose','Ko wai tō pāpā, Tama?','Who is your dad, Tama?',''],
          ['Tama','Ko Tom tōku pāpā. Kei te ngenge ia.','Tom is my dad. He is tired.','(yawns)','T1W2'],
          ['Kaiako Rose','Kei te pēhea tō kuia, Tama?','How is your grandmother, Tama?',''],
          ['Tama','Kei te harikoa tōku kuia. Nō Ōtepoti ia.','My grandmother is happy. She is from Dunedin.','(smiles)','T1W3'],
          ['Hana','Ko Rangi tōku tungāne. Ko wai tō tuahine, Tama?','Rangi is my brother. Who is your sister, Tama?',''],
          ['Tama','Ko Mia tōku tuahine.','Mia is my sister.','(grins)'],
          ['Kaiako Rose','Haere mai, whānau! Kei te tino harikoa ahau.','Welcome, family! I am very happy.','(to the audience, in English) Our families are a gift from God. Let us honour them and care for them.'],
          ['Hana','Ka kite, Kaiako!','See you, teacher!','(Tama waves too)']]},
        EX:[['Say in te reo: ‘How is your mum?’','Kei te pēhea tō māmā?'],['What does ‘Kei te ngenge tōku pāpā’ mean?','My dad is tired.'],['Choose to say ‘Rangi is my brother’ (a girl speaking): Ko Rangi tōku ____ (tungāne / tuahine)','tungāne'],['Say in te reo: ‘My nan is from Dunedin.’','Nō Ōtepoti tōku kuia.'],['Stretch: ask your partner who their mum or dad is, and how they are.','Ko wai tō māmā? Ko ___ tōku māmā. Kei te pēhea ia? Kei te ___ ia.']],
        CE:['Using tōku instead of tō in the question','Mixing up tō and tōku','Choosing tuahine (sister of a boy)','Putting tōku kuia before the place','Missing a part of the question'],
        T:'T1 W4 Lesson B',
        LP:{title:'Kei te pēhea tō māmā? — How is your mum?',val:'Aroha · Exodus 20:12',pat:['Kei te pēhea tō ________?','Kei te ________ tōku māmā.','Nō ________ tōku kuia.'],swap:'Family: māmā · pāpā · kuia · koroua · tuakana · teina · tungāne (a girl’s brother) · tuahine (a boy’s sister)'}
      }
    };

    addLessons({ '1.4.A': A, '1.4.B': B });
  }

  /* ──────── WEEK 5 · What are you doing? ──────── */
  {
    addGlossary({
      "kei te aha":["what is (someone) doing","kay teh AH-hah",5],
      "aha":["what","AH-hah",5],
      "kai":["eat / food","KYE",5],
      "moe":["sleep","MOR-eh",5],
      "mahi":["work","MAH-hee",5],
      "haere":["go / walk","HIGH-reh",5],
      "ako":["learn / study","AH-kor",5],
      "pānui":["read","PAH-noo-ee",5],
      "tuhi":["write","TOO-hee",5],
      "kōrero":["talk / speak","KOH-reh-roh",5],
      "tākaro":["play","TAH-kah-roh",5],
      "waiata":["sing / song","why-AH-tah",5],
      "oma":["run","OR-mah",5],
      "kaukau":["swim / bathe","KOW-kow",5],
      "ki te":["to the / at the","kee teh",5]
    });

    // ── Lesson A · Kei te aha koe? — What are you doing? ──
    const A = {
      P: {
        w:5,
        l:'A',
        ch:'Kei~te|k aha|q koe?|a',
        sub:'What are you doing? Today we learn action words and say what is happening right now.',
        say:'Kia ora everyone! Last week we talked about our whānau. Today we say what we are doing right now. You already know kei te from feelings, so today you will be surprised how much you can already say. Still no writing: listen, think and speak. Mime each action as we go.',
        pron:'Kei te aha koe? = kay teh AH-hah KOH-eh',
        li:'say what we are doing right now and ask someone what they are doing in te reo.',
        succ:['I can say what I am doing: Kei te kai ahau.','I can ask ‘What are you doing?’: Kei te aha koe?','I can chat: Kia ora. Kei te aha koe? Kei te ___ ahau. Kei te aha ia?'],
        wp:'God gives us good work to do.',
        ref:'Colossians 3:23',
        mom:'When we do our work, our learning and even our play with a full heart, we show aroha for God and for others.',
        q:'What is one thing you do each day that you can do with a thankful heart?',
        recall:[['How do you say: Mere is my mum?','Ko Mere tōku māmā.'],['How do you say: I am tired?','Kei te ngenge ahau.'],['How do you say: Who is your friend?','Ko wai tō hoa?']],
        rtag:'Weeks 1 to 4',
        rtxt:'Remember when… Weeks 1 to 4 (3 quick prompts)',
        refl:'What did you do today that you can thank God for?',
        next:'Lesson B: yes or no questions, and what our whānau are doing',
        vsay:'Say each word and the class echoes while miming it: spoon to mouth for kai, hands under cheek for moe, typing for mahi, walking fingers for haere, finger on forehead for ako, holding a book for pānui, writing for tuhi, a talking hand for kōrero, a ball for tākaro, a microphone for waiata.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Kei te aha koe? with a rising voice. Prompt 3: moe (sleep), not kai (eat).',
        xresc:'Common error: Ko instead of Kei te. Say: ko is for who you are, kei te is for what is happening now.',
        xpron:'pānui = PAH-noo-ee · tākaro = TAH-kah-roh · waiata = why-AH-tah',
        cur:curriculumRows('Communication (saying and asking what someone is doing) · Language Knowledge (Kei te + action + ahau/koe/ia, the question word aha, action verbs) · Cultural Knowledge (everyday life in te reo, work, learning and play)','Recycles Week 2’s Kei te frame with new words. Hauora: balance of work, rest and play.'),
        vr:valueRows('Colossians 3:23','God gives us good work to do. When we work, learn and play with a full heart, we show aroha for God and for others.','What is one thing you do each day that you can do with a thankful heart?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student (a reference, not homework).','Mini whiteboards and pens for the exit ticket (optional).','Practise a mime for each of the 11 words so students can copy you.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles through the term.'],
        three:'(1) <i>Kei te</i> is the same frame as Week 2: <i>Kei te</i> + word + <i>ahau</i>, but the word is now an action. (2) To ask what someone is doing, use <i>aha</i> (what): <i>Kei te aha koe?</i> (3) Swap <i>ahau</i>, <i>koe</i> and <i>ia</i> just like before.',
        diff:['Echo as a whole class and mime every word. Start with kai, moe and mahi. Use a sentence strip (Kei te ___ ahau). Pair with a confident partner.','Complete all steps. Ask and answer Kei te aha koe? with a partner, then ask about a third person.','Ask what a whānau member is doing. Combine with feelings: Kei te ngenge ahau. Kei te moe ahau. Explain why Kei te is used for right now.'],
        look:'Kei te first (not Ko); actions mimed and said together; ahau, koe and ia in the right place; clear vowels (pānui, kōrero, tākaro, waiata); students asking Kei te aha koe? unprompted.',
        nx:'revisit Kei te + action + ahau with students in Starting; add yes or no questions in Lesson B.',
        rec:'Week 2 (Kei te + feeling), Week 1 (Ko wai tō hoa?) and Week 4 (Ko Mere tōku māmā) are recalled in the warm-up, step 1, step 11 and the drama. Lesson B recalls Kei te aha koe? and reuses Āe and Kāo.'
      },
      D: {
        VOC:['kei te aha','kai','moe','mahi','haere','ako','pānui','tuhi','kōrero','tākaro','waiata'],
        STEPS:[
          ['Quick recap: Hello, I am Sam. Mere is my mum. I am tired.','Kia~ora.|w Ko|k Sam|p ahau.|a Ko|k Mere|p tōku|a māmā.|n Kei~te|k ngenge|n ahau.|a','KEE-ah OR-ah. kor Sam ah-HOW. kor MEH-reh TOH-koo MAH-mah. kay teh NGEH-ngeh ah-HOW','Weeks 1, 2 and 4, stacked.',null,'Whole class'],
          ['How would you say: I am eating?','Kei~te|k kai|n* ahau.|a','kay teh KYE ah-HOW','Same frame as feelings: Kei te + word + ahau. kai = eat.','Last time we said Kei te ngenge ahau, I am tired. Kei te also tells what you are doing right now. Don’t write anything down. In te reo, eat is kai. Take a moment… (wait 3 seconds)… Kei te kai ahau. Say it with me, and eat an invisible sandwich.','Echo'],
          ['How would you say: I am sleeping?','Kei~te|k moe|n* ahau.|a','kay teh MOR-eh ah-HOW','Only the action word changes.',null,'Whole class'],
          ['How would you say: I am working?','Kei~te|k mahi|n* ahau.|a','kay teh MAH-hee ah-HOW','mahi = work.',null,'Whole class'],
          ['How would you say: What are you doing?','Kei~te|k aha|q* koe?|a','kay teh AH-hah KOH-eh','aha = what. It sits where the action word sat.',null,'Echo'],
          ['Mime an action. Your partner asks what you are doing, then you answer.','Kei~te|k aha|q koe?|a Kei~te|k ___|n ahau.|a','kay teh AH-hah KOH-eh · kay teh ___ ah-HOW','The question and the answer use the same pattern.','Turn to your partner. One mimes an action, the other asks Kei te aha koe?, then the first answers. Swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: I am going. I am learning.','Kei~te|k haere|n* ahau.|a Kei~te|k ako|n* ahau.|a','kay teh HIGH-reh ah-HOW · kay teh AH-kor ah-HOW','haere = go, ako = learn.',null,'Echo'],
          ['How would you say: I am reading. I am writing.','Kei~te|k pānui|n* ahau.|a Kei~te|k tuhi|n* ahau.|a','kay teh PAH-noo-ee ah-HOW · kay teh TOO-hee ah-HOW','pānui = read, tuhi = write.',null,'Echo'],
          ['How would you say: I am talking. I am playing.','Kei~te|k kōrero|n* ahau.|a Kei~te|k tākaro|n* ahau.|a','kay teh KOH-reh-roh ah-HOW · kay teh TAH-kah-roh ah-HOW','kōrero = talk, tākaro = play.',null,'Whole class'],
          ['How would you say: What is she doing? She is singing.','Kei~te|k aha|q ia?|a* Kei~te|k waiata|n* ia.|a','kay teh AH-hah EE-ah · kay teh why-AH-tah EE-ah','ia = he or she, in the same spot as ahau and koe. waiata = sing.',null,'Whole class'],
          ['How would you say: Hello, I am Sam. What are you doing? I am reading.','Kia~ora.|w Ko|k Sam|p ahau.|a Kei~te|k aha|q koe?|a Kei~te|k pānui|n ahau.|a','KEE-ah OR-ah. kor Sam ah-HOW. kay teh AH-hah KOH-eh. kay teh PAH-noo-ee ah-HOW','Weeks 1 and 5 together.',null,'Pairs'],
          ['Class chain: greet the next person, ask what they are doing, they mime and answer, say goodbye.','Kia~ora.|w Kei~te|k aha|q koe?|a Kei~te|k ___|n ahau.|a Ka~kite!|w','KEE-ah OR-ah… kay teh AH-hah KOH-eh… kay teh ___ ah-HOW… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Wā Takaro — Playtime',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te aha koe, Hana?','Hello, children! What are you doing, Hana?','(arms wide)'],
          ['Hana','Kei te pānui ahau.','I am reading.','(holds up a book)'],
          ['Kaiako Rose','Kei te aha koe, Tama?','What are you doing, Tama?',''],
          ['Tama','Kei te tuhi ahau.','I am writing.','(scribbles in the air)'],
          ['Hana','Kei te aha koe, Kaiako?','What are you doing, teacher?',''],
          ['Kaiako Rose','Kei te mahi ahau. Kei te pēhea koe, Tama?','I am working. How are you, Tama?','','T1W2'],
          ['Tama','Kei te ngenge ahau.','I am tired.','(yawns)','T1W2'],
          ['Hana','Kei te moe koe, Tama?','Are you sleeping, Tama?','(giggles)'],
          ['Tama','Kāo! Kei te kōrero ahau.','No! I am talking.','(laughs)'],
          ['Kaiako Rose','Ko wai tō hoa, Tama?','Who is your friend, Tama?','','T1W1'],
          ['Tama','Ko Hana tōku hoa.','Hana is my friend.','','T1W1'],
          ['Kaiako Rose','Kei te harikoa ahau! Kei te waiata ahau!','I am happy! I am singing!','(to the audience, in English) God gives us time to work, to rest and to play. Let us do it all with thanks.'],
          ['Hana','Ka kite, Kaiako!','See you, teacher!','(Tama waves too)']]},
        EX:[['Say in te reo: ‘What are you doing?’','Kei te aha koe?'],['What does ‘Kei te pānui ahau’ mean?','I am reading.'],['Choose to say ‘I am sleeping’: Kei te ____ ahau (moe / kai)','moe'],['Say in te reo: ‘She is singing.’','Kei te waiata ia.'],['Stretch: ask your partner what they are doing, then say what you are doing.','Kei te aha koe? Kei te ___ ahau.']],
        CE:['Starting with Ko instead of Kei te','Mixing up the action words','Choosing kai (eat)','Using ahau instead of ia','Missing the question or the answer'],
        T:'T1 W5 Lesson A',
        LP:{title:'Kei te aha koe? — What are you doing?',val:'Aroha · Colossians 3:23',pat:['Kei te aha koe?','Kei te ________ ahau.','Kei te ________ ia.'],swap:'Actions: kai · moe · mahi · haere · ako · pānui · tuhi · kōrero · tākaro · waiata'}
      }
    };

    // ── Lesson B · Kei te mahi koe? — Are you working? ──
    const B = {
      P: {
        w:5,
        l:'B',
        ch:'Kei~te|k mahi|n koe?|a',
        sub:'Are you working? Today we ask yes or no questions about actions and talk about our whānau.',
        say:'Kia ora everyone! Last lesson we said what we are doing. Today we ask yes or no questions, say where we are going, and say what our whānau are doing. Still no writing: listen, think and speak, and keep miming.',
        pron:'Kei te mahi koe? = kay teh MAH-hee KOH-eh',
        li:'ask and answer yes or no questions about actions and say what our whānau are doing in te reo.',
        succ:['I can answer yes or no: Āe, kei te kai ahau.','I can ask about someone: Kei te mahi koe? Kei te aha tō māmā?','I can say where I am going: Kei te haere ahau ki te kura.'],
        wp:'God asks us to help and serve each other.',
        ref:'Galatians 5:13',
        mom:'When we notice what others are doing and offer to help, we show aroha.',
        q:'What is one way you can help someone in your whānau today?',
        recall:[['How do you say: What are you doing?','Kei te aha koe?'],['How do you say: I am eating?','Kei te kai ahau.'],['How do you say: How is your mum?','Kei te pēhea tō māmā?'],['How do you say: Yes, I am well?','Āe, kei te pai ahau.']],
        rtag:'Weeks 1 to 5',
        rtxt:'Remember when… Weeks 1 to 5 (4 quick prompts)',
        refl:'Who did you help today?',
        next:'Week 6: What do you want? (Kei te pīrangi ahau ki te …)',
        vsay:'Say each word and the class echoes while miming. Same vocab card as Lesson A, with two stretch words today: oma (run) and kaukau (swim). Say them slowly.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: a question uses the same words as a statement, with a rising voice. Prompt 3: Kāo.',
        xresc:'Common error: tōku in the question. Say: ask with tō (your), answer with tōku (my).',
        xpron:'oma = OR-mah · kaukau = KOW-kow',
        cur:curriculumRows('Communication (yes or no questions about actions, saying where we are going) · Language Knowledge (Kei te + action + koe/ia/tōku + family word, Āe/Kāo, ki te) · Cultural Knowledge (looking out for whānau, manaakitanga)','Recycles Weeks 1 to 4 and Week 2’s yes/no questions. Hauora: movement and rest.'),
        vr:valueRows('Galatians 5:13','God asks us to help and serve each other. When we notice what others are doing and offer to help, we show aroha.','What is one way you can help someone in your whānau today?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add oma (run) and kaukau (swim) as the two stretch words, written or spoken.','Mini whiteboards and pens for the exit ticket (optional).','Practise the mimes again, including running on the spot and swimming arms.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles through the term.'],
        three:'(1) A yes or no question uses the same words as the statement, but your voice goes up: <i>Kei te mahi koe?</i> (2) Answer <i>Āe</i> or <i>Kāo</i>, then the full sentence. (3) To say where, add <i>ki te</i> + place: <i>Kei te haere ahau ki te kura.</i>',
        diff:['Echo as a whole class and mime every word. Use a sentence strip (Kei te ___ koe?). Skip the stretch words until the class is confident. Pair with a confident partner.','Complete all steps. Ask and answer yes or no questions with a partner, then say what a family member is doing.','Add oma and kaukau. Combine with tino and a feeling. Say where you are going using ki te. Explain how a question differs from a statement.'],
        look:'Rising voice for questions; Āe and Kāo used naturally; Kei te first with koe/ia/ahau at the end; tō (your) in questions and tōku (my) in answers; ki te kura said clearly.',
        nx:'revisit the question form with students in Starting; move to Week 6 (Kei te pīrangi ahau ki te …).',
        rec:'Lesson A (Kei te aha koe?, Kei te ___ ahau), Week 1 (Kia ora, Ka kite), Week 2 (Āe/Kāo, Kei te tino), Week 3 (Ōtepoti) and Week 4 (tō māmā, tōku kuia) are recalled in the warm-up, steps 1, 6 to 11 and the drama. Week 6 will recall Kei te + action.'
      },
      D: {
        VOC:[...A.D.VOC,'oma','kaukau'],
        STEPS:[
          ['Quick recap: Hello, I am Sam. What are you doing? I am reading.','Kia~ora.|w Ko|k Sam|p ahau.|a Kei~te|k aha|q koe?|a Kei~te|k pānui|n ahau.|a','KEE-ah OR-ah. kor Sam ah-HOW. kay teh AH-hah KOH-eh. kay teh PAH-noo-ee ah-HOW','Everything from Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Are you eating?','Kei~te|k kai|n koe?|a*','kay teh KYE KOH-eh','The same words as a statement, but koe asks the question. Your voice goes up.','Last lesson we said Kei te kai ahau. Swap ahau for koe and lift your voice at the end, and it becomes a question. Take a moment… (wait 3 seconds)… Kei te kai koe? Say it with me.','Echo'],
          ['How would you say: Yes, I am eating.','Āe,|w* kei~te|k kai|n ahau.|a','AH-eh, kay teh KYE ah-HOW','Āe = yes, then the full sentence.',null,'Echo'],
          ['How would you say: No, I am working.','Kāo,|w* kei~te|k mahi|n ahau.|a','KAH-or, kay teh MAH-hee ah-HOW','Kāo = no, then say what you are really doing.',null,'Echo'],
          ['Mime an action. Your partner asks if you are doing it, you answer yes or no.','Kei~te|k mahi|n koe?|a Āe/Kāo,|w kei~te|k ___|n ahau.|a','kay teh MAH-hee KOH-eh · AH-eh / KAH-or, kay teh ___ ah-HOW','Question, then yes or no, then the full sentence.','Turn to your partner. One mimes, the other guesses with Kei te ___ koe? and the first says Āe or Kāo and answers. Swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: What is your mum doing?','Kei~te|k aha|q tō|a māmā?|n','kay teh AH-hah TOH MAH-mah','Week 4’s tō māmā fits straight in.',null,'Echo'],
          ['How would you say: My mum is working. My dad is sleeping.','Kei~te|k mahi|n tōku|a māmā.|n Kei~te|k moe|n tōku|a pāpā.|n','kay teh MAH-hee TOH-koo MAH-mah · kay teh MOR-eh TOH-koo PAH-pah','Same frame, new person: tōku + family word.',null,'Whole class'],
          ['How would you say: I am going to school.','Kei~te|k haere|n ahau|a ki~te|q* kura.|n','kay teh HIGH-reh ah-HOW kee teh KOO-rah','ki te = to the. It joins an action to a place.','Haere means go. To say where, add ki te and the place. Take a moment… (wait 3 seconds)… Kei te haere ahau ki te kura. Say it with me.','Echo'],
          ['How would you say: I am running. I am swimming.','Kei~te|k oma|n* ahau.|a Kei~te|k kaukau|n* ahau.|a','kay teh OR-mah ah-HOW · kay teh KOW-kow ah-HOW','Stretch words: oma = run, kaukau = swim.',null,'Echo'],
          ['How would you say: I am very tired. I am sleeping.','Kei~te|k tino|q ngenge|n ahau.|a Kei~te|k moe|n ahau.|a','kay teh TEE-nor NGEH-ngeh ah-HOW · kay teh MOR-eh ah-HOW','Week 2’s tino plus today’s moe.',null,'Whole class'],
          ['Ask your partner what their nan is doing, then answer about yours.','Kei~te|k aha|q tō|a kuia?|n Kei~te|k ___|n tōku|a kuia.|n','kay teh AH-hah TOH KOO-ee-ah · kay teh ___ TOH-koo KOO-ee-ah','Ask with tō (your), answer with tōku (my).','Turn to your partner. Ask what their nan is doing, then answer about yours. It can be pretend. Swap. Take 60 seconds while I listen.','Pairs'],
          ['Class chain: greet, ask what they are doing, answer, say where you are going, goodbye.','Kia~ora.|w Kei~te|k aha|q koe?|a Kei~te|k ___|n ahau.|a Ka~kite!|w','KEE-ah OR-ah… kay teh AH-hah KOH-eh… kay teh ___ ah-HOW… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Huarahi — The Road',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Haere mai!','Hello, children! Come along!','(waves from the gate)'],
          ['Hana','Tēnā koe, Kuia. Kei te pēhea koe?','Greetings, Kuia. How are you?','','T1W2'],
          ['Kuia Mere','Kei te pai ahau. Kei te aha koe, Hana?','I am well. What are you doing, Hana?',''],
          ['Hana','Kei te haere ahau ki te kura.','I am going to school.','(walks on the spot)'],
          ['Kuia Mere','Kei te aha koe, Tama?','What are you doing, Tama?',''],
          ['Tama','Kei te oma ahau ki te kura!','I am running to school!','(runs on the spot)'],
          ['Kuia Mere','Kei te aha tō māmā, Tama?','What is your mum doing, Tama?','','T1W4'],
          ['Tama','Kei te mahi ia.','She is working.','','T1W4'],
          ['Kuia Mere','Kei te aha tō pāpā?','What is your dad doing?','','T1W4'],
          ['Tama','Kei te moe ia.','He is sleeping.','(hands under cheek)'],
          ['Hana','Kei te hiakai ahau, Kuia.','I am hungry, Kuia.','(rubs tummy)','T1W2'],
          ['Kuia Mere','Kei te hiakai koe? Haere mai, tamariki!','Are you hungry? Come here, children!','(hands out a snack; to the audience, in English) God asks us to share what we have. A snack for a friend is a way to show aroha.'],
          ['Tama','Tēnā koe, Kuia. Ka kite!','Thank you, Kuia. See you!','(Hana waves too)']]},
        EX:[['Say in te reo: ‘Are you working?’','Kei te mahi koe?'],['What does ‘Āe, kei te kai ahau’ mean?','Yes, I am eating.'],['Choose to say ‘No, I am sleeping’: ____, kei te moe ahau. (Āe / Kāo)','Kāo'],['Say in te reo: ‘My mum is working.’','Kei te mahi tōku māmā.'],['Stretch: ask your partner what their nan is doing, then say what your dad is doing.','Kei te aha tō kuia? Kei te ___ tōku pāpā.']],
        CE:['Forgetting a question is the same words with a rising voice','Mixing up Āe and Kāo','Choosing Āe','Using tō (your) instead of tōku (my)','Missing part of the question or answer'],
        T:'T1 W5 Lesson B',
        LP:{title:'Kei te mahi koe? — Are you working?',val:'Aroha · Galatians 5:13',pat:['Kei te ________ koe?','Āe / Kāo, kei te ________ ahau.','Kei te ________ tōku māmā.'],swap:'Swap the person: koe = you · ia = he/she · tōku māmā = my mum. Stretch: oma · kaukau'}
      }
    };

    addLessons({ '1.5.A': A, '1.5.B': B });
  }

  /* ──────── WEEK 6 · What do you want? ──────── */
  {
    addGlossary({
      "wai":["who / water","WHY",1],
      "pīrangi":["want / would like","PEE-rah-ngee",6],
      "miraka":["milk","MEE-rah-kah",6],
      "pōro":["ball","POH-roh",6],
      "inu":["drink","EE-noo",6],
      "hoki":["return / go back","HOR-kee",6]
    });

    // ── Lesson A · Kei te pīrangi koe? — What do you want? ──
    const A = {
      P: {
        w:6,
        l:'A',
        ch:'Kei~te|k pīrangi|q koe?|a',
        sub:'What do you want? Today we learn to say what we want to do and ask someone else.',
        say:'Kia ora everyone! Last week we said what we are doing. Today we say what we want to do. You already own kei te and the action words, so we only add two new pieces: pīrangi and ki te. Still no writing: listen, think and speak, and mime as we go.',
        pron:'Kei te pīrangi ahau = kay teh PEE-rah-ngee ah-HOW',
        li:'say what we want to do and ask someone else what they want to do in te reo.',
        succ:['I can say what I want: Kei te pīrangi ahau ki te kai.','I can ask: Kei te pīrangi koe ki te tākaro?','I can chat: Kia ora. Kei te aha koe? Kei te pīrangi ahau ki te ___.'],
        wp:'God is good, and we can say thank you for what we have.',
        ref:'Psalm 136:1',
        mom:'When we are thankful for what we have, and ask others what they want, we show aroha.',
        q:'What is one thing you are thankful for today?',
        recall:[['How do you say: What are you doing?','Kei te aha koe?'],['How do you say: I am eating?','Kei te kai ahau.'],['How do you say: Who is your mum?','Ko wai tō māmā?']],
        rtag:'Weeks 1 to 5',
        rtxt:'Remember when… Weeks 1 to 5 (3 quick prompts)',
        refl:'What are you thankful for today?',
        next:'Lesson B: yes or no questions, and offering kai to others',
        vsay:'Say each word and the class echoes. Gestures: hands open for pīrangi, a cup for wai and miraka, a ball for pōro, a roof for kāinga. Remind students that wai also means who. Same word, two meanings, depending on the sentence.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Kei te pīrangi, then ahau, then ki te. Prompt 3: wai (water), not miraka (milk).',
        xresc:'Common error: leaving out ki te. Say: ki te joins want to the action.',
        xpron:'pīrangi = PEE-rah-ngee · miraka = MEE-rah-kah · pōro = POH-roh',
        cur:curriculumRows('Communication (saying and asking what someone wants to do) · Language Knowledge (Kei te pīrangi + ahau/koe/ia + ki te + action, nouns wai, miraka, pōro) · Cultural Knowledge (expressing needs politely, gratitude for kai)','Recycles Week 5 action words. Hauora: knowing and saying what we need.'),
        vr:valueRows('Psalm 136:1','God is good, and we can say thank you for what we have. When we are thankful and ask others what they want, we show aroha.','What is one thing you are thankful for today?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student (a reference, not homework).','Mini whiteboards and pens for the exit ticket (optional).','Rehearse the words below, especially pīrangi and pōro. Bring a cup and a ball as props if you can.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles through the term.'],
        three:'(1) <i>Kei te pīrangi</i> + <i>ahau</i> / <i>koe</i> / <i>ia</i> means ‘want’, the same frame as feelings and actions. (2) Add <i>ki te</i> + an action or a thing to say what you want to do: <i>ki te kai</i>, <i>ki te moe</i>. (3) <i>wai</i> means water as well as who.',
        diff:['Echo as a whole class and use props or mimes. Start with kai, moe and tākaro. Use a sentence strip (Kei te pīrangi ahau ki te ___). Pair with a confident partner.','Complete all steps. Ask and answer Kei te pīrangi koe ki te ___? with a partner, then use Week 5 chat.','Ask about a third person (Kei te pīrangi ia ki te aha?). Add pōro and miraka. Explain how ki te joins want to what comes next.'],
        look:'Kei te first; ahau, koe or ia after pīrangi; ki te said clearly; clear vowels (pīrangi, miraka, pōro); students asking Kei te pīrangi koe ki te …? unprompted.',
        nx:'revisit Kei te pīrangi ahau ki te … with students in Starting; add yes or no questions in Lesson B.',
        rec:'Week 5 (Kei te aha koe?, Kei te kai ahau), Week 4 (Ko wai tō māmā?, tōku hoa) and Week 2 (Āe, kei te hiakai) are recalled in the warm-up, step 1, step 11 and the drama. Lesson B recalls Kei te pīrangi ahau ki te … and offers kai to others.'
      },
      D: {
        VOC:['pīrangi','ki te','kai','wai','miraka','pōro','tākaro','haere','moe','waiata','kāinga'],
        STEPS:[
          ['Quick recap: Hello, what are you doing? I am eating.','Kia~ora.|w Kei~te|k aha|q koe?|a Kei~te|k kai|n ahau.|a','KEE-ah OR-ah. kay teh AH-hah KOH-eh. kay teh KYE ah-HOW','Weeks 1 and 5, stacked.',null,'Whole class'],
          ['How would you say: I want?','Kei~te|k pīrangi|q* ahau.|a','kay teh PEE-rah-ngee ah-HOW','Same frame as feelings and actions. pīrangi = want.','Last week we said Kei te kai ahau, I am eating. Now we swap the word for pīrangi, which means want or would like. Take a moment… (wait 3 seconds)… Kei te pīrangi ahau. Say it with me.','Echo'],
          ['How would you say: I want to eat?','Kei~te|k pīrangi|q ahau|a ki~te|k* kai.|n','kay teh PEE-rah-ngee ah-HOW kee teh KYE','ki te joins want to what comes next.','To say what you want to do, add ki te and the action. Take a moment… (wait 3 seconds)… Kei te pīrangi ahau ki te kai. Say it with me.','Echo'],
          ['How would you say: I want to sleep?','Kei~te|k pīrangi|q ahau|a ki~te|k moe.|n*','kay teh PEE-rah-ngee ah-HOW kee teh MOR-eh','Only the action changes.',null,'Whole class'],
          ['How would you say: I want to play?','Kei~te|k pīrangi|q ahau|a ki~te|k tākaro.|n*','kay teh PEE-rah-ngee ah-HOW kee teh TAH-kah-roh','Same frame, new action.',null,'Whole class'],
          ['How would you say: Do you want to play?','Kei~te|k pīrangi|q koe|a* ki~te|k tākaro?|n','kay teh PEE-rah-ngee KOH-eh kee teh TAH-kah-roh','Swap ahau for koe, and your voice goes up.',null,'Echo'],
          ['Ask your partner what they want to do, then answer.','Kei~te|k pīrangi|q koe|a ki~te|k ___?|n Kei~te|k pīrangi|q ahau|a ki~te|k ___.|n','kay teh PEE-rah-ngee KOH-eh kee teh ___ · kay teh PEE-rah-ngee ah-HOW kee teh ___','The question and the answer use the same frame.','Turn to your partner. One asks if the other wants to do something, the other answers, then swap. Use any action word you know. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: I want water. I want milk.','Kei~te|k pīrangi|q ahau|a ki~te|k wai.|n* Kei~te|k pīrangi|q ahau|a ki~te|k miraka.|n*','kay teh PEE-rah-ngee ah-HOW kee teh WHY · kay teh PEE-rah-ngee ah-HOW kee teh MEE-rah-kah','wai = water, miraka = milk. ki te works with things too.',null,'Echo'],
          ['How would you say: I want to play ball.','Kei~te|k pīrangi|q ahau|a ki~te|k tākaro|n pōro.|n*','kay teh PEE-rah-ngee ah-HOW kee teh TAH-kah-roh POH-roh','pōro = ball. Play ball is tākaro pōro.',null,'Whole class'],
          ['How would you say: She wants to sing.','Kei~te|k pīrangi|q ia|a* ki~te|k waiata.|n','kay teh PEE-rah-ngee EE-ah kee teh why-AH-tah','ia = he or she, in the same spot as ahau and koe.',null,'Whole class'],
          ['How would you say: Hello, I want to play. Do you want to play?','Kia~ora.|w Kei~te|k pīrangi|q ahau|a ki~te|k tākaro.|n Kei~te|k pīrangi|q koe|a ki~te|k tākaro?|n','KEE-ah OR-ah. kay teh PEE-rah-ngee ah-HOW kee teh TAH-kah-roh. kay teh PEE-rah-ngee KOH-eh kee teh TAH-kah-roh','Weeks 1 and 6 together.',null,'Pairs'],
          ['Class chain: greet the next person, say what you want to do, ask what they want, say goodbye.','Kia~ora.|w Kei~te|k pīrangi|q ahau|a ki~te|k ___.|n Kei~te|k pīrangi|q koe|a ki~te|k ___?|n Ka~kite!|w','KEE-ah OR-ah… kay teh PEE-rah-ngee ah-HOW kee teh ___… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Wā Kai — Lunch Time',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te hiakai koe, Hana?','Hello, children! Are you hungry, Hana?','(arms wide)','T1W2'],
          ['Hana','Āe, kei te hiakai ahau. Kei te pīrangi ahau ki te kai.','Yes, I am hungry. I want to eat.','(rubs tummy)','T1W2'],
          ['Kaiako Rose','Kei te pīrangi koe ki te wai, Tama?','Do you want water, Tama?','(holds up a cup)'],
          ['Tama','Āe. Kei te pīrangi ahau ki te wai.','Yes. I want water.','(takes the cup)'],
          ['Kaiako Rose','Kei te pīrangi koe ki te miraka?','Do you want milk?',''],
          ['Tama','Kāo. Kei te pīrangi ahau ki te tākaro.','No. I want to play.','(bounces a pretend ball)'],
          ['Hana','Kei te pīrangi ahau ki te tākaro pōro.','I want to play ball.','(runs on the spot)'],
          ['Kaiako Rose','Kei te aha koe, Hana?','What are you doing, Hana?','','T1W5'],
          ['Hana','Kei te kai ahau.','I am eating.','(eats an invisible sandwich)','T1W5'],
          ['Tama','Ko Hana tōku hoa. Kei te pīrangi ia ki te tākaro.','Hana is my friend. She wants to play.','(grins)','T1W1'],
          ['Kaiako Rose','Kei te harikoa ahau!','I am happy!','(to the audience, in English) Let us say thank you to God for our food before we eat. Giving thanks is a way to show aroha.'],
          ['Hana','Tēnā koe, Kaiako. Ka kite!','Thank you, teacher. See you!','(Tama waves too)']]},
        EX:[['Say in te reo: ‘I want to eat.’','Kei te pīrangi ahau ki te kai.'],['What does ‘Kei te pīrangi koe ki te tākaro?’ mean?','Do you want to play?'],['Choose to say ‘I want water’: Kei te pīrangi ahau ki te ____ (wai / miraka)','wai'],['Say in te reo: ‘She wants to sing.’','Kei te pīrangi ia ki te waiata.'],['Stretch: ask your partner if they want to play, and answer for yourself.','Kei te pīrangi koe ki te tākaro? Āe, kei te pīrangi ahau ki te tākaro.']],
        CE:['Leaving out ki te','Forgetting koe makes it a question','Choosing miraka (milk)','Using ahau instead of ia','Missing the question or the answer'],
        T:'T1 W6 Lesson A',
        LP:{title:'Kei te pīrangi koe? — What do you want?',val:'Aroha · Psalm 136:1',pat:['Kei te pīrangi ahau ki te ________.','Kei te pīrangi koe ki te ________?','Kei te pīrangi ia ki te ________.'],swap:'Swap ahau (I), koe (you), ia (he/she). Things: wai · miraka · pōro · kai · moe · tākaro'}
      }
    };

    // ── Lesson B · Kei te pīrangi koe ki te aha? — What do you want to do? ──
    const B = {
      P: {
        w:6,
        l:'B',
        ch:'Kei~te|k pīrangi|q koe|a ki~te|k aha?|n',
        sub:'What do you want to do? Today we ask yes or no questions and offer kai to others.',
        say:'Kia ora everyone! Last lesson we said what we want to do. Today we ask yes or no questions, ask what someone wants, and offer kai the way we would to a guest. Still no writing: listen, think and speak.',
        pron:'Kei te pīrangi koe ki te aha? = kay teh PEE-rah-ngee KOH-eh kee teh AH-hah',
        li:'ask and answer what someone wants to do and offer kai to others in te reo.',
        succ:['I can answer yes or no: Āe, kei te pīrangi ahau ki te kai.','I can ask: Kei te pīrangi koe ki te aha?','I can offer: Kei te pīrangi koe ki te miraka? Āe, tēnā koe.'],
        wp:'Treat others the way you would like to be treated.',
        ref:'Matthew 7:12',
        mom:'When we ask what someone wants and offer it kindly, we show aroha.',
        q:'What is one kind thing you can offer someone today?',
        recall:[['How do you say: I want to eat?','Kei te pīrangi ahau ki te kai.'],['How do you say: How are you?','Kei te pēhea koe?'],['How do you say: Are you working?','Kei te mahi koe?'],['How do you say: Where are you from?','Nō hea koe?']],
        rtag:'Weeks 1 to 6',
        rtxt:'Remember when… Weeks 1 to 6 (4 quick prompts)',
        refl:'Who did you offer something kindly to today?',
        next:'Week 7: Numbers and ages (Tekau mā tahi ōku tau)',
        vsay:'Say each word and the class echoes. Same vocab card as Lesson A, with two stretch words today: inu (drink) and hoki (go back). Say them slowly and mime them.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: ki te aha at the end for ‘what’. Prompt 3: inu (drink), not kai (eat).',
        xresc:'Common error: leaving out ki te. Say: ki te joins want to what comes next.',
        xpron:'inu = EE-noo · hoki = HOR-kee',
        cur:curriculumRows('Communication (yes or no questions, asking and answering what someone wants, offering kai) · Language Knowledge (Kei te pīrangi koe ki te aha?, Āe/Kāo, ki te + action, tēnā koe) · Cultural Knowledge (manaakitanga: offering kai and thanks)','Recycles Weeks 1 to 5. Link to manaakitanga: offering kai to guests.'),
        vr:valueRows('Matthew 7:12','Treat others the way you would like to be treated. When we ask what someone wants and offer it kindly, we show aroha.','What is one kind thing you can offer someone today?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add inu (drink) and hoki (go back) as the two stretch words, written or spoken.','Mini whiteboards and pens for the exit ticket (optional).','Rehearse the words below, especially the new question ki te aha.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles through the term.'],
        three:'(1) A yes or no question uses the same words as the statement, but your voice goes up: <i>Kei te pīrangi koe ki te kai?</i> (2) To ask what someone wants to do, end with <i>ki te aha?</i> (3) To offer kai kindly, ask a yes or no question and answer <i>Āe, tēnā koe.</i>',
        diff:['Echo as a whole class before pairs. Use a cup, a ball and mimes. Use a sentence strip (Kei te pīrangi koe ki te ___?). Pair with a confident partner.','Complete all steps. Ask and answer Kei te pīrangi koe ki te aha? with a partner, then offer kai and answer politely.','Add inu and hoki. Ask about a family member. Explain how a question differs from a statement.'],
        look:'Rising voice for questions; Āe and Kāo used naturally; ki te said clearly; aha at the end for what; polite Āe, tēnā koe when offered kai.',
        nx:'revisit the question form with students in Starting; move to Week 7 (Numbers and ages).',
        rec:'Lesson A (Kei te pīrangi ahau ki te …), Week 5 (Āe/Kāo, Kei te mahi koe?, tōku māmā), Week 4 (tōku pāpā) and Week 2 (Kei te hiakai, tino) are recalled in the warm-up, steps 1, 11 and the drama. Week 7 will recall Kei te pīrangi ahau ki te ….'
      },
      D: {
        VOC:[...A.D.VOC,'inu','hoki'],
        STEPS:[
          ['Quick recap: Hello, I want to play. Do you want to play?','Kia~ora.|w Kei~te|k pīrangi|q ahau|a ki~te|k tākaro.|n Kei~te|k pīrangi|q koe|a ki~te|k tākaro?|n','KEE-ah OR-ah. kay teh PEE-rah-ngee ah-HOW kee teh TAH-kah-roh. kay teh PEE-rah-ngee KOH-eh kee teh TAH-kah-roh','Everything from Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Do you want to eat?','Kei~te|k pīrangi|q koe|a ki~te|k kai?|n*','kay teh PEE-rah-ngee KOH-eh kee teh KYE','koe asks the question. Your voice goes up.','Last lesson we said Kei te pīrangi ahau ki te kai. Swap ahau for koe and lift your voice at the end, and it becomes a question. Take a moment… (wait 3 seconds)… Kei te pīrangi koe ki te kai? Say it with me.','Echo'],
          ['How would you say: Yes, I want to eat.','Āe,|w* kei~te|k pīrangi|q ahau|a ki~te|k kai.|n','AH-eh, kay teh PEE-rah-ngee ah-HOW kee teh KYE','Āe = yes, then the full sentence.',null,'Echo'],
          ['How would you say: No, I want to sleep.','Kāo,|w* kei~te|k pīrangi|q ahau|a ki~te|k moe.|n','KAH-or, kay teh PEE-rah-ngee ah-HOW kee teh MOR-eh','Kāo = no, then say what you really want.',null,'Echo'],
          ['How would you say: What do you want to do?','Kei~te|k pīrangi|q koe|a ki~te|k aha?|n*','kay teh PEE-rah-ngee KOH-eh kee teh AH-hah','aha = what. It slides into the place where the action went.','Take the question Kei te pīrangi koe ki te kai? and swap the action for aha, which means what. Take a moment… (wait 3 seconds)… Kei te pīrangi koe ki te aha? Say it with me.','Echo'],
          ['Ask your partner what they want to do, then answer.','Kei~te|k pīrangi|q koe|a ki~te|k aha?|n Kei~te|k pīrangi|q ahau|a ki~te|k ___.|n','kay teh PEE-rah-ngee KOH-eh kee teh AH-hah · kay teh PEE-rah-ngee ah-HOW kee teh ___','Question and answer share one frame.','Turn to your partner. One asks what they want to do, the other answers, then swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: Does she want to sing? Yes.','Kei~te|k pīrangi|q ia|a ki~te|k waiata?|n Āe.|w','kay teh PEE-rah-ngee EE-ah kee teh why-AH-tah? AH-eh','ia = he or she, in the same spot as koe.',null,'Whole class'],
          ['How would you say: I want to drink water.','Kei~te|k pīrangi|q ahau|a ki~te|k inu|n* wai.|n','kay teh PEE-rah-ngee ah-HOW kee teh EE-noo WHY','Stretch word: inu = drink. It sits between ki te and the thing.',null,'Echo'],
          ['How would you say: I want to go home.','Kei~te|k pīrangi|q ahau|a ki~te|k hoki|n* ki~te|k kāinga.|n','kay teh PEE-rah-ngee ah-HOW kee teh HOR-kee kee teh KAH-ee-ngah','Stretch word: hoki = go back. kāinga = home from Week 3.',null,'Echo'],
          ['How would you say: Do you want milk? Yes, thank you.','Kei~te|k pīrangi|q koe|a ki~te|k miraka?|n Āe,|w* tēnā~koe.|w','kay teh PEE-rah-ngee KOH-eh kee teh MEE-rah-kah? AH-eh, TEH-nah KOH-eh','Offering kai kindly, with a polite reply.',null,'Pairs'],
          ['How would you say: My mum wants to sleep.','Kei~te|k pīrangi|q tōku|a māmā|n ki~te|k moe.|n','kay teh PEE-rah-ngee TOH-koo MAH-mah kee teh MOR-eh','Week 4’s tōku māmā takes the place of ahau.',null,'Whole class'],
          ['Class chain: greet, offer something to the next person, answer politely, say goodbye.','Kia~ora.|w Kei~te|k pīrangi|q koe|a ki~te|k ___?|n Āe/Kāo,|w ___.|n Ka~kite!|w','KEE-ah OR-ah… kay teh PEE-rah-ngee KOH-eh kee teh ___… AH-eh / KAH-or… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Kīhini o Kuia — Kuia’s Kitchen',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Haere mai ki te kāinga.','Hello, children! Come to the house.','(opens the door)'],
          ['Hana','Tēnā koe, Kuia. Kei te pēhea koe?','Greetings, Kuia. How are you?','','T1W2'],
          ['Kuia Mere','Kei te pai ahau. Kei te pīrangi koe ki te miraka, Hana?','I am well. Do you want milk, Hana?','(pours a cup)'],
          ['Hana','Āe, tēnā koe, Kuia.','Yes, thank you, Kuia.','(takes the cup)'],
          ['Kuia Mere','Kei te pīrangi koe ki te aha, Tama?','What do you want to do, Tama?',''],
          ['Tama','Kei te pīrangi ahau ki te inu wai.','I want to drink water.','(mimes drinking)'],
          ['Kuia Mere','Kei te hiakai koe?','Are you hungry?','','T1W2'],
          ['Tama','Āe, kei te tino hiakai ahau!','Yes, I am very hungry!','(rubs tummy)','T1W2'],
          ['Kuia Mere','Haere mai ki te kai!','Come and eat!','(sets the table)'],
          ['Hana','Kei te pīrangi tōku pāpā ki te moe.','My dad wants to sleep.','(giggles)','T1W4'],
          ['Tama','Kei te pīrangi ahau ki te tākaro pōro, Kuia.','I want to play ball, Kuia.','(holds up a pretend ball)'],
          ['Kuia Mere','Āe! Haere mai, tamariki!','Yes! Come on, children!','(to the audience, in English) When we ask what others want and offer it kindly, we treat them as Jesus taught: the way we would like to be treated.'],
          ['Hana','Ka kite, Kuia!','See you, Kuia!','(Tama waves too)']]},
        EX:[['Say in te reo: ‘What do you want to do?’','Kei te pīrangi koe ki te aha?'],['What does ‘Kāo, kei te pīrangi ahau ki te moe’ mean?','No, I want to sleep.'],['Choose to say ‘I want to drink water’: Kei te pīrangi ahau ki te ____ wai. (inu / kai)','inu'],['Say in te reo: ‘My mum wants to sleep.’','Kei te pīrangi tōku māmā ki te moe.'],['Stretch: offer your partner milk, and answer politely when they offer you water.','Kei te pīrangi koe ki te miraka? Āe, tēnā koe.']],
        CE:['Leaving out ki te','Mixing up Āe and Kāo','Choosing kai (eat)','Using ahau instead of tōku māmā','Missing a polite reply'],
        T:'T1 W6 Lesson B',
        LP:{title:'Kei te pīrangi koe ki te aha? — What do you want to do?',val:'Aroha · Matthew 7:12',pat:['Kei te pīrangi koe ki te ________?','Āe / Kāo, kei te pīrangi ahau ki te ________.','Kei te pīrangi koe ki te miraka? Āe, tēnā koe.'],swap:'Swap the person: koe = you · ia = he/she · tōku māmā = my mum. Stretch: inu · hoki'}
      }
    };

    addLessons({ '1.6.A': A, '1.6.B': B });
  }

  /* ──────── WEEK 7 · Numbers & ages ──────── */
  {
    addGlossary({
      "e hia":["how many / how much","eh HEE-ah",7],
      "hia":["how many","HEE-ah",7],
      "tahi":["one","TAH-hee",7],
      "rua":["two","ROO-ah",7],
      "toru":["three","TOH-roo",7],
      "whā":["four","FAH",7],
      "rima":["five","REE-mah",7],
      "ono":["six","OR-nor",7],
      "whitu":["seven","FEE-too",7],
      "waru":["eight","WAH-roo",7],
      "iwa":["nine","EE-wah",7],
      "tekau":["ten","TEH-kow",7],
      "tekau mā tahi":["eleven (ten and one)","TEH-kow MAH TAH-hee",7],
      "tekau mā rua":["twelve (ten and two)","TEH-kow MAH ROO-ah",7],
      "tekau mā iwa":["nineteen (ten and nine)","TEH-kow MAH EE-wah",7],
      "mā":["and (between ten and the units)","MAH",7],
      "tau":["year / age","TOW",7],
      "ōku":["my (more than one thing)","OH-koo",7],
      "ō":["your (more than one thing)","OH",7],
      "ōna":["his / her (more than one thing)","OH-nah",7]
    });

    // ── Lesson A · E hia ō tau? — How old are you? ──
    const A = {
      P: {
        w:7,
        l:'A',
        ch:'E~hia|q ō|a tau?|n',
        sub:'How old are you? Today we count in te reo and say how old we are.',
        say:'Kia ora everyone! So far we have said who we are, how we feel, where we are from, who our whānau are, what we are doing and what we want. Today we count and say how old we are. Still no writing: listen, think and speak. Keep it playful, because counting is a good chance for rhythm and clapping.',
        pron:'E hia ō tau? = eh HEE-ah OH TOW',
        li:'count from one to ten, and say and ask how old someone is in te reo.',
        succ:['I can count from one to ten in te reo.','I can say how old I am: Tekau ōku tau.','I can ask and chat: E hia ō tau? Kia ora. Ko ___ ahau. ___ ōku tau.'],
        wp:'God made each of us with care.',
        ref:'Psalm 139:14',
        mom:'When we celebrate each person and each year of their life, we show aroha.',
        q:'Why is every birthday a gift?',
        recall:[['How do you say: What do you want to do?','Kei te pīrangi koe ki te aha?'],['How do you say: Where are you from?','Nō hea koe?'],['How do you say: Who is your mum?','Ko wai tō māmā?']],
        rtag:'Weeks 1 to 6',
        rtxt:'Remember when… Weeks 1 to 6 (3 quick prompts)',
        refl:'Who did you celebrate today?',
        next:'Lesson B: twelve, other people’s ages, and counting games',
        vsay:'Say each number and the class echoes with fingers held up. Count to ten together, clapping on each number, then try it faster. Say ōku as OH-koo and tau as TOW.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 13 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: Tekau, then ōku tau. Prompt 3: Iwa, not Waru.',
        xresc:'Common error: tōku instead of ōku. Say: ōku is for more than one, like years (tau).',
        xpron:'whā = FAH · whitu = FEE-too · tekau = TEH-kow · iwa = EE-wah',
        cur:curriculumRows('Communication (counting, saying and asking how old someone is) · Language Knowledge (numbers 1 to 11, number + ōku tau, E hia ō tau?) · Cultural Knowledge (celebrating people, counting in te reo)','Mathematics link: counting and number words. Recycles Weeks 1 to 6.'),
        vr:valueRows('Psalm 139:14','God made each of us with care. When we celebrate each person and each year of their life, we show aroha.','Why is every birthday a gift?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student (a reference, not homework).','Mini whiteboards and pens for the exit ticket (optional).','Rehearse counting one to ten. Practise holding up fingers as you say each number.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles through the term.'],
        three:'(1) The numbers are <i>tahi, rua, toru, whā, rima, ono, whitu, waru, iwa, tekau</i>. (2) Eleven is ten and one: <i>tekau mā tahi</i>. (3) To say your age, number first, then <i>ōku tau</i> (my years): <i>Tekau ōku tau.</i> To ask, <i>E hia ō tau?</i>',
        diff:['Echo and count with fingers. Start with one to five. Use a number line on the board. Pair with a confident partner.','Complete all steps. Count to ten, say your age, and ask and answer E hia ō tau? with a partner.','Count backwards. Say eleven (tekau mā tahi). Explain why the number comes first. Add Week 1 to 6 sentences to the chat.'],
        look:'Number first, then ōku tau; clear vowels (whā, whitu, iwa, tekau); E hia ō tau? with a rising voice; students asking for each other’s ages unprompted.',
        nx:'revisit counting to ten with students in Starting; add twelve and other people’s ages in Lesson B.',
        rec:'Week 6 (Kei te pīrangi koe ki te aha?), Week 4 (Ko wai tō māmā?) and Week 3 (Nō hea koe?) are recalled in the warm-up, steps 1 and 11, and the drama. Lesson B recalls E hia ō tau? and adds ōna.'
      },
      D: {
        VOC:['tahi','rua','toru','whā','rima','ono','whitu','waru','iwa','tekau','tau','ōku'],
        STEPS:[
          ['Quick recap: Hello, I am Sam. How are you?','Kia~ora.|w Ko|k Sam|p ahau.|a Kei~te|k pēhea|q koe?|a','KEE-ah OR-ah. kor Sam ah-HOW. kay teh PEH-heh-ah KOH-eh','Weeks 1 and 2, stacked.',null,'Whole class'],
          ['Count with me: one, two, three.','tahi|n rua|n toru|n*','TAH-hee ROO-ah TOH-roo','Hold up your fingers as you say each one.','Let’s count in te reo. Don’t write anything down. Just say each number after me, and hold up fingers: tahi, rua, toru.','Echo'],
          ['Four, five, six.','whā|n rima|n ono|n*','FAH REE-mah OR-nor','whā has a long ā.',null,'Echo'],
          ['Seven, eight, nine, ten.','whitu|n waru|n iwa|n tekau|n*','FEE-too WAH-roo EE-wah TEH-kow','Now count tahi to tekau together, clapping each number.','Count from tahi to tekau together, clapping on every number. Then try it a little faster.','Whole class'],
          ['How would you say: I am ten?','Tekau|n ōku|a* tau.|n*','TEH-kow OH-koo TOW','Number first, then ōku tau, which means my years.','In English we say I am ten. In te reo we say ten my years. Take a moment… (wait 3 seconds)… Tekau ōku tau. Say it with me.','Echo'],
          ['How would you say: I am nine?','Iwa|n ōku|a tau.|n','EE-wah OH-koo TOW','Only the number changes.',null,'Whole class'],
          ['How would you say: I am eleven?','Tekau|n mā|q* tahi|n ōku|a tau.|n','TEH-kow MAH TAH-hee OH-koo TOW','Eleven is ten and one: tekau mā tahi.','Eleven is ten and one, so tekau mā tahi. Take a moment… (wait 3 seconds)… Tekau mā tahi ōku tau. Say it with me.','Echo'],
          ['How would you say: How old are you?','E~hia|q* ō|a* tau?|n','eh HEE-ah OH TOW','hia = how many. ō = your (years).',null,'Echo'],
          ['Ask your partner how old they are, then answer.','E~hia|q ō|a tau?|n ___|n ōku|a tau.|n','eh HEE-ah OH TOW · ___ OH-koo TOW','The question and the answer use the same words.','Turn to your partner. One asks, one answers with their age, then swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: Hello, I am Sam. I am eleven.','Kia~ora.|w Ko|k Sam|p ahau.|a Tekau|n mā|q tahi|n ōku|a tau.|n','KEE-ah OR-ah. kor Sam ah-HOW. TEH-kow MAH TAH-hee OH-koo TOW','Week 1 plus today.',null,'Pairs'],
          ['How would you say: I am Sam. I am from Christchurch. I am ten.','Ko|k Sam|p ahau.|a Nō|k Ōtautahi|p ahau.|a Tekau|n ōku|a tau.|n','kor Sam ah-HOW. nor OR-tow-TAH-hee ah-HOW. TEH-kow OH-koo TOW','Weeks 1, 3 and 7 together.',null,'Whole class'],
          ['Class chain: greet, say your name, ask their age, they answer, goodbye.','Kia~ora.|w Ko|k ___|p ahau.|a E~hia|q ō|a tau?|n ___|n ōku|a tau.|n Ka~kite!|w','KEE-ah OR-ah… kor ___ ah-HOW… eh HEE-ah OH TOW… ___ OH-koo TOW… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Huritau — The Birthday',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Kei te harikoa ahau!','Hello, children! I am happy!','(arms wide)','T1W2'],
          ['Hana','Kia ora, Kuia. Ko Hana ahau.','Hello, Kuia. I am Hana.','(smiles)','T1W1'],
          ['Kuia Mere','Kei te pēhea koe, Tama?','How are you, Tama?','','T1W2'],
          ['Tama','Kei te pai ahau. E hia ō tau, Kuia?','I am well. How old are you, Kuia?','(cheeky grin)'],
          ['Kuia Mere','Tekau mā iwa ōku tau!','I am nineteen!','(winks)'],
          ['Hana','Kāo, Kuia!','No, Kuia!','(laughs)'],
          ['Kuia Mere','E hia ō tau, Hana?','How old are you, Hana?',''],
          ['Hana','Tekau mā tahi ōku tau.','I am eleven.','(holds up ten fingers, then one)'],
          ['Kuia Mere','E hia ō tau, Tama?','How old are you, Tama?',''],
          ['Tama','Tekau ōku tau.','I am ten.','(holds up ten fingers)'],
          ['Kuia Mere','Nō hea koe, Tama?','Where are you from, Tama?','','T1W3'],
          ['Tama','Nō konei ahau.','I am from here.','(points at the floor)','T1W3'],
          ['Kuia Mere','Kei te harikoa ahau!','I am happy!','(to the audience, in English) God made each of us with care. Every year of life is a gift to thank him for.'],
          ['Hana','Ka kite, Kuia!','See you, Kuia!','(Tama waves too)']]},
        EX:[['Say in te reo: ‘I am ten.’','Tekau ōku tau.'],['What does ‘E hia ō tau?’ mean?','How old are you?'],['Choose to say ‘I am nine’: ____ ōku tau. (Iwa / Waru)','Iwa'],['Say in te reo: ‘I am eleven.’','Tekau mā tahi ōku tau.'],['Stretch: ask your partner how old they are, then answer for yourself.','E hia ō tau? ___ ōku tau.']],
        CE:['Putting ōku tau before the number','Forgetting E hia means how many','Choosing waru (eight)','Leaving out mā','Missing the question or the answer'],
        T:'T1 W7 Lesson A',
        LP:{title:'E hia ō tau? — How old are you?',val:'Aroha · Psalm 139:14',pat:['E hia ō tau?','________ ōku tau.','Tekau mā tahi ōku tau.'],swap:'Numbers: tahi · rua · toru · whā · rima · ono · whitu · waru · iwa · tekau · tekau mā tahi'}
      }
    };

    // ── Lesson B · E hia ōna tau? — How old is she or he? ──
    const B = {
      P: {
        w:7,
        l:'B',
        ch:'E~hia|q ōna|a tau?|n',
        sub:'How old is she or he? Today we reach twelve and talk about other people’s ages.',
        say:'Kia ora everyone! Last lesson we counted to ten and said our ages. Today we add twelve and talk about other people’s ages. Still no writing: listen, think and speak, and keep counting with fingers.',
        pron:'E hia ōna tau? = eh HEE-ah OH-nah TOW',
        li:'say and ask how old other people are, count up to twelve, and chat about ages in te reo.',
        succ:['I can count to twelve in te reo.','I can say how old someone else is: Tekau mā tahi ōna tau.','I can chat about names, places and ages: Kia ora. Ko ___ ahau. Nō ___ ahau. ___ ōku tau.'],
        wp:'God teaches us to value every day.',
        ref:'Psalm 90:12',
        mom:'When we count our days with thanks and cheer others on, we show aroha.',
        q:'How can you cheer someone on today?',
        recall:[['How do you say: How old are you?','E hia ō tau?'],['How do you say: I am ten?','Tekau ōku tau.'],['How do you say: I want to eat?','Kei te pīrangi ahau ki te kai.'],['How do you say: Where are you from?','Nō hea koe?']],
        rtag:'Weeks 1 to 7',
        rtxt:'Remember when… Weeks 1 to 7 (4 quick prompts)',
        refl:'Who did you cheer on today?',
        next:'Week 8: Classroom kōrero (Whakarongo mai, Titiro mai)',
        vsay:'Say each number and the class echoes with fingers held up. Same vocab card as Lesson A, with two stretch words today: tekau mā rua (twelve) and ōna (his or her). Count to twelve together.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: ōna (his or her), not ō (your). Prompt 3: rua, not tahi.',
        xresc:'Common error: ō for ōna. Say: ō is your, ōna is his or hers.',
        xpron:'ōna = OH-nah · tekau mā rua = TEH-kow MAH ROO-ah',
        cur:curriculumRows('Communication (asking and saying other people’s ages, counting to twelve) · Language Knowledge (number + ōna tau, E hia ōna tau?, tekau mā rua) · Cultural Knowledge (respecting and celebrating others)','Mathematics link: counting and number words. Recycles Weeks 1 to 7.'),
        vr:valueRows('Psalm 90:12','God teaches us to value every day. When we count our days with thanks and cheer others on, we show aroha.','How can you cheer someone on today?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add tekau mā rua (twelve) and ōna (his or her) as the two stretch words, written or spoken.','Mini whiteboards and pens for the exit ticket (optional).','Rehearse counting to twelve and the difference between ōku, ō and ōna.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles through the term.'],
        three:'(1) Twelve is ten and two: <i>tekau mā rua</i>. (2) To talk about someone else’s age, swap <i>ōku</i> (my) for <i>ōna</i> (his or her): <i>Tekau ōna tau.</i> (3) To ask, <i>E hia ōna tau?</i>',
        diff:['Echo and count with fingers. Practise one to ten before twelve. Use a number line. Pair with a confident partner.','Complete all steps. Ask and answer ages with a partner and chat using Week 1 to 7 sentences.','Add twelve and ōna. Count backwards from twelve. Explain the difference between ōku, ō and ōna.'],
        look:'Number first, then ōna tau for other people; ōku for me and ō for you; clear vowels (whā, whitu, tekau, rua); students asking E hia ōna tau? unprompted.',
        nx:'revisit ōku, ō and ōna with students in Starting; move to Week 8 (Classroom kōrero).',
        rec:'Lesson A (E hia ō tau?, Tekau ōku tau), Week 6 (Kei te pīrangi), Week 5 (Āe), Week 3 (Nō hea koe?) and Week 1 (Ko ___ ahau) are recalled in the warm-up, steps 1, 8, 9 and the drama. Week 8 will recall numbers.'
      },
      D: {
        VOC:[...A.D.VOC,'tekau mā rua','ōna'],
        STEPS:[
          ['Quick recap: Hello, I am Sam. How old are you? I am ten.','Kia~ora.|w Ko|k Sam|p ahau.|a E~hia|q ō|a tau?|n Tekau|n ōku|a tau.|n','KEE-ah OR-ah. kor Sam ah-HOW. eh HEE-ah OH TOW. TEH-kow OH-koo TOW','Everything from Lesson A, stacked.',null,'Whole class'],
          ['How would you say: I am twelve?','Tekau|n mā|q rua|n* ōku|a tau.|n','TEH-kow MAH ROO-ah OH-koo TOW','Twelve is ten and two: tekau mā rua.','Last lesson eleven was ten and one. Twelve is ten and two. Take a moment… (wait 3 seconds)… Tekau mā rua. Say it with me, then tekau mā rua ōku tau.','Echo'],
          ['How would you say: How old is she or he?','E~hia|q ōna|a* tau?|n','eh HEE-ah OH-nah TOW','ōna = his or her. It replaces ō (your).','To ask about someone else, swap ō for ōna. Take a moment… (wait 3 seconds)… E hia ōna tau? Say it with me.','Echo'],
          ['How would you say: She is eleven.','Tekau|n mā|q tahi|n ōna|a tau.|n','TEH-kow MAH TAH-hee OH-nah TOW','Number first, then ōna tau.',null,'Echo'],
          ['Ask your partner how old their friend is (make up an age), then answer.','E~hia|q ōna|a tau?|n ___|n ōna|a tau.|n','eh HEE-ah OH-nah TOW · ___ OH-nah TOW','The question and the answer share the same words.','Turn to your partner. One asks how old a friend is, the other makes up an age, then swap. Take 60 seconds while I listen.','Pairs'],
          ['Count together from one to twelve.','tahi|n rua|n toru|n whā|n rima|n ono|n whitu|n waru|n iwa|n tekau|n tekau|n mā|q tahi|n tekau|n mā|q rua|n','TAH-hee ROO-ah TOH-roo FAH REE-mah OR-nor FEE-too WAH-roo EE-wah TEH-kow TEH-kow MAH TAH-hee TEH-kow MAH ROO-ah','Count with fingers and a clap.','Count to twelve together, clapping each number. Try once slowly, once quickly.','Whole class'],
          ['How would you say: I am ten. She is eleven.','Tekau|n ōku|a tau.|n Tekau|n mā|q tahi|n ōna|a tau.|n','TEH-kow OH-koo TOW. TEH-kow MAH TAH-hee OH-nah TOW','ōku for me, ōna for her.',null,'Whole class'],
          ['How would you say: Hello, I am Sam. I am happy. I am eleven.','Kia~ora.|w Ko|k Sam|p ahau.|a Kei~te|k harikoa|n ahau.|a Tekau|n mā|q tahi|n ōku|a tau.|n','KEE-ah OR-ah. kor Sam ah-HOW. kay teh HAH-ree-KOR-ah ah-HOW. TEH-kow MAH TAH-hee OH-koo TOW','Weeks 1, 2 and 7 together.',null,'Pairs'],
          ['How would you say: Hana is my friend. She is ten.','Ko|k Hana|p tōku|a hoa.|n Tekau|n ōna|a tau.|n','kor Hana TOH-koo HOR-ah. TEH-kow OH-nah TOW','Weeks 1 and 7 together.',null,'Whole class'],
          ['How would you say: Where are you from? How old are you?','Nō|k hea|q koe?|a E~hia|q ō|a tau?|n','nor HEH-ah KOH-eh. eh HEE-ah OH TOW','Weeks 3 and 7 together.',null,'Pairs'],
          ['How would you say: Hello, I want to run. I am ten.','Kia~ora.|w Kei~te|k pīrangi|q ahau|a ki~te|k oma.|n Tekau|n ōku|a tau.|n','KEE-ah OR-ah. kay teh PEE-rah-ngee ah-HOW kee teh OR-mah. TEH-kow OH-koo TOW','Weeks 1, 5, 6 and 7 together.',null,'Whole class'],
          ['Class chain: greet, say your name and where you are from, say your age, ask theirs, goodbye.','Kia~ora.|w Ko|k ___|p ahau.|a Nō|k ___|p ahau.|a ___|n ōku|a tau.|n E~hia|q ō|a tau?|n Ka~kite!|w','KEE-ah OR-ah… kor ___ ah-HOW… nor ___ ah-HOW… ___ OH-koo TOW… eh HEE-ah OH TOW… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Rā Hākinakina — Sports Day',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te harikoa ahau!','Hello, children! I am happy!','(blows a whistle)'],
          ['Hana','Tēnā koe, Kaiako. Ko Hana ahau.','Greetings, teacher. I am Hana.','','T1W1'],
          ['Kaiako Rose','E hia ō tau, Hana?','How old are you, Hana?',''],
          ['Hana','Tekau mā tahi ōku tau.','I am eleven.','(holds up fingers)'],
          ['Kaiako Rose','E hia ōna tau?','How old is he?','(points at Tama)'],
          ['Tama','Tekau mā rua ōku tau!','I am twelve!','(stands tall)'],
          ['Hana','Ko Tama tōku hoa. Tekau mā rua ōna tau.','Tama is my friend. He is twelve.','(smiles)','T1W1'],
          ['Kaiako Rose','Kei te pīrangi koe ki te oma, Tama?','Do you want to run, Tama?','','T1W6'],
          ['Tama','Āe, kei te pīrangi ahau ki te oma!','Yes, I want to run!','(stretches)','T1W6'],
          ['Kaiako Rose','Tahi, rua, toru… oma!','One, two, three… run!','(drops the flag)'],
          ['Hana','Kei te oma ahau! Kei te oma ia!','I am running! He is running!','(they race)','T1W5'],
          ['Kaiako Rose','Kei te harikoa ahau!','I am happy!','(to the audience, in English) God teaches us to value every day. Let us cheer each other on.'],
          ['Hana','Ka kite, Kaiako!','See you, teacher!','(Tama waves too)']]},
        EX:[['Say in te reo: ‘How old is she?’','E hia ōna tau?'],['What does ‘Tekau mā rua ōna tau’ mean?','He or she is twelve.'],['Choose to say ‘I am twelve’: Tekau mā ____ ōku tau. (rua / tahi)','rua'],['Say in te reo: ‘I am eleven. She is ten.’','Tekau mā tahi ōku tau. Tekau ōna tau.'],['Stretch: greet your partner, say your name, where you are from and how old you are.','Kia ora. Ko ___ ahau. Nō ___ ahau. ___ ōku tau.']],
        CE:['Using ō (your) instead of ōna','Mixing up rua and tahi','Choosing tahi (one)','Mixing up ōku and ōna','Missing part of the chat'],
        T:'T1 W7 Lesson B',
        LP:{title:'E hia ōna tau? — How old is she or he?',val:'Aroha · Psalm 90:12',pat:['E hia ōna tau?','________ ōna tau.','Tekau mā rua ōku tau.'],swap:'ōku = my · ō = your · ōna = his/her. Numbers: tahi to tekau mā rua'}
      }
    };

    addLessons({ '1.7.A': A, '1.7.B': B });
  }

  /* ──────── WEEK 8 · Classroom kōrero ──────── */
  {
    addGlossary({
      "whakarongo":["listen","fah-kah-ROH-ngoh",8],
      "titiro":["look","TEE-tee-roh",8],
      "tū":["stand","TOO",8],
      "noho":["sit / stay","NOH-hoh",8],
      "mai":["towards the speaker (to me / here)","MY",8],
      "whakarongo mai":["listen (to me)","fah-kah-ROH-ngoh MY",8],
      "titiro mai":["look (at me / here)","TEE-tee-roh MY",8],
      "tū mai":["stand up","TOO MY",8],
      "noho mai":["sit down","NOH-hoh MY",8],
      "kōrero mai":["speak (to me)","KOH-reh-roh MY",8],
      "pānui mai":["read (to me)","PAH-noo-ee MY",8],
      "tēnā koa":["please","TEH-nah KOH-ah",8],
      "ākonga":["student / learner","AH-kor-ngah",8],
      "kaua e":["don’t","KOW-ah eh",8],
      "whakamā":["shy / embarrassed","FAH-kah-MAH",8]
    });

    // ── Lesson A · Whakarongo mai! — Listen! ──
    const A = {
      P: {
        w:8,
        l:'A',
        ch:'Whakarongo|k mai!|a',
        sub:'Listen! Today we learn classroom commands and how to ask politely.',
        say:'Kia ora everyone! Last week we counted and said our ages. This week is classroom kōrero: the little commands we use every day. Each one ends with mai, which means towards me. Still no writing: listen, think, speak and move.',
        pron:'Whakarongo mai = fah-kah-ROH-ngoh MY',
        li:'give and follow simple classroom commands and say please and thank you in te reo.',
        succ:['I can follow a command: Noho mai.','I can give a command: Whakarongo mai. Titiro mai.','I can ask politely: Tēnā koa, tū mai. Kia ora!'],
        wp:'Listening is a way of loving people.',
        ref:'James 1:19',
        mom:'When we listen well and speak kindly, we show aroha.',
        q:'Who listens well to you, and how can you listen well to someone today?',
        recall:[['How do you say: I want to play?','Kei te pīrangi ahau ki te tākaro.'],['How do you say: How old are you?','E hia ō tau?'],['How do you say: Hello, I am Sam.','Kia ora. Ko Sam ahau.']],
        rtag:'Weeks 1 to 7',
        rtxt:'Remember when… Weeks 1 to 7 (3 quick prompts)',
        refl:'Who did you listen to well today?',
        next:'Lesson B: saying don’t (kaua e) and saying we feel shy',
        vsay:'Say each word and the class echoes while doing the action: hand to ear for whakarongo, pointing to eyes for titiro, standing for tū, sitting for noho, open hand for kōrero, a pretend book for pānui, a beckoning hand for haere mai. Explain that mai means towards me, the speaker.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: mai at the end. Prompt 3: noho (sit), not tū (stand).',
        xresc:'Common error: leaving out mai. Say: mai means towards me, so we add it when we speak to someone.',
        xpron:'whakarongo = fah-kah-ROH-ngoh · ākonga = AH-kor-ngah · tēnā koa = TEH-nah KOH-ah',
        cur:curriculumRows('Communication (understanding and giving classroom commands, polite requests) · Language Knowledge (action word + mai, tēnā koa, word order) · Cultural Knowledge (listening respectfully, manaakitanga in the classroom)','Recycles Weeks 1 to 7. Use these commands in real classroom routines all term.'),
        vr:valueRows('James 1:19','Listening is a way of loving people. When we listen well and speak kindly, we show aroha.','Who listens well to you, and how can you listen well to someone today?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student (a reference, not homework).','Mini whiteboards and pens for the exit ticket (optional).','Practise an action for each word (hand to ear, pointing to eyes, standing, sitting) so students can copy you.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles through the term.'],
        three:'(1) A command is the action word + <i>mai</i>: <i>Noho mai</i>. (2) <i>mai</i> means towards the speaker. (3) Add <i>Tēnā koa</i> (please) at the start to make it polite, and say <i>Kia ora</i> to thank.',
        diff:['Echo as a whole class and do every action. Start with noho mai and tū mai. Use picture cards for each command. Pair with a confident partner.','Complete all steps. Give and follow commands with a partner, then add tēnā koa and kia ora.','Give a command to a named person (Tama, tū mai). Lead a round of commands for the class. Explain what mai adds to each word.'],
        look:'Clear vowels (whakarongo, tū with a long ū, kōrero with a long ō); mai at the end; tēnā koa for please; students using the commands unprompted in the room.',
        nx:'revisit action word + mai with students in Starting; add kaua e (don’t) in Lesson B.',
        rec:'Week 5 (Kei te pīrangi ahau ki te …, kōrero, pānui), Week 7 (E hia ō tau?) and Week 1 (Kia ora, Ko ___ ahau) are recalled in the warm-up, step 1 and the drama. Lesson B recalls the five commands and adds kaua e.'
      },
      D: {
        VOC:['whakarongo','titiro','tū','noho','kōrero','pānui','haere mai','mai','tēnā koa','ākonga','kaiako'],
        STEPS:[
          ['Quick recap: Hello, I want to play. I am happy.','Kia~ora.|w Kei~te|k pīrangi|q ahau|a ki~te|k tākaro.|n Kei~te|k harikoa|n ahau.|a','KEE-ah OR-ah. kay teh PEE-rah-ngee ah-HOW kee teh TAH-kah-roh. kay teh HAH-ree-KOR-ah ah-HOW','Weeks 1, 2 and 6, stacked.',null,'Whole class'],
          ['How would you say: Listen (to me)?','Whakarongo|k* mai.|a*','fah-kah-ROH-ngoh MY','whakarongo = listen. mai = towards me, the speaker.','This week we learn the commands we use in class. The little word mai means towards me. Take a moment… (wait 3 seconds)… Whakarongo mai. Say it with me, hand to your ear.','Echo'],
          ['How would you say: Look (at me)?','Titiro|k* mai.|a','TEE-tee-roh MY','Same shape: action word + mai.',null,'Echo'],
          ['How would you say: Stand up?','Tū|k* mai.|a','TOO MY','tū = stand. Hold the long ū.',null,'Echo'],
          ['How would you say: Sit down?','Noho|k* mai.|a','NOH-hoh MY','noho = sit.',null,'Echo'],
          ['How would you say: Speak (to me)?','Kōrero|k mai.|a','KOH-reh-roh MY','You know kōrero from Week 5.',null,'Whole class'],
          ['Give your partner a command and they do it. Swap.','Whakarongo|k mai.|a Titiro|k mai.|a Tū|k mai.|a Noho|k mai.|a','fah-kah-ROH-ngoh MY. TEE-tee-roh MY. TOO MY. NOH-hoh MY','Every command ends with mai.','Turn to your partner. One gives a command, the other does the action, then swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: Please sit down.','Tēnā~koa,|w* noho|k mai.|a','TEH-nah KOH-ah, NOH-hoh MY','Tēnā koa = please. It goes first.',null,'Echo'],
          ['How would you say: Please listen.','Tēnā~koa,|w whakarongo|k mai.|a','TEH-nah KOH-ah, fah-kah-ROH-ngoh MY','Same frame, new action word.',null,'Whole class'],
          ['How would you say: Please read (to me).','Tēnā~koa,|w pānui|k mai.|a','TEH-nah KOH-ah, PAH-noo-ee MY','You know pānui from Week 5.',null,'Whole class'],
          ['How would you say: Come here! (You already know this one.)','Haere|k mai!|a','HIGH-reh MY','haere (go) + mai (towards me) = come here. This is why haere mai means welcome.','Surprise! You have been saying this since Week 1. Haere means go, and mai means towards me, so haere mai means come here, or welcome.','Whole class'],
          ['How would you say: Please, Tama, stand up.','Tēnā~koa,|w Tama,|p tū|k mai.|a','TEH-nah KOH-ah, Tama, TOO MY','Add a name to speak to one person.',null,'Pairs'],
          ['Class chain: give a polite command, then say thank you when it is done.','Tēnā~koa,|w ___|p noho|k mai.|a Kia~ora!|w','TEH-nah KOH-ah, ___ NOH-hoh MY. KEE-ah OR-ah','Real classroom talk, nothing memorised.','Pass it around the room. Each person gives a polite command to the next, who does it and says Kia ora. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Wā Akoranga — Lesson Time',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, ākonga! Tēnā koa, noho mai.','Hello, students! Please sit down.','(points to the mat)'],
          ['Hana','Kia ora, Kaiako. Kei te harikoa ahau!','Hello, teacher. I am happy!','(sits down)','T1W2'],
          ['Kaiako Rose','Whakarongo mai, tamariki.','Listen, children.','(hand to ear)'],
          ['Tama','Kei te whakarongo ahau.','I am listening.','(sits very still)','T1W5'],
          ['Kaiako Rose','Titiro mai. Tū mai, Hana.','Look at me. Stand up, Hana.','(Hana stands)'],
          ['Hana','Kei te tū ahau.','I am standing.','(stands tall)','T1W5'],
          ['Kaiako Rose','Kōrero mai, Tama. E hia ō tau?','Speak to me, Tama. How old are you?','','T1W7'],
          ['Tama','Tekau mā tahi ōku tau.','I am eleven.','(holds up fingers)','T1W7'],
          ['Kaiako Rose','Tēnā koa, pānui mai, Hana.','Please read to me, Hana.','(hands her a book)'],
          ['Hana','Āe, Kaiako.','Yes, teacher.','(opens the book)','T1W2'],
          ['Kaiako Rose','Kia ora, Hana. Kei te pai!','Thank you, Hana. That is good!','(to the audience, in English) When we listen and speak with kindness, we show aroha.'],
          ['Tama','Ka kite, Kaiako!','See you, teacher!','(waves)','T1W1']]},
        EX:[['Say in te reo: ‘Listen (to me).’','Whakarongo mai.'],['What does ‘Titiro mai’ mean?','Look (at me).'],['Choose to say ‘Please sit down’: Tēnā koa, ____ mai. (noho / tū)','noho'],['Say in te reo: ‘Please stand up.’','Tēnā koa, tū mai.'],['Stretch: give your partner a polite command, then thank them when they do it.','Tēnā koa, ___ mai. Kia ora!']],
        CE:['Leaving out mai','Mixing up titiro (look) and whakarongo (listen)','Choosing tū (stand) instead of noho (sit)','Forgetting tēnā koa','Missing the thank you'],
        T:'T1 W8 Lesson A',
        LP:{title:'Whakarongo mai! — Listen!',val:'Aroha · James 1:19',pat:['________ mai.','Tēnā koa, ________ mai.','Kia ora!'],swap:'Swap the first word: whakarongo = listen · titiro = look · tū = stand · noho = sit · kōrero = speak · pānui = read · haere = come'}
      }
    };

    // ── Lesson B · Kaua e kōrero! — Don’t talk! ──
    const B = {
      P: {
        w:8,
        l:'B',
        ch:'Kaua|q e|q kōrero!|n',
        sub:'Don’t talk! Today we learn how to say don’t, and how to say we feel shy.',
        say:'Kia ora everyone! Last lesson we learned the commands. Today we learn how to say don’t, and how to say we feel shy, because everyone feels shy sometimes. Still no writing: listen, think, speak and move.',
        pron:'Kaua e kōrero = KOW-ah eh KOH-reh-roh',
        li:'say what we should not do, give polite commands, and say we feel shy in te reo.',
        succ:['I can say don’t: Kaua e kōrero.','I can ask politely: Tēnā koa, kaua e oma.','I can say how I feel: Kei te whakamā ahau.'],
        wp:'Gentle words help everyone feel safe.',
        ref:'Proverbs 15:1',
        mom:'When we ask politely and speak gently, we show aroha.',
        q:'What is one gentle thing you can say in class today?',
        recall:[['How do you say: Listen to me.','Whakarongo mai.'],['How do you say: Please sit down.','Tēnā koa, noho mai.'],['How do you say: I am tired.','Kei te ngenge ahau.'],['How do you say: Where are you from?','Nō hea koe?']],
        rtag:'Weeks 1 to 8',
        rtxt:'Remember when… Weeks 1 to 8 (4 quick prompts)',
        refl:'Who did you speak gently to today?',
        next:'Week 9: Love and thanks (E aroha ana te Atua ki a tātou)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: kaua e (don’t) and whakamā (shy). Say them slowly. Act out whakamā by looking at your feet. Remind students it is okay to feel shy.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: kaua e, then the action word. Prompt 3: Kaua.',
        xresc:'Common error: leaving out e. Say: kaua e always travels as a pair, like kei te.',
        xpron:'kaua e = KOW-ah eh · whakamā = FAH-kah-MAH · tākaro = TAH-kah-roh',
        cur:curriculumRows('Communication (saying what not to do, polite requests, naming a feeling) · Language Knowledge (Kaua e + action word, tēnā koa, Kei te + feeling) · Cultural Knowledge (gentle speech, noticing how others feel, manaakitanga)','Recycles Weeks 1 to 8. Hauora: it is okay to feel shy.'),
        vr:valueRows('Proverbs 15:1','Gentle words help everyone feel safe. When we ask politely and speak gently, we show aroha.','What is one gentle thing you can say in class today?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add kaua e (don’t) and whakamā (shy) as the two stretch words, written or spoken.','Mini whiteboards and pens for the exit ticket (optional).','Rehearse kaua e and whakamā below. Practise a gentle, kind voice for the commands.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles through the term.'],
        three:'(1) <i>Kaua e</i> means don’t and goes before the action word: <i>Kaua e kōrero</i>. (2) For a polite request, start with <i>Tēnā koa</i>. (3) <i>Kei te whakamā ahau</i> uses the same Week 2 frame: Kei te + feeling + who.',
        diff:['Echo as a whole class and use actions for each kaua e sentence. Use a sentence strip (Kaua e ___). Pair with a confident partner.','Complete all steps. Give and follow don’t and do commands with a partner, then talk about feeling shy.','Combine commands and kaua e in one turn. Ask someone if they feel shy. Explain why kaua e needs both words.'],
        look:'Both words in kaua e; the action word straight after; clear vowels (kaua = KOW-ah, whakamā with a long ā); a gentle tone; students using kaua e and tēnā koa unprompted.',
        nx:'revisit kaua e + action word with students in Starting; move to Week 9 (Love and thanks).',
        rec:'Lesson A (Whakarongo mai, Tēnā koa, noho mai) plus Week 2 (Kei te ngenge, Kei te harikoa), Week 1 (Ko ___ ahau, Ka kite) and Week 7 (Tekau mā tahi ōku tau) are recalled in the warm-up, steps 1, 8 to 11 and the drama. Week 9 will recall Tēnā koa and Kia ora.'
      },
      D: {
        VOC:[...A.D.VOC,'kaua e','whakamā'],
        STEPS:[
          ['Quick recap: Please listen. Look at me.','Tēnā~koa,|w whakarongo|k mai.|a Titiro|k mai.|a','TEH-nah KOH-ah, fah-kah-ROH-ngoh MY. TEE-tee-roh MY','Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Don’t talk.','Kaua|q* e|q* kōrero.|n','KOW-ah eh KOH-reh-roh','Kaua e = don’t. It goes before the action word.','Last lesson we said kōrero mai, speak to me. To say don’t, put kaua e in front and drop mai. Take a moment… (wait 3 seconds)… Kaua e kōrero. Say it with me, with a finger on your lips.','Echo'],
          ['How would you say: Don’t run.','Kaua|q e|q oma.|n','KOW-ah eh OR-mah','Same pair, new action word.',null,'Echo'],
          ['How would you say: Don’t play.','Kaua|q e|q tākaro.|n','KOW-ah eh TAH-kah-roh','Only the last word changes.',null,'Whole class'],
          ['How would you say: Please, don’t talk.','Tēnā~koa,|w kaua|q e|q kōrero.|n','TEH-nah KOH-ah, KOW-ah eh KOH-reh-roh','Polite words go first.',null,'Whole class'],
          ['Give your partner a do or a don’t command. They do it or stop. Swap.','Kaua|q e|q oma.|n Noho|k mai.|a','KOW-ah eh OR-mah. NOH-hoh MY','Do: action word + mai. Don’t: kaua e + action word.','Turn to your partner. One gives a command (do or don’t), the other responds, then swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: Don’t talk, Tama.','Kaua|q e|q kōrero,|n Tama.|p','KOW-ah eh KOH-reh-roh, Tama','Add a name to speak to one person.',null,'Echo'],
          ['How would you say: I am shy.','Kei~te|k whakamā|n* ahau.|a','kay teh FAH-kah-MAH ah-HOW','Week 2 frame: Kei te + feeling + ahau. whakamā = shy.','Everyone feels shy sometimes, and that is okay. You already know the frame from Week 2. Take a moment… (wait 3 seconds)… Kei te whakamā ahau. Say it with me.','Echo'],
          ['How would you say: Are you shy?','Kei~te|k whakamā|n koe?|a','kay teh FAH-kah-MAH KOH-eh','Same words, voice goes up. koe = you.',null,'Pairs'],
          ['How would you say: No, I am happy. Thank you.','Kāo,|w kei~te|k harikoa|n ahau.|a Kia~ora.|w','KAH-or, kay teh HAH-ree-KOR-ah ah-HOW. KEE-ah OR-ah','Weeks 2 and 8 together.',null,'Whole class'],
          ['How would you say: Hello. Please listen. Don’t run. Thank you.','Kia~ora.|w Tēnā~koa,|w whakarongo|k mai.|a Kaua|q e|q oma.|n Kia~ora.|w','KEE-ah OR-ah. TEH-nah KOH-ah, fah-kah-ROH-ngoh MY. KOW-ah eh OR-mah. KEE-ah OR-ah','Weeks 1 and 8 together.',null,'Whole class'],
          ['Class chain: give a polite command and a don’t, then say thank you.','Tēnā~koa,|w ___|k mai.|a Kaua|q e|q ___.|n Kia~ora!|w','TEH-nah KOH-ah, ___ MY. KOW-ah eh ___. KEE-ah OR-ah','Real classroom talk, nothing memorised.','Pass it around the room. Each person gives the next a do and a don’t. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Marae Tākaro — The Playground',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Tēnā koa, whakarongo mai.','Hello, children! Please listen.','(rings the bell)','T1W8'],
          ['Tama','Kei te whakarongo ahau, Kaiako.','I am listening, teacher.','','T1W5'],
          ['Kaiako Rose','Kaua e oma, Hana.','Don’t run, Hana.','(holds up a hand)'],
          ['Hana','Āe, Kaiako. Kei te noho ahau.','Yes, teacher. I am sitting.','(sits down quickly)','T1W2'],
          ['Tama','Kei te whakamā ahau.','I am shy.','(looks at his feet)'],
          ['Kaiako Rose','Kei te pai. Kōrero mai, Tama.','That is okay. Speak to me, Tama.','(kneels down kindly)'],
          ['Tama','Kia ora, Kaiako. Ko Tama ahau. Tekau mā tahi ōku tau.','Hello, teacher. I am Tama. I am eleven.','','T1W1'],
          ['Hana','Ko Tama tōku hoa. Kei te harikoa ia.','Tama is my friend. He is happy.','(smiles at Tama)','T1W2'],
          ['Kaiako Rose','Tū mai, Tama. Titiro mai, Hana.','Stand up, Tama. Look at me, Hana.','(both stand)'],
          ['Tama','Tēnā koa, noho mai, Hana.','Please sit down, Hana.','(pats the grass beside him)','T1W8'],
          ['Kaiako Rose','Kia ora, tamariki. Kei te harikoa ahau!','Thank you, children. I am happy!','(to the audience, in English) Gentle words help everyone feel safe.'],
          ['Hana','Ka kite, Kaiako!','See you, teacher!','(Tama waves too)','T1W1']]},
        EX:[['Say in te reo: ‘Don’t talk.’','Kaua e kōrero.'],['What does ‘Kaua e oma’ mean?','Don’t run.'],['Choose to say ‘Don’t play’: ____ e tākaro. (Kaua / Kei te)','Kaua'],['Say in te reo: ‘Please listen. Don’t talk.’','Tēnā koa, whakarongo mai. Kaua e kōrero.'],['Stretch: say you feel shy, then ask your partner if they feel shy too.','Kei te whakamā ahau. Kei te whakamā koe?']],
        CE:['Leaving out e (kaua e)','Forgetting kaua e means don’t','Choosing Kei te instead of Kaua','Leaving out tēnā koa or mai','Mixing up ahau and koe'],
        T:'T1 W8 Lesson B',
        LP:{title:'Kaua e kōrero! — Don’t talk!',val:'Aroha · Proverbs 15:1',pat:['Kaua e ________.','Tēnā koa, ________ mai.','Kei te whakamā ahau.'],swap:'Swap the last word: kōrero = talk · oma = run · tākaro = play. Feeling: whakamā = shy'}
      }
    };

    addLessons({ '1.8.A': A, '1.8.B': B });
  }

  /* ──────── WEEK 9 · Love & thanks ──────── */
  {
    addGlossary({
      "atua":["God","AH-too-ah",9],
      "aroha":["love / compassion","ah-ROH-hah",9],
      "e aroha ana":["loves / is loving","eh ah-ROH-hah AH-nah",9],
      "whakapono":["faith / believe","FAH-kah-POH-noh",9],
      "mihi":["thank / greet / acknowledge","MEE-hee",9],
      "whakawhetai":["thank / be thankful","FAH-kah-FEH-tye",9],
      "tātou":["we, all of us (including you)","TAH-toh",9],
      "mō":["for","MOR",9],
      "ki a":["to (before a name or person word)","kee AH",9],
      "au":["I / me (used after ki a)","OW",9],
      "mō te aha":["what for / why","mor teh AH-hah",9]
    });
    addCapitalised(['Atua']);

    // ── Lesson A · E aroha ana te Atua ki a tātou — God loves us ──
    const A = {
      P: {
        w:9,
        l:'A',
        ch:'E~aroha~ana|k te~Atua|n ki~a~tātou.|a',
        sub:'God loves us. Today we say that God loves us and how to say thank you.',
        say:'Kia ora everyone! This week is about love and thanks. We already know kei te and kia ora. Today we learn two big ideas: that God loves us, and how to say thank you. Still no writing: listen, think and speak. If anyone does not share our faith, they can listen respectfully and join in the thank-you words.',
        pron:'E aroha ana te Atua ki a tātou = eh ah-ROH-hah AH-nah teh AH-too-ah kee ah TAH-toh',
        li:'say that God loves us and say thank you for people and things in te reo.',
        succ:['I can say it: E aroha ana te Atua ki a au.','I can thank: Kia ora mō te kai.','I can say: Kei te whakawhetai ahau ki te Atua.'],
        wp:'We love because God loved us first.',
        ref:'1 John 4:19',
        mom:'When we say thank you and show love to others, we show aroha.',
        q:'Who can you say thank you to today, and how will you say it?',
        recall:[['How do you say: Please listen.','Tēnā koa, whakarongo mai.'],['How do you say: Don’t run.','Kaua e oma.'],['How do you say: I am hungry.','Kei te hiakai ahau.']],
        rtag:'Weeks 1 to 8',
        rtxt:'Remember when… Weeks 1 to 8 (3 quick prompts)',
        refl:'Who did you thank today?',
        next:'Lesson B: I love my whānau, and thank you for my friends',
        vsay:'Say each word and the class echoes. Gestures: hands on heart for aroha, point up gently for Atua, circle your arms for tātou, hands together for whakawhetai. Remind students that mō means for. Whānau and kai are old friends from Weeks 4 and 5.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: ki a au (not ki ahau). Prompt 3: mō for thank you for.',
        xresc:'Common error: ki instead of ki a. Say: ki a goes before a person word like au, koe or tātou.',
        xpron:'Atua = AH-too-ah · tātou = TAH-toh · whakawhetai = FAH-kah-FEH-tye',
        cur:curriculumRows('Communication (expressing thanks, naming what we are thankful for) · Language Knowledge (E aroha ana + subject + ki a + person word, Kia ora mō …, Kei te whakawhetai ahau ki …) · Cultural Knowledge (gratitude, karakia kai, manaakitanga)','Recycles Weeks 1 to 8. Link to the school’s karakia kai and mihi. Teach the sentence as one piece first; the grammar of E … ana is taught in Term 3.'),
        vr:valueRows('1 John 4:19','We love because God loved us first. When we say thank you and show love to others, we show aroha.','Who can you say thank you to today, and how will you say it?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student (a reference, not homework).','Mini whiteboards and pens for the exit ticket (optional).','Rehearse the sentence E aroha ana te Atua ki a tātou in pieces, then as a whole. Listen to a fluent speaker or your te reo lead if you can.','Be sensitive to students from different families and faiths. All can learn the language of thanks. Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.'],
        three:'(1) <i>E aroha ana te Atua</i> means God loves. Learn <i>E … ana</i> as a frame around aroha for now. (2) <i>ki a</i> + <i>au</i> (me), <i>koe</i> (you) or <i>tātou</i> (all of us) says who is loved. (3) <i>Kia ora mō</i> + thing says thank you for something.',
        diff:['Echo as a whole class. Say the sentence in pieces first. Use gestures for each word. Pair with a confident partner. Focus on Kia ora mō te kai.','Complete all steps. Say E aroha ana te Atua ki a koe to a partner, then thank someone with Kia ora mō ___.','Add Kei te whakawhetai ahau ki te Atua mō te kai. Swap in ki a au, ki a koe, ki a tātou. Explain what mō means.'],
        look:'Clear vowels (Atua = AH-too-ah, tātou with a long ā, mō with a long ō); ki a before the person word; mō for thank you for; a respectful, warm tone.',
        nx:'revisit E aroha ana te Atua ki a ___ with students in Starting; add I love my whānau in Lesson B.',
        rec:'Lesson 8 (Tēnā koa, whakarongo mai, kaua e oma), Week 2 (Kei te hiakai), Week 4 (tōku whānau), Week 5 (kai) and Week 1 (Kia ora, Ka kite) are recalled in the warm-up, steps 1, 11 to 14 and the drama. Lesson B recalls E aroha ana te Atua ki a au and adds E aroha ana ahau ki …'
      },
      D: {
        VOC:['Atua','aroha','e aroha ana','whakawhetai','mihi','tātou','mō','ki a','kai','whānau','kia ora'],
        STEPS:[
          ['Quick recap: Please listen. Thank you.','Tēnā~koa,|w whakarongo|k mai.|a Kia~ora!|w','TEH-nah KOH-ah, fah-kah-ROH-ngoh MY. KEE-ah OR-ah','Week 8, stacked.',null,'Whole class'],
          ['How would you say: God?','Atua|n*','AH-too-ah','Atua is the word for God.','This week we talk about love and thanks. The word for God is Atua. Say it slowly: Ah-too-ah.','Echo'],
          ['How would you say: love?','Aroha|n*','ah-ROH-hah','aroha = love. You know it from our value.',null,'Echo'],
          ['How would you say: God loves.','E~aroha~ana|k* te~Atua.|n','eh ah-ROH-hah AH-nah teh AH-too-ah','E aroha ana says love is happening. te Atua = God.','Learn E aroha ana as one little piece, the way we learned kei te. Take a moment… (wait 3 seconds)… E aroha ana te Atua. Say it with me.','Echo'],
          ['How would you say: God loves all of us.','E~aroha~ana|k te~Atua|n ki~a~tātou.|a*','eh ah-ROH-hah AH-nah teh AH-too-ah kee ah TAH-toh','tātou = all of us. ki a points to who is loved.','tātou means all of us together, including you. ki a points to who is loved. Take a moment… (wait 3 seconds)… E aroha ana te Atua ki a tātou. Say it with me.','Echo'],
          ['How would you say: God loves me.','E~aroha~ana|k te~Atua|n ki~a~au.|a*','eh ah-ROH-hah AH-nah teh AH-too-ah kee ah OW','au = me. Only the last piece changes.',null,'Echo'],
          ['How would you say: God loves you.','E~aroha~ana|k te~Atua|n ki~a~koe.|a','eh ah-ROH-hah AH-nah teh AH-too-ah kee ah KOH-eh','koe = you.',null,'Whole class'],
          ['Tell your partner that God loves them, then thank them.','E~aroha~ana|k te~Atua|n ki~a~koe.|a Kia~ora.|w','eh ah-ROH-hah AH-nah teh AH-too-ah kee ah KOH-eh. KEE-ah OR-ah','Say it kindly, as a gift.','Turn to your partner. Look at them and say it kindly, then thank them. Then swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: Thank you for the food.','Kia~ora|w mō|q* te~kai.|n','KEE-ah OR-ah mor teh KYE','mō = for.','You already know kia ora means thank you. To say what for, add mō and the thing. Take a moment… (wait 3 seconds)… Kia ora mō te kai. Say it with me.','Echo'],
          ['How would you say: Thank you for my whānau.','Kia~ora|w mō~tōku~whānau.|n','KEE-ah OR-ah mor TOH-koo FAH-now','Swap the last words.',null,'Whole class'],
          ['How would you say: I am thankful to God.','Kei~te|k whakawhetai|q* ahau|a ki~te~Atua.|n','kay teh FAH-kah-FEH-tye ah-HOW kee teh AH-too-ah','Week 2 frame: Kei te + word + ahau. whakawhetai = thank.',null,'Echo'],
          ['How would you say: I am thankful to God for the food.','Kei~te|k whakawhetai|q ahau|a ki~te~Atua|n mō~te~kai.|n','kay teh FAH-kah-FEH-tye ah-HOW kee teh AH-too-ah mor teh KYE','Add mō and the thing.',null,'Whole class'],
          ['Class chain: say what you are thankful for.','Kia~ora|w mō~___.|n Kia~ora!|w','KEE-ah OR-ah mor ___. KEE-ah OR-ah','Real kōrero, nothing memorised.','Pass it around the room. Each person says Kia ora mō and one thing they are thankful for, in English or te reo for the last word. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Karakia Kai — Saying Grace',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Haere mai ki te kai.','Hello, children! Come to the food.','(opens the door)','T1W8'],
          ['Hana','Kia ora, Kuia. Kei te hiakai ahau.','Hello, Kuia. I am hungry.','(rubs tummy)','T1W2'],
          ['Tama','Kei te tino hiakai ahau!','I am very hungry!','(licks lips)','T1W2'],
          ['Kuia Mere','Whakarongo mai, tamariki. Tēnā koa, noho mai.','Listen, children. Please sit down.','(taps the table gently)','T1W8'],
          ['Kuia Mere','E aroha ana te Atua ki a tātou.','God loves all of us.','(arms open wide)'],
          ['Hana','E aroha ana te Atua ki a au.','God loves me.','(hand on heart)'],
          ['Tama','E aroha ana te Atua ki a koe, Hana.','God loves you, Hana.','(smiles at her)'],
          ['Kuia Mere','Kei te whakawhetai tātou ki te Atua mō te kai.','We are thankful to God for the food.','(bows head)'],
          ['Tama','Kia ora mō te kai, Kuia.','Thank you for the food, Kuia.',''],
          ['Hana','Kia ora mō tōku whānau.','Thank you for my whānau.','(looks around the table)'],
          ['Kuia Mere','Kia ora, tamariki. Kei te harikoa ahau!','Thank you, children. I am happy!','(to the audience, in English) Saying thank you helps us notice the good things we have.'],
          ['Hana','Ka kite, Kuia!','See you, Kuia!','(Tama waves too)','T1W1']]},
        EX:[['Say in te reo: ‘God loves me.’','E aroha ana te Atua ki a au.'],['What does ‘E aroha ana te Atua ki a tātou’ mean?','God loves all of us.'],['Choose to say ‘Thank you for the food’: Kia ora ____ te kai. (mō / ki)','mō'],['Say in te reo: ‘I am thankful to God.’','Kei te whakawhetai ahau ki te Atua.'],['Stretch: thank someone for something (the food, your whānau, your friend).','Kia ora mō ___.']],
        CE:['Leaving out ki a (God loves ___)','Mixing up tātou (all of us) and koe (you)','Choosing ki instead of mō for ‘for’','Leaving out kei te or ki te Atua','Missing the thank you'],
        T:'T1 W9 Lesson A',
        LP:{title:'E aroha ana te Atua ki a tātou — God loves us',val:'Aroha · 1 John 4:19',pat:['E aroha ana te Atua ki a ________.','Kia ora mō te ________.','Kei te whakawhetai ahau ki te Atua.'],swap:'Swap the last word: au = me · koe = you · tātou = all of us. Thanks: kai · whānau'}
      }
    };

    // ── Lesson B · E aroha ana ahau ki tōku whānau — I love my whānau ──
    const B = {
      P: {
        w:9,
        l:'B',
        ch:'E~aroha~ana|k ahau|a ki~tōku~whānau.|n',
        sub:'I love my whānau. Today we say who we love and thank people in more ways.',
        say:'Kia ora everyone! Last lesson we said God loves us and we said thank you. Today we say who we love, we thank people for our friends and our teacher, and we ask what for. Still no writing: listen, think and speak.',
        pron:'E aroha ana ahau ki tōku whānau = eh ah-ROH-hah AH-nah ah-HOW kee TOH-koo FAH-now',
        li:'say who we love, thank others for what they give us, and ask and answer what for in te reo.',
        succ:['I can say who I love: E aroha ana ahau ki tōku whānau.','I can thank: Kia ora mō ōku hoa.','I can ask and answer: Mō te aha? Mō te kai.'],
        wp:'Love and thanks go together.',
        ref:'1 Thessalonians 5:18',
        mom:'When we thank people and tell them we care, we show aroha.',
        q:'Who is someone you can thank for something today?',
        recall:[['How do you say: God loves me.','E aroha ana te Atua ki a au.'],['How do you say: Thank you for the food.','Kia ora mō te kai.'],['How do you say: Hana is my friend.','Ko Hana tōku hoa.'],['How do you say: Please sit down.','Tēnā koa, noho mai.']],
        rtag:'Weeks 1 to 9',
        rtxt:'Remember when… Weeks 1 to 9 (4 quick prompts)',
        refl:'Who did you thank today, and for what?',
        next:'Week 10: Whakaaturanga (our showcase)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: whakapono (faith, believe) and au (me, after ki a). Say them slowly. Whakapono is an invitation, not a test.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: ki tōku whānau (no a before tōku). Prompt 3: au, not ahau.',
        xresc:'Common error: ki a before tōku whānau. Say: ki a is only for names and person words like au and koe.',
        xpron:'whakapono = FAH-kah-POH-noh · au = OW',
        cur:curriculumRows('Communication (saying who we love, expressing thanks, asking what for) · Language Knowledge (E aroha ana ahau ki …, Kia ora mō …, Mō te aha?, ki a + name) · Cultural Knowledge (gratitude and care for whānau, manaakitanga)','Recycles Weeks 1 to 9. Whakapapa and whānau: share only what students are comfortable with.'),
        vr:valueRows('1 Thessalonians 5:18','Love and thanks go together. When we thank people and tell them we care, we show aroha.','Who is someone you can thank for something today?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add whakapono (faith, believe) and au (me, after ki a) as the two stretch words, written or spoken.','Mini whiteboards and pens for the exit ticket (optional).','Rehearse ki a (before names and au, koe) and ki (before tōku whānau) below.','Be sensitive: families look different and not all students share our faith. Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.'],
        three:'(1) <i>E aroha ana ahau ki</i> + who: <i>ki tōku whānau</i> for a thing or family word, <i>ki a Hana</i> for a name, <i>ki a koe</i> for a person word. (2) <i>Kia ora mō ōku hoa</i> thanks for more than one friend (ōku from Week 7). (3) <i>Mō te aha?</i> asks what for.',
        diff:['Echo as a whole class. Say E aroha ana ahau ki tōku whānau in pieces. Use a sentence strip (Kia ora mō ___). Pair with a confident partner.','Complete all steps. Say who you love and thank someone, then ask and answer Mō te aha?','Add ki a + a friend’s name. Add whakapono. Explain the difference between ki and ki a.'],
        look:'Clear vowels (aroha, mō, ōku, whakapono); ki before tōku whānau and ki a before names; au after ki a; students thanking and asking mō te aha unprompted.',
        nx:'revisit E aroha ana ahau ki … with students in Starting; move to Week 10 (Whakaaturanga).',
        rec:'Lesson A (E aroha ana te Atua ki a au, Kia ora mō te kai, Kei te whakawhetai ahau), Week 8 (Tēnā koa, noho mai), Week 4 (tōku whānau, tōku māmā), Week 2 (Kei te hiakai) and Week 1 (Ko ___ tōku hoa) are recalled in the warm-up, steps 1, 11 and the drama. Week 10 will recall all of Weeks 1 to 9.'
      },
      D: {
        VOC:[...A.D.VOC,'whakapono','au'],
        STEPS:[
          ['Quick recap: God loves me. Thank you for the food.','E~aroha~ana|k te~Atua|n ki~a~au.|a Kia~ora|w mō~te~kai.|n','eh ah-ROH-hah AH-nah teh AH-too-ah kee ah OW. KEE-ah OR-ah mor teh KYE','Lesson A, stacked.',null,'Whole class'],
          ['How would you say: I love my whānau.','E~aroha~ana|k ahau|a* ki~tōku~whānau.|n','eh ah-ROH-hah AH-nah ah-HOW kee TOH-koo FAH-now','Swap te Atua for ahau (I). ki goes straight before tōku whānau.','Last lesson God was the one who loves. Now it is you. Swap te Atua for ahau. Take a moment… (wait 3 seconds)… E aroha ana ahau ki tōku whānau. Say it with me, hand on heart.','Echo'],
          ['How would you say: I love my friend Hana.','E~aroha~ana|k ahau|a ki~a~Hana.|p*','eh ah-ROH-hah AH-nah ah-HOW kee ah HAH-nah','Before a name we say ki a.',null,'Echo'],
          ['How would you say: My mum loves me.','E~aroha~ana|k tōku~māmā|n* ki~a~au.|a','eh ah-ROH-hah AH-nah TOH-koo MAH-mah kee ah OW','Same frame, new person who loves.',null,'Whole class'],
          ['Tell your partner who you love (your whānau or a friend). Swap.','E~aroha~ana|k ahau|a ki~___.|n','eh ah-ROH-hah AH-nah ah-HOW kee ___','Say it kindly. Any caregiver or friend counts.','Turn to your partner. Say who you love, as kindly as you can, then swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: Thank you for my friends.','Kia~ora|w mō|q ōku~hoa.|n*','KEE-ah OR-ah mor OH-koo HOR-ah','ōku = my, for more than one thing (Week 7).',null,'Echo'],
          ['How would you say: Thank you for my teacher.','Kia~ora|w mō|q tōku~kaiako.|n','KEE-ah OR-ah mor TOH-koo KYE-ah-kor','One teacher: tōku.',null,'Whole class'],
          ['How would you say: What for?','Mō|q* te~aha?|q','mor teh AH-hah','Mō = for. aha = what.',null,'Echo'],
          ['Reply: Thank you. What for? For the food.','Kia~ora.|w Mō|q te~aha?|q Mō|q te~kai.|n','KEE-ah OR-ah. mor teh AH-hah. mor teh KYE','Question and answer share mō.','One person says thank you, the other asks what for, and the first answers. Then swap. Take 60 seconds while I listen.','Pairs'],
          ['How would you say: I am thankful to God for my whānau.','Kei~te|k whakawhetai|q ahau|a ki~te~Atua|n mō~tōku~whānau.|n','kay teh FAH-kah-FEH-tye ah-HOW kee teh AH-too-ah mor TOH-koo FAH-now','Weeks 2, 9 and 4 together.',null,'Whole class'],
          ['How would you say: I believe in God. (An invitation, not a test.)','Kei~te|k whakapono|q* ahau|a ki~te~Atua.|n','kay teh FAH-kah-POH-noh ah-HOW kee teh AH-too-ah','Same frame as whakawhetai. whakapono = faith, believe.','Some of us believe in God and some are still learning, and that is okay. This is how a person who believes says it. Take a moment… (wait 3 seconds)… Kei te whakapono ahau ki te Atua. Listen first, and say it only if it is true for you.','Echo'],
          ['Class chain: say who you love, thank someone, and say goodbye.','E~aroha~ana|k ahau|a ki~___.|n Kia~ora|w mō~___.|n Ka~kite!|w','eh ah-ROH-hah AH-nah ah-HOW kee ___. KEE-ah OR-ah mor ___. kah KEE-teh','Real kōrero, nothing memorised.','Pass it around the room, each person turning to the next. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Hui Whānau — Whānau Gathering',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, whānau! Haere mai!','Hello, whānau! Welcome!','(opens her arms)','T1W1'],
          ['Hana','Tēnā koe, Kuia. Kei te pēhea koe?','Greetings, Kuia. How are you?','','T1W2'],
          ['Kuia Mere','Kei te pai ahau. E aroha ana ahau ki a koe, Hana.','I am well. I love you, Hana.','(hugs Hana)'],
          ['Hana','E aroha ana ahau ki a koe, Kuia.','I love you, Kuia.','(hugs back)'],
          ['Tama','E aroha ana ahau ki tōku whānau.','I love my whānau.','(looks around the room)'],
          ['Kuia Mere','E aroha ana te Atua ki a tātou.','God loves all of us.','(points up, then to everyone)','T1W9'],
          ['Hana','Kia ora mō te kai, Kuia.','Thank you for the food, Kuia.','','T1W9'],
          ['Tama','Kia ora mō ōku hoa. Ko Hana tōku hoa.','Thank you for my friends. Hana is my friend.','(smiles at Hana)','T1W1'],
          ['Kuia Mere','Mō te aha, Tama?','What for, Tama?','(winks)'],
          ['Tama','Mō te kai! Kei te hiakai ahau!','For the food! I am hungry!','(rubs tummy)','T1W2'],
          ['Kuia Mere','Kei te whakawhetai ahau ki te Atua mō tōku whānau.','I am thankful to God for my whānau.','(to the audience, in English) Love and thanks go together.'],
          ['Hana','Ka kite, Kuia!','See you, Kuia!','(Tama waves too)','T1W1']]},
        EX:[['Say in te reo: ‘I love my whānau.’','E aroha ana ahau ki tōku whānau.'],['What does ‘Kia ora mō ōku hoa’ mean?','Thank you for my friends.'],['Choose to say ‘God loves me’: E aroha ana te Atua ki a ____. (au / ahau)','au'],['Say in te reo: ‘Thank you for my mum.’','Kia ora mō tōku māmā.'],['Stretch: say who you love and what you are thankful to God for.','E aroha ana ahau ki ___. Kei te whakawhetai ahau ki te Atua mō ___.']],
        CE:['Leaving out ki before the person','Forgetting ōku means my (more than one)','Choosing ahau instead of au after ki a','Using ki instead of mō for ‘for’','Missing the second sentence'],
        T:'T1 W9 Lesson B',
        LP:{title:'E aroha ana ahau ki tōku whānau — I love my whānau',val:'Aroha · 1 Thessalonians 5:18',pat:['E aroha ana ahau ki ________.','Kia ora mō ________.','Mō te aha? — Mō te ________.'],swap:'Who: tōku whānau · ki a Hana · ki a koe. Thanks: ōku hoa · tōku kaiako · te kai'}
      }
    };

    addLessons({ '1.9.A': A, '1.9.B': B });
  }

  /* ──────── WEEK 10 · Whakaaturanga ──────── */
  {
    addGlossary({
      "tēnā koutou":["greetings to you (three or more people)","TEH-nah KOH-toh",10],
      "koutou":["you (three or more people)","KOH-toh",10],
      "ka pai":["good / well done","kah PIE",10],
      "ka rawe":["awesome / excellent","kah RAH-weh",10],
      "kia kaha":["be strong","KEE-ah KAH-hah",10],
      "whakaaturanga":["showcase / presentation","FAH-kah-AH-too-RAH-ngah",10]
    });

    // ── Lesson A · Tēnā koutou — Our kōrero (Weeks 1 to 9 together) ──
    const A = {
      P: {
        w:10,
        l:'A',
        ch:'Tēnā~koutou!|w Ko|k ___|p ahau.|a',
        sub:'Our showcase! Today we stack everything from Weeks 1 to 9 into one big conversation.',
        say:'Kia ora everyone! This is a big week: our showcase. You already own every piece. Today we stack them into one conversation, and next lesson we share it. Still no writing: listen, think and speak. There is no new grammar to fear, only new ways to join the pieces you know.',
        pron:'Tēnā koutou = TEH-nah KOH-toh',
        li:'join sentences from Weeks 1 to 9 into one short conversation and greet a group in te reo.',
        succ:['I can greet a group and say my name: Tēnā koutou. Ko ___ ahau.','I can add where I am from, my age and how I feel.','I can tell a partner a short kōrero of six or more sentences.'],
        wp:'God tells us to be strong and brave.',
        ref:'Joshua 1:9',
        mom:'When we encourage each other to be brave, we show aroha.',
        q:'When did someone cheer you on and help you feel brave?',
        recall:[['How do you say: How are you?','Kei te pēhea koe?'],['How do you say: I am from here.','Nō konei ahau.'],['How do you say: I am eleven.','Tekau mā tahi ōku tau.'],['How do you say: God loves me.','E aroha ana te Atua ki a au.']],
        rtag:'Weeks 1 to 9',
        rtxt:'Remember when… Weeks 1 to 9 (4 quick prompts)',
        refl:'Who did you encourage today?',
        next:'Lesson B: our showcase day',
        vsay:'Say each word and the class echoes. Most words are old friends from Weeks 1 to 9. The new words are tēnā koutou (greetings to three or more people) and ka pai (good, well done). Gestures: sweep an arm across the room for koutou, thumbs up for ka pai.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: koutou, not koe, for a group. Prompt 3: ōku (years are more than one thing).',
        xresc:'Common error: tēnā koe to a group. Say: koe is one person, koutou is three or more.',
        xpron:'koutou = KOH-toh · ka pai = kah PIE',
        cur:curriculumRows('Communication (introducing ourselves and holding a short conversation with a partner or group) · Language Knowledge (joining Ko … ahau, Nō … ahau, … ōku tau, Kei te … ahau and Tēnā koutou in one conversation) · Cultural Knowledge (mihi to a group, encouragement, manaakitanga)','Recycles all of Weeks 1 to 9. Prepare for a low-stakes showcase for another class, whānau or the school.'),
        vr:valueRows('Joshua 1:9','God tells us to be strong and brave. When we encourage each other to be brave, we show aroha.','When did someone cheer you on and help you feel brave?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. It doubles as a sentence menu for their kōrero.','Print the Term 1 pack (📊 button): the Showcase rubric lets you listen and tick as students share.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles. Shy students may read in a pair.','Decide who the audience will be for Lesson B (another class, whānau or the school) and tell students kindly.'],
        three:'(1) Nothing here is new grammar: every sentence is one you already own. (2) <i>Tēnā koe</i> greets one person, <i>tēnā koutou</i> greets three or more. (3) Build the kōrero in order: greeting, name, where from, age, how you feel, whānau, what you want, thanks, goodbye.',
        diff:['Echo as a whole class. Use the vocab card as a sentence menu. Choose only four sentences for the kōrero. Pair with a confident partner and allow whispering first.','Complete all steps. Share a kōrero of six or more sentences with a partner, in order.','Add questions for the partner (Kei te pēhea koe? Nō hea koe?). Add E aroha ana te Atua ki a koe. Encourage others with Ka pai!'],
        look:'Clear vowels; each sentence in the right pattern (Ko … ahau, Nō … ahau, … ōku tau, Kei te … ahau); tēnā koutou for a group; students choosing and joining pieces with confidence; warm encouragement of partners.',
        nx:'revisit the pattern with the most errors for students in Starting; ask every student to choose their kōrero for Lesson B.',
        rec:'All of Weeks 1 to 9 are recalled: the warm-up (Weeks 2, 3, 7, 9), the steps (Weeks 1 to 9) and the drama (Weeks 1, 2, 3, 5, 6, 7, 8). Lesson B is the showcase.'
      },
      D: {
        VOC:['tēnā koutou','ko','ahau','kei te','nō','ōku','tōku','mō','ka pai','ka kite'],
        STEPS:[
          ['Quick recap: Hello, I am Sam. Where are you from? I am from here.','Kia~ora.|w Ko|k Sam|p ahau.|a Nō|k hea|q koe?|a Nō|k konei|p ahau.|a','KEE-ah OR-ah. kor Sam ah-HOW. nor HEH-ah KOH-eh. nor KOR-neh-ee ah-HOW','Weeks 1 and 3, stacked.',null,'Whole class'],
          ['How would you say: Greetings to all of you (three or more people)?','Tēnā~koutou.|w*','TEH-nah KOH-toh','koutou = you, three or more. Tēnā koe is for one person.','You know tēnā koe for one person, like a teacher. To greet three or more people, change the last word to koutou. Take a moment… (wait 3 seconds)… Tēnā koutou. Say it with me and sweep your arm across the room.','Echo'],
          ['Greet the group and say who you are.','Tēnā~koutou.|w Ko|k Sam|p ahau.|a','TEH-nah KOH-toh. kor Sam ah-HOW','Greeting first, then the pattern you already own.',null,'Whole class'],
          ['Now add where you are from. Use your own name and place.','Tēnā~koutou.|w Ko|k ___|p ahau.|a Nō|k* ___|p* ahau.|a*','TEH-nah KOH-toh. kor ___ ah-HOW. nor ___ ah-HOW','Week 1 and Week 3 pieces, joined.',null,'Whole class'],
          ['Now add how old you are. (Make up an age if you like.)','…|x Tekau|n* mā|n* tahi|n* ōku|a* tau.|n*','… TEH-kow MAH TAH-hee OH-koo TOW','Week 7: the number first, then ōku tau.',null,'Whole class'],
          ['Now add how you feel.','…|x Kei~te|k harikoa|n* ahau.|a','… kay teh HAH-ree-KOR-ah ah-HOW','Week 2: Kei te + feeling + ahau.',null,'Whole class'],
          ['Tell your partner four things: your name, where you are from, your age and how you feel. Then swap.','Ko|k ___|p ahau.|a Nō|k ___|p ahau.|a ___|n ōku|a tau.|n Kei~te|k ___|n ahau.|a','kor ___ ah-HOW · nor ___ ah-HOW · ___ OH-koo TOW · kay teh ___ ah-HOW','Four pieces, in order, with nothing written down.','Turn to your partner. Say your four sentences in order, then swap. If you forget a piece, look at the vocab card or ask your partner to help. I’ll listen. Take 90 seconds.','Pairs'],
          ['Add your whānau and a friend: Mere is my mum. Hana is my friend.','Ko|k Mere|p tōku|a māmā.|n Ko|k Hana|p tōku|a hoa.|n','kor MEH-reh TOH-koo MAH-mah · kor HAH-nah TOH-koo HOR-ah','Weeks 1 and 4: tōku + who they are.',null,'Whole class'],
          ['Add what you want to do: I want to play.','Kei~te|k pīrangi|q ahau|a ki~te|k tākaro.|n','kay teh PEE-rah-ngee ah-HOW kee teh TAH-kah-roh','Week 6: pīrangi + ki te + the action.',null,'Whole class'],
          ['Ask your partner two questions: How are you? What are you doing?','Kei~te|k pēhea|q koe?|a Kei~te|k aha|q koe?|a','kay teh PEH-heh-ah KOH-eh · kay teh AH-hah KOH-eh','Weeks 2 and 5: the same frame, new question word.',null,'Whole class'],
          ['Say thank you for your friends, and tell them God loves them.','Kia~ora|w mō|q ōku~hoa.|n E~aroha~ana|k te~Atua|n ki~a~koe.|a','KEE-ah OR-ah mor OH-koo HOR-ah. eh ah-ROH-hah AH-nah teh AH-too-ah kee ah KOH-eh','Week 9: mō + thing, and ki a koe.',null,'Whole class'],
          ['Class chain: greet the next person, say two or three sentences about yourself, then finish with Ka pai! and goodbye.','Kia~ora.|w Ko|k ___|p ahau.|a Nō|k ___|p ahau.|a Ka~pai!|w* Ka~kite!|w','KEE-ah OR-ah. kor ___ ah-HOW. nor ___ ah-HOW. kah PIE. kah KEE-teh','Ka pai = good, well done. Real kōrero, nothing memorised.','Pass it around the room. Each person turns to the next, says two or three sentences about themselves, and the next person answers Ka pai! If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Whakaaturanga — Getting Ready',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Tēnā koutou, tamariki! Kei te harikoa ahau.','Greetings, children! I am happy.','(arms wide)','T1W2'],
          ['Hana','Tēnā koe, Kaiako. Ko Hana ahau. Nō konei ahau.','Greetings, teacher. I am Hana. I am from here.','(stands tall)','T1W3'],
          ['Tama','Kia ora. Ko Tama ahau. Tekau mā tahi ōku tau.','Hello. I am Tama. I am eleven.','(holds up fingers)','T1W7'],
          ['Kaiako Rose','Kei te pēhea koe, Hana?','How are you, Hana?','','T1W2'],
          ['Hana','Kei te whakamā ahau.','I am shy.','(looks at her feet)','T1W8'],
          ['Tama','Kia kaha, Hana! Ko Hana tōku hoa.','Be strong, Hana! Hana is my friend.','(gives a thumbs up)','T1W1'],
          ['Kaiako Rose','Ka pai! Kōrero mai, Hana.','Good! Speak to me, Hana.','(smiles kindly)','T1W8'],
          ['Hana','Kia ora. Ko Mere tōku māmā. Kei te pīrangi ahau ki te tākaro.','Hello. Mere is my mum. I want to play.','(grows braver)','T1W6'],
          ['Tama','Kei te pīrangi koe ki te tākaro, Kaiako?','Do you want to play, teacher?','(cheeky grin)','T1W6'],
          ['Kaiako Rose','Kāo. Kei te mahi ahau. Kei te harikoa ahau!','No. I am working. I am happy!','(laughs)','T1W5'],
          ['Kaiako Rose','Kia kaha, tamariki! Kia ora mō ōku ākonga.','Be strong, children! Thank you for my students.','(to the audience, in English) Courage grows when friends cheer each other on. Be strong and brave, for God is with us.','T1W9'],
          ['Tama','Ka kite, Kaiako!','See you, teacher!','(Hana waves too)','T1W1']]},
        EX:[['Say in te reo: ‘Greetings to you all.’','Tēnā koutou.'],['Say in te reo: ‘Hello. I am Mia. I am from here.’','Kia ora. Ko Mia ahau. Nō konei ahau.'],['Choose to say ‘I am eleven’: Tekau mā tahi ____ tau. (ōku / tōku)','ōku'],['Say in te reo: ‘Hana is my friend. I want to play.’','Ko Hana tōku hoa. Kei te pīrangi ahau ki te tākaro.'],['Stretch: say four sentences about yourself: your name, where you are from, your age and how you feel.','Kia ora. Ko ___ ahau. Nō ___ ahau. ___ ōku tau. Kei te ___ ahau.']],
        CE:['Using koe (one person) for a group','Using Ko instead of Nō for where you are from','Choosing tōku instead of ōku for years','Leaving out ki te after pīrangi ahau','Missing one of the four pieces'],
        T:'T1 W10 Lesson A',
        LP:{title:'Tēnā koutou — Our kōrero (Weeks 1 to 9 together)',val:'Aroha · Joshua 1:9',pat:['Tēnā koutou. Ko ________ ahau. Nō ________ ahau.','________ ōku tau. Kei te ________ ahau.','Kia ora mō ________. Ka kite!'],swap:'Choose sentences from Weeks 1 to 9 and join them in order: greeting · name · from · age · feeling · whānau · what you want · thanks · goodbye.'}
      }
    };

    // ── Lesson B · Ka pai! Ka rawe! — Our showcase ──
    const B = {
      P: {
        w:10,
        l:'B',
        ch:'Ka~pai!|w Ka~rawe!|w Kia~kaha!|w',
        sub:'Showcase day! Today we share what we can say, cheer each other on and give thanks.',
        say:'Kia ora everyone! Today is our showcase. You have been learning for ten weeks and nobody has written a thing. Today you share what you can say. Remember: if you stumble, that’s my fault, not yours. We cheer for every voice. Ka pai!',
        pron:'Ka pai = kah PIE · Ka rawe = kah RAH-weh · Kia kaha = KEE-ah KAH-hah',
        li:'share a short conversation in te reo, encourage others, and give thanks to God for what we have learned.',
        succ:['I can say four sentences about me: Ko ___ ahau. Nō ___ ahau. ___ ōku tau. Kei te ___ ahau.','I can ask my partner questions and answer them.','I can share my kōrero with an audience and say Ka pai! to others.'],
        wp:'Whatever we do, we do it for God’s glory.',
        ref:'1 Corinthians 10:31',
        mom:'When we do our best and cheer others on, we show aroha and give glory to God.',
        q:'What are you most proud of learning in te reo this term?',
        recall:[['How do you say: I want to play.','Kei te pīrangi ahau ki te tākaro.'],['How do you say: Please sit down.','Tēnā koa, noho mai.'],['How do you say: Who is your mum?','Ko wai tō māmā?'],['How do you say: What are you doing?','Kei te aha koe?'],['How do you say: Thank you for the food.','Kia ora mō te kai.']],
        rtag:'Weeks 1 to 9',
        rtxt:'Remember when… Weeks 1 to 9 (5 quick prompts)',
        refl:'What are you proud of this term, and who helped you?',
        next:'Term 2: Mōhio, Tōku kura, tōku ao (He pene tēnei: this is a pen)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: kia kaha (be strong) and ka rawe (awesome). Say them with big encouraging voices and a fist pump.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 3: nō, not ko. Prompt 4: three sentences, each in the right pattern.',
        xresc:'Common error: Ko for where you are from. Say: ko is who you are, nō is where you are from.',
        xpron:'kia kaha = KEE-ah KAH-hah · ka rawe = kah RAH-weh',
        cur:curriculumRows('Communication (sharing a kōrero with an audience, asking and answering questions, giving encouragement) · Language Knowledge (consolidating Weeks 1 to 9 patterns; Ka pai, Ka rawe, Kia kaha; ki a koutou) · Cultural Knowledge (performance as a form of mihi and sharing, manaakitanga to guests, celebrating learning)','Recycles all of Weeks 1 to 9. Invite the audience to respond with Ka pai! Use the Showcase rubric (Term 1 pack) as assessment evidence for the term.'),
        vr:valueRows('1 Corinthians 10:31','Whatever we do, we do it for God’s glory. When we do our best and cheer others on, we show aroha.','What are you most proud of learning in te reo this term?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria, the school motto.'),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add kia kaha (be strong) and ka rawe (awesome) as the two stretch words.','Print the Showcase rubric (Term 1 pack, 📊 button) and have a pen ready to tick as students share.','Arrange the audience (another class, whānau or the school) and a simple stage area. Choose three drama readers (Hana, Tama, Kuia Mere).','Plan a kind finish: every performer gets Ka pai! from the whole class.'],
        three:'(1) Every sentence is one students already own; the showcase is about joining them with confidence. (2) <i>Ka pai</i>, <i>ka rawe</i> and <i>kia kaha</i> are cheering words: use them for every performer. (3) <i>E aroha ana te Atua ki a koutou</i> says God loves you (three or more); last week it was <i>ki a koe</i> (one person).',
        diff:['Echo as a whole class. Perform in a pair or trio. Use the vocab card as a sentence menu and choose four sentences. Allow whispering first.','Share a kōrero of six or more sentences in order with a partner, then for the class.','Add questions for the audience (Kei te pēhea koutou?) and thank-yous. Swap in their own whānau and friends. Lead the cheering with Ka pai!'],
        look:'Clear vowels and macrons; each sentence in the right pattern; students joining at least four pieces in order; encouragement of others (Ka pai! Kia kaha!); brave attempts, even with help from a partner.',
        nx:'record each student’s showcase level on the rubric; plan to recycle Term 1 patterns in the Term 2 “Remember when…” warm-ups.',
        rec:'All of Weeks 1 to 9 are recalled: the warm-up (Weeks 3, 8, 4, 5, 9), the steps (Weeks 1 to 9) and the drama (Weeks 1 to 9). Term 2 continues to recycle Term 1 patterns.'
      },
      D: {
        VOC:[...A.D.VOC,'kia kaha','ka rawe'],
        STEPS:[
          ['Quick recap: Greetings everyone. I am Sam. I am from here. I am ten.','Tēnā~koutou.|w Ko|k Sam|p ahau.|a Nō|k konei|p ahau.|a Tekau|n ōku|a tau.|n','TEH-nah KOH-toh. kor Sam ah-HOW. nor KOR-neh-ee ah-HOW. TEH-kow OH-koo TOW','Lesson A, stacked.',null,'Whole class'],
          ['How would you say: Good! Well done!','Ka~pai!|w*','kah PIE','Ka pai says good, well done. We say it to cheer people on.','This is the most useful little phrase in the showcase. When someone shares their kōrero, we all say Ka pai! Take a moment… (wait 3 seconds)… Ka pai! Say it with me, with a thumbs up.','Echo'],
          ['How would you say: Awesome!','Ka~rawe!|w*','kah RAH-weh','Ka rawe = awesome. The r is quick and light.',null,'Echo'],
          ['How would you say: Be strong! (Cheer on a nervous friend.)','Kia~kaha!|w*','KEE-ah KAH-hah','Kia kaha = be strong. We say it to someone who is nervous.',null,'Echo'],
          ['Ask a friend three questions: Who are you? How are you? Where are you from?','Ko|k wai|q koe?|a Kei~te|k pēhea|q koe?|a Nō|k hea|q koe?|a','kor WHY KOH-eh · kay teh PEH-heh-ah KOH-eh · nor HEH-ah KOH-eh','Weeks 1, 2 and 3, stacked.',null,'Whole class'],
          ['Ask: How old are you? How is your mum? Are you hungry?','E~hia|q ō|a tau?|n Kei~te|k pēhea|q tō|a māmā?|n Kei~te|k hiakai|n koe?|a','eh HEE-ah OH TOW · kay teh PEH-heh-ah TOH MAH-mah · kay teh HEE-ah-kye KOH-eh','Weeks 7, 4 and 2: your questions are getting longer.',null,'Whole class'],
          ['Interview your partner with any four questions from the vocab card, then swap. Finish with Ka pai!','Ko|k wai|q koe?|a Nō|k hea|q koe?|a E~hia|q ō|a tau?|n Ka~pai!|w','kor WHY KOH-eh · nor HEH-ah KOH-eh · eh HEE-ah OH TOW · kah PIE','Real questions, real answers, nothing written.','Turn to your partner. Ask any four questions from the card, listen to the answers, then swap. When you finish, say Ka pai! I’ll walk around and listen. Take 2 minutes.','Pairs'],
          ['Answer: I am reading. I want to play. I am happy.','Kei~te|k pānui|n ahau.|a Kei~te|k pīrangi|q ahau|a ki~te|k tākaro.|n Kei~te|k harikoa|n ahau.|a','kay teh PAH-noo-ee ah-HOW · kay teh PEE-rah-ngee ah-HOW kee teh TAH-kah-roh · kay teh HAH-ree-KOR-ah ah-HOW','Weeks 5, 6 and 2, joined.',null,'Whole class'],
          ['How would you say: God loves all of you? (Say it to the audience.)','E~aroha~ana|k te~Atua|n ki~a~koutou.|a*','eh ah-ROH-hah AH-nah teh AH-too-ah kee ah KOH-toh','ki a + koutou: you, three or more. Last week it was ki a koe (one person).','You know ki a koe for one person. For three or more people, change koe to koutou. Take a moment… (wait 3 seconds)… E aroha ana te Atua ki a koutou. Say it with me, arms open to the audience.','Echo'],
          ['Say thank you to your whānau and to God.','Kia~ora|w mō|q tōku~whānau.|n Kei~te|k whakawhetai|q ahau|a ki~te~Atua.|n','KEE-ah OR-ah mor TOH-koo FAH-now · kay teh FAH-kah-FEH-tye ah-HOW kee teh AH-too-ah','Week 9: mō + thing, and whakawhetai.',null,'Whole class'],
          ['Rehearse your showcase kōrero with a partner: at least six sentences, then finish with goodbye.','Tēnā~koutou.|w Ko|k ___|p ahau.|a Nō|k ___|p ahau.|a …|x Kia~ora|w mō|q ___.|n Ka~kite!|w','TEH-nah KOH-toh. kor ___ ah-HOW. nor ___ ah-HOW. … KEE-ah OR-ah mor ___. kah KEE-teh','Choose from the vocab card in this order: greeting, name, from, age, feeling, whānau, thanks, goodbye.','Turn to your partner. Say your whole kōrero once. Your partner listens, says Ka pai!, and tells you one star. Then swap. If you forget a piece, glance at the vocab card. Take 2 minutes.','Pairs'],
          ['Showcase: share your kōrero. Everyone else says Ka pai!','Ka~pai!|w Ka~rawe!|w Kia~kaha!|w','kah PIE · kah RAH-weh · KEE-ah KAH-hah','Celebrate every voice.','Invite pairs or trios to share, one after another. After each, the whole class says Ka pai! Remind them: if someone stumbles, that’s my fault, not theirs. Finish with a class Ka rawe!','Individual']],
        DR:{title:'Te Whakaaturanga — The Showcase',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Tēnā koutou, tamariki! Haere mai!','Greetings, children! Welcome!','(arms open wide)','T1W1'],
          ['Hana','Tēnā koe, Kuia. Ko Hana ahau. Nō konei ahau.','Greetings, Kuia. I am Hana. I am from here.','(stands tall)','T1W3'],
          ['Tama','Kia ora, Kuia. Ko Tama ahau. Tekau mā tahi ōku tau.','Hello, Kuia. I am Tama. I am eleven.','(holds up fingers)','T1W7'],
          ['Kuia Mere','Ka pai! Kei te pēhea koe, Hana?','Good! How are you, Hana?','','T1W2'],
          ['Hana','Kei te harikoa ahau. Ko Mere tōku māmā.','I am happy. Mere is my mum.','(points to the audience)','T1W4'],
          ['Tama','Kei te pīrangi ahau ki te tākaro pōro. Kei te pīrangi koe, Hana?','I want to play ball. Do you want to, Hana?','(bounces a pretend ball)','T1W6'],
          ['Hana','Āe! Kei te pīrangi ahau ki te tākaro.','Yes! I want to play.','(jumps up)','T1W6'],
          ['Kuia Mere','Tēnā koa, whakarongo mai. Kaua e oma!','Please listen. Don’t run!','(holds up a hand)','T1W8'],
          ['Tama','Kei te whakamā ahau, Kuia.','I am shy, Kuia.','(looks at his feet)','T1W8'],
          ['Kuia Mere','Kia kaha, Tama! Ka rawe!','Be strong, Tama! Awesome!','(gives him a hug)'],
          ['Hana','Kia ora mō ōku hoa. Kia ora mō tōku whānau.','Thank you for my friends. Thank you for my whānau.','(hand on heart)','T1W9'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) You have worked hard this term. Everything we do is a gift, so let us say together: Soli Deo Gloria, to God alone the glory.','T1W9'],
          ['Tama','Ka kite, Kuia! Ka kite, whānau!','See you, Kuia! See you, everyone!','(Hana waves too)','T1W1']]},
        EX:[['Say in te reo: ‘Be strong! Well done!’','Kia kaha! Ka pai!'],['What does ‘E aroha ana te Atua ki a koutou’ mean?','God loves all of you.'],['Choose to ask where a friend is from: ____ hea koe? (Nō / Ko)','Nō'],['Say in te reo: ‘I am Ari. I am ten. I want to eat.’','Ko Ari ahau. Tekau ōku tau. Kei te pīrangi ahau ki te kai.'],['Stretch: say a kōrero about yourself with six sentences: your name, where you are from, your age, how you feel, your whānau and a thank you.','Kia ora. Ko ___ ahau. Nō ___ ahau. ___ ōku tau. Kei te ___ ahau. Kia ora mō tōku whānau.']],
        CE:['Using koe (one person) instead of koutou','Mixing up ki a koe and ki a koutou','Choosing Ko instead of Nō for where you are from','Leaving out ki te, or mixing the patterns','Stopping at four sentences or missing the thank you'],
        T:'T1 W10 Lesson B',
        LP:{title:'Ka pai! Ka rawe! — Our showcase',val:'Aroha · 1 Corinthians 10:31',pat:['Ka pai! · Ka rawe! · Kia kaha!','E aroha ana te Atua ki a koutou.','Kia ora mō ________.'],swap:'Cheer others with Ka pai! Ka rawe! Kia kaha! Share your kōrero in order, then say thank you.'}
      }
    };

    addLessons({ '1.10.A': A, '1.10.B': B });
  }

})();
