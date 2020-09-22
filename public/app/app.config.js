"use strict";

angular.module("ckeplugin-public-transport-picker_1.1.0")
	.config([

		"ckeditorPluginsPublicTransportPickerProvider",
		"ckeditorProvider",

		function(ckeditorPluginsPublicTransportPickerProvider) {
			ckeditorPluginsPublicTransportPickerProvider.controls.registerAll();
		},
	]);
