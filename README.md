# 0x04-TypeScript – Project Documentary

This project is part of the **ALX Frontend JavaScript curriculum**, specifically focusing on **TypeScript**—a statically typed superset of JavaScript. The goal is to gradually understand TypeScript's powerful type system, modularization capabilities, object-oriented features, and real-world application in frontend development.

---

## 📘 Overview

Throughout Tasks 1 to 5, we explore:

- TypeScript basics: typing, interfaces, and inheritance.
- Object-oriented programming in TypeScript.
- Modular architecture using triple-slash directives (`/// <reference path="..." />`).
- Brand convention and nominal typing.
- Webpack bundling and TypeScript compiler configuration.

---

## ✅ Task 1: Let’s build a Teacher interface

### 🎯 Objective

Define an `interface` in TypeScript to represent a `Teacher` object with various properties including optional ones.

### 💡 What We Did

- Created `main.ts` inside `task_1/js/`.
- Defined a `Teacher` interface with required properties like `firstName` and `lastName`, and optional ones like `location`.
- Ensured all object literals conform to the type definition.

### 📚 Key Concepts

- TypeScript `interface`
- Optional properties (`propName?`)
- Type annotations

---

## ✅ Task 2: Extending Interfaces

### 🎯 Objective

Show how one interface can inherit from another, enhancing reusability and maintainability.

### 💡 What We Did

- Extended the `Teacher` interface to define a new interface: `Directors`.
- Added a new required property `numberOfReports` to the `Directors` interface.

### 📚 Key Concepts

- Interface inheritance
- Strong typing for object structures

---

## ✅ Task 3: Class Implementation

### 🎯 Objective

Use **object-oriented programming** (OOP) principles by creating a class that implements a student interface.

### 💡 What We Did

- Created an interface `StudentClass` with two methods: `workOnHomework()` and `displayName()`.
- Implemented a class `StudentClassImpl` that uses access modifiers (`private`, `public`) and a constructor.
- Created an instance to demonstrate encapsulation and interface enforcement.

### 📚 Key Concepts

- `implements` keyword in TypeScript
- Access modifiers (`private`, `public`)
- Class constructors and instance methods

---

## ✅ Task 4: Namespaces & Modular Typing

### 🎯 Objective

Organize a larger codebase using **TypeScript namespaces** and **triple-slash directives** to simulate module imports.

### 🗂 Folder Structure


### 💡 What We Did

- Declared multiple classes (`Cpp`, `Java`, `React`) inside the `Subjects` namespace.
- Used `/// <reference path="..." />` to import one file into another.
- Defined a `Teacher` interface and assigned specialized teachers to each subject.
- Called `getRequirements()` and `getAvailableTeacher()` on each subject.

### 📚 Key Concepts

- Namespaces in TypeScript
- Triple-slash directive (`/// <reference path="">`)
- Type grouping and modular development

### 🧠 Lessons Learned

- Triple-slash directives are necessary for loading namespace-based code.
- TypeScript compiler won't resolve these files unless they're explicitly referenced.

---

## ✅ Task 5: Brand Convention & Nominal Typing

### 🎯 Objective

Use **branded types** to enforce **nominal typing** in TypeScript—ensuring two types with the same shape are still distinct.

### 💡 What We Did

- Defined two branded interfaces: `MajorCredits` and `MinorCredits`.
- Used `as` casting to distinguish between the two.
- Wrote `sumMajorCredits()` and `sumMinorCredits()` functions that safely operate only on their respective types.

### 🧠 Challenge Addressed

- Structural typing in TypeScript treats similar types as the same.
- Nominal typing prevents accidental mixing of logically distinct types.

### 🔧 Tools Added

- `package.json`: For managing dependencies.
- `tsconfig.json`: TypeScript compiler configuration.
- `webpack.config.js`: Bundling support for browser usage.

---

## 🛠 Configuration Breakdown

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./js",
    "strict": true
  }
}
