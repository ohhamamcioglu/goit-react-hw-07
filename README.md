# Telefon Rehberi Uygulaması

Bu, React ile oluşturulmuş basit ve modern bir telefon rehberi yönetimi uygulamasıdır. Kullanıcıların kişileri eklemesine, silmesine ve filtrelemesine olanak tanır. Uygulama durumu Redux Toolkit ile yönetilirken, form doğrulamaları Formik ve Yup tarafından yapılmaktadır.

## Canlı Demo

[Uygulamanın canlı demosunu buradan görüntüleyebilirsiniz.](https://goit-react-hw-06-pi-nine.vercel.app/)

## Özellikler

-   **Kişi Ekleme:** İsim ve telefon numarası ile yeni kişiler ekleyin.
-   **Kişi Silme:** Kişileri listeden kaldırın.
-   **Kişi Filtreleme:** Kişileri isme göre gerçek zamanlı olarak arayın.
-   **Form Doğrulama:** Girdi alanlarının doğru bir şekilde doldurulmasını sağlar (minimum 3, maksimum 50 karakter).
-   **Kalıcı Durum (Persistent State):** Kişi listesi yerel depolamaya (local storage) kaydedilir, böylece sayfa yenilendikten sonra bile verileriniz kaybolmaz.

## Kullanılan Teknolojiler

-   **Vite:** Modern web geliştirme için hızlı bir derleme aracı.
-   **React:** Kullanıcı arayüzleri oluşturmak için bir JavaScript kütüphanesi.
-   **Redux Toolkit:** Verimli Redux geliştirmesi için resmi, standartlaştırılmış araç seti.
-   **React Redux:** Redux için resmi React bağlayıcıları.
-   **Redux Persist:** Redux durumunu kalıcı hale getirme ve yeniden yükleme.
-   **Formik:** React'te formlarla çalışmayı kolaylaştıran küçük bir kütüphane.
-   **Yup:** Değer ayrıştırma ve doğrulama için bir JavaScript şema oluşturucu.
-   **CSS Modülleri:** Yerel olarak kapsüllenmiş CSS için.
-   **React Icons:** Popüler ikonları projeye dahil etmek için.

## Başlarken

Projeyi yerel makinenizde geliştirme ve test amacıyla çalıştırmak için aşağıdaki talimatları izleyin.

### Ön Gereksinimler

Makinenizde [Node.js](https://nodejs.org/) ve [npm](https://www.npmjs.com/) (veya [Yarn](https://yarnpkg.com/)) yüklü olmalıdır.

### Kurulum

1.  **Depoyu klonlayın:**
    ```sh
    git clone https://github.com/ohhamamcioglu/goit-react-hw-06.git
    ```
2.  **Proje dizinine gidin:**
    ```sh
    cd goit-react-hw-06
    ```
3.  **Bağımlılıkları yükleyin:**
    ```sh
    npm install
    ```

### Uygulamayı Çalıştırma

Uygulamayı geliştirme modunda çalıştırmak için aşağıdaki komutu kullanın:

```sh
npm run dev
```

Tarayıcıda görüntülemek için [http://localhost:5173](http://localhost:5173) adresini (veya terminalinizde gösterilen adresi) açın. Değişiklik yaptığınızda sayfa otomatik olarak yeniden yüklenecektir.
