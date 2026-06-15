// ============================================================================
// QUIZ DATA DEFINITION (100 Questions about Indian Folk Dances - Part 1)
// ============================================================================
const quizData = [
    {
        id: 1,
        question: "छठी नृत्य किस अवसर पर किया जाता है?",
        questionAudio: "audio4/Question_1.mp3",
        options: [
            { text: "विवाह के अवसर पर", correct: false },
            { text: "लड़की के जन्म पर", correct: false },
            { text: "लड़के के जन्म पर", correct: true },
            { text: "नामकरण संस्कार पर", correct: false }
        ]
    },
    {
        id: 2,
        question: "छठी नृत्य जन्म के किस दिन किया जाता है?",
        questionAudio: "audio4/Question_2.mp3",
        options: [
            { text: "तीसरे दिन", correct: false },
            { text: "छठे दिन", correct: true },
            { text: "पाँचवें दिन", correct: false },
            { text: "दसवें दिन", correct: false }
        ]
    },
    {
        id: 3,
        question: "छठी नृत्य किनके द्वारा प्रस्तुत किया जाता है?",
        questionAudio: "audio4/Question_3.mp3",
        options: [
            { text: "पुरुष", correct: false },
            { text: "किशोर", correct: false },
            { text: "बच्चे", correct: false },
            { text: "महिलाएँ", correct: true }
        ]
    },
    {
        id: 4,
        question: "लूर नृत्य किस त्योहार पर प्रस्तुत होता है?",
        questionAudio: "audio4/Question_4.mp3",
        options: [
            { text: "होली", correct: true },
            { text: "तीज", correct: false },
            { text: "दिवाली", correct: false },
            { text: "दशहरा", correct: false }
        ]
    },
    {
        id: 5,
        question: "khoriya नृत्य हरियाणा के किस क्षेत्र में लोकप्रिय है?",
        questionAudio: "audio4/Question_5.mp3",
        options: [
            { text: "पूर्वी क्षेत्र", correct: false },
            { text: "मध्य क्षेत्र", correct: true },
            { text: "उत्तरी क्षेत्र", correct: false },
            { text: "दक्षिणी क्षेत्र", correct: false }
        ]
    },
    {
        id: 6,
        question: "खोरिया नृत्य में कलाकार कैसी स्कर्ट पहनते हैं?",
        questionAudio: "audio4/Question_6.mp3",
        options: [
            { text: "रेशम के रंगीन धागे", correct: false },
            { text: "चांदी के चमकीले गोटे", correct: false },
            { text: "सोने के महीन धागे", correct: true },
            { text: "जरी के सुनहरे गोटे", correct: false }
        ]
    },
    {
        id: 7,
        question: "घूमर नृत्य में नृत्यांगनाओं की स्थिति कैसी होती है?",
        questionAudio: "audio4/Question_7.mp3",
        options: [
            { text: "त्रिभुजाकार", correct: false },
            { text: "वर्गाकार", correct: false },
            { text: "अर्धवृत्ताकार", correct: false },
            { text: "वृत्ताकार", correct: true }
        ]
    },
    {
        id: 8,
        question: "घूमर नृत्य किन त्योहारों पर प्रस्तुत होता है?",
        questionAudio: "audio4/Question_8.mp3",
        options: [
            { text: "होली, गणगौर, तीज", correct: true },
            { text: "दिवाली, दशहरा, गणगौर", correct: false },
            { text: "लोहड़ी, मकर संक्रांति, होली", correct: false },
            { text: "बैसाखी, तीज, करवाचौथ", correct: false }
        ]
    },
    {
        id: 9,
        question: "गुग्गा नृत्य किसकी स्मृति में होता है?",
        questionAudio: "audio4/Question_9.mp3",
        options: [
            { text: "गुरु गुग्गा", correct: false },
            { text: "संत गुग्गा", correct: true },
            { text: "राजा गुग्गा", correct: false },
            { text: "वीर गुग्गा", correct: false }
        ]
    },
    {
        id: 10,
        question: "गुग्गा नृत्य किनके द्वारा प्रस्तुत किया जाता है?",
        questionAudio: "audio4/Question_10.mp3",
        options: [
            { text: "स्त्री और पुरुष", correct: false },
            { text: "केवल किशोर", correct: false },
            { text: "केवल महिलाएँ", correct: false },
            { text: "केवल पुरुष", correct: true }
        ]
    },
    {
        id: 11,
        question: "थोडा नृत्य किस राज्य का मार्शल आर्ट है?",
        questionAudio: "audio4/Question_11.mp3",
        options: [
            { text: "उत्तराखंड", correct: false },
            { text: "सिक्किम", correct: false },
            { text: "हिमाचल प्रदेश", correct: true },
            { text: "जम्मू और कश्मीर", correct: false }
        ]
    },
    {
        id: 12,
        question: "थोडा नृत्य के मुख्य हथियार क्या हैं?",
        questionAudio: "audio4/Question_12.mp3",
        options: [
            { text: "धनुष और तीर", correct: true },
            { text: "तलवार और ढाल", correct: false },
            { text: "भाला और बरछी", correct: false },
            { text: "लाठी और डंडा", correct: false }
        ]
    },
    {
        id: 13,
        question: "बाहों को क्रॉस पैटर्न में मोड़कर कौन-सा नृत्य होता है?",
        questionAudio: "audio4/Question_13.mp3",
        options: [
            { text: "जातरू कायांग", correct: false },
            { text: "बकयांग चोक", correct: false },
            { text: "कायांग माला", correct: true },
            { text: "शांड नाच", correct: false }
        ]
    },
    {
        id: 14,
        question: "राक्षस (दानव) नृत्य को अन्य किस नाम से जाना जाता है?",
        questionAudio: "audio4/Question_14.mp3",
        options: [
            { text: "लाहुल नृत्य", correct: false },
            { text: "चंबा नृत्य", correct: true },
            { text: "किन्नौर नृत्य", correct: false },
            { text: "छम नृत्य", correct: false }
        ]
    },
    {
        id: 15,
        question: "राक्षस नृत्य में नर्तक क्या पहनते हैं?",
        questionAudio: "audio4/Question_15.mp3",
        options: [
            { text: "कवच (आर्मर)", correct: false },
            { text: "मुकुट (क्राउन)", correct: false },
            { text: "चोग़ा (गाउन)", correct: false },
            { text: "मुखौटा (मास्क)", correct: true }
        ]
    },
    {
        id: 16,
        question: "नाटी लोकनृत्य में कौन भाग लेते हैं?",
        questionAudio: "audio4/Question_16.mp3",
        options: [
            { text: "स्त्री और पुरुष", correct: true },
            { text: "केवल पुरुष", correct: false },
            { text: "केवल महिलाएँ", correct: false },
            { text: "केवल बच्चे", correct: false }
        ]
    },
    {
        id: 17,
        question: "पाइका नृत्य में नर्तक के हाथों में क्या होता है?",
        questionAudio: "audio4/Question_17.mp3",
        options: [
            { text: "भाला और डंडा", correct: false },
            { text: "तलवार और ढाल", correct: true },
            { text: "फरसा और गदा", correct: false },
            { text: "धनुष और तीर", correct: false }
        ]
    },
    {
        id: 18,
        question: "पाइका नृत्य किस जनजाति द्वारा किया जाता है?",
        questionAudio: "audio4/Question_18.mp3",
        options: [
            { text: "संथाल जनजाति", correct: false },
            { text: "गोंड जनजाति", correct: false },
            { text: "मुंडा जनजाति", correct: true },
            { text: "उरांव जनजाति", correct: false }
        ]
    },
    {
        id: 19,
        question: "पाइका नृत्य किस प्रकार की कला है?",
        questionAudio: "audio4/Question_19.mp3",
        options: [
            { text: "कठपुतली कला", correct: false },
            { text: "भक्ति संगीत", correct: false },
            { text: "स्वांग अभिनय", correct: false },
            { text: "मार्शल आर्ट", correct: true }
        ]
    },
    {
        id: 20,
        question: "छऊ नृत्य मुख्य रूप से कहाँ प्रस्तुत होता है?",
        questionAudio: "audio4/Question_20.mp3",
        options: [
            { text: "बंद सभागारों में", correct: false },
            { text: "खुले मैदानों में", correct: true },
            { text: "मंदिर के गर्भगृह में", correct: false },
            { text: "विशेष मंचों पर", correct: false }
        ]
    },
    {
        id: 21,
        question: "छऊ नृत्य विशेष रूप से किस समय किया जाता है?",
        questionAudio: "audio4/Question_21.mp3",
        options: [
            { text: "रात के समय", correct: true },
            { text: "दोपहर के समय", correct: false },
            { text: "प्रातःकाल के समय", correct: false },
            { text: "संध्याकाल के समय", correct: false }
        ]
    },
    {
        id: 22,
        question: "छऊ नृत्य किन राज्यों का प्रसिद्ध नृत्य है?",
        questionAudio: "audio4/Question_22.mp3",
        options: [
            { text: "छत्तीसगढ़, आंध्र प्रदेश, तेलंगाना", correct: false },
            { text: "बिहार, उत्तर प्रदेश, मध्य प्रदेश", correct: false },
            { text: "पश्चिम बंगाल, ओडिशा, झारखंड", correct: true },
            { text: "असम, मणिपुर, त्रिपुरा", correct: false }
        ]
    },
    {
        id: 23,
        question: "छऊ नृत्य की उत्पत्ति किन प्रथाओं से हुई है?",
        questionAudio: "audio4/Question_23.mp3",
        options: [
            { text: "धार्मिक अनुष्ठान, देवदासी प्रथा", correct: false },
            { text: "दरबारी कला, शास्त्रीय शैली", correct: false },
            { text: "कृषि उत्सव, पशु बलि", correct: false },
            { text: "देशज शैली, युद्ध प्रथा", correct: true }
        ]
    },
    {
        id: 24,
        question: "पं. गुरु श्यामा चरण पति किस नृत्य के कलाकार हैं?",
        questionAudio: "audio4/Question_24.mp3",
        options: [
            { text: "सत्रिया नृत्य", correct: false },
            { text: "छऊ नृत्य", correct: true },
            { text: "कथकली नृत्य", correct: false },
            { text: "पाइका नृत्य", correct: false }
        ]
    },
    {
        id: 25,
        question: "श्री शशधर आचार्य का संबंध किस नृत्य से है?",
        questionAudio: "audio4/Question_25.mp3",
        options: [
            { text: "छऊ नृत्य", correct: true },
            { text: "ओडिसी नृत्य", correct: false },
            { text: "भरतनाट्यम नृत्य", correct: false },
            { text: "कुचिपुड़ी नृत्य", correct: false }
        ]
    },
    {
        id: 26,
        question: "मकर ध्वज दारोगा किस कला से जुड़े हैं?",
        questionAudio: "audio4/Question_26.mp3",
        options: [
            { text: "बिदेसिया नृत्य", correct: false },
            { text: "कर्मा नृत्य", correct: false },
            { text: "छऊ नृत्य", correct: true },
            { text: "झिझिया नृत्य", correct: false }
        ]
    },
    {
        id: 27,
        question: "फगुआ नृत्य किस त्योहार के दौरान प्रस्तुत होता है?",
        questionAudio: "audio4/Question_27.mp3",
        options: [
            { text: "दशहरा", correct: false },
            { text: "छठ पूजा", correct: false },
            { text: "दीपावली", correct: false },
            { text: "होली", correct: true }
        ]
    },
    {
        id: 28,
        question: "घोड़ा नाच किस अवसर पर प्रस्तुत किया जाता है?",
        questionAudio: "audio4/Question_28.mp3",
        options: [
            { text: "नामकरण", correct: false },
            { text: "शादी", correct: true },
            { text: "मुंडन", correct: false },
            { text: "यज्ञोपवीत", correct: false }
        ]
    },
    {
        id: 29,
        question: "घोड़ा नाच किनके द्वारा प्रस्तुत किया जाता है?",
        questionAudio: "audio4/Question_29.mp3",
        options: [
            { text: "पुरुषों द्वारा", correct: true },
            { text: "महिलाओं द्वारा", correct: false },
            { text: "बच्चों द्वारा", correct: false },
            { text: "किशोरी बालिकाओं द्वारा", correct: false }
        ]
    },
    {
        id: 30,
        question: "लहसूया नृत्य किसके द्वारा किया जाता है?",
        questionAudio: "audio4/Question_30.mp3",
        options: [
            { text: "केवल बुजुर्ग पुरुष", correct: false },
            { text: "केवल कुंवारी लड़कियां", correct: false },
            { text: "पुरुष और महिलाएँ", correct: true },
            { text: "केवल विवाहित जोड़े", correct: false }
        ]
    },
    {
        id: 31,
        question: "मुंडारी नृत्य किस जनजाति का है?",
        questionAudio: "audio4/Question_31.mp3",
        options: [
            { text: "संथाल जनजाति", correct: false },
            { text: "उरांव जनजाति", correct: false },
            { text: "हो जनजाति", correct: false },
            { text: "मुंडा जनजाति", correct: true }
        ]
    },
    {
        id: 32,
        question: "झिका दसैन किस जनजाति का पूजा नृत्य है?",
        questionAudio: "audio4/Question_32.mp3",
        options: [
            { text: "खड़िया जनजाति", correct: false },
            { text: "संथाल जनजाति", correct: true },
            { text: "मुंडा जनजाति", correct: false },
            { text: "बिरहोर जनजाति", correct: false }
        ]
    },
    {
        id: 33,
        question: "संथालों के प्रमुख नृत्य कौन-से हैं?",
        questionAudio: "audio4/Question_33.mp3",
        options: [
            { text: "शिकारी, आषाढ़िया, डाहरा, सकरात", correct: true },
            { text: "कर्मा, सरहुल, जापी, डोमकच", correct: false },
            { text: "लहसूया, बहा, कड़सा, जदुर", correct: false },
            { text: "झूमर, नटुआ, चौगोला, पाइका", correct: false }
        ]
    },
    {
        id: 34,
        question: "यक्षगान किस राज्य का लोक रंगमंच है?",
        questionAudio: "audio4/Question_34.mp3",
        options: [
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "केरल", correct: false }
        ]
    },
    {
        id: 35,
        question: "यक्षगान किस कला का अनुकरण करता है?",
        questionAudio: "audio4/Question_35.mp3",
        options: [
            { text: "दरबारी नाट्यशाला", correct: false },
            { text: "ग्रीक थियेटर", correct: false },
            { text: "मूर्तिकला शैली", correct: false },
            { text: "संस्कृत रंगमंच", correct: true }
        ]
    },
    {
        id: 36,
        question: "रामचन्द्र हेगडे किस नृत्य के प्रमुख कलाकार हैं?",
        questionAudio: "audio4/Question_36.mp3",
        options: [
            { text: "कथकली", correct: false },
            { text: "यक्षगान", correct: true },
            { text: "कुचिपुड़ी", correct: false },
            { text: "भरतनाट्यम", correct: false }
        ]
    },
    {
        id: 37,
        question: "डोलू कुनिथा किस देवता को समर्पित है?",
        questionAudio: "audio4/Question_37.mp3",
        options: [
            { text: "बीरेश्वर देवता", correct: true },
            { text: "मंजूनाथ देवता", correct: false },
            { text: "वीरभद्र देवता", correct: false },
            { text: "कालभैरव देवता", correct: false }
        ]
    },
    {
        id: 38,
        question: "डोलू कुनिथा किस संप्रदाय के लोगों द्वारा होता है?",
        questionAudio: "audio4/Question_38.mp3",
        options: [
            { text: "लिंगायत संप्रदाय", correct: false },
            { text: "वोक्कालिगा संप्रदाय", correct: false },
            { text: "इदिगा संप्रदाय", correct: false },
            { text: "कुरुबा संप्रदाय", correct: true }
        ]
    },
    {
        id: 39,
        question: "नागमंडला नृत्य किसलिए प्रस्तुत किया जाता है?",
        questionAudio: "audio4/Question_39.mp3",
        options: [
            { text: "अच्छी फसल की कामना", correct: false },
            { text: "वर्षा के देवता आह्वान", correct: false },
            { text: "नागों की आत्मा शांति", correct: true },
            { text: "ग्रहों के दोष निवारण", correct: false }
        ]
    },
    {
        id: 40,
        question: "कृष्णा पारिजात किस प्रकार का नृत्य है?",
        questionAudio: "audio4/Question_40.mp3",
        options: [
            { text: "व्यावसायिक नृत्य", correct: false },
            { text: "धार्मिक नृत्य", correct: true },
            { text: "युद्ध संबंधी नृत्य", correct: false },
            { text: "सामाजिक-आर्थिक नृत्य", correct: false }
        ]
    },
    {
        id: 41,
        question: "वीरगासे नृत्य किस उत्सव पर किया जाता है?",
        questionAudio: "audio4/Question_41.mp3",
        options: [
            { text: "दशहरा", correct: true },
            { text: "उगादि", correct: false },
            { text: "महाशिवरात्रि", correct: false },
            { text: "मकर संक्रांति", correct: false }
        ]
    },
    {
        id: 42,
        question: "वीरगासे नृत्य किन महीनों में सर्वाधिक लोकप्रिय है?",
        questionAudio: "audio4/Question_42.mp3",
        options: [
            { text: "वैशाख और ज्येष्ठ", correct: false },
            { text: "आषाढ़ और भाद्रपद", correct: false },
            { text: "मार्गशीर्ष और पौष", correct: false },
            { text: "श्रावण और कार्तिक", correct: true }
        ]
    },
    {
        id: 43,
        question: "कवादीयोट्टम नृत्य किस मंदिर में समर्पित है?",
        questionAudio: "audio4/Question_43.mp3",
        options: [
            { text: "भगवान पद्मनाभस्वामी", correct: false },
            { text: "भगवान सुब्रमण्यम", correct: true },
            { text: "भगवान अय्यप्पा", correct: false },
            { text: "भगवान गुरुवायुरप्पा", correct: false }
        ]
    },
    {
        id: 44,
        question: "वेलकाली नृत्य किस समुदाय का मार्शल नृत्य है?",
        questionAudio: "audio4/Question_44.mp3",
        options: [
            { text: "एझावा समुदाय", correct: false },
            { text: "पुलयार समुदाय", correct: false },
            { text: "नायर समुदाय", correct: true },
            { text: "नाम्बूदिरी समुदाय", correct: false }
        ]
    },
    {
        id: 45,
        question: "थियाट्टू नृत्य किस मंदिर की भक्ति का रूप है?",
        questionAudio: "audio4/Question_45.mp3",
        options: [
            { text: "भद्रकाली मंदिर", correct: true },
            { text: "महाविष्णु मंदिर", correct: false },
            { text: "श्रीकृष्ण मंदिर", correct: false },
            { text: "शिवपार्वती मंदिर", correct: false }
        ]
    },
    {
        id: 46,
        question: "कुमत्ती नृत्य करते समय क्या पहना जाता है?",
        questionAudio: "audio4/Question_46.mp3",
        options: [
            { text: "रंगीन रेशम के चोगे", correct: false },
            { text: "धातु के भारी आभूषण", correct: false },
            { text: "मयूरपंख के बने मुकुट", correct: false },
            { text: "चित्रित लकड़ी के मुखौटे", correct: true }
        ]
    },
    {
        id: 47,
        question: "थैय्यम किन राज्यों का अनुष्ठान है?",
        questionAudio: "audio4/Question_47.mp3",
        options: [
            { text: "तमिलनाडु और आंध्र", correct: false },
            { text: "केरल और कर्नाटक", correct: true },
            { text: "गोवा और महाराष्ट्र", correct: false },
            { text: "ओडिशा और बंगाल", correct: false }
        ]
    },
    {
        id: 48,
        question: "थैय्यम को किसका अवतार माना जाता है?",
        questionAudio: "audio4/Question_48.mp3",
        options: [
            { text: "विष्णु या ब्रह्मा", correct: false },
            { text: "इंद्र या वरुण", correct: false },
            { text: "शिव या शक्ति", correct: true },
            { text: "गणेश या कार्तिकेय", correct: false }
        ]
    },
    {
        id: 49,
        question: "लावा नृत्य मुख्य रूप से कहाँ के पुरुषों द्वारा होता है?",
        questionAudio: "audio4/Question_49.mp3",
        options: [
            { text: "लक्षद्वीप", correct: true },
            { text: "पुडुचेरी", correct: false },
            { text: "अंडमान और निकोबार", correct: false },
            { text: "दमन और दीव", correct: false }
        ]
    },
    {
        id: 50,
        question: "कोलकली और परिचाकली कहाँ के लोककला रूप हैं?",
        questionAudio: "audio4/Question_50.mp3",
        options: [
            { text: "केरल", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "पुडुचेरी", correct: false },
            { text: "लक्षद्वीप", correct: true }
        ]
    },
    {
        id: 51,
        question: "मटकी नृत्य कहाँ का सामुदायिक नृत्य है?",
        questionAudio: "audio4/Question_51.mp3",
        options: [
            { text: "बुंदेलखंड अंचल", correct: false },
            { text: "मालवा क्षेत्र", correct: true },
            { text: "संपूर्ण मध्य प्रदेश", correct: false },
            { text: "निमाड़ क्षेत्र", correct: false }
        ]
    },
    {
        id: 52,
        question: "तेरहताली नृत्य किस जनजाति का लोक नृत्य है?",
        questionAudio: "audio4/Question_52.mp3",
        options: [
            { text: "गोंड (गोंडी)", correct: false },
            { text: "सहरिया जनजाति", correct: false },
            { text: "मध्य प्रदेश की सभी", correct: false },
            { text: "कमार (कामड़)", correct: true }
        ]
    },
    {
        id: 53,
        question: "बरेदी नृत्य कब प्रस्तुत किया जाता है?",
        questionAudio: "audio4/Question_53.mp3",
        options: [
            { text: "दीपावली की शुरुआत (पूर्णिमा)", correct: true },
            { text: "संपूर्ण शरद ऋतु", correct: false },
            { text: "मकर संक्रांति के समय", correct: false },
            { text: "होली की समाप्ति (अमावस्या)", correct: false }
        ]
    },
    {
        id: 54,
        question: "अहीर समुदाय स्वयं को किसका वंशज मानता है?",
        questionAudio: "audio4/Question_54.mp3",
        options: [
            { text: "संपूर्ण यदुवंश", correct: false },
            { text: "श्री परशुराम", correct: false },
            { text: "श्रीकृष्ण", correct: true },
            { text: "भगवान शिव", correct: false }
        ]
    },
    {
        id: 55,
        question: "जवारा नृत्य किस दौरान प्रस्तुत किया जाता है?",
        questionAudio: "audio4/Question_55.mp3",
        options: [
            { text: "फसल (धन) कटाई", correct: true },
            { text: "बीज बुवाई", correct: false },
            { text: "सभी कृषि उत्सव", correct: false },
            { text: "मानसून आगमन", correct: false }
        ]
    },
    {
        id: 56,
        question: "कोली नृत्य किस भगवान की मनोदशा का वर्णन करता है?",
        questionAudio: "audio4/Question_56.mp3",
        options: [
            { text: "भगवान शिव", correct: false },
            { text: "भगवान गणेश", correct: false },
            { text: "सभी प्रमुख देवता", correct: false },
            { text: "भगवान कृष्ण", correct: true }
        ]
    },
    {
        id: 57,
        question: "कोली नृत्य किसका प्रतीक माना जाता है?",
        questionAudio: "audio4/Question_57.mp3",
        options: [
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "उर्वरता", correct: true },
            { text: "संपूर्ण जीवन चक्र", correct: false },
            { text: "युद्ध विजय", correct: false }
        ]
    },
    {
        id: 58,
        question: "लावणी नृत्य करने वाली महिलाओं को क्या कहा जाता है?",
        questionAudio: "audio4/Question_58.mp3",
        options: [
            { text: "काष्टा", correct: false },
            { text: "जोगवा", correct: false },
            { text: "नौवारी", correct: true },
            { text: "सभी नर्तकियां", correct: false }
        ]
    },
    {
        id: 59,
        question: "लावणी में साड़ी पहनने की शैली क्या है?",
        questionAudio: "audio4/Question_59.mp3",
        options: [
            { text: "पैठणी", correct: false },
            { text: "नौवारी", correct: false },
            { text: "पारंपरिक शैली", correct: false },
            { text: "काष्टा", correct: true }
        ]
    },
    {
        id: 60,
        question: "लावणी नर्तकियां कितनी लंबी साड़ी पहनती हैं?",
        questionAudio: "audio4/Question_60.mp3",
        options: [
            { text: "नौ गज", correct: true },
            { text: "बारह गज", correct: false },
            { text: "पारंपरिक लंबाई", correct: false },
            { text: "छह गज", correct: false }
        ]
    },
    {
        id: 61,
        question: "सुरेखा पुणेकर और रोशन सातारकर किस नृत्य से संबंधित हैं?",
        questionAudio: "audio4/Question_61.mp3",
        options: [
            { text: "तमाशा", correct: false },
            { text: "महाराष्ट्र लोक नृत्य", correct: false },
            { text: "लावणी", correct: true },
            { text: "कोली", correct: false }
        ]
    },
    {
        id: 62,
        question: "यमुनाबाई वायकर किस नृत्य की मशहूर कलाकार हैं?",
        questionAudio: "audio4/Question_62.mp3",
        options: [
            { text: "गोंधल", correct: false },
            { text: "लावणी", correct: true },
            { text: "पारंपरिक गायन", correct: false },
            { text: "डिंडी", correct: false }
        ]
    },
    {
        id: 63,
        question: "पोवाडा नृत्य में किसके जीवन को दर्शाया गया है?",
        questionAudio: "audio4/Question_63.mp3",
        options: [
            { text: "छत्रपति शिवाजी", correct: true },
            { text: "सभी मराठा योद्धा", correct: false },
            { text: "बाजीराव पेशवा", correct: false },
            { text: "तानाजी मालुसरे", correct: false }
        ]
    },
    {
        id: 64,
        question: "लेज़िम नृत्य किस उत्सव के दौरान मनाया जाता है?",
        questionAudio: "audio4/Question_64.mp3",
        options: [
            { text: "सभी मराठी त्योहार", correct: false },
            { text: "गुड़ी पड़वा", correct: false },
            { text: "शिव जयंती", correct: false },
            { text: "गणेश उत्सव", correct: true }
        ]
    },
    {
        id: 65,
        question: "लेज़िम नृत्य का अन्य नाम क्या है?",
        questionAudio: "audio4/Question_65.mp3",
        options: [
            { text: "लज़िम", correct: false },
            { text: "लावणीम", correct: false },
            { text: "लेजियम", correct: true },
            { text: "पारंपरिक लेज़िम", correct: false }
        ]
    },
    {
        id: 66,
        question: "पुंग चोलोम में नर्तक स्वयं क्या बजाते हैं?",
        questionAudio: "audio4/Question_66.mp3",
        options: [
            { text: "सभी ताल वाद्य", correct: false },
            { text: "मृदंग (पुंग)", correct: true },
            { text: "ढोल (चोलोम)", correct: false },
            { text: "करताल (झांझ)", correct: false }
        ]
    },
    {
        id: 67,
        question: "पुंग चोलोम किनके संयोजन की कला है?",
        questionAudio: "audio4/Question_67.mp3",
        options: [
            { text: "ध्वनि और आंदोलन", correct: true },
            { text: "भाव और वेशभूषा", correct: false },
            { text: "सभी प्रदर्शन कलाएं", correct: false },
            { text: "गायन और वादन", correct: false }
        ]
    },
    {
        id: 68,
        question: "लाई हरोबा किस परंपरा का नृत्य है?",
        questionAudio: "audio4/Question_68.mp3",
        options: [
            { text: "बौद्ध-पूर्व परंपरा", correct: false },
            { text: "सभी मणिपुरी परंपरा", correct: false },
            { text: "वैष्णव-पूर्व परंपरा", correct: true },
            { text: "वैष्णव परंपरा", correct: false }
        ]
    },
    {
        id: 69,
        question: "ब्रह्मांड के निर्माण को कौन-सा नृत्य दर्शाता है?",
        questionAudio: "audio4/Question_69.mp3",
        options: [
            { text: "पुंग चोलोम", correct: false },
            { text: "थांग टा", correct: false },
            { text: "सभी अनुष्ठान नृत्य", correct: false },
            { text: "लाई हरोबा", correct: true }
        ]
    },
    {
        id: 70,
        question: "लाई हरोबा किसके मंदिरों के सामने किया जाता है?",
        questionAudio: "audio4/Question_70.mp3",
        options: [
            { text: "वैष्णव भगवान", correct: false },
            { text: "उमंगलाई (पैतृक देवता)", correct: true },
            { text: "सभी स्थानीय देवता", correct: false },
            { text: "भगवान शिव", correct: false }
        ]
    },
    {
        id: 71,
        question: "लाई हरोबा में पुजारियों को क्या कहा जाता है?",
        questionAudio: "audio4/Question_71.mp3",
        options: [
            { text: "माइबा", correct: true },
            { text: "लाईबा", correct: false },
            { text: "माइबिन", correct: false },
            { text: "स्थानीय पुजारी", correct: false }
        ]
    },
    {
        id: 72,
        question: "लाई हरोबा में पुजारिनों को क्या कहा जाता है?",
        questionAudio: "audio4/Question_72.mp3",
        options: [
            { text: "महिला पुजारिन", correct: false },
            { text: "देवदासी", correct: false },
            { text: "माइबिन", correct: true },
            { text: "माइबा", correct: false }
        ]
    },
    {
        id: 73,
        question: "खंबा थोइबी कैसा प्रदर्शन है?",
        questionAudio: "audio4/Question_73.mp3",
        options: [
            { text: "एकल प्रदर्शन", correct: false },
            { text: "युगल प्रदर्शन", correct: true },
            { text: "समूह प्रदर्शन", correct: false },
            { text: "सभी लोक प्रदर्शन", correct: false }
        ]
    },
    {
        id: 74,
        question: "खंबा थोइबी में किस वंश की कहानी है?",
        questionAudio: "audio4/Question_74.mp3",
        options: [
            { text: "मैतेई वंश", correct: false },
            { text: "सभी राजशाही वंश", correct: false },
            { text: "नागा वंश", correct: false },
            { text: "खुमान वंश", correct: true }
        ]
    },
    {
        id: 75,
        question: "नूपा नृत्य का दूसरा नाम क्या है?",
        questionAudio: "audio4/Question_75.mp3",
        options: [
            { text: "सिम्बल नृत्य", correct: true },
            { text: "पारंपरिक नृत्य", correct: false },
            { text: "ड्रम नृत्य", correct: false },
            { text: "झांझ नृत्य", correct: false }
        ]
    },
    {
        id: 76,
        question: "थबल चोंगबा किन लोगों का पारंपरिक नृत्य है?",
        questionAudio: "audio4/Question_76.mp3",
        options: [
            { text: "कुकी लोग", correct: false },
            { text: "सभी मणिपुरी लोग", correct: false },
            { text: "मैतेई लोग", correct: true },
            { text: "नागा लोग", correct: false }
        ]
    },
    {
        id: 77,
        question: "लाहो नृत्य में कौन भाग लेते हैं?",
        questionAudio: "audio4/Question_77.mp3",
        options: [
            { text: "केवल पुरुष", correct: false },
            { text: "संपूर्ण जनजाति समूह", correct: false },
            { text: "केवल महिलाएं", correct: false },
            { text: "महिला और पुरुष दोनों", correct: true }
        ]
    },
    {
        id: 78,
        question: "लाहो नृत्य में महिलाएं कैसे आभूषण पहनती हैं?",
        questionAudio: "audio4/Question_78.mp3",
        options: [
            { text: "सभी धातु आभूषण", correct: false },
            { text: "सोने और चांदी", correct: true },
            { text: "पीतल और तांबे", correct: false },
            { text: "केवल सोने के", correct: false }
        ]
    },
    {
        id: 79,
        question: "नोंगक्रेम नृत्य किस जनजाति द्वारा प्रस्तुत किया जाता है?",
        questionAudio: "audio4/Question_79.mp3",
        options: [
            { text: "खासी जनजाति", correct: true },
            { text: "गारो जनजाति", correct: false },
            { text: "सभी मेघालय जनजातियां", correct: false },
            { text: "जयंतिया जनजाति", correct: false }
        ]
    },
    {
        id: 80,
        question: "नोंगक्रेम नृत्य उत्सव कितने दिनों तक चलता है?",
        questionAudio: "audio4/Question_80.mp3",
        options: [
            { text: "संपूर्ण फसल ऋतु", correct: false },
            { text: "तीन दिनों", correct: false },
            { text: "पांच दिनों", correct: true },
            { text: "सात दिनों", correct: false }
        ]
    },
    {
        id: 81,
        question: "फेस्टिवल ऑफ हंड्रेड ड्रम्स किसे कहा जाता है?",
        questionAudio: "audio4/Question_81.mp3",
        options: [
            { text: "नोंगक्रेम नृत्य", correct: false },
            { text: "वांगला नृत्य", correct: true },
            { text: "मेघालय के सभी", correct: false },
            { text: "लाहो नृत्य", correct: false }
        ]
    },
    {
        id: 82,
        question: "वांगला नृत्य किस भगवान के सम्मान में मनाया जाता है?",
        questionAudio: "audio4/Question_82.mp3",
        options: [
            { text: "वन देवता", correct: false },
            { text: "चंद्रमा भगवान", correct: false },
            { text: "सभी प्राकृतिक देवता", correct: false },
            { text: "सूर्य भगवान", correct: true }
        ]
    },
    {
        id: 83,
        question: "चेराव नृत्य को अन्य किस नाम से जाना जाता है?",
        questionAudio: "audio4/Question_83.mp3",
        options: [
            { text: "बांस नृत्य", correct: true },
            { text: "छड़ी नृत्य", correct: false },
            { text: "पारंपरिक लोक नृत्य", correct: false },
            { text: "ड्रम नृत्य", correct: false }
        ]
    },
    {
        id: 84,
        question: "चेराव नृत्य में किसका प्रयोग किया जाता है?",
        questionAudio: "audio4/Question_84.mp3",
        options: [
            { text: "लोहे की छड़", correct: false },
            { text: "सभी प्राकृतिक लकड़ियां", correct: false },
            { text: "बांस", correct: true },
            { text: "लकड़ी की छड़ी", correct: false }
        ]
    },
    {
        id: 85,
        question: "मेहमानों के नृत्य के रूप में कौन-सा नृत्य प्रसिद्ध है?",
        questionAudio: "audio4/Question_85.mp3",
        options: [
            { text: "सभी मिजो नृत्य", correct: false },
            { text: "चेराव नृत्य", correct: false },
            { text: "छीलम नृत्य", correct: false },
            { text: "खुल्लम (खुअल्लम) नृत्य", correct: true }
        ]
    },
    {
        id: 86,
        question: "खुल्लम नृत्य किस अनुष्ठान के समय किया जाता है?",
        questionAudio: "audio4/Question_86.mp3",
        options: [
            { text: "युद्ध विजय", correct: false },
            { text: "खुअचावी", correct: true },
            { text: "सभी अतिथि सत्कार", correct: false },
            { text: "चापचर कुट", correct: false }
        ]
    },
    {
        id: 87,
        question: "बांस की ट्यूब और ड्रम बीट्स का प्रयोग कहाँ होता है?",
        questionAudio: "audio4/Question_87.mp3",
        options: [
            { text: "छीलम नृत्य", correct: true },
            { text: "सभी बांस नृत्य", correct: false },
            { text: "चेराव नृत्य", correct: false },
            { text: "खुल्लम नृत्य", correct: false }
        ]
    },
    {
        id: 88,
        question: "सावलिया नृत्य किसका प्रतीक है?",
        questionAudio: "audio4/Question_88.mp3",
        options: [
            { text: "अतिथि सत्कार", correct: false },
            { text: "सभी खुशी के अवसर", correct: false },
            { text: "युद्ध जीतने", correct: true },
            { text: "फसल कटाई", correct: false }
        ]
    },
    {
        id: 89,
        question: "चेलम नृत्य किस त्योहार के दौरान मनाया जाता है?",
        questionAudio: "audio4/Question_89.mp3",
        options: [
            { text: "मिजोरम के सभी", correct: false },
            { text: "चापचर कुट", correct: true },
            { text: "मीम कुट", correct: false },
            { text: "खुअचावी", correct: false }
        ]
    },
    {
        id: 90,
        question: "पार लैम नृत्य में नर्तकी बालों में क्या पहनती है?",
        questionAudio: "audio4/Question_90.mp3",
        options: [
            { text: "केवल रंगीन फूल", correct: false },
            { text: "सोने के आभूषण", correct: false },
            { text: "सभी पारंपरिक आभूषण", correct: false },
            { text: "बहु-रंगी कपड़े, फूल", correct: true }
        ]
    },
    {
        id: 91,
        question: "ज़ेलियांग नृत्य किस जनजाति द्वारा प्रस्तुत किया जाता है?",
        questionAudio: "audio4/Question_91.mp3",
        options: [
            { text: "ज़ेलियांग नागा", correct: true },
            { text: "सभी नागा जनजातियां", correct: false },
            { text: "चांग नागा", correct: false },
            { text: "फोम नागा", correct: false }
        ]
    },
    {
        id: 92,
        question: "चांग लो नृत्य किस जनजाति द्वारा किया जाता है?",
        questionAudio: "audio4/Question_92.mp3",
        options: [
            { text: "संपूर्ण नागा समुदाय", correct: false },
            { text: "ज़ेलियांग जनजाति", correct: false },
            { text: "चांग जनजाति", correct: true },
            { text: "चाकसांग जनजाति", correct: false }
        ]
    },
    {
        id: 93,
        question: "मोन्यु आशो किस जनजाति का लोकनृत्य है?",
        questionAudio: "audio4/Question_93.mp3",
        options: [
            { text: "चाकसांग नागा", correct: false },
            { text: "फोम नागा", correct: true },
            { text: "सभी पहाड़ी जनजातियां", correct: false },
            { text: "चांग नागा", correct: false }
        ]
    },
    {
        id: 94,
        question: "फोम मोन्यु आशो त्योहार किस महीने में मनाया जाता है?",
        questionAudio: "audio4/Question_94.mp3",
        options: [
            { text: "दिसंबर", correct: false },
            { text: "संपूर्ण वसंत ऋतु", correct: false },
            { text: "मार्च", correct: false },
            { text: "अप्रैल", correct: true }
        ]
    },
    {
        id: 95,
        question: "कुकी नृत्य किनके द्वारा प्रस्तुत किया जाता है?",
        questionAudio: "audio4/Question_95.mp3",
        options: [
            { text: "चाकसांग नागाओं", correct: true },
            { text: "सभी मिजो-नागा", correct: false },
            { text: "कुकी जनजाति", correct: false },
            { text: "चांग नागाओं", correct: false }
        ]
    },
    {
        id: 96,
        question: "चांगसांग नृत्य कौन सी जनजाति करती है?",
        questionAudio: "audio4/Question_96.mp3",
        options: [
            { text: "नागालैंड की सभी", correct: false },
            { text: "ज़ेलियांग नागा", correct: false },
            { text: "चांग नागा", correct: true },
            { text: "फोम नागा", correct: false }
        ]
    },
    {
        id: 97,
        question: "'त्योहारों की भूमि' किसे कहा जाता है?",
        questionAudio: "audio4/Question_97.mp3",
        options: [
            { text: "संपूर्ण पूर्वोत्तर भारत", correct: false },
            { text: "नागालैंड", correct: true },
            { text: "मेघालय", correct: false },
            { text: "मिजोरम", correct: false }
        ]
    },
    {
        id: 98,
        question: "घुमुरा नृत्य किस जिले का दरबारी नृत्य है?",
        questionAudio: "audio4/Question_98.mp3",
        options: [
            { text: "गंजम जिला", correct: false },
            { text: "पुरी जिला", correct: false },
            { text: "संपूर्ण ओडिशा राज्य", correct: false },
            { text: "कालाहांडी जिला", correct: true }
        ]
    },
    {
        id: 99,
        question: "पाला नृत्य किस पंथ से जुड़ा है?",
        questionAudio: "audio4/Question_99.mp3",
        options: [
            { text: "सत्यपीर पंथ", correct: true },
            { text: "सभी हिंदू धार्मिक", correct: false },
            { text: "शैव पंथ", correct: false },
            { text: "वैष्णव पंथ", correct: false }
        ]
    },
    {
        id: 100,
        question: "डस्कथिया नृत्य किसके इर्द-गिर्द घूमता है?",
        questionAudio: "audio4/Question_100.mp3",
        options: [
            { text: "वाद्य यंत्रों की धुन", correct: false },
            { text: "सभी पारंपरिक कथाओं", correct: false },
            { text: "गायक के नाटकीय अभिनय", correct: true },
            { text: "नर्तक के शारीरिक हावभाव", correct: false }
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
    localStorage.setItem('folkdances_part2_progress', JSON.stringify(dataToSave));
}

function loadProgress() {
    const raw = localStorage.getItem('folkdances_part2_progress');
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            if (parsed && Object.keys(parsed.answers || {}).length > 0) {
                elements.resumeModal.classList.remove('hidden');
            }
        } catch (e) {
            localStorage.removeItem('folkdances_part2_progress');
        }
    }
}

function restoreQuizState() {
    const raw = localStorage.getItem('folkdances_part2_progress');
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
    localStorage.removeItem('folkdances_part2_progress');
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
