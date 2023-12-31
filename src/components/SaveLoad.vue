<template>
  <div class="cover">
    <div class="dialog">
      <h3>Save or load a wing</h3>
      <div class="leftright spaced">
        <input @change="myUpdateName" :value="state.wingName" />
        <button type="button" @click="save">Save</button>
      </div>
      <div class="leftright spaced">
        <select @change="load">
          <option value="">Choose a wing to load</option>
          <option
            v-for="save in saves"
            :key="save"
            :value="save"
            >
            {{ save }}
          </option>
        </select>
      </div>
      <button
        type="button"
        @click="cancel"
        >
        Cancel
    </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SaveLoad',
  props: {
    funcs: {
      type: Object,
      required: true,
    },
    state: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const cancel = () => {
      props.funcs.toggleDialog('');
    };
    const save = () => {
      props.funcs.saveWing();
      props.funcs.toggleDialog('');
    };
    const load = (evt) => {
      props.funcs.loadWing(evt.target.value);
      props.funcs.toggleDialog('');
    };
    const myUpdateName = (evt) => {
      props.funcs.updateName('', evt.target.value, 'wingName');
    };
    return {
      cancel,
      save,
      load,
      myUpdateName,
    };
  },
  computed: {
    saves() {
      const savesStr = localStorage.getItem("saves") || '{}';
      const saves = JSON.parse(savesStr);
      const saveNames = Object.keys(saves);
      return saveNames;
    },
  },
};
</script>
