# Session 7 – Introduction to Convolutional Neural Networks (CNN)

## 📅 Session Details

* **Program:** Pragati: Path to Future – Cohort 9
* **Week:** 4
* **Session:** 7
* **Topic:** Introduction to Convolutional Neural Networks (CNN)
* **Platform:** Infosys Springboard
* **Date:** July 30, 2026

---

# 📖 Overview

In this session, we explored how **Convolutional Neural Networks (CNNs)** overcome the limitations of traditional Artificial Neural Networks (ANNs) when working with images.

The session covered image representation, feature extraction, convolution, filters (kernels), and how CNNs automatically learn important image features for classification tasks.

---

# 📚 Topics Covered

## 1. Machine Learning with Neural Networks

* Forward Propagation
* Error Estimation
* Backpropagation
* Learning through weight updates

---

## 2. Why ANN is not suitable for Images?

Example:

* Image Size = **24 × 24 × 3**

Number of input neurons required:

24 × 24 × 3 = **1,728 neurons**

For larger images:

1024 × 1024 × 3 ≈ **3.1 Million neurons**

Problems:

* Huge memory consumption
* High computational cost
* Overfitting
* Slow training

---

## 3. Introduction to CNN

CNN (Convolutional Neural Network) is a specialized Deep Learning model designed for image processing.

It automatically learns important features from images instead of relying on manually designed features.

---

## 4. Real-world Example

Imagine thousands of images of cats.

The CNN learns:

* Eyes
* Ears
* Nose
* Fur patterns
* Shape

Later, it can recognize a completely new cat image that it has never seen before.

---

## 5. Two Main Steps in CNN

### Feature Extraction

CNN extracts useful patterns such as:

* Edges
* Corners
* Shapes
* Textures

---

### Image Classification

The extracted features are used to classify the image into categories.

Example:

Input Image

↓

Feature Extraction

↓

Classification

↓

Output:

* Cat
* Dog
* Car
* Person

---

# What is a Filter (Kernel)?

A filter is a small matrix that scans an image to detect specific patterns.

Example filters:

### Blur Filter

```
1/9 1/9 1/9
1/9 1/9 1/9
1/9 1/9 1/9
```

---

### Sharpen Filter

```
 0 -1  0
-1  5 -1
 0 -1  0
```

---

### Edge Detection Filter

```
1  0 -1
1  0 -1
1  0 -1
```

---

# Image Processing Operations

Filters can perform:

* Blur Images
* Sharpen Images
* Edge Detection
* Noise Removal
* Object Detection

Traditional image processing uses manually designed filters.

CNN learns these filters automatically during training.

---

# Convolution Operation

Convolution is the process of sliding a filter across an image.

For every position:

* Multiply corresponding values
* Add them together
* Produce one output value

This generates a **Feature Map**.

---

# Why CNN is Better than ANN?

| Artificial Neural Network  | Convolutional Neural Network |
| -------------------------- | ---------------------------- |
| Large number of parameters | Parameter sharing            |
| Slow training              | Faster training              |
| Poor image handling        | Designed for images          |
| Manual feature extraction  | Automatic feature learning   |
| High computation           | Efficient computation        |

---

# Advantages of CNN

* Automatic Feature Extraction
* High Accuracy
* Fewer Parameters
* Translation Invariance
* Excellent for Image Processing
* Better Performance on Large Datasets

---

# Applications of CNN

* Face Recognition
* Medical Image Analysis
* Autonomous Vehicles
* Object Detection
* Image Classification
* OCR (Optical Character Recognition)
* Security Surveillance
* Satellite Image Analysis

---

# Key Takeaways

* Traditional ANNs struggle with high-dimensional image data.
* CNNs efficiently process images using convolution operations.
* Filters help detect edges, textures, and patterns.
* CNNs automatically learn useful features from data.
* Feature extraction followed by classification is the core workflow of CNNs.
* CNNs power many modern AI applications in computer vision.

---

# Conclusion

This session introduced the fundamentals of **Convolutional Neural Networks (CNNs)** and explained why they are the preferred choice for image-related AI tasks. By using convolution, feature extraction, and learnable filters, CNNs can recognize complex visual patterns with high accuracy, making them the backbone of modern computer vision systems.

---

⭐ *Part of my AI learning journey through **Infosys Springboard – Pragati: Path to Future (Cohort 9)**.*
