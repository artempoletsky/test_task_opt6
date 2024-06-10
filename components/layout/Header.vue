<template>
  <header>
    <div class="wrapper">
      <div class="left">
        <NuxtLink class="shrink-0" to="/"><img class="logo" alt="Compas logo" src="/logo.png" /></NuxtLink>
        <nav class="links">
          <NuxtLink class="link" to="/tariffs">Тарифы</NuxtLink>
          <NuxtLink class="link" to="/contacts">Контакты</NuxtLink>
        </nav>
      </div>
      <div class="right">
        <div class="phone">+7 495 118-44-22</div>
        <NuxtLink class="link" to="/signin">Вход</NuxtLink>
        <NuxtLink to="/registration"><Button look="header">Регистрация</Button></NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(90deg, #000000 30%, #1C2734 73%);
  color: #FFFFFF;
}

.wrapper {
  @apply max-w-page;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
}

.left {
  display: flex;
  align-items: center;
  height: 60px;
  flex-grow: 1;
  gap: 5px;
}

.right {
  display: flex;
  align-items: center;
  gap: 30px;
}

.logo {
  margin-right: 10px;
}

.links {
  display: flex;
  gap: 30px;
  margin-left: 20px;
}

.link {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.phone {
  font-weight: bold;
}

@media (max-width: 750px) {
  header {
    height: auto;
  }

  .wrapper {
    flex-direction: column;
    padding-bottom: 20px;
    padding-top: 20px;
  }

  .left {
    height: auto;
  }

  .left,
  .right,
  .links {
    flex-direction: column;
    align-items: center;
  }

  .links {
    gap: 5px;
    margin: 15px 0;
  }
  .right {
    gap: 10px;
  }

}
</style>