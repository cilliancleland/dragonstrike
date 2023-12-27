<template>
  <div class="leftright">
    <h3>
      {{ dragon.age }} {{ dragon.race }} Dragon ({{ dragon.element }})
    </h3>
    <div>
      {{ totalCost }} Pts.
      <button type="button" class="trash" @click="myRemoveDragon">
        x
      </button>
    </div>
  </div>
</template>
<script>
// import {reactive} from 'vue';
import { dragonCost } from '../data/helpers';
// import {
//   racialTraits,
//   racialElements,
// } from '../data/data';

export default {
  name: 'dragonHead',
  props: {
    dragon: {
      type: Object,
      required: true,
    },
    funcs:  {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const myRemoveDragon = () => {
      props.funcs.removeDragon(props.dragon.id);
    };
    return {
      myRemoveDragon,
    };
  },
  computed: {
    totalCost() {
      return dragonCost(this.dragon);
    },
  },
};
</script>

<style scoped>

</style>