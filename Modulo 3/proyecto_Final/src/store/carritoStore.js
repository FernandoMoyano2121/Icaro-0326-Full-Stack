import { create } from "zustand";

export const useCarritoStore = create((set, get) => ({
  //ESTADO
  items: [],

  //ACCIONES

  agregarProductos: (producto) =>
    set((state) => {
      //Verificar si el producto ya existe en el carrito
      const existe = state.items.find((item) => item.id === producto.id);

      if (existe) {
        return {
          items: state.items.map((item) =>
            item.id === producto.id
              ? // Copia las propiedades del item sin mutarlo y reemplaza cantidad por su valor actual + 1.
                { ...item, cantidad: item.cantidad + 1 }
              : item,
          ),
        };
      }

      return {
        // Copia los datos del producto y agrega cantidad inicial para guardarlo como item del carrito.
        items: [...state.items, { ...producto, cantidad: 1 }],
      };
    }),

  eliminarProducto: (productoId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productoId),
    })),

  actualizarCantidad: (productoId, cantidad) =>
    set((state) => ({
      items: state.items.map((item) =>
        // Conserva las demás propiedades del item y crea una copia con la cantidad actualizada.
        item.id === productoId ? { ...item, cantidad: cantidad } : item,
      ),
    })),

  vaciarCarrito: () => set({ items: [] }),

  getTotalItems: () => {
    const state = get();
    // Suma las cantidades de todos los items; 0 es el valor inicial si el carrito está vacío.
    return state.items.reduce(
      (accumulator, item) => accumulator + item.cantidad,
      0,
    );
  },

  getTotalPrecio: () => {
    const state = get();
    // Acumula el subtotal de cada item (precio por cantidad) para obtener el total del carrito.
    return state.items.reduce(
      (accumulator, item) => accumulator + item.precio * item.cantidad,
      0,
    );
  },
}));
