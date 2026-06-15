// आपका नया डेटाबेस स्ट्रक्चर (Subjects -> Subcategories -> Chapters)
const appData = {
    "biology": {
        title: "जीव विज्ञान (Biology)",
        subcategories: [
            {
                name: "जीव विज्ञान 1 (Biology 1)",
                chapters: [
    { name: "कोशिका विज्ञान (Cytology)", path: "Biology/Biology1/CytologyQuiz/index.html" },
    { name: "कोशिका विज्ञान 1 (Cell 1)", path: "Biology/Biology1/Cell1/index.html" },
    { name: "Cell2", path: "Biology/Biology1/Cell2/index.html" }, // यह आपने नया जोड़ा
    { name: "मानव शरीर (जल्द आ रहा है)", path: "" }
]
            },
            {
                name: "जीव विज्ञान 2 (Biology 2)",
                chapters: [
                    { name: "पादप विज्ञान (जल्द आ रहा है)", path: "" }
                ]
            }
        ]
    },
    "GK GS": {
        title: "GK GS",
        subcategories: [
            {
                name: "Static GK",
                chapters: [
    { name: "Folkdances Part-1", path: "GK GS/Static GK/Folkdances1/index.html" },
    { name: "Folkdances Part-2", path: "GK GS/Static GK/Folkdances2/index.html" },
    { name: "Folkdances Part-3", path: "GK GS/Static GK/Folkdances3/index.html" }, // यह आपने नया जोड़ा
    { name: "Folkdances Part-4", path: "" }
]
            },
            {
                name: "History",
                chapters: [
                    { name: "Ancient History (जल्द आ रहा है)", path: "" }
                ]
            }
        ]
    },
    "physics": {
        title: "भौतिक विज्ञान (Physics)",
        subcategories: [
            {
                name: "भौतिक विज्ञान 1 (Physics 1)",
                chapters: [
                    { name: "प्रकाश (जल्द आ रहा है)", path: "" }
                ]
            }
        ]
    }
};

let currentSubject = "";
let currentSubcategoryIndex = null;

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active-screen');
    } else {
        console.error("Screen not found: " + screenId);
    }
}

// 1. सब्जेक्ट चुनने पर सब-कैटेगरी स्क्रीन दिखाना
function openSubject(subjectKey) {
    currentSubject = subjectKey;
    
    const subjectTitleEl = document.getElementById('subject-title');
    if (subjectTitleEl) {
        subjectTitleEl.innerText = appData[subjectKey].title;
    }
    
    const list = document.getElementById('subcategory-list');
    if (!list) {
        console.error("Error: subcategory-list element not found in HTML!");
        return;
    }
    list.innerHTML = "";
    
    appData[subjectKey].subcategories.forEach((sub, index) => {
        let btn = document.createElement('button');
        btn.className = "btn subject-btn"; 
        btn.innerText = sub.name;
        btn.onclick = () => openSubcategory(index);
        list.appendChild(btn);
    });
    
    showScreen('subcategory-screen');
}

// 2. सब-कैटेगरी चुनने पर चैप्टर स्क्रीन दिखाना
function openSubcategory(subIndex) {
    currentSubcategoryIndex = subIndex;
    const subcategory = appData[currentSubject].subcategories[subIndex];
    
    const subcategoryTitleEl = document.getElementById('subcategory-title');
    if (subcategoryTitleEl) {
        subcategoryTitleEl.innerText = subcategory.name;
    }
    
    const list = document.getElementById('chapter-list');
    if (!list) {
        console.error("Error: chapter-list element not found in HTML!");
        return;
    }
    list.innerHTML = "";
    
    subcategory.chapters.forEach(chapter => {
        let btn = document.createElement('button');
        btn.className = "btn chapter-btn";
        btn.innerText = chapter.name;
        
        if(chapter.path !== "") {
            btn.onclick = () => openQuiz(chapter.name, chapter.path);
        } else {
            btn.style.opacity = "0.6"; // जो अभी नहीं बने हैं उन्हें हल्का दिखाएं
        }
        
        list.appendChild(btn);
    });
    
    showScreen('chapter-screen');
}

// 3. क्विज शुरू करना
function openQuiz(chapterName, iframePath) {
    document.getElementById('quiz-title').innerText = chapterName;
    document.getElementById('quiz-frame').src = iframePath; 
    showScreen('quiz-screen');
}

// पीछे जाने के फंक्शन्स (Navigation)
function backToSubcategories() {
    showScreen('subcategory-screen');
}

function backToChapters() { 
    document.getElementById('quiz-frame').src = ""; 
    showScreen('chapter-screen'); 
}

function goHome() { 
    showScreen('home-screen'); 
        }
