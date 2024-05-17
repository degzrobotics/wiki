---
sidebar_position : 1
pagination_next: null
pagination_prev: null

---
import DocCardList from '@theme/DocCardList';

# Derin Diver Nedir?

Derin Diver, Degz Suibo Kontrol Kartı üzerinde kullanılmak üzere tasarlanmış bir Su Altı Aracı Yazılımıdır. Bu yazılım sayesinde desteklenen tipteki su altı araçlarının manuel ve otonom kontrolünü kolaylıkla sağlayabilirsiniz. Derin Diver ile birlikte gelen Dive Control arayüzü sayesinde çok kolay bir şekilde su altı araçlarınızın kontrolünü sağlayıp, ayarlarını ve kalibrasyonlarını yapabilirsiniz. Deringezen X, Derin Diver ile çalışmaktadır. Otonom kontrol için hazırlanan Derin Commander Python yazılımı sayesinde Derin Diver'ı çok kolay bir şekilde otonom projelerinizde de kullanabilirsiniz.

## Derin Diver'ın Özellikleri

Derin Diver su altı araçları için özel olarak geliştirilmiş olup bir su altı aracının kontrolünde gerekebilecek tüm özellikleri sağlamayı hedeflemektedir. Şuanda Degz Suibo üzerinde çalışmak üzere tasarlanmış olup farklı sensör ve donanım destekleri de eklenebilecek bir mimariye sahiptir.

- 6 ve 8 motorlu araçlar için kullanıma uygun. (Farklı motor konfigürasyonlarına destek yakın zamanda gelecektir.)
- Açı ölçer, ivme ölçer ve pusula sensörleri ile 9 Eksen stabilizasyon.
- [Degz Robotics D300 Derinlik Sensörü ile](https://degzrobotics.com/product/derinlik-ve-sicaklik-sensoru/) derinlik ve su sıcaklığı ölçümü.
- Anlık voltaj ve akım ölçümü.
- State Machine sistemi ile Manual, Stabilize, Depth Hold(test aşamasında), Loiter(eklenecek) dalış modları.
- Kolayca ayarlanabilir PID kontrolü.
- Tüm ayarlara kolayca erişebileceğiniz Parameter Sistemi
- Log sistemi
- Modern ve kolay kullanılabilen [Dive Control Arayüzü](https://github.com/degzrobotics/Dive-Control) ile uyumlu
- Kolayca otonom komutları yollayabileceğiniz [Derin Commander](https://github.com/degzrobotics/DerinCommander) otopilot kütüphanesi ile uyumlu
- Degz Rolicam ile çalışmaya hazır.

## Derin Diver'ı Nasıl Edinebilirim?

Derin Diver'ın derlenmiş halini [Degzrobotics Github sayfası](https://github.com/degzrobotics/Derin-Diver) üzerinden elde edebilirsiniz. Derin Diver sürekli olarak güncellenmekte ve test edilmektedir. Yeni versiyonlar Github üzerinden yayınlanacaktır. Derin Diver'ın gelişme süreci hakkında tartışmalar forum.degzrobotics.com üzerinden yapılmaktadır.

## Derin Diver'ın Kaynak Kodlarına Nasıl Ulaşabilirim?

Derin Diver şuanda kapalı beta geliştirilmektedir. Kaynak kodlarına ve geliştirme sürecine dahil olmak isterseniz info@degzrobotics.com'dan bize ulaşabilirsiniz. Derin Diver açık kaynak olma amacıyla tasarlanmış bir yazılım olup ilerleyen süreçte tamamen açık kaynak olmayı hedeflemektedir.

## Derin Diver'ı Yarışmalarda Kullanabilir miyim?

Evet Derin Diver ve Degz Suibo Kontrol kartını Teknofest gibi yarışmalarda kullanabilirsiniz. Bu sistemler su altı robotiği hakkında geliştirme yapmak isteyen kişiler için piyasadaki muadillerine alternatif olarak üretilmiştir. Amacımız Su altı robotiğini daha erişilebilir olmasını sağlamak ve bu alanda yerli ve milli çözümler üretmektir.

## Derin Diver Ekosistemindeki Terimler Sözlüğü

### Elektronik Kartlar

- Degz Suibo: Derin Diver yazılımını çalıştırmak üzere tasarlanmış kontrol kartı.
- Degz Sublink: Degz Suibo ile haberleşmeyi sağlayan elektronik kart. 

### Yazılımlar

- Derin Diver: Degz Suibo ve benzeri kartlar üzerinde çalışmak üzere tasarlanmış su altı aracı kontrol yazılımı.
- Dive Control: Derin Diver çalıştıran kontrol kartları ile kullanmak üzere tasarlanmış Derin Diver'ın kontrolünü ve kalibrasyonunu sağlayan su altı aracı arayüzü. 
- Derin Commander: Derin Diver çalıştıran kontrol kartlarına Python üzerinden komutlar yollamak üzere tasarlanmış yazılım

### Diğer

- RS485: Derin Diver'ın kablo üzerinden uzun mesafe iletişim kurmak için kullandığı iletişim protokolü.
- Arm / Disarm: Yazılımın iticileri komut yollamaya başlamasını temsil eder. Derin Diver Arm olduğu zaman iticilere komut yollar, Disarm edildiği zaman motorlara komutu keser.

<DocCardList />
