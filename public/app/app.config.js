"use strict";

angular.module("ckeplugin-public-transport-picker_0.0.1")
    .config([

	"ckeditorPluginsProvider",
	"ckeditorProvider",

	function(ckeditorPluginsProvider) {
		ckeditorPluginsProvider.controls.registerAll();
	},
]);
