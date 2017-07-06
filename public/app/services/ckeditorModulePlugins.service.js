"use-strict";

(function() {
	angular.module("ckeplugin-public-transport-picker_0.0.1")
		.service("ckeditorPluginDefinitions", [

			"CKEditorConfig",
			"ckeditorPluginPublicTransportPicker",

			function ckeditorPluginDefinitions(
				CKEditorConfig,
				ckeditorPluginPublicTransportPicker
			) {
				var plugins = {};

				plugins.publicTransportPicker = ckeditorPluginPublicTransportPicker;

				return plugins;
			},
		]);
})();
