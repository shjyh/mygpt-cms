import db from "./db";

export interface XArticle {
    title: string;
    content: string;
    images: string[];
};

export async function getArticle(code: string): Promise<XArticle | null> {
    const a = await db.select(["title", "content", "images"]).from("mygpt_article").where("code", code)
        .andWhere("is_deleted", 0).first();

    if(!a) return null;

    return {
        title: a.title,
        content: a.content,
        images: JSON.parse(a.images || "[]")
    }
}