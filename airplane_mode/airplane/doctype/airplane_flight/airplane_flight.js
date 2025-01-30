// Copyright (c) 2024, Mr.Rohan and contributors
// For license information, please see license.txt

frappe.ui.form.on('Airplane Flight', {
    onload(frm) {
        frm.set_query('air_marshal', function() {
            return {
                filters: {
                    'role': 'Air Marshal'
                }
            };
        });
    },
    source_airport: function(frm) {
        frm.set_query('ground_handling_staff_source', function() {
            return {
                filters: {
                    'role': 'Ground Handling Staff',
                    'airport_name': frm.doc.source_airport
                }
            };
        });
    },
    destination_airport: function(frm) {
        frm.set_query('ground_handling_staff_destination', function() {
            return {
                filters: {
                    'role': 'Ground Handling Staff',
                    'airport_name': frm.doc.destination_airport
                }
            };
        });
    },
    airplane: function(frm) {
        var airplane = frm.doc.airplane;
        var airline = airplane.split('-')[0];
        frm.set_query('captain', function() {
            return {
                filters: {
                    'role': 'Captain',
                    'airline_name': airline
                }
            };
        });
        frm.set_query('first_officer', function() {
            return {
                filters: {
                    'role': 'First Officer',
                    'airline_name': airline
                }
            };
        });
        frm.set_query('purser', function() {
            return {
                filters: {
                    'role': 'Purser',
                    'airline_name': airline
                }
            };
        });
        frm.set_query('flight_attendant', function() {
            return {
                filters: {
                    'role': 'Flight Attendant',
                    'airline_name': airline
                }
            };
        });
        frm.set_query('medical_personnel', function() {
            return {
                filters: {
                    'role': 'Medical Personnel',
                    'airline_name': airline
                }
            };
        });
        frm.set_query('dispatcher', function() {
            return {
                filters: {
                    'role': 'Dispatcher',
                    'airline_name': airline
                }
            };
        });
        frm.set_query('maintenance_engineer', function() {
            return {
                filters: {
                    'role': 'Maintenance Engineer',
                    'airline_name': airline
                }
            };
        });
    }
});

