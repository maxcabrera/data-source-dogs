import { GraphQLConnector } from '@gramps/gramps-express';
import Connector from '../src/connector';
import { API_BASE_URI } from '../src/constants';

const connector = new Connector();

describe(`Dogs Connector`, () => {
  it('inherits the GraphQLConnector class', () => {
    expect(connector).toBeInstanceOf(GraphQLConnector);
  });

  it('uses the appropriate URL', () => {
    expect(connector.apiBaseUri).toBe(API_BASE_URI);
  });
});
