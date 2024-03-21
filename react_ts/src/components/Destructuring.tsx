import React from 'react'

type Props = {
    title: string;
    content: string;
    commentQty: number;
    tags: string[];
    // 7 - Utilizando enum
    category: Category;
}

// 7 - Utilizando enum
export enum Category{
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python"
}

const Destructuring = ({ title, content, commentQty, tags, category }: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{commentQty}</p>
            {tags.map((tag) => (
                <span key={tag}>#{tag}</span>
            ))}
            {/* 7 - Utilizando enum */}
            <p>Categoria: {category}</p>
        </div>
    )
}

export default Destructuring