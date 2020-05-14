import { mount } from '@vue/test-utils'
import Counter from '../components/counter'

const wrapper = mount(Counter)

const vm = wrapper.vm

console.log(mount)
