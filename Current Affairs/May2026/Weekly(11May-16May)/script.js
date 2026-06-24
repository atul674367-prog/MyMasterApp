// ============================================================================
// QUIZ DATA DEFINITION
// ============================================================================
const quizData = [
    {
        id: 1,
        question: "हाल ही में प्रधानमंत्री आवास योजना-शहरी (PMAY-U 2.0) के अंतर्गत घरों के निर्माण में शीर्ष प्रदर्शन करने वाला राज्य कौन-सा बना है?",
        questionAudio: "audio8/Question_1.mp3",
        optionsAudio: "audio8/Question_1_options.mp3",
        options: [
            { text: "गुजरात (Gujarat)", correct: false },
            { text: "ओडिशा (Odisha)", correct: true },
            { text: "महाराष्ट्र (Maharashtra)", correct: false },
            { text: "उत्तर प्रदेश (Uttar Pradesh)", correct: false }
        ]
    },
    {
        id: 2,
        question: "हाल ही में तमिलनाडु के 9वें मुख्यमंत्री के तौर पर किसने शपथ ली है?",
        questionAudio: "audio8/Question_2.mp3",
        optionsAudio: "audio8/Question_2_options.mp3",
        options: [
            { text: "एम.के. स्टालिन (M.K. Stalin)", correct: false },
            { text: "ओ. पनीरसेल्वम (O. Panneerselvam)", correct: false },
            { text: "के. पलानीस्वामी (K. Palaniswami)", correct: false },
            { text: "सी. जोसेफ विजय (C. Joseph Vijay)", correct: true }
        ]
    },
    {
        id: 3,
        question: "हाल ही में भारत के नए प्रमुख रक्षा अध्यक्ष (CDS) के रूप में किसे नियुक्त किया गया है?",
        questionAudio: "audio8/Question_3.mp3",
        optionsAudio: "audio8/Question_3_options.mp3",
        options: [
            { text: "एन.एस. राजा सुब्रमणि (N.S. Raja Subramani)", correct: true },
            { text: "अनिल चौहान (Anil Chauhan)", correct: false },
            { text: "मनोज पांडे (Manoj Pande)", correct: false },
            { text: "कृष्णा स्वामीनाथन (Krishna Swaminathan)", correct: false }
        ]
    },
    {
        id: 4,
        question: "हाल ही में स्क्रैमजेट कम्बस्टर (Scramjet Combustor) का सफल परीक्षण किसने किया है?",
        questionAudio: "audio8/Question_4.mp3",
        optionsAudio: "audio8/Question_4_options.mp3",
        options: [
            { text: "रक्षा अनुसंधान और विकास संगठन (Defence Research and Development Organisation)", correct: true },
            { text: "भारतीय अंतरिक्ष अनुसंधान संगठन (Indian Space Research Organisation)", correct: false },
            { text: "हिन्दुस्तान एयरोनॉटिक्स लिमिटेड (Hindustan Aeronautics Limited)", correct: false },
            { text: "भारत डायनेमिक्स लिमिटेड (Bharat Dynamics Limited)", correct: false }
        ]
    },
    {
        id: 5,
        question: "हाल ही में राष्ट्रीय लोक अदालत (National Lok Adalat) का आयोजन कौन कर रहा है?",
        questionAudio: "audio8/Question_5.mp3",
        optionsAudio: "audio8/Question_5_options.mp3",
        options: [
            { text: "सर्वोच्च न्यायालय (Supreme Court)", correct: false },
            { text: "विधि मंत्रालय (Ministry of Law)", correct: false },
            { text: "नालसा (NALSA)", correct: true },
            { text: "दिल्ली उच्च न्यायालय (Delhi High Court)", correct: false }
        ]
    },
    {
        id: 6,
        question: "हाल ही में पुडुचेरी (Puducherry) का मुख्यमंत्री किसे नियुक्त किया गया है?",
        questionAudio: "audio8/Question_6.mp3",
        optionsAudio: "audio8/Question_6_options.mp3",
        options: [
            { text: "वी. नारायणसामी (V. Narayanasamy)", correct: false },
            { text: "के. लक्ष्मीनारायणन (K. Lakshminarayanan)", correct: false },
            { text: "ए. नमस्सवायम (A. Namassivayam)", correct: false },
            { text: "एन. रंगासामी (N. Rangasamy)", correct: true }
        ]
    },
    {
        id: 7,
        question: "हाल ही में गुरुदेव रवींद्रनाथ ठाकुर की 165वीं जयंती कब मनाई गई है?",
        questionAudio: "audio8/Question_7.mp3",
        optionsAudio: "audio8/Question_7_options.mp3",
        options: [
            { text: "9 मई (May 9)", correct: true },
            { text: "7 मई (May 7)", correct: false },
            { text: "8 मई (May 8)", correct: false },
            { text: "10 मई (May 10)", correct: false }
        ]
    },
    {
        id: 8,
        question: "हाल ही में भारतीय नौसेना प्रमुख (Chief of the Indian Navy) के रूप में किसे नियुक्त किया गया है?",
        questionAudio: "audio8/Question_8.mp3",
        optionsAudio: "audio8/Question_8_options.mp3",
        options: [
            { text: "आर. हरी कुमार (R. Hari Kumar)", correct: false },
            { text: "कृष्णा स्वामीनाथन (Krishna Swaminathan)", correct: true },
            { text: "करमबीर सिंह (Karambir Singh)", correct: false },
            { text: "दिनेश के. त्रिपाठी (Dinesh K. त्रिपाठी)", correct: false }
        ]
    },
    {
        id: 9,
        question: "हाल ही में राष्ट्रीय पंचायत पुरस्कार 2025 (National Panchayat Awards 2025) के परिणाम घोषित किए गए हैं, सही कथन चुनिए:-",
        questionAudio: "audio8/Question_9.mp3",
        optionsAudio: "audio8/Question_9_options.mp3",
        options: [
            { text: "महाराष्ट्र ने सबसे अधिक पुरस्कार प्राप्त किए हैं (Maharashtra has received the highest number of awards)", correct: false },
            { text: "उत्तर प्रदेश ने सबसे अधिक पुरस्कार प्राप्त किए हैं (Uttar Pradesh has received the highest number of awards)", correct: false },
            { text: "कर्नाटक ने सबसे अधिक पुरस्कार प्राप्त किए हैं (Karnataka has received the highest number of awards)", correct: true },
            { text: "राजस्थान ने सबसे अधिक पुरस्कार प्राप्त किए हैं (Rajasthan has received the highest number of awards)", correct: false }
        ]
    },
    {
        id: 10,
        question: "हाल ही में अग्नि मिसाइल (Agni Missile) के सफल परीक्षण के संबंध में सही कथन चुनिए:-",
        questionAudio: "audio8/Question_10.mp3",
        optionsAudio: "audio8/Question_10_options.mp3",
        options: [
            { text: "इसका परीक्षण ओडिशा स्थित डॉ. एपीजे अब्दुल कलाम द्वीप से किया गया था (Its test was conducted from Dr. APJ Abdul Kalam Island, Odisha)", correct: false },
            { text: "यह मल्टीपल इंडिपेंडेंटली टार्गेटेड री-एंट्री व्हीकल (MIRV) प्रणाली से लैस है (It is equipped with MIRV technology)", correct: false },
            { text: "इसका परीक्षण रक्षा अनुसंधान और विकास संगठन (DRDO) ने किया है (Its test was conducted by DRDO)", correct: false },
            { text: "उपरोक्त सभी (All of the above)", correct: true }
        ]
    },
    {
        id: 11,
        question: "वर्ष 2026 के लिए मेटियोरिटिकल सोसाइटी (Meteoritical Society) का फेलो किसे चुना गया है?",
        questionAudio: "audio8/Question_11.mp3",
        optionsAudio: "audio8/Question_11_options.mp3",
        options: [
            { text: "अनुराधा शर्मा (Anuradha Sharma)", correct: false },
            { text: "कुलजीत कौर मरहास (Kuljeet Kaur Marhas)", correct: true },
            { text: "सीमा वर्मा (Seema Verma)", correct: false },
            { text: "नीलम गुप्ता (Neelam Gupta)", correct: false }
        ]
    },
    {
        id: 12,
        question: "हाल ही में सरदार पटेल सहकारी डेयरी फेडरेशन (SPCDF) का पहला अध्यक्ष किसे चुना गया है?",
        questionAudio: "audio8/Question_12.mp3",
        optionsAudio: "audio8/Question_12_options.mp3",
        options: [
            { text: "राजीव कुमार (Rajiv Kumar)", correct: false },
            { text: "अमूल देसाई (Amul Desai)", correct: false },
            { text: "जयेन मेहता (Jayen Mehta)", correct: true },
            { text: "राकेश शर्मा (Rakesh Sharma)", correct: false }
        ]
    },
    {
        id: 13,
        question: "हाल ही में आर्चिबाल्ड पुरस्कार 2026 (Archibald Prize 2026) किसने जीता है?",
        questionAudio: "audio8/Question_13.mp3",
        optionsAudio: "audio8/Question_13_options.mp3",
        options: [
            { text: "जॉन स्मिथ (John Smith)", correct: false },
            { text: "माइकल ब्राउन (Michael Brown)", correct: false },
            { text: "डेविड मिलर (David Miller)", correct: false },
            { text: "रिचर्ड लेवर (Richard Lewer)", correct: true }
        ]
    },
    {
        id: 14,
        question: "हाल ही में वन-टाइम ट्रैफिक चालान निपटान योजना (One-Time Traffic Challan Settlement Scheme) किसने शुरू की है?",
        questionAudio: "audio8/Question_14.mp3",
        optionsAudio: "audio8/Question_14_options.mp3",
        options: [
            { text: "बिहार (Bihar)", correct: true },
            { text: "उत्तर प्रदेश (Uttar Pradesh)", correct: false },
            { text: "मध्य प्रदेश (Madhya Pradesh)", correct: false },
            { text: "झारखण्ड (Jharkhand)", correct: false }
        ]
    },
    {
        id: 15,
        question: "हाल ही में 2026 टेक्सास Innovation कॉन्फ्रेंस और अवार्ड्स में 'यूनिवर्सिटी इनोवेटर अवार्ड' (University Innovator Award) से किसे सम्मानित किया गया है?",
        questionAudio: "audio8/Question_15.mp3",
        optionsAudio: "audio8/Question_15_options.mp3",
        options: [
            { text: "डॉ. आर. के. वर्मा (Dr. R.K. Verma)", correct: false },
            { text: "डॉ. शेखर सुमन (Dr. Shekhar Suman)", correct: true },
            { text: "डॉ. अंजलि मेहता (Dr. Anjali Mehta)", correct: false },
            { text: "डॉ. संजीव कुमार (Dr. Sanjeev Kumar)", correct: false }
        ]
    },
    {
        id: 16,
        question: "हाल ही में किस देश ने मई 2025 में भारत-पाकिस्तान संघर्ष के दौरान पाकिस्तान को साइट पर तकनीकी सहायता प्रदान करने की पुष्टि की है?",
        questionAudio: "audio8/Question_16.mp3",
        optionsAudio: "audio8/Question_16_options.mp3",
        options: [
            { text: "रूस (Russia)", correct: false },
            { text: "अमेरिका (USA)", correct: false },
            { text: "फ्रांस (France)", correct: false },
            { text: "चीन (China)", correct: true }
        ]
    },
    {
        id: 17,
        question: "हाल ही में अंतर्राष्ट्रीय ओलंपिक समिति (IOC) ने LA 2028 ओलंपिक के लिए किस देश के खिलाड़ियों पर प्रतिबंधों को आधिकारिक रूप से हटाया है?",
        questionAudio: "audio8/Question_17.mp3",
        optionsAudio: "audio8/Question_17_options.mp3",
        options: [
            { text: "बेलारूस (Belarus)", correct: true },
            { text: "रूस (Russia)", correct: false },
            { text: "यूक्रेन (Ukraine)", correct: false },
            { text: "कजाकिस्तान (Kazakhstan)", correct: false }
        ]
    },
    {
        id: 18,
        question: "हाल ही में असम (Assam) के मुख्यमंत्री के रूप में कौन शपथ लेंगे?",
        questionAudio: "audio8/Question_18.mp3",
        optionsAudio: "audio8/Question_18_options.mp3",
        options: [
            { text: "हिमंता बिस्वा सरमा (Himanta Biswa Sarma)", correct: true },
            { text: "सर्बानंद सोनोवाल (Sarbananda Sonowal)", correct: false },
            { text: "तरुण गोगोई (Tarun Gorgor)", correct: false },
            { text: "बदरुद्दीन अजमल (Badruddin Ajmal)", correct: false }
        ]
    },
    {
        id: 19,
        question: "हाल ही में किस राज्य सरकार ने निगरानी अन्वेषण संवर्ग (Vigilance Investigation Cadre) को राज्य पुलिस में समायोजित किया है?",
        questionAudio: "audio8/Question_19.mp3",
        optionsAudio: "audio8/Question_19_options.mp3",
        options: [
            { text: "उत्तर प्रदेश (Uttar Pradesh)", correct: false },
            { text: "बिहार (Bihar)", correct: true },
            { text: "झारखण्ड (Jharkhand)", correct: false },
            { text: "मध्य प्रदेश (Madhya Pradesh)", correct: false }
        ]
    },
    {
        id: 20,
        question: "हाल ही में 'युवा व्यक्तियों के लिए आफ्टरकेयर योजना' (Aftercare Scheme for Young Persons) कहाँ शुरू की गई है?",
        questionAudio: "audio8/Question_20.mp3",
        optionsAudio: "audio8/Question_20_options.mp3",
        options: [
            { text: "चंडीगढ़ (Chandigarh)", correct: false },
            { text: "मध्य प्रदेश (Madhya Pradesh)", correct: false },
            { text: "उत्तराखंड (Uttarakhand)", correct: false },
            { text: "दिल्ली (Delhi)", correct: true }
        ]
    },
    {
        id: 21,
        question: "हाल ही में भारतीय मूल के किस उम्मीदवार को छात्र वीजा पर स्कॉटलैंड की संसद (Scottish Parliament) में चुना गया है?",
        questionAudio: "audio8/Question_21.mp3",
        optionsAudio: "audio8/Question_21_options.mp3",
        options: [
            { text: "क्यू मणिवन्नन (K. Manivannan)", correct: true },
            { text: "अनीता आनंद (Anita Anand)", correct: false },
            { text: "प्रीति पटेल (Priti Patel)", correct: false },
            { text: "आर सुभारती (R. Subharti)", correct: false }
        ]
    },
    {
        id: 22,
        question: "हाल ही में विश्व थैलेसीमिया दिवस 2026 (World Thalassemia Day 2026) कब मनाया गया है?",
        questionAudio: "audio8/Question_22.mp3",
        optionsAudio: "audio8/Question_22_options.mp3",
        options: [
            { text: "7 मई (May 7)", correct: false },
            { text: "8 मई (May 8)", correct: true },
            { text: "9 मई (May 9)", correct: false },
            { text: "10 मई (May 10)", correct: false }
        ]
    },
    {
        id: 23,
        question: "हाल ही में राष्ट्रीय प्रौद्योगिकी दिवस 2026 (National Technology Day 2026) कब मनाया गया है?",
        questionAudio: "audio8/Question_23.mp3",
        optionsAudio: "audio8/Question_23_options.mp3",
        options: [
            { text: "10 मई (May 10)", correct: false },
            { text: "11 मई (May 11)", correct: true },
            { text: "2 मई (May 2)", correct: false },
            { text: "3 मई (May 3)", correct: false }
        ]
    },
    {
        id: 24,
        question: "हाल ही में दिवंगत अमनप्रीत गिल (Amanpreet Gill) का संबंध किस खेल से था?",
        questionAudio: "audio8/Question_24.mp3",
        optionsAudio: "audio8/Question_24_options.mp3",
        options: [
            { text: "हॉकी (Hockey)", correct: false },
            { text: "फुटबॉल (Football)", correct: false },
            { text: "क्रिकेट (Cricket)", correct: true },
            { text: "कबड्डी (Kabaddi)", correct: false }
        ]
    },
    {
        id: 25,
        question: "हाल ही में प्रधानमंत्री नरेंद्र मोदी ने PM MITRA पार्क का उद्घाटन कहाँ किया है?",
        questionAudio: "audio8/Question_25.mp3",
        optionsAudio: "audio8/Question_25_options.mp3",
        options: [
            { text: "गुजरात (Gujarat)", correct: false },
            { text: "महाराष्ट्र (Maharashtra)", correct: false },
            { text: "तेलंगाना (Telangana)", correct: true },
            { text: "तमिलनाडु (Tamil Nadu)", correct: false }
        ]
    },
    {
        id: 26,
        question: "हाल ही में किसके द्वारा लिखित पुस्तक 'द बेंच, द बार, एंड द बिज़ारे एंड द लॉफुल एंड द आॅफुल' (The Bench, the Bar, and the Bizarre, and the Lawful and the Awful) का विमोचन किया गया है?",
        questionAudio: "audio8/Question_26.mp3",
        optionsAudio: "audio8/Question_26_options.mp3",
        options: [
            { text: "फली नरीमन (Fali Nariman)", correct: false },
            { text: "कपिल सिब्बल (Kapil Sibal)", correct: false },
            { text: "अभिषेक मनु सिंघवी (Abhishek Manu Singhvi)", correct: false },
            { text: "तुषार मेहता (Tushar Mehta)", correct: true }
        ]
    },
    {
        id: 27,
        question: "भारत विश्व में नवीकरणीय ऊर्जा (Renewable Energy) की स्थापित क्षमता में किस स्थान पर है?",
        questionAudio: "audio8/Question_27.mp3",
        optionsAudio: "audio8/Question_27_options.mp3",
        options: [
            { text: "पहला (First)", correct: false },
            { text: "तीसरा (Third)", correct: true },
            { text: "चौथा (Fourth)", correct: false },
            { text: "पांचवां (Fifth)", correct: false }
        ]
    },
    {
        id: 28,
        question: "हाल ही में विश्व ल्यूपस दिवस 2026 (World Lupus Day 2026) कब मनाया गया है?",
        questionAudio: "audio8/Question_28.mp3",
        optionsAudio: "audio8/Question_28_options.mp3",
        options: [
            { text: "8 मई (May 8)", correct: false },
            { text: "9 मई (May 9)", correct: false },
            { text: "10 मई (May 10)", correct: true },
            { text: "11 मई (May 11)", correct: false }
        ]
    },
    {
        id: 29,
        question: "हाल ही में भारतीय स्टेट बैंक (SBI) द्वारा जारी रिपोर्ट के अनुसार वित्त वर्ष 2026-27 में अर्थव्यवस्था में कितने प्रतिशत की वृद्धि होने का अनुमान है?",
        questionAudio: "audio8/Question_29.mp3",
        optionsAudio: "audio8/Question_29_options.mp3",
        options: [
            { text: "5.5%", correct: false },
            { text: "6.0%", correct: false },
            { text: "6.3%", correct: false },
            { text: "6.6%", correct: true }
        ]
    },
    {
        id: 30,
        question: "हाल ही में केंद्रीय मंत्री शिवराज सिंह चौहान ने प्रधानमंत्री ग्राम सड़क योजना (PMGSY-IV) का शुभारंभ कहाँ किया है?",
        questionAudio: "audio8/Question_30.mp3",
        optionsAudio: "audio8/Question_30_options.mp3",
        options: [
            { text: "मध्य प्रदेश (Madhya Pradesh)", correct: true },
            { text: "उत्तर प्रदेश (Uttar Pradesh)", correct: false },
            { text: "राजस्थान (Rajasthan)", correct: false },
            { text: "छत्तीसगढ़ (Chhattisgarh)", correct: false }
        ]
    },
    {
        id: 31,
        question: "हाल ही में एशियाई भारोत्तोलन चैम्पियनशिप 2026 (Asian Weightlifting Championships 2026) कहाँ शुरू हुआ है?",
        questionAudio: "audio8/Question_31.mp3",
        optionsAudio: "audio8/Question_31_options.mp3",
        options: [
            { text: "नई दिल्ली (New Delhi)", correct: false },
            { text: "गांधीनगर (Gandhinagar)", correct: true },
            { text: "मुंबई (Mumbai)", correct: false },
            { text: "पटना (Patna)", correct: false }
        ]
    },
    {
        id: 32,
        question: "हाल ही में बरगी बांध क्रूज दुर्घटना की जांच के लिए किसकी अध्यक्षता में आयोग गठित किया गया है?",
        questionAudio: "audio8/Question_32.mp3",
        optionsAudio: "audio8/Question_32_options.mp3",
        options: [
            { text: "अशोक शर्मा (Ashok Sharma)", correct: false },
            { text: "राजेश गुप्ता (Rajesh Gupta)", correct: false },
            { text: "Sanjay Dwivedi (संजय द्विवेदी)", correct: true },
            { text: "विनोद मिश्रा (Vinod Mishra)", correct: false }
        ]
    },
    {
        id: 33,
        question: "हाल ही में शतरंज के इतिहास में दूसरे सबसे कम उम्र के ग्रैंडमास्टर (Grandmaster) कौन बने हैं?",
        questionAudio: "audio8/Question_33.mp3",
        optionsAudio: "audio8/Question_33_options.mp3",
        options: [
            { text: "जावोखिर सिंडारोव (Javokhir Sindarov)", correct: false },
            { text: "यागीज कान एर्दोगमस (Yagiz Kaan Erdogmus)", correct: false },
            { text: "अभिमन्यु मिश्रा (Abhimanyu Mishra)", correct: false },
            { text: "फॉस्टिनो ओरो (Faustino Oro)", correct: true }
        ]
    },
    {
        id: 34,
        question: "11 मई 2026 को जारी ICC की वार्षिक अपडेट के अनुसार, पुरुषों की वनडे (ODI) टीम रैंकिंग में कौन सा देश शीर्ष स्थान पर है?",
        questionAudio: "audio8/Question_34.mp3",
        optionsAudio: "audio8/Question_34_options.mp3",
        options: [
            { text: "ऑस्ट्रेलिया (Australia)", correct: false },
            { text: "न्यूजीलैंड (New Zealand)", correct: false },
            { text: "भारत (India)", correct: true },
            { text: "दक्षिण अफ्रीका (South Africa)", correct: false }
        ]
    },
    {
        id: 35,
        question: "हाल ही में किस भारतीय शतरंज खिलाड़ी ने इंटरनेशनल मास्टर (IM) का खिताब हासिल किया है?",
        questionAudio: "audio8/Question_35.mp3",
        optionsAudio: "audio8/Question_35_options.mp3",
        options: [
            { text: "दयानंद सिंह (Dayanand सिंह)", correct: false },
            { text: "शुभम सहाय (Shubham Sahay)", correct: false },
            { text: "अपार सक्सेना (Apar Saxena)", correct: true },
            { text: "मानवी मित्तल (Manavi Mittal)", correct: false }
        ]
    },
    {
        id: 36,
        question: "हाल ही में दक्षिण एशिया क्षेत्र में 2026 कैम्ब्रिज समर्पित शिक्षक पुरस्कार (Cambridge Dedicated Teacher Award) से किस भारतीय को सम्मानित किया गया है?",
        questionAudio: "audio8/Question_36.mp3",
        optionsAudio: "audio8/Question_36_options.mp3",
        options: [
            { text: "राधा कृष्णन (Radha Krishnan)", correct: false },
            { text: "सुनीता वर्मा (Sunita Verma)", correct: false },
            { text: "अनिल जोशी (Anil Joshi)", correct: false },
            { text: "सोमा मंडल (Soma Mondal)", correct: true }
        ]
    },
    {
        id: 37,
        question: "हाल ही में रस्टी-स्पॉटेड बिल्ली (Rusty-spotted Cat) के प्रजनन का पहला फोटोग्राफिक प्रमाण कहाँ रिकॉर्ड किया गया है?",
        questionAudio: "audio8/Question_37.mp3",
        optionsAudio: "audio8/Question_37_options.mp3",
        options: [
            { text: "अरावली (Aravallis)", correct: true },
            { text: "हिमालय (Himalayas)", correct: false },
            { text: "पश्चिमी घाट (Western Ghats)", correct: false },
            { text: "सतपुड़ा (Satpuras)", correct: false }
        ]
    },
    {
        id: 38,
        question: "हाल ही में नैनी झील में हिमालयी स्नो ट्राउट (Himalayan Snow Trout) की वापसी के संबंध में सही कथन चुनिए:-",
        questionAudio: "audio8/Question_38.mp3",
        optionsAudio: "audio8/Question_38_options.mp3",
        options: [
            { text: "यह मछली केवल समुद्री जल में पाई जाती है (This fish is found only in marine waters)", correct: false },
            { text: "इसे 'रोहू' के नाम से जाना जाता है (It is known by the name 'Rohu')", correct: false },
            { text: "यह मछली केवल दक्षिण भारत में पाई जाती है (This fish is found only in South India)", correct: false },
            { text: "इसे स्थानीय रूप से 'असेला' के नाम से जाना जाता है (It is locally known as 'Asela')", correct: true }
        ]
    },
    {
        id: 39,
        question: "हाल ही में बौद्ध भिक्षुओं के समूह में शामिल होने वाला पहला रोबोट कौन-सा बना है?",
        questionAudio: "audio8/Question_39.mp3",
        optionsAudio: "audio8/Question_39_options.mp3",
        options: [
            { text: "गैबी रोबोट (Gaby Robot)", correct: true },
            { text: "सोफिया रोबोट (Sophia Robot)", correct: false },
            { text: "पेप्पर रोबोट (Pepper Robot)", correct: false },
            { text: "नाओ रोबोट (Nao Robot)", correct: false }
        ]
    },
    {
        id: 40,
        question: "हाल ही में अंतर्राष्ट्रीय बिग कैट एलायंस (IBCA) में 26वां सदस्य देश कौन-सा बनेगा?",
        questionAudio: "audio8/Question_40.mp3",
        optionsAudio: "audio8/Question_40_options.mp3",
        options: [
            { text: "संयुक्त अरब अमीरात (United Arab Emirates)", correct: false },
            { text: "सऊदी अरब (Saudi Arabia)", correct: true },
            { text: "कतर (Qatar)", correct: false },
            { text: "ओमान (Oman)", correct: false }
        ]
    },
    {
        id: 41,
        question: "हाल ही में 'साइबर-सुरक्षा.ai' (Cyber-security.ai) नामक कार्यबल किसने गठित किया है?",
        questionAudio: "audio8/Question_41.mp3",
        optionsAudio: "audio8/Question_41_options.mp3",
        options: [
            { text: "भारतीय रिज़र्व बैंक (Reserve Bank of India)", correct: false },
            { text: "नीति आयोग (NITI Aayog)", correct: false },
            { text: "भारतीय प्रतिभूति और विनिमय बोर्ड (Securities and Exchange Board of India)", correct: true },
            { text: "वित्त मंत्रालय (Ministry of Finance)", correct: false }
        ]
    },
    {
        id: 42,
        question: "हाल ही में लॉरा फर्नांडीज (Laura Fernandez) ने किस देश की दूसरी महिला राष्ट्रपति के रूप में शपथ ली है?",
        questionAudio: "audio8/Question_42.mp3",
        optionsAudio: "audio8/Question_42_options.mp3",
        options: [
            { text: "पनामा (Panama)", correct: false },
            { text: "चिली (Chile)", correct: false },
            { text: "पेरू (Peru)", correct: false },
            { text: "कोस्टा रिका (Costa Rica)", correct: true }
        ]
    },
    {
        id: 43,
        question: "हाल ही में भारत की पहली प्लास्टिक वेस्ट जियोसेल तकनीक (Plastic Waste Geocell Technology) के संबंध में सही कथन चुनिए:-",
        questionAudio: "audio8/Question_43.mp3",
        optionsAudio: "audio8/Question_43_options.mp3",
        options: [
            { text: "इसे CSIR-सेंट्रल रोड रिसर्च इंस्टीट्यूट और भारत पेट्रोलियम कॉर्पोरेशन लिमिटेड ने बनाया है (It is made by CSIR-CRRI and BPCL)", correct: true },
            { text: "इसे भारत पेट्रोलियम कॉर्पोरेशन लिमिटेड और हिन्दुस्तान पेट्रोलियम द्वारा विकसित किया गया है (It has been developed by BPCL and HPCL)", correct: false },
            { text: "यह तकनीक केवल कृषि क्षेत्र के लिए बनाई गई है (This technology is designed only for the agricultural sector)", correct: false },
            { text: "इसे फ्रांस के सहयोग से विकसित किया गया है (It has been developed in collaboration with France)", correct: false }
        ]
    },
    {
        id: 44,
        question: "हाल ही में भारत का पहला 'एल्गी ट्री' (Algae Tree) कहाँ स्थापित किया गया है?",
        questionAudio: "audio8/Question_44.mp3",
        optionsAudio: "audio8/Question_44_options.mp3",
        options: [
            { text: "इन्दौर (Indore)", correct: false },
            { text: "जयपुर (Jaipur)", correct: false },
            { text: "भोपाल (Bhopal)", correct: true },
            { text: "लखनऊ (Lucknow)", correct: false }
        ]
    },
    {
        id: 45,
        question: "हाल ही में स्टील अथॉरिटी ऑफ इंडिया लिमिटेड (SAIL) के अध्यक्ष and प्रबंध निदेशक (Chairman & Managing Director) के रूप में किसे नियुक्त किया गया है?",
        questionAudio: "audio8/Question_45.mp3",
        optionsAudio: "audio8/Question_45_options.mp3",
        options: [
            { text: "राजीव कुमार (Rajiv Kumar)", correct: false },
            { text: "अजय सिंह (Ajay Singh)", correct: false },
            { text: "विनोद शर्मा (Vinod Sharma)", correct: false },
            { text: "डॉ. अशोक कुमार पांडा (Dr. Ashok Kumar Panda)", correct: true }
        ]
    },
    {
        id: 46,
        question: "हाल ही में GARUDA पहल किसने पेश की है?",
        questionAudio: "audio8/Question_46.mp3",
        optionsAudio: "audio8/Question_46_options.mp3",
        options: [
            { text: "भारतीय प्रतिभूति और विनिमय बोर्ड (Securities and Exchange Board of India)", correct: true },
            { text: "भारतीय रिज़र्व बैंक (Reserve Bank of India)", correct: false },
            { text: "नीति आयोग (NITI Aayog)", correct: false },
            { text: "वित्त मंत्रालय (Ministry of Finance)", correct: false }
        ]
    },
    {
        id: 47,
        question: "हाल ही में राष्ट्रीय मिशन SEHAT लॉन्च किया गया है, यह भारतीय चिकित्सा अनुसंधान परिषद (ICMR) और किसकी संयुक्त पहल है?",
        questionAudio: "audio8/Question_47.mp3",
        optionsAudio: "audio8/Question_47_options.mp3",
        options: [
            { text: "नीति आयोग (NITI Aayog)", correct: false },
            { text: "भारतीय कृषि अनुसंधान परिषद (Indian Council of Agricultural Research)", correct: true },
            { text: "भारतीय अंतरिक्ष अनुसंधान संगठन (Indian Space Research Organisation)", correct: false },
            { text: "स्वास्थ्य मंत्रालय (Ministry of Health)", correct: false }
        ]
    },
    {
        id: 48,
        question: "हाल ही में अंतर्राष्ट्रीय नर्स दिवस 2026 (International Nurses Day 2026) कब मनाया गया है?",
        questionAudio: "audio8/Question_48.mp3",
        optionsAudio: "audio8/Question_48_options.mp3",
        options: [
            { text: "10 मई (May 10)", correct: false },
            { text: "12 मई (May 12)", correct: true },
            { text: "5 मई (May 5)", correct: false },
            { text: "7 मई (May 7)", correct: false }
        ]
    },
    {
        id: 49,
        question: "हाल ही में 2026 के लिए कितने नर्सिंग पेशेवरों को राष्ट्रीय फ्लोरेंस नाइटिंगेल पुरस्कार (National Florence Nightingale Awards) प्रदान किया गया है?",
        questionAudio: "audio8/Question_49.mp3",
        optionsAudio: "audio8/Question_49_options.mp3",
        options: [
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "15", correct: true },
            { text: "20", correct: false }
        ]
    },
    {
        id: 50,
        question: "हाल ही में भारत में इथेनॉल उत्पादन (Ethanol Production) के लिए सबसे बड़ा एकल कच्चा माल कौन-सा बना है?",
        questionAudio: "audio8/Question_50.mp3",
        optionsAudio: "audio8/Question_50_options.mp3",
        options: [
            { text: "गन्ना (Sugarcane)", correct: false },
            { text: "गेहूं (Wheat)", correct: false },
            { text: "मक्का (Maize)", correct: true },
            { text: "चावल (Rice)", correct: false }
        ]
    },
    {
        id: 51,
        question: "हाल ही में किस राज्य ने महिलाओं की सुरक्षा के लिए 'सिंगप्पेन' (Singappen) विशेष कार्यबल के गठन की घोषणा की है?",
        questionAudio: "audio8/Question_51.mp3",
        optionsAudio: "audio8/Question_51_options.mp3",
        options: [
            { text: "कर्नाटक (Karnataka)", correct: false },
            { text: "केरल (Kerala)", correct: false },
            { text: "आंध्र प्रदेश (Andhra Pradesh)", correct: false },
            { text: "तमिलनाडु (Tamil Nadu)", correct: true }
        ]
    },
    {
        id: 52,
        question: "हाल ही में नंदिनी हरिनाथ (Nandini Harinath) को वाशिंगटन, DC में सम्मानित किया गया है। सही कथन चुनिए:-",
        questionAudio: "audio8/Question_52.mp3",
        optionsAudio: "audio8/Question_52_options.mp3",
        options: [
            { text: "उनकी द्वारा पहनी गई साड़ी को स्मिथसोनियन नेशनल एयर एंड स्पेस म्यूजियम में प्रदर्शित किया गया (The saree worn by her was displayed at the Smithsonian National Air and Space Museum)", correct: false },
            { text: "उन्होंने भारत के मंगल ऑर्बिटर मिशन में प्रमुख भूमिका निभाई थी (She played a key role in India's Mars Orbiter Mission)", correct: false },
            { text: "मंगल ऑर्बिटर मिशन को 5 नवंबर, 2013 को लॉन्च किया गया था (Mars Orbiter Mission was launched on November 5, 2013)", correct: false },
            { text: "उपरोक्त सभी (All of the above)", correct: true }
        ]
    },
    {
        id: 53,
        question: "हाल ही में परमाणु ऊर्जा नियामक बोर्ड (AERB) ने किस परमाणु ऊर्जा स्टेशन की यूनिट-2 के पुनः संचालन को मंजूरी दी है?",
        questionAudio: "audio8/Question_53.mp3",
        optionsAudio: "audio8/Question_53_options.mp3",
        options: [
            { text: "काकरापार परमाणु ऊर्जा स्टेशन (Kakrapar Atomic Power Station)", correct: false },
            { text: "तारापुर परमाणु ऊर्जा स्टेशन (Tarapur Atomic Power Station)", correct: true },
            { text: "कुडनकुलम परमाणु ऊर्जा स्टेशन (Kudankulam Atomic Power Station)", correct: false },
            { text: "नरोरा परमाणु ऊर्जा स्टेशन (Narora Atomic Power Station)", correct: false }
        ]
    },
    {
        id: 54,
        question: "हाल ही में एयर कुशन वाहन के लिए गर्डर-लेइंग समारोह (Girder-laying ceremony for Air Cushion Vehicles) कहाँ आयोजित किया गया था?",
        questionAudio: "audio8/Question_54.mp3",
        optionsAudio: "audio8/Question_54_options.mp3",
        options: [
            { text: "गोवा (Goa)", correct: true },
            { text: "चेन्नई (Chennai)", correct: false },
            { text: "पुदुचेरी (Puducherry)", correct: false },
            { text: "मुंबई (Mumbai)", correct: false }
        ]
    },
    {
        id: 55,
        question: "हाल ही में 'हर घर योग अभियान' (Har Ghar Yoga Campaign) की शुरुआत कहाँ की गई है?",
        questionAudio: "audio8/Question_55.mp3",
        optionsAudio: "audio8/Question_55_options.mp3",
        options: [
            { text: "उत्तर प्रदेश (Uttar Pradesh)", correct: false },
            { text: "मध्य प्रदेश (Madhya Pradesh)", correct: true },
            { text: "राजस्थान (Rajasthan)", correct: false },
            { text: "गुजरात (Gujarat)", correct: false }
        ]
    },
    {
        id: 56,
        question: "हाल ही में भारत का पहला लो एमिशन ज़ोन (Low Emission Zone - LEZ) कहाँ स्थापित किया जा रहा है?",
        questionAudio: "audio8/Question_56.mp3",
        optionsAudio: "audio8/Question_56_options.mp3",
        options: [
            { text: "पुणे (Pune)", correct: true },
            { text: "मुंबई (Mumbai)", correct: false },
            { text: "दिल्ली (Delhi)", correct: false },
            { text: "बेंगलुरु (Bengaluru)", correct: false }
        ]
    },
    {
        id: 57,
        question: "हाल ही में एफसी बार्सिलोना (FC Barcelona) ने किसे हराकर वर्ष 2025-26 का ला लीगा (La Liga) खिताब जीता है?",
        questionAudio: "audio8/Question_57.mp3",
        optionsAudio: "audio8/Question_57_options.mp3",
        options: [
            { text: "एटलेटिको मैड्रिड (Atlético Madrid)", correct: false },
            { text: "सेविला (Sevilla)", correct: false },
            { text: "रियल मैड्रिड (Real Madrid)", correct: true },
            { text: "विलारियल (Villarreal)", correct: false }
        ]
    },
    {
        id: 58,
        question: "हाल ही में केंद्रीय मंत्रिमंडल ने कोयला/लिग्नाइट गैसीकरण परियोजनाओं (Coal/Lignite Gasification Projects) की प्रोत्साहन योजना को कितने परिव्यय के साथ मंजूरी दी है?",
        questionAudio: "audio8/Question_58.mp3",
        optionsAudio: "audio8/Question_58_options.mp3",
        options: [
            { text: "₹25,000 करोड़ (₹25,000 crore)", correct: false },
            { text: "₹30,000 करोड़ (₹30,000 crore)", correct: false },
            { text: "₹35,000 करोड़ (₹35,000 crore)", correct: false },
            { text: "₹37,500 करोड़ (₹37,500 crore)", correct: true }
        ]
    },
    {
        id: 59,
        question: "हाल ही में \"कलम और कवच\" (Kalam & Kavach) सम्मेलन के किस संस्करण का उद्घाटन किया गया है?",
        questionAudio: "audio8/Question_59.mp3",
        optionsAudio: "audio8/Question_59_options.mp3",
        options: [
            { text: "पहला (First)", correct: false },
            { text: "तीसरा (Third)", correct: true },
            { text: "चौथा (Fourth)", correct: false },
            { text: "पांचवां (Fifth)", correct: false }
        ]
    },
    {
        id: 60,
        question: "हाल ही में एरी रेशम प्रसंस्करण इकाई (Eri Silk Processing Unit) का उद्घाटन कहाँ किया गया?",
        questionAudio: "audio8/Question_60.mp3",
        optionsAudio: "audio8/Question_60_options.mp3",
        options: [
            { text: "असम (Assam)", correct: false },
            { text: "मणिपुर (Manipur)", correct: false },
            { text: "मेघालय (Meghalaya)", correct: true },
            { text: "नागालैंड (Nagaland)", correct: false }
        ]
    },
    {
        id: 61,
        question: "हाल ही में ओमान (Oman) में भारत के अगले राजदूत के रूप में किसे नियुक्त किया गया है?",
        questionAudio: "audio8/Question_61.mp3",
        optionsAudio: "audio8/Question_61_options.mp3",
        options: [
            { text: "संजीव अरोड़ा (Sanjiv Arora)", correct: false },
            { text: "दीपक मित्तल (Deepak Mittal)", correct: false },
            { text: "अजय कुमार (Ajay Kumar)", correct: false },
            { text: "प्रशांत पिसे (Prashant Pise)", correct: true }
        ]
    },
    {
        id: 62,
        question: "हाल ही में किसके पूर्व अध्यक्ष, स्वपन साधन बोस (Swapan Sadhan Bose) का निधन हो गया है?",
        questionAudio: "audio8/Question_62.mp3",
        optionsAudio: "audio8/Question_62_options.mp3",
        options: [
            { text: "मोहन बागान एफसी (Mohun Bagan FC)", correct: true },
            { text: "ईस्ट बंगाल एफसी (East Bengal FC)", correct: false },
            { text: "मुंबई सिटी एफसी (Mumbai City FC)", correct: false },
            { text: "केरला ब्लास्टर्स एफसी (Kerala Blasters FC)", correct: false }
        ]
    },
    {
        id: 63,
        question: "हाल ही में 2026-27 के लिए भारतीय उद्योग परिसंघ (Confederation of Indian Industry - CII) का अध्यक्ष किसे बनाया गया है?",
        questionAudio: "audio8/Question_63.mp3",
        optionsAudio: "audio8/Question_63_options.mp3",
        options: [
            { text: "संजीव मेहता (Sanjiv Mehta)", correct: false },
            { text: "निखिल मेसवानी (Nikhil Meswani)", correct: false },
            { text: "आर. मुकुंदन (R. Mukundan)", correct: true },
            { text: "अजय बंगा (Ajay Banga)", correct: false }
        ]
    },
    {
        id: 64,
        question: "हाल ही में मुख्य अभिनेता का 2026 ब्रिटिश एकेडमी टेलीविज़न अवार्ड (BAFTA Television Award for Best Leading Actor) किसने जीता है?",
        questionAudio: "audio8/Question_64.mp3",
        optionsAudio: "audio8/Question_64_options.mp3",
        options: [
            { text: "बेनेडिक्ट कंबरबैच (Benedict Cumberbatch)", correct: false },
            { text: "टॉम हिडलस्टन (Tom Hiddleston)", correct: false },
            { text: "स्टीफन ग्राहम (Stephen Graham)", correct: true },
            { text: "किलियन मर्फी (Cillian Murphy)", correct: false }
        ]
    },
    {
        id: 65,
        question: "हाल ही में 2026 रोलेक्स नेशनल ज्योग्राफिक एक्सप्लोरर ऑफ द Year अवार्ड (2026 Rolex National Geographic Explorer of the Year Award) पाने वाली पहली भारतीय कौन बनी हैं?",
        questionAudio: "audio8/Question_65.mp3",
        optionsAudio: "audio8/Question_65_options.mp3",
        options: [
            { text: "कृति के. कारंथ (Krithi K. Karanth)", correct: true },
            { text: "मानत वी. नरेश (Manat V. Naresh)", correct: false },
            { text: "कल्पना श्रीवास्तव (Kalpana Srivastava)", correct: false },
            { text: "काव्या श्री (Kamya Shree)", correct: false }
        ]
    },
    {
        id: 66,
        question: "हाल ही में वी.डी. सतीशन (V.D. Satheesan) को किस राज्य का नया मुख्यमंत्री नियुक्त किया गया है?",
        questionAudio: "audio8/Question_66.mp3",
        optionsAudio: "audio8/Question_66_options.mp3",
        options: [
            { text: "तमिलनाडु (Tamil Nadu)", correct: false },
            { text: "कर्नाटक (Karnataka)", correct: false },
            { text: "आंध्र प्रदेश (Andhra Pradesh)", correct: false },
            { text: "केरल (Kerala)", correct: true }
        ]
    },
    {
        id: 67,
        question: "हाल ही में भीममंडली ईको हेरिटेज साइट (Bhimmandali Eco Heritage Site) का उद्घाटन कहाँ किया गया है?",
        questionAudio: "audio8/Question_67.mp3",
        optionsAudio: "audio8/Question_67_options.mp3",
        options: [
            { text: "भोपाल (Bhopal)", correct: false },
            { text: "जयपुर (Jaipur)", correct: false },
            { text: "संभलपुर (Sambalpur)", correct: true },
            { text: "रांची (Ranchi)", correct: false }
        ]
    },
    {
        id: 68,
        question: "हाल ही में उबर (Uber) ने अपने पहले डेटा सेंटर की स्थापना के लिए किसके साथ साझेदारी की है?",
        questionAudio: "audio8/Question_68.mp3",
        optionsAudio: "audio8/Question_68_options.mp3",
        options: [
            { text: "टाटा समूह (Tata Group)", correct: false },
            { text: "रिलायंस Industries (Reliance Industries)", correct: false },
            { text: "अदनी समूह (Adani Group)", correct: true },
            { text: "इन्फोसिस (Infosys)", correct: false }
        ]
    },
    {
        id: 69,
        question: "हाल ही में राष्ट्रीय आपदा प्रतिक्रिया बल (NDRF) को 'प्रेसिडेंट्स कलर' (President's Colour) प्रदान किए जाने के समारोह का आयोजन कहाँ किया गया है?",
        questionAudio: "audio8/Question_69.mp3",
        optionsAudio: "audio8/Question_69_options.mp3",
        options: [
            { text: "नई दिल्ली (New Delhi)", correct: false },
            { text: "लखनऊ (Lucknow)", correct: false },
            { text: "जयपुर (Jaipur)", correct: false },
            { text: "गाज़ियाबाद (Ghaziabad)", correct: true }
        ]
    },
    {
        id: 70,
        question: "हाल ही में किस राज्य सरकार ने यूनिफॉर्म सिविल कोड (UCC) बिल के प्रारूप को मंजूरी दी है?",
        questionAudio: "audio8/Question_70.mp3",
        optionsAudio: "audio8/Question_70_options.mp3",
        options: [
            { text: "असम (Assam)", correct: true },
            { text: "उत्तर प्रदेश (Uttar Pradesh)", correct: false },
            { text: "मध्य प्रदेश (Madhya Pradesh)", correct: false },
            { text: "गुजरात (Gujarat)", correct: false }
        ]
    },
    {
        id: 71,
        question: "हाल ही में भारत ने किसके निर्यात पर तत्काल प्रभाव से प्रतिबंध लगाया है?",
        questionAudio: "audio8/Question_71.mp3",
        optionsAudio: "audio8/Question_71_options.mp3",
        options: [
            { text: "गेहूं (Wheat)", correct: false },
            { text: "चावल (Rice)", correct: false },
            { text: "दाल (Pulses)", correct: false },
            { text: "चीनी (Sugar)", correct: true }
        ]
    },
    {
        id: 72,
        question: "हाल ही में किसके द्वारा प्रधानमंत्री नरेंद्र मोदी पर आधारित लिखित किताब 'अपनापन' (Apnapan) का विमोचन किया जाएगा?",
        questionAudio: "audio8/Question_72.mp3",
        optionsAudio: "audio8/Question_72_options.mp3",
        options: [
            { text: "शिवराज सिंह चौहान (Shivraj Singh Chouhan)", correct: true },
            { text: "अमित शाह (Amit Shah)", correct: false },
            { text: "राजनाथ सिंह (Rajnath Singh)", correct: false },
            { text: "नितिन गडकरी (Nitin Gadkari)", correct: false }
        ]
    },
    {
        id: 73,
        question: "हाल ही में अपर्णा दहिया (Aparna Dahiya) ने 11वें सांडा विश्व कप में महिलाओं के 52 किलोग्राम भार वर्ग में कौन सा पदक जीता है?",
        questionAudio: "audio8/Question_73.mp3",
        optionsAudio: "audio8/Question_73_options.mp3",
        options: [
            { text: "स्वर्ण पदक (Gold Medal)", correct: true },
            { text: "रजत पदक (Silver Medal)", correct: false },
            { text: "कांस्य पदक (Bronze Medal)", correct: false },
            { text: "कोई पदक नहीं (No Medal)", correct: false }
        ]
    },
    {
        id: 74,
        question: "हाल ही में सेंट स्टीफेंस कॉलेज की पहली महिला प्रिंसिपल (First Female Principal of St. Stephen's College) किसे नियुक्त किया गया है?",
        questionAudio: "audio8/Question_74.mp3",
        optionsAudio: "audio8/Question_74_options.mp3",
        options: [
            { text: "नंदिता शर्मा (Nandita Sharma)", correct: false },
            { text: "अर्चना सिंह (Archana सिंह)", correct: false },
            { text: "सुसान एलियास (Susan Elias)", correct: true },
            { text: "रीना माथुर (Reina Mathur)", correct: false }
        ]
    },
    {
        id: 75,
        question: "हाल ही में भारत मौसम विज्ञान विभाग (IMD) ने किस राज्य के लिए उच्च स्थानिक समाधान वाली वर्षा पूर्वानुमान पायलट प्रोजेक्ट (Pilot project for high-spatial-resolution rainfall forecasting) शुरू किया है?",
        questionAudio: "audio8/Question_75.mp3",
        optionsAudio: "audio8/Question_75_options.mp3",
        options: [
            { text: "बिहार (Bihar)", correct: false },
            { text: "उत्तर प्रदेश (Uttar Pradesh)", correct: true },
            { text: "राजस्थान (Rajasthan)", correct: false },
            { text: "मध्य प्रदेश (Madhya Pradesh)", correct: false }
        ]
    },
    {
        id: 76,
        question: "हाल ही में LEADS 2025 रिपोर्ट में किन्हें शीर्ष लॉजिस्टिक्स प्रदर्शनकर्ता (Top Logistics Performers) घोषित किया गया है?",
        questionAudio: "audio8/Question_76.mp3",
        optionsAudio: "audio8/Question_76_options.mp3",
        options: [
            { text: "गुजरात, महाराष्ट्र, पंजाब और हरियाणा (Gujarat, Maharashtra, Punjab, and Haryana)", correct: false },
            { text: "कर्नाटक, बिहार, गोवा और दिल्ली (Karnataka, Bihar, Goa, and Delhi)", correct: false },
            { text: "तमिलनाडु, उत्तर प्रदेश, मिजोरम और दिल्ली (Tamil Nadu, Uttar Pradesh, Mizoram, and Delhi)", correct: true },
            { text: "राजस्थान, Assam, तेलंगाना और केरल (Rajasthan, Assam, Telangana, and Kerala)", correct: false }
        ]
    },
    {
        id: 77,
        question: "हाल ही में प्रधानमंत्री नरेंद्र मोदी किस देश की आधिकारिक यात्रा (Official Tour) पर गए हैं?",
        questionAudio: "audio8/Question_77.mp3",
        optionsAudio: "audio8/Question_77_options.mp3",
        options: [
            { text: "संयुक्त अरब अमीरात (United Arab Emirates)", correct: true },
            { text: "जापान (Japan)", correct: false },
            { text: "फ्रांस (France)", correct: false },
            { text: "रूस (Russia)", correct: false }
        ]
    },
    {
        id: 78,
        question: "हाल ही में देश की पहली हाइड्रोजन ईंधन आधारित शटल बस सेवा (Hydrogen-fueled shuttle bus service) कहाँ शुरू की गई है?",
        questionAudio: "audio8/Question_78.mp3",
        optionsAudio: "audio8/Question_78_options.mp3",
        options: [
            { text: "मुंबई (Mumbai)", correct: false },
            { text: "बेंगलुरु (Bengaluru)", correct: false },
            { text: "दिल्ली (Delhi)", correct: true },
            { text: "चेन्नई (Chennai)", correct: false }
        ]
    },
    {
        id: 79,
        question: "हाल ही में गंगम्मा उत्सव 2026 (Gangamma Festival 2026) कहाँ मनाया गया है?",
        questionAudio: "audio8/Question_79.mp3",
        optionsAudio: "audio8/Question_79_options.mp3",
        options: [
            { text: "तमिलनाडु (Tamil Nadu)", correct: false },
            { text: "कर्नाटक (Karnataka)", correct: false },
            { text: "तेलंगाना (Telangana)", correct: false },
            { text: "आंध्र प्रदेश (Andhra Pradesh)", correct: true }
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
    readOptions: false, 
    audioStage: 'none', 
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
    autoReadSwitch: document.getElementById('auto-read-switch'),
    readOptionsSwitch: document.getElementById('read-options-switch'), 
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
        this.monitorInterval = null; 
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

    startProgressMonitor(audio, threshold, onTrigger) {
        if (this.monitorInterval) {
            clearInterval(this.monitorInterval);
        }
        this.monitorInterval = setInterval(() => {
            if (!audio || audio.paused) {
                clearInterval(this.monitorInterval);
                return;
            }
            const duration = audio.duration;
            const currentTime = audio.currentTime;
            
            // Trigger threshold is calculated precisely to bypass silent padding
            if (duration && currentTime >= duration - threshold) {
                clearInterval(this.monitorInterval);
                onTrigger();
            }
        }, 25); 
    }

    stopAll() {
        if (this.ttsTimeoutId) {
            clearTimeout(this.ttsTimeoutId);
            this.ttsTimeoutId = null;
        }

        if (this.monitorInterval) {
            clearInterval(this.monitorInterval);
            this.monitorInterval = null;
        }

        if (this.audioNode) {
            try {
                this.audioNode.onended = null;
                this.audioNode.onerror = null;
                this.audioNode.ontimeupdate = null;
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
        if (this.ttsTimeoutId) {
            clearTimeout(this.ttsTimeoutId);
            this.ttsTimeoutId = null;
        }
        if (this.monitorInterval) {
            clearInterval(this.monitorInterval);
            this.monitorInterval = null;
        }
        if (this.synth) {
            this.synth.cancel();
        }
        this.isSynthActive = false;

        if (url.includes('Sahi_Jawab.mp3')) {
            this.beep(880, 200); 
            if (onEndedCallback) onEndedCallback();
            return;
        } else if (url.includes('Galat_Jawab.mp3')) {
            this.beep(220, 300, 'sawtooth'); 
            if (onEndedCallback) onEndedCallback();
            return;
        }

        // Retrieve preloaded Audio node instantly from memory cache
        let audio = audioCache[url];
        if (!audio) {
            audio = new Audio();
            audio.src = url;
            audio.preload = 'auto';
            audioCache[url] = audio;
        }

        if (this.audioNode && this.audioNode !== audio) {
            try {
                this.audioNode.onended = null;
                this.audioNode.onerror = null;
                this.audioNode.ontimeupdate = null;
                this.audioNode.pause();
            } catch(e){}
        }

        this.audioNode = audio;
        this.audioNode.playbackRate = state.audioSpeed;

        let triggeredEarly = false;
        
        const triggerNext = () => {
            if (triggeredEarly) return;
            triggeredEarly = true;
            if (this.monitorInterval) {
                clearInterval(this.monitorInterval);
                this.monitorInterval = null;
            }
            audio.onended = null;
            state.audioPositions[url] = 0; 
            if (onEndedCallback) onEndedCallback();
        };

        this.audioNode.onended = triggerNext;

        this.audioNode.onerror = () => {
            if (this.monitorInterval) {
                clearInterval(this.monitorInterval);
                this.monitorInterval = null;
            }
            console.warn(`Audio fail: ${url}. Switching to Hindi Text-To-Speech.`);
            this.fallbackTTS(url, onEndedCallback);
        };

        if (state.audioPositions[url]) {
            this.audioNode.currentTime = state.audioPositions[url];
        } else if (this.audioNode.currentTime !== 0) {
            this.audioNode.currentTime = 0;
        }

        // Pre-warm options track: decode first frames to eliminate hardware spin-up delay
        const currentQ = state.questions[state.currentIndex];
        if (currentQ && url === currentQ.questionAudio && currentQ.optionsAudio && state.readOptions) {
            let nextAudio = audioCache[currentQ.optionsAudio];
            if (nextAudio && nextAudio.paused) {
                nextAudio.volume = 0;
                nextAudio.play().then(() => {
                    nextAudio.pause();
                    nextAudio.volume = 1;
                    nextAudio.currentTime = 0;
                }).catch(()=>{});
            }

            // High frequency checks (every 25ms) to execute transition 180ms early
            this.startProgressMonitor(this.audioNode, 0.18, triggerNext);
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
            let fullText = `${q.question}`;
            this.speakText(fullText, callback);
        } else if (url === q.optionsAudio) {
            let optionsText = `${q.options[0].text}. ${q.options[1].text}. ${q.options[2].text}. ${q.options[3].text}.`; 
            this.speakText(optionsText, callback);
        } else {
            if (callback) callback();
        }
    }

    speakText(text, callback) {
        if (!this.synth) {
            if (callback) callback();
            return;
        }

        this.synth.cancel();

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
    }
}

const audioManager = new AudioManager();

// ============================================================================
// PLAYBACK ENGINE (Handles Question & Options Sequential Playback)
// ============================================================================
function runAudioSequence() {
    if (!state.isPlaying) return;
    const currentQ = state.questions[state.currentIndex];

    if (state.audioStage === 'question') {
        announceSR(`प्रश्न सुना जा रहा है`);
        audioManager.playFile(currentQ.questionAudio, () => {
            if (state.readOptions && currentQ.optionsAudio) {
                state.audioStage = 'options';
                runAudioSequence(); 
            } else {
                state.isPlaying = false;
                state.audioStage = 'none';
                updateAudioUI();
            }
        });
    } else if (state.audioStage === 'options') {
        announceSR(`विकल्प सुने जा रहे हैं`);
        audioManager.playFile(currentQ.optionsAudio, () => {
            state.isPlaying = false;
            state.audioStage = 'none';
            updateAudioUI();
        });
    }
}

function stopSequence() {
    state.isPlaying = false;
    if (state.autoReadTimeoutId) {
        clearTimeout(state.autoReadTimeoutId);
        state.autoReadTimeoutId = null;
    }
    
    if (audioManager.audioNode) {
        try {
            const currentSrc = audioManager.audioNode.src;
            for (const key in audioCache) {
                if (currentSrc.endsWith(key)) {
                    state.audioPositions[key] = audioManager.audioNode.currentTime;
                    break;
                }
            }
        } catch (e) {}
    }

    audioManager.stopAll();
    updateAudioUI();
}

function startSequence(fromBeginning = false) {
    const currentQ = state.questions[state.currentIndex];
    state.isPlaying = true;
    
    if (fromBeginning) {
        state.audioStage = 'question';
        state.audioPositions[currentQ.questionAudio] = 0; 
        if (currentQ.optionsAudio) {
            state.audioPositions[currentQ.optionsAudio] = 0; 
        }
    } else {
        if (!state.audioStage || state.audioStage === 'none') {
            state.audioStage = 'question';
        }
    }
    
    updateAudioUI();
    runAudioSequence();
}

function updateAudioUI() {
    if (state.isPlaying) {
        elements.masterPlayBtn.classList.add('playing');
        elements.masterPlayBtn.setAttribute('aria-label', "ऑडियो रोकें");
    } else {
        elements.masterPlayBtn.classList.remove('playing');
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
        if (q.questionAudio) urlsToLoad.push(q.questionAudio);
        if (q.optionsAudio) urlsToLoad.push(q.optionsAudio); 
    });

    let loadedCount = 0;
    const totalAssets = urlsToLoad.length;
    let timerOut = false;

    const limitTimer = setTimeout(() => {
        timerOut = true;
        completePreload();
    }, 5000); 

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
// PERSISTENCE (may_weekly(11may-16may)_progress Storage Key)
// ============================================================================
function saveProgress() {
    const dataToSave = {
        currentIndex: state.currentIndex,
        answers: state.answers,
        totalSeconds: state.totalSeconds,
        autoRead: state.autoRead,
        readOptions: state.readOptions, 
        audioSpeed: state.audioSpeed,
        shuffleQuestions: state.shuffleQuestions,
        shuffleOptions: state.shuffleOptions,
        isDarkMode: state.isDarkMode
    };
    localStorage.setItem('may_weekly(11may-16may)_progress', JSON.stringify(dataToSave));
}

function loadProgress() {
    const raw = localStorage.getItem('may_weekly(11may-16may)_progress');
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            if (parsed && Object.keys(parsed.answers || {}).length > 0) {
                elements.resumeModal.classList.remove('hidden');
            }
        } catch (e) {
            localStorage.removeItem('may_weekly(11may-16may)_progress');
        }
    }
}

function restoreQuizState() {
    const raw = localStorage.getItem('may_weekly(11may-16may)_progress');
    if (!raw) return;
    try {
        const parsed = JSON.parse(raw);
        state.currentIndex = parsed.currentIndex || 0;
        state.answers = parsed.answers || {};
        state.totalSeconds = parsed.totalSeconds || 0;
        state.autoRead = parsed.autoRead || false;
        state.readOptions = parsed.readOptions || false; 
        state.audioSpeed = parsed.audioSpeed || 1.0;
        state.shuffleQuestions = parsed.shuffleQuestions || false;
        state.shuffleOptions = parsed.shuffleOptions || false;
        state.isDarkMode = parsed.isDarkMode || false;

        elements.autoReadSwitch.checked = state.autoRead;
        elements.readOptionsSwitch.checked = state.readOptions; 
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
    localStorage.removeItem('may_weekly(11may-16may)_progress');
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

    elements.readOptionsSwitch.addEventListener('change', (e) => {
        state.readOptions = e.target.checked;
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