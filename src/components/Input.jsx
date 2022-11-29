import './Input.css';
import {useState} from "react";


const Input = () => {

    const [values, setValues] = useState('')
    const [list, setList] = useState([])
    const [clicked, setClicked] = useState(false)
    const [click2, setClick2] = useState('')



    return <div className={'input-container'}>
        <div className={'input-row'}>
            <input id={'input-space'}
                   onChange={(e) => setValues(e.target.value)}/>
            <button id={'add'}
                    onClick={
                        () => {
                            const x = list
                            x.push(values)
                            setList(x)
                            setClicked(true)
                        }
                    }>
                ADD
            </button>
        </div>
        <div>
            {
                clicked && list.map((item, index) =>
                    <div className={'listItems'}>
                        <p
                            id={'item'}
                            onClick={() => {
                                   setClick2(index)

                               }
                            }
                        >
                            {

                                click2===index ? <input onChange={(e)=>{
                                    list[index]=(e.target.value)}}/> : item
                            }
                        </p>
                        <button id={'delete'}
                                onClick={() => list.splice(index, 1)}>x
                        </button>
                    </div>
                )
            }
        </div>
    </div>

}
export default Input;
