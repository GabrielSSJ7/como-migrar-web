<template>
  <div>
    <my-header></my-header>
    <div style="height: 150px"></div>
    <section1></section1>
    
    <section2></section2>
    <div style="height: 120px"></div>
    <section3></section3>
    <div style="height: 100px"></div>
    <section4></section4>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  import Section1 from '../components/Section1.vue'
  import Section2 from '../components/Section2.vue'
  import Section3 from '../components/Section3.vue'
  import Section4 from '../components/Section4.vue'
  import MyFooter from '../components/Footer.vue'
  export default {
    name: 'Home',
    components: {
      MyHeader,
      Section1,
      Section2,
      Section3,
      Section4,
      MyFooter
    },
  }
</script>
