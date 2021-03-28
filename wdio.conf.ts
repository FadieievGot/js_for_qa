exports.config = {
    
    runner: 'local',
    specs: [
        './test/specs/suites/**/*.ts'
    ],
    exclude: [
    ],
    capabilities: [{
        maxInstances: 3,
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--disable-notifications', '--disable-infobars'],
        },
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://93.126.97.71:10082/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    //
    // =====
    // Hooks
    // =====

    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
     before: function (capabilities, specs) {
        browser.addCommand("waitAndClick", function () {
            // `this` is return value of $(selector)
            this.waitForClickable();
            this.click();
        }, true)
    },

    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeSuite: function (suite) {
        browser.setWindowSize(1600, 1200);
    },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    beforeTest: function (test, context) {
        // browser.setWindowSize(1600, 1200);
        browser.url('');
    },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        afterEach(function(){
            browser.reloadSession();
        });
    },
}
