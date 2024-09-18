import { firestore } from "../db.js";
import {
  collection,
  addDoc,
  updateDoc,
  getDoc,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const getAll = async (req, res) => {
  try {
    const docSnap = await getDocs(collection(firestore, "tasks"));
    const data = [];
    docSnap.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json({ message: "Task getAll successfully", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const docRef = doc(firestore, "tasks", id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res
      .status(200)
      .json({ message: "Task get successfully", data: docSnap.data() });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const docSnap = await addDoc(collection(firestore, "tasks"), req.body);
    return res
      .status(200)
      .json({ message: "Task created successfully", id: docSnap.id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const docRef = doc(firestore, "tasks", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return res.status(404).json({ message: "Task not found" });
    }

    await updateDoc(docRef, req.body);
    return res.status(200).json({ message: "Task updated successfully", id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const docRef = doc(firestore, "tasks", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return res.status(404).json({ message: "Task not found" });
    }
    await deleteDoc(docRef);
    return res.status(200).json({ message: "Task deleted successfully", id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAll, create, update, remove, getOne };
