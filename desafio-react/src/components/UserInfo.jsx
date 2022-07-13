import { useEffect, useState } from "react";
import Repo
from "./Repo";

const UserInfo = () => {

  const [user, setUser] = useState([]);
  //const [type, setType] = useState("repos");
  const [users, setUsers] = useState([]);

  let EndPoint = "https://api.github.com/users";
  const pathname = "/macournoyer"
  const type = "repos"

  async function GetUserInfo() {
    const res = await fetch(EndPoint + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }

  async function GetUrls() {
    setUsers([]);

    const res = await fetch(EndPoint + pathname + `/${type}`);
    const data = await res.json();
    setUsers(data);
 
  }

  useEffect(() => {
    GetUserInfo();
    GetUrls();
    console.log(users);
  }, []);

  return (
    <div className="py-5">
      
      {type === "repos" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
          {users && <Repo users={users} />}
        </div>
      )}

    </div>
  )
}
export default UserInfo;