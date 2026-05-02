"use client";
import { UpdateProfileModal } from "@/component/UpdateProfileModal";
import { authClient } from "@/lib/auth.client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const Profile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user, "xxxxxxxx");
  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center mt-5 border border-gray-200">
        <Avatar className="w-36 h-36">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold mt-4">{user?.name}</h2>
        <p className="text-gray-500">{user?.email}</p>
      <UpdateProfileModal />
      </Card>
    </div>
  );
};

export default Profile;
