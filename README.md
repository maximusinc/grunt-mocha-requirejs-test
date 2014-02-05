grunt-mocha-requirejs-test
==========================
This is example for testing project with RequireJS+Backbone
Testing framework mocha+chai
For running test use PhantomJS

Change Settings in Gruntfile.js

```javascript
mocha: {
            all: {
                options: {
                    log: true,
                    reporter: 'Spec',
                    run: false,
                    timeout: 20000,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },
