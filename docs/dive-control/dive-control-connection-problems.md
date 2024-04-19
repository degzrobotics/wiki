---
sidebar_position : 3
pagination_next: null
pagination_prev: null

---
import DocCardList from '@theme/DocCardList';

# Bağlantı Sorunları Çözümü

Dive Control ile Derin Diver çalıştıran kontrol kartlarınıza bağlanmakta sıkıntı yaşıyorsanız buradaki adımları deneyebilirsiniz.

## ERR-001 Hatası (Waiting For Data'da takılı kalmak)

Kablo bağlantıları veya kontrol kartının çalışmaması ile kaynaklı olabilir.

- Kablo bağlantılarını doğru yaptığınıza emin olun, RS485 bağlantısının yönleri doğru olmak zorundadır.
- Kontrol kartının çalıştığından ve üzerindeki Rx Tx ışıklarının yanıp söndüğünden emin olun. İkisi de yanıp sönmüyorsa kablolamanızdan yana bir problem olabilir
- Kontrol kartının ilk açılış süresi 5 6 saniyeyi bulabilir, eğer bu süreden sonra da bağlantı konusunda sıkıntı yaşıyorsanız kontrol kartına Derin Diver kurulumunu doğru yaptığınızdan emin olun.

## ERR-002 Hatası

Bu hata Sublink'in bilgisayarınıza bağlantısı ile alakalıdır. COM Port'unuz yanlış seçildiyse veya COM Port'unuza erişim izniniz yoksa bu hatayı alabilirsiniz.

- Sublink'in bilgisayarınıza çalıştığından emin olduğunuz bir Type-C kablosu ile bağlı olduğundan emin olun. (Bazı Type-C kablolar sadece şarj için olup data taşımamaktadır.)
- COM Port'unuzu doğru seçtiğinizden emin olun. Eğer seçtiğiniz COM Port'unu anlık olarak başka bir uygulama kullanıyorsa (Arduino vs) o uygulumayı kapatıp tekrar deneyin.
- Eğer konsolda (F10 ile konsolu açabilirsiniz) "Erişim Engellendi", “Permission Denied” hatası görüyorsanız Sublink'i bilgisayarınızdan çıkartıp tekrar takın, port listesini yenileyip tekrar seçin.

<DocCardList />
