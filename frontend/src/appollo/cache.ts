import { InMemoryCache } from 'apollo-cache-inmemory';

const cache =  new InMemoryCache();

const initialState = {
    todos : [],
    currentUser: {
        userId: '',
        mail: '',
        __typename: 'CurrentUser'
    }
   };

cache.writeData({  data: initialState });

export default cache;
