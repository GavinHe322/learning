<template>
    <!-- <div>
        <p>
            <router-link to="/newslist">新闻列表</router-link>&nbsp;&nbsp;&nbsp;
            <router-link to="/goodslist">商品列表</router-link>
        </p>
        <router-view></router-view>
        <button @click="addNews('华为5G大胜美国')">新增新闻</button>&nbsp;&nbsp;<button @click="addGoods('狗不理包子')">新增商品</button>
        <hr />
        <div id="test">测试</div>
        <div id="img"></div>
        <div id="myless">测试less</div>
    </div> -->
    <div>
        <span>count is {{ count }}</span>
        <span>plusOne is {{ plusOne }}</span>
        <button @click="increment">count++</button>
    </div>
</template>

<script>
import { plugin, value, computed, watch, onMounted } from 'vue-function-api'
// import {mapActions} from 'vuex'
// export default {
//     methods:{
//         ...mapActions({
//             addNews:'news/asyncAddNews',
//             addGoods:'goods/asyncAddGoods'
//         })
//     }
// }
export default {
     setup() {
        // reactive state
        const count = value(0)
        // computed state
        const plusOne = computed(() => count.value + 1)
        // method
        const increment = () => {
            count.value ++
        }
        watch(
            () => count.value * 2,
            val => {
                console.log(`count * 2 is ${val}`)
            }
        );
        // lifecycle
        onMounted(() => {
            console.log(`mounted`)
        })
        return {
            count,
            plusOne,
            increment
        }
    }
}
</script>

<style scoped>
    @import "./App.css";
</style>