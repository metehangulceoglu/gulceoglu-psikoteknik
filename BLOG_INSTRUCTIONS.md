# Blog Yazısı Ekleme Talimatları

Bana bir MDX içeriği gönderildiğinde otomatik olarak şunu yap:

1. `content/blog/` klasörüne yeni `.mdx` dosyası oluştur
   - ⚠️ Doğru konum: `content/blog/` (proje kökü)
   - ❌ Yanlış konum: `src/content/blog/` (bu klasör sisteme dahil değildir)

2. Dosya adı: `title`'dan slug üret (Türkçe karakterleri dönüştür, boşlukları tire yap)

3. Frontmatter şablonu — tüm alanlar zorunludur:
```
---
title: ""
description: ""
date: "BUGÜNÜN TARİHİ"
lastModified: "BUGÜNÜN TARİHİ"
author: "Psk. Metehan Gülceoğlu"
mevzuatRef: ""
tags: []
---
```
   - ⚠️ `lastModified` zorunludur — eksik olursa `npm run build` hata verir
   - `date` ve `lastModified` formatı: `"YYYY-MM-DD"`

4. `npm run build` çalıştır

5. `git add .` → `git commit -m "Yeni icerik guncellendi"` → `git push` çalıştır
   (veya `Yayinla.bat` dosyasına çift tıkla)
