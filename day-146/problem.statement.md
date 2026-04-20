📦 SNITCH – Product Management (Seller Module)
🚀 Feature Overview

In today’s implementation, we built the Product Management System for the SNITCH e-commerce platform.

Since SNITCH is a clothing-based marketplace, all products belong to the clothing category and include:

Product images
Pricing
Description
Category
Seller ownership
🔐 Core Rule

❗ Only Sellers can create products
❗ Buyers are not allowed to create products

This is enforced using Role-Based Authorization (RBAC).

🧠 Problem Statement

We need to implement:

Seller can create new products
Seller can view all products created by them
🛠️ Development Approach (5-Step Thinking)

Whenever we build a feature, we follow this structured approach:

Understand the problem clearly
Break it into smaller parts
Implement the easiest part first
Expand step-by-step
Optimize & secure
✅ Step 1: Seller Creates Product (Implemented)

We started with the easiest part:

👉 Allow seller to create a product

🧩 Backend Implementation
📌 1. Product Model (Mongoose Schema)
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  image: String,
  category: {
    type: String,
    default: "clothing"
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);
📌 2. Protected Route
import express from "express";
import { createProduct } from "../controllers/product.controller.js";
import { isAuthenticated, isSeller } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", isAuthenticated, isSeller, createProduct);

export default router;
📌 3. Controller Logic
import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const { title, price, description, image } = req.body;

    const product = await Product.create({
      title,
      price,
      description,
      image,
      seller: req.user._id
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
📌 4. Authorization Middleware
export const isSeller = (req, res, next) => {
  if (req.user.role !== "seller") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Only sellers can create products."
    });
  }
  next();
};
🔐 Security Layer
✅ Route is protected using JWT Authentication
✅ Role-based check ensures only sellers access it
✅ Seller ID is attached to product (ownership tracking)
📊 Data Flow
Seller logs in
JWT token verifies identity
Seller sends product data
Backend checks role (seller only)
Product is saved with seller reference
🎯 Key Learnings
Role-Based Authorization (RBAC)
Protected API routes
Mongoose schema design
Linking data using references
Clean backend architecture
🔜 Next Step

👉 Implement:

Seller can view all products created by them

(Using filtering + aggregation)

💡 Why This Matters

This is NOT just CRUD.

This feature shows:

Real-world backend logic
Secure API design
Scalable architecture