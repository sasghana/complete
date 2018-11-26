import { IssuetrackerModule } from './issuetracker.module';

describe('IssuetrackerModule', () => {
  let issuetrackerModule: IssuetrackerModule;

  beforeEach(() => {
    issuetrackerModule = new IssuetrackerModule();
  });

  it('should create an instance', () => {
    expect(issuetrackerModule).toBeTruthy();
  });
});
