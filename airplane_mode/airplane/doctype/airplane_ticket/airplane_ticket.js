// Copyright (c) 2024, Mr.Rohan and contributors
// For license information, please see license.txt

frappe.ui.form.on('Airplane Ticket', {
    refresh(frm) {
        // Add a custom button to the form
        frm.add_custom_button(__('Assign Seat'), function() {
            // Create and show the dialog when the button is clicked
            flight = frm.doc.flight;
            airline = flight.split('-')[0]
            // frappe.msgprint(airline);
            
            const dialog = new frappe.ui.Dialog({
                title: __('Select Seat'),
                fields: [
                    {
                        label: __('Seat Number'),
                        fieldname: 'seat_number',
                        fieldtype: 'Data',
                        reqd: 1  // Make it required
                    }
                ],
                primary_action_label: __('Assign'),
                primary_action(values) {

                    const flight = frm.doc.flight;
                    const airline = flight.split('-')[0] +"-"+ flight.split('-')[1];
                    // Fetch the capacity field from the Airline doctype where name is equal to the airline
                    frappe.db.get_value('Airplane', { name: airline }, 'capacity', function(data) {
                        if (data) {
                            if (parseInt(values.seat_number) > data.capacity){
                                frappe.msgprint('Flight Capacity: ' + data.capacity);
                                frappe.throw("The seat number cannot exceed the plane's capacity.");
                            }else{
                                // Set the seat number in the form field
                                frm.set_value('seat', values.seat_number);
                                
                                // Close the dialog after saving
                                dialog.hide();
                                
                                // Optionally, save the form if required
                                frm.save();

                            }
                        }
                    }
                )}
            });

            // Show the dialog
            dialog.show();
        
        },("Actions"));
    }
});
