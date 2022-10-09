import PubSub from 'pubsub-js';

class Publisher {
  topic = null;

  constructor(topic) {
    this.topic = topic
  }

  publish(message) {
    PubSub.publish(this.topic, message);
  }
}

export default Publisher;
