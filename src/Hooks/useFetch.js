import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null,
        });

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                const error = data.cod === '404';

                if (isMounted.current) {
                    setState({ loading: false, error, data });
                }
            });
    }, [url]);

    return state;
};
