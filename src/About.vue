<template>
  <Navbar active="1"></Navbar>
  <Intro>
    <template v-slot:title>About</template>
    <template v-slot:heading>Your team of
professionals</template>
    <template v-slot:body>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</template>
  </Intro>
  <section id="heritage">
    <Sect img="https://raw.githubusercontent.com/BerylBucket/ArchStudio/dev/src/assets/about/heritage.JPG" :showtitle="false">
      <template v-slot:heading>Our Heritage</template>
      <template v-slot:body>
        <p>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
        <p>Specializing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. </p>
        <p>Our small team of world-class professionals provides input on every project.</p>
      </template>
    </Sect>
  </section>
  <section id="ourLeaders">
    <h2>The Leaders</h2>
    <div id="leaders">
      <template v-for="x in leaders">
        <LeadCard :img="x.img">
          <template v-slot:name>{{x.name}}</template>
          <template v-slot:role>{{x.role}}</template>
        </LeadCard>
      </template>
    </div>
  </section>
  <Foot></Foot>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Intro from "./components/Intro";
  import Sect from "./components/Sect";
  import LeadCard from "./components/LeadCard";
  import Foot from "./components/Foot";
  
  export default {
    components {
      Navbar, Intro, Sect, LeadCard, Foot
    },
    data() {
      return {
        leaders: [
          {
            img: "https://i.ibb.co/7nGGvxw/CD46-C2-C3-BC39-4097-A03-F-753-CFB6-DA2-C5.jpg",
            name: "Jake Richards",
            role: "Chief Architect"
          },
          {
            img: "https://i.ibb.co/jGyGtTW/F456721-D-9088-463-E-8-B14-6-CE13-BC57-C93.jpg",
            name: "Thompson Smith",
            role: "Head of Finance"
          },
          {
            img: "https://i.ibb.co/0ySBPzd/0-A7-D5-C5-B-05-C3-44-BE-A36-A-B67158-BBE29-C.jpg",
            name: "Jackson Rourke",
            role: "Lead Designer"
          },
          {
            img: "https://i.ibb.co/ySRZML9/1074-A2-B4-B953-401-E-B9-E2-9025-B5-BB6474.jpg",
            name: "Maria Simpson",
            role: "Senior Architect"
          }
         ]
        }
     }
  }
</script>

<style scoped>
  #heritage{
    margin-top: 2rem;
  }
  p{
  margin-top: 2rem;
  color: #60636d;
}

#ourLeaders h2{
  margin-bottom: 2rem;
  padding: 0 2rem;
}

#leaders{
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  padding: 1rem;
}

@media (min-width:680px){
  #leaders{
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
}
</style>
