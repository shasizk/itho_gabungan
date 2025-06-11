import { useState, useEffect } from "react";
import Link from "next/link";

export default function BookForm({ onSubmit, initialData }) {
    const [title, setTitle] = useState(initialData?.title || '');
    const [author, setAuthor] = useState(initialData?.author || '');
    const [category, setCategory] = useState(initialData?.category || '');
    const [date, setDate] = useState(initialData?.date || '');
    const [image, setImage] = useState(initialData?.image || '');

    useEffect(() => {
        setTitle(initialData?.title);
        setAuthor(initialData?.author);
        setCategory(initialData?.category);
        setDate(initialData?.date);
        setImage(initialData?.image);
    }, [initialData]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookData = {
            title,
            author,
            category,
            date,
            image, // Ensure the cover is included in the submitted data
        };
        onSubmit(bookData);
    };

    const styles = {
        container: {
            textAlign: 'center',
            marginTop: '30px', // Increased margin to push it below the navbar
            marginBottom: '30px',
        },
        slogan: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333',
        },
        form: {
            maxWidth: '400px',
            margin: '0 auto',
            padding: '40px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 5px 7px rgba(0, 0, 0, 0.1)',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'flex',
            marginBottom: '5px',
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
        button: {
            marginTop: '10px',
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        button1: {
            marginTop: '10px',
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#facc15',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={{ ...styles.slogan, textAlign: 'center', wordWrap: 'break-word', whiteSpace: 'normal' }}>
                Contribute your books to expand our library!!
            </h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="title" style={styles.label}>Book Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="author" style={styles.label}>Author</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="category" style={styles.label}>Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={styles.input}
                    >
                        <option value="">Select a category</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Science">Science</option>
                        <option value="History">History</option>
                        <option value="Romance">Romance</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="date" style={styles.label}>Publication Date</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="image" className={styles.label}>Image</label>
                <input
                    type="file"
                    id="image"
                    onChange={handleFileChange}
                    className={styles.input}
                />
                {image && (
                    <img
                        src={image}
                        alt="Preview Image"
                        style={{ marginTop: 10, maxWidth: "100%", maxHeight: 200 }}
                    />
                )}
            </div>
                <button type="submit" style={styles.button}>Save</button>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <button type="button" style={styles.button1}>Back</button>
                </Link>
            </form>
        </div>
    );
}