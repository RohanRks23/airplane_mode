# Copyright (c) 2024, Mr.Rohan and contributors
# For license information, please see license.txt

import frappe
from frappe import _


def execute(filters=None):
	columns = get_columns()
	data = get_data()
	chart = get_chart()
	report_summary = get_report_summary()

	return columns, data, None, chart, report_summary

def get_columns():
	columns = [
		{
			"label": _("Airline"),
			"fieldname": "airline",
			"fieldtype": "Link",
			"options": "Airline",
			"width": "150"
		},
		{
			"label": _("Revenue"),
			"fieldname": "revenue",
			"fieldtype": "Currency",
			"width": "150"
		},
	]

	return columns

def get_data():
	data = frappe.get_all(
		doctype="Airplane Ticket", 
		fields=[
			"SUM(total_amount) AS revenue", 
			"flight.airline"
		],
		filters={"docstatus": 1}, 
		group_by="airline")
	
	return data

def get_chart():
	data = get_data()
	chart = {
		'data': {
			'labels': 
			[
				entry['airline'] for entry in data
			],
			'datasets': 
			[
				{
					'values': [entry['revenue'] for entry in data]
				}
			]
		},
		'type': 'donut'
		}
	return chart

def get_report_summary():
	data = frappe.get_all(doctype="Airplane Ticket", fields=["SUM(total_amount) AS total_revenue"], filters={"docstatus": 1})
	# Extract the total_revenue from the list of dictionaries
	total_revenue = data[0]['total_revenue'] if data else 0
	# Format the summary
	summary = [{"label": "Total Revenue", "value": total_revenue, "indicator": "Green"}]
	# print(summary)
	return summary







# def get_columns() -> list[dict]:
# 	"""Return columns for the report.

# 	One field definition per column, just like a DocType field definition.
# 	"""
# 	return [
# 		{
# 			"label": _("Column 1"),
# 			"fieldname": "column_1",
# 			"fieldtype": "Data",
# 		},
# 		{
# 			"label": _("Column 2"),
# 			"fieldname": "column_2",
# 			"fieldtype": "Int",
# 		},
# 	]


# def get_data() -> list[list]:
# 	"""Return data for the report.

# 	The report data is a list of rows, with each row being a list of cell values.
# 	"""
# 	return [
# 		["Row 1", 1],
# 		["Row 2", 2],
# 	]

