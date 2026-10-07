import { create } from "zustand";

export const useTemaStore = create((set) => ({
  //ESTADO INICIAL
  darkMode: false,

  //ACCIONES
  toggleTema: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),
}));
