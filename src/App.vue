<script>
import Person from './models/Person';
import Location from './models/Location';
import FormInput from './components/FormInput.vue';

export default {
  components: {
    Person,
    Location,
    FormInput,
  },
  data() {
    return {
      person: new Person(),
      location: new Location(),
      isLoading: false,
    }
  },
  mounted() {
    this.location.fetchProvinces()
  },
  methods: {
    submitForm() {
      this.isLoading = true;

      if (!this.person.validate()) {
        return alert("- "+this.person.errorMessage.join('\n- '))
      }

      setTimeout(() => {
        this.isLoading = false;

        // if < 0.5 is failed, > 0.5 is success
        if (Math.random() <= 0.5) {
          alert("500: Invalid server error");
        } else {
          alert("200: Success data sudah disubmit");
        }
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

      <form @submit.prevent="submitForm()" class="border-2 rounded-xl p-4 drop-shadow-md bg-white">
        <FormInput label="Nama" v-model="person.name" required/>
        <FormInput label="NIK" v-model="person.nik" type="number" required/>
        <FormInput label="No. KK" v-model="person.nkk" placeholder="Nomor Kartu Keluarga" type="number" required/>
        <FormInput label="Foto KTP" v-model="person.fotoKtp" type="file" required/>
        <FormInput label="Foto KK" v-model="person.fotoKk" type="file" required/>
        <FormInput label="Umur" v-model="person.age" type="number" required/>
        <FormInput label="Jenis Kelamin" v-model="person.gender" type="select" :options="person.getGenderOptions()" required/>
        <FormInput label="Provinsi" type="select" />
        <FormInput label="Kab/Kota" type="select" />
        <FormInput label="Kecamatan" type="select" />
        <FormInput label="Kelurahan/Desa" type="select" />
        <FormInput label="Alamat" v-model="person.address" type="textarea" required/>
        <FormInput label="RT" v-model="person.rt" placeholder="01" required/>
        <FormInput label="RW" v-model="person.rw" placeholder="01" required/>
        <FormInput label="Penghasilan sebelum pandemi" v-model="person.incomeBefore" type="number" placeholder="1000000" required/>
        <FormInput label="Penghasilan setelah pandemi" v-model="person.incomeAfter" type="number" placeholder="1000000" required/>
        <FormInput label="Alasan membutuhkan bantuan" v-model="person.reason" type="select" :options="person.getReasonOptions()" required/>
        <FormInput v-if="person.reason == '99'" label="" v-model="person.reasonNotes" type="textarea" placeholder="Masukkan alasan" />

        <div class="flex py-4">
          <input v-model="person.agreement" id="checkbox-agreement" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="checkbox-agreement" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.
          </label>
        </div>

        <button type="submit" :disabled="!person.agreement && isLoading" :class="'w-full text-white font-bold py-2 my-4 rounded ' + (person.agreement && !isLoading ? 'bg-red-500 hover:bg-red-700' : 'bg-red-200')">
          <svg v-if="isLoading" aria-hidden="true" role="status" class="inline mr-2 w-4 h-5 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
          </svg>
          
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
