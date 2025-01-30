// Copyright (c) 2024, Mr.Rohan and contributors
// For license information, please see license.txt

frappe.ui.form.on("Crew Members", {
	onload(frm) {
        if (frm.doc.associated_with === 'Airline') {
            frm.set_df_property('airport_name', 'hidden', 1);
        } else if (frm.doc.associated_with === 'Airport') {
            frm.set_df_property('airline_name', 'hidden', 1);
	    } else {
            frm.set_df_property('airport_name', 'hidden', 1);
            frm.set_df_property('airport_name', 'reqd', 0);
            frm.set_df_property('airline_name', 'hidden', 1);
            frm.set_df_property('airline_name', 'reqd', 0);
        }
    },
    associated_with: function(frm) {
        if (frm.doc.associated_with === 'Airline') {
            frm.set_df_property('airline_name', 'hidden', 0);
            frm.set_df_property('airline_name', 'reqd', 1);
            frm.set_df_property('airport_name', 'hidden', 1);
        } else if (frm.doc.associated_with === 'Airport') {
            frm.set_df_property('airport_name', 'hidden', 0);
            frm.set_df_property('airport_name', 'reqd', 1);
            frm.set_df_property('airline_name', 'hidden', 1);
        } else {
            frm.set_df_property('airline_name', 'hidden', 1);
            frm.set_df_property('airline_name', 'reqd', 0);
            frm.set_df_property('airport_name', 'hidden', 1);
            frm.set_df_property('airport_name', 'reqd', 0);
        }
    },
});
