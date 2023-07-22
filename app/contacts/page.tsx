const contacts = [
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123-456-7890",
    created: "2021-09-01",
  },
];

export default function Contacts() {
  let paddingLeft = "pl-5";
  let paddingRight = "pr-5";
  return (
    <div className="flex-1 flex flex-col w-full px-10">
      <h1 className="text-4xl font-bold text-center mb-6 mt-6">Contacts</h1>
      <table className="table-auto text-left">
        <thead className="border-b bg-neutral-200 font-medium dark:border-neutral-500 dark:text-neutral-800">
          <tr>
            <th className={paddingLeft}>Phone</th>
            <th></th>
            <th>Name</th>
            <td>Created</td>
            <th className={paddingRight}></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td className={paddingLeft}>{contact.phone}</td>
              <td>button</td>
              <td>{contact.name}</td>
              <td>{contact.created}</td>
              <td className={paddingRight}>delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
