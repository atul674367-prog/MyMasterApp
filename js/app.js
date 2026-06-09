// आपका डेटाबेस
const appData = {
    "biology": {
        title: "जीव विज्ञान (Biology)",
        chapters: [
            // ध्यान दें: यहाँ हमने आपके फोल्डर का रास्ता (Path) दिया है
            { name: "कोशिका विज्ञान (Cytology)", path: "CytologyQuiz/index.html" },
            { name: "मानव शरीर (जल्द आ रहा है)", path: "" }
        ]
    },
    "physics": {
        title: "भौतिक विज्ञान (Physics)",
        chapters: [
            { name: "प्रकाश (जल्द आ रहा है)", path: "" }
        ]
    }
};

let currentSubject = "";

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
    document.getElementById(screenId).classList.add('active-screen');
}

function openSubject(subjectKey) {
    currentSubject = subjectKey;
    document.getElementById('subject-title').innerText = appData[subjectKey].title;
    
    const list = document.getElementById('chapter-list');
    list.innerHTML = "";
    
    appData[subjectKey].chapters.forEach(chapter => {
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

function openQuiz(chapterName, iframePath) {
    document.getElementById('quiz-title').innerText = chapterName;
    // आपके फोल्डर की फाइल iframe में लोड कर रहे हैं
    document.getElementById('quiz-frame').src = iframePath; 
    showScreen('quiz-screen');
}

function backToChapters() { 
    // पीछे जाते समय iframe खाली करें ताकि आपकी ऑडियो पीछे बजती न रहे
    document.getElementById('quiz-frame').src = ""; 
    showScreen('chapter-screen'); 
}

function goHome() { 
    showScreen('home-screen'); 
}
