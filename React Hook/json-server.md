This error means that **your system cannot find the `json-server` command**, even though you may have installed it. This usually happens when:

- You installed `json-server` globally but the global path isn't added to your system's environment.
    
- You installed it locally (inside a project), but are trying to run it like a global command.
    

---

### ✅ Solution Steps

---

## 🔧 OPTION 1: Run It Using `npx` (Quick & Simple)

Even without global install, you can run:

```bash
npx json-server --watch db.json
```

✅ This works even if `json-server` is only installed locally in your project.

> If it works — **use this method** or install globally correctly.

---

## 🔧 OPTION 2: Use Yarn's Local Path

If you installed it locally with:

```bash
yarn add --dev json-server
```

Then run it like this:

```bash
yarn json-server --watch db.json
```

✅ This uses the local version from `node_modules/.bin`.

---

## 🔧 OPTION 3: Install It Globally Correctly (with Yarn)

If you want to run `json-server` from anywhere like a regular command, install it globally:

```bash
yarn global add json-server
```

Then restart your terminal, and test:

```bash
json-server -v
```

If it shows a version, now run:

```bash
json-server --watch db.json
```

---

## ❗ If Still Not Working Globally (On Windows)

You might need to add Yarn's global path manually:

### 👉 Check Yarn global bin path:

```bash
yarn global bin
```

You'll see a path like:

```
C:\Users\YourName\AppData\Local\Yarn\bin
```

### 👉 Add this path to your system's **Environment Variables**:

1. Search **“Environment Variables”** in Start Menu.
    
2. Click **Environment Variables**.
    
3. Under **System Variables** or **User Variables**, find and edit `Path`.
    
4. Add the path from `yarn global bin`.
    
5. Save and restart your terminal.
    

---

### 🧪 Final Test

```bash
json-server --watch db.json
```

Let me know which option you try, and I’ll help you from there.