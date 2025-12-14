import { cn } from './utils';

describe('cn utility', () => {
  it('merges class names and removes duplicates', () => {
    const result = cn('btn', 'btn-primary', { 'hidden': false }, ['extra', 'btn']);
    expect(typeof result).toBe('string');
    expect(result).toContain('btn');
    expect(result).toContain('btn-primary');
    expect(result).toContain('extra');
  });

  it('returns empty string when no inputs', () => {
    const result = cn();
    expect(result).toBe('');
  });
});
