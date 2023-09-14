<script>
import FormInput from './components/FormInput.vue';
import Person from './models/Person';

export default {
  components: {
    FormInput,
    Person
  },
  data() {
    return {
      person: new Person(),
      isLoading: false,
    }
  },
  methods: {
    submitForm() {
      console.log(this.person)
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    }
  }
}
</script>

<template>
  <div class="bg-[#EDFCFE] pb-10">
    <div class="container max-w-lg mx-auto p-6">
      <div class="text-2xl font-bold pb-6">
        <img src="https://static.vecteezy.com/system/resources/previews/001/880/049/large_2x/volunteers-collecting-donations-for-charity-free-vector.jpg" alt="">
        <span>Formulir Bantuan Sosial Covid-19</span>
      </div>

      <div class="border-2 rounded-xl p-4 drop-shadow-md bg-white">
        <FormInput label="Nama" />
        <FormInput label="NIK" type="number" />
        <FormInput label="No. KK" placeholder="Nomor Kartu Keluarga" type="number" />
        <FormInput label="Foto KTP" type="file" />
        <FormInput label="Foto KK" type="file" />
        <FormInput label="Umur" type="number" />
        <FormInput label="Jenis Kelamin" />
        <FormInput label="Provinsi" />
        <FormInput label="Kab/Kota" />
        <FormInput label="Kecamatan" />
        <FormInput label="Kelurahan/Desa" />
        <FormInput label="Alamat" type="textarea" />
        <FormInput label="RT" placeholder="01" />
        <FormInput label="RW" placeholder="01" />
        <FormInput label="Penghasilan sebelum pandemi" type="number" placeholder="1000000" />
        <FormInput label="Penghasilan setelah pandemi" type="number" placeholder="1000000" />
        <FormInput label="Alasan membutuhkan bantuan" />

        <div class="flex py-4">
          <input v-model="person.agreement" id="checkbox-agreement" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="checkbox-agreement" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.
          </label>
        </div>

        <button :disabled="!person.agreement && isLoading" @click="submitForm()" :class="'w-full text-white font-bold py-2 my-4 rounded ' + (person.agreement && !isLoading ? 'bg-red-500 hover:bg-red-700' : 'bg-red-200')">
          <svg v-if="isLoading" aria-hidden="true" role="status" class="inline mr-2 w-4 h-5 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
          </svg>
          
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
