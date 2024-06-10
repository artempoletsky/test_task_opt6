<template>
  <div class="mb-10">
    <h2 class="text-xl font-bold mb-5.5 text-center">Плюсы использования сервиса «Компас» для анализа штрафов</h2>

    <div class="flex flex-wrap justify-between gap-[35px]">
      <div v-for="item in items" class="item">
        <Icon :img="item.icon" />
        <div class="ml-3">
          <div class="text-blue-700 font-bold mb-2">{{ item.title }}</div>
          <p class="text-sm">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

type Item = {
  icon: "infinity" | "bell" | "shield" | "arrowClock" | "receipt" | "eMap";
  title: string;
  description: string;
};

const items: Item[] = [
  {
    icon: "infinity",
    title: "Неограниченый автопарк",
    description: "Можно добавить неограниченное кол-во машин и водителей",
  },
  {
    icon: "eMap",
    title: "Сокращение затрат до 50%",
    description: "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
  },
  {
    icon: "shield",
    title: "Безопасность",
    description: "Данные передаются в зашифрованном виде, они доступны только получателю",
  },
  {
    icon: "bell",
    title: "Уведомление о погашении",
    description: "Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП",
  },
  {
    icon: "receipt",
    title: "Квитанция об оплате",
    description: "После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.",
  },
  {
    icon: "arrowClock",
    title: "Все история сохраняется по каждой машине",
    description: "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
  },
]
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  height: 151px;
  width: 362px;

  background: #FBFCFD;
  border: 1px solid #EEEFF1;
  border-radius: 10px;
  @apply px-4;
}
</style>