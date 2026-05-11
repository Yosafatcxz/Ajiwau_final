// ============================================================
// Ajiwau - Data Layer
// Materi dan quiz Bab 1-10
// Quiz answer options updated to hiragana; essay acceptedAnswers support romaji/hiragana/kanji variants.
// ============================================================

const APP_DATA = {
  "projectName": "Ajiwau",
  "tagline": "Menikmati setiap langkah belajar Bahasa Jepang.",
  "chapters": [
    {
      "id": "ch1",
      "title": "Bab 1: Fondasi Dasar",
      "titleJP": "基礎",
      "description": "Pengenalan diri, benda, dan lokasi dasar.",
      "color": "#7c6df7",
      "subChapters": [
        {
          "id": "1-1",
          "title": "Pengenalan Diri",
          "titleJP": "自己紹介",
          "status": "available"
        },
        {
          "id": "1-2",
          "title": "Menunjuk Benda dan Kepemilikan",
          "titleJP": "物の指示と所有",
          "status": "locked"
        },
        {
          "id": "1-3",
          "title": "Menemukan Jalan",
          "titleJP": "場所と位置",
          "status": "locked"
        }
      ],
      "iconJP": "基"
    },
    {
      "id": "ch2",
      "title": "Bab 2: Kata Kerja dan Aktivitas",
      "titleJP": "動詞と活動",
      "description": "Waktu, perpindahan, dan aktivitas yang melibatkan objek.",
      "color": "#60a5fa",
      "subChapters": [
        {
          "id": "2-1",
          "title": "Waktu dan Aktivitas Sehari-hari",
          "titleJP": "時間と日常活動",
          "status": "locked"
        },
        {
          "id": "2-2",
          "title": "Pergi ke Mana?",
          "titleJP": "交通手段と移動",
          "status": "locked"
        },
        {
          "id": "2-3",
          "title": "Aktivitas Apa Saja?",
          "titleJP": "アクティビティと目的語",
          "status": "locked"
        }
      ],
      "iconJP": "動"
    },
    {
      "id": "ch3",
      "title": "Bab 3: Deskripsi dan Ekspresi",
      "titleJP": "描写と表現",
      "description": "Alat, memberi dan menerima, deskripsi, preferensi, kemampuan, serta alasan.",
      "color": "#34d399",
      "subChapters": [
        {
          "id": "3-1",
          "title": "Menggunakan Apa?",
          "titleJP": "道具と授受",
          "status": "locked"
        },
        {
          "id": "3-2",
          "title": "Bagaimana Rasanya?",
          "titleJP": "形容詞と描写",
          "status": "locked"
        },
        {
          "id": "3-3",
          "title": "Preferensi, Kemampuan, dan Alasan",
          "titleJP": "好み・能力・理由",
          "status": "locked"
        }
      ],
      "iconJP": "表"
    },
    {
      "id": "ch4",
      "title": "Bab 4: Keberadaan dan Kehidupan Sehari-hari",
      "titleJP": "存在と日常生活",
      "description": "Keberadaan benda dan orang, posisi, bilangan, rumah, serta kota.",
      "color": "#f59e0b",
      "subChapters": [
        {
          "id": "4-1",
          "title": "Keberadaan di Rumah dan Kehidupan Sehari-hari",
          "titleJP": "存在・家・日常生活",
          "status": "locked"
        }
      ],
      "iconJP": "存"
    }
  ],
  "lessons": {
    "1-1": {
      "id": "1-1",
      "title": "Pengenalan Diri (Jikoshoukai)",
      "titleJP": "自己紹介",
      "chapterTitle": "Bab 1: Fondasi Dasar",
      "duration": "~20 menit",
      "introduction": "Fokus utama bab ini adalah membangun fondasi paling mendasar: bagaimana cara memperkenalkan diri dan mengidentifikasi orang lain secara sopan. Kita akan belajar cara menyatakan “siapa saya”, “siapa Anda”, dan bagaimana mengoreksi informasi dalam sebuah percakapan formal.",
      "sections": [
        {
          "type": "timeline-card",
          "color": "#7c6df7",
          "colorName": "auto",
          "number": "1",
          "title": "Membangun Pernyataan: Pola “Wa” (は) dan “Desu” (です)",
          "body": "<p class=\"material-paragraph\">Membangun Pernyataan: Pola “Wa” (は) dan “Desu” (です) Sebelum bisa bercerita banyak, Anda harus bisa menyatakan identitas dasar (A adalah B). Ini adalah struktur paling fundamental dalam bahasa Jepang. Struktur Kalimat Dasar: [Subjek/Topik] は [Identitas/Status] です。</p><p class=\"material-paragraph\">Tabel Partikel</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Partikel</th><th>Fungsi</th><th>Keterangan</th></tr><tr><td>Wa (は)</td><td>Penanda topik</td><td>Seperti tanda “=” dalam matematika, memisahkan subjek dan informasi</td></tr><tr><td>Desu (です)</td><td>Diletakkan di akhir kalimat</td><td>Memberikan kesan sopan, menyatakan fakta</td></tr></table></div><p class=\"material-paragraph\">Contoh Penerapan:</p><p class=\"material-paragraph\">Watashi wa gakusei desu. (私は 学生 です。) → Saya adalah mahasiswa.</p><p class=\"material-paragraph\">Yamada-san wa isha desu. (山田さん は 医者 です。) → Mr. Yamada adalah dokter.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#60a5fa",
          "colorName": "auto",
          "number": "2",
          "title": "Mengoreksi Informasi: Bentuk Negatif “Ja arimasen” (じゃありません)",
          "body": "<p class=\"material-paragraph\">Mengoreksi Informasi: Bentuk Negatif “Ja arimasen” (じゃありません) Setelah bisa menyatakan identitas, Anda perlu tahu cara menyangkal sesuatu jika informasi yang diterima salah. Logika sederhana: Ganti “desu” menjadi “ja arimasen”.</p><p class=\"material-paragraph\">Contoh Perbandingan:</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Pernyataan Positif</th><th>Pernyataan Negatif (Koreksi)</th></tr><tr><td>Watashi wa sensei desu. (私は 先生 です。)</td><td>Watashi wa sensei ja arimasen. (私は 先生 じゃありません。)</td></tr></table></div>"
        },
        {
          "type": "timeline-card",
          "color": "#34d399",
          "colorName": "auto",
          "number": "3",
          "title": "Membuka Dialog: Kalimat Tanya dengan Partikel “Ka” (か)",
          "body": "<p class=\"material-paragraph\">Membuka Dialog: Kalimat Tanya dengan Partikel “Ka” (か) Komunikasi bersifat dua arah. Untuk bertanya, cukup tambahkan “ka” di akhir kalimat (tidak perlu ubah urutan kata). Partikel Ka (か): Fungsinya persis seperti tanda tanya (?). Naikkan intonasi di “ka” agar terdengar benar-benar bertanya.</p><p class=\"material-paragraph\">Contoh Penerapan:</p><p class=\"material-paragraph\">Mira-san wa Amerikajin desu ka?</p><p class=\"material-paragraph\">(ミラさん は アメリカ人 です か？)</p><p class=\"material-paragraph\">→ Apakah Ms. Mira orang Amerika?</p>"
        },
        {
          "type": "timeline-card",
          "color": "#f59e0b",
          "colorName": "auto",
          "number": "4",
          "title": "Partikel “Mo” (も)",
          "body": "<p class=\"material-paragraph\">Partikel “Mo” (も) Agar percakapan terasa natural, gunakan “mo” untuk menyatakan “juga”. Aturan Pakai: Ganti “wa” (は) menjadi “mo” (も).</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">A-san: “Watashi wa gakusei desu.” (私は 学生 です。)</p><p class=\"material-paragraph\">B-san: “Watashi mo gakusei desu.” (私 も 学生 です。)</p><p class=\"material-paragraph\">→ Saya juga mahasiswa.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#fb7185",
          "colorName": "auto",
          "number": "5",
          "title": "Etika Berbahasa: Aturan Nama dan Akhiran “-San” (さん)",
          "body": "<p class=\"material-paragraph\">Etika Berbahasa: Aturan Nama dan Akhiran “-San” (さん) Bahasa Jepang tidak lepas dari budaya. Aturan Penting:</p><p class=\"material-paragraph\">Wajib tambahkan “-san” setelah nama orang lain (tanda hormat).</p><p class=\"material-paragraph\">Jangan pernah memanggil diri sendiri dengan “-san”.</p><p class=\"material-paragraph\">Hindari kata “anata” (あなた) jika sudah tahu namanya; gunakan [Nama] + San.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#14b8a6",
          "colorName": "auto",
          "number": "6",
          "title": "Daftar Kosakata Baru",
          "body": "<p class=\"material-paragraph\">Daftar Kosakata Baru</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kosakata</th><th>Makna</th><th>Penjelasan &amp; Konteks Penggunaan</th></tr><tr><td>Watashi (私)</td><td>Saya</td><td>Kata ganti orang pertama yang paling aman</td></tr><tr><td>Gakusei (学生)</td><td>Mahasiswa/Siswa</td><td>Profesi sebagai pelajar</td></tr><tr><td>Sensei (先生)</td><td>Guru/Dosen</td><td>Gelar penghormatan untuk pengajar</td></tr><tr><td>Isha (医者)</td><td>Dokter</td><td>Profesi medis</td></tr><tr><td>…-jin (…人)</td><td>Orang (kebangsaan)</td><td>Akhira wajib setelah nama negara</td></tr><tr><td>Amerikajin (アメリカ人)</td><td>Orang Amerika</td><td>Contoh: Amerika + jin</td></tr><tr><td>Indoneshia-jin (インドネシア人)</td><td>Orang Indonesia</td><td>Nama negara dalam pelafalan Jepang</td></tr><tr><td>…-san (…さん)</td><td>Sdr./Tuan/Nyonya</td><td>Akhiran penghormatan wajib</td></tr><tr><td>Anata (あなた)</td><td>Anda</td><td>Hindari jika sudah tahu nama</td></tr></table></div>"
        }
      ],
      "quiz": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "Seorang siswa berkata: “Watashi mo gakusei desu.” Kalimat ini PALING tepat digunakan jika…",
          "options": [
            "Ia memperkenalkan diri pertama kali",
            "Ia menolak informasi",
            "Ia menanggapi orang lain yang juga mahasiswa",
            "Ia bertanya kepada orang lain"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Ia menanggapi orang lain yang juga mahasiswa”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “Ia memperkenalkan diri pertama kali” tidak tepat. も dipakai untuk makna “juga”; pilihan ini tidak cocok jika konteksnya bukan menyatakan kesamaan. Jawaban yang benar adalah “Ia menanggapi orang lain yang juga mahasiswa”.",
            "Salah. “Ia menolak informasi” tidak tepat. も dipakai untuk makna “juga”; pilihan ini tidak cocok jika konteksnya bukan menyatakan kesamaan. Jawaban yang benar adalah “Ia menanggapi orang lain yang juga mahasiswa”.",
            "Benar. “Ia menanggapi orang lain yang juga mahasiswa” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Ia bertanya kepada orang lain” tidak tepat. も dipakai untuk makna “juga”; pilihan ini tidak cocok jika konteksnya bukan menyatakan kesamaan. Jawaban yang benar adalah “Ia menanggapi orang lain yang juga mahasiswa”."
          ]
        },
        {
          "id": "q2",
          "type": "multiple-choice",
          "question": "Manakah kalimat yang tidak sopan secara konteks budaya Jepang?",
          "options": [
            "たなかさん は せんせい です",
            "わたし は がくせい です",
            "やまださん は いしゃ です",
            "わたしさん は がくせい です"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “わたしさん は がくせい です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “たなかさん は せんせい です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “わたしさん は がくせい です”.",
            "Salah. “わたし は がくせい です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたしさん は がくせい です”.",
            "Salah. “やまださん は いしゃ です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “わたしさん は がくせい です”.",
            "Benar. “わたしさん は がくせい です” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q3",
          "type": "multiple-choice",
          "question": "Jika seseorang berkata “Mira-san wa Indoneshia-jin desu.” dan informasi itu salah, jawaban yang PALING tepat adalah…",
          "options": [
            "みらさん は いんどねしあじん です か",
            "みらさん は いんどねしあじん じゃ ありません",
            "みらさん も いんどねしあじん です",
            "みらさん は いんどねしあじん です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “みらさん は いんどねしあじん じゃ ありません”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “みらさん は いんどねしあじん です か” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “みらさん は いんどねしあじん じゃ ありません”.",
            "Benar. “みらさん は いんどねしあじん じゃ ありません” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “みらさん も いんどねしあじん です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “みらさん は いんどねしあじん じゃ ありません”.",
            "Salah. “みらさん は いんどねしあじん です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “みらさん は いんどねしあじん じゃ ありません”."
          ]
        },
        {
          "id": "q4",
          "type": "multiple-choice",
          "question": "Mana kalimat yang menunjukkan fungsi partikel “wa” sebagai topik?",
          "options": [
            "わたし を がくせい です",
            "わたし は がくせい です",
            "わたし が がくせい です",
            "わたし も がくせい です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は がくせい です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “わたし を がくせい です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし は がくせい です”.",
            "Benar. “わたし は がくせい です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし が がくせい です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし は がくせい です”.",
            "Salah. “わたし も がくせい です” tidak tepat. も dipakai untuk makna “juga”; pilihan ini tidak cocok jika konteksnya bukan menyatakan kesamaan. Jawaban yang benar adalah “わたし は がくせい です”."
          ]
        },
        {
          "id": "q5",
          "type": "multiple-choice",
          "question": "Dalam percakapan formal, mengapa “Anata wa sensei desu ka?” kurang tepat?",
          "options": [
            "Karena tidak menggunakan “か”",
            "Karena “です” salah",
            "Karena penggunaan “あなた” sebaiknya dihindari jika tahu nama",
            "Karena “せんせい” tidak boleh digunakan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Karena penggunaan “あなた” sebaiknya dihindari jika tahu nama”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “Karena tidak menggunakan “か”” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “Karena penggunaan “あなた” sebaiknya dihindari jika tahu nama”.",
            "Salah. “Karena “です” salah” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “Karena penggunaan “あなた” sebaiknya dihindari jika tahu nama”.",
            "Benar. “Karena penggunaan “あなた” sebaiknya dihindari jika tahu nama” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Karena “せんせい” tidak boleh digunakan” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “Karena penggunaan “あなた” sebaiknya dihindari jika tahu nama”."
          ]
        },
        {
          "id": "q6",
          "type": "multiple-choice",
          "question": "Pilih kalimat yang strukturnya terbalik/tidak natural.",
          "options": [
            "わたし は がくせい です",
            "たなかさん は いしゃ です",
            "がくせい は わたし です",
            "みらさん は せんせい です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “がくせい は わたし です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “わたし は がくせい です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “がくせい は わたし です”.",
            "Salah. “たなかさん は いしゃ です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “がくせい は わたし です”.",
            "Benar. “がくせい は わたし です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “みらさん は せんせい です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “がくせい は わたし です”."
          ]
        },
        {
          "id": "q7",
          "type": "multiple-choice",
          "question": "Jika A berkata “Watashi wa sensei desu.” Respon B yang PALING natural adalah…",
          "options": [
            "わたし は せんせい です か",
            "わたし は せんせい じゃ ありません",
            "わたし も せんせい です",
            "わたし が せんせい です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし も せんせい です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “わたし は せんせい です か” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし も せんせい です”.",
            "Salah. “わたし は せんせい じゃ ありません” tidak tepat. Untuk menyangkal identitas, bentuk yang dipakai adalah じゃ ありません; pilihan ini tidak membentuk koreksi yang tepat. Jawaban yang benar adalah “わたし も せんせい です”.",
            "Benar. “わたし も せんせい です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし が せんせい です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし も せんせい です”."
          ]
        },
        {
          "id": "q8",
          "type": "multiple-choice",
          "question": "Kalimat mana yang menunjukkan kesalahan dalam penggunaan partikel?",
          "options": [
            "わたし は がくせい です",
            "わたし も がくせい です",
            "わたし を がくせい です",
            "わたし は せんせい です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし を がくせい です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “わたし は がくせい です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし を がくせい です”.",
            "Salah. “わたし も がくせい です” tidak tepat. も dipakai untuk makna “juga”; pilihan ini tidak cocok jika konteksnya bukan menyatakan kesamaan. Jawaban yang benar adalah “わたし を がくせい です”.",
            "Benar. “わたし を がくせい です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は せんせい です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし を がくせい です”."
          ]
        },
        {
          "id": "q9",
          "type": "multiple-choice",
          "question": "Jika seseorang bertanya “Yamada-san wa isha desu ka?” Jawaban negatif yang paling tepat adalah…",
          "options": [
            "いいえ, いしゃ です",
            "はい, じゃ ありません",
            "いいえ, いしゃ じゃ ありません",
            "いいえ, いしゃ も です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “いいえ, いしゃ じゃ ありません”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “いいえ, いしゃ です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “いいえ, いしゃ じゃ ありません”.",
            "Salah. “はい, じゃ ありません” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “いいえ, いしゃ じゃ ありません”.",
            "Benar. “いいえ, いしゃ じゃ ありません” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “いいえ, いしゃ も です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “いいえ, いしゃ じゃ ありません”."
          ]
        },
        {
          "id": "q10",
          "type": "multiple-choice",
          "question": "Kalimat mana yang menunjukkan penggunaan -san yang benar sekaligus sopan?",
          "options": [
            "わたしさん は がくせい です",
            "あなたさん は せんせい です",
            "すずきさん は いしゃ です",
            "せんせいさん は がくせい です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “すずきさん は いしゃ です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “わたしさん は がくせい です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “すずきさん は いしゃ です”.",
            "Salah. “あなたさん は せんせい です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “すずきさん は いしゃ です”.",
            "Benar. “すずきさん は いしゃ です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “せんせいさん は がくせい です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “すずきさん は いしゃ です”."
          ]
        },
        {
          "id": "q11",
          "type": "multiple-choice",
          "question": "Manakah kalimat yang secara struktur benar tetapi konteks penggunaannya salah?",
          "options": [
            "わたし は がくせい です",
            "たなかさん は いしゃ です",
            "あなた は たなかさん です",
            "みらさん は せんせい です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “あなた は たなかさん です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “わたし は がくせい です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “あなた は たなかさん です”.",
            "Salah. “たなかさん は いしゃ です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “あなた は たなかさん です”.",
            "Benar. “あなた は たなかさん です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “みらさん は せんせい です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “あなた は たなかさん です”."
          ]
        },
        {
          "id": "q12",
          "type": "multiple-choice",
          "question": "Fungsi utama “desu” dalam kalimat adalah…",
          "options": [
            "Penanda objek",
            "Penanda pertanyaan",
            "Memberikan kesan sopan dan menyatakan fakta",
            "Menyatakan kepemilikan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Memberikan kesan sopan dan menyatakan fakta”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “Penanda objek” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “Memberikan kesan sopan dan menyatakan fakta”.",
            "Salah. “Penanda pertanyaan” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “Memberikan kesan sopan dan menyatakan fakta”.",
            "Benar. “Memberikan kesan sopan dan menyatakan fakta” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Menyatakan kepemilikan” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “Memberikan kesan sopan dan menyatakan fakta”."
          ]
        },
        {
          "id": "q13",
          "type": "multiple-choice",
          "question": "A: Watashi wa gakusei desu. B: Watashi ___ gakusei desu. Pilihan yang paling tepat adalah…",
          "options": [
            "は",
            "か",
            "も",
            "の"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “も”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “は” tidak tepat. Susunan topik + identitas + です atau pilihan kosakatanya belum sesuai dengan konteks pengenalan diri. Jawaban yang benar adalah “も”.",
            "Salah. “か” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “も”.",
            "Benar. “も” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “の” tidak tepat. Susunan topik + identitas + です atau pilihan kosakatanya belum sesuai dengan konteks pengenalan diri. Jawaban yang benar adalah “も”."
          ]
        },
        {
          "id": "q14",
          "type": "multiple-choice",
          "question": "Mana kalimat yang menunjukkan pertanyaan tanpa mengubah struktur dasar?",
          "options": [
            "わたし か がくせい です",
            "わたし は がくせい です か",
            "わたし は か がくせい です",
            "わたし です がくせい か"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は がくせい です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “わたし か がくせい です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし は がくせい です か”.",
            "Benar. “わたし は がくせい です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は か がくせい です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし は がくせい です か”.",
            "Salah. “わたし です がくせい か” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし は がくせい です か”."
          ]
        },
        {
          "id": "q15",
          "type": "multiple-choice",
          "question": "Jika ingin menyatakan “Saya bukan dokter, tapi mahasiswa”, mana yang PALING tepat?",
          "options": [
            "わたし は いしゃ です, がくせい です",
            "わたし は いしゃ じゃ ありません, がくせい です",
            "わたし は いしゃ も がくせい です",
            "わたし は いしゃ か がくせい です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は いしゃ じゃ ありません, がくせい です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “わたし は いしゃ です, がくせい です” tidak tepat. Untuk menyangkal identitas, bentuk yang dipakai adalah じゃ ありません; pilihan ini tidak membentuk koreksi yang tepat. Jawaban yang benar adalah “わたし は いしゃ じゃ ありません, がくせい です”.",
            "Benar. “わたし は いしゃ じゃ ありません, がくせい です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は いしゃ も がくせい です” tidak tepat. Untuk menyangkal identitas, bentuk yang dipakai adalah じゃ ありません; pilihan ini tidak membentuk koreksi yang tepat. Jawaban yang benar adalah “わたし は いしゃ じゃ ありません, がくせい です”.",
            "Salah. “わたし は いしゃ か がくせい です” tidak tepat. Untuk menyangkal identitas, bentuk yang dipakai adalah じゃ ありません; pilihan ini tidak membentuk koreksi yang tepat. Jawaban yang benar adalah “わたし は いしゃ じゃ ありません, がくせい です”."
          ]
        },
        {
          "id": "q16",
          "type": "multiple-choice",
          "question": "Mana kalimat yang menunjukkan kesalahan penggunaan “mo”?",
          "options": [
            "わたし も がくせい です",
            "たなかさん も せんせい です",
            "わたし も じゃ ありません",
            "みらさん も いしゃ です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし も じゃ ありません”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “わたし も がくせい です” tidak tepat. も dipakai untuk makna “juga”; pilihan ini tidak cocok jika konteksnya bukan menyatakan kesamaan. Jawaban yang benar adalah “わたし も じゃ ありません”.",
            "Salah. “たなかさん も せんせい です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “わたし も じゃ ありません”.",
            "Benar. “わたし も じゃ ありません” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “みらさん も いしゃ です” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “わたし も じゃ ありません”."
          ]
        },
        {
          "id": "q17",
          "type": "multiple-choice",
          "question": "Jika ingin bertanya tanpa terdengar kasar, mana yang paling tepat?",
          "options": [
            "あなた は だれ です か",
            "たなかさん は だれ です か",
            "おまえ は だれ か",
            "きみ は だれ か"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “たなかさん は だれ です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “あなた は だれ です か” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “たなかさん は だれ です か”.",
            "Benar. “たなかさん は だれ です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “おまえ は だれ か” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “たなかさん は だれ です か”.",
            "Salah. “きみ は だれ か” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “たなかさん は だれ です か”."
          ]
        },
        {
          "id": "q18",
          "type": "multiple-choice",
          "question": "Kalimat “Watashi wa sensei desu ka” bermakna…",
          "options": [
            "Saya adalah guru",
            "Saya bukan guru",
            "Apakah saya guru?",
            "Saya juga guru"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Apakah saya guru?”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “Saya adalah guru” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “Apakah saya guru?”.",
            "Salah. “Saya bukan guru” tidak tepat. Untuk menyangkal identitas, bentuk yang dipakai adalah じゃ ありません; pilihan ini tidak membentuk koreksi yang tepat. Jawaban yang benar adalah “Apakah saya guru?”.",
            "Benar. “Apakah saya guru?” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Saya juga guru” tidak tepat. も dipakai untuk makna “juga”; pilihan ini tidak cocok jika konteksnya bukan menyatakan kesamaan. Jawaban yang benar adalah “Apakah saya guru?”."
          ]
        },
        {
          "id": "q19",
          "type": "multiple-choice",
          "question": "Mana yang menunjukkan konsep negasi dengan benar?",
          "options": [
            "です → も",
            "です → か",
            "です → じゃ ありません",
            "です → は"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “です → じゃ ありません”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “です → も” tidak tepat. も dipakai untuk makna “juga”; pilihan ini tidak cocok jika konteksnya bukan menyatakan kesamaan. Jawaban yang benar adalah “です → じゃ ありません”.",
            "Salah. “です → か” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “です → じゃ ありません”.",
            "Benar. “です → じゃ ありません” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “です → は” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “です → じゃ ありません”."
          ]
        },
        {
          "id": "q20",
          "type": "multiple-choice",
          "question": "Dalam situasi formal, kalimat mana yang paling tepat untuk memperkenalkan orang lain?",
          "options": [
            "やまだ いしゃ です",
            "やまだ は いしゃ",
            "やまださん は いしゃ です",
            "やまださん いしゃ"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “やまださん は いしゃ です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん.",
          "optionExplanations": [
            "Salah. “やまだ いしゃ です” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “やまださん は いしゃ です”.",
            "Salah. “やまだ は いしゃ” tidak tepat. か diletakkan di akhir kalimat untuk membuat pertanyaan; susunan pada pilihan ini tidak sesuai. Jawaban yang benar adalah “やまださん は いしゃ です”.",
            "Benar. “やまださん は いしゃ です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “やまださん いしゃ” tidak tepat. Perhatikan etika sapaan: -さん digunakan untuk orang lain, bukan untuk diri sendiri, dan tidak selalu ditempelkan pada kata ganti. Jawaban yang benar adalah “やまださん は いしゃ です”."
          ]
        },
        {
          "id": "q21",
          "type": "essay",
          "question": "A: Watashi wa gakusei desu.\nB: Watashi ___ gakusei desu.",
          "acceptedAnswers": [
            "mo",
            "も"
          ],
          "explanation": "Jawaban yang diharapkan adalah “も”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん."
        },
        {
          "id": "q22",
          "type": "essay",
          "question": "A: Tanaka-san wa sensei desu ka?\nB: Iie, Tanaka-san wa sensei __________.",
          "acceptedAnswers": [
            "ja arimasen",
            "じゃありません",
            "じゃ ありません",
            "ではありません",
            "では ありません"
          ],
          "explanation": "Jawaban yang diharapkan adalah “じゃ ありません”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん."
        },
        {
          "id": "q23",
          "type": "essay",
          "question": "A: Yamada-san wa isha desu ___?\nB: Hai, isha desu.",
          "acceptedAnswers": [
            "ka",
            "か"
          ],
          "explanation": "Jawaban yang diharapkan adalah “か”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん."
        },
        {
          "id": "q24",
          "type": "essay",
          "question": "A: Mira-san wa Amerikajin desu ka?\nB: Iie, Mira-san wa Amerikajin __________.",
          "acceptedAnswers": [
            "ja arimasen",
            "じゃありません",
            "じゃ ありません",
            "ではありません",
            "では ありません"
          ],
          "explanation": "Jawaban yang diharapkan adalah “じゃ ありません”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん."
        },
        {
          "id": "q25",
          "type": "essay",
          "question": "A: Watashi wa Indoneshia-jin desu.\nB: Watashi ___ Indoneshia-jin desu.",
          "acceptedAnswers": [
            "mo",
            "も"
          ],
          "explanation": "Jawaban yang diharapkan adalah “も”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang pengenalan diri, partikel は/も/か, bentuk negatif じゃ ありません, serta etika -さん."
        }
      ],
      "media": {
        "image": "assets/images/lesson-1-1.svg",
        "imageAlt": "Ilustrasi pengenalan diri dalam Bahasa Jepang",
        "title": "Contoh pengucapan identitas diri",
        "audioText": "私は学生です。",
        "audioRomaji": "Watashi wa gakusei desu.",
        "audioTranslation": "Saya adalah mahasiswa.",
        "audioLang": "ja-JP"
      }
    },
    "1-2": {
      "id": "1-2",
      "title": "Menunjuk Benda dan Kepemilikan",
      "titleJP": "物の指示と所有",
      "chapterTitle": "Bab 1: Fondasi Dasar",
      "duration": "~20 menit",
      "introduction": "Fokus utama bab ini adalah agar Anda mampu bertanya dan memberi tahu nama benda, serta mengidentifikasi siapa pemilik benda tersebut. Kita akan mempelajari sistem “Tiga Jarak” yang menjadi ciri khas logika ruang dalam bahasa Jepang.",
      "sections": [
        {
          "type": "timeline-card",
          "color": "#7c6df7",
          "colorName": "auto",
          "number": "1",
          "title": "Sistem Tiga Jarak: Kore (これ), Sore (それ), dan Are (あれ)",
          "body": "<p class=\"material-paragraph\">Sistem Tiga Jarak: Kore (これ), Sore (それ), dan Are (あれ) Berbeda dengan bahasa Indonesia yang hanya punya “ini” dan “itu”, bahasa Jepang membagi jarak menjadi tiga zona:</p><p class=\"material-paragraph\">Tabel Tiga Jarak</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kata</th><th>Penjelasan</th></tr><tr><td>Kore (これ)</td><td>Benda berada di dekat Anda (pembicara)</td></tr><tr><td>Sore (それ)</td><td>Benda berada di dekat lawan bicara Anda</td></tr><tr><td>Are (あれ)</td><td>Benda berada jauh dari Anda maupun lawan bicara</td></tr></table></div><p class=\"material-paragraph\">Pola Kalimat Dasar:</p><p class=\"material-paragraph\">[Kore / Sore / Are] は [Nama Benda] です。</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Kore wa hon desu.</p><p class=\"material-paragraph\">(これ は 本 です。)</p><p class=\"material-paragraph\">→ Ini adalah buku.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#60a5fa",
          "colorName": "auto",
          "number": "2",
          "title": "Variasi Spesifik: Kono (この), Sono (その), dan Ano (あの)",
          "body": "<p class=\"material-paragraph\">Variasi Spesifik: Kono (この), Sono (その), dan Ano (あの) Kore/Sore/Are adalah kata ganti yang berdiri sendiri. Kono/Sono/Ano adalah kata sifat penunjuk → wajib diikuti langsung oleh kata benda.</p><p class=\"material-paragraph\">Tabel Perbedaan</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kata</th><th>Penjelasan</th></tr><tr><td>Kono (この)</td><td>Benda ini (dekat pembicara)</td></tr><tr><td>Sono (その)</td><td>Benda itu (dekat lawan bicara)</td></tr><tr><td>Ano (あの)</td><td>Benda itu jauh (jauh dari kita berdua)</td></tr></table></div><p class=\"material-paragraph\">Contoh perbedaan:</p><p class=\"material-paragraph\">Kore wa kagi desu.</p><p class=\"material-paragraph\">(これ は 鍵 です。)</p><p class=\"material-paragraph\">→ Ini adalah kunci.</p><p class=\"material-paragraph\">Kono kagi wa watashi no desu.</p><p class=\"material-paragraph\">(この 鍵 は 私 の です。)</p><p class=\"material-paragraph\">→ Kunci ini milik saya.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#34d399",
          "colorName": "auto",
          "number": "3",
          "title": "Partikel Kepemilikan: “No” (の)",
          "body": "<p class=\"material-paragraph\">Partikel Kepemilikan: “No” (の) Partikel ini menghubungkan pemilik dengan barangnya. Rumus Dasar: [Pemilik] の [Barang]</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Sore wa dare no kasa desu ka?</p><p class=\"material-paragraph\">(それ は だれ の 傘 です か？)</p><p class=\"material-paragraph\">→ Itu payung punya siapa?</p>"
        },
        {
          "type": "timeline-card",
          "color": "#f59e0b",
          "colorName": "auto",
          "number": "4",
          "title": "Konfirmasi Singkat: “Sou desu” (そうです)",
          "body": "<p class=\"material-paragraph\">Konfirmasi Singkat: “Sou desu” (そうです) Orang Jepang suka jawaban pendek dan efisien.</p><p class=\"material-paragraph\">Tabel Konfirmasi</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Ungkapan</th><th>Arti</th><th>Keterangan</th></tr><tr><td>Sou desu (そうです)</td><td>Ya, benar / begitu</td><td>Jawaban mengiyakan</td></tr><tr><td>Sou ja arimasen (そうじゃありません)</td><td>Bukan begitu / salah</td><td>Jawaban menyangkal</td></tr></table></div>"
        },
        {
          "type": "timeline-card",
          "color": "#fb7185",
          "colorName": "auto",
          "number": "5",
          "title": "Daftar Kosakata Baru",
          "body": "<p class=\"material-paragraph\">Daftar Kosakata Baru</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kosakata</th><th>Makna</th><th>Penjelasan &amp; Konteks Penggunaan</th></tr><tr><td>Hon (本)</td><td>Buku</td><td>Objek paling umum untuk latihan</td></tr><tr><td>Jisho (辞書)</td><td>Kamus</td><td>—</td></tr><tr><td>Kagi (鍵)</td><td>Kunci</td><td>Sering dipakai dalam contoh kepemilikan</td></tr><tr><td>Tokei (時計)</td><td>Jam (tangan/dinding)</td><td>—</td></tr><tr><td>Kasa (傘)</td><td>Payung</td><td>Penting di Jepang (musim hujan)</td></tr><tr><td>Dare (だれ)</td><td>Siapa</td><td>Kata tanya untuk orang</td></tr><tr><td>Sou desu (そうです)</td><td>Ya, begitu</td><td>Jawaban singkat</td></tr></table></div>"
        }
      ],
      "quiz": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "Seorang pembicara memegang sebuah buku di tangannya. Kalimat yang paling tepat adalah…",
          "options": [
            "それ は ほん です",
            "これ は ほん です",
            "あれ は ほん です",
            "その ほん は です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “これ は ほん です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “それ は ほん です” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “これ は ほん です”.",
            "Benar. “これ は ほん です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あれ は ほん です” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “これ は ほん です”.",
            "Salah. “その ほん は です” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “これ は ほん です”."
          ]
        },
        {
          "id": "q2",
          "type": "multiple-choice",
          "question": "Jika benda berada di dekat lawan bicara, kata penunjuk yang paling tepat adalah…",
          "options": [
            "これ",
            "それ",
            "あれ",
            "この"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “それ”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “これ” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “それ”.",
            "Benar. “それ” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あれ” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “それ”.",
            "Salah. “この” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “それ”."
          ]
        },
        {
          "id": "q3",
          "type": "multiple-choice",
          "question": "Manakah kalimat yang benar untuk menyatakan “Kunci ini milik saya”?",
          "options": [
            "これ かぎ は わたし の です",
            "この は かぎ わたし の です",
            "この かぎ は わたし の です",
            "かぎ この は わたし です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “この かぎ は わたし の です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “これ かぎ は わたし の です” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “この かぎ は わたし の です”.",
            "Salah. “この は かぎ わたし の です” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “この かぎ は わたし の です”.",
            "Benar. “この かぎ は わたし の です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “かぎ この は わたし です” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “この かぎ は わたし の です”."
          ]
        },
        {
          "id": "q4",
          "type": "multiple-choice",
          "question": "Perbedaan utama antara kore dan kono adalah…",
          "options": [
            "これ harus diikuti kata benda, この bisa berdiri sendiri",
            "これ bisa berdiri sendiri, この harus diikuti kata benda",
            "これ untuk benda jauh, この untuk orang",
            "Keduanya selalu bisa saling menggantikan"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “これ bisa berdiri sendiri, この harus diikuti kata benda”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “これ harus diikuti kata benda, この bisa berdiri sendiri” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “これ bisa berdiri sendiri, この harus diikuti kata benda”.",
            "Benar. “これ bisa berdiri sendiri, この harus diikuti kata benda” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “これ untuk benda jauh, この untuk orang” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “これ bisa berdiri sendiri, この harus diikuti kata benda”.",
            "Salah. “Keduanya selalu bisa saling menggantikan” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “これ bisa berdiri sendiri, この harus diikuti kata benda”."
          ]
        },
        {
          "id": "q5",
          "type": "multiple-choice",
          "question": "Manakah kalimat yang salah secara struktur?",
          "options": [
            "これ は ほん です",
            "それ は じしょ です",
            "あれ は とけい です",
            "この は かぎ です"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “この は かぎ です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “これ は ほん です” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “この は かぎ です”.",
            "Salah. “それ は じしょ です” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “この は かぎ です”.",
            "Salah. “あれ は とけい です” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “この は かぎ です”.",
            "Benar. “この は かぎ です” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q6",
          "type": "multiple-choice",
          "question": "Jika payung berada jauh dari pembicara dan lawan bicara, kata yang tepat adalah…",
          "options": [
            "これ",
            "それ",
            "あれ",
            "その"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “あれ”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “これ” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “あれ”.",
            "Salah. “それ” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “あれ”.",
            "Benar. “あれ” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “その” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “あれ”."
          ]
        },
        {
          "id": "q7",
          "type": "multiple-choice",
          "question": "Kalimat “Itu kamus?” ketika benda dekat lawan bicara adalah…",
          "options": [
            "これ は じしょ です か",
            "それ は じしょ です か",
            "あれ は じしょ です か",
            "この じしょ です か"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “それ は じしょ です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “これ は じしょ です か” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “それ は じしょ です か”.",
            "Benar. “それ は じしょ です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あれ は じしょ です か” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “それ は じしょ です か”.",
            "Salah. “この じしょ です か” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “それ は じしょ です か”."
          ]
        },
        {
          "id": "q8",
          "type": "multiple-choice",
          "question": "Partikel no (の) dalam Bab 2 berfungsi untuk menyatakan…",
          "options": [
            "Pertanyaan",
            "Kesamaan",
            "Kepemilikan",
            "Penyangkalan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Kepemilikan”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “Pertanyaan” tidak tepat. Kepemilikan memakai pola pemilik + の + benda; susunan pada pilihan ini belum tepat. Jawaban yang benar adalah “Kepemilikan”.",
            "Salah. “Kesamaan” tidak tepat. Kepemilikan memakai pola pemilik + の + benda; susunan pada pilihan ini belum tepat. Jawaban yang benar adalah “Kepemilikan”.",
            "Benar. “Kepemilikan” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Penyangkalan” tidak tepat. Kepemilikan memakai pola pemilik + の + benda; susunan pada pilihan ini belum tepat. Jawaban yang benar adalah “Kepemilikan”."
          ]
        },
        {
          "id": "q9",
          "type": "multiple-choice",
          "question": "Kalimat paling tepat untuk bertanya “Ini buku milik siapa?” adalah…",
          "options": [
            "これ は だれ の ほん です か",
            "これ は ほん だれ です か",
            "この は だれ の ほん です か",
            "だれ は これ の ほん です か"
          ],
          "correct": 0,
          "explanation": "Jawaban yang benar adalah “これ は だれ の ほん です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Benar. “これ は だれ の ほん です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “これ は ほん だれ です か” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “これ は だれ の ほん です か”.",
            "Salah. “この は だれ の ほん です か” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “これ は だれ の ほん です か”.",
            "Salah. “だれ は これ の ほん です か” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “これ は だれ の ほん です か”."
          ]
        },
        {
          "id": "q10",
          "type": "multiple-choice",
          "question": "Jika “Sore wa kagi desu ka?” dan benda itu memang kunci, jawaban singkat yang tepat adalah…",
          "options": [
            "いいえ, そう です",
            "はい, そう です",
            "はい, そう じゃ ありません",
            "いいえ, これ です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “はい, そう です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “いいえ, そう です” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “はい, そう です”.",
            "Benar. “はい, そう です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “はい, そう じゃ ありません” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “はい, そう です”.",
            "Salah. “いいえ, これ です” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “はい, そう です”."
          ]
        },
        {
          "id": "q11",
          "type": "multiple-choice",
          "question": "Jika seseorang salah mengira benda itu jam, padahal bukan, jawaban yang tepat adalah…",
          "options": [
            "はい, そう です",
            "はい, とけい です",
            "いいえ, そう じゃ ありません",
            "いいえ, そう です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “いいえ, そう じゃ ありません”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “はい, そう です” tidak tepat. Pilihan ini tidak sesuai dengan sistem tiga jarak atau pola kepemilikan pada Bab 2. Jawaban yang benar adalah “いいえ, そう じゃ ありません”.",
            "Salah. “はい, とけい です” tidak tepat. Pilihan ini tidak sesuai dengan sistem tiga jarak atau pola kepemilikan pada Bab 2. Jawaban yang benar adalah “いいえ, そう じゃ ありません”.",
            "Benar. “いいえ, そう じゃ ありません” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “いいえ, そう です” tidak tepat. Pilihan ini tidak sesuai dengan sistem tiga jarak atau pola kepemilikan pada Bab 2. Jawaban yang benar adalah “いいえ, そう じゃ ありません”."
          ]
        },
        {
          "id": "q12",
          "type": "multiple-choice",
          "question": "Manakah kalimat yang menunjukkan penggunaan sono dengan benar?",
          "options": [
            "その は ほん です",
            "その ほん は わたし の です",
            "その です ほん は",
            "ほん は その です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “その ほん は わたし の です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “その は ほん です” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “その ほん は わたし の です”.",
            "Benar. “その ほん は わたし の です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “その です ほん は” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “その ほん は わたし の です”.",
            "Salah. “ほん は その です” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “その ほん は わたし の です”."
          ]
        },
        {
          "id": "q13",
          "type": "multiple-choice",
          "question": "Kalimat “Buku itu milik Yamada” yang paling tepat adalah…",
          "options": [
            "その ほん は やまだ です",
            "その ほん は やまださん です",
            "その ほん は やまださん の です",
            "その ほん やまださん は です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “その ほん は やまださん の です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “その ほん は やまだ です” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “その ほん は やまださん の です”.",
            "Salah. “その ほん は やまださん です” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “その ほん は やまださん の です”.",
            "Benar. “その ほん は やまださん の です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “その ほん やまださん は です” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “その ほん は やまださん の です”."
          ]
        },
        {
          "id": "q14",
          "type": "multiple-choice",
          "question": "Siswa menunjuk jam yang jauh dari semua orang. Bagian penunjuk yang paling tepat adalah…",
          "options": [
            "これ",
            "それ",
            "あの とけい",
            "この とけい"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “あの とけい”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “これ” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “あの とけい”.",
            "Salah. “それ” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “あの とけい”.",
            "Benar. “あの とけい” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “この とけい” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “あの とけい”."
          ]
        },
        {
          "id": "q15",
          "type": "multiple-choice",
          "question": "Manakah pasangan yang benar antara kata dan fungsi?",
          "options": [
            "これ = benda jauh dari semua orang",
            "あれ = benda dekat lawan bicara",
            "それ = benda dekat lawan bicara",
            "この = bisa berdiri sendiri"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “それ = benda dekat lawan bicara”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “これ = benda jauh dari semua orang” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “それ = benda dekat lawan bicara”.",
            "Salah. “あれ = benda dekat lawan bicara” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “それ = benda dekat lawan bicara”.",
            "Benar. “それ = benda dekat lawan bicara” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “この = bisa berdiri sendiri” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “それ = benda dekat lawan bicara”."
          ]
        },
        {
          "id": "q16",
          "type": "multiple-choice",
          "question": "Kalimat “Payung ini milik siapa?” yang paling tepat adalah…",
          "options": [
            "かさ は だれ の これ です か",
            "この かさ は だれ の です か",
            "この は だれ の かさ です か",
            "だれ は この かさ です か"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “この かさ は だれ の です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “かさ は だれ の これ です か” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “この かさ は だれ の です か”.",
            "Benar. “この かさ は だれ の です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “この は だれ の かさ です か” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “この かさ は だれ の です か”.",
            "Salah. “だれ は この かさ です か” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “この かさ は だれ の です か”."
          ]
        },
        {
          "id": "q17",
          "type": "multiple-choice",
          "question": "Dalam “Watashi no kasa”, watashi no berarti…",
          "options": [
            "Saya adalah payung",
            "Saya juga payung",
            "Payung milik saya / milik saya",
            "Apakah saya punya payung"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Payung milik saya / milik saya”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “Saya adalah payung” tidak tepat. Kepemilikan memakai pola pemilik + の + benda; susunan pada pilihan ini belum tepat. Jawaban yang benar adalah “Payung milik saya / milik saya”.",
            "Salah. “Saya juga payung” tidak tepat. Kepemilikan memakai pola pemilik + の + benda; susunan pada pilihan ini belum tepat. Jawaban yang benar adalah “Payung milik saya / milik saya”.",
            "Benar. “Payung milik saya / milik saya” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Apakah saya punya payung” tidak tepat. Kepemilikan memakai pola pemilik + の + benda; susunan pada pilihan ini belum tepat. Jawaban yang benar adalah “Payung milik saya / milik saya”."
          ]
        },
        {
          "id": "q18",
          "type": "multiple-choice",
          "question": "Jika benda dekat pembicara dan langsung menyebut nama bendanya, bentuk yang tepat adalah…",
          "options": [
            "これ ほん",
            "この ほん",
            "あれ ほん",
            "それ ほん"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “この ほん”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “これ ほん” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “この ほん”.",
            "Benar. “この ほん” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あれ ほん” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “この ほん”.",
            "Salah. “それ ほん” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “この ほん”."
          ]
        },
        {
          "id": "q19",
          "type": "multiple-choice",
          "question": "A: Kore wa hon desu ka? Padahal benda itu kamus. Koreksi paling tepat adalah…",
          "options": [
            "はい, そう です",
            "いいえ, ほん です",
            "いいえ, そう じゃ ありません. これ は じしょ です",
            "はい, これ は じしょ じゃ ありません"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “いいえ, そう じゃ ありません. これ は じしょ です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “はい, そう です” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “いいえ, そう じゃ ありません. これ は じしょ です”.",
            "Salah. “いいえ, ほん です” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “いいえ, そう じゃ ありません. これ は じしょ です”.",
            "Benar. “いいえ, そう じゃ ありません. これ は じしょ です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “はい, これ は じしょ じゃ ありません” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “いいえ, そう じゃ ありません. これ は じしょ です”."
          ]
        },
        {
          "id": "q20",
          "type": "multiple-choice",
          "question": "Teman memegang kunci. Anda bertanya “Apakah kunci itu milikmu?” Kalimat yang tepat adalah…",
          "options": [
            "これ は わたし の かぎ です か",
            "その かぎ は あなた の です か",
            "あれ かぎ は あなた です か",
            "この かぎ は だれ です か"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “その かぎ は あなた の です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です.",
          "optionExplanations": [
            "Salah. “これ は わたし の かぎ です か” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “その かぎ は あなた の です か”.",
            "Benar. “その かぎ は あなた の です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あれ かぎ は あなた です か” tidak tepat. これ/それ/あれ dipilih berdasarkan jarak benda dari pembicara dan lawan bicara; pilihan ini tidak sesuai dengan jarak pada soal. Jawaban yang benar adalah “その かぎ は あなた の です か”.",
            "Salah. “この かぎ は だれ です か” tidak tepat. この/その/あの harus langsung diikuti kata benda. Jika berdiri sendiri, gunakan これ/それ/あれ. Jawaban yang benar adalah “その かぎ は あなた の です か”."
          ]
        },
        {
          "id": "q21",
          "type": "essay",
          "question": "A: Kore wa hon desu ka?\nB: Hai, __________.",
          "acceptedAnswers": [
            "sou desu",
            "そうです",
            "そう です"
          ],
          "explanation": "Jawaban yang diharapkan adalah “そう です”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です."
        },
        {
          "id": "q22",
          "type": "essay",
          "question": "A: Sore wa dare ___ kasa desu ka?\nB: Watashi no kasa desu.",
          "acceptedAnswers": [
            "no",
            "の"
          ],
          "explanation": "Jawaban yang diharapkan adalah “の”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です."
        },
        {
          "id": "q23",
          "type": "essay",
          "question": "A: Kono kagi wa watashi ___ desu.\nB: Sou desu ka.",
          "acceptedAnswers": [
            "no",
            "の"
          ],
          "explanation": "Jawaban yang diharapkan adalah “の”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です."
        },
        {
          "id": "q24",
          "type": "essay",
          "question": "A: Are wa tokei desu ka?\nB: Iie, __________.",
          "acceptedAnswers": [
            "sou ja arimasen",
            "そうじゃありません",
            "そう じゃ ありません",
            "そうではありません",
            "そう では ありません"
          ],
          "explanation": "Jawaban yang diharapkan adalah “そう じゃ ありません”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です."
        },
        {
          "id": "q25",
          "type": "essay",
          "question": "A: __________ hon wa dare no desu ka?\nB: Tanaka-san no desu.\nKonteks: buku berada dekat pembicara.",
          "acceptedAnswers": [
            "kono",
            "この"
          ],
          "explanation": "Jawaban yang diharapkan adalah “この”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata penunjuk これ/それ/あれ, この/その/あの, partikel の, dan konfirmasi そう です."
        }
      ],
      "media": {
        "image": "assets/images/lesson-1-2.svg",
        "imageAlt": "Ilustrasi menunjuk benda dan kepemilikan",
        "title": "Contoh pengucapan menunjuk benda",
        "audioText": "これは本です。",
        "audioRomaji": "Kore wa hon desu.",
        "audioTranslation": "Ini adalah buku.",
        "audioLang": "ja-JP"
      }
    },
    "1-3": {
      "id": "1-3",
      "title": "Menemukan Jalan",
      "titleJP": "場所と位置",
      "chapterTitle": "Bab 1: Fondasi Dasar",
      "duration": "~20 menit",
      "introduction": "Setelah bisa mengenalkan diri dan menunjuk barang, sekarang kita belajar “navigasi”. Fokus bab ini adalah agar Anda bisa mencari ruangan, bertanya arah, hingga menanyakan harga barang saat berbelanja. Ini bab paling praktis untuk bertahan hidup di Jepang.",
      "sections": [
        {
          "type": "timeline-card",
          "color": "#7c6df7",
          "colorName": "auto",
          "number": "1",
          "title": "“Tiga Zona” Ruang: Koko (ここ), Soko (そこ), dan Asoko (あそこ)",
          "body": "<p class=\"material-paragraph\">“Tiga Zona” Ruang: Koko (ここ), Soko (そこ), dan Asoko (あそこ) Sama seperti benda, tempat juga dibagi menjadi tiga zona berdasarkan jarak dari pembicara.</p><p class=\"material-paragraph\">Tabel Tiga Zona Tempat</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kata</th><th>Penjelasan</th></tr><tr><td>Koko (ここ)</td><td>Tempat di mana Anda (pembicara) sedang berdiri saat ini</td></tr><tr><td>Soko (そこ)</td><td>Tempat di mana lawan bicara Anda sedang berdiri</td></tr><tr><td>Asoko (あそこ)</td><td>Tempat yang jauh dari Anda berdua</td></tr></table></div><p class=\"material-paragraph\">Contoh Kalimat:</p><p class=\"material-paragraph\">Koko wa kyoushitsu desu.</p><p class=\"material-paragraph\">(ここ は 教室 です。)</p><p class=\"material-paragraph\">→ Sini adalah ruang kelas.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#60a5fa",
          "colorName": "auto",
          "number": "2",
          "title": "Versi Sopan & Menunjuk Arah: Kochira (こちら), Sochira (そちら), dan Achira (あちら)",
          "body": "<p class=\"material-paragraph\">Versi Sopan &amp; Menunjuk Arah: Kochira (こちら), Sochira (そちら), dan Achira (あちら) Kalau berbicara dengan atasan, tamu, atau pelanggan, gunakan versi sopan ini (lebih hormat dan bisa bermakna “arah”).</p><p class=\"material-paragraph\">Tabel Versi Sopan</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kata</th><th>Maksud</th></tr><tr><td>Kochira (こちら)</td><td>Di sebelah sini / Sini (dekat saya)</td></tr><tr><td>Sochira (そちら)</td><td>Di sebelah situ / Situ (dekat Anda)</td></tr><tr><td>Achira (あちら)</td><td>Di sebelah sana / Sana (jauh dari kita berdua)</td></tr><tr><td>Dochira (どちら)</td><td>Mana / Di mana / Ke mana?</td></tr></table></div><p class=\"material-paragraph\">Tabel Perbandingan</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Situasi</th><th>Versi Standar</th><th>Versi Sopan/Arah</th></tr><tr><td>Menunjuk tempat</td><td>Koko, Soko, Asoko</td><td>Kochira, Sochira, Achira</td></tr><tr><td>Bertanya lokasi</td><td>Doko (どこ)</td><td>Dochira (どちら)</td></tr><tr><td>Kesan bahasa</td><td>Biasa / akrab</td><td>Formal / hormat</td></tr></table></div><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Toire wa dochira desu ka?</p><p class=\"material-paragraph\">(トイレ は どちら です か？)</p><p class=\"material-paragraph\">→ Di mana toilet?</p>"
        },
        {
          "type": "timeline-card",
          "color": "#34d399",
          "colorName": "auto",
          "number": "3",
          "title": "Menanyakan Harga: Ikura (いくら)",
          "body": "<p class=\"material-paragraph\">Menanyakan Harga: Ikura (いくら) Kata tanya khusus untuk bertanya harga barang (sangat berguna di toko, pasar, atau department store).</p><p class=\"material-paragraph\">Pola Kalimat:</p><p class=\"material-paragraph\">[Benda] は いくら です か？</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Kono tokei wa ikura desu ka?</p><p class=\"material-paragraph\">(この 時計 は いくら です か？)</p><p class=\"material-paragraph\">→ Jam tangan ini harganya berapa?</p>"
        },
        {
          "type": "timeline-card",
          "color": "#f59e0b",
          "colorName": "auto",
          "number": "4",
          "title": "Daftar Kosakata Baru",
          "body": "<p class=\"material-paragraph\">Daftar Kosakata Baru</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kosakata</th><th>Makna</th><th>Penjelasan &amp; Konteks Penggunaan</th></tr><tr><td>Kyoushitsu (教室)</td><td>Ruang kelas</td><td>Tempat belajar</td></tr><tr><td>Toire (トイレ)</td><td>Toilet</td><td>Fasilitas yang paling sering dicari</td></tr><tr><td>Jimusho (事務所)</td><td>Kantor</td><td>Ruang kerja</td></tr><tr><td>Uketsuke (受付)</td><td>Resepsionis</td><td>Meja informasi</td></tr><tr><td>Erebeetaa (エレベーター)</td><td>Lift</td><td>Kata serapan dari “elevator”</td></tr><tr><td>Depaato (デパート)</td><td>Toko serba ada</td><td>Mall / department store</td></tr><tr><td>Ikura (いくら)</td><td>Berapa (harga)</td><td>Kata tanya khusus harga</td></tr><tr><td>Dochira (どちら)</td><td>Mana / di mana</td><td>Versi sopan dari doko</td></tr></table></div>"
        }
      ],
      "quiz": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "Anda berdiri di depan ruang kelas dan ingin mengatakan “Di sini adalah ruang kelas.”",
          "options": [
            "そこ は きょうしつ です",
            "ここ は きょうしつ です",
            "あそこ は きょうしつ です",
            "どこ は きょうしつ です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “ここ は きょうしつ です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “そこ は きょうしつ です” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “ここ は きょうしつ です”.",
            "Benar. “ここ は きょうしつ です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あそこ は きょうしつ です” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “ここ は きょうしつ です”.",
            "Salah. “どこ は きょうしつ です” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “ここ は きょうしつ です”."
          ]
        },
        {
          "id": "q2",
          "type": "multiple-choice",
          "question": "Jika tempat yang dimaksud berada dekat lawan bicara, kata penunjuk tempat yang tepat adalah…",
          "options": [
            "ここ",
            "そこ",
            "あそこ",
            "どこ"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “そこ”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “ここ” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “そこ”.",
            "Benar. “そこ” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あそこ” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “そこ”.",
            "Salah. “どこ” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “そこ”."
          ]
        },
        {
          "id": "q3",
          "type": "multiple-choice",
          "question": "Dalam situasi formal, kata tanya “di mana” yang paling tepat adalah…",
          "options": [
            "どこ",
            "ここ",
            "そこ",
            "どちら"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “どちら”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “どこ” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “どちら”.",
            "Salah. “ここ” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “どちら”.",
            "Salah. “そこ” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “どちら”.",
            "Benar. “どちら” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q4",
          "type": "multiple-choice",
          "question": "Kalimat paling tepat untuk bertanya “Di mana toilet?” secara sopan adalah…",
          "options": [
            "といれ は どこ です",
            "といれ は いくら です か",
            "といれ は どちら です か",
            "といれ は そこ です か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “といれ は どちら です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “といれ は どこ です” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “といれ は どちら です か”.",
            "Salah. “といれ は いくら です か” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “といれ は どちら です か”.",
            "Benar. “といれ は どちら です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “といれ は そこ です か” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “といれ は どちら です か”."
          ]
        },
        {
          "id": "q5",
          "type": "multiple-choice",
          "question": "Petugas menunjukkan arah lift yang jauh dari dirinya dan tamu. Kata yang tepat adalah…",
          "options": [
            "こちら",
            "そちら",
            "あちら",
            "どちら"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “あちら”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “こちら” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “あちら”.",
            "Salah. “そちら” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “あちら”.",
            "Benar. “あちら” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “どちら” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “あちら”."
          ]
        },
        {
          "id": "q6",
          "type": "multiple-choice",
          "question": "Kata ikura digunakan untuk menanyakan…",
          "options": [
            "Lokasi",
            "Orang",
            "Harga",
            "Arah"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Harga”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “Lokasi” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “Harga”.",
            "Salah. “Orang” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “Harga”.",
            "Benar. “Harga” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Arah” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “Harga”."
          ]
        },
        {
          "id": "q7",
          "type": "multiple-choice",
          "question": "Kalimat “Jam tangan ini harganya berapa?” yang benar adalah…",
          "options": [
            "この とけい は どこ です か",
            "この とけい は いくら です か",
            "この とけい は どちら です か",
            "この とけい は きょうしつ です か"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “この とけい は いくら です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “この とけい は どこ です か” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “この とけい は いくら です か”.",
            "Benar. “この とけい は いくら です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “この とけい は どちら です か” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “この とけい は いくら です か”.",
            "Salah. “この とけい は きょうしつ です か” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “この とけい は いくら です か”."
          ]
        },
        {
          "id": "q8",
          "type": "multiple-choice",
          "question": "Perbedaan utama koko/soko/asoko dan kochira/sochira/achira adalah…",
          "options": [
            "ここ/そこ/あそこ hanya untuk harga",
            "こちら/そちら/あちら hanya untuk benda",
            "こちら/そちら/あちら lebih sopan dan bisa bermakna arah",
            "Tidak ada perbedaan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “こちら/そちら/あちら lebih sopan dan bisa bermakna arah”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “ここ/そこ/あそこ hanya untuk harga” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “こちら/そちら/あちら lebih sopan dan bisa bermakna arah”.",
            "Salah. “こちら/そちら/あちら hanya untuk benda” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “こちら/そちら/あちら lebih sopan dan bisa bermakna arah”.",
            "Benar. “こちら/そちら/あちら lebih sopan dan bisa bermakna arah” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Tidak ada perbedaan” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “こちら/そちら/あちら lebih sopan dan bisa bermakna arah”."
          ]
        },
        {
          "id": "q9",
          "type": "multiple-choice",
          "question": "Manakah kalimat yang tidak logis berdasarkan arti kata tanyanya?",
          "options": [
            "といれ は どちら です か",
            "じむしょ は どこ です か",
            "この とけい は いくら です か",
            "きょうしつ は いくら です か"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “きょうしつ は いくら です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “といれ は どちら です か” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “きょうしつ は いくら です か”.",
            "Salah. “じむしょ は どこ です か” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “きょうしつ は いくら です か”.",
            "Salah. “この とけい は いくら です か” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “きょうしつ は いくら です か”.",
            "Benar. “きょうしつ は いくら です か” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q10",
          "type": "multiple-choice",
          "question": "Bertanya lokasi kantor kepada resepsionis secara formal paling tepat adalah…",
          "options": [
            "じむしょ は ここ です か",
            "じむしょ は いくら です か",
            "じむしょ は どちら です か",
            "じむしょ は なん です か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “じむしょ は どちら です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “じむしょ は ここ です か” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “じむしょ は どちら です か”.",
            "Salah. “じむしょ は いくら です か” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “じむしょ は どちら です か”.",
            "Benar. “じむしょ は どちら です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “じむしょ は なん です か” tidak tepat. Kata tanya atau kata penunjuk tempat pada pilihan ini tidak sesuai dengan konteks navigasi. Jawaban yang benar adalah “じむしょ は どちら です か”."
          ]
        },
        {
          "id": "q11",
          "type": "multiple-choice",
          "question": "Asoko digunakan untuk tempat yang…",
          "options": [
            "Dekat pembicara",
            "Dekat lawan bicara",
            "Jauh dari pembicara dan lawan bicara",
            "Tidak diketahui harganya"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Jauh dari pembicara dan lawan bicara”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “Dekat pembicara” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “Jauh dari pembicara dan lawan bicara”.",
            "Salah. “Dekat lawan bicara” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “Jauh dari pembicara dan lawan bicara”.",
            "Benar. “Jauh dari pembicara dan lawan bicara” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Tidak diketahui harganya” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “Jauh dari pembicara dan lawan bicara”."
          ]
        },
        {
          "id": "q12",
          "type": "multiple-choice",
          "question": "Manakah pasangan yang benar?",
          "options": [
            "ここ = tempat dekat lawan bicara",
            "そこ = tempat dekat lawan bicara",
            "あそこ = tempat dekat pembicara",
            "どちら = berapa harga"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “そこ = tempat dekat lawan bicara”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “ここ = tempat dekat lawan bicara” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “そこ = tempat dekat lawan bicara”.",
            "Benar. “そこ = tempat dekat lawan bicara” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あそこ = tempat dekat pembicara” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “そこ = tempat dekat lawan bicara”.",
            "Salah. “どちら = berapa harga” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “そこ = tempat dekat lawan bicara”."
          ]
        },
        {
          "id": "q13",
          "type": "multiple-choice",
          "question": "Dalam percakapan dengan teman dekat, bertanya “Di mana toilet?” dapat menggunakan…",
          "options": [
            "といれ は どこ です か",
            "といれ は いくら です か",
            "といれ は だれ です か",
            "といれ は なん です か"
          ],
          "correct": 0,
          "explanation": "Jawaban yang benar adalah “といれ は どこ です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Benar. “といれ は どこ です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “といれ は いくら です か” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “といれ は どこ です か”.",
            "Salah. “といれ は だれ です か” tidak tepat. Kata tanya atau kata penunjuk tempat pada pilihan ini tidak sesuai dengan konteks navigasi. Jawaban yang benar adalah “といれ は どこ です か”.",
            "Salah. “といれ は なん です か” tidak tepat. Kata tanya atau kata penunjuk tempat pada pilihan ini tidak sesuai dengan konteks navigasi. Jawaban yang benar adalah “といれ は どこ です か”."
          ]
        },
        {
          "id": "q14",
          "type": "multiple-choice",
          "question": "Jika seseorang berkata “Uketsuke wa kochira desu,” maksudnya adalah…",
          "options": [
            "Resepsionis ada di sana jauh",
            "Resepsionis ada di sebelah sini / arah sini",
            "Resepsionis harganya berapa",
            "Resepsionis dekat lawan bicara"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “Resepsionis ada di sebelah sini / arah sini”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “Resepsionis ada di sana jauh” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “Resepsionis ada di sebelah sini / arah sini”.",
            "Benar. “Resepsionis ada di sebelah sini / arah sini” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Resepsionis harganya berapa” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “Resepsionis ada di sebelah sini / arah sini”.",
            "Salah. “Resepsionis dekat lawan bicara” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “Resepsionis ada di sebelah sini / arah sini”."
          ]
        },
        {
          "id": "q15",
          "type": "multiple-choice",
          "question": "Kalimat benar untuk “Di sana jauh adalah department store” adalah…",
          "options": [
            "ここ は でぱあと です",
            "そこ は でぱあと です",
            "あそこ は でぱあと です",
            "どちら は でぱあと です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “あそこ は でぱあと です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “ここ は でぱあと です” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “あそこ は でぱあと です”.",
            "Salah. “そこ は でぱあと です” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “あそこ は でぱあと です”.",
            "Benar. “あそこ は でぱあと です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “どちら は でぱあと です” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “あそこ は でぱあと です”."
          ]
        },
        {
          "id": "q16",
          "type": "multiple-choice",
          "question": "Kata dochira dapat bermakna…",
          "options": [
            "Siapa / milik siapa",
            "Apa / benda apa",
            "Mana / di mana / ke mana",
            "Berapa harga"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Mana / di mana / ke mana”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “Siapa / milik siapa” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “Mana / di mana / ke mana”.",
            "Salah. “Apa / benda apa” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “Mana / di mana / ke mana”.",
            "Benar. “Mana / di mana / ke mana” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Berapa harga” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “Mana / di mana / ke mana”."
          ]
        },
        {
          "id": "q17",
          "type": "multiple-choice",
          "question": "Anda di dekat pintu masuk, ruang kelas dekat teman. “Di situ ruang kelas” adalah…",
          "options": [
            "ここ は きょうしつ です",
            "そこ は きょうしつ です",
            "あそこ は きょうしつ です",
            "どちら は きょうしつ です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “そこ は きょうしつ です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “ここ は きょうしつ です” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “そこ は きょうしつ です”.",
            "Benar. “そこ は きょうしつ です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あそこ は きょうしつ です” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “そこ は きょうしつ です”.",
            "Salah. “どちら は きょうしつ です” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “そこ は きょうしつ です”."
          ]
        },
        {
          "id": "q18",
          "type": "multiple-choice",
          "question": "Kalimat paling tepat untuk bertanya harga di toko adalah…",
          "options": [
            "これ は どこ です か",
            "これ は どちら です か",
            "これ は いくら です か",
            "これ は ここ です か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “これ は いくら です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “これ は どこ です か” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “これ は いくら です か”.",
            "Salah. “これ は どちら です か” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “これ は いくら です か”.",
            "Benar. “これ は いくら です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “これ は ここ です か” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “これ は いくら です か”."
          ]
        },
        {
          "id": "q19",
          "type": "multiple-choice",
          "question": "Jika resepsionis berkata “Toire wa sochira desu,” kemungkinan toilet berada…",
          "options": [
            "Dekat resepsionis",
            "Dekat lawan bicara / arah situ",
            "Jauh dari semua orang",
            "Tidak diketahui lokasinya"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “Dekat lawan bicara / arah situ”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “Dekat resepsionis” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “Dekat lawan bicara / arah situ”.",
            "Benar. “Dekat lawan bicara / arah situ” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Jauh dari semua orang” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “Dekat lawan bicara / arah situ”.",
            "Salah. “Tidak diketahui lokasinya” tidak tepat. Kelompok -chira dipakai untuk bentuk sopan atau arah; pilihan ini tidak cocok dengan konteks jarak/lokasi pada soal. Jawaban yang benar adalah “Dekat lawan bicara / arah situ”."
          ]
        },
        {
          "id": "q20",
          "type": "multiple-choice",
          "question": "“Koko wa uketsuke desu” berarti…",
          "options": [
            "Di sana adalah resepsionis",
            "Di situ adalah resepsionis",
            "Di sini adalah resepsionis",
            "Resepsionis harganya berapa"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Di sini adalah resepsionis”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga.",
          "optionExplanations": [
            "Salah. “Di sana adalah resepsionis” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “Di sini adalah resepsionis”.",
            "Salah. “Di situ adalah resepsionis” tidak tepat. ここ/そこ/あそこ/どこ dipilih berdasarkan lokasi; pilihan ini tidak sesuai dengan posisi yang dijelaskan. Jawaban yang benar adalah “Di sini adalah resepsionis”.",
            "Benar. “Di sini adalah resepsionis” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Resepsionis harganya berapa” tidak tepat. いくら hanya digunakan untuk menanyakan harga, bukan lokasi atau arah. Jawaban yang benar adalah “Di sini adalah resepsionis”."
          ]
        },
        {
          "id": "q21",
          "type": "essay",
          "question": "A: Toire wa __________ desu ka?\nB: Achira desu.\nKonteks: A bertanya secara sopan kepada petugas.",
          "acceptedAnswers": [
            "dochira",
            "どちら"
          ],
          "explanation": "Jawaban yang diharapkan adalah “どちら”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga."
        },
        {
          "id": "q22",
          "type": "essay",
          "question": "A: Kono tokei wa __________ desu ka?\nB: Sanzen-en desu.\nKonteks: A bertanya harga jam tangan.",
          "acceptedAnswers": [
            "ikura",
            "いくら"
          ],
          "explanation": "Jawaban yang diharapkan adalah “いくら”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga."
        },
        {
          "id": "q23",
          "type": "essay",
          "question": "A: __________ wa kyoushitsu desu.\nB: Sou desu ka.\nKonteks: pembicara sedang berdiri di ruang kelas.",
          "acceptedAnswers": [
            "koko",
            "ここ"
          ],
          "explanation": "Jawaban yang diharapkan adalah “ここ”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga."
        },
        {
          "id": "q24",
          "type": "essay",
          "question": "A: Erebeetaa wa __________ desu.\nB: Arigatou gozaimasu.\nKonteks: lift berada jauh dari pembicara dan lawan bicara.",
          "acceptedAnswers": [
            "achira",
            "あちら"
          ],
          "explanation": "Jawaban yang diharapkan adalah “あちら”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga."
        },
        {
          "id": "q25",
          "type": "essay",
          "question": "A: Jimusho wa __________ desu ka?\nB: Kochira desu.\nKonteks: A bertanya lokasi kantor secara formal.",
          "acceptedAnswers": [
            "dochira",
            "どちら"
          ],
          "explanation": "Jawaban yang diharapkan adalah “どちら”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata tempat ここ/そこ/あそこ, bentuk sopan こちら/そちら/あちら/どちら, dan いくら untuk harga."
        }
      ],
      "media": {
        "image": "assets/images/lesson-1-3.svg",
        "imageAlt": "Ilustrasi bertanya arah dan lokasi",
        "title": "Contoh pengucapan bertanya lokasi",
        "audioText": "トイレはどちらですか。",
        "audioRomaji": "Toire wa dochira desu ka.",
        "audioTranslation": "Di mana toilet?",
        "audioLang": "ja-JP"
      }
    },
    "2-1": {
      "id": "2-1",
      "title": "Waktu dan Aktivitas Sehari-hari",
      "titleJP": "時間と日常活動",
      "chapterTitle": "Bab 2: Kata Kerja dan Aktivitas",
      "duration": "~22 menit",
      "introduction": "Fokus utama bab ini adalah membekali Anda dengan kemampuan untuk menceritakan jadwal harian, jam berapa Anda melakukan sesuatu, serta memahami konsep waktu dalam bahasa Jepang. Ini adalah kunci agar Anda bisa membuat janji temu atau menjelaskan rutinitas kerja/sekolah.",
      "sections": [
        {
          "type": "timeline-card",
          "color": "#7c6df7",
          "colorName": "auto",
          "number": "1",
          "title": "Menyatakan Jam (~Ji) dan Menit (~Fun/Pun)",
          "body": "<p class=\"material-paragraph\">Menyatakan Jam (~Ji) dan Menit (~Fun/Pun) Waktu dalam bahasa Jepang menggunakan akhiran khusus yang ditempelkan langsung setelah angka.</p><p class=\"material-paragraph\">Tabel Angka Jam (～時 / ~ji)</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Jam</th><th>Bahasa Jepang</th><th>Keterangan</th></tr><tr><td>Jam 1</td><td>Ichi-ji (いちじ)</td><td>Standar</td></tr><tr><td>Jam 2</td><td>Ni-ji (にじ)</td><td>Standar</td></tr><tr><td>Jam 3</td><td>San-ji (さんじ)</td><td>Standar</td></tr><tr><td>Jam 4</td><td>Yo-ji (よじ)</td><td>Bukan yon-ji</td></tr><tr><td>Jam 5</td><td>Go-ji (ごじ)</td><td>Standar</td></tr><tr><td>Jam 6</td><td>Roku-ji (ろくじ)</td><td>Standar</td></tr><tr><td>Jam 7</td><td>Shichi-ji (しちじ)</td><td>Bukan nana-ji</td></tr><tr><td>Jam 8</td><td>Hachi-ji (はちじ)</td><td>Standar</td></tr><tr><td>Jam 9</td><td>Ku-ji (くじ)</td><td>Bukan kyuu-ji</td></tr><tr><td>Jam 10</td><td>Juu-ji (じゅうじ)</td><td>Standar</td></tr><tr><td>Jam 11</td><td>Juuichi-ji (じゅういちじ)</td><td>Standar</td></tr><tr><td>Jam 12</td><td>Juuni-ji (じゅうにじ)</td><td>Standar</td></tr></table></div>"
        },
        {
          "type": "timeline-card",
          "color": "#60a5fa",
          "colorName": "auto",
          "number": "2",
          "title": "Menyatakan Menit (~分 / ~fun / ~pun)",
          "body": "<p class=\"material-paragraph\">Menyatakan Menit (~分 / ~fun / ~pun)</p><p class=\"material-paragraph\">Angka + Fun/Pun. Ada perubahan bunyi pada angka tertentu (contoh: 1 menit = ippun, 3 menit = sanpun, 6 menit = roppun, 8 menit = happun, 10 menit = juppun).</p>"
        },
        {
          "type": "timeline-card",
          "color": "#34d399",
          "colorName": "auto",
          "number": "3",
          "title": "Kalimat Tanya Jam Sekarang:",
          "body": "<p class=\"material-paragraph\">Kalimat Tanya Jam Sekarang:</p><p class=\"material-paragraph\">Ima nan-ji desu ka?</p><p class=\"material-paragraph\">(今 何時 です か？)</p><p class=\"material-paragraph\">→ Jam berapa sekarang?</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Ima go-ji desu.</p><p class=\"material-paragraph\">(今 5時 です。)</p><p class=\"material-paragraph\">→ Sekarang jam 5.</p><p class=\"material-paragraph\">Ima juuichi-ji sanjuppun desu.</p><p class=\"material-paragraph\">(今 11時 30分 です。)</p><p class=\"material-paragraph\">→ Sekarang jam 11:30.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#f59e0b",
          "colorName": "auto",
          "number": "4",
          "title": "Kata Kerja Bentuk ~Masu (Pondasi Aktivitas)",
          "body": "<p class=\"material-paragraph\">Kata Kerja Bentuk ~Masu (Pondasi Aktivitas) Pola ini digunakan untuk menyatakan kegiatan rutin atau yang akan dilakukan di masa depan. Kata kerja selalu di akhir kalimat.</p><p class=\"material-paragraph\">Tabel Bentuk ~Masu</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Bentuk</th><th>Arti</th><th>Contoh</th></tr><tr><td>~Masu</td><td>Melakukan sesuatu</td><td>Hatarakimasu (働きます) → Bekerja</td></tr><tr><td>~Masen</td><td>Tidak melakukan</td><td>Hatarakimasen (働きません) → Tidak bekerja</td></tr></table></div>"
        },
        {
          "type": "timeline-card",
          "color": "#fb7185",
          "colorName": "auto",
          "number": "5",
          "title": "Partikel Waktu Spesifik: “Ni” (に)",
          "body": "<p class=\"material-paragraph\">Partikel Waktu Spesifik: “Ni” (に) Digunakan untuk waktu yang pasti (angka jam, hari, dll).</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Roku-ji ni okimasu.</p><p class=\"material-paragraph\">(6時 に 起きます。)</p><p class=\"material-paragraph\">→ Bangun pada jam 6.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#14b8a6",
          "colorName": "auto",
          "number": "6",
          "title": "Partikel Durasi: “Kara” (から) dan “Made” (まで)",
          "body": "<p class=\"material-paragraph\">Partikel Durasi: “Kara” (から) dan “Made” (まで) Kara = dari (titik mulai) Made = sampai (titik selesai)</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Kuji kara juuichi-ji made はたらきmasu.</p><p class=\"material-paragraph\">(9時 から 11時 まで 働きます。)</p><p class=\"material-paragraph\">→ Bekerja dari jam 9 sampai jam 11.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#a78bfa",
          "colorName": "auto",
          "number": "7",
          "title": "Daftar Kosakata Baru",
          "body": "<p class=\"material-paragraph\">Daftar Kosakata Baru</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kosakata</th><th>Makna</th><th>Penjelasan &amp; Konteks Penggunaan</th></tr><tr><td>Ima (今)</td><td>Sekarang</td><td>Kata dasar waktu</td></tr><tr><td>~Ji (～時)</td><td>Jam</td><td>Akhira untuk jam</td></tr><tr><td>~Fun / ~Pun (～分)</td><td>Menit</td><td>Akhira untuk menit</td></tr><tr><td>Okimasu (起きます)</td><td>Bangun</td><td>Aktivitas pagi</td></tr><tr><td>Hatarakimasu (働きます)</td><td>Bekerja</td><td>Aktivitas kantor</td></tr><tr><td>Nemasu (寝ます)</td><td>Tidur</td><td>Aktivitas malam</td></tr><tr><td>~Kara (～から)</td><td>Dari</td><td>Titik mulai</td></tr><tr><td>~Made (～まで)</td><td>Sampai</td><td>Titik selesai</td></tr><tr><td>~Ni (～に)</td><td>Pada (waktu)</td><td>Penanda waktu spesifik</td></tr></table></div>"
        }
      ],
      "quiz": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "Seorang siswa ingin mengatakan “Sekarang jam 4.” Manakah kalimat yang tepat?",
          "options": [
            "いま よんじ です",
            "いま しじ です",
            "いま よじ です",
            "いま よっつじ です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “いま よじ です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “いま よんじ です” tidak tepat. Beberapa jam memiliki bentuk khusus, seperti よじ, しちじ, dan くじ. Jawaban yang benar adalah “いま よじ です”.",
            "Salah. “いま しじ です” tidak tepat. Beberapa jam memiliki bentuk khusus, seperti よじ, しちじ, dan くじ. Jawaban yang benar adalah “いま よじ です”.",
            "Benar. “いま よじ です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “いま よっつじ です” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “いま よじ です”."
          ]
        },
        {
          "id": "q2",
          "type": "multiple-choice",
          "question": "Akhiran untuk menyatakan jam dalam bahasa Jepang adalah…",
          "options": [
            "~ふん",
            "~ぷん",
            "~じ",
            "~じん"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “~じ”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “~ふん” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “~じ”.",
            "Salah. “~ぷん” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “~じ”.",
            "Benar. “~じ” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “~じん” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “~じ”."
          ]
        },
        {
          "id": "q3",
          "type": "multiple-choice",
          "question": "Manakah penyebutan jam yang tidak sesuai aturan Bab 4?",
          "options": [
            "いちじ",
            "さんじ",
            "ごじ",
            "よんじ"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “よんじ”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “いちじ” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “よんじ”.",
            "Salah. “さんじ” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “よんじ”.",
            "Salah. “ごじ” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “よんじ”.",
            "Benar. “よんじ” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q4",
          "type": "multiple-choice",
          "question": "Kalimat tanya untuk “Jam berapa sekarang?” adalah…",
          "options": [
            "いま なんじ です か",
            "いま いくら です か",
            "いま どこ です か",
            "いま だれ です か"
          ],
          "correct": 0,
          "explanation": "Jawaban yang benar adalah “いま なんじ です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Benar. “いま なんじ です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “いま いくら です か” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “いま なんじ です か”.",
            "Salah. “いま どこ です か” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “いま なんじ です か”.",
            "Salah. “いま だれ です か” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “いま なんじ です か”."
          ]
        },
        {
          "id": "q5",
          "type": "multiple-choice",
          "question": "Dalam bahasa Jepang, kata kerja bentuk ~masu biasanya diletakkan di…",
          "options": [
            "Awal kalimat",
            "Setelah subjek",
            "Sebelum partikel",
            "Akhir kalimat"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “Akhir kalimat”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “Awal kalimat” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “Akhir kalimat”.",
            "Salah. “Setelah subjek” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “Akhir kalimat”.",
            "Salah. “Sebelum partikel” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “Akhir kalimat”.",
            "Benar. “Akhir kalimat” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q6",
          "type": "multiple-choice",
          "question": "Kalimat “Saya bangun pada jam 6” yang tepat adalah…",
          "options": [
            "わたし は ろくじ おきます に",
            "わたし は ろくじ に おきます",
            "わたし は ろくじ から おきます",
            "わたし は ろくじ まで おきます"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は ろくじ に おきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “わたし は ろくじ おきます に” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “わたし は ろくじ に おきます”.",
            "Benar. “わたし は ろくじ に おきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は ろくじ から おきます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “わたし は ろくじ に おきます”.",
            "Salah. “わたし は ろくじ まで おきます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “わたし は ろくじ に おきます”."
          ]
        },
        {
          "id": "q7",
          "type": "multiple-choice",
          "question": "Partikel ni pada “Roku-ji ni okimasu” menunjukkan…",
          "options": [
            "Alat",
            "Kepemilikan",
            "Waktu spesifik",
            "Pertanyaan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Waktu spesifik”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “Alat” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “Waktu spesifik”.",
            "Salah. “Kepemilikan” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “Waktu spesifik”.",
            "Benar. “Waktu spesifik” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Pertanyaan” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “Waktu spesifik”."
          ]
        },
        {
          "id": "q8",
          "type": "multiple-choice",
          "question": "Kalimat tepat untuk “Saya tidak bekerja” adalah…",
          "options": [
            "わたし は はたらきます",
            "わたし は はたらきません",
            "わたし は はたらき です",
            "わたし は はたらきます か"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は はたらきません”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “わたし は はたらきます” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “わたし は はたらきません”.",
            "Benar. “わたし は はたらきません” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は はたらき です” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “わたし は はたらきません”.",
            "Salah. “わたし は はたらきます か” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “わたし は はたらきません”."
          ]
        },
        {
          "id": "q9",
          "type": "multiple-choice",
          "question": "Durasi “dari jam 9 sampai jam 11” memakai pasangan…",
          "options": [
            "に … か",
            "は … です",
            "から … まで",
            "も … に"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “から … まで”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “に … か” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “から … まで”.",
            "Salah. “は … です” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “から … まで”.",
            "Benar. “から … まで” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “も … に” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “から … まで”."
          ]
        },
        {
          "id": "q10",
          "type": "multiple-choice",
          "question": "“Saya bekerja dari jam 9 sampai jam 11” yang benar adalah…",
          "options": [
            "くじ に じゅういちじ まで はたらきます",
            "くじ まで じゅういちじ から はたらきます",
            "くじ から じゅういちじ まで はたらきます",
            "くじ か じゅういちじ に はたらきます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “くじ から じゅういちじ まで はたらきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “くじ に じゅういちじ まで はたらきます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “くじ から じゅういちじ まで はたらきます”.",
            "Salah. “くじ まで じゅういちじ から はたらきます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “くじ から じゅういちじ まで はたらきます”.",
            "Benar. “くじ から じゅういちじ まで はたらきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “くじ か じゅういちじ に はたらきます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “くじ から じゅういちじ まで はたらきます”."
          ]
        },
        {
          "id": "q11",
          "type": "multiple-choice",
          "question": "Penyebutan yang benar untuk jam 7 adalah…",
          "options": [
            "ななじ",
            "しちじ",
            "ななつじ",
            "しちふん"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “しちじ”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “ななじ” tidak tepat. Beberapa jam memiliki bentuk khusus, seperti よじ, しちじ, dan くじ. Jawaban yang benar adalah “しちじ”.",
            "Benar. “しちじ” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “ななつじ” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “しちじ”.",
            "Salah. “しちふん” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “しちじ”."
          ]
        },
        {
          "id": "q12",
          "type": "multiple-choice",
          "question": "Dalam Bab 4, “はたらきmasu” berarti…",
          "options": [
            "Bangun",
            "Tidur",
            "Bekerja",
            "Bertanya"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Bekerja”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “Bangun” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “Bekerja”.",
            "Salah. “Tidur” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “Bekerja”.",
            "Benar. “Bekerja” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Bertanya” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “Bekerja”."
          ]
        },
        {
          "id": "q13",
          "type": "multiple-choice",
          "question": "“Ima juuichi-ji sanjuppun desu” artinya…",
          "options": [
            "Sekarang jam 10:30",
            "Sekarang jam 11:03",
            "Sekarang jam 11:30",
            "Sekarang jam 12:30"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Sekarang jam 11:30”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “Sekarang jam 10:30” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “Sekarang jam 11:30”.",
            "Salah. “Sekarang jam 11:03” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “Sekarang jam 11:30”.",
            "Benar. “Sekarang jam 11:30” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Sekarang jam 12:30” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “Sekarang jam 11:30”."
          ]
        },
        {
          "id": "q14",
          "type": "multiple-choice",
          "question": "Angka menit yang berubah bunyi menjadi roppun adalah…",
          "options": [
            "3 menit",
            "5 menit",
            "6 menit",
            "7 menit"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “6 menit”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “3 menit” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “6 menit”.",
            "Salah. “5 menit” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “6 menit”.",
            "Benar. “6 menit” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “7 menit” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “6 menit”."
          ]
        },
        {
          "id": "q15",
          "type": "multiple-choice",
          "question": "Kalimat “Tidur pada jam 10” yang tepat adalah…",
          "options": [
            "じゅうじ から ねます",
            "じゅうじ まで ねます",
            "じゅうじ に ねます",
            "じゅうじ か ねます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “じゅうじ に ねます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “じゅうじ から ねます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “じゅうじ に ねます”.",
            "Salah. “じゅうじ まで ねます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “じゅうじ に ねます”.",
            "Benar. “じゅうじ に ねます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “じゅうじ か ねます” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “じゅうじ に ねます”."
          ]
        },
        {
          "id": "q16",
          "type": "multiple-choice",
          "question": "Manakah kalimat yang penggunaan partikelnya tidak tepat?",
          "options": [
            "ろくじ に おきます",
            "くじ から はたらきます",
            "じゅういちじ まで はたらきます",
            "ごじ も ねます"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “ごじ も ねます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “ろくじ に おきます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “ごじ も ねます”.",
            "Salah. “くじ から はたらきます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “ごじ も ねます”.",
            "Salah. “じゅういちじ まで はたらきます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “ごじ も ねます”.",
            "Benar. “ごじ も ねます” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q17",
          "type": "multiple-choice",
          "question": "Kata ima berarti…",
          "options": [
            "Kemarin",
            "Besok",
            "Sekarang",
            "Sampai"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Sekarang”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “Kemarin” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “Sekarang”.",
            "Salah. “Besok” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “Sekarang”.",
            "Benar. “Sekarang” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Sampai” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “Sekarang”."
          ]
        },
        {
          "id": "q18",
          "type": "multiple-choice",
          "question": "Untuk kegiatan rutin/akan dilakukan secara sopan, gunakan bentuk…",
          "options": [
            "Bentuk kamus",
            "Bentuk negatif",
            "Bentuk ~masu",
            "Bentuk kepemilikan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Bentuk ~masu”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “Bentuk kamus” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “Bentuk ~masu”.",
            "Salah. “Bentuk negatif” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “Bentuk ~masu”.",
            "Benar. “Bentuk ~masu” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Bentuk kepemilikan” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “Bentuk ~masu”."
          ]
        },
        {
          "id": "q19",
          "type": "multiple-choice",
          "question": "Kalimat “Saya bekerja sampai jam 5” yang tepat adalah…",
          "options": [
            "わたし は ごじ から はたらきます",
            "わたし は ごじ まで はたらきます",
            "わたし は ごじ に から はたらきます",
            "わたし は ごじ です はたらきます"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は ごじ まで はたらきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “わたし は ごじ から はたらきます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “わたし は ごじ まで はたらきます”.",
            "Benar. “わたし は ごじ まで はたらきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は ごじ に から はたらきます” tidak tepat. Partikel waktu harus sesuai fungsi: に untuk waktu spesifik, から untuk mulai, dan まで untuk sampai. Jawaban yang benar adalah “わたし は ごじ まで はたらきます”.",
            "Salah. “わたし は ごじ です はたらきます” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “わたし は ごじ まで はたらきます”."
          ]
        },
        {
          "id": "q20",
          "type": "multiple-choice",
          "question": "Jawaban tepat untuk “Ima nan-ji desu ka?” adalah…",
          "options": [
            "いま はたらきます",
            "いま いくら です",
            "いま ごじ です",
            "いま がくせい です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “いま ごじ です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi.",
          "optionExplanations": [
            "Salah. “いま はたらきます” tidak tepat. Bentuk masu menyatakan melakukan kegiatan, sedangkan masen menyatakan tidak melakukan kegiatan. Jawaban yang benar adalah “いま ごじ です”.",
            "Salah. “いま いくら です” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “いま ごじ です”.",
            "Benar. “いま ごじ です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “いま がくせい です” tidak tepat. Pilihan ini tidak mengikuti aturan waktu atau pola kata kerja pada Bab 4. Jawaban yang benar adalah “いま ごじ です”."
          ]
        },
        {
          "id": "q21",
          "type": "essay",
          "question": "A: Ima nan-ji desu ka?\nB: Ima __________ desu.\nKonteks: sekarang jam 9.",
          "acceptedAnswers": [
            "ku-ji",
            "kuji",
            "くじ",
            "九時"
          ],
          "explanation": "Jawaban yang diharapkan adalah “くじ”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi."
        },
        {
          "id": "q22",
          "type": "essay",
          "question": "A: Nan-ji ni okimasu ka?\nB: Roku-ji ___ okimasu.\nKonteks: bangun pada jam 6.",
          "acceptedAnswers": [
            "ni",
            "に"
          ],
          "explanation": "Jawaban yang diharapkan adalah “に”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi."
        },
        {
          "id": "q23",
          "type": "essay",
          "question": "A: Watashi wa ku-ji ___ juuichi-ji ___ はたらきmasu.\nB: Sou desu ka.\nKonteks: bekerja dari jam 9 sampai jam 11.",
          "acceptedAnswers": [
            "kara, made",
            "kara made",
            "から, まで",
            "から まで",
            "からまで"
          ],
          "explanation": "Jawaban yang diharapkan adalah “から, まで”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi."
        },
        {
          "id": "q24",
          "type": "essay",
          "question": "A: Juu-ji ni はたらきmasu ka?\nB: Iie, はたらきma__________.\nKonteks: menjawab “Tidak, saya tidak bekerja.”",
          "acceptedAnswers": [
            "sen",
            "せん"
          ],
          "explanation": "Jawaban yang diharapkan adalah “せん”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi."
        },
        {
          "id": "q25",
          "type": "essay",
          "question": "A: Ima __________ desu ka?\nB: Ima go-ji desu.\nKonteks: A menanyakan jam sekarang.",
          "acceptedAnswers": [
            "nan-ji",
            "nanji",
            "なんじ",
            "何時"
          ],
          "explanation": "Jawaban yang diharapkan adalah “なんじ”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang waktu, bentuk kata kerja masu/masen, partikel に untuk waktu, serta からまで untuk durasi."
        }
      ],
      "media": {
        "image": "assets/images/lesson-2-1.svg",
        "imageAlt": "Ilustrasi waktu dan aktivitas sehari-hari",
        "title": "Contoh pengucapan waktu",
        "audioText": "今五時です。",
        "audioRomaji": "Ima go-ji desu.",
        "audioTranslation": "Sekarang jam lima.",
        "audioLang": "ja-JP"
      }
    },
    "2-2": {
      "id": "2-2",
      "title": "Pergi ke Mana?",
      "titleJP": "交通手段と移動",
      "chapterTitle": "Bab 2: Kata Kerja dan Aktivitas",
      "duration": "~22 menit",
      "introduction": "Bab ini mengajak Anda mulai “melangkah” keluar dari lingkungan sekitar. Fokus utamanya adalah membekali Anda agar bisa menjelaskan tujuan perjalanan, jenis transportasi yang digunakan, serta dengan siapa Anda pergi.",
      "sections": [
        {
          "type": "timeline-card",
          "color": "#7c6df7",
          "colorName": "auto",
          "number": "1",
          "title": "Kata Kerja Pergerakan: Ikimasu (行きます), Kimasu (来ます), dan Kaerimasu (帰ります)",
          "body": "<p class=\"material-paragraph\">Kata Kerja Pergerakan: Ikimasu (行きます), Kimasu (来ます), dan Kaerimasu (帰ります) Dalam bahasa Jepang ada tiga kata kerja utama untuk menyatakan perpindahan posisi:</p><p class=\"material-paragraph\">Tabel Kata Kerja Pergerakan</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kata Kerja</th><th>Arti</th><th>Keterangan</th></tr><tr><td>Ikimasu (行きます)</td><td>Pergi</td><td>Bergerak menjauhi posisi sekarang</td></tr><tr><td>Kimasu (来ます)</td><td>Datang</td><td>Bergerak menuju posisi pembicara</td></tr><tr><td>Kaerimasu (帰ります)</td><td>Pulang</td><td>Kembali ke tempat asal (rumah, negara, dll)</td></tr></table></div><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Watashi wa gakkou e ikimasu.</p><p class=\"material-paragraph\">(私 は 学校 へ 行きます。)</p><p class=\"material-paragraph\">→ Saya pergi ke sekolah.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#60a5fa",
          "colorName": "auto",
          "number": "2",
          "title": "Partikel Tujuan: “e” (へ)",
          "body": "<p class=\"material-paragraph\">Partikel Tujuan: “e” (へ) Menandai tempat yang menjadi tujuan akhir pergerakan. Aturan unik: Ditulis dengan huruf へ tapi diucapkan “e”.</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Nihon e kaerimasu.</p><p class=\"material-paragraph\">(日本 へ 帰ります。)</p><p class=\"material-paragraph\">→ Pulang ke Jepang.</p><p class=\"material-paragraph\">Pola negatif total:</p><p class=\"material-paragraph\">Doko e mo ikimasen.</p><p class=\"material-paragraph\">(どこ へ も 行きません。)</p><p class=\"material-paragraph\">→ Tidak pergi ke mana-mana.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#34d399",
          "colorName": "auto",
          "number": "3",
          "title": "Partikel Sarana: “de” (で)",
          "body": "<p class=\"material-paragraph\">Partikel Sarana: “de” (で) Menunjukkan alat/transportasi yang digunakan.</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Densha de ikimasu.</p><p class=\"material-paragraph\">(電車 で 行きます。)</p><p class=\"material-paragraph\">→ Pergi menggunakan kereta.</p><p class=\"material-paragraph\">Pengecualian: Kalau jalan kaki, gunakan “aruite” saja (tidak pakai de).</p><p class=\"material-paragraph\">Aruite gakkou e ikimasu.</p><p class=\"material-paragraph\">(歩いて 学校 へ 行きます。)</p><p class=\"material-paragraph\">→ Pergi ke sekolah dengan jalan kaki.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#f59e0b",
          "colorName": "auto",
          "number": "4",
          "title": "Partikel Teman: “to” (と)",
          "body": "<p class=\"material-paragraph\">Partikel Teman: “to” (と) Menunjukkan “bersama” atau “dengan” orang/hewan.</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Kazoku to Nihon e ikimasu.</p><p class=\"material-paragraph\">(家族 と 日本 へ 行きます。)</p><p class=\"material-paragraph\">→ Pergi ke Jepang bersama keluarga.</p><p class=\"material-paragraph\">Kalau sendirian: Hitori de (一人で).</p><p class=\"material-paragraph\">Hitori de ikimasu.</p><p class=\"material-paragraph\">(一人 で 行きます。)</p><p class=\"material-paragraph\">→ Pergi sendirian.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#fb7185",
          "colorName": "auto",
          "number": "5",
          "title": "Menanyakan Waktu: “Itsu” (いつ)",
          "body": "<p class=\"material-paragraph\">Menanyakan Waktu: “Itsu” (いつ) Kata tanya untuk “kapan” (hari, tanggal, atau waktu luas, bukan jam spesifik).</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Itsu Nihon e ikimasu ka?</p><p class=\"material-paragraph\">(いつ 日本 へ 行きます か？)</p><p class=\"material-paragraph\">→ Kapan Anda pergi ke Jepang?</p>"
        },
        {
          "type": "timeline-card",
          "color": "#14b8a6",
          "colorName": "auto",
          "number": "6",
          "title": "Daftar Kosakata Baru",
          "body": "<p class=\"material-paragraph\">Daftar Kosakata Baru</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kosakata</th><th>Makna</th><th>Penjelasan &amp; Konteks Penggunaan</th></tr><tr><td>Densha (電車)</td><td>Kereta</td><td>Transportasi umum</td></tr><tr><td>Basu (バス)</td><td>Bis</td><td>Transportasi umum</td></tr><tr><td>Hikouki (飛行機)</td><td>Pesawat</td><td>Transportasi udara</td></tr><tr><td>Gakkou (学校)</td><td>Sekolah</td><td>Tujuan umum</td></tr><tr><td>Kazoku (家族)</td><td>Keluarga</td><td>Orang terdekat</td></tr><tr><td>Hitori de (一人で)</td><td>Sendirian</td><td>Kondisi perjalanan</td></tr><tr><td>Itsu (いつ)</td><td>Kapan</td><td>Kata tanya waktu luas</td></tr><tr><td>Aruite (歩いて)</td><td>Dengan jalan kaki</td><td>Khusus jalan kaki</td></tr></table></div>"
        }
      ],
      "quiz": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "Seorang siswa ingin mengatakan “Saya pergi ke sekolah.”",
          "options": [
            "わたし は がっこう で いきます",
            "わたし は がっこう へ いきます",
            "わたし は がっこう と いきます",
            "わたし は がっこう に でんしゃ"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は がっこう へ いきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “わたし は がっこう で いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は がっこう へ いきます”.",
            "Benar. “わたし は がっこう へ いきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は がっこう と いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は がっこう へ いきます”.",
            "Salah. “わたし は がっこう に でんしゃ” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は がっこう へ いきます”."
          ]
        },
        {
          "id": "q2",
          "type": "multiple-choice",
          "question": "Partikel e dalam “Nihon e kaerimasu” menunjukkan…",
          "options": [
            "Alat transportasi",
            "Teman perjalanan",
            "Tujuan pergerakan",
            "Waktu keberangkatan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Tujuan pergerakan”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “Alat transportasi” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “Tujuan pergerakan”.",
            "Salah. “Teman perjalanan” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “Tujuan pergerakan”.",
            "Benar. “Tujuan pergerakan” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Waktu keberangkatan” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “Tujuan pergerakan”."
          ]
        },
        {
          "id": "q3",
          "type": "multiple-choice",
          "question": "Kimasu digunakan ketika seseorang…",
          "options": [
            "Pulang ke tempat asal",
            "Pergi menjauhi pembicara",
            "Datang menuju posisi pembicara",
            "Berjalan kaki ke sekolah"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Datang menuju posisi pembicara”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “Pulang ke tempat asal” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “Datang menuju posisi pembicara”.",
            "Salah. “Pergi menjauhi pembicara” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “Datang menuju posisi pembicara”.",
            "Benar. “Datang menuju posisi pembicara” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Berjalan kaki ke sekolah” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “Datang menuju posisi pembicara”."
          ]
        },
        {
          "id": "q4",
          "type": "multiple-choice",
          "question": "Kalimat “Saya pulang ke Jepang” yang benar adalah…",
          "options": [
            "わたし は にほん で かえります",
            "わたし は にほん へ かえります",
            "わたし は にほん と かえります",
            "わたし は にほん も かえります"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は にほん へ かえります”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “わたし は にほん で かえります” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は にほん へ かえります”.",
            "Benar. “わたし は にほん へ かえります” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は にほん と かえります” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は にほん へ かえります”.",
            "Salah. “わたし は にほん も かえります” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は にほん へ かえります”."
          ]
        },
        {
          "id": "q5",
          "type": "multiple-choice",
          "question": "Partikel setelah densha untuk “pergi menggunakan kereta” adalah…",
          "options": [
            "へ",
            "で",
            "と",
            "も"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “で”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “へ” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “で”.",
            "Benar. “で” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “と” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “で”.",
            "Salah. “も” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “で”."
          ]
        },
        {
          "id": "q6",
          "type": "multiple-choice",
          "question": "“Saya pergi ke sekolah dengan bus” yang benar adalah…",
          "options": [
            "わたし は ばす へ がっこう で いきます",
            "わたし は がっこう で ばす へ いきます",
            "わたし は ばす で がっこう へ いきます",
            "わたし は ばす と がっこう へ いきます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし は ばす で がっこう へ いきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “わたし は ばす へ がっこう で いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は ばす で がっこう へ いきます”.",
            "Salah. “わたし は がっこう で ばす へ いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は ばす で がっこう へ いきます”.",
            "Benar. “わたし は ばす で がっこう へ いきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は ばす と がっこう へ いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は ばす で がっこう へ いきます”."
          ]
        },
        {
          "id": "q7",
          "type": "multiple-choice",
          "question": "Jika pergi bersama keluarga, partikel setelah kazoku adalah…",
          "options": [
            "で",
            "へ",
            "と",
            "に"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “と”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “で” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “と”.",
            "Salah. “へ” tidak tepat. と dipakai untuk “bersama”; pilihan ini tidak menunjukkan hubungan teman perjalanan dengan tepat. Jawaban yang benar adalah “と”.",
            "Benar. “と” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “に” tidak tepat. と dipakai untuk “bersama”; pilihan ini tidak menunjukkan hubungan teman perjalanan dengan tepat. Jawaban yang benar adalah “と”."
          ]
        },
        {
          "id": "q8",
          "type": "multiple-choice",
          "question": "“Saya pergi ke Jepang bersama keluarga” yang tepat adalah…",
          "options": [
            "わたし は にほん と かぞく へ いきます",
            "わたし は かぞく で にほん へ いきます",
            "わたし は かぞく と にほん へ いきます",
            "わたし は かぞく へ にほん と いきます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし は かぞく と にほん へ いきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “わたし は にほん と かぞく へ いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は かぞく と にほん へ いきます”.",
            "Salah. “わたし は かぞく で にほん へ いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は かぞく と にほん へ いきます”.",
            "Benar. “わたし は かぞく と にほん へ いきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は かぞく へ にほん と いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は かぞく と にほん へ いきます”."
          ]
        },
        {
          "id": "q9",
          "type": "multiple-choice",
          "question": "Hitori de digunakan untuk menyatakan…",
          "options": [
            "Bersama keluarga",
            "Menggunakan kereta",
            "Pergi sendirian",
            "Pulang ke rumah"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Pergi sendirian”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “Bersama keluarga” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “Pergi sendirian”.",
            "Salah. “Menggunakan kereta” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “Pergi sendirian”.",
            "Benar. “Pergi sendirian” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Pulang ke rumah” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “Pergi sendirian”."
          ]
        },
        {
          "id": "q10",
          "type": "multiple-choice",
          "question": "Kalimat “Saya pergi sendirian” yang tepat adalah…",
          "options": [
            "わたし は ひとり と いきます",
            "わたし は ひとり で いきます",
            "わたし は ひとり へ いきます",
            "わたし は ひとり も いきます"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は ひとり で いきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “わたし は ひとり と いきます” tidak tepat. と dipakai untuk “bersama”; pilihan ini tidak menunjukkan hubungan teman perjalanan dengan tepat. Jawaban yang benar adalah “わたし は ひとり で いきます”.",
            "Benar. “わたし は ひとり で いきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は ひとり へ いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は ひとり で いきます”.",
            "Salah. “わたし は ひとり も いきます” tidak tepat. と dipakai untuk “bersama”; pilihan ini tidak menunjukkan hubungan teman perjalanan dengan tepat. Jawaban yang benar adalah “わたし は ひとり で いきます”."
          ]
        },
        {
          "id": "q11",
          "type": "multiple-choice",
          "question": "Itsu digunakan untuk menanyakan…",
          "options": [
            "Di mana",
            "Berapa harga",
            "Kapan",
            "Siapa"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Kapan”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “Di mana” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “Kapan”.",
            "Salah. “Berapa harga” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “Kapan”.",
            "Benar. “Kapan” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Siapa” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “Kapan”."
          ]
        },
        {
          "id": "q12",
          "type": "multiple-choice",
          "question": "“Kapan Anda pergi ke Jepang?” adalah…",
          "options": [
            "どこ にほん へ いきます か",
            "いくら にほん へ いきます か",
            "いつ にほん へ いきます か",
            "だれ にほん へ いきます か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “いつ にほん へ いきます か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “どこ にほん へ いきます か” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “いつ にほん へ いきます か”.",
            "Salah. “いくら にほん へ いきます か” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “いつ にほん へ いきます か”.",
            "Benar. “いつ にほん へ いきます か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “だれ にほん へ いきます か” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “いつ にほん へ いきます か”."
          ]
        },
        {
          "id": "q13",
          "type": "multiple-choice",
          "question": "Penggunaan de yang tidak tepat adalah…",
          "options": [
            "でんしゃ で いきます",
            "ばす で いきます",
            "ひこうき で いきます",
            "あるいて で いきます"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “あるいて で いきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “でんしゃ で いきます” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “あるいて で いきます”.",
            "Salah. “ばす で いきます” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “あるいて で いきます”.",
            "Salah. “ひこうき で いきます” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “あるいて で いきます”.",
            "Benar. “あるいて で いきます” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q14",
          "type": "multiple-choice",
          "question": "Jika berjalan kaki ke sekolah, kalimat paling tepat adalah…",
          "options": [
            "あるいて で がっこう へ いきます",
            "あるいて がっこう へ いきます",
            "がっこう で あるいて いきます",
            "あるいて と がっこう へ いきます"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “あるいて がっこう へ いきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “あるいて で がっこう へ いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “あるいて がっこう へ いきます”.",
            "Benar. “あるいて がっこう へ いきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “がっこう で あるいて いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “あるいて がっこう へ いきます”.",
            "Salah. “あるいて と がっこう へ いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “あるいて がっこう へ いきます”."
          ]
        },
        {
          "id": "q15",
          "type": "multiple-choice",
          "question": "“Tidak pergi ke mana-mana” adalah…",
          "options": [
            "どこ へ いきます",
            "どこ で いきません",
            "どこ へ も いきません",
            "どこ と も いきません"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “どこ へ も いきません”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “どこ へ いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “どこ へ も いきません”.",
            "Salah. “どこ で いきません” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “どこ へ も いきません”.",
            "Benar. “どこ へ も いきません” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “どこ と も いきません” tidak tepat. と dipakai untuk “bersama”; pilihan ini tidak menunjukkan hubungan teman perjalanan dengan tepat. Jawaban yang benar adalah “どこ へ も いきません”."
          ]
        },
        {
          "id": "q16",
          "type": "multiple-choice",
          "question": "Pasangan kata kerja dan arti yang benar adalah…",
          "options": [
            "いきます = datang",
            "かえります = pulang",
            "きます = pergi",
            "はたらきます = naik kendaraan"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “かえります = pulang”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “いきます = datang” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “かえります = pulang”.",
            "Benar. “かえります = pulang” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “きます = pergi” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “かえります = pulang”.",
            "Salah. “はたらきます = naik kendaraan” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “かえります = pulang”."
          ]
        },
        {
          "id": "q17",
          "type": "multiple-choice",
          "question": "Teman akan kembali ke negara asalnya. Kata kerja paling tepat adalah…",
          "options": [
            "いきます",
            "きます",
            "かえります",
            "あるいて"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “かえります”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “いきます” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “かえります”.",
            "Salah. “きます” tidak tepat. Pilihan ini tidak sesuai dengan fungsi partikel pergerakan atau kata kerja yang digunakan. Jawaban yang benar adalah “かえります”.",
            "Benar. “かえります” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あるいて” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “かえります”."
          ]
        },
        {
          "id": "q18",
          "type": "multiple-choice",
          "question": "Dalam “Kazoku to Nihon e ikimasu”, kazoku to berarti…",
          "options": [
            "Ke keluarga",
            "Menggunakan keluarga",
            "Bersama keluarga",
            "Keluarga juga"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Bersama keluarga”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “Ke keluarga” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “Bersama keluarga”.",
            "Salah. “Menggunakan keluarga” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “Bersama keluarga”.",
            "Benar. “Bersama keluarga” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Keluarga juga” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “Bersama keluarga”."
          ]
        },
        {
          "id": "q19",
          "type": "multiple-choice",
          "question": "“Saya pergi ke Jepang naik pesawat” yang tepat adalah…",
          "options": [
            "わたし は にほん で ひこうき へ いきます",
            "わたし は ひこうき へ にほん で いきます",
            "わたし は ひこうき で にほん へ いきます",
            "わたし は ひこうき と にほん へ いきます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし は ひこうき で にほん へ いきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “わたし は にほん で ひこうき へ いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は ひこうき で にほん へ いきます”.",
            "Salah. “わたし は ひこうき へ にほん で いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は ひこうき で にほん へ いきます”.",
            "Benar. “わたし は ひこうき で にほん へ いきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は ひこうき と にほん へ いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は ひこうき で にほん へ いきます”."
          ]
        },
        {
          "id": "q20",
          "type": "multiple-choice",
          "question": "Kalimat paling logis berdasarkan fungsi partikelnya adalah…",
          "options": [
            "わたし は でんしゃ と いきます",
            "わたし は かぞく で いきます",
            "わたし は ばす で がっこう へ いきます",
            "わたし は がっこう と いきます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし は ばす で がっこう へ いきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ.",
          "optionExplanations": [
            "Salah. “わたし は でんしゃ と いきます” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “わたし は ばす で がっこう へ いきます”.",
            "Salah. “わたし は かぞく で いきます” tidak tepat. Sarana transportasi memakai で, tetapi jalan kaki memakai あるいて tanpa で. Jawaban yang benar adalah “わたし は ばす で がっこう へ いきます”.",
            "Benar. “わたし は ばす で がっこう へ いきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は がっこう と いきます” tidak tepat. Tujuan pergerakan ditandai dengan へ/へ, bukan partikel lain. Jawaban yang benar adalah “わたし は ばす で がっこう へ いきます”."
          ]
        },
        {
          "id": "q21",
          "type": "essay",
          "question": "A: Itsu Nihon ___ ikimasu ka?\nB: Ashita ikimasu.",
          "acceptedAnswers": [
            "e",
            "へ"
          ],
          "explanation": "Jawaban yang diharapkan adalah “へ”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ."
        },
        {
          "id": "q22",
          "type": "essay",
          "question": "A: Nani de gakkou e ikimasu ka?\nB: Densha ___ ikimasu.",
          "acceptedAnswers": [
            "de",
            "で"
          ],
          "explanation": "Jawaban yang diharapkan adalah “で”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ."
        },
        {
          "id": "q23",
          "type": "essay",
          "question": "A: Dare to Nihon e ikimasu ka?\nB: Kazoku ___ ikimasu.",
          "acceptedAnswers": [
            "to",
            "と"
          ],
          "explanation": "Jawaban yang diharapkan adalah “と”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ."
        },
        {
          "id": "q24",
          "type": "essay",
          "question": "A: Doko e ikimasu ka?\nB: Doko e ___ ikimasen.",
          "acceptedAnswers": [
            "mo",
            "も"
          ],
          "explanation": "Jawaban yang diharapkan adalah “も”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ."
        },
        {
          "id": "q25",
          "type": "essay",
          "question": "A: Gakkou e basu de ikimasu ka?\nB: Iie, __________ gakkou e ikimasu.",
          "acceptedAnswers": [
            "aruite",
            "あるいて",
            "歩いて"
          ],
          "explanation": "Jawaban yang diharapkan adalah “あるいて”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata kerja pergerakan, partikel へ untuk tujuan, で untuk sarana, と untuk bersama, dan いつ."
        }
      ],
      "media": {
        "image": "assets/images/lesson-2-2.svg",
        "imageAlt": "Ilustrasi perjalanan menggunakan transportasi",
        "title": "Contoh pengucapan perjalanan",
        "audioText": "電車で学校へ行きます。",
        "audioRomaji": "Densha de gakkou e ikimasu.",
        "audioTranslation": "Pergi ke sekolah menggunakan kereta.",
        "audioLang": "ja-JP"
      }
    },
    "2-3": {
      "id": "2-3",
      "title": "Aktivitas Apa Saja?",
      "titleJP": "アクティビティと目的語",
      "chapterTitle": "Bab 2: Kata Kerja dan Aktivitas",
      "duration": "~22 menit",
      "introduction": "Fokus utama bab ini adalah membangun kemampuan Anda untuk menceritakan aktivitas sehari-hari yang melibatkan benda/objek (misalnya: makan apa, minum apa, beli apa, baca apa). Kita akan mempelajari partikel \"o\" (を) sebagai penanda objek langsung, kata kerja baru yang sering digunakan dalam rutinitas harian, serta pola bertanya “melakukan apa?” agar percakapan terasa lebih hidup dan natural.",
      "sections": [
        {
          "type": "timeline-card",
          "color": "#7c6df7",
          "colorName": "auto",
          "number": "1",
          "title": "Partikel Objek Langsung: \"O\" (を)",
          "body": "<p class=\"material-paragraph\">Partikel Objek Langsung: &quot;O&quot; (を) Partikel ini menunjukkan benda yang menjadi target dari suatu tindakan. Struktur Kalimat Dasar: [Subjek/Topik] は [Objek] を [Kata Kerja ~masu].</p><p class=\"material-paragraph\">Tabel Partikel</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Partikel</th><th>Fungsi</th><th>Keterangan</th></tr><tr><td>O (を)</td><td>Penanda objek langsung</td><td>Selalu diucapkan “o”, meski ditulis dengan huruf を. Diletakkan tepat setelah benda yang “dilakukan”.</td></tr></table></div><p class=\"material-paragraph\">Contoh Penerapan:</p><p class=\"material-paragraph\">Watashi wa pan o tabemasu. (私 は パン を 食べます。) → Saya makan roti.</p><p class=\"material-paragraph\">Yamada-san wa koohii o nomimasu. (山田さん は コーヒー を 飲みます。) → Mr. Yamada minum kopi.</p><p class=\"material-paragraph\">Mira-san wa hon o yomimasu. (ミラさん は 本 を 読みます。) → Ms. Mira membaca buku.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#60a5fa",
          "colorName": "auto",
          "number": "2",
          "title": "Kata Kerja Aktivitas Harian yang Melibatkan Objek",
          "body": "<p class=\"material-paragraph\">Kata Kerja Aktivitas Harian yang Melibatkan Objek Berikut kata kerja baru yang paling sering muncul saat membicarakan aktivitas sehari-hari:</p><p class=\"material-paragraph\">Tabel Kata Kerja</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kata Kerja</th><th>Arti</th><th>Contoh Kalimat</th></tr><tr><td>Tabemasu (食べます)</td><td>Makan</td><td>Watashi wa sushi o tabemasu. (私 は 寿司 を 食べます。)</td></tr><tr><td>Nomimasu (飲みます)</td><td>Minum</td><td>Watashi wa mizu o nomimasu. (私 は 水 を 飲みます。)</td></tr><tr><td>Kaimasu (買います)</td><td>Beli</td><td>Watashi wa kagi o kaimasu. (私 は 鍵 を 買います。)</td></tr><tr><td>Yomimasu (読みます)</td><td>Baca</td><td>Watashi wa shinbun o yomimasu. (私 は 新聞 を 読みます。)</td></tr><tr><td>Kakimasu (書きます)</td><td>Tulis</td><td>Watashi wa tegami o kakimasu. (私 は 手紙 を 書きます。)</td></tr><tr><td>Mimasu (見ます)</td><td>Lihat / Nonton</td><td>Watashi wa terebi o mimasu. (私 は テレビ を 見ます。)</td></tr></table></div><p class=\"material-paragraph\">Catatan penting: Kata kerja selalu berada di akhir kalimat.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#34d399",
          "colorName": "auto",
          "number": "3",
          "title": "Bertanya “melakukan apa?” dengan Pola “Nani o … masu ka?”",
          "body": "<p class=\"material-paragraph\">Bertanya “melakukan apa?” dengan Pola “Nani o … masu ka?” Untuk bertanya aktivitas yang melibatkan objek, gunakan kata tanya Nani (何) + partikel o. Struktur Tanya: Nani o [Kata Kerja] masu ka?</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Nani o tabemasu ka? (何 を 食べます か？) → Makan apa?</p><p class=\"material-paragraph\">Nani o nomimasu ka? (何 を 飲みます か？) → Minum apa?</p>"
        },
        {
          "type": "timeline-card",
          "color": "#f59e0b",
          "colorName": "auto",
          "number": "4",
          "title": "Jawaban Singkat & Konfirmasi",
          "body": "<p class=\"material-paragraph\">Jawaban Singkat &amp; Konfirmasi</p><p class=\"material-paragraph\">Hai, [objek] o [kerja] masu. → Ya, saya …</p><p class=\"material-paragraph\">Iie, [objek] o [kerja] masen. → Tidak, saya tidak …</p>"
        },
        {
          "type": "timeline-card",
          "color": "#fb7185",
          "colorName": "auto",
          "number": "5",
          "title": "Daftar Kosakata Baru",
          "body": "<p class=\"material-paragraph\">Daftar Kosakata Baru</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kosakata</th><th>Makna</th><th>Penjelasan &amp; Konteks Penggunaan</th></tr><tr><td>Pan (パン)</td><td>Roti</td><td>Makanan pagi yang sangat umum</td></tr><tr><td>Koohii (コーヒー)</td><td>Kopi</td><td>Minuman favorit orang Jepang</td></tr><tr><td>Mizu (水)</td><td>Air</td><td>Minuman paling dasar</td></tr><tr><td>Sushi (寿司)</td><td>Sushi</td><td>Makanan khas Jepang</td></tr><tr><td>Shinbun (新聞)</td><td>Koran</td><td>Baca di pagi hari</td></tr><tr><td>Tegami (手紙)</td><td>Surat</td><td>Menulis surat</td></tr><tr><td>Terebi (テレビ)</td><td>Televisi</td><td>Nonton berita atau drama</td></tr><tr><td>Nani (何)</td><td>Apa</td><td>Kata tanya untuk objek</td></tr></table></div>"
        }
      ],
      "quiz": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "Seorang siswa ingin mengatakan bahwa ia membaca koran, bukan menulis surat. Kalimat tepat adalah…",
          "options": [
            "わたし は しんぶん を かきます",
            "わたし は しんぶん を よみます",
            "わたし は てがみ を よみます",
            "わたし は しんぶん です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は しんぶん を よみます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “わたし は しんぶん を かきます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “わたし は しんぶん を よみます”.",
            "Benar. “わたし は しんぶん を よみます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は てがみ を よみます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “わたし は しんぶん を よみます”.",
            "Salah. “わたし は しんぶん です” tidak tepat. Pilihan ini tidak sesuai dengan pasangan objek-kata kerja atau pola objek langsung. Jawaban yang benar adalah “わたし は しんぶん を よみます”."
          ]
        },
        {
          "id": "q2",
          "type": "multiple-choice",
          "question": "Dalam “Watashi wa pan o tabemasu”, fungsi pan adalah…",
          "options": [
            "Topik kalimat",
            "Kata kerja utama",
            "Objek yang dikenai tindakan",
            "Penanda pertanyaan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Objek yang dikenai tindakan”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “Topik kalimat” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Objek yang dikenai tindakan”.",
            "Salah. “Kata kerja utama” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Objek yang dikenai tindakan”.",
            "Benar. “Objek yang dikenai tindakan” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Penanda pertanyaan” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Objek yang dikenai tindakan”."
          ]
        },
        {
          "id": "q3",
          "type": "multiple-choice",
          "question": "Jika seseorang bertanya “Nani o nomimasu ka?”, jawaban paling sesuai adalah…",
          "options": [
            "すし を たべます",
            "みず を のみます",
            "ほん を よみます",
            "てれび を みます"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “みず を のみます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “すし を たべます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “みず を のみます”.",
            "Benar. “みず を のみます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “ほん を よみます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “みず を のみます”.",
            "Salah. “てれび を みます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “みず を のみます”."
          ]
        },
        {
          "id": "q4",
          "type": "multiple-choice",
          "question": "Kalimat “Saya tidak menonton televisi” yang tepat adalah…",
          "options": [
            "わたし は てれび じゃ ありません",
            "わたし は てれび を みます か",
            "わたし は てれび を みません",
            "わたし は てれび も みます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし は てれび を みません”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “わたし は てれび じゃ ありません” tidak tepat. Pilihan ini tidak sesuai dengan pasangan objek-kata kerja atau pola objek langsung. Jawaban yang benar adalah “わたし は てれび を みません”.",
            "Salah. “わたし は てれび を みます か” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “わたし は てれび を みません”.",
            "Benar. “わたし は てれび を みません” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は てれび も みます” tidak tepat. Kata kerja harus cocok dengan objeknya, misalnya みず diminum, しんぶん dibaca, dan てがみ ditulis. Jawaban yang benar adalah “わたし は てれび を みません”."
          ]
        },
        {
          "id": "q5",
          "type": "multiple-choice",
          "question": "“Watashi wa koohii o tabemasu” kurang tepat karena…",
          "options": [
            "Partikel を tidak boleh digunakan",
            "こおひい harus memakai は",
            "Kata kerja たべます tidak cocok dengan objek こおひい",
            "Kata kerja harus di awal"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Kata kerja たべます tidak cocok dengan objek こおひい”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “Partikel を tidak boleh digunakan” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Kata kerja たべます tidak cocok dengan objek こおひい”.",
            "Salah. “こおひい harus memakai は” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Kata kerja たべます tidak cocok dengan objek こおひい”.",
            "Benar. “Kata kerja たべます tidak cocok dengan objek こおひい” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Kata kerja harus di awal” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Kata kerja たべます tidak cocok dengan objek こおひい”."
          ]
        },
        {
          "id": "q6",
          "type": "multiple-choice",
          "question": "A: Nani o kaimasu ka? Jawaban paling logis adalah…",
          "options": [
            "ぱん を たべます",
            "みず を のみます",
            "かぎ を かいます",
            "てがみ を かきます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “かぎ を かいます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “ぱん を たべます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “かぎ を かいます”.",
            "Salah. “みず を のみます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “かぎ を かいます”.",
            "Benar. “かぎ を かいます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “てがみ を かきます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “かぎ を かいます”."
          ]
        },
        {
          "id": "q7",
          "type": "multiple-choice",
          "question": "Pasangan objek dan kata kerja paling tepat adalah…",
          "options": [
            "こおひい を たべます",
            "てれび を のみます",
            "てがみ を かきます",
            "みず を よみます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “てがみ を かきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “こおひい を たべます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “てがみ を かきます”.",
            "Salah. “てれび を のみます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “てがみ を かきます”.",
            "Benar. “てがみ を かきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “みず を よみます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “てがみ を かきます”."
          ]
        },
        {
          "id": "q8",
          "type": "multiple-choice",
          "question": "“Mira-san wa hon o yomimasu” berarti…",
          "options": [
            "みら adalah buku",
            "みら membeli buku",
            "みら membaca buku",
            "みら menulis buku"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “みら membaca buku”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “みら adalah buku” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “みら membaca buku”.",
            "Salah. “みら membeli buku” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “みら membaca buku”.",
            "Benar. “みら membaca buku” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “みら menulis buku” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “みら membaca buku”."
          ]
        },
        {
          "id": "q9",
          "type": "multiple-choice",
          "question": "Kalimat untuk bertanya “Baca apa?” adalah…",
          "options": [
            "なに は よみます か",
            "なに で よみます か",
            "なに を よみます か",
            "よみます なに か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “なに を よみます か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “なに は よみます か” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “なに を よみます か”.",
            "Salah. “なに で よみます か” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “なに を よみます か”.",
            "Benar. “なに を よみます か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “よみます なに か” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “なに を よみます か”."
          ]
        },
        {
          "id": "q10",
          "type": "multiple-choice",
          "question": "Pilih kalimat yang salah secara struktur Bab 6.",
          "options": [
            "わたし は すし を たべます",
            "やまださん は こおひい を のみます",
            "みらさん は ほん を よみます",
            "わたし は を ぱん たべます"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “わたし は を ぱん たべます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “わたし は すし を たべます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “わたし は を ぱん たべます”.",
            "Salah. “やまださん は こおひい を のみます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “わたし は を ぱん たべます”.",
            "Salah. “みらさん は ほん を よみます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “わたし は を ぱん たべます”.",
            "Benar. “わたし は を ぱん たべます” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q11",
          "type": "multiple-choice",
          "question": "Dalam pola [Subjek] wa [Objek] o [Kata Kerja], posisi kata kerja adalah…",
          "options": [
            "Setelah subjek",
            "Sebelum objek",
            "Setelah partikel は",
            "Di akhir kalimat"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “Di akhir kalimat”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “Setelah subjek” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Di akhir kalimat”.",
            "Salah. “Sebelum objek” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Di akhir kalimat”.",
            "Salah. “Setelah partikel は” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Di akhir kalimat”.",
            "Benar. “Di akhir kalimat” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q12",
          "type": "multiple-choice",
          "question": "“Iie, sushi o tabemasen” menyatakan bahwa…",
          "options": [
            "Ia makan すし",
            "Ia membeli すし",
            "Ia tidak makan すし",
            "Ia bukan すし"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Ia tidak makan すし”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “Ia makan すし” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Ia tidak makan すし”.",
            "Salah. “Ia membeli すし” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Ia tidak makan すし”.",
            "Benar. “Ia tidak makan すし” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Ia bukan すし” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Ia tidak makan すし”."
          ]
        },
        {
          "id": "q13",
          "type": "multiple-choice",
          "question": "Kalimat tepat untuk “Nonton apa?” adalah…",
          "options": [
            "なに を たべます か",
            "なに を のみます か",
            "なに を かきます か",
            "なに を みます か"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “なに を みます か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “なに を たべます か” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “なに を みます か”.",
            "Salah. “なに を のみます か” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “なに を みます か”.",
            "Salah. “なに を かきます か” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “なに を みます か”.",
            "Benar. “なに を みます か” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q14",
          "type": "multiple-choice",
          "question": "“Saya membeli roti dan minum air.” Kalimat paling sesuai adalah…",
          "options": [
            "わたし は ぱん を たべます, みず を かいます",
            "わたし は ぱん を かいます. みず を のみます",
            "わたし は ぱん です. みず です",
            "わたし は ぱん を よみます. みず を みます"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は ぱん を かいます. みず を のみます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “わたし は ぱん を たべます, みず を かいます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “わたし は ぱん を かいます. みず を のみます”.",
            "Benar. “わたし は ぱん を かいます. みず を のみます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は ぱん です. みず です” tidak tepat. Pilihan ini tidak sesuai dengan pasangan objek-kata kerja atau pola objek langsung. Jawaban yang benar adalah “わたし は ぱん を かいます. みず を のみます”.",
            "Salah. “わたし は ぱん を よみます. みず を みます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “わたし は ぱん を かいます. みず を のみます”."
          ]
        },
        {
          "id": "q15",
          "type": "multiple-choice",
          "question": "Kaimasu paling cocok digunakan dengan objek…",
          "options": [
            "しんぶん jika ingin membaca",
            "こおひい jika ingin minum",
            "かぎ jika ingin membeli",
            "てれび jika ingin menonton"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “かぎ jika ingin membeli”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “しんぶん jika ingin membaca” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “かぎ jika ingin membeli”.",
            "Salah. “こおひい jika ingin minum” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “かぎ jika ingin membeli”.",
            "Benar. “かぎ jika ingin membeli” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “てれび jika ingin menonton” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “かぎ jika ingin membeli”."
          ]
        },
        {
          "id": "q16",
          "type": "multiple-choice",
          "question": "Kalimat yang menunjukkan bentuk negatif aktivitas, bukan negatif identitas adalah…",
          "options": [
            "わたし は がくせい じゃ ありません",
            "わたし は せんせい じゃ ありません",
            "わたし は ほん を よみません",
            "わたし は いしゃ じゃ ありません"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし は ほん を よみません”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “わたし は がくせい じゃ ありません” tidak tepat. Pilihan ini tidak sesuai dengan pasangan objek-kata kerja atau pola objek langsung. Jawaban yang benar adalah “わたし は ほん を よみません”.",
            "Salah. “わたし は せんせい じゃ ありません” tidak tepat. Pilihan ini tidak sesuai dengan pasangan objek-kata kerja atau pola objek langsung. Jawaban yang benar adalah “わたし は ほん を よみません”.",
            "Benar. “わたし は ほん を よみません” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は いしゃ じゃ ありません” tidak tepat. Pilihan ini tidak sesuai dengan pasangan objek-kata kerja atau pola objek langsung. Jawaban yang benar adalah “わたし は ほん を よみません”."
          ]
        },
        {
          "id": "q17",
          "type": "multiple-choice",
          "question": "Jika A bertanya “Nani o kakimasu ka?”, jawaban paling tepat adalah…",
          "options": [
            "ほん を よみます",
            "こおひい を のみます",
            "てがみ を かきます",
            "すし を たべます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “てがみ を かきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “ほん を よみます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “てがみ を かきます”.",
            "Salah. “こおひい を のみます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “てがみ を かきます”.",
            "Benar. “てがみ を かきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “すし を たべます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “てがみ を かきます”."
          ]
        },
        {
          "id": "q18",
          "type": "multiple-choice",
          "question": "“Watashi wa tegami o yomimasu” secara struktur benar, artinya…",
          "options": [
            "Saya menulis surat",
            "Saya membaca surat",
            "Saya membeli surat",
            "Saya minum surat"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “Saya membaca surat”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “Saya menulis surat” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Saya membaca surat”.",
            "Benar. “Saya membaca surat” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Saya membeli surat” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Saya membaca surat”.",
            "Salah. “Saya minum surat” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Saya membaca surat”."
          ]
        },
        {
          "id": "q19",
          "type": "multiple-choice",
          "question": "Kalimat paling tepat jika objeknya mizu adalah…",
          "options": [
            "みず を たべます",
            "みず を のみます",
            "みず を かきます",
            "みず を よみます"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “みず を のみます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “みず を たべます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “みず を のみます”.",
            "Benar. “みず を のみます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “みず を かきます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “みず を のみます”.",
            "Salah. “みず を よみます” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “みず を のみます”."
          ]
        },
        {
          "id": "q20",
          "type": "multiple-choice",
          "question": "Pola “Nani o … masu ka?” digunakan untuk mengetahui…",
          "options": [
            "Siapa pemilik benda",
            "Di mana lokasi benda",
            "Objek dari suatu aktivitas",
            "Harga suatu benda"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Objek dari suatu aktivitas”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas.",
          "optionExplanations": [
            "Salah. “Siapa pemilik benda” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Objek dari suatu aktivitas”.",
            "Salah. “Di mana lokasi benda” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Objek dari suatu aktivitas”.",
            "Benar. “Objek dari suatu aktivitas” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Harga suatu benda” tidak tepat. Objek langsung dari tindakan ditandai dengan partikel を/を dan kata kerja tetap berada di akhir kalimat. Jawaban yang benar adalah “Objek dari suatu aktivitas”."
          ]
        },
        {
          "id": "q21",
          "type": "essay",
          "question": "A: Nani o kakimasu ka?\nB: __________ o kakimasu.\nKonteks: B menulis surat.",
          "acceptedAnswers": [
            "tegami",
            "てがみ",
            "手紙"
          ],
          "explanation": "Jawaban yang diharapkan adalah “てがみ”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas."
        },
        {
          "id": "q22",
          "type": "essay",
          "question": "A: Sushi o tabemasu ka?\nB: Iie, sushi o __________.\nKonteks: B tidak makan sushi.",
          "acceptedAnswers": [
            "tabemasen",
            "たべません",
            "食べません"
          ],
          "explanation": "Jawaban yang diharapkan adalah “たべません”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas."
        },
        {
          "id": "q23",
          "type": "essay",
          "question": "A: Watashi wa mizu o nomimasu.\nB: Watashi mo mizu o __________.\nKonteks: B juga minum air.",
          "acceptedAnswers": [
            "nomimasu",
            "のみます",
            "飲みます"
          ],
          "explanation": "Jawaban yang diharapkan adalah “のみます”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas."
        },
        {
          "id": "q24",
          "type": "essay",
          "question": "A: Nani ___ tabemasu ka?\nB: Pan o tabemasu.",
          "acceptedAnswers": [
            "o",
            "を"
          ],
          "explanation": "Jawaban yang diharapkan adalah “を”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas."
        },
        {
          "id": "q25",
          "type": "essay",
          "question": "A: Hon o yomimasu ka?\nB: Iie, hon o yomimasen. Shinbun o __________.",
          "acceptedAnswers": [
            "yomimasu",
            "よみます",
            "読みます"
          ],
          "explanation": "Jawaban yang diharapkan adalah “よみます”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang partikel を untuk objek langsung, pola なに を ... masu か, dan kata kerja aktivitas."
        }
      ],
      "media": {
        "image": "assets/images/lesson-2-3.svg",
        "imageAlt": "Ilustrasi aktivitas sehari-hari yang melibatkan objek",
        "title": "Contoh pengucapan aktivitas dengan objek",
        "audioText": "私はパンを食べます。",
        "audioRomaji": "Watashi wa pan o tabemasu.",
        "audioTranslation": "Saya makan roti.",
        "audioLang": "ja-JP"
      }
    },
    "3-1": {
      "id": "3-1",
      "title": "Menggunakan Apa?",
      "titleJP": "道具と授受",
      "chapterTitle": "Bab 3: Deskripsi dan Ekspresi",
      "duration": "~22 menit",
      "introduction": "Fokus utama bab ini adalah cara menyatakan alat atau sarana yang digunakan untuk melakukan sesuatu, serta bagaimana memberi dan menerima barang atau bantuan. Kita juga belajar cara bertanya “pakai bahasa apa?” dan ungkapan sopan saat meminta sesuatu.",
      "sections": [
        {
          "type": "timeline-card",
          "color": "#7c6df7",
          "colorName": "auto",
          "number": "1",
          "title": "Partikel Alat/Sarana: “De” (で)",
          "body": "<p class=\"material-paragraph\">Partikel Alat/Sarana: “De” (で) Partikel “de” menunjukkan alat atau sarana yang digunakan untuk melakukan suatu tindakan (bukan kendaraan — itu tetap pakai “de” juga, tapi di bab ini lebih ke alat kecil seperti pensil, bahasa, dll).</p><p class=\"material-paragraph\">Struktur Kalimat Dasar:</p><p class=\"material-paragraph\">[Subjek] は [Alat] で [Kata Kerja].</p><p class=\"material-paragraph\">Contoh Penerapan:</p><p class=\"material-paragraph\">Watashi wa enpitsu de kakimasu. (私 は 鉛筆 で 書きます。) → Saya menulis dengan pensil.</p><p class=\"material-paragraph\">Yamada-san wa Nihongo de hanashimasu. (山田さん は 日本語 で 話します。) → Mr. Yamada berbicara dengan bahasa Jepang.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#60a5fa",
          "colorName": "auto",
          "number": "2",
          "title": "Bertanya “Menggunakan Bahasa Apa?”",
          "body": "<p class=\"material-paragraph\">Bertanya “Menggunakan Bahasa Apa?” Pola khusus untuk menanyakan bahasa atau alat yang digunakan: [Bahasa/Alat] de nan desu ka? atau [Kata] wa ~go de nan desu ka?</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Kore wa Eigo de nan desu ka?</p><p class=\"material-paragraph\">(これ は 英語 で 何 です か？)</p><p class=\"material-paragraph\">→ Ini dalam bahasa Inggris artinya apa?</p>"
        },
        {
          "type": "timeline-card",
          "color": "#34d399",
          "colorName": "auto",
          "number": "3",
          "title": "Memberi & Menerima: Agemasu (あげます) dan Moraimasu (もらいます)",
          "body": "<p class=\"material-paragraph\">Memberi &amp; Menerima: Agemasu (あげます) dan Moraimasu (もらいます)</p><p class=\"material-paragraph\">Agemasu = memberi (dari saya ke orang lain)</p><p class=\"material-paragraph\">Moraimasu = menerima (dari orang lain ke saya)</p><p class=\"material-paragraph\">Tabel Memberi/Menerima</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Ungkapan</th><th>Arti</th><th>Contoh</th></tr><tr><td>Agemasu (あげます)</td><td>Memberi</td><td>Watashi wa Tanaka-san ni hon o agemasu. (私 は 田中さん に 本 を あげます。) → Saya memberi buku kepada Mr. Tanaka.</td></tr><tr><td>Moraimasu (もらいます)</td><td>Menerima</td><td>Watashi wa Tanaka-san ni hon o moraimasu. (私 は 田中さん に 本 を もらいます。) → Saya menerima buku dari Mr. Tanaka.</td></tr><tr><td>Kudasai (ください)</td><td>Mohon berikan</td><td>Hon o kudasai. (本 を ください。) → Tolong berikan buku.</td></tr></table></div>"
        },
        {
          "type": "timeline-card",
          "color": "#f59e0b",
          "colorName": "auto",
          "number": "4",
          "title": "Ungkapan “Sudah”: Mou (もう)",
          "body": "<p class=\"material-paragraph\">Ungkapan “Sudah”: Mou (もう) Digunakan untuk menyatakan “sudah” (telah dilakukan).</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Mou tabemashita.</p><p class=\"material-paragraph\">(もう 食べました。)</p><p class=\"material-paragraph\">→ Sudah makan.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#fb7185",
          "colorName": "auto",
          "number": "5",
          "title": "Daftar Kosakata Baru",
          "body": "<p class=\"material-paragraph\">Daftar Kosakata Baru</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kosakata</th><th>Makna</th><th>Penjelasan &amp; Konteks Penggunaan</th></tr><tr><td>Enpitsu (鉛筆)</td><td>Pensil</td><td>Alat tulis</td></tr><tr><td>Kami (紙)</td><td>Kertas</td><td>Alat tulis</td></tr><tr><td>Nihongo (日本語)</td><td>Bahasa Jepang</td><td>Bahasa yang dipelajari</td></tr><tr><td>Eigo (英語)</td><td>Bahasa Inggris</td><td>Bahasa asing umum</td></tr><tr><td>Hanashimasu (話します)</td><td>Berbicara</td><td>Aktivitas bicara</td></tr><tr><td>Agemasu (あげます)</td><td>Memberi</td><td>Dari saya ke orang lain</td></tr><tr><td>Moraimasu (もらいます)</td><td>Menerima</td><td>Dari orang lain ke saya</td></tr><tr><td>Kudasai (ください)</td><td>Mohon/Tolong berikan</td><td>Ungkapan sopan meminta</td></tr><tr><td>Mou (もう)</td><td>Sudah</td><td>Menyatakan sesuatu telah terjadi</td></tr></table></div>"
        }
      ],
      "quiz": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "Seorang siswa ingin mengatakan “Saya menulis dengan pensil.”",
          "options": [
            "わたし は えんぴつ を かきます",
            "わたし は えんぴつ で かきます",
            "わたし は えんぴつ に かきます",
            "わたし は えんぴつ は かきます"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は えんぴつ で かきます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “わたし は えんぴつ を かきます” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “わたし は えんぴつ で かきます”.",
            "Benar. “わたし は えんぴつ で かきます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は えんぴつ に かきます” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “わたし は えんぴつ で かきます”.",
            "Salah. “わたし は えんぴつ は かきます” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “わたし は えんぴつ で かきます”."
          ]
        },
        {
          "id": "q2",
          "type": "multiple-choice",
          "question": "Partikel de dalam “Nihongo de hanashimasu” menunjukkan…",
          "options": [
            "Objek langsung",
            "Tujuan pergerakan",
            "Alat atau sarana yang digunakan",
            "Kepemilikan benda"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Alat atau sarana yang digunakan”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “Objek langsung” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Alat atau sarana yang digunakan”.",
            "Salah. “Tujuan pergerakan” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Alat atau sarana yang digunakan”.",
            "Benar. “Alat atau sarana yang digunakan” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Kepemilikan benda” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Alat atau sarana yang digunakan”."
          ]
        },
        {
          "id": "q3",
          "type": "multiple-choice",
          "question": "“Saya berbicara dengan bahasa Jepang” yang benar adalah…",
          "options": [
            "わたし は にほんご を はなします",
            "わたし は にほんご で はなします",
            "わたし は にほんご に はなします",
            "わたし は にほんご は はなします"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は にほんご で はなします”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “わたし は にほんご を はなします” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “わたし は にほんご で はなします”.",
            "Benar. “わたし は にほんご で はなします” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は にほんご に はなします” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “わたし は にほんご で はなします”.",
            "Salah. “わたし は にほんご は はなします” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “わたし は にほんご で はなします”."
          ]
        },
        {
          "id": "q4",
          "type": "multiple-choice",
          "question": "“Kore wa Eigo de nan desu ka?” maksudnya adalah…",
          "options": [
            "Ini milik siapa dalam bahasa Inggris?",
            "Ini harganya berapa dalam bahasa Inggris?",
            "Ini dalam bahasa Inggris artinya apa?",
            "Ini ditulis dengan bahasa Jepang?"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Ini dalam bahasa Inggris artinya apa?”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “Ini milik siapa dalam bahasa Inggris?” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Ini dalam bahasa Inggris artinya apa?”.",
            "Salah. “Ini harganya berapa dalam bahasa Inggris?” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Ini dalam bahasa Inggris artinya apa?”.",
            "Benar. “Ini dalam bahasa Inggris artinya apa?” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Ini ditulis dengan bahasa Jepang?” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Ini dalam bahasa Inggris artinya apa?”."
          ]
        },
        {
          "id": "q5",
          "type": "multiple-choice",
          "question": "Kalimat “Tolong berikan buku” yang tepat adalah…",
          "options": [
            "ほん で ください",
            "ほん に ください",
            "ほん を ください",
            "ほん は ください です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “ほん を ください”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “ほん で ください” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “ほん を ください”.",
            "Salah. “ほん に ください” tidak tepat. ください dipakai untuk meminta sesuatu dengan sopan, biasanya setelah objek + を. Jawaban yang benar adalah “ほん を ください”.",
            "Benar. “ほん を ください” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “ほん は ください です” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “ほん を ください”."
          ]
        },
        {
          "id": "q6",
          "type": "multiple-choice",
          "question": "Dalam Bab 7, agemasu berarti…",
          "options": [
            "Menerima",
            "Memberi",
            "Membaca",
            "Berbicara"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “Memberi”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “Menerima” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “Memberi”.",
            "Benar. “Memberi” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Membaca” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “Memberi”.",
            "Salah. “Berbicara” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “Memberi”."
          ]
        },
        {
          "id": "q7",
          "type": "multiple-choice",
          "question": "Dalam “Watashi wa Tanaka-san ni hon o agemasu”, siapa yang menerima buku?",
          "options": [
            "わたし",
            "たなかさん",
            "ほん",
            "Tidak ada penerima"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “たなかさん”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “わたし” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “たなかさん”.",
            "Benar. “たなかさん” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “ほん” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “たなかさん”.",
            "Salah. “Tidak ada penerima” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “たなかさん”."
          ]
        },
        {
          "id": "q8",
          "type": "multiple-choice",
          "question": "“Saya menerima buku dari Tanaka-san” adalah…",
          "options": [
            "わたし は たなかさん に ほん を あげます",
            "わたし は たなかさん に ほん を もらいます",
            "わたし は たなかさん で ほん を もらいます",
            "わたし は たなかさん を ほん に もらいます"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は たなかさん に ほん を もらいます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “わたし は たなかさん に ほん を あげます” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし は たなかさん に ほん を もらいます”.",
            "Benar. “わたし は たなかさん に ほん を もらいます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は たなかさん で ほん を もらいます” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “わたし は たなかさん に ほん を もらいます”.",
            "Salah. “わたし は たなかさん を ほん に もらいます” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “わたし は たなかさん に ほん を もらいます”."
          ]
        },
        {
          "id": "q9",
          "type": "multiple-choice",
          "question": "Perbedaan agemasu dan moraimasu adalah…",
          "options": [
            "あげます untuk alat, もらいます untuk bahasa",
            "あげます berarti meminta, もらいます berarti menulis",
            "あげます berarti memberi, もらいます berarti menerima",
            "Keduanya sama"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “あげます berarti memberi, もらいます berarti menerima”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “あげます untuk alat, もらいます untuk bahasa” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “あげます berarti memberi, もらいます berarti menerima”.",
            "Salah. “あげます berarti meminta, もらいます berarti menulis” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “あげます berarti memberi, もらいます berarti menerima”.",
            "Benar. “あげます berarti memberi, もらいます berarti menerima” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Keduanya sama” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “あげます berarti memberi, もらいます berarti menerima”."
          ]
        },
        {
          "id": "q10",
          "type": "multiple-choice",
          "question": "Jika objek yang diminta adalah kami, kalimat permintaan yang tepat adalah…",
          "options": [
            "かみ で ください",
            "かみ を ください",
            "かみ に ください",
            "かみ は ください か"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “かみ を ください”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “かみ で ください” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “かみ を ください”.",
            "Benar. “かみ を ください” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “かみ に ください” tidak tepat. ください dipakai untuk meminta sesuatu dengan sopan, biasanya setelah objek + を. Jawaban yang benar adalah “かみ を ください”.",
            "Salah. “かみ は ください か” tidak tepat. ください dipakai untuk meminta sesuatu dengan sopan, biasanya setelah objek + を. Jawaban yang benar adalah “かみ を ください”."
          ]
        },
        {
          "id": "q11",
          "type": "multiple-choice",
          "question": "Pasangan kata dan arti yang benar adalah…",
          "options": [
            "えんぴつ = kertas",
            "かみ = pensil",
            "にほんご = bahasa Jepang",
            "もらいます = memberi"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “にほんご = bahasa Jepang”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “えんぴつ = kertas” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “にほんご = bahasa Jepang”.",
            "Salah. “かみ = pensil” tidak tepat. Pilihan ini tidak sesuai dengan pola alat/bahasa atau memberi-menerima pada Bab 7. Jawaban yang benar adalah “にほんご = bahasa Jepang”.",
            "Benar. “にほんご = bahasa Jepang” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “もらいます = memberi” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “にほんご = bahasa Jepang”."
          ]
        },
        {
          "id": "q12",
          "type": "multiple-choice",
          "question": "“Saya berbicara dengan bahasa Inggris” yang tepat adalah…",
          "options": [
            "わたし は えいご を はなします",
            "わたし は えいご に はなします",
            "わたし は えいご で はなします",
            "わたし は えいご か はなします"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし は えいご で はなします”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “わたし は えいご を はなします” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “わたし は えいご で はなします”.",
            "Salah. “わたし は えいご に はなします” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “わたし は えいご で はなします”.",
            "Benar. “わたし は えいご で はなします” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は えいご か はなします” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “わたし は えいご で はなします”."
          ]
        },
        {
          "id": "q13",
          "type": "multiple-choice",
          "question": "“Watashi wa kami de kakimasu” kurang tepat jika maksudnya menulis dengan pensil karena…",
          "options": [
            "Partikel で salah total",
            "かきます tidak boleh dipakai",
            "かみ berarti kertas, bukan pensil",
            "Harus memakai もらいます"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “かみ berarti kertas, bukan pensil”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “Partikel で salah total” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “かみ berarti kertas, bukan pensil”.",
            "Salah. “かきます tidak boleh dipakai” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “かみ berarti kertas, bukan pensil”.",
            "Benar. “かみ berarti kertas, bukan pensil” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Harus memakai もらいます” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “かみ berarti kertas, bukan pensil”."
          ]
        },
        {
          "id": "q14",
          "type": "multiple-choice",
          "question": "“Yamada-san memberi saya buku” yang tepat adalah…",
          "options": [
            "やまださん は わたし に ほん を もらいます",
            "やまださん は わたし に ほん を あげます",
            "わたし は やまださん に ほん を あげます",
            "ほん は やまださん に わたし を あげます"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “やまださん は わたし に ほん を あげます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “やまださん は わたし に ほん を もらいます” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “やまださん は わたし に ほん を あげます”.",
            "Benar. “やまださん は わたし に ほん を あげます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は やまださん に ほん を あげます” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “やまださん は わたし に ほん を あげます”.",
            "Salah. “ほん は やまださん に わたし を あげます” tidak tepat. あげます berarti memberi, sedangkan もらいます berarti menerima; arah pemberian pada pilihan ini tidak sesuai. Jawaban yang benar adalah “やまださん は わたし に ほん を あげます”."
          ]
        },
        {
          "id": "q15",
          "type": "multiple-choice",
          "question": "Mou digunakan untuk menyatakan…",
          "options": [
            "Belum",
            "Bersama",
            "Sudah",
            "Mohon"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Sudah”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “Belum” tidak tepat. Pilihan ini tidak sesuai dengan pola alat/bahasa atau memberi-menerima pada Bab 7. Jawaban yang benar adalah “Sudah”.",
            "Salah. “Bersama” tidak tepat. Pilihan ini tidak sesuai dengan pola alat/bahasa atau memberi-menerima pada Bab 7. Jawaban yang benar adalah “Sudah”.",
            "Benar. “Sudah” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Mohon” tidak tepat. Pilihan ini tidak sesuai dengan pola alat/bahasa atau memberi-menerima pada Bab 7. Jawaban yang benar adalah “Sudah”."
          ]
        },
        {
          "id": "q16",
          "type": "multiple-choice",
          "question": "“Sudah makan” dinyatakan dengan…",
          "options": [
            "もう たべます",
            "もう たべません",
            "もう たべました",
            "もう たべます か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “もう たべました”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “もう たべます” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “もう たべました”.",
            "Salah. “もう たべません” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “もう たべました”.",
            "Benar. “もう たべました” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “もう たべます か” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “もう たべました”."
          ]
        },
        {
          "id": "q17",
          "type": "multiple-choice",
          "question": "Dalam “Watashi wa enpitsu de kakimasu”, enpitsu de berarti…",
          "options": [
            "Pensil sebagai objek yang ditulis",
            "Pensil sebagai pemilik tulisan",
            "Menggunakan pensil sebagai alat",
            "Pensil sebagai tempat menulis"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Menggunakan pensil sebagai alat”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “Pensil sebagai objek yang ditulis” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Menggunakan pensil sebagai alat”.",
            "Salah. “Pensil sebagai pemilik tulisan” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Menggunakan pensil sebagai alat”.",
            "Benar. “Menggunakan pensil sebagai alat” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Pensil sebagai tempat menulis” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Menggunakan pensil sebagai alat”."
          ]
        },
        {
          "id": "q18",
          "type": "multiple-choice",
          "question": "Kalimat yang salah berdasarkan fungsi partikel Bab 7 adalah…",
          "options": [
            "えんぴつ で かきます",
            "にほんご で はなします",
            "ほん を ください",
            "えいご を はなします"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “えいご を はなします”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “えんぴつ で かきます” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “えいご を はなします”.",
            "Salah. “にほんご で はなします” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “えいご を はなします”.",
            "Salah. “ほん を ください” tidak tepat. ください dipakai untuk meminta sesuatu dengan sopan, biasanya setelah objek + を. Jawaban yang benar adalah “えいご を はなします”.",
            "Benar. “えいご を はなします” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q19",
          "type": "multiple-choice",
          "question": "Jika seseorang berkata “Hon o kudasai”, ia sedang…",
          "options": [
            "Memberi buku kepada orang lain",
            "Menerima buku dari たなかさん",
            "Meminta buku dengan sopan",
            "Membaca buku dengan pensil"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Meminta buku dengan sopan”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “Memberi buku kepada orang lain” tidak tepat. ください dipakai untuk meminta sesuatu dengan sopan, biasanya setelah objek + を. Jawaban yang benar adalah “Meminta buku dengan sopan”.",
            "Salah. “Menerima buku dari たなかさん” tidak tepat. ください dipakai untuk meminta sesuatu dengan sopan, biasanya setelah objek + を. Jawaban yang benar adalah “Meminta buku dengan sopan”.",
            "Benar. “Meminta buku dengan sopan” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Membaca buku dengan pensil” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Meminta buku dengan sopan”."
          ]
        },
        {
          "id": "q20",
          "type": "multiple-choice",
          "question": "“Kore wa Nihongo de nan desu ka?” dipakai ketika…",
          "options": [
            "Bertanya harga benda",
            "Bertanya lokasi benda",
            "Bertanya arti sesuatu dalam bahasa Jepang",
            "Bertanya siapa pemilik benda"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Bertanya arti sesuatu dalam bahasa Jepang”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう.",
          "optionExplanations": [
            "Salah. “Bertanya harga benda” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Bertanya arti sesuatu dalam bahasa Jepang”.",
            "Salah. “Bertanya lokasi benda” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Bertanya arti sesuatu dalam bahasa Jepang”.",
            "Benar. “Bertanya arti sesuatu dalam bahasa Jepang” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Bertanya siapa pemilik benda” tidak tepat. Partikel で digunakan untuk alat atau bahasa; pilihan ini tidak menerapkan fungsi で dengan tepat. Jawaban yang benar adalah “Bertanya arti sesuatu dalam bahasa Jepang”."
          ]
        },
        {
          "id": "q21",
          "type": "essay",
          "question": "A: Nani de kakimasu ka?\nB: Enpitsu ___ kakimasu.",
          "acceptedAnswers": [
            "de",
            "で"
          ],
          "explanation": "Jawaban yang diharapkan adalah “で”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう."
        },
        {
          "id": "q22",
          "type": "essay",
          "question": "A: Nihongo ___ hanashimasu ka?\nB: Hai, Nihongo de hanashimasu.",
          "acceptedAnswers": [
            "de",
            "で"
          ],
          "explanation": "Jawaban yang diharapkan adalah “で”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう."
        },
        {
          "id": "q23",
          "type": "essay",
          "question": "A: Kore wa Eigo de __________ desu ka?\nB: “Book” desu.",
          "acceptedAnswers": [
            "nan",
            "なん",
            "何"
          ],
          "explanation": "Jawaban yang diharapkan adalah “なん”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう."
        },
        {
          "id": "q24",
          "type": "essay",
          "question": "A: Hon o __________.\nB: Hai, douzo.",
          "acceptedAnswers": [
            "kudasai",
            "ください"
          ],
          "explanation": "Jawaban yang diharapkan adalah “ください”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう."
        },
        {
          "id": "q25",
          "type": "essay",
          "question": "A: Watashi wa Tanaka-san ni hon o __________.\nB: Sou desu ka.",
          "acceptedAnswers": [
            "moraimasu",
            "もらいます"
          ],
          "explanation": "Jawaban yang diharapkan adalah “もらいます”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang partikel で untuk alat/bahasa, あげます, もらいます, ください, dan もう."
        }
      ],
      "media": {
        "image": "assets/images/lesson-3-1.svg",
        "imageAlt": "Ilustrasi alat dan kegiatan menulis",
        "title": "Contoh pengucapan alat atau sarana",
        "audioText": "私は鉛筆で書きます。",
        "audioRomaji": "Watashi wa enpitsu de kakimasu.",
        "audioTranslation": "Saya menulis dengan pensil.",
        "audioLang": "ja-JP"
      }
    },
    "3-2": {
      "id": "3-2",
      "title": "Bagaimana Rasanya?",
      "titleJP": "形容詞と描写",
      "chapterTitle": "Bab 3: Deskripsi dan Ekspresi",
      "duration": "~24 menit",
      "introduction": "Fokus utama bab ini adalah mendeskripsikan benda, orang, atau situasi menggunakan kata sifat (adjective). Kita akan belajar dua jenis kata sifat (i-adjective dan na-adjective), cara menyusun kalimat deskripsi, serta ungkapan seperti “sangat”, “tidak terlalu”, “bagaimana?”, dan “seperti apa?” agar bisa menggambarkan sesuatu dengan lebih hidup.",
      "sections": [
        {
          "type": "timeline-card",
          "color": "#7c6df7",
          "colorName": "auto",
          "number": "1",
          "title": "Dua Jenis Kata Sifat",
          "body": "<p class=\"material-paragraph\">Dua Jenis Kata Sifat Bahasa Jepang punya dua tipe kata sifat yang perilakunya berbeda.</p><p class=\"material-paragraph\">Tabel Kata Sifat</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Jenis</th><th>Contoh</th><th>Cara Mengubah</th></tr><tr><td>Kata Sifat i (い形容詞)</td><td>Ookii (大きい) → besar<br>Takai (高い) → mahal/mahal</td><td>Akhiran ~i</td></tr><tr><td>Kata Sifat na (な形容詞)</td><td>Kirei na (きれいな) → cantik/bersih<br>Shizuka na (静かな) → tenang</td><td>Butuh “na” sebelum kata benda</td></tr></table></div><p class=\"material-paragraph\">Struktur Kalimat Dasar:</p><p class=\"material-paragraph\">Kata Benda は Kata Sifat です。</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Kono hon wa omoshiroi desu. (この 本 は 面白い です。) → Buku ini menarik.</p><p class=\"material-paragraph\">Ano mise wa kirei desu. (あの 店 は きれい です。) → Toko itu bersih/cantik.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#60a5fa",
          "colorName": "auto",
          "number": "2",
          "title": "Kata Sifat sebagai Kata Sifat Penjelas",
          "body": "<p class=\"material-paragraph\">Kata Sifat sebagai Kata Sifat Penjelas Bisa diletakkan sebelum kata benda.</p><p class=\"material-paragraph\">Aturan:</p><p class=\"material-paragraph\">Kata Sifat i → langsung + kata benda (takai hon = buku yang mahal)</p><p class=\"material-paragraph\">Kata Sifat na → na + kata benda (kirei na hon = buku yang cantik)</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Takai tokei o かいました.</p><p class=\"material-paragraph\">(高い 時計 を 買いました。)</p><p class=\"material-paragraph\">→ Saya membeli jam yang mahal.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#34d399",
          "colorName": "auto",
          "number": "3",
          "title": "Ungkapan “Sangat” & “Tidak Terlalu”",
          "body": "<p class=\"material-paragraph\">Ungkapan “Sangat” &amp; “Tidak Terlalu” Totemo (とても) = sangat Amari (あまり) + negatif = tidak terlalu / kurang</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Kono sushi wa totemo oishii desu.</p><p class=\"material-paragraph\">(この 寿司 は とても おいしい です。)</p><p class=\"material-paragraph\">→ Sushi ini sangat enak.</p><p class=\"material-paragraph\">Kono eiga wa amari omoshiroku arimasen.</p><p class=\"material-paragraph\">(この 映画 は あまり 面白く ありません。)</p><p class=\"material-paragraph\">→ Film ini tidak terlalu menarik.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#f59e0b",
          "colorName": "auto",
          "number": "4",
          "title": "Bertanya “Bagaimana?” dan “Seperti Apa?”",
          "body": "<p class=\"material-paragraph\">Bertanya “Bagaimana?” dan “Seperti Apa?” Dou desu ka? (どうですか？) → Bagaimana? / Bagaimana rasanya? Donna … desu ka? (どんな…ですか？) → Seperti apa …?</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Kono kasa wa dou desu ka?</p><p class=\"material-paragraph\">(この 傘 は どう です か？)</p><p class=\"material-paragraph\">→ Payung ini bagaimana?</p><p class=\"material-paragraph\">Donna tabemono ga suki desu ka?</p><p class=\"material-paragraph\">(どんな 食べ物 が 好き です か？)</p><p class=\"material-paragraph\">→ Makanan seperti apa yang Anda menyukai?</p>"
        },
        {
          "type": "timeline-card",
          "color": "#fb7185",
          "colorName": "auto",
          "number": "5",
          "title": "Daftar Kosakata Baru",
          "body": "<p class=\"material-paragraph\">Daftar Kosakata Baru</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kosakata</th><th>Makna</th><th>Penjelasan &amp; Konteks Penggunaan</th></tr><tr><td>Ookii (大きい)</td><td>Besar</td><td>Kata sifat i</td></tr><tr><td>Chiisai (小さい)</td><td>Kecil</td><td>Kata sifat i</td></tr><tr><td>Takai (高い)</td><td>Mahal / Tinggi</td><td>Kata sifat i</td></tr><tr><td>Yasui (安い)</td><td>Murah</td><td>Kata sifat i</td></tr><tr><td>Kirei na (きれいな)</td><td>Cantik / Bersih</td><td>Kata sifat na</td></tr><tr><td>Shizuka na (静かな)</td><td>Tenang</td><td>Kata sifat na</td></tr><tr><td>Omoshiroi (面白い)</td><td>Menarik / Lucu</td><td>Kata sifat i</td></tr><tr><td>Oishii (おいしい)</td><td>Enak</td><td>Kata sifat i</td></tr><tr><td>Totemo (とても)</td><td>Sangat</td><td>Penguat positif</td></tr><tr><td>Amari (あまり)</td><td>Tidak terlalu</td><td>Hanya dengan negatif</td></tr><tr><td>Dou (どう)</td><td>Bagaimana</td><td>Kata tanya deskripsi</td></tr><tr><td>Donna (どんな)</td><td>Seperti apa</td><td>Kata tanya jenis</td></tr></table></div>"
        }
      ],
      "quiz": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "Seorang siswa ingin mengatakan “Buku ini menarik.”",
          "options": [
            "この ほん は おもしろい です",
            "この ほん は おもしろい な です",
            "この ほん は おもしろく です",
            "この ほん は おもしろい ほん です"
          ],
          "correct": 0,
          "explanation": "Jawaban yang benar adalah “この ほん は おもしろい です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Benar. “この ほん は おもしろい です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “この ほん は おもしろい な です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この ほん は おもしろい です”.",
            "Salah. “この ほん は おもしろく です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この ほん は おもしろい です”.",
            "Salah. “この ほん は おもしろい ほん です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この ほん は おもしろい です”."
          ]
        },
        {
          "id": "q2",
          "type": "multiple-choice",
          "question": "Manakah yang termasuk kata sifat na?",
          "options": [
            "おおきい",
            "たかい",
            "きれい な",
            "おいしい"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “きれい な”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “おおきい” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “きれい な”.",
            "Salah. “たかい” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “きれい な”.",
            "Benar. “きれい な” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “おいしい” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “きれい な”."
          ]
        },
        {
          "id": "q3",
          "type": "multiple-choice",
          "question": "Jika ingin mengatakan “jam yang mahal”, bentuk yang benar adalah…",
          "options": [
            "たかい な とけい",
            "たかい とけい",
            "とけい たかい",
            "とけい な たかい"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “たかい とけい”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “たかい な とけい” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “たかい とけい”.",
            "Benar. “たかい とけい” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “とけい たかい” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “たかい とけい”.",
            "Salah. “とけい な たかい” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “たかい とけい”."
          ]
        },
        {
          "id": "q4",
          "type": "multiple-choice",
          "question": "Jika ingin mengatakan “toko yang bersih”, bentuk yang benar adalah…",
          "options": [
            "きれい みせ",
            "きれい な みせ",
            "きれい い みせ",
            "みせ きれい な"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “きれい な みせ”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “きれい みせ” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “きれい な みせ”.",
            "Benar. “きれい な みせ” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “きれい い みせ” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “きれい な みせ”.",
            "Salah. “みせ きれい な” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “きれい な みせ”."
          ]
        },
        {
          "id": "q5",
          "type": "multiple-choice",
          "question": "“Kono sushi wa totemo oishii desu” berarti…",
          "options": [
            "すし ini tidak terlalu enak",
            "すし ini mahal",
            "すし ini sangat enak",
            "すし ini menarik"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “すし ini sangat enak”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “すし ini tidak terlalu enak” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “すし ini sangat enak”.",
            "Salah. “すし ini mahal” tidak tepat. Kata sifat i langsung diikuti kata benda dan tidak memakai な. Jawaban yang benar adalah “すし ini sangat enak”.",
            "Benar. “すし ini sangat enak” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “すし ini menarik” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “すし ini sangat enak”."
          ]
        },
        {
          "id": "q6",
          "type": "multiple-choice",
          "question": "Ungkapan amari harus digunakan bersama bentuk…",
          "options": [
            "Positif",
            "Tanya",
            "Negatif",
            "Kepemilikan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Negatif”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “Positif” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Negatif”.",
            "Salah. “Tanya” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Negatif”.",
            "Benar. “Negatif” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Kepemilikan” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Negatif”."
          ]
        },
        {
          "id": "q7",
          "type": "multiple-choice",
          "question": "“Film ini tidak terlalu menarik” yang tepat adalah…",
          "options": [
            "この えいが は あまり おもしろい です",
            "この えいが は とても おもしろく ありません",
            "この えいが は あまり おもしろく ありません",
            "この えいが は おもしろい な です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “この えいが は あまり おもしろく ありません”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “この えいが は あまり おもしろい です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この えいが は あまり おもしろく ありません”.",
            "Salah. “この えいが は とても おもしろく ありません” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この えいが は あまり おもしろく ありません”.",
            "Benar. “この えいが は あまり おもしろく ありません” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “この えいが は おもしろい な です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この えいが は あまり おもしろく ありません”."
          ]
        },
        {
          "id": "q8",
          "type": "multiple-choice",
          "question": "Kalimat yang salah karena penggunaan kata sifat na tidak tepat adalah…",
          "options": [
            "きれい な ほん です",
            "しずか な みせ です",
            "おおきい な ほん です",
            "きれい です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “おおきい な ほん です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “きれい な ほん です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “おおきい な ほん です”.",
            "Salah. “しずか な みせ です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “おおきい な ほん です”.",
            "Benar. “おおきい な ほん です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “きれい です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “おおきい な ほん です”."
          ]
        },
        {
          "id": "q9",
          "type": "multiple-choice",
          "question": "Dou desu ka digunakan untuk menanyakan…",
          "options": [
            "Siapa pemiliknya?",
            "Berapa harganya?",
            "Bagaimana? / Bagaimana?",
            "Di mana tempatnya?"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Bagaimana? / Bagaimana?”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “Siapa pemiliknya?” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Bagaimana? / Bagaimana?”.",
            "Salah. “Berapa harganya?” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Bagaimana? / Bagaimana?”.",
            "Benar. “Bagaimana? / Bagaimana?” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Di mana tempatnya?” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Bagaimana? / Bagaimana?”."
          ]
        },
        {
          "id": "q10",
          "type": "multiple-choice",
          "question": "Donna digunakan untuk menanyakan…",
          "options": [
            "Harga benda",
            "Lokasi tempat",
            "Seperti apa / jenis apa",
            "Waktu kegiatan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Seperti apa / jenis apa”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “Harga benda” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Seperti apa / jenis apa”.",
            "Salah. “Lokasi tempat” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Seperti apa / jenis apa”.",
            "Benar. “Seperti apa / jenis apa” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Waktu kegiatan” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Seperti apa / jenis apa”."
          ]
        },
        {
          "id": "q11",
          "type": "multiple-choice",
          "question": "A: Kono kasa wa dou desu ka? Jawaban paling sesuai adalah…",
          "options": [
            "かさ は わたし の です",
            "かさ は ここ です",
            "この かさ は おおきい です",
            "かさ は いくら です か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “この かさ は おおきい です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “かさ は わたし の です” tidak tepat. どう menanyakan “bagaimana”, sedangkan どんな menanyakan “seperti apa/jenis apa”. Jawaban yang benar adalah “この かさ は おおきい です”.",
            "Salah. “かさ は ここ です” tidak tepat. どう menanyakan “bagaimana”, sedangkan どんな menanyakan “seperti apa/jenis apa”. Jawaban yang benar adalah “この かさ は おおきい です”.",
            "Benar. “この かさ は おおきい です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “かさ は いくら です か” tidak tepat. どう menanyakan “bagaimana”, sedangkan どんな menanyakan “seperti apa/jenis apa”. Jawaban yang benar adalah “この かさ は おおきい です”."
          ]
        },
        {
          "id": "q12",
          "type": "multiple-choice",
          "question": "“Makanan ini sangat enak” yang tepat adalah…",
          "options": [
            "この たべもの は あまり おいしい です",
            "この たべもの は とても おいしい です",
            "この たべもの は おいしい な です",
            "この たべもの は どんな おいしい です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “この たべもの は とても おいしい です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “この たべもの は あまり おいしい です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この たべもの は とても おいしい です”.",
            "Benar. “この たべもの は とても おいしい です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “この たべもの は おいしい な です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この たべもの は とても おいしい です”.",
            "Salah. “この たべもの は どんな おいしい です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この たべもの は とても おいしい です”."
          ]
        },
        {
          "id": "q13",
          "type": "multiple-choice",
          "question": "“Ano mise wa kirei desu” berarti…",
          "options": [
            "Toko itu mahal",
            "Toko itu besar",
            "Toko itu bersih/cantik",
            "Toko itu menarik"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Toko itu bersih/cantik”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “Toko itu mahal” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Toko itu bersih/cantik”.",
            "Salah. “Toko itu besar” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Toko itu bersih/cantik”.",
            "Benar. “Toko itu bersih/cantik” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Toko itu menarik” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Toko itu bersih/cantik”."
          ]
        },
        {
          "id": "q14",
          "type": "multiple-choice",
          "question": "“Buku yang menarik” bentuknya adalah…",
          "options": [
            "おもしろい ほん",
            "おもしろい な ほん",
            "ほん おもしろい な",
            "ほん な おもしろい"
          ],
          "correct": 0,
          "explanation": "Jawaban yang benar adalah “おもしろい ほん”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Benar. “おもしろい ほん” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “おもしろい な ほん” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “おもしろい ほん”.",
            "Salah. “ほん おもしろい な” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “おもしろい ほん”.",
            "Salah. “ほん な おもしろい” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “おもしろい ほん”."
          ]
        },
        {
          "id": "q15",
          "type": "multiple-choice",
          "question": "Pasangan kata sifat dan arti yang benar adalah…",
          "options": [
            "やすい = mahal",
            "たかい = murah",
            "ちいさい = kecil",
            "おいしい = tenang"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “ちいさい = kecil”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “やすい = mahal” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “ちいさい = kecil”.",
            "Salah. “たかい = murah” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “ちいさい = kecil”.",
            "Benar. “ちいさい = kecil” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “おいしい = tenang” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “ちいさい = kecil”."
          ]
        },
        {
          "id": "q16",
          "type": "multiple-choice",
          "question": "“Kono tokei wa amari takaku arimasen” berarti…",
          "options": [
            "Jam ini sangat mahal",
            "Jam ini murah sekali",
            "Jam ini tidak terlalu mahal",
            "Jam ini tidak menarik"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Jam ini tidak terlalu mahal”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “Jam ini sangat mahal” tidak tepat. とても dipakai untuk penguatan positif, sedangkan あまり harus diikuti bentuk negatif. Jawaban yang benar adalah “Jam ini tidak terlalu mahal”.",
            "Salah. “Jam ini murah sekali” tidak tepat. とても dipakai untuk penguatan positif, sedangkan あまり harus diikuti bentuk negatif. Jawaban yang benar adalah “Jam ini tidak terlalu mahal”.",
            "Benar. “Jam ini tidak terlalu mahal” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Jam ini tidak menarik” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “Jam ini tidak terlalu mahal”."
          ]
        },
        {
          "id": "q17",
          "type": "multiple-choice",
          "question": "“Saya membeli jam yang mahal” paling tepat adalah…",
          "options": [
            "たかい な とけい を かいました",
            "たかい とけい を かいました",
            "とけい たかい を かいました",
            "とけい な たかい を かいました"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “たかい とけい を かいました”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “たかい な とけい を かいました” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “たかい とけい を かいました”.",
            "Benar. “たかい とけい を かいました” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “とけい たかい を かいました” tidak tepat. Kata sifat i langsung diikuti kata benda dan tidak memakai な. Jawaban yang benar adalah “たかい とけい を かいました”.",
            "Salah. “とけい な たかい を かいました” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “たかい とけい を かいました”."
          ]
        },
        {
          "id": "q18",
          "type": "multiple-choice",
          "question": "Pertanyaan “Payung itu seperti apa?” yang tepat adalah…",
          "options": [
            "あの かさ は いくら です か",
            "あの かさ は どこ です か",
            "あの かさ は どんな です か",
            "あの かさ は だれ の です か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “あの かさ は どんな です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “あの かさ は いくら です か” tidak tepat. Pilihan ini tidak sesuai dengan aturan kata sifat atau ungkapan deskripsi. Jawaban yang benar adalah “あの かさ は どんな です か”.",
            "Salah. “あの かさ は どこ です か” tidak tepat. Pilihan ini tidak sesuai dengan aturan kata sifat atau ungkapan deskripsi. Jawaban yang benar adalah “あの かさ は どんな です か”.",
            "Benar. “あの かさ は どんな です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “あの かさ は だれ の です か” tidak tepat. Pilihan ini tidak sesuai dengan aturan kata sifat atau ungkapan deskripsi. Jawaban yang benar adalah “あの かさ は どんな です か”."
          ]
        },
        {
          "id": "q19",
          "type": "multiple-choice",
          "question": "Jika kirei na diletakkan sebelum kata benda, bentuknya menjadi…",
          "options": [
            "きれい ほん",
            "きれい な ほん",
            "きれい い ほん",
            "ほん きれい な"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “きれい な ほん”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “きれい ほん” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “きれい な ほん”.",
            "Benar. “きれい な ほん” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “きれい い ほん” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “きれい な ほん”.",
            "Salah. “ほん きれい な” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “きれい な ほん”."
          ]
        },
        {
          "id": "q20",
          "type": "multiple-choice",
          "question": "Kalimat tepat untuk mendeskripsikan benda dengan kata sifat i adalah…",
          "options": [
            "この ほん は きれい な です",
            "この ほん は おおきい な です",
            "この ほん は おおきい です",
            "この ほん は おおきい の です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “この ほん は おおきい です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな.",
          "optionExplanations": [
            "Salah. “この ほん は きれい な です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この ほん は おおきい です”.",
            "Salah. “この ほん は おおきい な です” tidak tepat. Kata sifat な membutuhkan な sebelum kata benda, tetapi tidak memakai な saat menjadi predikat biasa sebelum です. Jawaban yang benar adalah “この ほん は おおきい です”.",
            "Benar. “この ほん は おおきい です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “この ほん は おおきい の です” tidak tepat. Kata sifat i langsung diikuti kata benda dan tidak memakai な. Jawaban yang benar adalah “この ほん は おおきい です”."
          ]
        },
        {
          "id": "q21",
          "type": "essay",
          "question": "A: Kono sushi wa dou desu ka?\nB: Totemo __________ desu.",
          "acceptedAnswers": [
            "oishii",
            "おいしい",
            "美味しい"
          ],
          "explanation": "Jawaban yang diharapkan adalah “おいしい”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな."
        },
        {
          "id": "q22",
          "type": "essay",
          "question": "A: Kono eiga wa omoshiroi desu ka?\nB: Iie, amari omoshiroku __________.",
          "acceptedAnswers": [
            "arimasen",
            "ありません"
          ],
          "explanation": "Jawaban yang diharapkan adalah “ありません”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな."
        },
        {
          "id": "q23",
          "type": "essay",
          "question": "A: Donna hon desu ka?\nB: __________ hon desu.",
          "acceptedAnswers": [
            "omoshiroi",
            "おもしろい",
            "面白い"
          ],
          "explanation": "Jawaban yang diharapkan adalah “おもしろい”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな."
        },
        {
          "id": "q24",
          "type": "essay",
          "question": "A: Ano mise wa donna mise desu ka?\nB: __________ na mise desu.",
          "acceptedAnswers": [
            "kirei",
            "きれい"
          ],
          "explanation": "Jawaban yang diharapkan adalah “きれい”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな."
        },
        {
          "id": "q25",
          "type": "essay",
          "question": "A: Kono tokei wa takai desu ka?\nB: Iie, amari __________ arimasen.",
          "acceptedAnswers": [
            "takaku",
            "たかく",
            "高く"
          ],
          "explanation": "Jawaban yang diharapkan adalah “たかく”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang kata sifat i/な, とても, あまり + negatif, どう, dan どんな."
        }
      ],
      "media": {
        "image": "assets/images/lesson-3-2.svg",
        "imageAlt": "Ilustrasi deskripsi rasa menggunakan kata sifat",
        "title": "Contoh pengucapan kata sifat",
        "audioText": "この寿司はとてもおいしいです。",
        "audioRomaji": "Kono sushi wa totemo oishii desu.",
        "audioTranslation": "Sushi ini sangat enak.",
        "audioLang": "ja-JP"
      }
    },
    "3-3": {
      "id": "3-3",
      "title": "Preferensi, Kemampuan, dan Alasan",
      "titleJP": "好み・能力・理由",
      "chapterTitle": "Bab 3: Deskripsi dan Ekspresi",
      "duration": "~24 menit",
      "introduction": "Fokus utama bab ini adalah mengungkapkan preferensi (suka/tidak suka), kemampuan (bisa/tidak bisa, pandai/kurang pandai), serta alasan di balik pendapat kita. Kita akan belajar cara bertanya “suka yang mana?”, “bisa apa?”, dan “kenapa?” agar percakapan menjadi lebih pribadi dan mendalam.",
      "sections": [
        {
          "type": "timeline-card",
          "color": "#7c6df7",
          "colorName": "auto",
          "number": "1",
          "title": "Mengungkapkan Suka & Tidak Suka",
          "body": "<p class=\"material-paragraph\">Mengungkapkan Suka &amp; Tidak Suka Gunakan partikel ga (が) untuk menyatakan apa yang disukai atau tidak disukai.</p><p class=\"material-paragraph\">Struktur Kalimat Dasar:</p><p class=\"material-paragraph\">[Kata Benda] が 好きです / 嫌いです。</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Watashi wa sushi ga suki desu.</p><p class=\"material-paragraph\">(私 は 寿司 が 好き です。)</p><p class=\"material-paragraph\">→ Saya suka sushi.</p><p class=\"material-paragraph\">Yamada-san wa nattou ga kirai desu.</p><p class=\"material-paragraph\">(山田さん は 納豆 が 嫌い です。)</p><p class=\"material-paragraph\">→ Mr. Yamada tidak suka natto.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#60a5fa",
          "colorName": "auto",
          "number": "2",
          "title": "Kemampuan: Jouzu (上手) & Heta (下手)",
          "body": "<p class=\"material-paragraph\">Kemampuan: Jouzu (上手) &amp; Heta (下手)</p><p class=\"material-paragraph\">Jouzu = pandai / mahir</p><p class=\"material-paragraph\">Heta = kurang pandai / lemah</p><p class=\"material-paragraph\">Struktur:</p><p class=\"material-paragraph\">[Kata Benda] が 上手です / 下手です。</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Watashi wa Nihongo ga jouzu desu.</p><p class=\"material-paragraph\">(私 は 日本語 が 上手 です。)</p><p class=\"material-paragraph\">→ Saya pandai bahasa Jepang.</p><p class=\"material-paragraph\">Mira-san wa tenisu ga heta desu.</p><p class=\"material-paragraph\">(ミラさん は テニス が 下手 です。)</p><p class=\"material-paragraph\">→ Ms. Mira kurang pandai tenis.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#34d399",
          "colorName": "auto",
          "number": "3",
          "title": "Kemampuan: Dekiru (できます) & Wakaru (わかります)",
          "body": "<p class=\"material-paragraph\">Kemampuan: Dekiru (できます) &amp; Wakaru (わかります) Dekiru = bisa / mampu melakukannya Wakaru = mengerti / paham</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Watashi wa sushi o tsukuru koto ga dekimasu.</p><p class=\"material-paragraph\">(私 は 寿司 を 作る こと が できます。)</p><p class=\"material-paragraph\">→ Saya bisa membuat sushi.</p><p class=\"material-paragraph\">Kono kanji wa wakari masu ka?</p><p class=\"material-paragraph\">(この 漢字 は わかります か？)</p><p class=\"material-paragraph\">→ Apakah Anda mengerti kanji ini?</p>"
        },
        {
          "type": "timeline-card",
          "color": "#f59e0b",
          "colorName": "auto",
          "number": "4",
          "title": "Alasan: ~Kara (から) dan Doushite (どうして)",
          "body": "<p class=\"material-paragraph\">Alasan: ~Kara (から) dan Doushite (どうして) ~Kara = karena (memberi alasan) Doushite = mengapa?</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Doushite sushi ga suki desu ka?</p><p class=\"material-paragraph\">(どうして 寿司 が 好き です か？)</p><p class=\"material-paragraph\">→ Mengapa Anda menyukai sushi?</p><p class=\"material-paragraph\">Oishii kara suki desu.</p><p class=\"material-paragraph\">(おいしい から 好き です。)</p><p class=\"material-paragraph\">→ Karena enak, jadi saya suka.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#fb7185",
          "colorName": "auto",
          "number": "5",
          "title": "Daftar Kosakata Baru",
          "body": "<p class=\"material-paragraph\">Daftar Kosakata Baru</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kosakata</th><th>Makna</th><th>Penjelasan &amp; Konteks Penggunaan</th></tr><tr><td>Suki (好き)</td><td>Suka</td><td>Dengan partikel ga</td></tr><tr><td>Kirai (嫌い)</td><td>Tidak suka / benci</td><td>Dengan partikel ga</td></tr><tr><td>Jouzu (上手)</td><td>Pandai / mahir</td><td>Dengan partikel ga</td></tr><tr><td>Heta (下手)</td><td>Kurang pandai</td><td>Dengan partikel ga</td></tr><tr><td>Dekiru (できます)</td><td>Bisa / mampu</td><td>Kemampuan melakukan sesuatu</td></tr><tr><td>Wakaru (わかります)</td><td>Mengerti / paham</td><td>Kemampuan memahami</td></tr><tr><td>Doushite (どうして)</td><td>Mengapa? / Mengapa?</td><td>Kata tanya alasan</td></tr><tr><td>~Kara (～から)</td><td>Karena</td><td>Memberi alasan</td></tr><tr><td>Tabemono (食べ物)</td><td>Makanan</td><td>Topik preferensi</td></tr><tr><td>Supootsu (スポーツ)</td><td>Olahraga</td><td>Topik kemampuan</td></tr></table></div>"
        }
      ],
      "quiz": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "Seorang siswa ingin mengatakan “Saya suka sushi.”",
          "options": [
            "わたし は すし を すき です",
            "わたし は すし で すき です",
            "わたし は すし が すき です",
            "わたし は すし に すき です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし は すし が すき です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “わたし は すし を すき です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は すし が すき です”.",
            "Salah. “わたし は すし で すき です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は すし が すき です”.",
            "Benar. “わたし は すし が すき です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は すし に すき です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は すし が すき です”."
          ]
        },
        {
          "id": "q2",
          "type": "multiple-choice",
          "question": "Partikel ga dalam “Sushi ga suki desu” menunjukkan…",
          "options": [
            "Tempat kegiatan",
            "Alat yang digunakan",
            "Hal yang disukai",
            "Tujuan pergi"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Hal yang disukai”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “Tempat kegiatan” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “Hal yang disukai”.",
            "Salah. “Alat yang digunakan” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “Hal yang disukai”.",
            "Benar. “Hal yang disukai” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Tujuan pergi” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “Hal yang disukai”."
          ]
        },
        {
          "id": "q3",
          "type": "multiple-choice",
          "question": "“Saya tidak suka natto” yang tepat adalah…",
          "options": [
            "わたし は なっとう を きらい です",
            "わたし は なっとう が きらい です",
            "わたし は なっとう で きらい です",
            "わたし は なっとう に きらい です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は なっとう が きらい です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “わたし は なっとう を きらい です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は なっとう が きらい です”.",
            "Benar. “わたし は なっとう が きらい です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は なっとう で きらい です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は なっとう が きらい です”.",
            "Salah. “わたし は なっとう に きらい です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は なっとう が きらい です”."
          ]
        },
        {
          "id": "q4",
          "type": "multiple-choice",
          "question": "“Saya pandai bahasa Jepang” yang paling tepat adalah…",
          "options": [
            "わたし は にほんご が じょうず です",
            "わたし は にほんご を じょうず です",
            "わたし は にほんご で じょうず です",
            "わたし は にほんご に じょうず です"
          ],
          "correct": 0,
          "explanation": "Jawaban yang benar adalah “わたし は にほんご が じょうず です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Benar. “わたし は にほんご が じょうず です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は にほんご を じょうず です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は にほんご が じょうず です”.",
            "Salah. “わたし は にほんご で じょうず です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は にほんご が じょうず です”.",
            "Salah. “わたし は にほんご に じょうず です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は にほんご が じょうず です”."
          ]
        },
        {
          "id": "q5",
          "type": "multiple-choice",
          "question": "Heta berarti…",
          "options": [
            "Suka",
            "Bisa",
            "Kurang pandai / lemah",
            "Mengerti"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Kurang pandai / lemah”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “Suka” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “Kurang pandai / lemah”.",
            "Salah. “Bisa” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “Kurang pandai / lemah”.",
            "Benar. “Kurang pandai / lemah” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Mengerti” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “Kurang pandai / lemah”."
          ]
        },
        {
          "id": "q6",
          "type": "multiple-choice",
          "question": "“Mira-san kurang pandai tenis” yang benar adalah…",
          "options": [
            "みらさん は てにす を へた です",
            "みらさん は てにす で へた です",
            "みらさん は てにす が へた です",
            "みらさん は てにす に へた です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “みらさん は てにす が へた です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “みらさん は てにす を へた です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “みらさん は てにす が へた です”.",
            "Salah. “みらさん は てにす で へた です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “みらさん は てにす が へた です”.",
            "Benar. “みらさん は てにす が へた です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “みらさん は てにす に へた です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “みらさん は てにす が へた です”."
          ]
        },
        {
          "id": "q7",
          "type": "multiple-choice",
          "question": "Dekiru digunakan untuk menyatakan…",
          "options": [
            "Suka terhadap benda",
            "Tidak suka terhadap makanan",
            "Bisa / mampu melakukan sesuatu",
            "Alasan suatu pendapat"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Bisa / mampu melakukan sesuatu”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “Suka terhadap benda” tidak tepat. Pilihan ini tidak sesuai dengan pola preferensi, kemampuan, atau alasan pada Bab 9. Jawaban yang benar adalah “Bisa / mampu melakukan sesuatu”.",
            "Salah. “Tidak suka terhadap makanan” tidak tepat. Pilihan ini tidak sesuai dengan pola preferensi, kemampuan, atau alasan pada Bab 9. Jawaban yang benar adalah “Bisa / mampu melakukan sesuatu”.",
            "Benar. “Bisa / mampu melakukan sesuatu” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Alasan suatu pendapat” tidak tepat. Pilihan ini tidak sesuai dengan pola preferensi, kemampuan, atau alasan pada Bab 9. Jawaban yang benar adalah “Bisa / mampu melakukan sesuatu”."
          ]
        },
        {
          "id": "q8",
          "type": "multiple-choice",
          "question": "“Saya bisa membuat sushi” yang paling tepat adalah…",
          "options": [
            "わたし は すし が できます",
            "わたし は すし を すき です",
            "わたし は すし を つくる こと が できます",
            "わたし は すし で つくる こと です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし は すし を つくる こと が できます”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “わたし は すし が できます” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は すし を つくる こと が できます”.",
            "Salah. “わたし は すし を すき です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は すし を つくる こと が できます”.",
            "Benar. “わたし は すし を つくる こと が できます” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は すし で つくる こと です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は すし を つくる こと が できます”."
          ]
        },
        {
          "id": "q9",
          "type": "multiple-choice",
          "question": "Wakaru digunakan untuk menyatakan…",
          "options": [
            "Memberi",
            "Membeli",
            "Mengerti / paham",
            "Tidak suka"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Mengerti / paham”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “Memberi” tidak tepat. Pilihan ini tidak sesuai dengan pola preferensi, kemampuan, atau alasan pada Bab 9. Jawaban yang benar adalah “Mengerti / paham”.",
            "Salah. “Membeli” tidak tepat. Pilihan ini tidak sesuai dengan pola preferensi, kemampuan, atau alasan pada Bab 9. Jawaban yang benar adalah “Mengerti / paham”.",
            "Benar. “Mengerti / paham” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Tidak suka” tidak tepat. Pilihan ini tidak sesuai dengan pola preferensi, kemampuan, atau alasan pada Bab 9. Jawaban yang benar adalah “Mengerti / paham”."
          ]
        },
        {
          "id": "q10",
          "type": "multiple-choice",
          "question": "“Apakah Anda mengerti kanji ini?” yang tepat adalah…",
          "options": [
            "この かんじ は すき です か",
            "この かんじ は できます か",
            "この かんじ は わかります か",
            "この かんじ は じょうず です か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “この かんじ は わかります か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “この かんじ は すき です か” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “この かんじ は わかります か”.",
            "Salah. “この かんじ は できます か” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “この かんじ は わかります か”.",
            "Benar. “この かんじ は わかります か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “この かんじ は じょうず です か” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “この かんじ は わかります か”."
          ]
        },
        {
          "id": "q11",
          "type": "multiple-choice",
          "question": "Doushite berarti…",
          "options": [
            "Apa",
            "Di mana",
            "Kapan",
            "Mengapa / kenapa"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “Mengapa / kenapa”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “Apa” tidak tepat. どうして menanyakan alasan, dan から digunakan untuk memberi alasan. Jawaban yang benar adalah “Mengapa / kenapa”.",
            "Salah. “Di mana” tidak tepat. どうして menanyakan alasan, dan から digunakan untuk memberi alasan. Jawaban yang benar adalah “Mengapa / kenapa”.",
            "Salah. “Kapan” tidak tepat. どうして menanyakan alasan, dan から digunakan untuk memberi alasan. Jawaban yang benar adalah “Mengapa / kenapa”.",
            "Benar. “Mengapa / kenapa” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q12",
          "type": "multiple-choice",
          "question": "“Mengapa Anda menyukai sushi?” adalah…",
          "options": [
            "すし が すき です か",
            "なに を すし が すき です か",
            "どうして すし が すき です か",
            "すし は いくら です か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “どうして すし が すき です か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “すし が すき です か” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “どうして すし が すき です か”.",
            "Salah. “なに を すし が すき です か” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “どうして すし が すき です か”.",
            "Benar. “どうして すし が すき です か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “すし は いくら です か” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “どうして すし が すき です か”."
          ]
        },
        {
          "id": "q13",
          "type": "multiple-choice",
          "question": "Jawaban “Karena enak” adalah…",
          "options": [
            "おいしい が です",
            "おいしい も です",
            "おいしい から です",
            "おいしい で です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “おいしい から です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “おいしい が です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “おいしい から です”.",
            "Salah. “おいしい も です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “おいしい から です”.",
            "Benar. “おいしい から です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “おいしい で です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “おいしい から です”."
          ]
        },
        {
          "id": "q14",
          "type": "multiple-choice",
          "question": "Kara digunakan untuk…",
          "options": [
            "Menyatakan harga",
            "Menyatakan kepemilikan",
            "Memberi alasan",
            "Menunjukkan objek langsung"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Memberi alasan”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “Menyatakan harga” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “Memberi alasan”.",
            "Salah. “Menyatakan kepemilikan” tidak tepat. どうして menanyakan alasan, dan から digunakan untuk memberi alasan. Jawaban yang benar adalah “Memberi alasan”.",
            "Benar. “Memberi alasan” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Menunjukkan objek langsung” tidak tepat. どうして menanyakan alasan, dan から digunakan untuk memberi alasan. Jawaban yang benar adalah “Memberi alasan”."
          ]
        },
        {
          "id": "q15",
          "type": "multiple-choice",
          "question": "“Saya suka olahraga karena menyenangkan” yang tepat adalah…",
          "options": [
            "わたし は すぽおつ を すき です. たのしい から です",
            "わたし は すぽおつ が すき です. たのしい から です",
            "わたし は すぽおつ で すき です. たのしい です",
            "わたし は すぽおつ に すき です. たのしい から"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “わたし は すぽおつ が すき です. たのしい から です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “わたし は すぽおつ を すき です. たのしい から です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は すぽおつ が すき です. たのしい から です”.",
            "Benar. “わたし は すぽおつ が すき です. たのしい から です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし は すぽおつ で すき です. たのしい です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は すぽおつ が すき です. たのしい から です”.",
            "Salah. “わたし は すぽおつ に すき です. たのしい から” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “わたし は すぽおつ が すき です. たのしい から です”."
          ]
        },
        {
          "id": "q16",
          "type": "multiple-choice",
          "question": "Pasangan kata dan arti yang benar adalah…",
          "options": [
            "すき = kurang pandai",
            "きらい = pandai",
            "じょうず = pandai / mahir",
            "わかる = memberi alasan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “じょうず = pandai / mahir”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “すき = kurang pandai” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “じょうず = pandai / mahir”.",
            "Salah. “きらい = pandai” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “じょうず = pandai / mahir”.",
            "Benar. “じょうず = pandai / mahir” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わかる = memberi alasan” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “じょうず = pandai / mahir”."
          ]
        },
        {
          "id": "q17",
          "type": "multiple-choice",
          "question": "“Watashi wa Nihongo ga heta desu” artinya…",
          "options": [
            "Saya suka bahasa Jepang",
            "Saya pandai bahasa Jepang",
            "Saya kurang pandai bahasa Jepang",
            "Saya mengerti bahasa Jepang"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Saya kurang pandai bahasa Jepang”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “Saya suka bahasa Jepang” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “Saya kurang pandai bahasa Jepang”.",
            "Salah. “Saya pandai bahasa Jepang” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “Saya kurang pandai bahasa Jepang”.",
            "Benar. “Saya kurang pandai bahasa Jepang” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Saya mengerti bahasa Jepang” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “Saya kurang pandai bahasa Jepang”."
          ]
        },
        {
          "id": "q18",
          "type": "multiple-choice",
          "question": "Kalimat yang salah karena partikel tidak tepat adalah…",
          "options": [
            "すし が すき です",
            "にほんご が じょうず です",
            "てにす が へた です",
            "すぽおつ を すき です"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “すぽおつ を すき です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “すし が すき です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “すぽおつ を すき です”.",
            "Salah. “にほんご が じょうず です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “すぽおつ を すき です”.",
            "Salah. “てにす が へた です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “すぽおつ を すき です”.",
            "Benar. “すぽおつ を すき です” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q19",
          "type": "multiple-choice",
          "question": "A: Doushite supootsu ga suki desu ka? Jawaban paling logis adalah…",
          "options": [
            "すぽおつ が すき です か",
            "すぽおつ を たべます",
            "たのしい から です",
            "すぽおつ は どこ です か"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “たのしい から です”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “すぽおつ が すき です か” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “たのしい から です”.",
            "Salah. “すぽおつ を たべます” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “たのしい から です”.",
            "Benar. “たのしい から です” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “すぽおつ は どこ です か” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “たのしい から です”."
          ]
        },
        {
          "id": "q20",
          "type": "multiple-choice",
          "question": "Kalimat yang menunjukkan kemampuan memahami, bukan melakukan aktivitas adalah…",
          "options": [
            "すし を つくる こと が できます",
            "てにす が じょうず です",
            "この かんじ は わかります",
            "すぽおつ が すき です"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “この かんじ は わかります”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan.",
          "optionExplanations": [
            "Salah. “すし を つくる こと が できます” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “この かんじ は わかります”.",
            "Salah. “てにす が じょうず です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “この かんじ は わかります”.",
            "Benar. “この かんじ は わかります” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “すぽおつ が すき です” tidak tepat. Pola すき/きらい/じょうず/へた menggunakan partikel が untuk hal yang disukai atau kemampuan yang dinilai. Jawaban yang benar adalah “この かんじ は わかります”."
          ]
        },
        {
          "id": "q21",
          "type": "essay",
          "question": "A: Nihongo ga jouzu desu ka?\nB: Iie, Nihongo ga __________ desu.",
          "acceptedAnswers": [
            "heta",
            "へた",
            "下手"
          ],
          "explanation": "Jawaban yang diharapkan adalah “へた”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan."
        },
        {
          "id": "q22",
          "type": "essay",
          "question": "A: Kono kanji wa __________ ka?\nB: Hai, wakarimasu.",
          "acceptedAnswers": [
            "wakarimasu",
            "わかります",
            "分かります"
          ],
          "explanation": "Jawaban yang diharapkan adalah “わかります”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan."
        },
        {
          "id": "q23",
          "type": "essay",
          "question": "A: Watashi wa supootsu ga suki desu.\nB: Doushite desu ka?\nA: __________ kara desu.",
          "acceptedAnswers": [
            "tanoshii",
            "たのしい",
            "楽しい"
          ],
          "explanation": "Jawaban yang diharapkan adalah “たのしい”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan."
        },
        {
          "id": "q24",
          "type": "essay",
          "question": "A: Mira-san wa tenisu ga jouzu desu ka?\nB: Iie, Mira-san wa tenisu ga __________ desu.",
          "acceptedAnswers": [
            "heta",
            "へた",
            "下手"
          ],
          "explanation": "Jawaban yang diharapkan adalah “へた”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan."
        },
        {
          "id": "q25",
          "type": "essay",
          "question": "A: Sushi o tsukuru koto ga __________ ka?\nB: Hai, dekimasu.",
          "acceptedAnswers": [
            "dekimasu",
            "できます"
          ],
          "explanation": "Jawaban yang diharapkan adalah “できます”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang すき/きらい, じょうず/へた, できる/わかる, どうして, dan から untuk alasan."
        }
      ],
      "media": {
        "image": "assets/images/lesson-3-3.svg",
        "imageAlt": "Ilustrasi menyatakan preferensi dan kemampuan",
        "title": "Contoh pengucapan preferensi",
        "audioText": "私は寿司が好きです。",
        "audioRomaji": "Watashi wa sushi ga suki desu.",
        "audioTranslation": "Saya suka sushi.",
        "audioLang": "ja-JP"
      }
    },
    "4-1": {
      "id": "4-1",
      "title": "Keberadaan di Rumah dan Kehidupan Sehari-hari",
      "titleJP": "存在・家・日常生活",
      "chapterTitle": "Bab 4: Keberadaan dan Kehidupan Sehari-hari",
      "duration": "~24 menit",
      "introduction": "Ini adalah bab terakhir! Fokus utama bab ini adalah menggabungkan semua yang sudah dipelajari untuk bisa menggambarkan keberadaan benda/orang di suatu tempat, menghitung barang di rumah, serta bercerita tentang kehidupan sehari-hari di kota atau rumah. Kita akan belajar pola “ada” (arimasu/imasu) yang sangat sering dipakai dalam percakapan nyata.",
      "sections": [
        {
          "type": "timeline-card",
          "color": "#7c6df7",
          "colorName": "auto",
          "number": "1",
          "title": "Arimasu (あります) & Imasu (います) – “Ada”",
          "body": "<p class=\"material-paragraph\">Arimasu (あります) &amp; Imasu (います) – “Ada”</p><p class=\"material-paragraph\">Arimasu → untuk benda mati / tidak bernyawa</p><p class=\"material-paragraph\">Imasu → untuk manusia / hewan / makhluk hidup</p><p class=\"material-paragraph\">Struktur Kalimat Dasar:</p><p class=\"material-paragraph\">[Tempat] に [Benda/Orang] が あります / います。</p><p class=\"material-paragraph\">Contoh Penerapan:</p><p class=\"material-paragraph\">Kyoushitsu ni tsukue ga arimasu. (教室 に 机 が あります。) → Di ruang kelas ada meja.</p><p class=\"material-paragraph\">Kouen ni kodomo ga imasu. (公園 に 子供 が います。) → Di taman ada anak-anak.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#60a5fa",
          "colorName": "auto",
          "number": "2",
          "title": "Pola Lokasi yang Lengkap",
          "body": "<p class=\"material-paragraph\">Pola Lokasi yang Lengkap [Tempat] に [Benda/Orang] が あります / います。 atau [Benda/Orang] は [Tempat] に あります / います。</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Hon wa tsukue no ue ni arimasu.</p><p class=\"material-paragraph\">(本 は 机 の 上 に あります。)</p><p class=\"material-paragraph\">→ Buku ada di atas meja.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#34d399",
          "colorName": "auto",
          "number": "3",
          "title": "Bilangan Sederhana (Hitotsu, Futatsu, dll)",
          "body": "<p class=\"material-paragraph\">Bilangan Sederhana (Hitotsu, Futatsu, dll) Untuk menghitung benda atau orang secara sederhana (cocok untuk pemula).</p><p class=\"material-paragraph\">Tabel Bilangan Dasar</p><p class=\"material-paragraph\">1 → Hitotsu (一つ)</p><p class=\"material-paragraph\">2 → Futatsu (二つ)</p><p class=\"material-paragraph\">3 → Mittsu (三つ)</p><p class=\"material-paragraph\">4 → Yottsu (四つ)</p><p class=\"material-paragraph\">5 → Itsutsu (五つ)</p><p class=\"material-paragraph\">(notes nti ada muncul sendiri perlahan sesuai angka yang dimasukin di web, jadi ada audio yang memperagakan )</p><p class=\"material-paragraph\">Contoh:</p><p class=\"material-paragraph\">Tsukue no ue ni hon ga futatsu arimasu.</p><p class=\"material-paragraph\">(机 の 上 に 本 が 二つ あります。)</p><p class=\"material-paragraph\">→ Di atas meja ada dua buku.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#f59e0b",
          "colorName": "auto",
          "number": "4",
          "title": "Kehidupan Sehari-hari di Rumah & Kota",
          "body": "<p class=\"material-paragraph\">Kehidupan Sehari-hari di Rumah &amp; Kota Kita bisa gabungkan dengan kata kerja dari bab sebelumnya.</p><p class=\"material-paragraph\">Contoh Percakapan:</p><p class=\"material-paragraph\">A: Ie ni nani ga arimasu ka?</p><p class=\"material-paragraph\">(家 に 何 が あります か？)</p><p class=\"material-paragraph\">→ Ada apa di rumah?</p><p class=\"material-paragraph\">B: Ie ni terebi to sofa ga arimasu. Watashi no heya ni hon ga takusan arimasu.</p><p class=\"material-paragraph\">(家 に テレビ と ソファ が あります。 私 の 部屋 に 本 が たくさん あります。)</p><p class=\"material-paragraph\">→ Di rumah ada TV dan sofa. Di kamar saya ada banyak buku.</p>"
        },
        {
          "type": "timeline-card",
          "color": "#fb7185",
          "colorName": "auto",
          "number": "5",
          "title": "Daftar Kosakata Baru",
          "body": "<p class=\"material-paragraph\">Daftar Kosakata Baru</p><div class=\"material-table-wrap\"><table class=\"material-table\"><tr><th>Kosakata</th><th>Makna</th><th>Penjelasan &amp; Konteks Penggunaan</th></tr><tr><td>Arimasu (あります)</td><td>Ada (benda mati)</td><td>Untuk barang, tempat</td></tr><tr><td>Imasu (います)</td><td>Ada (makhluk hidup)</td><td>Untuk orang, hewan</td></tr><tr><td>Ni (に)</td><td>Di / pada (lokasi)</td><td>Penanda tempat</td></tr><tr><td>Ue (上)</td><td>Di atas</td><td>Posisi</td></tr><tr><td>Shita (下)</td><td>Di bawah</td><td>Posisi</td></tr><tr><td>Naka (中)</td><td>Di dalam</td><td>Posisi</td></tr><tr><td>Ie (家)</td><td>Rumah</td><td>Tempat tinggal</td></tr><tr><td>Heya (部屋)</td><td>Kamar</td><td>Ruangan di rumah</td></tr><tr><td>Kouen (公園)</td><td>Taman</td><td>Tempat umum</td></tr><tr><td>Tsukue (机)</td><td>Meja</td><td>Perabot rumah</td></tr><tr><td>Hitotsu (一つ)</td><td>Satu buah</td><td>Bilangan benda</td></tr><tr><td>Futatsu (二つ)</td><td>Dua buah</td><td>Bilangan benda</td></tr><tr><td>Takusan (たくさん)</td><td>Banyak</td><td>Jumlah banyak</td></tr></table></div>"
        }
      ],
      "quiz": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "Seorang siswa ingin mengatakan “Di ruang kelas ada meja.”",
          "options": [
            "きょうしつ に つくえ が います",
            "きょうしつ に つくえ が あります",
            "きょうしつ は つくえ です",
            "つくえ に きょうしつ が あります"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “きょうしつ に つくえ が あります”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “きょうしつ に つくえ が います” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “きょうしつ に つくえ が あります”.",
            "Benar. “きょうしつ に つくえ が あります” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “きょうしつ は つくえ です” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “きょうしつ に つくえ が あります”.",
            "Salah. “つくえ に きょうしつ が あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “きょうしつ に つくえ が あります”."
          ]
        },
        {
          "id": "q2",
          "type": "multiple-choice",
          "question": "Arimasu digunakan untuk keberadaan…",
          "options": [
            "Manusia",
            "Hewan",
            "Benda mati / tidak bernyawa",
            "Orang dan hewan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Benda mati / tidak bernyawa”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “Manusia” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Benda mati / tidak bernyawa”.",
            "Salah. “Hewan” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Benda mati / tidak bernyawa”.",
            "Benar. “Benda mati / tidak bernyawa” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Orang dan hewan” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Benda mati / tidak bernyawa”."
          ]
        },
        {
          "id": "q3",
          "type": "multiple-choice",
          "question": "Imasu digunakan untuk…",
          "options": [
            "Benda mati",
            "Tempat umum",
            "Manusia atau hewan",
            "Harga barang"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Manusia atau hewan”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “Benda mati” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Manusia atau hewan”.",
            "Salah. “Tempat umum” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Manusia atau hewan”.",
            "Benar. “Manusia atau hewan” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Harga barang” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Manusia atau hewan”."
          ]
        },
        {
          "id": "q4",
          "type": "multiple-choice",
          "question": "“Di taman ada anak-anak” yang benar adalah…",
          "options": [
            "こうえん に こども が あります",
            "こうえん に こども が います",
            "こども に こうえん が います",
            "こうえん は こども です"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “こうえん に こども が います”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “こうえん に こども が あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “こうえん に こども が います”.",
            "Benar. “こうえん に こども が います” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “こども に こうえん が います” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “こうえん に こども が います”.",
            "Salah. “こうえん は こども です” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “こうえん に こども が います”."
          ]
        },
        {
          "id": "q5",
          "type": "multiple-choice",
          "question": "Dalam pola [Tempat] ni [Benda/Orang] ga..., ni menunjukkan…",
          "options": [
            "Objek langsung",
            "Kepemilikan",
            "Lokasi keberadaan",
            "Alat yang digunakan"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Lokasi keberadaan”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “Objek langsung” tidak tepat. Pilihan ini tidak sesuai dengan pola keberadaan atau lokasi pada Bab 10. Jawaban yang benar adalah “Lokasi keberadaan”.",
            "Salah. “Kepemilikan” tidak tepat. Pilihan ini tidak sesuai dengan pola keberadaan atau lokasi pada Bab 10. Jawaban yang benar adalah “Lokasi keberadaan”.",
            "Benar. “Lokasi keberadaan” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Alat yang digunakan” tidak tepat. Kata posisi harus sesuai dengan letak benda, misalnya うえ untuk di atas dan した untuk di bawah. Jawaban yang benar adalah “Lokasi keberadaan”."
          ]
        },
        {
          "id": "q6",
          "type": "multiple-choice",
          "question": "“Buku ada di atas meja” yang tepat adalah…",
          "options": [
            "ほん は つくえ の うえ です",
            "つくえ は ほん の うえ に あります",
            "ほん は つくえ の うえ に あります",
            "ほん に つくえ の うえ が あります"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “ほん は つくえ の うえ に あります”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “ほん は つくえ の うえ です” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “ほん は つくえ の うえ に あります”.",
            "Salah. “つくえ は ほん の うえ に あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “ほん は つくえ の うえ に あります”.",
            "Benar. “ほん は つくえ の うえ に あります” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “ほん に つくえ の うえ が あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “ほん は つくえ の うえ に あります”."
          ]
        },
        {
          "id": "q7",
          "type": "multiple-choice",
          "question": "Ue berarti…",
          "options": [
            "Di bawah",
            "Di dalam",
            "Di atas",
            "Di luar"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Di atas”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “Di bawah” tidak tepat. Kata posisi harus sesuai dengan letak benda, misalnya うえ untuk di atas dan した untuk di bawah. Jawaban yang benar adalah “Di atas”.",
            "Salah. “Di dalam” tidak tepat. Kata posisi harus sesuai dengan letak benda, misalnya うえ untuk di atas dan した untuk di bawah. Jawaban yang benar adalah “Di atas”.",
            "Benar. “Di atas” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Di luar” tidak tepat. Kata posisi harus sesuai dengan letak benda, misalnya うえ untuk di atas dan した untuk di bawah. Jawaban yang benar adalah “Di atas”."
          ]
        },
        {
          "id": "q8",
          "type": "multiple-choice",
          "question": "“Di kamar ada televisi” yang tepat adalah…",
          "options": [
            "へや に てれび が います",
            "へや に てれび が あります",
            "てれび に へや が あります",
            "へや は てれび います"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “へや に てれび が あります”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “へや に てれび が います” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “へや に てれび が あります”.",
            "Benar. “へや に てれび が あります” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “てれび に へや が あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “へや に てれび が あります”.",
            "Salah. “へや は てれび います” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “へや に てれび が あります”."
          ]
        },
        {
          "id": "q9",
          "type": "multiple-choice",
          "question": "Penggunaan kata kerja yang salah adalah…",
          "options": [
            "つくえ が あります",
            "ほん が あります",
            "こども が います",
            "てれび が います"
          ],
          "correct": 3,
          "explanation": "Jawaban yang benar adalah “てれび が います”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “つくえ が あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “てれび が います”.",
            "Salah. “ほん が あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “てれび が います”.",
            "Salah. “こども が います” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “てれび が います”.",
            "Benar. “てれび が います” paling sesuai dengan konteks soal dan pola yang dipelajari."
          ]
        },
        {
          "id": "q10",
          "type": "multiple-choice",
          "question": "“Di atas meja ada dua buku” yang benar adalah…",
          "options": [
            "つくえ の うえ に ほん が に あります",
            "つくえ の うえ に ふたつ ほん が あります",
            "つくえ の うえ に ほん が ふたつ あります",
            "ほん の うえ に つくえ が ふたつ あります"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “つくえ の うえ に ほん が ふたつ あります”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “つくえ の うえ に ほん が に あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “つくえ の うえ に ほん が ふたつ あります”.",
            "Salah. “つくえ の うえ に ふたつ ほん が あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “つくえ の うえ に ほん が ふたつ あります”.",
            "Benar. “つくえ の うえ に ほん が ふたつ あります” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “ほん の うえ に つくえ が ふたつ あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “つくえ の うえ に ほん が ふたつ あります”."
          ]
        },
        {
          "id": "q11",
          "type": "multiple-choice",
          "question": "Futatsu berarti…",
          "options": [
            "Satu buah",
            "Dua buah",
            "Tiga buah",
            "Lima buah"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “Dua buah”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “Satu buah” tidak tepat. Bilangan sederhana ditempatkan setelah benda yang dihitung, seperti ほん が ふたつ あります. Jawaban yang benar adalah “Dua buah”.",
            "Benar. “Dua buah” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Tiga buah” tidak tepat. Bilangan sederhana ditempatkan setelah benda yang dihitung, seperti ほん が ふたつ あります. Jawaban yang benar adalah “Dua buah”.",
            "Salah. “Lima buah” tidak tepat. Bilangan sederhana ditempatkan setelah benda yang dihitung, seperti ほん が ふたつ あります. Jawaban yang benar adalah “Dua buah”."
          ]
        },
        {
          "id": "q12",
          "type": "multiple-choice",
          "question": "Jika benda berjumlah tiga, kata bilangan yang tepat adalah…",
          "options": [
            "ひとつ",
            "ふたつ",
            "みっつ",
            "いつつ"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “みっつ”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “ひとつ” tidak tepat. Bilangan sederhana ditempatkan setelah benda yang dihitung, seperti ほん が ふたつ あります. Jawaban yang benar adalah “みっつ”.",
            "Salah. “ふたつ” tidak tepat. Bilangan sederhana ditempatkan setelah benda yang dihitung, seperti ほん が ふたつ あります. Jawaban yang benar adalah “みっつ”.",
            "Benar. “みっつ” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “いつつ” tidak tepat. Pilihan ini tidak sesuai dengan pola keberadaan atau lokasi pada Bab 10. Jawaban yang benar adalah “みっつ”."
          ]
        },
        {
          "id": "q13",
          "type": "multiple-choice",
          "question": "Kalimat untuk bertanya “Ada apa di rumah?” adalah…",
          "options": [
            "いえ に なに が あります か",
            "いえ に だれ が あります か",
            "いえ は どこ です か",
            "いえ に なに を あります か"
          ],
          "correct": 0,
          "explanation": "Jawaban yang benar adalah “いえ に なに が あります か”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Benar. “いえ に なに が あります か” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “いえ に だれ が あります か” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “いえ に なに が あります か”.",
            "Salah. “いえ は どこ です か” tidak tepat. Pilihan ini tidak sesuai dengan pola keberadaan atau lokasi pada Bab 10. Jawaban yang benar adalah “いえ に なに が あります か”.",
            "Salah. “いえ に なに を あります か” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “いえ に なに が あります か”."
          ]
        },
        {
          "id": "q14",
          "type": "multiple-choice",
          "question": "“Ie ni terebi to sofa ga arimasu” artinya…",
          "options": [
            "Di rumah ada anak-anak dan そふぁ",
            "Di rumah ada TV dan そふぁ",
            "Di rumah ada meja dan buku",
            "Di rumah ada taman dan TV"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “Di rumah ada TV dan そふぁ”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “Di rumah ada anak-anak dan そふぁ” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Di rumah ada TV dan そふぁ”.",
            "Benar. “Di rumah ada TV dan そふぁ” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Di rumah ada meja dan buku” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Di rumah ada TV dan そふぁ”.",
            "Salah. “Di rumah ada taman dan TV” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Di rumah ada TV dan そふぁ”."
          ]
        },
        {
          "id": "q15",
          "type": "multiple-choice",
          "question": "Kalimat dengan pola keberadaan benda yang benar adalah…",
          "options": [
            "わたし は ほん を あります",
            "ほん が つくえ に よみます",
            "へや に ほん が あります",
            "ほん は へや を あります"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “へや に ほん が あります”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “わたし は ほん を あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “へや に ほん が あります”.",
            "Salah. “ほん が つくえ に よみます” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “へや に ほん が あります”.",
            "Benar. “へや に ほん が あります” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “ほん は へや を あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “へや に ほん が あります”."
          ]
        },
        {
          "id": "q16",
          "type": "multiple-choice",
          "question": "“Di kamar saya ada banyak buku” yang tepat adalah…",
          "options": [
            "わたし の へや に ほん が います",
            "わたし の へや に たくさん ほん です",
            "わたし の へや に ほん が たくさん あります",
            "わたし の へや は ほん を たくさん あります"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “わたし の へや に ほん が たくさん あります”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “わたし の へや に ほん が います” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “わたし の へや に ほん が たくさん あります”.",
            "Salah. “わたし の へや に たくさん ほん です” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “わたし の へや に ほん が たくさん あります”.",
            "Benar. “わたし の へや に ほん が たくさん あります” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “わたし の へや は ほん を たくさん あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “わたし の へや に ほん が たくさん あります”."
          ]
        },
        {
          "id": "q17",
          "type": "multiple-choice",
          "question": "Naka berarti…",
          "options": [
            "Di atas",
            "Di bawah",
            "Di dalam",
            "Di samping"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Di dalam”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “Di atas” tidak tepat. Kata posisi harus sesuai dengan letak benda, misalnya うえ untuk di atas dan した untuk di bawah. Jawaban yang benar adalah “Di dalam”.",
            "Salah. “Di bawah” tidak tepat. Kata posisi harus sesuai dengan letak benda, misalnya うえ untuk di atas dan した untuk di bawah. Jawaban yang benar adalah “Di dalam”.",
            "Benar. “Di dalam” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Di samping” tidak tepat. Kata posisi harus sesuai dengan letak benda, misalnya うえ untuk di atas dan した untuk di bawah. Jawaban yang benar adalah “Di dalam”."
          ]
        },
        {
          "id": "q18",
          "type": "multiple-choice",
          "question": "“Di bawah meja ada kunci” yang tepat adalah…",
          "options": [
            "つくえ の うえ に かぎ が あります",
            "つくえ の した に かぎ が あります",
            "つくえ の なか に かぎ が います",
            "かぎ の した に つくえ が あります"
          ],
          "correct": 1,
          "explanation": "Jawaban yang benar adalah “つくえ の した に かぎ が あります”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “つくえ の うえ に かぎ が あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “つくえ の した に かぎ が あります”.",
            "Benar. “つくえ の した に かぎ が あります” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “つくえ の なか に かぎ が います” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “つくえ の した に かぎ が あります”.",
            "Salah. “かぎ の した に つくえ が あります” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “つくえ の した に かぎ が あります”."
          ]
        },
        {
          "id": "q19",
          "type": "multiple-choice",
          "question": "Pasangan kata dan arti yang benar adalah…",
          "options": [
            "あります = ada untuk orang",
            "います = ada untuk benda mati",
            "へや = kamar",
            "こうえん = kantor"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “へや = kamar”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “あります = ada untuk orang” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “へや = kamar”.",
            "Salah. “います = ada untuk benda mati” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “へや = kamar”.",
            "Benar. “へや = kamar” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “こうえん = kantor” tidak tepat. Kata posisi harus sesuai dengan letak benda, misalnya うえ untuk di atas dan した untuk di bawah. Jawaban yang benar adalah “へや = kamar”."
          ]
        },
        {
          "id": "q20",
          "type": "multiple-choice",
          "question": "Dalam “Kouen ni kodomo ga imasu”, alasan memakai imasu adalah…",
          "options": [
            "Karena こうえん adalah tempat umum",
            "Karena こども adalah benda mati",
            "Karena こども adalah manusia / makhluk hidup",
            "Karena kalimat tanya"
          ],
          "correct": 2,
          "explanation": "Jawaban yang benar adalah “Karena こども adalah manusia / makhluk hidup”. Pilihan ini tepat karena sesuai dengan konteks soal dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana.",
          "optionExplanations": [
            "Salah. “Karena こうえん adalah tempat umum” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Karena こども adalah manusia / makhluk hidup”.",
            "Salah. “Karena こども adalah benda mati” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Karena こども adalah manusia / makhluk hidup”.",
            "Benar. “Karena こども adalah manusia / makhluk hidup” paling sesuai dengan konteks soal dan pola yang dipelajari.",
            "Salah. “Karena kalimat tanya” tidak tepat. あります digunakan untuk benda mati, sedangkan います digunakan untuk manusia atau hewan. Jawaban yang benar adalah “Karena こども adalah manusia / makhluk hidup”."
          ]
        },
        {
          "id": "q21",
          "type": "essay",
          "question": "A: Kyoushitsu ni nani ga arimasu ka?\nB: Tsukue ga __________.",
          "acceptedAnswers": [
            "arimasu",
            "あります"
          ],
          "explanation": "Jawaban yang diharapkan adalah “あります”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana."
        },
        {
          "id": "q22",
          "type": "essay",
          "question": "A: Kouen ni kodomo ga arimasu ka?\nB: Iie, kodomo ga __________.",
          "acceptedAnswers": [
            "imasu",
            "います"
          ],
          "explanation": "Jawaban yang diharapkan adalah “います”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana."
        },
        {
          "id": "q23",
          "type": "essay",
          "question": "A: Hon wa doko ni arimasu ka?\nB: Tsukue no __________ ni arimasu.",
          "acceptedAnswers": [
            "ue",
            "うえ",
            "上"
          ],
          "explanation": "Jawaban yang diharapkan adalah “うえ”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana."
        },
        {
          "id": "q24",
          "type": "essay",
          "question": "A: Tsukue no ue ni hon ga ikutsu arimasu ka?\nB: Hon ga __________ arimasu.",
          "acceptedAnswers": [
            "futatsu",
            "ふたつ",
            "二つ"
          ],
          "explanation": "Jawaban yang diharapkan adalah “ふたつ”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana."
        },
        {
          "id": "q25",
          "type": "essay",
          "question": "A: Ie ni nani ga arimasu ka?\nB: Ie ni terebi ___ sofa ga arimasu.",
          "acceptedAnswers": [
            "to",
            "と"
          ],
          "explanation": "Jawaban yang diharapkan adalah “と”. Isian tersebut tepat karena melengkapi percakapan sesuai konteks dan materi tentang あります/います, partikel に untuk lokasi, posisi うえ/した/なか, dan bilangan sederhana."
        }
      ],
      "media": {
        "image": "assets/images/lesson-4-1.svg",
        "imageAlt": "Ilustrasi keberadaan benda di ruang kelas",
        "title": "Contoh pengucapan keberadaan benda",
        "audioText": "教室に机があります。",
        "audioRomaji": "Kyoushitsu ni tsukue ga arimasu.",
        "audioTranslation": "Di ruang kelas ada meja.",
        "audioLang": "ja-JP"
      }
    }
  }
};
