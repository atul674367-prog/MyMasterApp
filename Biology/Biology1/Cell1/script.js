// ============================================================================
// QUIZ DATA DEFINITION (Mapped accurately to 84 questions in Hindi)
// ============================================================================
const quizData = [
    {
        id: 1,
        question: "जीवविज्ञान (Biology) शब्द किस भाषा से लिया गया है?",
        questionAudio: "audio1/Question_1.mp3",
        options: [
            { text: "लैटिन", correct: false },
            { text: "ग्रीक", correct: true },
            { text: "फ्रेंच", correct: false },
            { text: "जर्मन", correct: false }
        ]
    },
    {
        id: 2,
        question: "'जीवविज्ञान' (Biology) शब्द किन दो ग्रीक शब्दों से मिलकर बना है?",
        questionAudio: "audio1/Question_2.mp3",
        options: [
            { text: "बायो और ग्राफिया (Bio & Graphia)", correct: false },
            { text: "बायोस और लोगोस (Bios & Logos)", correct: true },
            { text: "जू और लोगोस (Zoo & Logos)", correct: false },
            { text: "बोटैन और ग्राफिया (Botane & Graphia)", correct: false }
        ]
    },
    {
        id: 3,
        question: "ग्रीक शब्द 'बायोस' (Bios) का क्या अर्थ है?",
        questionAudio: "audio1/Question_3.mp3",
        options: [
            { text: "अध्ययन", correct: false },
            { text: "जीवन", correct: false },
            { text: "सजीव", correct: true },
            { text: "भाषा", correct: false }
        ]
    },
    {
        id: 4,
        question: "ग्रीक शब्द 'लोगोस' (Logos) का क्या अर्थ है?",
        questionAudio: "audio1/Question_4.mp3",
        options: [
            { text: "अध्ययन", correct: true },
            { text: "सजीव", correct: false },
            { text: "जीवन", correct: false },
            { text: "विज्ञान", correct: false }
        ]
    },
    {
        id: 5,
        question: "जीवविज्ञान की सबसे सटीक परिभाषा क्या है?",
        questionAudio: "audio1/Question_5.mp3",
        options: [
            { text: "जानवरों का अध्ययन", correct: false },
            { text: "पौधों का वैज्ञानिक अध्ययन", correct: false },
            { text: "जीवन का वैज्ञानिक अध्ययन", correct: true },
            { text: "सूक्ष्मजीवों का अध्ययन", correct: false }
        ]
    },
    {
        id: 6,
        question: "जंतुओं के अध्ययन से संबंधित जीव विज्ञान की शाखा को क्या कहा जाता है?",
        questionAudio: "audio1/Question_6.mp3",
        options: [
            { text: "वनस्पति विज्ञान (Botany)", correct: false },
            { text: "सूक्ष्मजैविकी (Microbiology)", correct: false },
            { text: "आनुवंशिकी (Genetics)", correct: false },
            { text: "जंतु विज्ञान (Zoology)", correct: true }
        ]
    },
    {
        id: 7,
        question: "पौधों के अध्ययन को क्या कहा जाता है?",
        questionAudio: "audio1/Question_7.mp3",
        options: [
            { text: "जंतु विज्ञान (Zoology)", correct: false },
            { text: "वनस्पति विज्ञान (Botany)", correct: true },
            { text: "सूक्ष्मजैविकी (Microbiology)", correct: false },
            { text: "साइटोलॉजी (Cytology)", correct: false }
        ]
    },
    {
        id: 8,
        question: "सूक्ष्मजीवों (microorganisms) का अध्ययन जीव विज्ञान की किस शाखा के अंतर्गत आता है?",
        questionAudio: "audio1/Question_8.mp3",
        options: [
            { text: "आनुवंशिकी (Genetics)", correct: false },
            { text: "जंतु विज्ञान (Zoology)", correct: false },
            { text: "सूक्ष्मजैविकी (Microbiology)", correct: true },
            { text: "वनस्पति विज्ञान (Botany)", correct: false }
        ]
    },
    {
        id: 9,
        question: "जीव विज्ञान की वह शाखा जो जीवों के आनुवंशिक लक्षणों (Genetic characters) से संबंधित है, क्या कहलाती है?",
        questionAudio: "audio1/Question_9.mp3",
        options: [
            { text: "विकासीय जीव विज्ञान (Evolutionary biology)", correct: false },
            { text: "आनुवंशिकी (Genetics)", correct: true },
            { text: "मानवशास्त्र (Anthropology)", correct: false },
            { text: "जैव प्रौद्योगिकी (Biotechnology)", correct: false }
        ]
    },
    {
        id: 10,
        question: "'जीवविज्ञान' (Biology) का जनक किसे माना जाता है?",
        questionAudio: "audio1/Question_10.mp3",
        options: [
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "थियोफ्रेस्टस", correct: false },
            { text: "लीउवेनहॉक", correct: false },
            { text: "अरस्तू", correct: true }
        ]
    },
    {
        id: 11,
        question: "'जंतु विज्ञान' (Zoology) का जनक किसे कहा जाता है?",
        questionAudio: "audio1/Question_11.mp3",
        options: [
            { text: "अरस्तू", correct: true },
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "थियोफ्रेस्टस", correct: false },
            { text: "रॉबर्ट हुक", correct: false }
        ]
    },
    {
        id: 12,
        question: "'वनस्पति विज्ञान' (Botany) के जनक के रूप में किसे जाना जाता है?",
        questionAudio: "audio1/Question_12.mp3",
        options: [
            { text: "लीउवेनहॉक", correct: false },
            { text: "अरस्तू", correct: false },
            { text: "थियोफ्रेस्टस", correct: true },
            { text: "ग्रेगर मेंडल", correct: false }
        ]
    },
    {
        id: 13,
        question: "निम्नलिखित में से किसे 'आनुवंशिकी का जनक' (Father of Genetics) कहा जाता है?",
        questionAudio: "audio1/Question_13.mp3",
        options: [
            { text: "चार्ल्स रॉबर्ट डार्विन", correct: false },
            { text: "रॉबर्ट हुक", correct: false },
            { text: "जेम्स वाटसन", correct: false },
            { text: "ग्रेगर जॉन मेंडल", correct: true }
        ]
    },
    {
        id: 14,
        question: "'सूक्ष्मजैविकी' (Microbiology) का जनक किसे माना जाता है?",
        questionAudio: "audio1/Question_14.mp3",
        options: [
            { text: "अरस्तू", correct: false },
            { text: "लीउवेनहॉक", correct: true },
            { text: "थियोफ्रेस्टस", correct: false },
            { text: "ग्रेगर मेंडल", correct: false }
        ]
    },
    {
        id: 15,
        question: "निम्नलिखित में से कौन सा वैज्ञानिक दो अलग-अलग क्षेत्रों, जीव विज्ञान और जंतु विज्ञान, के जनक के रूप में पहचाना जाता है?",
        questionAudio: "audio1/Question_15.mp3",
        options: [
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "थियोफ्रेस्टस", correct: false },
            { text: "अरस्तू", correct: true },
            { text: "लीउवेनहॉक", correct: false }
        ]
    },
    {
        id: 16,
        question: "कोशिकाओं के अध्ययन को क्या कहा जाता है?",
        questionAudio: "audio1/Question_16.mp3",
        options: [
            { text: "सीरोलॉजी (Serology)", correct: false },
            { text: "साइटोप्लाज्म (Cytoplasm)", correct: false },
            { text: "साइटोलॉजी (Cytology)", correct: true },
            { text: "इटियोलॉजी (Etiology)", correct: false }
        ]
    },
    {
        id: 17,
        question: "सजीवों के शरीर की सबसे छोटी जीवित इकाई क्या है?",
        questionAudio: "audio1/Question_17.mp3",
        options: [
            { text: "ऊतक (Tissue)", correct: false },
            { text: "अंग (Organ)", correct: false },
            { text: "कोशिका (Cell)", correct: true },
            { text: "अंग तंत्र (Organ System)", correct: false }
        ]
    },
    {
        id: 18,
        question: "सजीवों की 'क्रियात्मक और संरचनात्मक इकाई' किसे कहा जाता है?",
        questionAudio: "audio1/Question_18.mp3",
        options: [
            { text: "कोशिका (Cell)", correct: true },
            { text: "ऊतक (Tissue)", correct: false },
            { text: "युग्मनज (Zygote)", correct: false },
            { text: "शरीर (Body)", correct: false }
        ]
    },
    {
        id: 19,
        question: "जैविक संगठन के पदानुक्रम में, कोशिकाओं का समूह (Group) मिलकर क्या बनाता है?",
        questionAudio: "audio1/Question_19.mp3",
        options: [
            { text: "अंग (Organ)", correct: false },
            { text: "ऊतक (Tissue)", correct: true },
            { text: "अंग तंत्र (Organ System)", correct: false },
            { text: "शरीर (Body)", correct: false }
        ]
    },
    {
        id: 20,
        question: "जैविक संगठन के पदानुक्रम के अनुसार, ऊतक तंत्र (Tissue System) मिलकर किसका निर्माण करते हैं?",
        questionAudio: "audio1/Question_20.mp3",
        options: [
            { text: "कोशिका (Cell)", correct: false },
            { text: "ऊतक (Tissue)", correct: false },
            { text: "अंग (Organ)", correct: true },
            { text: "शरीर (Body)", correct: false }
        ]
    },
    {
        id: 21,
        question: "निम्नलिखित में से कौन सा 'अंग' (Organ) के उदाहरण के रूप में सूचीबद्ध है?",
        questionAudio: "audio1/Question_21.mp3",
        options: [
            { text: "यकृत (Liver)", correct: true },
            { text: "पाचन (Digestion)", correct: false },
            { text: "ऊतक तंत्र (Tissue System)", correct: false },
            { text: "शरीर (Body)", correct: false }
        ]
    },
    {
        id: 22,
        question: "यकृत (Liver) का कार्य क्या है?",
        questionAudio: "audio1/Question_22.mp3",
        options: [
            { text: "श्वसन (Respiration)", correct: false },
            { text: "परिसंचरण (Circulation)", correct: false },
            { text: "उत्सर्जन (Excretion)", correct: false },
            { text: "पाचन (Digestion)", correct: true }
        ]
    },
    {
        id: 23,
        question: "शुक्राणु (sperm) और अंडाणु (ovum) के संयोजन की प्रक्रिया को क्या कहते हैं?",
        questionAudio: "audio1/Question_23.mp3",
        options: [
            { text: "कोशिका विभाजन (Cell division)", correct: false },
            { text: "ऊतक निर्माण (Tissue formation)", correct: false },
            { text: "निषेचन (Fertilization)", correct: true },
            { text: "युग्मनज (Zygote)", correct: false }
        ]
    },
    {
        id: 24,
        question: "निषेचन (Fertilization) के बाद बनने वाली एकल कोशिका (single cell) को क्या कहा जाता है?",
        questionAudio: "audio1/Question_24.mp3",
        options: [
            { text: "शुक्राणु (Sperm)", correct: false },
            { text: "अंडाणु (Ovum)", correct: false },
            { text: "ऊतक (Tissue)", correct: false },
            { text: "युग्मनज (Zygote)", correct: true }
        ]
    },
    {
        id: 25,
        question: "एक युग्मनज (Zygote) क्या है?",
        questionAudio: "audio1/Question_25.mp3",
        options: [
            { text: "एक बहु-कोशिकीय संरचना", correct: false },
            { text: "एक प्रकार का ऊतक", correct: false },
            { text: "एक एकल कोशिका", correct: true },
            { text: "एक अंग", correct: false }
        ]
    },
    {
        id: 26,
        question: "जीव विज्ञान की कौन-सी शाखा वंशानुक्रम स्वरूप के माध्यम पर केंद्रित है?",
        questionAudio: "audio1/Question_26.mp3",
        options: [
            { text: "विकासीय जीव विज्ञान (Evolutionary biology)", correct: false },
            { text: "मानवशास्त्र (Anthropology)", correct: false },
            { text: "आनुवंशिकी (Genetics)", correct: true },
            { text: "जैव प्रौद्योगिकी (Biotechnology)", correct: false }
        ]
    },
    {
        id: 27,
        question: "जैविक संगठन का सही क्रम क्या है?",
        questionAudio: "audio1/Question_27.mp3",
        options: [
            { text: "कोशिका → अंग → ऊतक → शरीर", correct: false },
            { text: "कोशिका → ऊतक → अंग → अंग तंत्र", correct: true },
            { text: "ऊतक → कोशिका → अंग → शरीर", correct: false },
            { text: "अंग → ऊतक → कोशिका → अंग तंत्र", correct: false }
        ]
    },
    {
        id: 28,
        question: "एकल कोशिका से बने जीवों को क्या कहा जाता है?",
        questionAudio: "audio1/Question_28.mp3",
        options: [
            { text: "बहुकोशिकीय (Multicellular)", correct: false },
            { text: "अकोशिकीय (Acellular)", correct: false },
            { text: "पूर्व-कोशिकीय (Prokaryotic)", correct: false },
            { text: "एककोशिकीय (Unicellular)", correct: true }
        ]
    },
    {
        id: 29,
        question: "अनेक कोशिकाओं से बने जीवों को क्या कहा जाता है?",
        questionAudio: "audio1/Question_29.mp3",
        options: [
            { text: "एककोशिकीय (Unicellular)", correct: false },
            { text: "बहुकोशिकीय (Multicellular)", correct: true },
            { text: "सूक्ष्मजीव (Microorganism)", correct: false },
            { text: "प्रोकैरियोट (Prokaryote)", correct: false }
        ]
    },
    {
        id: 30,
        question: "अमीबा (Amoeba) किस प्रकार का जीव है?",
        questionAudio: "audio1/Question_30.mp3",
        options: [
            { text: "बहुकोशिकीय जंतु", correct: false },
            { text: "एककोशिकीय जीव", correct: true },
            { text: "बहुकोशिकीय पादप", correct: false },
            { text: "कोशिका रहित जीव", correct: false }
        ]
    },
    {
        id: 31,
        question: "यीस्ट (Yeast), जो एक कवक (fungus) है, किस श्रेणी में आता है?",
        questionAudio: "audio1/Question_31.mp3",
        options: [
            { text: "बहुकोशिकीय", correct: false },
            { text: "एककोशिकीय", correct: true },
            { text: "अकोशिकीय", correct: false },
            { text: "विषाणु", correct: false }
        ]
    },
    {
        id: 32,
        question: "शराब (Alcohol) और ब्रेड (Bread) बनाने के लिए किस एककोशिकीय जीव का उपयोग किया जाता है?",
        questionAudio: "audio1/Question_32.mp3",
        options: [
            { text: "अमीबा", correct: false },
            { text: "जीवाणु", correct: false },
            { text: "यीस्ट", correct: true },
            { text: "विषाणु", correct: false }
        ]
    },
    {
        id: 33,
        question: "नीली हरी शैवाल (Blue Green Algae) का दूसरा नाम क्या है?",
        questionAudio: "audio1/Question_33.mp3",
        options: [
            { text: "रोडोफाइसी (Rhodophyceae)", correct: false },
            { text: "फियोफाइसी (Phaeophyceae)", correct: false },
            { text: "सायनोबैक्टीरिया (Cynobacteria)", correct: true },
            { text: "क्लोरोफाइसी (Chlorophyceae)", correct: false }
        ]
    },
    {
        id: 34,
        question: "पैरामीशियम (Paramecium) कैसा जीव है?",
        questionAudio: "audio1/Question_34.mp3",
        options: [
            { text: "बहुकोशिकीय", correct: false },
            { text: "द्विकोशिकीय", correct: false },
            { text: "एककोशिकीय", correct: true },
            { text: "अकोशिकीय", correct: false }
        ]
    },
    {
        id: 35,
        question: "अध्ययन सामग्री के अनुसार, कौन सा जीव कोशिका रहित (without cell) है और एक अपवाद माना जाता है?",
        questionAudio: "audio1/Question_35.mp3",
        options: [
            { text: "जीवाणु (Bacteria)", correct: false },
            { text: "विषाणु (Virus)", correct: true },
            { text: "कवक (Fungus)", correct: false },
            { text: "शैवाल (Algae)", correct: false }
        ]
    },
    {
        id: 36,
        question: "निम्नलिखित में से कौन सा समूह केवल एककोशिकीय जीवों का है?",
        questionAudio: "audio1/Question_36.mp3",
        options: [
            { text: "अमीबा, हाइड्रा, यीस्ट", correct: false },
            { text: "जीवाणु, पैरामीशियम, युग्लिना", correct: true },
            { text: "केला, अमरूद, आम", correct: false },
            { text: "कुत्ता, बिल्ली, चींटी", correct: false }
        ]
    },
    {
        id: 37,
        question: "'सभी सजीवों का शरीर कोशिकाओं से बना है' इस कथन का अपवाद क्या है?",
        questionAudio: "audio1/Question_37.mp3",
        options: [
            { text: "जीवाणु", correct: false },
            { text: "यीस्ट", correct: false },
            { text: "विषाणु", correct: true },
            { text: "माइकोप्लाज्मा", correct: false }
        ]
    },
    {
        id: 38,
        question: "दिए गए विकल्पों में से बहुकोशिकीय जीव को पहचानें।",
        questionAudio: "audio1/Question_38.mp3",
        options: [
            { text: "युग्लिना (Euglena)", correct: false },
            { text: "सायनोबैक्टीरिया (Cynobacteria)", correct: false },
            { text: "चींटी (Ant)", correct: true },
            { text: "यीस्ट (Yeast)", correct: false }
        ]
    },
    {
        id: 39,
        question: "निम्नलिखित में से कौन सा एक बहुकोशिकीय जीव का उदाहरण है?",
        questionAudio: "audio1/Question_39.mp3",
        options: [
            { text: "अमीबा (Amoeba)", correct: false },
            { text: "यीस्ट (Yeast)", correct: false },
            { text: "पीपल का पेड़ (Peepal tree)", correct: true },
            { text: "पैरामीशियम (Paramecium)", correct: false }
        ]
    },
    {
        id: 40,
        question: "निम्नलिखित में से कौन सा एक एककोशिकीय जीव है?",
        questionAudio: "audio1/Question_40.mp3",
        options: [
            { text: "हाइड्रा (Hydra)", correct: false },
            { text: "कुत्ता (Dog)", correct: false },
            { text: "जीवाणु (Bacteria)", correct: true },
            { text: "आम का पेड़ (Mango tree)", correct: false }
        ]
    },
    {
        id: 41,
        question: "मृत कोशिका (dead cell) की खोज किस वैज्ञानिक ने की थी?",
        questionAudio: "audio1/Question_41.mp3",
        options: [
            { text: "ल्यूवेनहॉक", correct: false },
            { text: "रॉबर्ट ब्राउन", correct: false },
            { text: "रॉबर्ट हुक", correct: true },
            { text: "श्लाइडेन", correct: false }
        ]
    },
    {
        id: 42,
        question: "रॉबर्ट हुक ने कोशिका की खोज किस वर्ष में की थी?",
        questionAudio: "audio1/Question_42.mp3",
        options: [
            { text: "1674", correct: false },
            { text: "1665", correct: true },
            { text: "1839", correct: false },
            { text: "1940", correct: false }
        ]
    },
    {
        id: 43,
        question: "रॉबर्ट हुक ने कोशिका को सबसे पहले किस पदार्थ में देखा था?",
        questionAudio: "audio1/Question_43.mp3",
        options: [
            { text: "तालाब के जल में", correct: false },
            { text: "दांत की खुरचन में", correct: false },
            { text: "कॉर्क (लकड़ी का टुकड़ा) में", correct: true },
            { text: "रक्त में", correct: false }
        ]
    },
    {
        id: 44,
        question: "रॉबर्ट हुक द्वारा देखी गई कॉर्क कोशिका की संरचना किसके समान दिखाई दी?",
        questionAudio: "audio1/Question_44.mp3",
        options: [
            { text: "ईंटों की दीवार", correct: false },
            { text: "मधुमक्खी के छत्ते", correct: true },
            { text: "प्याज की झिल्ली", correct: false },
            { text: "मकड़ी का जाला", correct: false }
        ]
    },
    {
        id: 45,
        question: "जीवित कोशिका (living cell) की खोज का श्रेय किस वैज्ञानिक को दिया जाता है?",
        questionAudio: "audio1/Question_45.mp3",
        options: [
            { text: "रॉबर्ट हुक", correct: false },
            { text: "ल्यूवेनहॉक", correct: true },
            { text: "थियोडोर श्वान", correct: false },
            { text: "रुडोल्फ विरचो", correct: false }
        ]
    },
    {
        id: 46,
        question: "ल्यूवेनहॉक ने जीवित कोशिका की खोज किस वर्ष में की थी?",
        questionAudio: "audio1/Question_46.mp3",
        options: [
            { text: "1665", correct: false },
            { text: "1674", correct: true },
            { text: "1764", correct: false },
            { text: "1874", correct: false }
        ]
    },
    {
        id: 47,
        question: "ल्यूवेनहॉक किस देश के वैज्ञानिक थे?",
        questionAudio: "audio1/Question_47.mp3",
        options: [
            { text: "ब्रिटिश", correct: false },
            { text: "जर्मन", correct: false },
            { text: "अमेरिकी", correct: false },
            { text: "डच", correct: true }
        ]
    },
    {
        id: 48,
        question: "लाल रुधिर कोशिकाओं (R.B.C.) की खोज किस वैज्ञानिक ने की थी?",
        questionAudio: "audio1/Question_48.mp3",
        options: [
            { text: "रॉबर्ट हुक", correct: false },
            { text: "विलियम हार्वे", correct: false },
            { text: "ल्यूवेनहॉक", correct: true },
            { text: "कार्ल लैंडस्टीनर", correct: false }
        ]
    },
    {
        id: 49,
        question: "'सेल' (Cell) शब्द किस वैज्ञानिक द्वारा गढ़ा गया था?",
        questionAudio: "audio1/Question_49.mp3",
        options: [
            { text: "ल्यूवेनहॉक", correct: false },
            { text: "रॉबर्ट हुक", correct: true },
            { text: "पुरकिंजे", correct: false },
            { text: "श्लाइडेन", correct: false }
        ]
    },
    {
        id: 50,
        question: "'सेल' (Cell) शब्द किस भाषा से लिया गया है?",
        questionAudio: "audio1/Question_50.mp3",
        options: [
            { text: "ग्रीक", correct: false },
            { text: "अंग्रेजी", correct: false },
            { text: "जर्मन", correct: false },
            { text: "लैटिन", correct: true }
        ]
    },
    {
        id: 51,
        question: "'सेल' (Cell) शब्द लैटिन भाषा के किस मूल शब्द से बना है?",
        questionAudio: "audio1/Question_51.mp3",
        options: [
            { text: "Cellulae", correct: false },
            { text: "Cella", correct: true },
            { text: "Cyto", correct: false },
            { text: "Cellum", correct: false }
        ]
    },
    {
        id: 52,
        question: "लैटिन शब्द 'सेला' (Cella) का क्या अर्थ है?",
        questionAudio: "audio1/Question_52.mp3",
        options: [
            { text: "जीवन की इकाई", correct: false },
            { text: "छोटा कमरा या कक्ष", correct: true },
            { text: "सूक्ष्म संरचना", correct: false },
            { text: "गोलाकार पिंड", correct: false }
        ]
    },
    {
        id: 53,
        question: "रॉबर्ट हुक ने कॉर्क कोशिकाओं का निरीक्षण करने के लिए किस उपकरण का उपयोग किया था?",
        questionAudio: "audio1/Question_53.mp3",
        options: [
            { text: "सरल सूक्ष्मदर्शी", correct: false },
            { text: "संयुक्त सूक्ष्मदर्शी", correct: true },
            { text: "इलेक्ट्रॉन सूक्ष्मदर्शी", correct: false },
            { text: "दूरबीन", correct: false }
        ]
    },
    {
        id: 54,
        question: "निम्नलिखित में से कौन सा कथन सत्य है?",
        questionAudio: "audio1/Question_54.mp3",
        options: [
            { text: "रॉबर्ट हुक ने 1674 में जीवित कोशिका की खोज की।", correct: false },
            { text: "ल्यूवेनहॉक ने 1665 में मृत कोशिका की खोज की।", correct: false },
            { text: "रॉबर्ट हुक ने कॉर्क में मृत कोशिका की खोज की।", correct: true },
            { text: "ल्यूवेनहॉक एक ब्रिटिश वैज्ञानिक थे।", correct: false }
        ]
    },
    {
        id: 55,
        question: "1665 का वर्ष कोशिका विज्ञान में किस महत्वपूर्ण खोज के लिए जाना जाता है?",
        questionAudio: "audio1/Question_55.mp3",
        options: [
            { text: "केंद्रक की खोज", correct: false },
            { text: "जीवित कोशिका की खोज", correct: false },
            { text: "मृत कोशिका की खोज", correct: true },
            { text: "कोशिका सिद्धांत का प्रतिपादन", correct: false }
        ]
    },
    {
        id: 56,
        question: "संसार की सबसे छोटी कोशिका कौन सी है?",
        questionAudio: "audio1/Question_56.mp3",
        options: [
            { text: "तंत्रिका कोशिका", correct: false },
            { text: "शुतुरमुर्ग का अंडा", correct: false },
            { text: "माइकोप्लाज्मा", correct: true },
            { text: "जीवाणु कोशिका", correct: false }
        ]
    },
    {
        id: 57,
        question: "माइकोप्लाज्मा का सामान्य आकार क्या होता है?",
        questionAudio: "audio1/Question_57.mp3",
        options: [
            { text: "1 से 2 μm", correct: false },
            { text: "0.1 से 0.2 μm", correct: true },
            { text: "10 से 20 μm", correct: false },
            { text: "0.01 से 0.02 μm", correct: false }
        ]
    },
    {
        id: 58,
        question: "P.P.L.O. किस जीव का एक अन्य नाम है?",
        questionAudio: "audio1/Question_58.mp3",
        options: [
            { text: "विषाणु", correct: false },
            { text: "यीस्ट", correct: false },
            { text: "अमीबा", correct: false },
            { text: "माइकोप्लाज्मा", correct: true }
        ]
    },
    {
        id: 59,
        question: "P.P.L.O. का पूर्ण रूप क्या है?",
        questionAudio: "audio1/Question_59.mp3",
        options: [
            { text: "Pleuro Plasma Like Organism", correct: false },
            { text: "Primary Pneumonia Like Organism", correct: false },
            { text: "Pleuro Pneumonia Like Organism", correct: true },
            { text: "Proto Pneumonia Like Organism", correct: false }
        ]
    },
    {
        id: 60,
        question: "किस जीव को 'पादप जगत का जोकर' (Joker of plant Kingdom) कहा जाता है?",
        questionAudio: "audio1/Question_60.mp3",
        options: [
            { text: "यीस्ट", correct: false },
            { text: "माइकोप्लाज्मा", correct: true },
            { text: "युग्लिना", correct: false },
            { text: "विषाणु", correct: false }
        ]
    },
    {
        id: 61,
        question: "M.L.O. का क्या अर्थ है, जैसा कि माइकोप्लाज्मा के संदर्भ में बताया गया है?",
        questionAudio: "audio1/Question_61.mp3",
        options: [
            { text: "Micro Like Organism", correct: false },
            { text: "Molecule Like Organism", correct: true },
            { text: "Multi Layered Organism", correct: false },
            { text: "Main Line Organism", correct: false }
        ]
    },
    {
        id: 62,
        question: "माइकोप्लाज्मा की एक प्रमुख संरचनात्मक विशेषता क्या है?",
        questionAudio: "audio1/Question_62.mp3",
        options: [
            { text: "इसमें एक कठोर कोशिका भित्ति होती है।", correct: false },
            { text: "इसमें कोशिका भित्ति का अभाव होता है।", correct: true },
            { text: "यह बहुकोशिकीय होता है।", correct: false },
            { text: "इसमें एक बड़ा केंद्रक होता है।", correct: false }
        ]
    },
    {
        id: 63,
        question: "माइकोप्लाज्मा को किस प्रकार का जीव माना जाता है?",
        questionAudio: "audio1/Question_63.mp3",
        options: [
            { text: "विषाणु", correct: false },
            { text: "एक प्रोटोजोआ", correct: false },
            { text: "एक प्रकार का जीवाणु", correct: true },
            { text: "एक प्रकार का शैवाल", correct: false }
        ]
    },
    {
        id: 64,
        question: "कॉर्क कोशिकाओं में पाया जाने वाला मोम जैसा पदार्थ क्या कहलाता है?",
        questionAudio: "audio1/Question_64.mp3",
        options: [
            { text: "लिग्निन (Lignin)", correct: false },
            { text: "क्यूटिन (Cutin)", correct: false },
            { text: "सुबेरिन (Suberin)", correct: true },
            { text: "पेक्टिन (Pectin)", correct: false }
        ]
    },
    {
        id: 65,
        question: "रॉबर्ट हुक द्वारा खोजी गई कॉर्क कोशिकाओं को जल एवं गैस रोधी बनाने वाला पदार्थ कौन सा था?",
        questionAudio: "audio1/Question_65.mp3",
        options: [
            { text: "सेल्यूलोज", correct: false },
            { text: "काइटिन", correct: false },
            { text: "सुबेरिन", correct: true },
            { text: "लिग्निन", correct: false }
        ]
    },
    {
        id: 66,
        question: "वे कौन सा जीव है जिसे 'अणु के समान जीव' (Molecule like organism) भी कहा जाता है?",
        questionAudio: "audio1/Question_66.mp3",
        options: [
            { text: "विषाणु", correct: false },
            { text: "पैरामीशियम", correct: false },
            { text: "माइकोप्लाज्मा", correct: true },
            { text: "जीवाणु", correct: false }
        ]
    },
    {
        id: 67,
        question: "निम्नलिखित में से किसमें कोशिका भित्ति (cell wall) पूर्ण रूप से अनुपस्थित होती है?",
        questionAudio: "audio1/Question_67.mp3",
        options: [
            { text: "जीवाणु", correct: false },
            { text: "यीस्ट", correct: false },
            { text: "पादप कोशिका", correct: false },
            { text: "माइकोप्लाज्मा", correct: true }
        ]
    },
    {
        id: 68,
        question: "कोशिका को जल और गैस के प्रति अपारगम्य (impermeable) बनाने के लिए कॉर्क में कौन सा पदार्थ जिम्मेदार है?",
        questionAudio: "audio1/Question_68.mp3",
        options: [
            { text: "पेक्टिन", correct: false },
            { text: "सुबेरिन", correct: true },
            { text: "लिग्निन", correct: false },
            { text: "सेल्यूलोज", correct: false }
        ]
    },
    {
        id: 69,
        question: "निम्नलिखित में से कौन सा जोड़ा सही ढंग से सुमेलित है?",
        questionAudio: "audio1/Question_69.mp3",
        options: [
            { text: "रॉबर्ट हुक - 1674", correct: false },
            { text: "ल्यूवेनहॉक - मृत कोशिका", correct: false },
            { text: "रॉबर्ट हुक - संयुक्त सूक्ष्मदर्शी", correct: true },
            { text: "ल्यूवेनहॉक - पादप जगत का जोकर", correct: false }
        ]
    },
    {
        id: 70,
        question: "निम्नलिखित में से कौन सा कथन माइकोप्लाज्मा के बारे में गलत है?",
        questionAudio: "audio1/Question_70.mp3",
        options: [
            { text: "यह संसार की सबसे छोटी कोशिका है।", correct: false },
            { text: "इसे P.P.L.O. भी कहते हैं।", correct: false },
            { text: "इसमें एक मोटी कोशिका भित्ति होती है।", correct: true },
            { text: "यह पादप जगत का जोकर कहलाता है।", correct: false }
        ]
    },
    {
        id: 71,
        question: "वह वैज्ञानिक कौन है जिसने उन मृत कोशिकाओं का अवलोकन किया जो सुबेरिन नामक पदार्थ के कारण जलरोधी थीं?",
        questionAudio: "audio1/Question_71.mp3",
        options: [
            { text: "ल्यूवेनहॉक", correct: false },
            { text: "रॉबर्ट हुक", correct: true },
            { text: "श्लाइडेन", correct: false },
            { text: "श्वान", correct: false }
        ]
    },
    {
        id: 72,
        question: "निम्नलिखित में से कौन सा एककोशिकीय जीव है जिसमें कोशिका भित्ति का अभाव होता है?",
        questionAudio: "audio1/Question_72.mp3",
        options: [
            { text: "यीस्ट", correct: false },
            { text: "सायनोबैक्टीरिया", correct: false },
            { text: "माइकोप्लाज्मा", correct: true },
            { text: "जीवाणु", correct: false }
        ]
    },
    {
        id: 73,
        question: "'छोटा कमरा' अर्थ वाले लैटिन शब्द 'सेला' से 'सेल' शब्द किसने बनाया?",
        questionAudio: "audio1/Question_73.mp3",
        options: [
            { text: "ल्यूवेनहॉक", correct: false },
            { text: "रॉबर्ट ब्राउन", correct: false },
            { text: "रॉबर्ट हुक", correct: true },
            { text: "रुडोल्फ विरचो", correct: false }
        ]
    },
    {
        id: 74,
        question: "1674 का वर्ष किस डच वैज्ञानिक द्वारा जीवित कोशिका के साथ-साथ R.B.C की खोज से भी संबंधित है?",
        questionAudio: "audio1/Question_74.mp3",
        options: [
            { text: "रॉबर्ट हुक", correct: false },
            { text: "ल्यूवेनहॉक", correct: true },
            { text: "जेनसेन", correct: false },
            { text: "विरचो", correct: false }
        ]
    },
    {
        id: 75,
        question: "पादप कोशिका के चित्र के अनुसार, कोशिका की सबसे बाहरी परत क्या है?",
        questionAudio: "audio1/Question_75.mp3",
        options: [
            { text: "कोशिका झिल्ली (Cell membrane)", correct: false },
            { text: "केंद्रक (Nucleus)", correct: false },
            { text: "कोशिका भित्ति (Cell wall)", correct: true },
            { text: "कोशिका द्रव्य (Cytoplasm)", correct: false }
        ]
    },
    {
        id: 76,
        question: "सामग्री में दिखाए गए चित्र के अनुसार, रॉबर्ट हुक द्वारा देखी गई कॉर्क की संरचना कैसी दिखती थी?",
        questionAudio: "audio1/Question_76.mp3",
        options: [
            { text: "एक जाल जैसी", correct: false },
            { text: "एक गोले जैसी", correct: false },
            { text: "मधुमक्खी के छत्ते जैसी", correct: true },
            { text: "एक धागे जैसी", correct: false }
        ]
    },
    {
        id: 77,
        question: "निम्नलिखित में से कौन सा एककोशिकीय जीव नहीं है?",
        questionAudio: "audio1/Question_77.mp3",
        options: [
            { text: "अमीबा", correct: false },
            { text: "पैरामीशियम", correct: false },
            { text: "यीस्ट", correct: false },
            { text: "हाइड्रा", correct: true }
        ]
    },
    {
        id: 78,
        question: "निम्नलिखित में से कौन सा एक बहुकोशिकीय जीव नहीं है?",
        questionAudio: "audio1/Question_78.mp3",
        options: [
            { text: "कुत्ता", correct: false },
            { text: "बिल्ली", correct: false },
            { text: "युग्लिना", correct: true },
            { text: "आम", correct: false }
        ]
    },
    {
        id: 79,
        question: "Cytology का संबंध किसके अध्ययन से है?",
        questionAudio: "audio1/Question_79.mp3",
        options: [
            { text: "ऊतकों का अध्ययन", correct: false },
            { text: "अंगों का अध्ययन", correct: false },
            { text: "कोशिका का अध्ययन", correct: true },
            { text: "जीवों का अध्ययन", correct: false }
        ]
    },
    {
        id: 80,
        question: "यीस्ट, जिसका उपयोग शराब बनाने में होता है, किस प्रकार का जीव है?",
        questionAudio: "audio1/Question_80.mp3",
        options: [
            { text: "एककोशिकीय जीवाणु", correct: false },
            { text: "एककोशिकीय कवक", correct: true },
            { text: "बहुकोशिकीय शैवाल", correct: false },
            { text: "एककोशिकीय प्रोटोजोआ", correct: false }
        ]
    },
    {
        id: 81,
        question: "वह कौन सा जीव है जो एककोशिकीय है और जिसे सायनोबैक्टीरिया भी कहा जाता है?",
        questionAudio: "audio1/Question_81.mp3",
        options: [
            { text: "यीस्ट", correct: false },
            { text: "अमीबा", correct: false },
            { text: "नीली हरी शैवाल", correct: true },
            { text: "युग्लिना", correct: false }
        ]
    },
    {
        id: 82,
        question: "अध्ययन सामग्री के अनुसार, केला (Banana) किस प्रकार के जीव का उदाहरण है?",
        questionAudio: "audio1/Question_82.mp3",
        options: [
            { text: "एककोशिकीय", correct: false },
            { text: "बहुकोशिकीय", correct: true },
            { text: "अकोशिकीय", correct: false },
            { text: "द्विकोशिकीय", correct: false }
        ]
    },
    {
        id: 83,
        question: "विषाणु (Virus) को एक अपवाद क्यों माना जाता है?",
        questionAudio: "audio1/Question_83.mp3",
        options: [
            { text: "क्योंकि यह बहुत छोटा है।", correct: false },
            { text: "क्योंकि यह केवल जीवित कोशिका में गुणन करता है।", correct: false },
            { text: "क्योंकि यह एक कोशिका रहित जीव है।", correct: true },
            { text: "क्योंकि इसमें कोशिका भित्ति होती है।", correct: false }
        ]
    },
    {
        id: 84,
        question: "निम्नलिखित में से कौन सा एक जंतु (Animal) है जो बहुकोशिकीय है?",
        questionAudio: "audio1/Question_84.mp3",
        options: [
            { text: "पैरामीशियम", correct: false },
            { text: "युग्लिना", correct: false },
            { text: "हाइड्रा", correct: true },
            { text: "अमीबा", correct: false }
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
            let fullText = `${q.question}. `;
            q.options.forEach((opt, idx) => {
                fullText += `विकल्प ${String.fromCharCode(97 + idx)}. ${opt.text}. `;
            });
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
        state.autoReadTimeoutId = setTimeout(() => {
            startSequence(true); 
        }, 300);
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
        }, 800);
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
    localStorage.setItem('cell1_quiz_progress', JSON.stringify(dataToSave));
}

function loadProgress() {
    const raw = localStorage.getItem('cell1_quiz_progress');
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            if (parsed && Object.keys(parsed.answers || {}).length > 0) {
                elements.resumeModal.classList.remove('hidden');
            }
        } catch (e) {
            localStorage.removeItem('cell1_quiz_progress');
        }
    }
}

function restoreQuizState() {
    const raw = localStorage.getItem('cell1_quiz_progress');
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
    localStorage.removeItem('cell1_quiz_progress');
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