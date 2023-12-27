<template>
  <div class="main">
    <h1>Dragon strike list builder</h1>
    <div class="leftright">
      <button @click="addDragon" type="button">Add dragon</button>
      <button type="button" @click="print">Print</button>
      <div :class="totalPointsClass">
        {{ totalPoints }} / 15 points
      </div>
      </div>
    <Dragon v-for="dragon in state.dragons"
      :key="dragon.id"
      :dragon="dragon"
      :funcs="funcs"
      />
    <AddDragon 
      v-if="state.showAddDragon"
      :funcs="funcs" />
  </div>
</template>
<script>
import {reactive} from 'vue';
import {
  dragonAges,
  dragonTypes,
  racialElements,
  racialTraits,
} from '@/data/data';
import { dragonCost } from './data/helpers';
import Dragon from './components/Dragon.vue';
import AddDragon from './components/AddDragon.vue';

export default {
  name: 'dragonStrike',
  components: {
    Dragon,
    AddDragon,
  },
  setup() {
    const state = reactive({
      dragons: [],
      showAddDragon: false,
    });
    const print = () => {
      window.print();
    };
    const addDragon = () => {
      state.showAddDragon = true;
    };
    const cancelAdd = () => {
      state.showAddDragon = false;
    };
    const createDragon = (age, race) => {
      const selected = dragonTypes[age];
      const index = state.dragons.length;
      const dragon = JSON.parse(JSON.stringify(selected));
      state.dragons.push(dragon);
      dragon.id = index;
      dragon.element = racialElements[race];
      dragon.race = race;
      const raceIndex = dragon.traits.findIndex((el) => el === 'Racial');
      if (raceIndex !== -1) {
        dragon.traits[raceIndex] = racialTraits[race];
      }
      dragon.element = racialElements[race];
      state.showAddDragon = false;
    };
    const removeDragon = (id) => {
      state.dragons.splice(id, 1);
    };
    const addTrait = (id, trait) => {
      state.dragons[id].extraTraits.push(trait);
    };
    const removeTrait = (id, trait) => {
      const dragon = state.dragons[id];
      const extraIndex = dragon.extraTraits.findIndex((el) => el === trait);
      dragon.extraTraits.splice(extraIndex, 1);
      const advancedIndex = dragon.advancedTraits.findIndex((el) => el === trait);
      if (advancedIndex !== -1) {
        dragon.advancedTraits.splice(advancedIndex, 1);
      }
    };
    const advanceTrait = (id, trait) => {
      const dragon = state.dragons[id];
      const index = dragon.advancedTraits.findIndex((el) => el === trait);
      if (index === -1) {
        dragon.advancedTraits.push(trait);
      } else {
        dragon.advancedTraits.splice(index, 1);
      }
    };
    const addSkill = (id, skill) => {
      state.dragons[id].skills.push(skill);
    };
    const removeSkill = (id, skill) => {
      const dragon = state.dragons[id];
      const extraIndex = dragon.skills.findIndex((el) => el === skill);
      dragon.skills.splice(extraIndex, 1);
      const advancedIndex = dragon.advancedSkills.findIndex((el) => el === skill);
      if (advancedIndex !== -1) {
        dragon.advancedSkills.splice(advancedIndex, 1);
      }
    };
    const advanceSkill = (id, skill) => {
      const dragon = state.dragons[id];
      const index = dragon.advancedSkills.findIndex((el) => el === skill);
      if (index === -1) {
        dragon.advancedSkills.push(skill);
      } else {
        dragon.advancedSkills.splice(index, 1);
      }
    };
    return {
      state,
      addDragon,
      print,
      funcs: {
        createDragon,
        removeDragon,
        cancelAdd,
        addTrait,
        removeTrait,
        advanceTrait,
        addSkill,
        removeSkill,
        advanceSkill,
      },
    };
  },
  computed: {
    ages() {
      return dragonAges;
    },
    totalPoints() {
      let cost = 0;
      this.state.dragons.forEach((dragon) => cost = cost + dragonCost(dragon));
      return cost;
    },
    totalPointsClass() {
      if (this.totalPoints > 15 ) return 'red';
      if (this.totalPoints === 15 ) return 'green';
      return 'black';
    }
  },
}
</script>

<style scoped>
  main {
    width: 100%;
  }
</style>

