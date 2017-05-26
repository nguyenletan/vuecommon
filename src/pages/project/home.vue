<template>
  <div id="home-page">
    <div class="content">
      <!-- START PAGE COVER -->
      <div class="container-fluid container-fixed-lg">
        <ul class="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
        <!-- END BREADCRUMB -->
        <h3 class="page-title">Home</h3>
      </div>
      <div class="container-fluid container-fixed-lg">
        <!-- YOU CAN REMOVE .container-fixed-lg TO DISABLE THE FEATURE WHERE THE CONTENT
             ALIGNS TO THE CENTER WITHOUT STRETCHING UGLY ON 1800PX(1080P & 4/5K MONITORS) UP WORDS SCREEN
         -->
        <!-- CONTENT GOES HERE-->
      </div>
    </div>
  </div>
  </template>

  <script>
    export default {
      name: 'homePage',
      mounted: () => {
        console.log('home - mounted')
      }
    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
