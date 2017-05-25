<template>
    <div id="layout">
        <app-sidebar></app-sidebar>

        <!-- START PAGE-CONTAINER -->
        <div class="page-container ">

            <app-header class="header"></app-header>

            <!-- START PAGE CONTENT WRAPPER -->
            <div class="page-content-wrapper ">

                <router-view></router-view>

                <app-footer class="container-fluid container-fixed-lg footer"></app-footer>

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
  import jquery from 'jquery'
  import './core/js/pages'
  import appSidebar from './components/app-sidebar.vue'
  import appHeader from './components/app-header.vue'
  import appOverlay from './components/app-overlay.vue'
  import appFooter from './components/app-footer.vue'

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
      window.jQuery = window.$ = jquery
    },
    mounted: () => {
      console.log('layout - mounted')
      jquery.Pages.init()
    }
  }
</script>
