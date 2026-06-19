// ============================================================================
// QUIZ DATA DEFINITION (89 Questions about Weekly Current Affairs 27 April - 2 May)
// ============================================================================
const quizData = [
    {
        id: 1,
        question: "हाल ही में महाराजा रणजीत सिंह की प्रतिमा का अनावरण कहाँ किया गया है?",
        questionAudio: "audio6/Question_1.mp3",
        options: [
            { text: "कनाडा में।", correct: false },
            { text: "ब्रिटेन में।", correct: false },
            { text: "मलावी में।", correct: true },
            { text: "केन्या में।", correct: false }
        ]
    },
    {
        id: 2,
        question: "हाल ही में UPSC उम्मीदवारों को वित्तीय सहायता प्रदान करने के लिए CM INSPIRE योजना किसने शुरू की है?",
        questionAudio: "audio6/Question_2.mp3",
        options: [
            { text: "असम ने।", correct: false },
            { text: "नागालैंड ने।", correct: false },
            { text: "मणिपुर ने।", correct: false },
            { text: "मेघालय ने।", correct: true }
        ]
    },
    {
        id: 3,
        question: "हाल ही में भारतीय रिजर्व बैंक ने किसका बैंकिंग लाइसेंस रद्द किया है?",
        questionAudio: "audio6/Question_3.mp3",
        options: [
            { text: "एयरटेल पेमेंट्स बैंक का।", correct: false },
            { text: "फिनो पेमेंट्स बैंक का।", correct: false },
            { text: "इंडिया पोस्ट पेमेंट्स बैंक का।", correct: false },
            { text: "पेटीएम पेमेंट्स बैंक लिमिटेड का।", correct: true }
        ]
    },
    {
        id: 4,
        question: "2031 पुरुष फीफा बास्केटबॉल विश्व कप की मेजबानी कौन करेगा?",
        questionAudio: "audio6/Question_4.mp3",
        options: [
            { text: "फ्रांस करेगा।", correct: true },
            { text: "स्पेन करेगा।", correct: false },
            { text: "जर्मनी करेगा।", correct: false },
            { text: "इटली करेगा।", correct: false }
        ]
    },
    {
        id: 5,
        question: "हाल ही में दिवंगत गुरबख्श सिंह ग्रेवाल का संबंध किस खेल से था?",
        questionAudio: "audio6/Question_5.mp3",
        options: [
            { text: "क्रिकेट से था।", correct: false },
            { text: "हॉकी से था।", correct: true },
            { text: "फुटबॉल से था।", correct: false },
            { text: "कुश्ती से था।", correct: false }
        ]
    },
    {
        id: 6,
        question: "हाल ही में कौन सा खेल संघ अंतर्राष्ट्रीय विश्व खेल संघ (IWGA) में शामिल हुआ है?",
        questionAudio: "audio6/Question_6.mp3",
        options: [
            { text: "अंतर्राष्ट्रीय क्रिकेट परिषद (ICC)।", correct: false },
            { text: "अंतर्राष्ट्रीय फुटबॉल महासंघ (FIFA)।", correct: false },
            { text: "अंतर्राष्ट्रीय हॉकी महासंघ (FIH)।", correct: false },
            { text: "अंतर्राष्ट्रीय शतरंज महासंघ (FIDE)।", correct: true }
        ]
    },
    {
        id: 7,
        question: "हाल ही में 2025/2026 सीजन की एएफसी (AFC) चैंपियंस लीग किसने जीती है?",
        questionAudio: "audio6/Question_7.mp3",
        options: [
            { text: "अल अहली FC ने।", correct: true },
            { text: "अल-इत्तिहाद FC ने।", correct: false },
            { text: "माचिदा ज़ेलविया FC ने।", correct: false },
            { text: "उरावा रेड डायमंड्स FC ने।", correct: false }
        ]
    },
    {
        id: 8,
        question: "हाल ही में यूनीडो (UNIDO) का चौथा जेंडर इक्वालिटी मोबिलाइजेशन (GEM) पुरस्कार 2026 किसने जीता है?",
        questionAudio: "audio6/Question_8.mp3",
        options: [
            { text: "इंदौर नगर निगम ने।", correct: false },
            { text: "गुंटूर नगर निगम ने।", correct: true },
            { text: "पुणे नगर निगम ने।", correct: false },
            { text: "भोपाल नगर निगम ने।", correct: false }
        ]
    },
    {
        id: 9,
        question: "हाल ही में नीति आयोग का उपाध्यक्ष किसे नियुक्त किया गया है?",
        questionAudio: "audio6/Question_9.mp3",
        options: [
            { text: "राजीव कुमार को।", correct: false },
            { text: "अरविंद पनगढ़िया को।", correct: false },
            { text: "अशोक लाहिड़ी को।", correct: true },
            { text: "अमिताभ कांत को।", correct: false }
        ]
    },
    {
        id: 10,
        question: "हाल ही में आईपीएल इतिहास में 800 चौके लगाने वाले पहले बल्लेबाज कौन बने हैं?",
        questionAudio: "audio6/Question_10.mp3",
        options: [
            { text: "विराट कोहली।", correct: true },
            { text: "रोहित शर्मा।", correct: false },
            { text: "के एल राहुल।", correct: false },
            { text: "ऋषभ पंत।", correct: false }
        ]
    },
    {
        id: 11,
        question: "हाल ही में किस शहर को 2026 के लिए केंद्र के 'सेफ सिटीज' प्रोजेक्ट के तहत चुना गया है?",
        questionAudio: "audio6/Question_11.mp3",
        options: [
            { text: "इंदौर को।", correct: false },
            { text: "धार को।", correct: true },
            { text: "भोपाल को।", correct: false },
            { text: "उज्जेन को।", correct: false }
        ]
    },
    {
        id: 12,
        question: "हाल ही में नागरिकों को जनगणना 2027 में सहायता के लिए कौन सी राष्ट्रीय निःशुल्क हेल्पलाइन शुरू की गई है?",
        questionAudio: "audio6/Question_12.mp3",
        options: [
            { text: "1800", correct: false },
            { text: "1911", correct: false },
            { text: "1122", correct: false },
            { text: "1855", correct: true }
        ]
    },
    {
        id: 13,
        question: "हाल ही में नोएडा इंटरनेशनल एयरपोर्ट का अंतरिम मुख्य कार्यकारी अधिकारी किसे नियुक्त किया गया है?",
        questionAudio: "audio6/Question_13.mp3",
        options: [
            { text: "नीतू समरा को।", correct: true },
            { text: "संजीव कपूर को।", correct: false },
            { text: "अरुण मिश्रा को।", correct: false },
            { text: "विकास शर्मा को।", correct: false }
        ]
    },
    {
        id: 14,
        question: "हाल ही में शंघाई सहयोग संगठन (SCO) रक्षा मंत्रियों की बैठक 2026 कहाँ आयोजित की जाएगी?",
        questionAudio: "audio6/Question_14.mp3",
        options: [
            { text: "ताशकंद में।", correct: false },
            { text: "बिश्केक में।", correct: true },
            { text: "अस्ताना में।", correct: false },
            { text: "दुशांबे में।", correct: false }
        ]
    },
    {
        id: 15,
        question: "हाल ही में विश्व मलेरिया दिवस 2026 कब मनाया गया?",
        questionAudio: "audio6/Question_15.mp3",
        options: [
            { text: "24 अप्रैल को।", correct: false },
            { text: "25 अप्रैल को।", correct: true },
            { text: "26 अप्रैल को.", correct: false },
            { text: "27 अप्रैल को।", correct: false }
        ]
    },
    {
        id: 16,
        question: "हाल ही में तैमूर एंटी-शिप मिसाइल का परीक्षण किसने किया है?",
        questionAudio: "audio6/Question_16.mp3",
        options: [
            { text: "पाकिस्तान ने।", correct: true },
            { text: "इराक ने।", correct: false },
            { text: "अफ़गानिस्तान ने।", correct: false },
            { text: "कतर ने।", correct: false }
        ]
    },
    {
        id: 17,
        question: "हाल ही में पावर फाइनेंस कॉर्पोरेशन (PFC) में निदेशक (वित्त) किसे नियुक्त किया गया है?",
        questionAudio: "audio6/Question_17.mp3",
        options: [
            { text: "संजीव कुमार को।", correct: false },
            { text: "अजय माथुर को।", correct: false },
            { text: "राजेश कुमार अग्रवाल को।", correct: true },
            { text: "विनोद तिवारी को।", correct: false }
        ]
    },
    {
        id: 18,
        question: "हाल ही में भारत ने काहिरा में आयोजित ISSF जूनियर विश्व कप 2026 में पदक तालिका में कौन सा स्थान हासिल किया है?",
        questionAudio: "audio6/Question_18.mp3",
        options: [
            { text: "पहला स्थान।", correct: true },
            { text: "दूसरा स्थान।", correct: false },
            { text: "तीसरा स्थान।", correct: false },
            { text: "चौथा स्थान।", correct: false }
        ]
    },
    {
        id: 19,
        question: "हाल ही में किसके संस्थापक शिव रतन अग्रवाल का निधन हो गया है?",
        questionAudio: "audio6/Question_19.mp3",
        options: [
            { text: "हल्दीराम के।", correct: false },
            { text: "बालाजी वेफर्स के।", correct: false },
            { text: "प्रभुजी के।", correct: false },
            { text: "बिकाजी फूड्स के।", correct: true }
        ]
    },
    {
        id: 20,
        question: "हाल ही में दिल्ली मेट्रो इंटरनेशनल लिमिटेड का पहला मुख्य कार्यकारी अधिकारी किसे नियुक्त किया गया है?",
        questionAudio: "audio6/Question_20.mp3",
        options: [
            { text: "संजय जमआर को।", correct: true },
            { text: "विकास कुमार को।", correct: false },
            { text: "मंगू सिंह को।", correct: false },
            { text: "अजय कुमार को।", correct: false }
        ]
    },
    {
        id: 21,
        question: "हाल ही में दिवंगत फोटोग्राफर रघु राय को किस वर्ष पद्म श्री पुरस्कार प्रदान किया गया था?",
        questionAudio: "audio6/Question_21.mp3",
        options: [
            { text: "1968 में।", correct: false },
            { text: "1972 में।", correct: true },
            { text: "1980 में।", correct: false },
            { text: "1991 में।", correct: false }
        ]
    },
    {
        id: 22,
        question: "हाल ही में केंद्रीय रेल मंत्री अश्विनी वैष्णव ने हाई स्पीड बुलेट ट्रेन निर्माण संयंत्र 'आदित्य' का उद्घाटन कहाँ किया है?",
        questionAudio: "audio6/Question_22.mp3",
        options: [
            { text: "बेंगलुरु में।", correct: true },
            { text: "चेन्नई में।", correct: false },
            { text: "मुंबई में।", correct: false },
            { text: "हैदराबाद में।", correct: false }
        ]
    },
    {
        id: 23,
        question: "हाल ही में आंध्र प्रदेश उच्च न्यायालय की पहली महिला मुख्य न्यायाधीश के रूप में किसने शपथ ली है?",
        questionAudio: "audio6/Question_23.mp3",
        options: [
            { text: "इंदिरा बनर्जी ने।", correct: false },
            { text: "लिसा गिल ने।", correct: true },
            { text: "बी.वी. नागरत्ना ने।", correct: false },
            { text: "हिमा कोहली ने।", correct: false }
        ]
    },
    {
        id: 24,
        question: "हाल ही में विश्व स्वास्थ्य संगठन (WHO) ने पहली बार शिशुओं के लिए विशेष मलेरिया दवा के रूप में किसे मंजूरी दी है?",
        questionAudio: "audio6/Question_24.mp3",
        options: [
            { text: "क्लोरोक्वीन को।", correct: false },
            { text: "क्विनीन को।", correct: false },
            { text: "आर्टेमीथर-ल्यूमेफैंट्रिन को।", correct: true },
            { text: "मेफ्लोक्वीन को।", correct: false }
        ]
    },
    {
        id: 25,
        question: "हाल ही में इमैनुएल मैक्रॉन ने किस वर्ष के बाद राजनीति से हटने की घोषणा की है?",
        questionAudio: "audio6/Question_25.mp3",
        options: [
            { text: "2035 के बाद।", correct: false },
            { text: "2029 के बाद।", correct: false },
            { text: "2031 के बाद।", correct: false },
            { text: "2027 के बाद।", correct: true }
        ]
    },
    {
        id: 26,
        question: "हाल ही में किस राज्य ने अपना पहला मशरूम मिशन शुरू किया है?",
        questionAudio: "audio6/Question_26.mp3",
        options: [
            { text: "आंध्र प्रदेश ने।", correct: true },
            { text: "तमिलनाडु ने।", correct: false },
            { text: "कर्नाटक ने।", correct: false },
            { text: "तेलंगाना ने।", correct: false }
        ]
    },
    {
        id: 27,
        question: "हाल ही में दो घंटे से कम समय में मैराथन पूरी करने वाले पहले एथलीट कौन बने हैं?",
        questionAudio: "audio6/Question_27.mp3",
        options: [
            { text: "एलियुड किपचोगे।", correct: false },
            { text: "सबास्टियन सावे।", correct: true },
            { text: "योमिफ केजेल्चा।", correct: false },
            { text: "जैकब किप्लिमो।", correct: false }
        ]
    },
    {
        id: 28,
        question: "हाल ही में आईपीएल इतिहास का सबसे बड़ा सफल रन चेज़ किसने किया है?",
        questionAudio: "audio6/Question_28.mp3",
        options: [
            { text: "मुंबई इंडियंस ने।", correct: false },
            { text: "रॉयल चैलेंजर्स बेंगलुरु ने।", correct: false },
            { text: "पंजाब किंग्स ने।", correct: true },
            { text: "चेन्नई सुपर किंग्स ने।", correct: false }
        ]
    },
    {
        id: 29,
        question: "हाल ही में इज़राइल ने भारत में 'बनी मेनाशे' (B'nei Menashe) समुदाय के सदस्यों को किस ऑपरेशन के तहत स्थानांतरित किया है?",
        questionAudio: "audio6/Question_29.mp3",
        options: [
            { text: "ऑपरेशन सनराइज के तहत।", correct: false },
            { text: "ऑपरेशन न्यू होप के तहत।", correct: false },
            { text: "ऑपरेशन होमकमिंग के तहत।", correct: false },
            { text: "ऑपरेशन विंग्स ऑफ़ डॉन के तहत।", correct: true }
        ]
    },
    {
        id: 30,
        question: "हाल ही में 'द क्यूरियस एंड द क्लासीफाइड: अनअर्थिंग मिलिट्री मिथ्स एंड मिस्ट्रीज' का विमोचन किसने किया है?",
        questionAudio: "audio6/Question_30.mp3",
        options: [
            { text: "एम. एम. नरवणे ने।", correct: true },
            { text: "अशोक सिंह ने।", correct: false },
            { text: "अनिल चौहान ने।", correct: false },
            { text: "मनोज पांडे ने।", correct: false }
        ]
    },
    {
        id: 31,
        question: "हाल ही में एम्स (AIIMS), नई दिल्ली का अंतरिम निदेशक किसे नियुक्त किया गया है?",
        questionAudio: "audio6/Question_31.mp3",
        options: [
            { text: "डॉ रणदीप गुलेरिया को।", correct: false },
            { text: "डॉ विनोद पॉल को।", correct: false },
            { text: "डॉ अजय कुमार को।", correct: false },
            { text: "डॉ निखिल टंडन को।", correct: true }
        ]
    },
    {
        id: 32,
        question: "हाल ही में भारत और किस देश ने मुक्त व्यापार समझौते पर हस्ताक्षर किए हैं?",
        questionAudio: "audio6/Question_32.mp3",
        options: [
            { text: "ऑस्ट्रेलिया ने।", correct: false },
            { text: "हंगरी ने।", correct: false },
            { text: "जापान ने।", correct: false },
            { text: "न्यूजीलैंड ने।", correct: true }
        ]
    },
    {
        id: 33,
        question: "हाल ही में विश्व बौद्धिक संपदा दिवस 2026 कब मनाया गया है?",
        questionAudio: "audio6/Question_33.mp3",
        options: [
            { text: "25 अप्रैल को।", correct: false },
            { text: "26 अप्रैल को।", correct: true },
            { text: "27 अप्रैल को।", correct: false },
            { text: "28 अप्रैल को।", correct: false }
        ]
    },
    {
        id: 34,
        question: "हाल ही में विश्व कार्यस्थल स्वास्थ्य और सुरक्षा दिवस 2026 कब मनाया गया है?",
        questionAudio: "audio6/Question_34.mp3",
        options: [
            { text: "25 अप्रैल को।", correct: false },
            { text: "26 अप्रैल को।", correct: false },
            { text: "27 अप्रैल को।", correct: false },
            { text: "28 अप्रैल को।", correct: true }
        ]
    },
    {
        id: 35,
        question: "हाल ही में अंतर्राष्ट्रीय चेर्नोबिल आपदा स्मृति दिवस कब मनाया गया है?",
        questionAudio: "audio6/Question_35.mp3",
        options: [
            { text: "24 अप्रैल को।", correct: false },
            { text: "25 अप्रैल को।", correct: false },
            { text: "27 अप्रैल को।", correct: false },
            { text: "26 अप्रैल को।", correct: true }
        ]
    },
    {
        id: 36,
        question: "हाल ही में होलोसीन युग का एक जीवाश्म स्थल कहाँ खोजा गया है?",
        questionAudio: "audio6/Question_36.mp3",
        options: [
            { text: "राजस्थान में।", correct: false },
            { text: "गुजरात में।", correct: false },
            { text: "ओडिशा में।", correct: false },
            { text: "तमिलनाडु में।", correct: true }
        ]
    },
    {
        id: 37,
        question: "2026 की वैश्विक खाद्य संकट रिपोर्ट के अनुसार, कौन सा देश सबसे अधिक खाद्य असुरक्षित देश है?",
        questionAudio: "audio6/Question_37.mp3",
        options: [
            { text: "नाइजीरिया।", correct: true },
            { text: "सूडान।", correct: false },
            { text: "यमन।", correct: false },
            { text: "इथियोपिया।", correct: false }
        ]
    },
    {
        id: 38,
        question: "हाल ही में भारतीय तेल कंपनियों को तेल और गैस का नया भंडार कहाँ मिला है?",
        questionAudio: "audio6/Question_38.mp3",
        options: [
            { text: "इराक में।", correct: false },
            { text: "सऊदी अरब में।", correct: false },
            { text: "लीबिया में।", correct: true },
            { text: "ईरान में।", correct: false }
        ]
    },
    {
        id: 39,
        question: "हाल ही में किस मंत्रालय ने अग्नि सुरक्षा सप्ताह मनाने की घोषणा की है?",
        questionAudio: "audio6/Question_39.mp3",
        options: [
            { text: "गृह मंत्रालय ने।", correct: false },
            { text: "रक्षा मंत्रालय ने।", correct: false },
            { text: "शिक्षा मंत्रालय ने।", correct: false },
            { text: "स्वास्थ्य मंत्रालय ने।", correct: true }
        ]
    },
    {
        id: 40,
        question: "हाल ही में लद्दाख में कितने नए जिलों के गठन को मंजूरी मिली है?",
        questionAudio: "audio6/Question_40.mp3",
        options: [
            { text: "5 नए जिले।", correct: true },
            { text: "3 नए जिले।", correct: false },
            { text: "4 नए जिले।", correct: false },
            { text: "6 नए जिले।", correct: false }
        ]
    },
    {
        id: 41,
        question: "हाल ही में भारतीय महिला कबड्डी टीम ने 6वें एशियाई बीच गेम्स में कौन सा पदक जीता है?",
        questionAudio: "audio6/Question_41.mp3",
        options: [
            { text: "स्वर्ण पदक।", correct: true },
            { text: "रजत पदक।", correct: false },
            { text: "कांस्य पदक।", correct: false },
            { text: "कोई पदक नहीं।", correct: false }
        ]
    },
    {
        id: 42,
        question: "हाल ही में किस देश की विदेश मंत्री गैब्रिएला सोमरफेल्ड भारत यात्रा पर आएँगी?",
        questionAudio: "audio6/Question_42.mp3",
        options: [
            { text: "चिली की।", correct: false },
            { text: "इक्वाडोर की।", correct: true },
            { text: "पेरू की।", correct: false },
            { text: "कोलंबिया की।", correct: false }
        ]
    },
    {
        id: 43,
        question: "हाल ही में सर्वोच्च न्यायालय ने सुरक्षित राजमार्ग यात्रा को भारतीय संविधान के किस अनुच्छेद के तहत मौलिक अधिकार बताया है?",
        questionAudio: "audio6/Question_43.mp3",
        options: [
            { text: "अनुच्छेद 14 के तहत।", correct: false },
            { text: "अनुच्छेद 19 के तहत।", correct: false },
            { text: "अनुच्छेद 32 के तहत।", correct: false },
            { text: "अनुच्छेद 21 के तहत।", correct: true }
        ]
    },
    {
        id: 44,
        question: "हाल ही में 13वें सुर ज्योत्स्ना राष्ट्रीय संगीत पुरस्कार से किसे सम्मानित किया गया है?",
        questionAudio: "audio6/Question_44.mp3",
        options: [
            { text: "सुमित्रा गाहा और पंडित लक्ष्मण कृष्णराव पंडित को।", correct: true },
            { text: "ए.आर. रहमान और शुभा मुद्गल को।", correct: false },
            { text: "श्रेया घोषाल और हरिहरन को।", correct: false },
            { text: "राहुल देशपांडे और विनोद कुमार द्विवेदी को।", correct: false }
        ]
    },
    {
        id: 45,
        question: "हाल ही में भारतीय रिजर्व बैंक से गैर-बैंकिंग वित्तीय कंपनी (NBFC) के रूप में संचालन के लिए किसे मंजूरी मिली है?",
        questionAudio: "audio6/Question_45.mp3",
        options: [
            { text: "उड़ान को।", correct: false },
            { text: "बिज़ नेक्स्ट को।", correct: false },
            { text: "स्पाइस मनी को।", correct: false },
            { text: "मोबिक्विक को।", correct: true }
        ]
    },
    {
        id: 46,
        question: "हाल ही में SAFF महिला चैंपियनशिप 2026 का आयोजन कहाँ किया जाएगा?",
        questionAudio: "audio6/Question_46.mp3",
        options: [
            { text: "सिक्किम में।", correct: false },
            { text: "कर्नाटक में।", correct: false },
            { text: "असम में।", correct: false },
            { text: "गोवा में।", correct: true }
        ]
    },
    {
        id: 47,
        question: "हाल ही में केंद्रीय वित्त मंत्री निर्मला सीतारमण ने SEBI के 38वें स्थापना दिवस के अवसर पर कौन सा निवेशक जागरूकता अभियान लॉन्च किया?",
        questionAudio: "audio6/Question_47.mp3",
        options: [
            { text: "मिशन जागरूक।", correct: true },
            { text: "निवेश सुरक्षा अभियान।", correct: false },
            { text: "स्मार्ट निवेश योजना।", correct: false },
            { text: "वित्त साक्षरता मिशन।", correct: false }
        ]
    },
    {
        id: 48,
        question: "हाल ही में दिवंगत दलीप सिंह वासन कौन थे?",
        questionAudio: "audio6/Question_48.mp3",
        options: [
            { text: "वैज्ञानिक थे।", correct: false },
            { text: "राजनेता थे।", correct: false },
            { text: "लेखक थे।", correct: true },
            { text: "शल्यचिकित्सक थे।", correct: false }
        ]
    },
    {
        id: 49,
        question: "हाल ही में इंडियन प्रीमियर लीग (IPL) में 9000 रन बनाने वाले पहले खिलाड़ी कौन बने हैं?",
        questionAudio: "audio6/Question_49.mp3",
        options: [
            { text: "विराट कोहली।", correct: true },
            { text: "रोहित शर्मा।", correct: false },
            { text: "के एल राहुल।", correct: false },
            { text: "एम एस धोनी।", correct: false }
        ]
    },
    {
        id: 50,
        question: "हाल ही में 2026-2029 के लिए बैडमिंटन विश्व महासंघ (BWF) एथलीट्स कमीशन का अध्यक्ष किसे चुना गया है?",
        questionAudio: "audio6/Question_50.mp3",
        options: [
            { text: "पीवी सिंधु को।", correct: true },
            { text: "साइना नेहवाल को।", correct: false },
            { text: "विक्टर एक्सेलसेन को।", correct: false },
            { text: "कैरोलिना मारिन को।", correct: false }
        ]
    },
    {
        id: 51,
        question: "हाल ही में वित्त मंत्री निर्मला सीतारमण ने भारतीय रत्न संस्थान के नए परिसर का उद्घाटन कहाँ किया है?",
        questionAudio: "audio6/Question_51.mp3",
        options: [
            { text: "मैसूर में।", correct: false },
            { text: "उडुपी में।", correct: true },
            { text: "मंगलुरु में।", correct: false },
            { text: "बेंगलुरु में।", correct: false }
        ]
    },
    {
        id: 52,
        question: "हाल ही में किस देश ने ओपेक और ओपेक+ से बाहर निकलने की घोषणा की है?",
        questionAudio: "audio6/Question_52.mp3",
        options: [
            { text: "कतर ने।", correct: false },
            { text: "सऊदी अरब ने।", correct: false },
            { text: "संयुक्त अरब अमीरात ने।", correct: true },
            { text: "कुवैत ने।", correct: false }
        ]
    },
    {
        id: 53,
        question: "हाल ही में स्टील अथॉरिटी ऑफ इंडिया लिमिटेड (SAIL) ने अपना नया मुख्य सतर्कता अधिकारी (CVO) किसे नियुक्त किया है?",
        questionAudio: "audio6/Question_53.mp3",
        options: [
            { text: "दिलीप कुमार को।", correct: true },
            { text: "राजेश वर्मा को।", correct: false },
            { text: "संजीव मेहता को।", correct: false },
            { text: "अनिल अग्रवाल को।", correct: false }
        ]
    },
    {
        id: 54,
        question: "हाल ही में IRCTC ने किस देश के लिए 'मिस्टिक माउंटेन टूर' लॉन्च किया है?",
        questionAudio: "audio6/Question_54.mp3",
        options: [
            { text: "नेपाल के लिए।", correct: false },
            { text: "भूटान के लिए।", correct: true },
            { text: "तिब्बत के लिए।", correct: false },
            { text: "श्रीलंका के लिए।", correct: false }
        ]
    },
    {
        id: 55,
        question: "हाल ही में पंचायती राज उन्नयन सूचकांक (PAI) 2.0 रिपोर्ट में शीर्ष स्थान किस राज्य ने हासिल किया है?",
        questionAudio: "audio6/Question_55.mp3",
        options: [
            { text: "केरल ने।", correct: false },
            { text: "गुजरात ने।", correct: false },
            { text: "त्रिपुरा ने।", correct: true },
            { text: "कर्नाटक ने।", correct: false }
        ]
    },
    {
        id: 56,
        question: "हाल ही में प्रधानमंत्री नरेंद्र मोदी ने एक्सेस-कंट्रोल्ड ग्रीनफील्ड गंगा एक्सप्रेसवे का उद्घाटन कहाँ किया है?",
        questionAudio: "audio6/Question_56.mp3",
        options: [
            { text: "लखनऊ में।", correct: false },
            { text: "हरदोई में।", correct: true },
            { text: "प्रयागराज में।", correct: false },
            { text: "हरिद्वार में।", correct: false }
        ]
    },
    {
        id: 57,
        question: "हाल ही में अंतर्राष्ट्रीय नृत्य दिवस 2026 कब मनाया गया है?",
        questionAudio: "audio6/Question_57.mp3",
        options: [
            { text: "27 अप्रैल को।", correct: false },
            { text: "28 अप्रैल को।", correct: false },
            { text: "30 अप्रैल को।", correct: false },
            { text: "29 अप्रैल को।", correct: true }
        ]
    },
    {
        id: 58,
        question: "हाल ही में किस भारतीय फिल्म को कान्स इंटरनेशनल फिल्म फेस्टिवल के फिल्म मार्केट सेक्शन के लिए चुना गया है?",
        questionAudio: "audio6/Question_58.mp3",
        options: [
            { text: "अप्रैल मई 99 को।", correct: false },
            { text: "शेप ऑफ़ मोमो को।", correct: false },
            { text: "जीव - द क्रिएचर को।", correct: false },
            { text: "a और c दोनों को।", correct: true }
        ]
    },
    {
        id: 59,
        question: "हाल ही में जारी SIPRI की नवीनतम रिपोर्ट के अनुसार, 2025 में भारत विश्व का कौन सा सैन्य खर्च करने वाला देश बना है?",
        questionAudio: "audio6/Question_59.mp3",
        options: [
            { text: "पांचवां देश।", correct: true },
            { text: "तीसरा देश।", correct: false },
            { text: "चौथा देश।", correct: false },
            { text: "छठा देश।", correct: false }
        ]
    },
    {
        id: 60,
        question: "हाल ही में भारत की पहली transgender अंपायर कौन बनी हैं?",
        questionAudio: "audio6/Question_60.mp3",
        options: [
            { text: "प्रिया शर्मा।", correct: false },
            { text: "सुस्मिता सेन।", correct: false },
            { text: "कृतिका श्री।", correct: true },
            { text: "रंजना कुमारी।", correct: false }
        ]
    },
    {
        id: 61,
        question: "हाल ही में सन फार्मा ने किस देश की ऑर्गेनॉन कंपनी को $11.75 बिलियन में खरीदने की घोषणा की है?",
        questionAudio: "audio6/Question_61.mp3",
        options: [
            { text: "संयुक्त राज्य अमेरिका की।", correct: true },
            { text: "जर्मनी की।", correct: false },
            { text: "फ्रांस की।", correct: false },
            { text: "जापान की।", correct: false }
        ]
    },
    {
        id: 62,
        question: "हाल ही में दिवंगत भरत कपूर कौन थे?",
        questionAudio: "audio6/Question_62.mp3",
        options: [
            { text: "गायक थे।", correct: false },
            { text: "लेखक थे।", correct: false },
            { text: "अभिनेता थे।", correct: true },
            { text: "खिलाड़ी थे।", correct: false }
        ]
    },
    {
        id: 63,
        question: "हाल ही में भारतीय नौसेना की लघु दूरी की जहाज-रोधी मिसाइल (NASM-SR) का पहला सैल्वो किसने लॉन्च किया?",
        questionAudio: "audio6/Question_63.mp3",
        options: [
            { text: "रक्षा अनुसंधान एवं विकास संगठन (DRDO) ने।", correct: true },
            { text: "भारतीय इलेक्ट्रॉनिक्स लिमिटेड ने।", correct: false },
            { text: "हिंदुस्तान एयरोनॉटिक्स लिमिटेड ने।", correct: false },
            { text: "भारत डायनामिक्स लिमिटेड ने।", correct: false }
        ]
    },
    {
        id: 64,
        question: "हाल ही में 10वें राष्ट्रीय शिखर सम्मेलन का आयोजन कहाँ किया जा रहा है?",
        questionAudio: "audio6/Question_64.mp3",
        options: [
            { text: "जयपुर में।", correct: false },
            { text: "चंडीगढ़ में।", correct: true },
            { text: "भोपाल में।", correct: false },
            { text: "लखनऊ में।", correct: false }
        ]
    },
    {
        id: 65,
        question: "हाल ही में एपीडा (APEDA) बासमती और जैविक प्रशिक्षण केंद्र की स्थापना कहाँ करेगा?",
        questionAudio: "audio6/Question_65.mp3",
        options: [
            { text: "पंजाब में।", correct: false },
            { text: "हरियाणा में।", correct: false },
            { text: "उत्तर प्रदेश में।", correct: true },
            { text: "बिहार में।", correct: false }
        ]
    },
    {
        id: 66,
        question: "हाल ही में किसके द्वारा निर्मित भारत के पहले निजी निर्मित कक्षा रॉकेट 'विक्रम-1' के उड़ान हार्डवेयर को हरी घंडी दिखाई गई?",
        questionAudio: "audio6/Question_66.mp3",
        options: [
            { text: "बेलाट्रिक्स एयरोस्पेस द्वारा।", correct: false },
            { text: "अग्निकुल कॉस्मॉस द्वारा।", correct: false },
            { text: "ध्रुव स्पेस द्वारा।", correct: false },
            { text: "स्काईरूट एयरोस्पेस द्वारा।", correct: true }
        ]
    },
    {
        id: 67,
        question: "हाल ही में भारत ने एशियन बीच गेम्स 2026 में कुल कितने पदक जीते हैं?",
        questionAudio: "audio6/Question_67.mp3",
        options: [
            { text: "6 पदक।", correct: true },
            { text: "8 पदक।", correct: false },
            { text: "10 पदक।", correct: false },
            { text: "12 पदक।", correct: false }
        ]
    },
    {
        id: 68,
        question: "हाल ही में मुरली श्रीशंकर ने सिम्बाइन क्लासिक 2026 एथलेटिक्स मीट में पुरुषों की लंबी कूद में कौन सा पदक जीता है?",
        questionAudio: "audio6/Question_68.mp3",
        options: [
            { text: "स्वर्ण पदक।", correct: true },
            { text: "रजत पदक।", correct: false },
            { text: "कांस्य पदक।", correct: false },
            { text: "कोई पदक नहीं।", correct: false }
        ]
    },
    {
        id: 69,
        question: "हाल ही में बहुपक्षीय सैन्य अभ्यास 'प्रगति' का उद्घाटन सत्र कहाँ आयोजित किया जाएगा?",
        questionAudio: "audio6/Question_69.mp3",
        options: [
            { text: "मेघालय में।", correct: true },
            { text: "असम में।", correct: false },
            { text: "नागालैंड में।", correct: false },
            { text: "मणिपुर में।", correct: false }
        ]
    },
    {
        id: 70,
        question: "हाल ही में आयुष्मान भारत दिवस 2026 कब मनाया गया?",
        questionAudio: "audio6/Question_70.mp3",
        options: [
            { text: "28 अप्रैल को।", correct: false },
            { text: "29 अप्रैल को।", correct: false },
            { text: "30 अप्रैल को।", correct: true },
            { text: "1 मई को।", correct: false }
        ]
    },
    {
        id: 71,
        question: "हाल ही में 'मिशन सक्षम' किसने लॉन्च किया है?",
        questionAudio: "audio6/Question_71.mp3",
        options: [
            { text: "नीति आयोग ने।", correct: false },
            { text: "वित्त मंत्रालय ने।", correct: false },
            { text: "भारतीय स्टेट बैंक ने।", correct: false },
            { text: "भारतीय रिजर्व बैंक ने।", correct: true }
        ]
    },
    {
        id: 72,
        question: "हाल ही में आपातकालीन हेल्पलाइन में एआई-संचालित बहुभाषी फीचर पेश करने वाली भारत की पहली पुलिस इकाई कौन सी बनी है?",
        questionAudio: "audio6/Question_72.mp3",
        options: [
            { text: "मुंबई पुलिस।", correct: false },
            { text: "बेंगलुरु पुलिस।", correct: true },
            { text: "दिल्ली पुलिस।", correct: false },
            { text: "हैदराबाद पुलिस।", correct: false }
        ]
    },
    {
        id: 73,
        question: "हाल ही में फ्रांस ने जीवाश्म ईंधनों पर निर्भरता को समाप्त करने के लिए किस वर्ष की समयसीमा निर्धारित की है?",
        questionAudio: "audio6/Question_73.mp3",
        options: [
            { text: "2035 तक।", correct: false },
            { text: "2040 तक।", correct: false },
            { text: "2050 तक।", correct: true },
            { text: "2060 तक।", correct: false }
        ]
    },
    {
        id: 74,
        question: "हाल ही में स्काईहॉप एविएशन को भारत की पहली वाणिज्यिक सीप्लेन सेवा कहाँ स्थापित करने के लिए DGCA की मंजूरी मिली है?",
        questionAudio: "audio6/Question_74.mp3",
        options: [
            { text: "अंडमान-निकोबार में।", correct: false },
            { text: "गोवा में।", correct: false },
            { text: "केरल में।", correct: false },
            { text: "लक्षद्वीप में।", correct: true }
        ]
    },
    {
        id: 75,
        question: "हाल ही में AIFF एलीट यूथ लीग 2025-26 का खिताब किसने जीता है?",
        questionAudio: "audio6/Question_75.mp3",
        options: [
            { text: "पंजाब FC ने।", correct: true },
            { text: "मोहन बागान ने।", correct: false },
            { text: "बेंगलुरु FC ने।", correct: false },
            { text: "जिंके फुटबॉल अकादमी ने।", correct: false }
        ]
    },
    {
        id: 76,
        question: "हाल ही में राजस्थान का पहला 'वॉटर-पॉजिटिव' हवाई अड्डा कौन सा बना है?",
        questionAudio: "audio6/Question_76.mp3",
        options: [
            { text: "उदयपुर हवाई अड्डा।", correct: false },
            { text: "जयपुर हवाई अड्डा।", correct: true },
            { text: "जोधपुर हवाई अड्डा।", correct: false },
            { text: "बीकानेर हवाई अड्डा।", correct: false }
        ]
    },
    {
        id: 77,
        question: "हाल ही में कौन सा राज्य 'उग्रवाद मुक्त' बना है?",
        questionAudio: "audio6/Question_77.mp3",
        options: [
            { text: "नागालैंड।", correct: false },
            { text: "मणिपुर।", correct: false },
            { text: "मिजोरम।", correct: true },
            { text: "असम।", correct: false }
        ]
    },
    {
        id: 78,
        question: "हाल ही में निर्वाचन आयोग (ECI) की क्यूआर कोड आधारित फोटो पहचान पत्र (ID) प्रणाली कब से शुरू की जाएगी?",
        questionAudio: "audio6/Question_78.mp3",
        options: [
            { text: "10 मई से।", correct: false },
            { text: "12 मई से।", correct: false },
            { text: "3 मई से।", correct: false },
            { text: "4 मई से।", correct: true }
        ]
    },
    {
        id: 79,
        question: "हाल ही में 'प्रशस्त 2.0' प्लेटफॉर्म किसके द्वारा विकसित किया गया है?",
        questionAudio: "audio6/Question_79.mp3",
        options: [
            { text: "नीति आयोग द्वारा।", correct: false },
            { text: "राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद (NCERT) द्वारा।", correct: true },
            { text: "विश्वविद्यालय अनुदान आयोग (UGC) द्वारा।", correct: false },
            { text: "स्वास्थ्य मंत्रालय द्वारा।", correct: false }
        ]
    },
    {
        id: 80,
        question: "हाल ही में किस श्रेणी का महेंद्रगिरी जहाज भारतीय नौसेना को सौंपा गया?",
        questionAudio: "audio6/Question_80.mp3",
        options: [
            { text: "शिवालिक श्रेणी का।", correct: false },
            { text: "तलवार श्रेणी का।", correct: false },
            { text: "नीलगिरी श्रेणी का।", correct: true },
            { text: "कोलकाता श्रेणी का।", correct: false }
        ]
    },
    {
        id: 81,
        question: "हाल ही में केंद्रीय मंत्री नितिन गडकरी ने भारत का पहला मल्टी-लेन फ्री फ्लो बैरियर-रहित टोलिंग सिस्टम कहाँ लॉन्च किया है?",
        questionAudio: "audio6/Question_81.mp3",
        options: [
            { text: "महाराष्ट्र में।", correct: false },
            { text: "राजस्थान में।", correct: false },
            { text: "उत्तर प्रदेश में।", correct: false },
            { text: "गुजरात में।", correct: true }
        ]
    },
    {
        id: 82,
        question: "हाल ही में भारत के 57वें अंतर्राष्ट्रीय फिल्म महोत्सव के लिए महोत्सव निदेशक किसे नियुक्त किया गया है?",
        questionAudio: "audio6/Question_82.mp3",
        options: [
            { text: "संजय लीला भंसाली को।", correct: false },
            { text: "आशुतोष गोवारिकर को।", correct: true },
            { text: "करण जौहर को।", correct: false },
            { text: "राजकुमार हिरानी को।", correct: false }
        ]
    },
    {
        id: 83,
        question: "हाल ही में किस भारतीय को 2026 व्हिटली पुरस्कार से सम्मानित किया गया है?",
        questionAudio: "audio6/Question_83.mp3",
        options: [
            { text: "बरखा सुब्बा और सुनीता नारायण को।", correct: false },
            { text: "बरखा सुब्बा और परवीन शेख को।", correct: true },
            { text: "सुनीता नारायण और वंदना शिवा को।", correct: false },
            { text: "रितु करिधल और वंदना शिवा को।", correct: false }
        ]
    },
    {
        id: 84,
        question: "हाल ही में किस राज्य ने गिग वर्कर्स के लिए भारत की पहली डिजिटल शिकायत निवारण प्रणाली शुरू की है?",
        questionAudio: "audio6/Question_84.mp3",
        options: [
            { text: "महाराष्ट्र ने।", correct: false },
            { text: "तमिलनाडु ने।", correct: false },
            { text: "कर्नाटक ने।", correct: true },
            { text: "तेलंगाना ने।", correct: false }
        ]
    },
    {
        id: 85,
        question: "हाल ही में फार्मूला 1 समर्थित सिम रेसिंग पहल के लिए ब्रांड एंबेसडर किसे नियुक्त किया गया है?",
        questionAudio: "audio6/Question_85.mp3",
        options: [
            { text: "विराट कोहली को।", correct: false },
            { text: "हार्दिक पांड्या को।", correct: false },
            { text: "केएल राहुल को।", correct: false },
            { text: "श्रेयस अय्यर को।", correct: true }
        ]
    },
    {
        id: 86,
        question: "हाल ही में 1 मई 2026 को किस राज्य ने अपना स्थापना दिवस मनाया है?",
        questionAudio: "audio6/Question_86.mp3",
        options: [
            { text: "महाराष्ट्र और गुजरात ने।", correct: true },
            { text: "असम और अरुणाचल प्रदेश ने।", correct: false },
            { text: "गुजरात और मध्य प्रदेश ने।", correct: false },
            { text: "तमिलनाडु और कर्नाटक ने।", correct: false }
        ]
    },
    {
        id: 87,
        question: "हाल ही में अंतर्राष्ट्रीय श्रमिक दिवस 2026 कब मनाया गया है?",
        questionAudio: "audio6/Question_87.mp3",
        options: [
            { text: "1 मई को।", correct: true },
            { text: "30 अप्रैल को।", correct: false },
            { text: "2 मई को।", correct: false },
            { text: "3 मई को।", correct: false }
        ]
    },
    {
        id: 88,
        question: "हाल ही में भारतीय सेना ने 'ऑपरेशन नेत्रा 1.0' के तहत विशाल नेत्र शिविर कहाँ आयोजित किया है?",
        questionAudio: "audio6/Question_88.mp3",
        options: [
            { text: "श्रीनगर में।", correct: false },
            { text: "लेह में।", correct: true },
            { text: "कारगिल में।", correct: false },
            { text: "जम्मू में।", correct: false }
        ]
    },
    {
        id: 89,
        question: "हाल ही में दिवंगत विजय कुमार का संबंध किस खेल से था?",
        questionAudio: "audio6/Question_89.mp3",
        options: [
            { text: "गोल्फ से।", correct: true },
            { text: "क्रिकेट से।", correct: false },
            { text: "हॉकी से।", correct: false },
            { text: "टेनिस से।", correct: false }
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
    localStorage.setItem('may_weekly(27april-2may)_progress', JSON.stringify(dataToSave));
}

function loadProgress() {
    const raw = localStorage.getItem('may_weekly(27april-2may)_progress');
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            if (parsed && Object.keys(parsed.answers || {}).length > 0) {
                elements.resumeModal.classList.remove('hidden');
            }
        } catch (e) {
            localStorage.removeItem('may_weekly(27april-2may)_progress');
        }
    }
}

function restoreQuizState() {
    const raw = localStorage.getItem('may_weekly(27april-2may)_progress');
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
    localStorage.removeItem('may_weekly(27april-2may)_progress');
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
