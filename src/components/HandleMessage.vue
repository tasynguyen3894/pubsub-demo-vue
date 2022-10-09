<template>
  <div>
    <div>Handle message component</div>
    <div>{{ value }}</div>
    <div>
      <button @click="subscribe">Subscribe</button>
      <button @click="unsubscribe">Unsubscribe</button>
      <div v-if="isSubscribing">Is subscribing</div>
      <div v-else>Is not subscribing</div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useSubscribe } from '../PubSub/usePubSub';

export default {
  setup() {
    const {
    subscribe,
    unsubscribe,
    isSubscribing
  } = useSubscribe('test_topic', (message) => {
        value.value = message;
    });
    const value = ref('');

    return {
      value,
      subscribe,
      unsubscribe,
      isSubscribing
    }
  },
}
</script>