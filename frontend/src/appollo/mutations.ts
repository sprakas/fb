import { GET_CURRENTUSER, GET_TODOS  }  from './queries';

const mutations = {
    addUserData: (root, {userId, mail}, {cache}) => {
        const currentUser = {
            userId,
            mail,
            __typename: 'CurrentUser'
        };
        cache.writeData({
            query: GET_CURRENTUSER,
            data: { currentUser }
        });
        return currentUser;
    },
    addTodo: (_, { text }, { cache }) => {
        const previous = cache.readQuery({ query: GET_TODOS });
        const newTodo = { id: Math.round(Math.random() * 1000), text, completed: false, __typename: 'TodoItem'};
        const data = {
            todos: [...previous.todos, newTodo]
        };
        cache.writeQuery({
            query: GET_TODOS,
            data: {
              todos: [...data.todos]
            }
          });
        return newTodo;
    }
};

export default mutations;
