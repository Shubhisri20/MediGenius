# MediGenius – Medical Recommendation System

## Overview
MediGenius is an AI-powered virtual health assistant that predicts possible diseases based on user-provided symptoms and recommends personalized medical guidance. 
The system provides:
- Disease Prediction
- Recommended Medications
- Diet Recommendations
- Workout Plans
- Safety Precautions

The goal of MediGenius is to help users access preliminary healthcare guidance and reduce medication errors through intelligent data-driven predictions.

---

## Key Features
- 🔍 **Symptom-based Disease Prediction** using machine learning classification models.
- 💊 **Medicine Recommendations** including dosage guidelines (general & safe suggestions only).
- 🥗 **Diet Plan Suggestions** tailored to the predicted disease.
- 🏋️ **Workout / Physical Exercise Recommendations** based on user health needs.
- ⚠️ **Precautionary Measures** to help manage and prevent complications.
- 🖥️ **User-friendly Frontend (Streamlit / React)** connected with a **Flask backend**.
- 🗂️ **Model Trained on Medical Dataset** including disease and symptom mapping.

---

## Tech Stack
**Frontend:**
- ReactJS

**Backend:**
- Flask (Python)

**Machine Learning:**
- Logistic Regression, SVM, Random Forest (or custom model)
- Pandas, NumPy, Scikit-learn, Pickle

**Database:**
- CSV / Kaggle dataset

---

## Project Workflow
1. User selects or enters symptoms in the interface.
2. Symptoms are processed and passed to the ML model.
3. Model predicts the most probable disease.
4. System retrieves recommended:
   - Medications
   - Diet Plan
   - Workout & Physical activities
   - Precaution checklist
5. Result is displayed to the user on the UI.

---