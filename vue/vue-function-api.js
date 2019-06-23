import Vue from 'vue'
import { plugin, value, computed, watch, onMounted } from 'vue-function-api'


Vue.use(plugin)

new Vue({
    template: `
        <div>
            <span>count is {{ count }}</span>
            <span>plusOne is {{ plusOne }}</span>
            <button @click="increment">count++</button>
        </div>
    `,
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
}).$mount("#app")