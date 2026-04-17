# Blog Yazısı Ekleme Talimatları

Bana bir MDX içeriği gönderildiğinde otomatik olarak şunu yap:

1. content/blog/ klasörüne yeni .mdx dosyası oluştur
2. Dosya adı: title'dan slug üret (Türkçe karakterleri dönüştür, boşlukları tire yap)
3. Frontmatter şablonu (eksik alanları akıllıca doldur):
---
title: ""
description: ""
date: "BUGÜNÜN TARİHİ"
lastModified: "BUGÜNÜN TARİHİ"
author: "Psk. Metehan Gülceoğlu"
mevzuatRef: ""
tags: []
---
4. npm run build çalıştır
5. netlify deploy --prod --dir=out çalıştır
