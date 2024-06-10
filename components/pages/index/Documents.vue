<template>
  <div class="mb-10">
    <h2 class="text-xl font-bold mb-5 text-center">Документы</h2>
    <!-- <Carousel gap="gap-[35px]">
      <div v-for="item in items" class="item">
        <div class="text-blue-700 text-[31px] font-bold">{{ item.title }}</div>
        <div class="">{{ item.description }}</div>
      </div>
    </Carousel> -->

    <carousel ref="myCarousel" :itemsToShow="itemsToShow">
      <slide v-for="(item, index) in items" :key="index">
        <div class="item flex flex-col">
          <div class="text-blue-700 text-[31px] font-bold mb-[10px]">{{ item.title }}</div>
          <div class="grow">{{ item.description }}</div>
          <NuxtLink class="w-full" to="/documents/example"><Button class="w-full">Перейти</Button></NuxtLink>
        </div>
      </slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </carousel>
  </div>
</template>


<script setup lang="ts">

import { ref } from 'vue';
const myCarousel = ref<any>(null);

let itemsToShow = ref(3);

onMounted(() => {
  calculateItemsToShow();
  // 
  window.addEventListener("resize", calculateItemsToShow);
});

function calculateItemsToShow() {
  // console.dir();
  const carousel = myCarousel.value;

  const el: HTMLDivElement = carousel.$el;
  // console.log(el.clientWidth);
  // console.log(Math.floor(el.clientWidth / 300));

  itemsToShow.value = Math.floor(el.clientWidth / 300);
  myCarousel.value.restartCarousel();
}


type Item = {
  title: string;
  description: string;
};

const items: Item[] = [
  {
    title: "Лицензионный договор",
    description: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
  },
  {
    title: "Политика обработки персональных данных",
    description: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",
  },
  {
    title: "Информация об оплате",
    description: "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
  },
  {
    title: "Политика обработки персональных данных",
    description: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",
  },
  {
    title: "Информация об оплате",
    description: "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
  },
]

</script>

<style scoped>
.item {
  width: 340px;
  height: 450px;

  background: #FFFFFF;
  border: 1px solid #EEEFF1;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 10px;
  text-align: left;
}
</style>
