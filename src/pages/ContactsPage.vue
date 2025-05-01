<template>
    <main class="contacts-page">
      <!-- Заголовок -->
      <section class="contacts-header">
        <h1>Контакты</h1>
        <p>Мы всегда рядом! Свяжитесь с нами удобным для вас способом.</p>
      </section>
  
      <!-- Карта -->
      <section class="contacts-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."
          style="border:0;"
          allowfullscreen
          loading="lazy"
          aria-hidden="false"
          tabindex="0"
          class="map-iframe"
        ></iframe>
      </section>
  
      <!-- Данные контактов -->
      <section class="contacts-info">
        <article class="contacts-card">
          <h2>Наши контакты</h2>
          <ul>
            <li>📞 Телефон: +7 (999) 123-45-67</li>
            <li>📧 Email: info@vipauto.ru</li>
            <li>📍 Адрес: Москва, ул. Примерная, д. 10</li>
            <li>🕒 Часы работы: Пн-Пт 09:00–20:00, Сб-Вс 10:00–18:00</li>
          </ul>
        </article>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: "ContactsPage",
  };
  </script>
  
  <style scoped>
  .contacts-page {
    padding: 2rem;
    background: #1f1f1f;
    color: #e8e8e8;
    font-family: 'Montserrat', sans-serif;
  }
  
  .contacts-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .contacts-header h1 {
    font-size: 2.5rem;
    color: #8A2BE2;
  }
  
  .contacts-header p {
    font-size: 1.25rem;
    color: #cfcfcf;
  }
  
  .contacts-map {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .map-iframe {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    border: none;
  }
  
  .contacts-info {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }
  
  .contacts-card,
  .contacts-form {
    background: rgba(31, 31, 31, 0.9);
    padding: 2rem;
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
  }
  
  .contacts-card ul {
    list-style: none;
  }
  </style>