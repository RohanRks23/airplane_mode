# Copyright (c) 2024, Mr.Rohan and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class CrewMembers(Document):
	def before_save(self):
		if self.last_name:
			self.full_name = f"{self.first_name} {self.last_name}"
		else:
			self.full_name = self.first_name

	def onload(self):
		data = frappe.get_all(
			"Airplane Flight", 
			filters={'status': 'Completed'}, 
			fields=[
				'duration', 
				'captain', 
				'first_officer', 
				'purser', 
				'flight_attendant', 
				'medical_personnel', 
				'maintenance_engineer', 
				'dispatcher', 
				'air_marshal', 
				'ground_handling_staff_source', 
				'ground_handling_staff_destination'
			]
		)

		total_seconds = 0
		for flight in data:
			if self.name in flight.values():
				total_seconds += flight['duration']
		
		self.air_time = self.format_flight_duration(total_seconds)

	def format_flight_duration(self, total_seconds):
		hours = int(total_seconds // 3600)
		minutes = int((total_seconds % 3600) // 60)
		if minutes:
			return f"{hours}h {minutes}m"
		else:
			return f"{hours}h"
