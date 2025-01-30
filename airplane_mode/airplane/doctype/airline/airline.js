// Copyright (c) 2024, Mr.Rohan and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Airline', {
//     refresh(frm) {
//         // Find the container with the specific class
//         let sidebar = $('.form-sidebar.overlay-sidebar.hidden-xs.hidden-sm');

//         if (sidebar.length) {
//             // Create the sidebar-section with class user-actions
//             let userActionsSection = $('<div class="sidebar-section user-actions">');

//             // Create a new div for the user-action-row
//             let userActionRow = $('<div class="user-action-row">');

//             // Get the website URL from the form field
//             let websiteUrl = frm.doc.website;

//             // Ensure the website field is not empty
//             if (websiteUrl) {
//                 // Create the new link element
//                 let newLink = $('<a>')
//                     .attr('href', websiteUrl)
//                     .attr('target', '_blank')
//                     .text('Visit Website');

//                 // Append the new link to the user-action-row
//                 userActionRow.append(newLink);

//                 // Append the user-action-row to the user-actions section
//                 userActionsSection.append(userActionRow);

//                 // Append the user-actions section to the sidebar
//                 sidebar.append(userActionsSection);
//             }
//         }
//     }
// });



frappe.ui.form.on('Airline', {
    refresh(frm) {
        // Get the website URL from the form field
        let websiteUrl = frm.doc.website;

        // Ensure the website field is not empty
        if (websiteUrl) {
            // Use the add_web_link function to add the web link
            frm.add_web_link(websiteUrl, 'Visit Website');
        }
    }
});


