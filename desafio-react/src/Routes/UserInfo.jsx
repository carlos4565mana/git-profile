import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Repo from "../components/Repo";
import Events from "../components/Events";
import Tabs from "../components/Tabs"
import UserDetails from "../components/UsersDetails";
import UsersContainer from "../components/UsersContainer";
import Loading from "../components/Loading";

const UserInfo = () => {

  const [user, setUser] = useState([]);
  const [type, setType] = useState("repos");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  let EndPoint = "https://api.github.com/users";
  

  async function GetUserInfo() {
    const res = await fetch(EndPoint + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }

  async function GetUrls() {
    setUsers([]);
   setLoading(true);

    const res = await fetch(EndPoint + pathname + `/${type}`);
    const data = await res.json();
    setUsers(data);
   setLoading(null);
 
  }

  useEffect(() => {
    GetUserInfo();
    GetUrls();
    console.log(users);
  }, [pathname, type]);

  return (
    <div className="py-5">
      <button
        onClick={() => navigate("/")}
        className="px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text-gray-200"
      >BACK</button>

      <UserDetails user={user} />

      <div className="flex border-b pb-4 gap-6 mt-[10%] mb-6 justify-center md:text-xl ">
        <Tabs type={type} setType={setType} />
      </div>  
      {loading && <Loading />}
      {type === "repos" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
          {users && <Repo users={users} />}
        </div>
      )}

      {type === "received_events" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto ">
          {users && <Events data={users} />}
        </div>
      )}
       {type === "followers" && <UsersContainer users={users} />}

    </div>
  )
}
export default UserInfo;