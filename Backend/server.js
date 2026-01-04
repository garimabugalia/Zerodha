


import authRoutes from "./routes/authroutes.js";
import userRoutes from "./routes/userroutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

