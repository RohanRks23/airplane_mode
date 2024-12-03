# Copyright (c) 2024, Mr.Rohan and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document
import random

class AirplaneTicket(Document):
    def validate(self):
        # To eliminate Duplicates Add-on's
        item_set = set()
        total_add_ons = 0
        for value in self.add_ons:
            if value.item in item_set:
                frappe.throw(f"The '{value.item}' Add-on has already been added in your Ticket. Please pick another Add-on.")
            item_set.add(value.item)
            # Add-on amount calculation
            total_add_ons += value.amount

        # Total Amount calculation
        self.total_amount = self.flight_price + total_add_ons if total_add_ons else self.flight_price

        # Get airplane and capacity
        airline = frappe.db.get_value('Airplane Flight', {'name': self.flight}, 'airplane')
        capacity = frappe.db.get_value('Airplane', {'name': airline}, 'capacity')
        # capacity = 2

        if not capacity:
            frappe.throw("Capacity information not available for the selected airplane.")

        # Check if the number of assigned seats is within the capacity
        booked_seats = frappe.db.count('Airplane Ticket', {'flight': self.flight})
        frappe.msgprint(str(booked_seats))
        if booked_seats >= capacity:
            frappe.throw(_("capacity is full"))


        # Random Seat generator when empty
        if not self.seat:
            while True:
                random_number = random.randint(1, capacity)
                random_alphabet = random.choice(["A", "B", "C", "D", "E"])
                proposed_seat = f"{random_number}{random_alphabet}"
                # Check if the seat is already taken
                existing_seat = frappe.db.get_value('Airplane Ticket', {'flight': self.flight, 'seat': proposed_seat, 'docstatus': 1})
                if not existing_seat:
                    self.seat = proposed_seat
                    break

    def before_submit(self):
        # To check before submitting the form if the status is not 'Boarded'
        if self.status != "Boarded":
            frappe.throw("You cannot submit this document until you are 'Boarded'.")
