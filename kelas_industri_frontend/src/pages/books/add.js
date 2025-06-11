import { useRouter } from "next/router";
import BookForm from "../../components/BookForm";

export default function AddBook() {
    const router = useRouter();

    const AddBook = async (book) => {
       await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        router.push('/books')
    };

    return (
        <div style={{
            backgroundImage: "url('/image/4.png')", // Pastikan path ini benar
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex", 
                alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
                <BookForm onSubmit={AddBook} />
            </div>
        </div>
    );
}
