---
sidebar_position : 2
---




# VESC 6.7 100A Yüksek Güçlü Motor Sürücü'nün Kullanımı


## Bağlantı şeması:
![Bağlantı Diagramı](./image/vesc69-100a-motor-surucu4.png)



 ## Pin Portlarının  Açıklamaları:



 
| CAN Portu                   | Özellik                                                                                                                                                                                                                                     |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CAL           | Bu pin, genellikle kalibrasyon için kullanılır.|
CAH           |Genellikle kalibrasyon veya ayar hatları için kullanılabilir.|
|5V|  USB üzerinden sağlanan 5 volt güç çıkışı.
|GND| GND

 
| SWD Portu                   | Özellik                                                                                                                                                                                                                                     |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|3.3V            | Porta güç sağlayan 3.3 volt çıkış.|
SWCLK             |Serial Wire Clock, yani seri saat hattı. SWD (Serial Wire Debug) için saat sinyalini sağlar.|
|GND| GND|
|SWDIO| Serial Wire Debug Data I/O, yani seri veri giriş/çıkış hattı. SWD için veri aktarımı sağlar.|



|COMM  Portu                   | Özellik                                                                                                                                                                                                                                     |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|ADC15, ADC2, ADC1         | Analog-Digital Converter, yani analog-dijital dönüştürücü girişleri.Harici sensörlerden analog sinyalleri alır ve mikrodenetleyicinin işleyebileceği dijital sinyallere dönüştürür.
RX/SDA | Bu pin hem UART alıcı (RX) hem de I²C veri hattı (SDA) olarak işlev görür.|
TX/SCL |: Bu pin hem UART verici (TX) hem de I²C saat hattı (SCL) olarak işlev görür.|
|GND| GND|
|3.3V|Porta güç sağlayan 3.3 volt çıkış.|
|5V|Porta güç sağlayan 5 volt çıkış.

 
| HALL Portu                   | Özellik                                                                                                                                                                                                                                     |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|H3, H2, H1            |  Bu pinler genellikle iletişim portlarıdır ve harici cihazlarla veri iletişimi için kullanılır. Özel işlevleri kartın tasarımına ve projenin gereksinimlerine göre değişebilir.|
TMP             | Sıcaklık sensörünün veri çıkışını almak için kullanılır.|
|5V|  Bu port, 5 volt güç kaynağı sağlar. Diğer cihazları veya bileşenleri beslemek için kullanılır.|



:::info
VESC 6.7 100A Yüksek Güçlü Motor Sürücü'nün  bizim iticiler ve bizim üzerinde  degz yazan bir pil ve suibo ile bir şematik yapılabilir buraya . Başlıkta suibo ile kulalnımı deriz .Güzel olur .
::: 
