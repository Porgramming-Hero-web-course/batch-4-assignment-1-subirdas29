{

    //problem-4

    type CircleArea = {
        shape: "circle" 
        radius: number
    }

    type RectangleArea = {
        shape: "rectangle"
        width: number,
        height: number,
    }

    type Shape = CircleArea | RectangleArea


    const calculateShapeArea = (obj: Shape)=>{

        if(obj.shape === "circle"){
            return parseFloat((Math.PI * obj.radius * obj.radius).toFixed(2))
        }

        else if(obj.shape === "rectangle"){
            return obj.height * obj.width
        }
        else{
            return `invalid Shape`
        }


    }

   console.log( calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  }))

     console.log( calculateShapeArea({ 
        shape: "circle", 
        radius: 5
     })
)
   

}