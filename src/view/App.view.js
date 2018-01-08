sap.ui.jsview("sap.jaysdk.view.App", {

	getControllerName: function () {
		return "sap.jaysdk.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App();
		// load the main page
		var master = sap.ui.xmlview("Master", "sap.jaysdk.view.InteractiveTest");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		
		return this.app;
	}
});