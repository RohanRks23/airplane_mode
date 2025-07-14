### Airplane ✈️

**Quick and affordable flights for all.**
Built an airline operations application using the Frappe Framework, enabling structured management of key aviation entities, including:
Airlines, Airports, Aircraft, Flights, Crew, Passengers

## Key Features:
* 🔧 Modular architecture for easy customisation and scalability
* 🌐 Seamless integration of server-side logic with responsive client-side interfaces
* ✅ Environment setup via conda for reproducible development
* 🧪 Test-ready with clear configuration and automated workflows
* 📊 Includes dashboards and reports for operational insights

Technology Stack:
Python · Frappe · JSON · GitHub Actions · Markdown · Conda

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
   - Access your application: http://localhost:8000

