import React from 'react';
import ContactsForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

function App() {
  return (
    <div className="Container flex flex-col items-center gap-4">
      <h1 className="text-3xl">İletişim Kitabı</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
