import React, { useState, useEffect } from 'react';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import objectToXml from "object-to-xml";
import { useContext } from 'react';

import { SubmitButton } from '../molecules/Buttons';
import BookServices from '../../services/books';
import TextInputs from '../atoms/Input';
import FormType from '../molecules/FormType';
import { BooksContext, FormTypeContext } from "../../contexts/Contexts";
import { jsonToText } from '../../services/parseText';

const EditView = () => {
  const nav = useNavigate();
  const { books, setBooks } = useContext(BooksContext);
  const {formType, setFormType} = useContext(FormTypeContext);

  const [book, setBook] = useState();
  const { bookId } = useParams();

  useEffect(() => {
    if (books.length > 0) {
      const matchedBook = books.find((b) => Number(b.id) === Number(bookId));
      setBook(matchedBook || null);
    } else {
      setBook(null);
    }
  }, [books, bookId]);

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    date: '',
    genres: '',
    characters: '',
    synopsis: '',
  });

  useEffect(() => {
    if (book) {
      setFormData({
        id: book.id || '',
        title: book.title || '',
        author: book.author || '',
        date: book.date || '',
        genres: book.genres || '',
        characters: book.characters || '',
        synopsis: book.synopsis || '',
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, formType);
  };

  const onSubmit = (formData, dataType) => {
    switch (dataType) {
      case "application/json":
        sendRequest(formData, "application/json", "text/plain")
        break;
      case "application/xml":
        const xmlData = objectToXml({ book: formData });
        sendRequest(xmlData, "application/xml", "text/plain")
        break;
      case "text/plain":
        let textString = jsonToText(formData, "Book");
        sendRequest(textString, "text/plain", "text/plain")
        break;
      default:
        sendRequest(formData, "application/json", "text/plain")
        break;
    }
  }
  

  const sendRequest = async (formData, contentType, accept) => {
    try {
      const response = await BookServices.update(bookId, "/books", formData, {
        "Content-Type": contentType,
        Accept: accept,
      });

      alert(response.data);

      //Update book list
      setBooks((prevBooks) =>
        prevBooks.map((book) => {
          return book.id === Number(bookId) ? { ...book, ...formData } : book;
        })
      );

      nav("/books", { replace: true });
      //prevent caching previous values 
      window.location.reload(); 

    } catch (error) {
      alert("Failed to update.");
    }
  };

  return (
    <div className="flex justify-center w-full py-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-start w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Edit Book</h2>

        <TextInputs.Input
          id="title"
          label="Title"
          name="title"
          type="text"
          value={formData.title}
          onChange={(e) => handleChange(e)}
          className="w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md"
        />

        <TextInputs.Input
          id="author"
          label="Author"
          name="author"
          type="text"
          value={formData.author}
          onChange={(e) => handleChange(e)}
          className="w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md"
        />

        <TextInputs.Input
          id="date"
          label="Date"
          name="date"
          type="text"
          value={formData.date}
          onChange={(e) => handleChange(e)}
          className="w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md"
        />

        <TextInputs.Input
          id="genres"
          label="Genres"
          name="genres"
          type="text"
          value={formData.genres}
          onChange={(e) => handleChange(e)}
          className="w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md"
        />

        <TextInputs.Input
          id="characters"
          label="Characters"
          name="characters"
          type="text"
          value={formData.characters}
          onChange={(e) => handleChange(e)}
          className="w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md"
        />

        <TextInputs.TextArea
          id="synopsis"
          label="Synopsis"
          name="synopsis"
          value={formData.synopsis}
          onChange={(e) => handleChange(e)}
          rows="5"
          className="w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md"
        />
        <div className="m-auto flex flex-col gap-5">
          <FormType setFormState={setFormType} formType={formType} />
          <SubmitButton onClick={(e) => handleSubmit(e)} />
        </div>
      </form>
    </div>
  );
};

export default EditView;