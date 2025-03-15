class Resources
{ 
    constructor()
    {
        // Every image you want to load
        this.toLoad = 
        {
            sky: "/game/sprites/sky.png",
            ground: "/game/sprites/ground.png",
            player: "/game/sprites/miniME.png",
            shadow: "/game/sprites/playerShadow.png"
        }

        // Variable for all images
        this.images = {};

        //Load each image
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key]

            this.images[key] = 
            {
                image: img,
                isLoaded: false
            }

            img.onload = () => 
            {
                this.images[key].isLoaded = true;
            }
        })
    }
}

// create a instance
export const resources = new Resources();