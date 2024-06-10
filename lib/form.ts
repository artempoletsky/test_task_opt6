import type { UnwrapNestedRefs } from "vue";
import type { ZodError, ZodObject } from "zod";


type UseFormOptions<Type extends Record<string, any>> = {
  initialValues: Type;
  zod?: ZodObject<any>;
}

export function useForm<T extends Record<string, any>>(options: UseFormOptions<T>) {
  return new FormHelper(options);
}

type FormState<T extends Record<string, any>> = {
  [P in keyof T]: {
    name: P;
    error?: string;
  }
}


type FormEvents<T extends Record<string, any>> = {
  [P in keyof T]: {
    keydown: (e: Event) => void;
  }
}


class FormHelper<T extends Record<string, any>> {
  private options: UseFormOptions<T>;
  private state: FormState<T>;
  private events: FormEvents<T>;
  constructor(options: UseFormOptions<T>) {
    this.options = options;
    const { initialValues } = options;
    const state: FormState<T> = {} as any;
    const events: FormEvents<T> = {} as any;
    for (const key in initialValues) {
      state[key] = {
        name: key,
      }
      events[key] = {
        keydown: (e) => {
          this.state[key].error = undefined;
        }
      }
    }
    this.state = reactive(state) as any;
    this.events = events;
  }

  getInputEvents<P extends keyof T>(key: P) {
    return this.events[key];
  }

  getInputProps<P extends keyof T>(key: P): FormState<T>[P] {
    return (this.state as any)[key];
  }

  onSubmit(fn: (values: T) => void) {
    // console.log(fn);

    return (e: Event) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      let values = {} as any;
      for (const [key, value] of formData.entries()) {
        values[key] = value;
      }
      if (this.options.zod) {
        try {
          values = this.options.zod.parse(values);
        } catch (err: any) {
          for (const issue of (err as ZodError).issues) {
            const path = issue.path[0] as string;
            this.state[path].error = issue.message;
          }
          return;
        }
      }
      fn(values);
      // console.log(Array.from(formData.entries()));
    }
  }
}