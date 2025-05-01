<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Логотип -->
      <div class="navbar-logo">
        <router-link to="/" class="logo-link" aria-label="Перейти на главную страницу">
          <span class="vipauto">
            <span class="text-vip">VIP</span>
            <span class="text-auto">auto</span>
          </span>
        </router-link>
        <div class="service-center">Автосервисный центр</div>
      </div>

      <!-- Меню -->
      <ul class="navbar-menu">
        <li><router-link to="/services" exact-active-class="active-link">Услуги</router-link></li>
        <li><router-link to="/shop" exact-active-class="active-link">Магазин</router-link></li>
        <li><router-link to="/contacts" exact-active-class="active-link">Контакты</router-link></li>
        <li><router-link to="/about" exact-active-class="active-link">О нас</router-link></li>
      </ul>

      <!-- Справа телефон и кнопка -->
      <div class="navbar-right">
        <div class="phone" aria-label="Номер телефона">8 928 777 70 09</div>
        <router-link to="/booking" class="btn-text-gradient">Записаться онлайн</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavBar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap");

.navbar {
  position: sticky;
  top: 0;
  background-color: #1f1f1f;
  font-family: "Poppins", sans-serif;
  height: 60px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0 0 0 / 0.5);
  z-index: 1100;
  padding: 0;
}

.navbar-container {
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0;
}

.navbar-logo {
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
  justify-content: center;
  line-height: 1;
  position: relative;
  z-index: 2;
}

.logo-link {
  text-decoration: none !important;
  text-shadow: none !important;
  user-select: none;
}

.vipauto {
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 1;
  user-select: none;
  color: white;
}

/* Основной элемент с градиентом и свечением */
.text-vip {
  position: relative;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  user-select: none;
  cursor: pointer;

  background-image:
    linear-gradient(
      270deg,
      #FFD700,
      #DAA520,
      #CD7F32,
      #DAA520,
      #FFD700
    );

  background-repeat: repeat;

  background-size: 200% 100%;

  background-position: 0% 50%;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  animation:
    gradientShift 7.2s linear infinite,
    glowEffect 3s ease-in-out infinite alternate;
}

/* Псевдоэлемент для блика внутри букв VIP */
.text-vip::before {
  content: "VIP";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 15%,
    rgba(255, 255, 255, 0.7) 30%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0.7) 70%,
    rgba(255, 255, 255, 0.2) 85%,
    transparent 100%
  );
  background-repeat: no-repeat;
  background-size: 30% 100%;
  background-position: -60% -50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: vipShine 9s ease-in-out infinite;
}

/* Плавный сдвиг градиента с зацикливанием */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

/* Анимация свечения вокруг букв */
@keyframes glowEffect {
  0% {
    text-shadow:
      0 0 2.5px rgba(255, 215, 0, 0.25),
      0 0 5px rgba(255, 215, 0, 0.15);
  }
  100% {
    text-shadow:
      0 0 5px rgba(255, 215, 0, 0.4),
      0 0 10px rgba(255, 215, 0, 0.25),
      0 0 15px rgba(255, 215, 0, 0.15);
  }
}

/* Анимация блика под углом 120 градусов */
@keyframes vipShine {
  0% {
    background-position: -60% -50%;
  }
  10% {
    background-position: 50% 0%;
  }
  20% {
    background-position: 150% 50%;
  }
  100% {
    background-position: 150% 50%;
  }
}

.text-auto {
  color: #fff;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1;
  margin-left: 2px;
}

.service-center {
  color: #fff;
  font-size: 0.9rem;
  margin-top: 4px !important;
  line-height: 1 !important;
  white-space: nowrap;
  position: relative;
  z-index: 2;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
}

.navbar-menu li a {
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;
  line-height: 60px;
  user-select: none;
  position: relative;
  background-clip: text;
}

.navbar-menu li a:hover {
  animation: gradientShift 3.2s linear infinite;
  background: linear-gradient(
    270deg,
    #8e6ff7,
    #4facfe,
    #b255ff,
    #e540d7,
    #b255ff,
    #4facfe,
    #8e6ff7
  );
  background-size: 500% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  color: transparent;
  transform: scale(1.05);
  z-index: 3;
}

.navbar-menu li a.active-link {
  color: #fff;
  cursor: default;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.navbar-menu li a.active-link:hover {
  transform: scale(1.05);
  z-index: 3;
  text-shadow:
    0 0 8px #b255ffaa,
    0 0 15px #e540d799,
    0 0 24px #b255ffbb;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 60px;
  user-select: none;
}

.phone {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  line-height: 60px;
}

.btn-text-gradient {
  font-weight: 700;
  font-size: 1rem;
  background: linear-gradient(
    270deg,
    #8e6ff7,
    #4facfe,
    #b255ff,
    #e540d7,
    #b255ff,
    #4facfe,
    #8e6ff7
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  text-decoration: none;
  line-height: 60px;
  position: relative;
  transition: text-shadow 0.3s ease;
  animation: gradientShift 3.2s linear infinite;
}

.btn-text-gradient:hover,
.btn-text-gradient:focus-visible {
  text-shadow:
    0 0 12px #b255ff,
    0 0 25px #b255ffcc,
    0 0 40px #e540d7dd;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .navbar-container {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }

  .navbar-menu,
  .navbar-right {
    display: none;
  }
}
</style>