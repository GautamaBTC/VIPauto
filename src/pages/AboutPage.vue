<template>
    <div class="about-page">
      <h1>О нас</h1>
      <p>Добро пожаловать в VIPauto — ведущий автосервисный центр с многолетним опытом.</p>
      <section>
        <h2>Наша миссия</h2>
        <p>Мы стремимся предоставлять качественные услуги и удовлетворять потребности каждого клиента.</p>
      </section>
      <section>
        <h2>Наши ценности</h2>
        <ul>
          <li>Профессионализм</li>
          <li>Честность</li>
          <li>Качество</li>
          <li>Индивидуальный подход</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style scoped>
  .about-page {
    max-width: 900px;
    margin: 2rem auto;
    font-family: 'Poppins', sans-serif;
    color: #333;
    padding: 1rem;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.8rem;
    margin-top: 1.5rem;
  }
  p, li {
    font-size: 1rem;
    line-height: 1.5;
  }
  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
  }
  </style>