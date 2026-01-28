import { useState } from 'react';

export function useTabs(ids, initial) {
  const [active, setActive] = useState(initial ?? ids[0]);
  return { active, setActive };
}

