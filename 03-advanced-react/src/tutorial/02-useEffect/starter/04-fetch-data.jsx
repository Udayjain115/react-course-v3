const url = 'https://api.github.com/users';
import { useEffect, useState } from 'react';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { login, id, html_url, avatar_url } = user;

          return (
            <li>
              <img
                src={avatar_url}
                alt={login}></img>

              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
