"use-strict";

(function() {
	angular.module("ckeplugin-public-transport-picker_1.0.4")
		.service("ckeditorPluginDefinitionsPublicTransportPicker", [

			"CKEditorConfigPublicTransportPicker",
			"ckeditorPluginPublicTransportPicker",

			function ckeditorPluginDefinitionsPublicTransportPicker(
				CKEditorConfigPublicTransportPicker,
				ckeditorPluginPublicTransportPicker
			) {
				var plugins = {};

				plugins.publicTransportPicker = ckeditorPluginPublicTransportPicker;

				return plugins;
			},
		]);
})();
