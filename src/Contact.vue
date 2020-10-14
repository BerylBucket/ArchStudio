<template>
  <div>
    <Navbar active="3"></Navbar>
    <Intro>
      <template v-slot:title>Contact</template>
      <template v-slot:heading>Tell us about your project</template>
      <template v-slot:body>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</template>
    </Intro>
    <section id="conDet">
      <Ln></Ln>
      <h2>Contact Details</h2>
      <div id="conInfo">
        <OfficeInfo>
          <template v-slot:office>Main Office</template>
          <template v-slot:email>archone@mail.com</template>
          <template v-slot:address>1892 Chenoweth Drive TN</template>
          <template v-slot:phone>123-456-3451</template>
        </OfficeInfo>
        <OfficeInfo>
          <template v-slot:office>Office II</template>
          <template v-slot:email>archtwo@mail.com</template>
          <template v-slot:address>
            3399 Wines Lane TX</template>
          <template v-slot:phone>
            832-123-4321</template>
        </OfficeInfo>
      </div>
    </section>
    <section>
      <div id="map"></div>
    </section>
    <section id="contactForm">
      <h2>Connect with us</h2>
      <ArchForm>
        <input placeholder="Name"></input><input placeholder="Email"></input><textarea placeholder="Message"></textarea>
      </ArchForm>
    </section>
    <Foot></Foot>
  </div>
</template>

<script>
  import "leaflet/dist/leaflet.css";
  import L from "leaflet";

  import Navbar from "./components/Navbar";
  import Intro from "./components/Intro";
  import Ln from "./components/Ln";
  import OfficeInfo from "./components/OfficeInfo";
  import ArchForm from "./components/ArchForm";
  import Foot from "./components/Foot";
  
  export default {
    components: {
      Navbar, Intro, Ln, OfficeInfo, ArchForm, Foot
    },
    mounted(){
      this.initMap();
    },
    methods: {
      initMap(){
        var map = L.map("map").setView([34.3, -90], 5);
        var mapboxTkn = "pk.eyJ1IjoiYmVyeWxidWNrZXQiLCJhIjoiY2tnMGN5bnpzMDVvdDJ5bzRzYWNycGFwdCJ9.qL7LzKJLPi_1VA_Hh9dEpQ";
        L.tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken: mapboxTkn
          }).addTo(map);
        var myIcon = L.icon({
          iconUrl: "https://raw.githubusercontent.com/zuolizhu/arch_studio_frontendmentor/master/static/icons/icon-location.svg",
          iconSize: [38, 95],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76]
        });
        var off1 = L.marker([35.133276, -85.717512], { icon: myIcon }).addTo(map);
        var off2 = L.marker([31.998111, -94.7753252], { icon: myIcon }).addTo(map);
      }
    }
  }
</script>

<style scoped>
  *{
    font-size: 20px;
  }
  #conInfo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 3rem;
    margin-top: 2rem;
  }
  #conInfo div {
    display: inline-block;
  }
  section:not(:first-of-type) {
    margin-top: 8rem;
  }
  #conDet {
    padding: 0 3rem;
  }
  #contactForm {
    padding: 0 3rem;
  }
  #map {
    height: 380px;
  }
</style>
