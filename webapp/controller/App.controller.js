sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/library",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, mobileLibrary, ResourceModel) {
	"use strict";

	return Controller.extend("ui5.databinding.controller.App", {
		formatMail: function(sFirstName, sLastName) {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			return mobileLibrary.URLHelper.normalizeEmail(
				sFirstName + "." + sLastName + "@example.com",
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		}
	});
});