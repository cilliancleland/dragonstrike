<template>
  <div class="leftright">
    <h3>
      {{ dragon.age }} {{ dragon.race }} Dragon ({{ dragon.element }})
    </h3>
    <div class="leftright">
      <div>&nbsp;<strong>POT:</strong>{{ dragon.pot }}&nbsp;</div>
      <div>&nbsp;<strong>FLI:</strong>{{ dragon.fli }}&nbsp;</div>
      <div>&nbsp;<strong>WND:</strong>{{ dragon.wnd }}&nbsp;</div>
    </div>
    <div>
      {{ totalCost }} Pts.
      <button type="button" class="trash" @click="myRemoveDragon">
        x
      </button>
    </div>
  </div>
</template>
<script>
import { dragonCost } from '../data/helpers';

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