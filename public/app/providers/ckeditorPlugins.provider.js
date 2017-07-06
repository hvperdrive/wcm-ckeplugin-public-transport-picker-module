"use strict";

(function() {
	angular.module("ckeplugin-public-transport-picker_0.0.1")
        .provider("ckeditorPlugins", [

	"$provide",

	function ckeditorPluginsProvider($provide) {

		var registerAll = function registerAll() {
			$provide.decorator("ckeditorService", [

				"$delegate",
				"ckeditorPluginDefinitions",

				function(ckeditorService, ckeditorPluginDefinitions) {
					_.forEach(ckeditorPluginDefinitions, function(plugin, name) {
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
