<template>
  <div class="country-detail">
    <div class="container">
      <div class="back-btn-container">
        <router-link to="/">
          <div class="back-btn"><i class="flaticon-left-arrow"></i>Back</div>
        </router-link>
      </div>
      <div class="detail-container">
        <div class="detail-item-img">
          <img src="../assets/germany.png" alt="" />
        </div>
        <div class="detail-item-text">
          <div class="detail-item-header">
            <div class="detail-item-left">
              <p class="item-title-detail">Brasil</p>
              <p class="item-text">Native Name: <span>Job</span></p>
              <p class="item-text">Population: <span>81,770,900</span></p>
              <p class="item-text">Region: <span>Europe</span></p>
              <p class="item-text">Sub Region: <span>Berlin</span></p>
              <p class="item-text">Capital: <span>Berlin</span></p>
            </div>
            <div class="detail-item-right">
              <p class="item-text">Top Level Domain: <span>be</span></p>
              <p class="item-text">Currencies: <span>Euro</span></p>
              <p class="item-text">
                Language: <span>Dutch, French, German</span>
              </p>
            </div>
          </div>
          <div class="detail-item-bottom">
            <div class="item-text">Borders Countries:</div>
            <div class="border-btn-container">
              <div class="border-btn">France</div>
              <div class="border-btn">Germany</div>
              <div class="border-btn">Brasil</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
