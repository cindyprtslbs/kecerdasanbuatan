// Disease Knowledge Base for Backward Chaining
const DISEASE_KNOWLEDGE_BASE = {
  "Pilek Biasa": {
    icon: "fas fa-virus",
    keySymptoms: ["hidung_berair_bening", "bersin_ringan", "hidung_tersumbat_ringan"],
    confirmingSymptoms: ["tenggorokan_gatal_ringan", "batuk_kering_ringan", "kelelahan_ringan"],
    excludingSymptoms: ["demam_tinggi_38_5", "nyeri_otot_seluruh_tubuh", "sesak_napas_istirahat"],
    differentialQuestions: [
      "Apakah demam Anda di bawah 38°C atau tidak ada demam sama sekali?",
      "Apakah gejala berkembang secara bertahap dalam 1-2 hari?",
      "Apakah cairan hidung jernih dan encer seperti air?",
    ],
    priority: 1,
  },

  Influenza: {
    icon: "fas fa-thermometer-half",
    keySymptoms: ["demam_tinggi_38_5", "nyeri_otot_seluruh_tubuh", "kelelahan_sangat_berat"],
    confirmingSymptoms: ["demam_mendadak_24jam", "menggigil_hebat", "sakit_kepala_berat"],
    excludingSymptoms: ["hidung_berair_bening", "bersin_beruntun", "gejala_bertahap"],
    differentialQuestions: [
      "Apakah gejala muncul secara tiba-tiba dalam 24 jam?",
      "Apakah Anda merasa sangat lemah hingga sulit bangkit dari tempat tidur?",
      "Apakah seluruh tubuh terasa nyeri dan pegal?",
    ],
    priority: 2,
  },

  "Rinitis Alergi": {
    icon: "fas fa-allergies",
    keySymptoms: ["bersin_beruntun_5_lebih", "mata_gatal_berair", "hidung_gatal_dalam"],
    confirmingSymptoms: ["gejala_musiman", "reaksi_alergen", "hidung_tersumbat_bergantian"],
    excludingSymptoms: ["demam_tinggi", "nyeri_tenggorokan_berat", "dahak_kental"],
    differentialQuestions: [
      "Apakah gejala memburuk pada musim tertentu atau saat terkena debu?",
      "Apakah Anda bersin beruntun 5 kali atau lebih dalam satu episode?",
      "Apakah mata dan hidung gatal secara bersamaan?",
    ],
    priority: 3,
  },

  "Sinusitis Akut": {
    icon: "fas fa-head-side-mask",
    keySymptoms: ["nyeri_wajah_pipi_dahi", "ingus_kental_kuning_hijau", "hidung_tersumbat_unilateral"],
    confirmingSymptoms: ["nyeri_bertambah_membungkuk", "kehilangan_penciuman", "nyeri_gigi_atas"],
    excludingSymptoms: ["bersin_beruntun", "mata_gatal", "gejala_ringan_saja"],
    differentialQuestions: [
      "Apakah nyeri wajah bertambah saat membungkuk atau menunduk?",
      "Apakah ingus berwarna kuning kehijauan dan kental?",
      "Apakah hidung tersumbat lebih dominan pada satu sisi?",
    ],
    priority: 4,
  },

  "Bronkitis Akut": {
    icon: "fas fa-lungs-virus",
    keySymptoms: ["batuk_produktif_dahak", "dahak_kuning_hijau", "batuk_memburuk_malam"],
    confirmingSymptoms: ["dada_terasa_berat", "sesak_napas_ringan", "bunyi_napas_kasar"],
    excludingSymptoms: ["suara_serak", "kehilangan_suara", "nyeri_wajah"],
    differentialQuestions: [
      "Apakah batuk mengeluarkan dahak yang kental?",
      "Apakah batuk memburuk di malam hari?",
      "Apakah dada terasa berat atau sesak saat batuk?",
    ],
    priority: 5,
  },

  "Faringitis Akut": {
    icon: "fas fa-throat",
    keySymptoms: ["sakit_tenggorokan_menelan", "tenggorokan_merah_bengkak", "kesulitan_menelan"],
    confirmingSymptoms: ["amandel_bengkak", "kelenjar_leher_bengkak", "bercak_putih_tenggorokan"],
    excludingSymptoms: ["hidung_berair", "bersin_beruntun", "suara_serak"],
    differentialQuestions: [
      "Apakah rasa sakit tenggorokan sangat hebat saat menelan?",
      "Apakah tenggorokan tampak merah dan bengkak?",
      "Apakah ada kesulitan menelan makanan atau minuman?",
    ],
    priority: 6,
  },

  "Laringitis Akut": {
    icon: "fas fa-microphone-slash",
    keySymptoms: ["suara_serak_parau", "kehilangan_suara", "batuk_kering_menggonggong"],
    confirmingSymptoms: ["tenggorokan_kering_kasar", "nyeri_berbicara", "sensasi_ganjal"],
    excludingSymptoms: ["kesulitan_menelan_berat", "amandel_bengkak", "kelenjar_bengkak"],
    differentialQuestions: [
      "Apakah suara Anda serak atau bahkan hilang sama sekali?",
      "Apakah batuk berbunyi kering seperti gonggongan?",
      "Apakah tenggorokan terasa kering dan kasar?",
    ],
    priority: 7,
  },

  "Pneumonia Ringan": {
    icon: "fas fa-x-ray",
    keySymptoms: ["batuk_dahak_berkarat", "sesak_napas_istirahat", "nyeri_dada_napas_dalam"],
    confirmingSymptoms: ["demam_tinggi_menggigil", "kelelahan_berat", "berkeringat_malam"],
    excludingSymptoms: ["gejala_ringan_saja", "tidak_ada_demam", "aktivitas_normal"],
    differentialQuestions: [
      "Apakah dahak berwarna seperti karat atau kecoklatan?",
      "Apakah Anda sesak napas bahkan saat istirahat?",
      "Apakah dada terasa nyeri tajam saat menarik napas dalam?",
    ],
    priority: 8,
  },

  "Asma Eksaserbasi": {
    icon: "fas fa-wind",
    keySymptoms: ["sesak_napas_mendadak", "bunyi_mengi_ekspirasi", "batuk_kering_malam"],
    confirmingSymptoms: ["dada_tertekan", "kesulitan_bicara_penuh", "riwayat_asma"],
    excludingSymptoms: ["dahak_kental_purulen", "demam_tinggi", "nyeri_wajah"],
    differentialQuestions: [
      "Apakah sesak napas muncul secara tiba-tiba?",
      "Apakah ada bunyi 'ngik-ngik' saat mengeluarkan napas?",
      "Apakah Anda memiliki riwayat asma sebelumnya?",
    ],
    priority: 9,
  },

  "PPOK Eksaserbasi": {
    icon: "fas fa-smoking",
    keySymptoms: ["sesak_napas_progresif", "batuk_kronik_pagi", "dahak_purulen"],
    confirmingSymptoms: ["riwayat_merokok_lama", "barrel_chest", "clubbing_jari"],
    excludingSymptoms: ["gejala_akut_mendadak", "tidak_ada_riwayat_merokok", "usia_muda"],
    differentialQuestions: [
      "Apakah Anda memiliki riwayat merokok lebih dari 10 tahun?",
      "Apakah sesak napas semakin memburuk secara bertahap?",
      "Apakah batuk berdahak terutama di pagi hari sudah berlangsung lama?",
    ],
    priority: 10,
  },
}

// Symptom mapping for initial screening
const INITIAL_SYMPTOM_MAPPING = {
  fever_high: ["demam_tinggi_38_5", "demam_mendadak_24jam"],
  body_ache: ["nyeri_otot_seluruh_tubuh", "kelelahan_sangat_berat"],
  severe_fatigue: ["kelelahan_sangat_berat", "kelelahan_berat"],
  runny_nose: ["hidung_berair_bening", "hidung_berair_encer"],
  nasal_congestion: ["hidung_tersumbat_ringan", "hidung_tersumbat_berat"],
  sneezing: ["bersin_ringan", "bersin_beruntun_5_lebih"],
  facial_pain: ["nyeri_wajah_pipi_dahi", "tekanan_kepala_depan"],
  cough_dry: ["batuk_kering_ringan", "batuk_kering_persisten"],
  cough_productive: ["batuk_produktif_dahak", "dahak_kuning_hijau"],
  shortness_breath: ["sesak_napas_istirahat", "sesak_napas_aktivitas"],
  wheezing: ["bunyi_mengi_ekspirasi", "bunyi_napas_mengi"],
  sore_throat: ["sakit_tenggorokan_menelan", "tenggorokan_merah_bengkak"],
  hoarse_voice: ["suara_serak_parau", "kehilangan_suara"],
  difficulty_swallowing: ["kesulitan_menelan_makanan", "nyeri_menelan"],
}

// Backward Chaining Diagnosis System
class BackwardChainingDiagnosisSystem {
  constructor() {
    this.knownFacts = new Map()
    this.hypotheses = []
    this.eliminatedDiseases = new Set()
    this.confirmedDiseases = new Set()
    this.currentHypothesis = null
    this.questionHistory = []
    this.questionsAsked = 0
    this.initialSymptoms = []
  }

  // Initialize hypotheses based on initial symptoms
  initializeHypotheses(selectedSymptoms) {
    this.initialSymptoms = selectedSymptoms
    const hypothesesScores = new Map()

    // Score each disease based on initial symptoms
    Object.entries(DISEASE_KNOWLEDGE_BASE).forEach(([disease, config]) => {
      let score = 0

      selectedSymptoms.forEach((symptom) => {
        const mappedSymptoms = INITIAL_SYMPTOM_MAPPING[symptom] || []

        // Check if any mapped symptoms match key symptoms
        const keyMatches = mappedSymptoms.filter((ms) => config.keySymptoms.includes(ms)).length

        // Check if any mapped symptoms match confirming symptoms
        const confirmingMatches = mappedSymptoms.filter((ms) => config.confirmingSymptoms.includes(ms)).length

        score += keyMatches * 3 + confirmingMatches * 1
      })

      if (score > 0) {
        hypothesesScores.set(disease, score)
      }
    })

    // Sort hypotheses by score and priority
    this.hypotheses = Array.from(hypothesesScores.entries())
      .sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1] // Sort by score first
        return DISEASE_KNOWLEDGE_BASE[a[0]].priority - DISEASE_KNOWLEDGE_BASE[b[0]].priority
      })
      .map(([disease]) => disease)

    // If no strong hypotheses, include all diseases
    if (this.hypotheses.length === 0) {
      this.hypotheses = Object.keys(DISEASE_KNOWLEDGE_BASE).sort(
        (a, b) => DISEASE_KNOWLEDGE_BASE[a].priority - DISEASE_KNOWLEDGE_BASE[b].priority,
      )
    }

    this.currentHypothesis = this.hypotheses[0]
  }

  // Get next question using backward chaining strategy
  getNextQuestion() {
    if (!this.currentHypothesis) {
      return null
    }

    const config = DISEASE_KNOWLEDGE_BASE[this.currentHypothesis]

    // Strategy 1: Ask differential questions first
    for (const question of config.differentialQuestions) {
      if (!this.isQuestionAsked(question)) {
        return {
          question: question,
          type: "differential",
          hypothesis: this.currentHypothesis,
          context: `Untuk mengkonfirmasi/mengeliminasi: ${this.currentHypothesis}`,
        }
      }
    }

    // Strategy 2: Ask about key symptoms
    for (const symptom of config.keySymptoms) {
      if (!this.knownFacts.has(symptom)) {
        return {
          question: this.getSymptomQuestion(symptom),
          type: "key_symptom",
          symptom: symptom,
          hypothesis: this.currentHypothesis,
          context: `Gejala kunci untuk: ${this.currentHypothesis}`,
        }
      }
    }

    // Strategy 3: Ask about excluding symptoms
    for (const symptom of config.excludingSymptoms) {
      if (!this.knownFacts.has(symptom)) {
        return {
          question: this.getSymptomQuestion(symptom),
          type: "excluding_symptom",
          symptom: symptom,
          hypothesis: this.currentHypothesis,
          context: `Untuk mengeliminasi: ${this.currentHypothesis}`,
        }
      }
    }

    // Strategy 4: Ask about confirming symptoms
    for (const symptom of config.confirmingSymptoms) {
      if (!this.knownFacts.has(symptom)) {
        return {
          question: this.getSymptomQuestion(symptom),
          type: "confirming_symptom",
          symptom: symptom,
          hypothesis: this.currentHypothesis,
          context: `Gejala pendukung untuk: ${this.currentHypothesis}`,
        }
      }
    }

    return null
  }

  // Check if a question has been asked
  isQuestionAsked(question) {
    return this.questionHistory.some((q) => q.question === question)
  }

  // Get symptom question from knowledge base
  getSymptomQuestion(symptom) {
    const symptomQuestions = {
      // Fever and systemic symptoms
      demam_tinggi_38_5: "Apakah suhu tubuh Anda 38.5°C atau lebih tinggi?",
      demam_mendadak_24jam: "Apakah demam muncul secara tiba-tiba dalam 24 jam terakhir?",
      nyeri_otot_seluruh_tubuh: "Apakah seluruh otot tubuh terasa sangat nyeri dan pegal?",
      kelelahan_sangat_berat: "Apakah Anda merasa sangat lelah hingga sulit bangkit dari tempat tidur?",
      menggigil_hebat: "Apakah Anda menggigil hebat hingga tubuh gemetar tidak terkontrol?",
      sakit_kepala_berat: "Apakah sakit kepala Anda sangat mengganggu dan berdenyut-denyut?",

      // Nasal symptoms
      hidung_berair_bening: "Apakah hidung mengeluarkan cairan bening dan encer seperti air?",
      bersin_ringan: "Apakah Anda bersin sesekali (1-3 kali) dalam sehari?",
      bersin_beruntun_5_lebih: "Apakah Anda bersin beruntun 5 kali atau lebih dalam satu episode?",
      hidung_tersumbat_ringan: "Apakah hidung tersumbat ringan namun masih bisa bernapas?",
      hidung_tersumbat_berat: "Apakah hidung tersumbat total sehingga harus bernapas melalui mulut?",
      hidung_tersumbat_unilateral: "Apakah hidung tersumbat total hanya pada satu sisi?",
      mata_gatal_berair: "Apakah mata gatal dan berair secara bersamaan?",
      hidung_gatal_dalam: "Apakah bagian dalam hidung terasa sangat gatal?",

      // Sinus symptoms
      nyeri_wajah_pipi_dahi: "Apakah wajah terasa nyeri terutama di area pipi, dahi, atau sekitar mata?",
      ingus_kental_kuning_hijau: "Apakah ingus kental dan berwarna kuning kehijauan?",
      nyeri_bertambah_membungkuk: "Apakah nyeri kepala/wajah bertambah saat membungkuk?",
      kehilangan_penciuman: "Apakah Anda kehilangan kemampuan mencium bau?",
      nyeri_gigi_atas: "Apakah gigi bagian atas terasa nyeri atau ngilu?",

      // Throat symptoms
      sakit_tenggorokan_menelan: "Apakah rasa sakit tenggorokan sangat hebat saat menelan?",
      tenggorokan_merah_bengkak: "Apakah tenggorokan terlihat merah dan bengkak?",
      kesulitan_menelan_makanan: "Apakah kesulitan atau takut menelan makanan karena sakit?",
      amandel_bengkak: "Apakah amandel (tonsil) tampak bengkak dan merah?",
      kelenjar_leher_bengkab: "Apakah kelenjar getah bening di leher bengkak dan nyeri?",
      bercak_putih_tenggorokan: "Apakah ada bercak putih atau kuning di tenggorokan?",

      // Voice symptoms
      suara_serak_parau: "Apakah suara serak, parau, atau berubah dari biasanya?",
      kehilangan_suara: "Apakah kehilangan suara atau hanya bisa berbisik?",
      batuk_kering_menggonggong: "Apakah batuk kering dan berbunyi seperti gonggongan?",
      tenggorokan_kering_kasar: "Apakah tenggorokan terasa kering dan kasar seperti amplas?",

      // Respiratory symptoms
      batuk_produktif_dahak: "Apakah batuk mengeluarkan dahak yang kental?",
      dahak_kuning_hijau: "Apakah dahak berwarna kuning kehijauan terutama di pagi hari?",
      batuk_memburuk_malam: "Apakah batuk memburuk atau lebih sering di malam hari?",
      batuk_dahak_berkarat: "Apakah dahak berwarna seperti karat besi atau kecoklatan?",
      sesak_napas_istirahat: "Apakah sesak napas bahkan saat istirahat?",
      sesak_napas_mendadak: "Apakah sesak napas muncul secara tiba-tiba?",
      bunyi_mengi_ekspirasi: "Apakah ada bunyi 'ngik-ngik' saat mengeluarkan napas?",
      nyeri_dada_napas_dalam: "Apakah dada terasa nyeri tajam saat menarik napas dalam?",

      // Chronic symptoms
      riwayat_merokok_lama: "Apakah memiliki riwayat merokok >10 tahun atau perokok berat?",
      sesak_napas_progresif: "Apakah sesak napas semakin memburuk secara bertahap?",
      batuk_kronik_pagi: "Apakah batuk berdahak kronik terutama pagi hari >3 bulan?",
      dahak_purulen: "Apakah dahak kental, bernanah, dan berwarna kuning-hijau?",
      riwayat_asma: "Apakah memiliki riwayat asma atau pernah didiagnosis asma?",
    }

    return symptomQuestions[symptom] || `Apakah Anda mengalami gejala: ${symptom}?`
  }

  // Process answer and update knowledge base
  processAnswer(question, answer, questionData) {
    this.questionsAsked++

    // Record the answer
    this.questionHistory.push({
      question: question,
      answer: answer,
      type: questionData.type,
      hypothesis: questionData.hypothesis,
      timestamp: Date.now(),
    })

    // Update known facts if it's a symptom question
    if (questionData.symptom) {
      this.knownFacts.set(questionData.symptom, answer)
    }

    // Evaluate current hypothesis
    this.evaluateCurrentHypothesis()

    // Move to next hypothesis if current one is eliminated or confirmed
    if (this.eliminatedDiseases.has(this.currentHypothesis) || this.confirmedDiseases.has(this.currentHypothesis)) {
      this.moveToNextHypothesis()
    }
  }

  // Evaluate current hypothesis based on known facts
  evaluateCurrentHypothesis() {
    if (!this.currentHypothesis) return

    const config = DISEASE_KNOWLEDGE_BASE[this.currentHypothesis]
    let keySymptomMatches = 0
    let keySymptomTotal = 0
    let excludingSymptomPresent = false

    // Check key symptoms
    config.keySymptoms.forEach((symptom) => {
      if (this.knownFacts.has(symptom)) {
        keySymptomTotal++
        if (this.knownFacts.get(symptom)) {
          keySymptomMatches++
        }
      }
    })

    // Check excluding symptoms
    config.excludingSymptoms.forEach((symptom) => {
      if (this.knownFacts.has(symptom) && this.knownFacts.get(symptom)) {
        excludingSymptomPresent = true
      }
    })

    // Elimination criteria
    if (excludingSymptomPresent) {
      this.eliminatedDiseases.add(this.currentHypothesis)
      return
    }

    // If we have enough information about key symptoms
    if (keySymptomTotal >= Math.min(3, config.keySymptoms.length)) {
      const keySymptomRatio = keySymptomMatches / keySymptomTotal

      if (keySymptomRatio < 0.3) {
        this.eliminatedDiseases.add(this.currentHypothesis)
      } else if (keySymptomRatio >= 0.7 && keySymptomMatches >= 2) {
        // Additional confirmation for high-confidence diagnosis
        let confirmingMatches = 0
        let confirmingTotal = 0

        config.confirmingSymptoms.forEach((symptom) => {
          if (this.knownFacts.has(symptom)) {
            confirmingTotal++
            if (this.knownFacts.get(symptom)) {
              confirmingMatches++
            }
          }
        })

        if (confirmingTotal === 0 || confirmingMatches / confirmingTotal >= 0.5) {
          this.confirmedDiseases.add(this.currentHypothesis)
        }
      }
    }
  }

  // Move to next hypothesis
  moveToNextHypothesis() {
    const remainingHypotheses = this.hypotheses.filter(
      (h) => !this.eliminatedDiseases.has(h) && !this.confirmedDiseases.has(h),
    )

    this.currentHypothesis = remainingHypotheses.length > 0 ? remainingHypotheses[0] : null
  }

  // Check if diagnosis should continue
  shouldContinue() {
    // Stop if we have a confirmed diagnosis
    if (this.confirmedDiseases.size > 0) {
      return false
    }

    // Stop if no more hypotheses to test
    if (!this.currentHypothesis) {
      return false
    }

    // Stop if we've asked too many questions
    if (this.questionsAsked >= 15) {
      return false
    }

    return true
  }

  // Get diagnosis result
  getDiagnosisResult() {
    if (this.confirmedDiseases.size > 0) {
      return {
        type: "confirmed",
        disease: Array.from(this.confirmedDiseases)[0],
        confidence: "high",
      }
    }

    // If no confirmed diagnosis, return the most likely remaining hypothesis
    const remainingHypotheses = this.hypotheses.filter((h) => !this.eliminatedDiseases.has(h))

    if (remainingHypotheses.length > 0) {
      return {
        type: "probable",
        disease: remainingHypotheses[0],
        confidence: "moderate",
        alternatives: remainingHypotheses.slice(1, 3),
      }
    }

    return {
      type: "inconclusive",
      eliminated: Array.from(this.eliminatedDiseases),
    }
  }

  // Get current status
  getStatus() {
    return {
      currentHypothesis: this.currentHypothesis,
      eliminatedCount: this.eliminatedDiseases.size,
      remainingCount: this.hypotheses.length - this.eliminatedDiseases.size - this.confirmedDiseases.size,
      questionsAsked: this.questionsAsked,
      hypotheses: this.hypotheses,
      eliminated: Array.from(this.eliminatedDiseases),
      confirmed: Array.from(this.confirmedDiseases),
    }
  }

  // Reset system
  reset() {
    this.knownFacts.clear()
    this.hypotheses = []
    this.eliminatedDiseases.clear()
    this.confirmedDiseases.clear()
    this.currentHypothesis = null
    this.questionHistory = []
    this.questionsAsked = 0
    this.initialSymptoms = []
  }
}

// Treatment recommendations (same as before)
const TREATMENT_RECOMMENDATIONS = {
  "Pilek Biasa": {
    treatment:
      "Istirahat 3-5 hari, minum cairan hangat 2-3 liter/hari, paracetamol 500mg setiap 6 jam untuk nyeri kepala. Semprot hidung saline 3-4x/hari.",
    warning: "Konsultasi dokter jika gejala memburuk setelah 7 hari, demam >38.5°C, atau muncul sesak napas.",
    prevention: "Cuci tangan teratur, hindari menyentuh wajah, jaga jarak dari orang sakit.",
  },
  Influenza: {
    treatment:
      "Istirahat total 7-10 hari, minum cairan 3-4 liter/hari, paracetamol 500mg setiap 6 jam. Oseltamivir dalam 48 jam pertama jika tersedia.",
    warning: "SEGERA ke dokter jika: demam >39°C >3 hari, sesak napas, nyeri dada, dehidrasi berat.",
    prevention: "Vaksinasi flu tahunan, hindari kerumunan saat musim flu, masker di tempat umum.",
  },
  "Rinitis Alergi": {
    treatment:
      "Hindari alergen, antihistamin oral (loratadine 10mg/hari), semprot hidung kortikosteroid, semprot hidung saline.",
    warning: "Konsultasi dokter jika gejala mengganggu tidur/aktivitas atau muncul gejala asma.",
    prevention: "Identifikasi alergen dengan tes kulit, gunakan air purifier HEPA, hindari karpet tebal.",
  },
  "Sinusitis Akut": {
    treatment:
      "Kompres hangat wajah 15-20 menit 3x/hari, semprot hidung saline hipertonik, posisi tidur kepala tinggi. Antibiotik jika gejala >10 hari.",
    warning: "SEGERA ke dokter jika: nyeri wajah hebat, demam tinggi, pembengkakan wajah, gangguan penglihatan.",
    prevention: "Obati pilek dengan baik, jaga kelembaban udara 40-50%, hindari asap rokok.",
  },
  "Bronkitis Akut": {
    treatment: "Istirahat, minum air hangat 2-3 liter/hari, madu untuk batuk, humidifier. Hindari asap rokok.",
    warning: "Ke dokter jika: sesak napas, dahak berdarah, demam tinggi >3 hari, atau batuk >3 minggu.",
    prevention:
      "Hindari merokok dan asap rokok, vaksinasi influenza tahunan, cuci tangan teratur, hindari polusi udara.",
  },
  "Faringitis Akut": {
    treatment:
      "Berkumur air garam hangat 4-6x/hari, minum air hangat, hindari makanan pedas/asam. Paracetamol untuk nyeri. Antibiotik jika strep throat terkonfirmasi.",
    warning: "Ke dokter jika: kesulitan menelan berat, air liur berlebihan, demam tinggi, bercak putih di tenggorokan.",
    prevention:
      "Hindari berbagi alat makan/minum, jaga kebersihan mulut, hindari kontak dengan penderita strep throat.",
  },
  "Laringitis Akut": {
    treatment:
      "Istirahat suara total 2-3 hari, minum air hangat, hindari kafein/alkohol, humidifier, hindari berdehem.",
    warning: "Konsultasi dokter jika: kehilangan suara >2 minggu, kesulitan menelan, sesak napas, atau demam tinggi.",
    prevention: "Hindari berteriak/berbicara keras berlebihan, jaga kelembaban tenggorokan, hindari asap rokok.",
  },
  "Pneumonia Ringan": {
    treatment:
      "WAJIB konsultasi dokter untuk antibiotik yang tepat. Istirahat total, minum cairan 3-4 liter/hari, paracetamol untuk demam.",
    warning: "SEGERA ke IGD jika: sesak napas berat, saturasi oksigen <95%, kebingungan, tekanan darah turun.",
    prevention:
      "Vaksinasi pneumokokus (terutama >65 tahun), vaksinasi influenza, hindari merokok, jaga kebersihan tangan.",
  },
  "Asma Eksaserbasi": {
    treatment:
      "Bronkodilator kerja cepat (salbutamol inhaler 2-4 puff setiap 20 menit), posisi duduk tegak, hindari pemicu.",
    warning:
      "SEGERA ke IGD jika: tidak bisa bicara kalimat penuh, saturasi oksigen <95%, sianosis, atau tidak membaik dengan bronkodilator.",
    prevention:
      "Identifikasi dan hindari pemicu, gunakan controller medication teratur, peak flow monitoring, action plan tertulis.",
  },
  "PPOK Eksaserbasi": {
    treatment:
      "WAJIB konsultasi dokter. Bronkodilator kerja cepat, kortikosteroid oral, antibiotik jika dahak purulen. Oksigen jika saturasi <88-92%.",
    warning: "SEGERA ke IGD jika: sesak napas berat, sianosis, kebingungan, edema tungkai baru, atau gagal napas.",
    prevention:
      "BERHENTI MEROKOK (paling penting), vaksinasi influenza dan pneumokokus, rehabilitasi paru, hindari polusi udara.",
  },
}

// Main Application Class
class BackwardChainingDiagnosisApp {
  constructor() {
    this.diagnosisSystem = new BackwardChainingDiagnosisSystem()
    this.currentStep = "welcome"
    this.selectedInitialSymptoms = []
    this.currentQuestionData = null
    this.initializeElements()
    this.bindEvents()
  }

  initializeElements() {
    // Screens
    this.welcomeScreen = document.getElementById("welcome-screen")
    this.initialScreen = document.getElementById("initial-screen")
    this.diagnosisScreen = document.getElementById("diagnosis-screen")
    this.resultScreen = document.getElementById("result-screen")

    // Welcome screen
    this.startButton = document.getElementById("start-diagnosis")

    // Initial symptoms screen
    this.symptomButtons = document.querySelectorAll(".symptom-btn")
    this.selectedSymptomsDiv = document.getElementById("selected-symptoms")
    this.selectedList = document.getElementById("selected-list")
    this.continueButton = document.getElementById("continue-diagnosis")

    // Diagnosis screen
    this.questionCounter = document.getElementById("question-counter")
    this.progressPercentage = document.getElementById("progress-percentage")
    this.progressFill = document.getElementById("progress-fill")
    this.currentHypothesisSpan = document.getElementById("current-hypothesis")
    this.eliminatedCount = document.getElementById("eliminated-count")
    this.remainingCount = document.getElementById("remaining-count")
    this.currentHypothesisDetail = document.getElementById("current-hypothesis-detail")
    this.currentQuestionElement = document.getElementById("current-question")
    this.questionContext = document.getElementById("question-context")
    this.answerYesButton = document.getElementById("answer-yes")
    this.answerNoButton = document.getElementById("answer-no")
    this.diseaseStatus = document.getElementById("disease-status")

    // Result screen
    this.resultIcon = document.getElementById("result-icon")
    this.resultContent = document.getElementById("result-content")
    this.resetButton = document.getElementById("reset-diagnosis")
    this.consultButton = document.getElementById("consult-doctor")
  }

  bindEvents() {
    this.startButton.addEventListener("click", () => this.startInitialScreening())

    this.symptomButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => this.toggleSymptom(e.target))
    })

    this.continueButton.addEventListener("click", () => this.startBackwardChaining())
    this.answerYesButton.addEventListener("click", () => this.answerQuestion(true))
    this.answerNoButton.addEventListener("click", () => this.answerQuestion(false))
    this.resetButton.addEventListener("click", () => this.resetDiagnosis())
    this.consultButton.addEventListener("click", () => {
      window.open("https://www.halodoc.com", "_blank")
    })
  }

  showScreen(screenName) {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active")
    })
    document.getElementById(`${screenName}-screen`).classList.add("active")
    this.currentStep = screenName
  }

  startInitialScreening() {
    this.showScreen("initial")
    this.selectedInitialSymptoms = []
    this.updateSelectedSymptoms()
  }

  toggleSymptom(button) {
    const symptom = button.dataset.symptom

    if (button.classList.contains("selected")) {
      button.classList.remove("selected")
      this.selectedInitialSymptoms = this.selectedInitialSymptoms.filter((s) => s !== symptom)
    } else {
      button.classList.add("selected")
      this.selectedInitialSymptoms.push(symptom)
    }

    this.updateSelectedSymptoms()
  }

  updateSelectedSymptoms() {
    if (this.selectedInitialSymptoms.length > 0) {
      this.selectedSymptomsDiv.style.display = "block"

      this.selectedList.innerHTML = this.selectedInitialSymptoms
        .map((symptom) => {
          const button = document.querySelector(`[data-symptom="${symptom}"]`)
          return `<span class="selected-tag">
          <i class="${button.querySelector("i").className}"></i>
          ${button.textContent.trim()}
        </span>`
        })
        .join("")
    } else {
      this.selectedSymptomsDiv.style.display = "none"
    }
  }

  startBackwardChaining() {
    if (this.selectedInitialSymptoms.length === 0) {
      alert("Silakan pilih minimal satu gejala untuk memulai diagnosis.")
      return
    }

    this.showScreen("diagnosis")
    this.diagnosisSystem.reset()
    this.diagnosisSystem.initializeHypotheses(this.selectedInitialSymptoms)
    this.askNextQuestion()
  }

  async askNextQuestion() {
    const questionData = this.diagnosisSystem.getNextQuestion()

    if (!questionData || !this.diagnosisSystem.shouldContinue()) {
      await this.showResult()
      return
    }

    this.currentQuestionData = questionData
    this.updateQuestionDisplay()
    this.updateProgress()
    this.updateHypothesisDisplay()
    this.updateEliminationPanel()
  }

  updateQuestionDisplay() {
    this.currentQuestionElement.textContent = this.currentQuestionData.question
    this.questionContext.textContent = this.currentQuestionData.context || ""

    this.currentQuestionElement.classList.add("fade-in")
    setTimeout(() => {
      this.currentQuestionElement.classList.remove("fade-in")
    }, 500)
  }

  updateProgress() {
    const maxQuestions = 15
    const progress = Math.min((this.diagnosisSystem.questionsAsked / maxQuestions) * 100, 95)

    this.questionCounter.textContent = `Pertanyaan ${this.diagnosisSystem.questionsAsked + 1}`
    this.progressPercentage.textContent = `${Math.round(progress)}%`
    this.progressFill.style.width = `${progress}%`
  }

  updateHypothesisDisplay() {
    const status = this.diagnosisSystem.getStatus()

    this.currentHypothesisSpan.textContent = status.currentHypothesis || "Selesai"
    this.eliminatedCount.textContent = status.eliminatedCount
    this.remainingCount.textContent = status.remainingCount

    if (status.currentHypothesis) {
      const config = DISEASE_KNOWLEDGE_BASE[status.currentHypothesis]
      this.currentHypothesisDetail.innerHTML = `
        <div class="hypothesis-detail">
          <strong><i class="${config.icon}"></i> ${status.currentHypothesis}</strong>
          <p style="margin-top: 5px; font-size: 0.9rem;">
            Sistem sedang menguji hipotesis ini dengan pertanyaan yang ditargetkan untuk mengkonfirmasi atau mengeliminasi diagnosis.
          </p>
        </div>
      `
    }
  }

  updateEliminationPanel() {
    const status = this.diagnosisSystem.getStatus()
    let html = ""

    status.hypotheses.forEach((disease) => {
      let statusClass, statusText

      if (status.confirmed.includes(disease)) {
        statusClass = "status-confirmed"
        statusText = "Terkonfirmasi"
      } else if (status.eliminated.includes(disease)) {
        statusClass = "status-eliminated"
        statusText = "Dieliminasi"
      } else {
        statusClass = "status-active"
        statusText = disease === status.currentHypothesis ? "Sedang Diuji" : "Menunggu"
      }

      html += `
        <div class="disease-status-item">
          <div class="disease-name">${disease}</div>
          <div class="disease-status ${statusClass}">${statusText}</div>
        </div>
      `
    })

    this.diseaseStatus.innerHTML = html
  }

  async answerQuestion(answer) {
    if (!this.currentQuestionData) return

    // Visual feedback
    const buttons = [this.answerYesButton, this.answerNoButton]
    buttons.forEach((btn) => btn.classList.add("loading"))

    this.diagnosisSystem.processAnswer(this.currentQuestionData.question, answer, this.currentQuestionData)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 800))

    buttons.forEach((btn) => btn.classList.remove("loading"))
    this.askNextQuestion()
  }

  async showResult() {
    this.showScreen("result")
    const result = this.diagnosisSystem.getDiagnosisResult()

    if (result.type === "confirmed") {
      this.showConfirmedDiagnosis(result)
    } else if (result.type === "probable") {
      this.showProbableDiagnosis(result)
    } else {
      this.showInconclusiveDiagnosis(result)
    }
  }

  showConfirmedDiagnosis(result) {
    const disease = result.disease
    const config = DISEASE_KNOWLEDGE_BASE[disease]
    const treatment = TREATMENT_RECOMMENDATIONS[disease]

    this.resultIcon.innerHTML = `<i class="${config.icon}"></i>`

    this.resultContent.innerHTML = `
      <div class="diagnosis-result">
        <div class="diagnosis-title">Diagnosis Terkonfirmasi (Backward Chaining):</div>
        <div class="diagnosis-name">${disease}</div>
        <div class="confidence-level">Tingkat Keyakinan: Tinggi (${result.confidence})</div>
      </div>
      
      <div class="symptom-match">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
          <i class="fas fa-check-double"></i>
          <strong>Metode Backward Chaining Berhasil:</strong>
        </div>
        <div style="font-size: 0.9rem; line-height: 1.6;">
          Sistem memulai dengan hipotesis <strong>${disease}</strong> berdasarkan gejala awal Anda, 
          kemudian mengajukan pertanyaan yang ditargetkan untuk mengkonfirmasi diagnosis ini.
          Semua kriteria kunci telah terpenuhi.
        </div>
      </div>
      
      <div class="info-box info-primary">
        <i class="fas fa-medkit"></i>
        <div>
          <strong>Rekomendasi Pengobatan:</strong><br>
          ${treatment.treatment}
        </div>
      </div>
      
      <div class="info-box info-warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <strong>Kapan Harus ke Dokter:</strong><br>
          ${treatment.warning}
        </div>
      </div>
      
      <div class="info-box info-secondary">
        <i class="fas fa-shield-alt"></i>
        <div>
          <strong>Pencegahan:</strong><br>
          ${treatment.prevention}
        </div>
      </div>
      
      <div class="analysis-summary">
        <i class="fas fa-brain"></i>
        <strong>Analisis Backward Chaining:</strong> Sistem menggunakan ${this.diagnosisSystem.questionsAsked} pertanyaan 
        yang ditargetkan untuk mengkonfirmasi hipotesis ${disease}. Metode ini lebih efisien dibandingkan forward chaining 
        karena fokus pada eliminasi dan konfirmasi hipotesis spesifik.
      </div>
    `
  }

  showProbableDiagnosis(result) {
    const disease = result.disease
    const config = DISEASE_KNOWLEDGE_BASE[disease]
    const treatment = TREATMENT_RECOMMENDATIONS[disease]

    this.resultIcon.innerHTML = `<i class="${config.icon}"></i>`

    let alternativesHtml = ""
    if (result.alternatives && result.alternatives.length > 0) {
      alternativesHtml = `
        <div style="margin-top: 15px;">
          <strong>Diagnosis Alternatif yang Perlu Dipertimbangkan:</strong><br>
          ${result.alternatives.map((alt) => `• ${alt}`).join("<br>")}
        </div>
      `
    }

    this.resultContent.innerHTML = `
      <div class="diagnosis-result">
        <div class="diagnosis-title">Diagnosis Paling Mungkin (Backward Chaining):</div>
        <div class="diagnosis-name">${disease}</div>
        <div class="confidence-level">Tingkat Keyakinan: ${result.confidence === "moderate" ? "Sedang" : "Rendah"}</div>
      </div>
      
      <div class="info-box info-primary">
        <i class="fas fa-info-circle"></i>
        <div>
          <strong>Hasil Analisis Backward Chaining:</strong><br>
          Berdasarkan eliminasi bertahap dari ${this.diagnosisSystem.getStatus().eliminatedCount} penyakit lain, 
          <strong>${disease}</strong> adalah diagnosis yang paling sesuai dengan pola gejala Anda.
          ${alternativesHtml}
        </div>
      </div>
      
      <div class="info-box info-primary">
        <i class="fas fa-medkit"></i>
        <div>
          <strong>Rekomendasi Pengobatan:</strong><br>
          ${treatment.treatment}
        </div>
      </div>
      
      <div class="info-box info-warning">
        <i class="fas fa-user-md"></i>
        <div>
          <strong>Rekomendasi Medis:</strong><br>
          Karena tingkat keyakinan sedang, disarankan untuk berkonsultasi dengan dokter untuk konfirmasi diagnosis 
          dan pemeriksaan lebih lanjut. ${treatment.warning}
        </div>
      </div>
      
      <div class="analysis-summary">
        <i class="fas fa-brain"></i>
        <strong>Proses Backward Chaining:</strong> Sistem mengeliminasi ${this.diagnosisSystem.getStatus().eliminatedCount} 
        penyakit dari ${this.diagnosisSystem.getStatus().hypotheses.length} hipotesis awal menggunakan 
        ${this.diagnosisSystem.questionsAsked} pertanyaan strategis.
      </div>
    `
  }

  showInconclusiveDiagnosis(result) {
    this.resultIcon.innerHTML = '<i class="fas fa-question-circle"></i>'

    const eliminatedList = result.eliminated.map((disease) => `• ${disease}`).join("<br>")

    this.resultContent.innerHTML = `
      <div class="info-box info-warning">
        <i class="fas fa-search"></i>
        <div>
          <strong>Hasil Backward Chaining: Tidak Konklusif</strong><br>
          Sistem telah mengeliminasi beberapa penyakit berdasarkan gejala yang tidak sesuai, 
          namun tidak dapat mengkonfirmasi diagnosis spesifik dengan keyakinan yang cukup.
        </div>
      </div>
      
      <div class="info-box info-secondary">
        <i class="fas fa-times-circle"></i>
        <div>
          <strong>Penyakit yang Telah Dieliminasi:</strong><br>
          ${eliminatedList}
        </div>
      </div>
      
      <div class="info-box info-primary">
        <i class="fas fa-user-md"></i>
        <div>
          <strong>Rekomendasi:</strong><br>
          • Konsultasi dengan dokter untuk pemeriksaan fisik dan tes diagnostik tambahan<br>
          • Kemungkinan kondisi yang tidak tercakup dalam sistem ini<br>
          • Gejala mungkin masih dalam tahap awal perkembangan<br>
          • Kombinasi beberapa kondisi ringan
        </div>
      </div>
      
      <div class="info-box info-success">
        <i class="fas fa-lightbulb"></i>
        <div>
          <strong>Keunggulan Metode yang Digunakan:</strong><br>
          Meskipun tidak menghasilkan diagnosis definitif, backward chaining berhasil mengeliminasi 
          ${result.eliminated.length} penyakit yang tidak sesuai, sehingga mempersempit kemungkinan 
          untuk evaluasi medis lebih lanjut.
        </div>
      </div>
      
      <div class="analysis-summary">
        <i class="fas fa-brain"></i>
        <strong>Efisiensi Backward Chaining:</strong> Sistem menggunakan ${this.diagnosisSystem.questionsAsked} 
        pertanyaan untuk mengeliminasi ${result.eliminated.length} dari ${this.diagnosisSystem.getStatus().hypotheses.length} 
        hipotesis awal, memberikan informasi berharga untuk konsultasi medis selanjutnya.
      </div>
    `
  }

  resetDiagnosis() {
    this.diagnosisSystem.reset()
    this.selectedInitialSymptoms = []
    this.currentQuestionData = null

    // Reset symptom buttons
    this.symptomButtons.forEach((btn) => {
      btn.classList.remove("selected")
    })

    this.showScreen("welcome")
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new BackwardChainingDiagnosisApp()
})
