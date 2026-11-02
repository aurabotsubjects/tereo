/* ═════════════════════════════════════════════════════════════════════════════
   data/term4.js  ·  TERM 4 · PĀNGA  ·  “Ko wai tātou?”  (Place, people and impact)
   Weeks 1–10 written (all 20 lessons).  Term value: Pānga (impact, bringing God’s Kingdom to earth).
   Term 4 is complete. Next: the Phase 6 polish items listed in the build spec (Part A).
   -----------------------------------------------------------------------------
   Needs data/shared.js loaded first.  Same lesson format as data/term3.js (see its header).
   The Week 10 rubric is inside defineTerm(4,…).
═════════════════════════════════════════════════════════════════════════════ */
(() => {

  const MV4 = "Pānga: impact, bringing God’s Kingdom to earth";   // term value line used in each lesson's “Christian values link”
  const cu4 = (strands, other) => curriculumRows(strands, other, 'Tangata Whenuatanga · Whanaungatanga');   // Term 4's Tātaiako pair

  /* ┌──────────────────────────────────────────────────────────────────────────┐
     │  ⚠ LOCAL PLACE NAMES — TO BE CONFIRMED BY THE SCHOOL / LOCAL RŪNANGA.     │
     │  These are deliberately NOT filled in. Do not guess them. When the school │
     │  has confirmed the local maunga, awa and iwi (with the te reo lead or the │
     │  rūnanga), change the three values below and nothing else: the drama and  │
     │  exit tickets in Weeks 1 and 2 read from here.                            │
     └──────────────────────────────────────────────────────────────────────────┘ */
  const LOCAL = { maunga:'[maunga]', awa:'[awa]', iwi:'[iwi]' };

  defineTerm(4, {
    value: "Pānga",
    theme: "Ko wai tātou?",
    valueLine: "Pānga: impact, bringing God’s Kingdom to earth",
    weeks: ["Pepeha 1","Pepeha 2","My body & health","Creation & kaitiakitanga","Feelings & prayer","Getting around","Likes","Putting it together","Thanksgiving","Hui Whakamutunga"],
    rubric: [
      ['Pepeha and where from','Says Ko ___ ahau with help','Says where I am from and part of a pepeha: Nō ___ ahau. Ko ___ te maunga','Says a short pepeha in order (maunga, awa, where from, me) and asks Nō hea koe?'],
      ['Feelings and likes','Says one feeling or one like with help','Says how I feel and what I like: Kei te hīkaka ahau. He pai ki a au te waiata','Asks and answers: Kei te pēhea koe? He pai ki a koe te …? Āe / Kāo, using ki a au'],
      ['Getting around and caring','Says one vehicle or animal word with help','Says how I will go and how I care: Ka haere ahau ki te kura mā runga pahi. Kei te tiaki ahau i te kurī','Uses ki te then mā correctly, and says He kaitiaki ahau'],
      ['Thanks and prayer','Says Kia ora mō te kai with help','Gives thanks: E whakawhetai ana ahau mō te kai. Ka karakia ahau ki te Atua','Uses ki te Atua and mō correctly: E whakawhetai ana ahau ki te Atua mō tōku whānau; thanks the audience with ki a koutou katoa'],
      ['My dream and praise','Repeats Ko tōku moemoeā with help','Says a dream: Ko tōku moemoeā, ka āwhina ahau i tōku hoa','Asks and answers He aha tō moemoeā? and praises: Kei te whakamoemiti tātou ki te Atua. Soli Deo Gloria'],
      ['Pronunciation','Some vowels unclear','Mostly clear vowels','Clear vowels and macrons throughout'],
      ['Confidence and encouragement','Needs prompts','Speaks with some support','Speaks clearly and cheers others (Ka pai! Ka rawe! Kia kaha!)']
    ]
  });


  /* ──────── WEEK 1 · Pepeha 1 ──────── */
  {
    addGlossary({
      "pepeha":["a way of saying who you are and where you are from","peh-PEH-hah",1,4],
      "wāhi":["place","WAH-hee",1,4],
      "rohe":["area / district","ROH-heh",1,4]
    });

    // ── Lesson A · Ko ___ te maunga — The mountain is ___ ──
    const A = {
      P: {
        t:4,
        w:1,
        l:'A',
        ch:'Ko|k ___|p te|k maunga.|n*',
        sub:'Who are we, and where are we from? Today we start our pepeha with the mountain and the river of our place.',
        say:'Kia ora everyone! Welcome to Term 4. Our value this term is Pānga: the impact we can have, bringing God’s Kingdom to earth. It starts with knowing who we are and where we are from. Today we learn the first pieces of a pepeha, a way of saying who you are and where you are from. We say the mountain, then the river, then ourselves. We use the pattern you already know: Ko … is how we say who or what something is. Today the names go on the board, and I will say them with you. Still no writing: listen, think and speak. Point at the horizon, as if you can see the mountain.',
        pron:'pepeha = peh-PEH-hah · maunga = MOW-ngah · awa = AH-wah · moana = moh-AH-nah · whenua = FEH-noo-ah · ingoa = ee-NGOR-ah',
        li:'say the first pieces of a pepeha: name the mountain and the river of our place and say who we are, using Ko … te maunga and Ko … te awa, in te reo.',
        succ:['I can say the mountain and the river of our place: Ko ___ te maunga. Ko ___ te awa.','I can say what a pepeha is and join my name on the end: Ko ___ ahau.','I can greet the class and say my pepeha in order: mountain, river, then me.'],
        wp:'The boundary lines have fallen for me in pleasant places.',
        ref:'Psalm 16:6',
        mom:'God knows exactly where each of us lives, and he put us here for a reason. Our place is a gift. When we know it and say it with thanks, we can start to see what God wants us to do here. That is the beginning of Pānga.',
        q:'What is one thing you love about the place where you live?',
        recall:[['How do you say: I am Hana.','Ko Hana ahau.'],['How do you say: This is a mountain.','He maunga tēnei.'],['How do you say: Welcome! Come to the hākari!','Nau mai! Haere mai ki te hākari!']],
        rtag:'Terms 1, 2 and 3',
        rtxt:'Remember when… Terms 1, 2 and 3 (3 quick prompts)',
        refl:'What is one thing you can now say about where you are from?',
        next:'Lesson B: Ko ___ tōku maunga (my mountain, my river)',
        vsay:'Say each word and the class echoes, with an action: point to the horizon for maunga, flow your hand like water for awa, wave your hand like the sea for moana, press your hands flat for whenua, point at your chest for ahau. New words are pepeha (peh-PEH-hah) and the pattern Ko … te maunga. The names of our local maunga and awa go on the board once the school has confirmed them.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. The maunga and awa are placeholders until the school confirms them. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Ko first, then the name, then te maunga. Prompt 3: He for a thing (He pepeha tēnei), Ko for a name.',
        xresc:'Common error: putting te before the name, or using Ko for a thing. Say: Ko points at a name, so the name comes right after Ko; He is for a thing.',
        xpron:'pepeha = peh-PEH-hah · maunga = MOW-ngah · awa = AH-wah',
        cur:cu4('Communication (saying the mountain and river of our place and who we are, greeting a group) · Language Knowledge (Ko ___ te maunga; Ko ___ te awa; Ko ___ ahau; He pepeha tēnei) · Cultural Knowledge (a pepeha as a way of saying who we are and where we are from; Aotearoa New Zealand’s Histories: the maunga and awa of our own place)','Recycles Term 1 Weeks 1 and 3, Term 2 Weeks 1 and 9 (maunga, awa, moana, whenua) and Term 3 Week 8. ⚠ The local maunga and awa must be confirmed by the school te reo lead or local rūnanga before this lesson is taught: they are placeholders in the data (see LOCAL at the top of term4.js). Please also have a fluent speaker confirm Ko ___ te maunga and Ko ___ te awa.'),
        vr:valueRows('Psalm 16:6','God knows exactly where each of us lives, and he put us here for a reason. Our place is a gift. When we know it and say it with thanks, we can start to see what God wants us to do here. That is the beginning of Pānga.','What is one thing you love about the place where you live?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['⚠ Before teaching: confirm the local maunga and awa with the school te reo lead or local rūnanga, and write them on the board. Do not guess.','Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. Add the confirmed maunga and awa names by hand.','Find a picture of the local maunga and awa to point at. Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the actions: point at the horizon for maunga, flow your hand for awa.'],
        three:'(1) A pepeha says who we are and where we are from. Today it is place-based: the mountain, then the river, then me. (2) <i>Ko</i> points at a name, so the name goes right after it: <i>Ko ___ te maunga</i> = the mountain is ___. (3) <i>He pepeha tēnei</i> = this is a pepeha (<i>He</i> is for a thing, <i>Ko</i> is for a name).',
        diff:['Echo as a whole class and use the actions for every word. Say only Ko ___ te maunga at first, using the name on the board. Pair with a confident partner and allow whispering first.','Complete all steps. Say the mountain, the river and your name in order with a partner.','Explain in English what a pepeha is, add the sea (Ko ___ te moana) if it applies to our place, and ask a classmate where they are from.'],
        look:'Ko followed straight away by the name; te before maunga and awa; the order (mountain, river, me); clear vowels on maunga (MOW-ngah) and awa; a respectful tone for the names.',
        nx:'revisit Ko ___ te maunga with students in Starting; add tōku maunga and the question He aha te ingoa o tō maunga? in Lesson B.',
        rec:'Term 1 Weeks 1 and 3 (Ko … ahau, Nō hea koe?), Term 2 Weeks 1 and 9 (He … tēnei, maunga, awa, moana) and Term 3 Weeks 8 and 9 (Nau mai, Ka rawe) are recalled in the warm-up, steps and drama. Lesson B adds tōku maunga, wāhi and rohe.'
      },
      D: {
        VOC:['pepeha','maunga','awa','moana','whenua','ingoa','ko','nō','ahau','tēnā koutou'],
        STEPS:[
          ['Quick recap: I am Hana.','Ko|k Hana|p ahau.|a','kor HAH-nah ah-HOW','Term 1 Week 1: Ko + the name + ahau.',null,'Whole class'],
          ['Quick recap: This is a mountain. This is a river.','He|k maunga|n tēnei.|x He|k awa|n tēnei.|x','heh MOW-ngah TEH-neh-ee · heh AH-wah TEH-neh-ee','Term 2 Weeks 1 and 9: He + the thing + tēnei.','Point at a picture of a mountain, then flow your hand for a river. You know these already. Say each one with me.','Gesture'],
          ['New word: a pepeha is a way of saying who you are and where you are from. How would you say: This is a pepeha.','He|k pepeha|n* tēnei.|x','heh peh-PEH-hah TEH-neh-ee','He + the thing + tēnei, with the new word pepeha.','A pepeha tells people who you are and where you are from. Say it in English too: it is how you introduce yourself. Not everyone says their pepeha the same way, and today we start with our place. Take a moment… (wait 3 seconds)… He pepeha tēnei. Say it with me.','Echo'],
          ['The first piece. How would you say: The mountain is ___. (Use the name on the board.)','Ko|k ___|p* te|k maunga.|n','kor ___ teh MOW-ngah','Ko + the name + te maunga. The name comes right after Ko.','Point at the horizon. Ko points at a name, so the name comes straight after it. Look at the board for our maunga. Take a moment… (wait 3 seconds)… Ko, the name, te maunga. Say it with me.','Echo'],
          ['The second piece. How would you say: The river is ___. (Use the name on the board.)','Ko|k ___|p te|k awa.|n*','kor ___ teh AH-wah','Same pattern: Ko + the name + te awa.','Flow your hand like a river. Same pattern, new word: awa. Take a moment… (wait 3 seconds)… Ko, the name, te awa. Say it with me.','Echo'],
          ['Say both pieces together: the mountain, then the river.','Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n','kor ___ teh MOW-ngah · kor ___ teh AH-wah','Mountain first, then river: this is the order of a pepeha.',null,'Whole class'],
          ['If our place has a sea, we can add it: The sea is ___. (Skip this step if it does not apply.)','Ko|k ___|p te|k moana.|n','kor ___ teh moh-AH-nah','Swap the word after te: moana (sea).','Only use this if the sea belongs to your place. If not, we just move on. Say it with me.','Whole class'],
          ['Partner game: say the mountain and the river of our place to your partner. Then swap.','Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n','kor ___ teh MOW-ngah · kor ___ teh AH-wah','Look at the names on the board and say them clearly.','Turn to your partner. Say the mountain and the river of our place, using the names on the board. Your partner listens and says Ka pai! Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Now add who you are: I am ___.','Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n Ko|k ___|p ahau.|a','kor ___ teh MOW-ngah · kor ___ teh AH-wah · kor ___ ah-HOW','Mountain, river, then me. You know Ko … ahau from Term 1.',null,'Whole class'],
          ['Greet the class and give your pepeha.','Tēnā~koutou.|w Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n Ko|k ___|p ahau.|a','TEH-nah KOH-toh. kor ___ teh MOW-ngah. kor ___ teh AH-wah. kor ___ ah-HOW','Greeting first, then the pepeha in order.','Face the class. Greet them, then say your pepeha in order: mountain, river, then your name. Say it with me once, slowly.','Whole class'],
          ['Ask a friend: Who are you? Where are you from?','Ko|k wai|q koe?|a Nō|k hea|q koe?|a','kor WHY KOH-eh · nor HEH-ah KOH-eh','Term 1 Weeks 1 and 3: the questions that sit beside a pepeha.',null,'Whole class'],
          ['Give thanks for our place: Thank you for the land. God loves us all.','Kia~ora|w mō~te|k whenua.|n E~aroha~ana|k te~Atua|n ki~a~tātou.|a','KEE-ah OR-ah mor teh FEH-noo-ah. eh ah-ROH-hah AH-nah teh AH-too-ah kee ah TAH-toh','Term 1 Week 9: Kia ora mō te … and E aroha ana te Atua ki a tātou.','Hand on heart. We thank God for the place he has given us. Say it with me.','Whole class'],
          ['Class chain: greet the next person, say your pepeha, then say goodbye.','Tēnā~koe.|w Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n Ko|k ___|p ahau.|a Ka~kite!|w','TEH-nah KOH-eh. kor ___ teh MOW-ngah. kor ___ teh AH-wah. kor ___ ah-HOW. kah KEE-teh','Real kōrero, nothing memorised: use the board and the vocab card.','Pass it around the circle. Each person greets the next one and says the mountain, the river and their name, then the next person answers Ka pai! If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Tōku Pepeha — My Pepeha',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Tēnā koutou, tamariki! Ko Kaiako Rose ahau.','Greetings, children! I am Kaiako Rose.','(waves to the class)','T1W1'],
          ['Hana','Tēnā koe, Kaiako. Ko Hana ahau.','Greetings, teacher. I am Hana.','(steps forward)','T1W1'],
          ['Kaiako Rose','He pepeha tēnei. Ko '+LOCAL.maunga+' te maunga.','This is a pepeha. The mountain is '+LOCAL.maunga+'.','(points at a picture of the maunga)','T2W1'],
          ['Kaiako Rose','Ko '+LOCAL.awa+' te awa.','The river is '+LOCAL.awa+'.','(flows her hand like a river)'],
          ['Tama','He maunga tērā, Kaiako?','Is that a mountain, teacher?','(points at the picture)','T2W1'],
          ['Kaiako Rose','Āe, he maunga tērā.','Yes, that is a mountain.','(nods)','T2W1'],
          ['Hana','Ko '+LOCAL.maunga+' te maunga. Ko '+LOCAL.awa+' te awa.','The mountain is '+LOCAL.maunga+'. The river is '+LOCAL.awa+'.','(points at each picture)'],
          ['Tama','Ko '+LOCAL.maunga+' te maunga. Ko Tama ahau.','The mountain is '+LOCAL.maunga+'. I am Tama.','(stands tall)','T1W1'],
          ['Kaiako Rose','Ka pai, Tama! Nō hea koe?','Good, Tama! Where are you from?','(smiles)','T1W10'],
          ['Tama','Nō konei ahau.','I am from here.','(points at the floor)','T1W3'],
          ['Hana','Kia ora mō te whenua, Kaiako!','Thank you for the land, teacher!','(hand on heart)','T1W9'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) The place where we live is a gift from God. A pepeha tells people who we are and where we are from, and God knows your place. He put you here for a reason, and that is where your Pānga, your impact, begins.','T1W9'],
          ['Tama','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘The mountain is ___.’','Ko '+LOCAL.maunga+' te maunga.'],['What does pepeha mean?','A way of saying who you are and where you are from.'],['Choose the sentence: ____ tēnei. (This is a pepeha.) (He pepeha / Ko pepeha)','He pepeha'],['Say in te reo: ‘The river is ___. I am Hana.’','Ko '+LOCAL.awa+' te awa. Ko Hana ahau.'],['Stretch: say ‘The mountain is ___. The river is ___. I am ___.’ then ask your partner where they are from.','Ko ___ te maunga. Ko ___ te awa. Ko ___ ahau. Nō hea koe?']],
        CE:['Putting te before the name, or leaving out Ko','Not knowing that a pepeha says who you are and where you are from','Using Ko for a thing (He pepeha tēnei, not Ko pepeha tēnei)','Leaving out Ko, or saying the name before the mountain and the river','Missing one of the pieces, or forgetting the question Nō hea koe?'],
        T:'T4 W1 Lesson A',
        LP:{title:'Ko ___ te maunga — The mountain is ___',val:'Pānga · Psalm 16:6',pat:['Ko ________ te maunga.','Ko ________ te awa.','Ko ________ ahau.'],swap:'Say them in order: mountain · river · me. Words: maunga · awa · moana · whenua. Greet first: Tēnā koe / tēnā koutou. Write the confirmed names of our maunga and awa on your card.'}
      }
    };

    // ── Lesson B · Ko ___ tōku maunga — ___ is my mountain ──
    const B = {
      P: {
        t:4,
        w:1,
        l:'B',
        ch:'Ko|k ___|p tōku|k* maunga.|n',
        sub:'Today the pepeha becomes personal: my mountain, my river, and what a place means to us.',
        say:'Kia ora everyone! Last lesson we said Ko ___ te maunga and Ko ___ te awa: the mountain is, the river is. Today the pepeha becomes personal. We say tōku, my: Ko ___ tōku maunga, ___ is my mountain. We also learn to ask and answer: He aha te ingoa o tō maunga? What is the name of your mountain? And we add two new words: wāhi, which means place, and rohe, which means area or district. Still no writing: listen, think and speak. Put your hand on your heart, as if you are saying my place.',
        pron:'tōku = TOH-koo · wāhi = WAH-hee · rohe = ROH-heh · ātaahua = AH-tah-AH-hoo-ah · ingoa = ee-NGOR-ah · pepeha = peh-PEH-hah',
        li:'say my mountain and my river, ask and answer the name of a mountain or river, and talk about a place, using tōku, wāhi and rohe, in te reo.',
        succ:['I can say my mountain and my river: Ko ___ tōku maunga. Ko ___ tōku awa.','I can ask and answer: He aha te ingoa o tō maunga? Ko ___ tōku maunga.','I can say something about a place: He wāhi ātaahua tēnei. Ko ___ tōku rohe.'],
        wp:'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.',
        ref:'Matthew 5:16',
        mom:'God has put each of us in a place, and that place is where our light can shine. When we know where we are from and who we are, we can be kind, helpful and brave right here. That is how we make a difference, and that is Pānga.',
        q:'How could you make your school or your street a better place this week?',
        recall:[['How do you say: The mountain is ___. The river is ___.','Ko ___ te maunga. Ko ___ te awa.'],['How do you say: I am from here.','Nō konei ahau.'],['How do you say: This is a beautiful mountain.','He maunga ātaahua tēnei.'],['How do you say: We are working together.','E mahi tahi ana tātou.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'Who or what in your place makes you thankful?',
        next:'Week 2: Pepeha 2 (Nō ___ ahau: where I am from)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: wāhi (place, WAH-hee) and rohe (area or district, ROH-heh). Draw a circle in the air for wāhi and sweep an arm in a wide arc for rohe. ātaahua (beautiful) is back from Term 2.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. The maunga and awa are placeholders until the school confirms them. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: Ko, the name, then tōku (my), then maunga. Prompt 3: He aha (what) for a thing, not Ko wai (who).',
        xresc:'Common error: saying tō (your) instead of tōku (my). Say: tōku is my, tō is your. Or using Ko wai for a thing. Say: He aha is for things, Ko wai is for people.',
        xpron:'tōku = TOH-koo · wāhi = WAH-hee · rohe = ROH-heh · ātaahua = AH-tah-AH-hoo-ah',
        cur:cu4('Communication (saying my mountain and my river, asking and answering the name of a place, saying something about a place) · Language Knowledge (Ko ___ tōku maunga / awa; He aha te ingoa o tō maunga?; He wāhi ātaahua tēnei; Ko ___ tōku rohe) · Cultural Knowledge (place and belonging; being thankful for the place God has given us; light and service in our own community)','Recycles Lesson A, Term 1 Weeks 1, 3 and 9, Term 2 Weeks 4 and 7 (ātaahua, tōku) and Term 3 Week 10 (mahi tahi). ⚠ The local maunga and awa are placeholders until the school confirms them (see LOCAL at the top of term4.js). Please have a fluent speaker confirm He aha te ingoa o tō maunga?, Ko ___ tōku maunga, Ko ___ tōku rohe and He wāhi ātaahua tēnei.'),
        vr:valueRows('Matthew 5:16','God has put each of us in a place, and that place is where our light can shine. When we know where we are from and who we are, we can be kind, helpful and brave right here. That is how we make a difference.','How could you make your school or your street a better place this week?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['⚠ Make sure the confirmed maunga and awa names are on the board before teaching (see Lesson A).','Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add wāhi (place) and rohe (area, district) as the two stretch words.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the actions: hand on heart for tōku, a circle in the air for wāhi, a wide arc for rohe.'],
        three:'(1) <i>tōku</i> = my, <i>tō</i> = your: <i>Ko ___ tōku maunga</i> = ___ is my mountain. (2) To ask: <i>He aha te ingoa o tō maunga?</i> = what is the name of your mountain? (<i>He aha</i> is for things.) (3) <i>wāhi</i> = place, <i>rohe</i> = area or district: <i>He wāhi ātaahua tēnei</i> = this is a beautiful place.',
        diff:['Echo as a whole class and use the actions for every word. Say only Ko ___ tōku maunga at first, using the name on the board. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer with a partner about the maunga and the awa.','Add wāhi and rohe. Explain in English what a pepeha is and why the place matters, and ask classmates where they are from.'],
        look:'tōku not tō; the name straight after Ko; He aha (not Ko wai) for the question; wāhi pronounced WAH-hee (with the long ā); the three pieces in order; a respectful tone.',
        nx:'revisit tōku vs tō with students in Starting; move to Week 2 (Nō ___ ahau and the words iwi, hapū and waka, kept optional).',
        rec:'Lesson A (Ko ___ te maunga / awa, He pepeha tēnei), Term 1 Weeks 1, 3 and 9 (Ko … ahau, Nō hea koe?, Kia ora mō te …), Term 2 Weeks 4 and 7 (ātaahua, tōku) and Term 3 Week 10 (mahi tahi) are recalled in the warm-up, steps and drama. Week 2 adds Nō ___ ahau and iwi, hapū, waka as understanding words only.'
      },
      D: {
        VOC:[...A.D.VOC,'wāhi','rohe'],
        STEPS:[
          ['Quick recap: The mountain is ___. The river is ___.','Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n','kor ___ teh MOW-ngah · kor ___ teh AH-wah','Lesson A: mountain, then river.',null,'Whole class'],
          ['Quick recap: Greetings. I am Hana. I am from here.','Tēnā~koutou.|w Ko|k Hana|p ahau.|a Nō|k konei|p ahau.|a','TEH-nah KOH-toh. kor HAH-nah ah-HOW. nor KOR-neh-ee ah-HOW','Term 1 Weeks 1 and 3, stacked.',null,'Whole class'],
          ['Make it personal. How would you say: ___ is my mountain.','Ko|k ___|p tōku|k* maunga.|n','kor ___ TOH-koo MOW-ngah','tōku = my. Last lesson it was te maunga (the mountain). Now it is my mountain.','Put your hand on your heart. Last lesson we said te maunga, the mountain. Today we say tōku maunga, my mountain, because it is part of who we are. You know tōku from Term 2. Take a moment… (wait 3 seconds)… Ko, the name, tōku maunga. Say it with me.','Echo'],
          ['How would you say: ___ is my river.','Ko|k ___|p tōku|k awa.|n','kor ___ TOH-koo AH-wah','Swap the word after tōku: awa.',null,'Whole class'],
          ['Ask someone: What is the name of your mountain?','He|k aha|q te|k ingoa|n o~tō|k maunga?|n*','heh AH-hah teh ee-NGOR-ah or tor MOW-ngah','He aha = what (for things). te ingoa o = the name of. tō = your.','Point at a classmate. We use He aha for things, like a mountain. We use Ko wai for people. Tō means your. Take a moment… (wait 3 seconds)… He aha te ingoa o tō maunga? Say it with me.','Echo'],
          ['Answer: ___ is my mountain.','Ko|k ___|p tōku|k maunga.|n','kor ___ TOH-koo MOW-ngah','Answer with Ko + the name + tōku maunga.',null,'Whole class'],
          ['Ask about the river, and answer: What is the name of your river? ___ is my river.','He|k aha|q te|k ingoa|n o~tō|k awa?|n Ko|k ___|p tōku|k awa.|n','heh AH-hah teh ee-NGOR-ah or tor AH-wah? kor ___ TOH-koo AH-wah','Swap maunga for awa.',null,'Whole class'],
          ['Partner game: ask your partner the name of their mountain and river and answer. Then swap.','He|k aha|q te|k ingoa|n o~tō|k maunga?|n Ko|k ___|p tōku|k maunga.|n','heh AH-hah teh ee-NGOR-ah or tor MOW-ngah? kor ___ TOH-koo MOW-ngah','Use the names on the board. Then ask the same question about the river.','Turn to your partner. One of you asks He aha te ingoa o tō maunga? and the other answers Ko … tōku maunga. Then swap, and do the river as well. Take 2 minutes while I listen.','Pairs'],
          ['New word: wāhi means place. How would you say: This is a place.','He|k wāhi|n* tēnei.|x','heh WAH-hee TEH-neh-ee','He + the thing + tēnei, with the new word wāhi. The ā in wāhi is long.','Draw a circle in the air. Wāhi means place. The ā is long: WAH-hee. Take a moment… (wait 3 seconds)… He wāhi tēnei. Say it with me.','Echo'],
          ['A word from Term 2: This is a beautiful place.','He|k wāhi|n ātaahua|q tēnei.|x','heh WAH-hee AH-tah-AH-hoo-ah TEH-neh-ee','Term 2 Week 4: He + the thing + the describing word + tēnei.',null,'Whole class'],
          ['New word: rohe means area or district. How would you say: ___ is my area.','Ko|k ___|p tōku|k rohe.|n*','kor ___ TOH-koo ROH-heh','rohe = area or district. Same pattern: Ko + the name + tōku + the thing.','Sweep one arm in a wide arc. Rohe means the area or district where we live. Take a moment… (wait 3 seconds)… Ko, the name, tōku rohe. Say it with me.','Echo'],
          ['Put it together: Greetings. ___ is my mountain. ___ is my river. I am ___. This is a beautiful place.','Tēnā~koutou.|w Ko|k ___|p tōku|k maunga.|n Ko|k ___|p tōku|k awa.|n Ko|k ___|p ahau.|a He|k wāhi|n ātaahua|q tēnei.|x','TEH-nah KOH-toh. kor ___ TOH-koo MOW-ngah. kor ___ TOH-koo AH-wah. kor ___ ah-HOW. heh WAH-hee AH-tah-AH-hoo-ah TEH-neh-ee','Terms 1, 2 and 4 together.',null,'Whole class'],
          ['Class chain: greet the next person, ask the name of their mountain, they answer and say thanks, then goodbye.','Tēnā~koe.|w He|k aha|q te|k ingoa|n o~tō|k maunga?|n Ko|k ___|p tōku|k maunga.|n Kia~ora.|w Ka~kite!|w','TEH-nah KOH-eh. heh AH-hah teh ee-NGOR-ah or tor MOW-ngah? kor ___ TOH-koo MOW-ngah. KEE-ah OR-ah. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person asks the next one He aha te ingoa o tō maunga? and the next person answers Ko … tōku maunga. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ko Wai Koe? — Who Are You?',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Nau mai, tamariki! Ko Kuia Mere ahau.','Welcome, children! I am Kuia Mere.','(opens her arms)','T3W8'],
          ['Hana','Tēnā koe, Kuia. Ko Hana ahau.','Greetings, Kuia. I am Hana.','(steps forward)','T1W1'],
          ['Kuia Mere','Ko wai koe?','Who are you?','(turns to Tama)','T1W1'],
          ['Tama','Ko Tama ahau. Nō konei ahau.','I am Tama. I am from here.','(stands tall)','T1W3'],
          ['Kuia Mere','He aha te ingoa o tō maunga, Hana?','What is the name of your mountain, Hana?','(points at the picture on the wall)'],
          ['Hana','Ko '+LOCAL.maunga+' tōku maunga.',''+LOCAL.maunga+' is my mountain.','(hand on heart)'],
          ['Kuia Mere','He aha te ingoa o tō awa, Tama?','What is the name of your river, Tama?','(flows her hand)'],
          ['Tama','Ko '+LOCAL.awa+' tōku awa.',''+LOCAL.awa+' is my river.','(hand on heart)'],
          ['Kuia Mere','Ka pai! Ko '+LOCAL.maunga+' te maunga. Ko '+LOCAL.awa+' te awa.','Good! The mountain is '+LOCAL.maunga+'. The river is '+LOCAL.awa+'.','(claps)','T4W1'],
          ['Hana','He wāhi ātaahua tēnei, Kuia!','This is a beautiful place, Kuia!','(spreads her arms)','T2W4'],
          ['Kuia Mere','Kia ora mō tō pepeha, tamariki!','Thank you for your pepeha, children!','(hands together)','T3W9'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) A pepeha says who we are and where we are from. God has put each of us in a place for a purpose. Let your light shine right where you are, so that others see your good deeds and give glory to God.','T1W9'],
          ['Tama','Kia ora, Kuia. Ka kite!','Thank you, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘___ is my mountain.’','Ko '+LOCAL.maunga+' tōku maunga.'],['What does ātaahua mean?','Beautiful.'],['Choose the sentence: ____ ingoa o tō maunga? (What is the name of your mountain?) (He aha te / Ko wai te)','He aha te'],['Say in te reo: ‘This is a beautiful place.’','He wāhi ātaahua tēnei.'],['Stretch: say ‘___ is my mountain. ___ is my river. I am ___.’ then ask your partner the name of their river.','Ko ___ tōku maunga. Ko ___ tōku awa. Ko ___ ahau. He aha te ingoa o tō awa?']],
        CE:['Leaving out Ko, or saying tō (your) instead of tōku (my)','Not knowing that ātaahua means beautiful','Using Ko wai (who) for a thing; use He aha (what) for things','Leaving out He, or leaving out tēnei','Mixing up tōku (my) and tō (your) in the question and the answer'],
        T:'T4 W1 Lesson B',
        LP:{title:'Ko ___ tōku maunga — ___ is my mountain',val:'Pānga · Matthew 5:16',pat:['Ko ________ tōku maunga.','He aha te ingoa o tō awa? Ko ________ tōku awa.','He wāhi ātaahua tēnei. Ko ________ tōku rohe.'],swap:'Mine and yours: tōku (my) · tō (your). Things: maunga · awa · moana · wāhi · rohe. Write the confirmed names of our maunga and awa on your card.'}
      }
    };

    addLessons({ '4.1.A': A, '4.1.B': B });
  }


  /* ──────── WEEK 2 · Pepeha 2 ──────── */
  {
    // Place-based first (Nō ___ ahau). iwi, hapū and waka are UNDERSTANDING words only: optional, never required of a child.
    // TOWN comes from the school's name (CFG.school). Change it here if the class is in a different place.
    const TOWN = 'Ashburton';

    addGlossary({
      "iwi":["a people or tribe (a large group of families with a shared ancestor)","EE-wee",2,4],
      "hapū":["a smaller family group within an iwi (a sub-tribe)","hah-POO",2,4],
      "waka":["canoe (the ancestral canoe that some families trace their roots to)","WAH-kah",2,4]
    });

    // ── Lesson A · Nō ___ ahau — I am from ___ ──
    const A = {
      P: {
        t:4,
        w:2,
        l:'A',
        ch:'Nō|k ___|p* ahau.|a',
        sub:'Where are we from? Today we add our place and our name to the pepeha.',
        say:'Kia ora everyone! Last week we started our pepeha with the mountain and the river of our place. Today we add two more pieces: where we are from, and who we are. You already know the pattern from Term 1: Nō hea koe? Where are you from? Nō … ahau, I am from … Today the answer goes inside our pepeha: the mountain, the river, where I am from, and then my name. Every place counts: our town, our street, or a place far away. We also meet one new word, iwi, so we know what it means. Still no writing: listen, think and speak. Point at the floor for here, and at your chest for me.',
        pron:'nō = nor (long ō) · konei = KOR-neh-ee · hea = HEH-ah · iwi = EE-wee · pepeha = peh-PEH-hah · ahau = ah-HOW',
        li:'say where we are from and put our pepeha in order (the mountain, the river, where we are from and our name), using Nō ___ ahau and Ko ___ ahau, in te reo.',
        succ:['I can say where I am from: Nō ___ ahau.','I can ask and answer: Nō hea koe? Nō ___ ahau.','I can say my pepeha in order: mountain, river, where I am from, then my name.'],
        wp:'You are no longer strangers. You belong to God’s family.',
        ref:'Ephesians 2:19',
        mom:'Everyone belongs somewhere, and everyone belongs to God’s family. When we say where we are from, we are saying that our place and our story matter. When we listen well to where others are from, we make them feel welcome. That is how we start to make a difference, and that is Pānga.',
        q:'How can you help someone new feel they belong at our school?',
        recall:[['How do you say: The mountain is ___. The river is ___.','Ko ___ te maunga. Ko ___ te awa.'],['How do you say: Where are you from? I am from here.','Nō hea koe? Nō konei ahau.'],['How do you say: Thank you for the land.','Kia ora mō te whenua.']],
        rtag:'Term 4 Week 1 and earlier',
        rtxt:'Remember when… Term 4 Week 1 and earlier (3 quick prompts)',
        refl:'Who in our class could you ask where they are from this week?',
        next:'Lesson B: Nō hea ia? and Nō ___ tātou (where are they from? where are we from?)',
        vsay:'Say each word and the class echoes, with an action: point to the floor for konei, point into the distance for hea, press the hands flat for nō, point at your chest for ahau. New word today: iwi (EE-wee), a people or tribe. Draw a big circle in the air with both arms, as if you are holding a large group of people. iwi is an understanding word only: nobody has to say one. The local iwi goes on the board once the school has confirmed it.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. The maunga and awa are placeholders until the school confirms them. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Nō first, then the place, then ahau. Prompt 3: Nō for where from, Ko for a name.',
        xresc:'Common error: using Ko instead of Nō for a place (Ko Ashburton ahau). Say: Nō is for where we are from, Ko is for a name. Another common one: ahau before the place. Say: place first, ahau on the end.',
        xpron:'nō = nor (long ō) · hea = HEH-ah · konei = KOR-neh-ee · iwi = EE-wee',
        cur:cu4('Communication (saying and asking where we are from, saying a pepeha in order) · Language Knowledge (Nō ___ ahau; Nō hea koe?; Ko ___ ahau; the order of a pepeha: mountain, river, place, name) · Cultural Knowledge (a pepeha places us in a landscape and a community; what iwi means; belonging, including for students who are new to this place)','Recycles Term 1 Weeks 1, 3 and 9, Term 4 Week 1 (maunga, awa, Ko ___ te maunga) and Term 3 Week 8. ⚠ Cultural care: many students do not know their iwi, and some are from other countries or cultures. This lesson is place-based (Nō ___ ahau); iwi is taught as a meaning only and is never required. ⚠ The local maunga, awa and iwi must be confirmed by the school te reo lead or local rūnanga (they are placeholders in LOCAL at the top of term4.js). Please also have a fluent speaker confirm Ko ___ te iwi.'),
        vr:valueRows('Ephesians 2:19','Everyone belongs somewhere, and everyone belongs to God’s family. When we say where we are from, we are saying that our place and our story matter. When we listen well to where others are from, we make them feel welcome. That is how we start to make a difference, and that is Pānga.','How can you help someone new feel they belong at our school?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['⚠ Before teaching: confirm the local maunga, awa and iwi with the school te reo lead or local rūnanga, and write them on the board. Do not guess.','Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. Have a map of Aotearoa (and a world map if useful) ready so students can point to where they are from.','Think about your class: some students may not know their iwi, and some may be from overseas. Every place can go in the blank, and iwi is only ever optional.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.'],
        three:'(1) <i>Nō</i> is for where we are from, <i>Ko</i> is for a name: <i>Nō ___ ahau</i> = I am from ___. (2) A pepeha has an order: the mountain, the river, where I am from, then my name. (3) <i>iwi</i> means a people or tribe. It is a word to understand today, and nobody has to say one.',
        diff:['Echo as a whole class and use the actions. Start with Nō konei ahau (I am from here), then swap in one place. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer Nō hea koe? with a partner, then say the whole pepeha in order.','Explain in English what a pepeha shows about a person, ask classmates where they are from, and say what iwi means in their own words.'],
        look:'Nō (long ō) at the start, not Ko; the place straight after Nō; ahau on the end; the order of the pepeha; a respectful, welcoming tone when a classmate names their place.',
        nx:'revisit Nō ___ ahau with students in Starting; add Nō hea ia?, Nō ___ tātou and the words hapū and waka in Lesson B.',
        rec:'Term 1 Weeks 1, 3 and 9 (Ko … ahau, Nō hea koe?, Kia ora mō te …), Term 4 Week 1 (Ko ___ te maunga / awa, He pepeha tēnei) and Term 3 Week 8 (Nau mai) are recalled in the warm-up, steps and drama. Lesson B adds Nō ___ tātou, hapū and waka.'
      },
      D: {
        VOC:['pepeha','maunga','awa','nō','konei','hea','ahau','ko','ingoa','iwi'],
        STEPS:[
          ['Quick recap: The mountain is ___. The river is ___.','Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n','kor ___ teh MOW-ngah · kor ___ teh AH-wah','Term 4 Week 1: the first two pieces of a pepeha.',null,'Whole class'],
          ['Quick recap: Where are you from? I am from here.','Nō|k hea|q koe?|a Nō|k konei|p ahau.|a','nor HEH-ah KOH-eh · nor KOR-neh-ee ah-HOW','Term 1 Week 3: Nō + where + ahau. Nō is for where we are from.','Point to the floor for here. Say it with me. You know these already.','Gesture'],
          ['New idea: now you name a real place. How would you say: I am from '+TOWN+'.','Nō|k '+TOWN+'|p* ahau.|a','nor '+TOWN+' ah-HOW','Nō + the place + ahau. The place goes straight after Nō, just like a name goes straight after Ko.','Look at our map. Nō is for where we are from, and the place goes right after it. Take a moment… (wait 3 seconds)… Nō '+TOWN+' ahau. Say it with me.','Echo'],
          ['Swap the place. How would you say: I am from ___. (Say a place that is yours.)','Nō|k ___|p* ahau.|a','nor ___ ah-HOW','Same pattern: any place can go in the blank, here or far away.','Every place counts: our town, our street, or a place far away. Say the name the way people say it where you are from. Take a moment… (wait 3 seconds)… Nō, the place, ahau. Say it with me.','Whole class'],
          ['Ask someone: Where are you from? Then answer.','Nō|k hea|q koe?|a Nō|k ___|p ahau.|a','nor HEH-ah KOH-eh · nor ___ ah-HOW','The question and the answer have the same Nō at the start.',null,'Whole class'],
          ['Partner game: ask where your partner is from, and answer. Then swap.','Nō|k hea|q koe?|a Nō|k ___|p ahau.|a','nor HEH-ah KOH-eh · nor ___ ah-HOW','Listen carefully to the place your partner says, and say Ka pai!','Turn to your partner. One of you asks Nō hea koe? and the other answers Nō … ahau. Your partner listens and says Ka pai! Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Say your name. How would you say: I am Hana.','Ko|k Hana|p ahau.|a','kor HAH-nah ah-HOW','Ko is for a name, Nō is for a place.',null,'Whole class'],
          ['Now the two together: I am from '+TOWN+'. I am Hana.','Nō|k '+TOWN+'|p ahau.|a Ko|k Hana|p ahau.|a','nor '+TOWN+' ah-HOW. kor HAH-nah ah-HOW','Where I am from first, then my name.','Say it with me, and listen for the two different little words at the start: Nō for the place, Ko for the name.','Whole class'],
          ['Build the whole pepeha: the mountain, the river, where I am from, and my name.','Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n Nō|k '+TOWN+'|p ahau.|a Ko|k Hana|p ahau.|a','kor ___ teh MOW-ngah. kor ___ teh AH-wah. nor '+TOWN+' ah-HOW. kor HAH-nah ah-HOW','The order of our pepeha: mountain, river, where I am from, me.','Count on your fingers as we go: one, the mountain. Two, the river. Three, where I am from. Four, me. Say it with me, slowly, one line at a time.','Echo'],
          ['New word: iwi means a people or tribe. How would you say: The iwi is ___. (Only if you know it. Our local iwi is on the board.)','Ko|k ___|p te|k iwi.|n*','kor ___ teh EE-wee','Same pattern as maunga and awa: Ko + the name + te + the thing. Today iwi is a word to understand: nobody has to say theirs.','Draw a big circle in the air. Iwi means a people or tribe, a very large group of families. Some of us know our iwi and some of us are still finding out. Both are fine, and nobody has to say one today. Look at the board for the iwi of our area. Take a moment… (wait 3 seconds)… Ko, the name, te iwi. Say it with me.','Echo'],
          ['Put it together: Greetings. The mountain is ___. The river is ___. I am from '+TOWN+'. I am Hana.','Tēnā~koutou.|w Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n Nō|k '+TOWN+'|p ahau.|a Ko|k Hana|p ahau.|a','TEH-nah KOH-toh. kor ___ teh MOW-ngah. kor ___ teh AH-wah. nor '+TOWN+' ah-HOW. kor HAH-nah ah-HOW','Terms 1 and 4 together: greeting, then the pepeha in order.',null,'Whole class'],
          ['Say thank you for a pepeha: Thank you for your pepeha. Good!','Kia~ora|w mō~tō|k pepeha.|n Ka~pai!|w','KEE-ah OR-ah mor TOR PEH-peh-hah. kah PIE','Term 1 Week 9: Kia ora mō … and Ka pai!','Hand on heart. When someone shares where they are from, we thank them. Say it with me.','Whole class'],
          ['Class chain: greet the next person, ask where they are from, they answer and say their name, then goodbye.','Tēnā~koe.|w Nō|k hea|q koe?|a Nō|k ___|p ahau.|a Ko|k ___|p ahau.|a Ka~kite!|w','TEH-nah KOH-eh. nor HEH-ah KOH-eh. nor ___ ah-HOW. kor ___ ah-HOW. kah KEE-teh','Real kōrero, nothing memorised: use the board and the vocab card.','Pass it around the circle. Each person greets the next one and asks Nō hea koe? Then the next person answers with a place and their name, and so on. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Nō Hea Koe? — Where Are You From?',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Tēnā koutou, tamariki! He pepeha tēnei.','Greetings, children! This is a pepeha.','(waves to the class)','T4W1'],
          ['Hana','Tēnā koe, Kaiako. Ko Hana ahau.','Greetings, teacher. I am Hana.','(steps forward)','T1W1'],
          ['Kaiako Rose','Ko '+LOCAL.maunga+' te maunga. Ko '+LOCAL.awa+' te awa.','The mountain is '+LOCAL.maunga+'. The river is '+LOCAL.awa+'.','(points at the pictures on the wall)','T4W1'],
          ['Kaiako Rose','Nō '+TOWN+' ahau. Ko Kaiako Rose ahau.','I am from '+TOWN+'. I am Kaiako Rose.','(taps the map)'],
          ['Tama','Nō hea koe, Hana?','Where are you from, Hana?','(turns to Hana)','T1W3'],
          ['Hana','Nō Methven ahau.','I am from Methven.','(points at the map)'],
          ['Hana','Nō hea koe, Tama?','Where are you from, Tama?','(smiles)','T1W3'],
          ['Tama','Nō '+TOWN+' ahau. Ko Tama ahau.','I am from '+TOWN+'. I am Tama.','(stands tall)'],
          ['Kaiako Rose','Ka pai, Tama! Nō hea ia?','Good, Tama! Where is she from?','(points at Hana)','T1W10'],
          ['Tama','Nō Methven ia.','She is from Methven.','(nods)'],
          ['Hana','Kia ora mō te whenua, Kaiako!','Thank you for the land, teacher!','(hand on heart)','T4W1'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Everyone belongs somewhere, and everyone belongs to God’s family. When we say where we are from, we are telling our story. When we listen to someone else’s place, we help them feel welcome. That is where your Pānga, your impact, begins.','T1W9'],
          ['Tama','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I am from Ashburton.’','Nō '+TOWN+' ahau.'],['What does ‘Nō hea koe?’ mean?','Where are you from?'],['Choose the word: ____ Methven ahau. (I am from Methven.) (Nō / Ko)','Nō'],['Say in te reo: ‘I am from Ashburton. I am Hana.’','Nō '+TOWN+' ahau. Ko Hana ahau.'],['Stretch: say ‘The mountain is ___. The river is ___. I am from ___. I am ___.’ then ask your partner where they are from.','Ko ___ te maunga. Ko ___ te awa. Nō ___ ahau. Ko ___ ahau. Nō hea koe?']],
        CE:['Using Ko instead of Nō for a place (Ko Methven ahau), or putting ahau before the place','Not knowing that Nō hea koe? means Where are you from?','Choosing Ko for a place; Nō is for where we are from, Ko is for a name','Mixing up Nō (place) and Ko (name), or leaving out ahau','Leaving out one of the four pieces, or the order is mixed up (mountain, river, place, name)'],
        T:'T4 W2 Lesson A',
        LP:{title:'Nō ___ ahau — I am from ___',val:'Pānga · Ephesians 2:19',pat:['Nō hea koe?','Nō ________ ahau.','Ko ________ ahau.'],swap:'Pepeha order: maunga · awa · where I am from · me. Words: nō · konei · hea · ahau · iwi (a people or tribe: just to understand). Write the confirmed names of our maunga and awa on your card.'}
      }
    };

    // ── Lesson B · Nō hea ia? Nō ___ tātou — Where is she from? We are from ___ ──
    const B = {
      P: {
        t:4,
        w:2,
        l:'B',
        ch:'Nō|k ___|p tātou.|a*',
        sub:'Today we talk about other people’s places, and about the places we share together.',
        say:'Kia ora everyone! Last lesson we said Nō ___ ahau, I am from ___, and we put our pepeha in order. Today we talk about other people and about all of us together. We ask Nō hea ia? Where is she or he from? And we say Nō ___ tātou, we are all from ___. We also add two more words that people sometimes use in a pepeha: hapū, which is a smaller family group, and waka, which is a canoe. They are words to understand, and nobody has to say them. Still no writing: listen, think and speak. Open your arms wide for all of us together.',
        pron:'tātou = TAH-toh · ia = EE-ah · hapū = hah-POO · waka = WAH-kah · iwi = EE-wee · nō = nor',
        li:'ask and say where other people are from, say where we are all from, and understand three big pepeha words (iwi, hapū and waka), using Nō hea ia?, Nō ___ ia, Nō ___ tātou, in te reo.',
        succ:['I can ask and say where someone else is from: Nō hea ia? Nō ___ ia.','I can say where we are all from: Nō ___ tātou.','I can say what iwi, hapū and waka mean in English, and say He waka tēnei.'],
        wp:'You are a chosen people, so that you can tell the wonderful things God has done.',
        ref:'1 Peter 2:9',
        mom:'We are not just people in separate places. Together we are a people, and God has chosen us. When we say where we are from, we can also say with thanks what God has done for us in that place. That is how our pepeha becomes a way of making a difference, and that is Pānga.',
        q:'What is one good thing God has done for you or your whānau in the place where you live?',
        recall:[['How do you say: I am from ___.','Nō ___ ahau.'],['How do you say: This is a beautiful place.','He wāhi ātaahua tēnei.'],['How do you say: ___ is my mountain.','Ko ___ tōku maunga.'],['How do you say: Thank you for the food.','Kia ora mō te kai.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'Where are you from, and what is one thing you are thankful for about that place?',
        next:'Week 3: My body and health (Kei te mamae tōku upoko)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: hapū (a smaller family group, hah-POO) and waka (a canoe, WAH-kah). Show iwi, hapū and waka together as three sizes of family: a big circle for iwi, a smaller circle inside for hapū, and rock your arms like paddling for waka. These are understanding words only: nobody has to say theirs.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. The maunga, awa and iwi are placeholders until the school confirms them. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: Nō hea (where from) and ia (she or he). Prompt 3: tātou (we, all of us), not ahau (I).',
        xresc:'Common error: using ahau (I) when talking about all of us, or ia (she or he) when talking about yourself. Say: ahau is me, ia is she or he, tātou is all of us.',
        xpron:'tātou = TAH-toh · ia = EE-ah · hapū = hah-POO · waka = WAH-kah',
        cur:cu4('Communication (asking and saying where other people are from, saying where we are all from) · Language Knowledge (Nō hea ia?; Nō ___ ia; Nō ___ tātou; He waka tēnei; understanding iwi, hapū and waka) · Cultural Knowledge (the layers of a pepeha: mountain, river, waka, iwi, hapū, place, name; belonging together; giving thanks for our place)','Recycles Lesson A, Term 1 Weeks 1, 3 and 9, Term 2 Weeks 1 and 4, Term 3 Weeks 7 and 8 (tātou) and Term 4 Week 1 (tōku maunga, wāhi). ⚠ Cultural care: iwi, hapū and waka are taught as meanings. A pepeha line for them is optional and is never required of a student. ⚠ The local maunga, awa and iwi are placeholders until the school confirms them (see LOCAL at the top of term4.js). Please have a fluent speaker confirm Ko ___ tōku iwi, He waka tēnei and Nō ___ tātou.'),
        vr:valueRows('1 Peter 2:9','We are not just people in separate places. Together we are a people, and God has chosen us. When we say where we are from, we can also say with thanks what God has done for us in that place. That is how our pepeha becomes a way of making a difference, and that is Pānga.','What is one good thing God has done for you or your whānau in the place where you live?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['⚠ Make sure the confirmed maunga, awa and iwi names are on the board before teaching (see Lesson A).','Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add hapū (a smaller family group) and waka (canoe) as the two stretch words.','A picture of a waka (canoe) is helpful for steps 7 and 8, and a picture of the local maunga and awa for the warm-up. Remind students that iwi, hapū and waka are words to understand and nobody has to say one.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.'],
        three:'(1) <i>Nō hea ia?</i> = where is she or he from? <i>Nō ___ ia</i> = she or he is from ___. (2) <i>Nō ___ tātou</i> = we are all from ___ (<i>tātou</i> = all of us, including you). (3) <i>iwi</i> (people or tribe), <i>hapū</i> (smaller family group) and <i>waka</i> (canoe) are words that can be part of a pepeha. We understand them today, and nobody has to say them.',
        diff:['Echo as a whole class and use the actions. Say only Nō ___ ia at first, with a place card to point at. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer Nō hea ia? about a classmate with a partner.','Say Nō ___ tātou about a group, explain iwi, hapū and waka in English, and interview classmates about where they are from.'],
        look:'ia (not ahau) for someone else; tātou for all of us; the place straight after Nō; hapū pronounced hah-POO (long ū); respect and thanks when a classmate shares their place.',
        nx:'revisit ia and tātou with students in Starting; move to Week 3 (my body and health: Kei te mamae tōku upoko).',
        rec:'Lesson A (Nō ___ ahau, Nō hea koe?), Term 1 Weeks 1, 3 and 9 (Ko … ahau, Nō hea ia?, Kia ora mō te …), Term 2 Weeks 1 and 4 (He … tēnei, ātaahua), Term 3 Weeks 7 and 8 (tātou) and Term 4 Week 1 (tōku maunga, wāhi) are recalled in the warm-up, steps and drama. Week 3 starts a new theme (body and health).'
      },
      D: {
        VOC:[...A.D.VOC,'hapū','waka'],
        STEPS:[
          ['Quick recap: The mountain is ___. The river is ___. I am from '+TOWN+'. I am Hana.','Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n Nō|k '+TOWN+'|p ahau.|a Ko|k Hana|p ahau.|a','kor ___ teh MOW-ngah. kor ___ teh AH-wah. nor '+TOWN+' ah-HOW. kor HAH-nah ah-HOW','Lesson A: mountain, river, where I am from, me.',null,'Whole class'],
          ['Quick recap: Where are you from? I am from '+TOWN+'.','Nō|k hea|q koe?|a Nō|k '+TOWN+'|p ahau.|a','nor HEH-ah KOH-eh · nor '+TOWN+' ah-HOW','Lesson A: the question and the answer.',null,'Whole class'],
          ['Ask about someone else: Where is she from?','Nō|k hea|q ia?|a*','nor HEH-ah EE-ah','Same question, with ia (she or he) on the end instead of koe (you).','Point at a classmate. Koe means you, and ia means she or he. You know ia from Term 1. Take a moment… (wait 3 seconds)… Nō hea ia? Say it with me.','Echo'],
          ['Answer: She is from Methven.','Nō|k Methven|p ia.|a*','nor Methven EE-ah','Nō + the place + ia. Ahau is me, ia is she or he.','Point at a classmate and use a real place, with their permission. Ahau is me, ia is someone else. Take a moment… (wait 3 seconds)… Nō Methven ia. Say it with me.','Echo'],
          ['Say where we are all from: We are all from '+TOWN+'.','Nō|k '+TOWN+'|p tātou.|a*','nor '+TOWN+' TAH-toh','tātou = all of us, including you. You know tātou from Term 3.','Open your arms wide to show everyone in the room. Tātou means all of us, and you are included. Take a moment… (wait 3 seconds)… Nō '+TOWN+' tātou. Say it with me.','Echo'],
          ['Partner game: ask where a classmate is from, using their name, and answer for them. Then swap.','Nō|k hea|q ia?|a Nō|k ___|p ia.|a','nor HEH-ah EE-ah · nor ___ EE-ah','Ask about someone else (ia), not about yourself.','Turn to your partner. Point at someone in the room and ask Nō hea ia? Your partner answers Nō … ia. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['New word: waka means canoe. How would you say: This is a canoe.','He|k waka|n* tēnei.|x','heh WAH-kah TEH-neh-ee','He + the thing + tēnei, with the new word waka.','Show a picture of a waka, and rock your arms as if you are paddling. Some families trace their roots back to the great waka that brought their ancestors to Aotearoa. Take a moment… (wait 3 seconds)… He waka tēnei. Say it with me.','Echo'],
          ['New word: hapū means a smaller family group. The three big words together: tribe, family group, canoe.','iwi|n hapū|n* waka|n','EE-wee hah-POO WAH-kah','Three words that can be part of a pepeha: iwi is a large people, hapū is a smaller family group, waka is a canoe.','Draw a big circle for iwi, then a smaller circle inside it for hapū, then paddle your arms for waka. The ū in hapū is long: hah-POO. Say them with me: iwi, hapū, waka. These are words to understand today, and nobody has to say theirs.','Whole class'],
          ['If you know it, say your iwi: ___ is my iwi. (Only if you know it. Otherwise, listen and say Ka pai!)','Ko|k ___|p tōku|k iwi.|n','kor ___ TOH-koo EE-wee','tōku = my. Same pattern as Ko ___ tōku maunga from last week.','Only say this one if you know it and you are happy to share it. If not, listen to your partner and say Ka pai! Both are fine. Take a moment… (wait 3 seconds)… Ko, the name, tōku iwi. Say it with me.','Whole class'],
          ['Say it is a beautiful town. How would you say: This is a beautiful town.','He|k tāone|n ātaahua|q tēnei.|x','heh TAH-or-neh AH-tah-AH-hoo-ah TEH-neh-ee','Terms 2 and 3: He + the thing + the describing word + tēnei.',null,'Whole class'],
          ['Put it together: Greetings. The mountain is ___. The river is ___. I am from '+TOWN+'. Where is she from? She is from Methven.','Tēnā~koutou.|w Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n Nō|k '+TOWN+'|p ahau.|a Nō|k hea|q ia?|a Nō|k Methven|p ia.|a','TEH-nah KOH-toh. kor ___ teh MOW-ngah. kor ___ teh AH-wah. nor '+TOWN+' ah-HOW. nor HEH-ah EE-ah. nor Methven EE-ah','Lesson A and today’s piece together.',null,'Whole class'],
          ['Give thanks for your family: Thank you for my family.','Kia~ora|w mō~tōku|k whānau.|n','KEE-ah OR-ah mor TOH-koo FAH-now','Term 1 Week 4 and Week 9: Kia ora mō … with tōku whānau.','Hand on heart. We give thanks to God for our family and for our place. Say it with me.','Whole class'],
          ['Class chain: greet the next person, ask where someone else is from, they answer, then goodbye.','Tēnā~koe.|w Nō|k hea|q ia?|a Nō|k ___|p ia.|a Kia~ora.|w Ka~kite!|w','TEH-nah KOH-eh. nor HEH-ah EE-ah. nor ___ EE-ah. KEE-ah OR-ah. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person points at someone else and asks the next person Nō hea ia? and the next person answers Nō … ia. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Pepeha o Kuia — Kuia’s Pepeha',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Tēnā koutou, tamariki! Ko Kuia Mere ahau.','Greetings, children! I am Kuia Mere.','(opens her arms)','T1W1'],
          ['Hana','Tēnā koe, Kuia. Nō hea koe?','Greetings, Kuia. Where are you from?','(steps forward)','T1W3'],
          ['Kuia Mere','Nō '+TOWN+' ahau.','I am from '+TOWN+'.','(points at the map)'],
          ['Kuia Mere','Ko '+LOCAL.maunga+' tōku maunga. Ko '+LOCAL.iwi+' tōku iwi.','My mountain is '+LOCAL.maunga+'. My iwi is '+LOCAL.iwi+'.','(hand on heart)','T4W1'],
          ['Tama','He aha tēnei, Kuia?','What is this, Kuia?','(holds up a picture of a waka)','T2W8'],
          ['Kuia Mere','He waka tēnei.','This is a canoe.','(rocks her arms like paddling)'],
          ['Kuia Mere','Nō hea ia, Hana?','Where is he from, Hana?','(points at Tama)','T1W3'],
          ['Hana','Nō '+TOWN+' ia.','He is from '+TOWN+'.','(nods)'],
          ['Tama','Nō '+TOWN+' tātou, Kuia!','We are all from '+TOWN+', Kuia!','(opens his arms wide)'],
          ['Kuia Mere','Āe! Ka pai, tamariki!','Yes! Good, children!','(claps)','T1W10'],
          ['Hana','Kia ora mō te kāinga, Kuia!','Thank you for the home, Kuia!','(hands together)','T1W9'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) A pepeha tells people where we are from, and it tells them who we belong with. Together we are a people, and God has chosen us. When we say where we are from, we can say thank you for what God has done there.','T1W9'],
          ['Tama','Kia ora, Kuia. Ka kite!','Thank you, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘Where is she from?’','Nō hea ia?'],['What does hapū mean?','A smaller family group (part of an iwi).'],['Choose the word: Nō Ashburton ____. (We are all from Ashburton.) (ahau / tātou)','tātou'],['Say in te reo: ‘This is a canoe. She is from Methven.’','He waka tēnei. Nō Methven ia.'],['Stretch: say ‘Where is she from? She is from ___. We are all from ___.’ then ask your partner where they are from.','Nō hea ia? Nō ___ ia. Nō ___ tātou. Nō hea koe?']],
        CE:['Using koe (you) instead of ia (she or he), or leaving out Nō','Not knowing that hapū is a smaller family group (part of an iwi)','Choosing ahau (I) for a group; tātou means all of us','Leaving out He, or leaving out tēnei, or using ahau instead of ia','Mixing up ahau, ia and tātou, or leaving out Nō hea ia?'],
        T:'T4 W2 Lesson B',
        LP:{title:'Nō hea ia? Nō ___ tātou — Where is she from? We are from ___',val:'Pānga · 1 Peter 2:9',pat:['Nō hea ia?','Nō ________ ia.','Nō ________ tātou.'],swap:'Swap the last word: ahau = I · koe = you · ia = she/he · tātou = all of us. Big words (to understand): iwi · hapū · waka. Write the confirmed names of our maunga and awa on your card.'}
      }
    };

    addLessons({ '4.2.A': A, '4.2.B': B });
  }


  /* ──────── WEEK 3 · My body & health ──────── */
  {
    // Body parts take tōku (one) and ōku (more than one), NOT taku. ōku, ōna, tōna and mauiui are recalled (T1W2, T1W7, T2W7).
    addGlossary({
      "mamae":["sore / hurting (in pain)","mah-MAH-eh",3,4],
      "upoko":["head","oo-POH-koh",3,4],
      "kanohi":["face","kah-NOH-hee",3,4],
      "ihu":["nose","EE-hoo",3,4],
      "waha":["mouth","WAH-hah",3,4],
      "puku":["tummy / stomach","POO-koo",3,4],
      "ringa":["hand / arm","REE-ngah",3,4],
      "waewae":["leg / foot","WAH-eh-wah-eh",3,4],
      "taringa":["ear","tah-REE-ngah",3,4]
    });

    // ── Lesson A · Kei te mamae tōku upoko — My head hurts ──
    const A = {
      P: {
        t:4,
        w:3,
        l:'A',
        ch:'Kei~te|k mamae|n* tōku|k upoko.|n',
        sub:'Our bodies are a gift from God. Today we name parts of our body and say when something hurts.',
        say:'Kia ora everyone! This week our pepeha is about who we are, and today we look at our bodies. God made our bodies, and they are a gift. Today we learn the words for some parts of the body, and how to say when something hurts: Kei te mamae tōku upoko, my head hurts. You already know Kei te from Term 1 and tōku from Term 2, so you own most of this sentence already. One kind rule for this week: we only point to our own body, and in Māori tikanga the head is special, so we never touch someone else’s head. Still no writing: listen, think and speak. Point to your own head, gently.',
        pron:'mamae = mah-MAH-eh · upoko = oo-POH-koh · kanohi = kah-NOH-hee · ihu = EE-hoo · waha = WAH-hah · puku = POO-koo · ringa = REE-ngah',
        li:'name parts of the body and say and ask when something hurts, using Kei te mamae tōku upoko and Kei te mamae tō puku?, in te reo.',
        succ:['I can say a part of the body: Ko tōku upoko tēnei.','I can say when something hurts: Kei te mamae tōku upoko.','I can ask and answer: Kei te mamae tō puku? Āe / Kāo, kei te pai tōku puku.'],
        wp:'Your body is a gift from God, so look after it.',
        ref:'1 Corinthians 6:19-20',
        mom:'God made our bodies, and each one is a gift. Looking after our bodies is one way to say thank you to him. When we notice that someone else is hurting and ask how they are, we show them that they matter. Caring for people is part of making a difference, and that is Pānga.',
        q:'What is one way you can look after your body this week?',
        recall:[['How do you say: How are you? I am sick.','Kei te pēhea koe? Kei te mauiui ahau.'],['How do you say: This is my pen.','Ko tōku pene tēnei.'],['How do you say: I am from ___.','Nō ___ ahau.']],
        rtag:'Terms 1, 2 and 4',
        rtxt:'Remember when… Terms 1, 2 and 4 (3 quick prompts)',
        refl:'Who could you ask “Kei te pēhea koe?” this week?',
        next:'Lesson B: Kei te mamae ōku waewae (more than one: my legs hurt)',
        vsay:'Say each word and the class echoes, with an action. Point gently to your own body part for each word: upoko (head), kanohi (face), ihu (nose), waha (mouth), puku (tummy), ringa (hand). For mamae, make a small wince. Tikanga note: we only point to our own head and never touch anyone else’s head. Remind students that the pointing is just for the word, not for anyone who is actually unwell.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. The actors only pretend to be sore, and nobody touches another person’s head. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Kei te mamae, then tōku (my), then the body part. Prompt 3: tōku for one part of the body.',
        xresc:'Common error: saying taku (not tōku) with a body part. Say: body parts take tōku. Another common one: leaving out Kei te. Say: Kei te comes first because it is happening now.',
        xpron:'mamae = mah-MAH-eh · upoko = oo-POH-koh · puku = POO-koo · ringa = REE-ngah',
        cur:cu4('Communication (naming parts of the body, saying and asking when something hurts, answering yes and no) · Language Knowledge (Ko tōku ___ tēnei; Kei te mamae tōku ___; Kei te mamae tō ___?; Āe / Kāo, kei te pai tōku ___) · Cultural Knowledge (looking after our bodies as a gift from God; caring for each other; the head is tapu in tikanga Māori, so we point to our own head and never touch another person’s)','Recycles Term 1 Weeks 2 and 10 (Kei te pēhea koe?, mauiui, Kia kaha), Term 2 Week 7 (tōku), Term 3 Week 9 (Ka āwhina ahau) and Term 4 Week 2. ⚠ Wellbeing care: some students may live with a health condition, pain or a disability. Keep it playful and pretend, point only to your own body, and never ask a student about a real health problem in front of the class. Please also have a fluent speaker confirm Kei te mamae tō puku? and kanohi (face).'),
        vr:valueRows('1 Corinthians 6:19-20','God made our bodies, and each one is a gift. Looking after our bodies is one way to say thank you to him. When we notice that someone else is hurting and ask how they are, we show them that they matter. Caring for people is part of making a difference, and that is Pānga.','What is one way you can look after your body this week?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. A picture of a body (a simple outline) is helpful for pointing.','Remember the tikanga: the head is tapu. Students point to their own head and never touch another person’s head, and keep pillows and food away from heads.','Wellbeing care: all the sore parts are pretend. Do not ask a student about a real health problem in front of the class.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles. Practise the actions: point gently to each body part, wince for mamae.'],
        three:'(1) <i>mamae</i> = sore or hurting: <i>Kei te mamae tōku upoko</i> = my head hurts. (2) Body parts take <i>tōku</i> (my, one) and <i>tō</i> (your): <i>Kei te mamae tō puku?</i> = is your tummy sore? (3) The head is tapu in tikanga Māori: we point to our own head and never touch someone else’s.',
        diff:['Echo as a whole class and use the actions for every word. Say only Kei te mamae tōku upoko at first, then swap in one more body part. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer Kei te mamae tō puku? with a partner, then say a short chat.','Add ringa, kanohi and the care words (Kia kaha, Ka āwhina ahau), explain in English what tōku and tō mean, and ask classmates how they are.'],
        look:'Kei te first; mamae pronounced mah-MAH-eh; tōku (not taku) with a body part; the body part last; kind voices when a classmate pretends to be sore.',
        nx:'revisit tōku with students in Starting; add ōku (more than one), waewae and taringa in Lesson B.',
        rec:'Term 1 Weeks 2, 7 and 10 (Kei te pēhea koe?, mauiui, Kia kaha), Term 2 Week 7 (tōku), Term 3 Week 9 (Ka āwhina ahau, Kia ora mō tō āwhina) and Term 4 Week 2 (Nō ___ ahau) are recalled in the warm-up, steps and drama. Lesson B adds ōku, waewae and taringa.'
      },
      D: {
        VOC:['mamae','upoko','kanohi','ihu','waha','puku','ringa','tōku','mauiui','kia kaha'],
        STEPS:[
          ['Quick recap: How are you? I am sick.','Kei~te|k pēhea|q koe?|a Kei~te|k mauiui|q ahau.|a','kay teh PEH-heh-ah KOH-eh · kay teh MOW-ee-oo-ee ah-HOW','Term 1 Week 2: Kei te + how + you; Kei te + feeling + me.',null,'Whole class'],
          ['Quick recap: This is my pen.','Ko|k tōku|k pene|n tēnei.|x','kor TOH-koo PEH-neh TEH-neh-ee','Term 2 Week 7: tōku = my.',null,'Whole class'],
          ['New word: a part of the body. How would you say: This is my head.','Ko|k tōku|k upoko|n* tēnei.|x','kor TOH-koo oo-POH-koh TEH-neh-ee','Ko tōku + the thing + tēnei, with the new word upoko.','Point gently to your own head. In Māori tikanga the head is tapu, so we only ever point to our own head and never touch anyone else’s. Take a moment… (wait 3 seconds)… Ko tōku upoko tēnei. Say it with me.','Echo'],
          ['Two more parts: This is my nose. This is my mouth.','Ko|k tōku|k ihu|n* tēnei.|x Ko|k tōku|k waha|n* tēnei.|x','kor TOH-koo EE-hoo TEH-neh-ee · kor TOH-koo WAH-hah TEH-neh-ee','Same pattern, new words: ihu (nose), waha (mouth).','Point to your own nose, then your own mouth. Same pattern, new words. Say them with me.','Gesture'],
          ['Two more parts: This is my face. This is my hand.','Ko|k tōku|k kanohi|n* tēnei.|x Ko|k tōku|k ringa|n* tēnei.|x','kor TOH-koo kah-NOH-hee TEH-neh-ee · kor TOH-koo REE-ngah TEH-neh-ee','Same pattern, new words: kanohi (face), ringa (hand). ng is as in singer.','Draw a circle around your face with your finger, then hold up one hand. Say them with me.','Gesture'],
          ['New word: mamae means sore. How would you say: My head hurts.','Kei~te|k mamae|n* tōku|k upoko.|n','kay teh mah-MAH-eh TOH-koo oo-POH-koh','Kei te + mamae + tōku + the body part. Kei te says it is happening now.','Make a small wince. Mamae means sore or hurting. You know Kei te from Term 1 and tōku from Term 2, so you own most of this sentence already. Take a moment… (wait 3 seconds)… Kei te mamae tōku upoko. Say it with me.','Echo'],
          ['Swap the part: My tummy hurts.','Kei~te|k mamae|n tōku|k puku.|n*','kay teh mah-MAH-eh TOH-koo POO-koo','Same pattern: just swap the last word. puku = tummy.','Rub your tummy gently. Say it with me.','Echo'],
          ['Ask someone: Is your tummy sore?','Kei~te|k mamae|n tō|k* puku?|n','kay teh mah-MAH-eh TOH POO-koo','tō = your. Your voice goes up for a question.','Point at a classmate, but do not touch. Tōku is my, and tō is your. Take a moment… (wait 3 seconds)… Kei te mamae tō puku? Say it with me.','Echo'],
          ['Answer yes: Yes, my tummy hurts. Answer no: No, my tummy is fine.','Āe,|w kei~te|k mamae|n tōku|k puku.|n Kāo,|w kei~te|k pai|q* tōku|k puku.|n','AH-eh, kay teh mah-MAH-eh TOH-koo POO-koo · KAH-or, kay teh PIE TOH-koo POO-koo','Āe or Kāo, then the full sentence. You know pai (well) from Term 1.',null,'Whole class'],
          ['Partner game: ask your partner if a body part is sore, and answer. It is all pretend. Then swap.','Kei~te|k mamae|n tō|k ___?|n Āe/Kāo,|w kei~te|k ___|n tōku|k ___.|n','kay teh mah-MAH-eh TOH ___ · AH-eh / KAH-or, kay teh ___ TOH-koo ___','Use any body part you know. Everything is pretend!','Turn to your partner. One of you asks Kei te mamae tō … ? and the other answers yes or no with a full sentence. It is all pretend, and nobody touches anyone’s head. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Care for others: Be strong. I will help.','Kia~kaha.|w Ka|k āwhina|n ahau.|a','KEE-ah KAH-hah. kah AH-fee-nah ah-HOW','Term 1 Week 10 and Term 3 Week 9: Kia kaha, Ka āwhina ahau.','Put your hand on your heart. When someone is hurting, we notice and we help. Say it with me.','Whole class'],
          ['Put it together: Hello. How are you? I am sick. My head hurts.','Tēnā~koe.|w Kei~te|k pēhea|q koe?|a Kei~te|k mauiui|q ahau.|a Kei~te|k mamae|n tōku|k upoko.|n','TEH-nah KOH-eh. kay teh PEH-heh-ah KOH-eh. kay teh MOW-ee-oo-ee ah-HOW. kay teh mah-MAH-eh TOH-koo oo-POH-koh','Terms 1, 2 and 4 together.',null,'Whole class'],
          ['Class chain: greet the next person, ask if their tummy is sore, they answer, then say goodbye.','Tēnā~koe.|w Kei~te|k mamae|n tō|k puku?|n Kāo,|w kei~te|k pai|q tōku|k puku.|n Ka~kite!|w','TEH-nah KOH-eh. kay teh mah-MAH-eh TOH POO-koo. KAH-or, kay teh PIE TOH-koo POO-koo. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one and asks Kei te mamae tō puku? and the next person answers. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Kei Te Mamae — It Hurts',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te pēhea koutou?','Hello, children! How are you all?','(waves to the class)','T1W2'],
          ['Hana','Kei te pai ahau, Kaiako.','I am well, teacher.','(smiles)','T1W2'],
          ['Tama','Kei te mauiui ahau.','I am sick.','(slumps a little)','T1W2'],
          ['Kaiako Rose','Kei te mamae tō upoko, Tama?','Is your head sore, Tama?','(looks kindly)'],
          ['Tama','Āe, kei te mamae tōku upoko.','Yes, my head hurts.','(points to his own head)'],
          ['Kaiako Rose','Kei te mamae tō puku?','Is your tummy sore?','(gently)'],
          ['Tama','Kāo, kei te pai tōku puku.','No, my tummy is fine.','(shakes his head)'],
          ['Hana','Kei te mamae tōku ringa, Kaiako.','My hand hurts, teacher.','(holds her own hand)'],
          ['Kaiako Rose','Kia kaha, Hana! Ka āwhina ahau.','Be strong, Hana! I will help.','(hand on heart)','T3W9'],
          ['Tama','Kia ora mō tō āwhina, Kaiako!','Thank you for your help, teacher!','(hands together)','T3W9'],
          ['Hana','Kia ora, Kaiako! Kei te pai tōku ringa.','Thank you, teacher! My hand is fine.','(waves her hand)','T1W9'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God made our bodies, and they are a gift. When we look after them, we say thank you to him. When someone is hurting, we can notice, ask how they are and help. That is where your Pānga, your impact, begins.','T1W9'],
          ['Tama','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘My head hurts.’','Kei te mamae tōku upoko.'],['What does mamae mean?','Sore / hurting (in pain).'],['Choose the word: Kei te mamae ____ puku. (my tummy) (tōku / taku)','tōku'],['Say in te reo: ‘Is your tummy sore? No, my tummy is fine.’','Kei te mamae tō puku? Kāo, kei te pai tōku puku.'],['Stretch: say ‘My hand hurts.’ then ask your partner if their tummy is sore and say ‘Be strong.’','Kei te mamae tōku ringa. Kei te mamae tō puku? Kia kaha.']],
        CE:['Leaving out Kei te, or putting the body part before mamae','Not knowing that mamae means sore or hurting','Using taku with a body part; body parts take tōku','Mixing up tōku (my) and tō (your), or leaving out Āe or Kāo','Leaving out one of the three pieces, or saying taku instead of tōku'],
        T:'T4 W3 Lesson A',
        LP:{title:'Kei te mamae tōku upoko — My head hurts',val:'Pānga · 1 Corinthians 6:19-20',pat:['Ko tōku ________ tēnei.','Kei te mamae tōku ________.','Kei te mamae tō ________?'],swap:'Body: upoko · kanohi · ihu · waha · puku · ringa. Mine and yours: tōku (my) · tō (your). Care: Kia kaha · Ka āwhina ahau. We only point to our own head.'}
      }
    };

    // ── Lesson B · Kei te mamae ōku waewae — My legs hurt ──
    const B = {
      P: {
        t:4,
        w:3,
        l:'B',
        ch:'Kei~te|k mamae|n ōku|k* waewae.|n',
        sub:'Today we talk about more than one body part, about other people, and about how we care for each other.',
        say:'Kia ora everyone! Last lesson we said Kei te mamae tōku upoko, my head hurts. Today we say what happens when it is more than one thing, like two legs or two ears. Tōku is for one thing, and ōku is for more than one. You met ōku in Term 1. We also add two new body words, waewae and taringa, and we talk about other people: Kei te mamae tōna upoko, her head hurts. At the end we practise caring words, including a short prayer for a friend. Remember our kind rules: we point to our own body, we never touch another person’s head, and the pretend pain is only pretend. Still no writing: listen, think and speak. Hold up two fingers for ōku, one for tōku.',
        pron:'ōku = OH-koo · waewae = WAH-eh-wah-eh · taringa = tah-REE-ngah · ōna = OH-nah · tōna = TOH-nah · karakia = kah-RAH-kee-ah',
        li:'say when more than one body part hurts and talk about other people, using ōku, ōna, tōna, waewae and taringa, in te reo.',
        succ:['I can say tōku for one and ōku for more than one: Kei te mamae ōku waewae.','I can ask and say about someone else: Kei te mamae tōna upoko.','I can use caring words: Kia kaha. Ka karakia tātou mō Tama.'],
        wp:'He heals the broken-hearted and cares for their wounds.',
        ref:'Psalm 147:3',
        mom:'God sees us when we hurt, and he cares. He asks us to notice too. We can say a kind word, offer to help and pray for a friend. When we care for people who are hurting, we are being God’s hands in our school and our home, and that is Pānga.',
        q:'Who could you help or pray for this week?',
        recall:[['How do you say: My head hurts.','Kei te mamae tōku upoko.'],['How do you say: Is your tummy sore? No, my tummy is fine.','Kei te mamae tō puku? Kāo, kei te pai tōku puku.'],['How do you say: I will help.','Ka āwhina ahau.'],['How do you say: Thank you for your help.','Kia ora mō tō āwhina.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'What is one kind thing you can say to someone who is hurting?',
        next:'Week 4: Creation and kaitiakitanga (He kurī tēnei)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: waewae (leg or foot, WAH-eh-wah-eh) and taringa (ear, tah-REE-ngah). Point gently to your own legs and tap your own ears. Hold up one finger for tōku and two for ōku. Remember: only point to your own body, and never touch anyone else’s head.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. The actors only pretend to be sore. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: ōku (more than one) with waewae. Prompt 3: ōku for more than one, tōku for one.',
        xresc:'Common error: tōku with a plural (tōku waewae for two legs). Say: tōku is for one thing, ōku is for more than one. Another common one: ahau or koe when talking about someone else. Say: tōna or ōna is his or her.',
        xpron:'ōku = OH-koo · waewae = WAH-eh-wah-eh · taringa = tah-REE-ngah · ōna = OH-nah',
        cur:cu4('Communication (saying when more than one body part hurts, talking about another person, using caring words and a short prayer) · Language Knowledge (Kei te mamae ōku ___; Kei te mamae ō ___?; Kei te mamae tōna / ōna ___; Ka karakia tātou mō ___) · Cultural Knowledge (caring for others as a way of showing God’s love; karakia for a friend; the head is tapu, so we point only to our own)','Recycles Lesson A, Term 1 Weeks 2, 7 and 10, Term 2 Week 7 (tōku, tōna), Term 3 Weeks 8 and 9 (Noho mai, Ka āwhina ahau). ⚠ Wellbeing care: all the pain is pretend, and nobody should be asked about a real health problem in front of the class. Please have a fluent speaker confirm Kei te mamae ō waewae? (ō = your, more than one), Kei te mamae ōna taringa and Ka karakia tātou mō Tama.'),
        vr:valueRows('Psalm 147:3','God sees us when we hurt, and he cares. He asks us to notice too. We can say a kind word, offer to help and pray for a friend. When we care for people who are hurting, we are being God’s hands in our school and our home, and that is Pānga.','Who could you help or pray for this week?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add waewae (leg or foot) and taringa (ear) as the two stretch words.','A simple body outline is helpful for pointing. Remind students once more: we point to our own body, and we never touch another person’s head.','Wellbeing care: the pain is pretend, and do not ask a student about a real health problem in front of the class. The short prayer in step 10 is a kind invitation, never a requirement to pray out loud.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles. Practise the actions: one finger for tōku, two fingers for ōku.'],
        three:'(1) <i>tōku</i> = my (one thing), <i>ōku</i> = my (more than one): <i>Kei te mamae ōku waewae</i> = my legs hurt. (2) <i>tōna</i> = his or her (one), <i>ōna</i> = his or her (more than one): <i>Kei te mamae ōna taringa</i> = his ears hurt. (3) <i>Ka karakia tātou mō Tama</i> = we will pray for Tama.',
        diff:['Echo as a whole class and use two fingers for ōku. Say only Kei te mamae ōku waewae at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer about legs, ears and hands with a partner, and say a short chat about someone else.','Add waewae and taringa to your own sentences, say tōna and ōna about a friend, explain tōku and ōku in English and invite a classmate to say the short prayer line.'],
        look:'ōku (not tōku) for more than one; tōna or ōna for someone else; waewae pronounced WAH-eh-wah-eh and taringa tah-REE-ngah (ng as in singer); kind, caring voices.',
        nx:'revisit tōku and ōku with students in Starting; move to Week 4 (Creation and kaitiakitanga).',
        rec:'Lesson A (Kei te mamae tōku upoko, Kei te mamae tō puku?), Term 1 Weeks 2, 7 and 10 (Kei te pēhea koe?, ōku, ōna, Kia kaha), Term 2 Week 7 (tōna), Term 3 Weeks 8 and 9 (Noho mai, Ka āwhina ahau) and Term 4 Week 2 (Nō ___ ahau) are recalled in the warm-up, steps and drama. Week 4 starts a new theme (creation and kaitiakitanga).'
      },
      D: {
        VOC:[...A.D.VOC,'waewae','taringa'],
        STEPS:[
          ['Quick recap: My head hurts. My tummy hurts.','Kei~te|k mamae|n tōku|k upoko.|n Kei~te|k mamae|n tōku|k puku.|n','kay teh mah-MAH-eh TOH-koo oo-POH-koh · kay teh mah-MAH-eh TOH-koo POO-koo','Lesson A: Kei te mamae + tōku + the body part.',null,'Whole class'],
          ['Quick recap: Is your tummy sore? No, my tummy is fine.','Kei~te|k mamae|n tō|k puku?|n Kāo,|w kei~te|k pai|q tōku|k puku.|n','kay teh mah-MAH-eh TOH POO-koo · KAH-or, kay teh PIE TOH-koo POO-koo','Lesson A: the question and the answer.',null,'Whole class'],
          ['More than one: My hands hurt.','Kei~te|k mamae|n ōku|k* ringa.|n','kay teh mah-MAH-eh OH-koo REE-ngah','ōku = my (more than one thing). You know ōku from Term 1.','Hold up two hands. Tōku is for one thing, and ōku is for more than one. Take a moment… (wait 3 seconds)… Kei te mamae ōku ringa. Say it with me.','Echo'],
          ['One or more than one? My hand hurts. My hands hurt.','Kei~te|k mamae|n tōku|k ringa.|n Kei~te|k mamae|n ōku|k ringa.|n','kay teh mah-MAH-eh TOH-koo REE-ngah · kay teh mah-MAH-eh OH-koo REE-ngah','tōku for one, ōku for more than one.','Hold up one finger for tōku, two fingers for ōku. Say them with me.','Gesture'],
          ['New word: waewae means leg or foot. How would you say: My legs hurt.','Kei~te|k mamae|n ōku|k waewae.|n*','kay teh mah-MAH-eh OH-koo WAH-eh-wah-eh','ōku + waewae. We usually have two legs, so we say ōku.','Point gently to your own legs. Waewae means leg or foot, and we have two, so we say ōku. Take a moment… (wait 3 seconds)… Kei te mamae ōku waewae. Say it with me.','Echo'],
          ['New word: taringa means ear. How would you say: My ears hurt.','Kei~te|k mamae|n ōku|k taringa.|n*','kay teh mah-MAH-eh OH-koo tah-REE-ngah','ōku + taringa. We have two ears, so we say ōku.','Tap your own ears gently. Take a moment… (wait 3 seconds)… Kei te mamae ōku taringa. Say it with me.','Echo'],
          ['Ask someone: Are your legs sore?','Kei~te|k mamae|n ō|k* waewae?|n','kay teh mah-MAH-eh OR WAH-eh-wah-eh','ō = your (more than one thing). tō is for one thing.','Point at a classmate, but do not touch. Tō is your for one thing, and ō is your for more than one. Take a moment… (wait 3 seconds)… Kei te mamae ō waewae? Say it with me.','Echo'],
          ['Partner game: ask your partner if more than one body part is sore, and answer. It is all pretend. Then swap.','Kei~te|k mamae|n ō|k ___?|n Āe/Kāo,|w kei~te|k ___|n ōku|k ___.|n','kay teh mah-MAH-eh OR ___ · AH-eh / KAH-or, kay teh ___ OH-koo ___','Use waewae, taringa and ringa. Everything is pretend!','Turn to your partner. One of you asks Kei te mamae ō … ? and the other answers yes or no with a full sentence. It is all pretend. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['About someone else: Her head hurts. His ears hurt.','Kei~te|k mamae|n tōna|k* upoko.|n Kei~te|k mamae|n ōna|k* taringa.|n','kay teh mah-MAH-eh TOH-nah oo-POH-koh · kay teh mah-MAH-eh OH-nah tah-REE-ngah','tōna = his or her (one), ōna = his or her (more than one).','Point at the picture of a person, not at a student. Tōna is one, ōna is more than one. You know tōna from Term 2. Take a moment… (wait 3 seconds)… Kei te mamae tōna upoko. Say it with me.','Whole class'],
          ['Care for a friend: We will pray for Tama.','Ka|k karakia|n tātou|a mō~Tama.|p*','kah kah-RAH-kee-ah TAH-toh mor TAH-mah','Ka + the action + who + mō + the person. mō = for (Term 3).','Hand on heart. When a friend is hurting, we can pray for them. Nobody has to say anything out loud. Take a moment… (wait 3 seconds)… Ka karakia tātou mō Tama. Say it with me.','Echo'],
          ['Put it together: How are you? My legs hurt. Be strong. I will help.','Kei~te|k pēhea|q koe?|a Kei~te|k mamae|n ōku|k waewae.|n Kia~kaha.|w Ka|k āwhina|n ahau.|a','kay teh PEH-heh-ah KOH-eh. kay teh mah-MAH-eh OH-koo WAH-eh-wah-eh. KEE-ah KAH-hah. kah AH-fee-nah ah-HOW','Terms 1, 3 and 4 together.',null,'Whole class'],
          ['Say thank you: Thank you for your help.','Kia~ora|w mō~tō|k āwhina.|n','KEE-ah OR-ah mor TOR AH-fee-nah','Term 3 Week 9: Kia ora mō tō āwhina.','Hand on heart. When someone helps us, we say thank you. Say it with me.','Whole class'],
          ['Class chain: greet the next person, ask if their legs are sore, they answer, then say goodbye.','Tēnā~koe.|w Kei~te|k mamae|n ō|k waewae?|n Kāo,|w kei~te|k pai|q ōku|k waewae.|n Ka~kite!|w','TEH-nah KOH-eh. kay teh mah-MAH-eh OR WAH-eh-wah-eh. KAH-or, kay teh PIE OH-koo WAH-eh-wah-eh. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one and asks Kei te mamae ō waewae? and the next person answers. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Kei Te Mamae Ōku Waewae — My Legs Hurt',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Kei te pēhea koutou?','Hello, children! How are you all?','(opens her arms)','T1W2'],
          ['Hana','Kei te ngenge ahau, Kuia. Kei te mamae ōku waewae.','I am tired, Kuia. My legs hurt.','(rubs her own legs)'],
          ['Kuia Mere','Kei te mamae ō waewae, Hana? Noho mai.','Are your legs sore, Hana? Sit down.','(pats the seat beside her)','T3W8'],
          ['Tama','Kei te mamae ōku taringa, Kuia.','My ears hurt, Kuia.','(taps his own ears)'],
          ['Kuia Mere','Kei te mamae tō upoko?','Is your head sore?','(gently)'],
          ['Tama','Kāo, kei te pai tōku upoko.','No, my head is fine.','(shakes his head)'],
          ['Hana','Kei te mamae ōna taringa, Kuia.','His ears hurt, Kuia.','(points at Tama)'],
          ['Kuia Mere','Ka karakia tātou mō Tama.','We will pray for Tama.','(bows her head)'],
          ['Hana','Kia kaha, Tama!','Be strong, Tama!','(hand on heart)','T1W10'],
          ['Tama','Kei te pai ōku taringa!','My ears are fine!','(smiles)','T1W2'],
          ['Hana','Kia ora mō tō āwhina, Kuia!','Thank you for your help, Kuia!','(hands together)','T3W9'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God sees us when we hurt, and he cares. He asks us to notice too. When a friend or someone in our whānau is hurting, we can say a kind word, help and pray. That is God’s love in action, and that is Pānga.','T1W9'],
          ['Tama','Kia ora, Kuia. Ka kite!','Thank you, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘My legs hurt.’','Kei te mamae ōku waewae.'],['What does taringa mean?','Ear.'],['Choose the word: Kei te mamae ____ waewae. (my legs) (tōku / ōku)','ōku'],['Say in te reo: ‘Her ears hurt.’','Kei te mamae ōna taringa.'],['Stretch: say ‘His head hurts.’ then say ‘We will pray for Tama.’','Kei te mamae tōna upoko. Ka karakia tātou mō Tama.']],
        CE:['Using tōku for more than one, or leaving out Kei te','Not knowing that taringa means ear','Choosing tōku for more than one; use ōku for more than one','Using ōku or ahau for someone else; use ōna (more than one) or tōna (one)','Mixing up tōna and ōna, or leaving out Ka karakia tātou mō'],
        T:'T4 W3 Lesson B',
        LP:{title:'Kei te mamae ōku waewae — My legs hurt',val:'Pānga · Psalm 147:3',pat:['Kei te mamae ōku ________.','Kei te mamae ō ________?','Kei te mamae tōna / ōna ________.'],swap:'My: tōku (one) · ōku (more than one). Your: tō (one) · ō (more than one). Her / his: tōna (one) · ōna (more than one). Body: waewae · taringa · ringa · upoko · puku. Care: Kia kaha · Ka karakia tātou mō ___.'}
      }
    };

    addLessons({ '4.3.A': A, '4.3.B': B });
  }

  /* ──────── WEEK 4 · Creation & kaitiakitanga ──────── */
  {
    // tiaki, manu, ika, rākau, whenua, kurī, ngā and tērā are recalled (T2W9, T3W3, T3W9). New: ngeru, kiwi, kaitiakitanga (A); whāngai, kaitiaki (B).
    // kaitiakitanga is taught as an UNDERSTANDING word: it is a Māori idea of guardianship (rooted in whakapapa and place). We link it to caring for God’s world, and we do not claim it as our own.
    addGlossary({
      "ngeru":["cat","NGEH-roo",4,4],
      "kiwi":["kiwi (the native bird)","KEE-wee",4,4],
      "kaitiakitanga":["guardianship: caring for the land, the sea and living things","KYE-tee-ah-kee-TAH-ngah",4,4],
      "whāngai":["feed","FAH-ngye",4,4],
      "kaitiaki":["guardian / someone who looks after something","KYE-tee-ah-kee",4,4]
    });

    // ── Lesson A · Kei te tiaki ahau i te kurī — I am looking after the dog ──
    const A = {
      P: {
        t:4,
        w:4,
        l:'A',
        ch:'Kei~te|k tiaki|n* ahau|a i~te|k kurī.|n',
        sub:'God made the animals, the land and the sea. Today we name animals and say that we are looking after them.',
        say:'Kia ora everyone! Our pepeha told us where we come from, and today we look at the world around us, the world God made. Today we name some animals and learn how to say that we are looking after them: Kei te tiaki ahau i te kurī, I am looking after the dog. You already own most of this sentence: Kei te from Term 1, tiaki from Term 2, and kurī from Term 3. We also meet a big idea called kaitiakitanga, which is a Māori word for guardianship, looking after the land, the sea and everything that lives in them. We are learners here, so we listen carefully. Still no writing: listen, think and speak. Hold your hands out gently, as if you were looking after something precious.',
        pron:'ngeru = NGEH-roo · kiwi = KEE-wee · kurī = KOO-ree · tiaki = TEE-ah-kee · kaitiakitanga = KYE-tee-ah-kee-TAH-ngah · whenua = FEH-noo-ah',
        li:'name animals and say what we are looking after, using He … tēnei and Kei te tiaki ahau i te …, in te reo.',
        succ:['I can name an animal: He kurī tēnei. He ngeru tēnei. He kiwi tēnei.','I can say what I am looking after: Kei te tiaki ahau i te kurī.','I can ask and answer: Kei te tiaki koe i te ngeru? Āe, kei te tiaki ahau i te ngeru.'],
        wp:'God put people in the garden to work it and take care of it.',
        ref:'Genesis 2:15',
        mom:'God made the world and trusted us to look after it. When we feed a pet, keep our school tidy or care for a native bird, we are looking after something God loves. In te ao Māori this kind of guardianship is called kaitiakitanga, and we can learn from it. Looking after God’s world is one way we make a difference, and that is Pānga.',
        q:'What is one living thing or place that you can look after this week?',
        recall:[['How do you say: This is a tree.','He rākau tēnei.'],['How do you say: God made the sky.','Nā te Atua i hanga te rangi.'],['How do you say: I will help.','Ka āwhina ahau.']],
        rtag:'Terms 2, 3 and 4',
        rtxt:'Remember when… Terms 2, 3 and 4 (3 quick prompts)',
        refl:'Who or what can you look after tomorrow?',
        next:'Lesson B: Kei te whāngai ahau i te kurī (feeding, guardians and the three times)',
        vsay:'Say each word and the class echoes, with an action. Pat an imaginary dog for kurī, stroke an imaginary cat for ngeru, walk like a kiwi with a long beak for kiwi, flap for manu, swim for ika, make branches for rākau and pat the floor for whenua. For tiaki, cradle something precious in your arms. For kaitiakitanga, say the word slowly in chunks (kai-tia-ki-ta-nga) and explain it in English. Please use picture cards or soft toys, not real animals.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. The actors hold picture cards or soft toys and nobody needs a real animal. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: He first, then the animal, then tēnei. Prompt 3: i (not ki) before the thing being looked after.',
        xresc:'Common error: saying ki te instead of i te after tiaki. Say: i te goes before what you are looking after. Another common one: leaving out Kei te. Say: Kei te comes first because it is happening now.',
        xpron:'ngeru = NGEH-roo · kiwi = KEE-wee · tiaki = TEE-ah-kee · kaitiakitanga = KYE-tee-ah-kee-TAH-ngah',
        cur:cu4('Communication (naming animals, saying and asking what we are looking after, answering yes and no) · Language Knowledge (He ___ tēnei; Kei te tiaki ahau / koe / tātou i te ___; Āe / Kāo, kei te tiaki ahau i te ___) · Cultural Knowledge (looking after God’s world; kaitiakitanga as a Māori idea of guardianship, taught as an understanding word; the kiwi as a native taonga bird)','Recycles Term 1 Weeks 2, 6 and 10 (Kei te, Ka pai), Term 2 Weeks 1 and 9 (He … tēnei, tērā, manu, ika, rākau, whenua, tiaki), Term 3 Weeks 3 and 9 (kurī, Ka āwhina ahau) and Term 4 Week 3. ⚠ Cultural care: kaitiakitanga is a Māori concept rooted in whakapapa and place. We link it to our Christian call to look after creation, but we are learners, so please invite a local kaumātua, iwi representative or ranger to share. ⚠ Sensitivity: some students may have lost a pet or have no pet. Use picture cards and soft toys, and never ask about real animals at home in front of the class. Please also have a fluent speaker confirm Kei te tiaki ahau i te kurī and the description of kaitiakitanga.'),
        vr:valueRows('Genesis 2:15','God made the world and trusted us to look after it. When we feed a pet, keep our school tidy or care for a native bird, we are looking after something God loves. In te ao Māori this kind of guardianship is called kaitiakitanga, and we can learn from it. Looking after God’s world is one way we make a difference, and that is Pānga.','What is one living thing or place that you can look after this week?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. Gather picture cards or soft toys of a dog, a cat, a kiwi, a bird and a fish. Please do not bring real animals (allergies and nerves).','Be ready to explain kaitiakitanga in English in a few simple sentences: caring for the land, the sea and living things. It is a Māori idea, so say that we are learning from it and thank the people it comes from. If you can, invite a kaumātua or iwi guest to share.','Sensitivity: some students have lost a pet or do not have one. Keep it playful and never ask about real animals at home in front of the class.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles. Hand the actors picture cards to hold.'],
        three:'(1) <i>Kei te tiaki ahau i te kurī</i> = I am looking after the dog: Kei te + tiaki + who + <i>i te</i> + the thing. (2) <i>He ngeru tēnei</i> = this is a cat, <i>He kiwi tēnei</i> = this is a kiwi, the same pattern as Term 2. (3) <i>kaitiakitanga</i> is a Māori word for guardianship: looking after the land, the sea and living things.',
        diff:['Echo as a whole class and use the picture cards and actions for every word. Say only He kurī tēnei and Kei te tiaki ahau i te kurī at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer Kei te tiaki koe i te ngeru? with a partner, then say a short chat.','Add manu, ika and whenua to your own sentences, say tātou as well as ahau, explain kaitiakitanga in English and ask classmates what they are looking after.'],
        look:'Kei te first; i te (not ki te) before what is being looked after; tiaki pronounced TEE-ah-kee; ngeru with the ng as in singer; kind, gentle voices when talking about animals.',
        nx:'revisit i te after tiaki with students in Starting; add whāngai, kaitiaki, ngā and the three times in Lesson B.',
        rec:'Term 1 Weeks 2, 6 and 10 (Kei te, Ka pai), Term 2 Weeks 1 and 9 (He … tēnei, manu, ika, rākau, whenua, tiaki, Nā te Atua i hanga), Term 3 Weeks 3, 4 and 9 (kurī, Ka tiaki, Ka āwhina ahau) and Term 4 Week 3 (Kia kaha) are recalled in the warm-up, steps and drama. Lesson B adds whāngai, kaitiaki, ngā and the three times.'
      },
      D: {
        VOC:['kurī','ngeru','kiwi','manu','ika','rākau','tiaki','whenua','kaitiakitanga','tēnei'],
        STEPS:[
          ['Quick recap: This is a tree. God made the sky.','He|k rākau|n tēnei.|x Nā|k te~Atua|n i|k hanga|n te|k rangi.|n','heh RAH-kow TEH-neh-ee · NAH teh AH-too-ah ee HAH-ngah teh RAH-ngee','Term 2 Weeks 1 and 9: He … tēnei; Nā te Atua i hanga.',null,'Whole class'],
          ['You know kurī, dog. New word: ngeru means cat. How would you say: This is a dog. This is a cat.','He|k kurī|n tēnei.|x He|k ngeru|n* tēnei.|x','heh KOO-ree TEH-neh-ee · heh NGEH-roo TEH-neh-ee','He + the animal + tēnei. You know this pattern from Term 2.','Hold up the dog picture. You met kurī in Term 3. Now hold up the cat picture. Ngeru means cat, and the ng is soft, as in singer. Take a moment… (wait 3 seconds)… He kurī tēnei. He ngeru tēnei. Say them with me.','Echo'],
          ['New word: kiwi is our native bird. How would you say: This is a kiwi.','He|k kiwi|n* tēnei.|x','heh KEE-wee TEH-neh-ee','He + kiwi + tēnei. The kiwi is a treasured bird of Aotearoa.','Hold up the kiwi picture and walk your fingers like a kiwi with a long beak. The kiwi is a native bird that is found only in Aotearoa, and it is a treasure. Take a moment… (wait 3 seconds)… He kiwi tēnei. Say it with me.','Echo'],
          ['Over there: That is a bird. That is a fish.','He|k manu|n tērā.|x He|k ika|n tērā.|x','heh MAH-noo TEH-rah · heh EE-kah TEH-rah','tērā = that over there. You know manu and ika from Term 2.',null,'Whole class'],
          ['New idea: tiaki means look after. How would you say: I am looking after the dog.','Kei~te|k tiaki|n* ahau|a i~te|k kurī.|n','kay teh TEE-ah-kee ah-HOW ee teh KOO-ree','Kei te + tiaki + who + i te + the thing. Kei te says it is happening now.','Cradle the dog picture in your arms like something precious. Tiaki means look after or care for. You know Kei te from Term 1 and tiaki from Term 2. The little words i te go before the thing you are looking after. Take a moment… (wait 3 seconds)… Kei te tiaki ahau i te kurī. Say it with me.','Echo'],
          ['Swap the animal: I am looking after the cat.','Kei~te|k tiaki|n ahau|a i~te|k ngeru.|n*','kay teh TEE-ah-kee ah-HOW ee teh NGEH-roo','Same pattern: just swap the last word.','Hold up the cat picture. Say it with me.','Echo'],
          ['Swap the person: We are looking after the kiwi.','Kei~te|k tiaki|n tātou|a* i~te|k kiwi.|n','kay teh TEE-ah-kee TAH-toh ee teh KEE-wee','tātou = all of us, including you. You know tātou from Term 3.','Sweep your hand around the whole class. Tātou means all of us, including you. Take a moment… (wait 3 seconds)… Kei te tiaki tātou i te kiwi. Say it with me.','Whole class'],
          ['Ask someone: Are you looking after the cat?','Kei~te|k tiaki|n koe|a i~te|k ngeru?|n','kay teh TEE-ah-kee KOH-eh ee teh NGEH-roo','koe = you. Your voice goes up for a question.','Point at a classmate, but do not touch. Koe means you. Take a moment… (wait 3 seconds)… Kei te tiaki koe i te ngeru? Say it with me.','Echo'],
          ['Answer: Yes, I am looking after the cat. No, I am looking after the kiwi.','Āe,|w kei~te|k tiaki|n ahau|a i~te|k ngeru.|n Kāo,|w kei~te|k tiaki|n ahau|a i~te|k kiwi.|n','AH-eh, kay teh TEE-ah-kee ah-HOW ee teh NGEH-roo · KAH-or, kay teh TEE-ah-kee ah-HOW ee teh KEE-wee','Āe or Kāo, then the full sentence with the animal you are looking after.',null,'Whole class'],
          ['Partner game: use your picture cards. Ask your partner if they are looking after an animal, and they answer. Then swap.','Kei~te|k tiaki|n koe|a i~te|k ___?|n Āe/Kāo,|w kei~te|k tiaki|n ahau|a i~te|k ___.|n','kay teh TEE-ah-kee KOH-eh ee teh ___ · AH-eh / KAH-or, kay teh TEE-ah-kee ah-HOW ee teh ___','Use kurī, ngeru, kiwi, manu or ika.','Turn to your partner. One of you holds up a picture card and asks Kei te tiaki koe i te … ? and the other answers with a full sentence. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Big word: kaitiakitanga. Say it slowly.','Kaitiakitanga.|n*','KYE-tee-ah-kee-TAH-ngah','kaitiakitanga = looking after the land, the sea and living things.','Say it slowly in chunks, kai-tia-ki-ta-nga. Say the class echo, then explain in English: Kaitiakitanga is a Māori word for guardianship. It means looking after the land, the sea and everything that lives in them. We are learning from this idea, and we also know that God asked us to look after his world. Say it with me.','Echo'],
          ['How would you say: We are looking after the land.','Kei~te|k tiaki|n tātou|a i~te|k whenua.|n','kay teh TEE-ah-kee TAH-toh ee teh FEH-noo-ah','Same pattern with whenua (land). This is kaitiakitanga in action.','Pat the floor gently. Whenua means land. When we put rubbish in the bin, plant a tree or keep a stream clean, we are looking after the whenua. Take a moment… (wait 3 seconds)… Kei te tiaki tātou i te whenua. Say it with me.','Whole class'],
          ['Put it together: Hello. This is a kiwi. We are looking after the kiwi. Thank you for the kiwi.','Kia~ora.|w He|k kiwi|n tēnei.|x Kei~te|k tiaki|n tātou|a i~te|k kiwi.|n Kia~ora|w mō|k te|k kiwi.|n','KEE-ah OR-ah. heh KEE-wee TEH-neh-ee. kay teh TEE-ah-kee TAH-toh ee teh KEE-wee. KEE-ah OR-ah mor teh KEE-wee','Terms 1, 2 and 4 together.',null,'Whole class'],
          ['Class chain: greet the next person, ask if they are looking after the dog, they answer, then say goodbye.','Tēnā~koe.|w Kei~te|k tiaki|n koe|a i~te|k kurī?|n Āe,|w kei~te|k tiaki|n ahau|a i~te|k kurī.|n Ka~kite!|w','TEH-nah KOH-eh. kay teh TEE-ah-kee KOH-eh ee teh KOO-ree. AH-eh, kay teh TEE-ah-kee ah-HOW ee teh KOO-ree. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one and asks Kei te tiaki koe i te kurī? and the next person answers. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ngā Kaitiaki — The Guardians',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! He rā pai tēnei.','Hello, children! This is a good day.','(arms open wide)','T2W5'],
          ['Hana','Kia ora, Kaiako! He kurī tēnei.','Hello, teacher! This is a dog.','(holds up a dog picture card)'],
          ['Tama','He kiwi tēnei.','This is a kiwi.','(holds up a kiwi picture card)'],
          ['Kaiako Rose','Kei te tiaki koe i te kurī, Hana?','Are you looking after the dog, Hana?','(smiles)'],
          ['Hana','Āe, kei te tiaki ahau i te kurī.','Yes, I am looking after the dog.','(cradles the card)'],
          ['Kaiako Rose','Kei te tiaki koe i te ngeru, Tama?','Are you looking after the cat, Tama?','(looks at his card)'],
          ['Tama','Kāo, kei te tiaki ahau i te kiwi.','No, I am looking after the kiwi.','(walks his fingers like a kiwi)'],
          ['Hana','Kei te tiaki tātou i te whenua, Kaiako?','Are we looking after the land, teacher?','(pats the floor)'],
          ['Kaiako Rose','Āe! Kaitiakitanga! Ka pai tō mahi, tamariki.','Yes! Kaitiakitanga! Good work, children.','(claps gently)','T1W10'],
          ['Tama','Ka tiaki ahau i te kiwi āpōpō.','I will look after the kiwi tomorrow.','(hand on heart)','T3W4'],
          ['Hana','Kia ora mō te whenua, Kaiako.','Thank you for the land, teacher.','(hands together)','T2W9'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God made the land, the sea and every living thing, and he trusted us to look after them. When we care for animals, plants and places, we say thank you to him. In te ao Māori, this kind of guardianship is called kaitiakitanga, and we can learn from it. That is where your Pānga, your impact, begins.','T1W9'],
          ['Tama','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘This is a cat.’','He ngeru tēnei.'],['What does tiaki mean?','Look after / care for.'],['Choose the word: Kei te tiaki ahau ____ te kurī. (I am looking after the dog) (i / ki)','i'],['Say in te reo: ‘Are you looking after the cat? Yes, I am looking after the cat.’','Kei te tiaki koe i te ngeru? Āe, kei te tiaki ahau i te ngeru.'],['Stretch: say ‘We are looking after the land.’ then say in English what kaitiakitanga means.','Kei te tiaki tātou i te whenua. Kaitiakitanga = guardianship: looking after the land, the sea and living things.']],
        CE:['Leaving out He, or putting tēnei before the animal','Not knowing that tiaki means look after, or mixing it up with kai (eat)','Using ki te instead of i te; i te goes before what you are looking after','Leaving out Āe, or saying koe instead of ahau in the answer','Leaving out i te before whenua, or not being able to explain kaitiakitanga'],
        T:'T4 W4 Lesson A',
        LP:{title:'Kei te tiaki ahau i te kurī — I am looking after the dog',val:'Pānga · Genesis 2:15',pat:['He ________ tēnei.','Kei te tiaki ahau i te ________.','Kei te tiaki koe i te ________?'],swap:'Animals: kurī · ngeru · kiwi · manu · ika. People: ahau (I) · koe (you) · tātou (we). Places: whenua · rākau. Big idea: kaitiakitanga (looking after God’s world).'}
      }
    };

    // ── Lesson B · Kei te whāngai ahau i te kurī — I am feeding the dog ──
    const B = {
      P: {
        t:4,
        w:4,
        l:'B',
        ch:'Kei~te|k whāngai|n* ahau|a i~te|k kurī.|n',
        sub:'Today we feed and look after animals, say we are guardians, and say when we do it: yesterday, now and tomorrow.',
        say:'Kia ora everyone! Last lesson we said Kei te tiaki ahau i te kurī, I am looking after the dog. Today we add two new words. Whāngai means feed, so we can say Kei te whāngai ahau i te kurī, I am feeding the dog. Kaitiaki means guardian, someone who looks after something, so we can say He kaitiaki ahau, I am a guardian. We also say when we do things, using the three times from Term 3: I for yesterday, Kei te for now and Ka for tomorrow. And we say more than one animal with ngā, which you know from Term 3. Remember that we use picture cards or soft toys, not real animals. Still no writing: listen, think and speak. Mime feeding a pet.',
        pron:'whāngai = FAH-ngye · kaitiaki = KYE-tee-ah-kee · ngā = NGAH · ināianei = ee-NAH-ee-ah-nay · āpōpō = AH-por-por · inanahi = ee-NAH-nah-hee',
        li:'say that we feed and look after animals, say we are guardians and say when, using whāngai, kaitiaki, ngā and the three times, in te reo.',
        succ:['I can say what I am feeding or looking after: Kei te whāngai ahau i te kurī.','I can say I am a guardian: He kaitiaki ahau. He kaitiaki tātou.','I can say the three times: I tiaki ahau … inanahi. Kei te tiaki ahau … ināianei. Ka tiaki ahau … āpōpō.'],
        wp:'A good person takes care of their animals.',
        ref:'Proverbs 12:10',
        mom:'Kind people notice what their animals need: food, water, a safe place and gentle hands. God notices what we need in the same way. When we look after animals, plants and places faithfully, day after day, we are being good guardians of God’s world, and that is Pānga.',
        q:'What does an animal or a place near you need this week, and how can you help give it?',
        recall:[['How do you say: This is a cat.','He ngeru tēnei.'],['How do you say: I am looking after the dog.','Kei te tiaki ahau i te kurī.'],['How do you say: Are you looking after the kiwi? Yes.','Kei te tiaki koe i te kiwi? Āe, kei te tiaki ahau i te kiwi.'],['How do you say: Where is the bird? It is on the tree.','Kei hea te manu? Kei runga i te rākau.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'What is one small thing you will do tomorrow to look after something?',
        next:'Week 5: Feelings and prayer (Kei te mihi ahau ki te Atua)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: whāngai (feed, FAH-ngye) and kaitiaki (guardian, KYE-tee-ah-kee). Mime feeding a pet for whāngai, and stand tall with your arms folded like a gentle guard for kaitiaki. Remind the class that a kaitiaki is the person and kaitiakitanga is the big idea of looking after.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. The actors hold picture cards or soft toys. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: Kei te, then whāngai, then ahau, then i te. Prompt 3: ngā for more than one thing.',
        xresc:'Common error: te for more than one thing (i te manu for birds). Say: te is for one thing and ngā is for more than one. Another common one: mixing the three times. Say: I = finished, Kei te = now, Ka = will.',
        xpron:'whāngai = FAH-ngye · kaitiaki = KYE-tee-ah-kee · ngā = NGAH · āpōpō = AH-por-por',
        cur:cu4('Communication (saying we feed and look after animals, saying we are guardians, saying when we do something) · Language Knowledge (Kei te whāngai ahau i te ___; He kaitiaki ahau / tātou; ngā for more than one; I / Kei te / Ka tiaki ahau i te ___) · Cultural Knowledge (being good guardians of God’s world; kaitiaki and kaitiakitanga as Māori ideas of guardianship; caring in prayer)','Recycles Lesson A, Term 1 Weeks 6 and 10, Term 2 Weeks 1, 2 and 9 (He … tēnei, Kei hea, manu, rākau), Term 3 Weeks 3, 4, 5 and 9 (I, Ka, inanahi, āpōpō, ngā, Ka pai tō mahi) and Term 4 Week 3 (Ka karakia tātou mō …). ⚠ Sensitivity: some students have lost a pet or have none. Use picture cards and soft toys, and never ask about real animals at home in front of the class. Please have a fluent speaker confirm Kei te whāngai ahau i te kurī, He kaitiaki tātou, and Kei te tiaki ahau i ngā manu.'),
        vr:valueRows('Proverbs 12:10','Kind people notice what their animals need: food, water, a safe place and gentle hands. God notices what we need in the same way. When we look after animals, plants and places faithfully, day after day, we are being good guardians of God’s world, and that is Pānga.','What does an animal or a place near you need this week, and how can you help give it?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add whāngai (feed) and kaitiaki (guardian) as the two stretch words.','Have picture cards or soft toys again (dog, cat, kiwi, bird, fish). Please do not bring real animals.','Practise the actions: one finger for te (one thing), open hands for ngā (more than one), a thumb over your shoulder for yesterday, a finger down for now, a point ahead for tomorrow.','The short prayer in step 11 is a kind invitation, never a requirement to pray out loud. Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.'],
        three:'(1) <i>whāngai</i> = feed: <i>Kei te whāngai ahau i te kurī</i> = I am feeding the dog. (2) <i>He kaitiaki ahau</i> = I am a guardian; <i>ngā</i> = the (more than one): <i>Kei te tiaki ahau i ngā manu</i> = I am looking after the birds. (3) The three times: <i>I tiaki ahau … inanahi</i> (finished), <i>Kei te tiaki ahau … ināianei</i> (now), <i>Ka tiaki ahau … āpōpō</i> (will).',
        diff:['Echo as a whole class and use the picture cards and actions for every word. Say only Kei te whāngai ahau i te kurī at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer Kei te whāngai koe i te … ? with a partner, and say all three times with tiaki.','Add whāngai and kaitiaki to your own sentences, say ia and tātou, use ngā for more than one, explain kaitiaki in English and ask classmates what they will look after tomorrow.'],
        look:'Kei te, whāngai (FAH-ngye) and i te in the right order; ngā (not te) for more than one; I, Kei te and Ka used for the right time; gentle, caring voices.',
        nx:'revisit ngā and the three times with students in Starting; move to Week 5 (Feelings and prayer).',
        rec:'Lesson A (He … tēnei, Kei te tiaki ahau i te …), Term 1 Weeks 6 and 10 (Kei te pīrangi, Ka pai), Term 2 Weeks 1, 2 and 9 (manu, rākau, Kei hea, Nā te Atua i hanga), Term 3 Weeks 3, 4, 5 and 9 (I, Ka, inanahi, āpōpō, ngā, Ka pai tō mahi) and Term 4 Week 3 (Ka karakia tātou mō …) are recalled in the warm-up, steps and drama. Week 5 starts a new theme (feelings and prayer).'
      },
      D: {
        VOC:[...A.D.VOC,'whāngai','kaitiaki'],
        STEPS:[
          ['Quick recap: I am looking after the dog. I am looking after the cat.','Kei~te|k tiaki|n ahau|a i~te|k kurī.|n Kei~te|k tiaki|n ahau|a i~te|k ngeru.|n','kay teh TEE-ah-kee ah-HOW ee teh KOO-ree · kay teh TEE-ah-kee ah-HOW ee teh NGEH-roo','Lesson A: Kei te tiaki + who + i te + the thing.',null,'Whole class'],
          ['Quick recap: Are you looking after the kiwi? Yes, I am.','Kei~te|k tiaki|n koe|a i~te|k kiwi?|n Āe,|w kei~te|k tiaki|n ahau|a i~te|k kiwi.|n','kay teh TEE-ah-kee KOH-eh ee teh KEE-wee · AH-eh, kay teh TEE-ah-kee ah-HOW ee teh KEE-wee','Lesson A: the question and the answer.',null,'Whole class'],
          ['New word: whāngai means feed. How would you say: I am feeding the dog.','Kei~te|k whāngai|n* ahau|a i~te|k kurī.|n','kay teh FAH-ngye ah-HOW ee teh KOO-ree','Same frame as tiaki: Kei te + whāngai + who + i te + the thing. wh sounds like f.','Mime feeding a pet. Whāngai means feed, and the wh sounds like f. It is the same pattern as tiaki. Take a moment… (wait 3 seconds)… Kei te whāngai ahau i te kurī. Say it with me.','Echo'],
          ['Swap the animal and the person: I am feeding the cat. We are feeding the fish.','Kei~te|k whāngai|n ahau|a i~te|k ngeru.|n Kei~te|k whāngai|n tātou|a i~te|k ika.|n','kay teh FAH-ngye ah-HOW ee teh NGEH-roo · kay teh FAH-ngye TAH-toh ee teh EE-kah','Same pattern: swap the person or the animal.','Hold up the cat picture, then the fish picture. Say them with me.','Whole class'],
          ['About someone else: Is she feeding the dog? Yes, she is feeding the dog.','Kei~te|k whāngai|n ia|a* i~te|k kurī?|n Āe,|w kei~te|k whāngai|n ia|a i~te|k kurī.|n','kay teh FAH-ngye EE-ah ee teh KOO-ree · AH-eh, kay teh FAH-ngye EE-ah ee teh KOO-ree','ia = he or she. You know ia from Term 1.','Point at the picture of a girl, not at a student. Ia means she or he. Take a moment… (wait 3 seconds)… Kei te whāngai ia i te kurī? Say it with me.','Echo'],
          ['More than one: I am looking after the birds.','Kei~te|k tiaki|n ahau|a i|k ngā|k* manu.|n','kay teh TEE-ah-kee ah-HOW ee NGAH MAH-noo','te = the (one thing). ngā = the (more than one). You met ngā in Term 3.','Hold up one finger for te, and open both hands for ngā. You met ngā in Term 3 with ngā pukapuka. One bird is te manu, and more than one is ngā manu. Take a moment… (wait 3 seconds)… Kei te tiaki ahau i ngā manu. Say it with me.','Echo'],
          ['New word: kaitiaki means guardian. How would you say: I am a guardian. We are guardians.','He|k kaitiaki|n* ahau.|a He|k kaitiaki|n tātou.|a','heh KYE-tee-ah-kee ah-HOW · heh KYE-tee-ah-kee TAH-toh','He says what kind of person or thing. A kaitiaki is someone who looks after something.','Stand tall with your arms folded like a gentle guard. A kaitiaki is a guardian, someone who looks after something. Last lesson’s big word, kaitiakitanga, is the job of a kaitiaki. Take a moment… (wait 3 seconds)… He kaitiaki ahau. He kaitiaki tātou. Say them with me.','Echo'],
          ['Three times: I looked after the dog yesterday. I am looking after the dog now. I will look after the dog tomorrow.','I|k tiaki|n ahau|a i~te|k kurī|n inanahi.|q Kei~te|k tiaki|n ahau|a i~te|k kurī|n ināianei.|q Ka|k tiaki|n ahau|a i~te|k kurī|n āpōpō.|q','ee TEE-ah-kee ah-HOW ee teh KOO-ree ee-NAH-nah-hee · kay teh TEE-ah-kee ah-HOW ee teh KOO-ree ee-NAH-ah-ee-ah-nay · kah TEE-ah-kee ah-HOW ee teh KOO-ree AH-por-por','I = finished, Kei te = now, Ka = will. The thing stays the same; only the first word and the time word change.','Use your hands: thumb over your shoulder for yesterday, finger down for now, point ahead for tomorrow. You know I and Ka from Term 3. Only the first word and the time word change. Say them with me, one at a time.','Gesture'],
          ['Partner game: use your picture cards. Ask your partner if they are feeding an animal, they answer, and then they say what they will look after tomorrow. Then swap.','Kei~te|k whāngai|n koe|a i~te|k ___?|n Āe,|w kei~te|k whāngai|n ahau|a i~te|k ___.|n Ka|k tiaki|n ahau|a i~te|k ___|n āpōpō.|q','kay teh FAH-ngye KOH-eh ee teh ___ · AH-eh, kay teh FAH-ngye ah-HOW ee teh ___ · kah TEE-ah-kee ah-HOW ee teh ___ AH-por-por','Use kurī, ngeru, kiwi, manu or ika.','Turn to your partner. One of you holds up a card and asks Kei te whāngai koe i te … ? and the other answers, then says what they will look after tomorrow. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Say well done and thank you: Good work, guardian! Thank you for the birds.','Ka~pai|w tō|k mahi,|n kaitiaki!|n Kia~ora|w mō|k ngā|k manu.|n','kah PIE TOR MAH-hee, KYE-tee-ah-kee · KEE-ah OR-ah mor NGAH MAH-noo','Term 3 Week 9: Ka pai tō mahi. Kia ora mō … says thank you for something.','Hand on heart. When a friend looks after something well, we say Ka pai tō mahi, good work. And we thank God for the animals. Say it with me.','Whole class'],
          ['Care in prayer: We will pray for the birds.','Ka|k karakia|n tātou|a mō|k ngā|k manu.|n','kah kah-RAH-kee-ah TAH-toh mor NGAH MAH-noo','Term 4 Week 3: Ka karakia tātou mō …','Hand on heart. Last time we prayed for a friend. We can pray for animals too. Nobody has to say anything out loud. Take a moment… (wait 3 seconds)… Ka karakia tātou mō ngā manu. Say it with me.','Echo'],
          ['Put it together: Hello. I am a guardian. I am feeding the cat. I will look after the birds tomorrow.','Kia~ora.|w He|k kaitiaki|n ahau.|a Kei~te|k whāngai|n ahau|a i~te|k ngeru.|n Ka|k tiaki|n ahau|a i|k ngā|k manu|n āpōpō.|q','KEE-ah OR-ah. heh KYE-tee-ah-kee ah-HOW. kay teh FAH-ngye ah-HOW ee teh NGEH-roo. kah TEE-ah-kee ah-HOW ee NGAH MAH-noo AH-por-por','Terms 1, 3 and 4 together.',null,'Whole class'],
          ['Class chain: greet the next person, ask if they are feeding the dog, they answer, then say goodbye.','Tēnā~koe.|w Kei~te|k whāngai|n koe|a i~te|k kurī?|n Āe,|w kei~te|k whāngai|n ahau|a i~te|k kurī.|n Ka~kite!|w','TEH-nah KOH-eh. kay teh FAH-ngye KOH-eh ee teh KOO-ree. AH-eh, kay teh FAH-ngye ah-HOW ee teh KOO-ree. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one and asks Kei te whāngai koe i te kurī? and the next person answers. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Kurī a Kuia — Kuia’s Dog',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Haere mai!','Hello, children! Come in!','(opens her arms)','T3W8'],
          ['Hana','Kia ora, Kuia! Kei te whāngai ahau i te kurī.','Hello, Kuia! I am feeding the dog.','(mimes feeding a dog picture card)'],
          ['Kuia Mere','Ka pai! He kurī pai tērā.','Good! That is a good dog.','(smiles)','T2W4'],
          ['Tama','Kei te whāngai ahau i te ngeru, Kuia.','I am feeding the cat, Kuia.','(holds up a cat picture card)'],
          ['Kuia Mere','Kei te tiaki koe i ngā manu, Tama?','Are you looking after the birds, Tama?','(looks kindly)'],
          ['Tama','Āe, kei te tiaki ahau i ngā manu.','Yes, I am looking after the birds.','(flaps his arms)'],
          ['Hana','He kaitiaki tātou, Kuia!','We are guardians, Kuia!','(stands tall)'],
          ['Kuia Mere','Āe! He kaitiaki koutou. Ka pai tō mahi!','Yes! You are guardians. Good work!','(claps gently)','T3W9'],
          ['Tama','Ka tiaki ahau i te ngeru āpōpō.','I will look after the cat tomorrow.','(points ahead)','T3W4'],
          ['Hana','I tiaki ahau i te kurī inanahi.','I looked after the dog yesterday.','(thumb over her shoulder)','T3W3'],
          ['Tama','Kei te pīrangi ahau ki te tiaki i te kurī.','I want to look after the dog.','(hand on heart)','T1W6'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God notices what every creature needs, and he notices what we need too. When we feed a pet, look after a bird or care for a place, we show his kindness in action. Being a good guardian of his world is one way you make a difference, and that is Pānga.','T1W9'],
          ['Hana','Kia ora, Kuia. Ka kite!','Thank you, Kuia. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I am feeding the dog.’','Kei te whāngai ahau i te kurī.'],['What does kaitiaki mean?','Guardian (someone who looks after something).'],['Choose the word: Kei te tiaki ahau i ____ manu. (I am looking after the birds) (te / ngā)','ngā'],['Say in te reo: ‘I am a guardian. I will look after the cat tomorrow.’','He kaitiaki ahau. Ka tiaki ahau i te ngeru āpōpō.'],['Stretch: say ‘I looked after the dog yesterday.’ then ask your partner if they are feeding the dog.','I tiaki ahau i te kurī inanahi. Kei te whāngai koe i te kurī?']],
        CE:['Leaving out Kei te or i te, or mixing up whāngai with kai (eat)','Not knowing that kaitiaki means guardian, or mixing it up with kaitiakitanga','Using te for more than one thing; ngā is for more than one','Leaving out He, or using Ka for something that has not happened yet','Mixing up I (finished), Kei te (now) and Ka (will), or leaving out i te'],
        T:'T4 W4 Lesson B',
        LP:{title:'Kei te whāngai ahau i te kurī — I am feeding the dog',val:'Pānga · Proverbs 12:10',pat:['Kei te whāngai ahau i te ________.','He kaitiaki ________.','I / Kei te / Ka tiaki ahau i te ________.'],swap:'Care: tiaki (look after) · whāngai (feed). People: ahau · koe · ia · tātou. More than one: ngā manu. Guardian: He kaitiaki ahau. Times: inanahi · ināianei · āpōpō. Prayer: Ka karakia tātou mō ngā manu.'}
      }
    };

    addLessons({ '4.4.A': A, '4.4.B': B });
  }

  /* ──────── WEEK 5 · Feelings & prayer ──────── */
  {
    // Feelings from T1W2 (pai, harikoa, ngenge, pōuri, hōhā, mauiui) and whakamā (T3W8?) are recalled. mihi, karakia, Atua, mō, āwhina and Kia kaha are recalled.
    // New: riri, mataku, māharahara (A); hīkaka, māia (B). Prayer sentences are kept very simple and are flagged for a fluent speaker.
    addGlossary({
      "riri":["angry / cross","REE-ree",5,4],
      "mataku":["scared / afraid","MAH-tah-koo",5,4],
      "māharahara":["worried","MAH-hah-RAH-hah-rah",5,4],
      "hīkaka":["excited / eager","HEE-kah-kah",5,4],
      "māia":["brave","MAH-ee-ah",5,4]
    });

    // ── Lesson A · Kei te mataku ahau — I am scared ──
    const A = {
      P: {
        t:4,
        w:5,
        l:'A',
        ch:'Kei~te|k mataku|q* ahau.|a',
        sub:'God knows how we feel. Today we learn more feelings words, ask how someone is and say that we will pray.',
        say:'Kia ora everyone! Last week we looked after God’s world. This week we look after something very important: our hearts. Today we learn three new feelings words. Riri means angry, mataku means scared, and māharahara means worried. You already know the sentence: Kei te pēhea koe? Kei te harikoa ahau, from Term 1. All feelings are okay, and God knows every one of them. At the end we say a very short prayer sentence: Ka karakia ahau ki te Atua, I will pray to God, and we say thank you to him. Remember, today is pretend and practice: nobody has to share a real worry out loud. Still no writing: listen, think and speak. Show each feeling on your face, kindly.',
        pron:'riri = REE-ree · mataku = MAH-tah-koo · māharahara = MAH-hah-RAH-hah-rah · pēhea = PEH-heh-ah · karakia = kah-RAH-kee-ah · mihi = MEE-hee',
        li:'say how we feel with new feelings words, ask how someone is, and say we will pray to God, using Kei te mataku ahau and Ka karakia ahau ki te Atua, in te reo.',
        succ:['I can say a feeling: Kei te riri ahau. Kei te mataku ahau. Kei te māharahara ahau.','I can ask and answer: Kei te pēhea koe? Kei te māharahara koe? Āe / Kāo.','I can say I will pray: Ka karakia ahau ki te Atua. Kei te mihi ahau ki te Atua.'],
        wp:'Do not worry about anything. Pray about everything.',
        ref:'Philippians 4:6',
        mom:'God knows how we feel, even when we cannot find the words. He invites us to bring our worries and our thanks to him. When we notice how a friend is feeling and we care, we are making a difference to them, and that is Pānga.',
        q:'Who could you ask how they are feeling this week?',
        recall:[['How do you say: How are you? I am happy.','Kei te pēhea koe? Kei te harikoa ahau.'],['How do you say: I am looking after the cat.','Kei te tiaki ahau i te ngeru.'],['How do you say: Be strong. I will help.','Kia kaha. Ka āwhina ahau.']],
        rtag:'Terms 1, 3 and 4',
        rtxt:'Remember when… Terms 1, 3 and 4 (3 quick prompts)',
        refl:'How are you feeling right now, and who could you tell?',
        next:'Lesson B: Kei te hīkaka ahau (excited, brave and praying for each other)',
        vsay:'Say each word and the class echoes, with a gentle face for each feeling: cross arms and a frown for riri, wide eyes and hands up for mataku, a wrinkled forehead for māharahara, a big smile for harikoa, a droopy face for pōuri, a yawn for ngenge. For karakia, put your hands together. For Atua, look up. For mihi, put your hand on your heart. Remind the class that all feelings are okay and that we are only practising.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. The actors only pretend to feel these things. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Kei te, then the feeling, then ahau. Prompt 3: riri (angry) and mataku (scared) are not mixed up.',
        xresc:'Common error: leaving out Kei te, or putting ahau before the feeling. Say: Kei te comes first, then the feeling, then who. Another common one: mixing up riri and mataku. Say: riri is cross, mataku is scared.',
        xpron:'riri = REE-ree · mataku = MAH-tah-koo · māharahara = MAH-hah-RAH-hah-rah · karakia = kah-RAH-kee-ah',
        cur:cu4('Communication (saying and asking how someone feels, answering yes and no, saying we will pray and give thanks) · Language Knowledge (Kei te pēhea koe? Kei te ___ ahau / koe / ia; Āe / Kāo, kei te pai ahau; Ka karakia ahau ki te Atua; Kei te mihi ahau ki te Atua) · Cultural Knowledge (naming feelings kindly; bringing our worries and thanks to God; karakia as part of the school day)','Recycles Term 1 Weeks 2 and 10 (Kei te pēhea koe?, the feelings words, Kia kaha), Term 3 Weeks 4 and 9 (Ka, Ka āwhina ahau) and Term 4 Weeks 3 and 4 (Ka karakia, tiaki). ⚠ Wellbeing care: some students may be carrying real worries or grief. Keep it playful and pretend, never ask a student to share a real worry in front of the class, and follow the school’s pastoral process if a student seems distressed. The prayer step is an invitation, never a requirement. Please also have a fluent speaker confirm Kei te mihi ahau ki te Atua and Ka karakia ahau ki te Atua.'),
        vr:valueRows('Philippians 4:6','God knows how we feel, even when we cannot find the words. He invites us to bring our worries and our thanks to him. When we notice how a friend is feeling and we care, we are making a difference to them, and that is Pānga.','Who could you ask how they are feeling this week?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. Make or find a set of simple face cards (angry, scared, worried, happy, sad, tired) for the partner game.','Wellbeing care: all the feelings today are pretend and practice. Do not ask a student to share a real worry in front of the class, and follow the school’s pastoral process if someone seems upset.','The prayer step (Ka karakia ahau ki te Atua) is a kind invitation. Nobody has to pray out loud, and some families may keep to their own practices. Please check the sentences with your school’s te reo lead.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles. Practise the faces for each feeling.'],
        three:'(1) <i>Kei te mataku ahau</i> = I am scared: Kei te + the feeling + who. New feelings: <i>riri</i> (angry), <i>mataku</i> (scared), <i>māharahara</i> (worried). (2) <i>Kei te māharahara koe?</i> = are you worried? <i>Āe, kei te māharahara ahau.</i> / <i>Kāo, kei te pai ahau.</i> (3) <i>Ka karakia ahau ki te Atua</i> = I will pray to God; <i>Kei te mihi ahau ki te Atua</i> = I am thanking God.',
        diff:['Echo as a whole class and use the face for every word. Say only Kei te mataku ahau and Kei te harikoa ahau at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer Kei te māharahara koe? with a partner, then say a short chat.','Add ngenge, pōuri and hōhā to your own sentences, say ia as well as ahau and koe, explain in English what riri and mataku mean and invite a classmate to say the prayer line.'],
        look:'Kei te first; the feeling in the middle; riri and mataku not mixed up; māharahara pronounced MAH-hah-RAH-hah-rah; kind faces and gentle voices when classmates pretend to feel something.',
        nx:'revisit riri and mataku with students in Starting; add hīkaka, māia and praying for friends in Lesson B.',
        rec:'Term 1 Weeks 2 and 10 (Kei te pēhea koe?, feelings, Kia kaha), Term 3 Weeks 4 and 9 (Ka, Ka āwhina ahau) and Term 4 Weeks 3 and 4 (Ka karakia mō …, tiaki) are recalled in the warm-up, steps and drama. Lesson B adds hīkaka, māia and Kei te karakia ahau ki te Atua.'
      },
      D: {
        VOC:['riri','mataku','māharahara','harikoa','pōuri','ngenge','pēhea','mihi','karakia','Atua'],
        STEPS:[
          ['Quick recap: How are you? I am happy. I am sad.','Kei~te|k pēhea|q koe?|a Kei~te|k harikoa|q ahau.|a Kei~te|k pōuri|q ahau.|a','kay teh PEH-heh-ah KOH-eh · kay teh HAH-ree-KOR-ah ah-HOW · kay teh POH-oo-ree ah-HOW','Term 1 Week 2: Kei te + feeling + who.',null,'Whole class'],
          ['New word: riri means angry. How would you say: I am angry.','Kei~te|k riri|q* ahau.|a','kay teh REE-ree ah-HOW','Kei te + the feeling + who. riri = angry or cross.','Cross your arms and make a pretend cross face, kindly. Riri means angry or cross. It is the same pattern you know from Term 1. Take a moment… (wait 3 seconds)… Kei te riri ahau. Say it with me.','Echo'],
          ['New word: mataku means scared. How would you say: I am scared.','Kei~te|k mataku|q* ahau.|a','kay teh MAH-tah-koo ah-HOW','Same pattern, new feeling word.','Make wide eyes and hold your hands up. Mataku means scared or afraid. Take a moment… (wait 3 seconds)… Kei te mataku ahau. Say it with me.','Echo'],
          ['New word: māharahara means worried. How would you say: I am worried.','Kei~te|k māharahara|q* ahau.|a','kay teh MAH-hah-RAH-hah-rah ah-HOW','Same pattern. Say it in chunks: mā-ha-ra-ha-ra.','Wrinkle your forehead gently. Māharahara means worried. Say it in chunks: mā, ha, ra, ha, ra. Take a moment… (wait 3 seconds)… Kei te māharahara ahau. Say it with me.','Echo'],
          ['Ask someone: Are you worried?','Kei~te|k māharahara|q koe?|a*','kay teh MAH-hah-RAH-hah-rah KOH-eh','koe = you. Your voice goes up for a question.','Point at a classmate, but do not touch. Koe means you. Take a moment… (wait 3 seconds)… Kei te māharahara koe? Say it with me.','Echo'],
          ['Answer: Yes, I am worried. No, I am well.','Āe,|w kei~te|k māharahara|q ahau.|a Kāo,|w kei~te|k pai|q ahau.|a','AH-eh, kay teh MAH-hah-RAH-hah-rah ah-HOW · KAH-or, kay teh PIE ah-HOW','Āe or Kāo, then the full sentence. You know pai (well) from Term 1.',null,'Whole class'],
          ['About someone else: She is angry. He is scared.','Kei~te|k riri|q ia.|a* Kei~te|k mataku|q ia.|a*','kay teh REE-ree EE-ah · kay teh MAH-tah-koo EE-ah','ia = he or she. You know ia from Term 1.','Point at a picture of a person, not at a student. Ia means he or she. Take a moment… (wait 3 seconds)… Kei te riri ia. Kei te mataku ia. Say them with me.','Whole class'],
          ['Partner game: use your face cards. Ask how your partner is, and they answer with the feeling on their card. Then swap. It is all pretend.','Kei~te|k pēhea|q koe?|a Kei~te|k ___|q ahau.|a','kay teh PEH-heh-ah KOH-eh · kay teh ___ ah-HOW','Use riri, mataku, māharahara, harikoa, pōuri or ngenge. Everything is pretend!','Turn to your partner. One of you holds up a face card and the other asks Kei te pēhea koe? and answers with the feeling on the card. It is all pretend. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Care for others: Be strong. I will help.','Kia~kaha.|w Ka|k āwhina|n ahau.|a','KEE-ah KAH-hah. kah AH-fee-nah ah-HOW','Term 4 Week 3: Kia kaha, Ka āwhina ahau.','Put your hand on your heart. When someone is scared or worried, we notice and we help. Say it with me.','Whole class'],
          ['New idea: When I am worried, I will pray to God.','Ka|k karakia|n ahau|a ki~te|k Atua.|n*','kah kah-RAH-kee-ah ah-HOW kee teh AH-too-ah','Ka = will. ki te Atua = to God. You know karakia from Term 3.','Put your hands together. Ka means will. Karakia means pray. Ki te Atua means to God. Nobody has to say anything out loud. Take a moment… (wait 3 seconds)… Ka karakia ahau ki te Atua. Say it with me.','Echo'],
          ['Say thank you to God: I am thanking God.','Kei~te|k mihi|n* ahau|a ki~te|k Atua.|n','kay teh MEE-hee ah-HOW kee teh AH-too-ah','mihi = thank or acknowledge. You know mihi from Term 1.','Hand on heart, look up. Mihi means to thank or greet. You know it from Term 1. Take a moment… (wait 3 seconds)… Kei te mihi ahau ki te Atua. Say it with me.','Echo'],
          ['Put it together: Hello. How are you? I am worried. I will pray to God.','Kia~ora.|w Kei~te|k pēhea|q koe?|a Kei~te|k māharahara|q ahau.|a Ka|k karakia|n ahau|a ki~te|k Atua.|n','KEE-ah OR-ah. kay teh PEH-heh-ah KOH-eh. kay teh MAH-hah-RAH-hah-rah ah-HOW. kah kah-RAH-kee-ah ah-HOW kee teh AH-too-ah','Terms 1, 3 and 4 together.',null,'Whole class'],
          ['Class chain: greet the next person, ask how they are, they answer with a feeling, you say be strong, then say goodbye.','Tēnā~koe.|w Kei~te|k pēhea|q koe?|a Kei~te|k ___|q ahau.|a Kia~kaha!|w Ka~kite!|w','TEH-nah KOH-eh. kay teh PEH-heh-ah KOH-eh. kay teh ___ ah-HOW. KEE-ah KAH-hah. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one and asks Kei te pēhea koe? and the next person answers with any feeling they know. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Kei Te Pēhea Koe? — How Are You?',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te pēhea koutou?','Hello, children! How are you all?','(waves to the class)','T1W2'],
          ['Hana','Kei te harikoa ahau, Kaiako!','I am happy, teacher!','(smiles)','T1W2'],
          ['Tama','Kei te māharahara ahau.','I am worried.','(wrinkles his forehead)'],
          ['Kaiako Rose','Kei te māharahara koe, Tama?','Are you worried, Tama?','(looks kindly)'],
          ['Tama','Āe, kei te mataku ahau.','Yes, I am scared.','(holds his hands up)'],
          ['Hana','Kia kaha, Tama! Ka āwhina ahau.','Be strong, Tama! I will help.','(hand on heart)','T4W3'],
          ['Kaiako Rose','Ka karakia tātou ki te Atua.','We will pray to God.','(bows her head)'],
          ['Tama','Kei te pai ahau ināianei.','I am well now.','(breathes out and smiles)','T1W2'],
          ['Hana','Ka pai, Tama!','Good, Tama!','(claps gently)','T1W10'],
          ['Tama','Kia ora mō tō āwhina, Hana!','Thank you for your help, Hana!','(hands together)','T3W9'],
          ['Hana','Kei te mihi ahau ki te Atua.','I am thanking God.','(looks up)'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God knows how every one of us feels, even when we cannot find the words. He invites us to bring our worries and our thanks to him, and he gives us friends to help. When we notice how someone is and care, that is where your Pānga, your impact, begins.','T1W9'],
          ['Tama','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I am scared.’','Kei te mataku ahau.'],['What does māharahara mean?','Worried.'],['Choose the word: Kei te ____ ahau. (I am angry) (riri / mataku)','riri'],['Say in te reo: ‘Are you worried? No, I am well.’','Kei te māharahara koe? Kāo, kei te pai ahau.'],['Stretch: say ‘I am worried. I will pray to God.’ then ask your partner how they are.','Kei te māharahara ahau. Ka karakia ahau ki te Atua. Kei te pēhea koe?']],
        CE:['Leaving out Kei te, or putting ahau before the feeling','Not knowing that māharahara means worried','Mixing up riri (angry) and mataku (scared)','Leaving out Āe or Kāo, or leaving out Kei te in the answer','Leaving out ki te Atua, or mixing up Ka (will) and Kei te (now)'],
        T:'T4 W5 Lesson A',
        LP:{title:'Kei te mataku ahau — I am scared',val:'Pānga · Philippians 4:6',pat:['Kei te ________ ahau.','Kei te ________ koe?','Ka karakia ahau ki te Atua.'],swap:'Feelings: riri · mataku · māharahara · harikoa · pōuri · ngenge · pai. People: ahau (I) · koe (you) · ia (he / she). Prayer: karakia · Atua · mihi. Care: Kia kaha · Ka āwhina ahau.'}
      }
    };

    // ── Lesson B · Kei te hīkaka ahau — I am excited ──
    const B = {
      P: {
        t:4,
        w:5,
        l:'B',
        ch:'Kei~te|k hīkaka|q* ahau.|a',
        sub:'Today we add excited and brave, talk about other people and groups, and pray for each other.',
        say:'Kia ora everyone! Last lesson we said Kei te mataku ahau, I am scared, and we said that we will pray to God. Today we add two stretch words. Hīkaka means excited, and māia means brave. We also talk about other people and about groups: Kei te mataku ia, she is scared. Kei te mataku koutou? Are you all scared? And we say Kei te karakia ahau ki te Atua, I am praying to God, and Kei te karakia ahau mō tōku hoa, I am praying for my friend. Remember, nobody has to say a real worry out loud, and nobody has to pray out loud. Still no writing: listen, think and speak. Show each feeling on your face.',
        pron:'hīkaka = HEE-kah-kah · māia = MAH-ee-ah · mataku = MAH-tah-koo · māharahara = MAH-hah-RAH-hah-rah · karakia = kah-RAH-kee-ah',
        li:'say how we and other people feel, say we are brave, and say we are praying to God and for a friend, using hīkaka, māia and Kei te karakia ahau ki te Atua, in te reo.',
        succ:['I can say excited and brave: Kei te hīkaka ahau. Kia māia!','I can ask about others: Kei te mataku ia? Kei te mataku koutou? Āe, kei te mataku mātou.','I can say who I am praying to and for: Kei te karakia ahau ki te Atua. Kei te karakia ahau mō tōku hoa.'],
        wp:'When I am afraid, I will trust in God.',
        ref:'Psalm 56:3',
        mom:'Being brave does not mean we never feel afraid. It means we bring our fear to God and trust him, and we help a friend who is scared. When we pray for other people, we share God’s care with them, and that is Pānga.',
        q:'Who could you pray for or help to feel brave this week?',
        recall:[['How do you say: I am scared.','Kei te mataku ahau.'],['How do you say: Are you worried? No, I am well.','Kei te māharahara koe? Kāo, kei te pai ahau.'],['How do you say: I will pray to God.','Ka karakia ahau ki te Atua.'],['How do you say: Thank you for your help.','Kia ora mō tō āwhina.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'What is one kind thing you can say to someone who feels scared?',
        next:'Week 6: Getting around (Ka haere ahau ki te kura mā runga pahi)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: hīkaka (excited, HEE-kah-kah) and māia (brave, MAH-ee-ah). Jump on the spot for hīkaka and stand tall with your shoulders back for māia. Remind the class that all feelings are okay and that the faces are only pretend.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. The actors only pretend to feel these things. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: Kei te, then hīkaka, then ahau. Prompt 3: ki te Atua for praying to God, and mō for praying for someone.',
        xresc:'Common error: using mō when praying to God, or ki when praying for a friend. Say: ki te Atua means to God, and mō means for someone. Another common one: mixing up koutou (you all) and mātou (we, not including you).',
        xpron:'hīkaka = HEE-kah-kah · māia = MAH-ee-ah · mātou = MAH-toh · koutou = KOH-toh',
        cur:cu4('Communication (saying how others feel, asking a group, saying we are brave, saying we are praying to God and for a friend) · Language Knowledge (Kei te hīkaka ahau; Kei te ___ ia; Kei te ___ koutou? Āe, kei te ___ mātou; Kia māia; Kei te karakia ahau ki te Atua / mō tōku hoa; E whakawhetai ana mātou ki te Atua) · Cultural Knowledge (bringing our fears and thanks to God; praying for and helping a friend; karakia as part of the school day)','Recycles Lesson A, Term 1 Weeks 2, 7 and 10, Term 3 Weeks 7 and 9 (koutou, mātou, Kia ora mō tō āwhina) and Term 4 Weeks 3 and 4 (Kia kaha, Ka karakia tātou mō …). ⚠ Wellbeing care: all feelings are pretend and practice, nobody should be asked to share a real fear in front of the class, and the prayer step is an invitation, never a requirement. Please have a fluent speaker confirm Kei te karakia ahau ki te Atua, Kei te karakia ahau mō tōku hoa, E whakawhetai ana mātou ki te Atua and Kei te māia ahau.'),
        vr:valueRows('Psalm 56:3','Being brave does not mean we never feel afraid. It means we bring our fear to God and trust him, and we help a friend who is scared. When we pray for other people, we share God’s care with them, and that is Pānga.','Who could you pray for or help to feel brave this week?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add hīkaka (excited) and māia (brave) as the two stretch words. Keep the face cards from Lesson A.','Wellbeing care: all the feelings are pretend. Do not ask a student to share a real fear or worry in front of the class, and follow the school’s pastoral process if someone seems upset.','The prayer steps (steps 8, 9 and 11) are kind invitations, never a requirement to pray out loud. Please check the sentences with your school’s te reo lead.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles. Practise the actions: jump for hīkaka, stand tall for māia.'],
        three:'(1) <i>hīkaka</i> = excited, <i>māia</i> = brave: <i>Kei te hīkaka ahau</i> = I am excited; <i>Kia māia!</i> = be brave! (2) <i>Kei te mataku koutou? Āe, kei te mataku mātou.</i> = are you all scared? Yes, we are scared. (3) <i>Kei te karakia ahau ki te Atua</i> = I am praying to God; <i>Kei te karakia ahau mō tōku hoa</i> = I am praying for my friend.',
        diff:['Echo as a whole class and use the faces and actions for every word. Say only Kei te hīkaka ahau and Kia māia at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer about groups and other people with a partner, and say a short chat that includes a prayer line.','Add hīkaka and māia to your own sentences, say ia, koutou and mātou, explain ki te Atua and mō in English and ask classmates how they are.'],
        look:'Kei te, the feeling and the person in the right order; ia for one other person, koutou and mātou for groups; ki te Atua (to God) and mō (for) not mixed up; kind faces and gentle voices.',
        nx:'revisit koutou and mātou with students in Starting; move to Week 6 (Getting around).',
        rec:'Lesson A (Kei te mataku ahau, Ka karakia ahau ki te Atua), Term 1 Weeks 2, 7 and 10 (Kei te pēhea koe?, tōku, Kia kaha), Term 3 Weeks 7 and 9 (koutou, mātou, Kia ora mō tō āwhina) and Term 4 Weeks 3 and 4 (Kia kaha, Ka karakia tātou mō …) are recalled in the warm-up, steps and drama. Week 6 starts a new theme (getting around).'
      },
      D: {
        VOC:[...A.D.VOC,'hīkaka','māia'],
        STEPS:[
          ['Quick recap: I am scared. I am worried.','Kei~te|k mataku|q ahau.|a Kei~te|k māharahara|q ahau.|a','kay teh MAH-tah-koo ah-HOW · kay teh MAH-hah-RAH-hah-rah ah-HOW','Lesson A: Kei te + feeling + who.',null,'Whole class'],
          ['Quick recap: How are you? I am angry.','Kei~te|k pēhea|q koe?|a Kei~te|k riri|q ahau.|a','kay teh PEH-heh-ah KOH-eh · kay teh REE-ree ah-HOW','Lesson A and Term 1 Week 2.',null,'Whole class'],
          ['New word: hīkaka means excited. How would you say: I am excited.','Kei~te|k hīkaka|q* ahau.|a','kay teh HEE-kah-kah ah-HOW','Same pattern, new feeling word. Hold the long ī.','Jump gently on the spot. Hīkaka means excited. Hold the long ī: hee-kah-kah. Take a moment… (wait 3 seconds)… Kei te hīkaka ahau. Say it with me.','Echo'],
          ['Other people: She is excited. We are scared.','Kei~te|k hīkaka|q ia.|a Kei~te|k mataku|q tātou.|a','kay teh HEE-kah-kah EE-ah · kay teh MAH-tah-koo TAH-toh','ia = she or he. tātou = all of us, including you.','Point at a picture of a person, then sweep your hand around the class. Say them with me.','Whole class'],
          ['Ask a group: Are you all scared? Yes, we are scared.','Kei~te|k mataku|q koutou?|a Āe,|w kei~te|k mataku|q mātou.|a','kay teh MAH-tah-koo KOH-toh · AH-eh, kay teh MAH-tah-koo MAH-toh','koutou = you (three or more). mātou = we, but not including you. You know both from Term 3.','Point at a group of students for koutou, then point at yourself and your group for mātou. Take a moment… (wait 3 seconds)… Kei te mataku koutou? Āe, kei te mataku mātou. Say it with me.','Echo'],
          ['New word: māia means brave. How would you say: Be brave! I am brave.','Kia~māia!|w* Kei~te|k māia|q ahau.|a','KEE-ah MAH-ee-ah · kay teh MAH-ee-ah ah-HOW','Kia māia = be brave. You know Kia kaha (be strong).','Stand tall with your shoulders back. Māia means brave, and it sounds like Kia kaha, be strong. Take a moment… (wait 3 seconds)… Kia māia! Kei te māia ahau. Say them with me.','Echo'],
          ['Care for a friend: Be strong. Be brave. I will help.','Kia~kaha.|w Kia~māia.|w Ka|k āwhina|n ahau.|a','KEE-ah KAH-hah. KEE-ah MAH-ee-ah. kah AH-fee-nah ah-HOW','Term 4 Week 3 and Term 3 Week 9, with the new word māia.','Hand on heart. When a friend is scared, we say kind words and we help. Say them with me.','Whole class'],
          ['New idea: praying to God. How would you say: I am praying to God.','Kei~te|k karakia|n ahau|a ki~te|k Atua.|n*','kay teh kah-RAH-kee-ah ah-HOW kee teh AH-too-ah','Kei te + karakia + who + ki te Atua. ki te = to. Last time you said Ka karakia (I will pray).','Put your hands together. Last time we said Ka karakia ahau, I will pray. Today we say Kei te karakia ahau, I am praying right now. Ki te Atua means to God. Nobody has to say anything out loud. Take a moment… (wait 3 seconds)… Kei te karakia ahau ki te Atua. Say it with me.','Echo'],
          ['Pray for someone: I am praying for my friend.','Kei~te|k karakia|n ahau|a mō~tōku|k hoa.|n*','kay teh kah-RAH-kee-ah ah-HOW mor TOH-koo HOR-ah','mō = for. You know mō and tōku. Ki te Atua = to God; mō = for a person.','Hand on heart, then point gently at the picture of a friend. Mō means for. Ki te Atua means to God, and mō tōku hoa means for my friend. Take a moment… (wait 3 seconds)… Kei te karakia ahau mō tōku hoa. Say it with me.','Echo'],
          ['Partner game: ask your partner how they are, they answer with a face card, you say a kind word, and then you say you are praying for them. It is all pretend. Then swap.','Kei~te|k pēhea|q koe?|a Kei~te|k ___|q ahau.|a Kia~kaha!|w Kei~te|k karakia|n ahau|a mō~koe.|a','kay teh PEH-heh-ah KOH-eh · kay teh ___ ah-HOW · KEE-ah KAH-hah · kay teh kah-RAH-kee-ah ah-HOW mor KOH-eh','mō koe = for you. Use any feeling you know. Everything is pretend!','Turn to your partner. One of you asks Kei te pēhea koe? and the other answers with the face on their card. Then you say Kia kaha, and Kei te karakia ahau mō koe. It is all pretend. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Give thanks together: We give thanks to God.','E|k whakawhetai|n ana|k mātou|a ki~te|k Atua.|n','eh FAH-kah-FEH-tye AH-nah MAH-toh kee teh AH-too-ah','E whakawhetai ana mātou is in our karakia. ki te Atua = to God.','Hands together. You already say E whakawhetai ana mātou in our opening karakia. Today we add ki te Atua, to God. Say it with me.','Whole class'],
          ['Put it together: Hello. I am scared. Be brave. I am praying to God. Thank you.','Kia~ora.|w Kei~te|k mataku|q ahau.|a Kia~māia.|w Kei~te|k karakia|n ahau|a ki~te|k Atua.|n Kia~ora|w mō|k tō|k āwhina.|n','KEE-ah OR-ah. kay teh MAH-tah-koo ah-HOW. KEE-ah MAH-ee-ah. kay teh kah-RAH-kee-ah ah-HOW kee teh AH-too-ah. KEE-ah OR-ah mor TOR AH-fee-nah','Terms 1, 3 and 4 together.',null,'Whole class'],
          ['Class chain: greet the next person, ask how they are, they answer, you say be brave, then say goodbye.','Tēnā~koe.|w Kei~te|k pēhea|q koe?|a Kei~te|k ___|q ahau.|a Kia~māia!|w Ka~kite!|w','TEH-nah KOH-eh. kay teh PEH-heh-ah KOH-eh. kay teh ___ ah-HOW. KEE-ah MAH-ee-ah. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one and asks Kei te pēhea koe? and the next person answers with any feeling they know. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Karakia a Kuia — Kuia’s Prayer',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Kei te pēhea koutou?','Hello, children! How are you all?','(opens her arms)','T1W2'],
          ['Hana','Kei te hīkaka ahau, Kuia!','I am excited, Kuia!','(jumps gently)'],
          ['Tama','Kei te mataku ahau, Kuia.','I am scared, Kuia.','(holds his hands up)'],
          ['Kuia Mere','Kei te mataku koe, Tama? Kia māia!','Are you scared, Tama? Be brave!','(pats the seat beside her)'],
          ['Tama','Āe, kei te mataku ahau.','Yes, I am scared.','(nods)'],
          ['Hana','Kia kaha, Tama! Ka āwhina ahau.','Be strong, Tama! I will help.','(hand on heart)','T4W3'],
          ['Kuia Mere','Kei te karakia tātou ki te Atua.','We are praying to God.','(bows her head)'],
          ['Tama','Kei te karakia ahau mō tōku hoa.','I am praying for my friend.','(looks at Hana)'],
          ['Hana','E whakawhetai ana mātou ki te Atua.','We give thanks to God.','(hands together)','T3W7'],
          ['Tama','Kei te māia ahau ināianei!','I am brave now!','(stands tall)'],
          ['Kuia Mere','Ka pai tō mahi, tamariki!','Good work, children!','(claps gently)','T3W9'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Being brave does not mean we never feel afraid. It means we bring our fear to God and trust him, and we help our friends. When we pray for someone and stand beside them, we share God’s care. That is Pānga.','T1W9'],
          ['Hana','Kia ora, Kuia. Ka kite!','Thank you, Kuia. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I am excited.’','Kei te hīkaka ahau.'],['What does māia mean?','Brave.'],['Choose the word: Kei te karakia ahau ____ te Atua. (I am praying to God) (ki / mō)','ki'],['Say in te reo: ‘Are you all scared? Yes, we are scared.’','Kei te mataku koutou? Āe, kei te mataku mātou.'],['Stretch: say ‘I am praying for my friend.’ then say ‘Be brave!’','Kei te karakia ahau mō tōku hoa. Kia māia!']],
        CE:['Leaving out Kei te, or putting ahau before the feeling','Not knowing that māia means brave, or mixing it up with kaha (strong)','Using mō for praying to God; use ki te Atua for to God and mō for for someone','Mixing up koutou (you all) and mātou (we, not including you)','Using ki for praying for a friend, or leaving out tōku'],
        T:'T4 W5 Lesson B',
        LP:{title:'Kei te hīkaka ahau — I am excited',val:'Pānga · Psalm 56:3',pat:['Kei te ________ ahau / ia / tātou.','Kei te karakia ahau ki te ________.','Kei te karakia ahau mō ________.'],swap:'Feelings: hīkaka · māia · mataku · māharahara · riri · harikoa · pōuri. People: ahau · koe · ia · tātou · koutou · mātou. To God: ki te Atua. For a friend: mō tōku hoa. Care: Kia kaha · Kia māia.'}
      }
    };

    addLessons({ '4.5.A': A, '4.5.B': B });
  }

  /* ──────── WEEK 6 · Getting around ──────── */
  {
    // Recalled: haere, kura, kāinga, tāone, whare karakia, āpōpō, ki hea, waewae, waka, hoa, tino. Ka (T3W4) and Ka haere ki hea (T3W4).
    // New: pahi, motokā, tereina, pahikara, mā runga, mā te waewae (A); waka rererangi, tere (B).
    // This week stays with the FUTURE (Ka) only. Past and present forms with vehicles use different words (i runga i te …) and are not taught.
    addGlossary({
      "pahi":["bus","PAH-hee",6,4],
      "motokā":["car","MOH-tor-KAH",6,4],
      "tereina":["train","teh-reh-EE-nah",6,4],
      "pahikara":["bicycle","PAH-hee-KAH-rah",6,4],
      "mā runga":["by / on (travelling on a vehicle)","MAH ROO-ngah",6,4],
      "mā te waewae":["on foot","MAH teh WAH-eh-wah-eh",6,4],
      "waka rererangi":["aeroplane (a flying waka)","WAH-kah REH-reh-RAH-ngee",6,4],
      "tere":["fast","TEH-reh",6,4]
    });

    // ── Lesson A · Ka haere ahau mā runga pahi — I will go by bus ──
    const A = {
      P: {
        t:4,
        w:6,
        l:'A',
        ch:'Ka|k haere|n ahau|a mā~runga|k pahi.|n*',
        sub:'How will we get there? Today we learn four ways to travel and say how we will go.',
        say:'Kia ora everyone! Last week we looked at feelings and prayer. This week we get moving: how do we get from place to place? You already know Ka haere ahau ki te kura, I will go to school, from Term 3. Today we add how we will go. Pahi is a bus, motokā is a car, tereina is a train and pahikara is a bicycle. We say mā runga pahi, by bus, and mā te waewae, on foot. Still no writing: listen, think and speak. Show each way of travelling with an action, and remember we are only pretending to travel today.',
        pron:'pahi = PAH-hee · motokā = MOH-tor-KAH · tereina = teh-reh-EE-nah · pahikara = PAH-hee-KAH-rah · mā runga = MAH ROO-ngah · waewae = WAH-eh-wah-eh · haere = HIGH-reh',
        li:'say how we will go to a place, using Ka haere ahau mā runga pahi and Ka haere ahau mā te waewae, in te reo.',
        succ:['I can say how I will go: Ka haere ahau mā runga pahi. Ka haere ahau mā te waewae.','I can say where and how: Ka haere ahau ki te kura mā runga motokā.','I can ask and answer: Ka haere koe mā runga pahi? Āe / Kāo, ka haere ahau mā te waewae.'],
        wp:'I heard God ask who will go, and I said: Here I am. Send me!',
        ref:'Isaiah 6:8',
        mom:'God sends us out to the places where people need him, whether we walk, ride a bike or catch the bus. Every place we go is a place to bring kindness and God’s love. Going out to help is how we make a difference, and that is Pānga.',
        q:'Where could you go this week to bring kindness to someone?',
        recall:[['How do you say: I will go home tomorrow.','Ka haere ahau ki te kāinga āpōpō.'],['How do you say: I went to school yesterday.','I haere ahau ki te kura inanahi.'],['How do you say: I am excited.','Kei te hīkaka ahau.']],
        rtag:'Terms 3 and 4',
        rtxt:'Remember when… Terms 3 and 4 (3 quick prompts)',
        refl:'How will you get home today, and what is one kind thing you could do on the way?',
        next:'Lesson B: Ka haere ia mā runga waka rererangi (aeroplane, fast, other people and groups)',
        vsay:'Say each word and the class echoes, with an action: steer a wheel for motokā, ring a bell for pahikara, pull the cord and say ding for pahi, pull a whistle cord for tereina, march on the spot for mā te waewae. New words are pahi, motokā, tereina, pahikara, mā runga and mā te waewae. The words haere, kura, kāinga and tāone are recalled from earlier terms.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Ka haere ahau, then mā runga, then the vehicle. Prompt 4: mā te waewae for on foot, not mā runga.',
        xresc:'Common error: leaving out mā runga, or saying mā runga waewae. Say: for a vehicle we say mā runga, and for walking we say mā te waewae. Another common one: mixing up pahi (bus) and pahikara (bicycle). Say: pahikara has the extra kara at the end, like a bike with a bell.',
        xpron:'pahi = PAH-hee · motokā = MOH-tor-KAH · tereina = teh-reh-EE-nah · pahikara = PAH-hee-KAH-rah',
        cur:cu4('Communication (saying where and how we will go, asking and answering about how someone will go) · Language Knowledge (Ka haere ahau ki te ___ mā runga ___; Ka haere ahau mā te waewae; Ka haere koe mā runga pahi? Āe / Kāo; four new vehicle words) · Cultural Knowledge (going out to serve others; getting around our place; walking and travelling together as whānau)','Recycles Term 3 Weeks 3 and 4 (haere, ki te kura, Ka haere ahau ki te kāinga, āpōpō), Term 4 Week 3 (waewae) and Term 4 Week 5 (Kei te hīkaka ahau). ⚠ Care: some students walk, some are driven, some live far away and some have no car. Do not ask how every student gets to school in front of the class; use pretend trips and picture cards. Please have a fluent speaker confirm mā runga + vehicle and mā te waewae.'),
        vr:valueRows('Isaiah 6:8','God sends us out to the places where people need him, whether we walk, ride a bike or catch the bus. Every place we go is a place to bring kindness and God’s love. Going out to help is how we make a difference, and that is Pānga.','Where could you go this week to bring kindness to someone?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. Make or find a set of picture cards: pahi, motokā, tereina, pahikara and feet (mā te waewae), plus a few places (kura, kāinga, tāone).','Care: students travel in different ways and some families do not have a car. Use pretend trips and picture cards, and do not ask how each child really gets to school.','Please check the travel sentences (mā runga pahi, mā te waewae) with your school’s te reo lead.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles. Practise the actions: steering wheel, bike bell, bus cord, marching feet.'],
        three:'(1) <i>Ka haere ahau mā runga pahi</i> = I will go by bus: Ka haere + who + <i>mā runga</i> + the vehicle. (2) <i>Ka haere ahau mā te waewae</i> = I will go on foot (walking never takes <i>mā runga</i>). (3) <i>Ka haere koe mā runga pahi?</i> = will you go by bus? <i>Āe, ka haere ahau mā runga pahi.</i> / <i>Kāo, ka haere ahau mā te waewae.</i>',
        diff:['Echo as a whole class and use the action for every word. Say only Ka haere ahau mā runga pahi and Ka haere ahau mā te waewae at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer Ka haere koe mā runga pahi? with a partner, then say a short chat with a place and a vehicle.','Add tātou to your sentences, swap in different places (kura, kāinga, tāone), explain in English the difference between mā runga and mā te waewae and invite a classmate to ask you a question.'],
        look:'Ka first; haere in the middle; mā runga before every vehicle; mā te waewae for walking; pahi and pahikara not mixed up; clear vowels in tereina and motokā.',
        nx:'revisit mā runga and mā te waewae with students in Starting; add waka rererangi, tere and other people in Lesson B.',
        rec:'Term 3 Weeks 3 and 4 (haere, ki te kura, āpōpō), Term 4 Week 3 (waewae) and Term 4 Week 5 (Kei te hīkaka ahau, Ka karakia, Kia ora mō tō āwhina) are recalled in the warm-up, steps and drama. Lesson B adds waka rererangi, tere, ia and groups.'
      },
      D: {
        VOC:['pahi','motokā','tereina','pahikara','mā runga','mā te waewae','haere','kura','kāinga','tāone'],
        STEPS:[
          ['Quick recap: I will go to school. We will go home.','Ka|k haere|n ahau|a ki~te|k kura.|n Ka|k haere|n tātou|a ki~te|k kāinga.|n','kah HIGH-reh ah-HOW kee teh KOO-rah · kah HIGH-reh TAH-toh kee teh KAH-ee-ngah','Term 3 Week 4: Ka + action + who + ki te + place.',null,'Whole class'],
          ['New idea: how we go. How would you say: I will go on foot.','Ka|k haere|n ahau|a mā~te|k waewae.|n*','kah HIGH-reh ah-HOW MAH teh WAH-eh-wah-eh','mā te waewae = on foot. You know waewae (legs) from Week 3.','March gently on the spot. You know waewae from Week 3: it means legs or feet. Mā te waewae means on foot. Take a moment… (wait 3 seconds)… Ka haere ahau mā te waewae. Say it with me.','Echo'],
          ['New word: pahi means bus. How would you say: I will go by bus.','Ka|k haere|n ahau|a mā~runga|k* pahi.|n*','kah HIGH-reh ah-HOW MAH ROO-ngah PAH-hee','mā runga = by, travelling on a vehicle. pahi = bus.','Pretend to pull a bus cord. Mā runga means by, or on top of, when we travel on a vehicle. Pahi means bus. Take a moment… (wait 3 seconds)… Ka haere ahau mā runga pahi. Say it with me.','Echo'],
          ['New word: motokā means car. How would you say: I will go by car.','Ka|k haere|n ahau|a mā~runga|k motokā.|n*','kah HIGH-reh ah-HOW MAH ROO-ngah MOH-tor-KAH','Same pattern, new vehicle. Hold the long ā at the end.','Pretend to turn a steering wheel. Motokā means car. Hold the long ā: moh-tor-KAH. Take a moment… (wait 3 seconds)… Ka haere ahau mā runga motokā. Say it with me.','Echo'],
          ['New words: tereina means train and pahikara means bicycle. How would you say: I will go by train. I will go by bicycle.','Ka|k haere|n ahau|a mā~runga|k tereina.|n* Ka|k haere|n ahau|a mā~runga|k pahikara.|n*','kah HIGH-reh ah-HOW MAH ROO-ngah teh-reh-EE-nah · kah HIGH-reh ah-HOW MAH ROO-ngah PAH-hee-KAH-rah','Same pattern. pahikara has two long sounds: PAH-hee-KAH-rah.','Pretend to pull a whistle cord for the train, then ring a bike bell for the bicycle. Take a moment… (wait 3 seconds)… Ka haere ahau mā runga tereina. Ka haere ahau mā runga pahikara. Say them with me.','Echo'],
          ['Add a place: I will go to school by bus.','Ka|k haere|n ahau|a ki~te|k kura|n mā~runga|k pahi.|n','kah HIGH-reh ah-HOW kee teh KOO-rah MAH ROO-ngah PAH-hee','Where first (ki te kura), then how (mā runga pahi).','Point to a picture of a school, then to a picture of a bus. First where, then how. Take a moment… (wait 3 seconds)… Ka haere ahau ki te kura mā runga pahi. Say it with me.','Echo'],
          ['Swap the people: We will go home by car.','Ka|k haere|n tātou|a* ki~te|k kāinga|n mā~runga|k motokā.|n','kah HIGH-reh TAH-toh kee teh KAH-ee-ngah MAH ROO-ngah MOH-tor-KAH','tātou = all of us. You know tātou from Term 3.',null,'Whole class'],
          ['Another place: We will go to town by train.','Ka|k haere|n tātou|a ki~te|k tāone|n* mā~runga|k tereina.|n','kah HIGH-reh TAH-toh kee teh TAH-or-neh MAH ROO-ngah teh-reh-EE-nah','You know tāone (town) from Term 3.',null,'Whole class'],
          ['Ask someone: Will you go by bus?','Ka|k haere|n koe|a* mā~runga|k pahi?|n','kah HIGH-reh KOH-eh MAH ROO-ngah PAH-hee','koe = you. Your voice goes up for a question.','Point at a classmate, but do not touch. Take a moment… (wait 3 seconds)… Ka haere koe mā runga pahi? Say it with me.','Echo'],
          ['Answer: Yes, I will go by bus. No, I will go on foot.','Āe,|w ka|k haere|n ahau|a mā~runga|k pahi.|n Kāo,|w ka|k haere|n ahau|a mā~te|k waewae.|n','AH-eh, kah HIGH-reh ah-HOW MAH ROO-ngah PAH-hee · KAH-or, kah HIGH-reh ah-HOW MAH teh WAH-eh-wah-eh','Āe or Kāo, then the full sentence. A no answer says how you will go instead.',null,'Whole class'],
          ['Partner game: pick a vehicle card and a place card. Ask your partner if they will go that way, and they answer. It is all pretend. Then swap.','Ka|k haere|n koe|a ki~te|k ___|n mā~runga|k ___?|n Āe,|w ka|k haere|n ahau.|a','kah HIGH-reh KOH-eh kee teh ___ MAH ROO-ngah ___ · AH-eh, kah HIGH-reh ah-HOW','Use pahi, motokā, tereina, pahikara, or mā te waewae. Everything is pretend!','Turn to your partner. One of you holds up a place card and a vehicle card and asks Ka haere koe ki te … mā runga …? The other answers Āe or Kāo, then says how they will go. It is all pretend. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Put it together: Hello. I will go to the town by train. Thank you.','Kia~ora.|w Ka|k haere|n ahau|a ki~te|k tāone|n mā~runga|k tereina.|n Kia~ora|w mō|k tō|k āwhina.|n','KEE-ah OR-ah. kah HIGH-reh ah-HOW kee teh TAH-or-neh MAH ROO-ngah teh-reh-EE-nah. KEE-ah OR-ah mor TOR AH-fee-nah','Terms 1, 3 and 4 together.',null,'Whole class'],
          ['Class chain: greet the next person, ask how they will go, they answer, then say goodbye.','Tēnā~koe.|w Ka|k haere|n koe|a mā~runga|k ___?|n Ka|k haere|n ahau|a mā~runga|k ___.|n Ka~kite!|w','TEH-nah KOH-eh. kah HIGH-reh KOH-eh MAH ROO-ngah ___. kah HIGH-reh ah-HOW MAH ROO-ngah ___. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one and asks Ka haere koe mā runga …? and the next person answers with any way they know. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ka Haere Tātou — We Will Go',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Ka haere tātou ki te tāone āpōpō.','Hello, children! We will go to town tomorrow.','(waves to the class)','T3W4'],
          ['Hana','Ka haere tātou mā runga pahi, Kaiako?','Will we go by bus, teacher?','(puts up her hand)'],
          ['Kaiako Rose','Āe, ka haere tātou mā runga pahi.','Yes, we will go by bus.','(nods)'],
          ['Tama','Kei te hīkaka ahau! Ka haere tātou mā runga pahi!','I am excited! We will go by bus!','(jumps gently)','T4W5'],
          ['Hana','Ka haere koe ki te kāinga mā runga pahi, Tama?','Will you go home by bus, Tama?','(points to Tama)'],
          ['Tama','Kāo, ka haere ahau mā runga pahikara.','No, I will go by bicycle.','(rings a pretend bell)'],
          ['Kaiako Rose','Ka haere koe mā te waewae, Hana?','Will you go on foot, Hana?','(points to her feet)'],
          ['Hana','Āe, ka haere ahau mā te waewae.','Yes, I will go on foot.','(marches on the spot)'],
          ['Kaiako Rose','Ka karakia tātou ki te Atua.','We will pray to God.','(bows her head)','T4W5'],
          ['Tama','Kia ora mō tō āwhina, Kaiako!','Thank you for your help, teacher!','(hands together)','T3W9'],
          ['Hana','Kei te mihi ahau ki te Atua.','I am thanking God.','(looks up)','T4W5'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Whether we walk, ride a bike or catch the bus, God goes with us. He sends us out to the places where people need kindness and help. Every place you go this week is a place to make a difference, and that is where your Pānga, your impact, begins.','T1W9'],
          ['Hana','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I will go by bus.’','Ka haere ahau mā runga pahi.'],['What does pahikara mean?','Bicycle.'],['Choose the word: Ka haere ahau ki te kura mā runga ____. (I will go by car) (motokā / tereina)','motokā'],['Say in te reo: ‘Will you go by bus? No, I will go on foot.’','Ka haere koe mā runga pahi? Kāo, ka haere ahau mā te waewae.'],['Stretch: say ‘We will go to town by train.’ then ask your partner how they will go.','Ka haere tātou ki te tāone mā runga tereina. Ka haere koe mā runga ___?']],
        CE:['Leaving out mā runga, or putting the vehicle before it','Mixing up pahikara (bicycle) and pahi (bus)','Mixing up motokā (car) and tereina (train)','Using mā runga for walking (it is mā te waewae), or leaving out Āe or Kāo','Using Kei te instead of Ka, or leaving out ki te before the place'],
        T:'T4 W6 Lesson A',
        LP:{title:'Ka haere ahau mā runga pahi — I will go by bus',val:'Pānga · Isaiah 6:8',pat:['Ka haere ahau ki te ________ mā runga ________.','Ka haere koe mā runga ________?','Ka haere ahau mā te waewae.'],swap:'Ways to go: pahi · motokā · tereina · pahikara · mā te waewae. Places: kura · kāinga · tāone. People: ahau (I) · koe (you) · tātou (we).'}
      }
    };

    // ── Lesson B · Ka haere ia mā runga waka rererangi — She will go by aeroplane ──
    const B = {
      P: {
        t:4,
        w:6,
        l:'B',
        ch:'Ka|k haere|n ia|a* mā~runga|k waka~rererangi.|n*',
        sub:'Today we add the aeroplane and fast, talk about other people and groups, and ask where and how.',
        say:'Kia ora everyone! Last lesson we said Ka haere ahau mā runga pahi, I will go by bus, and Ka haere ahau mā te waewae, I will go on foot. Today we add two stretch words. Waka rererangi means aeroplane. A waka is a canoe, and the word is also used for vehicles, so a waka rererangi is a flying waka. Tere means fast. We also talk about other people and groups: Ka haere ia, she will go. Ka haere koutou? Will you all go? Āe, ka haere mātou. Yes, we will go. And we ask Ka haere koe ki hea? Where will you go? Still no writing: listen, think and speak. Show each way of travelling with an action.',
        pron:'waka rererangi = WAH-kah REH-reh-RAH-ngee · tere = TEH-reh · koutou = KOH-toh · mātou = MAH-toh · hea = HEH-ah',
        li:'say how other people and groups will go and ask where and how someone will go, using waka rererangi, tere and Ka haere koe ki hea, in te reo.',
        succ:['I can say an aeroplane and fast: Ka haere ia mā runga waka rererangi. Kei te tere te waka rererangi.','I can ask about groups: Ka haere koutou mā runga tereina? Āe, ka haere mātou mā runga tereina.','I can ask where and how: Ka haere koe ki hea? Ka haere ahau ki te tāone mā runga pahi.'],
        wp:'The Lord will watch over your coming and going, now and always.',
        ref:'Psalm 121:8',
        mom:'God watches over us wherever we go, and he goes with us. Because we are never alone, we can be brave and kind in every place we travel to. When we look after the people travelling with us, we are making a difference, and that is Pānga.',
        q:'Who could you travel with or look after on the way this week?',
        recall:[['How do you say: I will go by bus.','Ka haere ahau mā runga pahi.'],['How do you say: I will go on foot.','Ka haere ahau mā te waewae.'],['How do you say: We will go to town by train.','Ka haere tātou ki te tāone mā runga tereina.'],['How do you say: Be brave! I am praying to God.','Kia māia! Kei te karakia ahau ki te Atua.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'How could you help someone who is travelling with you?',
        next:'Week 7: Likes (He pai ki a au te hākinakina)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: waka rererangi (aeroplane, WAH-kah REH-reh-RAH-ngee) and tere (fast, TEH-reh). Hold your arms out like wings for waka rererangi and zoom your hand across the air for tere. Remind the class that a waka is a canoe and is also used for vehicles.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: Ka haere ia, then mā runga, then waka rererangi. Prompt 3: mā for the way we go, not ki.',
        xresc:'Common error: using ki instead of mā before the vehicle. Say: ki is for the place, and mā is for how we go. Another common one: mixing up koutou (you all) and mātou (we, not including you).',
        xpron:'waka rererangi = WAH-kah REH-reh-RAH-ngee · tere = TEH-reh · mātou = MAH-toh · koutou = KOH-toh',
        cur:cu4('Communication (saying how other people and groups will go, asking where and how someone will go, saying something is fast) · Language Knowledge (Ka haere ia / koutou / mātou mā runga ___; Ka haere koe ki hea?; Kei te tere te ___; waka rererangi) · Cultural Knowledge (the word waka for canoes and other vehicles; looking after people on a journey; God’s care wherever we go)','Recycles Lesson A, Term 2 Week 8 (ki hea), Term 3 Weeks 4 and 7 (Ka, koutou, mātou, au), Term 4 Week 2 (waka) and Term 4 Week 5 (Kia māia, Kei te karakia ahau ki te Atua). ⚠ Please have a fluent speaker confirm waka rererangi, Kei te tere te waka rererangi and Ka haere ia mā runga waka rererangi.'),
        vr:valueRows('Psalm 121:8','God watches over us wherever we go, and he goes with us. Because we are never alone, we can be brave and kind in every place we travel to. When we look after the people travelling with us, we are making a difference, and that is Pānga.','Who could you travel with or look after on the way this week?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add waka rererangi (aeroplane) and tere (fast) as the two stretch words. Keep the picture cards from Lesson A and add an aeroplane card.','Care: students travel in different ways. Use pretend trips and picture cards, and do not ask how each child really gets to school.','Please check the travel sentences with your school’s te reo lead.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles. Practise the actions: wings for waka rererangi, steering wheel, marching feet.'],
        three:'(1) <i>waka rererangi</i> = aeroplane (a flying waka), <i>tere</i> = fast: <i>Ka haere ia mā runga waka rererangi</i> = she will go by aeroplane; <i>Kei te tere te waka rererangi</i> = the aeroplane is fast. (2) <i>Ka haere koutou mā runga tereina? Āe, ka haere mātou mā runga tereina.</i> = will you all go by train? Yes, we will go by train. (3) <i>Ka haere koe ki hea? Ka haere ahau ki te tāone mā runga pahi.</i> = where will you go? I will go to town by bus.',
        diff:['Echo as a whole class and use the action for every word. Say only Ka haere ia mā runga waka rererangi and Ka haere ahau mā runga pahi at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer about groups and other people with a partner, and say a short chat that includes a place and a vehicle.','Add waka rererangi and tere to your own sentences, say ia, koutou and mātou, explain in English why we say waka for an aeroplane and ask classmates where and how they will go.'],
        look:'Ka first; the person in the right place (ahau, koe, ia, koutou, mātou); mā before the vehicle and ki before the place; waka rererangi pronounced WAH-kah REH-reh-RAH-ngee.',
        nx:'revisit mā and ki with students in Starting; move to Week 7 (Likes).',
        rec:'Lesson A (Ka haere ahau mā runga pahi, mā te waewae), Term 2 Week 8 (ki hea), Term 3 Weeks 4 and 7 (Ka haere, koutou, mātou, au), Term 3 Week 9 (Kia ora mō tō āwhina) and Term 4 Week 5 (Kia māia, Ka karakia) are recalled in the warm-up, steps and drama. Week 7 starts a new theme (likes).'
      },
      D: {
        VOC:[...A.D.VOC,'waka rererangi','tere'],
        STEPS:[
          ['Quick recap: I will go by bus. I will go on foot.','Ka|k haere|n ahau|a mā~runga|k pahi.|n Ka|k haere|n ahau|a mā~te|k waewae.|n','kah HIGH-reh ah-HOW MAH ROO-ngah PAH-hee · kah HIGH-reh ah-HOW MAH teh WAH-eh-wah-eh','Lesson A: Ka haere + who + how.',null,'Whole class'],
          ['Quick recap: Will you go home by car? Yes, I will go by car.','Ka|k haere|n koe|a ki~te|k kāinga|n mā~runga|k motokā?|n Āe,|w ka|k haere|n ahau|a mā~runga|k motokā.|n','kah HIGH-reh KOH-eh kee teh KAH-ee-ngah MAH ROO-ngah MOH-tor-KAH · AH-eh, kah HIGH-reh ah-HOW MAH ROO-ngah MOH-tor-KAH','Lesson A: question and answer.',null,'Whole class'],
          ['New word: waka rererangi means aeroplane. How would you say: I will go by aeroplane.','Ka|k haere|n ahau|a mā~runga|k waka~rererangi.|n*','kah HIGH-reh ah-HOW MAH ROO-ngah WAH-kah REH-reh-RAH-ngee','A waka is a canoe, and the word is used for other vehicles too. A waka rererangi is a flying waka.','Hold your arms out like wings. You know waka from Week 2: it means canoe, and we also use it for other ways of travelling. Rererangi sounds like reh-reh-RAH-ngee. A waka rererangi is a flying waka: an aeroplane. Take a moment… (wait 3 seconds)… Ka haere ahau mā runga waka rererangi. Say it with me.','Echo'],
          ['Other people: She will go by aeroplane. He will go by bus.','Ka|k haere|n ia|a* mā~runga|k waka~rererangi.|n Ka|k haere|n ia|a mā~runga|k pahi.|n','kah HIGH-reh EE-ah MAH ROO-ngah WAH-kah REH-reh-RAH-ngee · kah HIGH-reh EE-ah MAH ROO-ngah PAH-hee','ia = he or she. Point at a picture, not at a student.','Point at a picture of a person, not at a student. Ia means he or she. Take a moment… (wait 3 seconds)… Ka haere ia mā runga waka rererangi. Ka haere ia mā runga pahi. Say them with me.','Whole class'],
          ['Ask a group: Will you all go by train? Yes, we will go by train.','Ka|k haere|n koutou|a* mā~runga|k tereina?|n Āe,|w ka|k haere|n mātou|a* mā~runga|k tereina.|n','kah HIGH-reh KOH-toh MAH ROO-ngah teh-reh-EE-nah · AH-eh, kah HIGH-reh MAH-toh MAH ROO-ngah teh-reh-EE-nah','koutou = you (three or more). mātou = we, but not including you. You know both from Term 3.','Point at a group of students for koutou, then point at yourself and your group for mātou. Take a moment… (wait 3 seconds)… Ka haere koutou mā runga tereina? Āe, ka haere mātou mā runga tereina. Say it with me.','Echo'],
          ['New word: tere means fast. How would you say: The aeroplane is fast.','Kei~te|k tere|q* te|k waka~rererangi.|n','kay teh TEH-reh teh WAH-kah REH-reh-RAH-ngee','Kei te + the describing word + te + the thing. You know this pattern from Term 2.','Zoom your hand across the air. Tere means fast. It is the same pattern as Kei te reka te kai from Term 3. Take a moment… (wait 3 seconds)… Kei te tere te waka rererangi. Say it with me.','Echo'],
          ['Add a place: We will go to church by car.','Ka|k haere|n tātou|a ki~te|k whare~karakia|n mā~runga|k motokā.|n','kah HIGH-reh TAH-toh kee teh FAH-reh kah-RAH-kee-ah MAH ROO-ngah MOH-tor-KAH','You know whare karakia from Term 3. Where first, then how.',null,'Whole class'],
          ['Ask where: Where will you go? I will go to town by bus.','Ka|k haere|n koe|a ki~hea?|q Ka|k haere|n ahau|a ki~te|k tāone|n mā~runga|k pahi.|n','kah HIGH-reh KOH-eh kee HEH-ah · kah HIGH-reh ah-HOW kee teh TAH-or-neh MAH ROO-ngah PAH-hee','ki hea = to where. You know ki hea from Term 2.','Point to a picture of a town. Ki hea means to where. Take a moment… (wait 3 seconds)… Ka haere koe ki hea? Ka haere ahau ki te tāone mā runga pahi. Say it with me.','Echo'],
          ['Partner game: ask where your partner will go and how. They answer with any place and vehicle they like. It is all pretend. Then swap.','Ka|k haere|n koe|a ki~hea?|q Ka|k haere|n ahau|a ki~te|k ___|n mā~runga|k ___.|n','kah HIGH-reh KOH-eh kee HEH-ah · kah HIGH-reh ah-HOW kee teh ___ MAH ROO-ngah ___','Use any place and vehicle you know, or mā te waewae. Everything is pretend!','Turn to your partner. One of you asks Ka haere koe ki hea? and the other answers with a place and a way to go. It is all pretend. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Say thank you for the trip: Thank you for the bus!','Kia~ora|w mō|k te|k pahi!|n','KEE-ah OR-ah mor teh PAH-hee','Kia ora mō te … = thank you for the … (Term 1 Week 9).','Hand on heart. We say thank you to the people who drive us and help us on our way. Say it with me.','Whole class'],
          ['Give thanks: We give thanks to God.','E|k whakawhetai|n ana|k mātou|a ki~te|k Atua.|n','eh FAH-kah-FEH-tye AH-nah MAH-toh kee teh AH-too-ah','Term 4 Week 5: E whakawhetai ana mātou ki te Atua.',null,'Whole class'],
          ['Put it together: Hello. I will go to town by bus. She will go by aeroplane. See you!','Kia~ora.|w Ka|k haere|n ahau|a ki~te|k tāone|n mā~runga|k pahi.|n Ka|k haere|n ia|a mā~runga|k waka~rererangi.|n Ka~kite!|w','KEE-ah OR-ah. kah HIGH-reh ah-HOW kee teh TAH-or-neh MAH ROO-ngah PAH-hee. kah HIGH-reh EE-ah MAH ROO-ngah WAH-kah REH-reh-RAH-ngee. kah KEE-teh','Terms 1, 3 and 4 together.',null,'Whole class'],
          ['Class chain: greet the next person, ask where they will go, they answer with a place and a vehicle, then say goodbye.','Tēnā~koe.|w Ka|k haere|n koe|a ki~hea?|q Ka|k haere|n ahau|a ki~te|k ___|n mā~runga|k ___.|n Ka~kite!|w','TEH-nah KOH-eh. kah HIGH-reh KOH-eh kee HEH-ah. kah HIGH-reh ah-HOW kee teh ___ MAH ROO-ngah ___. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one and asks Ka haere koe ki hea? and the next person answers with a place and a way to go. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Haere ki te Whare Karakia — Going to Church',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Ka haere tātou ki te whare karakia āpōpō.','Hello, children! We will go to church tomorrow.','(opens her arms)','T3W4'],
          ['Hana','Ka haere tātou mā runga motokā, Kuia?','Will we go by car, Kuia?','(puts up her hand)'],
          ['Kuia Mere','Āe, ka haere tātou mā runga motokā.','Yes, we will go by car.','(nods)'],
          ['Tama','Ka haere tōku pāpā ki te tāone mā runga waka rererangi.','My dad will go to town by aeroplane.','(holds his arms out like wings)'],
          ['Kuia Mere','Kei te tere te waka rererangi!','The aeroplane is fast!','(opens her eyes wide)'],
          ['Hana','Ka haere koe mā runga pahi, Kuia?','Will you go by bus, Kuia?','(points to Kuia)'],
          ['Kuia Mere','Kāo, ka haere au mā te waewae.','No, I will go on foot.','(taps her feet)','T3W7'],
          ['Tama','Kei te hīkaka ahau! Ka haere mātou ki te whare karakia mā runga motokā.','I am excited! We will go to church by car.','(jumps gently)','T4W5'],
          ['Kuia Mere','Kei te karakia tātou ki te Atua.','We are praying to God.','(bows her head)','T4W5'],
          ['Hana','E whakawhetai ana mātou ki te Atua.','We give thanks to God.','(hands together)','T4W5'],
          ['Kuia Mere','Ka pai tō mahi, tamariki!','Good work, children!','(claps gently)','T3W9'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God watches over us wherever we go, and he goes with us. Because we are never alone, we can be brave and kind in every place we travel to, and we can look after the people travelling with us. That is Pānga.','T1W9'],
          ['Hana','Kia ora, Kuia. Ka kite!','Thank you, Kuia. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘She will go by aeroplane.’','Ka haere ia mā runga waka rererangi.'],['What does tere mean?','Fast.'],['Choose the word: Ka haere ahau ____ runga pahi. (I will go by bus) (mā / ki)','mā'],['Say in te reo: ‘Will you all go by train? Yes, we will go by train.’','Ka haere koutou mā runga tereina? Āe, ka haere mātou mā runga tereina.'],['Stretch: say ‘The aeroplane is fast.’ then say how you will go home.','Kei te tere te waka rererangi. Ka haere ahau ki te kāinga mā ___.']],
        CE:['Mixing up ia (she or he) and ahau (I), or leaving out mā runga','Not knowing that tere means fast, or mixing it up with tereina (train)','Using ki before the vehicle; ki is for the place and mā is for how we go','Mixing up koutou (you all) and mātou (we, not including you)','Using Ka instead of Kei te in the first sentence, or leaving out mā before the vehicle'],
        T:'T4 W6 Lesson B',
        LP:{title:'Ka haere ia mā runga waka rererangi — She will go by aeroplane',val:'Pānga · Psalm 121:8',pat:['Ka haere ia / koutou / mātou mā runga ________.','Kei te tere te ________.','Ka haere koe ki hea?'],swap:'Ways to go: pahi · motokā · tereina · pahikara · waka rererangi · mā te waewae. People: ahau · koe · ia · tātou · koutou · mātou. Stretch: waka rererangi (aeroplane) · tere (fast).'}
      }
    };

    addLessons({ '4.6.A': A, '4.6.B': B });
  }

  /* ──────── WEEK 7 · Likes ──────── */
  {
    // Recalled: waiata, tākaro, pōro, pukapuka, pai, tino, ki a, au, kaukau, oma, ka rawe, haere mai. Kei te pīrangi ahau ki te … (T1W6).
    // New: hākinakina, whutupōro, poitūkohu, kanikani (A); kapa haka, pārekareka (B).
    // POSITIVE likes only (negatives were T3W6). No "I do not like". The "no" answer names something else you like (as in T4W4).
    // The roadmap word kino (bad) was deliberately not taught this week: it is already in the glossary (T2W4) and would invite negatives.
    addGlossary({
      "hākinakina":["sport / sports","HAH-kee-nah-kee-nah",7,4],
      "whutupōro":["rugby","FOO-too-POH-roh",7,4],
      "poitūkohu":["netball","POH-ee-TOO-koh-hoo",7,4],
      "kanikani":["dance / dancing","KAH-nee-KAH-nee",7,4],
      "kapa haka":["Māori performing arts group (singing, dance and haka)","KAH-pah HAH-kah",7,4],
      "pārekareka":["fun / enjoyable","PAH-reh-kah-REH-kah",7,4]
    });

    // ── Lesson A · He pai ki a au te hākinakina — I like sport ──
    const A = {
      P: {
        t:4,
        w:7,
        l:'A',
        ch:'He|k pai|q ki~a|k au|a te|k hākinakina.|n*',
        sub:'What do you enjoy? Today we learn to say what we like, and to ask a friend what they like.',
        say:'Kia ora everyone! Last week we learned how to get around. This week we talk about the things we enjoy. In te reo we say it a little differently from English. We do not say I like sport. We say sport is good to me: He pai ki a au te hākinakina. He pai means is good. Ki a au means to me. Te hākinakina is sport. Today we learn four new words: hākinakina is sport, whutupōro is rugby, poitūkohu is netball and kanikani is dance. You already know waiata, tākaro and pōro. Everyone likes different things, and that is great. Nobody has to like sport. Still no writing: listen, think and speak. Show each activity with an action.',
        pron:'hākinakina = HAH-kee-nah-kee-nah · whutupōro = FOO-too-POH-roh · poitūkohu = POH-ee-TOO-koh-hoo · kanikani = KAH-nee-KAH-nee · waiata = why-AH-tah · tākaro = TAH-kah-roh · au = OW',
        li:'say what we like and ask a friend what they like, using He pai ki a au te … and He pai ki a koe te …?, in te reo.',
        succ:['I can say what I like: He pai ki a au te hākinakina. He pai ki a au te waiata.','I can ask and answer: He pai ki a koe te kanikani? Āe, he pai ki a au te kanikani.','I can say what someone else likes: He pai ki a ia te whutupōro.'],
        wp:'Let everything that has breath praise the Lord.',
        ref:'Psalm 150:6',
        mom:'God gave each of us different things to enjoy, like sport, singing and dancing. When we enjoy them with thanks and invite others to join in, we bring joy to the people around us. That is how we make a difference, and that is Pānga.',
        q:'Who could you invite to join in something you enjoy this week?',
        recall:[['How do you say: I want to play.','Kei te pīrangi ahau ki te tākaro.'],['How do you say: This is a ball.','He pōro tēnei.'],['How do you say: I will go to school by bus.','Ka haere ahau ki te kura mā runga pahi.']],
        rtag:'Terms 1, 2 and 4',
        rtxt:'Remember when… Terms 1, 2 and 4 (3 quick prompts)',
        refl:'What is one thing you like, and who could you invite to share it?',
        next:'Lesson B: He tino pai ki a au te waiata (really like, groups, kapa haka and fun)',
        vsay:'Say each word and the class echoes, with an action: kick a pretend ball for hākinakina, hold your arms out as if to catch a rugby ball for whutupōro, shoot a pretend netball for poitūkohu, move your feet and sway for kanikani, sing softly for waiata, play with your hands for tākaro, and hold a ball for pōro. New words are hākinakina, whutupōro, poitūkohu and kanikani. The words waiata, tākaro, pōro and pukapuka are recalled from earlier terms.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: He pai, then ki a au, then te and the thing. Prompt 3: au (I) and not koe (you).',
        xresc:'Common error: saying ahau after ki a, or leaving out ki a. Say: after ki a we say au, and the whole sentence is He pai ki a au te … Another common one: mixing up whutupōro (rugby) and poitūkohu (netball).',
        xpron:'hākinakina = HAH-kee-nah-kee-nah · whutupōro = FOO-too-POH-roh · poitūkohu = POH-ee-TOO-koh-hoo · kanikani = KAH-nee-KAH-nee',
        cur:cu4('Communication (saying what we like, asking and answering about what a friend likes) · Language Knowledge (He pai ki a au / koe / ia te ___; He pai ki a koe te ___? Āe / Kāo, he pai ki a au te ___; four new activity words) · Cultural Knowledge (enjoying God’s gifts of play, song and dance; including others; sport and performing arts in Aotearoa)','Recycles Term 1 Week 6 (Kei te pīrangi ahau ki te …), Term 2 Weeks 1 and 4 (He … tēnei, pai, tino), Term 3 Week 7 (au, koe, ia) and Term 4 Week 6 (Ka haere … mā runga pahi). ⚠ Inclusion care: not every student enjoys or can join in sport, so the lesson always offers waiata, kanikani and pukapuka too. Nobody is ranked or asked to say what they do not like. Please have a fluent speaker confirm He pai ki a au te … and the use of au after ki a.'),
        vr:valueRows('Psalm 150:6','God gave each of us different things to enjoy, like sport, singing and dancing. When we enjoy them with thanks and invite others to join in, we bring joy to the people around us. That is how we make a difference, and that is Pānga.','Who could you invite to join in something you enjoy this week?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. Make or find picture cards: hākinakina (a ball), whutupōro, poitūkohu, kanikani, waiata, pukapuka.','Inclusion care: some students cannot or do not want to play sport. Always offer waiata, kanikani and pukapuka as equally good choices, and do not ask anyone what they dislike.','Please check He pai ki a au te … with your school’s te reo lead before teaching.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles. Practise the actions for each activity.'],
        three:'(1) <i>He pai ki a au te hākinakina</i> = I like sport (literally: sport is good to me). He pai + <i>ki a</i> + who + <i>te</i> + the thing. (2) After <i>ki a</i> we say <i>au</i>, not <i>ahau</i>: <i>ki a au</i> (me), <i>ki a koe</i> (you), <i>ki a ia</i> (him or her). (3) <i>He pai ki a koe te waiata?</i> = do you like singing? <i>Āe, he pai ki a au te waiata.</i> / <i>Kāo, he pai ki a au te kanikani.</i>',
        diff:['Echo as a whole class and use an action for every word. Say only He pai ki a au te waiata and He pai ki a au te hākinakina at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer He pai ki a koe te …? with a partner, then say a short chat with two things you like.','Add ia to your sentences, swap in pukapuka and pōro, explain in English why we say ki a au and invite a classmate to ask you a question.'],
        look:'He pai first; ki a au (not ki a ahau); te before the activity; whutupōro and poitūkohu not mixed up; the long vowels in hākinakina and whutupōro.',
        nx:'revisit ki a au and ki a koe with students in Starting; add tino pai, groups, kapa haka and fun in Lesson B.',
        rec:'Term 1 Week 6 (Kei te pīrangi ahau ki te …), Term 2 Weeks 1 and 4 (He … tēnei, pai), Term 3 Week 7 (au, koe, ia) and Term 4 Weeks 5 and 6 (Ka karakia, Ka haere) are recalled in the warm-up, steps and drama. Lesson B adds tino, groups, kapa haka and pārekareka.'
      },
      D: {
        VOC:['hākinakina','whutupōro','poitūkohu','kanikani','waiata','tākaro','pōro','pukapuka','pai','au'],
        STEPS:[
          ['Quick recap: I want to play. I want to sing.','Kei~te|k pīrangi|n ahau|a ki~te|k tākaro.|n Kei~te|k pīrangi|n ahau|a ki~te|k waiata.|n','kay teh PEE-rah-ngee ah-HOW kee teh TAH-kah-roh · kay teh PEE-rah-ngee ah-HOW kee teh why-AH-tah','Term 1 Week 6: Kei te pīrangi ahau ki te …',null,'Whole class'],
          ['New word: hākinakina means sport. How would you say: This is sport.','He|k hākinakina|n* tēnei.|k','heh HAH-kee-nah-kee-nah TEH-neh-ee','He … tēnei = this is a … (Term 2 Week 1).','Pretend to kick a ball. Hākinakina means sport. Say it in chunks: hā, ki, na, ki, na. Take a moment… (wait 3 seconds)… He hākinakina tēnei. Say it with me.','Echo'],
          ['New idea: liking. How would you say: I like sport. (Sport is good to me.)','He|k pai|q* ki~a|k* au|a* te|k hākinakina.|n','heh PIE kee AH OW teh HAH-kee-nah-kee-nah','He pai = is good. ki a au = to me. In te reo we say sport is good to me.','Put your hand on your heart. In English we say I like sport. In te reo we say sport is good to me. He pai means is good. Ki a au means to me. Notice we say au, not ahau. Take a moment… (wait 3 seconds)… He pai ki a au te hākinakina. Say it with me.','Echo'],
          ['Swap the thing: I like singing.','He|k pai|q ki~a|k au|a te|k waiata.|n*','heh PIE kee AH OW teh why-AH-tah','Same pattern. You know waiata from Term 1.',null,'Whole class'],
          ['New word: whutupōro means rugby. How would you say: I like rugby.','He|k pai|q ki~a|k au|a te|k whutupōro.|n*','heh PIE kee AH OW teh FOO-too-POH-roh','wh sounds like f. whutupōro = FOO-too-POH-roh.','Pretend to catch a rugby ball. Wh sounds like f. Whutupōro means rugby. Take a moment… (wait 3 seconds)… He pai ki a au te whutupōro. Say it with me.','Echo'],
          ['New word: poitūkohu means netball. How would you say: I like netball.','He|k pai|q ki~a|k au|a te|k poitūkohu.|n*','heh PIE kee AH OW teh POH-ee-TOO-koh-hoo','Same pattern, new word. Say it in chunks: poi, tū, ko, hu.','Pretend to shoot a netball. Poitūkohu means netball. Say it in chunks: poi, tū, ko, hu. Take a moment… (wait 3 seconds)… He pai ki a au te poitūkohu. Say it with me.','Echo'],
          ['New word: kanikani means dance. How would you say: I like dancing.','He|k pai|q ki~a|k au|a te|k kanikani.|n*','heh PIE kee AH OW teh KAH-nee-KAH-nee','Same pattern. kanikani is kani said twice.','Sway gently and move your feet. Kanikani means dance. It is kani said twice. Take a moment… (wait 3 seconds)… He pai ki a au te kanikani. Say it with me.','Echo'],
          ['Ask someone: Do you like sport?','He|k pai|q ki~a|k koe|a* te|k hākinakina?|n','heh PIE kee AH KOH-eh teh HAH-kee-nah-kee-nah','ki a koe = to you. Your voice goes up for a question.','Point at a classmate, but do not touch. Koe means you. Take a moment… (wait 3 seconds)… He pai ki a koe te hākinakina? Say it with me.','Echo'],
          ['Answer: Yes, I like sport. No, I like dancing.','Āe,|w he|k pai|q ki~a|k au|a te|k hākinakina.|n Kāo,|w he|k pai|q ki~a|k au|a te|k kanikani.|n','AH-eh, heh PIE kee AH OW teh HAH-kee-nah-kee-nah · KAH-or, heh PIE kee AH OW teh KAH-nee-KAH-nee','Āe or Kāo, then the full sentence. A no answer says something else you like instead.',null,'Whole class'],
          ['Partner game: pick a picture card. Ask your partner if they like it, and they answer. It is all pretend. Then swap.','He|k pai|q ki~a|k koe|a te|k ___?|n Āe,|w he|k pai|q ki~a|k au|a te|k ___.|n','heh PIE kee AH KOH-eh teh ___ · AH-eh, heh PIE kee AH OW teh ___','Use hākinakina, whutupōro, poitūkohu, kanikani, waiata, tākaro, pōro or pukapuka. Choose what you really like!','Turn to your partner. One of you holds up a picture card and asks He pai ki a koe te …? The other answers Āe or Kāo, then says something they like. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['About someone else: She likes rugby. He likes singing.','He|k pai|q ki~a|k ia|a* te|k whutupōro.|n He|k pai|q ki~a|k ia|a te|k waiata.|n','heh PIE kee AH EE-ah teh FOO-too-POH-roh · heh PIE kee AH EE-ah teh why-AH-tah','ia = he or she. ki a ia = to him or her.','Point at a picture of a person, not at a student. Ia means he or she. Take a moment… (wait 3 seconds)… He pai ki a ia te whutupōro. He pai ki a ia te waiata. Say them with me.','Whole class'],
          ['Put it together: Hello. I like sport. Do you like singing? Yes. See you!','Kia~ora.|w He|k pai|q ki~a|k au|a te|k hākinakina.|n He|k pai|q ki~a|k koe|a te|k waiata?|n Āe,|w he|k pai|q ki~a|k au.|a Ka~kite!|w','KEE-ah OR-ah. heh PIE kee AH OW teh HAH-kee-nah-kee-nah. heh PIE kee AH KOH-eh teh why-AH-tah. AH-eh, heh PIE kee AH OW. kah KEE-teh','Terms 1 and 4 together.',null,'Whole class'],
          ['Class chain: greet the next person, ask what they like, they answer, then say goodbye.','Tēnā~koe.|w He|k pai|q ki~a|k koe|a te|k ___?|n Āe,|w he|k pai|q ki~a|k au|a te|k ___.|n Ka~kite!|w','TEH-nah KOH-eh. heh PIE kee AH KOH-eh teh ___. AH-eh, heh PIE kee AH OW teh ___. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one and asks He pai ki a koe te …? and the next person answers with something they like. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Rā Hākinakina — Sports Day',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! He pai ki a koe te hākinakina, Hana?','Hello, children! Do you like sport, Hana?','(waves to the class)','T1W1'],
          ['Hana','Āe, he pai ki a au te hākinakina!','Yes, I like sport!','(smiles)'],
          ['Kaiako Rose','He pai ki a koe te whutupōro, Tama?','Do you like rugby, Tama?','(looks kindly at Tama)'],
          ['Tama','Kāo, he pai ki a au te poitūkohu.','No, I like netball.','(pretends to shoot a ball)'],
          ['Hana','Ka pai! He pai ki a au te kanikani.','Good! I like dancing.','(sways gently)','T1W10'],
          ['Tama','He pai ki a koe te waiata, Kaiako?','Do you like singing, teacher?','(tilts his head)'],
          ['Kaiako Rose','Āe, he pai ki a au te waiata!','Yes, I like singing!','(sings a pretend note)'],
          ['Hana','He pai ki a ia te waiata.','She likes singing.','(points to Kaiako Rose)'],
          ['Tama','Ka haere tātou ki te tākaro!','We will go to play!','(points to the field)','T4W6'],
          ['Kaiako Rose','Ka karakia tātou ki te Atua.','We will pray to God.','(bows her head)','T4W5'],
          ['Hana','Kia ora mō te hākinakina!','Thank you for the sport!','(hands together)','T1W9'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God gave each of us different things to enjoy, like sport, singing and dancing. When we enjoy them with thanks and invite someone who is left out to join in, we share God’s joy with others. That is where your Pānga, your impact, begins.','T1W9'],
          ['Tama','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I like sport.’','He pai ki a au te hākinakina.'],['What does poitūkohu mean?','Netball.'],['Choose the word: He pai ki a ____ te waiata. (I like singing) (au / koe)','au'],['Say in te reo: ‘Do you like rugby? No, I like netball.’','He pai ki a koe te whutupōro? Kāo, he pai ki a au te poitūkohu.'],['Stretch: say ‘She likes dancing.’ then ask your partner if they like singing.','He pai ki a ia te kanikani. He pai ki a koe te waiata?']],
        CE:['Leaving out ki a, or saying ahau instead of au after ki a','Mixing up poitūkohu (netball) and whutupōro (rugby)','Using koe (you) when it should be au (me)','Leaving out Āe or Kāo, or leaving out te before the thing','Mixing up ia (she or he) and au (me)'],
        T:'T4 W7 Lesson A',
        LP:{title:'He pai ki a au te hākinakina — I like sport',val:'Pānga · Psalm 150:6',pat:['He pai ki a au te ________.','He pai ki a koe te ________?','He pai ki a ia te ________.'],swap:'Things: hākinakina · whutupōro · poitūkohu · kanikani · waiata · tākaro · pōro · pukapuka. People: au (I, me) · koe (you) · ia (he / she).'}
      }
    };

    // ── Lesson B · He tino pai ki a au te waiata — I really like singing ──
    const B = {
      P: {
        t:4,
        w:7,
        l:'B',
        ch:'He|k tino|q* pai|q ki~a|k au|a te|k waiata.|n',
        sub:'Today we say we really like something, talk about groups, and say what is fun.',
        say:'Kia ora everyone! Last lesson we said He pai ki a au te hākinakina, I like sport, and we asked a friend what they like. Today we add two stretch words. Kapa haka is a Māori performing arts group, where people sing, dance and perform together. Pārekareka means fun or enjoyable. We also say we really like something, using tino, which you know from Term 2: He tino pai ki a au te waiata. And we talk about groups: He pai ki a tātou, ki a koutou, ki a mātou. At the end we invite someone: Haere mai ki te tākaro! Come and play! Still no writing: listen, think and speak. Remember, nobody has to like everything.',
        pron:'kapa haka = KAH-pah HAH-kah · pārekareka = PAH-reh-kah-REH-kah · tino = TEE-nor · tātou = TAH-toh · koutou = KOH-toh · mātou = MAH-toh · rātou = RAH-toh-oh',
        li:'say we really like something, talk about what groups like and say what is fun, using He tino pai ki a au te … and He pārekareka te …, in te reo.',
        succ:['I can say I really like something: He tino pai ki a au te waiata.','I can ask and answer about groups: He pai ki a koutou te kapa haka? Āe, he tino pai ki a mātou.','I can say what is fun and invite someone: He pārekareka te hākinakina. Haere mai ki te tākaro!'],
        wp:'God richly provides us with everything for our enjoyment.',
        ref:'1 Timothy 6:17',
        mom:'God gives us good things to enjoy, and he is happy when we enjoy them with thanks. The best joy is shared. When we invite someone to join us, especially someone on their own, we show them God’s welcome, and that is Pānga.',
        q:'Who is someone you could invite to join in this week?',
        recall:[['How do you say: I like sport.','He pai ki a au te hākinakina.'],['How do you say: Do you like singing? Yes, I like singing.','He pai ki a koe te waiata? Āe, he pai ki a au te waiata.'],['How do you say: Will you go by bus?','Ka haere koe mā runga pahi?'],['How do you say: I am excited.','Kei te hīkaka ahau.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'What is something fun you could share with a friend?',
        next:'Week 8: Putting it together (longer conversations)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: kapa haka (KAH-pah HAH-kah) and pārekareka (fun, PAH-reh-kah-REH-kah). Do a gentle sway for kapa haka and clap twice for pārekareka. Remind the class that kapa haka is a taonga and we treat it with respect: we do not use haka for jokes.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: He tino pai, then ki a au, then te and the thing. Prompt 3: koutou (you all) and not mātou (we).',
        xresc:'Common error: putting tino in the wrong place, or mixing up koutou (you all) and mātou (we, not including you). Say: tino goes straight after He, and we ask koutou and answer mātou.',
        xpron:'pārekareka = PAH-reh-kah-REH-kah · kapa haka = KAH-pah HAH-kah · koutou = KOH-toh · mātou = MAH-toh',
        cur:cu4('Communication (saying we really like something, asking and answering about groups, saying something is fun, inviting someone to play) · Language Knowledge (He tino pai ki a au / mātou te ___; He pai ki a koutou te ___? Āe, he tino pai ki a mātou; He pārekareka te ___; Haere mai ki te tākaro!) · Cultural Knowledge (kapa haka as a taonga; including others; enjoying God’s gifts together)','Recycles Lesson A, Term 2 Week 4 (tino, He + describing word + te …), Term 3 Weeks 7 and 8 (tātou, koutou, mātou, Haere mai ki te …) and Term 4 Weeks 5 and 6 (Kei te hīkaka, Ka haere … mā runga). ⚠ Cultural care: kapa haka and haka are taonga; teach respectfully, never as a joke, and consider inviting a kapa haka group or kaumātua. Please have a fluent speaker confirm He tino pai ki a au te …, He pārekareka te … and Haere mai ki te tākaro.'),
        vr:valueRows('1 Timothy 6:17','God gives us good things to enjoy, and he is happy when we enjoy them with thanks. The best joy is shared. When we invite someone to join us, especially someone on their own, we show them God’s welcome, and that is Pānga.','Who is someone you could invite to join in this week?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add kapa haka (Māori performing arts group) and pārekareka (fun) as the two stretch words. Keep the picture cards from Lesson A and add a kapa haka card.','Cultural care: kapa haka and haka are taonga. Teach them with respect and never as a joke. Consider inviting a kapa haka group or a kaumātua to show the class.','Please check the sentences with your school’s te reo lead.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles. Practise the actions: sway for kapa haka, clap for pārekareka.'],
        three:'(1) <i>He tino pai ki a au te waiata</i> = I really like singing (<i>tino</i> straight after <i>He</i>). (2) <i>He pai ki a koutou te kapa haka? Āe, he tino pai ki a mātou.</i> = do you all like kapa haka? Yes, we really like it. Also <i>ki a tātou</i> (all of us) and <i>ki a rātou</i> (them). (3) <i>He pārekareka te hākinakina</i> = sport is fun. <i>Haere mai ki te tākaro!</i> = come and play!',
        diff:['Echo as a whole class and use an action for every word. Say only He tino pai ki a au te waiata and Haere mai ki te tākaro at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer about groups with a partner, and say a short chat that includes tino and an invitation.','Add kapa haka and pārekareka to your own sentences, use tātou, koutou, mātou and rātou, explain in English why we say ki a mātou and ask classmates what they like.'],
        look:'He tino pai in the right order; ki a au, koe, ia, tātou, koutou, mātou, rātou in the right places; pārekareka said clearly; kind invitations.',
        nx:'revisit koutou and mātou with students in Starting; move to Week 8 (Putting it together).',
        rec:'Lesson A (He pai ki a au te …), Term 2 Week 4 (tino), Term 3 Weeks 7 and 8 (tātou, koutou, mātou, Haere mai ki te …), Term 3 Week 9 (Kia ora mō …) and Term 4 Weeks 5 and 6 (Kei te hīkaka, Ka haere mā runga) are recalled in the warm-up, steps and drama. Week 8 starts a new theme (putting it together).'
      },
      D: {
        VOC:[...A.D.VOC,'kapa haka','pārekareka'],
        STEPS:[
          ['Quick recap: I like rugby. Do you like dancing?','He|k pai|q ki~a|k au|a te|k whutupōro.|n He|k pai|q ki~a|k koe|a te|k kanikani?|n','heh PIE kee AH OW teh FOO-too-POH-roh · heh PIE kee AH KOH-eh teh KAH-nee-KAH-nee','Lesson A: He pai ki a + who + te + thing.',null,'Whole class'],
          ['Quick recap: She likes netball. He likes singing.','He|k pai|q ki~a|k ia|a te|k poitūkohu.|n He|k pai|q ki~a|k ia|a te|k waiata.|n','heh PIE kee AH EE-ah teh POH-ee-TOO-koh-hoo · heh PIE kee AH EE-ah teh why-AH-tah','Lesson A: ki a ia.',null,'Whole class'],
          ['New idea: really. How would you say: I really like singing.','He|k tino|q* pai|q ki~a|k au|a te|k waiata.|n','heh TEE-nor PIE kee AH OW teh why-AH-tah','tino = very, really. It goes straight after He.','Put both hands on your heart. Tino means very or really. You know it from Term 2. It goes straight after He. Take a moment… (wait 3 seconds)… He tino pai ki a au te waiata. Say it with me.','Echo'],
          ['A group: We all like sport.','He|k pai|q ki~a|k tātou|a* te|k hākinakina.|n','heh PIE kee AH TAH-toh teh HAH-kee-nah-kee-nah','tātou = all of us, including you. You know tātou from Term 3.','Sweep your hand around the whole class. Tātou means all of us, including you. Take a moment… (wait 3 seconds)… He pai ki a tātou te hākinakina. Say it with me.','Echo'],
          ['Ask a group: Do you all like singing? Yes, we really like it.','He|k pai|q ki~a|k koutou|a* te|k waiata?|n Āe,|w he|k tino|q pai|q ki~a|k mātou.|a*','heh PIE kee AH KOH-toh teh why-AH-tah · AH-eh, heh TEE-nor PIE kee AH MAH-toh','koutou = you (three or more). mātou = we, but not including you.','Point at a group of students for koutou, then point at yourself and your group for mātou. Take a moment… (wait 3 seconds)… He pai ki a koutou te waiata? Āe, he tino pai ki a mātou. Say it with me.','Echo'],
          ['About a group of other people: They like rugby.','He|k pai|q ki~a|k rātou|a* te|k whutupōro.|n','heh PIE kee AH RAH-toh-oh teh FOO-too-POH-roh','rātou = they (three or more). Point at a picture of a team.',null,'Whole class'],
          ['New word: kapa haka is a Māori performing arts group. How would you say: I like kapa haka.','He|k pai|q ki~a|k au|a te|k kapa~haka.|n*','heh PIE kee AH OW teh KAH-pah HAH-kah','kapa haka = a group that sings, dances and performs together. A taonga: we treat it with respect.','Sway gently. Kapa haka is a Māori performing arts group, where people sing, dance and perform together. It is a taonga, a treasure, so we treat it with respect. Take a moment… (wait 3 seconds)… He pai ki a au te kapa haka. Say it with me.','Echo'],
          ['New word: pārekareka means fun. How would you say: Sport is fun.','He|k pārekareka|q* te|k hākinakina.|n','heh PAH-reh-kah-REH-kah teh HAH-kee-nah-kee-nah','He + describing word + te + thing, like Term 2 (He nui te …).','Clap twice. Pārekareka means fun or enjoyable. It is the same pattern you know from Term 2: He, the describing word, te, then the thing. Say it in chunks: pā, re, ka, re, ka. Take a moment… (wait 3 seconds)… He pārekareka te hākinakina. Say it with me.','Echo'],
          ['Say both: Dancing is fun. I really like it.','He|k pārekareka|q te|k kanikani.|n He|k tino|q pai|q ki~a|k au.|a','heh PAH-reh-kah-REH-kah teh KAH-nee-KAH-nee. heh TEE-nor PIE kee AH OW','Two short sentences together.',null,'Whole class'],
          ['Partner game: ask your partner what they like, and they answer with tino. Then say that it is fun. It is all pretend. Then swap.','He|k pai|q ki~a|k koe|a te|k ___?|n Āe,|w he|k tino|q pai|q ki~a|k au|a te|k ___.|n He|k pārekareka|q te|k ___.|n','heh PIE kee AH KOH-eh teh ___ · AH-eh, heh TEE-nor PIE kee AH OW teh ___ · heh PAH-reh-kah-REH-kah teh ___','Use any activity word you know. Choose what you really like!','Turn to your partner. One of you asks He pai ki a koe te …? The other answers with tino and then says that it is fun. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Invite someone: Come and play!','Haere|n mai|x ki~te|k tākaro!|n*','HIGH-reh MY kee teh TAH-kah-roh','Haere mai ki te … = come to the … (Term 3 Week 8). Everyone is welcome.','Open your arms wide. You know Haere mai ki te kai from Term 3. Today we invite someone to play. Everyone is welcome, especially someone on their own. Say it with me.','Whole class'],
          ['Put it together: Hello. Do you like kapa haka? Yes, I really like it. Come and dance!','Kia~ora.|w He|k pai|q ki~a|k koe|a te|k kapa~haka?|n Āe,|w he|k tino|q pai|q ki~a|k au.|a Haere|n mai|x ki~te|k kanikani!|n','KEE-ah OR-ah. heh PIE kee AH KOH-eh teh KAH-pah HAH-kah. AH-eh, heh TEE-nor PIE kee AH OW. HIGH-reh MY kee teh KAH-nee-KAH-nee','Terms 1, 3 and 4 together.',null,'Whole class'],
          ['Class chain: greet the next person, ask what they like, they answer with tino, you invite them, then say goodbye.','Tēnā~koe.|w He|k pai|q ki~a|k koe|a te|k ___?|n Āe,|w he|k tino|q pai|q ki~a|k au|a te|k ___.|n Haere|n mai!|x Ka~kite!|w','TEH-nah KOH-eh. heh PIE kee AH KOH-eh teh ___. AH-eh, heh TEE-nor PIE kee AH OW teh ___. HIGH-reh MY. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one and asks He pai ki a koe te …? and the next person answers with something they really like. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Waiata a Kuia — Kuia’s Song',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! He pai ki a koutou te waiata?','Hello, children! Do you all like singing?','(opens her arms)','T1W1'],
          ['Hana','Āe, he tino pai ki a mātou te waiata, Kuia!','Yes, we really like singing, Kuia!','(sways gently)'],
          ['Tama','He pai ki a au te kapa haka.','I like kapa haka.','(sways gently)'],
          ['Kuia Mere','He pārekareka te kapa haka!','Kapa haka is fun!','(claps twice)'],
          ['Hana','He pai ki a koe te kanikani, Kuia?','Do you like dancing, Kuia?','(points to Kuia)'],
          ['Kuia Mere','Āe, he tino pai ki a au te kanikani.','Yes, I really like dancing.','(taps her feet)'],
          ['Tama','He pai ki a rātou te whutupōro.','They like rugby.','(points to a picture of a team)'],
          ['Kuia Mere','Haere mai ki te waiata, tamariki!','Come and sing, children!','(opens her arms)','T3W8'],
          ['Tama','Kei te hīkaka ahau!','I am excited!','(jumps gently)','T4W5'],
          ['Hana','E whakawhetai ana mātou ki te Atua.','We give thanks to God.','(hands together)','T4W5'],
          ['Kuia Mere','Ka pai tō mahi, tamariki!','Good work, children!','(claps gently)','T3W9'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God gives us good things to enjoy, and the best joy is shared. When we invite someone to join us, especially someone who is on their own, we show them God’s welcome. That is Pānga.','T1W9'],
          ['Hana','Kia ora, Kuia. Ka kite!','Thank you, Kuia. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I really like singing.’','He tino pai ki a au te waiata.'],['What does pārekareka mean?','Fun (or enjoyable).'],['Choose the word: He pai ki a ____ te waiata? (Do you all like singing?) (koutou / mātou)','koutou'],['Say in te reo: ‘Do you all like kapa haka? Yes, we really like it.’','He pai ki a koutou te kapa haka? Āe, he tino pai ki a mātou.'],['Stretch: say ‘Sport is fun.’ then invite your partner to play.','He pārekareka te hākinakina. Haere mai ki te tākaro!']],
        CE:['Putting tino in the wrong place; it goes straight after He','Not knowing that pārekareka means fun, or leaving out te','Mixing up koutou (you all) and mātou (we, not including you)','Leaving out tino in the answer, or mixing up koutou and mātou','Leaving out te before the thing, or leaving out ki te in the invitation'],
        T:'T4 W7 Lesson B',
        LP:{title:'He tino pai ki a au te waiata — I really like singing',val:'Pānga · 1 Timothy 6:17',pat:['He tino pai ki a au / mātou te ________.','He pai ki a koutou te ________?','He pārekareka te ________.'],swap:'Things: hākinakina · whutupōro · poitūkohu · kanikani · waiata · tākaro · kapa haka. People: au · koe · ia · tātou · koutou · mātou · rātou. Stretch: kapa haka · pārekareka (fun). Invite: Haere mai ki te tākaro!'}
      }
    };

    addLessons({ '4.7.A': A, '4.7.B': B });
  }

  /* ──────── WEEK 8 · Putting it together ──────── */
  {
    // NO new grammar this week. Lesson A stacks Terms 1–4 into one conversation (greet · name · place · feeling · likes · getting there · prayer/thanks · goodbye).
    // Lesson B adds two stretch words (pātai, whakautu) and a "choose your path" conversation (the class picks the branch).
    // Recalled: kōrero, tēnā koe, ahau, nō, pēhea, harikoa, hīkaka, māharahara, māia, hākinakina, waiata, pahi, kura, whakawhetai, ka kite, atua, kapa haka, tātou, mātou.
    // Local place: TOWN comes from the school name (as in Week 2). The Māori name for the town is NOT used.
    const TOWN = 'Ashburton';
    addGlossary({
      "pātai":["question","PAH-tie",8,4],
      "whakautu":["answer / reply","FAH-kah-OO-too",8,4]
    });

    // ── Lesson A · Ka kōrero tātou — Let’s talk ──
    const A = {
      P: {
        t:4,
        w:8,
        l:'A',
        ch:'Ka|k kōrero|n* tātou.|a',
        sub:'Today we put the whole year together and have a real conversation, one piece at a time.',
        say:'Kia ora everyone! You have learned a lot this year. Today there is nothing new to learn. We take the pieces you already own and join them into a conversation. We start by saying hello and who we are. Then where we are from. Then how we feel. Then what we like. Then how we will get to school. Then a short thank you to God. And last, goodbye. Each piece is a sentence you already know. Still no writing: listen, think and speak. If you forget a piece, that is my fault, not yours. I will say it again more slowly.',
        pron:'kōrero = KOH-reh-roh · tātou = TAH-toh · ahau = ah-HOW · harikoa = HAH-ree-KOR-ah · māharahara = MAH-hah-RAH-hah-rah · pahi = PAH-hee · whakawhetai = FAH-kah-FEH-tye',
        li:'join sentences from Terms 1 to 4 into a short conversation: greet, say who we are and where we are from, say how we feel and what we like, and say goodbye, in te reo.',
        succ:['I can say hello, my name and where I am from: Kia ora. Ko ___ ahau. Nō ___ ahau.','I can add how I feel and what I like: Kei te harikoa ahau. He pai ki a au te waiata.','I can have a short chat with a partner from hello to goodbye.'],
        wp:'Declare his glory among the nations, his wonderful deeds among all peoples.',
        ref:'Psalm 96:3',
        mom:'When we talk with someone, we get to share a little of who we are, and we get to listen to who they are. Every conversation is a chance to be kind and to point to God’s goodness. Small chats make a big difference, and that is Pānga.',
        q:'Who could you start a kind conversation with this week?',
        recall:[['How do you say: I am from ' + TOWN + '.','Nō ' + TOWN + ' ahau.'],['How do you say: I like sport.','He pai ki a au te hākinakina.'],['How do you say: We will pray to God.','Ka karakia tātou ki te Atua.']],
        rtag:'Terms 1 to 4',
        rtxt:'Remember when… Terms 1 to 4 (3 quick prompts)',
        refl:'What is one sentence from this year that you are proud you can say?',
        next:'Lesson B: He pātai tēnei (questions, answers and choose your path)',
        vsay:'Say each word and the class echoes, with an action: wave for tēnā koe, point at your chest for ahau, cup your hand to your ear for kōrero, smile wide for harikoa, hold your head gently for māharahara, mime a bus steering wheel for pahi, hold a pretend bag for kura, press your hands together for whakawhetai, wave goodbye for ka kite. There are no new words today: all ten are recalled from earlier weeks.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Ko, then the name, then ahau; Nō, then the place, then ahau. Prompt 3: mā (not nō) before runga pahi.',
        xresc:'Common error: mixing up Ko ___ ahau (I am …) and Nō ___ ahau (I am from …). Say: Ko is for who I am, Nō is for where I am from. Another common one: saying ki a ahau instead of ki a au.',
        xpron:'ahau = ah-HOW · māharahara = MAH-hah-RAH-hah-rah · harikoa = HAH-ree-KOR-ah · kōrero = KOH-reh-roh',
        cur:cu4('Communication (a short conversation from hello to goodbye: name, place, feelings, likes, getting there, thanks) · Language Knowledge (joining patterns: Ko … ahau; Nō … ahau; Kei te … ahau; He pai ki a au te …; Ka haere ahau … mā …; Kia ora mō te …) · Cultural Knowledge (kind conversation; starting with who and where we are from; thanking God)','Recycles Term 1 Weeks 1 to 3 and 6, Term 3 Week 4, Term 4 Weeks 2 and 5 to 7. ⚠ Wellbeing: feelings are practice and pretend, and nobody is asked about a real worry in front of the class. No new words, so this is a good lesson to notice which patterns need more time. Please have a fluent speaker confirm the order of the sentences in the full conversation.'),
        vr:valueRows('Psalm 96:3','When we talk with someone, we get to share a little of who we are, and we get to listen to who they are. Every conversation is a chance to be kind and to point to God’s goodness. Small chats make a big difference, and that is Pānga.','Who could you start a kind conversation with this week?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. Optional: write the conversation order on the board as pictures: wave (hello) · name card · map (place) · face (feeling) · heart (likes) · bus (getting there) · hands together (thanks) · wave (goodbye).','There are no new words this week. Listen for which pieces students find hard and note them for the Week 9 and 10 plans.','Please check the order of the sentences in the full conversation with your school’s te reo lead before teaching.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles. Practise the actions.'],
        three:'(1) A conversation is pieces joined together: <i>Kia ora. Ko Hana ahau. Nō ' + TOWN + ' ahau.</i> (2) <i>Ko</i> is for who I am, <i>Nō</i> is for where I am from. After <i>ki a</i> we say <i>au</i>. Use <i>mā</i> for how we go. (3) We can always ask the same question back: <i>Nō hea koe?</i> <i>He pai ki a koe te waiata?</i>',
        diff:['Echo as a whole class and use an action for every sentence. Say only the first three pieces (hello, name, place). Pair with a confident partner and allow whispering first.','Complete all steps. Have a short chat with a partner from hello to goodbye, using at least five pieces.','Add the getting-there sentence and a feelings sentence to your own chat, explain the order in English, and invite a classmate to ask you more questions.'],
        look:'Ko and Nō not mixed up; Kei te before the feeling; ki a au (not ki a ahau); mā before runga pahi; the long vowels in kōrero and māharahara; kind, patient listening.',
        nx:'revisit Ko / Nō and ki a au with students in Starting; add pātai, whakautu and a choose your path chat in Lesson B.',
        rec:'Term 1 Weeks 1 to 3 and 6, Term 3 Week 4 (Ka), Term 3 Week 9 (Kia ora mō …) and Term 4 Weeks 2 and 5 to 7 are recalled throughout. There is no new grammar and no new word this week; Lesson B adds two stretch words.'
      },
      D: {
        VOC:['kōrero','tēnā koe','ahau','nō','pēhea','harikoa','pahi','kura','whakawhetai','ka kite'],
        STEPS:[
          ['Quick recap: Hello. I am Hana. I am from ' + TOWN + '.','Kia~ora.|w Ko|k Hana|p ahau.|a Nō|k ' + TOWN + '|p ahau.|a','KEE-ah OR-ah. kor HAH-nah ah-HOW. nor ASH-bur-ton ah-HOW','Term 1: Ko is for who I am. Nō is for where I am from.',null,'Whole class'],
          ['New idea: a conversation goes back and forth. Ask: Where are you from? Answer: I am from ' + TOWN + '.','Nō|k hea|q* koe?|a Nō|k ' + TOWN + '|p ahau.|a','nor HEH-ah KOH-eh · nor ASH-bur-ton ah-HOW','Ask a question, then answer it. The same two patterns go back and forth.','Turn to the person next to you with your eyes only. Today we ask and answer. Nō hea koe? means where are you from. Take a moment… (wait 3 seconds)… Nō hea koe? Nō ' + TOWN + ' ahau. Say both with me.','Echo'],
          ['Next piece: How are you? I am happy.','Kei~te|k pēhea|q koe?|a Kei~te|k harikoa|q* ahau.|a','kay teh PEH-heh-ah KOH-eh · kay teh HAH-ree-KOR-ah ah-HOW','Term 1: Kei te + feeling + who.','Smile wide. You know Kei te pēhea koe. Take a moment… (wait 3 seconds)… Kei te pēhea koe? Kei te harikoa ahau. Say both with me.','Echo'],
          ['Join them: Hello. I am Hana. I am from ' + TOWN + '. I am happy.','Kia~ora.|w Ko|k Hana|p ahau.|a Nō|k ' + TOWN + '|p ahau.|a Kei~te|k harikoa|q ahau.|a*','KEE-ah OR-ah. kor HAH-nah ah-HOW. nor ASH-bur-ton ah-HOW. kay teh HAH-ree-KOR-ah ah-HOW','Four pieces in a row: hello, name, place, feeling.','Count the four pieces on your fingers. Hello, name, place, feeling. Take a moment… (wait 3 seconds)… Say them with me, one finger at a time.','Whole class'],
          ['Add what you like: I like singing. Do you like sport?','He|k pai|q ki~a|k au|a te|k waiata.|n* He|k pai|q ki~a|k koe|a te|k hākinakina?|n','heh PIE kee AH OW teh why-AH-tah · heh PIE kee AH KOH-eh teh HAH-kee-nah-kee-nah','Term 4 Week 7: after ki a we say au.','Hand on heart. After ki a we say au, never ahau. Take a moment… (wait 3 seconds)… He pai ki a au te waiata. He pai ki a koe te hākinakina? Say them with me.','Echo'],
          ['Answer: Yes, I like sport. No, I like dancing.','Āe,|w he|k pai|q ki~a|k au|a te|k hākinakina.|n Kāo,|w he|k pai|q ki~a|k au|a te|k kanikani.|n','AH-eh, heh PIE kee AH OW teh HAH-kee-nah-kee-nah · KAH-or, heh PIE kee AH OW teh KAH-nee-KAH-nee','Āe or Kāo, then something you like.',null,'Whole class'],
          ['Partner game: have a short chat. Greet, say your name, say where you are from, ask how they are, then say what you like. It is all pretend. Then swap.','Kia~ora.|w Ko|k ___|p ahau.|a Nō|k ___|p ahau.|a Kei~te|k pēhea|q koe?|a He|k pai|q ki~a|k au|a te|k ___.|n','KEE-ah OR-ah. kor ___ ah-HOW. nor ___ ah-HOW. kay teh PEH-heh-ah KOH-eh. heh PIE kee AH OW teh ___','Real conversation. Use your own name and a place you know.','Turn to your partner. Greet each other, say your name and where you are from, ask how they are, and say one thing you like. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Add how we will get to school: I will go to school by bus.','Ka|k haere|n ahau|a ki~te|k kura|n mā~runga|k pahi.|n*','kah HIGH-reh ah-HOW kee teh KOO-rah mah ROO-ngah PAH-hee','Term 4 Week 6: where first (ki te …), then how (mā …).','Mime holding a steering wheel. Where goes first, then how. Take a moment… (wait 3 seconds)… Ka haere ahau ki te kura mā runga pahi. Say it with me.','Echo'],
          ['Ask and answer: Will you go by bus? No, I will go on foot.','Ka|k haere|n koe|a mā~runga|k pahi?|n Kāo,|w ka|k haere|n ahau|a mā~te|k waewae.|n','kah HIGH-reh KOH-eh mah ROO-ngah PAH-hee · KAH-or, kah HIGH-reh ah-HOW mah teh WAH-eh-WAH-eh','Āe or Kāo, then say how you will go.',null,'Whole class'],
          ['A little worry, then courage and prayer: I am worried. Be brave! I will pray to God.','Kei~te|k māharahara|q* ahau.|a Kia|k māia!|q Ka|k karakia|n ahau|a ki~te|k Atua.|n','kay teh MAH-hah-RAH-hah-rah ah-HOW · KEE-ah MAH-ee-ah · kah KAH-rah-KEE-ah ah-HOW kee teh AH-too-ah','Term 4 Week 5: feelings, courage and prayer. Pretend only.','Hands together. This is pretend, and nobody has to share a real worry. Take a moment… (wait 3 seconds)… Kei te māharahara ahau. Kia māia! Ka karakia ahau ki te Atua. Say them with me.','Echo'],
          ['Say thank you and goodbye: Thank you for the school. See you!','Kia~ora|w mō~te|k kura.|n Ka~kite!|w','KEE-ah OR-ah mor teh KOO-rah. kah KEE-teh','Term 1 and Term 3: Kia ora mō te …',null,'Whole class'],
          ['Put it all together: eight pieces in one conversation.','Kia~ora.|w Ko|k Hana|p ahau.|a Nō|k ' + TOWN + '|p ahau.|a Kei~te|k harikoa|q ahau.|a He|k pai|q ki~a|k au|a te|k waiata.|n Ka|k haere|n ahau|a ki~te|k kura|n mā~runga|k pahi.|n Ka|k karakia|n ahau|a ki~te|k Atua.|n Kia~ora|w mō~te|k kura.|n Ka~kite!|w','KEE-ah OR-ah. kor HAH-nah ah-HOW. nor ASH-bur-ton ah-HOW. kay teh HAH-ree-KOR-ah ah-HOW. heh PIE kee AH OW teh why-AH-tah. kah HIGH-reh ah-HOW kee teh KOO-rah mah ROO-ngah PAH-hee. kah KAH-rah-KEE-ah ah-HOW kee teh AH-too-ah. KEE-ah OR-ah mor teh KOO-rah. kah KEE-teh','Terms 1 to 4 together. Say it one sentence at a time, then all at once.','Say this one sentence at a time, like building blocks. Each time, add one more block and say all of the blocks so far. If you stumble, that’s my fault, not yours. Echo me, a sentence at a time.','Echo'],
          ['Class chain: greet the next person, say your name and where you are from, ask how they are, they answer, then say goodbye.','Kia~ora.|w Ko|k ___|p ahau.|a Nō|k ___|p ahau.|a Kei~te|k pēhea|q koe?|a Kei~te|k ___|q ahau.|a Ka~kite!|w','KEE-ah OR-ah. kor ___ ah-HOW. nor ___ ah-HOW. kay teh PEH-heh-ah KOH-eh. kay teh ___ ah-HOW. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one, says their name and where they are from, and asks how they are. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ka Kōrero Tātou — We Will Talk',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te pēhea koe, Hana?','Hello, children! How are you, Hana?','(waves to the class)','T1W2'],
          ['Hana','Kei te harikoa ahau! Ko Hana ahau. Nō ' + TOWN + ' ahau.','I am happy! I am Hana. I am from ' + TOWN + '.','(smiles)','T4W2'],
          ['Kaiako Rose','Nō hea koe, Tama?','Where are you from, Tama?','(looks kindly at Tama)','T1W3'],
          ['Tama','Nō ' + TOWN + ' ahau. Kei te hīkaka ahau!','I am from ' + TOWN + '. I am excited!','(jumps gently)','T4W5'],
          ['Hana','He pai ki a koe te hākinakina, Tama?','Do you like sport, Tama?','(points to Tama)','T4W7'],
          ['Tama','Āe, he tino pai ki a au te whutupōro.','Yes, I really like rugby.','(catches a pretend ball)'],
          ['Kaiako Rose','Ka haere tātou ki te tākaro mā te waewae.','We will go to play on foot.','(points to the field)','T4W6'],
          ['Tama','Kei te māharahara ahau.','I am a little worried.','(looks at his shoes)','T4W5'],
          ['Hana','Kia māia, Tama! Ka āwhina ahau.','Be brave, Tama! I will help.','(takes his hand gently)','T3W9'],
          ['Kaiako Rose','Ka karakia tātou ki te Atua.','We will pray to God.','(bows her head)','T4W5'],
          ['Hana','Kia ora mō te kura!','Thank you for the school!','(hands together)','T1W9'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Every kind chat is a small gift. When we ask someone how they are, listen to the answer and share a little of who we are, we show them God’s kindness. Small chats make a big difference. That is where your Pānga, your impact, begins.','T1W9'],
          ['Tama','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I am Hana. I am from ' + TOWN + '.’','Ko Hana ahau. Nō ' + TOWN + ' ahau.'],['What does Kei te māharahara ahau mean?','I am worried.'],['Choose the word: Ka haere ahau ki te kura ____ runga pahi. (I will go to school by bus) (mā / nō)','mā'],['Say in te reo: ‘Do you like netball? Yes, I like netball.’','He pai ki a koe te poitūkohu? Āe, he pai ki a au te poitūkohu.'],['Stretch: say a short chat: hello, your name, where you are from, how you feel, then goodbye.','Kia ora. Ko ___ ahau. Nō ___ ahau. Kei te ___ ahau. Ka kite!']],
        CE:['Mixing up Ko (who I am) and Nō (where I am from)','Not knowing that māharahara means worried, or leaving out Kei te','Using nō instead of mā before runga pahi','Saying ki a ahau instead of ki a au, or leaving out te','Leaving out a piece of the order (name, place, feeling) or mixing up Ko and Nō'],
        T:'T4 W8 Lesson A',
        LP:{title:'Ka kōrero tātou — Let’s talk',val:'Pānga · Psalm 96:3',pat:['Kia ora. Ko ________ ahau. Nō ________ ahau.','Kei te ________ ahau. He pai ki a au te ________.','Ka haere ahau ki te kura mā ________. Ka kite!'],swap:'Order of a chat: hello · name · where from · feeling · what I like · getting there · thanks or prayer · goodbye. Feelings: harikoa · hīkaka · māharahara. How: mā runga pahi · mā te waewae.'}
      }
    };

    // ── Lesson B · He pātai tēnei — This is a question ──
    const B = {
      P: {
        t:4,
        w:8,
        l:'B',
        ch:'He|k pātai|n* tēnei.|k',
        sub:'Today we learn the words for question and answer, and we choose our own path through a conversation.',
        say:'Kia ora everyone! Last lesson we joined the pieces into a conversation. Today there are two stretch words. A pātai is a question, and a whakautu is an answer. We say He pātai tēnei, this is a question, and He whakautu tēnei, this is an answer. You already know the pattern He … tēnei from Term 2. Then we play choose your path. In a conversation there is not just one way to go, so we pause, and the class decides which way the chat goes. Still no writing: listen, think and speak. Everything is a sentence you already know.',
        pron:'pātai = PAH-tie · whakautu = FAH-kah-OO-too · tēnei = TEH-neh-ee · kapa haka = KAH-pah HAH-kah · mātou = MAH-toh · tātou = TAH-toh',
        li:'name a question and an answer, and have a longer conversation where the class chooses the path, using He pātai tēnei, He whakautu tēnei and sentences from Terms 1 to 4, in te reo.',
        succ:['I can say what a question and an answer are: He pātai tēnei. He whakautu tēnei.','I can ask a question and answer it, and ask about a friend: Nō hea ia? Nō ___ ia.','I can have a longer chat with a partner and choose a path (Āe or Kāo).'],
        wp:'Let your conversation be always full of grace.',
        ref:'Colossians 4:6',
        mom:'The way we talk matters. A question can show someone we care, and a kind answer can lift them up. When our words are full of grace, people feel welcome and see something of God in us. That is Pānga.',
        q:'What is one kind question you could ask someone this week?',
        recall:[['How do you say: Hello. I am Hana. I am from ' + TOWN + '.','Kia ora. Ko Hana ahau. Nō ' + TOWN + ' ahau.'],['How do you say: I will go to school by bus.','Ka haere ahau ki te kura mā runga pahi.'],['How do you say: I really like singing.','He tino pai ki a au te waiata.'],['How do you say: We give thanks to God.','E whakawhetai ana mātou ki te Atua.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'What is one question you enjoyed asking or answering today?',
        next:'Week 9: Thanksgiving (giving thanks and sharing our dreams)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: pātai (question, PAH-tie) and whakautu (answer, FAH-kah-OO-too). Raise one hand with an open palm for a question and put both hands out for an answer. Remind the class that He … tēnei is the Term 2 pattern.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In lines 6 and 7 the class chooses the path: Path 1 is Ka haere ahau mā runga pahi, and Path 2 is Ka haere ahau mā te waewae. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: pātai is a question. Prompt 3: ia (she or he) and not ahau (I).',
        xresc:'Common error: mixing up pātai (question) and whakautu (answer), or saying ahau when asking about someone else. Say: pātai starts with a question mark, and we use ia for someone else.',
        xpron:'pātai = PAH-tie · whakautu = FAH-kah-OO-too · ia = EE-ah · mātou = MAH-toh',
        cur:cu4('Communication (naming a question and an answer, asking and answering about a friend, having a longer chat where the class chooses a path) · Language Knowledge (He pātai tēnei; He whakautu tēnei; Nō hea ia? Nō ___ ia; Āe / Kāo; group words mātou / tātou; sentences from Terms 1 to 4) · Cultural Knowledge (kind questions and gracious words; kapa haka and waiata as shared joy)','Recycles Lesson A, Term 1 Weeks 2 and 3, Term 2 Week 1 (He … tēnei), Term 3 Weeks 8 and 9, and Term 4 Weeks 2 and 5 to 7. ⚠ Wellbeing: nobody is asked to share a real worry, and the choose your path chat uses pretend answers. Please have a fluent speaker confirm He pātai tēnei, He whakautu tēnei and Haere mai ki te kōrero.'),
        vr:valueRows('Colossians 4:6','The way we talk matters. A question can show someone we care, and a kind answer can lift them up. When our words are full of grace, people feel welcome and see something of God in us. That is Pānga.','What is one kind question you could ask someone this week?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add pātai (question) and whakautu (answer) as the two stretch words.','Make two path cards for the choose your path game: a green card (Āe) and a blue card (Kāo). The class holds up a card to choose the path.','Please check the sentences with your school’s te reo lead.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles. Practise the actions: open palm for a question, both hands out for an answer.'],
        three:'(1) <i>He pātai tēnei</i> = this is a question. <i>He whakautu tēnei</i> = this is an answer. (2) <i>Nō hea ia?</i> = where is she or he from? <i>Nō ' + TOWN + ' ia.</i> (3) Choose your path: <i>Āe</i> or <i>Kāo</i>, then the sentence that follows. Everything else is a sentence you already know.',
        diff:['Echo as a whole class and use an action for every sentence. Say only He pātai tēnei and He whakautu tēnei at first. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer with a partner, and use the green and blue cards to choose a path.','Add pātai and whakautu to your own chat, ask about a friend with ia, explain in English why we say Nō hea ia, and invite a classmate to ask you more questions.'],
        look:'He pātai and He whakautu not mixed up; ia (not ahau) for someone else; Āe or Kāo before the answer; the order of the chat; kind, patient listening.',
        nx:'revisit pātai and whakautu with students in Starting; move to Week 9 (Thanksgiving).',
        rec:'Lesson A, Term 1 Weeks 2, 3 and 6, Term 2 Week 1 (He … tēnei), Term 3 Weeks 8 and 9 (Haere mai ki te …, Kia ora mō …) and Term 4 Weeks 2 and 5 to 7 are recalled in the warm-up, steps and drama. Week 9 starts a new theme (thanksgiving).'
      },
      D: {
        VOC:[...A.D.VOC,'pātai','whakautu'],
        STEPS:[
          ['Quick recap: Hello. I am Hana. I am from ' + TOWN + '. I am excited.','Kia~ora.|w Ko|k Hana|p ahau.|a Nō|k ' + TOWN + '|p ahau.|a Kei~te|k hīkaka|q ahau.|a','KEE-ah OR-ah. kor HAH-nah ah-HOW. nor ASH-bur-ton ah-HOW. kay teh HEE-kah-kah ah-HOW','Lesson A: hello, name, place, feeling.',null,'Whole class'],
          ['Quick recap: I like singing. I will go on foot.','He|k pai|q ki~a|k au|a te|k waiata.|n Ka|k haere|n ahau|a mā~te|k waewae.|n','heh PIE kee AH OW teh why-AH-tah · kah HIGH-reh ah-HOW mah teh WAH-eh-WAH-eh','Term 4 Weeks 6 and 7.',null,'Whole class'],
          ['New word: pātai means question. How would you say: This is a question.','He|k pātai|n* tēnei.|k','heh PAH-tie TEH-neh-ee','He … tēnei = this is a … (Term 2 Week 1).','Raise one hand with an open palm. Pātai means question. It is the same pattern you know from Term 2: He, the thing, then tēnei. Take a moment… (wait 3 seconds)… He pātai tēnei. Say it with me.','Echo'],
          ['New word: whakautu means answer. How would you say: This is an answer.','He|k whakautu|n* tēnei.|k','heh FAH-kah-OO-too TEH-neh-ee','Same pattern, new word. Say it in chunks: whaka, u, tu.','Put both hands out in front of you. Whakautu means answer. Wh sounds like f. Say it in chunks: whaka, utu. Take a moment… (wait 3 seconds)… He whakautu tēnei. Say it with me.','Echo'],
          ['A question and its answer: Where are you from? I am from ' + TOWN + '.','He|k pātai|n tēnei:|k Nō|k hea|q koe?|a He|k whakautu|n tēnei:|k Nō|k ' + TOWN + '|p ahau.|a','heh PAH-tie TEH-neh-ee: nor HEH-ah KOH-eh · heh FAH-kah-OO-too TEH-neh-ee: nor ASH-bur-ton ah-HOW','Label the question and the answer.',null,'Whole class'],
          ['About a friend: Where is she from? She is from Methven.','Nō|k hea|q ia?|a Nō|k Methven|p ia.|a*','nor HEH-ah EE-ah · nor METH-ven EE-ah','Term 1 Week 3: ia = he or she. Use ia for someone else.','Point at a picture of a person, not a student. Nō hea ia? asks about someone else. Take a moment… (wait 3 seconds)… Nō hea ia? Nō Methven ia. Say both with me.','Echo'],
          ['Choose your path: Do you want to play? Path 1: Yes, we will go and play. Path 2: No, I like singing.','Kei~te|k pīrangi|n koe|a ki~te|k tākaro?|n Āe,|w ka|k haere|n tātou|a ki~te|k tākaro.|n* Kāo,|w he|k pai|q ki~a|k au|a te|k waiata.|n','kay teh PEE-rah-ngee KOH-eh kee teh TAH-kah-roh · AH-eh, kah HIGH-reh TAH-toh kee teh TAH-kah-roh · KAH-or, heh PIE kee AH OW teh why-AH-tah','Āe or Kāo, then a sentence. The class chooses the path.','Hold up the green card for Āe and the blue card for Kāo. Ask the question, then let the class choose a path by holding up a card. Take a moment… (wait 3 seconds)… Kei te pīrangi koe ki te tākaro? Now we say the answer for the path you chose. Say it with me.','Whole class'],
          ['A group answer: We really like kapa haka. We are excited.','He|k tino|q pai|q ki~a|k mātou|a te|k kapa~haka.|n Kei~te|k hīkaka|q mātou.|a*','heh TEE-nor PIE kee AH MAH-toh teh KAH-pah HAH-kah · kay teh HEE-kah-kah MAH-toh','Term 3 Week 7 and Term 4 Week 7: mātou = we (not including you).',null,'Whole class'],
          ['Partner game, choose your path: one asks a question, the other answers Āe or Kāo and chooses a path. Then say a thank you. It is all pretend. Then swap.','Nō|k hea|q koe?|a Nō|k ___|p ahau.|a He|k pai|q ki~a|k koe|a te|k ___?|n Āe,|w he|k pai|q ki~a|k au.|a Kia~ora|w mō~te|k kōrero.|n','nor HEH-ah KOH-eh · nor ___ ah-HOW · heh PIE kee AH KOH-eh teh ___ · AH-eh, heh PIE kee AH OW · KEE-ah OR-ah mor teh KOH-reh-roh','Ask your partner two questions and answer two. You choose your own path!','Turn to your partner. One of you asks Nō hea koe? and then He pai ki a koe te …? The other answers, choosing Āe or Kāo, and then says Kia ora mō te kōrero. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Thanks and prayer: We give thanks to God. Thank you for your help.','E~whakawhetai|k ana|k mātou|a ki~te|k Atua.|n Kia~ora|w mō~tō|k āwhina.|n','eh FAH-kah-FEH-tye AH-nah MAH-toh kee teh AH-too-ah · KEE-ah OR-ah mor tor AH-fee-nah','Term 4 Week 5 and Term 3 Week 9.',null,'Whole class'],
          ['Invite someone: Come and talk!','Haere|n mai|x ki~te|k kōrero!|n*','HIGH-reh MY kee teh KOH-reh-roh','Haere mai ki te … = come to the … (Term 3 Week 8). Everyone is welcome.','Open your arms wide. You know Haere mai ki te kai from Term 3 and Haere mai ki te tākaro from last week. Today we invite someone to talk. Everyone is welcome, especially someone on their own. Say it with me.','Whole class'],
          ['Put it all together: a longer chat with a choose your path moment.','Kia~ora.|w Nō|k hea|q koe?|a Nō|k ' + TOWN + '|p ahau.|a Kei~te|k hīkaka|q ahau.|a He|k pai|q ki~a|k koe|a te|k waiata?|n Āe,|w he|k tino|q pai|q ki~a|k au.|a Ka|k haere|n koe|a mā~runga|k pahi?|n Āe,|w ka|k haere|n ahau|a mā~runga|k pahi.|n Kia~ora|w mō~te|k kōrero.|n Ka~kite!|w','KEE-ah OR-ah. nor HEH-ah KOH-eh. nor ASH-bur-ton ah-HOW. kay teh HEE-kah-kah ah-HOW. heh PIE kee AH KOH-eh teh why-AH-tah. AH-eh, heh TEE-nor PIE kee AH OW. kah HIGH-reh KOH-eh mah ROO-ngah PAH-hee. AH-eh, kah HIGH-reh ah-HOW mah ROO-ngah PAH-hee. KEE-ah OR-ah mor teh KOH-reh-roh. kah KEE-teh','Terms 1 to 4 together. At each Āe or Kāo the class can choose a path.','Say this one sentence at a time. Where there is a question, the class chooses Āe or Kāo with the green or blue card, and we say the answer for that path. If you stumble, that’s my fault, not yours.','Whole class'],
          ['Class chain: greet the next person, ask where they are from, they answer, you ask what they like, they answer, then say thank you and goodbye.','Tēnā~koe.|w Nō|k hea|q koe?|a Nō|k ___|p ahau.|a He|k pai|q ki~a|k koe|a te|k ___?|n Āe,|w he|k pai|q ki~a|k au.|a Kia~ora|w mō~te|k kōrero.|n Ka~kite!|w','TEH-nah KOH-eh. nor HEH-ah KOH-eh. nor ___ ah-HOW. heh PIE kee AH KOH-eh teh ___. AH-eh, heh PIE kee AH OW. KEE-ah OR-ah mor teh KOH-reh-roh. kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next one, asks where they are from and what they like, and the next person answers. Then say thank you and goodbye. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Kōrero a Kuia — Kuia’s Chat',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Nō hea koe, Hana?','Hello, children! Where are you from, Hana?','(opens her arms)','T1W3'],
          ['Hana','Nō ' + TOWN + ' ahau, Kuia.','I am from ' + TOWN + ', Kuia.','(smiles)','T4W2'],
          ['Kuia Mere','He pātai tēnei: nō hea ia?','This is a question: where is he from?','(points to Tama, gently)'],
          ['Hana','He whakautu tēnei: nō ' + TOWN + ' ia.','This is an answer: he is from ' + TOWN + '.','(nods to Tama)'],
          ['Tama','Kei te hīkaka ahau! Ka haere tātou ki te whare karakia.','I am excited! We will go to church.','(jumps gently)','T4W5'],
          ['Kuia Mere','Ka haere koe mā runga pahi?','Will you go by bus?','(CLASS CHOOSES THE PATH: hold up the green card for Āe or the blue card for Kāo.)','T4W6'],
          ['Tama','Āe, ka haere ahau mā runga pahi.','Yes, I will go by bus.','(Path 2, if the class chose Kāo: Kāo, ka haere ahau mā te waewae.)','T4W6'],
          ['Hana','He pai ki a au te waiata. He pai ki a koe te waiata, Kuia?','I like singing. Do you like singing, Kuia?','(turns to Kuia)','T4W7'],
          ['Kuia Mere','Āe, he tino pai ki a au te waiata!','Yes, I really like singing!','(claps gently)'],
          ['Tama','Haere mai ki te waiata, Hana!','Come and sing, Hana!','(opens his arms)','T4W7'],
          ['Hana','E whakawhetai ana mātou ki te Atua.','We give thanks to God.','(hands together)','T4W5'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) The way we talk matters. A kind question can show someone we care, and a gentle answer can lift them up. When our words are full of grace, people feel welcome and see something of God in us. That is Pānga.','T1W9'],
          ['Hana','Kia ora, Kuia. Ka kite!','Thank you, Kuia. See you!','(Tama waves too)','T1W9']]},
        EX:[['What does pātai mean?','Question.'],['Say in te reo: ‘This is an answer.’','He whakautu tēnei.'],['Choose the word: Nō hea ____? (Where is she from?) (ia / ahau)','ia'],['Say in te reo: ‘We really like kapa haka. We are excited.’','He tino pai ki a mātou te kapa haka. Kei te hīkaka mātou.'],['Stretch: ask your partner where they are from, answer, then ask if they like singing.','Nō hea koe? Nō ___ ahau. He pai ki a koe te waiata?']],
        CE:['Mixing up pātai (question) and whakautu (answer)','Leaving out He or tēnei, or mixing up pātai and whakautu','Saying ahau (I) when asking about someone else; we say ia (she or he)','Mixing up mātou (we, not including you) and koutou (you all), or leaving out tino','Mixing up Ko and Nō, or leaving out He pai ki a koe te … in the question'],
        T:'T4 W8 Lesson B',
        LP:{title:'He pātai tēnei — This is a question',val:'Pānga · Colossians 4:6',pat:['He pātai tēnei: Nō hea koe?','He whakautu tēnei: Nō ________ ahau.','Āe, he pai ki a au te ________. Kia ora mō te kōrero.'],swap:'Ask: Nō hea koe? · Nō hea ia? · He pai ki a koe te ___? Answer: Āe / Kāo. Stretch: pātai (question) · whakautu (answer). Invite: Haere mai ki te kōrero!'}
      }
    };

    addLessons({ '4.8.A': A, '4.8.B': B });
  }

  /* ──────── WEEK 9 · Thanksgiving ──────── */
  {
    // Theme: giving thanks (Lesson A) and our dreams / vision, with the school motto in Latin (Lesson B).
    // New words: taonga (A) · moemoeā, whakamoemiti (B stretch). Everything else is recalled.
    // New sentence frames: E whakawhetai ana ahau (ki te Atua) mō te … · He taonga tōku whānau / te … · He aha tō moemoeā? · Ko tōku moemoeā, ka … ahau · Kei te whakamoemiti tātou ki te Atua.
    // Recalled: whakawhetai, mō, whānau, hoa, kaiako, kura, kai, whenua, āwhina, tiaki, karakia, tamariki, hīkaka, Kia ora mō te …, Ka pai, Kia kaha.
    // ⚠ Soli Deo Gloria is kept in Latin. NO Māori rendering was invented (kororia was not used).
    // ⚠ For a fluent speaker to check: Ko tōku moemoeā (tōku / tō / tōna moemoeā) and whakamoemiti.
    addGlossary({
      "taonga":["treasure / something precious","TOW-ngah",9,4],
      "moemoeā":["dream / vision (a hope for the future)","MOH-eh-MOH-eh-AH",9,4],
      "whakamoemiti":["praise / worship","FAH-kah-MOH-eh-MEE-tee",9,4]
    });

    // ── Lesson A · E whakawhetai ana ahau — I give thanks ──
    const A = {
      P: {
        t:4,
        w:9,
        l:'A',
        ch:'E~whakawhetai|k ana|k ahau|a ki~te|k Atua|n mō~te|k kai.|n*',
        sub:'Today we say thank you to God, and to the people around us, for the gifts we have.',
        say:'Kia ora everyone! This is our thanksgiving week. All year you have learned to say who you are, where you are from, how you feel and what you like. This week we say thank you. You already know E whakawhetai ana mātou ki te Atua from our karakia, and Kia ora mō te kai from Term 1. Today we put them together so you can say what you are thankful for, one thing at a time. There is one new word, taonga, which means a treasure. Still no writing: listen, think and speak. If you forget a word, that is my fault, not yours. I will say it again more slowly.',
        pron:'whakawhetai = FAH-kah-FEH-tye · taonga = TOW-ngah (ng as in singer) · whānau = FAH-now · whenua = FEH-noo-ah · mō = MOR · Atua = AH-too-ah',
        li:'say thank you to God and to people for the things we are thankful for, using E whakawhetai ana ahau … mō … and He taonga …, in te reo.',
        succ:['I can say thank you for a thing: E whakawhetai ana ahau mō te kai.','I can say thank you to God for something: E whakawhetai ana ahau ki te Atua mō tōku whānau.','I can say what is a treasure to me: He taonga tōku whānau.'],
        wp:'I will give thanks to the Lord with all my heart; I will tell of all his wonderful deeds.',
        ref:'Psalm 9:1',
        mom:'Giving thanks is a way of noticing the good gifts God has put around us: people, food, land and friends. When we say thank you, we remember that every good thing is a gift, and our hearts grow bigger. A thankful heart is where our Pānga, our impact, begins.',
        q:'What is one gift in your life that you want to thank God for this week?',
        recall:[['How do you say: We give thanks to God.','E whakawhetai ana mātou ki te Atua.'],['How do you say: Thank you for your help.','Kia ora mō tō āwhina.'],['How do you say: I will look after the land.','Ka tiaki ahau i te whenua.']],
        rtag:'Terms 1 to 4',
        rtxt:'Remember when… Terms 1 to 4 (3 quick prompts)',
        refl:'What is one thing you said thank you for today that you do not usually think about?',
        next:'Lesson B: Ko tōku moemoeā (our dreams, and giving the glory to God)',
        vsay:'Say each word and the class echoes, with an action: hands together for whakawhetai, cup both hands as if holding something very precious for taonga, make a roof over your head with your hands for whānau, point to a friend for hoa, point like a teacher for kaiako, hold a pretend bag for kura, hand to mouth for kai, sweep your hand across the floor for whenua, open one hand outward for mō (for), and offer a helping hand for āwhina. Only taonga is new today: the other nine are recalled from earlier weeks.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: mō te before the thing, and ahau for I. Prompt 3: ki (not mō) before te Atua. Prompt 4: He taonga, then tōku.',
        xresc:'Common error: mixing up ki (to God) and mō (for the thing). Say: ki goes with who we thank, mō goes with what we thank for. Another common one: saying tāku instead of tōku. Family and friends take tōku.',
        xpron:'whakawhetai = FAH-kah-FEH-tye · taonga = TOW-ngah · whānau = FAH-now · whenua = FEH-noo-ah',
        cur:cu4('Communication (saying thank you to God and to people, naming what we are thankful for, saying what is precious to us) · Language Knowledge (E whakawhetai ana ahau (ki te Atua) mō te …; He taonga tōku … / te …; E whakawhetai ana koe mō te …? Āe / Kāo; E te Atua … Āmine) · Cultural Knowledge (taonga as something precious; thanksgiving as part of karakia; gratitude for people and land)','Recycles Term 1 Week 9 (Kia ora mō te …), Term 2 Week 7 (tōku), Term 3 Weeks 8 and 9 (E whakawhetai ana mātou mō te kai; Kia ora mō tō āwhina), Term 4 Weeks 4 and 5 (tiaki; E whakawhetai ana mātou ki te Atua). ⚠ Whānau look different for every student, so whānau means the people who love and look after you. Nobody is asked to share anything private. Please have a fluent speaker confirm E whakawhetai ana ahau ki te Atua mō te … and He taonga tōku whānau.'),
        vr:valueRows('Psalm 9:1','Giving thanks is a way of noticing the good gifts God has put around us: people, food, land and friends. When we say thank you, we remember that every good thing is a gift, and our hearts grow bigger. A thankful heart is where our Pānga, our impact, begins.','What is one gift in your life that you want to thank God for this week?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. Optional: bring picture cards of things to be thankful for (kai, kura, whenua, whānau, hoa).','Only one new word today: taonga. Optional: hold up something precious (a photo frame or a shell) when you teach it.','⚠ Whānau look different for every student. Say that whānau means the people who love and look after you, and never ask a student to share anything private. The prayer step is an invitation, never a requirement. Please check the sentences with your school’s te reo lead.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles. Practise the actions.'],
        three:'(1) <i>E whakawhetai ana ahau mō te kai</i> = I give thanks for the food. Add <i>ki te Atua</i> to thank God. (2) <i>ki</i> goes with who we thank, <i>mō</i> goes with what we thank for. (3) <i>He taonga tōku whānau</i> = my family is a treasure. A <i>taonga</i> is something precious.',
        diff:['Echo as a whole class and use an action for every sentence. Say only E whakawhetai ana ahau mō te kai and He taonga tōku whānau. Pair with a confident partner and allow whispering first.','Complete all steps. Say two thanks to a partner, use ki te Atua and mō, and say what is a taonga to you.','Add your own things to thank God for, explain in English the difference between ki and mō, and ask a classmate E whakawhetai ana koe mō te …?'],
        look:'ki before te Atua and mō before the thing; ahau for I; He taonga then tōku (not tāku); the long vowels in whānau and whenua; kind, respectful voices during the prayer.',
        nx:'revisit ki and mō with students in Starting; add moemoeā, whakamoemiti and the school motto in Lesson B.',
        rec:'Term 1 Week 9 (Kia ora mō …), Term 2 Week 7 (tōku), Term 3 Weeks 8 and 9, and Term 4 Weeks 4 and 5 are recalled in the warm-up, steps and drama. Lesson B adds two stretch words.'
      },
      D: {
        VOC:['whakawhetai','taonga','whānau','hoa','kaiako','kura','kai','whenua','mō','āwhina'],
        STEPS:[
          ['Quick recap: We give thanks to God.','E~whakawhetai|k ana|k mātou|a ki~te|k Atua.|n','eh FAH-kah-FEH-tye AH-nah MAH-toh kee teh AH-too-ah','Term 4 Week 5 and our karakia: E whakawhetai ana + who + ki te Atua.',null,'Whole class'],
          ['Quick recap: Thank you for the food. Thank you for your help.','Kia~ora~mō~te~kai.|w Kia~ora~mō~tō~āwhina.|w','KEE-ah OR-ah mor teh KYE · KEE-ah OR-ah mor tor AH-fee-nah','Term 1 Week 9 and Term 3 Week 9: Kia ora mō …',null,'Whole class'],
          ['New idea: say what you are thankful for. How would you say: I give thanks for the food.','E~whakawhetai|k ana|k ahau|a mō~te|k kai.|n*','eh FAH-kah-FEH-tye AH-nah ah-HOW mor teh KYE','Term 3 Week 8: E whakawhetai ana + who + mō te + thing.','Hands together. You already know E whakawhetai ana mātou from our karakia. Today it is just you: ahau. Mō means for, so mō te kai is for the food. Take a moment… (wait 3 seconds)… E whakawhetai ana ahau mō te kai. Say it with me.','Echo'],
          ['Swap the thing: I give thanks for the school. I give thanks for my family. I give thanks for my friend.','E~whakawhetai|k ana|k ahau|a mō~te|k kura.|n E~whakawhetai|k ana|k ahau|a mō~tōku|k whānau.|n E~whakawhetai|k ana|k ahau|a mō~tōku|k hoa.|n*','eh FAH-kah-FEH-tye AH-nah ah-HOW mor teh KOO-rah · … mor TOH-koo FAH-now · … mor TOH-koo HOR-ah','Mō te + a thing; mō tōku + family or a friend.',null,'Whole class'],
          ['Add who you thank: I give thanks to God for my family.','E~whakawhetai|k ana|k ahau|a ki~te|k Atua|n* mō~tōku|k whānau.|n','eh FAH-kah-FEH-tye AH-nah ah-HOW kee teh AH-too-ah mor TOH-koo FAH-now','ki te Atua = to God (who we thank). mō = what we thank for.','Look up and put your hands together. Ki means to, so ki te Atua is to God. Then mō tells us what we are thankful for. Take a moment… (wait 3 seconds)… E whakawhetai ana ahau ki te Atua mō tōku whānau. Say it with me.','Echo'],
          ['New word: taonga means treasure. How would you say: My family is a treasure.','He|k taonga|n* tōku|k whānau.|n','heh TOW-ngah TOH-koo FAH-now','He + the thing + tōku + the person (Term 2). A taonga is something precious.','Cup both hands as if you are holding something very precious. A taonga is a treasure. Ng sounds like the end of singer: TOW-ngah. Your whānau means the people who love you and look after you, whoever they are. Take a moment… (wait 3 seconds)… He taonga tōku whānau. Say it with me.','Echo'],
          ['Swap the treasure: The school is a treasure. My friend is a treasure. The land is a treasure.','He|k taonga|n te|k kura.|n He|k taonga|n tōku|k hoa.|n He|k taonga|n te|k whenua.|n*','heh TOW-ngah teh KOO-rah · heh TOW-ngah TOH-koo HOR-ah · heh TOW-ngah teh FEH-noo-ah','te for things, tōku for my family and friends.',null,'Whole class'],
          ['Partner game: tell your partner one thing you thank God for, then say one person who is a treasure to you. It is all pretend. Then swap.','E~whakawhetai|k ana|k ahau|a ki~te|k Atua|n mō~te|k ___.|n He|k taonga|n tōku|k ___.|n','eh FAH-kah-FEH-tye AH-nah ah-HOW kee teh AH-too-ah mor teh ___ · heh TOW-ngah TOH-koo ___','Use your own words: kai, kura, whenua, whānau, hoa.','Turn to your partner. Take turns. Say E whakawhetai ana ahau ki te Atua mō te, and a thing, like kai or kura. Then say He taonga tōku, and whānau or hoa. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Ask and answer: Do you give thanks for the school? Yes, I give thanks for the school. No, I give thanks for the food.','E~whakawhetai|k ana|k koe|a mō~te|k kura?|n Āe,|w e~whakawhetai|k ana|k ahau|a mō~te|k kura.|n Kāo,|w e~whakawhetai|k ana|k ahau|a mō~te|k kai.|n*','eh FAH-kah-FEH-tye AH-nah KOH-eh mor teh KOO-rah · AH-eh, eh FAH-kah-FEH-tye AH-nah ah-HOW mor teh KOO-rah · KAH-or, eh FAH-kah-FEH-tye AH-nah ah-HOW mor teh KYE','Āe or Kāo, then say what you give thanks for.',null,'Whole class'],
          ['A group: We give thanks to God for the land.','E~whakawhetai|k ana|k tātou|a* ki~te|k Atua|n mō~te|k whenua.|n','eh FAH-kah-FEH-tye AH-nah TAH-toh kee teh AH-too-ah mor teh FEH-noo-ah','tātou = all of us, including you.','Open your arms wide to show everyone in the room. Tātou means all of us. Take a moment… (wait 3 seconds)… E whakawhetai ana tātou ki te Atua mō te whenua. Say it with me.','Echo'],
          ['A thank-you prayer: Lord, we give thanks for the food. Amen.','E~te|k Atua,|n e~whakawhetai|k ana|k mātou|a mō~te|k kai.|n Āmine.|w*','eh teh AH-too-ah, eh FAH-kah-FEH-tye AH-nah MAH-toh mor teh KYE. AH-mee-neh','E te Atua is how our own karakia begins. Nobody has to join in.','Bow your heads and put your hands together. This is an invitation, and nobody has to join in. E te Atua is how our own opening karakia begins. Take a moment… (wait 3 seconds)… E te Atua, e whakawhetai ana mātou mō te kai. Āmine. Say it with me.','Echo'],
          ['Put it all together: thanks, a treasure, a friend, and goodbye.','Kia~ora.|w E~whakawhetai|k ana|k ahau|a ki~te|k Atua|n mō~tōku|k whānau.|n He|k taonga|n tōku|k whānau.|n E~whakawhetai|k ana|k ahau|a mō~tōku|k hoa.|n Kia~ora~mō~tō~āwhina.|w Ka~kite!|w','KEE-ah OR-ah. eh FAH-kah-FEH-tye AH-nah ah-HOW kee teh AH-too-ah mor TOH-koo FAH-now. heh TOW-ngah TOH-koo FAH-now. eh FAH-kah-FEH-tye AH-nah ah-HOW mor TOH-koo HOR-ah. KEE-ah OR-ah mor tor AH-fee-nah. kah KEE-teh','Terms 1 to 4 together. Say it one sentence at a time, then all at once.','Say this one sentence at a time, like building blocks. Each time, add one more block and say all of the blocks so far. If you stumble, that’s my fault, not yours. Echo me, a sentence at a time.','Echo'],
          ['Class chain: say one thing you thank God for, then greet the next person by name.','E~whakawhetai|k ana|k ahau|a ki~te|k Atua|n mō~te|k ___.|n Kia~ora,|w ___.|p','eh FAH-kah-FEH-tye AH-nah ah-HOW kee teh AH-too-ah mor teh ___. KEE-ah OR-ah, ___','Real thanks in your own words.','Pass it around the circle. Each person says one thing they thank God for, then says Kia ora and the name of the next person. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'E Whakawhetai Ana Tātou — We Give Thanks',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te pēhea koe, Tama?','Hello, children! How are you, Tama?','(waves to the class)','T1W2'],
          ['Tama','Kei te harikoa ahau! E whakawhetai ana ahau mō te kai.','I am happy! I give thanks for the food.','(rubs his tummy)','T3W8'],
          ['Hana','E whakawhetai ana ahau ki te Atua mō tōku whānau.','I give thanks to God for my family.','(hands together)'],
          ['Kaiako Rose','He taonga tōku whānau.','My family is a treasure.','(cups her hands gently)'],
          ['Tama','He taonga tōku hoa.','My friend is a treasure.','(smiles at Hana)'],
          ['Hana','Kia ora mō tō āwhina, Tama.','Thank you for your help, Tama.','(nods)','T3W9'],
          ['Tama','Ka āwhina ahau i tōku hoa.','I will help my friend.','(gives a thumbs up)','T3W9'],
          ['Kaiako Rose','He taonga te whenua. Ka tiaki tātou i te whenua.','The land is a treasure. We will look after the land.','(points outside)','T4W4'],
          ['Hana','E whakawhetai ana tātou ki te Atua mō te whenua.','We give thanks to God for the land.','(opens her arms wide)'],
          ['Kaiako Rose','Ka karakia tātou ki te Atua.','We will pray to God.','(bows her head)','T4W5'],
          ['Tama','E te Atua, e whakawhetai ana mātou mō te kai. Āmine.','Lord, we give thanks for the food. Amen.','(hands together, eyes closed)'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Saying thank you is one of the simplest ways to show God’s love. When we notice the gifts around us, and say thank you to God and to each other, joy grows in us and we want to share it. A thankful heart is where your Pānga, your impact, begins.','T1W9'],
          ['Hana','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I give thanks for the food.’','E whakawhetai ana ahau mō te kai.'],['What does taonga mean?','Treasure (something precious).'],['Choose the word: E whakawhetai ana ahau ____ te Atua mō tōku whānau. (to God) (ki / mō)','ki'],['Say in te reo: ‘My friend is a treasure.’','He taonga tōku hoa.'],['Stretch: say thank you to God for something, then ask your partner if they give thanks for it.','E whakawhetai ana ahau ki te Atua mō ___. E whakawhetai ana koe mō ___?']],
        CE:['Leaving out mō te (E whakawhetai ana ahau te kai), or mixing up ahau and mātou','Thinking taonga only means a present; it means something precious to us','Using mō instead of ki before te Atua (ki is for to, mō is for for)','Using tāku instead of tōku, or leaving out He','Leaving out mō before the thing, or saying ahau instead of koe when asking the partner'],
        T:'T4 W9 Lesson A',
        LP:{title:'E whakawhetai ana ahau — I give thanks',val:'Pānga · Psalm 9:1',pat:['E whakawhetai ana ahau mō te ________.','E whakawhetai ana ahau ki te Atua mō tōku ________.','He taonga tōku ________. Kia ora mō tō āwhina.'],swap:'Swap the thing: kai · kura · whenua · tōku whānau · tōku hoa. Swap the person: ahau · koe · tātou. Prayer: E te Atua, e whakawhetai ana mātou mō te kai. Āmine.'}
      }
    };

    // ── Lesson B · Ko tōku moemoeā — My dream ──
    const B = {
      P: {
        t:4,
        w:9,
        l:'B',
        ch:'Ko|k tōku|k moemoeā,|n* ka|k āwhina|n ahau.|a',
        sub:'Today we share our dreams for the future, and we give the glory to God.',
        say:'Kia ora everyone! Last lesson we said thank you. Today we look forward. We learn the word moemoeā, which means a dream or a vision, a hope for the future. Our dreams are sentences you already know, joined to a new beginning: Ko tōku moemoeā, then Ka and what we will do. We also learn whakamoemiti, which means to praise. And we say our school motto, Soli Deo Gloria. That is Latin, not te reo, and it means to God alone the glory. We keep it just as it is. Still no writing: listen, think and speak. Everything else is a sentence you already know.',
        pron:'moemoeā = MOH-eh-MOH-eh-AH · whakamoemiti = FAH-kah-MOH-eh-MEE-tee · tōku = TOH-koo · tō = TOR · Soli Deo Gloria = SOH-lee DAY-oh GLOH-ree-ah',
        li:'share a dream for the future, say what we will do to make a difference, and praise God, using He aha tō moemoeā?, Ko tōku moemoeā, ka … ahau and Kei te whakamoemiti …, in te reo.',
        succ:['I can ask and say what a dream is: He aha tō moemoeā? Ko tōku moemoeā …','I can say what I will do: Ko tōku moemoeā, ka tiaki ahau i te whenua.','I can praise God and say our motto: Kei te whakamoemiti tātou ki te Atua. Soli Deo Gloria.'],
        wp:'You are worthy, our Lord and God, to receive glory and honour and power, for you created all things.',
        ref:'Revelation 4:11',
        mom:'A dream is a picture of the future we hope for. As followers of Jesus, our biggest dream is that God’s goodness reaches more people through us. When we are kind, look after the land or help a friend, we make a difference. Everything we do can give glory to God. That is Pānga, and that is Soli Deo Gloria.',
        q:'What is one small thing you could do this week to make a difference for someone else?',
        recall:[['How do you say: I give thanks to God for my family.','E whakawhetai ana ahau ki te Atua mō tōku whānau.'],['How do you say: My friend is a treasure.','He taonga tōku hoa.'],['How do you say: I will help my friend.','Ka āwhina ahau i tōku hoa.'],['How do you say: I am excited.','Kei te hīkaka ahau.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'What is one dream you have for how you can make a difference?',
        next:'Week 10: Hui Whakamutunga (our year showcase for whānau)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: moemoeā (dream or vision, MOH-eh-MOH-eh-AH) and whakamoemiti (praise, FAH-kah-MOH-eh-MEE-tee). Shade your eyes with one hand and look far away for moemoeā, and lift both hands up and open for whakamoemiti. Soli Deo Gloria is Latin, not te reo, and we keep it as it is.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 the whole class says the Latin motto together. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 2: He aha, then tō (your). Prompt 3: ka (will) and not i. Prompt 4: whakamoemiti, then tātou, then ki te Atua.',
        xresc:'Common error: mixing up whakawhetai (give thanks) and whakamoemiti (praise), or using i instead of ka for what we will do. Say: Ka looks forward, to what we will do. Another common one: saying tōku (my) when asking, instead of tō (your).',
        xpron:'moemoeā = MOH-eh-MOH-eh-AH · whakamoemiti = FAH-kah-MOH-eh-MEE-tee · tōku = TOH-koo · tō = TOR',
        cur:cu4('Communication (asking about and sharing dreams for the future, saying what we will do to make a difference, praising God) · Language Knowledge (He aha tō moemoeā?; Ko tōku moemoeā, ka … ahau; Ko tōna moemoeā, ka … ia; Kei te whakamoemiti tātou ki te Atua; Ka pai! Kia kaha!) · Cultural Knowledge (moemoeā as vision; praise and glory to God; our school motto Soli Deo Gloria, kept in Latin)','Recycles Lesson A, Term 1 Week 10 (Ka pai, Kia kaha), Term 2 Week 7 (tō, tōku, tōna), Term 3 Weeks 4 and 9 (Ka; āwhina), and Term 4 Weeks 4 and 5 (tiaki; karakia; hīkaka). ⚠ Please have a fluent speaker confirm Ko tōku moemoeā, ka … ahau (and whether tōku, tō and tōna are right with moemoeā) and Kei te whakamoemiti tātou ki te Atua. Soli Deo Gloria is deliberately not translated into te reo.'),
        vr:valueRows('Revelation 4:11','A dream is a picture of the future we hope for. As followers of Jesus, our biggest dream is that God’s goodness reaches more people through us. When we are kind, look after the land or help a friend, we make a difference. Everything we do can give glory to God. That is Pānga, and that is Soli Deo Gloria.','What is one small thing you could do this week to make a difference for someone else?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add moemoeā (dream, vision) and whakamoemiti (praise) as the two stretch words.','⚠ Please ask your school te reo lead to confirm Ko tōku moemoeā, ka … ahau (with tō, tōku and tōna) and Kei te whakamoemiti tātou ki te Atua before teaching. Soli Deo Gloria stays in Latin: do not translate it into te reo unless your te reo lead gives you a phrase.','Optional: write the school’s vision on the board in English and point to the Moemoeā chip in the footer.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles. In line 11 the whole class says Soli Deo Gloria together.'],
        three:'(1) <i>Ko tōku moemoeā, ka tiaki ahau i te whenua</i> = my dream: I will look after the land. <i>Ka</i> looks forward to what we will do. (2) <i>He aha tō moemoeā?</i> = what is your dream? Use <i>tō</i> for your dream and <i>tōku</i> for mine. (3) <i>Kei te whakamoemiti tātou ki te Atua</i> = we praise God. <i>Soli Deo Gloria</i> is Latin and stays as it is.',
        diff:['Echo as a whole class and use an action for every sentence. Say only Ko tōku moemoeā, ka āwhina ahau and Soli Deo Gloria. Pair with a confident partner and allow whispering first.','Complete all steps. Ask a partner their dream and say yours, using ka and one thing you will do, and praise God together.','Add moemoeā and whakamoemiti to your own chat, ask about a friend with tōna and ia, explain in English why we say ka, and invite a classmate to share a dream.'],
        look:'He aha tō moemoeā (tō for your); ka (not i) for what we will do; tōku, tō and tōna not mixed up; whakamoemiti said slowly in chunks; Soli Deo Gloria said as the Latin motto; kind, patient listening.',
        nx:'revisit ka with students in Starting; move to Week 10 (Hui Whakamutunga, the year showcase).',
        rec:'Lesson A, Term 1 Week 10 (Ka pai, Kia kaha), Term 2 Week 7 (tō, tōku, tōna), Term 3 Weeks 4 and 9 (Ka; āwhina) and Term 4 Weeks 4 and 5 are recalled in the warm-up, steps and drama. Week 10 is the year showcase.'
      },
      D: {
        VOC:[...A.D.VOC,'moemoeā','whakamoemiti'],
        STEPS:[
          ['Quick recap: I give thanks to God for my family. My family is a treasure.','E~whakawhetai|k ana|k ahau|a ki~te|k Atua|n mō~tōku|k whānau.|n He|k taonga|n tōku|k whānau.|n','eh FAH-kah-FEH-tye AH-nah ah-HOW kee teh AH-too-ah mor TOH-koo FAH-now · heh TOW-ngah TOH-koo FAH-now','Lesson A: ki te Atua, mō, and He taonga.',null,'Whole class'],
          ['Quick recap: I will help my friend. I will look after the land.','Ka|k āwhina|n ahau|a i~tōku|k hoa.|n Ka|k tiaki|n ahau|a i~te|k whenua.|n','kah AH-fee-nah ah-HOW ee TOH-koo HOR-ah · kah TEE-ah-kee ah-HOW ee teh FEH-noo-ah','Term 3 Week 9 and Term 4 Week 4: Ka + what I will do.',null,'Whole class'],
          ['New word: moemoeā means a dream or vision for the future. How would you say: What is your dream?','He|k aha|q tō|k moemoeā?|n*','heh AH-hah tor MOH-eh-MOH-eh-AH','He aha = what (Term 2). tō = your (Term 2).','Shade your eyes with one hand and look far into the distance. A moemoeā is a dream or a vision, a hope for the future, not just a dream when we are asleep. He aha means what, and tō means your. Take a moment… (wait 3 seconds)… He aha tō moemoeā? Say it with me.','Echo'],
          ['Answer: My dream is that I will look after the land.','Ko|k tōku|k moemoeā,|n ka|k tiaki|n ahau|a i~te|k whenua.|n*','kor TOH-koo MOH-eh-MOH-eh-AH, kah TEE-ah-kee ah-HOW ee teh FEH-noo-ah','Ko tōku moemoeā, then Ka + what I will do. Ka looks forward.','Say Ko tōku moemoeā, then a small pause, then Ka tiaki ahau i te whenua. It is the Ka sentence you know from Term 3 and Term 4. Take a moment… (wait 3 seconds)… Ko tōku moemoeā, ka tiaki ahau i te whenua. Say it with me.','Echo'],
          ['Swap what you will do: My dream is that I will help my friend. My dream is that I will pray for my family.','Ko|k tōku|k moemoeā,|n ka|k āwhina|n ahau|a i~tōku|k hoa.|n Ko|k tōku|k moemoeā,|n ka|k karakia|n ahau|a mō~tōku|k whānau.|n*','kor TOH-koo MOH-eh-MOH-eh-AH, kah AH-fee-nah ah-HOW ee TOH-koo HOR-ah · … kah KAH-rah-KEE-ah ah-HOW mor TOH-koo FAH-now','Same beginning, a different Ka sentence.',null,'Whole class'],
          ['Partner game: ask your partner their dream, then say yours. It is all pretend. Then swap.','He|k aha|q tō|k moemoeā?|n Ko|k tōku|k moemoeā,|n ka|k ___|n ahau.|a','heh AH-hah tor MOH-eh-MOH-eh-AH · kor TOH-koo MOH-eh-MOH-eh-AH, kah ___ ah-HOW','Choose what you will do: tiaki i te whenua, āwhina i tōku hoa, karakia mō tōku whānau.','Turn to your partner. One of you asks He aha tō moemoeā? The other answers Ko tōku moemoeā, ka, and one thing you will do, like tiaki i te whenua. Then swap. Take 2 minutes while I listen.','Pairs'],
          ['About a friend: What is her dream? Her dream is that she will help her friend.','He|k aha|q tōna|k moemoeā?|n Ko|k tōna|k moemoeā,|n ka|k āwhina|n ia|a* i~tōna|k hoa.|n','heh AH-hah TOH-nah MOH-eh-MOH-eh-AH · kor TOH-nah MOH-eh-MOH-eh-AH, kah AH-fee-nah EE-ah ee TOH-nah HOR-ah','tōna = her or his (Term 2). ia = she or he.','Point at a picture of a person, not a student. Tōna means her or his, and ia means she or he. Take a moment… (wait 3 seconds)… He aha tōna moemoeā? Ko tōna moemoeā, ka āwhina ia i tōna hoa. Say it with me.','Echo'],
          ['New word: whakamoemiti means praise. How would you say: We praise God.','Kei~te|k whakamoemiti|n* tātou|a ki~te|k Atua.|n','kay teh FAH-kah-MOH-eh-MEE-tee TAH-toh kee teh AH-too-ah','Kei te + what we are doing + who. Praise is telling God how wonderful he is.','Lift both hands up and open, like singing out. Whakamoemiti means to praise. Wh sounds like f. Say it in chunks: whaka, moe, miti. Take a moment… (wait 3 seconds)… Kei te whakamoemiti tātou ki te Atua. Say it with me.','Echo'],
          ['Our school motto: Soli Deo Gloria. To God alone the glory.','Soli~Deo~Gloria!|w*','SOH-lee DAY-oh GLOH-ree-ah','This is Latin, not te reo. We keep our motto exactly as it is.','Stand tall. This is our school motto and it is Latin, not te reo, so we keep it exactly as it is. In English it means to God alone the glory. Take a moment… (wait 3 seconds)… Soli Deo Gloria! Say it with me.','Echo'],
          ['Cheer a friend on: Well done! Be strong! I will help you.','Ka~pai!|w Kia~kaha!|w Ka|k āwhina|n ahau.|a','kah PIE! KEE-ah KAH-hah! kah AH-fee-nah ah-HOW','Term 1 Week 10 and Term 3 Week 9.',null,'Whole class'],
          ['Put it all together: thanks, a dream, praise, and our motto.','Kia~ora.|w E~whakawhetai|k ana|k ahau|a ki~te|k Atua|n mō~tōku|k whānau.|n Ko|k tōku|k moemoeā,|n ka|k āwhina|n ahau|a i~tōku|k hoa.|n Kei~te|k whakamoemiti|n ahau|a ki~te|k Atua.|n Soli~Deo~Gloria!|w Ka~kite!|w','KEE-ah OR-ah. eh FAH-kah-FEH-tye AH-nah ah-HOW kee teh AH-too-ah mor TOH-koo FAH-now. kor TOH-koo MOH-eh-MOH-eh-AH, kah AH-fee-nah ah-HOW ee TOH-koo HOR-ah. kay teh FAH-kah-MOH-eh-MEE-tee ah-HOW kee teh AH-too-ah. SOH-lee DAY-oh GLOH-ree-ah. kah KEE-teh','Terms 1 to 4 together. Say it one sentence at a time, then all at once.','Say this one sentence at a time, like building blocks. Each time, add one more block and say all of the blocks so far. If you stumble, that’s my fault, not yours. Echo me, a sentence at a time.','Echo'],
          ['Class chain: share your dream with the next person, then say thank you.','Ko|k tōku|k moemoeā,|n ka|k ___|n ahau.|a Kia~ora~mō~te~kōrero.|w','kor TOH-koo MOH-eh-MOH-eh-AH, kah ___ ah-HOW. KEE-ah OR-ah mor teh KOH-reh-roh','Real dreams in your own words, nothing memorised.','Pass it around the circle. Each person shares one dream, Ko tōku moemoeā, ka, and one thing they will do. The next person says Kia ora mō te kōrero. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ngā Moemoeā — Our Dreams',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Kei te pēhea koe, Hana?','Hello, children! How are you, Hana?','(opens her arms)','T1W2'],
          ['Hana','Kei te hīkaka ahau! E whakawhetai ana ahau ki te Atua mō tōku whānau.','I am excited! I give thanks to God for my family.','(hands together)','T4W5'],
          ['Kuia Mere','He taonga ngā tamariki.','Children are a treasure.','(smiles warmly at the children)'],
          ['Hana','Kuia, he aha tō moemoeā?','Kuia, what is your dream?','(turns to Kuia)'],
          ['Kuia Mere','Ko tōku moemoeā, ka karakia ahau mō tōku whānau.','My dream is that I will pray for my family.','(folds her hands)','T4W5'],
          ['Kuia Mere','He aha tō moemoeā, Tama?','What is your dream, Tama?','(smiles at Tama)'],
          ['Tama','Ko tōku moemoeā, ka tiaki ahau i te whenua.','My dream is that I will look after the land.','(sweeps his hand across the floor)','T4W4'],
          ['Hana','Ko tōku moemoeā, ka āwhina ahau i tōku hoa.','My dream is that I will help my friend.','(takes Tama’s hand)','T3W9'],
          ['Kuia Mere','Ka pai! Kia kaha, tamariki!','Well done! Be strong, children!','(claps gently)','T1W10'],
          ['Tama','Kei te whakamoemiti tātou ki te Atua.','We praise God.','(lifts both hands)'],
          ['Hana','Soli Deo Gloria!','To God alone the glory!','(the whole class says the motto together)'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) A dream is a picture of the future we hope for. Our biggest dream is that God’s goodness reaches more people through us. When we are kind, look after the land or help a friend, we make a difference, and everything we do can give glory to God. That is where your Pānga, your impact, begins.','T1W9'],
          ['Tama','Kia ora, Kuia. Ka kite!','Thank you, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['What does moemoeā mean?','Dream or vision (a hope for the future).'],['Say in te reo: ‘What is your dream?’','He aha tō moemoeā?'],['Choose the word: Ko tōku moemoeā, ____ tiaki ahau i te whenua. (I will look after the land) (ka / i)','ka'],['Say in te reo: ‘We praise God.’','Kei te whakamoemiti tātou ki te Atua.'],['Stretch: ask your partner their dream, then say yours.','He aha tō moemoeā? Ko tōku moemoeā, ka ___ ahau.']],
        CE:['Thinking moemoeā only means a dream we have when asleep; here it is a hope or vision for the future','Leaving out He aha, or saying tōku (my) instead of tō (your) when asking','Using i (past) instead of ka (future) for what we will do','Mixing up whakawhetai (give thanks) and whakamoemiti (praise), or leaving out ki te Atua','Saying tōku instead of tō when asking, or leaving out Ko tōku moemoeā in the answer'],
        T:'T4 W9 Lesson B',
        LP:{title:'Ko tōku moemoeā — My dream',val:'Pānga · Revelation 4:11',pat:['He aha tō moemoeā?','Ko tōku moemoeā, ka ________ ahau.','Kei te whakamoemiti tātou ki te Atua. Soli Deo Gloria!'],swap:'What I will do: tiaki i te whenua · āwhina i tōku hoa · karakia mō tōku whānau. Stretch: moemoeā (dream, vision) · whakamoemiti (praise). Motto: Soli Deo Gloria (Latin: to God alone the glory).'}
      }
    };

    addLessons({ '4.9.A': A, '4.9.B': B });
  }

  /* ──────── WEEK 10 · Hui Whakamutunga (year showcase) ──────── */
  {
    // NO new grammar. Lesson A rehearses the showcase programme (Terms 1–4 stacked, one piece per step, NO new words).
    // Lesson B is the showcase (Hui Whakamutunga): stretch words whakamutunga (ending / closing) and katoa (all / everyone).
    // New sentence frames: Tēnā koutou katoa · He hui whakamutunga tēnei · E whakawhetai ana mātou ki a koutou katoa.
    // hui is already defined in index.html (karakia glossary), so it is recalled here, not redefined.
    // Pepeha: steps use ___ blanks (as Weeks 1–2). The drama in Lesson B reads LOCAL.maunga / LOCAL.awa: confirm them before the showcase.
    // ⚠ For a fluent speaker to check: He hui whakamutunga tēnei · Tēnā koutou katoa · E whakawhetai ana mātou ki a koutou katoa.
    const TOWN = 'Ashburton';
    addGlossary({
      "whakamutunga":["ending / final / closing","FAH-kah-moo-TOO-ngah",10,4],
      "katoa":["all / everyone","KAH-toh-ah",10,4]
    });

    // ── Lesson A · Nau mai, haere mai — Welcome, come in ──
    const A = {
      P: {
        t:4,
        w:10,
        l:'A',
        ch:'Nau~mai!|w Haere~mai|w ki~te|k kura!|n*',
        sub:'Today we rehearse our year showcase, one piece at a time, ready for our whānau.',
        say:'Kia ora everyone! Next lesson is our year showcase, our Hui Whakamutunga, and today we practise. There is nothing new to learn. You already own every sentence we need. We start with a welcome. Then who we are and where we are from. Then how we feel and what we like. Then how we get to school and how we look after the world. Then our thanks to God and our dreams. And last, a cheer and goodbye. Each piece is a sentence you already know. Still no writing: listen, think and speak. If you forget a piece, that is my fault, not yours. I will say it again more slowly.',
        pron:'nau mai = NOW-my · haere mai = HIGH-reh MY · kura = KOO-rah · maunga = MOW-ngah · awa = AH-wah · hīkaka = HEE-kah-kah · kaitiaki = KYE-tee-ah-kee · moemoeā = MOH-eh-MOH-eh-AH',
        li:'rehearse our year showcase by joining sentences from Terms 1 to 4: welcome, say who we are and where we are from, share feelings, likes, thanks and a dream, in te reo.',
        succ:['I can welcome whānau and say who I am and where I am from: Nau mai! Ko ___ ahau. Nō ___ ahau.','I can share a feeling, a like and how I will get to school: Kei te hīkaka ahau. He pai ki a au te waiata. Ka haere ahau mā runga pahi.','I can share my thanks and my dream: E whakawhetai ana ahau ki te Atua mō tōku whānau. Ko tōku moemoeā, ka āwhina ahau i tōku hoa.'],
        wp:'Glorify the Lord with me; let us praise his name together.',
        ref:'Psalm 34:3',
        mom:'Everything we have learned this year, we are about to share with the people who love us. Praising God together is better than praising alone, and so is learning. When we share our gifts with others, we make a difference. That is Pānga.',
        q:'Who will you be most glad to share your te reo with at the showcase?',
        recall:[['How do you say: I am from ' + TOWN + '.','Nō ' + TOWN + ' ahau.'],['How do you say: I give thanks to God for my family.','E whakawhetai ana ahau ki te Atua mō tōku whānau.'],['How do you say: My dream is that I will help my friend.','Ko tōku moemoeā, ka āwhina ahau i tōku hoa.']],
        rtag:'Terms 1 to 4',
        rtxt:'Remember when… Terms 1 to 4 (3 quick prompts)',
        refl:'Which piece of the showcase are you proudest of, and which piece would you like to practise once more?',
        next:'Lesson B: He hui whakamutunga tēnei (our year showcase)',
        vsay:'Say each word and the class echoes, with an action: open your arms for manuhiri, point to a mountain for maunga, wiggle your fingers like a river for awa, bounce for hīkaka, sway like singing for waiata, mime a steering wheel for pahi, cup a pretend animal for kaitiaki, hands together for whakawhetai, shade your eyes and look far away for moemoeā, and make a roof over your head for whānau. There are no new words today: all ten are recalled from earlier weeks.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 2: Nō (not Ko) for where I am from, then Kei te before the feeling. Prompt 3: mā (not nō) before runga pahi. Prompt 4: ki before te Atua and mō before tōku whānau.',
        xresc:'Common error: mixing up Ko ___ ahau (I am …) and Nō ___ ahau (I am from …), or saying ki a ahau instead of ki a au. Say: Ko is for who I am, Nō is for where I am from, and after ki a we say au.',
        xpron:'ahau = ah-HOW · hīkaka = HEE-kah-kah · whānau = FAH-now · moemoeā = MOH-eh-MOH-eh-AH',
        cur:cu4('Communication (rehearsing a showcase from welcome to goodbye: who we are, where we are from, feelings, likes, getting there, caring, thanks, a dream) · Language Knowledge (joining patterns: Nau mai; Ko … ahau; Nō … ahau; Kei te … ahau; He pai ki a au te …; Ka haere ahau … mā …; He kaitiaki ahau; E whakawhetai ana ahau ki te Atua mō …; Ko tōku moemoeā, ka …) · Cultural Knowledge (welcoming whānau; sharing learning with others; praising God together)','Recycles Term 1 Weeks 1 to 3 and 9 to 10, Term 3 Weeks 4 and 8 to 9, and Term 4 Weeks 1 to 9. ⚠ Wellbeing: feelings and dreams are practice and pretend, and nobody is asked about a real worry in front of the class. Pepeha: students say only what they know; the maunga and awa must be confirmed by the school before the showcase and nobody has to name an iwi. No new words, so this is a good lesson to notice which pieces need one more practice.'),
        vr:valueRows('Psalm 34:3','Everything we have learned this year, we are about to share with the people who love us. Praising God together is better than praising alone, and so is learning. When we share our gifts with others, we make a difference. That is Pānga.','Who will you be most glad to share your te reo with at the showcase?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student. Optional: put the showcase order on the board as pictures: open arms (welcome) · name card (who) · map (where from) · face (feeling) · heart (likes) · bus (getting there) · animal (caring) · hands together (thanks) · telescope (dream) · wave (goodbye).','Decide with the class who will say which pieces (every student has at least one sentence), and rotate so nobody is always last. Listen for pieces that need one more practice before Lesson B.','⚠ Pepeha: confirm the local maunga and awa with your te reo lead before the showcase (see `LOCAL` at the top of term4.js). A student who does not yet have a pepeha says Nō ___ ahau only. Nobody has to name an iwi.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles. Practise the actions.'],
        three:'(1) A showcase is pieces joined together, one sentence each: <i>Nau mai! Ko Hana ahau. Nō ' + TOWN + ' ahau.</i> (2) <i>Ko</i> is for who I am, <i>Nō</i> for where I am from; after <i>ki a</i> we say <i>au</i>; <i>mā</i> is for how we go; <i>ki te Atua</i> is who we thank and <i>mō</i> is what for. (3) There is nothing new today: a showcase is about speaking clearly and kindly, not about getting every word perfect.',
        diff:['Echo as a whole class and use an action for every sentence. Choose three pieces (welcome, name, goodbye). Pair with a confident partner and allow whispering first.','Complete all steps. Say at least six pieces in order with a partner, from welcome to goodbye.','Add the caring sentence, a dream and a thank you to your showcase, explain the order in English, and help a classmate who is stuck.'],
        look:'Ko and Nō not mixed up; Kei te before the feeling; ki a au (not ki a ahau); mā before runga pahi; ki te Atua and mō in the right places; long vowels in whānau and moemoeā; kind, patient listening.',
        nx:'revisit Ko / Nō, mā and ki / mō with students in Starting; Lesson B is the showcase, with the Showcase rubric ready.',
        rec:'Term 1 Weeks 1 to 3 and 9 to 10, Term 3 Weeks 4, 8 and 9 and Term 4 Weeks 1 to 9 are recalled throughout. There is no new grammar and no new word this week in Lesson A; Lesson B adds two stretch words.'
      },
      D: {
        VOC:['manuhiri','maunga','awa','hīkaka','waiata','pahi','kaitiaki','whakawhetai','moemoeā','whānau'],
        STEPS:[
          ['Quick recap: Welcome! Come to the school!','Nau~mai!|w Haere~mai|w ki~te|k kura!|n','NOW-my! HIGH-reh MY kee teh KOO-rah','Term 3 Week 8: Nau mai! Haere mai ki te …!',null,'Whole class'],
          ['New idea: our showcase starts with a welcome and who we are. Hello everyone. I am Hana. I am from ' + TOWN + '.','Tēnā~koutou.|w Ko|k Hana|p ahau.|a Nō|k ' + TOWN + '|p ahau.|a','TEH-nah KOH-toh. kor HAH-nah ah-HOW. nor ASH-bur-ton ah-HOW','Term 1 and Term 4 Week 2: Ko is for who I am, Nō is for where I am from.','Stand tall like you are on a stage. Tēnā koutou greets three or more people. Take a moment… (wait 3 seconds)… Tēnā koutou. Ko Hana ahau. Nō ' + TOWN + ' ahau. Say it with me.','Echo'],
          ['Your pepeha, in order: mountain, river, me.','Ko|k ___|p te|k maunga.|n Ko|k ___|p te|k awa.|n Ko|k ___|p ahau.|a','kor ___ teh MOW-ngah. kor ___ teh AH-wah. kor ___ ah-HOW','Term 4 Week 1: a pepeha. Say only what you know. Nobody has to name an iwi.',null,'Whole class'],
          ['Add how we feel: How are you? I am excited.','Kei~te|k pēhea|q koe?|a Kei~te|k hīkaka|q ahau.|a','kay teh PEH-heh-ah KOH-eh · kay teh HEE-kah-kah ah-HOW','Term 1 Week 2 and Term 4 Week 5: Kei te + feeling + who. Pretend only.',null,'Whole class'],
          ['Add what you like: I like singing. Do you like sport?','He|k pai|q ki~a|k au|a te|k waiata.|n He|k pai|q ki~a|k koe|a te|k hākinakina?|n','heh PIE kee AH OW teh why-AH-tah · heh PIE kee AH KOH-eh teh HAH-kee-nah-kee-nah','Term 4 Week 7: after ki a we say au, never ahau.','Hand on heart. After ki a we say au, never ahau. Take a moment… (wait 3 seconds)… He pai ki a au te waiata. He pai ki a koe te hākinakina? Say them with me.','Echo'],
          ['Partner game: rehearse the first four pieces of the showcase: welcome, name, where you are from, and what you like. It is all pretend. Then swap.','Tēnā~koutou.|w Ko|k ___|p ahau.|a Nō|k ___|p ahau.|a He|k pai|q ki~a|k au|a te|k ___.|n','TEH-nah KOH-toh. kor ___ ah-HOW. nor ___ ah-HOW. heh PIE kee AH OW teh ___','Use your own name and a place you know.','Turn to your partner. One of you is on stage and one is the audience. Say tēnā koutou, your name, where you are from and one thing you like. The audience says Ka pai! Then swap. Take 2 minutes while I listen.','Pairs'],
          ['Add how we will get to school: I will go to school by bus.','Ka|k haere|n ahau|a ki~te|k kura|n mā~runga|k pahi.|n','kah HIGH-reh ah-HOW kee teh KOO-rah mah ROO-ngah PAH-hee','Term 4 Week 6: where first (ki te …), then how (mā …).','Mime holding a steering wheel. Where goes first, then how. Take a moment… (wait 3 seconds)… Ka haere ahau ki te kura mā runga pahi. Say it with me.','Echo'],
          ['Add how we care: I am looking after the dog. I am a guardian.','Kei~te|k tiaki|n ahau|a i~te|k kurī.|n He|k kaitiaki|n ahau.|a','kay teh TEE-ah-kee ah-HOW ee teh KOO-ree. heh KYE-tee-ah-kee ah-HOW','Term 4 Week 4: Kei te tiaki ahau i te … He kaitiaki ahau.',null,'Whole class'],
          ['Add our thanks: I give thanks to God for my family.','E~whakawhetai|k ana|k ahau|a ki~te|k Atua|n mō~tōku|k whānau.|n','eh FAH-kah-FEH-tye AH-nah ah-HOW kee teh AH-too-ah mor TOH-koo FAH-now','Term 4 Week 9: ki te Atua is who we thank, mō is what for.','Hands together. Ki te Atua is who we thank, and mō tells us what for. Take a moment… (wait 3 seconds)… E whakawhetai ana ahau ki te Atua mō tōku whānau. Say it with me.','Echo'],
          ['Add our dream: My dream is that I will help my friend.','Ko|k tōku|k moemoeā,|n ka|k āwhina|n ahau|a i~tōku|k hoa.|n','kor TOH-koo MOH-eh-MOH-eh-AH, kah AH-fee-nah ah-HOW ee TOH-koo HOR-ah','Term 4 Week 9: Ko tōku moemoeā, then Ka + what I will do.',null,'Whole class'],
          ['Cheer and say goodbye: Well done! Be strong! See you!','Ka~pai!|w Kia~kaha!|w Ka~kite!|w','kah PIE! KEE-ah KAH-hah! kah KEE-teh','Term 1 Week 10: cheer for every voice.',null,'Whole class'],
          ['Put it all together: the whole showcase, one piece at a time.','Nau~mai!|w Tēnā~koutou.|w Ko|k Hana|p ahau.|a Nō|k ' + TOWN + '|p ahau.|a Kei~te|k hīkaka|q ahau.|a He|k pai|q ki~a|k au|a te|k waiata.|n Ka|k haere|n ahau|a ki~te|k kura|n mā~runga|k pahi.|n E~whakawhetai|k ana|k ahau|a ki~te|k Atua|n mō~tōku|k whānau.|n Ko|k tōku|k moemoeā,|n ka|k āwhina|n ahau|a i~tōku|k hoa.|n Ka~kite!|w','NOW-my! TEH-nah KOH-toh. kor HAH-nah ah-HOW. nor ASH-bur-ton ah-HOW. kay teh HEE-kah-kah ah-HOW. heh PIE kee AH OW teh why-AH-tah. kah HIGH-reh ah-HOW kee teh KOO-rah mah ROO-ngah PAH-hee. eh FAH-kah-FEH-tye AH-nah ah-HOW kee teh AH-too-ah mor TOH-koo FAH-now. kor TOH-koo MOH-eh-MOH-eh-AH, kah AH-fee-nah ah-HOW ee TOH-koo HOR-ah. kah KEE-teh','Terms 1 to 4 together. Say it one sentence at a time, then all at once.','Say this one sentence at a time, like building blocks. Each time, add one more block and say all of the blocks so far. If you stumble, that’s my fault, not yours. Echo me, a sentence at a time.','Echo'],
          ['Class chain: choose four pieces from the showcase and share them with the next person.','Tēnā~koutou.|w Ko|k ___|p ahau.|a Nō|k ___|p ahau.|a Kei~te|k ___|q ahau.|a Ka~kite!|w','TEH-nah KOH-toh. kor ___ ah-HOW. nor ___ ah-HOW. kay teh ___ ah-HOW. kah KEE-teh','Real words in your own voice, nothing memorised.','Pass it around the circle. Each person chooses four pieces from the showcase and shares them with the next person. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Nau Mai, Haere Mai — Welcome, Come In',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Nau mai! Haere mai ki te kura!','Welcome! Come to the school!','(opens her arms to the audience)','T3W8'],
          ['Tama','Tēnā koutou. Ko Tama ahau.','Greetings, everyone. I am Tama.','(stands tall)','T1W1'],
          ['Hana','Ko Hana ahau. Nō ' + TOWN + ' ahau.','I am Hana. I am from ' + TOWN + '.','(smiles at the audience)','T4W2'],
          ['Kaiako Rose','Kei te pēhea koe, Hana?','How are you, Hana?','(looks kindly at Hana)','T1W2'],
          ['Hana','Kei te hīkaka ahau!','I am excited!','(jumps gently)','T4W5'],
          ['Tama','He pai ki a au te whutupōro.','I like rugby.','(catches a pretend ball)','T4W7'],
          ['Kaiako Rose','Ka haere koe mā runga pahi, Tama?','Will you go by bus, Tama?','(mimes a steering wheel)','T4W6'],
          ['Tama','Āe, ka haere ahau ki te kura mā runga pahi.','Yes, I will go to school by bus.','(nods)'],
          ['Hana','Kei te tiaki ahau i te kurī. He kaitiaki ahau.','I am looking after the dog. I am a guardian.','(cups a pretend dog)','T4W4'],
          ['Kaiako Rose','Ka karakia tātou ki te Atua.','We will pray to God.','(bows her head)','T4W5'],
          ['Tama','E whakawhetai ana ahau ki te Atua mō tōku whānau.','I give thanks to God for my family.','(hands together)','T4W9'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) You have worked so hard this year. Every sentence you say is a gift you can share. When you welcome someone and say a few words in te reo, you are making a difference. That is where your Pānga, your impact, begins. Let us do our very best tomorrow.','T1W9'],
          ['Hana','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘Welcome! Come to the school!’','Nau mai! Haere mai ki te kura!'],['Say in te reo: ‘I am from ' + TOWN + '. I am excited.’','Nō ' + TOWN + ' ahau. Kei te hīkaka ahau.'],['Choose the word: Ka haere ahau ki te kura ____ runga pahi. (by bus) (mā / nō)','mā'],['Say in te reo: ‘I give thanks to God for my family.’','E whakawhetai ana ahau ki te Atua mō tōku whānau.'],['Stretch: say four pieces of a showcase: hello, your name, where you are from, and what you like.','Tēnā koutou. Ko ___ ahau. Nō ___ ahau. He pai ki a au te ___.']],
        CE:['Leaving out ki te before kura, or mixing up nau mai (welcome) and noho mai (sit down)','Mixing up Ko (who I am) and Nō (where I am from), or leaving out Kei te','Using nō instead of mā before runga pahi','Using mō instead of ki before te Atua, or tāku instead of tōku','Leaving out a piece of the order, saying ki a ahau instead of ki a au, or mixing up Ko and Nō'],
        T:'T4 W10 Lesson A',
        LP:{title:'Nau mai, haere mai — Showcase rehearsal',val:'Pānga · Psalm 34:3',pat:['Nau mai! Tēnā koutou. Ko ________ ahau. Nō ________ ahau.','Kei te ________ ahau. He pai ki a au te ________. Ka haere ahau mā ________.','E whakawhetai ana ahau ki te Atua mō ________. Ko tōku moemoeā, ka ________ ahau.'],swap:'Order of our showcase: welcome · who I am · where I am from · feeling · what I like · getting there · caring · thanks · dream · cheer and goodbye. Nothing is new: choose the pieces you are proudest of.'}
      }
    };

    // ── Lesson B · He hui whakamutunga tēnei — This is our closing hui (showcase) ──
    const B = {
      P: {
        t:4,
        w:10,
        l:'B',
        ch:'He|k hui|n whakamutunga|n* tēnei.|k',
        sub:'Showcase day! Today we share our year of te reo with our whānau, cheer each other on and give the glory to God.',
        say:'Kia ora everyone! Today is our Hui Whakamutunga, our closing gathering. You have been learning for a whole year and nobody has written a thing. Today you share what you can say. We add two small words. Whakamutunga means ending or closing, and katoa means all or everyone, so Tēnā koutou katoa greets everyone in the room. We will say thank you to our whānau, we will praise God, and we will cheer for every voice. Remember: if you stumble, that’s my fault, not yours. Ka pai! Stand tall, breathe in, and let us begin.',
        pron:'hui = HOO-ee · whakamutunga = FAH-kah-moo-TOO-ngah · katoa = KAH-toh-ah · tēnā koutou katoa = TEH-nah KOH-toh KAH-toh-ah · whakamoemiti = FAH-kah-MOH-eh-MEE-tee · Soli Deo Gloria = SOH-lee DAY-oh GLOH-ree-ah',
        li:'share our year of te reo with an audience, thank them, praise God and cheer others on, using Tēnā koutou katoa, He hui whakamutunga tēnei and E whakawhetai ana mātou ki a koutou katoa, in te reo.',
        succ:['I can greet everyone and say what this is: Tēnā koutou katoa. He hui whakamutunga tēnei.','I can thank the audience: E whakawhetai ana mātou ki a koutou katoa.','I can share my showcase kōrero and cheer others: Ka pai! Ka rawe! Kia kaha!'],
        wp:'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.',
        ref:'Numbers 6:24-25',
        mom:'We end our year with a blessing. God has given us language, friends, teachers and whānau, and every one of them is a gift. Today we use those gifts to bless the people who came to listen. When we share what we have learned with kindness, we bring a little of God’s Kingdom to earth. That is Pānga, and that is Soli Deo Gloria.',
        q:'What are you most proud of learning in te reo this year, and who helped you?',
        recall:[['How do you say: Welcome! Come to the school!','Nau mai! Haere mai ki te kura!'],['How do you say: I give thanks to God for my family.','E whakawhetai ana ahau ki te Atua mō tōku whānau.'],['How do you say: My dream is that I will look after the land.','Ko tōku moemoeā, ka tiaki ahau i te whenua.'],['How do you say: We praise God.','Kei te whakamoemiti tātou ki te Atua.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'What are you proud of this year, and who helped you?',
        next:'Next year: Term 1 begins again. Every sentence you learned is still yours.',
        vsay:'Same vocab card as Lesson A, with two stretch words today: whakamutunga (ending or closing, FAH-kah-moo-TOO-ngah) and katoa (all or everyone, KAH-toh-ah). Sweep both arms out wide for katoa and bring your hands together into a closed circle for whakamutunga. Remind the class that hui (gathering) is in our karakia: i tēnei hui.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 11 the whole class says the Latin motto together. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: whakamutunga means ending or closing. Prompt 2: koutou (three or more) and katoa. Prompt 3: ki before a koutou katoa.',
        xresc:'Common error: saying tēnā koe (one person) to a group, or using mō instead of ki before people. Say: koutou is for three or more, and ki a goes before a person word.',
        xpron:'whakamutunga = FAH-kah-moo-TOO-ngah · katoa = KAH-toh-ah · koutou = KOH-toh · hui = HOO-ee',
        cur:cu4('Communication (sharing a showcase kōrero with an audience, thanking whānau, praising God, encouraging others) · Language Knowledge (consolidating Term 4 patterns; Tēnā koutou katoa; He hui whakamutunga tēnei; E whakawhetai ana mātou ki a koutou katoa; Kei te whakamoemiti tātou ki te Atua; Ka pai, Ka rawe, Kia kaha) · Cultural Knowledge (performance as sharing and manaakitanga; whānau as the audience; closing the year with thanks and a blessing)','Recycles Term 4 Weeks 1 to 9 and Lesson A, plus Term 1 Weeks 9 and 10 and Term 3 Weeks 8 to 10. Use the Showcase rubric (Term 4 pack) as assessment evidence for the year. ⚠ Please have a fluent speaker confirm He hui whakamutunga tēnei, Tēnā koutou katoa, E whakawhetai ana mātou ki a koutou katoa and the drama title Te Hui Whakamutunga. The maunga and awa (LOCAL) must be confirmed before the showcase.'),
        vr:valueRows('Numbers 6:24-25','We end our year with a blessing. God has given us language, friends, teachers and whānau, and every one of them is a gift. Today we use those gifts to bless the people who came to listen. When we share what we have learned with kindness, we bring a little of God’s Kingdom to earth. That is Pānga, and that is Soli Deo Gloria.','What are you most proud of learning in te reo this year, and who helped you?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria, the school motto.',MV4),
        prep:['Open the lesson slides and check the projector; press N for presenter notes. Use the same vocab card as Lesson A and add whakamutunga (ending) and katoa (all) as the two stretch words.','Invite the audience (whānau, another class or the school) and arrange a simple stage area. Suggested programme, about 20 to 25 minutes: opening karakia · Nau mai and Tēnā koutou katoa · pepeha and where from · feelings and likes · getting around and caring · thanks and dreams · whakaari (the drama) · whakamoemiti and Soli Deo Gloria · closing karakia · Ka pai! for everyone.','Print the Showcase rubric (Term 4 pack, 📊 button) and have a pen ready to tick as students share.','⚠ Pepeha: confirm the local maunga and awa with your te reo lead before the day (`LOCAL` at the top of term4.js). Students say only what they know, a student with no pepeha says Nō ___ ahau only, and nobody has to name an iwi. Please check the sentences with your te reo lead.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles. In line 11 the whole class says Soli Deo Gloria together. Plan a kind finish: every performer gets Ka pai! from the whole class.'],
        three:'(1) Every sentence is one students already own; the showcase is about joining them with confidence. (2) <i>Tēnā koutou katoa</i> = hello, everyone. <i>He hui whakamutunga tēnei</i> = this is the closing gathering. <i>E whakawhetai ana mātou ki a koutou katoa</i> = we thank you all. (3) <i>Ka pai</i>, <i>ka rawe</i> and <i>kia kaha</i> are cheering words: use them for every performer.',
        diff:['Echo as a whole class. Perform in a pair or trio. Use the vocab card as a sentence menu and choose four sentences. Allow whispering first.','Share a showcase kōrero of six or more sentences in order with a partner, then for the audience.','Add a dream, a thank you and praise, ask the audience a question, and lead the cheering with Ka pai! Help a classmate who is stuck.'],
        look:'Clear vowels and macrons; each sentence in the right pattern; students joining at least six pieces in order (welcome, who I am, where from, feeling and likes, getting there and caring, thanks and dream, goodbye); koutou and katoa used for a group; ki a before a person word; encouragement of others (Ka pai! Kia kaha!); brave attempts, even with help from a partner.',
        nx:'record each student’s showcase level on the rubric; celebrate with a class Ka rawe!; next year Term 1 recycles these patterns in its “Remember when…” warm-ups.',
        rec:'All of Term 4 Weeks 1 to 9 and Lesson A are recalled: the warm-up (Weeks 4, 9 and Lesson A), the steps (Weeks 1, 2, 5, 9 and Lesson A) and the drama (Weeks 1, 2, 4 to 7 and 9). Term 1 Weeks 9 and 10 and Term 3 Weeks 8 to 10 are recalled in the cheering and farewell.'
      },
      D: {
        VOC:[...A.D.VOC,'whakamutunga','katoa'],
        STEPS:[
          ['Quick recap: Welcome! Come to the school! I am from ' + TOWN + '. I am excited.','Nau~mai!|w Haere~mai|w ki~te|k kura!|n Nō|k ' + TOWN + '|p ahau.|a Kei~te|k hīkaka|q ahau.|a','NOW-my! HIGH-reh MY kee teh KOO-rah. nor ASH-bur-ton ah-HOW. kay teh HEE-kah-kah ah-HOW','Lesson A: welcome, where from, feeling.',null,'Whole class'],
          ['Quick recap: My dream is that I will help my friend. We praise God.','Ko|k tōku|k moemoeā,|n ka|k āwhina|n ahau|a i~tōku|k hoa.|n Kei~te|k whakamoemiti|n tātou|a ki~te|k Atua.|n','kor TOH-koo MOH-eh-MOH-eh-AH, kah AH-fee-nah ah-HOW ee TOH-koo HOR-ah · kay teh FAH-kah-MOH-eh-MEE-tee TAH-toh kee teh AH-too-ah','Term 4 Week 9.',null,'Whole class'],
          ['New word: katoa means all or everyone. How would you say: Hello, everyone.','Tēnā~koutou|w katoa.|a*','TEH-nah KOH-toh KAH-toh-ah','Tēnā koutou (three or more) + katoa = everyone.','Sweep both arms out wide to include the whole room. Katoa means all. You know tēnā koutou from Term 1. Add katoa and you greet everyone. Take a moment… (wait 3 seconds)… Tēnā koutou katoa. Say it with me.','Echo'],
          ['New word: whakamutunga means ending or closing. How would you say: This is the closing gathering.','He|k hui|n whakamutunga|n* tēnei.|k','heh HOO-ee FAH-kah-moo-TOO-ngah TEH-neh-ee','He … tēnei = this is a … (Term 2). You say hui in our karakia: i tēnei hui.','Bring your hands together into a closed circle. Whakamutunga means ending, or closing. Wh sounds like f. Say it in chunks: whaka, mu, tunga. You say hui in our opening karakia, i tēnei hui. Take a moment… (wait 3 seconds)… He hui whakamutunga tēnei. Say it with me.','Echo'],
          ['Thank the audience: We thank you all.','E~whakawhetai|k ana|k mātou|a ki~a|k koutou|a katoa.|a*','eh FAH-kah-FEH-tye AH-nah MAH-toh kee ah KOH-toh KAH-toh-ah','ki a + people (you all). ki te Atua is for God.','Turn to face the audience, or an imaginary audience. Before a person word we say ki a: ki a koutou katoa is to you all. Before te Atua we say ki te. Take a moment… (wait 3 seconds)… E whakawhetai ana mātou ki a koutou katoa. Say it with me.','Echo'],
          ['Partner game: rehearse three pieces of the showcase for your partner: welcome, a thank you and a dream. It is all pretend. Then swap.','Tēnā~koutou|w katoa.|a E~whakawhetai|k ana|k mātou|a ki~a|k koutou|a katoa.|a Ko|k tōku|k moemoeā,|n ka|k ___|n ahau.|a','TEH-nah KOH-toh KAH-toh-ah. eh FAH-kah-FEH-tye AH-nah MAH-toh kee ah KOH-toh KAH-toh-ah. kor TOH-koo MOH-eh-MOH-eh-AH, kah ___ ah-HOW','Choose what you will do: tiaki i te whenua, āwhina i tōku hoa, karakia mō tōku whānau.','Turn to your partner. One of you is the performer and one is the audience. Greet everyone, thank them, and share your dream. The audience says Ka pai! Then swap. Take 2 minutes while I listen.','Pairs'],
          ['A short prayer: We will pray to God. We give thanks to God.','Ka|k karakia|n tātou|a ki~te|k Atua.|n E~whakawhetai|k ana|k mātou|a ki~te|k Atua.|n','kah KAH-rah-KEE-ah TAH-toh kee teh AH-too-ah · eh FAH-kah-FEH-tye AH-nah MAH-toh kee teh AH-too-ah','Term 4 Weeks 5 and 9. The prayer is an invitation; nobody has to join in.',null,'Whole class'],
          ['Share a thank you and a dream: I give thanks to God for my family. My dream is that I will look after the land.','E~whakawhetai|k ana|k ahau|a ki~te|k Atua|n mō~tōku|k whānau.|n Ko|k tōku|k moemoeā,|n ka|k tiaki|n ahau|a i~te|k whenua.|n','eh FAH-kah-FEH-tye AH-nah ah-HOW kee teh AH-too-ah mor TOH-koo FAH-now · kor TOH-koo MOH-eh-MOH-eh-AH, kah TEE-ah-kee ah-HOW ee teh FEH-noo-ah','Term 4 Week 9: thanks and a dream.',null,'Whole class'],
          ['Praise God and say our motto: We praise God. Soli Deo Gloria.','Kei~te|k whakamoemiti|n tātou|a ki~te|k Atua.|n Soli~Deo~Gloria!|w','kay teh FAH-kah-MOH-eh-MEE-tee TAH-toh kee teh AH-too-ah. SOH-lee DAY-oh GLOH-ree-ah','Soli Deo Gloria is Latin, not te reo. We keep it just as it is.','Stand tall. Whakamoemiti means praise. Soli Deo Gloria is our school motto and it is Latin, not te reo, so we keep it exactly as it is. In English it means to God alone the glory. Take a moment… (wait 3 seconds)… Kei te whakamoemiti tātou ki te Atua. Soli Deo Gloria! Say it with me.','Echo'],
          ['Cheer for everyone: Well done! Awesome! Be strong! Much love to you all.','Ka~pai!|w Ka~rawe!|w Kia~kaha!|w Arohanui|w ki~a|k koutou|a katoa.|a','kah PIE! kah RAH-weh! KEE-ah KAH-hah! ah-ROH-hah-NOO-ee kee ah KOH-toh KAH-toh-ah','Term 1 Week 10 and Term 3 Week 10: cheering words and arohanui.',null,'Whole class'],
          ['Put it all together: our showcase from welcome to goodbye.','Tēnā~koutou|w katoa.|a He|k hui|n whakamutunga|n tēnei.|k Ko|k ___|p ahau.|a Nō|k ___|p ahau.|a Ko|k tōku|k moemoeā,|n ka|k āwhina|n ahau|a i~tōku|k hoa.|n E~whakawhetai|k ana|k mātou|a ki~a|k koutou|a katoa.|a Soli~Deo~Gloria!|w Ka~kite!|w','TEH-nah KOH-toh KAH-toh-ah. heh HOO-ee FAH-kah-moo-TOO-ngah TEH-neh-ee. kor ___ ah-HOW. nor ___ ah-HOW. kor TOH-koo MOH-eh-MOH-eh-AH, kah AH-fee-nah ah-HOW ee TOH-koo HOR-ah. eh FAH-kah-FEH-tye AH-nah MAH-toh kee ah KOH-toh KAH-toh-ah. SOH-lee DAY-oh GLOH-ree-ah. kah KEE-teh','Terms 1 to 4 together.','Say this one sentence at a time. Each time, add one more block and say all of the blocks so far. If you stumble, that’s my fault, not yours.','Whole class'],
          ['Showcase: share your kōrero with the audience. Everyone else says Ka pai!','Ka~pai!|w Ka~rawe!|w Kia~kaha!|w','kah PIE · kah RAH-weh · KEE-ah KAH-hah','Celebrate every voice.','Invite pairs or trios to share, one after another. After each, the whole class says Ka pai! Remind them: if someone stumbles, that’s my fault, not theirs. Finish with a class Ka rawe!, Soli Deo Gloria and Arohanui ki a koutou katoa.','Individual']],
        DR:{title:'Te Hui Whakamutunga — The Closing Hui',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Tēnā koutou katoa! He hui whakamutunga tēnei.','Hello, everyone! This is our closing gathering.','(opens her arms)'],
          ['Hana','Kia ora, Kuia. Kei te hīkaka ahau!','Hello, Kuia. I am excited!','(stands tall)','T4W5'],
          ['Tama','Ko ' + LOCAL.maunga + ' te maunga. Ko ' + LOCAL.awa + ' te awa. Ko Tama ahau.','' + LOCAL.maunga + ' is the mountain. ' + LOCAL.awa + ' is the river. I am Tama.','(points to the distance)','T4W1'],
          ['Hana','Nō ' + TOWN + ' ahau. He pai ki a au te waiata.','I am from ' + TOWN + '. I like singing.','(sways a little)','T4W2'],
          ['Kuia Mere','Ka haere koe mā runga pahi, Tama?','Will you go by bus, Tama?','(mimes a steering wheel)','T4W6'],
          ['Tama','Āe, ka haere ahau mā runga pahi.','Yes, I will go by bus.','(nods)'],
          ['Hana','Kei te tiaki ahau i te kurī. He kaitiaki ahau.','I am looking after the dog. I am a guardian.','(cups a pretend dog)','T4W4'],
          ['Kuia Mere','Ka pai tō mahi, kaitiaki!','Well done, guardian!','(claps gently)','T4W4'],
          ['Tama','Ko tōku moemoeā, ka āwhina ahau i tōku hoa.','My dream is that I will help my friend.','(takes Hana’s hand)','T4W9'],
          ['Hana','E whakawhetai ana mātou ki a koutou katoa.','We thank you all.','(turns to the audience)'],
          ['Tama','Kei te whakamoemiti tātou ki te Atua. Soli Deo Gloria!','We praise God. To God alone the glory!','(the whole class says the motto together)','T4W9'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) What a year! These children have learned to greet, to share who they are, to give thanks and to dream. Every word is a gift, and every gift can bless someone else. May God bless you and keep you. That is where your Pānga, your impact, begins.','T1W9'],
          ['Hana','Kia ora, Kuia. Arohanui ki a koutou katoa. Ka kite!','Thank you, Kuia. Much love to you all. See you!','(Tama waves too)','T3W10']]},
        EX:[['What does whakamutunga mean?','Ending / closing.'],['Say in te reo: ‘Hello, everyone.’','Tēnā koutou katoa.'],['Choose the word: E whakawhetai ana mātou ____ a koutou katoa. (to you all) (ki / mō)','ki'],['Say in te reo: ‘This is the closing gathering.’','He hui whakamutunga tēnei.'],['Stretch: thank the audience, say your dream, and finish with the school motto.','E whakawhetai ana mātou ki a koutou katoa. Ko tōku moemoeā, ka ___ ahau. Soli Deo Gloria!']],
        CE:['Not knowing that whakamutunga means ending or closing','Leaving out katoa, or saying tēnā koe (one person) to a group','Using mō instead of ki before people (ki a koutou katoa)','Leaving out He or tēnei, or putting whakamutunga before hui','Leaving out ki a before koutou, or leaving out Ko tōku moemoeā'],
        T:'T4 W10 Lesson B',
        LP:{title:'Hui Whakamutunga — Our year showcase',val:'Pānga · Numbers 6:24-25',pat:['Tēnā koutou katoa. He hui whakamutunga tēnei.','E whakawhetai ana mātou ki a koutou katoa.','Ko tōku moemoeā, ka ________ ahau. Soli Deo Gloria!'],swap:'Share your showcase in order: welcome · who I am · where from · feeling and likes · getting there and caring · thanks · dream · praise · goodbye. Stretch: whakamutunga (ending) · katoa (all). Cheer others: Ka pai! Ka rawe! Kia kaha!'}
      }
    };

    addLessons({ '4.10.A': A, '4.10.B': B });
  }

})();
