<template>
  <div class="leftright">
    <h4>Traits</h4>
    <select @change="myAddTrait">
      <option value="" >Add a trait</option>
      <option v-for="trait in traitList" :key="trait">{{ trait }}</option>
    </select>
  </div>
  <DragonTrait v-for="(trait, index) in dragon.traits" :key="trait"
    :dragon="dragon"
    :funcs="funcs"
    traitType="traits"
    :traitName="trait"
    :traitIndex="index"
    />
  <DragonTrait v-for="(trait, index) in dragon.extraTraits" :key="trait"
    :dragon="dragon"
    :funcs="funcs"
    traitType="extraTraits"
    :traitName="trait"
    :traitIndex="index"
    />
</template>

<script>
import {
  traits,
} from '../data/data';
import DragonTrait from './DragonTrait.vue';

export default {
  components: {
    DragonTrait,
  },
  name: 'dragonTraits',
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
    const myAddTrait = (evt) => {
      const trait = evt.target.value;
      if (trait !== '') {
        props.funcs.addTrait(props.dragon.id, trait);
      }
      evt.target.selectedIndex = 0;
    };
    return {
      myAddTrait,
    };
  },
  computed: {
    traitList() {
      const arr = Object.keys(traits);
      return arr.filter((el) => {
        return !this.dragon.extraTraits.includes(el) && !this.dragon.traits.includes(el);
      });
    },
  },
};
</script>

<style scoped>
.trait-row {
  display: flex;
}
.trait-cell {

}
</style>
