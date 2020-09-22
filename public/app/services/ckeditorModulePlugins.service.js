"use-strict";

(function() {
	angular.module("ckeplugin-public-transport-picker_1.1.0")
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
