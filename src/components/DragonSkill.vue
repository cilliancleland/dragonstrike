<template>
  <span class="trait-name">
    <strong>{{ skillName }}</strong> <span v-if="skillIndex===0"> (free)</span>
  </span>
    (<input type="checkbox" @change="myAdvanceSkill" :id="checkBoxId"  :checked="isAdvanced"/>
    <label :for="checkBoxId">{{ checkBoxLabel }}</label> )
    <button type="button" @click="myRemoveSkill">x</button>
  <ul>
    <li>
      {{ basicText }}
    </li>
    <li v-if="isAdvanced">
      {{ advancedText }}
    </li>
  </ul>
</template>
  
<script>

import {
  skills,
} from '../data/data';

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
    advanced: {
      type: Boolean,
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
    basicText() {
      return skills[this.skillName].basic;
    },
    advancedText() {
      return skills[this.skillName].advanced;
    },
    isAdvanced() {
      return this.dragon.advancedSkills.includes(this.skillName);
    },
    checkBoxLabel() {
      return this.isAdvanced ? 'Advanced' : 'basic';
    },
    checkBoxId() {
      return `${this.skillName} + ${this.dragon.id}`;
    },
  }
};
</script>
  
<style scoped>
</style>