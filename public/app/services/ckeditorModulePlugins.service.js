"use-strict";

(function() {
	angular.module("ckeplugin-public-transport-picker_0.0.2")
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
