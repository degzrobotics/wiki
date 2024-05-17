---
sidebar_position : 1
pagination_next: null
pagination_prev: null

---
import DocCardList from '@theme/DocCardList';

# DerinCommander'ın Kullanımı

main.py içerisindeki rovUpdate() fonksiyonunda kendi kodlarınızı çalıştırabilirsiniz. Bu fonksiyon içerisinde rov sınıfına ve rov sınıfından çeşitli komutlara da erişebilirsiniz. Temel kontrol komutları şunlardır:

- **`rov.arm()`**: Su altı aracını kullanmaya hazır hale getirir. Bu komut kod çalıştırıldığında en başta çalışmaktadır. Tekrardan aracınızı arm'lamanıza gerek yoktur.
- **`rov.disarm()`**: Su altı aracınızı disarm etmenizi sağlar.
- **`rov.move(0,0,0)`**: Su altı aracınızı hareket ettirmenizi sağlar. İçerisine aldığı değerler sırasıyla, heave(yukarı aşağı hareket), strafe(sağ sola hareket), surge(ileri geri hareket) şeklindedir. Tüm bu değerler -500 ile 500 arasında olmalıdır.
- **`rov.turn(0)`**: Stabilize modda iken, su altı aracınızı istediğiniz açıya dönmesini sağlar. Bu açı değeri pusula üzerinden hesaplanır, 0 ile 360 arasında değer alabilir.
- **`rov.turnDegrees(0)`**: Stabilize modda iken, su altı aracınızı istediniz açı miktarında dönmesini sağlar. -180 ile 180 arasında değer alır. Su altı aracını 70 derece sağa döndürmek için **`rov.turnDegrees(70)`**, 50 derece sola döndürmek için **`rov.turnDegrees(-50)`** kullanılabilir.

Aynı zamanda bu fonksiyon içerisinde receivedData değişkeninin içinden aracın verilerine ulaşabilirsiniz.En güncel versiyona göre receivedData değişkeninin içindeki veriler şunlardır:

- **`receivedData.rovState`**: Su altı aracının şuanki modu
- **`receivedData.pitch`**: Su altı aracının yunuslama açısı
- **`receivedData.roll`**: Su altı aracının yuvarlanma açısı
- **`receivedData.yaw`**: Su altı aracının sapma açısı (sağa sola dönme)
- **`receivedData.accelX`**: İvme ölçerin X değeri
- **`receivedData.accelY`**: İvme ölçerin Y değeri
- **`receivedData.accelZ`**: İvme ölçerin Z değeri
- **`receivedData.depth`**: Basınç sensöründen alınan derinlik verisi
- **`receivedData.battV`**: Voltage Sense pininden alınan voltaj değeri
- **`receivedData.battA`**: Current Sense pininden alınan akım değeri
- **`receivedData.waterTemp`**: Basınç sensöründen alınan su sıcaklığı değeri
- **`receivedData.internalTemp`**: İMU sensöründen alınan kart sıcaklığı değeri
- **`receivedData.errCode`**: Araç içerisinden gelen bildirimler

Aynı fonksiyon içerisinde commandData değişkenine erişebilirsiniz, bu değişkenin içinde araca yollayabileceğiniz komutları bulabilirsiniz. commandData değişkenindeki veriler kullanım moduna göre değişir. En güncel versiyona göre stabilize modda commandData değişkeninin içindeki veriler şunlardır:

- **`commandData.rovState`**: Mod seçimi, 1 manuel(stabilizasyonsuz), 2 stabilize, 3 derinlik sabitleme. (Otonom kontrol için 2. modu yani stabilize modu tercih edebilirsiniz)
- **`commandData.heading`**: Belirlenen istikamet açısı. Bu değer pusuladan okunan veriye göre gelir. Stabilizasyon modunda iken aracınız açısal olarak bu dereceye ulaşmaya çalışır.
- **`commandData.heave`**: Yukarı-aşağı hareket. -500 ila 500 arasında değer alabilir.
- **`commandData.strafe`**: Sağa-sola hareket(yengeç hareketi). Desteklenen gövde tipine göre aracın sağa sola doğru kaymasını sağları. -500 ile 500 arasında değer alabilir.
- **`commandData.surge`**: İleri-geri hareket. Aracın ileri ve geri gitmesini sağlar, -500 ile 500 arasında değer alabilir.
- **`commandData.roll`**: Aracın yuvarlanma açısını kontrol eder. Desteklenen gövde tiplerinde aracınızın yuvarlanma açısını değiştirebilmenizi sağlar. Açısal değer alır, varsayılan olarak araç armlandığında bulunduğu açıyı alır.
- **`commandData.pitch`**: Aracın yunuslama açısını kontrol eder. Desteklenen gövde tipine göre aracınızın yukarı aşağı bakmasını sağlayabilirsiniz.Açısal değer alır, varsayılan olarak araç armlandığında bulunduğu açıyı alır.
- **`commandData.roliCamPitchControl`**: Eğer aracınızda Roli Kamera Sistemi kullanıyorsanız kamera sisteminin açısını değiştirmenizi sağlar. -10 ile 10 arasında değer alır.
- **`commandData.lightControl`**: Aydınlatma sistemi kullanıyorsanız kontrol etmenizi sağlar. 0-255 arası değer alır. LIGHT_PIN parametresi ile bağlı olduğu pini seçebilirsiniz.
- **`commandData.buttons`**: Derin Diver içerisindeki çeşitli komutların çalıştırılmasını sağlar.
- **`commandData.linkCommand`**: Derin Diver'ın haberleşme kontrolünü sağlar.

*Manuel modda açısal kontrol sağlayan değerler de -500 ile 500 arasında değer alır.*

## Dikkat Edilmesi Gerekenler

RovUpdate fonksiyonü bir döngü halinde çalışmaktadır. Sürekli olarak kendisini çağırır, bu yüzden yazacağınız kodları da buna göre ayarlamanız gerekmektedir. Bu fonksiyon içerisinde yazılan kodların sürekli olarak araca yollanacağını göz önünde bulundurun. Araca sürekli olarak Arm komutu yollamak haberleşmeyi tıkayabilir. Arm komutu varsayılan olarak main.py dosyası ilk çalıştırıldığında yollanır. Yeniden bir arm komutu yollamanıza gerek yoktur ancak aracınızı disarm ettikten sonra tekrar komut yollamak isterseniz arm komutun yollamanız gerekmektedir.  

<DocCardList />
