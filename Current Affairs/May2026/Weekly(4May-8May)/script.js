// ============================================================================
// QUIZ DATA DEFINITION (74 Questions about Weekly Current Affairs 4May - 8 May)
// ============================================================================
const quizData = [
    {
        id: 1,
        question: "हाल ही में 'खुआरेल' (Khuarel) मोबाइल एप्लीकेशन का शुभारंभ कहाँ किया गया है?",
        questionAudio: "audio7/Question_1.mp3",
        options: [
            { text: "हिमाचल प्रदेश (Himachal Pradesh)", correct: false },
            { text: "लद्दाख (Ladakh)", correct: false },
            { text: "मिजोरम (Mizoram)", correct: true },
            { text: "उत्तराखंड (Uttarakhand)", correct: false }
        ]
    },
    {
        id: 2,
        question: "हाल ही में E-PRAAPTI पोर्टल किसने लॉन्च किया है?",
        questionAudio: "audio7/Question_2.mp3",
        options: [
            { text: "भारतीय रिज़र्व बैंक (Reserve Bank of India)", correct: false },
            { text: "कर्मचारी भविष्य निधि संगठन (EPFO)", correct: true },
            { text: "वित्त मंत्रालय (Ministry of Finance)", correct: false },
            { text: "नीति आयोग (NITI Aayog)", correct: false }
        ]
    },
    {
        id: 3,
        question: "हाल ही में दुनिया की पहली जीरो एमिशन वाली कोल बैटरी किसने पेश की है?",
        questionAudio: "audio7/Question_3.mp3",
        options: [
            { text: "चीन (China)", correct: true },
            { text: "अमेरिका (USA)", correct: false },
            { text: "जापान (Japan)", correct: false },
            { text: "जर्मनी (Germany)", correct: false }
        ]
    },
    {
        id: 4,
        question: "हाल ही में भारत-कंबोडिया द्विपक्षीय सैन्य अभ्यास 'सिनबैक्स' (CINBAX) का कौन सा संस्करण आयोजित किया जाएगा?",
        questionAudio: "audio7/Question_4.mp3",
        options: [
            { text: "पहला (First)", correct: false },
            { text: "तीसरा (Third)", correct: false },
            { text: "दूसरा (Second)", correct: true },
            { text: "चौथा (Fourth)", correct: false }
        ]
    },
    {
        id: 5,
        question: "हाल ही में 6,000 लोगों ने एक साथ भुजंगासन कर एशिया रिकॉर्ड कहाँ बनाया है?",
        questionAudio: "audio7/Question_5.mp3",
        options: [
            { text: "दिल्ली (Delhi)", correct: false },
            { text: "भोपाल (Bhopal)", correct: false },
            { text: "जयपुर (Jaipur)", correct: false },
            { text: "हैदराबाद (Hyderabad)", correct: true }
        ]
    },
    {
        id: 6,
        question: "हाल ही में प्रसार भारती का अध्यक्ष किसे नियुक्त किया गया है?",
        questionAudio: "audio7/Question_6.mp3",
        options: [
            { text: "प्रसून जोशी (Prasoon Joshi)", correct: true },
            { text: "शेखर कपूर (Shekhar Kapur)", correct: false },
            { text: "श्याम बेनेगल (Shyam Benegal)", correct: false },
            { text: "अनुपम खेर (Anupam Kher)", correct: false }
        ]
    },
    {
        id: 7,
        question: "हाल ही में रक्षा लेखा महानियंत्रक (CGDA) किसे नियुक्त किया गया है?",
        questionAudio: "audio7/Question_7.mp3",
        options: [
            { text: "अजय कुमार (Ajay Kumar)", correct: false },
            { text: "अनुग्रह नारायण दास (Anugrah Narayan Das)", correct: true },
            { text: "राजीव मेहता (Rajiv Mehta)", correct: false },
            { text: "संजय सिंह (Sanjay Singh)", correct: false }
        ]
    },
    {
        id: 8,
        question: "हाल ही में देश का पहला कागजरहित न्यायिक राज्य कौन सा बना है?",
        questionAudio: "audio7/Question_8.mp3",
        options: [
            { text: "गुजरात (Gujarat)", correct: false },
            { text: "महाराष्ट्र (Maharashtra)", correct: false },
            { text: "केरल (Kerala)", correct: false },
            { text: "सिक्किम (Sikkim)", correct: true }
        ]
    },
    {
        id: 9,
        question: "हाल ही में किस राज्य के इशांक सिंह ने पाक जलडमरूमध्य को पार करने वाले सबसे कम उम्र के तैराक बनने का रिकॉर्ड बनाया है?",
        questionAudio: "audio7/Question_9.mp3",
        options: [
            { text: "बिहार (Bihar)", correct: false },
            { text: "उत्तर प्रदेश (Uttar Pradesh)", correct: false },
            { text: "झारखण्ड (Jharkhand)", correct: true },
            { text: "ओडिशा (Odisha)", correct: false }
        ]
    },
    {
        id: 10,
        question: "हाल ही में नीति आयोग के पूर्णकालिक सदस्य किसे नियुक्त किया गया है?",
        questionAudio: "audio7/Question_10.mp3",
        options: [
            { text: "अमिताभ कांत और अभिषेक चड्ढा (Amitabh Kant and Abhishek Chaddha)", correct: false },
            { text: "राजीव कुमार और अमन कुमार श्रीवास्तव (Rajiv Kumar and Aman Kumar Srivastava)", correct: false },
            { text: "रमेश चंद्र और डॉ. वी. के. सिंह (Ramesh Chand and Dr. K.V. Singh)", correct: false },
            { text: "डॉ. आर. बालसुब्रमण्यम और डॉ. जोरम अनिया (Dr. R. Balasubramanian and Dr. Joram Ania)", correct: true }
        ]
    },
    {
        id: 11,
        question: "हाल ही में 2026-27 के लिए एस्टीमेट्स कमेटी का अध्यक्ष किसे नियुक्त किया गया है?",
        questionAudio: "audio7/Question_11.mp3",
        options: [
            { text: "डॉ. संजय जायसवाल (Dr. Sanjay Jaiswal)", correct: true },
            { text: "भूपेंद्र यादव (Bhupender Yadav)", correct: false },
            { text: "फग्गन सिंह कुलस्ते (Faggan Singh Kulaste)", correct: false },
            { text: "के. सी. वेणुगोपाल (K.C. Venugopal)", correct: false }
        ]
    },
    {
        id: 12,
        question: "हाल ही में देश का पहला पोर्टेबल MRI सिस्टम कहाँ शुरू किया गया है?",
        questionAudio: "audio7/Question_12.mp3",
        options: [
            { text: "PGIMER, चंडीगढ़ (PGIMER, Chandigarh)", correct: false },
            { text: "अपोलो हॉस्पिटल, दिल्ली (Apollo Hospital, Delhi)", correct: false },
            { text: "एम्स ऋषिकेश (AIIMS Rishikesh)", correct: false },
            { text: "एम्स दिल्ली (AIIMS Delhi)", correct: true }
        ]
    },
    {
        id: 13,
        question: "हाल ही में चित्र पूर्णिमा उत्सव 2026 किस समुदाय द्वारा मनाया गया है?",
        questionAudio: "audio7/Question_13.mp3",
        options: [
            { text: "बंगाली (Bengali)", correct: false },
            { text: "तमिल (Tamil)", correct: true },
            { text: "गुजराती (Gujarati)", correct: false },
            { text: "मराठी (Marathi)", correct: false }
        ]
    },
    {
        id: 14,
        question: "हाल ही में मैड्रिड ओपन 2026 का महिला एकल खिताब किसने जीता है?",
        questionAudio: "audio7/Question_14.mp3",
        options: [
            { text: "इगा श्वीआतेक (Iga Swiatek)", correct: false },
            { text: "एरीना सबालेंका (Aryna Sabalenka)", correct: false },
            { text: "मार्ता कोस्त्युक (Marta Kostyuk)", correct: true },
            { text: "मिरा एंड्रीवा (Mirra Andreeva)", correct: false }
        ]
    },
    {
        id: 15,
        question: "हाल ही में किस देश ने पानी के नीचे दुनिया का सबसे बड़ा राष्ट्रीय ध्वज फहराकर गिनीज वर्ल्ड रिकॉर्ड स्थापित किया है?",
        questionAudio: "audio7/Question_15.mp3",
        options: [
            { text: "भारत (India)", correct: true },
            { text: "चीन (China)", correct: false },
            { text: "जपान (Japan)", correct: false },
            { text: "ब्राजील (Brazil)", correct: false }
        ]
    },
    {
        id: 16,
        question: "हाल ही में इन्फोसिस का गैर-कार्यकारी उपाध्यक्ष किसे नियुक्त किया गया है?",
        questionAudio: "audio7/Question_16.mp3",
        options: [
            { text: "सलिल पारेख (Salil Parekh)", correct: false },
            { text: "नितिन परांजपे (Nitin Paranjpe)", correct: true },
            { text: "मोहनदास पाई (Mohandas Pai)", correct: false },
            { text: "नारायण सिंह (Narayan Singh)", correct: false }
        ]
    },
    {
        id: 17,
        question: "हाल ही में मेयोन ज्वालामुखी कहाँ फटा है?",
        questionAudio: "audio7/Question_17.mp3",
        options: [
            { text: "जापान (Japan)", correct: false },
            { text: "इंडोनेशिया (Indonesia)", correct: false },
            { text: "फिलीपींस (Philippines)", correct: true },
            { text: "थाईलैंड (Thailand)", correct: false }
        ]
    },
    {
        id: 18,
        question: "हाल ही में किस देश के राष्ट्रपति तो लैम भारत यात्रा पर आए हैं?",
        questionAudio: "audio7/Question_18.mp3",
        options: [
            { text: "लाओस (Laos)", correct: false },
            { text: "दक्षिण कोरिया (South Korea)", correct: false },
            { text: "थाईलैंड (Thailand)", correct: false },
            { text: "वियतनाम (Vietnam)", correct: true }
        ]
    },
    {
        id: 19,
        question: "हाल ही में विश्व प्रेस स्वतंत्रता दिवस 2026 कब मनाया गया?",
        questionAudio: "audio7/Question_19.mp3",
        options: [
            { text: "1 मई (May 1)", correct: false },
            { text: "2 मई (May 2)", correct: false },
            { text: "3 मई (May 3)", correct: true },
            { text: "4 मई (May 4)", correct: false }
        ]
    },
    {
        id: 20,
        question: "हाल ही में जारी 2026 विश्व प्रेस स्वतंत्रता सूचकांक में भारत ने कौन सा स्थान हासिल किया है?",
        questionAudio: "audio7/Question_20.mp3",
        options: [
            { text: "150वां (150th)", correct: false },
            { text: "157वां (157th)", correct: true },
            { text: "160वां (160th)", correct: false },
            { text: "165वां (165th)", correct: false }
        ]
    },
    {
        id: 21,
        question: "हाल ही में पुरुष पोल वॉल्ट स्पर्धा में राष्ट्रीय रिकॉर्ड किसने बनाया है?",
        questionAudio: "audio7/Question_21.mp3",
        options: [
            { text: "देव कुमार मीणा (Dev Kumar Meena)", correct: false },
            { text: "के रीगन जी (K. Reagan G.)", correct: false },
            { text: "कुलदीप कुमार (Kuldeep Kumar)", correct: true },
            { text: "विनीत चौहान (Vineet Chauhan)", correct: false }
        ]
    },
    {
        id: 22,
        question: "हाल ही में लगातार पांच एटीपी मास्टर्स 1000 इवेंट जीतने वाले पहले पुरुष खिलाड़ी कौन बने हैं?",
        questionAudio: "audio7/Question_22.mp3",
        options: [
            { text: "अलेक्जेंडर ज्वेरेव (Alexander Zverev)", correct: false },
            { text: "कार्लोस अल्काराज़ (Carlos Alcaraz)", correct: false },
            { text: "डेनियल मेदवेदेव (Daniil Medvedev)", correct: false },
            { text: "जैनिक सिनर (Jannik Sinner)", correct: true }
        ]
    },
    {
        id: 23,
        question: "हाल ही में रक्षा मंत्री राजनाथ सिंह ने उत्तर प्रौद्योगिकी संगोष्ठी का उद्घाटन कहाँ किया है?",
        questionAudio: "audio7/Question_23.mp3",
        options: [
            { text: "प्रयागराज (Prayagraj)", correct: true },
            { text: "देहरादून (Dehradun)", correct: false },
            { text: "नई दिल्ली (New Delhi)", correct: false },
            { text: "जयपुर (Jaipur)", correct: false }
        ]
    },
    {
        id: 24,
        question: "हाल ही में QS एक्जीक्यूटिव MBA रैंकिंग 2026 में वैश्विक शीर्ष 100 में शामिल होने वाला एकमात्र भारतीय संस्थान कौन सा है?",
        questionAudio: "audio7/Question_24.mp3",
        options: [
            { text: "IIM अहमदाबाद (IIM Ahmedabad)", correct: false },
            { text: "IIM बैंगलोर (IIM Bangalore)", correct: true },
            { text: "IIM लखनऊ (IIM Lucknow)", correct: false },
            { text: "IIM कोलकाता (IIM Kolkata)", correct: false }
        ]
    },
    {
        id: 25,
        question: "हाल ही में भारत को किस देश की विशेष 301 रिपोर्ट में प्राथमिकता निगरानी सूची में रखा गया है?",
        questionAudio: "audio7/Question_25.mp3",
        options: [
            { text: "ब्रिटेन (Britain)", correct: false },
            { text: "ऑस्ट्रेलिया (Australia)", correct: false },
            { text: "संयुक्त राज्य अमेरिका (United States of America)", correct: true },
            { text: "कनाडा (Canada)", correct: false }
        ]
    },
    {
        id: 26,
        question: "हाल ही में वार्षिक महुआ फूल महोत्सव 2026 कहाँ मनाया गया है?",
        questionAudio: "audio7/Question_26.mp3",
        options: [
            { text: "झारखण्ड (Jharkhand)", correct: false },
            { text: "मध्य प्रदेश (Madhya Pradesh)", correct: false },
            { text: "छत्तीसगढ़ (Chhattisgarh)", correct: false },
            { text: "तेलंगाना (Telangana)", correct: true }
        ]
    },
    {
        id: 27,
        question: "हाल ही में किस देश ने हॉर्मुज जलसंधि में 'प्रोजект फ्रीडम' लॉन्च किया है?",
        questionAudio: "audio7/Question_27.mp3",
        options: [
            { text: "फ्रांस (France)", correct: false },
            { text: "ईरान (Iran)", correct: false },
            { text: "ब्रिटेन (Britain)", correct: false },
            { text: "संयुक्त राज्य अमेरिका (United States of America)", correct: true }
        ]
    },
    {
        id: 28,
        question: "हाल ही में भारत ने किसके द्वारा निर्मित लंबी दूरी की हाइपरसोनिक एंटी-शिप मिसाइल (LR-AShM) का उड़ान परीक्षण किया है?",
        questionAudio: "audio7/Question_28.mp3",
        options: [
            { text: "रक्षा अनुसंधान और विकास संगठन (DRDO)", correct: true },
            { text: "इसरो (ISRO)", correct: false },
            { text: "हिन्दुस्तान एयरोनॉटिक्स लिमिटेड (HAL)", correct: false },
            { text: "भारत इलेक्ट्रॉनिक्स लिमिटेड (BEL)", correct: false }
        ]
    },
    {
        id: 29,
        question: "हाल ही में किसने एशिया-प्रशांत के लिए 70 अरब डॉलर की कनेक्टिविटी योजना का अनावरण किया है?",
        questionAudio: "audio7/Question_29.mp3",
        options: [
            { text: "विश्व बैंक (World Bank)", correct: false },
            { text: "एशियाई विकास बैंक (Asian Development Bank)", correct: true },
            { text: "अंतर्राष्ट्रीय मुद्रा कोष (International Monetary Fund)", correct: false },
            { text: "संयुक्त राष्ट्र (United Nations)", correct: false }
        ]
    },
    {
        id: 30,
        question: "हाल ही में भारत के पहले मोती पालन क्लस्टर के रूप में किसे नामित किया गया है?",
        questionAudio: "audio7/Question_30.mp3",
        options: [
            { text: "रांची (Ranchi)", correct: false },
            { text: "पटना (Patna)", correct: false },
            { text: "भोपाल (Bhopal)", correct: false },
            { text: "हजारीबाग (Hazaribagh)", correct: true }
        ]
    },
    {
        id: 31,
        question: "हाल ही में किसकी जन्म शताब्दी को चिह्नित करने के लिए इंडिया पोस्ट ने एक विशेष मोहरात्मक श्रद्धांजलि का अनावरण किया है?",
        questionAudio: "audio7/Question_31.mp3",
        options: [
            { text: "आर. के. लक्ष्मण (R.K. Laxman)", correct: false },
            { text: "मारियो मिरांडा (Mario Miranda)", correct: true },
            { text: "अमृता शेरगिल (Amrita Sher-Gil)", correct: false },
            { text: "सत्यजीत राय (Satyajit Ray)", correct: false }
        ]
    },
    {
        id: 32,
        question: "हाल ही में सैविल्स के ग्रोथ हब्स इंडेक्स में 2035 तक दुनिया का सबसे तेजी से बढ़ने वाला बड़ा शहर कौन सा बना है?",
        questionAudio: "audio7/Question_32.mp3",
        options: [
            { text: "मुंबई (Mumbai)", correct: false },
            { text: "बैंगलोर (Bengaluru)", correct: true },
            { text: "दिल्ली (Delhi)", correct: false },
            { text: "हैदराबाद (Hyderabad)", correct: false }
        ]
    },
    {
        id: 33,
        question: "हाल ही में भारतीय पुरुष बैडमिंटन टीम ने थॉमस कप 2026 में कौन सा पदक जीता है?",
        questionAudio: "audio7/Question_33.mp3",
        options: [
            { text: "स्वर्ण पदक (Gold Medal)", correct: false },
            { text: "रजत पदक (Silver Medal)", correct: false },
            { text: "कांस्य पदक (Bronze Medal)", correct: true },
            { text: "कोई पदक नहीं (No Medal)", correct: false }
        ]
    },
    {
        id: 34,
        question: "हाल ही में पश्चिम बंगाल विधानसभा चुनाव 2026 किसने जीता है?",
        questionAudio: "audio7/Question_34.mp3",
        options: [
            { text: "तृणमूल कांग्रेस (Trinamool Congress)", correct: false },
            { text: "भारतीय राष्ट्रीय कांग्रेस (Indian National Congress)", correct: false },
            { text: "भारतीय जनता पार्टी (Bharatiya Janata Party)", correct: true },
            { text: "मार्क्सवादी कम्युनिस्ट पार्टी (Communist Party of India - Marxist)", correct: false }
        ]
    },
    {
        id: 35,
        question: "हाल ही में पहला प्रोसोपिस जूलिफ्लोरा आधारित हरित मेथनॉल संयंत्र कहाँ शुरू होगा?",
        questionAudio: "audio7/Question_35.mp3",
        options: [
            { text: "कांडला (Kandla)", correct: true },
            { text: "मुंबई (Mumbai)", correct: false },
            { text: "चेन्नई (Chennai)", correct: false },
            { text: "विशाखापत्तनम (Visakhapatnam)", correct: false }
        ]
    },
    {
        id: 36,
        question: "हाल ही में 2025 में भारत का शीर्ष समुद्री मछली उत्पादक राज्य कौन सा बना है?",
        questionAudio: "audio7/Question_36.mp3",
        options: [
            { text: "गुजरात (Gujarat)", correct: false },
            { text: "तमिलनाडु (Tamil Nadu)", correct: true },
            { text: "महाराष्ट्र (Maharashtra)", correct: false },
            { text: "केरल (Kerala)", correct: false }
        ]
    },
    {
        id: 37,
        question: "हाल ही में किस भारतीय को चित्रित रिपोर्टिंग और टिप्पणी श्रेणी में पुलित्जर पुरस्कार 2026 से सम्मानित किया गया है?",
        questionAudio: "audio7/Question_37.mp3",
        options: [
            { text: "आनंद आरके और सुपर्णा शर्मा (Anand RK and Suparna Sharma)", correct: true },
            { text: "रवीश कुमार और अंजना ओम कश्यप (Ravish Kumar and Anjana Om Kashyap)", correct: false },
            { text: "शेखर गुप्ता और बरखा दत्त (Shekhar Gupta and Barkha Dutt)", correct: false },
            { text: "अर्णब गोस्वामी और पुण्य प्रसून वाजपेयी (Arnab Goswami and Punya Prasun Bajpai)", correct: false }
        ]
    },
    {
        id: 38,
        question: "हाल ही में दुर्लभ रोगों पर राष्ट्रीय सम्मेलन का उद्घाटन कहाँ किया गया है?",
        questionAudio: "audio7/Question_38.mp3",
        options: [
            { text: "मुंबई (Mumbai)", correct: false },
            { text: "चेन्नई (Chennai)", correct: false },
            { text: "नई दिल्ली (New Delhi)", correct: true },
            { text: "हैदराबाद (Hyderabad)", correct: false }
        ]
    },
    {
        id: 39,
        question: "हाल ही में बायोकॉन का उत्तराधिकारी किसे नियुक्त किया गया है?",
        questionAudio: "audio7/Question_39.mp3",
        options: [
            { text: "रवीना शेखर (Raveena Shekhar)", correct: false },
            { text: "संजय कुमार (Sanjay Kumar)", correct: false },
            { text: "अरुणा रेड्डी (Aruna Reddy)", correct: false },
            { text: "क्लेयर मजूमदार (Claire Mazumdar)", correct: true }
        ]
    },
    {
        id: 40,
        question: "हाल ही में ओडिशा में कोयला-से-अमोनियम नाइट्रेट परियोजना कौन विकसित करेगा?",
        questionAudio: "audio7/Question_40.mp3",
        options: [
            { text: "लार्सन एंड टुब्रो (Larsen & Toubro)", correct: true },
            { text: "अडानी समूह (Adani Group)", correct: false },
            { text: "रिलायंस इंडस्ट्रीज (Reliance Industries)", correct: false },
            { text: "एनटीपीसी लिमिटेड (NTPC Limited)", correct: false }
        ]
    },
    {
        id: 41,
        question: "हाल ही में यूरोपीय राजनीतिक समुदाय (EPC) शिखर सम्मेलन में भाग लेने वाला पहला गैर-यूरोपीय देश कौन सा बना है?",
        questionAudio: "audio7/Question_41.mp3",
        options: [
            { text: "कनाडा (Canada)", correct: true },
            { text: "जापान (Japan)", correct: false },
            { text: "ऑस्ट्रेलिया (Australia)", correct: false },
            { text: "भारत (India)", correct: false }
        ]
    },
    {
        id: 42,
        question: "हाल ही में उद्यमिता परियोजना \"स्टार्टअप कडप्पा पहल\" कहाँ शुरू की गई है?",
        questionAudio: "audio7/Question_42.mp3",
        options: [
            { text: "तेलंगाना (Telangana)", correct: false },
            { text: "कर्नाटक (Karnataka)", correct: false },
            { text: "आंध्र प्रदेश (Andhra Pradesh)", correct: true },
            { text: "तमिलनाडु (Tamil Nadu)", correct: false }
        ]
    },
    {
        id: 43,
        question: "हाल ही में किसके 'प्रोजेक्ट दीपक' का 66वां स्थापना दिवस मनाया गया है?",
        questionAudio: "audio7/Question_43.mp3",
        options: [
            { text: "भारतीय सेना (Indian Army)", correct: false },
            { text: "भारतीय नौसेना (Indian Navy)", correct: false },
            { text: "सीमा सड़क संगठन (Border Roads Organisation)", correct: true },
            { text: "भारतीय वायु सेना (Indian Air Force)", correct: false }
        ]
    },
    {
        id: 44,
        question: "हाल ही में एशिया विश्वविद्यालय रैंकिंग 2026 में किस भारतीय संस्थान ने शीर्ष स्थान हासिल किया है?",
        questionAudio: "audio7/Question_44.mp3",
        options: [
            { text: "IIT दिल्ली (IIT Delhi)", correct: false },
            { text: "IISc बेंगलुरु (IISc Bengaluru)", correct: true },
            { text: "IIT बॉम्बे (IIT Bombay)", correct: false },
            { text: "बनारस हिंदू विश्वविद्यालय (Banaras Hindu University)", correct: false }
        ]
    },
    {
        id: 45,
        question: "हाल ही में केंद्र ने सुप्रीम कोर्ट में न्यायाधीशों की संख्या 33 से बढ़ाकर कितनी करने को मंजूरी दी है?",
        questionAudio: "audio7/Question_45.mp3",
        options: [
            { text: "34", correct: false },
            { text: "35", correct: false },
            { text: "36", correct: false },
            { text: "37", correct: true }
        ]
    },
    {
        id: 46,
        question: "हाल ही में विश्व अस्थमा दिवस 2026 कब मनाया गया है?",
        questionAudio: "audio7/Question_46.mp3",
        options: [
            { text: "5 मई (May 5)", correct: true },
            { text: "6 मई (May 6)", correct: false },
            { text: "7 मई (May 7)", correct: false },
            { text: "2 मई (May 2)", correct: false }
        ]
    },
    {
        id: 47,
        question: "हाल ही में केंद्र सरकार ने अत्याधुनिक जहाज मरम्मत केंद्र के निर्माण को स्वीकृति दी है; सही कथन चुनिए:",
        questionAudio: "audio7/Question_47.mp3",
        options: [
            { text: "यह वडीनार, गुजरात में स्थापित किया जाएगा (It will be established in Vadinar, Gujarat.)", correct: true },
            { text: "यह 3,570 करोड़ रुपये के निवेश से कार्यान्वित किया जाएगा (It will be implemented with an investment of ₹3,570 crore.)", correct: false },
            { text: "यह विशाखापत्तनम, आंध्र प्रदेश में स्थापित किया जाएगा (It will be established in Visakhapatnam, Andhra Pradesh.)", correct: false },
            { text: "यह चेन्नई, तमिलनाडु में स्थापित किया जाएगा (It will be established in Chennai, Tamil Nadu.)", correct: false }
        ]
    },
    {
        id: 48,
        question: "हाल ही में खगोलविदों ने दो सितारों की परिक्रमा करते हुए कितने संभावित टैटूइन-जैसे ग्रहों की खोज की है?",
        questionAudio: "audio7/Question_48.mp3",
        options: [
            { text: "15", correct: false },
            { text: "20", correct: false },
            { text: "27", correct: true },
            { text: "35", correct: false }
        ]
    },
    {
        id: 49,
        question: "हाल ही में केंद्रीय मंत्री जगत प्रकाश नड्डा ने स्वास्थ्य प्रणालियों के एकीकरण के लिए कौन सा पोर्टल लॉन्च किया है?",
        questionAudio: "audio7/Question_49.mp3",
        options: [
            { text: "स्वस्थ भारत पोर्टल (Swasth Bharat Portal)", correct: true },
            { text: "आयुष्मान भारत पोर्टल (Ayushman Bharat Portal)", correct: false },
            { text: "डिजिटल हेल्थ पोर्टल (Digital Health Portal)", correct: false },
            { text: "राष्ट्रीय स्वास्थ्य पोर्टल (National Health Portal)", correct: false }
        ]
    },
    {
        id: 50,
        question: "हाल ही में केंद्रीय फिल्म प्रमाणन बोर्ड (CBFC) का अध्यक्ष किसे नियुक्त किया गया है?",
        questionAudio: "audio7/Question_50.mp3",
        options: [
            { text: "प्रसून जोशी (Prasoon Joshi)", correct: false },
            { text: "शशि शेखर वेम्पति (Shashi Shekhar Vempati)", correct: true },
            { text: "अनुपम खेर (Anupam Kher)", correct: false },
            { text: "नसीरुद्दीन शाह (Naseeruddin Shah)", correct: false }
        ]
    },
    {
        id: 51,
        question: "हाल ही में ब्रेन-कंप्यूटर इंटरफेस सम्मेलन का उद्घाटन कहाँ किया गया है?",
        questionAudio: "audio7/Question_51.mp3",
        options: [
            { text: "बैंगलोर (Bengaluru)", correct: false },
            { text: "नई दिल्ली (New Delhi)", correct: true },
            { text: "मुंबई (Mumbai)", correct: false },
            { text: "हैदराबाद (Hyderabad)", correct: false }
        ]
    },
    {
        id: 52,
        question: "हाल ही में दिवंगत आर. बी. चौधरी कौन थे?",
        questionAudio: "audio7/Question_52.mp3",
        options: [
            { text: "लेखक (Author)", correct: false },
            { text: "राजनेता (Politician)", correct: false },
            { text: "वैज्ञानिक (Scientist)", correct: false },
            { text: "फिल्म निर्माता (Film Producer)", correct: true }
        ]
    },
    {
        id: 53,
        question: "हाल ही में किस टाइगर रिजर्व में कैनाइन डिस्टेम्पर वायरस (CDV) के कारण बाघिन और शावकों की मृत्यु हुई है?",
        questionAudio: "audio7/Question_53.mp3",
        options: [
            { text: "रणथंभौर टाइगर रिजर्व (Ranthambore Tiger Reserve)", correct: false },
            { text: "कान्हा टाइगर रिजर्व (Kanha Tiger Reserve)", correct: true },
            { text: "जिम कॉर्बेट टाइगर रिजर्व (Jim Corbett Tiger Reserve)", correct: false },
            { text: "सतपुड़ा टाइगर रिजर्व (Satpura Tiger Reserve)", correct: false }
        ]
    },
    {
        id: 54,
        question: "हाल ही में वोडाफोन आइडिया लिमिटेड के गैर-कार्यकारी अध्यक्ष के रूप में किसे नियुक्त किया गया है?",
        questionAudio: "audio7/Question_54.mp3",
        options: [
            { text: "सुनील भारती मित्तल (Sunil Bharti Mittal)", correct: false },
            { text: "अजय पीरामल (Ajay Piramal)", correct: false },
            { text: "कुमार मंगलम बिड़ला (Kumar Mangalam Birla)", correct: true },
            { text: "उदय कोटक (Uday Kotak)", correct: false }
        ]
    },
    {
        id: 55,
        question: "हाल ही में भारत और किसने लगभग ₹169 करोड़ की इलेक्ट्रिक व्हीकल (EV) बैटरी रीसाइक्लिंग पहल शुरू की है?",
        questionAudio: "audio7/Question_55.mp3",
        options: [
            { text: "जापान (Japan)", correct: false },
            { text: "अमेरिका (USA)", correct: false },
            { text: "यूरोपीय संघ (European Union)", correct: true },
            { text: "ऑस्ट्रेलिया (Australia)", correct: false },
            { text: "इनमें से कोई नहीं (None of the above)", correct: false }
        ]
    },
    {
        id: 56,
        question: "हाल ही में वेव्स डॉक बाजार (WAVES Doc Bazaar) का दूसरा चरण कहाँ आयोजित किया जाएगा?",
        questionAudio: "audio7/Question_56.mp3",
        options: [
            { text: "मुंबई (Mumbai)", correct: true },
            { text: "चेन्नई (Chennai)", correct: false },
            { text: "कोलकाता (Kolkata)", correct: false },
            { text: "विशाखापत्तनम (Visakhapatnam)", correct: false }
        ]
    },
    {
        id: 57,
        question: "हाल ही में सर्वोच्च न्यायालय कोलीजियम ने पंजाब और हरियाणा उच्च न्यायालय के न्यायाधीशों के रूप में कितने अधिवक्ताओं की नियुक्ति के प्रस्ताव को मंजूरी दी है?",
        questionAudio: "audio7/Question_57.mp3",
        options: [
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "9", correct: false },
            { text: "10", correct: true }
        ]
    },
    {
        id: 58,
        question: "हाल ही में सेंट्रल प्रभारी ऑफिसर (CPO) पोर्टल का शुभारंभ किसने किया है?",
        questionAudio: "audio7/Question_58.mp3",
        options: [
            { text: "गृह मंत्रालय (Ministry of Home Affairs)", correct: false },
            { text: "नीति आयोग (NITI Aayog)", correct: true },
            { text: "वित्त मंत्रालय (Ministry of Finance)", correct: false },
            { text: "शिक्षा मंत्रालय (Ministry of Education)", correct: false }
        ]
    },
    {
        id: 59,
        question: "हाल ही में 'बालिकातन 2026' संयुक्त सैन्य अभ्यास, अमेरिका और किस देश के बीच आयोजित किया जाने वाला एक प्रमुख रक्षा अभ्यास है?",
        questionAudio: "audio7/Question_59.mp3",
        options: [
            { text: "दक्षिण कोरिया (South Korea)", correct: false },
            { text: "ऑस्ट्रेलिया (Australia)", correct: false },
            { text: "फिलीपींस (Philippines)", correct: true },
            { text: "वियतनाम (Vietnam)", correct: false }
        ]
    },
    {
        id: 60,
        question: "दिल्ली में आयोजित होने वाली राष्ट्रमंडल टेबल टेनिस चैम्पियनशिप 2026 के संबंध में निम्नलिखित में से कौन सा कथन सही है?",
        questionAudio: "audio7/Question_60.mp3",
        options: [
            { text: "यह प्रतियोगिता मुंबई में 15 अगस्त से 22 अगस्त 2026 तक की जाएगी।", correct: false },
            { text: "प्रतियोगिता का आयोजन त्यागराज स्टेडियम, दिल्ली में 27 जुलाई से 2 अगस्त 2026 तक किया जाएगा।", correct: true },
            { text: "इसमें केवल एशियाई देशों के खिलाड़ी भाग लेंगे।", correct: false },
            { text: "इस प्रतियोगिता का आयोजन केवल टेबल टेनिस महासंघ द्वारा किया जाएगा।", correct: false }
        ]
    },
    {
        id: 61,
        question: "हाल ही में पहले इंटरनेशनल बिग कैट एलायंस (IBCA) शिखर सम्मेलन 2026 की वेबसाइट और लोगो का अनावरण किसने किया?",
        questionAudio: "audio7/Question_61.mp3",
        options: [
            { text: "नरेंद्र मोदी (Narendra Modi)", correct: false },
            { text: "भूपेंद्र यादव (Bhupender Yadav)", correct: true },
            { text: "एस. जयशंकर (S. Jaishankar)", correct: false },
            { text: "तन्मय कुमार (Tanmay Kumar)", correct: false }
        ]
    },
    {
        id: 62,
        question: "हाल ही में विदेश मंत्री डॉ. एस जयशंकर किस कैरेबियाई देश की आधिकारिक यात्रा पर पहुँचे?",
        questionAudio: "audio7/Question_62.mp3",
        options: [
            { text: "गुयाना (Guyana)", correct: false },
            { text: "सूरीनाम (Suriname)", correct: true },
            { text: "त्रिनिदाद और टोबैगो (Trinidad and Tobago)", correct: false },
            { text: "जमैका (Jamaica)", correct: false }
        ]
    },
    {
        id: 63,
        question: "हाल ही में केंद्र सरकार द्वारा नए दक्षिण तटीय रेलवे जोन (South Coast Railway Zone) का मुख्यालय कहाँ अधिसूचित किया गया है?",
        questionAudio: "audio7/Question_63.mp3",
        options: [
            { text: "भुवनेश्वर (Bhubaneswar)", correct: false },
            { text: "सिकंदराबाद (Secunderabad)", correct: false },
            { text: "विशाखापत्तनम (Visakhapatnam)", correct: true },
            { text: "विजयवाड़ा (Vijayawada)", correct: false }
        ]
    },
    {
        id: 64,
        question: "हाल ही में BWF उबेर कप 2026 का खिताब किस देश ने जीता?",
        questionAudio: "audio7/Question_64.mp3",
        options: [
            { text: "चीन (China)", correct: false },
            { text: "जापान (Japan)", correct: false },
            { text: "दक्षिण कोरिया (South Korea)", correct: true },
            { text: "इंडोनेशिया (Indonesia)", correct: false }
        ]
    },
    {
        id: 65,
        question: "हाल ही में आयरलैंड में आयोजित IBSF विश्व बिलियर्ड्स खिताब किसने जीता है?",
        questionAudio: "audio7/Question_65.mp3",
        options: [
            { text: "पंकज आडवाणी (Pankaj Advani)", correct: false },
            { text: "विल्सन जोन्स (Wilson Jones)", correct: false },
            { text: "सौरभ कोठारी (Saurabh Kothari)", correct: true },
            { text: "माइकल फरेरा (Michael Ferreira)", correct: false }
        ]
    },
    {
        id: 66,
        question: "प्रधानमंत्री नरेंद्र मोदी ने 7 मई 2026 को किस सैन्य अभियान की पहली वर्षगांठ पर अपनी 'डिस्प्ले पिक्चर' (DP) बदलकर सेना को श्रद्धांजलि दी?",
        questionAudio: "audio7/Question_66.mp3",
        options: [
            { text: "ऑपरेशन विजय (Operation Vijay)", correct: false },
            { text: "ऑपरेशन सिंदूर (Operation Sindoor)", correct: true },
            { text: "ऑपरेशन संकल्प (Operation Sankalp)", correct: false },
            { text: "ऑपरेशन अजय (Operation Ajay)", correct: false }
        ]
    },
    {
        id: 67,
        question: "मई 10, 2026 को 'आर्ट ऑफ़ लिविंग' के 45वें स्थापना दिवस के अवसर पर, प्रधानमंत्री नरेंद्र मोदी किस नवनिर्मित संरचना का उद्घाटन करेंगे?",
        questionAudio: "audio7/Question_67.mp3",
        options: [
            { text: "शक्ति पीठ (Shakti Peeth)", correct: false },
            { text: "ध्यान मंदिर (Dhyan Mandir)", correct: true },
            { text: "ज्ञान सभा (Gyan Sabha)", correct: false },
            { text: "शांति स्तूप (Shanti Stupa)", correct: false }
        ]
    },
    {
        id: 68,
        question: "हाल ही में दुबई के विकास और विरासत संरक्षण में सौ से अधिक वर्षों के योगदान के लिए, किस भारतीय कारोबारी को प्रतिष्ठित 'अर्थ दुबई पुरस्कार' से सम्मानित किया गया है?",
        questionAudio: "audio7/Question_68.mp3",
        options: [
            { text: "यूसुफ अली (Yusuff Ali)", correct: false },
            { text: "दीपक भाटिया (Deepak Bhatia)", correct: true },
            { text: "रवि पिल्लई (Ravi Pillai)", correct: false },
            { text: "सुनील भारती मित्तल (Sunil Bharti Mittal)", correct: false }
        ]
    },
    {
        id: 69,
        question: "हाल ही में केंद्रीय स्वास्थ्य मंत्रालय द्वारा मातृ एवं शिशु स्वास्थ्य सेवाओं की निगरानी के लिए लॉन्च किए गए उन्नत डिजिटल प्लेटफॉर्म का नाम क्या है?",
        questionAudio: "audio7/Question_69.mp3",
        options: [
            { text: "सुरक्षित (Surakshit)", correct: false },
            { text: "जननी (Janani)", correct: true },
            { text: "मातृत्व (Maatritva)", correct: false },
            { text: "आयुष (Ayush)", correct: false }
        ]
    },
    {
        id: 70,
        question: "हाल ही में 60 मिलियन डॉलर की फंडिंग जुटाने के बाद, भारत की पहली 'स्पेस-टेक स्टार्टअप यूनिकॉर्न' (Space-tech Startup Unicorn) बनने वाली कंपनी कौन सी है?",
        questionAudio: "audio7/Question_70.mp3",
        options: [
            { text: "पिक्सेल (Pixxel)", correct: false },
            { text: "अग्निकुल कॉस्मॉस (Agnikul Cosmos)", correct: false },
            { text: "स्काईरूट एयरोस्पेस (Skyroot Aerospace)", correct: true },
            { text: "ध्रुव स्पेस (Dhruva Space)", correct: false }
        ]
    },
    {
        id: 71,
        question: "हाल ही में विश्व एथलेटिक्स दिवस कब मनाया गया है?",
        questionAudio: "audio7/Question_71.mp3",
        options: [
            { text: "5 मई (May 5)", correct: false },
            { text: "6 मई (May 6)", correct: false },
            { text: "7 मई (May 7)", correct: true },
            { text: "8 मई (May 8)", correct: false }
        ]
    },
    {
        id: 72,
        question: "वेनिस में आयोजित 61वीं अंतर्राष्ट्रीय कला प्रदर्शनी (ला बिनाले डी वेनेजिया) में भारत के राष्ट्रीय मंडप का उद्घाटन किसने किया और इस प्रदर्शनी का शीर्षक क्या है?",
        questionAudio: "audio7/Question_72.mp3",
        options: [
            { text: "एस. जयशंकर: 'भारत की कला' (S. Jaishankar: 'Art of India')", correct: false },
            { text: "गजेंद्र सिंह शेखावत: 'जियोग्राफिज़ ऑफ़ डिस्टेंस: रिमेंबरिंग होम' (Gajendra Singh Shekhawat: 'Geographies of Distance: Remembering Home')", correct: true },
            { text: "निर्मला सीतारमण: 'सांस्कृतिक स्मृति' (Nirmala Sitharaman: 'Cultural Memory')", correct: false },
            { text: "अर्जुन राम मेघवाल: 'प्रवास और अपनत्व' (Arjun Ram Meghwal: 'Migration and Belonging')", correct: false }
        ]
    },
    {
        id: 73,
        question: "हाल ही में सुप्रीम कोर्ट ने किस मामले में यह ऐतिहासिक फैसला सुनाया कि जबरन तेजाब पिलाने (acid ingestion) के कारण अंदरूनी अंगों की क्षति झेलने वाले पीड़ितों को भी 'दिव्यांग व्यक्ति अधिकार अधिनियम, 2016' (RPwD Act) के तहत लाभ मिलना चाहिए?",
        questionAudio: "audio7/Question_73.mp3",
        options: [
            { text: "विशाखा बनाम राजस्थान राज्य (Vishaka vs State of Rajasthan)", correct: false },
            { text: "लक्ष्मी बनाम भारत संघ (Laxmi vs Union of India)", correct: false },
            { text: "शाहीन मलिक बनाम भारत संघ (Shaheen Malik vs Union of India)", correct: true },
            { text: "पुट्टूस्वामी बनाम भारत संघ (Puttaswamy vs Union of India)", correct: false }
        ]
    },
    {
        id: 74,
        question: "नेशनल क्राइम रिकॉर्ड ब्यूरो (NCRB) की नवीनतम 'Crime in India 2024' रिपोर्ट के संदर्भ में, वर्ष 2023 की तुलना में 2024 में भारत के कुल संज्ञेय अपराधों (Cognisable Crimes) में कितने प्रतिशत की गिरावट दर्ज की गई है?",
        questionAudio: "audio7/Question_74.mp3",
        options: [
            { text: "4%", correct: false },
            { text: "6%", correct: true },
            { text: "8%", correct: false },
            { text: "10%", correct: false }
        ]
    }
];

// ============================================================================
// AUDIO CACHE SYSTEM (Holds fully loaded Audio nodes in RAM for 0ms delay play)
// ============================================================================
const audioCache = {};

// ============================================================================
// STATE ENGINE
// ============================================================================
let state = {
    originalData: JSON.parse(JSON.stringify(quizData)),
    questions: JSON.parse(JSON.stringify(quizData)),
    currentIndex: 0,
    answers: {}, 
    startTime: 0,
    timerInterval: null,
    totalSeconds: 0,
    currentQuestionStartTime: 0,
    
    // Audio State
    isPlaying: false,
    audioSpeed: 1.0,
    autoRead: false,
    autoReadTimeoutId: null, 
    audioPositions: {}, 
    
    // Settings
    isDarkMode: false,
    shuffleQuestions: false,
    shuffleOptions: false
};

// Elements
const elements = {
    preloader: document.getElementById('preloader'),
    preloadProgressCircle: document.getElementById('preload-progress-circle'),
    preloadPercentage: document.getElementById('preload-percentage'),
    preloadStatusText: document.getElementById('preload-status-text'),
    skipPreloadBtn: document.getElementById('skip-preload-btn'),
    resumeModal: document.getElementById('resume-modal'),
    resumeYesBtn: document.getElementById('resume-yes-btn'),
    resumeNoBtn: document.getElementById('resume-no-btn'),
    
    themeToggle: document.getElementById('theme-toggle'),
    fullscreenToggle: document.getElementById('fullscreen-toggle'),
    progressText: document.getElementById('progress-text'),
    elapsedTimer: document.getElementById('elapsed-timer'),
    scoreText: document.getElementById('score-text'),
    progressBar: document.getElementById('animated-progress-bar'),
    
    questionBadge: document.getElementById('question-number-badge'),
    questionText: document.getElementById('question-text'),
    optionsGrid: document.getElementById('options-grid'),
    
    masterPlayBtn: document.getElementById('master-play-btn'),
    masterPlayText: document.getElementById('master-play-text'),
    autoReadSwitch: document.getElementById('auto-read-switch'),
    speedSlider: document.getElementById('speed-slider'),
    speedVal: document.getElementById('speed-val'),
    
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    navPanelToggle: document.getElementById('nav-panel-toggle'),
    closePanelBtn: document.getElementById('close-panel-btn'),
    navPanel: document.getElementById('navigation-panel'),
    questionGrid: document.getElementById('question-grid'),
    
    shuffleQSwitch: document.getElementById('shuffle-q-switch'),
    shuffleOSwitch: document.getElementById('shuffle-o-switch'),
    
    resultSection: document.getElementById('result-section'),
    quizSection: document.getElementById('quiz-section'),
    performanceBanner: document.getElementById('performance-banner'),
    
    resTotal: document.getElementById('res-total'),
    resCorrect: document.getElementById('res-correct'),
    resWrong: document.getElementById('res-wrong'),
    resSkipped: document.getElementById('res-skipped'),
    resAccuracy: document.getElementById('res-accuracy'),
    resTotalTime: document.getElementById('res-total-time'),
    resAvgTime: document.getElementById('res-avg-time'),
    resFastest: document.getElementById('res-fastest'),
    resSlowest: document.getElementById('res-slowest'),
    analyticsCanvas: document.getElementById('analytics-canvas'),
    restartQuizBtn: document.getElementById('restart-quiz-btn'),
    
    srAnnouncer: document.getElementById('sr-announcer'),
    pwaBanner: document.getElementById('pwa-install-banner'),
    pwaInstallBtn: document.getElementById('pwa-install-btn'),
    pwaCloseBtn: document.getElementById('pwa-close-btn')
};

// ============================================================================
// AUDIO MANAGER (With 0ms Latency play from RAM cache)
// ============================================================================
class AudioManager {
    constructor() {
        this.audioNode = null; 
        this.synth = window.speechSynthesis;
        this.utterance = null;
        this.isSynthActive = false;
        this.ttsTimeoutId = null; 
    }

    beep(frequency, duration, type = 'sine') {
        try {
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = context.createOscillator();
            const gainNode = context.createGain();
            oscillator.type = type;
            oscillator.frequency.value = frequency;
            oscillator.connect(gainNode);
            gainNode.connect(context.destination);
            gainNode.gain.setValueAtTime(0.1, context.currentTime);
            oscillator.start();
            oscillator.stop(context.currentTime + (duration / 1000));
        } catch (e) {
            console.warn("Audio Context init error", e);
        }
    }

    stopAll() {
        if (this.ttsTimeoutId) {
            clearTimeout(this.ttsTimeoutId);
            this.ttsTimeoutId = null;
        }

        if (this.audioNode) {
            try {
                this.audioNode.onended = null;
                this.audioNode.onerror = null;
                this.audioNode.pause();
                this.audioNode.currentTime = 0; 
            } catch (err) {}
        }

        if (this.synth) {
            this.synth.cancel();
        }
        this.isSynthActive = false;
    }

    playFile(url, onEndedCallback) {
        this.stopAll();

        if (url.includes('Sahi_Jawab.mp3')) {
            this.beep(880, 200); 
            if (onEndedCallback) onEndedCallback();
            return;
        } else if (url.includes('Galat_Jawab.mp3')) {
            this.beep(220, 300, 'sawtooth'); 
            if (onEndedCallback) onEndedCallback();
            return;
        }

        // Retrieve preloaded Audio node instantly from memory cache (0ms delay)
        let audio = audioCache[url];
        if (!audio) {
            audio = new Audio();
            audio.src = url;
            audio.preload = 'auto';
            audioCache[url] = audio;
        }

        this.audioNode = audio;
        this.audioNode.playbackRate = state.audioSpeed;

        this.audioNode.onended = () => {
            state.audioPositions[url] = 0; 
            if (onEndedCallback) onEndedCallback();
        };

        this.audioNode.onerror = () => {
            console.warn(`Audio fail: ${url}. Switching to Hindi Text-To-Speech.`);
            this.fallbackTTS(url, onEndedCallback);
        };

        if (state.audioPositions[url]) {
            this.audioNode.currentTime = state.audioPositions[url];
        } else {
            this.audioNode.currentTime = 0;
        }

        let playPromise = this.audioNode.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                this.fallbackTTS(url, onEndedCallback);
            });
        }
    }

    fallbackTTS(url, callback) {
        const q = state.questions[state.currentIndex];
        
        if (url.includes('Sahi_Jawab.mp3')) {
            this.beep(880, 200);
            if (callback) callback();
            return;
        } else if (url.includes('Galat_Jawab.mp3')) {
            this.beep(220, 300, 'sawtooth');
            if (callback) callback();
            return;
        }

        if (url === q.questionAudio) {
            let fullText = `${q.question}. ${q.options[0].text}. ${q.options[1].text}. ${q.options[2].text}. ${q.options[3].text}.`;
            this.speakText(fullText, callback);
        } else {
            if (callback) callback();
        }
    }

    speakText(text, callback) {
        if (!this.synth) {
            if (callback) callback();
            return;
        }

        if (this.ttsTimeoutId) {
            clearTimeout(this.ttsTimeoutId);
            this.ttsTimeoutId = null;
        }

        this.synth.cancel();

        this.ttsTimeoutId = setTimeout(() => {
            this.utterance = new SpeechSynthesisUtterance(text);
            this.utterance.lang = 'hi-IN';
            this.utterance.rate = state.audioSpeed;

            this.utterance.onend = () => {
                this.isSynthActive = false;
                if (callback) callback();
            };

            this.utterance.onerror = () => {
                this.isSynthActive = false;
                if (callback) callback();
            };

            this.isSynthActive = true;
            this.synth.speak(this.utterance);
            this.ttsTimeoutId = null; 
        }, 50);
    }
}

const audioManager = new AudioManager();

// ============================================================================
// PLAYBACK ENGINE
// ============================================================================
function runAudioSequence() {
    if (!state.isPlaying) return;
    const currentQ = state.questions[state.currentIndex];

    announceSR(`प्रश्न और विकल्प सुने जा रहे हैं`);
    audioManager.playFile(currentQ.questionAudio, () => {
        state.isPlaying = false;
        updateAudioUI();
    });
}

function stopSequence() {
    state.isPlaying = false;
    if (state.autoReadTimeoutId) {
        clearTimeout(state.autoReadTimeoutId);
        state.autoReadTimeoutId = null;
    }
    audioManager.stopAll();
    updateAudioUI();
}

function startSequence(fromBeginning = false) {
    const currentQ = state.questions[state.currentIndex];
    state.isPlaying = true;
    
    if (fromBeginning) {
        state.audioPositions[currentQ.questionAudio] = 0; 
    }
    
    updateAudioUI();
    runAudioSequence();
}

function updateAudioUI() {
    if (state.isPlaying) {
        elements.masterPlayBtn.classList.add('playing');
        elements.masterPlayText.textContent = "रोकें (Pause)";
        elements.masterPlayBtn.setAttribute('aria-label', "ऑडियो रोकें");
    } else {
        elements.masterPlayBtn.classList.remove('playing');
        elements.masterPlayText.textContent = "सुनें (Play)";
        elements.masterPlayBtn.setAttribute('aria-label', "ऑडियो चलाएं");
    }
}

// ============================================================================
// AUDIO PRELOADER
// ============================================================================
function initPreloadSequence() {
    const urlsToLoad = [];
    urlsToLoad.push('audio/Sahi_Jawab.mp3');
    urlsToLoad.push('audio/Galat_Jawab.mp3');

    state.originalData.forEach(q => {
        urlsToLoad.push(q.questionAudio);
    });

    let loadedCount = 0;
    const totalAssets = urlsToLoad.length;
    let timerOut = false;

    const limitTimer = setTimeout(() => {
        timerOut = true;
        completePreload();
    }, 4000); 

    function itemLoaded() {
        if (timerOut) return;
        loadedCount++;
        const percent = Math.min(Math.round((loadedCount / totalAssets) * 100), 100);
        
        elements.preloadPercentage.textContent = `${percent}%`;
        const circle = elements.preloadProgressCircle;
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;

        if (percent >= 100 || loadedCount >= totalAssets) {
            clearTimeout(limitTimer);
            completePreload();
        }
    }

    urlsToLoad.forEach((url) => {
        const audio = new Audio();
        audio.src = url;
        audio.preload = 'auto';
        
        // Cache the preloaded Audio objects directly to permanent RAM cache
        audioCache[url] = audio;

        audio.addEventListener('canplaythrough', itemLoaded, { once: true });
        audio.addEventListener('error', itemLoaded, { once: true });
    });

    setTimeout(() => {
        elements.skipPreloadBtn.style.display = "inline-block";
    }, 1000);
}

function completePreload() {
    elements.preloader.style.opacity = '0';
    setTimeout(() => {
        elements.preloader.classList.add('hidden');
        bootQuiz();
    }, 300);
}

// ============================================================================
// SYSTEM CORE & NAVIGATION
// ============================================================================
function bootQuiz() {
    loadProgress();
    initSettings();
    renderQuestionGrid();
    renderCurrentQuestion(true);
    startMasterTimer();
}

function renderCurrentQuestion(triggerAutoRead = true) {
    stopSequence();
    
    // अगर quizData खाली है तो एरर से बचने के लिए चेक
    if (!state.questions || state.questions.length === 0) {
        elements.questionText.textContent = "कृपया quizData ऐरे में प्रश्न शामिल करें।";
        return;
    }
    
    const q = state.questions[state.currentIndex];
    state.currentQuestionStartTime = Date.now();

    elements.questionBadge.textContent = `प्रश्न ${q.id}`;
    elements.questionText.textContent = q.question;

    elements.optionsGrid.innerHTML = '';
    const savedAnswer = state.answers[q.id];

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-checked', savedAnswer && savedAnswer.selectedIdx === idx ? 'true' : 'false');
        btn.innerHTML = `<span><strong>(${String.fromCharCode(97 + idx)})</strong> ${opt.text}</span> <span class="option-icon"></span>`;

        if (savedAnswer) {
            btn.disabled = true;
            if (idx === savedAnswer.selectedIdx) {
                btn.classList.add(opt.correct ? 'correct' : 'wrong');
                btn.querySelector('.option-icon').textContent = opt.correct ? '✅' : '❌';
            } else if (opt.correct) {
                btn.classList.add('correct');
                btn.querySelector('.option-icon').textContent = '✅';
            }
        } else {
            btn.addEventListener('click', () => handleOptionSelection(idx));
        }
        elements.optionsGrid.appendChild(btn);
    });

    updateGridHighlights();
    updateProgressMeter();

    if (state.autoRead && triggerAutoRead) {
        // Run instantly without setTimeout delay!
        startSequence(true); 
    }
}

function handleOptionSelection(selectedIdx) {
    stopSequence();
    const q = state.questions[state.currentIndex];
    const isCorrect = q.options[selectedIdx].correct;
    const elapsedSeconds = Math.round((Date.now() - state.currentQuestionStartTime) / 1000);

    state.answers[q.id] = {
        selectedIdx: selectedIdx,
        correct: isCorrect,
        timeTaken: Math.max(elapsedSeconds, 1)
    };

    if (isCorrect) {
        audioManager.playFile('audio/Sahi_Jawab.mp3');
    } else {
        audioManager.playFile('audio/Galat_Jawab.mp3');
    }

    saveProgress();
    renderCurrentQuestion(false); 

    if (state.autoRead && state.currentIndex < state.questions.length - 1) {
        // Fast 400ms transition for a snappy feel!
        state.autoReadTimeoutId = setTimeout(() => {
            navigateQuestion(1);
        }, 400);
    }
}

function navigateQuestion(offset) {
    const nextIdx = state.currentIndex + offset;
    if (nextIdx >= 0 && nextIdx < state.questions.length) {
        state.currentIndex = nextIdx;
        saveProgress();
        renderCurrentQuestion(true); 
    } else if (nextIdx >= state.questions.length) {
        showResults();
    }
}

function updateProgressMeter() {
    const total = state.questions.length;
    const answered = Object.keys(state.answers).length;
    const percentage = Math.round((answered / total) * 100);
    
    elements.progressText.textContent = `${answered}/${total} (${percentage}%)`;
    elements.progressBar.style.width = `${((state.currentIndex + 1) / total) * 100}%`;

    let score = 0;
    Object.values(state.answers).forEach(ans => {
        if (ans.correct) score += 10;
    });
    elements.scoreText.textContent = score;
}

// ============================================================================
// NAVIGATION PANEL
// ============================================================================
function renderQuestionGrid() {
    elements.questionGrid.innerHTML = '';
    state.questions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'grid-cell unvisited';
        btn.textContent = q.id; 
        btn.setAttribute('aria-label', `प्रश्न ${q.id} पर जाएं`);
        
        btn.addEventListener('click', () => {
            state.currentIndex = idx;
            saveProgress();
            renderCurrentQuestion(true);
            elements.navPanel.classList.add('hidden');
        });

        elements.questionGrid.appendChild(btn);
    });
}

function updateGridHighlights() {
    const cells = elements.questionGrid.children;
    state.questions.forEach((q, idx) => {
        const cell = cells[idx];
        if (!cell) return;

        cell.className = 'grid-cell';
        const saved = state.answers[q.id];

        if (idx === state.currentIndex) {
            cell.classList.add('current');
        } else if (saved) {
            cell.classList.add(saved.correct ? 'correct' : 'wrong');
        } else {
            cell.classList.add('unvisited');
        }
    });
}

// ============================================================================
// TIMER UTILITIES
// ============================================================================
function startMasterTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        state.totalSeconds++;
        elements.elapsedTimer.textContent = formatTime(state.totalSeconds);
        if (state.totalSeconds % 10 === 0) saveProgress(); 
    }, 1000);
}

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
}

// ============================================================================
// ANALYTICS CANVAS
// ============================================================================
function drawPureCanvasChart(correct, wrong, skipped) {
    const canvas = elements.analyticsCanvas;
    if (!canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const total = correct + wrong + skipped;
    if (total === 0) return;

    const data = [correct, wrong, skipped];
    const colors = ['#10b981', '#ef4444', '#64748b'];

    let currentAngle = -0.5 * Math.PI;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    data.forEach((value, idx) => {
        if (value === 0) return;
        const sliceAngle = (value / total) * 2 * Math.PI;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[idx];
        ctx.fill();

        currentAngle += sliceAngle;
    });

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.5, 0, 2 * Math.PI);
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--bg-card').trim() || '#ffffff';
    ctx.fill();
}

function showResults() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    stopSequence();

    elements.quizSection.classList.add('hidden');
    elements.resultSection.classList.remove('hidden');

    const total = state.questions.length;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    const times = [];

    state.questions.forEach(q => {
        const ans = state.answers[q.id];
        if (ans) {
            if (ans.correct) correct++;
            else wrong++;
            times.push(ans.timeTaken);
        } else {
            skipped++;
        }
    });

    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    elements.resTotal.textContent = total;
    elements.resCorrect.textContent = correct;
    elements.resWrong.textContent = wrong;
    elements.resSkipped.textContent = skipped;
    elements.resAccuracy.textContent = `${accuracy}%`;
    elements.resTotalTime.textContent = formatTime(state.totalSeconds);

    let bannerText = "Needs Improvement 😕";
    if (accuracy >= 90) bannerText = "Excellent! 🏆";
    else if (accuracy >= 75) bannerText = "Very Good! 🌟";
    else if (accuracy >= 50) bannerText = "Good! 👍";
    else if (accuracy >= 35) bannerText = "Average! 😐";
    elements.performanceBanner.textContent = bannerText;

    if (times.length > 0) {
        const avg = Math.round(times.reduce((a, b) => a + b, 0) / times.length);
        const fastest = Math.min(...times);
        const slowest = Math.max(...times);

        elements.resAvgTime.textContent = `${avg}s`;
        elements.resFastest.textContent = `${fastest}s`;
        elements.resSlowest.textContent = `${slowest}s`;
    } else {
        elements.resAvgTime.textContent = '0s';
        elements.resFastest.textContent = '0s';
        elements.resSlowest.textContent = '0s';
    }

    drawPureCanvasChart(correct, wrong, skipped);
    announceSR(`क्विज़ पूरा हुआ। आपका स्कोर ${correct} सही है।`);
}

// ============================================================================
// PERSISTENCE (Independent Storage Key)
// ============================================================================
function saveProgress() {
    const dataToSave = {
        currentIndex: state.currentIndex,
        answers: state.answers,
        totalSeconds: state.totalSeconds,
        autoRead: state.autoRead,
        audioSpeed: state.audioSpeed,
        shuffleQuestions: state.shuffleQuestions,
        shuffleOptions: state.shuffleOptions,
        isDarkMode: state.isDarkMode
    };
    localStorage.setItem('may_weekly(4may-8may)_progress', JSON.stringify(dataToSave));
}

function loadProgress() {
    const raw = localStorage.getItem('may_weekly(4may-8may)_progress');
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            if (parsed && Object.keys(parsed.answers || {}).length > 0) {
                elements.resumeModal.classList.remove('hidden');
            }
        } catch (e) {
            localStorage.removeItem('may_weekly(4may-8may)_progress');
        }
    }
}

function restoreQuizState() {
    const raw = localStorage.getItem('may_weekly(4may-8may)_progress');
    if (!raw) return;
    try {
        const parsed = JSON.parse(raw);
        state.currentIndex = parsed.currentIndex || 0;
        state.answers = parsed.answers || {};
        state.totalSeconds = parsed.totalSeconds || 0;
        state.autoRead = parsed.autoRead || false;
        state.audioSpeed = parsed.audioSpeed || 1.0;
        state.shuffleQuestions = parsed.shuffleQuestions || false;
        state.shuffleOptions = parsed.shuffleOptions || false;
        state.isDarkMode = parsed.isDarkMode || false;

        elements.autoReadSwitch.checked = state.autoRead;
        elements.speedSlider.value = state.audioSpeed;
        elements.speedVal.textContent = `${state.audioSpeed.toFixed(1)}x`;
        elements.shuffleQSwitch.checked = state.shuffleQuestions;
        elements.shuffleOSwitch.checked = state.shuffleOptions;

        applyTheme();
        shuffleConfigurations();
    } catch (e) {
        console.warn("Restoring state failed", e);
    }
}

function resetSession() {
    localStorage.removeItem('may_weekly(4may-8may)_progress');
    state.currentIndex = 0;
    state.answers = {};
    state.totalSeconds = 0;
    state.questions = JSON.parse(JSON.stringify(state.originalData));
    
    elements.shuffleQSwitch.checked = false;
    elements.shuffleOSwitch.checked = false;
    state.shuffleQuestions = false;
    state.shuffleOptions = false;

    renderQuestionGrid();
    renderCurrentQuestion(true);
    startMasterTimer();
}

// ============================================================================
// SHUFFLE ALGORITHMS
// ============================================================================
function shuffleConfigurations() {
    let resultList = JSON.parse(JSON.stringify(state.originalData));

    if (state.shuffleQuestions) {
        resultList = fisherYatesShuffle(resultList);
    }

    if (state.shuffleOptions) {
        resultList.forEach(q => {
            q.options = fisherYatesShuffle(q.options);
        });
    }

    state.questions = resultList;
    renderQuestionGrid();
}

function fisherYatesShuffle(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

// ============================================================================
// THEME & CONFIG EVENTS
// ============================================================================
function applyTheme() {
    if (state.isDarkMode) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
}

function initSettings() {
    elements.speedSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        state.audioSpeed = val;
        elements.speedVal.textContent = `${val.toFixed(1)}x`;
        saveProgress();
    });

    elements.autoReadSwitch.addEventListener('change', (e) => {
        state.autoRead = e.target.checked;
        saveProgress();
    });

    elements.shuffleQSwitch.addEventListener('change', (e) => {
        state.shuffleQuestions = e.target.checked;
        shuffleConfigurations();
        saveProgress();
        renderCurrentQuestion(true);
    });

    elements.shuffleOSwitch.addEventListener('change', (e) => {
        state.shuffleOptions = e.target.checked;
        shuffleConfigurations();
        saveProgress();
        renderCurrentQuestion(true);
    });

    elements.masterPlayBtn.addEventListener('click', () => {
        if (state.isPlaying) {
            stopSequence();
        } else {
            startSequence(false);
        }
    });

    elements.themeToggle.addEventListener('click', () => {
        state.isDarkMode = !state.isDarkMode;
        applyTheme();
        saveProgress();
    });

    elements.prevBtn.addEventListener('click', () => navigateQuestion(-1));
    elements.nextBtn.addEventListener('click', () => navigateQuestion(1));
    
    elements.navPanelToggle.addEventListener('click', () => {
        elements.navPanel.classList.toggle('hidden');
    });
    
    elements.closePanelBtn.addEventListener('click', () => {
        elements.navPanel.classList.add('hidden');
    });

    elements.fullscreenToggle.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        } else {
            document.exitFullscreen();
        }
    });

    elements.restartQuizBtn.addEventListener('click', () => {
        elements.resultSection.classList.add('hidden');
        elements.quizSection.classList.remove('hidden');
        resetSession();
    });
}

function announceSR(text) {
    elements.srAnnouncer.textContent = text;
}

// ============================================================================
// PWA & MODALS EVENT LISTENERS
// ============================================================================
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    if (window.self !== window.top) {
        return; 
    }
    e.preventDefault();
    deferredPrompt = e;
    elements.pwaBanner.classList.remove('hidden');
});

elements.pwaInstallBtn.addEventListener('click', () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(() => {
            elements.pwaBanner.classList.add('hidden');
            deferredPrompt = null;
        });
    }
});

elements.pwaCloseBtn.addEventListener('click', () => {
    elements.pwaBanner.classList.add('hidden');
});

elements.resumeYesBtn.addEventListener('click', () => {
    restoreQuizState();
    elements.resumeModal.classList.add('hidden');
    renderCurrentQuestion(true);
    startMasterTimer();
});

elements.resumeNoBtn.addEventListener('click', () => {
    resetSession();
    elements.resumeModal.classList.add('hidden');
});

elements.skipPreloadBtn.addEventListener('click', () => {
    completePreload();
});

window.addEventListener('pagehide', () => {
    audioManager.stopAll();
});
window.addEventListener('beforeunload', () => {
    audioManager.stopAll();
});

window.addEventListener('DOMContentLoaded', () => {
    if (window.self !== window.top) {
        if (elements.pwaBanner) {
            elements.pwaBanner.classList.add('hidden');
        }
    }
    initPreloadSequence();
});
