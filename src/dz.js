import React, { useEffect, useState } from "react";
function Dz(){
    const [firstList, setFirstList] = useState([])
    const [secondList, setSecondList] = useState([])
    const [thirdList, setThirdList] = useState([])
    const  [personList, setpersonList] = useState([
        { 
            id: 1,
            name: 'John',
            age: 20,
            salary: 2000,
            country: "Germany"
        },
        {
            id: 2,
            name: 'Ann',
            age: 17,
            salary: 1300,
            country: "Ukraine"
        },
        {
            id: 3,
            name: 'Ivan',
            age: 23,
            salary: 2500,
            country: "Germany"
        },
        {
            id: 4,
            name: 'Johny',
            age: 16,
            salary: 0,
            country: "Italy"
        },
        {
            id: 5,
            name: 'Lisa',
            age: 23,
            salary: 20000,
            country: "Ukraine"
        },
        {
            id: 6,
            name: 'Tim',
            age: 10,
            salary: 1700,
            country: "Ukraine"
        },
        {
            id: 7,
            name: 'Rita',
            age: 27,
            salary: 2000000,
            country: "Germany"
        },
        {
            id: 8,
            name: 'Kim',
            age: 15,
            salary: 1400,
            country: "Ukraine"
        }
    ])


    useEffect(() =>{
        const sortedList = personList.sort((a,b) =>{
            if(a.salary == b.salary){
                return 0;
            }
            if(a.salary < 1500){
                return 1;
            }
            return -1;
            })
            setFirstList(sortedList)
            
        }, []) 
 
    

    useEffect(() =>{
        const sortedList2 = personList.sort((a,b) =>{
            if(a.age == b.age){
                return 0;
            }
            if(a.age < 18){
                return 1;
            }
            return -1;
            })
            setSecondList(sortedList2)
        
        },[]
    )
    


    useEffect(()=>{
        const sortedList3 = personList.sort((a,b) =>{
            if(a.country == b.country){
                return 0;
            }
            if(a.country != "Ukraine"){
                return 1;
            }
            return -1;
        })
        setThirdList(sortedList3)
       
    },[])
    
}
export default Dz;