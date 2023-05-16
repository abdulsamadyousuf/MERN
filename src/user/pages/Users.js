import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwVJV38db9e6c6qLcHw53zMFT9j81nnv13Go8rzlOSA&s",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
