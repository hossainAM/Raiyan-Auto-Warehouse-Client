import {
    useEffect,
    useState
} from "react";

const useAutoDetails = (id) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://arcane-reaches-25713.herokuapp.com/auto/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);

    return [item, setItem];
}

export default useAutoDetails;