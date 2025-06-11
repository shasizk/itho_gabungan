import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] text-[#1f2937] font-sans">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center px-5 py-24 space-y-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/1.png')" }}
      >
        <div className="relative flex flex-col items-center justify-center w-full space-y-12">
          <h1 className="text-5xl mt-70 md:text-6xl font-extrabold text-black mb-6 drop-shadow-md">
            Welcome to SES Library
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-black opacity-90 leading-relaxed">
            This is an online library platform built by the Industrial Class of SIJA. Here, you can add and manage book collections digitally, making it easier to share and access knowledge together. Whether you're an avid reader, a student, or a teacher, Shaisasa Library offers a user-friendly interface that allows seamless interaction with various books and resources.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24 px-5 text-center shadow-lg rounded-lg mx-5 mt-10">
        <h2 className="text-4xl font-extrabold text-[#2d3748] mb-8 drop-shadow-md">About SES Library</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#4a5568] opacity-90 leading-relaxed">
          SES Library is a digital platform designed to make managing and sharing books easier for everyone. Built by the Industrial Class of SIJA, it aims to foster a love for reading and learning by providing a user-friendly interface and a wide range of features. Whether you're a student, teacher, or book enthusiast, SES Library is here to support your journey.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-5 bg-gradient-to-r from-[#f9fafb] to-[#e5e7eb] mt-10">
        <h2 className="text-4xl font-extrabold text-[#1f2937] text-center mb-12 drop-shadow-md">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1f2937] mb-4">Why Choose SES Library?</h3>
            <ul className="list-disc text-lg space-y-4 text-[#4a5568] opacity-90 leading-relaxed">
              <li>Easy-to-use interface for managing and adding books</li>
              <li>Search and filter books by category, author, or title</li>
              <li>Share and recommend books with other users seamlessly</li>
              <li>Access digital resources from anywhere at any time</li>
              <li>Support for multiple book formats for an enhanced reading experience</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1f2937] mb-4">How It Works</h3>
            <ul className="list-decimal text-lg space-y-4 text-[#4a5568] opacity-90 leading-relaxed">
              <li>Sign up for a free account</li>
              <li>Browse the collection or add your own books</li>
              <li>Use the search functionality to find books based on your interests</li>
              <li>Enjoy reading or sharing the books with others</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center w-full space-y-12">
        <div className="mt-42">
          <Image 
            src="/image/2.jpg" 
            alt="Library shelves" 
            width={700} 
            height={450} 
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold text-[#2d3748] mt-16 mb-4">Contact Us</h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-[#4a5568] opacity-80">
          If you have any questions or need assistance, feel free to reach out to us. Our support team is ready to help!
        </p>
        <Link href="/contact" style={{ textDecoration: 'none' }}>
        <button className="bg-[#2b6cb0] hover:bg-[#3182ce] text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
          Get in Touch
        </button>
        </Link>
        
      </section>
    </main>
  );
}
