import React, { createContext, useContext, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { IProfile } from "./model";

interface IProfileState {
  // profile: IProfile;
  setProfile: (profile: IProfile) => void;
  fetchProfile: () => void;
  updateProfile: () => void;
}
const ProfileContext = createContext<IProfileState>({
  // profile: null,
  setProfile() {},
  fetchProfile() {},
  updateProfile() {},
});

export const useProfiletate = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("context must be wrapped around the app provider");
  }
  return context;
};
interface IProps {
  children: React.ReactNode;
}

export const ProfileContextProvider: React.FC<IProps> = ({ children }) => {
  const [profile, setProfile] = useState<IProfile>();

  const fetchProfile = async () => {
    const user = await supabase.auth.getUser();
    console.log(user);
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user?.data.user?.id);
    if (data) {
      setProfile(data as any);
      console.log(data);
    } else {
      console.log(error);
    }
  };

  const updateProfile = async () => {
    const user = await supabase.auth.getUser();
    const usersProps = {
      id: user?.data?.user?.id,
      firstName: user?.data?.user?.user_metadata?.firstName,
      lastName: user?.data?.user?.user_metadata?.lastName,
      email: user?.data?.user?.email,
      avatarUrl: null,
      // updated_at: new Date(),
    };
    const { data, error } = await supabase.from("profiles").update(usersProps);
    if (data) {
      setProfile(data as any);
      console.log(data);
    } else {
      console.log(error);
    }
  };
  return (
    <ProfileContext.Provider
      value={{ setProfile, fetchProfile, updateProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
