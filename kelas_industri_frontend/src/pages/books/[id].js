import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BookForm from '../../components/BookForm';

const BACKEND_URL = `http://localhost:5000`;

export default function EditBook() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  const _getBookById = async () => {
    if (id) {
      const res = await fetch(`${BACKEND_URL}/books/${id}`);
      const data = await res.json();
      setBook(data);
    }
  };

  useEffect(() => {
    _getBookById();
    console.log(book, "ini book");
  }, [id]);

  const updateBook = async (data) => {
    await fetch(`${BACKEND_URL}/books/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    router.push('/books');
  };

  if (!book) return <p>Loading...</p>;
  return <BookForm initialData={book} onSubmit={updateBook} />;
}