# Yanlış Defterim — GitHub Actions ile APK üretimi

Bu proje, Android Studio/PC olmadan GitHub'ın ücretsiz Actions derleme ortamında debug APK üretmek için hazırlanmıştır. GitHub hesabında Actions kullanım kotası ve depolama sınırları geçerlidir.

## Tablet/telefon üzerinden bir defalık kurulum

1. GitHub'da yeni, **Public** bir repository oluştur (ör. `yanlis-defterim`). Public repo seçmek, herkese açık kod deposunda GitHub Actions kullanımını ücretsiz tutmaya yardımcı olur. Uygulama kaynakları ve örnek kodlar herkes tarafından görülebilir; kişisel fotoğraflarını veya deneme kayıtlarını repoya koyma.
2. Bu ZIP'i cihazında bir klasöre çıkart.
3. Çıkartılan klasörün içindeki tüm dosya ve klasörleri (özellikle gizli `.github` klasörünü de) repository'nin ana dizinine yükle. `package.json` doğrudan repo ana dizininde görünmeli; `www` ve `scripts` klasörleri de aynı seviyede olmalı.
4. GitHub'da **Actions** sekmesine gir. `Build Yanlis Defterim APK` iş akışını seçip **Run workflow** düğmesine bas. İlk yüklemede `push` tetiklemesi de derlemeyi başlatabilir.
5. İş akışı tamamlanınca çalıştırma sayfasının altındaki **Artifacts** bölümünden `yanlis-defterim-debug-apk` dosyasını indir.
6. ZIP içinden `app-debug.apk` dosyasını çıkarıp Android'e kur. Android, tarayıcı dışından APK kurulum izni isteyebilir.

## Neler içeriyor?

- AMOLED arayüz ve denemeler arasında arama
- TYT/AYT seçimi ve belirtilen ders sıraları
- Aynı ders ekranında kamera önizlemesiyle art arda fotoğraf çekme
- Fotoğrafları inceleme, kaldırma, konu notu girme ve denemeye kaydetme
- Cihazda IndexedDB yerel kayıtları

## Sınırlar ve gizlilik

- Bu iş akışı imzalı mağaza sürümü değil, **debug APK** üretir. Kişisel dağıtım/test içindir.
- Fotoğraflar ve deneme kayıtları uygulamanın yerel veritabanında kalır. Uygulama verisini silmek veya uygulamayı kaldırmak kayıtları silebilir; yedek al.
- Kamera canlı önizlemesi Android WebView'in `getUserMedia` desteğine ve Android izin istemine bağlıdır. Gerçek cihazda test edilmelidir; bu derleme hattı tek başına cihaz testi yapmaz.
- APK'yı oluşturmak için API anahtarı gerekmez. AI özelliği yoktur.
- GitHub deposunu Public yaparsan kaynak kodun herkesçe görülebilir. Kullanıcı fotoğraflarını, kişisel verilerini veya API anahtarlarını GitHub'a yükleme.
