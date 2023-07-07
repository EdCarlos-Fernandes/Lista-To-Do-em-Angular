import { Pessoa } from './pessoa';

describe('Pessoa', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Pessoa()).toBeTruthy();
  });
});
