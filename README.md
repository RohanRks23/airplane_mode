# ✈ airplane_mode
**airplane_mode** is a versatile airline management framework built on the [Frappe](https://frappeframework.com) platform, enabling developers to build scalable and maintainable air travel applications.
It enables structured management of key aviation entities, including:
- Airlines, Airports, Aircraft, Flights, Crew, Passenger

---

## ✨ Why airplane_mode?
This project simplifies the development of airline and travel systems by providing a structured, extensible architecture. It is designed to accelerate development while maintaining flexibility and clarity.

### 🚀 Core Features
- 🛫 **Modular Data Models**  
  Well-defined schemas for airplanes, airports, flights, and crew, supporting organised data management.
- 🌐 **Framework Integration**  
  Built-in hooks, notifications, and workflows to automate operations and enhance user engagement.
- 🔧 **Developer-Friendly**  
  Supports testing, migrations, and deployment with clear configurations and scripts.
- 🎯 **Dynamic User Interfaces**  
  Responsive forms and intuitive interactions powered by client-side behaviours.
- 📊 **Comprehensive Reports**  
  Dashboards and analytics for operational insights and better decision-making.

- 🧩 **Extensibility**  
  Easily extend or customise components to fit specific airline or travel business needs. Seamless integration of server-side logic with responsive client-side interfaces.

---

## 🧰 Technology Stack

- **Python**
- **Frappe Framework**  
- **Javascript**  
- **Jinja**  

---

## Installation and setup

**1. Set up your Frappe Bench:**
If you prefer to test the application by setting up a local frappe bench environment (Follow the link provided below).

   - Follow the official Frappe Framework Installation guide: https://docs.frappe.io/framework/user/en/installation
   - Create a site in the frappe bench environment using the `bench` command:
   ```
   bench new-site <site-name>
   ```

**Testing the Application:**

If you prefer to test the application without setting up a local environment, you can use a codespace repository (Follow the link provided below).

   **[Codespace Repository](https://github.com/ankush/frappe_codespace.git)**
   - This will open your bench environment in VSCode (Browser) where you can follow the process below.
   
   - Create a site in the frappe bench environment using the `bench` command:
      ```
      bench new-site <site-name>
      ```

**2. Install the App:**

   - Clone this repository: 
   - Using git command: `git clone <URL_OF_THIS_REPO>`
   - OR
   - Navigate to your Frappe bench directory.
   - Install the app using the `bench` command:
     ```bash
     bench get-app airplane_mode
     ```

**3. Install the app on your site:**

   - Create a new Frappe site (if you haven't already). Skip if you already have a site in your bench environment.
```
bench new-site <site-name>
```
   - Install the app on your site:
```
bench --site <site-name> install-app airplane_mode
```

**4. Start your Frappe bench:**

   - Start the Frappe bench: `bench start`
   - Access your application at the link provided in the terminal. Usually it works in localhost:8000, if port 8000 is occupied, you might get some other port number.

