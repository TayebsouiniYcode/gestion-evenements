import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),

    getters: {
        cartTotal() {
            return this.items.reduce((total, item) => total + item.quantity, 0);
        },
    },

    actions: {
        addToCart(id, quantity) {
            const existingItem = this.items.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.items.push({ id, quantity });
            }
        },

        removeFromCart(id) {
            const index = this.items.findIndex((item) => item.id === id);

            if (index !== -1) {
                this.items.splice(index, 1);
            }
        },
    },
});