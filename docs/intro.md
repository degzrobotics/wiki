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
9. Projenin gereksinimlerini kurunuz. Ayrıca derlenme adımlarını uygulayınız. Çünkü doğru derlenmeyen bir proje GitHub'da çalışmayacaktır. Commit etmeden önce kendi bilgisayarınızda denemeniz tavsiye edilir. Eğer sorun yoksa commit edip güncelleyebilirsiz. [Derleme ve kurulum adımları](#kurulum-ve-derlenme)
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

## Markdown Hakkında

Sitede içerik paylaşmak için markdown bilmeniz gerekmektedir. Markdown, metinleri basit bir şekilde biçimlendirmek için kullanılan bir işaretleme dilidir. Web içeriği yazarken kullanılır ve metni başlıklar, listeler, bağlantılar gibi öğelere dönüştürmek için basit işaretler ve semboller kullanır. Örneğin, `*içerik*` -> *içerik* şeklinde italik metin, `**metin**` -> **metin** ise kalın metin yapar. Markdown, okunabilirliği ve yazım kolaylığını ön planda tutar.

### Markdown nasıl öğrenebilirim

Markdown öğrenmenin en hızlı yolu denemektir. Kaynak olarak [gruntwork.io](https://docs.gruntwork.io/guides/style/markdown-style-guide/) sitesinde bu dokümanı takip edebilirsin.

### Docusarus Önemli özellikleri

Websitesi docusarus kullandığı için site ile uyumlu özellikleri efektif şekilde kullanmak için bu [Markdown Özellikleri](https://docusaurus.io/docs/markdown-features) sayfasını takip edebilirsin.

## wiki.degzrobotics.com

[wiki](https://wiki.degzrobotics.com) bir Degz Robotik ve topluluğunun ürünüdür.