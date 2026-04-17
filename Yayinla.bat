@echo off
echo [1/3] Degisiklikler kaydediliyor...
git add .
git commit -m "Yeni icerik guncellendi"
git push

echo [2/3] Vercel'e deploy ediliyor...
vercel --prod --yes

echo [3/3] Tamamlandi!
echo Siteniz canli: https://gulceoglu-psikoteknik.vercel.app
pause
