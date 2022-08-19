sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";


        return Controller.extend("ns.businesspartners.controller.Suppliers", {
            onInit: function () {
                    
                },


            //Funtion for displaying Messagebox with the title upon click.
            onNavigation: function (MessageBox) {

               onclick=sap.m.MessageBox.show(MessageBox.getSource().getTitle());

                },

            
        }); 

    });


    







    // document.querySelector("item0").style.backgroundColor = "Yellow";   

    // console.log("Test to see if this works");

// document.querySelector("#content").style.backgroundColor = "green";

