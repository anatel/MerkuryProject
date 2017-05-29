System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
      '@angular': 'node_modules/@angular',
      'rxjs'    : 'node_modules/rxjs',
			'angular2-moment': 'node_modules/angular2-moment',
			'moment': 'node_modules/moment',
			'angular-pipes'  : 'node_modules/angular-pipes'
    },
    paths: {
      'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    meta: {
      '@angular/*': {'format': 'cjs'}
    },
    packages: {
      'app'                              	: {main: 'main', defaultExtension: 'ts'},
      'rxjs'                             	: {main: 'Rx'},
      '@angular/core'                    	: {main: 'core.umd.min.js'},
      '@angular/common'                  	: {main: 'common.umd.min.js'},
      '@angular/compiler'                	: {main: 'compiler.umd.min.js'},
      '@angular/platform-browser'        	: {main: 'platform-browser.umd.min.js'},
      '@angular/platform-browser-dynamic'	: {main: 'platform-browser-dynamic.umd.min.js'},
			'@angular/router'									 	: {main: 'router.umd.js'},
			'@angular/http'									 		: {main: 'http.umd.js'},
			'moment'														: {main: './moment.js', defaultExtension: 'js'},
			'angular2-moment'										: {main: './index.js', defaultExtension:  'js'}
    }
});