---
sidebar_position: 1
slug: /
---

# Wiki Hakkında

wiki.degzrobotics.com(dokümanlar) Degz Robotik Sanayi tarafından üretilen araçlar ve ürünler için herkesin hızlı bilgiye ve doğru şekilde ulaşmasını hedeflemektedir.

## Dokümanlara katkı sağlama

### Var olan sayfadaki içerikleri düzenleme

Her dokümanın altındaki `Bu sayfayı düzenle` butonuna basarak sayfanın bulunduğu github reposuna gidebilirsiniz.

### Bilgisayarınızdan nasıl düzenleyebilirsiniz (Tavsiye edilen)

#### Gerekli programların yüklenmesi

1. [VSCode](https://code.visualstudio.com/download) linkten indirip kurun.
2. [Git (versiyon takip yazılımı)](https://git-scm.com/) linkten indirip kurun.
3. [GitHub Desktop (versiyonları takip etmenize yarar.)](https://desktop.github.com/) indirip kurunuz.
4. Node.js kurulması
5. Yarn kurulması

#### Eklentilerin kurulması

VSCodeda eklenti kısımına gelip. Aşağıdaki eklentileri kurunuz.

* [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
* [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

#### Reponun kopyalanması

1. İlk olarak GitHub Desktop uygulamasını açın.
![Github Desktop Arayüzü](/img/dcsrsgthb01.png)
2. Kayıtlı olduğunuz repolardan `degzrobotics/wiki` reposunu arayıp tıklayın.
![Arama sonucu](/img/dcsrsgthb02.png)
3. Kurulacak dizini kontrol edip. Clone butonuna basınız.
![Dizin popup](/img/dcsrsgthb03.png)
4. Gelen arayüzde projede değişiklik olduğunda güncelleme olup olmadığını gösterir.
![Github Desktop Repo Arayüzü](/img/dcsrsgthb04.png)
5. `Open in Visual Studio Code` butonuna basarak vscode ile dokümanları düzenleyebilirsiniz.
![Vscode open](/img/dcsrsgthb05.png)
6. VSCode açılacaktır. Sol kısımdaki dosyalardan `docs` klasörüne tıklayıp genişletin.
![VSCode Anasayfa](/img/dcsrsgthb06.png)
7. Açılan klasörde daha önceden oluşturulmuş olan sayfalar bulunmaktadır.
![Klasörler](/img/dcsrsgthb07.png)
8. Örnek olarak birini düzenleyelim.
![Dosya düzenleme](/img/dcsrsgthb08.png)
9. Projenin gereksinimlerini kurunuz. Ayrıca derlenme adımlarını uygulayınız. [Derlenme adımları](#kurulum-ve-derlenme)
10. Düzenledikten sonra dosyayı `CTRL + S` butonu ile kaydetmeyi unutma. Ve Github Desktop uygulamasını aç.
![Github Destop değişiklik olduktan sonraki ekran](/img/dcsrsgthb09.png)
11. Yaptığın değişikliklere ait bir yorum yap ve `Commit to Main` butonuna basarak yaptığın değişiklere yorum yap.
![Github Destop değişiklik olduktan sonraki ekran](/img/dcsrsgthb10.png)
12. Son olarak yaptığın değişikleri `push` butonuna basarak githuba gönder.

Not: Eğer sistemi bozmadıysanız birkaç dakika için websayfası güncellenecektir.

## Kurulum ve Derlenme

```bash
yarn
```

Bu komutla daha önceki eklenen tüm kütüphaneleri indirmenizi sağlar.

Local(kendi) bilgisayarınızda yaptığınız değişikleri görmek için canlı bir server oluşturun.
  
```bash
yarn start
```

Sunucuya commit etmeden projeyi `build` edip localde build edilen dosyayı `run` etmeniz gerekmektedir. Şu şekilde yapılır.

```bash
yarn build
```

Şimdi build edilen dosyalarla serveri başlatalım.

```bash
yarn run serve
```

## Todo

* [x] Giriş metni yazıldı.
* [x] Githubtan repo nasıl clonelanır.
* [ ] VSCode gibi yazılım kullanarak markdown nasıl düzenlenir.
* [ ] Yapılan Değişikler nasıl tekrar sunucuya yollanır.

## Markdown Hakkında

Sitede içerik paylaşmak için markdown bilmeniz gerekmektedir. Markdown, metinleri basit bir şekilde biçimlendirmek için kullanılan bir işaretleme dilidir. Web içeriği yazarken kullanılır ve metni başlıklar, listeler, bağlantılar gibi öğelere dönüştürmek için basit işaretler ve semboller kullanır. Örneğin, `*içerik*` -> *içerik* şeklinde italik metin, `**metin**` -> **metin** ise kalın metin yapar. Markdown, okunabilirliği ve yazım kolaylığını ön planda tutar.

### Genişletilmiş Markdown Todo Listesi

* [x] Giriş metni yazımı
* [ ] Başlıkların kullanımı (`#`, `##`, `###`, ...)
* [ ] Paragraf oluşturma
* [ ] Kalın metin formatlaması (`**kalın**`)
* [ ] İtalik metin formatlaması (`*italik*`)
* [ ] Üstü çizili metin (`~~üstü çizili~~`)
* [ ] Inline kod (`\`kod\``)
* [ ] Kod blokları (` ``` `)
* [ ] Bağlantı ekleme (`[Metin](URL)`)
* [ ] Resim ekleme (`![Açıklama](URL)`)
* [ ] Sıralı liste oluşturma (`1.`, `2.`, ...)
* [ ] Sırasız liste oluşturma (`-`, `*`)
* [ ] Görev listesi oluşturma (`- [ ] `, `- [x]`)
* [ ] Alıntı yapma (`> alıntı`)
* [ ] Yatay çizgi ekleme (`---` veya `***`)
* [ ] Tablo oluşturma (`| Başlık 1 | Başlık 2 |`, *| --- | --- |`, `| İçerik 1 | İçerik 2 |`)
* [ ] Kaçış karakterleri kullanımı (`\`, özel karakterlerin önüne konarak)
- [ ] HTML kullanımı (HTML etiketleri)
- [ ] Emojilerin kullanımı (`:emoji_adı:`)
- [ ] Özel notlar ve uyarılar için bloklar oluşturma
- [ ] Kolon ve satır içi düzenlemeler (hücrelerin biçimlendirilmesi)
- [ ] Markdown içinde CSS stilleri kullanma (ilgili platformların desteklemesi durumunda)

**Not:** Bu liste, Markdown'ın genişletilmiş özelliklerini içermektedir ve belirli platformlarda desteklenen bazı özel özell


## Hazırlama Todo Listesi

**Docusaurus için Temel Düzey Blog İçeriği Hazırlama Todo Listesi**

- [ ] Docusaurus'ta blog klasörünü bulma ve anlama
- [ ] Yeni bir blog yazısı dosyası oluşturma (.md formatında)
- [ ] Blog yazısına başlık, yazar adı ve tarih eklemek
- [ ] Basit giriş paragrafı yazma
- [ ] Ana içeriği oluşturma (net ve anlaşılır metin)
- [ ] Basit resimler eklemek (örneğin, projenin `static` klasörüne yükleyerek)
- [ ] Temel Markdown formatlamasını kullanma (kalın, italik, başlıklar)
- [ ] Yazının önizlemesini yaparak formatlama ve yazım hatalarını kontrol etme
- [ ] Blog yazısını yayınlama (dosyayı ilgili klasöre yerleştirerek)
- [ ] Yayınlanan içeriği web sitesinde kontrol etme