---
sidebar_position : 1
---

# Ürün Hakkında

![Bağlantı Şeması](./image/vesc67-70a-motor-surucu.jpg)


**Dünyanın en güçlü açık kaynaklı motor sürücüleri Degz aracılığı ile sizlerle!**

Dünyanın en güçlü açık kaynaklı motor sürücüleri Degz ile şimdi sizlerle buluşuyor! VESC motor sürücüsü, kara, hava ve deniz araçlarının kalbinde yer alarak dünya genelinde kendini ispatlamış bir performans sunuyor. 60V’a kadar yüksek gerilimle çalışabilme özelliğiyle dikkat çeken VESC, projelerinizi ileri taşımaya hazır. Kapsamlı sürücü ayarlama yazılımı VESC Tool ile motor sürücünüzü kolayca programlayabilir, rejeneratif frenleme özelliği sayesinde elektrikli araçlarınızın geri besleme ihtiyacını karşılayabilirsiniz. Dört kontrol modunu destekleyen VESC, aynı zamanda çeşitli koruma fonksiyonları ve ivmeölçer modüllerini destekleyerek güvenli ve esnek bir kullanım sunar. Motor sürücünüzü keşfedin, projelerinizi hayata geçirin!

:::warning
VESC 60V’a kadar yüksek gerilim ile çalıştığı için dikkatli kullanılması gerekmektedir!
:::

VESC motor sürücü ile;

- _Utras’ı_ yüksek performanslı olarak kullanabilirsiniz.
- Kendi scooterınızı tasarlayabilir veya scooterınızı modifiye edebilirsiniz.
- Yüksek performanslı sualtı araçları tasarlayıp üretebilirsiniz.
 

**Kapsamlı Sürücü Ayarlama Yazılımı VESC Tool**

Motor sürücünüzü VESC arayüzü ile kolaylıkla programlayabilirsiniz.
Programlayıcıyı indirmek için [bu linki](https://vesc-project.com/vesc_tool) kullanabilirsiniz.

**Rejeneratif Frenleme Özelliği**

Elektrikli araçlarınızın ihtiyaç duyduğu geri beslemeyi motor sürücü üzerinden doğrudan alabilirsiniz. Bu daha uzun menzil veya daha fazla batarya ömrü demektir. (Bataryaların BMS’e sahip olması önerilir)

## Teknik Özellikler:

| Özellik                    | Değer                                                                                                                                                                                                                                      |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sürekli akım               | 100A                                                                                                                                                                                                                                       |
| Anlık akım                 | 200A                                                                                                                                                                                                                                       |
| Gerilim                    | 14V-60V (Hücreler: 4-13S; 4S ila 12S için güvenlidir, gerilim - spike’ları 60V’yi aşmamalıdır!)                                                                                                                                            |
| BEC                        | 5V @ 1A ERPM: 150000 Kontrol                                                                                                                                                                                                               |
| Arayüzü Bağlantı Noktaları | USB, CAN, UART                                                                                                                                                                                                                             |
| Desteklenen Sensörler      | ABI, HALL, AS5047, AS5048A                                                                                                                                                                                                                 |
| Giriş Seti Desteği         | PPM, ADC, NRF, UART, SPI, IIC Modlar: DC, BLDC, FOC - (sinüzoidal)                                                                                                                                                                         |
| Regeneratif kapasite       | Evet                                                                                                                                                                                                                                       |
| Programlanabilir           | Evet                                                                                                                                                                                                                                       |
| Motor kablosu              | 10AWG                                                                                                                                                                                                                                      |
| Güç kablosu                | 8AWG                                                                                                                                                                                                                                       |
| Boyut                      | 75.4×63.7×31.1mm (Isı emici dahil)                                                                                                                                                                                                         |
| Özellikler                 | Dört Kontrol Modu: Akım / Görev Döngüsü / Hız / Konum - kontrol modu.                                                                                                                                                                      |
| Koruma fonksiyonları       | düşük gerilim koruması, yüksek gerilim koruması, aşırı - akım koruması, yüksek sıcaklık koruması, MOSFET’lerin aşırı sıcaklık - koruması. MPU9250, MPU9150, MPU6050, LSM6DS3, BMI160 gibi ivmeölçer ölçüm - ünitesi modüllerini destekler. |

:::info
Fabrika çıkışlı firmware sürümü olan 5.2 sürümünü kullanmanız önerilir, yeni firmware güncellemesi ESC’ye zarar verebilir.
:::


## Bağlantı şeması:

![Bağlantı Şeması](./image/vesc67-70a-motor-surucu2.png)

## Gyro ile Dengelemeye Hazır

VESC IMU ile dengeleme sağlayan tek tekerlekli araçlarla çalışmaya uygun halde gelir.

<iframe width="100%" height="574" src="https://www.youtube.com/embed/iGgNuo6o_Ug" title="VESC IMU Accelerometer Calibration - How To" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## VESC board için ayarlama

Vesc’nin elektrikli kaykaylar ile nasıl ayarlanması gerektiğini aşağıdan izleyebilirsiniz.

<iframe width="100%" height="574" src="https://www.youtube.com/embed/lDuV8cnPRmI" title="VESC® Tool 2020 Tutorial - How to Program Vesc for DIY Electric Skateboards" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

