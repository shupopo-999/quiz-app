export function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


export function sample<T>(arr: T[], count: number): T[] {
    return shuffle(arr).slice(0, Math.max(0, Math.min(count, arr.length)));
}


export function eqSet(a: Set<string>, b: Set<string>): boolean {
    if (a.size !== b.size) return false;
    let ok = true;
    a.forEach((v) => {
      if (!b.has(v)) ok = false;
    });
    return ok;
}