import FollowBtn from "./FollowBtn";

const User = ({id, name, jobTitle, company, location, avatarUrl }) => {
  return (
    <section className="flex gap-5">
      <img
        src={avatarUrl}
        alt=""
        className="h-16 w-16 object-cover rounded-full"
      />

      {/* user-info and follow btn */}
      <section className="flex justify-between items-center w-full "> 
        <div className="flex flex-col gap-1">
          <div className="hover:cursor-pointer text-blue-600 hover:underline">{name}</div>
          <div className="text-sm">{jobTitle}</div>
        </div>
        <FollowBtn id = {id}/>
      </section>

    </section>
  );
};

export default User;
