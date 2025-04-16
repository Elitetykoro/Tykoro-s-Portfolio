export const gridCells = n => 
{
    return n * 16;
}

export const isSpaceFree = (walls, x, y) =>
{
    const str = `${x},${y}`;
    const isWallPresent = walls.has(str);

    return !isWallPresent;
}

export const isSpaceInteractible = (interactible, x, y) =>
    {
        const str = `${x},${y}`;
        const isInterectiblePresent = interactible.has(str);
    
        return !isInterectiblePresent;
    }