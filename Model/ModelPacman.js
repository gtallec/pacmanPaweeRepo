class ModelPacman extends ModelMovingActor
{
    constructor(x,y,speed,tempo,model)
    {
        super(x,y,speed,tempo,model);
    }
    setDirection(direction)
    {
        this.direction = direction;
    }
}