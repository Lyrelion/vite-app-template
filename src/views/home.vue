<template>
  <div>
    <h2>首页</h2>
    <br />
    <span>{{ `通过 state 获取的 store 数据，没有及时更新 ${storeNum}` }}</span>
    <br />
    <span>{{ `直接使用 store 数据，可以及时更新 ${store.state.num}` }}</span>
    <br />
    <el-button @click="changeStore">测试 elementplus 组件库效果</el-button>
    <br />
  </div>
</template>

<script lang="ts">
import {
  reactive, toRefs, defineComponent,
} from 'vue';
import store from '../store'

export default defineComponent({
  name: 'Home',
  components: {},
  setup(props: any, context: any) {
    const state = reactive({
      storeNum: store.state.num,
    });

    const changeStore = () => {
      console.log(store.state.num);
      store.commit("addNum");
      console.log(store.state.num);
    };
    
    return {
      ...toRefs(state),
      changeStore,
      store,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
