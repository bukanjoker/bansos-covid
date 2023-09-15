export default class Person {
  constructor() {
    this.name = "";
    this.nik = "";
    this.nkk = "";
    this.fotoKtp = null;
    this.fotoKk = null;
    this.age = 25;
    this.gender = "";
    this.province = "";
    this.regency = ""; // kota
    this.district = ""; // kecamatan
    this.village = ""; // kelurahan/desa
    this.address = ""; // kelurahan/desa
    this.rt = "";
    this.rw = ""; 
    this.incomeBefore = 0; // penghasilan sebelum pandemi
    this.incomeAfter = 0; // penghasilan setelah pandemi
    this.reason = "";
    this.reasonNotes = "";
    this.agreement = false;
    this.errorMessage = [];
  }

  getGenderOptions() {
    return [
      {
        label: "Laki - laki",
        value: 1
      },
      {
        label: "Perempuan",
        value: 2
      },
    ]
  }

  getReasonOptions() {
    return [
      {
        label: "Kehilangan pekerjaan",
        value: 1
      },
      {
        label: "Kepala keluarga terdampak atau korban Covid-19",
        value: 2
      },
      {
        label: "Tergolong fakir/miskin semenjak sebelum Covid-19",
        value: 3
      },
      {
        label: "Lainnya",
        value: 99
      },
    ]
  }

  validate() {
    let isValid = true;
    const limitPhotoSize = 2097152;
    this.errorMessage = [];

    if (this.fotoKtp) {
      if (this.fotoKtp.size > limitPhotoSize) {
        isValid = false;
        this.errorMessage.push('File foto ktp tidak bisa lebih dari 2MB')
      }
    }
    if (this.fotoKk) {
      if (this.fotoKk.size > limitPhotoSize) {
        isValid = false;
        this.errorMessage.push('File foto kk tidak bisa lebih dari 2MB')
      }
    }
    if (this.age < 25) {
      isValid = false;
      this.errorMessage.push('Umur tidak boleh kurang dari 25 tahun')
    }

    return isValid;
  }
}