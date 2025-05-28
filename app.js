class DiagnosisApp {
    constructor() {
        this.currentStep = 'welcome';
        this.checker = new SymptomChecker();
        this.currentQuestion = null;
        this.currentSymptom = null;
        this.progress = 0;
        this.diagnosis = null;
        this.questionsAsked = 0;
        this.resolveSymptom = null;

        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        // Screens
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.diagnosisScreen = document.getElementById('diagnosis-screen');
        this.resultScreen = document.getElementById('result-screen');

        // Welcome screen elements
        this.startButton = document.getElementById('start-diagnosis');

        // Diagnosis screen elements
        this.questionCounter = document.getElementById('question-counter');
        this.progressFill = document.getElementById('progress-fill');
        this.currentQuestionElement = document.getElementById('current-question');
        this.answerYesButton = document.getElementById('answer-yes');
        this.answerNoButton = document.getElementById('answer-no');

        // Result screen elements
        this.resultIcon = document.getElementById('result-icon');
        this.resultContent = document.getElementById('result-content');
        this.resetButton = document.getElementById('reset-diagnosis');
        this.consultButton = document.getElementById('consult-doctor');
    }

    bindEvents() {
        this.startButton.addEventListener('click', () => this.startDiagnosis());
        this.answerYesButton.addEventListener('click', () => this.answerQuestion(true));
        this.answerNoButton.addEventListener('click', () => this.answerQuestion(false));
        this.resetButton.addEventListener('click', () => this.resetDiagnosis());
        this.consultButton.addEventListener('click', () => {
            window.open('https://www.halodoc.com', '_blank');
        });
    }

    showScreen(screenName) {
        // Hide all screens
        this.welcomeScreen.classList.remove('active');
        this.diagnosisScreen.classList.remove('active');
        this.resultScreen.classList.remove('active');

        // Show target screen
        switch (screenName) {
            case 'welcome':
                this.welcomeScreen.classList.add('active');
                break;
            case 'diagnosis':
                this.diagnosisScreen.classList.add('active');
                break;
            case 'result':
                this.resultScreen.classList.add('active');
                break;
        }

        this.currentStep = screenName;
    }

    startDiagnosis() {
        this.showScreen('diagnosis');
        this.progress = 0;
        this.questionsAsked = 0;
        this.updateProgress();
        this.performDiagnosis();
    }

    async performDiagnosis() {
        let foundDiagnosis = null;

        for (const disease of POSSIBLE_DIAGNOSES) {
            if (foundDiagnosis) break;

            const result = await this.checker.proveGoal(disease, (symptomKey) => {
                return new Promise((resolve) => {
                    this.currentSymptom = symptomKey;
                    this.currentQuestion = SYMPTOM_QUESTIONS[symptomKey] || `Apakah Anda mengalami ${symptomKey}?`;
                    this.questionsAsked++;
                    this.updateProgress();
                    this.updateQuestionDisplay();

                    // Store the resolve function to be called when user answers
                    this.resolveSymptom = resolve;
                });
            });

            if (result) {
                foundDiagnosis = disease;
                break;
            }
        }

        this.diagnosis = foundDiagnosis;
        this.progress = 100;
        this.updateProgress();
        this.showResult();
    }

    updateProgress() {
        const progressPercentage = Math.min((this.questionsAsked / 20) * 100, 100);
        this.progressFill.style.width = `${progressPercentage}%`;
        this.questionCounter.textContent = `Pertanyaan ${this.questionsAsked}`;
    }

    updateQuestionDisplay() {
        this.currentQuestionElement.textContent = this.currentQuestion;
    }

    answerQuestion(answer) {
        if (this.currentSymptom) {
            this.checker.setKnownFact(this.currentSymptom, answer);
        }

        if (this.resolveSymptom) {
            this.resolveSymptom(answer);
            this.resolveSymptom = null;
        }
    }

    showResult() {
        this.showScreen('result');

        if (this.diagnosis) {
            // Positive diagnosis
            this.resultIcon.innerHTML = `
                <div class="result-icon-container positive">
                    <svg class="result-icon positive" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                </div>
            `;

            this.resultContent.innerHTML = `
                <div class="result-alert positive">
                    <svg class="result-alert-icon positive" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <div class="result-alert-content">
                        <strong>Diagnosis yang paling mungkin:</strong>
                        <div class="diagnosis-name">${this.diagnosis}</div>
                    </div>
                </div>
                <div class="result-alert">
                    <svg class="result-alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <div class="result-alert-content">
                        <strong>Rekomendasi:</strong> Segera konsultasikan hasil ini dengan dokter profesional untuk
                        mendapatkan diagnosis yang akurat dan penanganan yang tepat.
                    </div>
                </div>
            `;
        } else {
            // No diagnosis
            this.resultIcon.innerHTML = `
                <div class="result-icon-container negative">
                    <svg class="result-icon negative" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                </div>
            `;

            this.resultContent.innerHTML = `
                <div class="result-alert negative">
                    <svg class="result-alert-icon negative" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                    <div class="result-alert-content">
                        <strong>Tidak ada diagnosis yang cocok</strong> dengan gejala yang Anda berikan.
                    </div>
                </div>
                <div class="result-alert">
                    <svg class="result-alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <div class="result-alert-content">
                        Jika gejala terus berlanjut atau memburuk, segera konsultasikan dengan dokter untuk pemeriksaan
                        lebih lanjut.
                    </div>
                </div>
            `;
        }
    }

    resetDiagnosis() {
        this.currentStep = 'welcome';
        this.currentQuestion = null;
        this.currentSymptom = null;
        this.progress = 0;
        this.diagnosis = null;
        this.questionsAsked = 0;
        this.checker.reset();
        this.showScreen('welcome');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DiagnosisApp();
});