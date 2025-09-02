import { Client, Databases, Storage, Account } from "appwrite";
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const projectName = import.meta.env.VITE_APPWRITE_PROJECT_NAME;
const endPoint = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client()
    .setEndpoint(endPoint) // your Appwrite endpoint
    .setProject(projectId);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);
