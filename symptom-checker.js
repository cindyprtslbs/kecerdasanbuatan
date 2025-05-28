class SymptomChecker {
    constructor() {
        this.knownFacts = {};
        this.diagnosedDiseases = new Set();
    }

    setKnownFact(symptomKey, value) {
        this.knownFacts[symptomKey] = value;
    }

    async askSymptom(symptomKey, askFunction) {
        // Jika gejala sudah diketahui, langsung kembalikan nilainya
        if (symptomKey in this.knownFacts) {
            return this.knownFacts[symptomKey];
        }

        // Jika belum diketahui, tanyakan kepada pengguna
        const answer = await askFunction(symptomKey);
        this.knownFacts[symptomKey] = answer;
        return answer;
    }

    async proveGoal(goal, askFunction) {
        // Jika tujuan sudah terbukti, tidak perlu dibuktikan lagi
        if (this.diagnosedDiseases.has(goal)) {
            return true;
        }

        // Periksa apakah goal adalah penyakit yang ada dalam aturan
        if (goal in RULES) {
            // Iterasi melalui setiap set premis untuk tujuan ini
            for (const premiseSet of RULES[goal]) {
                let allPremisesTrue = true;

                // Cek setiap premis (gejala) dalam set ini
                for (const symptomKey of premiseSet) {
                    // Pastikan gejala yang diminta ada dalam daftar pertanyaan
                    if (!(symptomKey in SYMPTOM_QUESTIONS)) {
                        console.warn(
                            `Peringatan: Gejala '${symptomKey}' tidak ada dalam daftar pertanyaan untuk diagnosis '${goal}'.`
                        );
                        allPremisesTrue = false;
                        break;
                    }

                    // Panggil askSymptom untuk mendapatkan nilai gejala
                    const symptomResult = await this.askSymptom(symptomKey, askFunction);
                    if (!symptomResult) {
                        allPremisesTrue = false;
                        break;
                    }
                }

                // Jika semua premis dalam set ini True, maka tujuan terbukti
                if (allPremisesTrue) {
                    this.diagnosedDiseases.add(goal);
                    return true;
                }
            }
            return false;
        } else {
            return false;
        }
    }

    reset() {
        this.knownFacts = {};
        this.diagnosedDiseases.clear();
    }
}