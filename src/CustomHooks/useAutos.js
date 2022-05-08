import {
    useEffect,
    useState
} from "react"

const useAutos = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://arcane-reaches-25713.herokuapp.com/auto')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return [items, setItems];
}

export default useAutos;