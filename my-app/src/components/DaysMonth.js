import { useState } from "react";

const DaysMonth=({allDays})=>{

    let selectDay


    const clicked=(el)=>{
        selectDay=el
        console.log(selectDay)
    }
    const dayNow=()=>{
        console.log(selectDay,"/6/2022")
    }

    const deleteNow=()=>{
        let date=new Date()
        console.log(date.getDate(),'/6/2022')
    }


        return(
            <>

                <div className="daysMonth" onClick={()=>clicked(28)}>28</div>
                <div className="daysMonth" onClick={()=>clicked(29)}>29</div>
                <div className="daysMonth" onClick={()=>clicked(30)}>30</div>
                {allDays.map(el=><div className="daysMonth" onClick={()=>clicked(el)} key={el}> {el} </div>) }
                
                <div>
                
                    <button onClick={()=>dayNow()}>Schedule</button>
                    <button onClick={()=>deleteNow()}>Cancel</button>
                </div>
            </>
        )

}

export default DaysMonth;