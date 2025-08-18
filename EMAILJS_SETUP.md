# دليل إعداد EmailJS لإرسال البريد الإلكتروني

## 📧 ما هو EmailJS؟

EmailJS هي خدمة تسمح بإرسال رسائل البريد الإلكتروني مباشرة من JavaScript بدون الحاجة لخادم backend. هذا يجعلها مثالية للمواقع الثابتة.

## 🚀 خطوات الإعداد

### 1. إنشاء حساب EmailJS

1. اذهب إلى [EmailJS.com](https://www.emailjs.com/)
2. اضغط على "Sign Up" لإنشاء حساب جديد
3. تأكد من بريدك الإلكتروني

### 2. إعداد خدمة البريد الإلكتروني

1. في لوحة التحكم، اضغط على "Email Services"
2. اضغط على "Add New Service"
3. اختر مزود البريد الإلكتروني (Gmail, Outlook, Yahoo, إلخ)
4. أدخل بيانات بريدك الإلكتروني
5. احفظ الخدمة واحتفظ بـ **Service ID**

### 3. إنشاء قالب البريد الإلكتروني

1. اضغط على "Email Templates"
2. اضغط على "Create New Template"
3. استخدم هذا القالب:

```
Subject: رسالة جديدة من {{from_name}} - {{subject}}

مرحباً {{to_name}},

لقد تلقيت رسالة جديدة من موقعك الشخصي:

الاسم: {{from_name}}
البريد الإلكتروني: {{from_email}}
الموضوع: {{subject}}

الرسالة:
{{message}}

---
تم إرسال هذه الرسالة من موقعك الشخصي
```

4. احفظ القالب واحتفظ بـ **Template ID**

### 4. الحصول على Public Key

1. اذهب إلى "Account" في القائمة الجانبية
2. ستجد **Public Key** في قسم "API Keys"
3. انسخ هذا المفتاح

### 5. تحديث الكود

في ملف `script.js`، استبدل هذه القيم:

```javascript
// استبدل هذا السطر:
emailjs.init("demo_public_key");

// بـ:
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// وألغِ التعليق عن هذا الجزء واستبدل القيم:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

### 6. اختبار النظام

1. احفظ الملفات
2. افتح الموقع في المتصفح
3. املأ نموذج الاتصال واضغط "Send Message"
4. تحقق من بريدك الإلكتروني

## 🔧 إعدادات متقدمة

### تخصيص رسائل الخطأ

يمكنك تخصيص رسائل الخطأ في الكود:

```javascript
.catch(function(error) {
    console.error('Email sending failed:', error);
    if (error.status === 400) {
        showNotification('خطأ في البيانات المرسلة', 'error');
    } else if (error.status === 401) {
        showNotification('خطأ في المصادقة', 'error');
    } else {
        showNotification('فشل في إرسال الرسالة. حاول مرة أخرى.', 'error');
    }
});
```

### إضافة حقول إضافية

لإضافة حقول جديدة للنموذج:

1. أضف الحقل في HTML:
```html
<input type="tel" name="phone" placeholder="رقم الهاتف">
```

2. أضف الحقل في JavaScript:
```javascript
const templateParams = {
    from_name: formData.get('from_name'),
    from_email: formData.get('from_email'),
    phone: formData.get('phone'), // حقل جديد
    subject: formData.get('subject'),
    message: formData.get('message'),
    to_name: 'Ahmed Roshdi'
};
```

3. أضف الحقل في قالب EmailJS:
```
رقم الهاتف: {{phone}}
```

## 📊 حدود الخدمة المجانية

- **200 رسالة شهرياً** في الخطة المجانية
- للاستخدام التجاري، فكر في الترقية للخطة المدفوعة

## 🛡️ الأمان

- لا تشارك **Private Key** أبداً في الكود
- استخدم **Public Key** فقط في الكود
- فعّل **Domain Whitelist** لحماية إضافية

## 🔍 استكشاف الأخطاء

### الرسالة لا تصل؟
1. تحقق من صندوق الرسائل غير المرغوب فيها
2. تأكد من صحة Service ID و Template ID
3. تحقق من console في المتصفح للأخطاء

### خطأ 401 (Unauthorized)?
- تأكد من صحة Public Key
- تحقق من إعدادات Domain Whitelist

### خطأ 400 (Bad Request)?
- تأكد من أن أسماء الحقول في النموذج تطابق القالب
- تحقق من صحة Template ID

## 📞 الدعم

إذا واجهت أي مشاكل:
1. راجع [وثائق EmailJS](https://www.emailjs.com/docs/)
2. تحقق من [الأسئلة الشائعة](https://www.emailjs.com/docs/faq/)
3. تواصل مع دعم EmailJS

---

**ملاحظة**: هذا الدليل يوضح كيفية إعداد إرسال البريد الإلكتروني الحقيقي. الكود الحالي يعمل في وضع العرض التوضيحي ويحتاج لإعداد حسابك الخاص في EmailJS.

