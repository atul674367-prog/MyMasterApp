// ============================================================================
// QUIZ DATA DEFINITION (100 Questions about Indian Folk Dances - Part 1)
// ============================================================================
const quizData = [
    {
        id: 1,
        question: "कुम्मी नृत्य भारत में तमिलनाडु के अलावा और किस राज्य में लोकप्रिय है?",
        questionAudio: "audio3/Question_1.mp3",
        options: [
            { text: "कर्नाटक में।", correct: false },
            { text: "पुडुचेरी में।", correct: false },
            { text: "आंध्र प्रदेश में।", correct: false },
            { text: "केरल में।", correct: true }
        ]
    },
    {
        id: 2,
        question: "कुम्मी नृत्य में संगीत वाद्य यंत्रों के अभाव में प्रतिभागी ताल बनाए रखने के लिए क्या करते हैं?",
        questionAudio: "audio3/Question_2.mp3",
        options: [
            { text: "प्रतिभागी ताल बनाए रखने के लिए तालियाँ बजाकर नृत्य करते हैं।", correct: true },
            { text: "प्रतिभागी ताल बनाए रखने के लिए लोकगीतों का ऊंचे स्वर में गायन करते हैं।", correct: false },
            { text: "प्रतिभागी ताल बनाए रखने के लिए पैरों से जमीन पर आघात करते हैं।", correct: false },
            { text: "प्रतिभागी ताल बनाए रखने के लिए बांस की डंडियों को आपस में टकराते हैं।", correct: false }
        ]
    },
    {
        id: 3,
        question: "पूनथट्टी कुम्मी, दीपा कुम्मी और कुलवई कुम्मी किस नृत्य की विभिन्न शैलियाँ हैं?",
        questionAudio: "audio3/Question_3.mp3",
        options: [
            { text: "करगट्टम नृत्य की।", correct: false },
            { text: "कावड़ी अट्टम की।", correct: false },
            { text: "कुम्मी नृत्य की।", correct: true },
            { text: "कोलाट्टम नृत्य की।", correct: false }
        ]
    },
    {
        id: 4,
        question: "आंध्र प्रदेश के किस नृत्य को गुजरात के 'गरबा' के समान माना जाता है और यह विवाहों में विशेष तौर पर प्रस्तुत किया जाता है?",
        questionAudio: "audio3/Question_4.mp3",
        options: [
            { text: "लंबाडी नृत्य।", correct: false },
            { text: "गोबी नृत्य।", correct: true },
            { text: "बथुकम्मा नृत्य।", correct: false },
            { text: "धिम्सा नृत्य।", correct: false }
        ]
    },
    {
        id: 5,
        question: "माथुरी जनजातियों द्वारा 'माथुरी नृत्य' किस ऋतु के दौरान प्रस्तुत किया जाता है?",
        questionAudio: "audio3/Question_5.mp3",
        options: [
            { text: "वसंत पंचमी के दौरान।", correct: false },
            { text: "शरद पूर्णिमा के दौरान।", correct: false },
            { text: "श्रावण वर्षा के दौरान।", correct: true },
            { text: "ग्रीष्म संक्रांति के दौरान।", correct: false }
        ]
    },
    {
        id: 6,
        question: "किस नृत्य में रंग-बिरंगे परिधानों में सजे पुरुष नर्तकों का समूह आस-पास के गाँवों का दौरा करता है?",
        questionAudio: "audio3/Question_6.mp3",
        options: [
            { text: "डंडारिया नृत्य में।", correct: true },
            { text: "बुट्टा बोम्मालु में।", correct: false },
            { text: "वीरनाट्यम नृत्य में।", correct: false },
            { text: "गोबी नृत्य समूह में।", correct: false }
        ]
    },
    {
        id: 7,
        question: "आंध्र प्रदेश का वीरनाट्यम नृत्य किस भगवान के सीधे वंशज होने का दावा करने वाले समुदाय द्वारा किया जाने वाला भक्तिपूर्ण अनुष्ठान है?",
        questionAudio: "audio3/Question_7.mp3",
        options: [
            { text: "देवी भद्रकाली के।", correct: false },
            { text: "भगवान कार्तिकेय के।", correct: false },
            { text: "भगवान विष्णु के।", correct: false },
            { text: "भगवान शिव के।", correct: true }
        ]
    },
    {
        id: 8,
        question: "वीरनाट्यम नृत्य में मुख्य रूप से किन वाद्ययंत्रों का प्रयोग किया जाता है?",
        questionAudio: "audio3/Question_8.mp3",
        options: [
            { text: "बांसुरी, पुंगी, मंजीरा और डमरू।", correct: false },
            { text: "तंबूरा, सूलेन, ढोल और ताशा।", correct: true },
            { text: "वीणा, मृदंगम, नादस्वरम और झांझ।", correct: false },
            { text: "घटम, खंजीरा, इडक्का और मजीरा।", correct: false }
        ]
    },
    {
        id: 9,
        question: "आंध्र प्रदेश के लोकनृत्य 'बुट्टा बोम्मालु' का शाब्दिक अर्थ क्या है?",
        questionAudio: "audio3/Question_9.mp3",
        options: [
            { text: "टोकरी के खिलौने।", correct: true },
            { text: "कागज की गुड़िया।", correct: false },
            { text: "मिट्टी की मूर्तियां।", correct: false },
            { text: "लकड़ी के मुखौटे।", correct: false }
        ]
    },
    {
        id: 10,
        question: "'पैरों की आवाज' किस नृत्य शब्द का आशय है?",
        questionAudio: "audio3/Question_10.mp3",
        options: [
            { text: "पेरिनी।", correct: false },
            { text: "बोम्मालु।", correct: false },
            { text: "धिम्सा।", correct: true },
            { text: "कुचिपुड़ी।", correct: false }
        ]
    },
    {
        id: 11,
        question: "बोदा धिम्सा और गुडुरी धिम्सा किस नृत्य के दो प्रकार हैं?",
        questionAudio: "audio3/Question_11.mp3",
        options: [
            { text: "माथुरी नृत्य के।", correct: false },
            { text: "धिम्सा नृत्य के।", correct: true },
            { text: "लंबाडी नृत्य के।", correct: false },
            { text: "डंडारिया नृत्य के。", correct: false }
        ]
    },
    {
        id: 12,
        question: "बथुकम्मा महोत्सव के समय महिलाओं द्वारा प्रस्तुत किए जाने वाले नृत्य के आखिरी दिन को क्या कहा जाता है?",
        questionAudio: "audio3/Question_12.mp3",
        options: [
            { text: "बोड्डा बथुकम्मा।", correct: false },
            { text: "एंगिली बथुकम्मा।", correct: false },
            { text: "वेन्ना बथुकम्मा।", correct: false },
            { text: "सदुला बथुकम्मा।", correct: true }
        ]
    },
    {
        id: 13,
        question: "तपेता गुल्लू नृत्य में एक व्यक्ति पानी का सजावटी बर्तन लेकर गाँव में घूमता है, यह बर्तन किस देवी का प्रतीक है?",
        questionAudio: "audio3/Question_13.mp3",
        options: [
            { text: "देवी येलम्मा का।", correct: false },
            { text: "देवी पोचम्मा का", correct: false },
            { text: "देवी मंगम्मा का।", correct: true },
            { text: "देवी पेद्दम्मा का।", correct: false }
        ]
    },
    {
        id: 14,
        question: "तेलंगाना और आंध्र प्रदेश की बंजारा जनजाति द्वारा कौन सा लोक नृत्य किया जाता है?",
        questionAudio: "audio3/Question_14.mp3",
        options: [
            { text: "लंबाडी नृत्य।", correct: true },
            { text: "सुआ नृत्य।", correct: false },
            { text: "गुसादी नृत्य।", correct: false },
            { text: "ढेंम्सा नृत्य।", correct: false }
        ]
    },
    {
        id: 15,
        question: "आंध्र प्रदेश की गोंड जनजाति के प्रसिद्ध 'गुसादी नृत्य' के विकास में योगदान के लिए 2021 में किसे पद्मश्री प्रदान किया गया?",
        questionAudio: "audio3/Question_15.mp3",
        options: [
            { text: "मुताथु भास्कर को।", correct: false },
            { text: "कनक राजू को।", correct: true },
            { text: "दर्शनम मोगिलैया को।", correct: false },
            { text: "रामसहाय पांडेय को।", correct: false }
        ]
    },
    {
        id: 16,
        question: "असम का कौन सा आदिवासी नृत्य है जिसमें रंगारंग कार्यक्रम की प्रस्तुति मुख्यतः बच्चों के द्वारा की जाती है?",
        questionAudio: "audio3/Question_16.mp3",
        options: [
            { text: "कनोई नृत्य।", correct: false },
            { text: "झुमुरा नृत्य।", correct: false },
            { text: "खेल गोपाल नृत्य।", correct: false },
            { text: "बिछुआ नृत्य।", correct: true }
        ]
    },
    {
        id: 17,
        question: "असम का 'बागुरुम्बा नृत्य' किस जनजाति द्वारा बोडो उत्सव के दौरान प्रस्तुत किया जाता है?",
        questionAudio: "audio3/Question_17.mp3",
        options: [
            { text: "कार्बी जनजाति द्वारा।", correct: false },
            { text: "बोडो जनजाति द्वारा।", correct: true },
            { text: "राभा जनजाति द्वारा।", correct: false },
            { text: "मिसिंग जनजाति द्वारा।", correct: false }
        ]
    },
    {
        id: 18,
        question: "असम के बागुरुम्बा नृत्य में प्रयुक्त होने वाला 'सिफुंग' वाद्ययंत्र क्या है?",
        questionAudio: "audio3/Question_18.mp3",
        options: [
            { text: "नगाड़ा।", correct: false },
            { text: "मंजीरा।", correct: false },
            { text: "बांसुरी।", correct: true },
            { text: "एकतारा।", correct: false }
        ]
    },
    {
        id: 19,
        question: "असम के नटपूजा नृत्य में पारंपरिक संगीत के साथ किन वाद्य यंत्रों का प्रयोग किया जाता है?",
        questionAudio: "audio3/Question_19.mp3",
        options: [
            { text: "ढोल, पेपा और ताल।", correct: true },
            { text: "खोल, गोगोना और डफ।", correct: false },
            { text: "मृदंग, सिफुंग और शंख।", correct: false },
            { text: "मादल, दोतारा और झांझ।", correct: false }
        ]
    },
    {
        id: 20,
        question: "असम के किस प्रसिद्ध नृत्य का इतिहास 3500 ईसा पूर्व से जुड़ा माना जाता है?",
        questionAudio: "audio3/Question_20.mp3",
        options: [
            { text: "सत्रिया नृत्य का।", correct: false },
            { text: "ओजापाली नृत्य का।", correct: false },
            { text: "देवदासी नृत्य का।", correct: false },
            { text: "बिहू नृत्य का।", correct: true }
        ]
    },
    {
        id: 21,
        question: "असम में अप्रैल महीने में कौन सा बिहू नृत्य किया जाता है?",
        questionAudio: "audio3/Question_21.mp3",
        options: [
            { text: "माघ बिहू।", correct: false },
            { text: "कोंगाली बिहू।", correct: false },
            { text: "रोगांली बिहू।", correct: true },
            { text: "भोगाली बिहू।", correct: false }
        ]
    },
    {
        id: 22,
        question: "अक्टूबर महीने में कौन सा बिहू नृत्य प्रस्तुत किया जाता है?",
        questionAudio: "audio3/Question_22.mp3",
        options: [
            { text: "बोहाग बिहू।", correct: false },
            { text: "कोंगाली बिहू।", correct: true },
            { text: "भोगाली बिहू।", correct: false },
            { text: "रोगांली बिहू।", correct: false }
        ]
    },
    {
        id: 23,
        question: "मुर्गों की लड़ाई और भैंसों की लड़ाई जैसे खेलों का आयोजन किस बिहू के दौरान होता है?",
        questionAudio: "audio3/Question_23.mp3",
        options: [
            { text: "कोंगाली बिहू (अक्टूबर) में।", correct: false },
            { text: "कटि बिहू (नवंबर) में।", correct: false },
            { text: "रोगांली बिहू (अप्रैल) में।", correct: false },
            { text: "भोगाली बिहू (जनवरी) में।", correct: true }
        ]
    },
    {
        id: 24,
        question: "महान असमिया संत और समाज सुधारक श्रीमंत शंकरदेव द्वारा रचित किस नृत्य की प्रस्तुति को 'भोना' कहा जाता है?",
        questionAudio: "audio3/Question_24.mp3",
        options: [
            { text: "अंकिया नाट।", correct: true },
            { text: "सत्रिया नृत्य।", correct: false },
            { text: "ओजापाली।", correct: false },
            { text: "बोरगीत गायन।", correct: false }
        ]
    },
    {
        id: 25,
        question: "असम के आदिवासी या चाय जनजाति समुदाय द्वारा कौन सा नृत्य प्रस्तुत किया जाता है?",
        questionAudio: "audio3/Question_25.mp3",
        options: [
            { text: "कलि गोपाल नृत्य।", correct: false },
            { text: "झूमर नृत्य।", correct: true },
            { text: "बगुरुम्बा नृत्य।", correct: false },
            { text: "देवधानी नृत्य।", correct: false }
        ]
    },
    {
        id: 26,
        question: "कठपुतली कला से विकसित असम का लोकनृत्य कौन सा माना जाता है?",
        questionAudio: "audio3/Question_26.mp3",
        options: [
            { text: "भोरताल नृत्य।", correct: false },
            { text: "अंकिया नाट नृत्य।", correct: false },
            { text: "ओजापाली नृत्य।", correct: true },
            { text: "पुतला नाच नृत्य।", correct: false }
        ]
    },
    {
        id: 27,
        question: "अरुणाचल प्रदेश के 'मुखौटा नृत्य' का संबंध किस नृत्य शैली से है?",
        questionAudio: "audio3/Question_27.mp3",
        options: [
            { text: "कथकली नृत्य शैली से।", correct: true },
            { text: "यक्षगान नृत्य शैली से।", correct: false },
            { text: "छऊ नृत्य शैली से.", correct: false },
            { text: "कृष्णट्टम नृत्य शैली से।", correct: false }
        ]
    },
    {
        id: 28,
        question: "'बुइया' लोक नृत्य का संबंध किस जनजाति से है?",
        questionAudio: "audio3/Question_28.mp3",
        options: [
            { text: "न्यीशी जनजाति से।", correct: false },
            { text: "वांचो जनजाति से।", correct: false },
            { text: "अपतानी जनजाति से।", correct: false },
            { text: "दिगारू मिश्मी जनजाति से।", correct: true }
        ]
    },
    {
        id: 29,
        question: "झूम खेती के मौसम की शुरुआत के जश्न के रूप में अरुणाचल प्रदेश में कौन सा नृत्य किया जाता है?",
        questionAudio: "audio3/Question_29.mp3",
        options: [
            { text: "बार्डो छम नृत्य।", correct: false },
            { text: "रेह नृत्य।", correct: false },
            { text: "पोनुंग नृत्य।", correct: true },
            { text: "चलो नृत्य।", correct: false }
        ]
    },
    {
        id: 30,
        question: "'वांचो' किस राज्य का एक विशेष जनजाति नृत्य है?",
        questionAudio: "audio3/Question_30.mp3",
        options: [
            { text: "नागालैंड राज्य का।", correct: false },
            { text: "अरुणाचल प्रदेश का।", correct: true },
            { text: "मिजोरम राज्य का।", correct: false },
            { text: "महानिपुर राज्य का।", correct: false }
        ]
    },
    {
        id: 31,
        question: "अरुणाचल प्रदेश के किस नृत्य में कलाकार रंगीन मुखौटे पहनकर अच्छाई और बुराई के बीच की लड़ाई को लागू करते हैं?",
        questionAudio: "audio3/Question_31.mp3",
        options: [
            { text: "क्षत्रिय मुखौटा नृत्य में।", correct: false },
            { text: "अजी लामू नृत्य में।", correct: false },
            { text: "छम याक नृत्य में।", correct: false },
            { text: "बार्डो छम नृत्य में।", correct: true }
        ]
    },
    {
        id: 32,
        question: "'लायन एण्ड पिकॉक डांस' अरुणाचल प्रदेश की किस जनजाति का एक लोकनृत्य है?",
        questionAudio: "audio3/Question_32.mp3",
        options: [
            { text: "मोनपा जनजाति का।", correct: true },
            { text: "सिंफो जनजाति का।", correct: false },
            { text: "शेरदुकपेन जनजाति का।", correct: false },
            { text: "खाम्पती जनजाति का।", correct: false }
        ]
    },
    {
        id: 33,
        question: "लायन एण्ड पिकॉक डांस में नर्तकियां किसके समान मुखौटे पहनती हैं?",
        questionAudio: "audio3/Question_33.mp3",
        options: [
            { text: "गरुड़ और भालू के सिर के समान।", correct: false },
            { text: "हंस और ड्रैगन के सिर के समान।", correct: false },
            { text: "मुर्गा और शेर के सिर के समान।", correct: true },
            { text: "मोर और बाघ के सिर के समान।", correct: false }
        ]
    },
    {
        id: 34,
        question: "'रिखमपाड़ा नृत्य' अरुणाचल प्रदेश की किस जनजाति द्वारा प्रस्तुत किया जाता है?",
        questionAudio: "audio3/Question_34.mp3",
        options: [
            { text: "गालो जनजाति द्वारा।", correct: false },
            { text: "निशि जनजाति द्वारा।", correct: true },
            { text: "मोनपा जनजाति द्वारा।", correct: false },
            { text: "तागिन जनजाति द्वारा।", correct: false }
        ]
    },
    {
        id: 35,
        question: "'पोपिर' नृत्य अरुणाचल प्रदेश की किस जनजाति से संबंधित है?",
        questionAudio: "audio3/Question_35.mp3",
        options: [
            { text: "खाम्बा जनजाति से।", correct: false },
            { text: "आदि जनजाति से।", correct: false },
            { text: "मिश्मी जनजाति से।", correct: false },
            { text: "गैलो जनजाति से।", correct: true }
        ]
    },
    {
        id: 36,
        question: "बिहार के 'बिदेसिया' नाटक की रचना किसने की थी?",
        questionAudio: "audio3/Question_36.mp3",
        options: [
            { text: "भिखारी ठाकुर ने।", correct: true },
            { text: "नागार्जुन ने।", correct: false },
            { text: "फणीश्वर नाथ रेणु ने।", correct: false },
            { text: "विद्यापति ने।", correct: false }
        ]
    },
    {
        id: 37,
        question: "परंपरा और आधुनिकता, शहरी और ग्रामीण, तथा अमीर-गरीब जैसे विरोधाभाषी विषय बिहार के किस नाटक से संबंधित हैं?",
        questionAudio: "audio3/Question_37.mp3",
        options: [
            { text: "जट-जटिन से।", correct: false },
            { text: "सामा चकेवा से।", correct: false },
            { text: "डोमकच से।", correct: false },
            { text: "बिदेसिया से।", correct: true }
        ]
    },
    {
        id: 38,
        question: "युगल नृत्य 'जट-जटिन' की उत्पत्ति कहाँ के राजा के दरबार में हुई मानी जाती है?",
        questionAudio: "audio3/Question_38.mp3",
        options: [
            { text: "भोजपुर के राजा कुंवर सिंह के दरबार में।", correct: false },
            { text: "मिथिला के राजा जनक के दरबार में।", correct: true },
            { text: "वैशाली के लिच्छवी शासकों के दरबार में।", correct: false },
            { text: "मगध के राजा बिंबिसार के दरबार में।", correct: false }
        ]
    },
    {
        id: 39,
        question: "जट-जटिन लोकनृत्य का मूल विषय क्या है?",
        questionAudio: "audio3/Question_39.mp3",
        options: [
            { text: "भाई और बहन के बीच का पवित्र बंधन।", correct: false },
            { text: "भगवान शिव और पार्वती का विवाह।", correct: false },
            { text: "जाट और जटिन की प्रेम कहानी।", correct: true },
            { text: "राधा और कृष्ण का रासलीला प्रसंग।", correct: false }
        ]
    },
    {
        id: 40,
        question: "बिहार के किस नृत्य की समानता गुजरात के 'गरबा' नृत्य से की जाती है?",
        questionAudio: "audio3/Question_40.mp3",
        options: [
            { text: "झुमरी नृत्य की।", correct: true },
            { text: "झिझिया नृत्य की।", correct: false },
            { text: "सोहर-खिलौना नृत्य की।", correct: false },
            { text: "कजरी नृत्य की।", correct: false }
        ]
    },
    {
        id: 41,
        question: "नवरात्रि उत्सव के दौरान देवी दुर्गा के तीन रूपों (पार्वती, लक्ष्मी और सरस्वती) को समर्पित कौन सा नृत्य बिहार में होता है?",
        questionAudio: "audio3/Question_41.mp3",
        options: [
            { text: "नटुआ नृत्य।", correct: false },
            { text: "झिझिया नृत्य।", correct: true },
            { text: "छऊ नृत्य।", correct: false },
            { text: "करमा नृत्य।", correct: false }
        ]
    },
    {
        id: 42,
        question: "नृत्य करने वाले योद्धाओं की शारीरिक उत्तेजना व गतिविधियों का विकास करना किस नृत्य का उद्देश्य है?",
        questionAudio: "audio3/Question_42.mp3",
        options: [
            { text: "छऊ नृत्य का।", correct: false },
            { text: "जदुर नृत्य का।", correct: false },
            { text: "संथाल नृत्य का।", correct: false },
            { text: "पाइका नृत्य का।", correct: true }
        ]
    },
    {
        id: 43,
        question: "छत्तीसगढ़ में 'राउतनाच' मुख्यतः किस समुदाय द्वारा किया जाता है?",
        questionAudio: "audio3/Question_43.mp3",
        options: [
            { text: "मुड़िया समुदाय द्वारा।", correct: false },
            { text: "हलबा समुदाय द्वारा।", correct: false },
            { text: "यदुवंशी समुदाय द्वारा।", correct: true },
            { text: "सतनामी समुदाय द्वारा।", correct: false }
        ]
    },
    {
        id: 44,
        question: "छत्तीसगढ़ में गोंड, बैगा और उरांव जैसे आदिवासी समूहों द्वारा कौन सा नृत्य प्रस्तुत किया जाता है?",
        questionAudio: "audio3/Question_44.mp3",
        options: [
            { text: "कर्मा नृत्य।", correct: true },
            { text: "ककसार नृत्य।", correct: false },
            { text: "भड़म नृत्य।", correct: false },
            { text: "सरहुल नृत्य।", correct: false }
        ]
    },
    {
        id: 45,
        question: "कर्मा नृत्य किन ऋतुओं का प्रतीक माना जाता है?",
        questionAudio: "audio3/Question_45.mp3",
        options: [
            { text: "ग्रीष्मकाल की समाप्ति और मानसून के आगमन का प्रतीक।", correct: false },
            { text: "वर्षाकाल की समाप्ति और वसंत ऋतु की शुरुआत का प्रतीक।", correct: true },
            { text: "वसंत ऋतु की समाप्ति और पतझड़ के आगमन का प्रतीक।", correct: false },
            { text: "शीतकाल की समाप्ति और ग्रीष्म ऋतु की शुरुआत का प्रतीक।", correct: false }
        ]
    },
    {
        id: 46,
        question: "छत्तीसगढ़ के 'सतनामी समुदाय' का प्रसिद्ध समारोह कौन सा नृत्य है?",
        questionAudio: "audio3/Question_46.mp3",
        options: [
            { text: "सुआ नृत्य।", correct: false },
            { text: "गेड़ी नृत्य।", correct: false },
            { text: "चदैनी नृत्य।", correct: false },
            { text: "पंथी नृत्य।", correct: true }
        ]
    },
    {
        id: 47,
        question: "पंथी नृत्य के प्रतिपादक राधेश्याम बारले को किस वर्ष पद्मश्री से सम्मानित किया गया?",
        questionAudio: "audio3/Question_47.mp3",
        options: [
            { text: "वर्ष 2019 में।", correct: false },
            { text: "वर्ष 2018 में।", correct: false },
            { text: "वर्ष 2021 में।", correct: true },
            { text: "वर्ष 2022 में।", correct: false }
        ]
    },
    {
        id: 48,
        question: "छत्तीसगढ़ के किस नृत्य में नर्तकी दो लंबे बांस या किसी निश्चित डंडे पर डांस करती है?",
        questionAudio: "audio3/Question_48.mp3",
        options: [
            { text: "गेड़ी नृत्य में।", correct: true },
            { text: "डंडा नृत्य में।", correct: false },
            { text: "परधौनी नृत्य में।", correct: false },
            { text: "हुल्की नृत्य में।", correct: false }
        ]
    },
    {
        id: 49,
        question: "छत्तीसगढ़ में 'सुआ नाच' को अन्य किस नाम से जाना जाता है?",
        questionAudio: "audio3/Question_49.mp3",
        options: [
            { text: "मयूर नृत्य के नाम से।", correct: false },
            { text: "तोता नृत्य के नाम से।", correct: true },
            { text: "मैना नृत्य के नाम से।", correct: false },
            { text: "कोयल नृत्य के नाम से।", correct: false }
        ]
    },
    {
        id: 50,
        question: "दीपावली पर यादव समुदाय द्वारा किए जाने वाले पारंपरिक 'राउतनाच' में क्या गाया जाता है?",
        questionAudio: "audio3/Question_50.mp3",
        options: [
            { text: "भजन।", correct: false },
            { text: "चौपाई।", correct: false },
            { text: "सोरठा।", correct: false },
            { text: "दोहे।", correct: true }
        ]
    },
    {
        id: 51,
        question: "महाभारत की कथा को प्रदर्शित करने वाला छत्तीसगढ़ का प्रसिद्ध नृत्य कौन सा है?",
        questionAudio: "audio3/Question_51.mp3",
        options: [
            { text: "भरथरी नृत्य।", correct: false },
            { text: "चंदैनी गायन।", correct: false },
            { text: "पण्डवानी नृत्य।", correct: true },
            { text: "बांस गीत नृत्य।", correct: false }
        ]
    },
    {
        id: 52,
        question: "छत्तीसगढ़ के ग्रामीण क्षेत्रों में लोककथाओं पर आधारित महत्त्वपूर्ण नृत्य कौन सा है?",
        questionAudio: "audio3/Question_52.mp3",
        options: [
            { text: "चदैनी नृत्य।", correct: true },
            { text: "रहस नृत्य।", correct: false },
            { text: "ददरिया नृत्य।", correct: false },
            { text: "नाचा नृत्य।", correct: false }
        ]
    },
    {
        id: 53,
        question: "फसल कटाई के बाद उत्साह की भावना के संचार के उद्देश्य से कौन सा नृत्य किया जाता है?",
        questionAudio: "audio3/Question_53.mp3",
        options: [
            { text: "मांदरी नृत्य।", correct: false },
            { text: "सैला नृत्य।", correct: true },
            { text: "डंडारी नृत्य।", correct: false },
            { text: "हुल्की पाटा।", correct: false }
        ]
    },
    {
        id: 54,
        question: "सर्दियों में चांदनी रातों में पवित्र मैदान (माड) में महिलाओं द्वारा गोवा का कौन सा नृत्य आयोजित किया जाता है?",
        questionAudio: "audio3/Question_54.mp3",
        options: [
            { text: "तलगड़ी नृत्य।", correct: false },
            { text: "गोफ नृत्य।", correct: false },
            { text: "कोली नृत्य।", correct: false },
            { text: "ढ़ालो (धालो) नृत्य।", correct: true }
        ]
    },
    {
        id: 55,
        question: "गोवा के सह नृत्य (Co-dance) के नाम से जाने जाने वाले 'देखनी नृत्य' को कौन प्रस्तुत करता है?",
        questionAudio: "audio3/Question_55.mp3",
        options: [
            { text: "पुरुष और महिला दोनों।", correct: false },
            { text: "छोटे बच्चों का समूह।", correct: false },
            { text: "केवल महिला नर्तकी।", correct: true },
            { text: "केवल पुरुष नर्तक।", correct: false }
        ]
    },
    {
        id: 56,
        question: "गोवा में चरवाहों के समुदाय द्वारा 'धनगर जी बीरा' नामक लोक देवता की पूजा के लिए कौन सा नृत्य होता है?",
        questionAudio: "audio3/Question_56.mp3",
        options: [
            { text: "धनगर नृत्य।", correct: true },
            { text: "तरनगमैल नृत्य।", correct: false },
            { text: "शिगमो नृत्य।", correct: false },
            { text: "रणमाले नृत्य।", correct: false }
        ]
    },
    {
        id: 57,
        question: "गोवा का सबसे लोकप्रिय नृत्य कौन सा है जो केवल महिलाओं द्वारा किया जाता है?",
        questionAudio: "audio3/Question_57.mp3",
        options: [
            { text: "मोरुलेम नृत्य।", correct: false },
            { text: "फुगड़ी नृत्य।", correct: true },
            { text: "कोरेडिन्हो नृत्य।", correct: false },
            { text: "मुसोल नृत्य।", correct: false }
        ]
    },
    {
        id: 58,
        question: "2023 में यूनेस्को की 15वीं अमूर्त सांस्कृतिक विरासत में गुजरात के किस नृत्य को शामिल किया गया?",
        questionAudio: "audio3/Question_58.mp3",
        options: [
            { text: "टिप्पणी नृत्य को।", correct: false },
            { text: "डांडिया रास को।", correct: false },
            { text: "भवाई नृत्य को।", correct: false },
            { text: "गरबा नृत्य को।", correct: true }
        ]
    },
    {
        id: 59,
        question: "गुजरात के डांडिया नृत्य में इस्तेमाल की जाने वाली लाठी को किसका प्रतीक माना जाता है?",
        questionAudio: "audio3/Question_59.mp3",
        options: [
            { text: "शिव के त्रिशूल के एक भाग का।", correct: false },
            { text: "किसानों द्वारा प्रयुक्त हल का।", correct: false },
            { text: "देवी दुर्गा की तलवार का।", correct: true },
            { text: "भगवान कृष्ण की बांसुरी का।", correct: false }
        ]
    },
    {
        id: 60,
        question: "हरियाणा के 'सांग' (स्वांग) नृत्य की अवधि कितनी होती है और सांग का क्या अर्थ है?",
        questionAudio: "audio3/Question_60.mp3",
        options: [
            { text: "इसकी अवधि 5 घंटे होती है और इसका अर्थ 'प्रच्छन्न या प्रतिरूपित करना' है।", correct: true },
            { text: "इसकी अवधि 3 घंटे होती है और इसका अर्थ 'कथा वाचन के साथ अभिनय करना' है।", correct: false },
            { text: "इसकी अवधि 4 घंटे होती है और इसका अर्थ 'मुखौटा पहनकर स्वांग रचना' है।", correct: false },
            { text: "इसकी अवधि 8 घंटे होती है और इसका अर्थ 'धार्मिक अनुष्ठान को पूरा करना' है।", correct: false }
        ]
    },
    {
        id: 61,
        question: "धोबी महिलाओं द्वारा कुम्मी नृत्य की कौन सी शैली प्रस्तुत की जाती है?",
        questionAudio: "audio3/Question_61.mp3",
        options: [
            { text: "मुलैअरि कुम्मी।", correct: false },
            { text: "दीपा कुम्मी।", correct: false },
            { text: "कुलवई कुम्मी।", correct: true },
            { text: "पूनथट्टी कुम्मी।", correct: false }
        ]
    },
    {
        id: 62,
        question: "दीपा कुम्मी नृत्य प्रस्तुत करते समय नर्तक अपने हाथ में क्या लेकर नृत्य करते हैं?",
        questionAudio: "audio3/Question_62.mp3",
        options: [
            { text: "दीपक।", correct: true },
            { text: "नारियल।", correct: false },
            { text: "पुष्प।", correct: false },
            { text: "कलश।", correct: false }
        ]
    },
    {
        id: 63,
        question: "आंध्र प्रदेश का गोबी नृत्य विशेष तौर पर किस अवसर पर प्रस्तुत किया जाता है?",
        questionAudio: "audio3/Question_63.mp3",
        options: [
            { text: "उत्सवों में।", correct: false },
            { text: "त्योहारों में।", correct: false },
            { text: "मेलों में।", correct: false },
            { text: "विवाहों में।", correct: true }
        ]
    },
    {
        id: 64,
        question: "कुम्मी नृत्य में महिलाएँ किस प्रकार से खड़ी होकर अपना प्रदर्शन करती हैं?",
        questionAudio: "audio3/Question_64.mp3",
        options: [
            { text: "पंक्ति में खड़ी होकर।", correct: false },
            { text: "गोलाकार में खड़ी होकर।", correct: true },
            { text: "अर्द्धचन्द्राकार में खड़ी होकर।", correct: false },
            { text: "आमने-सामने खड़ी होकर।", correct: false }
        ]
    },
    {
        id: 65,
        question: "आंध्र प्रदेश के गोबी नृत्य में संगीत वाद्ययंत्रों का उपयोग किस विशेष शोर के साथ किया जाता है?",
        questionAudio: "audio3/Question_65.mp3",
        options: [
            { text: "\"हो-हो\" के शोर के साथ।", correct: false },
            { text: "\"हुर्रे-हुर्रे\" के शोर के साथ।", correct: false },
            { text: "\"वाह-वाह\" के शोर के साथ।", correct: true },
            { text: "\"हा-हा\" के शोर के साथ।", correct: false }
        ]
    },
    {
        id: 66,
        question: "मोरी, किरीडी, डापू, टुडुम और जोडुकोमुलु वाद्य यंत्रों का प्रयोग मुख्य रूप से किस नृत्य में होता है?",
        questionAudio: "audio3/Question_66.mp3",
        options: [
            { text: "धिम्सा नृत्य में।", correct: true },
            { text: "माथुरी नृत्य में।", correct: false },
            { text: "लंबाडी नृत्य में।", correct: false },
            { text: "वीरनाट्यम नृत्य में।", correct: false }
        ]
    },
    {
        id: 67,
        question: "आंध्र प्रदेश का 'तपेता गुल्लू' भक्ति नृत्य कितने पुरुषों के समूह द्वारा प्रस्तुत किया जाता है?",
        questionAudio: "audio3/Question_67.mp3",
        options: [
            { text: "दस से बीस पुरुषों के समूह द्वारा।", correct: false },
            { text: "पंद्रह से पच्चीस पुरुषों के समूह द्वारा।", correct: false },
            { text: "बीस से चालीस पुरुषों के समूह द्वारा।", correct: false },
            { text: "बारह से तीस पुरुषों के समूह द्वारा।", correct: true }
        ]
    },
    {
        id: 68,
        question: "घंटा मर्दाला, भामकल्पम, दप्पू और कोलाट्टम किस राज्य के प्रमुख लोक नृत्य हैं?",
        questionAudio: "audio3/Question_68.mp3",
        options: [
            { text: "कर्नाटक के।", correct: false },
            { text: "आंध्र प्रदेश के।", correct: true },
            { text: "तेलंगाना के।", correct: false },
            { text: "तमिलनाडु के।", correct: false }
        ]
    },
    {
        id: 69,
        question: "असम के बागुरुम्बा नृत्य में प्रयुक्त होने वाला 'सेरजा' किस प्रकार का वाद्ययंत्र है?",
        questionAudio: "audio3/Question_69.mp3",
        options: [
            { text: "एक फूँकदार वाद्ययंत्र।", correct: false },
            { text: "एक झुका हुआ वाद्ययंत्र।", correct: true },
            { text: "एक तारवाला वाद्ययंत्र।", correct: false },
            { text: "एक तालवाला वाद्ययंत्र।", correct: false }
        ]
    },
    {
        id: 70,
        question: "बागुरुम्बा नृत्य में प्रयुक्त 'थरखा' नामक वाद्ययंत्र किससे बना होता है?",
        questionAudio: "audio3/Question_70.mp3",
        options: [
            { text: "बांस के टुकड़े से।", correct: true },
            { text: "लकड़ी के टुकड़े से।", correct: false },
            { text: "पीतल की पत्ती से।", correct: false },
            { text: "मिट्टी के बर्तन से।", correct: false }
        ]
    },
    {
        id: 71,
        question: "लकड़ी और बकरी की खाल से बना ढोल, जिसे 'खाम' या 'मदल' कहा जाता है, मुख्य रूप से किस नृत्य में बजाया जाता है?",
        questionAudio: "audio3/Question_71.mp3",
        options: [
            { text: "बिहू नृत्य में।", correct: false },
            { text: "ओजापाली नृत्य में।", correct: false },
            { text: "बागुरुम्बा नृत्य में।", correct: true },
            { text: "भोरताल नृत्य में।", correct: false }
        ]
    },
    {
        id: 72,
        question: "असमिया नववर्ष का स्वागत करने वाले गीतों का संबंध मुख्य रूप से किस नृत्य से है?",
        questionAudio: "audio3/Question_72.mp3",
        options: [
            { text: "सत्रिया नृत्य से।", correct: false },
            { text: "बागुरुम्बा नृत्य से।", correct: false },
            { text: "ओजापाली नृत्य से।", correct: false },
            { text: "बिहू नृत्य से।", correct: true }
        ]
    },
    {
        id: 73,
        question: "ताला, गोगोना, टोका और जुटूली वाद्य यंत्रों का प्रयोग असम के किस लोकनृत्य में किया जाता है?",
        questionAudio: "audio3/Question_73.mp3",
        options: [
            { text: "बिहू नृत्य में।", correct: true },
            { text: "झूमर नृत्य में।", correct: false },
            { text: "बिछुआ नृत्य में।", correct: false },
            { text: "Devधानी नृत्य में।", correct: false }
        ]
    },
    {
        id: 74,
        question: "असम के किस नृत्य में कलाकार एक घेरा या पंक्ति बनाते हैं और संगीत की ताल पर समन्वित पैटर्न पर चलते हैं?",
        questionAudio: "audio3/Question_74.mp3",
        options: [
            { text: "कलि गोपाल नृत्य में।", correct: false },
            { text: "नटपूजा नृत्य में।", correct: true },
            { text: "खेल गोपाल नृत्य में।", correct: false },
            { text: "बागुरुम्बा नृत्य में।", correct: false }
        ]
    },
    {
        id: 75,
        question: "कलिगोपाल, खेल गोपाल और महारास किस राज्य के लोक नृत्य हैं?",
        questionAudio: "audio3/Question_75.mp3",
        options: [
            { text: "ओडिशा के।", correct: false },
            { text: "महानिपुर के।", correct: false },
            { text: "असम के।", correct: true },
            { text: "त्रिपुरा के।", correct: false }
        ]
    },
    {
        id: 76,
        question: "बोडो, देवधनी और ओजापाली किस राज्य के प्रमुख लोक नृत्य हैं?",
        questionAudio: "audio3/Question_76.mp3",
        options: [
            { text: "मिजोरम के।", correct: false },
            { text: "मेघालय के।", correct: false },
            { text: "नागालैंड के।", correct: false },
            { text: "असम के।", correct: true }
        ]
    },
    {
        id: 77,
        question: "छालो, पासी कोंगकी और लायन एंड पिकॉक किस राज्य के प्रमुख लोक नृत्य हैं?",
        questionAudio: "audio3/Question_77.mp3",
        options: [
            { text: "सिक्किम के।", correct: false },
            { text: "महानिपुर के।", correct: false },
            { text: "अरुणाचल प्रदेश के।", correct: true },
            { text: "नागालैंड के।", correct: false }
        ]
    },
    {
        id: 78,
        question: "पावरिया, कजरी, छऊ और कर्मा लोक नृत्य भारत के किस राज्य से संबंधित हैं?",
        questionAudio: "audio3/Question_78.mp3",
        options: [
            { text: "बिहार से।", correct: true },
            { text: "उत्तर प्रदेश से।", correct: false },
            { text: "झारखंड से।", correct: false },
            { text: "छत्तीसगढ़ से।", correct: false }
        ]
    },
    {
        id: 79,
        question: "झिझिया, झरनी, जुमारी और फगुआ नृत्यों का संबंध भारत के किस राज्य से है?",
        questionAudio: "audio3/Question_79.mp3",
        options: [
            { text: "राजस्थान से।", correct: false },
            { text: "बिहार से।", correct: true },
            { text: "उत्तर प्रदेश से।", correct: false },
            { text: "मध्य प्रदेश से।", correct: false }
        ]
    },
    {
        id: 80,
        question: "डोमकच, जोगीड़ा, कठघोड़वा और नटुआ किस राज्य के प्रसिद्ध लोक नृत्य हैं?",
        questionAudio: "audio3/Question_80.mp3",
        options: [
            { text: "उत्तराखंड के।", correct: false },
            { text: "हरियाणा के।", correct: false },
            { text: "झारखंड के।", correct: false },
            { text: "बिहार के।", correct: true }
        ]
    },
    {
        id: 81,
        question: "डगला, पाली, टपाली और नवारानी नृत्यों का संबंध किस राज्य से है?",
        questionAudio: "audio3/Question_81.mp3",
        options: [
            { text: "छत्तीसगढ़ से।", correct: true },
            { text: "Maharashtra से।", correct: false },
            { text: "मध्य प्रदेश से।", correct: false },
            { text: "ओडिशा से।", correct: false }
        ]
    },
    {
        id: 82,
        question: "बागमती, कापालिक, ककसार और सरहुल किस राज्य के जनजातीय एवं लोक नृत्य हैं?",
        questionAudio: "audio3/Question_82.mp3",
        options: [
            { text: "पश्चिम बंगाल के।", correct: false },
            { text: "ओडिशा के।", correct: false },
            { text: "छत्तीसगढ़ के।", correct: true },
            { text: "झारखंड के।", correct: false }
        ]
    },
    {
        id: 83,
        question: "परब, मादरी और दमनच किस राज्य में किए जाने वाले लोकनृत्य हैं?",
        questionAudio: "audio3/Question_83.mp3",
        options: [
            { text: "राजस्थान में।", correct: false },
            { text: "झारखंड में।", correct: false },
            { text: "मध्य प्रदेश में।", correct: false },
            { text: "छत्तीसगढ़ में।", correct: true }
        ]
    },
    {
        id: 84,
        question: "गोवा का ढ़ालो (धालो) नृत्य महिलाओं द्वारा किस कृषि कार्य के संपन्न होने के बाद आयोजित किया जाता है?",
        questionAudio: "audio3/Question_84.mp3",
        options: [
            { text: "बीजों के रोपण और सिंचाई करने के बाद।", correct: false },
            { text: "फसल को काटने और संग्रहित करने के बाद।", correct: true },
            { text: "खेतों की जुताई और बुवाई करने के बाद।", correct: false },
            { text: "अनाज की छँटाई और बिक्री करने के बाद।", correct: false }
        ]
    },
    {
        id: 85,
        question: "गोवा का ढ़ालो (धालो) नृत्य किन समुदायों द्वारा विशेष रूप से किया जाता है?",
        questionAudio: "audio3/Question_85.mp3",
        options: [
            { text: "भंडारी नाइक, कुनबी, गौड़ी और गैबित समुदाय द्वारा।", correct: true },
            { text: "कोली, वरली, भील और गोंड समुदाय द्वारा।", correct: false },
            { text: "धनगर, वेलीप, गावड़ा और कुनबी समुदाय द्वारा।", correct: false },
            { text: "कड़वा, पाटीदार, रबारी और भील समुदाय द्वारा।", correct: false }
        ]
    },
    {
        id: 86,
        question: "दशावतार, टोनीमेल, घोड़े मोदनी और कोरेडिन्हो लोकनृत्य किस राज्य से संबंधित हैं?",
        questionAudio: "audio3/Question_86.mp3",
        options: [
            { text: "केरल से।", correct: false },
            { text: "कर्नाटक से।", correct: false },
            { text: "गोवा से।", correct: true },
            { text: "गुजरात से।", correct: false }
        ]
    },
    {
        id: 87,
        question: "कुनबी, तलगडी, जागोर, भोंवादो और शिग्मो नृत्यों का संबंध किस राज्य से है?",
        questionAudio: "audio3/Question_87.mp3",
        options: [
            { text: "महाराष्ट्र से।", correct: false },
            { text: "गुजरात से।", correct: false },
            { text: "कर्नाटक से।", correct: false },
            { text: "गोवा से।", correct: true }
        ]
    },
    {
        id: 88,
        question: "मुसल नाच किस राज्य का प्रसिद्ध लोक नृत्य है?",
        questionAudio: "audio3/Question_88.mp3",
        options: [
            { text: "महाराष्ट्र का।", correct: false },
            { text: "गोवा का।", correct: true },
            { text: "आंध्र प्रदेश का।", correct: false },
            { text: "कर्नाटक का।", correct: false }
        ]
    },
    {
        id: 89,
        question: "गुजरात के किस लोकप्रिय नृत्य का प्रदर्शन पूरे नौ रातों तक नवरात्रि के समय किया जाता है?",
        questionAudio: "audio3/Question_89.mp3",
        options: [
            { text: "गरबा नृत्य का।", correct: true },
            { text: "टिप्पणी नृत्य का।", correct: false },
            { text: "डांडिया रास का।", correct: false },
            { text: "भवाई नृत्य का।", correct: false }
        ]
    },
    {
        id: 90,
        question: "गुजरात के गरबा नृत्य में मुख्य रूप से किस वस्तु का प्रयोग किया जाता है?",
        questionAudio: "audio3/Question_90.mp3",
        options: [
            { text: "मटके का।", correct: false },
            { text: "तलवार का।", correct: false },
            { text: "डांडिया का।", correct: true },
            { text: "दीपक का।", correct: false }
        ]
    },
    {
        id: 91,
        question: "गुजरात के किस लोकनृत्य की उत्पत्ति मजदूरों के बीच हुई थी जो अब त्योहारों और विवाहों में किया जाता है?",
        questionAudio: "audio3/Question_91.mp3",
        options: [
            { text: "गरबा नृत्य की।", correct: false },
            { text: "भवाई नृत्य की।", correct: false },
            { text: "हुडो नृत्य की।", correct: false },
            { text: "टिप्पाणी नृत्य की।", correct: true }
        ]
    },
    {
        id: 92,
        question: "झांझ, मंजीरा, तबला, ढोल और शहनाई का प्रयोग गुजरात के किस नृत्य में होता है?",
        questionAudio: "audio3/Question_92.mp3",
        options: [
            { text: "गरबा नृत्य में।", correct: false },
            { text: "टिप्पाणी नृत्य में।", correct: true },
            { text: "भवाई नृत्य में।", correct: false },
            { text: "डांडिया रास में।", correct: false }
        ]
    },
    {
        id: 93,
        question: "विंचहुडो, जुरिथुन, करनीहारी और भवई किस राज्य के पारंपरिक नृत्य हैं?",
        questionAudio: "audio3/Question_93.mp3",
        options: [
            { text: "मध्य प्रदेश के।", correct: false },
            { text: "राजस्थान के।", correct: false },
            { text: "महाराष्ट्र के।", correct: false },
            { text: "गुजरात के।", correct: true }
        ]
    },
    {
        id: 94,
        question: "हुडो, पधार, मुटुकडी और कहल्या लोकनृत्य भारत के किस राज्य में किए जाते हैं?",
        questionAudio: "audio3/Question_94.mp3",
        options: [
            { text: "राजस्थान में।", correct: false },
            { text: "महाराष्ट्र में।", correct: false },
            { text: "गुजरात में।", correct: true },
            { text: "मध्य प्रदेश में।", correct: false }
        ]
    },
    {
        id: 95,
        question: "गोपरास, कनाबी रास, सिद्धी धमाल और डांगी किस राज्य के लोक नृत्य हैं?",
        questionAudio: "audio3/Question_95.mp3",
        options: [
            { text: "गुजरात के।", correct: true },
            { text: "गोवा के।", correct: false },
            { text: "राजस्थान के।", correct: false },
            { text: "महाराष्ट्र के।", correct: false }
        ]
    },
    {
        id: 96,
        question: "Haryana में फाग नृत्य फाल्गुन के महीने में किनके द्वारा प्रस्तुत किया जाता है?",
        questionAudio: "audio3/Question_96.mp3",
        options: [
            { text: "सैनिकों द्वारा।", correct: false },
            { text: "किसानों द्वारा।", correct: true },
            { text: "चरवाहों द्वारा।", correct: false },
            { text: "कारीगरों द्वारा।", correct: false }
        ]
    },
    {
        id: 97,
        question: "हरियाणा के लोक नृत्यों की सूची में शामिल 'घूमर' मूल रूप से किस राज्य का प्रसिद्ध लोकनृत्य है?",
        questionAudio: "audio3/Question_97.mp3",
        options: [
            { text: "पंजाब का।", correct: false },
            { text: "उत्तर प्रदेश का।", correct: false },
            { text: "राजस्थान का।", correct: true },
            { text: "गुजरात का।", correct: false }
        ]
    },
    {
        id: 98,
        question: "झूमर, डाफ, धमाल और मंजीरा लोक नृत्य किस राज्य से संबंधित हैं?",
        questionAudio: "audio3/Question_98.mp3",
        options: [
            { text: "हरियाणा से।", correct: true },
            { text: "राजस्थान से।", correct: false },
            { text: "पंजाब से।", correct: false },
            { text: "हिमाचल प्रदेश से।", correct: false }
        ]
    },
    {
        id: 99,
        question: "गुग्गा, लूर, छठी नृत्य और खोरिया नृत्यों का आयोजन मुख्य रूप से किस राज्य में होता है?",
        questionAudio: "audio3/Question_99.mp3",
        options: [
            { text: "उत्तर प्रदेश में।", correct: false },
            { text: "हिमाचल प्रदेश में।", correct: false },
            { text: "पंजाब में।", correct: false },
            { text: "हरियाणा में।", correct: true }
        ]
    },
    {
        id: 100,
        question: "हरियाणा में रासलीला, खेड़ा, लास्य और तांडव को किस रूप में जाना जाता है?",
        questionAudio: "audio3/Question_100.mp3",
        options: [
            { text: "धार्मिक अनुष्ठान के रूप में।", correct: false },
            { text: "लोक नृत्य के रूप में।", correct: true },
            { text: "नाट्य मंचन के रूप में।", correct: false },
            { text: "संगीतमय गायन के रूप में।", correct: false }
        ]
    }
];

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
// AUDIO MANAGER
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

        if (!this.audioNode) {
            this.audioNode = new Audio();
        }

        this.audioNode.src = url;
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
            let fullText = `${q.question}. ${q.options[0]}. ${q.options[1]}. ${q.options[2]}. ${q.options[3]}.`;
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
    startSequence(true); // बिना किसी देरी के तुरंत ऑडियो शुरू होगा
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
    state.autoReadTimeoutId = setTimeout(() => {
        navigateQuestion(1);
    }, 400); // अब आधा समय (400ms) इंतज़ार करेगा
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
// PERSISTENCE
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
    localStorage.setItem('folkdances_part1_progress', JSON.stringify(dataToSave));
}

function loadProgress() {
    const raw = localStorage.getItem('folkdances_part1_progress');
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            if (parsed && Object.keys(parsed.answers || {}).length > 0) {
                elements.resumeModal.classList.remove('hidden');
            }
        } catch (e) {
            localStorage.removeItem('folkdances_part1_progress');
        }
    }
}

function restoreQuizState() {
    const raw = localStorage.getItem('folkdances_part1_progress');
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
    localStorage.removeItem('folkdances_part1_progress');
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