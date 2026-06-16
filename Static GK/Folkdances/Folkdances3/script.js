// ============================================================================
// QUIZ DATA DEFINITION (100 Questions about Indian Folk Dances - Part 3)
// ============================================================================
const quizData = [
    {
        id: 1,
        question: "बाघ नाच किस महीने में होता है?",
        questionAudio: "audio5/Question_1.mp3",
        options: [
            { text: "वैशाख महीने", correct: false },
            { text: "चैत्र महीने", correct: true },
            { text: "फाल्गुन महीने", correct: false },
            { text: "आषाढ़ महीने", correct: false }
        ]
    },
    {
        id: 2,
        question: "बाघ नाच में नर्तक कैसी धारियां बनाते हैं?",
        questionAudio: "audio5/Question_2.mp3",
        options: [
            { text: "नीली और पीली", correct: false },
            { text: "काली और सफेद", correct: false },
            { text: "लाल और सफेद", correct: false },
            { text: "पीली और काली", correct: true }
        ]
    },
    {
        id: 3,
        question: "दलखाई नृत्य की उत्पत्ति कहाँ से हुई?",
        questionAudio: "audio5/Question_3.mp3",
        options: [
            { text: "संबलपुर, ओडिशा", correct: true },
            { text: "कोरापुट, ओडिशा", correct: false },
            { text: "बालासोर, ओडिशा", correct: false },
            { text: "मयूरभंज, ओडिशा", correct: false }
        ]
    },
    {
        id: 4,
        question: "रम्माण को यूनेस्को अमूर्त सूची में कब शामिल किया गया?",
        questionAudio: "audio5/Question_4.mp3",
        options: [
            { text: "2010", correct: false },
            { text: "2008", correct: false },
            { text: "2009", correct: true },
            { text: "2012", correct: false }
        ]
    },
    {
        id: 5,
        question: "छोलिया नृत्य किस राज्य से संबंधित है?",
        questionAudio: "audio5/Question_5.mp3",
        options: [
            { text: "मध्य प्रदेश", correct: false },
            { text: "उत्तराखंड", correct: true },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "हिमाचल प्रदेश", correct: false }
        ]
    },
    {
        id: 6,
        question: "भांगड़ा नृत्य किस उत्सव पर होता है?",
        questionAudio: "audio5/Question_6.mp3",
        options: [
            { text: "बैसाखी", correct: true },
            { text: "लोहड़ी", correct: false },
            { text: "दीवाली", correct: false },
            { text: "गुरुपर्व", correct: false }
        ]
    },
    {
        id: 7,
        question: "पीर और गायन से जुड़ा पंजाबी धार्मिक नृत्य?",
        questionAudio: "audio5/Question_7.mp3",
        options: [
            { text: "धमाल", correct: false },
            { text: "सम्मी", correct: false },
            { text: "जागो", correct: false },
            { text: "जूली", correct: true }
        ]
    },
    {
        id: 8,
        question: "डंडकरा नृत्य का दूसरा नाम?",
        questionAudio: "audio5/Question_8.mp3",
        options: [
            { text: "डंडारी नृत्य", correct: false },
            { text: "लाठी नृत्य", correct: false },
            { text: "गटका नृत्य", correct: true },
            { text: "छोलिया नृत्य", correct: false }
        ]
    },
    {
        id: 9,
        question: "गिद्दा नृत्य किस प्राचीन शैली से लिया गया है?",
        questionAudio: "audio5/Question_9.mp3",
        options: [
            { text: "रिंग डांस", correct: true },
            { text: "चक्र डांस", correct: false },
            { text: "घूमर शैली", correct: false },
            { text: "रास शैली", correct: false }
        ]
    },
    {
        id: 10,
        question: "कौन सा पंजाबी नृत्य जोड़े में प्रस्तुत होता है?",
        questionAudio: "audio5/Question_10.mp3",
        options: [
            { text: "जिंदुआ", correct: false },
            { text: "कीकली", correct: true },
            { text: "जागो", correct: false },
            { text: "लूड्डी", correct: false }
        ]
    },
    {
        id: 11,
        question: "तेरहताली नृत्य किनके द्वारा प्रस्तुत होता है?",
        questionAudio: "audio5/Question_11.mp3",
        options: [
            { text: "बच्चों द्वारा", correct: false },
            { text: "पुजारियों द्वारा", correct: false },
            { text: "पुरुषों द्वारा", correct: false },
            { text: "महिलाओं द्वारा", correct: true }
        ]
    },
    {
        id: 12,
        question: "चरी नृत्य किस जनजाति का है?",
        questionAudio: "audio5/Question_12.mp3",
        options: [
            { text: "मीणा जनजाति", correct: false },
            { text: "भील जनजाति", correct: false },
            { text: "गुर्जर जनजाति", correct: true },
            { text: "कालबेलिया जनजाति", correct: false }
        ]
    },
    {
        id: 13,
        question: "चरी नृत्य क्या प्रकट करता है?",
        questionAudio: "audio5/Question_13.mp3",
        options: [
            { text: "रोजमर्रा की खुशियां", correct: true },
            { text: "फसल की कटाई", correct: false },
            { text: "धार्मिक अनुष्ठान", correct: false },
            { text: "युद्ध की विजय", correct: false }
        ]
    },
    {
        id: 14,
        question: "कालबेलिया नृत्य किस समुदाय द्वारा होता है?",
        questionAudio: "audio5/Question_14.mp3",
        options: [
            { text: "भील-मीणा समुदाय", correct: false },
            { text: "सपेरा-मदारी समुदाय", correct: false },
            { text: "कृषक-चरवाहा समुदाय", correct: false },
            { text: "सांप-छछूंदर समुदाय", correct: true }
        ]
    },
    {
        id: 15,
        question: "कालबेलिया नृत्य की प्रमुख कलाकार?",
        questionAudio: "audio5/Question_15.mp3",
        options: [
            { text: "इलैया राजा", correct: false },
            { text: "गुलाबो बाई", correct: true },
            { text: "तीजन बाई", correct: false },
            { text: "रुक्मिणी देवी", correct: false }
        ]
    },
    {
        id: 16,
        question: "गैर नृत्य किस जनजाति द्वारा होता है?",
        questionAudio: "audio5/Question_16.mp3",
        options: [
            { text: "गुर्जर जनजाति", correct: false },
            { text: "मीणा जनजाति", correct: false },
            { text: "भील जनजाति", correct: true },
            { text: "सहरिया जनजाति", correct: false }
        ]
    },
    {
        id: 17,
        question: "कालबेलिया को यूनेस्को सूची में कब शामिल किया गया?",
        questionAudio: "audio5/Question_17.mp3",
        options: [
            { text: "2010", correct: true },
            { text: "2008", correct: false },
            { text: "2012", correct: false },
            { text: "2009", correct: false }
        ]
    },
    {
        id: 18,
        question: "काग्येद नृत्य किस माह में होता है?",
        questionAudio: "audio5/Question_18.mp3",
        options: [
            { text: "अक्टूबर", correct: false },
            { text: "नवंबर", correct: false },
            { text: "जनवरी", correct: false },
            { text: "दिसंबर", correct: true }
        ]
    },
    {
        id: 19,
        question: "पुरुलिया छऊ किस राज्य का नृत्य है?",
        questionAudio: "audio5/Question_19.mp3",
        options: [
            { text: "ओडिशा राज्य", correct: false },
            { text: "पश्चिम बंगाल", correct: true },
            { text: "बिहार राज्य", correct: false },
            { text: "झारखंड राज्य", correct: false }
        ]
    },
    {
        id: 20,
        question: "रऊफ और हिकात कहाँ के नृत्य हैं?",
        questionAudio: "audio5/Question_20.mp3",
        options: [
            { text: "लद्दाख", correct: false },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "जम्मू-कश्मीर", correct: true },
            { text: "उत्तराखंड", correct: false }
        ]
    },
    {
        id: 21,
        question: "शोन्डोल और जाब्रो कहाँ के नृत्य हैं?",
        questionAudio: "audio5/Question_21.mp3",
        options: [
            { text: "लद्दाख", correct: true },
            { text: "सिक्किम", correct: false },
            { text: "अरुणाचल प्रदेश", correct: false },
            { text: "जम्मू-कश्मीर", correct: false }
        ]
    },
    {
        id: 22,
        question: "गराडी किस केंद्रशासित प्रदेश का नृत्य है?",
        questionAudio: "audio5/Question_22.mp3",
        options: [
            { text: "दमन-दीव", correct: false },
            { text: "चंडीगढ़", correct: false },
            { text: "लक्षद्वीप", correct: false },
            { text: "पुडुचेरी", correct: true }
        ]
    },
    {
        id: 23,
        question: "कुम्मी नृत्य किनके द्वारा किया जाता है?",
        questionAudio: "audio5/Question_23.mp3",
        options: [
            { text: "भारतीय तमिलों द्वारा", correct: false },
            { text: "श्रीलंकाई तमिलों द्वारा", correct: true },
            { text: "अंडमानी जनजातियों द्वारा", correct: false },
            { text: "केरलवासियों द्वारा", correct: false }
        ]
    },
    {
        id: 24,
        question: "बिना संगीत, केवल ताली बजाकर होने वाला नृत्य?",
        questionAudio: "audio5/Question_24.mp3",
        options: [
            { text: "देवरट्टम नृत्य", correct: false },
            { text: "कोलाट्टम नृत्य", correct: false },
            { text: "कुम्मी नृत्य", correct: true },
            { text: "कावड़ी नृत्य", correct: false }
        ]
    },
    {
        id: 25,
        question: "पेरिनी शिवतांडवम कहाँ का अर्ध-शास्त्रीय नृत्य है?",
        questionAudio: "audio5/Question_25.mp3",
        options: [
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "तेलंगाना", correct: true }
        ]
    },
    {
        id: 26,
        question: "होजागिरी और गरिया नृत्य किस राज्य के हैं?",
        questionAudio: "audio5/Question_26.mp3",
        options: [
            { text: "त्रिपुरा", correct: true },
            { text: "असम", correct: false },
            { text: "मेघालय", correct: false },
            { text: "मिजोरम", correct: false }
        ]
    },
    {
        id: 27,
        question: "प्रमुख शास्त्रीय नृत्यों की कुल संख्या?",
        questionAudio: "audio5/Question_27.mp3",
        options: [
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        id: 28,
        question: "भरतनाट्यम का पुराना नाम?",
        questionAudio: "audio5/Question_28.mp3",
        options: [
            { text: "कुरुवंजि", correct: false },
            { text: "दासीअट्टम", correct: false },
            { text: "सादिर", correct: true },
            { text: "भागवत", correct: false }
        ]
    },
    {
        id: 29,
        question: "भरतनाट्यम नृत्य किसे समर्पित है?",
        questionAudio: "audio5/Question_29.mp3",
        options: [
            { text: "मंदिरों को", correct: true },
            { text: "देवदासियों को", correct: false },
            { text: "शिव-पार्वती को", correct: false },
            { text: "राजाओं को", correct: false }
        ]
    },
    {
        id: 30,
        question: "भरतनाट्यम के अध्ययन का स्रोत?",
        questionAudio: "audio5/Question_30.mp3",
        options: [
            { text: "मुद्रालक्षण", correct: false },
            { text: "संगीत रत्नाकर", correct: false },
            { text: "नाट्यशास्त्र", correct: false },
            { text: "अभिनय दर्पण", correct: true }
        ]
    },
    {
        id: 31,
        question: "मोहिनीअट्टम किस राज्य का शास्त्रीय नृत्य है?",
        questionAudio: "audio5/Question_31.mp3",
        options: [
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]
    },
    {
        id: 32,
        question: "मोहिनीअट्टम विशेषतः किनके द्वारा होता है?",
        questionAudio: "audio5/Question_32.mp3",
        options: [
            { text: "पुजारियों द्वारा", correct: false },
            { text: "पुरुषों द्वारा", correct: false },
            { text: "महिलाओं द्वारा", correct: true },
            { text: "देवदासियों द्वारा", correct: false }
        ]
    },
    {
        id: 33,
        question: "उत्तर प्रदेश का शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_33.mp3",
        options: [
            { text: "कथक", correct: true },
            { text: "चरकुला", correct: false },
            { text: "नौटंकी", correct: false },
            { text: "रासलीला", correct: false }
        ]
    },
    {
        id: 34,
        question: "कुचिपुड़ी नृत्य किस संगीत पर आधारित है?",
        questionAudio: "audio5/Question_34.mp3",
        options: [
            { text: "लोक संगीत", correct: false },
            { text: "हिंदुस्तानी संगीत", correct: false },
            { text: "सोपानम संगीत", correct: false },
            { text: "कर्नाटक संगीत", correct: true }
        ]
    },
    {
        id: 35,
        question: "कुचिपुड़ी किस राज्य का शास्त्रीय नृत्य है?",
        questionAudio: "audio5/Question_35.mp3",
        options: [
            { text: "केरल", correct: false },
            { text: "आंध्र प्रदेश", correct: true },
            { text: "तेलंगाना", correct: false },
            { text: "तमिलनाडु", correct: false }
        ]
    },
    {
        id: 36,
        question: "कथककली के मुख्य विषय क्या हैं?",
        questionAudio: "audio5/Question_36.mp3",
        options: [
            { text: "गीतगोविंद, रासलीला", correct: false },
            { text: "जातक कथाएं, पंचतंत्र", correct: false },
            { text: "महाभारत, रामायण", correct: true },
            { text: "शिवपुराण, विष्णुपुराण", correct: false }
        ]
    },
    {
        id: 37,
        question: "कथककली विशेषतः किनके द्वारा होता है?",
        questionAudio: "audio5/Question_37.mp3",
        options: [
            { text: "बच्चों द्वारा", correct: false },
            { text: "महिलाओं द्वारा", correct: false },
            { text: "पुजारियों द्वारा", correct: false },
            { text: "पुरुषों द्वारा", correct: true }
        ]
    },
    {
        id: 38,
        question: "शास्त्रीय नृत्यों का वर्णन किसमें मिलता है?",
        questionAudio: "audio5/Question_38.mp3",
        options: [
            { text: "नाट्यशास्त्र", correct: true },
            { text: "ऋग्वेद", correct: false },
            { text: "अभिनय दर्पण", correct: false },
            { text: "संगीत रत्नाकर", correct: false }
        ]
    },
    {
        id: 39,
        question: "नाट्यशास्त्र के रचयिता?",
        questionAudio: "audio5/Question_39.mp3",
        options: [
            { text: "नंदीकेश्वर", correct: false },
            { text: "अभिनवगुप्त", correct: false },
            { text: "भरतमुनि", correct: true },
            { text: "मतंग मुनि", correct: false }
        ]
    },
    {
        id: 40,
        question: "नाट्यशास्त्र को अन्य क्या कहा जाता है?",
        questionAudio: "audio5/Question_40.mp3",
        options: [
            { text: "शिल्पवेद", correct: false },
            { text: "पंचमवेद", correct: true },
            { text: "गंधर्ववेद", correct: false },
            { text: "नाट्यवेद", correct: false }
        ]
    },
    {
        id: 41,
        question: "सबसे प्राचीन शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_41.mp3",
        options: [
            { text: "कुचिपुड़ी", correct: false },
            { text: "ओडिसी", correct: false },
            { text: "कथककली", correct: false },
            { text: "भरतनाट्यम", correct: true }
        ]
    },
    {
        id: 42,
        question: "सबसे नया शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_42.mp3",
        options: [
            { text: "सत्रिया", correct: true },
            { text: "छऊ", correct: false },
            { text: "कुचिपुड़ी", correct: false },
            { text: "मोहिनीअट्टम", correct: false }
        ]
    },
    {
        id: 43,
        question: "सत्रिया नृत्य के संस्थापक?",
        questionAudio: "audio5/Question_43.mp3",
        options: [
            { text: "गुरु केलुचरण", correct: false },
            { text: "श्रीमंत शंकरदेव", correct: true },
            { text: "वल्लथोल नारायण", correct: false },
            { text: "सिद्धेंद्र योगी", correct: false }
        ]
    },
    {
        id: 44,
        question: "सत्रिया को शास्त्रीय नृत्य में कब शामिल किया गया?",
        questionAudio: "audio5/Question_44.mp3",
        options: [
            { text: "2002", correct: false },
            { text: "1998", correct: false },
            { text: "2000", correct: true },
            { text: "2004", correct: false }
        ]
    },
    {
        id: 45,
        question: "अलार्मेल वल्ली को पद्म भूषण कब मिला?",
        questionAudio: "audio5/Question_45.mp3",
        options: [
            { text: "2006", correct: false },
            { text: "2008", correct: false },
            { text: "2002", correct: false },
            { text: "2004", correct: true }
        ]
    },
    {
        id: 46,
        question: "मीनाक्षी सुंदरम पिल्लई किस शैली से जुड़ी हैं?",
        questionAudio: "audio5/Question_46.mp3",
        options: [
            { text: "पंडानल्लूर शैली", correct: true },
            { text: "वझूवूर शैली", correct: false },
            { text: "कलाक्षेत्र शैली", correct: false },
            { text: "तंजावुर शैली", correct: false }
        ]
    },
    {
        id: 47,
        question: "रमा वैद्यनाथन का संबंध किस शास्त्रीय नृत्य से है?",
        questionAudio: "audio5/Question_47.mp3",
        options: [
            { text: "कुचिपुड़ी", correct: false },
            { text: "मोहिनीअट्टम", correct: false },
            { text: "भरतनाट्यम", correct: true },
            { text: "ओडिसी", correct: false }
        ]
    },
    {
        id: 48,
        question: "ओडिसी किस राज्य का शास्त्रीय नृत्य है?",
        questionAudio: "audio5/Question_48.mp3",
        options: [
            { text: "छत्तीसगढ़", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "झारखंड", correct: false }
        ]
    },
    {
        id: 49,
        question: "मणिपुरी किस राज्य का शास्त्रीय नृत्य है?",
        questionAudio: "audio5/Question_49.mp3",
        options: [
            { text: "असम", correct: false },
            { text: "मिजोरम", correct: false },
            { text: "नगालैंड", correct: false },
            { text: "मणिपुर", correct: true }
        ]
    },
    {
        id: 50,
        question: "चरकुला लोक नृत्य किस राज्य से संबंधित है?",
        questionAudio: "audio5/Question_50.mp3",
        options: [
            { text: "उत्तर प्रदेश", correct: true },
            { text: "बिहार", correct: false },
            { text: "मध्य प्रदेश", correct: false },
            { text: "राजस्थान", correct: false }
        ]
    },
    {
        id: 51,
        question: "भरतनाट्यम का आरंभिक अंश?",
        questionAudio: "audio5/Question_51.mp3",
        options: [
            { text: "तिल्लाना", correct: false },
            { text: "अलारिप्पू", correct: true },
            { text: "जतिस्वरम", correct: false },
            { text: "शब्दम", correct: false }
        ]
    },
    {
        id: 52,
        question: "यामिनी कृष्णमूर्ति का राज्य?",
        questionAudio: "audio5/Question_52.mp3",
        options: [
            { text: "केरल", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: true }
        ]
    },
    {
        id: 53,
        question: "सोनल मानसिंह के शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_53.mp3",
        options: [
            { text: "भरतनाट्यम, ओडिसी", correct: true },
            { text: "भरतनाट्यम, कुचिपुड़ी", correct: false },
            { text: "कुचिपुड़ी, ओडिसी", correct: false },
            { text: "मोहिनीअट्टम, कथक", correct: false }
        ]
    },
    {
        id: 54,
        question: "रुक्मिणी देवी अरुंडेल को पद्मभूषण?",
        questionAudio: "audio5/Question_54.mp3",
        options: [
            { text: "1965", correct: false },
            { text: "1981", correct: false },
            { text: "1956", correct: true },
            { text: "1977", correct: false }
        ]
    },
    {
        id: 55,
        question: "लीला सैमसन का राज्य?",
        questionAudio: "audio5/Question_55.mp3",
        options: [
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "कर्नाटक", correct: false }
        ]
    },
    {
        id: 56,
        question: "मृणालिनी साराभाई के पति?",
        questionAudio: "audio5/Question_56.mp3",
        options: [
            { text: "विक्रम साराभाई", correct: true },
            { text: "होमी जहांगीर भाभा", correct: false },
            { text: "सतीश धवन", correct: false },
            { text: "ए.पी.जे. अब्दुल कलाम", correct: false }
        ]
    },
    {
        id: 57,
        question: "'इंडियन डांसिंग' के लेखक?",
        questionAudio: "audio5/Question_57.mp3",
        options: [
            { text: "उदय शंकर", correct: false },
            { text: "विक्रम साराभाई", correct: false },
            { text: "बिस्सानो रामगोपाल", correct: true },
            { text: "राम नारायण", correct: false }
        ]
    },
    {
        id: 58,
        question: "निशागांधी पुरस्कार देने वाली सरकार?",
        questionAudio: "audio5/Question_58.mp3",
        options: [
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "केरल", correct: true }
        ]
    },
    {
        id: 59,
        question: "टी. बालासरस्वती का राज्य?",
        questionAudio: "audio5/Question_59.mp3",
        options: [
            { text: "तमिलनाडु", correct: true },
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]
    },
    {
        id: 60,
        question: "मालविका सरुक्कई का राज्य?",
        questionAudio: "audio5/Question_60.mp3",
        options: [
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "महाराष्ट्र", correct: false }
        ]
    },
    {
        id: 61,
        question: "भरतनाट्यम करने वाली श्रेणी?",
        questionAudio: "audio5/Question_61.mp3",
        options: [
            { text: "केवल पुरुष", correct: false },
            { text: "महिला व पुरुष", correct: false },
            { text: "विशेष समुदाय", correct: false },
            { text: "केवल महिलाएँ", correct: true }
        ]
    },
    {
        id: 62,
        question: "यामिनी कृष्णमूर्ति को पद्मविभूषण वर्ष?",
        questionAudio: "audio5/Question_62.mp3",
        options: [
            { text: "2001", correct: false },
            { text: "2003", correct: false },
            { text: "2016", correct: true },
            { text: "2018", correct: false }
        ]
    },
    {
        id: 63,
        question: "सोनल मानसिंह का राज्य?",
        questionAudio: "audio5/Question_63.mp3",
        options: [
            { text: "गुजरात", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "तमिलनाडु", correct: false },
            { text: "दिल्ली", correct: false }
        ]
    },
    {
        id: 64,
        question: "रुक्मिणी देवी अरुंडेल का शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_64.mp3",
        options: [
            { text: "भरतनाट्यम", correct: true },
            { text: "ओडिसी", correct: false },
            { text: "मोहिनीअट्टम", correct: false },
            { text: "कुचिपुड़ी", correct: false }
        ]
    },
    {
        id: 65,
        question: "पद्मा सुब्रमण्यम का राज्य?",
        questionAudio: "audio5/Question_65.mp3",
        options: [
            { text: "आंध्र प्रदेश", correct: false },
            { text: "केरल", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: true }
        ]
    },
    {
        id: 66,
        question: "पद्मिनी प्रियदर्शिनी का मूल नाम?",
        questionAudio: "audio5/Question_66.mp3",
        options: [
            { text: "पद्मिनी सुब्रमण्यम", correct: false },
            { text: "पद्मिनी रामचंद्रन", correct: true },
            { text: "पद्मिनी साराभाई", correct: false },
            { text: "पद्मिनी बालकृष्णन", correct: false }
        ]
    },
    {
        id: 67,
        question: "वैजयंतीमाला सर्वश्रेष्ठ अभिनेत्री 'संगम' वर्ष?",
        questionAudio: "audio5/Question_67.mp3",
        options: [
            { text: "1959", correct: false },
            { text: "1962", correct: false },
            { text: "1965", correct: true },
            { text: "1968", correct: false }
        ]
    },
    {
        id: 68,
        question: "टी. बालासरस्वती का शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_68.mp3",
        options: [
            { text: "भरतनाट्यम", correct: true },
            { text: "ओडिसी", correct: false },
            { text: "कथकली", correct: false },
            { text: "कुचिपुड़ी", correct: false }
        ]
    },
    {
        id: 69,
        question: "मालविका सरुक्कई के शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_69.mp3",
        options: [
            { text: "भरतनाट्यम, कुचिपुड़ी", correct: false },
            { text: "कथक, मोहिनीअट्टम", correct: false },
            { text: "कुचिपुड़ी, ओडिसी", correct: false },
            { text: "भरतनाट्यम, ओडिसी", correct: true }
        ]
    },
    {
        id: 70,
        question: "भरतनाट्यम का अंतिम अंश?",
        questionAudio: "audio5/Question_70.mp3",
        options: [
            { text: "वर्णम", correct: false },
            { text: "अलारिप्पू", correct: false },
            { text: "तिल्लाना", correct: true },
            { text: "पदम", correct: false }
        ]
    },
    {
        id: 71,
        question: "यामिनी कृष्णमूर्ति के शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_71.mp3",
        options: [
            { text: "भरतनाट्यम, कुचिपुड़ी", correct: true },
            { text: "भरतनाट्यम, ओडिसी", correct: false },
            { text: "कुचिपुड़ी, मोहिनीअट्टम", correct: false },
            { text: "कथक, भरतनाट्यम", correct: false }
        ]
    },
    {
        id: 72,
        question: "सबसे कम उम्र की पद्मविभूषण नृत्यांगना?",
        questionAudio: "audio5/Question_72.mp3",
        options: [
            { text: "यामिनी कृष्णमूर्ति", correct: false },
            { text: "सोनल मानसिंह", correct: true },
            { text: "रुक्मिणी देवी", correct: false },
            { text: "मालविका सरुक्कई", correct: false }
        ]
    },
    {
        id: 73,
        question: "रुक्मिणी देवी अरुंडेल का राज्य?",
        questionAudio: "audio5/Question_73.mp3",
        options: [
            { text: "कर्नाटक", correct: false },
            { text: "आंध्र प्रदेश", correct: false },
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: true }
        ]
    },
    {
        id: 74,
        question: "लीला सैमसन का शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_74.mp3",
        options: [
            { text: "कुचिपुड़ी", correct: false },
            { text: "कथकली", correct: false },
            { text: "भरतनाट्यम", correct: true },
            { text: "मोहिनीअट्टम", correct: false }
        ]
    },
    {
        id: 75,
        question: "मृणालिनी साराभाई का राज्य?",
        questionAudio: "audio5/Question_75.mp3",
        options: [
            { text: "गुजरात", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: false }
        ]
    },
    {
        id: 76,
        question: "पद्मा सुब्रमण्यम को पद्मभूषण?",
        questionAudio: "audio5/Question_76.mp3",
        options: [
            { text: "1992", correct: false },
            { text: "2003", correct: true },
            { text: "2001", correct: false },
            { text: "2016", correct: false }
        ]
    },
    {
        id: 77,
        question: "बिस्सानो रामगोपाल का राज्य?",
        questionAudio: "audio5/Question_77.mp3",
        options: [
            { text: "तमिलनाडु", correct: false },
            { text: "केरल", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "कर्नाटक", correct: true }
        ]
    },
    {
        id: 78,
        question: "पद्मिनी प्रियदर्शिनी का राज्य?",
        questionAudio: "audio5/Question_78.mp3",
        options: [
            { text: "तमिलनाडु", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: true },
            { text: "आंध्र प्रदेश", correct: false }
        ]
    },
    {
        id: 79,
        question: "टी. बालासरस्वती पर वृत्तचित्र निर्माता?",
        questionAudio: "audio5/Question_79.mp3",
        options: [
            { text: "सत्यजीत रे", correct: true },
            { text: "मृणाल सेन", correct: false },
            { text: "श्याम बेनेगल", correct: false },
            { text: "बिमल रॉय", correct: false }
        ]
    },
    {
        id: 80,
        question: "भरतनाट्यम किस धर्म से संबंधित है?",
        questionAudio: "audio5/Question_80.mp3",
        options: [
            { text: "वैष्णव धर्म", correct: false },
            { text: "शैव धर्म", correct: true },
            { text: "शाक्त धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: false }
        ]
    },
    {
        id: 81,
        question: "यामिनी कृष्णमूर्ति को पद्मश्री वर्ष?",
        questionAudio: "audio5/Question_81.mp3",
        options: [
            { text: "1956", correct: false },
            { text: "1977", correct: false },
            { text: "1990", correct: false },
            { text: "1968", correct: true }
        ]
    },
    {
        id: 82,
        question: "सोनल मानसिंह राज्यसभा सांसद वर्ष?",
        questionAudio: "audio5/Question_82.mp3",
        options: [
            { text: "2014", correct: false },
            { text: "2016", correct: false },
            { text: "2018", correct: true },
            { text: "2020", correct: false }
        ]
    },
    {
        id: 83,
        question: "रुक्मिणी देवी को 'प्राणी मित्र पुरस्कार'?",
        questionAudio: "audio5/Question_83.mp3",
        options: [
            { text: "1956", correct: false },
            { text: "1968", correct: true },
            { text: "1984", correct: false },
            { text: "1999", correct: false }
        ]
    },
    {
        id: 84,
        question: "लीला सैमसन को पद्मश्री वर्ष?",
        questionAudio: "audio5/Question_84.mp3",
        options: [
            { text: "1990", correct: true },
            { text: "1981", correct: false },
            { text: "2003", correct: false },
            { text: "2015", correct: false }
        ]
    },
    {
        id: 85,
        question: "मृणालिनी साराभाई का शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_85.mp3",
        options: [
            { text: "कुचिपुड़ी", correct: false },
            { text: "कथक", correct: false },
            { text: "ओडिसी", correct: false },
            { text: "भरतनाट्यम", correct: true }
        ]
    },
    {
        id: 86,
        question: "पद्मा सुब्रमण्यम का शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_86.mp3",
        options: [
            { text: "ओडिसी", correct: false },
            { text: "भरतनाट्यम", correct: true },
            { text: "कुचिपुड़ी", correct: false },
            { text: "मोहिनीअट्टम", correct: false }
        ]
    },
    {
        id: 87,
        question: "'रिदम्स इन द हेवन्स' के लेखक?",
        questionAudio: "audio5/Question_87.mp3",
        options: [
            { text: "केलुचरण महापात्र", correct: false },
            { text: "बिरजू महाराज", correct: false },
            { text: "बिस्सानो रामगोपाल", correct: true },
            { text: "सत्यजीत रे", correct: false }
        ]
    },
    {
        id: 88,
        question: "वैजयंतीमाला का राज्य?",
        questionAudio: "audio5/Question_88.mp3",
        options: [
            { text: "तमिलनाडु", correct: true },
            { text: "महाराष्ट्र", correct: false },
            { text: "केरल", correct: false },
            { text: "कर्नाटक", correct: false }
        ]
    },
    {
        id: 89,
        question: "टी. बालासरस्वती को पद्मविभूषण वर्ष?",
        questionAudio: "audio5/Question_89.mp3",
        options: [
            { text: "1955", correct: false },
            { text: "1957", correct: false },
            { text: "1992", correct: false },
            { text: "1977", correct: true }
        ]
    },
    {
        id: 90,
        question: "'मेलत्तूर' और 'पंडानल्लूर' किसकी शैलियां?",
        questionAudio: "audio5/Question_90.mp3",
        options: [
            { text: "कुचिपुड़ी", correct: false },
            { text: "कथकली", correct: false },
            { text: "भरतनाट्यम", correct: true },
            { text: "मोहिनीअट्टम", correct: false }
        ]
    },
    {
        id: 91,
        question: "'ए पैशन फॉर डांस' आत्मकथा?",
        questionAudio: "audio5/Question_91.mp3",
        options: [
            { text: "सोनल मानसिंह", correct: false },
            { text: "यामिनी कृष्णमूर्ति", correct: true },
            { text: "रुक्मिणी देवी", correct: false },
            { text: "मृणालिनी साराभाई", correct: false }
        ]
    },
    {
        id: 92,
        question: "सोनल मानसिंह को पद्मविभूषण वर्ष?",
        questionAudio: "audio5/Question_92.mp3",
        options: [
            { text: "2003", correct: true },
            { text: "1992", correct: false },
            { text: "2001", correct: false },
            { text: "2016", correct: false }
        ]
    },
    {
        id: 93,
        question: "कालिदास सम्मान (1984) देने वाली सरकार?",
        questionAudio: "audio5/Question_93.mp3",
        options: [
            { text: "उत्तर प्रदेश", correct: false },
            { text: "महाराष्ट्र", correct: false },
            { text: "तमिलनाडु", correct: false },
            { text: "मध्य प्रदेश", correct: true }
        ]
    },
    {
        id: 94,
        question: "मालविका सरुक्कई को पद्मश्री वर्ष?",
        questionAudio: "audio5/Question_94.mp3",
        options: [
            { text: "1992", correct: false },
            { text: "2002", correct: false },
            { text: "2003", correct: true },
            { text: "2016", correct: false }
        ]
    },
    {
        id: 95,
        question: "मृणालिनी साराभाई को पद्मभूषण?",
        questionAudio: "audio5/Question_95.mp3",
        options: [
            { text: "1965", correct: false },
            { text: "1992", correct: true },
            { text: "1981", correct: false },
            { text: "2003", correct: false }
        ]
    },
    {
        id: 96,
        question: "पद्मा सुब्रमण्यम को निशागांधी पुरस्कार?",
        questionAudio: "audio5/Question_96.mp3",
        options: [
            { text: "2015", correct: true },
            { text: "2003", correct: false },
            { text: "2010", correct: false },
            { text: "2019", correct: false }
        ]
    },
    {
        id: 97,
        question: "बिस्सानो रामगोपाल को 'ऑर्डर ऑफ द ब्रिटिश एम्पायर'?",
        questionAudio: "audio5/Question_97.mp3",
        options: [
            { text: "1951", correct: false },
            { text: "1957", correct: false },
            { text: "1999", correct: true },
            { text: "2003", correct: false }
        ]
    },
    {
        id: 98,
        question: "पद्मिनी प्रियदर्शिनी का पुरस्कार?",
        questionAudio: "audio5/Question_98.mp3",
        options: [
            { text: "निशागांधी पुरस्कार", correct: false },
            { text: "कालिदास सम्मान", correct: false },
            { text: "संगीत नाटक अकादमी", correct: false },
            { text: "शांतला नाट्य श्री", correct: true }
        ]
    },
    {
        id: 99,
        question: "वैजयंतीमाला का शास्त्रीय नृत्य?",
        questionAudio: "audio5/Question_99.mp3",
        options: [
            { text: "कुचिपुड़ी", correct: false },
            { text: "भरतनाट्यम", correct: true },
            { text: "कथक", correct: false },
            { text: "मोहिनीअट्टम", correct: false }
        ]
    },
    {
        id: 100,
        question: "राज्यसभा नामित पहली नर्तकी?",
        questionAudio: "audio5/Question_100.mp3",
        options: [
            { text: "रुक्मिणी देवी अरुंडेल", correct: true },
            { text: "टी. बालासरस्वती", correct: false },
            { text: "मृणालिनी साराभाई", correct: false },
            { text: "सोनल मानसिंह", correct: false }
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
    localStorage.setItem('folkdances_part3_progress', JSON.stringify(dataToSave));
}

function loadProgress() {
    const raw = localStorage.getItem('folkdances_part3_progress');
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            if (parsed && Object.keys(parsed.answers || {}).length > 0) {
                elements.resumeModal.classList.remove('hidden');
            }
        } catch (e) {
            localStorage.removeItem('folkdances_part3_progress');
        }
    }
}

function restoreQuizState() {
    const raw = localStorage.getItem('folkdances_part3_progress');
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
    localStorage.removeItem('folkdances_part3_progress');
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
