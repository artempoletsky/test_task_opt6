<template>
  <div class="container">
    <div class="image_section_sm">
      <img class="img-full" alt="Проверьте штрафы и зарегистрируйтесь в 1 клик"
        src="/pages/index/one_click_register/app_preview.png" />
    </div>
    <form @submit="onSubmit" action="#" class="form">
      <h2 class="text-2xl font-bold mb-4.5">Проверьте штрафы и зарегистрируйтесь в 1 клик</h2>
      <div class="flex gap-5">
        <TextInput class="grow" label="Номер автомобиля" v-bind="form.getInputProps('vehicleNumber')"
          v-on="form.getInputEvents('vehicleNumber')" />
        <TextInput class="w-[38%]" label="Регион" v-bind="form.getInputProps('region')"
          v-on="form.getInputEvents('region')" />
      </div>
      <TextInput label="Свидетельство о регистрации ТС" v-bind="form.getInputProps('deed')"
        v-on="form.getInputEvents('deed')" />
      <div class="buttons">
        <Button type="submit">
          Проверить штрафы
          <Icon class="ml-1" img="arrow_right" />
        </Button>
        <Button @click="showYoutubePopup" look="bordered">
          <Icon class="mr-1 top-[-1px]" img="yt_border_blue" />
          О сервисе
          <span class="text-sm text-blue-700">({{ videoLen }})</span>
        </Button>
      </div>
      <div class="text-gray-400 text-[13px] mt-3">
        Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту
      </div>
    </form>
    <div class="image_section_lg">
      <img class="img-full" alt="Проверьте штрафы и зарегистрируйтесь в 1 клик"
        src="/pages/index/one_click_register/app_preview.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '~/lib/form';
import z from "zod";
import { store } from '~/lib/store';

const videoLen = "1 мин. 20 сек";

type FormType = {
  vehicleNumber: string;
  region: string;
  deed: string;
};

const zString = z.string().min(1, "Поле обязательно для заполнения");
const form = useForm<FormType>({
  initialValues: {
    vehicleNumber: "",
    region: "",
    deed: "",
  },
  zod: z.object({
    vehicleNumber: zString,
    region: zString,
    deed: zString,
  }),
});

const onSubmit = form.onSubmit((values: FormType) => {
  console.log(values);

  alert("Данные отправлены!");
});

const showYoutubePopup = () => {
  store.popupContent = "Youtube";
}


</script>
<style scoped>
.container {
  @apply mb-10 gap-6;
  display: flex;
  margin-top: 60px;
}

.img-full {
  width: 100%;
  height: auto;
}

.form {
  width: 563px;
  flex-shrink: 0;
}

.image_section_lg {
  flex-shrink: 0;
  padding-right: 28px;
}

.image_section_sm {
  margin: 0 auto;
  @apply mb-3;
  max-width: 550px;
}

.buttons {
  @apply flex gap-4;
}

@media (min-width: 1130px) {
  .image_section_sm {
    display: none;
  }
}

@media (max-width: 1130px) {
  .form {
    max-width: 700px;
    width: auto;
  }

  .image_section_lg {
    display: none;
  }

  .container {
    display: block;
    margin-top: 20px;
  }
}

@media (max-width: 535px) {
  .buttons {
    flex-direction: column;
    max-width: 300px;
    /* margin: 0 auto; */
  }

  h2 {
    font-size: 28px;
  }
}
</style>