/* ═════════════════════════════════════════════════════════════════════════════
   data/term3.js  ·  TERM 3 · MANAAKI  ·  “Kai, whānau, hākari”  (Serving and hospitality)
   Weeks 1–7 written so far (14 lessons).  Term value: Manaaki (serve faithfully with our gifts and talents).
   To add Week 8: copy a week block below, change the numbers/keys ('3.8.A', '3.8.B'), and write the content.
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

  const MV3 = "Manaaki: serve faithfully with our gifts and talents";   // term value line used in each lesson's “Christian values link”
  const cu3 = (strands, other) => curriculumRows(strands, other, 'Manaakitanga · Whanaungatanga');   // Term 3's Tātaiako pair


  /* Term overview: shown in the lesson menu and on the printable Term pack. No rubric yet: until you add one (rubric: [...]), the Term pack uses Term 1's. */
  defineTerm(3, {
    value: "Manaaki",
    theme: "Kai, whānau, hākari",
    valueLine: "Manaaki: serve faithfully with our gifts and talents",
    weeks: ["Kai","Happening now","Past: I","Future: Ka","When?","Saying no","Everyone (pronouns)","Manaaki in action","Serving others","Whakaaturanga"]
  });


  /* ──────── WEEK 1 · Kai ──────── */
  {
    addGlossary({
      "parāoa":["bread","pah-RAH-or-ah",1,3],
      "āporo":["apple","AH-poh-roh",1,3],
      "panana":["banana","pah-NAH-nah",1,3],
      "rare":["lollies / sweets","RAH-reh",1,3],
      "kai ora":["healthy food","kye OR-ah",1,3],
      "reka":["tasty / sweet","REH-kah",1,3],
      "mīti":["meat","MEE-tee",1,3]
    });

    // ── Lesson A · Kei te hiakai ahau — I am hungry ──
    const A = {
      P: {
        t:3,
        w:1,
        l:'A',
        ch:'Kei~te|k hiakai|n ahau.|a',
        sub:'Kai time! Today we name foods and drinks, say we are hungry and say what we want to eat.',
        say:'Kia ora everyone, and welcome to Term 3! This term is about manaaki: serving and looking after others, and the best place to start is kai. You already know most of the pieces: Kei te hiakai ahau from Term 1 and Kei te pīrangi ahau ki te … from Week 6. Today we add the names of foods. Still no writing: listen, think and speak. Have a real apple, a banana, some bread and a cup of milk if you can, or pictures.',
        pron:'parāoa = pah-RAH-or-ah · āporo = AH-poh-roh · panana = pah-NAH-nah · rare = RAH-reh',
        li:'name foods and drinks, say we are hungry, and say and ask what we want to eat and drink in te reo.',
        succ:['I can say three kai words in te reo: parāoa, āporo, miraka.','I can say how I feel and what I want: Kei te hiakai ahau. Kei te pīrangi ahau ki te parāoa.','I can ask and answer: Kei te pīrangi koe ki te aha? Kei te pīrangi ahau ki te āporo.'],
        wp:'Give us today our daily bread.',
        ref:'Matthew 6:11',
        mom:'Every meal is a gift from God. Manaaki starts with kai: when we notice someone is hungry and share what we have, we serve faithfully with what we have been given.',
        q:'Who prepares and shares kai with you, and how can you say thank you?',
        recall:[['How do you say: I am hungry.','Kei te hiakai ahau.'],['How do you say: I want to drink water.','Kei te pīrangi ahau ki te inu wai.'],['How do you say: What is this? It is a book.','He aha tēnei? He pukapuka tēnei.']],
        rtag:'Terms 1 and 2',
        rtxt:'Remember when… Terms 1 and 2 (3 quick prompts)',
        refl:'What kai did you enjoy today, and who can you thank for it?',
        next:'Lesson B: offering kai and saying it is tasty (Kei te pīrangi koe ki te parāoa?)',
        vsay:'Say each word and the class echoes, with an action: pretend to eat bread for parāoa, bite an apple for āporo, peel a banana for panana, unwrap a lolly for rare, drink for miraka (milk) and wai (water), hand on heart and a thumbs up for kai ora (healthy food). Hiakai and pīrangi are old friends from Term 1. Say parāoa slowly in chunks: pa-rā-o-a. Remember rare is RAH-reh, not the English word rare.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Kei te hiakai ahau. Prompt 3: parāoa, not panana.',
        xresc:'Common error: leaving out ki te before the food. Say: ki te joins want to the thing you want: Kei te pīrangi ahau ki te parāoa.',
        xpron:'parāoa = pah-RAH-or-ah · panana = pah-NAH-nah',
        cur:cu3('Communication (naming foods and drinks, saying and asking what we want) · Language Knowledge (Kei te hiakai ahau; Kei te pīrangi ahau / koe / ia ki te + kai; He kai ora te āporo) · Cultural Knowledge (kai as the centre of manaakitanga, sharing and offering food)','Hauora link: healthy food choices. Recycles Term 1 Weeks 2 and 6 and Term 2 Week 1. Check which students have food allergies or family customs around kai before any real tasting.'),
        vr:valueRows('Matthew 6:11','Every meal is a gift from God. When we notice someone is hungry and share what we have, we serve faithfully with what we have been given.','Who prepares and shares kai with you, and how can you say thank you?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Bring real or picture cards of bread, an apple, a banana, lollies, milk and water. Check for allergies before handling real food.','Print the weekly vocab card, one per student.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the food words below, especially parāoa and āporo, and remind yourself that rare means lollies.'],
        three:'(1) The frame is the one from Term 1 Week 6: <i>Kei te pīrangi ahau ki te</i> + the thing you want. (2) Swap <i>ahau</i> for <i>koe</i> (you) or <i>ia</i> (she or he) and raise your voice to ask. (3) <i>He kai ora te āporo</i> uses the Term 2 frame He + word + te + thing: an apple is healthy food.',
        diff:['Echo as a whole class and hold up the real food or picture every time. Use only parāoa, āporo and miraka at first. Pair with a confident partner and allow whispering first.','Complete all steps. Use all six kai words, ask and answer in pairs, and say what is healthy.','Add colours (He whero te āporo), Week 4 describing words (He nui te panana) and Kia ora mō te kai. Explain in English how ki te works with things as well as actions.'],
        look:'Clear vowels (parāoa, āporo, panana); Kei te pīrangi first, then ahau, koe or ia, then ki te and the food; the right kai word for the picture; students asking Kei te pīrangi koe ki te aha? unprompted.',
        nx:'revisit ki te with students in Starting; build offering kai, yes or no questions and the word reka (tasty) in Lesson B.',
        rec:'Term 1 Week 2 (Kei te hiakai ahau), Week 6 (Kei te pīrangi ahau ki te …, ki te inu wai) and Term 2 Weeks 1, 3 and 4 (He aha tēnei? He kōwhai te panana. He kai ora te āporo) are recalled in the warm-up, steps and drama; Term 1 thanks and God’s love return in the drama.'
      },
      D: {
        VOC:['kai','hiakai','pīrangi','parāoa','āporo','panana','rare','miraka','wai','kai ora'],
        STEPS:[
          ['Quick recap: I am hungry. I want to drink water.','Kei~te|k hiakai|n ahau.|a Kei~te|k pīrangi|q ahau|a ki~te|k inu|n wai.|n','kay teh HEE-ah-kye ah-HOW · kay teh PEE-rah-ngee ah-HOW kee teh EE-noo WHY','Term 1 Weeks 2 and 6, stacked.',null,'Whole class'],
          ['The word for bread is parāoa. Say: parāoa.','parāoa|n*','pah-RAH-or-ah','parāoa = bread. Hold the long ā.','Hold up some bread or a picture. Parāoa means bread. Say it in chunks: pa-rā-o-a. Say it with me, and pretend to eat a slice.','Echo'],
          ['You know the frame from Term 1. How would you say: I want bread?','Kei~te|k pīrangi|q ahau|a ki~te|k parāoa.|n','kay teh PEE-rah-ngee ah-HOW kee teh pah-RAH-or-ah','Kei te pīrangi ahau ki te + the thing. Food goes straight after ki te.','Last term you said Kei te pīrangi ahau ki te kai, I want to eat. Now swap kai for the name of the food. Take a moment… (wait 3 seconds)… Kei te pīrangi ahau ki te parāoa. Say it with me.','Echo'],
          ['āporo means apple. How would you say: I want an apple?','Kei~te|k pīrangi|q ahau|a ki~te|k āporo.|n*','kay teh PEE-rah-ngee ah-HOW kee teh AH-poh-roh','Same frame, new food.','Bite an invisible apple. Āporo means apple. Take a moment… (wait 3 seconds)… Kei te pīrangi ahau ki te āporo. Say it with me.','Echo'],
          ['Two more: banana is panana, and lollies are rare. Say: panana, rare.','panana|n* rare|n*','pah-NAH-nah · RAH-reh','panana = banana (it sounds like the English). rare = lollies or sweets.','Peel an invisible banana: panana. Unwrap a lolly: rare. Rare is RAH-reh. It sounds like the English word rare but means lollies. Say each one with me.','Echo'],
          ['How would you say: I want a banana. I want lollies.','Kei~te|k pīrangi|q ahau|a ki~te|k panana.|n Kei~te|k pīrangi|q ahau|a ki~te|k rare.|n','kay teh PEE-rah-ngee ah-HOW kee teh pah-NAH-nah · … kee teh RAH-reh','Same frame, new foods.',null,'Whole class'],
          ['You know miraka and wai from Term 1. How would you say: I want milk. I want water.','Kei~te|k pīrangi|q ahau|a ki~te|k miraka.|n Kei~te|k pīrangi|q ahau|a ki~te|k wai.|n','kay teh PEE-rah-ngee ah-HOW kee teh MEE-rah-kah · … kee teh WHY','Drinks use the same frame as food.',null,'Whole class'],
          ['Now ask: Do you want an apple?','Kei~te|k pīrangi|q koe|a ki~te|k āporo?|n','kay teh PEE-rah-ngee KOH-eh kee teh AH-poh-roh','Swap ahau for koe, and your voice goes up.',null,'Echo'],
          ['Ask: What do you want?','Kei~te|k pīrangi|q koe|a ki~te|k aha?|n','kay teh PEE-rah-ngee KOH-eh kee teh AH-hah','aha = what, from Term 1 Week 6.','You asked this last term. Take a moment… (wait 3 seconds)… Kei te pīrangi koe ki te aha? Say it with me.','Echo'],
          ['Partner game: ask what your partner wants, then answer with a kai word.','Kei~te|k pīrangi|q koe|a ki~te|k aha?|n Kei~te|k pīrangi|q ahau|a ki~te|k ___.|n','kay teh PEE-rah-ngee KOH-eh kee teh AH-hah · kay teh PEE-rah-ngee ah-HOW kee teh ___','Use the real food or pictures. Swap after three questions.','Turn to your partner. One person asks Kei te pīrangi koe ki te aha? The other answers with any kai word. Swap after three questions. If you forget a word, look at the vocab card. Take 2 minutes while I listen.','Pairs'],
          ['kai ora means healthy food. How would you say: An apple is healthy food?','He|k kai~ora|n* te|a āporo.|n','heh KYE OR-ah teh AH-poh-roh','He + word + te + thing, like He nui te pukapuka. kai ora = healthy food.','You know the frame He nui te pukapuka, the book is big. Here the word is kai ora, healthy food. Take a moment… (wait 3 seconds)… He kai ora te āporo. Say it with me, with a thumbs up.','Echo'],
          ['What is this? It is a banana. The banana is yellow.','He|k aha|q tēnei?|a He|k panana|n tēnei.|a He|k kōwhai|q te|a panana.|n','heh AH-hah TEH-neh-ee · heh pah-NAH-nah TEH-neh-ee · heh KOR-fye teh pah-NAH-nah','Term 2 Weeks 1 and 3, with new words.',null,'Pairs'],
          ['How would you say: Hello. I am hungry. I want bread. Thank you for the food.','Kia~ora.|w Kei~te|k hiakai|n ahau.|a Kei~te|k pīrangi|q ahau|a ki~te|k parāoa.|n Kia~ora|w mō|q te|a kai.|n','KEE-ah OR-ah. kay teh HEE-ah-kye ah-HOW. kay teh PEE-rah-ngee ah-HOW kee teh pah-NAH-nah. KEE-ah OR-ah mor teh KYE','Terms 1 and 3 together.',null,'Whole class'],
          ['Class chain: greet, say you are hungry, say what you want, ask the next person what they want, say goodbye.','Kia~ora.|w Kei~te|k hiakai|n ahau.|a Kei~te|k pīrangi|q ahau|a ki~te|k ___.|n Kei~te|k pīrangi|q koe|a ki~te|k aha?|n Ka~kite!|w','KEE-ah OR-ah… kay teh HEE-ah-kye ah-HOW… kay teh PEE-rah-ngee ah-HOW kee teh ___… kay teh PEE-rah-ngee KOH-eh kee teh AH-hah… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person turns to the next, greets them, says what they want, and asks what the other person wants. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Pouaka Kai — The Lunchbox',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te pēhea koutou?','Hello, children! How are you all?','(arms wide)','T1W2'],
          ['Hana','Kei te hiakai ahau, Kaiako!','I am hungry, teacher!','(rubs her tummy)','T1W2'],
          ['Kaiako Rose','Kei te pīrangi koe ki te aha, Hana?','What do you want, Hana?','','T1W6'],
          ['Hana','Kei te pīrangi ahau ki te parāoa.','I want bread.','(mimes eating)'],
          ['Tama','Kei te pīrangi ahau ki te āporo.','I want an apple.','(bites an invisible apple)'],
          ['Kaiako Rose','He aha tēnei, Tama?','What is this, Tama?','(holds up a lunchbox)','T2W1'],
          ['Tama','He panana tēnei. He kōwhai te panana!','This is a banana. The banana is yellow!','(peels it)','T2W3'],
          ['Hana','Kei te pīrangi koe ki te rare, Kaiako?','Do you want lollies, teacher?','(giggles)'],
          ['Kaiako Rose','Kāo. He kai ora te āporo.','No. An apple is healthy food.','(smiles)','T1W2'],
          ['Tama','Kei te pīrangi koe ki te miraka, Hana?','Do you want milk, Hana?','(holds out a cup)','T1W6'],
          ['Hana','Āe, kia ora, Tama!','Yes, thank you, Tama!','(takes the cup)'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Every meal is a gift from God. When we share our kai with someone who is hungry, we serve them the way Jesus served others.','T1W9'],
          ['Hana','Kia ora mō te kai, Kaiako. Ka kite!','Thank you for the food, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I am hungry.’','Kei te hiakai ahau.'],['What does Kei te pīrangi ahau ki te āporo mean?','I want an apple.'],['Choose the word for bread: Kei te pīrangi ahau ki te ____ (parāoa / panana)','parāoa'],['Say in te reo: ‘Do you want milk?’','Kei te pīrangi koe ki te miraka?'],['Stretch: say you are hungry, say what you want, then ask your partner what they want.','Kei te hiakai ahau. Kei te pīrangi ahau ki te ___. Kei te pīrangi koe ki te aha?']],
        CE:['Leaving out Kei te or saying Ko instead','Mixing up pīrangi (want) and hiakai (hungry)','Mixing up parāoa (bread) and panana (banana)','Leaving out ki te, or forgetting koe asks the question','Missing one of the three sentences'],
        T:'T3 W1 Lesson A',
        LP:{title:'Kei te hiakai ahau — I am hungry',val:'Manaaki · Matthew 6:11',pat:['Kei te hiakai ahau.','Kei te pīrangi ahau ki te ________.','Kei te pīrangi koe ki te ________?'],swap:'Swap the kai: parāoa · āporo · panana · rare · miraka · wai. He kai ora te āporo: an apple is healthy food.'}
      }
    };

    // ── Lesson B · Kei te pīrangi koe ki te parāoa? — Do you want bread? ──
    const B = {
      P: {
        t:3,
        w:1,
        l:'B',
        ch:'Kei~te|k pīrangi|q koe|a ki~te|k parāoa?|n',
        sub:'Do you want bread? Today we offer kai kindly, answer politely, ask about others and say the food is tasty.',
        say:'Kia ora everyone! Last lesson we named foods and said what we want. Today we do what manaaki is all about: we offer kai to someone else, answer politely, and say when the food is tasty. Still no writing: listen, think and speak. Have your real food or pictures ready, and let students pretend to be hosts and guests.',
        pron:'reka = REH-kah · mīti = MEE-tee',
        li:'offer kai to others, answer yes or no politely, ask about someone else, and say the food is tasty, in te reo.',
        succ:['I can answer politely: Āe, kia ora. Kāo, kei te pai ahau.','I can offer and ask: Kei te pīrangi koe ki te parāoa? Kei te pīrangi ia ki te panana?','I can say the food is tasty: Kei te reka te kai.'],
        wp:'Offer hospitality to one another.',
        ref:'1 Peter 4:9',
        mom:'The Bible tells us to welcome one another with open hands. When we offer kai kindly and say thank you, we show manaaki: serving faithfully with what we have.',
        q:'Who could you offer kai or a kind word to today?',
        recall:[['How do you say: I am hungry.','Kei te hiakai ahau.'],['How do you say: I want an apple.','Kei te pīrangi ahau ki te āporo.'],['How do you say: What is this? It is a banana.','He aha tēnei? He panana tēnei.'],['How do you say: Is it raining?','Kei te ua?']],
        rtag:'Term 3 Week 1 and earlier',
        rtxt:'Remember when… Lesson A and earlier terms (4 quick prompts)',
        refl:'Who did you offer something to kindly today?',
        next:'Week 2: Happening now (E kai ana ahau)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: reka (tasty, sweet) and mīti (meat). Rub your tummy and smile for reka. Remind students that Kei te reka te kai uses the same frame as Kei te makariri te rangi from Term 2.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: koe asks the question, with a rising voice. Prompt 3: reka means tasty.',
        xresc:'Common error: forgetting a question is the same words with a rising voice. Say: Kei te pīrangi ahau becomes Kei te pīrangi koe, and your voice goes up.',
        xpron:'reka = REH-kah · mīti = MEE-tee',
        cur:cu3('Communication (offering kai, answering politely, asking about others, saying kai is tasty) · Language Knowledge (Kei te pīrangi koe / ia ki te …?; Āe / Kāo; Kei te reka te kai; Haere mai ki te kai) · Cultural Knowledge (manaakitanga: offering kai and giving thanks to a host)','Recycles Lesson A, Term 1 Weeks 2, 6 and 8 and Term 2 Weeks 1 and 6. Hauora link: kind ways to refuse food politely.'),
        vr:valueRows('1 Peter 4:9','The Bible tells us to welcome one another with open hands. When we offer kai kindly and say thank you, we show manaaki.','Who could you offer kai or a kind word to today?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add reka (tasty) and mīti (meat) as the two stretch words, written or spoken.','Bring real food or picture cards and a plate for pretend hosting. Check for allergies and for any family dietary customs before real tasting.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the question voice and the polite answers Āe, kia ora and Kāo, kei te pai ahau.'],
        three:'(1) A yes or no question uses the same words as the statement, with a rising voice: <i>Kei te pīrangi koe ki te parāoa?</i> (2) Answer politely with <i>Āe, kia ora</i> or <i>Kāo, kei te pai ahau</i>. (3) <i>Kei te reka te kai</i> uses the weather frame: Kei te + describing word + te + thing.',
        diff:['Echo as a whole class and use the real food or pictures. Offer only parāoa and miraka at first. Pair with a confident partner and allow whispering first.','Complete all steps. Offer, accept and refuse kai politely in pairs, and ask about a third person.','Add reka and mīti. Add tino (Kei te tino reka te kai). Host a pretend meal with greeting, offer, thanks and goodbye.'],
        look:'Rising voice for questions; Āe and Kāo used naturally; polite answers (Āe, kia ora); ia in the right place for she or he; clear vowels in reka and mīti; a warm, kind tone.',
        nx:'revisit questions and polite answers with students in Starting; move to Week 2 (Happening now).',
        rec:'Lesson A (Kei te hiakai ahau, Kei te pīrangi ahau ki te …), Term 1 Weeks 2, 6, 8 and 9 (Āe, Kāo, Kei te hiakai, Haere mai, Kia ora mō te kai) and Term 2 Weeks 1 and 6 (He aha tēnei? Kei te ua?) are recalled in the warm-up, steps and drama. Week 2 will recall Kei te pīrangi and the kai words.'
      },
      D: {
        VOC:[...A.D.VOC,'reka','mīti'],
        STEPS:[
          ['Quick recap: I am hungry. I want an apple. Do you want an apple?','Kei~te|k hiakai|n ahau.|a Kei~te|k pīrangi|q ahau|a ki~te|k āporo.|n Kei~te|k pīrangi|q koe|a ki~te|k āporo?|n','kay teh HEE-ah-kye ah-HOW · kay teh PEE-rah-ngee ah-HOW kee teh AH-poh-roh · kay teh PEE-rah-ngee KOH-eh kee teh AH-poh-roh','Lesson A, stacked.',null,'Whole class'],
          ['Offer a friend some bread. How would you say: Do you want bread?','Kei~te|k pīrangi|q koe|a ki~te|k parāoa?|n','kay teh PEE-rah-ngee KOH-eh kee teh pah-RAH-or-ah','koe asks the question. Your voice goes up.','Hold out an imaginary plate of bread. The same words as the statement, but koe and a rising voice make an offer. Take a moment… (wait 3 seconds)… Kei te pīrangi koe ki te parāoa? Say it with me, kindly.','Echo'],
          ['Accept politely: Yes, thank you.','Āe,|w* kia~ora.|w','AH-eh, KEE-ah OR-ah','Āe = yes. Kia ora = thank you.',null,'Echo'],
          ['Refuse politely: No, I am well.','Kāo,|w* kei~te|k pai|n ahau.|a','KAH-oh, kay teh PIE ah-HOW','Kāo = no. Kei te pai ahau = I am fine, from Term 1 Week 2.','You know Kei te pai ahau, I am well. It is also a kind way to say no thanks. Take a moment… (wait 3 seconds)… Kāo, kei te pai ahau. Say it with me, with a smile.','Echo'],
          ['Offer a drink. How would you say: Do you want milk? Yes, thank you.','Kei~te|k pīrangi|q koe|a ki~te|k miraka?|n Āe,|w kia~ora.|w','kay teh PEE-rah-ngee KOH-eh kee teh MEE-rah-kah · AH-eh, KEE-ah OR-ah','Question, then a polite answer.',null,'Whole class'],
          ['Partner game: be a host. Offer your partner some kai, and answer politely. Then swap.','Kei~te|k pīrangi|q koe|a ki~te|k ___?|n Āe,|w kia~ora.|w Kāo,|w kei~te|k pai|n ahau.|a','kay teh PEE-rah-ngee KOH-eh kee teh ___? · AH-eh, KEE-ah OR-ah · KAH-oh, kay teh PIE ah-HOW','Use the real food or pictures. Swap after three offers.','Turn to your partner. One person is the host and offers kai with a kind voice. The guest answers politely, yes or no. Swap after three offers. Take 2 minutes while I listen.','Pairs'],
          ['Ask about someone else. How would you say: Does she want a banana?','Kei~te|k pīrangi|q ia|a ki~te|k panana?|n','kay teh PEE-rah-ngee EE-ah kee teh pah-NAH-nah','ia = she or he, in the same spot as ahau and koe.',null,'Whole class'],
          ['Answer: Yes, she wants a banana. No, he wants bread.','Āe,|w kei~te|k pīrangi|q ia|a ki~te|k panana.|n Kāo,|w kei~te|k pīrangi|q ia|a ki~te|k parāoa.|n','AH-eh, kay teh PEE-rah-ngee EE-ah kee teh pah-NAH-nah · KAH-oh, kay teh PEE-rah-ngee EE-ah kee teh pah-RAH-or-ah','Yes or no, then the full sentence.',null,'Pairs'],
          ['reka means tasty or sweet. How would you say: The food is tasty?','Kei~te|k reka|q* te|a kai.|n','kay teh REH-kah teh KYE','Same frame as the weather: Kei te + word + te + thing.','You know Kei te makariri te rangi, the weather is cold. Same frame. Take a moment… (wait 3 seconds)… Kei te reka te kai. Say it with me, rubbing your tummy.','Echo'],
          ['How would you say: The apple is tasty. The banana is very tasty.','Kei~te|k reka|q te|a āporo.|n Kei~te|k tino|q reka|q te|a panana.|n','kay teh REH-kah teh AH-poh-roh · kay teh TEE-nor REH-kah teh pah-NAH-nah','tino = very, from Term 1 Week 2.',null,'Whole class'],
          ['mīti means meat. How would you say: I want meat. Is meat healthy food?','Kei~te|k pīrangi|q ahau|a ki~te|k mīti.|n* He|k kai~ora|n te|a mīti?|n','kay teh PEE-rah-ngee ah-HOW kee teh MEE-tee · heh KYE OR-ah teh MEE-tee','Stretch word: mīti = meat. Practise kai ora again.',null,'Whole class'],
          ['Invite someone to the food: Come to the food! Thank you for the food.','Haere|k mai|k ki~te|k kai!|n Kia~ora|w mō|q te|a kai.|n','HIGH-reh MY kee teh KYE · KEE-ah OR-ah mor teh KYE','Term 1: haere mai = come here. Add ki te kai: to the food.',null,'Whole class'],
          ['Class chain: greet, offer the next person some kai, they answer politely, say thank you, goodbye.','Kia~ora.|w Kei~te|k pīrangi|q koe|a ki~te|k ___?|n Āe/Kāo,|w ___.|n Kia~ora.|w Ka~kite!|w','KEE-ah OR-ah… kay teh PEE-rah-ngee KOH-eh kee teh ___… AH-eh / KAH-oh… KEE-ah OR-ah… kah KEE-teh','Real hosting, nothing memorised.','Pass a plate or picture around the circle. Each person offers kai to the next, who answers politely and offers to the next person. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Wā Kai i te Kāinga — Kai at Home',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Haere mai ki te kai!','Hello, children! Come to the food!','(opens the door)','T1W1'],
          ['Hana','Tēnā koe, Kuia. Kei te hiakai ahau.','Greetings, Kuia. I am hungry.','(rubs her tummy)','T1W2'],
          ['Kuia Mere','Kei te pīrangi koe ki te parāoa, Hana?','Do you want bread, Hana?','(holds out a plate)'],
          ['Hana','Āe, kia ora, Kuia.','Yes, thank you, Kuia.','(takes a slice)','T1W2'],
          ['Kuia Mere','Kei te pīrangi koe ki te aha, Tama?','What do you want, Tama?','','T1W6'],
          ['Tama','Kei te pīrangi ahau ki te mīti. Kei te tino hiakai ahau!','I want meat. I am very hungry!','(licks his lips)','T1W2'],
          ['Kuia Mere','He kai ora te āporo. Kei te reka te kai?','An apple is healthy food. Is the food tasty?','(smiles)','T2W4'],
          ['Hana','Āe! Kei te reka te kai, Kuia!','Yes! The food is tasty, Kuia!','(rubs her tummy)'],
          ['Tama','He aha tēnei, Kuia?','What is this, Kuia?','(points at a bowl)','T2W1'],
          ['Kuia Mere','He rare tēnei. Kei te pīrangi koutou ki te rare?','This is lollies. Do you want lollies?','(winks)'],
          ['Hana','Āe! Kia ora, Kuia!','Yes! Thank you, Kuia!','(claps)'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) We welcome people to our table and share what we have. That is manaaki, serving others with the gifts God has given us.','T1W9'],
          ['Tama','Kia ora mō te kai, Kuia. Ka kite!','Thank you for the food, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘Do you want bread?’','Kei te pīrangi koe ki te parāoa?'],['Say in te reo: ‘No, I am well.’','Kāo, kei te pai ahau.'],['Choose the word for tasty: Kei te ____ te kai. (reka / hiakai)','reka'],['What does Kei te pīrangi ia ki te panana? mean?','Does she (or he) want a banana?'],['Stretch: offer your partner some kai, and answer politely when they offer you something.','Kei te pīrangi koe ki te ___? Āe, kia ora. / Kāo, kei te pai ahau.']],
        CE:['Forgetting a question is the same words with a rising voice','Leaving out Kāo or using Āe for no','Mixing up reka (tasty) and hiakai (hungry)','Using koe instead of ia','Forgetting a polite answer or the thank you'],
        T:'T3 W1 Lesson B',
        LP:{title:'Kei te pīrangi koe ki te parāoa? — Do you want bread?',val:'Manaaki · 1 Peter 4:9',pat:['Kei te pīrangi koe ki te ________?','Āe, kia ora. · Kāo, kei te pai ahau.','Kei te reka te kai.'],swap:'Swap the person and the kai: koe = you · ia = she/he · parāoa · āporo · panana · rare · miraka · wai. Stretch: reka · mīti.'}
      }
    };

    addLessons({ '3.1.A': A, '3.1.B': B });
  }

  /* ──────── WEEK 2 · Happening now ──────── */
  {
    addGlossary({
      "rātou":["they (3 or more)","RAH-toh-oh",2,3],
      "tuhituhi":["write","too-hee-TOO-hee",2,3],
      "karakia":["pray / prayer","kah-RAH-kee-ah",2,3]
    });

    // ── Lesson A · E kai ana ahau — I am eating ──
    const A = {
      P: {
        t:3,
        w:2,
        l:'A',
        ch:'E|k kai|n ana|k ahau.|a',
        sub:'What is happening right now? Today we say what we are doing with the new frame E … ana.',
        say:'Kia ora everyone! Last week we named kai and offered it kindly. This week we say what is happening right now. In Term 1 you said Kei te kai ahau. Today you learn a second way: E kai ana ahau. The action word sits in the middle, between E and ana. You will hear it and say it all the time. Still no writing: listen, think and speak. Mime every action as you say it.',
        pron:'e … ana = eh … AH-nah · tākaro = TAH-kah-roh · waiata = why-AH-tah',
        li:'say what is happening right now using E + action + ana + who, and ask what someone is doing.',
        succ:['I can say what I am doing: E kai ana ahau. E inu ana ahau.','I can say what you or she or he is doing: E ako ana koe. E haere ana ia.','I can ask: E aha ana koe? and answer.'],
        wp:'Whatever you do, work at it with all your heart, as working for the Lord.',
        ref:'Colossians 3:23',
        mom:'Whatever we are doing, whether eating, learning, playing or helping, we can do it with all our heart for God. Manaaki is serving faithfully, and it starts with the thing we are doing right now.',
        q:'What is one thing you are doing today that you can do with all your heart?',
        recall:[['How do you say: I am hungry.','Kei te hiakai ahau.'],['How do you say: Do you want bread?','Kei te pīrangi koe ki te parāoa?'],['How do you say: What are you doing? I am eating.','Kei te aha koe? Kei te kai ahau.']],
        rtag:'Term 3 Week 1 and Term 1',
        rtxt:'Remember when… Term 3 Week 1 and Term 1 (3 quick prompts)',
        refl:'What were you doing today that you can offer to God?',
        next:'Lesson B: E … ana with everyone (tātou, koutou) and the stretch words tuhituhi and karakia',
        vsay:'Say each action word and the class echoes with a mime: eat, drink, learn (point to head), go (walk on the spot), play, run, sit, sing and work. Many are old friends from Term 1. Say tākaro in chunks: tā-ka-ro. Remind students the action word goes in the middle: E ___ ana.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: the action goes between E and ana. Prompt 3: ahau for me, koe for you.',
        xresc:'Common error: leaving out ana, or putting the person before the action. Say: E + action + ana + person, like a sandwich: E kai ana ahau.',
        xpron:'tākaro = TAH-kah-roh · waiata = why-AH-tah',
        cur:cu3('Communication (saying and asking what is happening now) · Language Knowledge (E + action + ana + person; E aha ana koe?; compared with Kei te + action) · Cultural Knowledge (doing everyday things with care and aroha, manaaki shown in ordinary actions)','Recycles Term 1 Weeks 2, 5 and 8 and Term 3 Week 1. Tell students both Kei te kai ahau and E kai ana ahau mean I am eating.'),
        vr:valueRows('Colossians 3:23','Whatever we do, we can do it with all our heart for God. Manaaki starts with the thing we are doing right now.','What is one thing you are doing today that you can do with all your heart?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student.','Practise miming each action word so students can copy you.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the frame yourself: E kai ana ahau, E inu ana koe, E haere ana ia.'],
        three:'(1) The action word goes in the middle: <i>E</i> + action + <i>ana</i>, then who. (2) <i>E kai ana ahau</i> means the same as <i>Kei te kai ahau</i>: I am eating. (3) To ask, use <i>E aha ana koe?</i>: What are you doing?',
        diff:['Echo as a whole class and mime every action. Use only kai, inu and haere at first. Pair with a confident partner and allow whispering first.','Complete all steps. Use all nine action words, ask and answer in pairs, and say what others are doing.','Add Kei te aha koe? as an alternative and compare both frames. Describe what a classmate is doing right now without prompting.'],
        look:'The action word between E and ana; ahau and koe in the right place; clear vowels in tākaro and waiata; students miming and speaking together; students asking E aha ana koe? unprompted.',
        nx:'revisit the frame E … ana with students in Starting; build everyone (tātou, koutou) and the stretch words in Lesson B.',
        rec:'Term 1 Weeks 2, 5 and 9 (Kei te hiakai ahau, Kei te aha koe, Kia ora mō te kai) and Term 3 Week 1 (Kei te pīrangi koe ki te parāoa?) are recalled in the warm-up, steps and drama.'
      },
      D: {
        VOC:['kai','inu','ako','haere','tākaro','oma','noho','waiata','mahi'],
        STEPS:[
          ['Quick recap: What are you doing? I am eating.','Kei~te|k aha|q koe?|a Kei~te|k kai|n ahau.|a','kay teh AH-hah KOH-eh · kay teh KYE ah-HOW','Term 1 Week 5.',null,'Whole class'],
          ['There is another way to say I am eating: E kai ana ahau. Say: E kai ana ahau.','E|k kai|n* ana|k* ahau.|a','eh KYE AH-nah ah-HOW','E + action + ana. The action sits in the middle.','Mime eating. E, then the action, then ana, then who. It is like a sandwich. Say it with me.','Echo'],
          ['How would you say: I am drinking?','E|k inu|n ana|k ahau.|a','eh EE-noo AH-nah ah-HOW','Swap the action in the middle.','Take a moment… (wait 3 seconds)… E inu ana ahau. Say it with me, and mime drinking.','Echo'],
          ['How would you say: I am learning?','E|k ako|n ana|k ahau.|a','eh AH-kor AH-nah ah-HOW','ako = learn.',null,'Echo'],
          ['How would you say: I am going.','E|k haere|n ana|k ahau.|a','eh HIGH-reh AH-nah ah-HOW','haere = go.',null,'Whole class'],
          ['Now you: E tākaro ana ahau. Say it. It means I am playing.','E|k tākaro|n* ana|k ahau.|a','eh TAH-kah-roh AH-nah ah-HOW','tākaro = play. Say it in chunks: tā-ka-ro.','Mime playing. Tākaro means play. Say it with me.','Echo'],
          ['Swap the person. How would you say: You are eating?','E|k kai|n ana|k koe.|a','eh KYE AH-nah KOH-eh','koe = you.','Same frame, new person. Take a moment… (wait 3 seconds)… E kai ana koe. Say it with me.','Echo'],
          ['How would you say: She is going. You are learning.','E|k haere|n ana|k ia.|a E|k ako|n ana|k koe.|a','eh HIGH-reh AH-nah EE-ah · eh AH-kor AH-nah KOH-eh','ia = she or he.',null,'Whole class'],
          ['Ask: What are you doing?','E|k aha|q ana|k koe?|a','eh AH-hah AH-nah KOH-eh','aha goes in the action spot.','Take a moment… (wait 3 seconds)… E aha ana koe? Say it with me.','Echo'],
          ['Partner game: mime an action, your partner asks what you are doing, then you answer.','E|k aha|q ana|k koe?|a E|k ___|n ana|k ahau.|a','eh AH-hah AH-nah KOH-eh · eh ___ AH-nah ah-HOW','Use kai, inu, ako, haere, tākaro, oma, noho, waiata or mahi. Swap after three.','Turn to your partner. One person mimes an action. The other asks E aha ana koe? and the first answers. Swap after three. Take 2 minutes while I listen.','Pairs'],
          ['How would you say: I am running. I am sitting. I am singing. I am working.','E|k oma|n ana|k ahau.|a E|k noho|n ana|k ahau.|a E|k waiata|n ana|k ahau.|a E|k mahi|n ana|k ahau.|a','eh OR-mah AH-nah ah-HOW · eh NOH-hoh AH-nah ah-HOW · eh why-AH-tah AH-nah ah-HOW · eh MAH-hee AH-nah ah-HOW','New actions, same frame.',null,'Whole class'],
          ['Put it together: Hello. I am hungry. I am eating bread. Thank you for the food.','Kia~ora.|w Kei~te|k hiakai|n ahau.|a E|k kai|n ana|k ahau|a i~te|k parāoa.|n Kia~ora|w mō|q te|a kai.|n','KEE-ah OR-ah. kay teh HEE-ah-kye ah-HOW. eh KYE AH-nah ah-HOW ee teh pah-RAH-or-ah. KEE-ah OR-ah mor teh KYE','Terms 1 and 3 together. i te links the action to what you eat.',null,'Whole class'],
          ['Class chain: greet, say what you are doing, ask the next person, say goodbye.','Kia~ora.|w E|k ___|n ana|k ahau.|a E|k aha|q ana|k koe?|a Ka~kite!|w','KEE-ah OR-ah… eh ___ AH-nah ah-HOW… eh AH-hah AH-nah KOH-eh… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person mimes, tells the next what they are doing, and asks what the other person is doing. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Kei te Mahi Tātou — We Are All Busy',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! E aha ana koe, Hana?','Hello, children! What are you doing, Hana?','(arms wide)','T1W5'],
          ['Hana','E kai ana ahau, Kaiako.','I am eating, teacher.','(mimes eating)'],
          ['Kaiako Rose','Kei te hiakai koe, Hana?','Are you hungry, Hana?','','T1W2'],
          ['Hana','Āe, kei te hiakai ahau!','Yes, I am hungry!','(rubs her tummy)','T1W2'],
          ['Kaiako Rose','E aha ana koe, Tama?','What are you doing, Tama?','(points at him)'],
          ['Tama','E tākaro ana ahau.','I am playing.','(bounces a ball)'],
          ['Hana','E inu ana koe, Tama?','Are you drinking, Tama?','(points at his bottle)'],
          ['Tama','Āe, e inu ana ahau i te wai.','Yes, I am drinking water.','(takes a sip)','T1W6'],
          ['Kaiako Rose','E ako ana tātou, e mahi ana tātou.','We are learning, we are working.','(sweeps arm around the room)'],
          ['Hana','Kei te pīrangi koe ki te parāoa, Tama?','Do you want bread, Tama?','(holds out a slice)','T3W1'],
          ['Tama','Āe, kia ora, Hana!','Yes, thank you, Hana!','(takes it)'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Whatever we are doing, eating, learning or playing, we can do it with all our heart for God. That is manaaki in ordinary moments.','T1W9'],
          ['Hana','Kia ora mō te kai, Kaiako. Ka kite!','Thank you for the food, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I am eating.’ (using E … ana)','E kai ana ahau.'],['What does E haere ana ia mean?','She (or he) is going.'],['Choose the word for you: E inu ana ____. (koe / ahau)','koe'],['Say in te reo: ‘What are you doing?’','E aha ana koe?'],['Stretch: say what you are doing, then ask your partner what they are doing.','E ___ ana ahau. E aha ana koe?']],
        CE:['Leaving out ana','Putting ahau or koe before the action word','Mixing up ahau (I) and koe (you)','Using Kei te and E … ana together in one sentence','Forgetting to mime or to say the full sentence'],
        T:'T3 W2 Lesson A',
        LP:{title:'E kai ana ahau — I am eating',val:'Manaaki · Colossians 3:23',pat:['E ________ ana ahau.','E ________ ana koe.','E aha ana koe?'],swap:'Swap the action and the person: kai · inu · ako · haere · tākaro · oma · noho · waiata · mahi; ahau (I) · koe (you) · ia (she/he).'}
      }
    };

    // ── Lesson B · E ako ana tātou — We are learning ──
    const B = {
      P: {
        t:3,
        w:2,
        l:'B',
        ch:'E|k ako|n ana|k tātou.|a',
        sub:'We are learning together! Today we say what groups of people are doing, and add two stretch words.',
        say:'Kia ora everyone! Last lesson we said what I, you and she or he are doing. Today we say what groups are doing: tātou, we all together, and koutou, all of you. This is the heart of manaaki: we do things together. We add two stretch words, tuhituhi and karakia. Still no writing: listen, think and speak. Mime each action.',
        pron:'tuhituhi = too-hee-TOO-hee · karakia = kah-RAH-kee-ah',
        li:'say what groups of people are doing and ask about them using E … ana, and use the stretch words tuhituhi and karakia.',
        succ:['I can say what we are doing: E ako ana tātou. E waiata ana tātou.','I can say what all of you are doing: E mahi ana koutou.','I can say what they are doing: E tākaro ana rātou.'],
        wp:'Serve one another humbly in love.',
        ref:'Galatians 5:13',
        mom:'God calls us to serve one another in love. When we learn, work, eat and pray together, we are showing manaaki, serving faithfully with our gifts.',
        q:'What can you do together with someone else today to serve them?',
        recall:[['How do you say: I am eating.','E kai ana ahau.'],['How do you say: What are you doing?','E aha ana koe?'],['How do you say: Do you want milk?','Kei te pīrangi koe ki te miraka?'],['How do you say: What is this? It is a banana.','He aha tēnei? He panana tēnei.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'What did we do together today?',
        next:'Week 3: Past with I (I haere ahau ki te kura)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: tuhituhi (write) and karakia (pray, a prayer). Mime writing and folding hands. Remind students tātou includes the speaker and the listener: we all together.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: tātou for we all. Prompt 3: karakia means prayer.',
        xresc:'Common error: using ahau for a group. Say: ahau is only me. Use tātou for all of us and koutou for all of you.',
        xpron:'tuhituhi = too-hee-TOO-hee · karakia = kah-RAH-kee-ah',
        cur:cu3('Communication (saying and asking what groups are doing, with stretch words) · Language Knowledge (E + action + ana + tātou / koutou / rātou; tuhituhi, karakia) · Cultural Knowledge (doing things together, karakia as part of daily life)','Recycles Lesson A, Term 1 Weeks 2, 5, 6 and 9 and Term 2 Week 1. Pronouns are introduced fully in Term 3 Week 7; here students only hear and say tātou, koutou and rātou.'),
        vr:valueRows('Galatians 5:13','God calls us to serve one another in love. When we learn, work and pray together, we show manaaki.','What can you do together with someone else today to serve them?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add tuhituhi (write) and karakia (pray) as the two stretch words.','Plan group mimes: students will act out what a group is doing and the class says it in te reo.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise tātou, koutou and rātou so you can model them clearly.'],
        three:'(1) The frame stays the same: <i>E</i> + action + <i>ana</i>, but the person changes: <i>tātou</i> (we all), <i>koutou</i> (all of you), <i>rātou</i> (they). (2) <i>ahau</i> is only for one person, me. (3) The action word can be new: <i>E tuhituhi ana tātou</i>, we are writing.',
        diff:['Echo as a whole class and mime every action. Use only tātou with kai, inu and ako. Pair with a confident partner and allow whispering first.','Complete all steps. Use tātou, koutou and rātou with all the action words, and ask and answer in pairs.','Add tuhituhi and karakia. Add tino (E tino mahi ana tātou). Narrate what the class is doing like a sports commentator.'],
        look:'Tātou, koutou and rātou used for the right group; the action between E and ana; clear vowels in karakia and tuhituhi; students narrating what others are doing; a warm tone.',
        nx:'revisit the pronouns with students in Starting; move to Week 3 (past with I).',
        rec:'Lesson A (E kai ana ahau, E aha ana koe?), Term 1 Weeks 2, 5, 6 and 9 and Term 3 Week 1 (Kei te hiakai ahau, Kei te pīrangi koe ki te miraka, Kia ora mō te kai) are recalled in the warm-up, steps and drama. Week 3 will recall E … ana before moving to the past.'
      },
      D: {
        VOC:[...A.D.VOC,'tuhituhi','karakia'],
        STEPS:[
          ['Quick recap: I am eating. You are drinking. What are you doing?','E|k kai|n ana|k ahau.|a E|k inu|n ana|k koe.|a E|k aha|q ana|k koe?|a','eh KYE AH-nah ah-HOW · eh EE-noo AH-nah KOH-eh · eh AH-hah AH-nah KOH-eh','Lesson A, stacked.',null,'Whole class'],
          ['Now we, all together: E ako ana tātou. Say it.','E|k ako|n ana|k tātou.|a*','eh AH-kor AH-nah TAH-toh-oo','tātou = we all together, including you and me.','Sweep your arm around the whole class. Tātou means all of us, together. Say it with me.','Echo'],
          ['How would you say: We are eating. We are singing.','E|k kai|n ana|k tātou.|a E|k waiata|n ana|k tātou.|a','eh KYE AH-nah TAH-toh-oo · eh why-AH-tah AH-nah TAH-toh-oo','Same frame, group person.',null,'Whole class'],
          ['Now all of you: E mahi ana koutou. Say it.','E|k mahi|n ana|k koutou.|a*','eh MAH-hee AH-nah KOH-toh-oo','koutou = all of you (more than two).','Point at a group in the class. Koutou means all of you. Say it with me.','Echo'],
          ['How would you say: You all are playing. You all are running.','E|k tākaro|n ana|k koutou.|a E|k oma|n ana|k koutou.|a','eh TAH-kah-roh AH-nah KOH-toh-oo · eh OR-mah AH-nah KOH-toh-oo','Same frame again.',null,'Whole class'],
          ['They: E haere ana rātou. Say it. It means they are going.','E|k haere|n ana|k rātou.|a*','eh HIGH-reh AH-nah RAH-toh-oo','rātou = they (more than two).','Point away at a group. Rātou means they. Say it with me.','Echo'],
          ['Group game: act out what a group is doing, the class says it in te reo.','E|k ___|n ana|k tātou / koutou / rātou.|a','eh ___ AH-nah TAH-toh-oo / KOH-toh-oo / RAH-toh-oo','A group mimes. Choose tātou, koutou or rātou, depending on who is in the group.','Three of you come up and mime an action. The class says what the group is doing, using koutou for the group. Then the group says it about themselves with tātou.','Whole class'],
          ['New word: tuhituhi means write. How would you say: We are writing?','E|k tuhituhi|n* ana|k tātou.|a','eh too-hee-TOO-hee AH-nah TAH-toh-oo','tuhituhi = write. It is two small words said twice.','Mime writing. Tuhituhi means write. Say it with me. Take a moment… (wait 3 seconds)… E tuhituhi ana tātou. Say it with me.','Echo'],
          ['New word: karakia means prayer. How would you say: We are praying?','E|k karakia|n* ana|k tātou.|a','eh kah-RAH-kee-ah AH-nah TAH-toh-oo','karakia = pray, a prayer. Fold your hands.','Fold your hands. Karakia means pray or prayer. Say it with me. Take a moment… (wait 3 seconds)… E karakia ana tātou. Say it with me.','Echo'],
          ['Ask about the group: What are they doing? What are we doing?','E|k aha|q ana|k rātou?|a E|k aha|q ana|k tātou?|a','eh AH-hah AH-nah RAH-toh-oo · eh AH-hah AH-nah TAH-toh-oo','Swap the person, same question.',null,'Pairs'],
          ['Pair game: one person says what the group is doing, the other swaps the person (tātou, koutou, rātou).','E|k ___|n ana|k tātou.|a E|k ___|n ana|k koutou.|a E|k ___|n ana|k rātou.|a','eh ___ AH-nah TAH-toh-oo · eh ___ AH-nah KOH-toh-oo · eh ___ AH-nah RAH-toh-oo','Use any action word. Swap after three.','Turn to your partner. One person says an action with tātou. The other says the same action with koutou, then rātou. Swap after three. Take 2 minutes while I listen.','Pairs'],
          ['Put it together: We are learning. We are praying. Thank you for the food.','E|k ako|n ana|k tātou.|a E|k karakia|n ana|k tātou.|a Kia~ora|w mō|q te|a kai.|n','eh AH-kor AH-nah TAH-toh-oo · eh kah-RAH-kee-ah AH-nah TAH-toh-oo · KEE-ah OR-ah mor teh KYE','Terms 1 and 3 together.',null,'Whole class'],
          ['Class chain: say what we are doing, ask the next group what they are doing, goodbye.','E|k ___|n ana|k tātou.|a E|k aha|q ana|k koutou?|a Ka~kite!|w','eh ___ AH-nah TAH-toh-oo… eh AH-hah AH-nah KOH-toh-oo… kah KEE-teh','Real conversation, nothing memorised.','Split into groups. Each group mimes what it is doing, says it with tātou, then asks the next group E aha ana koutou? If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Mahi Tahi i te Kāinga — Working Together at Home',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Haere mai ki te kai!','Hello, children! Come to the food!','(opens the door)','T1W1'],
          ['Hana','Kia ora, Kuia. E aha ana koe?','Hello, Kuia. What are you doing?','(smiles)'],
          ['Kuia Mere','E mahi ana ahau. E aha ana koutou?','I am working. What are you all doing?','(rolls up her sleeves)'],
          ['Tama','E tākaro ana mātou, Kuia.','We are playing, Kuia.','(Hana laughs)'],
          ['Kuia Mere','Kei te pīrangi koutou ki te mahi?','Do you all want to work?','(holds out a bowl)'],
          ['Hana','Āe, kei te pīrangi ahau ki te mahi!','Yes, I want to work!','(takes the bowl)','T1W6'],
          ['Tama','E mahi ana tātou, Kuia!','We are all working, Kuia!','(grabs a spoon)'],
          ['Kuia Mere','He kai ora te āporo. Kei te pīrangi koe ki te āporo?','An apple is healthy food. Do you want an apple?','(smiles)','T3W1'],
          ['Hana','Āe, kia ora, Kuia.','Yes, thank you, Kuia.','(takes one)'],
          ['Tama','E karakia ana tātou?','Are we praying?','(folds hands)'],
          ['Kuia Mere','Āe, e karakia ana tātou.','Yes, we are praying.','(folds hands)'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) When we work, eat and pray together, we are serving each other in love. That is manaaki.','T1W9'],
          ['Hana','Kia ora mō te kai, Kuia. Ka kite!','Thank you for the food, Kuia. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘We are learning.’ (all together)','E ako ana tātou.'],['Say in te reo: ‘You all are working.’','E mahi ana koutou.'],['Choose the word for they: E haere ana ____. (rātou / ahau)','rātou'],['What does E karakia ana tātou mean?','We are praying.'],['Stretch: say what we are doing, then ask another group what they are doing.','E ___ ana tātou. E aha ana koutou?']],
        CE:['Using ahau for a group','Mixing up tātou (we all) and koutou (all of you)','Leaving out ana','Forgetting the action word in the middle','Using rātou for the speaker’s own group'],
        T:'T3 W2 Lesson B',
        LP:{title:'E ako ana tātou — We are learning',val:'Manaaki · Galatians 5:13',pat:['E ________ ana tātou.','E ________ ana koutou.','E ________ ana rātou.'],swap:'Swap the group: tātou (we all) · koutou (all of you) · rātou (they). Stretch actions: tuhituhi · karakia.'}
      }
    };

    addLessons({ '3.2.A': A, '3.2.B': B });
  }


  /* ──────── WEEK 3 · Past: I ──────── */
  {
    addGlossary({
      "kite":["see","KEE-teh",3,3],
      "rongo":["hear / feel","ROH-ngoh",3,3],
      "inanahi":["yesterday","ee-NAH-nah-hee",3,3],
      "kurī":["dog","KOO-ree",3,3]
    });

    // ── Lesson A · I haere ahau ki te kura — I went to school ──
    const A = {
      P: {
        t:3,
        w:3,
        l:'A',
        ch:'I|k haere|n ahau|a ki~te|k kura.|n',
        sub:'Telling what happened! Today we say what we did, using the little word I for things that are finished.',
        say:'Kia ora everyone! Last week you said what is happening right now with E … ana. This week we look back and say what has already happened. The little word is I, said “ee”, and it takes the place of E … ana: E kai ana ahau means I am eating, and I kai ahau means I ate. The action comes straight after I, then who. You already know every other piece. Still no writing: listen, think and speak. Mime each action, then freeze, to show it is finished.',
        pron:'i = ee (not the English word I) · kite = KEE-teh · rongo = ROH-ngoh · tākaro = TAH-kah-roh',
        li:'say what we did, using I + action + who, and ask what someone did, in te reo.',
        succ:['I can say what I did: I haere ahau. I kai ahau. I tākaro ahau.','I can say where I went and what I ate: I haere ahau ki te kura. I kai ahau i te āporo.','I can ask and answer: I aha koe? I kite ahau i te manu.'],
        wp:'Praise the Lord, my soul, and forget not all his benefits.',
        ref:'Psalm 103:2',
        mom:'When we tell what happened, we remember what God has given us and who has helped us. Manaaki includes remembering and thanking the people who served us.',
        q:'Who helped or served you recently, and have you thanked them?',
        recall:[['How do you say: What are you doing?','E aha ana koe?'],['How do you say: We are learning.','E ako ana tātou.'],['How do you say: Do you want an apple?','Kei te pīrangi koe ki te āporo?']],
        rtag:'Term 3 Weeks 1 and 2',
        rtxt:'Remember when… Term 3 Weeks 1 and 2 (3 quick prompts)',
        refl:'What did you remember today that you can thank someone for?',
        next:'Lesson B: where did you go, what did you eat, and yesterday (I haere koe ki hea?)',
        vsay:'Say each word and the class echoes, with an action: walk on the spot for haere, eat for kai, bounce a ball for tākaro, shade your eyes for kite (see), cup a hand to your ear for rongo (hear), rest your head on your hands for moe, run on the spot for oma, point to your head for ako, point to the room for kura (school), draw a roof in the air for kāinga (home). Most of these are old friends from Weeks 1 and 2. The new words are kite and rongo. Kite = KEE-teh. Rongo = ROH-ngoh, with the ng of singer, not finger.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: I first, then the action, then ahau. Prompt 3: I means finished, E … ana means happening now.',
        xresc:'Common error: keeping E … ana for something that is finished, or leaving out ahau. Say: for finished things I takes the front spot and ana disappears: E kai ana ahau becomes I kai ahau.',
        xpron:'i = ee · kite = KEE-teh · rongo = ROH-ngoh',
        cur:cu3('Communication (saying and asking what happened) · Language Knowledge (I + action + who; I aha koe?; contrast with E … ana; ki te before a place and i te before a thing) · Cultural Knowledge (remembering and giving thanks, telling about our day)','Recycles Term 1 Weeks 2, 5, 8 and 9 and Term 3 Weeks 1 and 2. Tell students I kai ahau and E kai ana ahau are two different times: finished and happening now.'),
        vr:valueRows('Psalm 103:2','When we tell what happened, we remember what God has given us and who has helped us. Manaaki includes remembering and thanking the people who served us.','Who helped or served you recently, and have you thanked them?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student.','Practise miming each action word, then freezing, so students can see the difference between happening now and finished.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the frame yourself: I haere ahau, I kai koe, I kite ia, and remember the i is said “ee”.'],
        three:'(1) For things that are finished, <i>I</i> goes first, then the action, then who: <i>I kai ahau</i>, I ate. (2) <i>E kai ana ahau</i> is happening now; <i>I kai ahau</i> is finished. (3) Use <i>ki te</i> before a place and <i>i te</i> before the thing you ate, saw or heard: <i>I kai ahau i te āporo</i>.',
        diff:['Echo as a whole class and mime every action, then freeze. Use only haere, kai and tākaro at first. Pair with a confident partner and allow whispering first.','Complete all steps. Use all ten words, ask and answer in pairs, and say where you went and what you ate.','Add Week 2 contrast (E kai ana ahau, I kai ahau) and say both in one breath. Explain in English why ana disappears when something is finished.'],
        look:'I at the front and said “ee”; the action straight after I; ahau and koe in the right place; ki te for places and i te for things; clear vowels in kite and rongo; students asking I aha koe? unprompted.',
        nx:'revisit I + action + ahau with students in Starting; build questions, all the people and the word for yesterday in Lesson B.',
        rec:'Term 1 Weeks 2, 5, 8 and 9 (Kei te hiakai ahau, Kōrero mai, Kia ora mō te kai) and Term 3 Weeks 1 and 2 (Kei te pīrangi ahau ki te āporo, E aha ana koe?, E tākaro ana ahau) are recalled in the warm-up, steps and drama. Lesson B recalls I + action and adds questions.'
      },
      D: {
        VOC:['haere','kai','tākaro','kite','rongo','moe','oma','ako','kura','kāinga'],
        STEPS:[
          ['Quick recap: I am eating. What are you doing?','E|k kai|n ana|k ahau.|a E|k aha|q ana|k koe?|a','eh KYE AH-nah ah-HOW · eh AH-hah AH-nah KOH-eh','Term 3 Week 2, stacked.',null,'Whole class'],
          ['Now something that is already finished. Say: I haere ahau. It means I went.','I|k* haere|n ahau.|a','ee HIGH-reh ah-HOW','I = finished. It takes the place of E … ana. Said “ee”, like see.','Walk on the spot, then stop and freeze. Last week you said E haere ana ahau, I am going. Now it is finished, so the little word I goes first and ana disappears. I haere ahau. Say it with me. Careful: this i is said “ee”, not the English word I.','Echo'],
          ['How would you say: I ate? Then: I played. I learned.','I|k kai|n ahau.|a I|k tākaro|n ahau.|a I|k ako|n ahau.|a','ee KYE ah-HOW · ee TAH-kah-roh ah-HOW · ee AH-kor ah-HOW','Same I, new action each time.','Mime eating, then freeze. Take a moment… (wait 3 seconds)… I kai ahau. Now try I played and I learned yourselves.','Echo'],
          ['Now add where you went. How would you say: I went to school?','I|k haere|n ahau|a ki~te|k kura.|n*','ee HIGH-reh ah-HOW kee teh KOO-rah','ki te = to the. The place goes at the end.','You know ki te from Term 1. Ki te means to the. Take a moment… (wait 3 seconds)… I haere ahau ki te kura. Say it with me.','Echo'],
          ['How would you say: I went home.','I|k haere|n ahau|a ki~te|k kāinga.|n','ee HIGH-reh ah-HOW kee teh KAH-ee-ngah','kāinga = home.',null,'Whole class'],
          ['Now say what you ate. Say: I kai ahau i te āporo. It means I ate an apple.','I|k kai|n ahau|a i~te|k āporo.|n*','ee KYE ah-HOW ee teh AH-poh-roh','i te links the action to the thing: ate the apple.','Last week you said E kai ana ahau i te parāoa. The same i te comes back for the thing you ate. Take a moment… (wait 3 seconds)… I kai ahau i te āporo. Say it with me.','Echo'],
          ['Two new words: kite means see, rongo means hear. Say: kite, rongo.','kite|n* rongo|n*','KEE-teh · ROH-ngoh','kite = see. rongo = hear. rongo has the ng of singer.','Shade your eyes for kite, cup your ear for rongo. Say them with me. Rongo has the ng sound of singer, not finger.','Echo'],
          ['How would you say: I saw a bird. I heard the song.','I|k kite|n ahau|a i~te|k manu.|n I|k rongo|n ahau|a i~te|k waiata.|n','ee KEE-teh ah-HOW ee teh MAH-noo · ee ROH-ngoh ah-HOW ee teh why-AH-tah','Same i te frame.',null,'Whole class'],
          ['Swap the person. How would you say: You went to school. She ate bread.','I|k haere|n koe|a ki~te|k kura.|n I|k kai|n ia|a i~te|k parāoa.|n','ee HIGH-reh KOH-eh kee teh KOO-rah · ee KYE EE-ah ee teh pah-RAH-or-ah','koe and ia sit where ahau sits.',null,'Whole class'],
          ['Ask: What did you do?','I|k aha|q koe?|a','ee AH-hah KOH-eh','aha goes in the action spot, like E aha ana koe?','Last week you asked E aha ana koe? What are you doing? Now it is finished. Take a moment… (wait 3 seconds)… I aha koe? Say it with me.','Echo'],
          ['Partner game: ask your partner what they did, they mime and answer, then swap.','I|k aha|q koe?|a I|k ___|n ahau.|a','ee AH-hah KOH-eh · ee ___ ah-HOW','Use haere, kai, tākaro, ako, kite, rongo, moe or oma. Swap after three.','Turn to your partner. One person asks I aha koe? The other mimes something they did and answers with I … ahau. Swap after three. If you forget a word, look at the vocab card. Take 2 minutes while I listen.','Pairs'],
          ['Put it together: Hello. I went to school. I ate bread. Thank you for the food.','Kia~ora.|w I|k haere|n ahau|a ki~te|k kura.|n I|k kai|n ahau|a i~te|k parāoa.|n Kia~ora|w mō|q te|a kai.|n','KEE-ah OR-ah. ee HIGH-reh ah-HOW kee teh KOO-rah. ee KYE ah-HOW ee teh pah-RAH-or-ah. KEE-ah OR-ah mor teh KYE','Terms 1 and 3 together.',null,'Whole class'],
          ['Class chain: greet, say what you did, ask the next person what they did, say goodbye.','Kia~ora.|w I|k ___|n ahau.|a I|k aha|q koe?|a Ka~kite!|w','KEE-ah OR-ah… ee ___ ah-HOW… ee AH-hah KOH-eh… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next, says what they did, and asks what the other person did. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Kōrero Mai! — Tell Me!',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kōrero mai! I aha koe, Hana?','Hello, children! Tell me! What did you do, Hana?','(arms wide)','T1W8'],
          ['Hana','I haere ahau ki te kāinga.','I went home.','(smiles)'],
          ['Hana','I kai ahau i te parāoa.','I ate bread.','(mimes eating)','T3W1'],
          ['Kaiako Rose','I aha koe, Tama?','What did you do, Tama?','(points at him)'],
          ['Tama','I tākaro ahau.','I played.','(bounces a ball)'],
          ['Tama','I kite ahau i te manu.','I saw a bird.','(points up)'],
          ['Hana','I rongo ahau i te waiata!','I heard the song!','(cups her hand to her ear)'],
          ['Kaiako Rose','E aha ana koe ināianei, Tama?','What are you doing now, Tama?','(tilts her head)','T3W2'],
          ['Tama','E tākaro ana ahau!','I am playing!','(bounces the ball again)','T3W2'],
          ['Kaiako Rose','Kei te hiakai koutou?','Are you all hungry?','(rubs her tummy)','T1W2'],
          ['Hana','Āe! Kei te pīrangi ahau ki te āporo.','Yes! I want an apple.','(holds out her hands)','T3W1'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) When we share our stories about what we did, we show we care about each other. Listening to someone’s story is a way of serving them. That is manaaki.','T1W9'],
          ['Hana','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I went.’','I haere ahau.'],['What does I kai ahau i te āporo mean?','I ate an apple.'],['Choose the sentence for ‘I saw a bird’: I kite ahau i te manu / E kite ana ahau i te manu','I kite ahau i te manu.'],['Say in te reo: ‘What did you do?’','I aha koe?'],['Stretch: say something you did, then ask your partner what they did.','I ___ ahau. I aha koe?']],
        CE:['Keeping E … ana for something that is finished','Saying the i like the English word I, instead of “ee”','Leaving out ahau or putting it before the action','Leaving out ki te before a place or i te before a thing','Mixing up kite (see) and rongo (hear)'],
        T:'T3 W3 Lesson A',
        LP:{title:'I haere ahau ki te kura — I went to school',val:'Manaaki · Psalm 103:2',pat:['I ________ ahau.','I ________ ahau ki te ________.','I aha koe?'],swap:'Swap the action and the person: haere · kai · tākaro · kite · rongo · moe · oma · ako; ahau (I) · koe (you) · ia (she/he). Place: ki te kura · ki te kāinga. Thing: i te āporo · i te parāoa.'}
      }
    };

    // ── Lesson B · I haere koe ki hea? — Where did you go? ──
    const B = {
      P: {
        t:3,
        w:3,
        l:'B',
        ch:'I|k haere|n koe|a ki~hea?|q',
        sub:'Where did you go? What did you do yesterday? Today we ask and answer about the past with everyone, and add the word for yesterday.',
        say:'Kia ora everyone! Last lesson we said what we did with I + action + who. Today we ask questions about the past: where did you go, what did you eat, and what did you do yesterday. We use all the people you know: ahau, koe, ia, tātou, koutou and rātou. We add two stretch words, inanahi and kurī. Still no writing: listen, think and speak. Mime each action, then freeze.',
        pron:'inanahi = ee-NAH-nah-hee · kurī = KOO-ree · ki hea = kee HEH-ah',
        li:'ask and answer about where we went and what we did, say who did it, and say when it happened, in te reo.',
        succ:['I can ask and answer: I haere koe ki hea? I haere ahau ki te kāinga.','I can say what others did: I haere ia ki te kura. I haere tātou ki te kāinga.','I can say when: I haere ahau ki te kura inanahi. I aha koe inanahi?'],
        wp:'Do not forget to do good and to share with others.',
        ref:'Hebrews 13:16',
        mom:'The Bible reminds us not to forget to do good and to share. When we ask someone about their day and really listen, we are doing good and serving them. That is manaaki.',
        q:'Who could you ask about their day, and what good thing could you share tomorrow?',
        recall:[['How do you say: I went to school.','I haere ahau ki te kura.'],['How do you say: What did you do?','I aha koe?'],['How do you say: I am eating.','E kai ana ahau.'],['How do you say: The food is tasty.','Kei te reka te kai.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'Who did you ask about their day, and what did you learn?',
        next:'Week 4: The future with Ka (Ka haere ahau ki te kāinga)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: inanahi (yesterday) and kurī (dog). Point behind your shoulder for inanahi and bark softly for kurī. Today we put inanahi at the end of the sentence. Say inanahi in chunks: i-na-na-hi.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: koe asks the question, and ki hea comes last. Prompt 3: inanahi means yesterday.',
        xresc:'Common error: using ahau in a question, or forgetting the rising voice. Say: koe asks the question about you, and your voice goes up: I haere koe ki hea?',
        xpron:'inanahi = ee-NAH-nah-hee · kurī = KOO-ree',
        cur:cu3('Communication (asking and answering about places and actions in the past, saying when) · Language Knowledge (I + action + who + ki te / i te; I haere koe ki hea?; I aha koe inanahi?; inanahi at the end) · Cultural Knowledge (asking about other people’s days, listening and caring, manaakitanga)','Recycles Lesson A, Term 1 Weeks 1, 2 and 9, Term 2 Week 8 and Term 3 Weeks 1 and 2. Inanahi is introduced here as a stretch word so the past has a clear time; it returns in Week 4 and in Week 5 (When?).'),
        vr:valueRows('Hebrews 13:16','The Bible reminds us not to forget to do good and to share. When we ask someone about their day and really listen, we are doing good and serving them.','Who could you ask about their day, and what good thing could you share tomorrow?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add inanahi (yesterday) and kurī (dog) as the two stretch words, written or spoken.','Plan the group mimes: students act out a place they went to and the class asks and answers in te reo.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the question voice and the new question I haere koe ki hea? so you can model it clearly.'],
        three:'(1) A question is the same words with <i>koe</i> and a rising voice: <i>I haere koe ki hea?</i> (2) <i>ki hea</i> asks where to, and the answer swaps hea for the place: <i>ki te kāinga</i>. (3) Put <i>inanahi</i> at the end to say when: <i>I haere ahau ki te kura inanahi</i>.',
        diff:['Echo as a whole class and mime every action, then freeze. Use only ahau and koe, and only kura and kāinga. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer with all the people (ahau, koe, ia, tātou, koutou, rātou) in pairs.','Add inanahi and kurī. Interview three classmates about yesterday (I aha koe inanahi? I kai koe i te aha?) and report back to the class.'],
        look:'Rising voice for questions; koe in questions and ahau in answers; ki hea answered with ki te and a place; inanahi at the end; clear vowels in inanahi and kurī; a warm, interested tone.',
        nx:'revisit questions and the I frame with students in Starting; move to Week 4 (the future with Ka).',
        rec:'Lesson A (I haere ahau ki te kura, I kai ahau i te āporo, I aha koe?), Term 1 Weeks 1, 2 and 9 (Kia ora, Kia ora mō te kai) and Term 3 Weeks 1 and 2 (Kei te pīrangi koutou ki te miraka?, Kei te reka te kai, E karakia ana tātou) are recalled in the warm-up, steps and drama. Week 4 will recall I … before moving to Ka.'
      },
      D: {
        VOC:[...A.D.VOC,'inanahi','kurī'],
        STEPS:[
          ['Quick recap: I went to school. I ate an apple. What did you do?','I|k haere|n ahau|a ki~te|k kura.|n I|k kai|n ahau|a i~te|k āporo.|n I|k aha|q koe?|a','ee HIGH-reh ah-HOW kee teh KOO-rah · ee KYE ah-HOW ee teh AH-poh-roh · ee AH-hah KOH-eh','Lesson A, stacked.',null,'Whole class'],
          ['Ask where someone went. How would you say: Where did you go?','I|k haere|n koe|a ki~hea?|q*','ee HIGH-reh KOH-eh kee HEH-ah','ki hea = to where. hea comes at the end.','Hold out your hands as if asking. You met ki hea in Term 2. Ki hea means to where. Take a moment… (wait 3 seconds)… I haere koe ki hea? Say it with me, with a rising voice.','Echo'],
          ['Answer: I went home. I went to school.','I|k haere|n ahau|a ki~te|k kāinga.|n I|k haere|n ahau|a ki~te|k kura.|n','ee HIGH-reh ah-HOW kee teh KAH-ee-ngah · ee HIGH-reh ah-HOW kee teh KOO-rah','Swap hea for ki te and the place.',null,'Whole class'],
          ['Ask about someone else: Where did she go?','I|k haere|n ia|a ki~hea?|q','ee HIGH-reh EE-ah kee HEH-ah','ia = she or he, in the same spot.',null,'Whole class'],
          ['Answer: She went to school. He went home.','I|k haere|n ia|a ki~te|k kura.|n I|k haere|n ia|a ki~te|k kāinga.|n','ee HIGH-reh EE-ah kee teh KOO-rah · ee HIGH-reh EE-ah kee teh KAH-ee-ngah','Same frame, new person.',null,'Pairs'],
          ['Groups, from last week: We went home. You all went to school. They went home.','I|k haere|n tātou|a ki~te|k kāinga.|n I|k haere|n koutou|a ki~te|k kura.|n I|k haere|n rātou|a ki~te|k kāinga.|n','ee HIGH-reh TAH-toh-oo kee teh KAH-ee-ngah · ee HIGH-reh KOH-toh-oo kee teh KOO-rah · ee HIGH-reh RAH-toh-oo kee teh KAH-ee-ngah','tātou, koutou and rātou sit in the same spot, like last week.','Sweep your arm around the class for tātou, point at a group for koutou, point away for rātou. You met these last week. Say each one with me.','Echo'],
          ['Partner game: ask where your partner went, answer, then swap.','I|k haere|n koe|a ki~hea?|q I|k haere|n ahau|a ki~te|k ___.|n','ee HIGH-reh KOH-eh kee HEH-ah · ee HIGH-reh ah-HOW kee teh ___','Use kura, kāinga or any place you know. Swap after three.','Turn to your partner. One person asks I haere koe ki hea? The other answers with a place. Swap after three. Take 2 minutes while I listen.','Pairs'],
          ['New word: inanahi means yesterday. Say: inanahi.','inanahi|q*','ee-NAH-nah-hee','inanahi = yesterday. Say it in chunks: i-na-na-hi.','Point over your shoulder. Inanahi means yesterday. Say it in chunks: i-na-na-hi. Say it with me.','Echo'],
          ['How would you say: I went to school yesterday.','I|k haere|n ahau|a ki~te|k kura|n inanahi.|q','ee HIGH-reh ah-HOW kee teh KOO-rah ee-NAH-nah-hee','inanahi goes at the end.','Take a moment… (wait 3 seconds)… I haere ahau ki te kura inanahi. Say it with me.','Echo'],
          ['Ask: What did you do yesterday? What did you eat?','I|k aha|q koe|a inanahi?|q I|k kai|n koe|a i~te|k aha?|q','ee AH-hah KOH-eh ee-NAH-nah-hee · ee KYE KOH-eh ee teh AH-hah','i te aha = what, for the thing you ate.','Take a moment… (wait 3 seconds)… I aha koe inanahi? I kai koe i te aha? Say them with me.','Echo'],
          ['New word: kurī means dog. How would you say: I saw a dog. What did you see?','I|k kite|n ahau|a i~te|k kurī.|n* I|k kite|n koe|a i~te|k aha?|q','ee KEE-teh ah-HOW ee teh KOO-ree · ee KEE-teh KOH-eh ee teh AH-hah','Stretch word: kurī = dog. Same i te frame.',null,'Whole class'],
          ['Put it together: Hello. I went to school yesterday. I ate bread. I saw a dog. Thank you.','Kia~ora.|w I|k haere|n ahau|a ki~te|k kura|n inanahi.|q I|k kai|n ahau|a i~te|k parāoa.|n I|k kite|n ahau|a i~te|k kurī.|n Kia~ora.|w','KEE-ah OR-ah. ee HIGH-reh ah-HOW kee teh KOO-rah ee-NAH-nah-hee. ee KYE ah-HOW ee teh pah-RAH-or-ah. ee KEE-teh ah-HOW ee teh KOO-ree. KEE-ah OR-ah','Terms 1 and 3 together.',null,'Whole class'],
          ['Class chain: greet, ask the next person what they did yesterday, they answer, say goodbye.','Kia~ora.|w I|k aha|q koe|a inanahi?|q I|k ___|n ahau.|a Ka~kite!|w','KEE-ah OR-ah… ee AH-hah KOH-eh ee-NAH-nah-hee… ee ___ ah-HOW… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next, asks what they did yesterday, and listens to the answer. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ngā Mahi o Inanahi — What We Did Yesterday',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! I aha koutou inanahi?','Hello, children! What did you all do yesterday?','(opens the door)','T1W1'],
          ['Hana','I haere ahau ki te kura inanahi.','I went to school yesterday.','(smiles)'],
          ['Tama','I tākaro ahau inanahi, Kuia.','I played yesterday, Kuia.','(bounces a ball)'],
          ['Kuia Mere','I haere koe ki hea, Tama?','Where did you go, Tama?','(leans in)'],
          ['Tama','I haere ahau ki te kāinga. I kite ahau i te kurī!','I went home. I saw a dog!','(barks softly)'],
          ['Kuia Mere','I kai koe i te aha, Hana?','What did you eat, Hana?','(holds out a plate)'],
          ['Hana','I kai ahau i te parāoa, Kuia.','I ate bread, Kuia.','(mimes eating)'],
          ['Kuia Mere','Kei te pīrangi koutou ki te miraka?','Do you all want milk?','(pours a cup)','T3W1'],
          ['Tama','Āe, kia ora, Kuia! Kei te reka te kai!','Yes, thank you, Kuia! The food is tasty!','(rubs his tummy)','T3W1'],
          ['Hana','E karakia ana tātou?','Are we praying?','(folds her hands)','T3W2'],
          ['Kuia Mere','Āe, e karakia ana tātou.','Yes, we are praying.','(folds her hands)','T3W2'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) When we ask someone about their day and really listen, we are doing good and serving them. That is manaaki.','T1W9'],
          ['Tama','Kia ora mō te kai, Kuia. Ka kite!','Thank you for the food, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘Where did you go?’','I haere koe ki hea?'],['Say in te reo: ‘I went home.’','I haere ahau ki te kāinga.'],['Choose the word for yesterday: I haere ahau ki te kura ____. (inanahi / ināianei)','inanahi'],['What does I kai ia i te parāoa mean?','She (or he) ate bread.'],['Stretch: ask your partner what they did yesterday, and answer when they ask you.','I aha koe inanahi? I ___ ahau inanahi.']],
        CE:['Using ahau in a question instead of koe','Forgetting a question is the same words with a rising voice','Leaving out ki te before a place or i te before a thing','Mixing up inanahi (yesterday) and ināianei (now)','Using E … ana for something that is finished'],
        T:'T3 W3 Lesson B',
        LP:{title:'I haere koe ki hea? — Where did you go?',val:'Manaaki · Hebrews 13:16',pat:['I haere koe ki hea?','I haere ahau ki te ________ inanahi.','I aha koe inanahi?'],swap:'Swap the person: ahau (I) · koe (you) · ia (she/he) · tātou (we all) · koutou (all of you) · rātou (they). Stretch: inanahi · kurī.'}
      }
    };

    addLessons({ '3.3.A': A, '3.3.B': B });
  }

  /* ──────── WEEK 4 · Future: Ka ──────── */
  {
    addGlossary({
      "āpōpō":["tomorrow","AH-por-por",4,3],
      "whare karakia":["church / place of prayer","FAH-reh kah-RAH-kee-ah",4,3],
      "ā te rāmere":["on Friday (coming)","AH teh RAH-meh-reh",4,3]
    });

    // ── Lesson A · Ka haere ahau ki te kāinga — I will go home ──
    const A = {
      P: {
        t:3,
        w:4,
        l:'A',
        ch:'Ka|k* haere|n ahau|a ki~te|k kāinga.|n',
        sub:'Telling what will happen! Today we say what we will do, using the little word Ka for things that are still to come.',
        say:'Kia ora everyone! You can already say what is happening now with E … ana, and what has finished with I. This week we look forward and say what will happen. The little word is Ka, said “kah”, and it goes in the same spot as I: I kai ahau means I ate, and Ka kai ahau means I will eat. The action comes straight after Ka, then who. You already know every other piece. Still no writing: listen, think and speak. Mime each action, then point ahead of you to show it has not happened yet.',
        pron:'ka = kah · āpōpō = AH-por-por · haere = HIGH-reh · tākaro = TAH-kah-roh',
        li:'say what we will do, using Ka + action + who, and ask what someone will do, in te reo.',
        succ:['I can say what I will do: Ka haere ahau. Ka kai ahau. Ka tākaro ahau.','I can say where I will go and when: Ka haere ahau ki te kāinga. Ka haere ahau ki te kura āpōpō.','I can ask and answer: Ka aha koe āpōpō? Ka tākaro ahau.'],
        wp:'We make our plans, but the Lord guides our steps.',
        ref:'Proverbs 16:9',
        mom:'We can plan to serve other people: to help, to share, to say thank you. Manaaki starts with a plan, and we ask God to guide our steps.',
        q:'Who could you serve tomorrow, and what will you do?',
        recall:[['How do you say: I went to school yesterday.','I haere ahau ki te kura inanahi.'],['How do you say: What are you doing?','E aha ana koe?'],['How do you say: I want an apple.','Kei te pīrangi ahau ki te āporo.']],
        rtag:'Term 3 Weeks 1 to 3',
        rtxt:'Remember when… Term 3 Weeks 1 to 3 (3 quick prompts)',
        refl:'What will you do tomorrow to look after someone?',
        next:'Lesson B: where will you go, what will you eat, and the three times together (Ka haere koe ki hea?)',
        vsay:'Say each word and the class echoes, with an action: walk on the spot for haere, eat for kai, bounce a ball for tākaro, rest your head on your hands for moe, run on the spot for oma, point to your head for ako, point to the room for kura, draw a roof in the air for kāinga, fold your hands for karakia. The new word is āpōpō (tomorrow): point ahead of you and say AH-por-por. Break it into a-pō-pō and keep both pō long.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: Ka first, then the action, then ahau. Prompt 3: Ka means will, I means finished.',
        xresc:'Common error: using I or E … ana for something that has not happened yet, or leaving out ahau. Say: for things still to come, Ka takes the front spot: I kai ahau becomes Ka kai ahau.',
        xpron:'ka = kah · āpōpō = AH-por-por',
        cur:cu3('Communication (saying and asking what will happen) · Language Knowledge (Ka + action + who; Ka aha koe?; contrast with I and E … ana; ki te before a place; āpōpō at the end) · Cultural Knowledge (planning to serve others, looking ahead with trust in God)','Recycles Term 1 Weeks 1, 2, 8 and 9 and Term 3 Weeks 1, 2 and 3. Tell students Ka kai ahau, I kai ahau and E kai ana ahau are three different times: will happen, finished and happening now.'),
        vr:valueRows('Proverbs 16:9','We can plan to serve other people: to help, to share, to say thank you. Manaaki starts with a plan, and we ask God to guide our steps.','Who could you serve tomorrow, and what will you do?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student.','Practise three mimes for each action: point behind you (finished), do the action (now), point ahead (will happen).','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the frame yourself: Ka haere ahau, Ka kai koe, Ka tākaro ia, and say Ka as “kah”.'],
        three:'(1) For things still to come, <i>Ka</i> goes first, then the action, then who: <i>Ka kai ahau</i>, I will eat. (2) <i>Ka kai ahau</i> is still to come, <i>I kai ahau</i> is finished, <i>E kai ana ahau</i> is happening now. (3) Use <i>ki te</i> before a place and put <i>āpōpō</i> at the end to say when: <i>Ka haere ahau ki te kura āpōpō</i>.',
        diff:['Echo as a whole class and mime every action, pointing ahead each time. Use only haere, kai and tākaro at first. Pair with a confident partner and allow whispering first.','Complete all steps. Use all ten words, ask and answer in pairs, and say where you will go and what you will do tomorrow.','Add the three-times contrast (I kai ahau, E kai ana ahau, Ka kai ahau) and say all three in one breath. Explain in English how the little word at the front changes the time.'],
        look:'Ka at the front and said “kah”; the action straight after Ka; ahau and koe in the right place; ki te for places; āpōpō at the end; clear long vowels in āpōpō; students asking Ka aha koe? unprompted.',
        nx:'revisit Ka + action + ahau with students in Starting; build questions, all the people and the three times together in Lesson B.',
        rec:'Term 1 Weeks 1, 2, 8 and 9 (Kia ora, Kei te hiakai koutou?, Kia ora mō te kai) and Term 3 Weeks 1, 2 and 3 (Kei te pīrangi ahau ki te āporo, E aha ana koe?, I aha koe inanahi?, E ako ana ahau) are recalled in the warm-up, steps and drama. Lesson B recalls Ka + action and adds questions.'
      },
      D: {
        VOC:['haere','kai','tākaro','moe','oma','ako','kura','kāinga','karakia','āpōpō'],
        STEPS:[
          ['Quick recap: I went to school yesterday. I am eating.','I|k haere|n ahau|a ki~te|k kura|n inanahi.|q E|k kai|n ana|k ahau.|a','ee HIGH-reh ah-HOW kee teh KOO-rah ee-NAH-nah-hee · eh KYE AH-nah ah-HOW','Term 3 Weeks 2 and 3, stacked.',null,'Whole class'],
          ['Now something that has not happened yet. Say: Ka haere ahau. It means I will go.','Ka|k* haere|n ahau.|a','kah HIGH-reh ah-HOW','Ka = will. It takes the same front spot as I and E.','Walk on the spot, then point ahead of you. Last week I took the front spot for finished things. Now Ka takes it for things still to come. Ka haere ahau. Say it with me. Ka is said “kah”.','Echo'],
          ['How would you say: I will eat. I will play. I will learn.','Ka|k kai|n ahau.|a Ka|k tākaro|n ahau.|a Ka|k ako|n ahau.|a','kah KYE ah-HOW · kah TAH-kah-roh ah-HOW · kah AH-kor ah-HOW','Same Ka, new action each time.','Mime eating, then point ahead. Take a moment… (wait 3 seconds)… Ka kai ahau. Now try I will play and I will learn yourselves.','Echo'],
          ['Now add where you will go. How would you say: I will go home?','Ka|k haere|n ahau|a ki~te|k kāinga.|n*','kah HIGH-reh ah-HOW kee teh KAH-ee-ngah','ki te = to the. The place goes at the end.','You know ki te from Term 1 and last week. Take a moment… (wait 3 seconds)… Ka haere ahau ki te kāinga. Say it with me.','Echo'],
          ['How would you say: I will go to school.','Ka|k haere|n ahau|a ki~te|k kura.|n','kah HIGH-reh ah-HOW kee teh KOO-rah','Swap the place.',null,'Whole class'],
          ['New word: āpōpō means tomorrow. Say: āpōpō.','āpōpō|q*','AH-por-por','āpōpō = tomorrow. Say it in chunks: ā-pō-pō, with both pō long.','Point ahead of you. Āpōpō means tomorrow. Say it in chunks: ā-pō-pō. Say it with me.','Echo'],
          ['How would you say: I will go to school tomorrow.','Ka|k haere|n ahau|a ki~te|k kura|n āpōpō.|q','kah HIGH-reh ah-HOW kee teh KOO-rah AH-por-por','Like inanahi last week, āpōpō goes at the end.','Last week inanahi went at the end of the sentence. Āpōpō goes in the same spot. Take a moment… (wait 3 seconds)… Ka haere ahau ki te kura āpōpō. Say it with me.','Echo'],
          ['Swap the person. How would you say: You will go home. She will eat bread.','Ka|k haere|n koe|a ki~te|k kāinga.|n Ka|k kai|n ia|a i~te|k parāoa.|n','kah HIGH-reh KOH-eh kee teh KAH-ee-ngah · kah KYE EE-ah ee teh pah-RAH-or-ah','koe and ia sit where ahau sits.',null,'Whole class'],
          ['Groups: We will eat. They will play.','Ka|k kai|n tātou.|a Ka|k tākaro|n rātou.|a','kah KYE TAH-toh · kah TAH-kah-roh RAH-toh','tātou and rātou sit in the same spot, like last week.','Sweep your arm around the class for tātou, point away for rātou. You met these in Weeks 2 and 3. Say each one with me.','Echo'],
          ['The three times together: I ate. I am eating. I will eat.','I|k kai|n ahau.|a E|k kai|n ana|k ahau.|a Ka|k kai|n ahau.|a','ee KYE ah-HOW · eh KYE AH-nah ah-HOW · kah KYE ah-HOW','I = finished. E … ana = now. Ka = still to come.','Point behind you for I, do the action for E … ana, point ahead of you for Ka. Same action, three times. Say each one with me and move your arm to match.','Gesture'],
          ['Ask: What will you do?','Ka|k aha|q koe?|a','kah AH-hah KOH-eh','aha goes in the action spot, like I aha koe?','Last week you asked I aha koe? What did you do? Now it is still to come. Take a moment… (wait 3 seconds)… Ka aha koe? Say it with me.','Echo'],
          ['Partner game: ask your partner what they will do tomorrow, they mime and answer, then swap.','Ka|k aha|q koe|a āpōpō?|q Ka|k ___|n ahau.|a','kah AH-hah KOH-eh AH-por-por · kah ___ ah-HOW','Use haere, kai, tākaro, ako, moe, oma or karakia. Swap after three.','Turn to your partner. One person asks Ka aha koe āpōpō? The other mimes something they will do and answers with Ka … ahau. Swap after three. If you forget a word, look at the vocab card. Take 2 minutes while I listen.','Pairs'],
          ['Class chain: greet, say what you will do tomorrow, ask the next person, say goodbye.','Kia~ora.|w Ka|k ___|n ahau|a āpōpō.|q Ka|k aha|q koe?|a Ka~kite!|w','KEE-ah OR-ah… kah ___ ah-HOW AH-por-por… kah AH-hah KOH-eh… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next, says what they will do tomorrow, and asks what the other person will do. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Āpōpō — Tomorrow',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Ka aha koutou āpōpō?','Hello, children! What will you all do tomorrow?','(arms wide)','T1W1'],
          ['Hana','Ka haere ahau ki te kāinga āpōpō.','I will go home tomorrow.','(points ahead)'],
          ['Tama','Ka tākaro ahau āpōpō.','I will play tomorrow.','(bounces a ball)'],
          ['Kaiako Rose','I aha koe inanahi, Tama?','What did you do yesterday, Tama?','(points at him)','T3W3'],
          ['Tama','I tākaro ahau inanahi!','I played yesterday!','(grins, bounces the ball again)','T3W3'],
          ['Kaiako Rose','E aha ana koe ināianei, Hana?','What are you doing now, Hana?','(tilts her head)','T3W2'],
          ['Hana','E ako ana ahau!','I am learning!','(lifts her pencil)','T3W2'],
          ['Kaiako Rose','Ka kai tātou āpōpō.','We will eat tomorrow.','(rubs her tummy)'],
          ['Tama','Kei te pīrangi ahau ki te parāoa!','I want bread!','(holds out his hands)','T3W1'],
          ['Hana','Ka karakia tātou?','Will we pray?','(folds her hands)'],
          ['Kaiako Rose','Āe, ka karakia tātou.','Yes, we will pray.','(folds her hands)'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) We can plan to serve other people: to help, to share, to say thank you. Planning ahead to look after someone is manaaki, and we ask God to guide our steps.','T1W9'],
          ['Hana','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I will go.’','Ka haere ahau.'],['What does Ka kai ahau i te āporo mean?','I will eat an apple.'],['Choose the sentence for ‘I will play tomorrow’: Ka tākaro ahau āpōpō / I tākaro ahau āpōpō','Ka tākaro ahau āpōpō.'],['Say in te reo: ‘What will you do?’','Ka aha koe?'],['Stretch: say something you will do tomorrow, then ask your partner what they will do.','Ka ___ ahau āpōpō. Ka aha koe āpōpō?']],
        CE:['Using I or E … ana for something that has not happened yet','Saying Ka like the English word car or key, instead of “kah”','Leaving out ahau or putting it before the action','Leaving out ki te before a place','Mixing up āpōpō (tomorrow) and inanahi (yesterday)'],
        T:'T3 W4 Lesson A',
        LP:{title:'Ka haere ahau ki te kāinga — I will go home',val:'Manaaki · Proverbs 16:9',pat:['Ka ________ ahau.','Ka ________ ahau ki te ________.','Ka aha koe āpōpō?'],swap:'Swap the action and the person: haere · kai · tākaro · ako · moe · oma · karakia; ahau (I) · koe (you) · ia (she/he) · tātou (we all) · rātou (they). Place: ki te kura · ki te kāinga. When: āpōpō.'}
      }
    };

    // ── Lesson B · Ka haere koe ki hea? — Where will you go? ──
    const B = {
      P: {
        t:3,
        w:4,
        l:'B',
        ch:'Ka|k haere|n koe|a ki~hea?|q',
        sub:'Where will you go? What will you eat? Today we ask and answer about the future with everyone, and put all three times together.',
        say:'Kia ora everyone! Last lesson we said what we will do with Ka + action + who. Today we ask questions about the future: where will you go and what will you eat. We use all the people you know: ahau, koe, ia, tātou, koutou and rātou. We add two stretch words: the church, whare karakia, and a day of the week for the future, ā te Rāmere. At the end we put all three times together: inanahi, ināianei and āpōpō. Still no writing: listen, think and speak.',
        pron:'whare karakia = FAH-reh kah-RAH-kee-ah · ā te Rāmere = AH teh RAH-meh-reh · āpōpō = AH-por-por',
        li:'ask and answer about where we will go and what we will do, say who will do it, and say when, in te reo.',
        succ:['I can ask and answer: Ka haere koe ki hea? Ka haere ahau ki te kāinga.','I can say what others will do: Ka haere ia ki te kura. Ka haere tātou ki te kāinga.','I can say when, and use all three times: Ka kai ahau āpōpō. I kai ahau inanahi.'],
        wp:'Do not worry about tomorrow.',
        ref:'Matthew 6:34',
        mom:'Jesus tells us not to worry about tomorrow. We can plan to serve others and then trust God with what happens next. When we ask someone what they will do and really listen, we show we care. That is manaaki.',
        q:'What is one thing you worry about, and how could you give it to God?',
        recall:[['How do you say: I will go home.','Ka haere ahau ki te kāinga.'],['How do you say: What will you do?','Ka aha koe?'],['How do you say: Where did you go?','I haere koe ki hea?'],['How do you say: Do you want milk?','Kei te pīrangi koe ki te miraka?']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'Who did you ask about their plans, and what did you learn?',
        next:'Week 5: When? Words for time (āpōpō, inanahi, ināianei and more)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: whare karakia (church) and ā te Rāmere (on Friday). Fold your hands and point to an imaginary roof for whare karakia. Hold up five fingers and point ahead for ā te Rāmere. Say whare as FAH-reh. Rāmere = RAH-meh-reh.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: koe asks the question, and ki hea comes last. Prompt 3: āpōpō means tomorrow.',
        xresc:'Common error: using I for something still to come, or forgetting the rising voice. Say: Ka is for things still to come, and your voice goes up for a question: Ka haere koe ki hea?',
        xpron:'āpōpō = AH-por-por · whare karakia = FAH-reh kah-RAH-kee-ah',
        cur:cu3('Communication (asking and answering about places and actions in the future, saying when) · Language Knowledge (Ka + action + who + ki te / i te; Ka haere koe ki hea?; Ka kai koe i te aha?; āpōpō and ā te + day; the three times) · Cultural Knowledge (planning ahead for others, going to church together, trusting God for tomorrow)','Recycles Lesson A, Term 1 Weeks 1 and 9, Term 2 Weeks 5 and 8 and Term 3 Weeks 1, 2 and 3. Future days take ā (ā te Rāmere) and past days take i (i te Rāmere). Please have a fluent speaker confirm the day phrase before you teach it. Week 5 builds on the time words.'),
        vr:valueRows('Matthew 6:34','Jesus tells us not to worry about tomorrow. We can plan to serve others and then trust God with what happens next.','What is one thing you worry about, and how could you give it to God?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add whare karakia (church) and ā te Rāmere (on Friday) as the two stretch words, written or spoken.','Plan the group mimes: students act out a place they will go to and the class asks and answers in te reo.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the three-times line yourself with arm movements: behind you, now, ahead of you.'],
        three:'(1) A question is the same words with <i>koe</i> and a rising voice: <i>Ka haere koe ki hea?</i> (2) <i>ki hea</i> asks where to, and the answer swaps hea for the place: <i>ki te kāinga</i>. (3) <i>inanahi</i>, <i>ināianei</i> and <i>āpōpō</i> go with <i>I</i>, <i>E … ana</i> and <i>Ka</i>: finished, now and still to come.',
        diff:['Echo as a whole class and point ahead for every sentence. Use only ahau and koe, and only kura and kāinga. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer with all the people (ahau, koe, ia, tātou, koutou, rātou) in pairs.','Add whare karakia and ā te Rāmere. Interview three classmates about tomorrow (Ka aha koe āpōpō? Ka kai koe i te aha?) and report back to the class.'],
        look:'Rising voice for questions; koe in questions and ahau in answers; ki hea answered with ki te and a place; āpōpō at the end; students matching I, E … ana and Ka to inanahi, ināianei and āpōpō; clear vowels in whare karakia; a warm, interested tone.',
        nx:'revisit Ka questions and the three times with students in Starting; move to Week 5 (When?).',
        rec:'Lesson A (Ka haere ahau ki te kāinga, Ka kai tātou, Ka aha koe?), Term 1 Weeks 1 and 9 (Kia ora, Kia ora mō te kai), Term 2 Week 5 (days of the week) and Term 3 Weeks 1, 2 and 3 (Kei te pīrangi koutou ki te miraka?, E karakia ana tātou, I tākaro ahau inanahi) are recalled in the warm-up, steps and drama. Week 5 will recall Ka before moving to more time words.'
      },
      D: {
        VOC:[...A.D.VOC,'whare karakia','ā te rāmere'],
        STEPS:[
          ['Quick recap: I will go home. What will you do?','Ka|k haere|n ahau|a ki~te|k kāinga.|n Ka|k aha|q koe?|a','kah HIGH-reh ah-HOW kee teh KAH-ee-ngah · kah AH-hah KOH-eh','Lesson A, stacked.',null,'Whole class'],
          ['Ask where someone will go. How would you say: Where will you go?','Ka|k haere|n koe|a ki~hea?|q*','kah HIGH-reh KOH-eh kee HEH-ah','ki hea = to where. hea comes at the end.','Hold out your hands as if asking. Last week you asked I haere koe ki hea? Where did you go? Now it is still to come. Take a moment… (wait 3 seconds)… Ka haere koe ki hea? Say it with me, with a rising voice.','Echo'],
          ['Answer: I will go home. I will go to school.','Ka|k haere|n ahau|a ki~te|k kāinga.|n Ka|k haere|n ahau|a ki~te|k kura.|n','kah HIGH-reh ah-HOW kee teh KAH-ee-ngah · kah HIGH-reh ah-HOW kee teh KOO-rah','Swap hea for ki te and the place.',null,'Whole class'],
          ['Ask about someone else: Where will she go?','Ka|k haere|n ia|a ki~hea?|q','kah HIGH-reh EE-ah kee HEH-ah','ia = she or he, in the same spot.',null,'Whole class'],
          ['Answer: She will go to school. He will go home.','Ka|k haere|n ia|a ki~te|k kura.|n Ka|k haere|n ia|a ki~te|k kāinga.|n','kah HIGH-reh EE-ah kee teh KOO-rah · kah HIGH-reh EE-ah kee teh KAH-ee-ngah','Same frame, new person.',null,'Pairs'],
          ['Groups: We will go home. You all will go to school. They will go home.','Ka|k haere|n tātou|a ki~te|k kāinga.|n Ka|k haere|n koutou|a ki~te|k kura.|n Ka|k haere|n rātou|a ki~te|k kāinga.|n','kah HIGH-reh TAH-toh kee teh KAH-ee-ngah · kah HIGH-reh KOH-toh kee teh KOO-rah · kah HIGH-reh RAH-toh kee teh KAH-ee-ngah','tātou, koutou and rātou sit in the same spot, like Week 3.','Sweep your arm around the class for tātou, point at a group for koutou, point away for rātou. Say each one with me.','Echo'],
          ['New word: whare karakia means church. How would you say: We will go to church.','Ka|k haere|n tātou|a ki~te|k whare~karakia.|n*','kah HIGH-reh TAH-toh kee teh FAH-reh kah-RAH-kee-ah','Stretch word: whare karakia = house of prayer.','Fold your hands and point to an imaginary roof. Whare karakia means church, a house for prayer. Take a moment… (wait 3 seconds)… Ka haere tātou ki te whare karakia. Say it with me.','Echo'],
          ['Partner game: ask where your partner will go tomorrow, answer, then swap.','Ka|k haere|n koe|a ki~hea|q āpōpō?|q Ka|k haere|n ahau|a ki~te|k ___.|n','kah HIGH-reh KOH-eh kee HEH-ah AH-por-por · kah HIGH-reh ah-HOW kee teh ___','Use kura, kāinga, whare karakia or any place you know. Swap after three.','Turn to your partner. One person asks Ka haere koe ki hea āpōpō? The other answers with a place. Swap after three. Take 2 minutes while I listen.','Pairs'],
          ['Ask what you will eat: What will you eat?','Ka|k kai|n koe|a i~te|k aha?|q','kah KYE KOH-eh ee teh AH-hah','i te aha = what, for the thing you will eat.','Take a moment… (wait 3 seconds)… Ka kai koe i te aha? Answer: Ka kai ahau i te parāoa. Say them with me.','Echo'],
          ['New: a day of the week in the future. How would you say: We will go home on Friday.','Ka|k haere|n tātou|a ki~te|k kāinga|n ā~te~Rāmere.|q*','kah HIGH-reh TAH-toh kee teh KAH-ee-ngah AH teh RAH-meh-reh','ā te + day = on that day, still to come.','Hold up five fingers and point ahead. For a day still to come, ā te comes before the day, like ā te Rāmere. Take a moment… (wait 3 seconds)… Ka haere tātou ki te kāinga ā te Rāmere. Say it with me.','Echo'],
          ['The three times with time words: I ate yesterday. I am eating now. I will eat tomorrow.','I|k kai|n ahau|a inanahi.|q E|k kai|n ana|k ahau|a ināianei.|q Ka|k kai|n ahau|a āpōpō.|q','ee KYE ah-HOW ee-NAH-nah-hee · eh KYE AH-nah ah-HOW ee-NAH-ee-ah-nay · kah KYE ah-HOW AH-por-por','I + inanahi, E … ana + ināianei, Ka + āpōpō.','Point behind you for inanahi, to the floor for ināianei, ahead for āpōpō. Say each sentence with me and move your arm to match.','Gesture'],
          ['Put it together: Hello. I will go to school tomorrow. I will eat bread. Thank you.','Kia~ora.|w Ka|k haere|n ahau|a ki~te|k kura|n āpōpō.|q Ka|k kai|n ahau|a i~te|k parāoa.|n Kia~ora.|w','KEE-ah OR-ah. kah HIGH-reh ah-HOW kee teh KOO-rah AH-por-por. kah KYE ah-HOW ee teh pah-RAH-or-ah. KEE-ah OR-ah','Terms 1 and 3 together.',null,'Whole class'],
          ['Class chain: greet, ask the next person what they will do tomorrow, they answer, say goodbye.','Kia~ora.|w Ka|k aha|q koe|a āpōpō?|q Ka|k ___|n ahau.|a Ka~kite!|w','KEE-ah OR-ah… kah AH-hah KOH-eh AH-por-por… kah ___ ah-HOW… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next, asks what they will do tomorrow, and listens to the answer. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ka Haere Tātou! — We Will Go!',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Ka haere koutou ki hea āpōpō?','Hello, children! Where will you all go tomorrow?','(opens the door)','T1W1'],
          ['Hana','Ka haere ahau ki te kura āpōpō.','I will go to school tomorrow.','(points ahead)'],
          ['Tama','Ka haere tātou ki te whare karakia ā te Rāmere, Kuia?','Will we go to church on Friday, Kuia?','(counts five fingers)'],
          ['Kuia Mere','Āe, ka haere tātou ki te whare karakia.','Yes, we will go to church.','(nods and smiles)'],
          ['Kuia Mere','I aha koutou inanahi?','What did you all do yesterday?','(leans in)','T3W3'],
          ['Hana','I tākaro ahau inanahi.','I played yesterday.','(smiles)','T3W3'],
          ['Tama','I haere ahau ki te kāinga. I kite ahau i te kurī!','I went home. I saw a dog!','(barks softly)','T3W3'],
          ['Kuia Mere','Ka kai tātou āpōpō. Kei te pīrangi koutou ki te miraka?','We will eat tomorrow. Do you all want milk?','(pours a cup)','T3W1'],
          ['Tama','Āe, kia ora, Kuia! Kei te reka te kai!','Yes, thank you, Kuia! The food is tasty!','(rubs his tummy)','T3W1'],
          ['Hana','Ka karakia tātou?','Will we pray?','(folds her hands)'],
          ['Kuia Mere','Āe, e karakia ana tātou ināianei.','Yes, we are praying now.','(folds her hands)','T3W2'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Jesus tells us not to worry about tomorrow. We can plan to look after other people, and then trust God with what happens next. Asking someone about their plans and listening well is manaaki.','T1W9'],
          ['Tama','Kia ora mō te kai, Kuia. Ka kite!','Thank you for the food, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘Where will you go?’','Ka haere koe ki hea?'],['Say in te reo: ‘We will go home.’','Ka haere tātou ki te kāinga.'],['Choose the word for tomorrow: Ka haere ahau ki te kura ____. (āpōpō / inanahi)','āpōpō'],['What does Ka kai ia i te parāoa mean?','She (or he) will eat bread.'],['Stretch: say these in te reo: ‘I ate yesterday. I am eating now. I will eat tomorrow.’','I kai ahau inanahi. E kai ana ahau ināianei. Ka kai ahau āpōpō.']],
        CE:['Using ahau in a question instead of koe','Forgetting a question is the same words with a rising voice','Using I for something that has not happened yet','Mixing up āpōpō (tomorrow) and inanahi (yesterday)','Leaving out ki te before a place or i te before a thing'],
        T:'T3 W4 Lesson B',
        LP:{title:'Ka haere koe ki hea? — Where will you go?',val:'Manaaki · Matthew 6:34',pat:['Ka haere koe ki hea?','Ka haere ahau ki te ________ āpōpō.','Ka aha koe āpōpō?'],swap:'Swap the person: ahau (I) · koe (you) · ia (she/he) · tātou (we all) · koutou (all of you) · rātou (they). Stretch: whare karakia · ā te Rāmere. Three times: inanahi · ināianei · āpōpō.'}
      }
    };

    addLessons({ '3.4.A': A, '3.4.B': B });
  }

  /* ──────── WEEK 5 · When? ──────── */
  {
    addGlossary({
      "ata":["morning","AH-tah",5,3],
      "ahiahi":["afternoon / evening","ah-hee-AH-hee",5,3],
      "inapō":["last night","ee-nah-POR",5,3],
      "i te rāmere":["on Friday (past)","ee teh RAH-meh-reh",5,3]
    });

    // ── Lesson A · I kai ahau i te ata — I ate this morning ──
    const A = {
      P: {
        t:3,
        w:5,
        l:'A',
        ch:'I|k kai|n ahau|a i~te|k ata.|q*',
        sub:'When did it happen? Today we add time words to the three times: this morning, this afternoon, yesterday, now and tomorrow.',
        say:'Kia ora everyone! You can already say what happened with I, what is happening with E … ana, and what will happen with Ka. This week we say when. Time words go at the end of the sentence, just like inanahi and āpōpō did. Today we meet two new ones: ata, the morning, and ahiahi, the afternoon or evening. I kai ahau i te ata means I ate this morning. We also use ināianei for now. Still no writing: listen, think and speak. Point behind you for finished, to the floor for now, and ahead of you for still to come.',
        pron:'ata = AH-tah · ahiahi = ah-hee-AH-hee · ināianei = ee-NAH-ee-ah-nay · āpōpō = AH-por-por · inanahi = ee-NAH-nah-hee',
        li:'say and ask when something happened or will happen, using time words with I, E … ana and Ka, in te reo.',
        succ:['I can say a time word: ata, ahiahi, inanahi, ināianei, āpōpō.','I can say when I did something: I kai ahau i te ata. I haere ahau ki te kura inanahi.','I can ask and answer: I aha koe i te ata? E aha ana koe ināianei? Ka aha koe āpōpō?'],
        wp:'In the morning, Lord, you hear my voice.',
        ref:'Psalm 5:3',
        mom:'Each morning we can ask God how we can serve others that day. Starting the day with prayer helps us notice who needs a hand. That is manaaki.',
        q:'How could you start tomorrow morning so you are ready to serve someone?',
        recall:[['How do you say: I will go home.','Ka haere ahau ki te kāinga.'],['How do you say: I went to school yesterday.','I haere ahau ki te kura inanahi.'],['How do you say: What are you doing?','E aha ana koe?']],
        rtag:'Term 3 Weeks 2 to 4',
        rtxt:'Remember when… Term 3 Weeks 2 to 4 (3 quick prompts)',
        refl:'What was the first good thing you did today?',
        next:'Lesson B: asking about last night and other days, and all the times together',
        vsay:'Say each word and the class echoes, with an action: sunrise hands for ata (morning), hands low like a sunset for ahiahi, point behind you for inanahi, point to the floor for ināianei, point ahead for āpōpō, walk for haere, eat for kai, bounce a ball for tākaro, point to your head for ako, point to the room for kura. The new words are ata and ahiahi. Ata = AH-tah. Ahiahi = ah-hee-AH-hee: say the hi-a-hi slowly.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: i te before ata, and ata at the end. Prompt 3: ināianei means now, so E … ana.',
        xresc:'Common error: putting the time word at the front, or using Ka for a morning that has already gone. Say: the time word goes at the end, and i te ata is for a morning that has already happened.',
        xpron:'ata = AH-tah · ahiahi = ah-hee-AH-hee · ināianei = ee-NAH-ee-ah-nay',
        cur:cu3('Communication (saying and asking when) · Language Knowledge (time words at the end of the sentence; i te ata, i te ahiahi, inanahi, ināianei, āpōpō with I, E … ana and Ka) · Cultural Knowledge (beginning the day with prayer and thought for others)','Recycles Term 1 Weeks 1, 2 and 9 and Term 3 Weeks 1 to 4. Only the past forms i te ata and i te ahiahi are taught, plus inanahi, ināianei and āpōpō. Future forms for morning and afternoon are not taught until confirmed by a fluent speaker.'),
        vr:valueRows('Psalm 5:3','Each morning we can ask God how we can serve others that day. Starting the day with prayer helps us notice who needs a hand.','How could you start tomorrow morning so you are ready to serve someone?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student.','Draw a simple timeline on the board: behind you, now, ahead of you, to point to as you teach.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the frame yourself: I kai ahau i te ata, E ako ana ahau ināianei, Ka haere ahau āpōpō.'],
        three:'(1) Time words go at the end of the sentence: <i>I kai ahau i te ata</i>, I ate this morning. (2) <i>i te ata</i> and <i>i te ahiahi</i> are for earlier today, so they go with <i>I</i>. (3) <i>ināianei</i> goes with <i>E … ana</i>, and <i>āpōpō</i> goes with <i>Ka</i>.',
        diff:['Echo as a whole class and point to the timeline for every sentence. Use only ata, ināianei and āpōpō at first. Pair with a confident partner and allow whispering first.','Complete all steps. Use all ten words, ask and answer in pairs, and say what you did this morning, are doing now and will do tomorrow.','Add the two-i sentence (I kai ahau i te parāoa i te ata) and explain in English why i te appears twice. Interview classmates about their day.'],
        look:'Time word at the end; i te before ata and ahiahi; the right tense with the right time word; ināianei with E … ana and āpōpō with Ka; clear vowels in ahiahi; students asking I aha koe i te ata? unprompted.',
        nx:'revisit time words with students in Starting; add last night, other days and all the persons in Lesson B.',
        rec:'Term 1 Weeks 1, 2 and 9 (Kia ora, Kei te hiakai ahau, Kia ora mō te kai) and Term 3 Weeks 1 to 4 (Kei te hiakai ahau, E ako ana ahau, I haere ahau ki te kāinga, Ka tākaro ahau) are recalled in the warm-up, steps and drama. Lesson B recalls time words and adds last night.'
      },
      D: {
        VOC:['ata','ahiahi','inanahi','ināianei','āpōpō','haere','kai','tākaro','ako','kura'],
        STEPS:[
          ['Quick recap, the three times: I went yesterday. I am going now. I will go tomorrow.','I|k haere|n ahau|a inanahi.|q E|k haere|n ana|k ahau|a ināianei.|q Ka|k haere|n ahau|a āpōpō.|q','ee HIGH-reh ah-HOW ee-NAH-nah-hee · eh HIGH-reh AH-nah ah-HOW ee-NAH-ee-ah-nay · kah HIGH-reh ah-HOW AH-por-por','Term 3 Weeks 2 to 4, with time words.','Point behind you for inanahi, to the floor for ināianei, ahead for āpōpō. You already know these three time words. Say each sentence with me.','Gesture'],
          ['New word: ata means morning. Say: ata.','ata|q*','AH-tah','ata = morning.','Make a sunrise with your hands. Ata means morning. Say it with me: AH-tah.','Echo'],
          ['How would you say: I ate this morning.','I|k kai|n ahau|a i~te|k ata.|q','ee KYE ah-HOW ee teh AH-tah','i te ata = this morning, already gone. It goes at the end.','Take a moment… (wait 3 seconds)… I kai ahau i te ata. Say it with me. The morning is already finished, so we use I.','Echo'],
          ['How would you say: I went to school this morning.','I|k haere|n ahau|a ki~te|k kura|n i~te|k ata.|q','ee HIGH-reh ah-HOW kee teh KOO-rah ee teh AH-tah','Place first, then the time.',null,'Whole class'],
          ['New word: ahiahi means afternoon or evening. How would you say: I played this afternoon.','ahiahi|q* I|k tākaro|n ahau|a i~te|k ahiahi.|q','ah-hee-AH-hee · ee TAH-kah-roh ah-HOW ee teh ah-hee-AH-hee','Same frame: i te + the time.','Hands low like a sunset. Ahiahi means afternoon or evening. Say it slowly: ah-hee-ah-hee. Take a moment… (wait 3 seconds)… I tākaro ahau i te ahiahi. Say it with me.','Echo'],
          ['Ask: What did you do this morning?','I|k aha|q koe|a i~te|k ata?|q','ee AH-hah KOH-eh ee teh AH-tah','Same question as Week 3, with a time word added.','Last week you asked I aha koe? Now add the time at the end. Take a moment… (wait 3 seconds)… I aha koe i te ata? Say it with me.','Echo'],
          ['Answer: I played this morning. I learned this morning.','I|k tākaro|n ahau|a i~te|k ata.|q I|k ako|n ahau|a i~te|k ata.|q','ee TAH-kah-roh ah-HOW ee teh AH-tah · ee AH-kor ah-HOW ee teh AH-tah','Swap the action.',null,'Whole class'],
          ['Two i te in one sentence: I ate bread this morning.','I|k kai|n ahau|a i~te|k parāoa|n i~te|k ata.|q','ee KYE ah-HOW ee teh pah-RAH-or-ah ee teh AH-tah','First i te = the thing. Second i te = the time.','Listen for the two i te. The first one goes with the bread, the second one goes with the morning. Take a moment… (wait 3 seconds)… I kai ahau i te parāoa i te ata. Say it with me.','Echo'],
          ['Now and tomorrow: I am learning now. I will eat tomorrow.','E|k ako|n ana|k ahau|a ināianei.|q Ka|k kai|n ahau|a āpōpō.|q','eh AH-kor AH-nah ah-HOW ee-NAH-ee-ah-nay · kah KYE ah-HOW AH-por-por','ināianei goes with E … ana. āpōpō goes with Ka.',null,'Whole class'],
          ['Partner game: ask your partner what they did this morning and yesterday, then swap.','I|k aha|q koe|a i~te|k ata?|q I|k ___|n ahau|a i~te|k ata.|q','ee AH-hah KOH-eh ee teh AH-tah · ee ___ ah-HOW ee teh AH-tah','Use haere, kai, tākaro or ako. Swap after three. Try inanahi too.','Turn to your partner. One person asks I aha koe i te ata? The other mimes something they did and answers with I … ahau i te ata. Swap after three. Try inanahi for a change. Take 2 minutes while I listen.','Pairs'],
          ['Put it together: Hello. I ate this morning. I am learning now. I will go home tomorrow. Thank you.','Kia~ora.|w I|k kai|n ahau|a i~te|k ata.|q E|k ako|n ana|k ahau|a ināianei.|q Ka|k haere|n ahau|a ki~te|k kāinga|n āpōpō.|q Kia~ora.|w','KEE-ah OR-ah. ee KYE ah-HOW ee teh AH-tah. eh AH-kor AH-nah ah-HOW ee-NAH-ee-ah-nay. kah HIGH-reh ah-HOW kee teh KAH-ee-ngah AH-por-por. KEE-ah OR-ah','Terms 1 and 3 together.',null,'Whole class'],
          ['Class chain: greet, say what you did this morning, say what you will do tomorrow, say goodbye.','Kia~ora.|w I|k ___|n ahau|a i~te|k ata.|q Ka|k ___|n ahau|a āpōpō.|q Ka~kite!|w','KEE-ah OR-ah… ee ___ ah-HOW ee teh AH-tah… kah ___ ah-HOW AH-por-por… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next, says what they did this morning and what they will do tomorrow. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Rā o Hana — Hana’s Day',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! I aha koe i te ata, Hana?','Hello, children! What did you do this morning, Hana?','(arms wide)','T1W1'],
          ['Hana','I kai ahau i te parāoa i te ata.','I ate bread this morning.','(mimes eating)'],
          ['Kaiako Rose','I haere koe ki hea inanahi, Tama?','Where did you go yesterday, Tama?','(points at him)','T3W3'],
          ['Tama','I haere ahau ki te kāinga inanahi.','I went home yesterday.','(points behind him)','T3W3'],
          ['Kaiako Rose','E aha ana koe ināianei, Tama?','What are you doing now, Tama?','(tilts her head)'],
          ['Tama','E ako ana ahau ināianei.','I am learning now.','(lifts his pencil)','T3W2'],
          ['Kaiako Rose','Ka aha koe āpōpō, Hana?','What will you do tomorrow, Hana?','(points ahead)','T3W4'],
          ['Hana','Ka tākaro ahau āpōpō.','I will play tomorrow.','(bounces a ball)','T3W4'],
          ['Tama','Ka haere ahau ki te kāinga āpōpō.','I will go home tomorrow.','(points ahead)','T3W4'],
          ['Hana','Kei te hiakai ahau ināianei!','I am hungry now!','(rubs her tummy)','T3W1'],
          ['Kaiako Rose','E kai ana tātou ināianei. Kia ora mō te kai!','We are eating now. Thank you for the food!','(holds out a plate)'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Every morning we can ask God how we can serve others that day. Starting the day with prayer helps us notice who needs a hand. That is manaaki.','T1W9'],
          ['Hana','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I ate this morning.’','I kai ahau i te ata.'],['What does ināianei mean?','Now.'],['Choose the word: E ako ana ahau ____. (ināianei / inanahi)','ināianei'],['Say in te reo: ‘What did you do this morning?’','I aha koe i te ata?'],['Stretch: say what you did this morning, what you are doing now and what you will do tomorrow.','I ___ ahau i te ata. E ___ ana ahau ināianei. Ka ___ ahau āpōpō.']],
        CE:['Putting the time word at the front instead of the end','Leaving out i te before ata or ahiahi','Using Ka for a morning that has already happened','Mixing up inanahi (yesterday), ināianei (now) and āpōpō (tomorrow)','Using E … ana without ināianei, or I with ināianei'],
        T:'T3 W5 Lesson A',
        LP:{title:'I kai ahau i te ata — I ate this morning',val:'Manaaki · Psalm 5:3',pat:['I ________ ahau i te ata.','E ________ ana ahau ināianei.','Ka ________ ahau āpōpō.'],swap:'Swap the action and the time: haere · kai · tākaro · ako; i te ata · i te ahiahi · inanahi (finished) · ināianei (now) · āpōpō (tomorrow). Question: I aha koe i te ata?'}
      }
    };

    // ── Lesson B · I moe koe inapō? — Did you sleep last night? ──
    const B = {
      P: {
        t:3,
        w:5,
        l:'B',
        ch:'I|k moe|n koe|a inapō?|q*',
        sub:'Did you sleep well last night? Today we ask and answer about more times with everyone, and add last night and a day of the week in the past.',
        say:'Kia ora everyone! Last lesson we put time words at the end of our sentences: i te ata, i te ahiahi, inanahi, ināianei and āpōpō. Today we ask more questions about when, and we use all the people you know: ahau, koe, ia, tātou, koutou and rātou. We add two stretch words: inapō, last night, and i te Rāmere, on Friday when it has already gone. Still no writing: listen, think and speak. Point behind you, to the floor and ahead of you to show the time.',
        pron:'inapō = ee-nah-POR · i te Rāmere = ee teh RAH-meh-reh · ahiahi = ah-hee-AH-hee',
        li:'ask and answer when things happened or will happen, say who did them, and talk about last night and past days, in te reo.',
        succ:['I can ask and answer: I moe koe inapō? Āe, i moe ahau.','I can say what others did and when: I kai ia i te ata. I haere tātou ki te kura inanahi.','I can use all the times: inapō, inanahi, ināianei, āpōpō, and a day with ā te or i te.'],
        wp:'There is a time for everything.',
        ref:'Ecclesiastes 3:1',
        mom:'God gives us every time of day to serve others. Whenever we can help, that is the right time for manaaki. We can ask someone about their night or their day and really listen.',
        q:'When is a good time to help someone at home, and what could you do?',
        recall:[['How do you say: I ate this morning.','I kai ahau i te ata.'],['How do you say: What will you do tomorrow?','Ka aha koe āpōpō?'],['How do you say: We will go home on Friday.','Ka haere tātou ki te kāinga ā te Rāmere.'],['How do you say: What are you doing now?','E aha ana koe ināianei?']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'Who did you ask about their day or night, and what did you learn?',
        next:'Week 6: Saying no (Kāore ahau i te hiakai)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: inapō (last night) and i te Rāmere (on Friday, past). Rest your head on your hands and point behind you for inapō. Hold up five fingers and point behind you for i te Rāmere, then ahead for ā te Rāmere. Inapō = ee-nah-POR, with a long pō.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: koe asks the question and inapō comes last. Prompt 3: inapō means last night, so it goes with I.',
        xresc:'Common error: using ahau in a question, or using Ka with inapō. Say: koe asks about you, and inapō is already gone, so we use I.',
        xpron:'inapō = ee-nah-POR · i te Rāmere = ee teh RAH-meh-reh',
        cur:cu3('Communication (asking and answering about when, including last night and past days) · Language Knowledge (I + action + who + time word; yes/no questions with a rising voice; inapō; i te + day for the past and ā te + day for the future) · Cultural Knowledge (asking about others’ nights and days, caring for family, using every time to serve)','Recycles Lesson A, Term 1 Weeks 1 and 9, Term 2 Week 5 and Term 3 Weeks 1 to 4. Past days take i and future days take ā. Please have a fluent speaker confirm the day phrases before you teach them. Answers to yes/no questions use Āe only; negatives come in Week 6.'),
        vr:valueRows('Ecclesiastes 3:1','God gives us every time of day to serve others. Whenever we can help, that is the right time for manaaki.','When is a good time to help someone at home, and what could you do?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add inapō (last night) and i te Rāmere (on Friday, past) as the two stretch words, written or spoken.','Keep the board timeline from Lesson A and add inapō at the far left.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the pairs i te Rāmere and ā te Rāmere so you can model past and future clearly.'],
        three:'(1) A yes/no question is the same words with <i>koe</i> and a rising voice: <i>I moe koe inapō?</i> Answer <i>Āe, i moe ahau.</i> (2) <i>inapō</i> means last night and goes with <i>I</i>. (3) A day in the past takes <i>i te</i> and a day in the future takes <i>ā te</i>: <i>i te Rāmere</i>, <i>ā te Rāmere</i>.',
        diff:['Echo as a whole class and point to the timeline for every sentence. Use only ahau and koe, and only ata, inanahi and āpōpō. Pair with a confident partner and allow whispering first.','Complete all steps. Ask and answer with all the people (ahau, koe, ia, tātou, koutou, rātou) in pairs.','Add inapō and i te Rāmere. Interview three classmates about last night, today and tomorrow, and report back to the class.'],
        look:'Rising voice for questions; koe in questions and ahau in answers; Āe, i … ahau as an answer; time word at the end; I with inapō; i te for past days and ā te for future days; clear long vowels in inapō; a warm, interested tone.',
        nx:'revisit questions and time words with students in Starting; move to Week 6 (Saying no).',
        rec:'Lesson A (I kai ahau i te ata, Ka aha koe āpōpō?, E aha ana koe ināianei?), Term 1 Weeks 1 and 9 (Kia ora, Kia ora mō te kai), Term 2 Week 5 (days of the week) and Term 3 Weeks 1 to 4 (Kei te pīrangi koutou ki te miraka?, E kōrero ana tātou, I haere ahau ki te kura inanahi, Ka tākaro ahau āpōpō) are recalled in the warm-up, steps and drama. Week 6 will recall time words before moving to no.'
      },
      D: {
        VOC:[...A.D.VOC,'inapō','i te rāmere'],
        STEPS:[
          ['Quick recap: I ate this morning. What are you doing now? What will you do tomorrow?','I|k kai|n ahau|a i~te|k ata.|q E|k aha|q ana|k koe|a ināianei?|q Ka|k aha|q koe|a āpōpō?|q','ee KYE ah-HOW ee teh AH-tah · eh AH-hah AH-nah KOH-eh ee-NAH-ee-ah-nay · kah AH-hah KOH-eh AH-por-por','Lesson A, stacked.',null,'Whole class'],
          ['Other people: She ate this afternoon. He went to school this morning.','I|k kai|n ia|a i~te|k ahiahi.|q I|k haere|n ia|a ki~te|k kura|n i~te|k ata.|q','ee KYE EE-ah ee teh ah-hee-AH-hee · ee HIGH-reh EE-ah kee teh KOO-rah ee teh AH-tah','ia sits where ahau sits. The time still goes at the end.',null,'Whole class'],
          ['Groups: We ate this morning. You all went to school yesterday. They played this afternoon.','I|k kai|n tātou|a i~te|k ata.|q I|k haere|n koutou|a ki~te|k kura|n inanahi.|q I|k tākaro|n rātou|a i~te|k ahiahi.|q','ee KYE TAH-toh ee teh AH-tah · ee HIGH-reh KOH-toh kee teh KOO-rah ee-NAH-nah-hee · ee TAH-kah-roh RAH-toh ee teh ah-hee-AH-hee','tātou, koutou and rātou sit in the same spot, like Week 3.','Sweep your arm around the class for tātou, point at a group for koutou, point away for rātou. Say each one with me.','Echo'],
          ['New word: inapō means last night. Say: inapō.','inapō|q*','ee-nah-POR','inapō = last night. Say it in chunks: i-na-pō, with a long pō.','Rest your head on your hands and point behind you. Inapō means last night. Say it in chunks: i-na-pō. Say it with me.','Echo'],
          ['How would you say: I slept last night.','I|k moe|n ahau|a inapō.|q','ee MOR-eh ah-HOW ee-nah-POR','inapō is already gone, so it goes with I. It goes at the end.','Take a moment… (wait 3 seconds)… I moe ahau inapō. Say it with me.','Echo'],
          ['Ask: Did you sleep last night?','I|k moe|n koe|a inapō?|q','ee MOR-eh KOH-eh ee-nah-POR','A question is the same words with koe and a rising voice.','Hold out your hands as if asking. Use koe, and let your voice rise at the end. Take a moment… (wait 3 seconds)… I moe koe inapō? Say it with me.','Echo'],
          ['Answer: Yes, I slept.','Āe,|w i|k moe|n ahau.|a','AH-eh · ee MOR-eh ah-HOW','Āe = yes, then the whole answer with ahau.',null,'Whole class'],
          ['Partner game: ask your partner what they did last night, this morning or yesterday, then swap.','I|k aha|q koe|a inapō?|q I|k ___|n ahau|a inapō.|q','ee AH-hah KOH-eh ee-nah-POR · ee ___ ah-HOW ee-nah-POR','Use moe, kai, tākaro, ako or karakia. Swap after three. Try i te ata and inanahi too.','Turn to your partner. One person asks a question about when, for example I aha koe inapō? The other mimes and answers. Swap after three. Take 2 minutes while I listen.','Pairs'],
          ['New: a day in the past. How would you say: I went home on Friday.','I|k haere|n ahau|a ki~te|k kāinga|n i~te~Rāmere.|q*','ee HIGH-reh ah-HOW kee teh KAH-ee-ngah ee teh RAH-meh-reh','i te + day = on that day, already gone.','Hold up five fingers and point behind you. For a day that has already gone, i te comes before the day: i te Rāmere. Take a moment… (wait 3 seconds)… I haere ahau ki te kāinga i te Rāmere. Say it with me.','Echo'],
          ['Past and future days: I went home on Friday. I will go home on Friday.','I|k haere|n ahau|a ki~te|k kāinga|n i~te~Rāmere.|q Ka|k haere|n ahau|a ki~te|k kāinga|n ā~te~Rāmere.|q','ee HIGH-reh ah-HOW kee teh KAH-ee-ngah ee teh RAH-meh-reh · kah HIGH-reh ah-HOW kee teh KAH-ee-ngah AH teh RAH-meh-reh','i te = already gone. ā te = still to come.','Point behind you for i te, ahead for ā te. You met ā te Rāmere last week. Now you can hear the two together. Say each sentence with me.','Gesture'],
          ['All the times together: I slept last night. I ate this morning. I am learning now. I will play tomorrow.','I|k moe|n ahau|a inapō.|q I|k kai|n ahau|a i~te|k ata.|q E|k ako|n ana|k ahau|a ināianei.|q Ka|k tākaro|n ahau|a āpōpō.|q','ee MOR-eh ah-HOW ee-nah-POR · ee KYE ah-HOW ee teh AH-tah · eh AH-kor AH-nah ah-HOW ee-NAH-ee-ah-nay · kah TAH-kah-roh ah-HOW AH-por-por','I + inapō, i te ata · E … ana + ināianei · Ka + āpōpō.','Point far behind you for inapō, behind you for i te ata, to the floor for ināianei, ahead for āpōpō. Say each sentence with me and move your arm to match.','Gesture'],
          ['Put it together: Hello. I slept last night. I ate bread this morning. I will go to school tomorrow. Thank you.','Kia~ora.|w I|k moe|n ahau|a inapō.|q I|k kai|n ahau|a i~te|k parāoa|n i~te|k ata.|q Ka|k haere|n ahau|a ki~te|k kura|n āpōpō.|q Kia~ora.|w','KEE-ah OR-ah. ee MOR-eh ah-HOW ee-nah-POR. ee KYE ah-HOW ee teh pah-RAH-or-ah ee teh AH-tah. kah HIGH-reh ah-HOW kee teh KOO-rah AH-por-por. KEE-ah OR-ah','Terms 1 and 3 together.',null,'Whole class'],
          ['Class chain: greet, ask the next person about last night, they answer, say goodbye.','Kia~ora.|w I|k moe|n koe|a inapō?|q Āe,|w i|k moe|n ahau.|a Ka~kite!|w','KEE-ah OR-ah… ee MOR-eh KOH-eh ee-nah-POR… AH-eh ee MOR-eh ah-HOW… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next, asks about last night, and listens to the answer. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ngā Wā Katoa — All the Times',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! I moe koutou inapō?','Hello, children! Did you all sleep last night?','(opens the door)','T1W1'],
          ['Hana','Āe, i moe ahau inapō, Kuia.','Yes, I slept last night, Kuia.','(stretches)'],
          ['Tama','Āe, i moe ahau!','Yes, I slept!','(yawns)'],
          ['Kuia Mere','I kai koutou i te ata?','Did you all eat this morning?','(holds out a plate)'],
          ['Tama','Āe, i kai ahau i te parāoa i te ata.','Yes, I ate bread this morning.','(mimes eating)'],
          ['Kuia Mere','Kei te pīrangi koutou ki te miraka ināianei?','Do you all want milk now?','(pours a cup)','T3W1'],
          ['Hana','Āe, kia ora, Kuia! Kei te reka te kai!','Yes, thank you, Kuia! The food is tasty!','(rubs her tummy)','T3W1'],
          ['Kuia Mere','I haere koutou ki hea inanahi?','Where did you all go yesterday?','(leans in)','T3W3'],
          ['Hana','I haere ahau ki te kura inanahi.','I went to school yesterday.','(points behind her)','T3W3'],
          ['Kuia Mere','Ka haere koutou ki hea āpōpō?','Where will you all go tomorrow?','(points ahead)','T3W4'],
          ['Tama','Ka tākaro ahau āpōpō!','I will play tomorrow!','(bounces a ball)','T3W4'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) God gives us every time of day to serve others: morning, afternoon and night. Whenever we can help, that is the right time for manaaki.','T1W9'],
          ['Tama','Kia ora mō te kai, Kuia. Ka kite!','Thank you for the food, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘Did you sleep last night?’','I moe koe inapō?'],['Say in te reo: ‘Yes, I slept.’','Āe, i moe ahau.'],['Choose the word for last night: I moe ahau ____. (inapō / āpōpō)','inapō'],['What does I haere ahau ki te kāinga i te Rāmere mean?','I went home on Friday.'],['Stretch: say these in te reo: ‘I went yesterday. I am going now. I will go tomorrow.’','I haere ahau inanahi. E haere ana ahau ināianei. Ka haere ahau āpōpō.']],
        CE:['Using ahau in a question instead of koe','Forgetting a question is the same words with a rising voice','Using Ka with inapō, which has already gone','Mixing up i te Rāmere (past) and ā te Rāmere (future)','Putting the time word at the front instead of the end'],
        T:'T3 W5 Lesson B',
        LP:{title:'I moe koe inapō? — Did you sleep last night?',val:'Manaaki · Ecclesiastes 3:1',pat:['I ________ koe inapō?','Āe, i ________ ahau.','Ka ________ ahau ā te Rāmere.'],swap:'Swap the person: ahau (I) · koe (you) · ia (she/he) · tātou (we all) · koutou (all of you) · rātou (they). Times: inapō · i te ata · i te ahiahi · inanahi · ināianei · āpōpō. Stretch: inapō · i te Rāmere.'}
      }
    };

    addLessons({ '3.5.A': A, '3.5.B': B });
  }

  /* ──────── WEEK 6 · Saying no ──────── */
  {
    addGlossary({
      "kāore":["is not / are not (starts a ‘not’ sentence)","KAH-or-eh",6,3],
      "hiainu":["thirsty","hee-ah-EE-noo",6,3],
      "mōhio":["know / understand","MOH-hee-or",6,3]
    });

    // ── Lesson A · Kāore ahau i te hiakai — I am not hungry ──
    const A = {
      P: {
        t:3,
        w:6,
        l:'A',
        ch:'Kāore|k* ahau|a i~te|k hiakai.|q',
        sub:'How do we say no kindly? Today we learn the little word kāore to say what is not true: I am not hungry, I am not tired.',
        say:'Kia ora everyone! You already know how to say yes: Kei te hiakai ahau, I am hungry. This week we learn to say no, because being honest and kind is part of manaaki. Today we meet one new word: kāore. Kāore means is not. Kei te hiakai ahau becomes Kāore ahau i te hiakai. Kāore takes the place of Kei te, the person goes in the middle, and i te comes before the feeling. We stay in the now this week: how we feel and what we want right now. Still no writing: listen, think and speak. Shake your head gently every time you hear kāore.',
        pron:'kāore = KAH-or-eh · kāo = KAH-or · hiakai = HEE-ah-kye · ngenge = NGEH-ngeh · pōuri = POH-oo-ree · harikoa = HAH-ree-KOR-ah · mauiui = MOW-ee-oo-ee · pīrangi = PEE-rah-ngee',
        li:'say how we do not feel and what we do not want, using kāore, in te reo.',
        succ:['I can say what I am not: Kāore ahau i te hiakai.','I can say it about others and say what I do not want: Kāore ia i te ngenge. Kāore ahau i te pīrangi ki te panana.','I can answer a question with no, kindly: Kei te ngenge koe? Kāo, kāore ahau i te ngenge.'],
        wp:'Let your ‘yes’ be yes, and your ‘no’ be no.',
        ref:'Matthew 5:37',
        mom:'Being honest means our yes is a real yes and our no is a real no. When we say no kindly, we are still looking after the other person. That is manaaki.',
        q:'When is it hard to say no, and how could you say it kindly?',
        recall:[['How do you say: Do you want bread?','Kei te pīrangi koe ki te parāoa?'],['How do you say: No, I am well.','Kāo, kei te pai ahau.'],['How do you say: I ate this morning.','I kai ahau i te ata.']],
        rtag:'Term 3 Weeks 1 and 5',
        rtxt:'Remember when… Term 3 Weeks 1 and 5 (3 quick prompts)',
        refl:'When did you say no kindly today, or when could you have?',
        next:'Lesson B: saying no for other people, and two new words: thirsty and know',
        vsay:'Say each word and the class echoes, with an action: shake your head gently for kāore, wave a flat hand for kāo, nod for āe, rub your tummy for hiakai, yawn for ngenge, a sad face for pōuri, a big smile for harikoa, hold your tummy and look unwell for mauiui, hold out your hands for pīrangi, pretend to eat for kai. The new word is kāore. Kāore = KAH-or-eh. Say it in chunks: kā-o-re. Kāo is no, kāore starts a whole ‘not’ sentence.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: kāore first, ahau in the middle, i te before the feeling. Prompt 3: kāore takes the place of Kei te.',
        xresc:'Common error: using Kei te with kāore, or leaving out i te. Say: kāore takes the place of Kei te, then the person, then i te.',
        xpron:'kāore = KAH-or-eh · hiakai = HEE-ah-kye · pīrangi = PEE-rah-ngee',
        cur:cu3('Communication (saying what we are not and do not want; answering no politely) · Language Knowledge (Kāore + person + i te + feeling; Kāore + person + i te pīrangi ki te + kai; Āe / Kāo) · Cultural Knowledge (an honest and kind no as manaaki; never pressuring a guest to eat)','Recycles Term 1 Weeks 2, 6 and 9 and Term 3 Weeks 1 and 5. Only the present negative (Kāore … i te …) is taught. Negatives for the past and the future are NOT taught. Be sensitive about food: nobody is made to eat, and check allergies and whānau food practices before using real kai.'),
        vr:valueRows('Matthew 5:37','Being honest means our yes is a real yes and our no is a real no. When we say no kindly, we are still looking after the other person.','When is it hard to say no, and how could you say it kindly?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student.','Bring picture cards of kai (bread, banana, apple, milk) to offer and politely refuse. Use pictures, not real food.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the frame yourself: Kei te hiakai ahau becomes Kāore ahau i te hiakai, and shake your head gently each time.'],
        three:'(1) <i>Kāore</i> takes the place of <i>Kei te</i>, and the person goes in the middle: <i>Kei te hiakai ahau</i> becomes <i>Kāore ahau i te hiakai</i>. (2) <i>i te</i> comes before the feeling or the thing wanted: <i>Kāore ia i te pīrangi ki te parāoa</i>. (3) <i>Kāo</i> is the short answer no, and <i>kāore</i> starts the full sentence.',
        diff:['Echo as a whole class and shake your head with every kāore. Use only ahau with hiakai or ngenge at first. Pair with a confident partner and allow whispering first.','Complete all steps. Use all ten words, ask and answer in pairs, and say no to an offer in a full sentence.','Say a yes and a no together (Āe, kei te hiakai ahau. Kāore ahau i te ngenge.), explain in English how kāore replaces Kei te, and interview classmates about what they do not want.'],
        look:'Kāore in place of Kei te; the person straight after kāore; i te before the feeling or pīrangi; Kāo followed by a full sentence; a kind, smiling tone; clear vowels in kāore (kā-o-re) and pīrangi.',
        nx:'revisit Kei te … and kāore with students in Starting; add other people (ia, tātou, koutou, rātou) and two new words in Lesson B.',
        rec:'Term 1 Weeks 1, 2, 6 and 9 (Kia ora, Kei te hiakai ahau, Kei te pīrangi, Kia ora mō te kai) and Term 3 Weeks 1 and 5 (Kei te pīrangi koe ki te parāoa? Kāo, kei te pai ahau, I kai ahau i te ata) are recalled in the warm-up, steps and drama. Lesson B adds other people and the stretch words.'
      },
      D: {
        VOC:['kāore','kāo','āe','hiakai','ngenge','pōuri','harikoa','mauiui','pīrangi','kai'],
        STEPS:[
          ['Quick recap: I am hungry. You are tired. She is happy.','Kei~te|k hiakai|q ahau.|a Kei~te|k ngenge|q koe.|a Kei~te|k harikoa|q ia.|a','kay teh HEE-ah-kye ah-HOW · kay teh NGEH-ngeh KOH-eh · kay teh HAH-ree-KOR-ah EE-ah','Term 1 Week 2, the way we say yes.',null,'Whole class'],
          ['New word: kāore means is not. Shake your head and say: kāore.','Kāore|k*','KAH-or-eh','Kāore = is not. It takes the place of Kei te.','Shake your head gently. Kāore means is not. It is longer than kāo, which means no. Say it in chunks: kā-o-re. Say it with me.','Echo'],
          ['How would you say: I am not hungry.','Kāore|k ahau|a i~te|k* hiakai.|q','KAH-or-eh ah-HOW ee teh HEE-ah-kye','Kāore, then the person, then i te, then the feeling.','Kei te hiakai ahau means I am hungry. For I am not hungry, kāore comes first, then ahau, then i te, then hiakai. Take a moment… (wait 3 seconds)… Kāore ahau i te hiakai. Say it with me.','Echo'],
          ['Swap the feeling: I am not tired. I am not sad.','Kāore|k ahau|a i~te|k ngenge.|q Kāore|k ahau|a i~te|k pōuri.|q','KAH-or-eh ah-HOW ee teh NGEH-ngeh · KAH-or-eh ah-HOW ee teh POH-oo-ree','Same frame, new feeling.',null,'Whole class'],
          ['Swap the person: You are not happy. She is not sick.','Kāore|k koe|a i~te|k harikoa.|q Kāore|k ia|a i~te|k mauiui.|q','KAH-or-eh KOH-eh ee teh HAH-ree-KOR-ah · KAH-or-eh EE-ah ee teh MOW-ee-oo-ee','koe and ia sit where ahau sat.',null,'Whole class'],
          ['Ask and answer: Are you tired? No, I am not tired.','Kei~te|k ngenge|q koe?|a Kāo,|w kāore|k ahau|a i~te|k ngenge.|q','kay teh NGEH-ngeh KOH-eh · KAH-oh, KAH-or-eh ah-HOW ee teh NGEH-ngeh','Kāo = no, then the whole sentence with kāore.','A question is the same words with a rising voice. For no, say Kāo, then the full sentence with kāore. Take a moment… (wait 3 seconds)… Kei te ngenge koe? Kāo, kāore ahau i te ngenge. Say it with me.','Echo'],
          ['Partner game: ask your partner how they feel, and answer no. Then swap.','Kei~te|k ___|q koe?|a Kāo,|w kāore|k ahau|a i~te|k ___.|q','kay teh ___ KOH-eh · KAH-oh, KAH-or-eh ah-HOW ee teh ___','Use hiakai, ngenge, pōuri, harikoa or mauiui. Swap after three. Answering for real is fine.','Turn to your partner. One person asks Kei te … koe? with a feeling word. The other shakes their head and answers Kāo, kāore ahau i te … Swap after three. It is fine to answer for real. Take 2 minutes while I listen.','Pairs'],
          ['Say what you do not want: I do not want bread.','Kāore|k ahau|a i~te|k pīrangi|q* ki~te|k parāoa.|n','KAH-or-eh ah-HOW ee teh PEE-rah-ngee kee teh pah-RAH-or-ah','Kei te pīrangi ahau ki te parāoa becomes kāore, then ahau, then i te pīrangi.','Kei te pīrangi ahau ki te parāoa means I want bread. For I do not want bread, kāore comes first, then ahau, then i te pīrangi, then ki te parāoa. Take a moment… (wait 3 seconds)… Kāore ahau i te pīrangi ki te parāoa. Say it with me.','Echo'],
          ['Swap the person and the kai: She does not want a banana. You do not want an apple.','Kāore|k ia|a i~te|k pīrangi|q ki~te|k panana.|n Kāore|k koe|a i~te|k pīrangi|q ki~te|k āporo.|n','KAH-or-eh EE-ah ee teh PEE-rah-ngee kee teh pah-NAH-nah · KAH-or-eh KOH-eh ee teh PEE-rah-ngee kee teh AH-poh-roh','Same frame: the person and the kai change.',null,'Whole class'],
          ['A yes and a no together: Yes, I am hungry. I am not tired.','Āe,|w kei~te|k hiakai|q ahau.|a Kāore|k ahau|a i~te|k ngenge.|q','AH-eh, kay teh HEE-ah-kye ah-HOW · KAH-or-eh ah-HOW ee teh NGEH-ngeh','Kei te says it is true. Kāore says it is not.','Listen to the two sentences side by side. Kei te says it is true and kāore says it is not. Nod for the first and shake your head for the second. Say them with me.','Gesture'],
          ['Say no kindly, two ways: No, I am well. No, I do not want bread.','Kāo,|w kei~te|k pai|q ahau.|a Kāo,|w kāore|k ahau|a i~te|k pīrangi|q ki~te|k parāoa.|n','KAH-oh, kay teh PIE ah-HOW · KAH-oh, KAH-or-eh ah-HOW ee teh PEE-rah-ngee kee teh pah-RAH-or-ah','Kāo, kei te pai ahau is from Week 1. Kāo, kāore ahau i te … is today’s way.','You can say no kindly in two ways. Kāo, kei te pai ahau, which you know, means No, I am well. Or say Kāo, kāore ahau i te pīrangi ki te parāoa. Always say it with a smile. Say both with me.','Echo'],
          ['Put it together: Hello. Do you want bread? No, I am not hungry. Thank you.','Kia~ora.|w Kei~te|k pīrangi|q koe|a ki~te|k parāoa?|n Kāo,|w kāore|k ahau|a i~te|k hiakai.|q Kia~ora.|w','KEE-ah OR-ah. kay teh PEE-rah-ngee KOH-eh kee teh pah-RAH-or-ah. KAH-oh, KAH-or-eh ah-HOW ee teh HEE-ah-kye. KEE-ah OR-ah','Terms 1 and 3 together: offering, a kind no and thanks.',null,'Whole class'],
          ['Class chain: greet, ask the next person how they feel, they answer no, say goodbye.','Kia~ora.|w Kei~te|k ___|q koe?|a Kāo,|w kāore|k ahau|a i~te|k ___.|q Ka~kite!|w','KEE-ah OR-ah… kay teh ___ KOH-eh… KAH-oh, KAH-or-eh ah-HOW ee teh ___… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next, asks Kei te … koe? with a feeling word, and listens to the answer. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Kai o te Kura — Kai at School',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, tamariki! Kei te hiakai koutou?','Hello, children! Are you all hungry?','(arms wide)','T1W1'],
          ['Hana','Kāo, kāore ahau i te hiakai.','No, I am not hungry.','(shakes her head)'],
          ['Tama','Āe, kei te hiakai ahau!','Yes, I am hungry!','(rubs his tummy)','T1W2'],
          ['Kaiako Rose','Kei te pīrangi koe ki te parāoa, Tama?','Do you want bread, Tama?','(holds out a picture card)','T3W1'],
          ['Tama','Āe, kia ora! Kei te reka te parāoa!','Yes, thank you! The bread is tasty!','(takes the card)','T3W1'],
          ['Kaiako Rose','Kei te pīrangi koe ki te panana, Hana?','Do you want a banana, Hana?','(holds out another card)','T3W1'],
          ['Hana','Kāo, kāore ahau i te pīrangi ki te panana.','No, I do not want a banana.','(smiles and shakes her head)'],
          ['Kaiako Rose','Kei te ngenge koe, Hana?','Are you tired, Hana?','(tilts her head)','T1W2'],
          ['Hana','Kāo, kāore ahau i te ngenge. Kei te pai ahau.','No, I am not tired. I am well.','(gives a thumbs up)','T1W2'],
          ['Tama','Kāore ia i te pōuri, Kaiako. Kei te harikoa ia!','She is not sad, teacher. She is happy!','(points at Hana)'],
          ['Kaiako Rose','Ka pai! Kia ora mō te kai, tamariki.','Well done! Thank you for the food, children.','(claps her hands)'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Let your yes be yes and your no be no. When we are honest and kind about what we need, we look after each other. That is manaaki.','T1W9'],
          ['Hana','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘I am not hungry.’','Kāore ahau i te hiakai.'],['What does Kāore ahau i te ngenge mean?','I am not tired.'],['Choose the word: ____ ahau i te ngenge. (Kāore / Kei te)','Kāore'],['Say in te reo: ‘No, I do not want a banana.’','Kāo, kāore ahau i te pīrangi ki te panana.'],['Stretch: say ‘Are you tired?’ then answer ‘No, I am not tired.’','Kei te ngenge koe? Kāo, kāore ahau i te ngenge.']],
        CE:['Using Kei te instead of kāore, or leaving out i te','Not knowing what kāore means, or mixing up kāo (no) and kāore (is not)','Putting the person at the end instead of straight after kāore','Leaving out i te before pīrangi','Answering with only Kāo and no full sentence'],
        T:'T3 W6 Lesson A',
        LP:{title:'Kāore ahau i te hiakai — I am not hungry',val:'Manaaki · Matthew 5:37',pat:['Kāore ahau i te ________.','Kāore ia i te pīrangi ki te ________.','Kei te ________ koe? Kāo, kāore ahau i te ________.'],swap:'Swap the person and the word: ahau (I) · koe (you) · ia (she/he). Feelings: hiakai · ngenge · pōuri · harikoa · mauiui. Kai: parāoa · panana · āporo · miraka. Kāore takes the place of Kei te.'}
      }
    };

    // ── Lesson B · Kāore tātou i te hiakai — We are not hungry ──
    const B = {
      P: {
        t:3,
        w:6,
        l:'B',
        ch:'Kāore|k tātou|a* i~te|k hiakai.|q',
        sub:'Who is not hungry? Today we say no for everyone: she, he, we, you all and they. We also add two new words: thirsty and know.',
        say:'Kia ora everyone! Last lesson we learned kāore: Kāore ahau i te hiakai, I am not hungry. Today we use it for everyone: ia, tātou, koutou and rātou. We also ask about someone else and answer no. We add two stretch words: hiainu, thirsty, and mōhio, to know. Kāore ahau i te mōhio means I do not know. Remember, kāore stays in the now this week. We do not use it for yesterday or tomorrow yet. Still no writing: listen, think and speak. Shake your head gently for kāore.',
        pron:'hiainu = hee-ah-EE-noo · mōhio = MOH-hee-or · kāore = KAH-or-eh · tātou = TAH-toh · koutou = KOH-toh · rātou = RAH-toh',
        li:'say what other people are not and do not want, and say I am not thirsty and I do not know, in te reo.',
        succ:['I can say it about others: Kāore ia i te ngenge. Kāore tātou i te hiakai.','I can ask about someone else and answer: Kei te ngenge ia? Kāo, kāore ia i te ngenge.','I can use the new words: Kāore ahau i te hiainu. Kāore ahau i te mōhio.'],
        wp:'Speak the truth in love.',
        ref:'Ephesians 4:15',
        mom:'When we say no, or say I do not know, we are being honest. Saying it kindly is speaking the truth in love. A kind no can also leave room for someone else to say yes.',
        q:'How could you say no kindly to a friend this week?',
        recall:[['How do you say: I am not hungry.','Kāore ahau i te hiakai.'],['How do you say: She does not want a banana.','Kāore ia i te pīrangi ki te panana.'],['How do you say: Did you sleep last night?','I moe koe inapō?'],['How do you say: What is this?','He aha tēnei?']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'Who did you listen to today, even when their answer was no?',
        next:'Week 7: Everyone (the whole pronoun family)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: hiainu (thirsty) and mōhio (know). Pretend to sip a drink and fan your throat for hiainu. Shrug and open your palms for mōhio. Hiainu = hee-ah-EE-noo, with the stress near the end. Mōhio = MOH-hee-or, with a long ō.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: kāore, then ia, then i te. Prompt 3: hiainu means thirsty and hiakai means hungry.',
        xresc:'Common error: using ahau or koe for someone else, or Kei te instead of kāore. Say: ia is for she or he, and kāore takes the place of Kei te.',
        xpron:'hiainu = hee-ah-EE-noo · mōhio = MOH-hee-or · tātou = TAH-toh',
        cur:cu3('Communication (saying what others are not and do not want; asking and answering about someone else) · Language Knowledge (Kāore + ia / tātou / koutou / rātou + i te + feeling or want; Kei te … ia? and Kāo, kāore ia i te …; hiainu; Kāore ahau i te mōhio) · Cultural Knowledge (honest and kind answers; noticing who is hungry or thirsty and caring for them)','Recycles Lesson A, Term 1 Weeks 2, 6 and 9, Term 2 Week 1 and Term 3 Weeks 1, 3 and 5. Only the present negative is taught; past and future negatives are not. Week 7 teaches the full pronoun family, so mātou, māua and the dual forms are not used yet. Please have a fluent speaker confirm Kāore ahau i te mōhio.'),
        vr:valueRows('Ephesians 4:15','When we say no, or say I do not know, we are being honest. Saying it kindly is speaking the truth in love. A kind no can also leave room for someone else to say yes.','How could you say no kindly to a friend this week?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add hiainu (thirsty) and mōhio (know) as the two stretch words, written or spoken.','Bring picture cards of kai and drinks (bread, meat, milk, a banana) to offer and politely refuse. Use pictures, not real food.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the pairs: Kei te hiainu ahau and Kāore ahau i te hiainu, then Kāore ahau i te mōhio with a shrug.'],
        three:'(1) The person goes straight after <i>kāore</i>: <i>Kāore ia i te ngenge</i> (she or he), <i>Kāore tātou i te hiakai</i> (all of us). (2) To ask about someone else, use <i>ia</i>: <i>Kei te ngenge ia?</i> and answer <i>Kāo, kāore ia i te ngenge.</i> (3) <i>hiainu</i> means thirsty and <i>mōhio</i> means know: <i>Kāore ahau i te mōhio</i>, I do not know.',
        diff:['Echo as a whole class and shake your head with every kāore. Use only ahau and ia, and only hiakai and ngenge. Pair with a confident partner and allow whispering first.','Complete all steps. Say no for all the people (ahau, koe, ia, tātou, koutou, rātou) and ask and answer about a classmate in pairs.','Add hiainu and mōhio. Interview three classmates about what they do not want and what they do not know, and report back to the class.'],
        look:'Kāore in place of Kei te; the right person straight after kāore (ia for she or he); i te before the feeling or want; Kāo followed by a full sentence; hiainu and hiakai not mixed up; the long ō in mōhio; a kind, warm tone.',
        nx:'revisit kāore and the persons with students in Starting; move to Week 7 (the whole pronoun family).',
        rec:'Lesson A (Kāore ahau i te hiakai, Kāore ahau i te pīrangi ki te …), Term 1 Weeks 1, 2 and 9 (Kia ora, Kei te ngenge koe?, Kia ora mō te kai), Term 2 Week 1 (He aha tēnei?) and Term 3 Weeks 1, 3 and 5 (Kei te pīrangi koe ki te miraka?, Kei te hiakai ahau, I moe koe inapō?) are recalled in the warm-up, steps and drama. Week 7 will recall kāore before moving to the full pronoun family.'
      },
      D: {
        VOC:[...A.D.VOC,'hiainu','mōhio'],
        STEPS:[
          ['Quick recap: I am not hungry. I do not want a banana.','Kāore|k ahau|a i~te|k hiakai.|q Kāore|k ahau|a i~te|k pīrangi|q ki~te|k panana.|n','KAH-or-eh ah-HOW ee teh HEE-ah-kye · KAH-or-eh ah-HOW ee teh PEE-rah-ngee kee teh pah-NAH-nah','Lesson A, stacked.',null,'Whole class'],
          ['Other people: She is not tired. He is not hungry.','Kāore|k ia|a i~te|k ngenge.|q Kāore|k ia|a i~te|k hiakai.|q','KAH-or-eh EE-ah ee teh NGEH-ngeh · KAH-or-eh EE-ah ee teh HEE-ah-kye','ia sits where ahau sits.',null,'Whole class'],
          ['Groups: We are not hungry. You all are not sad. They are not tired.','Kāore|k tātou|a i~te|k hiakai.|q Kāore|k koutou|a i~te|k pōuri.|q Kāore|k rātou|a i~te|k ngenge.|q','KAH-or-eh TAH-toh ee teh HEE-ah-kye · KAH-or-eh KOH-toh ee teh POH-oo-ree · KAH-or-eh RAH-toh ee teh NGEH-ngeh','tātou, koutou and rātou sit in the same spot too.','Sweep your arm around the class for tātou, point at a group for koutou, point away for rātou. Say each one with me, and shake your head for kāore.','Echo'],
          ['Ask about someone else: Is she tired? No, she is not tired.','Kei~te|k ngenge|q ia?|a Kāo,|w kāore|k ia|a i~te|k ngenge.|q','kay teh NGEH-ngeh EE-ah · KAH-oh, KAH-or-eh EE-ah ee teh NGEH-ngeh','Ask with ia, answer with Kāo and the whole sentence.','Point to a classmate who is happy to be the example. To ask about someone else, use ia and a rising voice. Take a moment… (wait 3 seconds)… Kei te ngenge ia? Kāo, kāore ia i te ngenge. Say it with me.','Echo'],
          ['What others do not want: They do not want meat. We do not want sweets.','Kāore|k rātou|a i~te|k pīrangi|q ki~te|k mīti.|n Kāore|k tātou|a i~te|k pīrangi|q ki~te|k rare.|n','KAH-or-eh RAH-toh ee teh PEE-rah-ngee kee teh MEE-tee · KAH-or-eh TAH-toh ee teh PEE-rah-ngee kee teh RAH-reh','Same frame with the groups.',null,'Whole class'],
          ['Partner game: ask your partner about a classmate, and answer yes or no. Then swap.','Kei~te|k ___|q ia?|a Āe,|w kei~te|k ___|q ia.|a Kāo,|w kāore|k ia|a i~te|k ___.|q','kay teh ___ EE-ah · AH-eh, kay teh ___ EE-ah · KAH-oh, KAH-or-eh EE-ah ee teh ___','Use hiakai, ngenge, pōuri or harikoa. Swap after three. Say what you can see on their face.','Turn to your partner. Choose a classmate. One person asks Kei te … ia? with a feeling word. The other looks and answers Āe, kei te … ia or Kāo, kāore ia i te … Swap after three. Take 2 minutes while I listen.','Pairs'],
          ['New word: hiainu means thirsty. Say: I am thirsty. I am not thirsty.','hiainu|q* Kei~te|k hiainu|q ahau.|a Kāore|k ahau|a i~te|k hiainu.|q','hee-ah-EE-noo · kay teh hee-ah-EE-noo ah-HOW · KAH-or-eh ah-HOW ee teh hee-ah-EE-noo','hiainu = thirsty. Do not mix it up with hiakai, hungry.','Pretend to sip a drink and fan your throat. Hiainu means thirsty. Say it in chunks: hi-a-i-nu. Say it with me. Now listen: Kei te hiainu ahau, I am thirsty. Kāore ahau i te hiainu, I am not thirsty. Say them with me.','Echo'],
          ['Offer a drink and say no: Do you want milk? No, I am not thirsty.','Kei~te|k pīrangi|q koe|a ki~te|k miraka?|n Kāo,|w kāore|k ahau|a i~te|k hiainu.|q','kay teh PEE-rah-ngee KOH-eh kee teh MEE-rah-kah · KAH-oh, KAH-or-eh ah-HOW ee teh hee-ah-EE-noo','A kind no that gives a reason.',null,'Whole class'],
          ['New word: mōhio means know. How would you say: I do not know.','Kāore|k ahau|a i~te|k mōhio.|q*','KAH-or-eh ah-HOW ee teh MOH-hee-or','mōhio = know. Same frame as the feelings.','Shrug and open your palms. Mōhio means know. Hold the long ō: mō-hi-o. Take a moment… (wait 3 seconds)… Kāore ahau i te mōhio. Say it with me.','Echo'],
          ['A yes and a no together: Yes, I am hungry. I am not thirsty.','Āe,|w kei~te|k hiakai|q ahau.|a Kāore|k ahau|a i~te|k hiainu.|q','AH-eh, kay teh HEE-ah-kye ah-HOW · KAH-or-eh ah-HOW ee teh hee-ah-EE-noo','Kei te says it is true. Kāore says it is not.',null,'Gesture'],
          ['Put it together: Hello. Do you want milk? No, I am not thirsty. I am hungry. Thank you for the food.','Kia~ora.|w Kei~te|k pīrangi|q koe|a ki~te|k miraka?|n Kāo,|w kāore|k ahau|a i~te|k hiainu.|q Kei~te|k hiakai|q ahau.|a Kia~ora~mō~te~kai.|w','KEE-ah OR-ah. kay teh PEE-rah-ngee KOH-eh kee teh MEE-rah-kah. KAH-oh, KAH-or-eh ah-HOW ee teh hee-ah-EE-noo. kay teh HEE-ah-kye ah-HOW. KEE-ah OR-ah mor teh KYE','Terms 1 and 3 together.',null,'Whole class'],
          ['Class chain: greet, ask the next person how they feel, they answer yes or no, say goodbye.','Kia~ora.|w Kei~te|k ___|q koe?|a Āe/Kāo,|w ___.|n Ka~kite!|w','KEE-ah OR-ah… kay teh ___ KOH-eh… AH-eh / KAH-oh… ___… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next, asks Kei te … koe? with a feeling word, and listens to the answer. A yes uses Kei te and a no uses Kāo, kāore. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Kai a Kuia — Kuia’s Kai',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, tamariki! Kei te hiakai koutou?','Hello, children! Are you all hungry?','(opens the door)','T1W1'],
          ['Tama','Āe, kei te hiakai ahau, Kuia!','Yes, I am hungry, Kuia!','(rubs his tummy)','T3W1'],
          ['Hana','Kāo, kāore ahau i te hiakai, Kuia. Kei te hiainu ahau.','No, I am not hungry, Kuia. I am thirsty.','(fans her throat)'],
          ['Kuia Mere','Kei te pīrangi koe ki te miraka, Hana?','Do you want milk, Hana?','(pours a cup)','T3W1'],
          ['Hana','Āe, kia ora, Kuia!','Yes, thank you, Kuia!','(takes the cup)'],
          ['Kuia Mere','Kei te pīrangi koe ki te mīti, Tama?','Do you want meat, Tama?','(holds up a picture card)'],
          ['Tama','Kāo, kāore ahau i te pīrangi ki te mīti. Kei te pīrangi ahau ki te parāoa.','No, I do not want meat. I want bread.','(points at the bread card)','T3W1'],
          ['Kuia Mere','Kei te ngenge koe, Tama?','Are you tired, Tama?','(tilts her head)','T1W2'],
          ['Tama','Kāo, kāore ahau i te ngenge.','No, I am not tired.','(jumps up)'],
          ['Kuia Mere','He aha tēnei, Hana?','What is this, Hana?','(holds up a mystery food card)','T2W1'],
          ['Hana','Kāore ahau i te mōhio, Kuia!','I do not know, Kuia!','(shrugs with open palms)'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) When we say no kindly and honestly, we speak the truth in love. A kind no can leave room for someone else to say yes. That is manaaki.','T1W9'],
          ['Tama','Kia ora mō te kai, Kuia. Ka kite!','Thank you for the food, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘She is not tired.’','Kāore ia i te ngenge.'],['Say in te reo: ‘We are not hungry.’','Kāore tātou i te hiakai.'],['Choose the word for thirsty: Kāore ahau i te ____. (hiainu / hiakai)','hiainu'],['What does Kāore ahau i te mōhio mean?','I do not know.'],['Stretch: say ‘Are you thirsty?’ then answer ‘No, I am not thirsty.’','Kei te hiainu koe? Kāo, kāore ahau i te hiainu.']],
        CE:['Using ahau or koe for she or he instead of ia','Leaving out i te, or using Kei te instead of kāore','Mixing up hiainu (thirsty) and hiakai (hungry)','Not knowing what mōhio means, or losing the long ō','Answering a question with only Kāo and no full sentence'],
        T:'T3 W6 Lesson B',
        LP:{title:'Kāore tātou i te hiakai — We are not hungry',val:'Manaaki · Ephesians 4:15',pat:['Kāore ia i te ________.','Kāore tātou i te pīrangi ki te ________.','Kei te ________ ia? Kāo, kāore ia i te ________.'],swap:'Swap the person: ahau (I) · koe (you) · ia (she/he) · tātou (we all) · koutou (all of you) · rātou (they). Words: hiakai · ngenge · pōuri · harikoa · mauiui · pīrangi. Stretch: hiainu (thirsty) · mōhio (know).'}
      }
    };

    addLessons({ '3.6.A': A, '3.6.B': B });
  }

  /* ──────── WEEK 7 · Everyone (pronouns) ──────── */
  {
    addGlossary({
      "tāua":["you and I (the two of us)","TAH-oo-ah",7,3],
      "māua":["she/he and I (two of us, not including you)","MAH-oo-ah",7,3],
      "rāua":["they two","RAH-oo-ah",7,3],
      "kōrua":["you two","KOH-roo-ah",7,3],
      "mātou":["we (three or more, not including you)","MAH-toh",7,3]
    });

    // ── Lesson A · E kai ana tāua — You and I are eating ──
    const A = {
      P: {
        t:3,
        w:7,
        l:'A',
        ch:'E|k kai|n ana|k tāua.|a*',
        sub:'Who is in the group? Today we meet the words for exactly two people: you and I, she and I, they two, you two.',
        say:'Kia ora everyone! You already know ahau, koe and ia for one person, and tātou, koutou and rātou for three or more. This week we learn the whole family of people words, called pronouns. Today we learn the words for exactly two people: tāua, māua, rāua and kōrua. Tāua means you and I. Māua means she or he and I. Rāua means they two. Kōrua means you two. They go in the same place as ahau: E kai ana tāua. Still no writing: listen, think and speak. Point to the people as you say each word.',
        pron:'tāua = TAH-oo-ah · māua = MAH-oo-ah · rāua = RAH-oo-ah · kōrua = KOH-roo-ah · tātou = TAH-toh · koutou = KOH-toh · rātou = RAH-toh',
        li:'say who is doing something when there are two people, using tāua, māua, rāua and kōrua, in te reo.',
        succ:['I can say the two-person words: tāua, māua, rāua, kōrua.','I can say what two people are doing: E kai ana tāua. E tākaro ana rāua.','I can ask and answer: E aha ana kōrua? E kai ana māua.'],
        wp:'The body is one, though it has many parts.',
        ref:'1 Corinthians 12:12',
        mom:'Te reo has a word for exactly who is in the group: you and I, she and I, the two of them. Noticing exactly who is with us is manaaki. Everybody is a part of the body, and nobody gets left out.',
        q:'Who could you include this week who is sometimes left out?',
        recall:[['How do you say: We are eating (all of us).','E kai ana tātou.'],['How do you say: I am not tired.','Kāore ahau i te ngenge.'],['How do you say: I went home yesterday.','I haere ahau ki te kāinga inanahi.']],
        rtag:'Term 3 Weeks 2, 3 and 6',
        rtxt:'Remember when… Term 3 Weeks 2, 3 and 6 (3 quick prompts)',
        refl:'Who did you notice and include today?',
        next:'Lesson B: we (not including you), mātou, and all the people with all three times',
        vsay:'Say each word and the class echoes, with an action: point to yourself and your partner for tāua (you and I). Point to yourself and a friend who is not your partner for māua (she or he and I). Point to two people over there for rāua. Point at two people in front of you for kōrua. Sweep your arm around the whole class for tātou, point at a group for koutou and away for rātou. Say them slowly: tā-ua, mā-ua, rā-ua, kō-ru-a.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kaiako Rose speaks in English to the audience.',
        xlook:'Prompt 1: tāua goes in the place of ahau, after ana. Prompt 3: māua includes me, but not the person I am talking to.',
        xresc:'Common error: using ahau or tātou for two people, or mixing up tāua and māua. Say: tāua includes the person I am talking to, and māua does not.',
        xpron:'tāua = TAH-oo-ah · māua = MAH-oo-ah · rāua = RAH-oo-ah · kōrua = KOH-roo-ah',
        cur:cu3('Communication (saying and asking who is doing something with two people) · Language Knowledge (the dual pronouns tāua, māua, rāua, kōrua in E … ana, Kei te and I sentences; E aha ana kōrua?) · Cultural Knowledge (te reo names exactly who is in the group, so no one is left out; belonging in the body of Christ)','Recycles Term 1 Weeks 1 and 2, and Term 3 Weeks 1 to 6. Hearing the difference between tāua and māua is hard for beginners: use gestures and pairs. Not every home speaks of whānau with two parents: use pairs of classmates, not family members.'),
        vr:valueRows('1 Corinthians 12:12','Te reo has a word for exactly who is in the group. Noticing exactly who is with us is manaaki, and nobody gets left out.','Who could you include this week who is sometimes left out?','Opening and closing karakia; Kaiako Rose’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Print the weekly vocab card, one per student.','Choose two pairs of students to stand up as models for tāua, māua, rāua and kōrua.','Choose three drama readers (Hana, Tama, Kaiako Rose) and rotate roles.','Practise the gestures yourself: point to you and your partner (tāua), you and someone else (māua), two others (rāua), two in front of you (kōrua).'],
        three:'(1) For exactly two people there are four words: <i>tāua</i> (you and I), <i>māua</i> (she or he and I), <i>rāua</i> (they two), <i>kōrua</i> (you two). (2) <i>tāua</i> includes the person I am talking to, and <i>māua</i> does not. (3) They sit in the same place as <i>ahau</i>: <i>E kai ana tāua</i>, <i>Kei te hiakai māua</i>, <i>I haere rāua</i>.',
        diff:['Echo as a whole class and point to the people for every word. Use only tāua and rāua at first. Pair with a confident partner and allow whispering first.','Complete all steps. Use all ten words, ask and answer in pairs, and say what two classmates are doing.','Explain in English the difference between tāua and māua, use the two-person words with Kei te and I, and quiz a classmate on who is in the group.'],
        look:'The right word for the right people (tāua or māua; rāua or kōrua); the pronoun after ana; the long vowels in tāua, māua, rāua, kōrua; pointing to the people; E aha ana kōrua? asked to two people; a friendly tone that includes everyone.',
        nx:'revisit tāua and māua with students in Starting; add mātou, au and all the people with all three times in Lesson B.',
        rec:'Term 1 Weeks 1 and 2 (Kia ora, Kei te hiakai), and Term 3 Weeks 1 to 6 (Kei te hiakai ahau, E kai ana tātou, I haere ahau ki te kāinga inanahi, Ka tākaro ahau āpōpō, Kāore ahau i te ngenge) are recalled in the warm-up, steps and drama. Lesson B adds mātou and au.'
      },
      D: {
        VOC:['tāua','māua','rāua','kōrua','ahau','koe','ia','tātou','koutou','rātou'],
        STEPS:[
          ['Quick recap, one person: I am eating. You are eating. She is eating.','E|k kai|n ana|k ahau.|a E|k kai|n ana|k koe.|a E|k kai|n ana|k ia.|a','eh KYE AH-nah ah-HOW · eh KYE AH-nah KOH-eh · eh KYE AH-nah EE-ah','Term 3 Week 2: the person goes after ana.',null,'Whole class'],
          ['Quick recap, three or more: We all are eating. You all are eating. They are eating.','E|k kai|n ana|k tātou.|a E|k kai|n ana|k koutou.|a E|k kai|n ana|k rātou.|a','eh KYE AH-nah TAH-toh · eh KYE AH-nah KOH-toh · eh KYE AH-nah RAH-toh','Three or more people: tātou, koutou, rātou.','Sweep your arm around the class for tātou, point at a group for koutou, point away for rātou. You know these already. Say each one with me.','Gesture'],
          ['New word for exactly two people. How would you say: You and I are eating.','E|k kai|n ana|k tāua.|a*','eh KYE AH-nah TAH-oo-ah','tāua = you and I. It includes the person I am talking to.','Point to yourself and to a partner. Tāua means you and I, the two of us, and it includes the person I am talking to. Take a moment… (wait 3 seconds)… E kai ana tāua. Say it with me.','Echo'],
          ['How would you say: She and I are eating. (She is not the person you are talking to.)','E|k kai|n ana|k māua.|a*','eh KYE AH-nah MAH-oo-ah','māua = she or he and I. It does not include the person I am talking to.','Point to yourself and to a friend who is not your partner, then say it. Māua means she or he and I, but not you. Take a moment… (wait 3 seconds)… E kai ana māua. Say it with me.','Echo'],
          ['Hear the difference: You and I are learning. She and I are learning.','E|k ako|n ana|k tāua.|a E|k ako|n ana|k māua.|a','eh AH-kor AH-nah TAH-oo-ah · eh AH-kor AH-nah MAH-oo-ah','tāua includes you. māua leaves you out.','Point at your partner and yourself for tāua. Point at yourself and someone else for māua. Say each sentence with me and move your hand to match.','Gesture'],
          ['They two are playing.','E|k tākaro|n ana|k rāua.|a*','eh TAH-kah-roh AH-nah RAH-oo-ah','rāua = they two (two other people).','Point at two students over there. Rāua means they two. Take a moment… (wait 3 seconds)… E tākaro ana rāua. Say it with me.','Echo'],
          ['You two are playing.','E|k tākaro|n ana|k kōrua.|a*','eh TAH-kah-roh AH-nah KOH-roo-ah','kōrua = you two (two people I am talking to).','Point at two students in front of you. Kōrua means you two. Take a moment… (wait 3 seconds)… E tākaro ana kōrua. Say it with me.','Echo'],
          ['Partner game: point at two classmates and say what they two are doing. Then swap.','E|k aha|q ana|k rāua?|a E|k ___|n ana|k rāua.|a','eh AH-hah AH-nah RAH-oo-ah · eh ___ AH-nah RAH-oo-ah','Use kai, ako, tākaro, haere or kōrero. Swap after three.','Turn to your partner. One person points at two classmates and asks E aha ana rāua? The other mimes what they see and answers E … ana rāua. Swap after three. Take 2 minutes while I listen.','Pairs'],
          ['Ask two people and answer: What are you two doing? We two are eating.','E|k aha|q ana|k kōrua?|a E|k kai|n ana|k māua.|a','eh AH-hah AH-nah KOH-roo-ah · eh KYE AH-nah MAH-oo-ah','Ask with kōrua, answer with māua (two people answering about themselves).',null,'Whole class'],
          ['With feelings: We two are hungry. You two are happy. They two are tired.','Kei~te|k hiakai|q māua.|a Kei~te|k harikoa|q kōrua.|a Kei~te|k ngenge|q rāua.|a','kay teh HEE-ah-kye MAH-oo-ah · kay teh HAH-ree-KOR-ah KOH-roo-ah · kay teh NGEH-ngeh RAH-oo-ah','Kei te + the feeling + the two people.',null,'Whole class'],
          ['The past: She and I went to school yesterday. They two went home yesterday.','I|k haere|n māua|a ki~te|k kura|n inanahi.|q I|k haere|n rāua|a ki~te|k kāinga|n inanahi.|q','ee HIGH-reh MAH-oo-ah kee teh KOO-rah ee-NAH-nah-hee · ee HIGH-reh RAH-oo-ah kee teh KAH-ee-ngah ee-NAH-nah-hee','I + action + the two people, then the place and the time.',null,'Whole class'],
          ['Put it together: Hello. You and I are eating. We two are hungry. Thank you for the food.','Kia~ora.|w E|k kai|n ana|k tāua.|a Kei~te|k hiakai|q māua.|a Kia~ora~mō~te~kai.|w','KEE-ah OR-ah. eh KYE AH-nah TAH-oo-ah. kay teh HEE-ah-kye MAH-oo-ah. KEE-ah OR-ah mor teh KYE','Terms 1 and 3 together.',null,'Whole class'],
          ['Class chain: greet, say what you and the next person are doing, say goodbye.','Kia~ora.|w E|k ___|n ana|k tāua.|a Ka~kite!|w','KEE-ah OR-ah… eh ___ AH-nah TAH-oo-ah… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle. Each person greets the next, and says what the two of them are doing, for example E kōrero ana tāua. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Ngā Hoa — The Friends',cast:CAST_TAMA_KAIAKO,lines:[
          ['Kaiako Rose','Kia ora, kōrua! E aha ana kōrua?','Hello, you two! What are you two doing?','(arms wide)','T1W1'],
          ['Hana','E kai ana māua, Kaiako.','We two are eating, teacher.','(points at herself and Tama)'],
          ['Kaiako Rose','Kei te hiakai kōrua?','Are you two hungry?','(tilts her head)','T1W2'],
          ['Tama','Āe, kei te hiakai māua!','Yes, we two are hungry!','(rubs his tummy)'],
          ['Kaiako Rose','E aha ana rāua?','What are they two doing?','(points at two children offstage)'],
          ['Hana','E tākaro ana rāua.','They two are playing.','(bounces a ball)'],
          ['Kaiako Rose','I haere kōrua ki te kāinga inanahi?','Did you two go home yesterday?','(points behind her)','T3W3'],
          ['Tama','Āe, i haere māua ki te kāinga inanahi.','Yes, we two went home yesterday.','(nods)','T3W3'],
          ['Kaiako Rose','E ako ana tātou ināianei.','We are all learning now.','(sweeps her arm around the class)','T3W2'],
          ['Hana','E ako ana tāua, Kaiako!','You and I are learning, teacher!','(smiles at the teacher)'],
          ['Kaiako Rose','Ka pai, kōrua!','Well done, you two!','(claps her hands)','T1W10'],
          ['Kaiako Rose','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Whether it is two of us or all of us, we belong together, and nobody is left out. Everybody is a part of the body. That is manaaki.','T1W9'],
          ['Hana','Kia ora, Kaiako. Ka kite!','Thank you, teacher. See you!','(Tama waves too)','T1W9']]},
        EX:[['Say in te reo: ‘You and I are eating.’','E kai ana tāua.'],['What does rāua mean?','They two.'],['Choose the word: E kai ana ____. (She and I are eating.) (māua / tāua)','māua'],['Say in te reo: ‘What are you two doing?’','E aha ana kōrua?'],['Stretch: say ‘We two are hungry. They two went home yesterday.’','Kei te hiakai māua. I haere rāua ki te kāinga inanahi.']],
        CE:['Using ahau, koe or tātou for exactly two people, or leaving out ana','Mixing up rāua (they two) and rātou (they, three or more)','Mixing up tāua (you and I) and māua (she or he and I)','Using koutou for two people instead of kōrua','Putting the person before the action instead of after ana'],
        T:'T3 W7 Lesson A',
        LP:{title:'E kai ana tāua — You and I are eating',val:'Manaaki · 1 Corinthians 12:12',pat:['E ________ ana tāua.','Kei te ________ māua.','E aha ana kōrua? E ________ ana rāua.'],swap:'Two people: tāua (you and I) · māua (she/he and I) · rāua (they two) · kōrua (you two). Three or more: tātou · koutou · rātou. One person: ahau · koe · ia. Actions: kai · ako · tākaro · haere · kōrero.'}
      }
    };

    // ── Lesson B · Kei te hiakai mātou — We are hungry ──
    const B = {
      P: {
        t:3,
        w:7,
        l:'B',
        ch:'Kei~te|k hiakai|q mātou.|a*',
        sub:'Who is in the group? Today we add mātou (we, but not you) and au, and use all the people words with every time.',
        say:'Kia ora everyone! Last lesson we learned the four words for exactly two people: tāua, māua, rāua and kōrua. Today we meet two more words. Mātou means we, three or more, but not including you. Tātou means we, including you. You say mātou every day in our karakia: E whakawhetai ana mātou. We also add au, a short way to say ahau. Then we use all the people words with Kei te, E … ana, I and Ka. Still no writing: listen, think and speak. Draw a circle around the people in each word.',
        pron:'mātou = MAH-toh · tātou = TAH-toh · au = OW · ahau = ah-HOW · koutou = KOH-toh · rātou = RAH-toh',
        li:'say who is doing something, with all the people words (one, two, and three or more), and use mātou and au, in te reo.',
        succ:['I can say mātou and tātou and know the difference: E kai ana mātou. E kai ana tātou.','I can use the right word for one, two or many people: Kei te hiakai koe. Kei te hiakai kōrua. Kei te hiakai koutou.','I can use the people words with other times: I haere mātou. Ka tākaro tāua āpōpō.'],
        wp:'Though we are many, in Christ we are one body.',
        ref:'Romans 12:5',
        mom:'A big family, a church or a class is made of different people who belong to each other. Using the right word for each person helps everyone feel they belong. Each person is a different part of one body.',
        q:'Who do you sit with at kai, and who could you invite to join?',
        recall:[['How do you say: You and I are eating.','E kai ana tāua.'],['How do you say: What are you two doing?','E aha ana kōrua?'],['How do you say: She is not hungry.','Kāore ia i te hiakai.'],['How do you say: I will play tomorrow.','Ka tākaro ahau āpōpō.']],
        rtag:'Lesson A and earlier',
        rtxt:'Remember when… Lesson A and earlier (4 quick prompts)',
        refl:'Who did you invite or include today?',
        next:'Week 8: Manaaki in action (Haere mai ki te kai! Nau mai!)',
        vsay:'Same vocab card as Lesson A, with two stretch words today: mātou (we, not including you) and au (a short way to say ahau). Draw a circle around your group with the listener outside it for mātou. Draw a circle around everyone including the listener for tātou. Point to yourself for au. Mātou = MAH-toh. Au = OW.',
        dsay:'One line per click. The actor reads aloud and the class echoes. Press T for English. In line 12 Kuia Mere speaks in English to the audience.',
        xlook:'Prompt 1: mātou goes after ana. Prompt 2: tātou includes the person I am talking to, and mātou does not.',
        xresc:'Common error: mixing up mātou and tātou, or kōrua and rāua. Say: tātou includes you, mātou does not; kōrua is you two, and rāua is they two.',
        xpron:'mātou = MAH-toh · tātou = TAH-toh · au = OW',
        cur:cu3('Communication (saying and asking who is doing something, with one, two or many people) · Language Knowledge (the full pronoun family: au/ahau, koe, ia, tāua, māua, rāua, kōrua, tātou, mātou, koutou, rātou, with Kei te, E … ana, I and Ka) · Cultural Knowledge (the karakia says mātou; the inclusive tātou and the exclusive mātou; belonging)','Recycles Lesson A, Term 1 Week 9 (au) and Term 3 Weeks 1 to 6. Hear mātou in the opening karakia (E whakawhetai ana mātou). Please have a fluent speaker confirm Kei te hiakai au, and the use of au as a short form of ahau.'),
        vr:valueRows('Romans 12:5','A big family, a church or a class is made of different people who belong to each other. Using the right word for each person helps everyone feel they belong.','Who do you sit with at kai, and who could you invite to join?','Opening and closing karakia; Kuia Mere’s English line in the drama; Soli Deo Gloria.',MV3),
        prep:['Open the lesson slides and check the projector; press N for presenter notes.','Use the same vocab card as Lesson A. Add mātou (we, not including you) and au (a short way to say ahau) as the two stretch words, written or spoken.','Draw the pronoun family on the board as one, two and three or more.','Choose three drama readers (Hana, Tama, Kuia Mere) and rotate roles.','Practise the circles: tātou has you inside the circle, mātou has you outside it.'],
        three:'(1) <i>tātou</i> means we, and it includes the person I am talking to. <i>mātou</i> means we, and it does not. (2) The words for two (<i>tāua, māua, rāua, kōrua</i>) and for three or more (<i>tātou, mātou, koutou, rātou</i>) sit in the same place as <i>ahau</i>. (3) <i>au</i> is a short way to say <i>ahau</i>: <i>Kei te hiakai au</i>.',
        diff:['Echo as a whole class and draw the circles for every word. Use only ahau, koe, tāua and tātou at first. Pair with a confident partner and allow whispering first.','Complete all steps. Use all the people words with Kei te, E … ana and I in pairs.','Add mātou and au. Explain in English the difference between tātou and mātou, and quiz a classmate on who is in the group.'],
        look:'The right word for the right people (one, two, or three or more); the difference between tātou and mātou; the pronoun after ana or the feeling; au as a short form of ahau; the right time word with the right tense; a welcoming tone.',
        nx:'revisit the people words with students in Starting; move to Week 8 (Manaaki in action).',
        rec:'Lesson A (E kai ana tāua, E aha ana kōrua?), Term 1 Weeks 1 and 9 (Kia ora, au, Kia ora mō te kai), and Term 3 Weeks 1 to 6 (Kei te pīrangi koutou ki te parāoa?, E kai ana tātou, Ka tākaro tāua āpōpō) are recalled in the warm-up, steps and drama. Week 8 will recall the people words in hosting and manaaki.'
      },
      D: {
        VOC:[...A.D.VOC,'mātou','au'],
        STEPS:[
          ['Quick recap, two people: You and I are eating. She and I are eating. They two are eating. You two are eating.','E|k kai|n ana|k tāua.|a E|k kai|n ana|k māua.|a E|k kai|n ana|k rāua.|a E|k kai|n ana|k kōrua.|a','eh KYE AH-nah TAH-oo-ah · eh KYE AH-nah MAH-oo-ah · eh KYE AH-nah RAH-oo-ah · eh KYE AH-nah KOH-roo-ah','Lesson A: the four words for two people.',null,'Gesture'],
          ['New word for three or more people: mātou means we, but not you. How would you say: We are eating. (We do not include you.)','E|k kai|n ana|k mātou.|a*','eh KYE AH-nah MAH-toh','mātou = we, three or more, not including you.','Draw a circle with your group inside and the listener outside. Mātou means we, but not you. Take a moment… (wait 3 seconds)… E kai ana mātou. Say it with me.','Echo'],
          ['Hear the difference: We all are eating (you too). We are eating (not you).','E|k kai|n ana|k tātou.|a E|k kai|n ana|k mātou.|a','eh KYE AH-nah TAH-toh · eh KYE AH-nah MAH-toh','tātou has you inside the circle. mātou has you outside it.','Draw the circle around everyone for tātou. Draw it so the listener is outside for mātou. Say each sentence with me and move your hand to match.','Gesture'],
          ['Our karakia: We give thanks.','E|k whakawhetai|n ana|k mātou.|a','eh fah-kah-FEH-tye AH-nah MAH-toh','In our karakia we say mātou: the people praying, not God.','You already say this every lesson in our karakia. E whakawhetai ana mātou. Mātou means we, the people praying. Say it with me.','Echo'],
          ['New word: au is a short way to say ahau. How would you say: I am hungry. (use au)','Kei~te|k hiakai|q au.|a*','kay teh HEE-ah-kye OW','au = ahau. Both mean I.','Point to yourself. Au is a short way to say ahau. Kei te hiakai ahau and Kei te hiakai au mean the same. Take a moment… (wait 3 seconds)… Kei te hiakai au. Say it with me.','Echo'],
          ['Partner game: your partner points at one person, two people or a group, and you say what they are doing. Then swap.','E|k ___|n ana|k ___.|a','eh ___ AH-nah ___','Use ahau, koe, ia, tāua, māua, rāua, kōrua, tātou, mātou, koutou, rātou. Swap after three.','Turn to your partner. One person points at one person, two people or a group. The other says E … ana with the right word for the people. Swap after three. Take 2 minutes while I listen.','Pairs'],
          ['The whole family: I, you, she, you and I, she and I, they two, you two, we all, we, you all, they.','ahau|a koe|a ia|a tāua|a māua|a rāua|a kōrua|a tātou|a mātou|a koutou|a rātou|a','ah-HOW · KOH-eh · EE-ah · TAH-oo-ah · MAH-oo-ah · RAH-oo-ah · KOH-roo-ah · TAH-toh · MAH-toh · KOH-toh · RAH-toh','One person, two people, three or more: the whole pronoun family.','Say them in three groups with me: one person, then two people, then three or more. Point and use your fingers to show how many.','Gesture'],
          ['With feelings: We (not you) are happy. You two are tired. They two are hungry.','Kei~te|k harikoa|q mātou.|a Kei~te|k ngenge|q kōrua.|a Kei~te|k hiakai|q rāua.|a','kay teh HAH-ree-KOR-ah MAH-toh · kay teh NGEH-ngeh KOH-roo-ah · kay teh HEE-ah-kye RAH-oo-ah','Kei te + the feeling + the people.',null,'Whole class'],
          ['The past: We (not you) went home yesterday. They (three or more) ate this morning.','I|k haere|n mātou|a ki~te|k kāinga|n inanahi.|q I|k kai|n rātou|a i~te|k ata.|q','ee HIGH-reh MAH-toh kee teh KAH-ee-ngah ee-NAH-nah-hee · ee KYE RAH-toh ee teh AH-tah','I + action + the people, then place and time.',null,'Whole class'],
          ['The future: You and I will play tomorrow. You two will go to school tomorrow.','Ka|k tākaro|n tāua|a āpōpō.|q Ka|k haere|n kōrua|a ki~te|k kura|n āpōpō.|q','kah TAH-kah-roh TAH-oo-ah AH-por-por · kah HIGH-reh KOH-roo-ah kee teh KOO-rah AH-por-por','Ka + action + the people, then place and time.',null,'Whole class'],
          ['Put it together: Hello. We (not you) are eating. We are hungry. You and I will go home tomorrow. Thank you.','Kia~ora.|w E|k kai|n ana|k mātou.|a Kei~te|k hiakai|q mātou.|a Ka|k haere|n tāua|a ki~te|k kāinga|n āpōpō.|q Kia~ora.|w','KEE-ah OR-ah. eh KYE AH-nah MAH-toh. kay teh HEE-ah-kye MAH-toh. kah HIGH-reh TAH-oo-ah kee teh KAH-ee-ngah AH-por-por. KEE-ah OR-ah','Terms 1 and 3 together.',null,'Whole class'],
          ['Class chain: greet, ask the next two people what they are doing, they answer, say goodbye.','Kia~ora.|w E|k aha|q ana|k kōrua?|a E|k ___|n ana|k māua.|a Ka~kite!|w','KEE-ah OR-ah… eh AH-hah AH-nah KOH-roo-ah… eh ___ AH-nah MAH-oo-ah… kah KEE-teh','Real conversation, nothing memorised.','Pass it around the circle in pairs. Each pair greets the next pair, asks E aha ana kōrua? and listens to the answer. If you stumble, that’s my fault, not yours.','Individual']],
        DR:{title:'Te Whānau — The Family',cast:CAST_TAMA_KUIA,lines:[
          ['Kuia Mere','Kia ora, kōrua! Haere mai ki te kai!','Hello, you two! Come in for kai!','(opens the door)','T1W1'],
          ['Hana','Kia ora, Kuia! Kei te hiakai māua.','Hello, Kuia! We two are hungry.','(points at herself and Tama)'],
          ['Tama','Kei te hiakai au, Kuia!','I am hungry, Kuia!','(rubs his tummy)'],
          ['Kuia Mere','E aha ana rātou?','What are they doing?','(points at the cousins outside)'],
          ['Tama','E tākaro ana rātou, Kuia.','They are playing, Kuia.','(points outside)'],
          ['Kuia Mere','Kei te pīrangi koutou ki te parāoa?','Do you all want bread?','(holds up the plate)','T3W1'],
          ['Hana','Āe, kia ora, Kuia!','Yes, thank you, Kuia!','(takes a piece)','T3W1'],
          ['Kuia Mere','E kai ana tātou ināianei!','We are all eating now!','(sits down with them)','T3W2'],
          ['Hana','Ka tākaro tāua āpōpō, Tama?','Will you and I play tomorrow, Tama?','(smiles at him)','T3W4'],
          ['Tama','Āe! Ka tākaro tāua!','Yes! You and I will play!','(bounces a ball)','T3W4'],
          ['Kuia Mere','E whakawhetai ana mātou mō te kai.','We give thanks for the food.','(hands together)'],
          ['Kuia Mere','E aroha ana te Atua ki a koutou.','God loves all of you.','(to the audience, in English) Whether it is two of us, a few of us or the whole whānau, we belong together, and everybody has a place at the table. That is manaaki.','T1W9'],
          ['Tama','Kia ora mō te kai, Kuia. Ka kite!','Thank you for the food, Kuia. See you!','(Hana waves too)','T1W9']]},
        EX:[['Say in te reo: ‘We are eating. (not including you)’','E kai ana mātou.'],['What is the difference between tātou and mātou?','tātou includes the person you are talking to. mātou does not.'],['Choose the word: Kei te hiakai ____. (You two are hungry.) (kōrua / rāua)','kōrua'],['Say in te reo: ‘You and I will play tomorrow.’','Ka tākaro tāua āpōpō.'],['Stretch: say ‘I am hungry’ in two ways.','Kei te hiakai ahau. / Kei te hiakai au.']],
        CE:['Using tātou when the person being spoken to is not included','Mixing up tātou (we, including you) and mātou (we, not including you)','Mixing up kōrua (you two) and rāua (they two)','Using ahau or koe for you and I, instead of tāua','Not knowing that au and ahau mean the same'],
        T:'T3 W7 Lesson B',
        LP:{title:'Kei te hiakai mātou — We are hungry',val:'Manaaki · Romans 12:5',pat:['Kei te ________ mātou.','E ________ ana tātou.','Ka ________ tāua āpōpō.'],swap:'One: ahau (au) · koe · ia. Two: tāua · māua · rāua · kōrua. Three or more: tātou (including you) · mātou (not including you) · koutou · rātou. Times: Kei te · E … ana · I · Ka.'}
      }
    };

    addLessons({ '3.7.A': A, '3.7.B': B });
  }


})();
