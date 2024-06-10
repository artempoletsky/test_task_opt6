import { reactive } from 'vue'

type Store = {
  popupContent?: "Youtube"
};

export const store = reactive<Store>({
  popupContent: undefined,
});