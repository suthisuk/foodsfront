//ส่วนHTML
<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">ร้านอาหารตามสั่ง</a>
  <button class="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navContent">
    <ul class="navbar-nav ml-auto">
    <!-- ปุ่มสำหรับกำหนดค่า Router -->
      <li class="nav-item">
        <router-link :to="{name: 'FoodList'}" class="nav-link">รายการอาหาร</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'CreateFood'}" class="nav-link">เพิ่มรายการอาหาร</router-link>
      </li>
    </ul>
  </div>
</nav>
    

    <!-- ส่วนแสดงผลของ Router ที่เลือก -->
    <router-view></router-view>
  </div>
</template>

//ส่วน JS
<script>
import { store } from "./store/store";
export default {
  store
};
</script>

//ส่วน CSS
<style scope>
</style>