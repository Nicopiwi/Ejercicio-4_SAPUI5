sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";
        	
		return Controller.extend("ejercicio4.ejercicio4.controller.Main", {
			onInit: function () {
                let oData = {
                    nombre:'',
                    apellido:'',
                    dni:'',
                    email:'',
                    showPanel: false,
                    editable:true
                }
                let oModel = new JSONModel();
                oModel.setData(oData)

                this.getView().setModel(oModel, "formData")
            },
            onPressAlert: function(evt){
                let oView = this.getView()
                let oModel = oView.getModel("formData")
                let myData = {
                    n: oModel.getProperty('/nombre') + " " + oModel.getProperty('/apellido'),
                    dni: oModel.getProperty('/dni'),
                    email: oModel.getProperty('/email'),
                }
                alert(JSON.stringify(myData))
                
            },

            onPressPanel: function(evt){
                let oView = this.getView()
                let oModel = oView.getModel("formData")
                oModel.setProperty('/editable', oModel.getProperty('/showPanel'))
                oModel.setProperty('/showPanel', !oModel.getProperty('/showPanel'))
                
            }
		});
	});
