<template>
  <div>
    <label class="font-gray size-13 mt-4 mb-label">Foto tampak dalam/luar warnet.(max. 10). Usahakan foto yang diupload memiliki resolusi dan angle yang bagus untuk menarik minat player.</label>
    <div class="mb-3">
      <input type="file" multiple accept="image/jpeg, image/png, image/jpg" multiple id="file_multiple_image" ref="file" @change="onFileChange" hidden>
      <label class="w-100" for="file_multiple_image">
          <div class="dark-form btn-upload" align="center">Upload</div>
      </label>
    </div>

    <div class="d-flex flex-wrap">
      <template v-if="selectedImage.length > 0">
        <div class="form-image-container mb-3" v-for="(image, idx) in selectedImage" :key="idx">
            <div class="placeholder dark-form col-xs-12 position-relative">
                <img id="file_uploaded" class="placeholder" :src="image">
                <div class="position-absolute d-top--right pointer" @click="removeImage(idx)">
                  <img src="/static/img/icon-delete.png" width="15">
                </div>
            </div>
        </div>
      </template>
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
          selectedImage: []
        }
      },
      methods: {
        onFileChange: function (e) {
          this.dt_src = null
          var files = e.target.files || e.dataTransfer.files
          // console.log('files------------')
          // console.log(files)
          // console.log('files------------')
          if (!files.length || files.length <= 0) { return }
          // Object.keys(files).filter(function (key) {
          //   console.log('file------------')
          //   console.log(files[key])
          //   console.log('file------------')
          //   // this.createImage(files[0])
          // })
          var i = 0
          while (i < files.length) {
            // console.log('file------------')
            // console.log(files[i])
            // console.log('file------------')
            this.createImage(files[i], i)
            this.$emit('handleMultipleFileUpload', this.$refs.file.files[i], this.index)
            i++
          }
          this.$refs.file.type = 'text'
          this.$refs.file.type = 'file'
          // this.$emit('handleFileUpload', this.$refs.file.files, this.index)
        },
        createImage (file, idx) {
          if (file.type.includes('image')) {
            let vm = this
            var reader = new FileReader()
            reader.onload = (e) => {
              vm.selectedImage.push(e.target.result)
              // this.$emit('setSelectedImage', e.target.result, this.index)
            }
            reader.readAsDataURL(file)
          } else {
            // this.$bus.$emit('setAlert', 'You have to uploaded images', 2);
          }
        },
        removeImage (idx) {
          this.$delete(this.selectedImage, idx)
          this.$emit('handleRemoveImage', idx)
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
