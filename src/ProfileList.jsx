import { useEffect, useState } from "react";
import User from "./components/User";
import Error from "./components/Error";
import Loader from "./components/Loader";

const ProfileList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [followData, setFollowData] = useState([]);
  const [follow, setFollow] = useState("");
  const [followed, setFollowed] = useState("");
  // const followStyle =
  //   "py-1 px-4 w-fit h-fit bg-blue-400 text-white text-base rounded-lg cursor-pointer hover:border-blue-500 hover:border-2";
  // const followedStyle =
  //   "py-1 px-4 w-fit h-fit text-blue-400 text-base rounded-lg border-[1px] border-blue-100 cursor-pointer hover:border-blue-500 hover:border-2";

  useEffect(() => {
    const fetchUsersData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/users");
        const data = await response.json();
        setUsers(data);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
      } catch (err) {
        // console.log(err.message);
        setLoading(false);
        setError(true);
      }
      setLoading(false);
    };
    fetchUsersData();
  }, []);

  useEffect(() => {
    const fetchFollowingData = async () => {
      try {
        const response = await fetch("http://localhost:3001/following");
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        console.log(data);
        setFollowData(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchFollowingData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <section className="flex flex-col w-full gap-8">
      <section className="flex flex-col gap-5">
        {users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </section>
      <p className="text-center text-blue-500 text-lg cursor-pointer">
        View All
      </p>
    </section>
  );
};

export default ProfileList;
