<template>
  <div id="main-layout">
    <app-sidebar></app-sidebar>

    <!-- START PAGE-CONTAINER -->
    <div class="page-container ">

      <app-header class="header"></app-header>

      <!-- START PAGE CONTENT WRAPPER -->
      <div class="page-content-wrapper ">

        <router-view></router-view>

        <app-footer></app-footer>

      </div>
      <!-- END PAGE CONTENT WRAPPER -->

    </div>
    <!-- END PAGE CONTAINER -->

    <app-overlay></app-overlay>

    <div class="modal fade slide-up disable-scroll" id="confirmLeave" tabindex="-1" role="dialog"
         aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content-wrapper">
          <div class="modal-content">
            <div class="modal-header clearfix text-left">
              <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  <i class="pg-close fs-14"></i>
              </button>-->
              <h5 class="semi-bold">Comfirmation</h5>
            </div>
            <div class="modal-body">
              <p class="no-margin">Are you sure to ignore these changes and move away?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary btn-cons  pull-left inline"
                      data-dismiss="modal"
                      id="confirmLeave_Yes">Yes
              </button>
              <button type="button" class="btn btn-default btn-cons no-margin pull-left inline"
                      data-dismiss="modal" id="confirmLeave_No">No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import '../plugins/pace/pace.js'
  import 'moment/moment.js'
  import 'bootstrap/dist/js/bootstrap.min.js'
  import '../plugins/jquery-ui/jquery-ui2.min'
  import '../plugins/jquery/jquery-easy'
  import '../plugins/jquery-unveil/jquery.unveil.min'
  import '../plugins/jquery-bez/jquery.bez.min'
  import '../plugins/jquery-ios-list/jquery.ioslist.min'
  import '../plugins/jquery-actual/jquery.actual.min'
  import '../plugins/jquery-scrollbar/jquery.scrollbar'

  import '../plugins/bootstrap-select2/select2.full'
  import '../plugins/classie/classie'
  import '../plugins/switchery/js/switchery.min'
  import '../plugins/jquery-validation/js/jquery.validate.min'
  import '../plugins/nvd3/lib/d3.v3'
  import '../plugins/nvd3/nv.d3.min'
  import '../plugins/nvd3/src/tooltip'
  import '../plugins/nvd3/src/interactiveLayer'
  import '../plugins/nvd3/src/models/axis'
  import '../plugins/nvd3/src/models/line'
  import '../plugins/nvd3/src/models/lineWithFocusChart'
  import '../plugins/mapplic/js/hammer'
  import '../plugins/mapplic/js/jquery.mousewheel'
  import '../plugins/mapplic/js/mapplic'

  import '../plugins/jquery-sparkline/jquery.sparkline.min'
  import '../plugins/skycons/skycons'
  import '../plugins/bootstrap-datepicker/js/bootstrap-datepicker'
  import '../plugins/bootstrap-daterangepicker/daterangepicker'
  import '../plugins/jquery-autonumeric/autoNumeric'
  import '../plugins/dropzone/dropzone-amd-module.min'
  import '../plugins/bootstrap-tag/bootstrap-tagsinput'
  import '../plugins/jquery-inputmask/jquery.inputmask.min'

  import '../plugins/boostrap-form-wizard/js/jquery.bootstrap.wizard.min'
  import '../plugins/bootstrap-timepicker/bootstrap-timepicker'
  import '../plugins/jquery-datatable/media/js/jquery.dataTables'
  import '../plugins/jquery-datatable/media/js/dataTables.bootstrap.js'
  import '../plugins/jquery-datatable/extensions/Bootstrap/jquery-datatable-bootstrap.js'
  import '../plugins/jquery-datatable/extensions/TableTools/js/dataTables.tableTools.js'
  import '../plugins/datatables-responsive/js/datatables.responsive'
  import '../plugins/jquery-dynatree/jquery.dynatree.min'
  import '../plugins/ion-slider/js/ion.rangeSlider'
  import '../plugins/jquery-nouislider/jquery.nouislider.min'
  import '../plugins/jquery-nouislider/jquery.liblink'
  import '../plugins/imagesloaded/imagesloaded.pkgd.min'

  import 'isotope-layout/dist/isotope.pkgd'
  import '../plugins/codrops-dialogFx/dialogFx'
  import '../plugins/interactjs/interact.min'
  import '../plugins/snap-svg/snap.svg'

  import './core/js/pages'
  import appSidebar from './components/layout/app-sidebar.vue'
  import appHeader from './components/layout/app-header.vue'
  import appOverlay from './components/layout/app-overlay.vue'
  import appFooter from './components/layout/app-footer.vue'
  // eslint-disable-next-line no-unused-vars
  const modernizr = require('modernizr')
  export default {
    name: 'layout',
    components: {
      appSidebar,
      appHeader,
      appOverlay,
      appFooter
    },
    created: () => {
      console.log('layout component is created')
      window.jquery = window.jQuery = window.$ = $
    },
    mounted: () => {
      console.log('layout - mounted')
      console.log($('body'))
      $.Pages.init()
    }
  }
</script>
