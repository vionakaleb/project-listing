<template>
    <div class="d-select--one">
        <select v-model="selected">
            <option value="">Select All</option>
            <option
            v-for="(SI, index) in selectItem" :key="index"
            :value="SI.city_id">{{SI.city_name}} ({{SI.city_type}})</option>
        </select>
        <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
    </div>
</template>
<script>
    export default {
      name: 'SelectIcafe',
      props: {
        selectItem: {
          type: Array,
          default: null
        }
      },
      data () {
        return {
          selected: ''
        }
      },
      watch: {
        selected: function () {
          this.$emit('setSelectCity', this.selected)
        }
      }
    }
</script>