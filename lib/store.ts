import { reactive } from 'vue'

type Store = {
  popupContent?: "Youtube";
  ytUrl: string;
};

export const store = reactive<Store>({
  popupContent: undefined,
  ytUrl: "m97WlpsuU74",
});