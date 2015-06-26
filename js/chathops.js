/**
 * globals
 */
var MOBILE_VIEW = 992;

$(function () {
    'use strict';

    function getWidth() {
        return window.innerWidth;
    }

    var App = {
        /**
         * init
         */
        init: function () {
            this.cacheElements();
            this.bindEvents();
            this.checkViewport();
        },

        /**
         * cache elements
         */
        cacheElements: function () {
            this.$viewport = $(window);
            this.$pageWrapper = $("#page-wrapper");
            this.$platforms = $("#toggle-platforms");
            this.$conversations = $("#toggle-conversations");
        },

        /**
         * bind events to elements
         */
        bindEvents: function () {
            this.$viewport.on('resize', this.viewportResize.bind(this));
            this.$platforms.on('click', this.togglePlatforms.bind(this));
            this.$conversations.on('click', this.toggleConversations.bind(this));
        },

        /**
         * trigger checkviewport on resize
         */
        viewportResize: function () {
            this.checkViewport();
        },

        /**
         * toggles platforms sidebar
         */
        togglePlatforms: function (e) {
            this.$pageWrapper.toggleClass('open-platforms');

            $.cookie('toggle-platforms', this.$pageWrapper.hasClass("open-platforms"));
        },
        
        /**
         * toggles conversations sidebar
         */
        toggleConversations: function (e) {
            this.$pageWrapper.toggleClass('open-conversations');

            $.cookie('toggle-conversations', this.$pageWrapper.hasClass("open-conversations"));
        },

        /**
         * Checks the viewport and toggles sidebar if toggled
         */
        checkViewport: function () {
            if (getWidth() >= MOBILE_VIEW) {
                if ($.cookie("toggle-platforms") === undefined) {
                    this.$pageWrapper.addClass("open-platforms");
                } else {
                    if ($.cookie('toggle-platforms') == 'true') {
                        this.$pageWrapper.addClass("open-platforms");
                    } else {
                        this.$pageWrapper.removeClass("open-platforms");
                    }
                }
            } else {
                this.$pageWrapper.removeClass("open-platforms");
            }
            
            if (getWidth() >= MOBILE_VIEW) {
                if ($.cookie("toggle-conversations") === undefined) {
                    this.$pageWrapper.addClass("open-conversations");
                } else {
                    if ($.cookie('toggle-conversations') == 'true') {
                        this.$pageWrapper.addClass("open-conversations");
                    } else {
                        this.$pageWrapper.removeClass("open-conversations");
                    }
                }
            } else {
                this.$pageWrapper.removeClass("open-conversations");
            }
        },

    };

    App.init();

});