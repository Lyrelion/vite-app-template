<template>
  <div>
    <h2>首页</h2>
    <img :src="imgTest"/>
    <br />
    <span>{{ `通过 state 获取的 store 数据，没有及时更新 ${storeNum}` }}</span>
    <br />
    <span>{{ `直接使用 store 数据，可以及时更新 ${store.state.num}` }}</span>
    <br />
    <el-button @click="changeStore">测试 elementplus 组件库效果</el-button>
    <br />
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, defineComponent } from 'vue';
import * as _ from 'lodash';
import store from '../store';
import http from '@/utils/http';
// vite 项目中，只能使用 import 导入图片,不能使用 require 导入图片
import logoPng from '@/assets/logo.png';

export default defineComponent({
  name: 'Home',
  components: {},
  setup(props: any, context: any) {
    const state = reactive({
      storeNum: store.state.num,
    });

    // const imgTest = require('@/assets/logo.png');
    const imgTest = logoPng;

    const changeStore = () => {
      console.log(store.state.num);
      store.commit('addNum');
      console.log(store.state.num);
    };

    http
      .get('/getUserInfo')
      .then((res) => {
        console.log('res ===', res);
      })
      .catch((err) => {
        console.log('err ===', err);
      });

    const deepCopyTest = {
      prototype: {
        protoTypeInner: {
          value: '111',
          list: [
            {
              code: 'aaa',
              startTime: new Date(),
            },
          ],
        },
      },
    };

    console.log('测试 lodash 深拷贝', _.cloneDeep(deepCopyTest));

    return {
      ...toRefs(state),
      changeStore,
      store,
      imgTest,
    };
  },
});
</script>

<style lang='scss' scoped></style>
