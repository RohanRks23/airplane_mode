# Copyright (c) 2024, Mr.Rohan and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator
from babel.numbers import format_currency

class AirplaneFlight(WebsiteGenerator):
	def before_submit(self):
		#To change status to Completed after submitting
		self.status = f"Completed"

	def get_context(self, context):
		context.name = self.name
		context.airplane = self.airplane.split('-')[0]
		context.source_airport_code = self.source_airport_code
		context.destination_airport_code = self.destination_airport_code
		context.date_of_departure = self.date_of_departure
		context.time_of_departure = self.time_of_departure
		context.flight_duration = self.format_flight_duration(self.duration)
		context.flight_price = format_currency(self.flight_price, 'INR', locale='en_IN')
		context.amount = self.flight_price

	def format_flight_duration(self, duration):
		total_seconds = float(duration)
		hours = int(total_seconds // 3600)
		minutes = int((total_seconds % 3600) // 60)
		return f"{hours}h {minutes}m"