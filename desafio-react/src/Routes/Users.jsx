import { useState, useEffect, useRef } from "react";
import UsersContainer from "../components/UsersContainer";
import Loading from "../components/Loading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const user = useRef("");

  let BaseURL = "https://api.github.com/users";

  async function allUsers() {
    if(user.current.value === ""){
      setLoading(true);
      const res = await fetch(BaseURL);
      const data = await res.json();
      console.log(data)
      setUsers(data);
      setLoading(null);
    }
  }

  async function findUser() {
    setLoading(true);
    if(user.current.value !== ""){
      setUsers("");
      const res = await fetch(BaseURL + "/" + user.current.value);
      const data=  await res.json();
      setUsers(()=>[data]);
      console.log(user)
      user.current.value = "";
    }
    setLoading(null);

  }

  useEffect( () => {
    allUsers();

  }, [user,setUsers])
  return (
    <div>
      <div className="flex justify-center h-11  my-5 items-center">
        <input
          ref={user} 
          placeholder="Search github username"
          type="text"
          className="h-full md:w-1/3 outline-none text-gray-800 px-2 
          font-semibold text-lg w-2/3" />
          <button 
            onClick={findUser}
            className="bg-teal-500 font-semibold  px-4 h-full font-[Poppins]"
           >
            Search
          </button>
      </div>
      <div>{loading ? <Loading /> : <UsersContainer users={users} />}</div>
   </div>
  )
}
export default Users;