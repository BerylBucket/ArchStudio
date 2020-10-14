<template>
  <div>
    <Navbar active="1"></Navbar>
    <section id="photos">
      <template v-for="ima in imgs">
        <PortImg :img="ima.url" :key="ima.id">
          <template v-slot:name>{{ ima.name }}</template>
          <template v-slot:date>{{ ima.date }}</template>
        </PortImg>
      </template>
    </section>
    <Foot></Foot>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import PortImg from "./components/img/PortImg";
import Foot from "./components/Foot";

export default {
  components: {
    Navbar,
    PortImg,
    Foot,
  },
  data() {
    return {
      imgs: [
        {
          url:
            "https://i.ibb.co/LRtYVzF/8-A075-C0-D-1-DD1-436-F-82-F0-F021-DC523-ED0.jpg",
          name: "Seraph Station",
          date: "September 2019",
          id: "img1",
        },
        {
          url: "https://i.ibb.co/djskMdZ/pexels-scott-webb-532561.jpg",
          name: "Eebox Building",
          date: "August 2017",
          id: "img2",
        },
        {
          url:
            "https://i.ibb.co/PmY2DR1/23-B2-D372-9288-4-AC5-B22-E-592-CBFD1-C57-F.jpg",
          name: "Federal II Tower",
          date: "March 2017",
          id: "img3",
        },
        {
          url:
            "https://i.ibb.co/HKTjKck/FA26-FC69-1523-4-E38-97-EA-47-C218-EE375-B.jpg",
          name: "Project Del Sol",
          date: "January 2016",
          id: "img4",
        },
        {
          url:
            "https://i.ibb.co/T08S8tp/49-D8-D034-211-C-4-DE4-AD62-FCB6-D596-CE0-E.jpg",
          name: "Le Prototype",
          date: "October 2015",
          id: "img5",
        },
        {
          url:
            "https://i.ibb.co/7gT2J5b/D4-A03-BE9-175-E-47-BF-89-E2-6-F80-A9-A26407.jpg",
          name: "228B Tower",
          date: "April 2019",
          id: "img6",
        },
        {
          url: "https://i.ibb.co/C7nBNmB/pexels-ingo-joseph-1694650.jpg",
          name: "Grand Eliskal Hotel",
          date: "December 2015",
          id: "img7",
        },
        {
          url:
            "https://i.ibb.co/tHJk7CY/6-A06-E7-A1-EEB9-4-CF1-BA1-B-2909-AAA3-E85-A.jpg",
          name: "History Tower",
          date: "August 2018",
          id: "img8",
        },
        {
          url:
            "https://i.ibb.co/qxFzKvm/EA58006-E-0608-4-F92-A397-2-A0-D883-EC4-DF.jpg",
          name: "Hypers",
          date: "January 2020",
          id: "img9",
        },
        {
          url: "https://i.ibb.co/dgFhL2W/pexels-pixabay-358574.jpg",
          name: "SJDV Tower",
          date: "May 2016",
          id: "img10",
        },
        {
          url: "https://i.ibb.co/WgVnKSD/bl.jpg",
          name: "Trinity Black Tower",
          date: "September 2015",
          id: "img11",
        },
        {
          url:
            "https://i.ibb.co/d79njHJ/14-AEE1-A9-6469-42-D3-A4-E2-6-C09-BDF6506-E.jpg",
          name: "Project Paramour",
          date: "July 2020",
          id: "img12",
        },
      ],
    };
  },
};
</script>

<style>
#photos {
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 1fr));
  grid-gap: 1rem;
  padding: 20px;
  margin-top: 70px;
}
#navbar {
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 9;
}
@media (min-width: 680px) {
  #photos {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
}
@media (min-width: 1000px) {
  #photos {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
}
</style>
