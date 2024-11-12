import { useEffect, useState } from "react";

const FollowBtn = ({id}) => {
  const [followStatus, setFollowStatus] = useState(true);

 

  const handlefollowUser = () => {
    setFollowStatus(!followStatus);
  };

  

  //? ternary operator
  return followStatus ? (
    <div
      className="py-1 h-fit w-24 text-center bg-blue-400 text-white text-base rounded-lg cursor-pointer hover:border-blue-500 hover:border-2"
      onClick={handlefollowUser}
    >
      follow
    </div>
  ) : (
    <div
      className="py-1 w-24 h-fit text-center text-blue-400 text-base rounded-lg border-[1px] border-blue-100 cursor-pointer hover:border-blue-500 hover:border-2"
      onClick={handlefollowUser}
    >
      followed
    </div>
  );
};

export default FollowBtn;
