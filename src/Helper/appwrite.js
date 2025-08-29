import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1") // your Appwrite endpoint
    .setProject("68a7badf000b71ce2f21");
export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);
