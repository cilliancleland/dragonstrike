<template>
  <div class="leftright">
    <h4>Skills</h4>
    <select @change="myAddSkill">
      <option value="" >Add a skill</option>
      <option v-for="skill in skillList" :key="skill">{{ skill }}</option>
    </select>
  </div>
  <DragonSkill v-for="(skill, index) in dragon.skills" :key="skill"
    :dragon="dragon"
    :funcs="funcs"
    :skillName="skill"
    :skillIndex="index"
    />

</template>

<script>
import {
  skills,
} from '../data/data';
import DragonSkill from './DragonSkill.vue';

export default {
  components: {
    DragonSkill,
  },
  name: 'dragonSkills',
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
    const myAddSkill = (evt) => {
      const skill = evt.target.value;
      if (skill !== '') {
        props.funcs.addSkill(props.dragon.id, skill);
      }
      evt.target.selectedIndex = 0;
    };
    return {
      myAddSkill,
    };
  },
  computed: {
    skillList() {
      const arr = Object.keys(skills);
      return arr.filter((el) => {
        return !this.dragon.skills.includes(el);
      });
    },
  },
};
</script>

