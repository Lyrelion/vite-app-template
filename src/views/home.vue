<template>
  <div class="">
    首页
  </div>
</template>

<script lang="ts">
import {
  reactive, toRefs, defineComponent,
} from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
  setup(props: any, context: any) {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
