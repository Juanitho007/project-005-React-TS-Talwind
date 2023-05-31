import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { getAllTypes } from "../../services/getAllTypes";
import { FiltersFormProps, TypesProps } from "src/interfaces/interfaces";

const FiltersForm = ({ nameInitial, typeInitial }: FiltersFormProps) => {
  const [types, setTypes] = useState<TypesProps>();
  const [searchName, setSearchName] = useState(nameInitial);
  const [searchType, setSearchType] = useState(typeInitial);
  const handleChange = (e: { target: { value: string } }) => {
    setSearchName("");
    setSearchName(e.target.value);
  };
  const handleChangeType = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setSearchType(Number(value));
  };
  useEffect(() => {
    const loadTypes = async () => {
      const typesList = await getAllTypes();
      setTypes(typesList);
    };
    loadTypes();
  }, []);
  useEffect(() => {
    setSearchName(nameInitial);
  }, [nameInitial]);
  useEffect(() => {
    setSearchType(typeInitial);
  }, [typeInitial]);

  return (
    <Form>
      <div className="flex">
        <div className="flex w-full xs:w-480px">
          <input
            type="text"
            placeholder="Escribe el nombre de tu pokemon"
            name="pokemonName"
            value={searchName.toUpperCase()}
            onChange={handleChange}
            autoComplete="off"
            className="p-2 rounded-l-3xl sm:w-[400px] font-bold outline-none w-full"
          />
          <select
            className="border-2 border-l-zinc-400 outline-none"
            name="pokemonType"
            value={searchType}
            onChange={handleChangeType}
          >
            <option value="">All</option>
            {types && types.map((type: TypesProps) => (
              <option key={type.id} value={type.id}>
                {type.name[0].toUpperCase() + type.name.slice(1)}
              </option>
            ))}
          </select>
          <button type="submit" className="bg-white/90 p-2 font-bold">
            <i className="bx bx-search-alt bx-flashing text-2xl"></i>
          </button>
        </div>
      </div>
    </Form>
  );
};

export default FiltersForm;
