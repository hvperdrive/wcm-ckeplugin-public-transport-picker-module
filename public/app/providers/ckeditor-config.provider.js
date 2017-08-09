"use strict";

angular.module("ckeplugin-public-transport-picker_0.0.2")
    .provider("CKEditorConfigPublicTransportPicker", [
	function membersConfig() {

		this.API = {
			name: "ckeplugin-public-transport-picker",
			version: "0.0.2",
			basePath: "app/modules/",
			assetsBasePath: "/assets/modules/",
		};

		this.API.moduleVersionName = this.API.name + "_" + this.API.version;
		this.API.modulePath = this.API.basePath + this.API.moduleVersionName + "/";
		this.API.assetsPath = this.API.assetsBasePath + this.API.moduleVersionName + "/";

		this.$get = function get() {
			return this.API;
		};
	},
]);
