import { useEffect } from "react";

const catalogItems = [
  {
    title: "Салфетки из джута",
    description: "Набор из 4 плетеных салфеток для теплой сервировки и защиты стола.",
    image: "/images/product-jute-napkins.jpg",
    alt: "Сервировочные салфетки из джута на столе",
  },
  {
    title: "Салфетки из гиацинта",
    description: "Фактурные салфетки из водного гиацинта для легкого эко-акцента в интерьере.",
    image: "/images/product-hyacinth-napkins.jpg",
    alt: "Плетеные салфетки из водного гиацинта",
  },
  {
    title: "Корзины для хранения",
    description: "Ручная работа из джута для аккуратного и эстетичного хранения дома.",
    image: "/images/product-baskets.jpg",
    alt: "Набор корзин для хранения из джута",
  },
  {
    title: "Пляжный набор",
    description: "Вместительная сумка, шоппер и косметичка для отпуска и городских прогулок.",
    image: "/images/product-beach-set.jpg",
    alt: "Пляжный набор из джута и хлопка",
  },
];

const benefits = [
  "Натуральные материалы",
  "Ручная эстетика",
  "Экологичность",
  "Уютный минимализм",
];

const galleryImages = [
  { src: "/images/gallery-table.jpg", alt: "Сервировка стола с натуральным декором" },
  { src: "/images/gallery-interior.jpg", alt: "Корзины из джута в домашнем интерьере" },
  { src: "/images/gallery-beach.jpg", alt: "Пляжная сумка из джута у моря" },
  { src: "/images/gallery-materials.jpg", alt: "Натуральные материалы крупным планом" },
  { src: "/images/product-jute-napkins.jpg", alt: "Круглые джутовые салфетки в сервировке" },
  { src: "/images/product-baskets.jpg", alt: "Плетеные корзины ручной работы" },
];

const reviews = [
  "Очень красивые салфетки. Стол сразу выглядит уютнее, а качество плетения отличное.",
  "Корзины плотные и аккуратные. Использую в спальне и на кухне, смотрятся стильно.",
  "Пляжный набор супер удобный. Вместительный, прочный и выглядит дорого.",
];

export default function App() {
  useEffect(() => {
    // Простое появление блоков при скролле без тяжелых библиотек.
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <header className="fixed top-0 z-40 w-full bg-[rgba(253,251,247,0.85)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#hero" className="font-['Playfair_Display'] text-2xl tracking-wide text-[var(--terracotta)]">
            АлисЁноК
          </a>
          <nav className="flex gap-3 overflow-x-auto whitespace-nowrap text-xs sm:gap-4 sm:text-sm md:gap-6">
            <a href="#about" className="transition-colors hover:text-[var(--terracotta)]">О бренде</a>
            <a href="#catalog" className="transition-colors hover:text-[var(--terracotta)]">Каталог</a>
            <a href="#gallery" className="transition-colors hover:text-[var(--terracotta)]">Галерея</a>
            <a href="#contacts" className="transition-colors hover:text-[var(--terracotta)]">Контакты</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="relative flex min-h-screen items-end overflow-hidden pt-20 md:items-center">
          <img
            src="/images/hero-alisenok.jpg"
            alt="Уютный интерьер с изделиями бренда АлисЁноК"
            className="hero-bg absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-5 pb-14 md:px-8 md:pb-20">
            <div className="reveal max-w-2xl space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--terracotta)]">Бренд АлисЁноК</p>
              <h1 className="font-['Playfair_Display'] text-4xl leading-tight text-[var(--text)] md:text-6xl">
                Эстетика природы в вашем доме
              </h1>
              <p className="max-w-xl text-base leading-relaxed md:text-lg">
                Натуральные изделия из джута и гиацинта для уюта, хранения и красивой сервировки.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#catalog" className="btn-primary">
                  Смотреть каталог
                </a>
                <a
                  href="https://www.wildberries.ru/brands/2690791-alisenok"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Перейти на Wildberries
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="reveal mb-10 max-w-2xl space-y-4">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl">Создано для теплых домов</h2>
            <p className="leading-relaxed">
              Мы создаем изделия из джута и водного гиацинта, чтобы в доме было больше спокойствия и тактильной
              красоты. Каждая форма, плетение и оттенок продуманы так, чтобы поддерживать натуральный, уютный и
              современный стиль жизни.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Натуральные волокна без лишней синтетики",
              "Ручная эстетика и аккуратное плетение",
              "Теплая палитра для спокойного интерьера",
            ].map((item) => (
              <article key={item} className="reveal about-tile">
                <div className="mb-3 h-11 w-11 rounded-full bg-[var(--beige)] p-2 text-[var(--terracotta)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-full w-full">
                    <path d="M4 12c3.5-4 6.5-5 8-5 4 0 8 3.5 8 8 0 3-2 5-5 5-4.5 0-6-4-11-4" />
                    <path d="M7 16s1.5 3 4 4" />
                  </svg>
                </div>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="catalog" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="reveal mb-10 max-w-2xl space-y-4">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl">Каталог</h2>
            <p>Выберите изделие для дома, подарка или летнего настроения.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {catalogItems.map((item) => (
              <article key={item.title} className="reveal product-item overflow-hidden rounded-3xl bg-[var(--accent)]">
                <img src={item.image} alt={item.alt} className="h-64 w-full object-cover md:h-72" loading="lazy" />
                <div className="space-y-4 p-6">
                  <h3 className="font-['Playfair_Display'] text-2xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed md:text-base">{item.description}</p>
                  <a
                    href="https://www.wildberries.ru/brands/2690791-alisenok"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Купить
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="reveal mb-10 max-w-2xl space-y-4">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl">Галерея Lifestyle</h2>
            <p>Естественные текстуры и уютные сцены в эстетике Pinterest.</p>
          </div>
          <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((image) => (
              <figure key={image.src} className="reveal gallery-item break-inside-avoid overflow-hidden rounded-2xl">
                <img src={image.src} alt={image.alt} className="w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="reveal mb-10 max-w-2xl space-y-4">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl">Преимущества</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit} className="reveal rounded-2xl bg-[var(--light-accent)] p-6">
                <p className="font-medium">{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="reveal mb-10 max-w-2xl space-y-4">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl">Отзывы</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review} className="reveal rounded-2xl bg-[var(--accent)] p-6 leading-relaxed">
                {review}
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer id="contacts" className="mt-8 bg-[var(--light-accent)] px-5 py-12 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <p className="font-['Playfair_Display'] text-3xl text-[var(--terracotta)]">АлисЁноК</p>
            <p className="max-w-md text-sm">Натуральные изделия для дома, сервировки и хранения в атмосфере уюта.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            <a href="https://www.wildberries.ru/brands/2690791-alisenok" target="_blank" rel="noreferrer" className="hover:text-[var(--terracotta)]">Wildberries</a>
            <a href="https://www.ozon.ru/seller/alisenok/" target="_blank" rel="noreferrer" className="hover:text-[var(--terracotta)]">Ozon</a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[var(--terracotta)]">Pinterest</a>
            <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-[var(--terracotta)]">Telegram</a>
            <a href="https://vk.com" target="_blank" rel="noreferrer" className="hover:text-[var(--terracotta)]">VK</a>
            <a href="mailto:hello@alisenok.ru" className="hover:text-[var(--terracotta)]">hello@alisenok.ru</a>
          </div>
        </div>
        <p className="mx-auto mt-10 w-full max-w-6xl border-t border-[rgba(58,58,58,0.15)] pt-5 text-xs">
          © {new Date().getFullYear()} АлисЁноК. Все права защищены.
        </p>
      </footer>
    </div>
  );
}
