# Mamikos Homepage Clone

Clone homepage **Mamikos** berdasarkan screenshot referensi menggunakan **HTML, CSS, dan JavaScript vanilla**.

Project ini dibuat sebagai static website sehingga tidak membutuhkan framework atau backend.

## ✨ Fitur

- Homepage responsive untuk desktop, tablet, dan mobile
- Navbar dan top navigation
- Hero section dengan search lokasi
- Banner/promotional section
- Section survei kos
- Listing promo kos
- Listing rekomendasi kos
- Listing kos yang sedang promo
- Area kos terpopuler
- Daftar universitas populer
- Section informasi tentang Mamikos
- Footer lengkap
- Search form dengan feedback hasil pencarian
- Filter kota sederhana
- Tombol carousel dengan animasi
- Accordion "Fitur yang dapat dimanfaatkan di Mamikos"
- Tombol "Lihat semua" dengan demo interaction

## 🛠️ Teknologi

Project ini menggunakan:

- HTML5
- CSS3
- JavaScript Vanilla
- Google Fonts — Nunito Sans

Tidak menggunakan:

- React
- Vue
- Angular
- Bootstrap
- Tailwind CSS
- jQuery

## 📁 Struktur Project

```text
mamikos-clone/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── room-1.jpg
    ├── room-2.jpg
    ├── room-3.jpg
    ├── room-4.jpg
    ├── city-yogyakarta.jpg
    ├── city-jakarta.jpg
    ├── city-bandung.jpg
    ├── city-surabaya.jpg
    ├── city-malang.jpg
    ├── city-semarang.jpg
    ├── city-medan.jpg
    └── reference-*.png
```

## 🚀 Cara Menjalankan

### Opsi 1 — Buka langsung

Cukup buka file:

```text
index.html
```

di browser.

### Opsi 2 — Menggunakan local server

Jika sudah memiliki Python, jalankan:

```bash
python -m http.server 8000
```

Kemudian buka:

```text
http://localhost:8000
```

### Opsi 3 — VS Code

Jika menggunakan VS Code, bisa menggunakan extension **Live Server**.

Klik kanan:

```text
index.html
```

kemudian pilih:

```text
Open with Live Server
```

## 🎨 File Utama

### `index.html`

Berisi struktur seluruh halaman:

- Header
- Hero
- Promotional banners
- Property listings
- Popular cities
- Universities
- About section
- Footer

### `style.css`

Mengatur:

- Layout
- Typography
- Warna
- Card
- Button
- Responsive design
- Mobile layout
- Spacing
- Shadow
- Grid

### `script.js`

Berisi data dummy dan interaction untuk:

- Rendering property cards
- Search
- Filter kota
- Carousel animation
- Feature accordion
- Tombol "Lihat semua"

## 📱 Responsive Design

Layout menyesuaikan ukuran layar:

```text
Desktop
├── 4 property cards per row
├── 4 city cards per row
└── Full navigation

Tablet
├── 2 property cards per row
├── 2 city cards per row
└── Simplified navigation

Mobile
├── 1 property card per row
├── 1 city card per row
└── Mobile menu button
```

## 🔎 Search

Search pada homepage merupakan **demo frontend**.

Contoh:

```text
Jakarta
```

akan menampilkan pesan:

```text
Menampilkan rekomendasi kos untuk “Jakarta”
```

Belum terhubung ke database atau API Mamikos.

## 🏠 Data Kos

Data property pada project merupakan data dummy yang dibuat berdasarkan informasi visual dari screenshot.

Untuk mengganti data, edit bagian data di:

```text
script.js
```

Contoh:

```javascript
["room-1.jpg",
 "Campur",
 "Kost Habiebie Piloso Tipe A",
 "Tembok sari",
 "4.0",
 "2 km",
 "Rp1.472.500",
 "78rb",
 "Rp1.550.000"]
```

Format:

```text
[
  gambar,
  tipe,
  nama kos,
  lokasi,
  rating,
  jarak,
  harga,
  diskon,
  harga lama
]
```

## 🖼️ Assets

Gambar property dan kota di folder `assets/` berasal dari screenshot referensi yang diberikan untuk kebutuhan clone/demo.

Jika ingin menggunakan project untuk production, sebaiknya ganti asset tersebut dengan gambar yang memang memiliki hak penggunaan.

## ⚠️ Catatan

Project ini adalah **frontend clone/demo**, bukan implementasi resmi Mamikos.

Beberapa fitur seperti:

- Login
- Booking
- Pembayaran
- Chat
- Favorit
- Database kos
- API pencarian
- Akun pengguna

belum terhubung ke backend.

## 🔮 Pengembangan Selanjutnya

Project dapat dikembangkan menjadi aplikasi yang lebih lengkap dengan:

1. Backend API
2. Database property
3. Authentication/login
4. Real-time search
5. Google Maps
6. Detail halaman kos
7. Sistem booking
8. Payment gateway
9. User dashboard
10. Admin dashboard
11. API filtering berdasarkan harga/lokasi/fasilitas
12. Pagination atau infinite scroll

## 📄 License

Project ini dibuat untuk **pembelajaran dan demonstrasi frontend**.

© 2026 — Mamikos Homepage Clone
