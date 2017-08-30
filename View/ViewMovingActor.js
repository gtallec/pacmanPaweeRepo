class ViewMovingActor
{
    constructor(modelMovingActor,caseLength,name)
    {
        this.modelMovingActor = modelMovingActor;
        this.caseLength = caseLength;
        //la longueur d'une case en pixel
    }
    updateMovingActorPosition()
    {
        var xMovingActor = this.modelMovingActor.getX();
        var yMovingActor = this.modelMovingActor.getY();
        var movingActor = null;
        var caseLength = this.caseLength;
        if((xMovingActor != -1)&&(yMovingActor != -1))
        {
            movingActor = this.selectMovingActor();
            movingActor.style.top = caseLength * xMovingActor + 'px';
            movingActor.style.left = caseLength * yMovingActor + 'px';
        }  
    }
    selectMovingActor()
    {
        
    }
    createMovingActor()
    {

        
    }
}