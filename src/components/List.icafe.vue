<template>
    <b-card
        no-body
        tag="article"
        class="mb-4">
        <div class="d-custom--background" :style="'background-image: url(' + imgSrc +');height: 158px;'"></div>
        <!-- :img-src="imgSrc" -->
        <b-card-body>
            <h5 class="card-title text-truncate" :title="title">{{title}}</h5>
            <p class="card-text text-white-50" v-html="description">
                <!-- {{description.substring(0,115)+'...'}} -->
            </p>
        </b-card-body>
    </b-card>
</template>
<script>
  export default {
    name: 'ListiCafe',
    props: {
      title: {
        default: null
      },
      imgSrc: {
        default: null
      },
      description: {
        default: null
      }
    }
  }
</script>