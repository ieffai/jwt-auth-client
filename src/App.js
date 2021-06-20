import React from 'react';
import LoginForm from './components/LoginForm';
import { Context } from './index';
import { observer } from 'mobx-react-lite'
import UserService from "./services/UserServices";

function App() {
  const store = React.useContext(Context);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  if (store.isLoading) {
    return <div>...Loading</div>
  }

  if (!store.isAuth) {
    return(
      <div>
        <LoginForm />
        <button onClick={getUsers}>Get users</button>
      </div>

    )
  }

  return (
    <div>
      <h1>{store.isAuth ? `User authorized as ${store.user.email}` : 'Please sign in'} </h1>
      <h2>{store.user.isActivated ? `Account ${store.user.email} is activated` : 'PLEASE ACTIVATE YOUR ACCOUNT'}</h2>
      <button onClick={() => store.logout()}>Log Out</button>
      <div>
        <button onClick={getUsers}>Get users</button>
      </div>
      {
          users.map((user) => 
            <div key={user.email}>{user.email} </div>
          )
        }
      

    </div>

  );
}

export default observer(App);
