<template>
  <div>
    <p>Cart Total: {{ cartTotal }}</p>
  </div>
</template>

<script>
import { useCartStore } from "@/states/panier";

export default {
  name: "PanierView",
  computed: {
    cartTotal() {
      return useCartStore().cartTotal;
    },
  },
};
</script>