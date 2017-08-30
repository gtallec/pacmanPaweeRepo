class ModelMovingActor
{
    constructor(x, y, speed, tempo, model)
    {
        this.model = model;
        this.x = x;
        this.y = y;
        this.speed = speed; // en case par seconde ?
        this.tempo = tempo;
        this.direction = null;
    }
    followDirection()
    {
        var direction = this.direction;
        var x = this.x;
        var y = this.y;
        if((x!=-1)&&(y!=-1))
        {
            var distance = this.speed * this.tempo;
            switch(direction)
            {
                case 'down':
                {
                    var newX = Math.floor(x + distance);
                    if(this.askModelForPermission(newX,y))
                    {
                        this.x = newX;
                    }
                    break;
                }
                case 'up':
                {
                    var newX = Math.floor(x-distance);
                    if(this.askModelForPermission(newX,y))
                    {
                        this.x = newX;
                    }
                    break;
                }
                case 'left':
                {
                    console.log('virage à gauche');
                    var newY = Math.floor(y-distance);
                    if(this.askModelForPermission(x,newY))
                    {
                        this.y = newY;
                    }
                    break;
                }
                case 'right':
                {
                    var newY = Math.floor(y+distance);
                    if(this.askModelForPermission(x,newY))
                    {
                        this.y = newY;
                    }
                    break;  
                }
            }
        }
    }
    askModelForPermission(x,y)
    {
       return this.model.askModelMazeForPermission(x,y);
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
    disable()
    {
        this.x = -1;
        this.y = -1;
    }
}