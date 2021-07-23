import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function SingleUserPage() {
  const { userID } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `https://reqres.in/api/users/${userID}`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
        console.log(data);
      });
  }, [userID]);

  function renderUser() {
    if (isLoading || user === null) {
      return "Loading...";
    }

    const { data } = user;
    console.log(user);

    return (
      <section>
        <h2>{data?.first_name}</h2>
      </section>
    );
  }

  return renderUser();
}
