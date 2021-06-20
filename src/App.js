import React from 'react';
import { Header } from './components';
import { Home } from './pages';
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
    return(
      <>
        {/* //тут что-то не понятное, прокидываю, но в хедере не достаю, но без этого - не работает... */}
        <Header a={store.isAuth}/> 
        <Home />
      </>
    )
}

export default observer(App);
