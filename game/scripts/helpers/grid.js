export const gridCells = n => 
{
    return n * 16;
}

export const isSpaceFree = (set, x, y) =>
{
    const str = `${x},${y}`;
    const isWallPresent = set.has(str);

    return !isWallPresent;
}