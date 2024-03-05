---
sidebar_position : 3
---

# Ürünün Kullanımı



## Pin diyagramı


 ## Pin  Açıklamaları:




 
|Port A                 | Özellikler                                                                                                                                                                                                                                     |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|VIN| Harici güç kaynağı voltaj girişi.|
5V| 5 volt güç çıkışı..|
|GND| Toprak bağlantısı (ground).
|3V3 |3.3 volt güç çıkışı.
|BOOT| Bu pin, genellikle geliştirme kartınızın firmware'ini yüklemek veya güncellemek için kullanılır.|
RUN| Cihazı çalıştırma/kapatma kontrolü.|
|SWD|SWD pinleri, kartınızın mikrodenetleyicisinin hata ayıklanması için kullanılan bir protokoldür.
|IO29, IO28, IO27, IO26| Genel amaçlı giriş/çıkış pinleri.

 Port B                | Özellikler                                                                                                                                                                                                                                     |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     IO24,IO25         |      PWM (Pulse Width Modulation) sinyalleri için kullanılır..|
IO18,IO19|I2C protokolü için SCL (Serial Clock Line) ve SDA (Serial Data Line).       SDA, cihazlar arasında veri iletimini sağlayan veri hattıdır. SCL ise, bu veri transferinin ne zaman yapılacağını belirleyen, yani veri paketlerinin zamanlamasını senkronize eden saat hattıdır. I2C bus'ı üzerinden birden fazla cihaz, bu iki hat üzerinden birbirleriyle haberleşebilir.|
|IO16,IO17| UART protokolü için RX (Receive Data) ve TX (Transmit Data). RX (Receive Data) ve TX (Transmit Data): UART, seri haberleşme için kullanılan bir protokoldür ve genellikle iki cihaz arasında noktadan noktaya veri aktarımı yapmak için kullanılır. RX, verilerin alındığı hattı belirtirken, TX cihazın veri gönderdiği hattı ifade eder.|
|IO12,IO15| SPI protokolü için MISO (Master In Slave Out), MOSI (Master Out Slave In), SCK (Serial Clock), ve CS (Chip Select). SPI (Serial Peripheral Interface) protokolünde kullanılır. SPI, yüksek hızda seri veri aktarımı için kullanılan bir protokoldür ve genellikle sensörler, SD kartlar gibi alt sistemlerle haberleşmede kullanılır. MISO ve MOSI, ana cihaz ile alt cihazlar arasında iki yönlü veri akışını sağlar. SCK, veri aktarımının saat sinyalini belirler ve verilerin ne zaman okunup yazılacağını senkronize eder. CS ise bağlı birden fazla alt cihaz arasında, hangi cihazın haberleşme sırasında aktif olacağını belirleyen bir sinyaldir|
| IO8,IO11 | PWM veya genel amaçlı giriş/çıkış pinleri. |

|Port C                 | Özellikler                                                                                                                                                                                                                                     |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|IO15 - IO24 | Bunlar toprak bağlantısı için GND pinleridir.  



