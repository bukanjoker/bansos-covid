export default class Location {
  constructor() {
    this.provinces = [];
    this.regencies = []; // kota
    this.districts = []; // kecamatan
    this.villages = []; // kelurahan/desa
  }

  getBaseUrl(url) {
    return "https://emsifa.github.io/api-wilayah-indonesia/api/" + url + ".json"
  }

  fetchProvinces() {
    fetch(this.getBaseUrl("provinces"), {
      method: "GET"
    }).then((response) => {
      console.log(response.data)
    })
  }
}