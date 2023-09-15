export default class Location {
  constructor() {
    this.provinces = [];
    this.regencies = []; // kota
    this.districts = []; // kecamatan
    this.villages = []; // kelurahan/desa
  }

  getBaseUrl(url) {
    return "/proxy/api-wilayah-indonesia/api/" + url + ".json"
  }

  async fetchProvinces() {
    const response = await fetch(this.getBaseUrl('provinces'));
    this.provinces = await response.json();
  }

  async fetchRegenciesByProvice(id) {
    this.regencies = [];
    this.districts = [];
    this.villages = [];

    const response = await fetch(this.getBaseUrl('regencies/'+id));
    this.regencies = await response.json();
  }

  async fetchDistrictsByRegency(id) {
    this.districts = [];
    this.villages = [];

    const response = await fetch(this.getBaseUrl('districts/'+id));
    this.districts = await response.json();
  }

  async fetchVillagesByDistrict(id) {
    this.villages = [];

    const response = await fetch(this.getBaseUrl('villages/'+id));
    this.villages = await response.json();
  }
}