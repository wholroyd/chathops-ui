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
            this.$platformsWrapper = $("#platforms");
            this.$conversations = $("#toggle-conversations");
            this.$conversationsWrapper = $("#conversations");
        },

        /**
         * bind events to elements
         */
        bindEvents: function () {
            this.$viewport.on('resize', this.viewportResize.bind(this));
//            this.$platforms.on('click', this.togglePlatforms.bind(this));
//            this.$conversations.on('click', this.toggleConversations.bind(this));
        },
        
        /**
         * trigger checkviewport on resize
         */
        viewportResize: function () {
            this.checkViewport();
        },

//        /**
//         * toggles platforms sidebar
//         */
//        togglePlatforms: function (e) {
//            this.$platformsWrapper.toggleClass('sidebar-closed');
//
//            $.cookie('toggle-platforms', this.$platformsWrapper.hasClass("sidebar-closed"));
//        },
//        
//        /**
//         * toggles conversations sidebar
//         */
//        toggleConversations: function (e) {
//            this.$conversationsWrapper.toggleClass('sidebar-closed');
//
//            $.cookie('toggle-conversations', this.$conversationsWrapper.hasClass("sidebar-closed"));
//        },

        /**
         * Checks the viewport and toggles sidebar if toggled
         */
        checkViewport: function () {
            if (getWidth() >= MOBILE_VIEW) {
                if ($.cookie("toggle-platforms") === undefined) {
                    this.$platformsWrapper.addClass("sidebar-closed");
                } else {
                    if ($.cookie('toggle-platforms') == 'true') {
                        this.$platformsWrapper.addClass("sidebar-closed");
                    } else {
                        this.$platformsWrapper.removeClass("sidebar-closed");
                    }
                }
            } else {
                this.$platformsWrapper.removeClass("sidebar-closed");
            }
            
            if (getWidth() >= MOBILE_VIEW) {
                if ($.cookie("toggle-conversations") === undefined) {
                    this.$conversationsWrapper.addClass("sidebar-closed");
                } else {
                    if ($.cookie('toggle-conversations') == 'true') {
                        this.$conversationsWrapper.addClass("sidebar-closed");
                    } else {
                        this.$conversationsWrapper.removeClass("sidebar-closed");
                    }
                }
            } else {
                this.$conversationsWrapper.removeClass("sidebar-closed");
            }
        },

    };

    App.init();

});