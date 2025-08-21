import Contact from './Contact';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
export default ContactList;
