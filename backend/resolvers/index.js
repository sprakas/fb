import authResolver from './auth';
import notesResolver from './notes';

const rootResolver = {
  ...authResolver,
  ...notesResolver
};

export default rootResolver;