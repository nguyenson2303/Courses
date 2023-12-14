import {useLesson15GlobalText} from './hooks'
import { setProduct, addProduct, removeProduct } from './actions'
import { useRef } from 'react'

function App () {

    const [state, dispatch] = useLesson15GlobalText()
    const {products, productInput} = state 

    const inputRef = useRef()

    const handleAdd = () => {
        dispatch(addProduct(productInput))
        dispatch(setProduct(''))
        inputRef.current.focus()
    }

    return (
        <>
        <input
        ref={inputRef} 
        value={productInput} 
        placeholder='Enter Product...' 
        onChange={e => {dispatch(setProduct(e.target.value))}}/>
        
        <button onClick={handleAdd}>Add</button>

        {products.map((product, index) => (
            <li key={index}>{product} <span onClick={() => dispatch(removeProduct(index))}>&times;</span></li>
        ))}
        </>
    )
}

export default App