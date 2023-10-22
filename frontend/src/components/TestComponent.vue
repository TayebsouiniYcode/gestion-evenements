<template>
   <div>
      <ul>
        <li>
            <span>This is data {{ data }}</span>

         </li>
      </ul>
   </div>
</template>

<script>
import testService from '@/services/testService';

export default {
  data() {
    return {
      data: null,
    };
  },
  async created() {
      try {
         this.data = await testService.getTestFromLaravel();
      } catch (error) {
         console.error('An error occurred:', error);
      }
   },
};
</script>


