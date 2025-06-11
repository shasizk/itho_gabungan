import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/navbar";
import { getBooks } from "../../../lib/api/books";

export default function Booklist() {
    const [books, setBook] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getBooks();
                setBook(data);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, []);

    const deleteBook = async (id) => {
        try {
            await apiDeleteBook(id);
            setBook(prevBooks => prevBooks.filter(b => b.id !== id));
        }
        catch (err) {
            setError(err.message);
        }
    };

    const filteredBooks = books.filter((b) =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div style={{
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#f4f4f9',
                backgroundImage: "url('/image/5.png')", // Pastikan path ini benar
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: '100vh',
                padding: '20px',
                paddingTop: '80px', // Add padding to prevent overlap with navbar
            }}>
                <h1 style={{
                    textAlign: 'center',
                    color: '#fff',
                    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
                    marginBottom: '20px',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                }}>Book List</h1>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto 20px',
                    textAlign: 'center',
                }}>
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            backgroundColor: '#fff', // Set background to solid white
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </div>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    maxWidth: '800px',
                    margin: '0 auto',
                }}>
                    {filteredBooks.map((b) => (
                        <li key={b.id} style={{
                            backgroundColor: '#fff',
                            marginBottom: '10px',
                            padding: '15px',
                            borderRadius: '5px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Image
                                    src={b.image}
                                    alt={b.title}
                                    width={50}
                                    height={50}
                                    unoptimized
                                    style={{
                                        borderRadius: '5px',
                                        marginRight: '15px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div>
                                    <Link href={`/books/${b.id}`} legacyBehavior>
                                        <a style={{
                                            color: '#007bff',
                                            fontWeight: 'bold',
                                            textDecoration: 'none',
                                        }}>{b.title} By {b.author}</a>
                                    </Link>
                                    <p style={{
                                        margin: '5px 0',
                                        color: '#555',
                                    }}>{b.category} | {b.date}</p>
                                </div>
                            </div>
                            <div>
                                <Link href={`/books/${b.id}`} legacyBehavior>
                                    <a style={{
                                        marginRight: '10px',
                                        color: '#28a745',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                    }}>Edit</a>
                                </Link>
                                <button onClick={() => deleteBook(b.id)} style={{
                                    backgroundColor: '#dc3545',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                }}>
                    <Link href="/books/add" legacyBehavior>
                        <a style={{
                            backgroundColor: '#007bff',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>Add Book</a>
                    </Link>
                </div>
            </div>
        </>
    );
}
