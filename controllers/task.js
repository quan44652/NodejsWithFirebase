import { firestore } from "../db.js";
import {
  getFirestore,
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
    const resp = await getDocs(collection(firestore, "tasks"));
    const data = [];
    resp.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    res.status(201).json({ message: "Task getAll successfully", data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);

    const docRef = doc(firestore, "tasks", id);
    const resp = await getDoc(docRef);
    if (!resp.exists()) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(201).json({ message: "Task get successfully", resp });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const create = async (req, res) => {
  try {
    const resp = await addDoc(collection(firestore, "tasks"), req.body);
    return res
      .status(200)
      .json({ message: "Task created successfully", id: resp.id });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const docRef = doc(firestore, "tasks", id);
    const resp = await updateDoc(docRef, req.body);
    if (resp.exists()) {
      return res.status(404).json({ message: "Task not found" });
    }
    return req
      .status(200)
      .json({ message: "Task updated successfully", id: resp.id });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const docRef = doc(firestore, "tasks", id);
    await deleteDoc(docRef);
    return res.status(200).json({ message: "Task deleted successfully", id });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export { getAll, create, update, remove, getOne };
