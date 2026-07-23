import React, { useEffect, useState } from "react";

const Datafetchingeffect = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setUser(data);
        }
      });

    return () => {
      ignore = true;
    };
  }, [userId]);
  return <div>{user?.name}</div>;
};

export default Datafetchingeffect;
