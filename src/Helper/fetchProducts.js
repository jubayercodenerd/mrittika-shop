// src/services/productsService.js

import { databases, storage } from "./appwrite";
import { Query } from "appwrite";

const DATABASE_ID = "68af04bb0004780fc1ec";   // your database ID
const COLLECTION_ID = "product-list";         // your collection ID
const BUCKET_ID = "68b0dbf20024475dbb2f";           // your storage bucket ID

function attachImages(product) {
    return {
        ...product,
        productImages: product["product-images"]?.map(fileId =>
            storage.getFileView(BUCKET_ID, fileId)
        ) || []
    };
}

export async function fetchAllProducts() {
    const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    return res.documents.map(attachImages);
}

export async function fetchProductBySlug(slug) {
    const res = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("slug", slug)]
    );
    return res.documents.length > 0 ? attachImages(res.documents[0]) : null;
}

export async function fetchProductsByCategory(category) {
    const res = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.contains("category", category)]
    );
    return res.documents.map(attachImages);
}

export async function searchProducts(keyword) {
    const res = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
            Query.search("name", keyword),
            Query.search("description", keyword)
        ]
    );
    return res.documents.map(attachImages);
}

export async function fetchFeaturedProducts() {
    const res = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("is-featured", true)]
    );
    return res.documents.map(attachImages);
}

export async function fetchTopPopularProducts() {
    const res = await databases.listDocuments(
        DATABASE_ID,       // use your constant
        COLLECTION_ID,     // use your constant
        [
            Query.orderDesc("popularity"), // order by popularity (highest first)
            Query.limit(10)                // only 10 products
        ]
    );

    return res.documents.map(attachImages);
}

export async function fetchDiscountedProducts() {
    const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    console.log(res);
    return res.documents
        .filter(product => {
            const base = product["base-price"];
            const active = product["active-price"];
            if (!base || !active) return false;
            const discount = 1 - (active / base);
            return discount > 0.25;
        })
        .map(attachImages);
}
