<template>
    <div id="d-custom--search" class="form--input--effect position-relative" >
        <input type="text" v-model="searchText" class="form--controll--effect w-100" placeholder="Search everything here..." />
        <span class="focus-border">
            <i></i>
        </span>
        <span class="focus-border position-absolute" style="top:0;right:0;">
            <button type="button">
                <span class="fa fa-search"></span>
            </button>
        </span>
    </div>
</template>
<script>
    export default {
      name: 'Search',
      props: {
        searchText: {
          type: String,
          default: null
        }
      },
      data () {
        return {
        }
      },
      watch: {
        searchText: function () {
          this.$emit('setSearch', this.searchText)
        }
      }
    }
</script>