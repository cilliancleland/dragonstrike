<template>
  <span class="trait-name">
    <strong>{{ skillName }}</strong> <span v-if="skillIndex===0"> (free)</span>
  </span>
    (<input type="checkbox" @change="myAdvanceSkill" :id="dragon.id + skillName" />
    <label :for="dragon.id + skillName">{{ checkBoxLabel }}</label> )
    <button type="button" @click="myRemoveSkill">x</button>
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
  skills,
} from '../data/data';
import DragonSkill from './DragonSkill.vue';

export default {
  name: 'dragonSkill',
  props: {
    dragon: {
      type: Object,
      required: true,
    },
    funcs: {
      type: Object,
      required: true,
    },
    skillName: {
      type: String,
      required: true,
    },
    skillIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const myRemoveSkill = () => {
      props.funcs.removeSkill(props.dragon.id, props.skillName);
    };
    const myAdvanceSkill = () => {
      props.funcs.advanceSkill(props.dragon.id, props.skillName);
    };
    return {
      myAdvanceSkill,
      myRemoveSkill
    };
  },
  computed: {
    basic() {
      return skills[this.skillName].basic;
    },
    advanced() {
      return skills[this.skillName].advanced;
    },
    isAdvanced() {
      return this.dragon.advancedSkills.includes(this.skillName);
    },
    checkBoxLabel() {
      return this.isAdvanced ? 'Advanced' : 'basic';
    },
  }
};
</script>
  
<style scoped>
</style>