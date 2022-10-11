"use strict";

(function() {
	angular.module("ckeplugin-public-transport-picker_1.1.2")
		.provider("ckeditorPluginsPublicTransportPicker", [

			"$provide",

			function ckeditorPluginsProvider($provide) {

				var registerAll = function registerAll() {
					$provide.decorator("ckeditorService", [

						"$delegate",
						"ckeditorPluginDefinitionsPublicTransportPicker",

						function(ckeditorService, ckeditorPluginDefinitionsPublicTransportPicker) {
							_.forEach(ckeditorPluginDefinitionsPublicTransportPicker, function(plugin, name) {
								ckeditorService.activatePlugin(name, plugin.plugin, plugin.meta);
							});

							return ckeditorService;
						},
					]);
				};

				this.controls = {
					registerAll: registerAll,
				};

				this.$get = function get() {
					return this.controls;
				};

			},
		]);
})();
