import { join } from 'path';

import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  API_DEST = 'https://damishley.herokuapp.com/api/';
  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
    'node_modules/font-awesome/fonts/**'
  ];
  FONTS_SRC2 = [
    'node_modules/bootstrap/fonts/**'
  ];

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    this.TYPED_COMPILE_INTERVAL = 5;

    this.SYSTEM_CONFIG_DEV.paths['angular2-jwt'] =
      `${this.APP_BASE}node_modules/angular2-jwt/angular2-jwt`;

    this.SYSTEM_BUILDER_CONFIG.packages['angular2-jwt'] = 
      {
        main: 'angular2-jwt.js',
        defaultExtension: 'js'
      }

    this.SYSTEM_CONFIG_DEV.paths['ng2-bootstrap'] = 
      `${this.APP_BASE}node_modules/ng2-bootstrap/ng2-bootstrap`;

    this.SYSTEM_BUILDER_CONFIG.packages['ng2-bootstrap'] = {
        main: 'ng2-bootstrap.js',
        defaultExtension: 'js'
    }
    this.SYSTEM_CONFIG_DEV.paths['ng-semantic'] = 
      `${this.APP_BASE}node_modules/ng-semantic/ng-semantic`;

    this.SYSTEM_BUILDER_CONFIG.packages['ng-semantic'] = {
        main: 'ng-semantic.js',
        defaultExtension: 'js'
    }

    this.SYSTEM_CONFIG_DEV.paths['aws-sdk'] = 
      `${this.APP_BASE}node_modules/aws-sdk/dist/aws-sdk`;

    this.SYSTEM_BUILDER_CONFIG.packages['aws-sdk'] = 
      {
        main: 'dist/aws-sdk.js',
        defaultExtension: 'js'
      }

    this.SYSTEM_CONFIG_DEV.paths['primeng'] = 
      `${this.APP_BASE}node_modules/primeng/primeng`;

    this.SYSTEM_BUILDER_CONFIG.packages['primeng'] = 
      {
        main: 'primeng',
        defaultExtension: 'js'
      }
    
    this.SYSTEM_CONFIG_DEV.paths['ng2-ckeditor'] =
        `${this.APP_BASE}node_modules/ng2-ckeditor/lib/CKEditor`;

    this.SYSTEM_BUILDER_CONFIG.packages['ng2-ckeditor'] = 
      {
        main: 'lib/CKEditor.js',
        defaultExtension: 'js'
      }

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src: 'lodash/lodash.min.js', inject: 'libs'},
      {src: 'web-animations-js/web-animations.min.js', inject: 'libs'},
      {src: 'font-awesome/css/font-awesome.min.css', inject: true},
      {src: 'bootstrap/dist/css/bootstrap.min.css', inject: true},
      {src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs'},
      {src: 'primeng/resources/primeng.min.css', inject: true },
      {src: 'aws-sdk/dist/aws-sdk.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      {src: `${this.APP_SRC}/assets/libs/ckeditor/ckeditor.js`, inject: 'libs', vendor: true},
      {src: `${this.APP_SRC}/assets/libs/semantic/dist/semantic.min.js`, inject: 'libs', vendor: true}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
