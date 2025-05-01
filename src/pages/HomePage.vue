<template>
  <div class="page-container">
    <!-- Навигация -->
    <header class="header">
      <nav class="nav">
        <div class="nav__logo" aria-label="Логотип VIP Auto">
          VIP<span>auto</span>
        </div>
        <ul class="nav__list">
          <li><a href="#services" class="nav__link">Услуги</a></li>
          <li><a href="#principles" class="nav__link">Принципы</a></li>
          <li><a href="#contacts" class="nav__link">Контакты</a></li>
        </ul>
      </nav>
      <!-- Плавающая кнопка связи (WhatsApp) -->
      <a
        href="https://wa.me/79287777009"
        target="_blank"
        rel="noopener"
        class="floating-contact"
        aria-label="Связаться через WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#4FACFE" viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
          <path
            d="M20.52 3.48a11.85 11.85 0 00-16.79 16.8l-1.7 6.18 6.36-1.67a11.86 11.86 0 0012.13-20.81zm-8.92 14.48a6.4 6.4 0 01-3.45-1.04l-.24-.15-2.06.54.55-2.01-.18-.27a6.49 6.49 0 1115 1.2 6.43 6.43 0 01-9.62.73z"
          />
        </svg>
      </a>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__content" v-intersect="fadeInUp">
        <h1 class="hero__title gradient-text">
          Премиальный <br />
          автосервис <br />
          для <span>VIP</span> вашего авто
        </h1>
        <p class="hero__subtitle">
          Забота, технологии и качество высочайшего уровня — доверьте свой автомобиль настоящим
          профессионалам.
        </p>
        <div class="hero__actions">
          <button class="btn btn--gradient" @click="$router.push('/booking')">Записаться онлайн</button>
          <button class="btn btn--outline" @click="$router.push('/services')">Узнать больше</button>
        </div>
      </div>
      <div class="hero__image" v-intersect="fadeInScale">
        <svg viewBox="0 0 600 400" class="hero__svg" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="UVGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#6a0dad" />
              <stop offset="100%" stop-color="#4facfe" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#6a0dad" flood-opacity="0.6" />
              <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#4facfe" flood-opacity="0.3" />
            </filter>
          </defs>
          <circle cx="300" cy="200" r="120" fill="url(#UVGradient)" filter="url(#glow)"/>
          <path d="M200 300 Q300 150 400 300" stroke="#b255ff" stroke-width="4" fill="none" />
          <circle cx="300" cy="200" r="80" stroke="#ffffffaa" stroke-width="2" fill="none" />
        </svg>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services section">
      <h2 class="section__title" v-intersect="fadeInUp">Наши услуги</h2>
      <div class="services__list">
        <div class="service" v-intersect="fadeInUp" v-for="(service, i) in services" :key="i">
          <div class="service__number">{{ i + 1 }}</div>
          <h3 class="service__title">{{ service.title }}</h3>
          <p class="service__description">{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Principles Section -->
    <section id="principles" class="principles section section--dark">
      <h2 class="section__title section__title--light" v-intersect="fadeInUp">Наши принципы</h2>
      <div class="principles__list">
        <div class="principle" v-intersect="fadeInUp" v-for="(item, i) in principles" :key="i">
          <div class="principle__number gradient-text">0{{ i + 1 }}</div>
          <h3 class="principle__title">{{ item.title }}</h3>
          <p class="principle__description">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer id="contacts" class="footer">
      <div class="footer__content">
        <div class="footer__contacts">
          <h3>Контакты</h3>
          <p>г. Москва, ул. Примерная, д. 1</p>
          <p>Телефон: +7 928 777 7009</p>
          <p>Email: info@vipauto.ru</p>
          <div class="footer__socials">
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener">
              <svg aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm4.5-1.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener">
              <svg aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12a10 10 0 10-11.5 9.87v-7.02h-2.85v-2.85h2.85V9.64c0-2.82 1.68-4.37 4.27-4.37 1.24 0 2.53.22 2.53.22v2.79h-1.43c-1.41 0-1.85.88-1.85 1.78v2.13h3.16l-.51 2.85h-2.65v7.02A10 10 0 0022 12z"
                />
              </svg>
            </a>
          </div>
        </div>
        <button
          class="btn-floating-contact"
          aria-label="Связаться через WhatsApp"
          @click="openWhatsapp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4FACFE" viewBox="0 0 24 24" width="32" height="32" aria-hidden="true" focusable="false">
            <path
              d="M20.52 3.48a11.85 11.85 0 00-16.79 16.8l-1.7 6.18 6.36-1.67a11.86 11.86 0 0012.13-20.81zm-8.92 14.48a6.4 6.4 0 01-3.45-1.04l-.24-.15-2.06.54.55-2.01-.18-.27a6.49 6.49 0 1115 1.2 6.43 6.43 0 01-9.62.73z"
            />
          </svg>
        </button>
      </div>
      <div class="footer__gradient-line"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'VIPHomePage',
  data() {
    return {
      services: [
        {
          title: 'Диагностика и ремонт',
          description: 'Современное оборудование для точной диагностики и качественного ремонта.',
        },
        {
          title: 'Техническое обслуживание',
          description: 'Регулярное ТО для надежности и безопасности вашего автомобиля.',
        },
        {
          title: 'Кузовные работы',
          description: 'Восстановление внешнего вида с использованием эксклюзивных материалов.',
        },
      ],
      principles: [
        {
          title: 'Профессионализм',
          description: 'Только высококвалифицированные специалисты с опытом работы более 10 лет.',
        },
        {
          title: 'Индивидуальный подход',
          description: 'Персональные решения, учитывающие особенности каждого клиента.',
        },
        {
          title: 'Гарантия качества',
          description: 'Используем только оригинальные запчасти с официальной гарантией.',
        },
      ],
    };
  },
  methods: {
    fadeInUp(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 100);
    },
    fadeInScale(el) {
      el.style.opacity = 0;
      el.style.transform = 'scale(0.95)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.opacity = 1;
        el.style.transform = 'scale(1)';
      }, 100);
    },
    openWhatsapp() {
      window.open('https://wa.me/79287777009', '_blank');
    },
  },
  directives: {
    intersect: {
      mounted(el, binding) {
        const callback = binding.value;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              callback(el);
              observer.unobserve(el);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
      },
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:color";

$page-background: #0b0a12;
$gradient-start: #6a0dad;
$gradient-end: #4facfe;
$text-color-light: #f5f5f7;
$accent-purple: #b255ff;

.page-container {
  background-color: $page-background;
  min-height: 100vh;
  color: $text-color-light;
  font-family: "Montserrat", "Poppins", sans-serif;
  line-height: 1.5;
  overflow-x: hidden;
}

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: $page-background;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(75, 172, 254, 0.15);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
}

.nav__logo {
  font-weight: 900;
  font-size: 2rem;
  letter-spacing: 0.03em;
  color: $accent-purple;

  span {
    font-weight: 400;
    color: $text-color-light;
    margin-left: 6px;
  }
}

.nav__list {
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin: 0;

  .nav__link {
    color: $text-color-light;
    font-size: 1rem;
    text-decoration: none;
    position: relative;
    padding: 5px 0;
    font-weight: 500;
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: linear-gradient(90deg, $gradient-start, $gradient-end);
      transition: width 0.3s ease;
      border-radius: 1px;
    }

    &:hover,
    &.active-link {
      color: $gradient-end;

      &::after {
        width: 100%;
      }
    }
  }
}

.floating-contact {
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: linear-gradient(135deg, $gradient-start, $gradient-end);
  padding: 0.6rem;
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba($gradient-end, 0.5);
  cursor: pointer;
  transition: transform 0.2s ease;
  z-index: 1100;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    display: block;
  }
}

/* Hero */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1320px;
  margin: 3rem auto 5rem;
  padding: 0 2rem;

  &__content {
    max-width: 600px;
  }

  &__title {
    font-weight: 900;
    font-size: 3.6rem;
    line-height: 1.1;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;

    span {
      background: linear-gradient(135deg, $gradient-start, $gradient-end);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }
  }

  &__subtitle {
    font-size: 1.25rem;
    color: color.adjust($text-color-light, $lightness: 10%);
    margin-bottom: 2.5rem;
  }

  &__actions {
    display: flex;
    gap: 1rem;

    .btn {
      padding: 0.75rem 2.5rem;
      border-radius: 30px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: background-position 0.3s ease;

      &--gradient {
        background: linear-gradient(135deg, $gradient-start, $gradient-end);
        color: white;
        border: none;
        background-size: 200% 200%;
        background-position: 0% 50%;

        &:hover {
          background-position: 100% 50%;
        }
      }

      &--outline {
        background: transparent;
        color: $gradient-end;
        border: 2px solid $gradient-end;

        &:hover {
          background: $gradient-end;
          color: white;
        }
      }
    }
  }

  &__image {
    max-width: 560px;
    flex-shrink: 0;
    filter: drop-shadow(0 10px 20px rgba(75, 172, 254, 0.25));
  }
}

/* Services */
.section {
  max-width: 1320px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
}

.section__title {
  font-weight: 800;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3.5rem;
  color: $gradient-end;
}

.services__list {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.service {
  flex: 1 1 30%;
  background: rgba(75, 172, 254, 0.1);
  padding: 2rem;
  border-radius: 20px;
  min-width: 260px;
  box-shadow: 0 0 30px rgba(75, 172, 254, 0.07);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  &__number {
    font-weight: 900;
    font-size: 3rem;
    background: linear-gradient(135deg, $gradient-start, $gradient-end);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  &__description {
    font-size: 1rem;
    color: color.adjust($text-color-light, $lightness: 30%);
  }
}

/* Principles */
.section--dark {
  background-color: #12101f;
  padding: 4rem 2rem;
  color: color.adjust($text-color-light, $lightness: 10%);
  border-radius: 30px;
  max-width: 1320px;
  margin: 0 auto 5rem;
}

.section__title--light {
  color: $gradient-end;
  margin-bottom: 4rem;
}

.principles__list {
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  flex-wrap: wrap;
}

.principle {
  flex: 1 1 30%;
  min-width: 260px;
  background: #1c1831;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 0 15px rgba(178, 85, 255, 0.3);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 25px rgba(178, 85, 255, 0.6);
  }

  &__number {
    font-size: 4rem;
    font-weight: 900;
    background: linear-gradient(135deg, $gradient-start, $gradient-end);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__description {
    font-size: 1rem;
    color: color.adjust($text-color-light, $lightness: 40%);
  }
}

/* Footer */
.footer {
  background-color: #0b0a12;
  padding: 3rem 2rem 2.5rem;
  position: relative;
  text-align: center;
  color: $text-color-light;
  font-size: 0.9rem;
  max-width: 1320px;
  margin: 0 auto;
  border-radius: 0 0 30px 30px;
}

.footer__content {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
}

.footer__contacts h3 {
  margin-bottom: 1rem;
  font-weight: 700;
  color: $gradient-end;
}

.footer__contacts p {
  margin: 0.3rem 0;
}

.footer__socials {
  margin-top: 1rem;

  a {
    color: $gradient-end;
    margin: 0 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: color.adjust($gradient-end, $lightness: 15%);
    }

    svg {
      fill: currentColor;
      width: 24px;
      height: 24px;
    }
  }
}

.btn-floating-contact {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: linear-gradient(135deg, $gradient-start, $gradient-end);
  border-radius: 50%;
  padding: 0.8rem;
  box-shadow: 0 8px 20px rgba(#4facfe, 0.4);
  cursor: pointer;
  transition: transform 0.2s ease;
  z-index: 1500;
  border: none;

  &:hover,
  &:focus {
    transform: scale(1.1);
    outline: none;
  }
  svg {
    width: 32px;
    height: 32px;
    display: block;
  }
}

/* Gradient line at footer bottom */
.footer__gradient-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6px;
  border-radius: 0 0 30px 30px;
  background: linear-gradient(90deg, $gradient-start, $gradient-end);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    margin-bottom: 3rem;

    &__image {
      margin-bottom: 2rem;
      max-width: 90vw;
    }
  }

  .services__list,
  .principles__list {
    flex-direction: column;
    gap: 2.5rem;
  }

  .principle,
  .service {
    min-width: 100%;
  }

  .footer__content {
    flex-direction: column;
    gap: 1.5rem;
  }

  .nav__list {
    gap: 1.5rem;
  }

  .floating-contact,
  .btn-floating-contact {
    bottom: 16px;
    right: 16px;
  }
}
</style>
