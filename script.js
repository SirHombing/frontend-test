const data={promo:[
["room-1.jpg","Campur","Kost Habiebie Piloso Tipe A","Tembok sari","4.0","2 km","Rp1.472.500","78rb","Rp1.550.000"],
["room-2.jpg","Putra","Kost Griya Aspen Dago Pakar Tipe B","Cimenyan","—","3 km","Rp1.754.000","17rb","Rp1.925.000"],
["room-3.jpg","Putra","Kost Griya Aspen Dago Pakar Tipe A","Cimenyan","—","3 km","Rp2.209.000","216rb","Rp2.425.000"],
["room-4.jpg","Putra","Kost Luna Urban Stay Tipe A","Mergangsan","4.9","1 km","Rp1.383.000","42rb","Rp1.425.000"]],
recommend:[
["room-1.jpg","Campur","Kost Hayam Wuruk Suites Co Living Tipe Premium","Kecamatan Taman Sari","5.0","2 km","Rp3.050.000","",""],
["room-2.jpg","Putri","Kost Kanganroom Premium","Kecamatan Grogol petamburan","—","2 km","Rp4.000.000","",""],
["room-3.jpg","Campur","Kost 3ranches Home SCBD Tipe A","Kebayoran Baru","4.1","3 km","Rp3.600.000","",""],
["room-4.jpg","Campur","Kost Omnia","Kecamatan Taman Sari","—","1 km","Rp2.500.000","",""]],
all:[
["room-1.jpg","Campur","Kost Pelopor Living","Denpasar Utara","—","1 km","Rp2.700.000","",""],
["room-2.jpg","Campur","Kost 3A Tipe A","Kebayoran Baru","—","2 km","Rp3.500.000","",""],
["room-3.jpg","Putri","Kost La Casa De Bonita Tipe Vip","Cikaret, Jakarta","—","3 km","Rp1.250.000","",""],
["room-4.jpg","Putri","Kost Classy Tipe D1","Tenggilis Mejoyo","5.0","2 km","Rp2.750.000","",""]]};

function card(d){let[i,b,t,a,r,dist,p,disc,old]=d;return `<article class="room-card"><div class="room-image"><img src="assets/${i}" alt="${t}"></div><div class="room-meta"><span class="badge">${b}</span>${r!=="—"?`<span class="stars">★ ${r}</span>`:""}<span class="distance">Sisa ${dist}</span></div><h3>${t}<br>${a}</h3><p>K. Mandi Dalam · WiFi · AC · Kloset Duduk · Kasur</p>${disc?`<div class="discount">⚡ Diskon ${disc} <span class="old">${old}</span></div>`:`<div class="discount">&nbsp;</div>`}<div class="price">${p}<span style="font-size:12px;font-weight:400">/bulan</span></div></article>`}
function render(id,arr){document.getElementById(id).innerHTML=arr.map(card).join("")}
render("promoCards",data.promo);render("recommendCards",data.recommend);render("allPromoCards",data.all);

document.getElementById("searchForm").addEventListener("submit",e=>{e.preventDefault();let q=document.getElementById("searchInput").value.trim();document.getElementById("searchResult").textContent=q?`Menampilkan rekomendasi kos untuk “${q}”`:"Masukkan lokasi untuk mulai mencari kos."});
document.getElementById("featureToggle").addEventListener("click",()=>document.getElementById("featureList").classList.toggle("open"));
document.querySelectorAll(".arrows").forEach(g=>g.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"){let c=g.parentElement.nextElementSibling;c.animate([{transform:"translateX(0)"},{transform:`translateX(${e.target.textContent==="›"?-22:22}px)`},{transform:"translateX(0)"}],{duration:300})}}));
document.querySelectorAll(".green-filter").forEach(btn=>btn.addEventListener("click",()=>{let j=btn.textContent.includes("Jakarta");btn.innerHTML=j?"Semua Kota <span>▼</span>":"Jakarta <span>▼</span>"}));
document.querySelectorAll(".outline-btn").forEach(btn=>btn.addEventListener("click",()=>alert("Demo clone — halaman daftar lengkap belum dihubungkan.")));
