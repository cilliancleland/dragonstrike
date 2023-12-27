<template>
  <span class="trait-name">
    <strong>{{ traitName }}</strong>
  </span>
  (<input type="checkbox" @change="myAdvanceTrait" :id="checkBoxId" />
  <label :for="checkBoxId">{{ checkBoxLabel }}</label> )
  <button type="button" @click="myRemoveTrait" v-if="traitType==='extraTraits'">x</button>
  <ul>
    <li>
      {{ basic }}
    </li>
    <li v-if="isAdvanced">
      {{ advanced }}
    </li>
  </ul>
</template>

<script>

import {
  traits,
} from '../data/data';

export default {
  name: 'dragonTrait',
  props: {
    dragon: {
      type: Object,
      required: true,
    },
    funcs:  {
      type: Object,
      required: true,
    },
    traitType: {
      type: String,
      required: true,
    },
    traitName: {
      type: String,
      required: true,
    },
    traitIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const myRemoveTrait = () => {
      props.funcs.removeTrait(props.dragon.id, props.traitName);
    };
    const myAdvanceTrait = () => {
      props.funcs.advanceTrait(props.dragon.id, props.traitName);
    };
    return {
      myAdvanceTrait,
      myRemoveTrait
    };
  },
  computed: {
    basic() {
      console.log(this.traitName);
      return traits[this.traitName].basic;
    },
    advanced() {
      return traits[this.traitName].advanced;
    },
    isAdvanced() {
      return this.dragon.advancedTraits.includes(this.traitName);
    },
    checkBoxLabel() {
      return this.isAdvanced ? 'Advanced' : 'basic';
    },
    checkBoxId() {
      console.log(this.traitName, this.dragon.id);
      return `${this.traitName} + ${this.dragon.id}`;
    },
  }
};
</script>

<style scoped>
.trait-row {
  display: flex;
}
.trait-cell {

}
</style>