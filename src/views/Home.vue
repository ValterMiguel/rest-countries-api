<template>
  <section class="home">
    <div class="container">
      <div class="search-dropdown">
        <div class="search-content">
          <i class="flaticon-loupe"></i>
          <input
            class="search-input"
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <div class="dropdown">
          <div class="dropbtn" @click="displayDropdown()">
            Filter by Region <i class="flaticon-down-arrow"></i>
          </div>
          <div id="myDropdown" v-if="isDropdownActive" class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
      <div class="contries">
        <div
          class="country-item"
          v-for="country in countries"
          :key="country.name"
        >
          <div class="item-img">
            <router-link
              v-bind:to="{
                name: 'country-detail',
                params: { code: country.code },
              }"
            >
              <img :src="country.flag" alt="" />
            </router-link>
          </div>
          <div class="item-text-container">
            <p class="item-title">{{ country.name }}</p>
            <div class="item-text-content">
              <p class="item-text">
                Population: <span>{{ country.population }}</span>
              </p>
              <p class="item-text">
                Region: <span>{{ country.region }}</span>
              </p>
              <p class="item-text">
                Capital: <span>{{ country.capital }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { HTTP } from "../http-common";
export default {
  name: "Home",
  data() {
    return {
      isDropdownActive: "",
      countries: {},
    };
  },
  methods: {
    getAllCountries() {
      HTTP.get(`http://localhost:8080/all`)
        .then((response) => {
          this.countries = response.data;
          console.log(this.countries);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    getCountriesByName() {
      HTTP.get(`http://localhost:8080/code/`)
        .then((response) => {
          this.countries = response.data;
          console.log(this.countries);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    displayDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
    },
  },
  mounted() {
    this.getCountriesByName();
    this.getAllCountries();
  },
};
</script>
