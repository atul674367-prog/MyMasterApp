// ============================================================================
// QUIZ DATA DEFINITION (With Exact Original Numbers & Updated Audio File Names)
// ============================================================================
const quizData = [
    {
        id: 1,
        question: "शुतुरमुर्ग के अंडे का सटीक माप क्या है?",
        questionAudio: "audio/Question_1.mp3",
        options: [
            { text: "170 µm × 130 µm", correct: false },
            { text: "170 cm × 130 cm", correct: false },
            { text: "170 mm × 130 mm", correct: true },
            { text: "170 m × 130 m", correct: false }
        ]
    },
    {
        id: 2,
        question: "माइकोप्लाज़्मा (Mycoplasma) का आकार किस सीमा के अंतर्गत आता है?",
        questionAudio: "audio/Question_2.mp3",
        options: [
            { text: "1.0 – 2.0 µm", correct: false },
            { text: "0.1 – 0.2 mm", correct: false },
            { text: "10 – 20 µm", correct: false },
            { text: "0.1 – 0.2 µm", correct: true }
        ]
    },
    {
        id: 3,
        question: "मानव शरीर के संदर्भ में सबसे बड़ी कोशिका कौन सी है?",
        questionAudio: "audio/Question_3.mp3",
        options: [
            { text: "तंत्रिका कोशिका (Nerve cell)", correct: false },
            { text: "शुतुरमुर्ग का अंडा (Ostrich's egg)", correct: false },
            { text: "डिंब कोशिका (Ovum cell)", correct: true },
            { text: "शुक्राणु कोशिका (Sperm cell)", correct: false }
        ]
    },
    {
        id: 4,
        question: "मानव शरीर की सबसे छोटी कोशिका के रूप में किसे जाना जाता है, जिसका आकार लगभग 3.1 µm होता है?",
        questionAudio: "audio/Question_4.mp3",
        options: [
            { text: "डिंब कोशिका (Ovum cell)", correct: false },
            { text: "लाल रक्त कोशिका (Red blood cell)", correct: false },
            { text: "शुक्राणु कोशिका (Sperm cell)", correct: true },
            { text: "माइकोप्लाज़्मा (Mycoplasma)", correct: false }
        ]
    },
    {
        id: 5,
        question: "तंत्रिका कोशिका (Nerve cell) का अनुमानित आकार क्या है?",
        questionAudio: "audio/Question_5.mp3",
        options: [
            { text: "120 µm", correct: false },
            { text: "1 µm", correct: false },
            { text: "10-25 µm", correct: true },
            { text: "0.1-0.2 µm", correct: false }
        ]
    },
    {
        id: 6,
        question: "निम्नलिखित कोशिकाओं को उनके आकार के आरोही क्रम (बढ़ते हुए क्रम) में व्यवस्थित करें: 1.माइकोप्लाज़्मा, 2.शुक्राणु कोशिका, 3.डिंब कोशिका, 4.शुतुरमुर्ग का अंडा",
        questionAudio: "audio/Question_6.mp3",
        options: [
            { text: "1, 2, 3, 4", correct: true },
            { text: "2, 1, 3, 4", correct: false },
            { text: "1, 3, 2, 4", correct: false },
            { text: "4, 3, 2, 1", correct: false }
        ]
    },
    {
        id: 8,
        question: "निम्नलिखित में से किस कोशिका का माप सामान्यतः माइक्रोमीटर (µm) के बजाय मिलीमीटर (mm) में व्यक्त किया जाता है?",
        questionAudio: "audio/Question_8.mp3",
        options: [
            { text: "तंत्रिका कोशिका", correct: false },
            { text: "डिंब या अंडाशय कोशिका", correct: false },
            { text: "शुतुरमुर्ग का अंडा", correct: true },
            { text: "माइकोप्लाज़्मा", correct: false }
        ]
    },
    {
        id: 9,
        question: "'संसार में सबसे बड़ी कोशिका' होने का गौरव किस कोशिका को प्राप्त है और इसे सामान्य आँखों से देखा जा सकता है?",
        questionAudio: "audio/Question_9.mp3",
        options: [
            { text: "मानव डिंब कोशिका", correct: false },
            { text: "शुतुरमुर्ग का अंडा", correct: true },
            { text: "मानव तंत्रिका कोशिका", correct: false },
            { text: "व्हेल शार्क की कोशिका", correct: false }
        ]
    },
    {
        id: 10,
        question: "120 µm का आकार किस विशिष्ट कोशिका से संबंधित है, जिसे मानव शरीर की सबसे बड़ी कोशिका माना जाता है?",
        questionAudio: "audio/Question_10.mp3",
        options: [
            { text: "शुक्राणु कोशिका", correct: false },
            { text: "तंत्रिका कोशिका", correct: false },
            { text: "डिंब कोशिका", correct: true },
            { text: "यकृत कोशिका", correct: false }
        ]
    },
    {
        id: 12,
        question: "P.P.L.O. (Pleuro-Pneumonia Like Organism) का उल्लेख किस सूक्ष्मजीव के संदर्भ में किया गया है?",
        questionAudio: "audio/Question_12.mp3",
        options: [
            { text: "जीवाणु (Bacteria)", correct: false },
            { text: "प्रोटोजोआ (Protozoa)", correct: false },
            { text: "माइकोप्लाज़्मा (Mycoplasma)", correct: true },
            { text: "विषाणु (Virus)", correct: false }
        ]
    },
    {
        id: 13,
        question: "तंत्रिका कोशिका की पुनर्जनन क्षमता (Regeneration power) सबसे कम क्यों होती है?",
        questionAudio: "audio/Question_13.mp3",
        options: [
            { text: "क्योंकि इसका आकार बहुत लंबा होता है।", correct: false },
            { text: "क्योंकि इसमें कोशिका विभाजन नहीं होता है।", correct: true },
            { text: "क्योंकि इसमें माइटोकॉन्ड्रिया की कमी होती है।", correct: false },
            { text: "क्योंकि यह शरीर के केंद्रीय तंत्रिका तंत्र में स्थित होती है।", correct: false }
        ]
    },
    {
        id: 14,
        question: "शुतुरमुर्ग के अंडे के बारे में कौन सा कथन सही है, जैसा कि दस्तावेज़ में वर्णित है?",
        questionAudio: "audio/Question_14.mp3",
        options: [
            { text: "यह एक बहुकोशिकीय संरचना है।", correct: false },
            { text: "इसे देखने के लिए माइक्रोस्कोप की आवश्यकता होती है।", correct: false },
            { text: "यह एक एकल कोशिका (Unicellular) है।", correct: true },
            { text: "यह मानव शरीर की सबसे लंबी कोशिका है।", correct: false }
        ]
    },
    {
        id: 15,
        question: "'विभाजन नहीं होता है' (not divided) की विशेषता किस कोशिका के लिए विशेष रूप से उल्लिखित है?",
        questionAudio: "audio/Question_15.mp3",
        options: [
            { text: "डिंब कोशिका", correct: false },
            { text: "शुक्राणु कोशिका", correct: false },
            { text: "तंत्रिका कोशिका", correct: true },
            { text: "अस्थि कोशिका", correct: false }
        ]
    },
    {
        id: 17,
        question: "मानव शरीर की सबसे लंबी (longest) कोशिका कौन सी है?",
        questionAudio: "audio/Question_17.mp3",
        options: [
            { text: "डिंब कोशिका", correct: false },
            { text: "तंत्रिका कोशिका", correct: true },
            { text: "शुक्राणु कोशिका", correct: false },
            { text: "पेशी कोशिका", correct: false }
        ]
    },
    {
        id: 19,
        question: "'कोशिका विज्ञान के पिता' (Father of Cytology) की उपाधि किसे दी जाती है?",
        questionAudio: "audio/Question_19.mp3",
        options: [
            { text: "लीउवेनहॉक", correct: false },
            { text: "रॉबर्ट हुक", correct: true },
            { text: "रूडोल्फ विर्चो", correct: false },
            { text: "श्लीडन", correct: false }
        ]
    },
    {
        id: 20,
        question: "'भारतीय कोशिका विज्ञान के पिता' (Indian father of cytology) के रूप में किसे जाना जाता है?",
        questionAudio: "audio/Question_20.mp3",
        options: [
            { text: "सी.वी. रमन", correct: false },
            { text: "होमी जे. भाभा", correct: false },
            { text: "अरुण कुमार शर्मा", correct: true },
            { text: "जगदीश चंद्र बोस", correct: false }
        ]
    },
    {
        id: 21,
        question: "रॉबर्ट हुक द्वारा लिखित प्रसिद्ध पुस्तक का क्या नाम है जिसमें उन्होंने अपनी कोशिकीय खोजों का वर्णन किया?",
        questionAudio: "audio/Question_21.mp3",
        options: [
            { text: "The Origin of Species", correct: false },
            { text: "Philosophiae Naturalis Principia Mathematica", correct: false },
            { text: "Micrographia", correct: true },
            { text: "The Cell", correct: false }
        ]
    },
    {
        id: 22,
        question: "जीवित कोशिका की खोज का श्रेय किस वैज्ञानिक को दिया जाता है?",
        questionAudio: "audio/Question_22.mp3",
        options: [
            { text: "रॉबर्ट हुक", correct: false },
            { text: "लीउवेनहॉक", correct: true },
            { text: "रॉबर्ट ब्राउन", correct: false },
            { text: "श्वान", correct: false }
        ]
    },
    {
        id: 23,
        question: "निम्नलिखित में से किसकी खोज का श्रेय लीउवेनहॉक को नहीं दिया गया है?",
        questionAudio: "audio/Question_23.mp3",
        options: [
            { text: "जीवाणु (Bacteria)", correct: false },
            { text: "शुक्राणु कोशिका (Sperm cell)", correct: false },
            { text: "विषाणु (Virus)", correct: true },
            { text: "RBC (लाल रक्त कोशिका)", correct: false }
        ]
    },
    {
        id: 24,
        question: "'The cell' नामक पुस्तक का संबंध किस वैज्ञानिक से है?",
        questionAudio: "audio/Question_24.mp3",
        options: [
            { text: "रॉबर्ट हुक", correct: false },
            { text: "लीउवेनहॉक", correct: false },
            { text: "ए.के. शर्मा", correct: true },
            { text: "रूडोल्फ विर्चो", correct: false }
        ]
    },
    {
        id: 25,
        question: "जीवाणु (Bacteria) और शुक्राणु कोशिका (sperm cell) दोनों की खोज किस एक ही वैज्ञानिक ने की थी?",
        questionAudio: "audio/Question_25.mp3",
        options: [
            { text: "श्लीडन", correct: false },
            { text: "श्वान", correct: false },
            { text: "रॉबर्ट हुक", correct: false },
            { text: "लीउवेनहॉक", correct: true }
        ]
    },
    {
        id: 26,
        question: "वह पहला व्यक्ति कौन था जिसने प्रोटोजोआ (Protozoa) को देखा था?",
        questionAudio: "audio/Question_26.mp3",
        options: [
            { text: "अरस्तू", correct: false },
            { text: "लीउवेनहॉक", correct: true },
            { text: "ग्रेगर मेंडल", correct: false },
            { text: "लुई पाश्चर", correct: false }
        ]
    },
    {
        id: 27,
        question: "रॉबर्ट हुक ने अपनी खोज किस पर की थी, जिसके आधार पर उन्होंने 'सेल' शब्द गढ़ा?",
        questionAudio: "audio/Question_27.mp3",
        options: [
            { text: "जीवाणु (Bacteria)", correct: false },
            { text: "तालाब का पानी", correct: false },
            { text: "कॉर्क का मृत ऊतक", correct: true },
            { text: "मानव रक्त", correct: false }
        ]
    },
    {
        id: 28,
        question: "कोशिका सिद्धान्त (Cell theory) का प्रतिपादन किन वैज्ञानिकों ने किया था?",
        questionAudio: "audio/Question_28.mp3",
        options: [
            { text: "वॉटसन और क्रिक", correct: false },
            { text: "रॉबर्ट हुक और लीउवेनहॉक", correct: false },
            { text: "श्लीडन और श्वान", correct: true },
            { text: "डार्विन और वालेस", correct: false }
        ]
    },
    {
        id: 29,
        question: "कोशिका सिद्धान्त किस अवधि में दिया गया था?",
        questionAudio: "audio/Question_29.mp3",
        options: [
            { text: "1665-1674", correct: false },
            { text: "1838-1839", correct: true },
            { text: "1953-1955", correct: false },
            { text: "1858-1859", correct: false }
        ]
    },
    {
        id: 30,
        question: "किस वैज्ञानिक ने मौजूदा कोशिका सिद्धान्त में सुधार किया और यह बताया कि नई कोशिकाएँ पुरानी कोशिकाओं से बनती हैं?",
        questionAudio: "audio/Question_30.mp3",
        options: [
            { text: "श्लीडन", correct: false },
            { text: "श्वान", correct: false },
            { text: "रूडोल्फ विर्चो", correct: true },
            { text: "रॉबर्ट हुक", correct: false }
        ]
    },
    {
        id: 31,
        question: "लैटिन वाक्यांश 'Omnis cellula-e-cellula' का क्या अर्थ है?",
        questionAudio: "audio/Question_31.mp3",
        options: [
            { text: "सभी जीव कोशिकाओं से बने हैं।", correct: false },
            { text: "कोशिका जीवन की सबसे छोटी इकाई है।", correct: false },
            { text: "पुरानी कोशिकाओं से नई कोशिकाओं का जन्म होता है।", correct: true },
            { text: "कोशिकाएँ अनायास उत्पन्न होती हैं।", correct: false }
        ]
    },
    {
        id: 32,
        question: "'सभी जीवों का शरीर कोशिकाओं से मिलकर बना है' यह कथन किस महत्वपूर्ण वैज्ञानिक अवधारणा का हिस्सा है?",
        questionAudio: "audio/Question_32.mp3",
        options: [
            { text: "विकासवाद का सिद्धांत", correct: false },
            { text: "आनुवंशिकता का नियम", correct: false },
            { text: "कोशिका सिद्धान्त", correct: true },
            { text: "सहज पीढ़ी का सिद्धांत", correct: false }
        ]
    },
    {
        id: 33,
        question: "श्लीडन और श्वान द्वारा प्रतिपादित मूल कोशिका सिद्धान्त की मुख्य कमी क्या थी, जिसे बाद में रूडोल्फ विर्चो ने सुधारा?",
        questionAudio: "audio/Question_33.mp3",
        options: [
            { text: "यह समझाने में विफल रहा कि कोशिकाएँ ऊर्जा कैसे उत्पन्न करती हैं।", correct: false },
            { text: "यह स्पष्ट नहीं कर सका कि नई कोशिकाएँ कैसे बनती हैं।", correct: true },
            { text: "पौधों और जानवरों की कोशिकाओं के बीच अंतर नहीं किया।", correct: false },
            { text: "यह प्रोकैरियोटिक कोशिकाओं पर लागू नहीं होता था।", correct: false }
        ]
    },
    {
        id: 34,
        question: "'Omnis cellula-e-cellula' का सिद्धांत किस वैज्ञानिक द्वारा दिया गया था?",
        questionAudio: "audio/Question_34.mp3",
        options: [
            { text: "थियोडोर श्वान", correct: false },
            { text: "मैथियास श्लीडन", correct: false },
            { text: "रॉबर्ट हुक", correct: false },
            { text: "रूडोल्फ विर्चो", correct: true }
        ]
    },
    {
        id: 35,
        question: "कोशिका सिद्धांत के अनुसार, सजीवों के शरीर की सबसे छोटी इकाई क्या है?",
        questionAudio: "audio/Question_35.mp3",
        options: [
            { text: "ऊतक (Tissue)", correct: false },
            { text: "अंग (Organ)", correct: false },
            { text: "कोशिका (Cell)", correct: true },
            { text: "अणु (Molecule)", correct: false }
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
// AUDIO MANAGER (Persistent Single Audio Node + Android Webview Safe Event Loop Fix)
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
    localStorage.setItem('cytology_quiz_progress', JSON.stringify(dataToSave));
}

function loadProgress() {
    const raw = localStorage.getItem('cytology_quiz_progress');
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            if (parsed && Object.keys(parsed.answers || {}).length > 0) {
                elements.resumeModal.classList.remove('hidden');
            }
        } catch (e) {
            localStorage.removeItem('cytology_quiz_progress');
        }
    }
}

function restoreQuizState() {
    const raw = localStorage.getItem('cytology_quiz_progress');
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
    localStorage.removeItem('cytology_quiz_progress');
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

// Initializing UI Settings & Event listeners
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

// 1. आईफ़्रेम में होने पर PWA प्रोम्प्ट न दिखाएं
window.addEventListener('beforeinstallprompt', (e) => {
    if (window.self !== window.top) {
        return; // अगर आईफ़्रेम के अंदर हैं, तो बैनर न दिखाएं
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

// Resuming Modal Event Bindings (Map fixes applied here)
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

// 2. जब आईफ़्रेम बंद या रिप्लेस हो, तो तुरंत ऑडियो/स्पीच रोकें
window.addEventListener('pagehide', () => {
    audioManager.stopAll();
});
window.addEventListener('beforeunload', () => {
    audioManager.stopAll();
});

window.addEventListener('DOMContentLoaded', () => {
    // 3. अगर यह पेज iframe में लोड हुआ है तो PWA इंस्टॉल बैनर छिपा दें
    if (window.self !== window.top) {
        if (elements.pwaBanner) {
            elements.pwaBanner.classList.add('hidden');
        }
    }
    
    initPreloadSequence();
    
    // 4. आईफ़्रेम के अंदर अनावश्यक रूप से डबल सर्विस वर्कर को रजिस्टर न करें
    if (window.self === window.top && 'serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(() => console.log('SW Registered'))
            .catch(() => console.warn('SW registration failed'));
    }
});