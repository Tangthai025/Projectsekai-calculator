import { useState } from 'react'
import './From.css'

function From(){
    const [perfect,setPerfect] = useState<number>(0)
    const [great,setGreat] = useState<number>(0)
    const [good,setGood] = useState<number>(0)
    const [result,setResult] = useState<number>(0)

    const inputPerfect = (e:any) =>{
        setPerfect(parseInt(e.target.value))
    }
    const inputGreat = (e:any) =>{
        setGreat(parseInt(e.target.value))
    }
    const inputGood = (e:any) =>{
        setGood(parseInt(e.target.value))
    }
    const totalScore =(e:any)=>{
        e.preventDefault()
        let p:number = perfect * 3
        let g:number = great * 2
        let sam:number = p + g + good
        console.log(sam)
        setResult(sam)
    }
    return(
        <div>
            <form onSubmit={totalScore}>
                <div>
                    <h2>Perfect</h2>
                    <input type="number" placeholder='0' onChange={inputPerfect}/>
                </div>
                <div>
                    <h2>Great</h2>
                    <input type="number" placeholder='0' onChange={inputGreat}/>
                </div>
                <div>
                    <h2>Good</h2>
                    <input type="number" placeholder='0' onChange={inputGood}/>
                </div>
                <div>
                    <h2>Bad</h2>
                    <input type="number" placeholder='0'/>
                </div>
                <div>
                    <h2>miss</h2>
                    <input type="number" placeholder='0'/>
                </div>
                <div className='btn-sub'>
                    <button type="submit" className='btn'>ok</button>
                </div>
                <div>
                    <h1>{`Scoce = ${result}`}</h1>
                </div>
            </form>
        </div>
    )
}

export default From