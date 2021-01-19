import React from 'react'
import './App.sass';

// Bootstrap
import {
  Container
} from 'react-bootstrap';

import {useDispatch, useSelector} from "react-redux";

// Components 
import Item from './components/Item/Item';
import {fetchData, fetchPosts, fetchUsers} from './redux/actions';
import Search from "./components/Search/Search";
import Loader from "./components/Spinner/Spinner";

function App() {
  const {showItems, users, isLoaded, errors}  = useSelector(({ data }) => data)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchData())
  }, [])

  if(!isLoaded){
    return <Loader/>
  }
  return (
    <div className="App">
      <Container>
        <Search dispatch={dispatch}/>
        <div className="d-flex justify-content-start flex-wrap App__content">
          {errors.nothingFind &&
            <div style={{margin: "auto"}}>
              <h3>Ничего не найдено</h3>
            </div>
          }
          {!errors.nothingFind && showItems && showItems.map((showItem,i) => (
            <Item
              key={Date.now() + i}
              showItem={showItem}
              user={users && users.filter(user => user.id === showItem.userId)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default React.memo(App);
