---
sidebar_position : 3
---

# Ürünün Kullanımı

## Bağlantı şeması

![Bağlantı Diagramı](./image/vesc69-100a-motor-surucu4.png)


## Port Açıklamaları:

| Port                  | Özellik                                                                                                                                                                                                                                     |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|1)  CAN             | Controller Area Network (CAN) bus sistemi için bir bağlantı noktasıdır. CAN, özellikle araçlarda kullanılan ve birçok farklı elektronik kontrol ünitesinin (ECU) birbiriyle iletişim kurmasını sağlayan bir ağ protokolüdür.                                                                                                                                  |
|2) SWD                      |  Serial Wire Debug (SWD) portu, mikrodenetleyicinin programlanması ve hata ayıklaması için kullanılır. SWCLK (Serial Wire Clock) ve SWDIO (Serial Wire Data I/O) pinleri, programlama ve hata ayıklama sırasında veri aktarımı ve senkronizasyonu için gereklidir.
3 )PPM     |  PPM  (Pulse Position Modulation)sinyali, özellikle uzaktan kumanda sistemlerinde kullanılan bir sinyal türüdür. Servo motorlar gibi cihazları kontrol etmek için kullanılır.|
| 4)COMM|  Bu, iletişim için kullanılan porttur. RX/SDA ve TX/SCL etiketleri, bu portun I²C seri veri (SDA) ve seri saat (SCL) hatlarına sahip olduğunu gösterir. I²C, mikrodenetleyici ve diğer I²C uyumlu cihazlar arasında veri alışverişini sağlayan bir protokoldür. |
|5 ) HALL  | Hall sensörü girişleri, manyetik alanların algılanmasını sağlayan sensörler için kullanılır. Bu portlar, genellikle fırçasız motorların rotor pozisyonunu algılamak için kullanılır.|

## Pin   Açıklamaları
 
| CAN Portu                   | Özellik                                                                                                                                                                                                                                     |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CAL           | Bu pin, genellikle kalibrasyon için kullanılır.|
CAH           |Genellikle kalibrasyon veya ayar hatları için kullanılabilir.|
|5V|  USB üzerinden sağlanan 5 volt güç çıkışı.
|GND| GND 
| **SWD Portu**                  | **Özellik**                                                      |
|3.3V            | Porta güç sağlayan 3.3 volt çıkış.|
SWCLK             |Serial Wire Clock, yani seri saat hattı. SWD (Serial Wire Debug) için saat sinyalini sağlar.|
|GND| GND|
|SWDIO| Serial Wire Debug Data I/O, yani seri veri giriş/çıkış hattı. SWD için veri aktarımı sağlar.|
|**COMM  Portu**                   | **Özellik**                                                     |
|ADC15, ADC2, ADC1         | Analog-Digital Converter, yani analog-dijital dönüştürücü girişleri.Harici sensörlerden analog sinyalleri alır ve mikrodenetleyicinin işleyebileceği dijital sinyallere dönüştürür.
RX/SDA | Bu pin hem UART alıcı (RX) hem de I²C veri hattı (SDA) olarak işlev görür.|
TX/SCL |: Bu pin hem UART verici (TX) hem de I²C saat hattı (SCL) olarak işlev görür.|
|GND| GND|
|3.3V|Porta güç sağlayan 3.3 volt çıkış.|
|5V|Porta güç sağlayan 5 volt çıkış. 
| **HALL Portu**                   | **Özellik** |
|H3, H2, H1            |  Bu pinler genellikle iletişim portlarıdır ve harici cihazlarla veri iletişimi için kullanılır. Özel işlevleri kartın tasarımına ve projenin gereksinimlerine göre değişebilir.|
TMP             | Sıcaklık sensörünün veri çıkışını almak için kullanılır.|
|5V|  Bu port, 5 volt güç kaynağı sağlar. Diğer cihazları veya bileşenleri beslemek için kullanılır.|



:::info
VESC 6.7 100A Yüksek Güçlü Motor Sürücü'nün  bizim iticiler ve bizim üzerinde  degz yazan bir pil ve suibo ile bir şematik yapılabilir buraya . Başlıkta suibo ile kulalnımı deriz .Güzel olur .
::: 

## Gyro ile Dengelemeye Hazır (İngilizce içerik)

VESC IMU ile dengeleme sağlayan tek tekerlekli araçlarla çalışmaya uygun halde gelir.

<iframe width="100%" height="574" src="https://www.youtube.com/embed/iGgNuo6o_Ug" title="VESC IMU Accelerometer Calibration - How To" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## VESC board için ayarlama (İngilizce İçerik)

Vesc’nin elektrikli kaykaylar ile nasıl ayarlanması gerektiğini aşağıdan izleyebilirsiniz.

<iframe width="100%" height="574" src="https://www.youtube.com/embed/lDuV8cnPRmI" title="VESC® Tool 2020 Tutorial - How to Program Vesc for DIY Electric Skateboards" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>