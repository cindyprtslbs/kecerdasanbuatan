// Daftar semua gejala yang mungkin, dengan format pertanyaan
const SYMPTOM_QUESTIONS = {
    "batuk_berdarah": "Apakah Anda batuk berdarah?",
    "batuk_terus_menerus_disertai_atau_bercak_darah": "Apakah batuk Anda terus-menerus disertai atau berbercak darah?",
    "sesak_napas": "Apakah Anda mengalami sesak napas?",
    "sesak_napas_covid": "Apakah Anda mengalami sesak napas?",
    "sesak_napas_pneumonia": "Apakah Anda mengalami sesak napas?",
    "sesak_napas_bronkitis": "Apakah Anda mengalami sesak napas?",
    "sesak_napas_emfisema": "Apakah Anda mengalami sesak napas?",
    "sesak_napas_asma": "Apakah Anda mengalami sesak napas?",
    "nyeri_dada": "Apakah Anda merasakan nyeri dada?",
    "nyeri_dada_pneumonia": "Apakah Anda merasakan nyeri dada?",
    "nyeri_dada_bronkitis": "Apakah Anda merasakan nyeri dada?",
    "nyeri_dada_emfisema": "Apakah Anda merasakan nyeri dada?",
    "nyeri_dada_asma": "Apakah Anda merasakan nyeri dada?",
    "kehilangan_berat_badan": "Apakah Anda mengalami kehilangan berat badan?",
    "lemas": "Apakah Anda merasa lemas?",
    "lemas_tbc": "Apakah Anda merasa lemas?",
    "sesak_napas_mendadak": "Apakah Anda mengalami sesak napas mendadak?",
    "nyeri_dada_saat_bernapas": "Apakah Anda merasakan nyeri dada saat bernapas?",
    "batuk": "Apakah Anda batuk?",
    "batuk_covid": "Apakah Anda batuk?",
    "batuk_pneumonia": "Apakah Anda batuk?",
    "batuk_faringitis": "Apakah Anda batuk?",
    "batuk_emfisema": "Apakah Anda batuk?",
    "batuk_asma": "Apakah Anda batuk?",
    "batuk_flu": "Apakah Anda batuk?",
    "pingsan": "Apakah Anda pernah pingsan?",
    "batuk_berdahak_dan_terus_menerus": "Apakah Anda batuk berdahak dan terus-menerus?",
    "kehilangan_berat_badan_drastis": "Apakah Anda mengalami kehilangan berat badan drastis?",
    "keringat_malam": "Apakah Anda sering berkeringat di malam hari?",
    "demam": "Apakah Anda demam?",
    "demam_covid": "Apakah Anda demam?",
    "demam_pneumonia": "Apakah Anda demam?",
    "demam_faringitis": "Apakah Anda demam?",
    "demam_bronkitis": "Apakah Anda demam?",
    "demam_flu": "Apakah Anda demam?",
    "kehilangan_penciuman": "Apakah Anda kehilangan penciuman?",
    "kehilangan_penciuman_flu": "Apakah Anda kehilangan penciuman?",
    "kehilangan_pengecapan": "Apakah Anda kehilangan pengecapan?",
    "sakit_tenggorokan": "Apakah Anda sakit tenggorokan?",
    "sakit_tenggorokan_faringitis": "Apakah Anda sakit tenggorokan?",
    "sakit_tenggorokan_flu": "Apakah Anda sakit tenggorokan?",
    "nyeri_otot": "Apakah Anda merasakan nyeri otot?",
    "nyeri_otot_pneumonia": "Apakah Anda merasakan nyeri otot?",
    "nyeri_otot_flu": "Apakah Anda merasakan nyeri otot?",
    "Demam_Tinggi_dan_Menggigil": "Apakah Anda mengalami demam tinggi dan menggigil?",
    "pembengkakan_kelenjar_di_leher": "Apakah ada pembengkakan kelenjar di leher Anda?",
    "nyeri_saat_menelan": "Apakah Anda merasakan nyeri saat menelan?",
    "kesulitan_menelan": "Apakah Anda kesulitan menelan?",
    "batuk_berdahak": "Apakah batuk berdahak Anda sudah lebih dari 1 minggu?",
    "dahak_berwarna_putih_kuning_atau_hijau": "Apakah dahak Anda berwarna putih, kuning, atau hijau?",
    "mengi": "Apakah Anda mengalami mengi (napas berbunyi 'ngik-ngik')?",
    "mengi_asma": "Apakah Anda mengalami mengi (napas berbunyi 'ngik-ngik')?",
    "napas_berbunyi": "Apakah napas Anda berbunyi (misalnya saat bernapas)?"
};

// Definisikan aturan dalam format dictionary
const RULES = {
    "Kanker Paru": [
        [
            "batuk_berdarah",
            "batuk_terus_menerus_disertai_atau_bercak_darah",
            "sesak_napas",
            "nyeri_dada",
            "kehilangan_berat_badan",
            "lemas"
        ]
    ],
    "Emboli Paru": [
        ["sesak_napas_mendadak", "nyeri_dada_saat_bernapas", "batuk", "pingsan"]
    ],
    "Tuberkulosis (TBC)": [
        ["batuk_berdahak_dan_terus_menerus", "kehilangan_berat_badan_drastis", "keringat_malam", "demam", "lemas_tbc"]
    ],
    "COVID-19": [
        [
            "kehilangan_penciuman",
            "kehilangan_pengecapan",
            "demam_covid",
            "batuk_covid",
            "sakit_tenggorokan",
            "nyeri_otot",
            "sesak_napas_covid"
        ]
    ],
    "Pneumonia": [
        [
            "Demam_Tinggi_dan_Menggigil",
            "batuk_pneumonia",
            "sesak_napas_pneumonia",
            "nyeri_dada_pneumonia",
            "demam_pneumonia",
            "nyeri_otot_pneumonia"
        ]
    ],
    "Faringitis": [
        [
            "pembengkakan_kelenjar_di_leher",
            "nyeri_saat_menelan",
            "sakit_tenggorokan_faringitis",
            "kesulitan_menelan",
            "batuk_faringitis",
            "demam_faringitis"
        ]
    ],
    "Bronkitis": [
        [
            "batuk_berdahak",
            "dahak_berwarna_putih_kuning_atau_hijau",
            "sesak_napas_bronkitis",
            "nyeri_dada_bronkitis",
            "demam_bronkitis"
        ]
    ],
    "Emfisema": [
        ["mengi", "nyeri_dada_emfisema", "sesak_napas_emfisema", "batuk_emfisema"]
    ],
    "Asma": [
        ["napas_berbunyi", "sesak_napas_asma", "batuk_asma", "nyeri_dada_asma", "mengi_asma"]
    ],
    "Flu": [
        ["kehilangan_penciuman_flu", "demam_flu", "batuk_flu", "sakit_tenggorokan_flu", "nyeri_otot_flu"]
    ]
};

// Daftar semua kemungkinan diagnosis
const POSSIBLE_DIAGNOSES = Object.keys(RULES);