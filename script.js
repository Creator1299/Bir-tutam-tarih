const sorular = [
    { soru: "İstanbul hangi yıl fethedilmiştir?", cevap: "1453" },
    { soru: "Cumhuriyet kaç yılında ilan edildi?", cevap: "1923" },
    { soru: "Fransız İhtilali hangi yıl gerçekleşti?", cevap: "1789" },
    { soru: "Magna Carta hangi yıl imzalandı?", cevap: "1215" }
];

function soruyuGuncelle() {
    const simdi = new Date();
    
    // Pazar 20:00'yi referans alarak haftalık döngü oluşturma
    // Bu algoritma her Pazar 20:00'de index'i 1 artırır
    const msHafta = 7 * 24 * 60 * 60 * 1000;
    const referansNoktasi = new Date("2024-01-07T20:00:00").getTime(); // Geçmiş bir Pazar 20:00
    
    const gecenHaftaSayisi = Math.floor((simdi.getTime() - referansNoktasi) / msHafta);
    const soruIndex = gecenHaftaSayisi % sorular.length; // Liste biterse başa döner

    const aktifSoru = sorular[soruIndex];
    
    document.getElementById("soru-metni").innerText = aktifSoru.soru;
    document.getElementById("zaman-bilgisi").innerText = "Sıradaki soru gelecek Pazar 20:00'de!";
}

// Sayfa yüklendiğinde çalıştır
window.onload = soruyuGuncelle;