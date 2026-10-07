import { create } from "zustand";

export const useContadorStore = create((set) => ({
  //ESTADO INICIAL
  contador: 0,

  //ACCIONES
  incrementar: () =>
    set((state) => ({
      contador: state.contador + 1,
    })),

  decrementar: () =>
    set((state) => ({
      contador: state.contador - 1,
    })),

  resetear: () =>
    set(() => ({
      contador: 0,
    })),
}));
