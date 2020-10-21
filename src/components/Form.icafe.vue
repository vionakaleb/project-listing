<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" align=left>
      <b-row>
        <b-col cols="12" xxl="6" xl="6" lg="6" md="6" sm="6">
          Pilih i-Cafe yang ingin didaftarkan
        </b-col>
      </b-row>
      <b-row class="col-md-6 mb-2"></b-row>
      <b-row>
          <b-col cols="12" xxl="6" xl="6" lg="6" md="6" sm="6">
              <div class="d-select--one">
                  <select v-model="selectMyICafe">
                      <option value="">New i-Cafe</option>
                      <option
                      v-for="(SI, index) in listMyICafe" :key="index"
                      :value="SI.url">{{SI.name}}</option>
                  </select>
                  <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
              </div>
          </b-col>
      </b-row>
      <b-row class="col-md-6 mb-4"></b-row>
      <b-row>
      <div class="col-md-6 mb-4">
        <p class="size-16 light-bold">DATA i-CAFE</p>

        <!-- <b-form-group id="InputGroup1" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Nama i-Cafe:"
                      label-for="Input1">
          <b-form-input id="Input1" class="bg-secondary border-transparent"
                        type="text"
                        size="sm"
                        v-model="detailMyICafe.name"
                        required>
          </b-form-input>
        </b-form-group> -->

        <b-form-group id="InputGroup1" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Nama i-Cafe:"
                      label-for="Input1">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="Input1" class="form--controll--effect bg-secondary"
                          style="margin-top: 5px;"
                          type="text"
                          size="sm"
                          v-model="detailMyICafe.name"
                          required>
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroup2" class="font-gray size-13 mb-2"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Alamat i-Cafe:"
                      label-for="Input2">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-textarea id="Input2" placeholder="" size="sm"
                          class="form--controll--effect bg-secondary custom-input"
                          style="margin-top: 5px;"
                          v-model="detailMyICafe.alamat"
                          rows="4"
                          max-rows="6"
                          required>
            </b-form-textarea>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroupkota" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Provinsi:"
                      label-for="Inputprovinsi">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-select id="Inputprovinsi" class="form--controll--effect bg-secondary"
                          v-model="selectProvince"
                          style="margin-top: 5px;"
                          size="sm"
                          required>
                          <option :value="province.province_id" v-for="province in provinces">{{province.province_name}}</option>                
            </b-form-select>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>
        
        <b-form-group id="InputGroupkota" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Kota:"
                      label-for="Inputkota">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-select id="Inputkota" class="form--controll--effect bg-secondary"
                          v-model="detailMyICafe.city_id"
                          style="margin-top: 5px;"
                          size="sm"
                          required>
                          <option :value="city.city_id" v-for="city in cities">{{city.city_name}} ({{city.city_type}})</option>                
            </b-form-select>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroup3" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="No. Telpon:"
                      label-for="Input3">
          <!-- <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="Input3" class="form--controll--effect bg-secondary"
                          style="margin-top: 5px;"
                          type="text"
                          size="sm"
                          v-model="detailMyICafe.phone_number"
                          required>
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div> -->
          <div class="d-flex">
            <div class="flex-fill">
              <div id="d-custom--search" class="form--input--effect position-relative">
                <b-form-input id="inputRange1" class="form--controll--effect bg-secondary"
                              type="number"
                              size="sm"
                              v-model="phone_area"
                              required
                              style="margin-top: 5px;"
                              placeholder="Kode Area">
                </b-form-input>
                <span class="focus-border">
                    <i></i>
                </span>
              </div>
            </div>
            <div class="align-self-center p-1"> </div>
            <div class="w-100">
              <div id="d-custom--search" class="form--input--effect position-relative">
                <b-form-input id="inputRange2" class="form--controll--effect bg-secondary"
                              type="number"
                              size="sm"
                              style="margin-top: 5px;"
                              v-model="phone_number"
                              required
                              placeholder="No. Telphone">
                </b-form-input>
                <span class="focus-border">
                    <i></i>
                </span>
              </div>
            </div>
          </div>
        </b-form-group>

        <b-form-group id="InputGroup4" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Website (Jika Ada):"
                      label-for="Input4">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="Input4" class="form--controll--effect bg-secondary"
                          style="margin-top: 5px;"
                          type="text"
                          size="sm"
                          v-model="detailMyICafe.website">
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroup5" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Facebook (Jika Ada):"
                      label-for="Input5">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="Input5" class="form--controll--effect bg-secondary"
                          style="margin-top: 5px;"
                          type="text"
                          size="sm"
                          v-model="detailMyICafe.sosmed_fb">
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroup5" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Instagram (Jika Ada):"
                      label-for="InputInstagram">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="InputInstagram" class="form--controll--effect bg-secondary"
                          style="margin-top: 5px;"
                          type="text"
                          size="sm"
                          v-model="detailMyICafe.sosmed_ig">
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroupPC" class="font-gray size-13 mb-2"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="About:"
                      label-for="inputAbout">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-textarea id="inputAbout" placeholder="" size="sm"
                          class="form--controll--effect bg-secondary custom-input"
                          style="margin-top: 5px;"
                          v-model="detailMyICafe.description"
                          rows="4"
                          max-rows="6"
                          required>
            </b-form-textarea>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroupPC" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Jumlah PC:"
                      label-for="inputPC">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="inputPC" type="number" placeholder="" size="sm"
            style="margin-top: 5px;"
                          class="form--controll--effect bg-secondary"
                          v-model="detailMyICafe.jml_pc"
                          required>
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>             
        </b-form-group>

        <b-form-group id="InputGroup9" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Nama PIC i-Cafe:"
                      label-for="Input9">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="Input9" class="form--controll--effect bg-secondary"
                          style="margin-top: 5px;"
                          type="text"
                          size="sm"
                          v-model="detailMyICafe.nama_pic"
                          required
                          placeholder="">
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroup10" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="No. Handphone PIC:"
                      label-for="Input10">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="Input10" class="form--controll--effect bg-secondary"
                          style="margin-top: 5px;"
                          type="text"
                          size="sm"
                          v-model="detailMyICafe.no_hp_pic"
                          required
                          placeholder="">
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroupPC" class="font-gray size-13 mb-2"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Range Harga:"
                      label-for="inputRange">
          <div class="d-flex">
            <div class="flex-fill" style="width: 38%;">
              <div id="d-custom--search" class="form--input--effect position-relative">
                <b-form-input id="inputRange1" class="form--controll--effect bg-secondary"
                              type="number"
                              size="sm"
                              v-model="detailMyICafe.range_price_from"
                              required
                              style="margin-top: 5px;"
                              placeholder="">
                </b-form-input>
                <span class="focus-border">
                    <i></i>
                </span>
              </div>
            </div>
            <div class="align-self-center text-center" style="padding: 0 17px; width: 24%;">Sampai</div>
            <div class="flex-fill" style="width: 38%;">
              <div id="d-custom--search" class="form--input--effect position-relative">
                <b-form-input id="inputRange2" class="form--controll--effect bg-secondary"
                              type="number"
                              size="sm"
                              style="margin-top: 5px;"
                              v-model="detailMyICafe.range_price_to"
                              required
                              placeholder="">
                </b-form-input>
                <span class="focus-border">
                    <i></i>
                </span>
              </div>
            </div>
          </div>
        </b-form-group>

        <b-form-group id="InputGroupPC" class="font-gray size-13 mb-2"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Spesifikasi:"
                      label-for="inputSpesifikasi">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-textarea id="inputSpesifikasi" placeholder="" size="sm"
                          class="form--controll--effect bg-secondary custom-input"
                          v-model="detailMyICafe.spec_pc"
                          rows="4"
                          max-rows="6"
                          required>
            </b-form-textarea>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroupGame" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Game yang dapat dimainkan:"
                      label-for="inputGame">
          <div id="d-custom--search" class="form--input--effect position-relative d-flex">
            <multiselect class="flex-fill" v-model="value" :options="game_groups" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="false" placeholder="Choose one or more" label="name" track-by="id" :preselect-first="false" :taggable="true" style="margin-top: 5px;">
              <!-- <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template> -->
            </multiselect>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroupGame" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Fasilitas:"
                      label-for="inputGame">
          <b-form-checkbox :id="'checkbox'+facility.id"
                      :name="'checkbox'+facility.id"
                      v-model="selectFacility"
                      :value="facility.id"
                      unchecked-value=""
                      :key="facility.id"
                      style="margin-top: 5px;"
                      v-for="facility in facilities">
                      {{facility.name}}
          </b-form-checkbox>
        </b-form-group>

             <!-- <input-image :index="2" :dt_src="detailMyICafe.tempat_usaha_img" @handleFileUpload="handleFileUpload" @setSelectedImage="setSelectedImage"></input-image> -->
            <!-- <div class="col-xs-6">
              <input-image :dt_src="detailMyICafe.avatar_url" :index="4" @handleFileUpload="handleFileUpload"></input-image>
            </div>
            <div class="col-xs-12">
              <multiple-input-image :index="2" :dt_src="detailMyICafe.tempat_usaha_img" @handleMultipleFileUpload="handleMultipleFileUpload" @handleRemoveImage="handleRemoveImage"></multiple-input-image>
            </div> -->

        <div class="d-flex mt-3">
          <div class="ml-3 mr-2">
              <label class="font-gray size-13">Logo</label>
              <input-image :dt_src="detailMyICafe.avatar_url" :index="4" @handleFileUpload="handleFileUpload"></input-image>
          </div>
          <div class="ml-2 mr-3">
            <multiple-input-image :index="2" :dt_src="detailMyICafe.tempat_usaha_img" @handleMultipleFileUpload="handleMultipleFileUpload" @handleRemoveImage="handleRemoveImage"></multiple-input-image>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <p class="size-16 light-bold">DATA PEMILIK</p>
        <b-form-group id="InputGroup6" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Nama pemilik i-Cafe:"
                      label-for="Input6">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="Input6" class="form--controll--effect bg-secondary"
                          style="margin-top: 5px;"
                          type="text"
                          size="sm"
                          v-model="detailMyICafe.nama_pemilik"
                          required
                          placeholder="">
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroup7" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="No HP Pemilik:"
                      label-for="Input7">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="Input7" class="form--controll--effect bg-secondary"
                          style="margin-top: 5px;"
                          type="text"
                          size="sm"
                          v-model="detailMyICafe.no_hp_pemilik"
                          required
                          placeholder="">
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroup8" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="E-mail Pemilik:"
                      label-for="Input8">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="Input8" class="form--controll--effect bg-secondary custom-input"
                          style="margin-top: 5px;"
                          type="email"
                          size="sm"
                          v-model="detailMyICafe.email_pemilik"
                          required
                          placeholder="">
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroup6" class="font-gray size-13 mb-0"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="No. KTP pemilik i-Cafe:"
                      label-for="Inputnoktp">
          <div id="d-custom--search" class="form--input--effect position-relative">
            <b-form-input id="Inputnoktp" class="form--controll--effect bg-secondary"
                          style="margin-top: 5px;"
                          type="number"
                          size="sm"
                          v-model="detailMyICafe.identity_num"
                          required
                          placeholder="">
            </b-form-input>
            <span class="focus-border">
                <i></i>
            </span>
          </div>
        </b-form-group>

        <b-form-group id="InputGroupFile3" class="font-gray size-13 mb-0 mt-5"
                      horizontal
                      :label-cols="3"
                      breakpoint="md"
                      label="Foto Bukti Kepemilikan iCafe & Upload KTP Owner"
                      label-for="InputFile3">
          <div class="row ml-3">
            <div class="col-xs-6">
              <input-image :dt_src="detailMyICafe.bukti_kepemilikan_img" :index="1" @handleFileUpload="handleFileUpload" @setSelectedImage="setSelectedImage"></input-image>
            </div>
            <div class="col-xs-6">
              <input-image :index="3" :dt_src="detailMyICafe.identity_img" @handleFileUpload="handleFileUpload" @setSelectedImage="setSelectedImage"></input-image>
            </div>
          </div>
        </b-form-group>
      </div>
      <div class="col-md-12 pt-3">
        <b-form-group id="GroupChecks" class="font-gray pt-5">
          <!-- <b-form-checkbox-group v-model="form.isAggree" id="Checks" required>
            <b-form-checkbox value="true" class="font-gray size-12">Akan berpartisipasi apabila ada tournament.</b-form-checkbox>
          </b-form-checkbox-group> -->
            <b-form-checkbox id="cb1" name="cb1" value="true" class="font-gray size-12" required>Akan berpartisipasi apabila ada tournament.</b-form-checkbox>
            <b-form-checkbox v-model="form.isSubscribe" id="cb2" name="cb2" value="true" class="font-gray size-12" required>Saya ingin mengikuti update terbaru dengan berlangganan Newsletter.</b-form-checkbox>
            <b-form-checkbox id="cb3" name="cb3" value="true" class="font-gray size-12" required>Saya setuju dengan semua syarat dan ketentuan berlaku.</b-form-checkbox>
            <b-form-checkbox id="cb4" name="cb4" value="true" class="font-gray size-12" required>Saya bersedia menyediakan tempat maks setengah darti total PC yang tersedia untuk event tournament (open billing).</b-form-checkbox>
        </b-form-group>
      
        <!-- <b-button variant="primary" class="" v-b-modal.myModalSukses>Sukses</b-button> -->
        <b-button type="submit" variant="primary" class="" v-if="!btnSubmit">Submit Form</b-button>
        <b-button type="submit" variant="primary" class="" v-else disabled>loading..</b-button>
        <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
      </div>

      </b-row>
    </b-form>

    <modal-upload></modal-upload>
    <modal-sukses :modalShow="modalSukses" @hideModal="hideModal()"></modal-sukses>
  </div>
</template>

<script>
import InputImage from '@/components/Form.InputImage'
import MultipleInputImage from '@/components/Form.MultipleInputImage'
import ModalUpload from '@/components/modal/ModalUpload'
import ModalSukses from '@/components/modal/ModalDaftarSukses'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import Vue from 'vue'
import Multiselect from 'vue-multiselect'

Vue.use(VueSweetalert2)

export default {
  components: {
    'input-image': InputImage,
    'multiselect': Multiselect,
    'multiple-input-image': MultipleInputImage,
    ModalUpload,
    ModalSukses
  },
  props: {
    listMyICafe: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      btnSubmit: false,
      form: {
        isSubscribe: false,
        selectedImages: {
          bukti_kepemilikan: null,
          tempat_usaha: [],
          ktp_owner: null,
          avatar_url: null
        }
      },
      show: true,
      detailMyICafe: {},
      selectMyICafe: '',
      game_groups: [],
      selectGameGroup: null,
      new_data: 1,
      url: '',
      file: '',
      value: [],
      cities: [],
      facilities: [],
      selectFacility: [],
      temp_facilities: [],
      provinces: [],
      selectProvince: '',
      phone_area: '',
      phone_number: '',
      modalSukses: false
    }
  },
  mounted () {
    this.getGameGroups()
    this.getProvince()
    this.getFacilities()
  },
  methods: {
    hideModal () {
      this.modalSukses = false
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.btnSubmit = true
      console.log(JSON.stringify(this.form))
      // let isSubscribe = 0
      // if (this.form.isSubscribe.length > 0) {
      //   isSubscribe = 1
      // }

      let formData = new FormData()
      formData.append('token', localStorage.getItem('token'))
      formData.append('name', this.detailMyICafe.name)
      formData.append('alamat', this.detailMyICafe.alamat)
      formData.append('city_id', this.detailMyICafe.city_id)
      // formData.append('phone_number', this.detailMyICafe.phone_number)
      formData.append('phone_number', this.phone_area + '-' + this.phone_number)
      formData.append('website', this.detailMyICafe.website)
      formData.append('sosmed_fb', this.detailMyICafe.sosmed_fb)
      formData.append('sosmed_ig', this.detailMyICafe.sosmed_ig)
      formData.append('description', this.detailMyICafe.description)
      formData.append('jml_pc', this.detailMyICafe.jml_pc)
      formData.append('game_group_ids', this.selectGameGroup)
      if (this.selectFacility.length > 0) {
        formData.append('selectFacility', this.selectFacility.join(';'))
      }
      formData.append('nama_pemilik', this.detailMyICafe.nama_pemilik)
      formData.append('no_hp_pemilik', this.detailMyICafe.no_hp_pemilik)
      formData.append('email_pemilik', this.detailMyICafe.email_pemilik)
      formData.append('identity_num', this.detailMyICafe.identity_num)
      formData.append('nama_pic', this.detailMyICafe.nama_pic)
      formData.append('no_hp_pic', this.detailMyICafe.no_hp_pic)
      formData.append('range_price_from', this.detailMyICafe.range_price_from)
      formData.append('range_price_to', this.detailMyICafe.range_price_to)
      formData.append('spec_pc', this.detailMyICafe.spec_pc)
      // formData.append('isSubscribe', isSubscribe)
      formData.append('bukti_kepemilikan_img', this.form.selectedImages.bukti_kepemilikan)
      formData.append('tempat_usaha_img_length', this.form.selectedImages.tempat_usaha.length)
      for (var i = 0; i < this.form.selectedImages.tempat_usaha.length; i++) {
        formData.append('tempat_usaha_img' + i, this.form.selectedImages.tempat_usaha[i])
      }
      formData.append('ktp_owner_img', this.form.selectedImages.ktp_owner)
      formData.append('avatar_url', this.form.selectedImages.avatar_url)
      formData.append('new_data', this.new_data)
      formData.append('url', this.url)
      axios.post(process.env.API_URL + '/register', formData, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(response => {
          if (response.data.status === 200) {
            // this.$swal('Register Successfull', '', 'success')
            this.modalSukses = true
            setTimeout(() => { this.$router.push('/list-icafe') }, 3000)
            this.form = []
          } else {
            this.btnSubmit = false
            this.$swal({
              type: 'error',
              title: 'Failed to Register',
              html: response.data.errors
            })
          }
        }, response => {
          this.$swal({
            type: 'error',
            title: 'Failed to Register',
            text: 'Please refresh page'
          })
          this.btnSubmit = false
          setTimeout(() => { window.location = './home' }, 3000)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    setSelectedImage (imageUrl, key) {
      // if (key === 1) { this.form.selectedImages.bukti_kepemilikan = imageUrl } else if (key === 2) { this.form.selectedImages.tempat_usaha = imageUrl } else if (key === 3) { this.form.selectedImages.ktp_owner = imageUrl }
    },
    getGameGroups: function () {
      let data = {
        'token': localStorage.getItem('token')
      }
      axios.post(process.env.API_URL + '/get-game-groups', data)
        .then(response => {
          this.game_groups = response.data.data
          // console.log('---------------+++++')
          // console.log(this.game_groups)
          // console.log('---------------+++++')
        }, response => {
          // console.log(response.data)
        })
    },
    handleFileUpload (file, index) {
      if (index === 1) {
        this.form.selectedImages.bukti_kepemilikan = file
      } else if (index === 2) {
        this.form.selectedImages.tempat_usaha = file
      } else if (index === 3) {
        this.form.selectedImages.ktp_owner = file
      } else if (index === 4) {
        this.form.selectedImages.avatar_url = file
      }
    },
    handleMultipleFileUpload (file) {
      console.log('file------------')
      console.log(file)
      console.log('file------------')
      this.form.selectedImages.tempat_usaha.push(file)
    },
    getCities: function () {
      let data = {
        'token': localStorage.getItem('token'),
        'province_id': this.selectProvince
      }
      this.cities = []
      axios.post(process.env.API_URL + '/get-cities-per-province', data)
        .then(response => {
          this.cities = response.data.data
          // console.log('---------------+++++')
          // console.log(this.game_groups)
          // console.log('---------------+++++')
        }, response => {
          // console.log(response.data)
          this.$swal({
            type: 'error',
            title: 'Failed',
            text: 'Please refresh page and login again.'
          })
          setTimeout(() => { window.location = './home' }, 3000)
        })
    },
    getFacilities: function () {
      let data = {
        'token': localStorage.getItem('token')
      }
      axios.post(process.env.API_URL + '/get-facilities', data)
        .then(response => {
          this.facilities = response.data.data
          // console.log('---------------+++++')
          // console.log(this.game_groups)
          // console.log('---------------+++++')
        }, response => {
          // console.log(response.data)
        })
    },
    handleRemoveImage (idx) {
      this.$delete(this.form.selectedImages.tempat_usaha, idx)
    },
    getProvince: function () {
      axios.get(process.env.API_URL + '/get-province')
        .then(response => {
          this.provinces = response.data.data
          // console.log('---------------+++++')
          // console.log(this.game_groups)
          // console.log('---------------+++++')
        }, response => {
          // console.log(response.data)
        })
    }
  },
  watch: {
    selectMyICafe: function () {
      if (this.selectMyICafe === '') {
        this.new_data = 1
        this.url = ''
        this.detailMyICafe.name = ''
        this.detailMyICafe.alamat = ''
        this.detailMyICafe.city_id = ''
        this.detailMyICafe.phone_area = ''
        this.detailMyICafe.phone_number = ''
        this.phone_number = {}
        this.detailMyICafe.website = ''
        this.detailMyICafe.sosmed_fb = ''
        this.detailMyICafe.sosmed_ig = ''
        this.detailMyICafe.jml_pc = ''
        this.value = []
        this.detailMyICafe.nama_pemilik = ''
        this.detailMyICafe.no_hp_pemilik = ''
        this.detailMyICafe.email_pemilik = ''
        this.detailMyICafe.identity_num = ''
        this.detailMyICafe.nama_pic = ''
        this.detailMyICafe.no_hp_pic = ''
        this.form.selectedImages.bukti_kepemilikan = null
        this.form.selectedImages.tempat_usaha = []
        this.form.selectedImages.ktp_owner = null
        this.selectGameGroup = null
        this.detailMyICafe.bukti_kepemilikan_img = null
        this.detailMyICafe.tempat_usaha_img = null
        this.detailMyICafe.identity_img = null
        this.selectFacility = []
        this.selectProvince = ''
      } else {
        let data = {
          'token': localStorage.getItem('token'),
          'url': this.selectMyICafe
        }
        axios.post(process.env.API_URL + '/user-communities-detail', data)
          .then(response => {
            this.detailMyICafe = response.data.data.community
            this.value = response.data.data.game_groups
            this.new_data = 0
            this.url = response.data.data.community.url
            this.temp_facilities = response.data.data.community.facilities.split(';')
            for (var i = 0; i < this.temp_facilities.length; i++) {
              this.selectFacility.push(parseInt(this.temp_facilities[i]))
            }
            this.selectProvince = response.data.data.province.province_id
            var phone = response.data.data.community.phone_number.split('-')
            this.phone_area = phone[0]
            if (phone[1]) { this.phone_number = phone[1] }
            // if (response.data.data.game_group_ids !== '' || response.data.data.game_group_ids !== null) {
            //   this.temp_select_game_groups = response.data.data.game_group_ids.split(';')
            // }
            // for (var i = 0; i >= this.temp_select_game_groups.length; i++) {
            //   if (this.temp_select_game_groups[i] !== '') {
            //     this.selectGameGroup.push(parseInt(this.temp_select_game_groups[i]))
            //   }
            // }
            console.log('---------------+++++')
            console.log(this.detailMyICafe)
            console.log('---------------+++++')
          }, response => {
            // console.log(response.data)
          })
      }
    },
    value: function () {
      this.selectGameGroup = ''
      for (var i = 0; i < this.value.length; i++) {
        if (i === 0) {
          this.selectGameGroup = this.value[i]['id']
        } else {
          this.selectGameGroup = this.selectGameGroup + ';' + this.value[i]['id']
        }
      }
    },
    selectProvince: function () {
      this.getCities()
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style><!-- b-form-1.vue -->
<style lang="scss" scoped>
  .form-control:focus {
    color: #fff;
    background-color: #fff;
    border-color: #ffe380;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .table-cell {
    display: table-cell;
  }
  .custom-select {
    color: #fff;  
  }
  .custom-input {
    color: #fff;  
  }
  .custom-select-sm {
    font-siza: 13px;
  }
</style>
<style>
.form-image-container {
    width: 80px;
    height: 80px;
    margin-right: 4px;
  }
.placeholder {
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
.d-top--right {
  top: 0;
  right: 5px;
}

.multiselect__tags {
    border: 1px solid #2b2d32 !important;
    background: #2b2d32 !important;
  }

</style>