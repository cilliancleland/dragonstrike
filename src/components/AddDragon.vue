<template>
  <div class="cover">
    <div class="dialog">
      <h3>Add dragon</h3>
      <div class="leftright" style="margin-top:20px">
        <div>
          <input type="radio" name="age" value="Young"  id="age_Young" @change="setAge"/>
          <label for="age_Young">Young</label>
        </div>
        <div>
          <input type="radio" name="age" value="Adult"  id="age_Adult" @change="setAge"/>
          <label for="age_Adult">Adult</label>
        </div>
        <div>
          <input type="radio" name="age" value="Ancient"  id="age_Ancient" @change="setAge"/>
          <label for="age_Ancient">Ancient</label>
        </div>
      </div>
      <div style="margin-top:20px">
        <div>
          <select @change="setRace">
            <option value="">Race</option>
            <option v-for="color in colors" :key="color">{{ color }}</option>
          </select>
        </div>
      </div>
      <div style="margin-top:20px" class="leftright">
        <button
          type="button"
          @click="cancel"
          >
          Cancel
        </button>
          <button
          type="button"
          @click="createDragon"
          :disabled="disableButton"
          >
          Create Dragon
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue';
import {
  racialTraits,
  racialElements,
} from '../data/data';

export default {
  name: 'DragonCard',
  components: {
  },
  props: {
    funcs: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      age: '',
      race: '',
    });
    const setAge = (evt) => {
      state.age = evt.target.value;
    };
    const setRace = (evt) => {
      state.race = evt.target.value;
    };
    const createDragon = () => {
      props.funcs.createDragon(state.age, state.race);
    };
    const cancel = () => {
      props.funcs.cancelAdd();
    };
    return {
      cancel,
      state,
      setAge,
      setRace,
      createDragon,
    };
  },
  computed: {
    colors() {
      return Object.keys(racialTraits);
    },
    element() {
      return racialElements[this.dragon.color];
    },
    disableButton() {
      return this.state.age === '' || this.state.race === '';
    },
  },
}
</script>

<style scoped>
.cover {
  background-color: black;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
}
.dialog{
  padding: 20px;
  margin: auto;
  background-color: white;
  width: auto;
  display: inline-block;
}
</style>