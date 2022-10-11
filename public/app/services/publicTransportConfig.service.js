"use strict";

(function() {
	angular.module("pelorus.services")
		.service("PublicTransportConfigService", [
			function publicTransportConfigService() {
				var buses = [
					// Antwerpen
					"AN13", "AN14", "AN17", "AN19", "AN20", "AN21", "AN22", "AN23", "AN30", "AN32", "AN33", "AN36", "AN38", "AN51", "AN52", "AN53", "AN90", "AN91", "AN92", "AN130", "AN131", "AN135", "AN140", "AN141", "AN142", "AN180", "AN181", "AN182", "AN183", "AN191", "AN290", "AN295", "AN298", "AN410", "AN415", "AN416", "AN417", "AN418", "AN420", "AN421", "AN422", "AN427", "AN429", "AN500", "AN600", "AN601", "AN602", "AN610", "AN620", "AN621", "AN640", "AN641", "AN642", "AN650", "AN651", "AN659", "AN670", "AN720", "AN730", "AN760", "AN761", "AN762", "AN763", "AN764", "AN770", "AN771",  "AN772", "AN775", "AN776", "AN778",
					// Oost-Vlaanderen
					"OV13", "OV23", "OV25", "OV36", "OV45", "OV46", "OV81", "OV82", "OV83", "OV84", "OV85", "OV87", "OV89", "OV91", "OV92", "OV93", "OV95", "OV97", "OV99", "OV99s", "OV390", "OV410", "OV420", "OV440",
					"OV21bis", "OV22bis", "OV24bis", "OV41bis", "OV47bis", "OV81bis",
					// West-Vlaanderen
					// Vlaams-Brabant
					"VB116", "VB117", "VB118", "VB126", "VB127", "VB128", "VB129", "VB136", "VB137", "VB140", "VB141", "VB142", "VB144", "VB145", "VB153", "VB154", "VB155", "VB170", "VB171", "VB178", "VB212", "VB213", "VB214", "VB230", "VB231", "VB232", "VB233", "VB240", "VB241", "VB242", "VB243", "VB245", "VB246", "VB250", "VB251", "VB260", "VB270", "VB271", "VB272", "VB313", "VB315", "VB316", "VB317", "VB318", "VB341", "VB343", "VB344", "VB345", "VB346", "VB348", "VB349", "VB351", "VB352", "VB355", "VB358", "VB359", "VB410", "VB460", "VB461", "VB470", "VB471", "VB504", "VB519", "VB528", "VB544", "VB547", "VB548", "VB549", "VB554", "VB555", "VB556", "VB562", "VB571", "VB572", "VB620", "VB659", "VB730", "VB810", "VB820", "VB830",
					"VB348bis",
					// Limburg
					"LI1", "LI3", "LI4", "LI5", "LI8", "LI9", "LI10", "LI11", "LI13", "LI16", "LI18a", "LI20a", "LI21", "LI21a",  "LI22", "LI23", "LI23a", "LI26", "LI30", "LI31", "LI33", "LI35", "LI35c", "LI36", "LI38", "LI40", "LI41", "LI42", "LI44", "LI45", "LI46", "LI47", "LI48", "LI51", "LI52", "LI68", "LI91", "LI104", "LI105", "LI180", "LI182", "LI183", "LI283", "LI299", "LI700", "LI729", "LI731", "LI734", "LIAL", "LIBP", "LICP", "LIG1", "LIG2", "LIG3", "LIG4", "LIG5", "LIG6", "LIG7", "LIG8", "LIH01", "LIH10", "LIH11", "LIH12", "LIH13", "LIH14", "LIH15", "LIH16", "LIH17", "LIH18", "LIH19", "LIH21", "LIH31", "LIH41", "LIH51", "LIH61", "LIH71", "LIH81", "LIH91", "LIS1", "LIS2", "LIS10", "LIS11", "LIS12",
					"LI11bis",
					// Legacy
					"1", "13", "17", "19", "20", "21", "22", "23", "30", "31", "32", "33", "34", "36", "68", "77", "81", "82", "83", "84", "85", "87", "89", "93", "95", "97", "99", "99S", "142", "180", "181", "182", "183", "191", "290", "291", "295", "410", "411", "412", "413", "414", "416", "417", "418", "427", "429", "500", "507", "600", "601", "602", "605", "610", "620", "621", "629", "640", "641", "642", "720", "730", "760", "761", "762", "763", "764", "770", "771", "772", "776",
				];
				var trams = [
					// Antwerpen
					"AN1", "AN2", "AN3", "AN4", "AN5", "AN6", "AN7", "AN8", "AN9", "AN10", "AN11", "AN12", "AN15", "AN24", "AN70", "ANM1", "ANM2", "ANM3", "ANM4", "ANM7", "ANM8", "ANM9", "ANT6", "ANT10", "ANT11", "ANT12", "ANT13",
					// Oost-Vlaanderen
					"OV1", "OV2", "OV4", "OV21", "OV22", "OV24",
					// West-Vlaanderen
					"WV0",
					// Vlaams-Brabant
					// Limburg
					// Legacy
					"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "15", "24", "70",
				];

				this.publicTransportLines = [].concat(
					trams.map(function(line) {
						return {
							name: "Tramlijn " + line,
							icon: "ov-icon-" + line + "-tramlijn",
							number: line,
						};
					}),
					buses.map(function(line) {
						return {
							name: "Buslijn " + line,
							icon: "ov-icon-" + line + "-buslijn",
							number: line,
						};
					})
				);

				this.$get = function() {
					return {
						publicTransportLines: this.publicTransportLines,
					};
				};
			},
		]);
})();
