import { GraphQLConnector } from '@gramps/gramps-express';
import { API_BASE_URI } from './constants';

export default class DogsConnector extends GraphQLConnector {
  constructor(props) {
    super(props);
    this.apiBaseUri = API_BASE_URI;
  }
}
