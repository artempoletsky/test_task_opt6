<template>
  <div class="flex mb-10 mt-[59px] gap-6">
    <form @submit="onSubmit" action="#" class="grow">
      <h2 class="text-2xl font-bold mb-4.5">Проверьте штрафы и зарегистрируйтесь в 1 клик</h2>
      <div class="flex gap-5">
        <TextInput class="grow" label="Номер автомобиля" v-bind="form.getInputProps('vehicleNumber')"
          v-on="form.getInputEvents('vehicleNumber')" />
        <TextInput class="w-[38%]" label="Регион" v-bind="form.getInputProps('region')"
          v-on="form.getInputEvents('region')" />
      </div>
      <TextInput label="Свидетельство о регистрации ТС" v-bind="form.getInputProps('deed')"
        v-on="form.getInputEvents('deed')" />
      <div class="flex gap-4">
        <Button type="submit">
          Проверить штрафы
          <Icon class="ml-1" img="arrow_right" />
        </Button>
        <Button look="bordered">
          <Icon class="mr-1 top-[-1px]" img="yt_border_blue" />
          О сервисе
          <span class="text-sm text-blue-700">({{ videoLen }})</span>
        </Button>
      </div>
      <div class="text-gray-400 text-[13px] mt-3">
        Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту
      </div>
    </form>
    <div class="shrink-0 pr-[28px]">
      <img class="w-[533px] h-[335px]" width="533" height="335" alt="Проверьте штрафы и зарегистрируйтесь в 1 клик"
        src="/pages/index/one_click_register/app_preview.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '~/lib/form';
import z from "zod";

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


</script>
