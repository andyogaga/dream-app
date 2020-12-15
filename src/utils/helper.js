import { v4 as uuidv4 } from "uuid";
import { LIMIT } from "./constants";

export const initiatStorage = () => {
  localStorage.setItem("dreams", JSON.stringify([]));
};

export const clearStorage = () => {
  localStorage.clear();
};

export const getDreams = (page) => {
  const dreamsList = JSON.parse(localStorage.getItem("dreams"));
  if (!page) return dreamsList;
  return dreamsList.slice((page - 1) * LIMIT, page * LIMIT);
};

export const addDream = (dream) => {
  const dreams = JSON.parse(localStorage.getItem("dreams"));
  localStorage.setItem("dreams", JSON.stringify([...dreams, dream]));
};

export const removeDream = (id) => {
  const newDreams = JSON.parse(localStorage.getItem("dreams")).filter(
    (dream) => dream.id !== id
  );
  localStorage.setItem("dreams", JSON.stringify(newDreams));
};

export const generateId = () => uuidv4();

export const executeScroll = (dRef) =>
  dRef.current.scrollIntoView({
    behavior: "smooth",
  });
