<template>
    <nav id="app-sidebar" class="page-sidebar" data-pages="sidebar">
        <!-- BEGIN SIDEBAR MENU TOP TRAY CONTENT-->
        <div class="sidebar-overlay-slide from-top" id="appMenu">
            <div class="row">
                <div class="col-xs-6 m-t-20 no-padding">
                    <a href="javascript:void(0);" class="p-l-10"><img
                            src="../assets/img/demo/add_more.svg"
                            alt="socail">
                    </a>
                </div>
            </div>
        </div>
        <!-- END SIDEBAR MENU TOP TRAY CONTENT-->
        <!-- BEGIN SIDEBAR MENU HEADER-->
        <div class="sidebar-header">
            <span class="white-logo text-white">NASHTECH</span>
            <div class="sidebar-header-controls">
                <button type="button" class="btn btn-xs sidebar-slide-toggle btn-link m-l-20"
                        data-pages-toggle="#appMenu">
                    <i class="fa fa-angle-down fs-16"></i>
                </button>
                <button type="button" class="btn btn-link visible-lg-inline" data-toggle-pin="sidebar"><i
                        class="fa fs-12"></i>
                </button>
            </div>
        </div>
        <!-- END SIDEBAR MENU HEADER-->
        <!-- START SIDEBAR MENU -->
        <div class="sidebar-menu">
            <!-- BEGIN SIDEBAR MENU ITEMS-->
            <ul class="menu-items">
                <li class="m-t-30 ">
                    <a href="#" class="detailed">
                        <span class="title">Home</span>
                        <span class="details">9 New Updates</span>
                    </a>
                    <span class="bg-primary icon-thumbnail"><i class="pg-home"></i></span>
                </li>
                <li>
                    <a href="javascript:;">
                        <span class="title">Administration</span>
                        <span class=" arrow"></span>
                    </a>
                    <span class="icon-thumbnail">A</span>
                    <ul class="sub-menu">
                        <li class="">
                            <a href="#">Users</a>
                            <span class="icon-thumbnail">u</span>
                        </li>
                        <li >
                            <a href="#"><span class="title">Roles</span></a>
                            <span class="icon-thumbnail">r</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;">
                        <span class="title">Demo Pages</span><span class=" arrow"></span>
                    </a>
                    <span class="icon-thumbnail">Ui</span>
                    <ul class="sub-menu">

                        <li class="">
                            <a href="#">Buttons</a>
                            <span class="icon-thumbnail">b</span>
                        </li>
                        <li class="">
                            <a href="#">Notifications</a>
                            <span class="icon-thumbnail">n</span>
                        </li>
                        <li class="">
                            <a href="#">Modals</a>
                            <span class="icon-thumbnail">m</span>
                        </li>
                        <li class="">
                            <a href="#">Tabs &amp; Accordions</a>
                            <span class="icon-thumbnail">ta</span>
                        </li>
                        <li class="">
                            <a href="#">Sliders</a>
                            <span class="icon-thumbnail">s</span>
                        </li>
                        <li class="">
                            <a href="#">Tree View</a>
                            <span class="icon-thumbnail">tv</span>
                        </li>

                        <li class="">
                            <a href="#">Form Elements</a>
                            <span class="icon-thumbnail"><i class="pg-form"></i></span>
                        </li>


                        <li class="">
                            <a href="#">404 Page</a>
                            <span class="icon-thumbnail">pg</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="clearfix"></div>
        </div>
        <!-- END SIDEBAR MENU -->
    </nav>
    <!-- END SIDEBAR -->
    <!-- END SIDEBPANEL-->
</template>

<script>
  export default {
    name: 'appSidebar',

    mounted: () => {
      console.log('app-sidebar - mounted')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
