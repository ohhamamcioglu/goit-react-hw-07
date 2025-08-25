# Telefon Rehberi Uygulaması

Bu, React ile oluşturulmuş basit ve modern bir telefon rehberi yönetimi uygulamasıdır. Kullanıcıların kişileri eklemesine, silmesine ve filtrelemesine olanak tanır. Uygulama durumu Redux Toolkit ile yönetilirken, form doğrulamaları Formik ve Yup tarafından yapılmaktadır.

## Canlı Demo

Dağıtım bağlarını burada paylaşın (Vercel):

- Uygulama: <Vercel canlı URL>
- Kaynak kod: https://github.com/<kullanici>/goit-react-hw-07

## Özellikler

- **Kişi Ekleme:** İsim ve telefon numarası ile yeni kişiler ekleyin.
- **Kişi Silme:** Kişileri listeden kaldırın.
- **Kişi Filtreleme:** Kişileri isme göre gerçek zamanlı olarak arayın.
- **Form Doğrulama:** Girdi alanlarının doğru bir şekilde doldurulmasını sağlar (minimum 3, maksimum 50 karakter).
- **Backend Entegrasyonu:** Kişiler MockAPI backend üzerinde saklanır; istekler `axios` ile yapılır.

## Kullanılan Teknolojiler

- **Vite:** Modern web geliştirme için hızlı bir derleme aracı.
- **React:** Kullanıcı arayüzleri oluşturmak için bir JavaScript kütüphanesi.
- **Redux Toolkit:** Verimli Redux geliştirmesi için resmi, standartlaştırılmış araç seti.
- **React Redux:** Redux için resmi React bağlayıcıları.
- ~~Redux Persist~~ (kaldırıldı)
- **Formik:** React'te formlarla çalışmayı kolaylaştıran küçük bir kütüphane.
- **Yup:** Değer ayrıştırma ve doğrulama için bir JavaScript şema oluşturucu.
- **CSS Modülleri:** Yerel olarak kapsüllenmiş CSS için.
- **React Icons:** Popüler ikonları projeye dahil etmek için.

## Başlarken

Projeyi yerel makinenizde geliştirme ve test amacıyla çalıştırmak için aşağıdaki talimatları izleyin.

### Ön Gereksinimler

Makinenizde [Node.js](https://nodejs.org/) ve [npm](https://www.npmjs.com/) (veya [Yarn](https://yarnpkg.com/)) yüklü olmalıdır.

### Kurulum

1.  **Depoyu klonlayın:**
    ```sh
    git clone https://github.com/ohhamamcioglu/goit-react-hw-07.git
    ```
2.  **Proje dizinine gidin:**
    ```sh
    cd goit-react-hw-07
    ```
3.  **Bağımlılıkları yükleyin:**
    ```sh
    npm install
    ```

### Ortam Değişkeni (MockAPI)

Proje kökünde `.env` dosyası oluşturun ve kendi MockAPI taban URL'nizi girin:

```
VITE_API_BASE_URL=https://<your-id>.mockapi.io
```

MockAPI'de `contacts` kaynağını oluşturduğunuzdan emin olun. Uygulama `/contacts` uç noktasını çağırır.

### Uygulamayı Çalıştırma

Uygulamayı geliştirme modunda çalıştırmak için aşağıdaki komutu kullanın:

```sh
npm run dev
```

Tarayıcıda görüntülemek için [http://localhost:5173](http://localhost:5173) adresini (veya terminalinizde gösterilen adresi) açın. Değişiklik yaptığınızda sayfa otomatik olarak yeniden yüklenecektir.
