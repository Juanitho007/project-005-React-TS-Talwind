import { useState } from "react";
interface UserNameFormProps{
  onSendName: (name: string) => void;
}
const UserNameForm = ({onSendName}:UserNameFormProps) => {
  const [nameValue, setNameValue] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: { target: { value: string; }; }) => {
    const name = e.target.value.toUpperCase();
    if (!name) {
      setNameValue('')
      setError('No puedes dejar vacio tu nombre 😅😅')
    }
    else if (/[^a-z ]/i.test(name)) {
      setError('Solo se permiten letras y espacios')
    }
    else {
      setNameValue(name)
      setError('')
    }
  }
  
  const handleSubmit = (e: { preventDefault: () => void; }) => { 
    e.preventDefault()
    if (!error) {
      onSendName(nameValue)
    }
  }
  return (
    <>
      {Boolean(error) && <p className="text-red-500">{error}</p>}
      <form
        className="flex mx-auto text-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="sm:w-[400px] p-2 text-red-500 shadow-2xl font-bold outline-none rounded-l-3xl"
          type="text"
          placeholder="Ingresa tu nombre...."
          value={nameValue}
          onChange={handleChange}
        />
        <button className="bg-red-500 p-2 text-white" type="submit">
          <i className="bx bx-loader-circle bx-spin text-3xl text-black/60 font-bold"></i>
        </button>
      </form>
    </>
  );
}

export default UserNameForm
