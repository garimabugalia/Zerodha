
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
const cors = require("cors");

const PORT =process.env.PORT || 3000;
const url = process.env.MONGO_URL;
const app = express();
const cookieParser = require("cookie-parser");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const authMiddleware = require("./middleware/authMiddleware");

// Make sure CORS allows credentials (already in your index.js)
// app.use(cors({
//   origin: ["https://zerodha-frontend-flax.vercel.app", "https://zerodha-dashboardv.vercel.app"], // your frontend URLs
//   credentials: true, // important to allow cookies
// }));




app.use(
  cors({
    origin: [
      "http://localhost:4173",
      "http://localhost:5173",
      "https://zerodha-frontend-flax.vercel.app",
      "https://zerodha-dashboardv.vercel.app",
    ],
    credentials: true,
  })
);
// ✅ THIS LINE IS REQUIRED (preflight support)
app.options("*", cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });



let otpStore = {}; // TEMP STORAGE



// STEP 2: send OTP
app.post("/api/send-otp", (req, res) => {
  const { mobileNumber } = req.body; // this works if express.json() middleware is used

  if (!mobileNumber) {
    return res.status(400).json({ success: false, message: "Mobile number is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore[mobileNumber] = otp;

  console.log("OTP for", mobileNumber, "is", otp);

  // send success response
  res.json({ success: true, message: "OTP sent successfully" });
});

// STEP 3: verify OTP
app.post("/api/verify-otp", (req, res) => {
  const { mobileNumber, otp } = req.body;

  if (otpStore[mobileNumber] !== otp) {
    return res.status(401).json({ success: false, message: "Invalid OTP" });
  }

  delete otpStore[mobileNumber];

  // CREATE JWT
  const token = jwt.sign(
    { mobileNumber },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  // SET COOKIE
  res.cookie("token", token, {
   httpOnly: true,
  sameSite: "none",   // REQUIRED
  secure: true,       // REQUIRED (HTTPS)
  path: "/",
  });

  res.json({ success: true });
});


app.get("/api/me", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});





app.post("/api/logout", (req, res) => {
  // res.clearCookie("token");
  res.clearCookie("token", {
  httpOnly: true,
  sameSite: "none",
  secure: true,
});

  res.json({ success: true });
});





 //ADDING TEMPERARY HOLDINGS DATA
  
// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });


// //ADDING TEMPERARY POSITIONS DATA
// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });



app.get("/allHoldings",authMiddleware, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions",authMiddleware, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});


app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Zerodha Backend is running 🚀"
  });
});




app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});