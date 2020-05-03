import { IsTodayEventPipe } from './is-today-event.pipe';

describe('IsTodayEventPipe', () => {
  it('create an instance', () => {
    const pipe = new IsTodayEventPipe();
    expect(pipe).toBeTruthy();
  });
});
