// 10 Penyakit Pernapasan dengan Gejala Medis Akurat
const RESPIRATORY_DISEASES = {
  "Pilek Biasa (Common Cold)": {
    primary: [
      "hidung_berair_bening",
      "hidung_tersumbat_ringan",
      "bersin_ringan",
      "tenggorokan_gatal_ringan",
      "batuk_kering_ringan",
    ],
    secondary: ["demam_ringan_37_38", "sakit_kepala_ringan", "kelelahan_ringan", "hidung_gatal", "mata_berair_ringan"],
    minScore: 3,
    icon: "fas fa-virus",
    description: "Infeksi virus pada saluran pernapasan atas yang ringan",
    facts: "Disebabkan oleh rhinovirus (40%), coronavirus (20%), atau virus lainnya. Berlangsung 7-10 hari.",
    prevalence: "Sangat umum, 2-3 episode per tahun pada dewasa",
  },

  "Influenza (Flu)": {
    primary: [
      "demam_tinggi_38_5",
      "demam_mendadak_24jam",
      "nyeri_otot_seluruh_tubuh",
      "kelelahan_sangat_berat",
      "sakit_kepala_berat",
      "menggigil_hebat",
    ],
    secondary: [
      "batuk_kering_persisten",
      "sakit_tenggorokan_berat",
      "hidung_tersumbat_berat",
      "berkeringat_malam",
      "mual_muntah",
      "nafsu_makan_hilang_total",
    ],
    minScore: 4,
    icon: "fas fa-thermometer-half",
    description: "Infeksi virus influenza yang menyerang sistem pernapasan",
    facts: "Virus influenza A, B, atau C. Onset mendadak dengan gejala sistemik berat. Komplikasi: pneumonia.",
    prevalence: "Musiman, 5-20% populasi per tahun",
  },

  "Rinitis Alergi (Allergic Rhinitis)": {
    primary: ["bersin_beruntun_5_lebih", "hidung_gatal_dalam", "mata_gatal_berair", "hidung_berair_encer_jernih"],
    secondary: [
      "hidung_tersumbat_bergantian",
      "gatal_langit_mulut",
      "mata_merah_bengkak",
      "lingkaran_hitam_mata",
      "gejala_musiman_tertentu",
      "reaksi_debu_serbuk_sari",
    ],
    minScore: 3,
    icon: "fas fa-allergies",
    description: "Reaksi alergi pada mukosa hidung dan mata",
    facts: "Reaksi IgE terhadap alergen. Tipe: seasonal (serbuk sari) atau perennial (debu, tungau).",
    prevalence: "10-25% populasi, sering dimulai masa kanak-kanak",
  },

  "Sinusitis Akut": {
    primary: [
      "nyeri_wajah_pipi_dahi",
      "tekanan_kepala_depan",
      "hidung_tersumbat_total_unilateral",
      "ingus_kental_kuning_hijau",
    ],
    secondary: [
      "nyeri_bertambah_membungkuk",
      "kehilangan_penciuman_total",
      "bau_mulut_ingus",
      "nyeri_gigi_atas",
      "demam_sedang_38_39",
      "post_nasal_drip",
    ],
    minScore: 3,
    icon: "fas fa-head-side-mask",
    description: "Peradangan akut pada sinus paranasal",
    facts:
      "Komplikasi pilek/alergi. Bakteri: S.pneumoniae, H.influenzae. Durasi >10 hari atau memburuk setelah 5-7 hari.",
    prevalence: "12% dewasa per tahun, lebih sering musim dingin",
  },

  "Bronkitis Akut": {
    primary: [
      "batuk_produktif_dahak_kental",
      "dahak_kuning_hijau_pagi",
      "batuk_memburuk_malam",
      "dada_terasa_berat_sesak",
    ],
    secondary: [
      "sesak_napas_aktivitas_ringan",
      "bunyi_napas_mengi_wheezing",
      "nyeri_dada_saat_batuk",
      "kelelahan_sedang",
      "demam_ringan_subfebris",
      "batuk_berlangsung_2_3_minggu",
    ],
    minScore: 3,
    icon: "fas fa-lungs-virus",
    description: "Peradangan akut pada bronkus dan bronkiolus",
    facts:
      "90% virus (rhinovirus, influenza, RSV). 10% bakteri (M.pneumoniae, C.pneumoniae). Batuk dapat berlangsung 2-3 minggu.",
    prevalence: "5% dewasa per tahun, lebih tinggi pada perokok",
  },

  "Faringitis Akut": {
    primary: [
      "sakit_tenggorokan_menelan_berat",
      "tenggorokan_merah_bengkak",
      "kesulitan_menelan_makanan",
      "amandel_bengkak_merah",
    ],
    secondary: [
      "demam_tinggi_39_lebih",
      "kelenjar_leher_bengkak_nyeri",
      "bercak_putih_kuning_tenggorokan",
      "bau_mulut_tidak_sedap",
      "sakit_kepala_demam",
      "tidak_ada_batuk_pilek",
    ],
    minScore: 3,
    icon: "fas fa-throat",
    description: "Peradangan akut pada faring dan amandel",
    facts:
      "Virus (70%): EBV, adenovirus. Bakteri (30%): Streptococcus pyogenes (strep throat). Kriteria Centor untuk strep throat.",
    prevalence: "Sangat umum, terutama anak-anak dan remaja",
  },

  "Laringitis Akut": {
    primary: ["suara_serak_parau", "kehilangan_suara_total", "batuk_kering_menggonggong", "tenggorokan_kering_kasar"],
    secondary: [
      "nyeri_tenggorokan_berbicara",
      "sensasi_ganjal_tenggorokan",
      "batuk_memburuk_malam",
      "demam_ringan_subfebris",
      "kesulitan_bicara_keras",
      "rasa_terbakar_tenggorokan",
    ],
    minScore: 3,
    icon: "fas fa-microphone-slash",
    description: "Peradangan pada laring dan pita suara",
    facts: "Virus (95%): rhinovirus, influenza, parainfluenza. Penyebab: infeksi, overuse suara, GERD, alergi.",
    prevalence: "Umum pada dewasa muda, profesi pengguna suara",
  },

  "Pneumonia Ringan (Community-Acquired)": {
    primary: [
      "batuk_produktif_dahak_berkarat",
      "sesak_napas_istirahat",
      "nyeri_dada_tajam_napas_dalam",
      "demam_tinggi_menggigil_hebat",
    ],
    secondary: [
      "kelelahan_sangat_berat",
      "berkeringat_malam_banyak",
      "nafsu_makan_hilang_total",
      "mual_muntah_demam",
      "nyeri_otot_sendi",
      "kebingungan_lansia",
    ],
    minScore: 4,
    icon: "fas fa-x-ray",
    description: "Infeksi akut pada parenkim paru",
    facts:
      "Bakteri: S.pneumoniae (paling umum), H.influenzae, M.pneumoniae. Virus: influenza, RSV. Diagnosis: foto thorax.",
    prevalence: "1-4 per 1000 dewasa per tahun, mortalitas 1-5%",
  },

  "Asma Eksaserbasi": {
    primary: [
      "sesak_napas_mendadak",
      "bunyi_mengi_ekspirasi",
      "batuk_kering_malam_dini_hari",
      "dada_terasa_tertekan_sesak",
    ],
    secondary: [
      "kesulitan_bicara_kalimat_penuh",
      "penggunaan_otot_bantu_napas",
      "napas_cepat_dangkal",
      "cemas_gelisah_sesak",
      "trigger_alergen_cuaca_dingin",
      "riwayat_asma_sebelumnya",
    ],
    minScore: 3,
    icon: "fas fa-wind",
    description: "Eksaserbasi akut penyakit asma bronkial",
    facts:
      "Obstruksi reversibel saluran napas. Trigger: alergen, infeksi, cuaca, stress, obat. Peak flow <80% nilai terbaik.",
    prevalence: "8-10% populasi, onset biasanya masa kanak-kanak",
  },

  "PPOK Eksaserbasi (COPD)": {
    primary: [
      "sesak_napas_progresif_kronik",
      "batuk_produktif_kronik_pagi",
      "dahak_purulen_kuning_hijau",
      "riwayat_merokok_lama",
    ],
    secondary: [
      "barrel_chest_dada_tong",
      "clubbing_jari_tabuh",
      "sianosis_bibir_kuku",
      "kelelahan_kronik_berat",
      "penurunan_berat_badan",
      "infeksi_berulang_saluran_napas",
    ],
    minScore: 4,
    icon: "fas fa-smoking",
    description: "Eksaserbasi penyakit paru obstruktif kronik",
    facts:
      "Obstruksi ireversibel. Penyebab utama: merokok (85-90%). Spirometri: FEV1/FVC <70%. Stadium berdasarkan FEV1.",
    prevalence: "6-10% dewasa >40 tahun, penyebab kematian ke-4 dunia",
  },
}

// Gejala dengan pertanyaan medis yang spesifik dan terukur
const MEDICAL_SYMPTOMS = {
  // Gejala Demam dan Sistemik
  demam_tinggi_38_5: "Apakah suhu tubuh Anda 38.5°C atau lebih tinggi (diukur dengan termometer)?",
  demam_ringan_37_38: "Apakah Anda merasa demam ringan (37-38°C) atau badan hangat?",
  demam_sedang_38_39: "Apakah demam Anda sedang (38-39°C) disertai rasa tidak nyaman?",
  demam_mendadak_24jam: "Apakah demam muncul secara tiba-tiba dalam 24 jam terakhir?",
  menggigil_hebat: "Apakah Anda menggigil hebat hingga tubuh gemetar tidak terkontrol?",
  berkeringat_malam: "Apakah Anda berkeringat berlebihan di malam hari hingga membasahi pakaian?",

  // Gejala Nyeri dan Kelelahan
  nyeri_otot_seluruh_tubuh: "Apakah seluruh otot tubuh Anda terasa sangat nyeri dan pegal?",
  kelelahan_sangat_berat: "Apakah Anda merasa sangat lelah hingga sulit bangkit dari tempat tidur?",
  kelelahan_sedang: "Apakah Anda merasa lelah lebih dari biasanya namun masih bisa beraktivitas?",
  kelelahan_ringan: "Apakah Anda merasa sedikit lelah atau kurang bertenaga?",
  sakit_kepala_berat: "Apakah sakit kepala Anda sangat mengganggu dan berdenyut-denyut?",
  sakit_kepala_ringan: "Apakah Anda merasakan sakit kepala ringan atau pusing?",

  // Gejala Hidung dan Sinus
  hidung_berair_bening: "Apakah hidung Anda mengeluarkan cairan bening dan encer seperti air?",
  hidung_berair_encer_jernih: "Apakah cairan hidung jernih, encer, dan terus-menerus keluar?",
  ingus_kental_kuning_hijau: "Apakah ingus Anda kental dan berwarna kuning kehijauan?",
  hidung_tersumbat_ringan: "Apakah hidung Anda tersumbat ringan namun masih bisa bernapas?",
  hidung_tersumbat_berat: "Apakah hidung tersumbat total sehingga harus bernapas melalui mulut?",
  hidung_tersumbat_total_unilateral: "Apakah hidung tersumbat total hanya pada satu sisi?",
  hidung_tersumbat_bergantian: "Apakah hidung tersumbat bergantian antara kiri dan kanan?",
  hidung_gatal: "Apakah hidung bagian dalam terasa gatal?",
  hidung_gatal_dalam: "Apakah bagian dalam hidung terasa sangat gatal hingga ingin digaruk terus?",
  kehilangan_penciuman_total: "Apakah Anda kehilangan kemampuan mencium bau sama sekali?",

  // Gejala Bersin
  bersin_ringan: "Apakah Anda bersin sesekali (1-3 kali) dalam sehari?",
  bersin_beruntun_5_lebih: "Apakah Anda bersin beruntun 5 kali atau lebih dalam satu episode?",

  // Gejala Tenggorokan
  tenggorokan_gatal_ringan: "Apakah tenggorokan terasa gatal ringan atau garuk-garuk?",
  sakit_tenggorokan_berat: "Apakah tenggorokan sangat sakit terutama saat menelan?",
  sakit_tenggorokan_menelan_berat: "Apakah rasa sakit tenggorokan sangat hebat saat menelan makanan/minuman?",
  tenggorokan_kering_kasar: "Apakah tenggorokan terasa kering dan kasar seperti amplas?",
  tenggorokan_merah_bengkak: "Apakah tenggorokan terlihat merah dan bengkak (dilihat di cermin)?",
  kesulitan_menelan_makanan: "Apakah Anda kesulitan atau takut menelan makanan karena sakit?",
  sensasi_ganjal_tenggorokan: "Apakah ada sensasi seperti ada yang mengganjal di tenggorokan?",
  nyeri_tenggorokan_berbicara: "Apakah tenggorokan terasa nyeri saat berbicara?",
  rasa_terbakar_tenggorokan: "Apakah tenggorokan terasa terbakar atau perih?",

  // Gejala Suara
  suara_serak_parau: "Apakah suara Anda serak, parau, atau berubah dari biasanya?",
  kehilangan_suara_total: "Apakah Anda kehilangan suara atau hanya bisa berbisik?",
  kesulitan_bicara_keras: "Apakah Anda kesulitan berbicara dengan suara keras?",

  // Gejala Batuk
  batuk_kering_ringan: "Apakah Anda batuk kering ringan tanpa dahak?",
  batuk_kering_persisten: "Apakah Anda batuk kering terus-menerus yang mengganggu?",
  batuk_kering_menggonggong: "Apakah batuk Anda kering dan berbunyi seperti gonggongan anjing?",
  batuk_produktif_dahak_kental: "Apakah Anda batuk mengeluarkan dahak yang kental?",
  batuk_produktif_dahak_berkarat: "Apakah dahak yang keluar berwarna seperti karat besi atau kecoklatan?",
  batuk_memburuk_malam: "Apakah batuk memburuk atau lebih sering di malam hari?",
  batuk_kering_malam_dini_hari: "Apakah batuk kering mengganggu tidur di malam atau dini hari?",
  batuk_berlangsung_2_3_minggu: "Apakah batuk sudah berlangsung 2-3 minggu atau lebih?",
  nyeri_dada_saat_batuk: "Apakah dada terasa nyeri saat batuk?",

  // Gejala Dahak
  dahak_kuning_hijau_pagi: "Apakah dahak berwarna kuning kehijauan terutama di pagi hari?",
  dahak_purulen_kuning_hijau: "Apakah dahak kental, purulen (bernanah), dan berwarna kuning-hijau?",

  // Gejala Pernapasan
  sesak_napas_istirahat: "Apakah Anda sesak napas bahkan saat istirahat atau tidak beraktivitas?",
  sesak_napas_aktivitas_ringan: "Apakah Anda sesak napas saat melakukan aktivitas ringan (jalan santai)?",
  sesak_napas_mendadak: "Apakah sesak napas muncul secara tiba-tiba?",
  sesak_napas_progresif_kronik: "Apakah sesak napas semakin memburuk secara bertahap dalam bulan/tahun terakhir?",
  bunyi_napas_mengi_wheezing: "Apakah napas berbunyi 'ngik-ngik' atau mengi terutama saat mengeluarkan napas?",
  bunyi_mengi_ekspirasi: "Apakah ada bunyi mengi saat mengeluarkan napas (ekspirasi)?",
  kesulitan_bicara_kalimat_penuh: "Apakah Anda kesulitan menyelesaikan satu kalimat penuh karena sesak?",
  penggunaan_otot_bantu_napas: "Apakah Anda menggunakan otot leher/dada tambahan untuk bernapas?",
  napas_cepat_dangkal: "Apakah napas Anda menjadi cepat dan dangkal?",

  // Gejala Dada
  dada_terasa_berat_sesak: "Apakah dada terasa berat, sesak, atau tertekan?",
  dada_terasa_tertekan_sesak: "Apakah dada terasa seperti ditekan atau diikat kencang?",
  nyeri_dada_tajam_napas_dalam: "Apakah dada terasa nyeri tajam saat menarik napas dalam?",
  barrel_chest_dada_tong: "Apakah bentuk dada tampak membesar seperti tong (untuk PPOK)?",

  // Gejala Mata
  mata_berair_ringan: "Apakah mata berair ringan?",
  mata_gatal_berair: "Apakah mata gatal dan berair secara bersamaan?",
  mata_merah_bengkak: "Apakah mata merah, bengkak, atau iritasi?",
  lingkaran_hitam_mata: "Apakah ada lingkaran hitam di bawah mata (allergic shiners)?",

  // Gejala Wajah dan Sinus
  nyeri_wajah_pipi_dahi: "Apakah wajah terasa nyeri terutama di area pipi, dahi, atau sekitar mata?",
  tekanan_kepala_depan: "Apakah kepala bagian depan terasa tertekan atau berat?",
  nyeri_bertambah_membungkuk: "Apakah nyeri kepala/wajah bertambah saat membungkuk atau menunduk?",
  nyeri_gigi_atas: "Apakah gigi bagian atas terasa nyeri atau ngilu?",

  // Gejala Sistemik Lainnya
  nafsu_makan_hilang_total: "Apakah nafsu makan hilang sama sekali?",
  mual_muntah: "Apakah Anda merasa mual atau muntah?",
  mual_muntah_demam: "Apakah mual/muntah disertai dengan demam?",
  cemas_gelisah_sesak: "Apakah Anda merasa cemas atau gelisah karena sesak napas?",

  // Gejala Spesifik Alergi
  gatal_langit_mulut: "Apakah langit-langit mulut terasa gatal?",
  gejala_musiman_tertentu: "Apakah gejala muncul pada musim tertentu (hujan/kemarau/berbunga)?",
  reaksi_debu_serbuk_sari: "Apakah gejala memburuk saat terkena debu, serbuk sari, atau bulu hewan?",
  trigger_alergen_cuaca_dingin: "Apakah gejala dipicu oleh alergen tertentu atau cuaca dingin?",

  // Gejala Spesifik Kondisi Kronik
  riwayat_merokok_lama: "Apakah Anda memiliki riwayat merokok >10 tahun atau perokok berat?",
  riwayat_asma_sebelumnya: "Apakah Anda memiliki riwayat asma atau pernah didiagnosis asma?",
  batuk_produktif_kronik_pagi:
    "Apakah Anda batuk berdahak kronik terutama pagi hari >3 bulan dalam 2 tahun berturut-turut?",
  infeksi_berulang_saluran_napas: "Apakah Anda sering mengalami infeksi saluran napas (>3x/tahun)?",
  penurunan_berat_badan: "Apakah berat badan menurun tanpa sebab yang jelas?",

  // Gejala Fisik Spesifik
  amandel_bengkak_merah: "Apakah amandel (tonsil) tampak bengkak dan merah?",
  kelenjar_leher_bengkak_nyeri: "Apakah kelenjar getah bening di leher bengkak dan nyeri saat ditekan?",
  bercak_putih_kuning_tenggorokan: "Apakah ada bercak putih atau kuning di tenggorokan/amandel?",
  bau_mulut_tidak_sedap: "Apakah mulut berbau tidak sedap yang tidak biasa?",
  bau_mulut_ingus: "Apakah ada bau tidak sedap dari hidung atau post-nasal drip?",
  post_nasal_drip: "Apakah ada sensasi cairan mengalir dari hidung ke tenggorokan?",
  clubbing_jari_tabuh: "Apakah ujung jari tampak membesar atau berbentuk tabuh?",
  sianosis_bibir_kuku: "Apakah bibir atau kuku tampak kebiruan?",
  tidak_ada_batuk_pilek: "Apakah TIDAK ada gejala batuk atau pilek bersamaan?",
  kebingungan_lansia: "Apakah ada kebingungan atau perubahan mental (khusus lansia)?",
}

// Sistem Diagnosis Progresif
class ProgressiveDiagnosisSystem {
  constructor() {
    this.knownFacts = {}
    this.askedQuestions = new Set()
    this.diseaseScores = {}
    this.questionHistory = []
    this.positiveSymptoms = new Set()
    this.currentQuestion = null
    this.questionsAsked = 0
    this.isProcessing = false
    this.shuffledQuestions = []
  }

  initializeShuffledQuestions() {
    const allQuestions = Object.keys(MEDICAL_SYMPTOMS)
    this.shuffledQuestions = this.shuffleArray([...allQuestions])
  }

  shuffleArray(array) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  setKnownFact(symptomKey, value) {
    this.knownFacts[symptomKey] = value
    this.askedQuestions.add(symptomKey)
    this.questionHistory.push({
      symptom: symptomKey,
      answer: value,
      timestamp: Date.now(),
      question: MEDICAL_SYMPTOMS[symptomKey],
    })

    if (value) {
      this.positiveSymptoms.add(symptomKey)
    }

    // Update scores immediately after each answer
    this.updateDiseaseScores()
  }

  updateDiseaseScores() {
    this.diseaseScores = {}

    Object.entries(RESPIRATORY_DISEASES).forEach(([disease, config]) => {
      let score = 0
      const maxPossibleScore = config.primary.length * 3 + config.secondary.length * 1

      // Primary symptoms (weight 3)
      config.primary.forEach((symptom) => {
        if (this.knownFacts[symptom] === true) score += 3
        else if (this.knownFacts[symptom] === false) score -= 0.5
      })

      // Secondary symptoms (weight 1)
      config.secondary.forEach((symptom) => {
        if (this.knownFacts[symptom] === true) score += 1
        else if (this.knownFacts[symptom] === false) score -= 0.2
      })

      // Calculate confidence based on answered questions
      const totalSymptoms = config.primary.length + config.secondary.length
      const answeredSymptoms = [...config.primary, ...config.secondary].filter(
        (symptom) => symptom in this.knownFacts,
      ).length

      const confidence = answeredSymptoms / totalSymptoms

      // Bonus scoring for specific disease patterns
      score += this.calculateBonusScore(disease, config)

      this.diseaseScores[disease] = {
        score: Math.max(0, score),
        confidence,
        normalizedScore: score / maxPossibleScore,
        meetsMinimum: score >= config.minScore,
        config: config,
        matchedSymptoms: this.getMatchedSymptoms(config),
      }
    })
  }

  calculateBonusScore(disease, config) {
    let bonus = 0

    // Flu triad bonus
    if (disease === "Influenza (Flu)") {
      const fluTriad = ["demam_tinggi_38_5", "nyeri_otot_seluruh_tubuh", "kelelahan_sangat_berat"]
      const fluTriadCount = fluTriad.filter((symptom) => this.knownFacts[symptom] === true).length
      if (fluTriadCount >= 2) bonus += 2

      // Sudden onset bonus
      if (this.knownFacts["demam_mendadak_24jam"] === true) bonus += 1
    }

    // Allergic rhinitis pattern bonus
    if (disease === "Rinitis Alergi (Allergic Rhinitis)") {
      const allergyPattern = ["bersin_beruntun_5_lebih", "mata_gatal_berair", "hidung_gatal_dalam"]
      const allergyCount = allergyPattern.filter((symptom) => this.knownFacts[symptom] === true).length
      if (allergyCount >= 2) bonus += 2
    }

    // Sinusitis facial pain pattern
    if (disease === "Sinusitis Akut") {
      if (this.knownFacts["nyeri_wajah_pipi_dahi"] === true && this.knownFacts["nyeri_bertambah_membungkuk"] === true) {
        bonus += 2
      }
    }

    // COPD smoking history
    if (disease === "PPOK Eksaserbasi (COPD)") {
      if (this.knownFacts["riwayat_merokok_lama"] === true) bonus += 2
    }

    // Asthma pattern
    if (disease === "Asma Eksaserbasi") {
      const asthmaTriad = ["sesak_napas_mendadak", "bunyi_mengi_ekspirasi", "batuk_kering_malam_dini_hari"]
      const asthmaCount = asthmaTriad.filter((symptom) => this.knownFacts[symptom] === true).length
      if (asthmaCount >= 2) bonus += 2
    }

    return bonus
  }

  getMatchedSymptoms(config) {
    const matched = {
      primary: [],
      secondary: [],
    }

    config.primary.forEach((symptom) => {
      if (this.knownFacts[symptom] === true) {
        matched.primary.push(symptom)
      }
    })

    config.secondary.forEach((symptom) => {
      if (this.knownFacts[symptom] === true) {
        matched.secondary.push(symptom)
      }
    })

    return matched
  }

  getNextQuestion() {
    if (this.shuffledQuestions.length === 0) {
      this.initializeShuffledQuestions()
    }

    let nextSymptom = null

    // Strategy 1: Random questions for first 4 questions
    if (this.askedQuestions.size < 4) {
      for (const symptom of this.shuffledQuestions) {
        if (!this.askedQuestions.has(symptom)) {
          nextSymptom = symptom
          break
        }
      }
    }

    // Strategy 2: Focus on top diseases after initial questions
    if (!nextSymptom && this.askedQuestions.size >= 4) {
      const topDiseases = Object.entries(this.diseaseScores)
        .sort((a, b) => b[1].normalizedScore - a[1].normalizedScore)
        .slice(0, 3)
        .map(([disease]) => disease)

      const relevantQuestions = Object.keys(MEDICAL_SYMPTOMS).filter((symptom) => {
        if (this.askedQuestions.has(symptom)) return false

        return topDiseases.some((disease) => {
          const config = RESPIRATORY_DISEASES[disease]
          return config.primary.includes(symptom) || config.secondary.includes(symptom)
        })
      })

      if (relevantQuestions.length > 0) {
        // Prioritize primary symptoms of top disease
        const topDisease = topDiseases[0]
        if (topDisease) {
          const primarySymptoms = RESPIRATORY_DISEASES[topDisease].primary.filter(
            (symptom) => !this.askedQuestions.has(symptom),
          )
          if (primarySymptoms.length > 0) {
            nextSymptom = primarySymptoms[Math.floor(Math.random() * primarySymptoms.length)]
          } else {
            nextSymptom = relevantQuestions[Math.floor(Math.random() * relevantQuestions.length)]
          }
        }
      }
    }

    // Strategy 3: Random remaining questions
    if (!nextSymptom) {
      const unaskedQuestions = Object.keys(MEDICAL_SYMPTOMS).filter((symptom) => !this.askedQuestions.has(symptom))
      if (unaskedQuestions.length > 0) {
        nextSymptom = unaskedQuestions[Math.floor(Math.random() * unaskedQuestions.length)]
      }
    }

    return nextSymptom
  }

  getBestDiagnosis() {
    const validDiagnoses = Object.entries(this.diseaseScores)
      .filter(([_, data]) => data.meetsMinimum && data.confidence > 0.25)
      .sort((a, b) => b[1].normalizedScore - a[1].normalizedScore)

    return validDiagnoses.length > 0 ? validDiagnoses[0] : null
  }

  getTopDiagnoses(count = 3) {
    return Object.entries(this.diseaseScores)
      .filter(([_, data]) => data.normalizedScore > 0.1)
      .sort((a, b) => b[1].normalizedScore - a[1].normalizedScore)
      .slice(0, count)
  }

  shouldContinueAsking() {
    const maxQuestions = 20
    const minQuestions = 8

    if (this.askedQuestions.size < minQuestions) return true
    if (this.askedQuestions.size >= maxQuestions) return false

    const bestDiagnosis = this.getBestDiagnosis()
    if (!bestDiagnosis) return true

    const [_, data] = bestDiagnosis

    // Continue if confidence is low or score is not decisive
    return data.confidence < 0.6 || data.normalizedScore < 0.7
  }

  reset() {
    this.knownFacts = {}
    this.askedQuestions.clear()
    this.diseaseScores = {}
    this.questionHistory = []
    this.positiveSymptoms.clear()
    this.shuffledQuestions = []
    this.currentQuestion = null
    this.questionsAsked = 0
    this.isProcessing = false
  }

  getDebugInfo() {
    return {
      knownFacts: this.knownFacts,
      diseaseScores: this.diseaseScores,
      askedQuestions: Array.from(this.askedQuestions),
      positiveSymptoms: Array.from(this.positiveSymptoms),
      questionHistory: this.questionHistory,
      totalPositiveSymptoms: this.positiveSymptoms.size,
    }
  }
}

// Treatment recommendations
const TREATMENT_RECOMMENDATIONS = {
  "Pilek Biasa (Common Cold)": {
    treatment:
      "Istirahat 3-5 hari, minum cairan hangat 2-3 liter/hari, paracetamol 500mg setiap 6 jam untuk nyeri kepala. Semprot hidung saline 3-4x/hari. Madu 1 sendok teh untuk batuk (tidak untuk bayi <1 tahun).",
    warning: "Konsultasi dokter jika gejala memburuk setelah 7 hari, demam >38.5°C, atau muncul sesak napas.",
    prevention:
      "Cuci tangan teratur 20 detik dengan sabun, hindari menyentuh wajah, jaga jarak 1 meter dari orang sakit.",
  },
  "Influenza (Flu)": {
    treatment:
      "Istirahat total di tempat tidur 7-10 hari, minum cairan 3-4 liter/hari, paracetamol 500mg setiap 6 jam. Oseltamivir (Tamiflu) dalam 48 jam pertama jika tersedia. Hindari aspirin pada anak <18 tahun.",
    warning: "SEGERA ke dokter jika: demam >39°C >3 hari, sesak napas, nyeri dada, dehidrasi berat, atau kebingungan.",
    prevention: "Vaksinasi flu tahunan (efektivitas 40-60%), hindari kerumunan saat musim flu, masker di tempat umum.",
  },
  "Rinitis Alergi (Allergic Rhinitis)": {
    treatment:
      "Hindari alergen pemicu, antihistamin oral (loratadine 10mg/hari atau cetirizine 10mg/hari), semprot hidung kortikosteroid (fluticasone), semprot hidung saline. Bersihkan rumah dari debu tungau.",
    warning:
      "Konsultasi dokter jika gejala mengganggu tidur/aktivitas, tidak membaik dengan antihistamin, atau muncul gejala asma.",
    prevention:
      "Identifikasi alergen dengan tes kulit, gunakan air purifier HEPA, cuci sprei 60°C seminggu sekali, hindari karpet tebal.",
  },
  "Sinusitis Akut": {
    treatment:
      "Kompres hangat wajah 15-20 menit 3x/hari, semprot hidung saline hipertonik, posisi tidur kepala lebih tinggi. Paracetamol untuk nyeri. Antibiotik (amoxicillin 500mg 3x/hari) jika gejala >10 hari atau memburuk.",
    warning:
      "SEGERA ke dokter jika: nyeri wajah hebat, demam tinggi, pembengkakan wajah, gangguan penglihatan, atau sakit kepala berat.",
    prevention: "Obati pilek dengan baik, jaga kelembaban udara 40-50%, hindari asap rokok, vaksinasi pneumokokus.",
  },
  "Bronkitis Akut": {
    treatment:
      "Istirahat, minum air hangat 2-3 liter/hari, madu untuk batuk, humidifier untuk melembabkan udara. Hindari asap rokok. Ekspektorasi dahak dengan batuk efektif. Bronkodilator jika ada mengi.",
    warning: "Ke dokter jika: sesak napas, dahak berdarah, demam tinggi >3 hari, atau batuk >3 minggu.",
    prevention:
      "Hindari merokok dan asap rokok, vaksinasi influenza tahunan, cuci tangan teratur, hindari polusi udara.",
  },
  "Faringitis Akut": {
    treatment:
      "Berkumur air garam hangat (1/2 sdt garam dalam 1 gelas air) 4-6x/hari, minum air hangat, hindari makanan pedas/asam. Paracetamol untuk nyeri. Antibiotik (amoxicillin) jika strep throat terkonfirmasi.",
    warning:
      "Ke dokter jika: kesulitan menelan berat, air liur berlebihan, demam tinggi, bercak putih di tenggorokan, atau pembengkakan leher.",
    prevention:
      "Hindari berbagi alat makan/minum, jaga kebersihan mulut, hindari kontak dengan penderita strep throat.",
  },
  "Laringitis Akut": {
    treatment:
      "Istirahat suara total 2-3 hari (berbisik juga tidak dianjurkan), minum air hangat, hindari kafein/alkohol, humidifier, hindari berdehem. Kortikosteroid jika diperlukan untuk profesi suara.",
    warning: "Konsultasi dokter jika: kehilangan suara >2 minggu, kesulitan menelan, sesak napas, atau demam tinggi.",
    prevention:
      "Hindari berteriak/berbicara keras berlebihan, jaga kelembaban tenggorokan, hindari asap rokok dan iritasi.",
  },
  "Pneumonia Ringan (Community-Acquired)": {
    treatment:
      "WAJIB konsultasi dokter untuk antibiotik yang tepat. Istirahat total, minum cairan 3-4 liter/hari, paracetamol untuk demam. Fisioterapi dada untuk ekspektorasi. Monitor saturasi oksigen.",
    warning:
      "SEGERA ke IGD jika: sesak napas berat, saturasi oksigen <95%, kebingungan, tekanan darah turun, atau tidak membaik dalam 48-72 jam antibiotik.",
    prevention:
      "Vaksinasi pneumokokus (terutama >65 tahun), vaksinasi influenza, hindari merokok, jaga kebersihan tangan.",
  },
  "Asma Eksaserbasi": {
    treatment:
      "Bronkodilator kerja cepat (salbutamol inhaler 2-4 puff setiap 20 menit), posisi duduk tegak, hindari pemicu, kortikosteroid oral jika berat. Gunakan spacer untuk inhaler.",
    warning:
      "SEGERA ke IGD jika: tidak bisa bicara kalimat penuh, saturasi oksigen <95%, sianosis, atau tidak membaik dengan bronkodilator.",
    prevention:
      "Identifikasi dan hindari pemicu, gunakan controller medication teratur, peak flow monitoring, action plan tertulis.",
  },
  "PPOK Eksaserbasi (COPD)": {
    treatment:
      "WAJIB konsultasi dokter. Bronkodilator kerja cepat, kortikosteroid oral (prednisolone 30-40mg/hari 5-7 hari), antibiotik jika dahak purulen. Oksigen jika saturasi <88-92%.",
    warning: "SEGERA ke IGD jika: sesak napas berat, sianosis, kebingungan, edema tungkai baru, atau gagal napas.",
    prevention:
      "BERHENTI MEROKOK (paling penting), vaksinasi influenza dan pneumokokus, rehabilitasi paru, hindari polusi udara.",
  },
}

// Main Application Class
class ProgressiveDiagnosisApp {
  constructor() {
    this.diagnosisSystem = new ProgressiveDiagnosisSystem()
    this.currentStep = "welcome"
    this.initializeElements()
    this.bindEvents()
  }

  initializeElements() {
    // Screens
    this.welcomeScreen = document.getElementById("welcome-screen")
    this.diagnosisScreen = document.getElementById("diagnosis-screen")
    this.resultScreen = document.getElementById("result-screen")

    // Welcome screen
    this.startButton = document.getElementById("start-diagnosis")

    // Diagnosis screen
    this.questionCounter = document.getElementById("question-counter")
    this.progressPercentage = document.getElementById("progress-percentage")
    this.progressFill = document.getElementById("progress-fill")
    this.currentQuestionElement = document.getElementById("current-question")
    this.positiveCount = document.getElementById("positive-count")
    this.topDisease = document.getElementById("top-disease")
    this.answerYesButton = document.getElementById("answer-yes")
    this.answerNoButton = document.getElementById("answer-no")
    this.analysisPanel = document.getElementById("analysis-panel")
    this.diseaseProbabilities = document.getElementById("disease-probabilities")

    // Result screen
    this.resultIcon = document.getElementById("result-icon")
    this.resultContent = document.getElementById("result-content")
    this.resetButton = document.getElementById("reset-diagnosis")
    this.consultButton = document.getElementById("consult-doctor")
  }

  bindEvents() {
    this.startButton.addEventListener("click", () => this.startDiagnosis())
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

  startDiagnosis() {
    this.showScreen("diagnosis")
    this.diagnosisSystem.reset()
    this.askNextQuestion()
  }

  async askNextQuestion() {
    const nextSymptom = this.diagnosisSystem.getNextQuestion()

    if (!nextSymptom || !this.diagnosisSystem.shouldContinueAsking()) {
      await this.showResult()
      return
    }

    this.diagnosisSystem.currentQuestion = nextSymptom
    this.diagnosisSystem.questionsAsked++

    this.updateQuestionDisplay()
    this.updateProgress()
    this.updateRealTimeAnalysis()
  }

  updateQuestionDisplay() {
    const symptom = this.diagnosisSystem.currentQuestion
    const question = MEDICAL_SYMPTOMS[symptom]

    this.currentQuestionElement.textContent = question
    this.currentQuestionElement.classList.add("fade-in")

    setTimeout(() => {
      this.currentQuestionElement.classList.remove("fade-in")
    }, 500)
  }

  updateProgress() {
    const maxQuestions = 20
    const progress = Math.min((this.diagnosisSystem.questionsAsked / maxQuestions) * 100, 95)

    this.questionCounter.textContent = `Pertanyaan ${this.diagnosisSystem.questionsAsked}`
    this.progressPercentage.textContent = `${Math.round(progress)}%`
    this.progressFill.style.width = `${progress}%`
    this.positiveCount.textContent = this.diagnosisSystem.positiveSymptoms.size

    // Update top disease
    const topDiagnoses = this.diagnosisSystem.getTopDiagnoses(1)
    if (topDiagnoses.length > 0) {
      const [diseaseName] = topDiagnoses[0]
      this.topDisease.textContent = diseaseName.split(" ")[0] // Show first word only
    } else {
      this.topDisease.textContent = "Menganalisis..."
    }
  }

  updateRealTimeAnalysis() {
    const topDiagnoses = this.diagnosisSystem.getTopDiagnoses(5)

    if (topDiagnoses.length === 0) {
      this.diseaseProbabilities.innerHTML =
        '<p style="text-align: center; color: #6c757d;">Belum ada data cukup untuk analisis</p>'
      return
    }

    let html = ""
    topDiagnoses.forEach(([diseaseName, data]) => {
      const percentage = Math.round(data.normalizedScore * 100)
      const confidence = Math.round(data.confidence * 100)

      html += `
        <div class="probability-item">
          <div class="disease-name">${diseaseName}</div>
          <div class="probability-bar">
            <div class="probability-fill" style="width: ${percentage}%"></div>
          </div>
          <div class="probability-percentage">${percentage}%</div>
        </div>
      `
    })

    this.diseaseProbabilities.innerHTML = html
  }

  async answerQuestion(answer) {
    if (this.diagnosisSystem.isProcessing) return

    this.diagnosisSystem.isProcessing = true

    // Visual feedback
    const buttons = [this.answerYesButton, this.answerNoButton]
    buttons.forEach((btn) => btn.classList.add("loading"))

    if (this.diagnosisSystem.currentQuestion) {
      this.diagnosisSystem.setKnownFact(this.diagnosisSystem.currentQuestion, answer)
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 800))

    buttons.forEach((btn) => btn.classList.remove("loading"))
    this.diagnosisSystem.isProcessing = false

    this.askNextQuestion()
  }

  async showResult() {
    this.showScreen("result")

    const bestDiagnosis = this.diagnosisSystem.getBestDiagnosis()
    const debugInfo = this.diagnosisSystem.getDebugInfo()

    if (bestDiagnosis) {
      const [diseaseName, data] = bestDiagnosis
      this.showPositiveDiagnosis(diseaseName, data, debugInfo)
    } else {
      this.showNoDiagnosis(debugInfo)
    }
  }

  showPositiveDiagnosis(diseaseName, data, debugInfo) {
    const diseaseConfig = RESPIRATORY_DISEASES[diseaseName]
    const iconClass = diseaseConfig.icon

    this.resultIcon.innerHTML = `<i class="${iconClass}"></i>`

    const treatment = TREATMENT_RECOMMENDATIONS[diseaseName]
    const confidence = Math.round(data.confidence * 100)
    const matchedSymptoms = data.matchedSymptoms

    // Create matched symptoms display
    let symptomsHtml = ""
    if (matchedSymptoms.primary.length > 0) {
      symptomsHtml += `<strong>Gejala Utama yang Cocok:</strong><br>`
      matchedSymptoms.primary.forEach((symptom) => {
        symptomsHtml += `• ${MEDICAL_SYMPTOMS[symptom]}<br>`
      })
    }
    if (matchedSymptoms.secondary.length > 0) {
      symptomsHtml += `<br><strong>Gejala Pendukung yang Cocok:</strong><br>`
      matchedSymptoms.secondary.forEach((symptom) => {
        symptomsHtml += `• ${MEDICAL_SYMPTOMS[symptom]}<br>`
      })
    }

    this.resultContent.innerHTML = `
      <div class="diagnosis-result">
        <div class="diagnosis-title">Diagnosis yang Paling Sesuai:</div>
        <div class="diagnosis-name">${diseaseName}</div>
        <div class="confidence-level">Tingkat Keyakinan: ${confidence}%</div>
        <div style="margin-top: 15px; font-size: 0.9rem; opacity: 0.9;">
          <strong>Fakta Medis:</strong> ${diseaseConfig.facts}
        </div>
        <div style="margin-top: 10px; font-size: 0.85rem; opacity: 0.8;">
          <strong>Prevalensi:</strong> ${diseaseConfig.prevalence}
        </div>
      </div>
      
      <div class="symptom-match">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
          <i class="fas fa-check-double"></i>
          <strong>Gejala yang Cocok dengan Diagnosis:</strong>
        </div>
        <div style="font-size: 0.9rem; line-height: 1.6;">
          ${symptomsHtml}
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
        <i class="fas fa-chart-bar"></i>
        <strong>Ringkasan Analisis:</strong> Dari ${debugInfo.questionHistory.length} pertanyaan medis, 
        sistem menemukan ${debugInfo.totalPositiveSymptoms} gejala positif yang cocok dengan pola ${diseaseName}.
        Diagnosis ini berdasarkan ${matchedSymptoms.primary.length} gejala utama dan ${matchedSymptoms.secondary.length} gejala pendukung.
      </div>
    `
  }

  showNoDiagnosis(debugInfo) {
    this.resultIcon.innerHTML = '<i class="fas fa-question-circle"></i>'

    // Show top possibilities even if no definitive diagnosis
    const topDiagnoses = this.diagnosisSystem.getTopDiagnoses(3)
    let possibilitiesHtml = ""

    if (topDiagnoses.length > 0) {
      possibilitiesHtml = '<div style="margin-top: 15px;"><strong>Kemungkinan yang Perlu Dipertimbangkan:</strong><br>'
      topDiagnoses.forEach(([diseaseName, data]) => {
        const percentage = Math.round(data.normalizedScore * 100)
        possibilitiesHtml += `• ${diseaseName}: ${percentage}% kesesuaian<br>`
      })
      possibilitiesHtml += "</div>"
    }

    this.resultContent.innerHTML = `
      <div class="info-box info-success">
        <i class="fas fa-info-circle"></i>
        <div>
          <strong>Tidak Ada Diagnosis Definitif</strong><br>
          Berdasarkan gejala yang Anda berikan, tidak ditemukan pola yang cukup kuat untuk menunjukkan 
          salah satu dari 10 penyakit pernapasan umum yang ada dalam sistem.
          ${possibilitiesHtml}
        </div>
      </div>
      
      <div class="info-box info-primary">
        <i class="fas fa-user-md"></i>
        <div>
          <strong>Rekomendasi:</strong> Jika gejala berlanjut lebih dari 7 hari, memburuk, atau mengganggu 
          aktivitas sehari-hari, disarankan untuk berkonsultasi dengan dokter untuk pemeriksaan lebih lanjut 
          dan kemungkinan tes diagnostik tambahan.
        </div>
      </div>
      
      <div class="info-box info-secondary">
        <i class="fas fa-lightbulb"></i>
        <div>
          <strong>Kemungkinan Lain:</strong> Gejala mungkin disebabkan oleh kondisi yang tidak tercakup 
          dalam sistem ini, kombinasi beberapa kondisi ringan, atau masih dalam tahap awal perkembangan 
          yang memerlukan observasi lebih lanjut.
        </div>
      </div>
      
      <div class="analysis-summary">
        <i class="fas fa-chart-bar"></i>
        <strong>Ringkasan Analisis:</strong> ${debugInfo.questionHistory.length} pertanyaan dianalisis, 
        ${debugInfo.totalPositiveSymptoms} gejala positif ditemukan. Sistem telah membandingkan dengan 
        10 penyakit pernapasan umum namun tidak menemukan pola yang cukup definitif.
      </div>
    `
  }

  resetDiagnosis() {
    this.diagnosisSystem.reset()
    this.showScreen("welcome")
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ProgressiveDiagnosisApp()
})
