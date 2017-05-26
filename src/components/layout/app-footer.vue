<template>
  <div id="app-footer" class="container-fluid container-fixed-lg footer">
    <!-- START COPYRIGHT -->
    <div class="copyright sm-text-center">
      <p class="small no-margin pull-left sm-pull-reset">
        <span class="hint-text">Copyright &copy; 2016 </span>
        <span class="font-montserrat">NashTech</span>.
        <span class="hint-text">All rights reserved. </span>
        <span class="sm-block"><a href="javascript:void(0);" class="m-l-10 m-r-10">Terms of use</a> | <a
          href="javascript:void(0);" class="m-l-10">Privacy Policy</a></span>
      </p>
      <p class="small no-margin pull-right sm-pull-reset">
        <a href="javascript:void(0);">Hand-crafted</a> <span class="hint-text">&amp; Made with Love</span>
      </p>
      <div class="clearfix"></div>
    </div>
  </div>
  <!-- END COPYRIGHT -->
</template>

<script>
  export default {
    name: 'appFooter',
    mounted: () => {
      console.log('app-footer - mounted')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
