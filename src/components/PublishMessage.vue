<template>
  <div>
    <input v-model="value"/>
    <button @click="publish">Publish</button>
  </div>
</template>
<script>
import { ref } from 'vue';
import { usePublish } from '../PubSub/usePubSub';

export default {
  setup() {
    const publisher = usePublish('test_topic');
    const value = ref('');

    const publish = () => {
      publisher.publish(value.value);
    }

    return {
      publish,
      value
    }
  },
}
</script>
