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
          <input type="radio" name="age" value="Elder"  id="age_Elder" @change="setAge"/>
          <label for="age_Elder">Elder</label>
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
  name: 'AddDragon',
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
      props.funcs.toggleDialog('');
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
