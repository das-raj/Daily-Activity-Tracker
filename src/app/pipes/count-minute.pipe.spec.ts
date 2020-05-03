import { CountMinutePipe } from './count-minute.pipe';

describe('CountMinutePipe', () => {
  it('create an instance', () => {
    const pipe = new CountMinutePipe();
    expect(pipe).toBeTruthy();
  });
});
