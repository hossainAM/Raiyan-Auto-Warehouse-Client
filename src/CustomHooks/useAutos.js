import {
    useEffect,
    useState
} from "react"

const useAutos = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/auto')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return [items, setItems];
}

export default useAutos;