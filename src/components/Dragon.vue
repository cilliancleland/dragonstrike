<template>
  <!-- {{ dragon }} -->
  <div class="dragon-box">
    <DragonHead :dragon="dragon" :funcs="funcs"/>
    <hr />
    <DragonTraits :dragon="dragon" :funcs="funcs"/>
    <hr />
    <DragonSkills :dragon="dragon" :funcs="funcs"/>
  </div>
</template>

<script>
// import {reactive} from 'vue';
import DragonHead from './DragonHead.vue';
import DragonTraits from './DragonTraits.vue';
import DragonSkills from './DragonSkills.vue';

export default {
  name: 'DragonCard',
  components: {
    DragonHead,
    DragonTraits,
    DragonSkills,
  },
  props: {
    dragon: {
      type: Object,
      required: true,
    },
    funcs: {
      type: Object,
      required: true,
    },
  },
}
</script>
