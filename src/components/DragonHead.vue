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
  <div class="leftright">
    <input
      type="text"
      name="dragonName"
      :id="'dragonName' + dragon.id"
      placeholder="Dragon name"
      :value="dragon.dragonName"
      @change="myUpdateName"
      />
    <div class="leftright">
      <div>&nbsp;<strong>POT:</strong>{{ dragon.pot }}&nbsp;</div>
      <div>&nbsp;<strong>FLI:</strong>{{ dragon.fli }}&nbsp;</div>
      <div>&nbsp;<strong>WND:</strong>{{ dragon.wnd }}&nbsp;</div>
    </div>
    <input
      type="text"
      name="riderName"
      :id="'riderName' + dragon.id"
      placeholder="Rider name"
      :value="dragon.riderName"
      @change="myUpdateName"
      />
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
    const myUpdateName = (evt) => {
      props.funcs.updateName(props.dragon.id, evt.target.value, evt.target.name);
    };
    return {
      myRemoveDragon,
      myUpdateName,
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