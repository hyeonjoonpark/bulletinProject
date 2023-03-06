import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user_id, setUserId] = useState();
  const [profile_nickName, setProfileNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const [email, setEmail] = useState();

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });

      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setProfileNickName(data.properties.profile_nickname);
      setProfileImage(data.properties.profile_image);
      setEmail(data.account_email);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h2>{user_id}</h2>
      <h2>{profile_nickName}</h2>
      <img src={profileImage}></img>
    </div>
  );
};

export default Profile;