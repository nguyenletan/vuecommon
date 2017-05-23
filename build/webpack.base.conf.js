var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js',
    styles: [
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './plugins/font-awesome/css/font-awesome.css',
      './plugins/jquery-scrollbar/jquery.scrollbar.css',
      './plugins/bootstrap-select2/select2.css',
      './plugins/switchery/css/switchery.min.css',
      './plugins/nvd3/nv.d3.min.css',
      './plugins/mapplic/css/mapplic.css',
      './plugins/rickshaw/rickshaw.min.css',
      './plugins/bootstrap-datepicker/css/datepicker3.css',
      './plugins/bootstrap3-wysihtml5/bootstrap3-wysihtml5.min.css',
      './plugins/bootstrap-tag/bootstrap-tagsinput.css',
      './plugins/dropzone/css/dropzone.css',
      './plugins/bootstrap-daterangepicker/daterangepicker-bs3.css',
      './plugins/bootstrap-timepicker/bootstrap-timepicker.min.css',
      './plugins/jquery-metrojs/MetroJs.css',
      './plugins/codrops-dialogFx/dialog.css',
      './plugins/codrops-dialogFx/dialog-sandra.css',
      './plugins/jquery-datatable/media/css/dataTables.bootstrap.min.css',
      './plugins/jquery-datatable/extensions/FixedColumns/css/dataTables.fixedColumns.min.css',
      './plugins/datatables-responsive/css/datatables.responsive.css',
      './plugins/jquery-dynatree/skin/ui.dynatree.css',
      './plugins/ion-slider/css/ion.rangeSlider.css',
      './plugins/ion-slider/css/ion.rangeSlider.skinFlat.css',
      './plugins/jquery-nouislider/jquery.nouislider.css',
      './plugins/pace/themes/blue/pace-theme-flash.css',
      './src/core/less/pages.less',
      './src/assets/less/style.less',
      './src/assets/less/custom.less'
    ],
    plugins: [
      './node_modules/jquery/dist/jquery.min.js',
      './plugins/modernizr.custom.js',
      './node_modules/lodash/lodash.js',
      './plugins/pace/pace.js',
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './plugins/jquery-ui/jquery-ui.min.js',
      './plugins/jquery/jquery-easy.js',
      './plugins/jquery-unveil/jquery.unveil.min.js',
      './plugins/jquery-bez/jquery.bez.min.js',
      './plugins/jquery-ios-list/jquery.ioslist.min.js',
      './plugins/jquery-actual/jquery.actual.min.js',
      './plugins/jquery-scrollbar/jquery.scrollbar.min.js',
      './plugins/bootstrap-select2/select2.full.min.js',
      './plugins/classie/classie.js',
      './plugins/switchery/js/switchery.min.js',
      './plugins/jquery-validation/js/jquery.validate.min.js',
      './plugins/nvd3/lib/d3.v3.js',
      './plugins/nvd3/nv.d3.min.js',
      './plugins/nvd3/src/tooltip.js',
      './plugins/nvd3/src/interactiveLayer.js',
      './plugins/nvd3/src/models/axis.js',
      './plugins/nvd3/src/models/line.js',
      './plugins/nvd3/src/models/lineWithFocusChart.js',
      './plugins/mapplic/js/hammer.js',
      './plugins/mapplic/js/jquery.mousewheel.js',
      './plugins/mapplic/js/mapplic.js',
      './plugins/rickshaw/rickshaw.min.js',
      './plugins/jquery-metrojs/MetroJs.min.js',
      './plugins/jquery-sparkline/jquery.sparkline.min.js',
      './plugins/skycons/skycons.js',
      './plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
      './plugins/bootstrap-daterangepicker/daterangepicker.js',
      './plugins/jquery-autonumeric/autoNumeric.js',
      './plugins/dropzone/dropzone.min.js',
      './plugins/bootstrap-tag/bootstrap-tagsinput.js',
      './plugins/jquery-inputmask/jquery.inputmask.min.js',
      './plugins/moment/moment.min.js',
      './plugins/boostrap-form-wizard/js/jquery.bootstrap.wizard.min.js',
      './plugins/bootstrap-timepicker/bootstrap-timepicker.min.js',
      './plugins/jquery-datatable/media/js/jquery.dataTables.min.js',
      './plugins/jquery-datatable/media/js/dataTables.bootstrap.min.js',
      './plugins/jquery-datatable/extensions/Bootstrap/jquery-datatable-bootstrap.js',
      './plugins/jquery-datatable/extensions/TableTools/js/dataTables.tableTools.min.js',
      './plugins/datatables-responsive/js/datatables.responsive.js',
      './plugins/jquery-dynatree/jquery.dynatree.min.js',
      './plugins/ion-slider/js/ion.rangeSlider.min.js',
      './plugins/jquery-nouislider/jquery.nouislider.min.js',
      './plugins/jquery-nouislider/jquery.liblink.js',
      './plugins/imagesloaded/imagesloaded.pkgd.min.js',
      './plugins/jquery-isotope/isotope.pkgd.min.js',
      './plugins/codrops-dialogFx/dialogFx.js',
      './plugins/interactjs/interact.min.js',
      './plugins/moment/moment-with-locales.min.js',
      './plugins/snap-svg/snap.svg.min.js'
    ],
    pages: [
      './src/core/js/pages.calendar.js',
      './src/core/js/pages.js'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    noParse: [
      /moment.min.js/,
      /moment-with-locales.min.js/,
      /daterangepicker.js/,
      /dataTables.bootstrap.min.js/,
      /dataTables.tableTools.min.js/,
      /rickshaw.min.js/,
      /pages.calendar.js/,
      /pages.js/],
    rules: [
      /* {
       test: /\.(js|vue)$/,
       loader: 'eslint-loader',
       enforce: 'pre',
       exclude: [/\/node_modules\//, /\/plugins\//],
       include: [resolve('src'), resolve('test')],
       options: {
       formatter: require('eslint-friendly-formatter')
       }
       },*/
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        exclude: [/\/node_modules\//, /\/plugins\//, '/\/scripts\//'],
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg|cur)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        },
        
      }
    ]
  }
}
