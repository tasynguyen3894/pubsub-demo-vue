import Publisher from "./Publisher"

import { onUnmounted, ref } from 'vue';
import Subscriber from "./Subscriber";

export const useSubscribe = (topic, callback) => {
  const subscriber = new Subscriber(topic, callback);
  subscriber.subscribe();

  const isSubscribing = ref(true);

  const unsubscribe = () => {
    subscriber.unsubscribe();
    isSubscribing.value = subscriber.isSubscribing;
  }

  const subscribe = () => {
    subscriber.subscribe();
    isSubscribing.value = subscriber.isSubscribing;
  }
  
  onUnmounted(() => {
    subscriber.unsubscribe();
  });

  return {
    subscribe,
    unsubscribe,
    isSubscribing
  };
}

export const usePublish = (topic) => {
  return new Publisher(topic);
}
