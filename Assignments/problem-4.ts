{

    //problem-4

    type CircleArea = {
        shape: string, 
        radius: number
    }

    type RectangleArea = {
        shape: string,
        width: number,
        height: number,
    }

    


    const calculateShapeArea = (obj: CircleArea | RectangleArea)=>{

        // if(typeof obj.shape === 'string')

        if(typeof obj.shape ==='string'){
            return 
        }
        console.log(typeof obj.shape)
    }

    calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });

      calculateShapeArea({ shape: "circle", radius: 5 });

    //   console.log(rectangleArea)

}