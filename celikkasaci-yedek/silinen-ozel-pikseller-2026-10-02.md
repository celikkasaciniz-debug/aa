# celikkasaci.com — silinen özel pikseller (2026-10-02)

Shopify → Ayarlar → Müşteri etkinlikleri altındaki iki özel piksel silindi.
Gerekirse "Özel piksel ekle" ile aynı kod yapıştırılarak geri kurulabilir.

Silme nedeni: ikisi de Google & YouTube uygulamasının zaten yaptığı işi tekrarlıyordu.
- "Google Ads Satın Alma": uygulamayla aynı ödeme başlatma / satın alma etiketlerine ikinci kez dönüşüm gönderiyordu (çift sayım riski).
- "Tag Manager": GTM-56ZNS5F5'i ikinci kez yüklüyordu; dinlediği phone_click / whatsapp_click olaylarını tema hiç göndermiyor. WhatsApp/telefon dönüşümleri ana sayfadaki GTM'den (uygulama üzerinden) geliyor.

## Google Ads Satın Alma

```js
// Google Ads - Satın alma dönüşümü (Google Shopping App Purchase)
const script = document.createElement('script');
script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=AW-18469730986');
script.setAttribute('async', '');
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18469730986');
// Ödeme başlatma
analytics.subscribe('checkout_started', (event) => {
  const checkout = event.data.checkout;
  gtag('event', 'conversion', {
    'send_to': 'AW-18469730986/JeKoCICHyoIdEKr1hudE',
    'value': checkout.totalPrice ? checkout.totalPrice.amount : 0,
    'currency': checkout.currencyCode || 'TRY'
  });
});

analytics.subscribe('checkout_completed', (event) => {
  const checkout = event.data.checkout;
  gtag('event', 'conversion', {
    'send_to': 'AW-18469730986/ZpxSCP2GyoIdEKr1hudE',
    'value': checkout.totalPrice ? checkout.totalPrice.amount : 0,
    'currency': checkout.currencyCode || 'TRY',
    'transaction_id': (checkout.order && checkout.order.id) ? checkout.order.id : checkout.token
  });
});
```

## Tag Manager

```js
window.dataLayer = window.dataLayer || [];

(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js"
  });

  var f = d.getElementsByTagName(s)[0];
  var j = d.createElement(s);
  var dl = l !== "dataLayer" ? "&l=" + l : "";

  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-56ZNS5F5");
analytics.subscribe("phone_click", (event) => {
  window.dataLayer.push({
    event: "phone_click",
    link_url: event.customData?.link_url
  });
});

analytics.subscribe("whatsapp_click", (event) => {
  window.dataLayer.push({
    event: "whatsapp_click",
    link_url: event.customData?.link_url
  });
});
```
