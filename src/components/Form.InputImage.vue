<template>
    <div class="row form-image-container">
        <div class="placeholder dark-form col-xs-12 mb-label1">
            <img v-if="dt_src !== null" :id="'file_uploaded'+index" class="placeholder" :src="dt_src">
            <img v-else-if="dt_src === null && selectedImage" :id="'file_uploaded'+index" class="placeholder" :src="selectedImage">
        </div>
        <div class="col-xs-12">
            <input type="file" multiple accept="image/jpeg, image/png, image/jpg" :id="'file_image'+index" ref="file" @change="onFileChange"  hidden>
            <label class="w-100" :for="'file_image'+index">
                <div class="dark-form btn-upload" align="center">Upload</div>
            </label>
        </div>
    </div>
</template>
<script>
    export default{
      name: 'input-image',
      props: {
        index: {
        },
        dt_src: {
          type: String,
          default: null
        }
      },
      data () {
        return {
          selectedImage: ''
        }
      },
      methods: {
        onFileChange: function (e) {
          this.dt_src = null
          var files = e.target.files || e.dataTransfer.files
          if (!files.length) { return }
          this.createImage(files[0])
          this.$emit('handleFileUpload', this.$refs.file.files[0], this.index)
        },
        createImage (file) {
          if (file.type.includes('image')) {
            let vm = this
            var reader = new FileReader()
            reader.onload = (e) => {
              vm.selectedImage = e.target.result
              this.$emit('setSelectedImage', e.target.result, this.index)
            }
            reader.readAsDataURL(file)
          } else {
            // this.$bus.$emit('setAlert', 'You have to uploaded images', 2);
          }
        }
      }
    }
</script>
<style scoped>
    .form-image-container{
        width: 100px;
        height: 100px;
        margin-right: 30px;
    }
    .placeholder{
        border-radius: 4px;
        width: 100%;
        height: 100%;
    }
    .dark-form{
        background: #2b2d32;
        color: #828282;
    }
    .btn-upload{
        width: 100px;
        border: none;
        margin-top: 10px;
        cursor: pointer;
        border-radius: 4px;
        color: #000;
    background: #ffc700;
    }
</style>
