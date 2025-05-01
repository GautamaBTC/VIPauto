<template>
  <footer class="footer">
    <section class="footer-content">
      <article>
        <h3>VIPAuto</h3>
        <p>Мы предоставляем лучший сервис по ремонту и обслуживанию автомобилей.</p>
      </article>
      <article>
        <h4>Контакты</h4>
        <ul>
          <li>📞 +7 (999) 123-45-67</li>
          <li>📧 info@vipauto.ru</li>
          <li>📍 Москва, ул. Примерная</li>
        </ul>
      </article>
      <article>
        <h4>Работаем</h4>
        <p>Пн-Пт 09:00–20:00<br>Сб-Вс 10:00–18:00</p>
      </article>
    </section>
    <p class="footer-copyright">
      &copy; 2024 VIPAuto. Все права защищены.
    </p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background: #1f1f1f;
  color: #cfcfcf;
  padding: 2rem;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content article h3,
.footer-content article h4 {
  color: #8A2BE2;
  margin-bottom: 0.5rem;
}
</style>