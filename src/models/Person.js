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
    this.agreement = false;
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
}