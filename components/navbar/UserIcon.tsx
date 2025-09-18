import { currentUser } from "@clerk/nextjs/server";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        className="w-6 h-6 rounded-full object-cover"
        alt="user profile image"
      />
    );
  }
  return <LuUser className="size-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
