export default {
  template: `
    <div>
      <span class='count'> {{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
  `,

  data () {
    return {
      count: 1
    }
  },
  
  methods: {
    increment () {
      this.count++
    }
  }
}