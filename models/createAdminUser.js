import bcrypt from "bcrypt";
import User from "./userModel"; // Assuming your user model is defined in a separate file

async function createAdminUser() {
  try {
    // Check if an admin user already exists
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log("Admin user already exists.");
      return;
    }

    // Hash the password
    const password = "your_admin_password"; // Set your admin password here
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the admin user
    const adminUser = new User({
      name: "Admin", // Set admin name
      email: "admin@example.com", // Set admin email
      phone: "admin_phone_number", // Set admin phone number
      password: hashedPassword,
      role: "admin"
    });

    // Save the admin user to the database
    await adminUser.save();
    console.log("Admin user created successfully.");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
}

// Call the function to create the admin user
createAdminUser();
