export function moveTowards(object, destinationPosition, speed)
{
    let distanceToTravelX = destinationPosition.x - object.position.x;
    let distanceToTravelY = destinationPosition.y - object.position.y;

    let distance = Math.sqrt(distanceToTravelX**2 + distanceToTravelY**2);

    if (distance <= speed)
    {
        object.position.x = destinationPosition.x;
        object.position.y = destinationPosition.y;
    }
    else
    {
        let normalizedX = distanceToTravelX / distance;
        let normalizedY = distanceToTravelY / distance;

        object.position.x += normalizedX * speed;
        object.position.y += normalizedY * speed;

        distanceToTravelX = destinationPosition.x - object.position.x;
        distanceToTravelY = destinationPosition.y - object.position.y;
        distance = Math.sqrt(distanceToTravelX ** 2 + distanceToTravelY ** 2);
    }

    return distance;
}