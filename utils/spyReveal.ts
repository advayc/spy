export function formatSpyReveal(names: string[]): string {
  if (names.length === 0) return 'You are the only spy in the game.';
  if (names.length === 1) return `${names[0]} is the other spy.`;
  return `${names.join(', ')} are the other spies.`;
}
