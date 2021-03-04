import {useSelector} from 'react-redux';

const Display = () => {
    const result = useSelector(state => state.result)
   
    return(<div>{result}</div>)
}

export default Display;