import{useState, useEffect} from 'react';

// Creating custom hooks
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null);

    // Hook
    useEffect(() => {// This will run every time there is  re-render when the page loads and when there are changes.
         const abortCont = new AbortController();

        setTimeout(() =>  {// Sets a timer
            fetch(url, {signal: abortCont.signal})
                .then(res => { // responce object to get json.
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource.');
                    }
                    return res.json(); // passes json to a javascript for us. 
                })
                .then(data => { // takes in the actual data.
                    setData(data); 
                    setIsPending(false);
                    setError(null); 
                })
                .catch(err => { // catches any kind of network error
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted')
                    } else{
                       setIsPending(false);
                       setError(err.message); 
                    }               
                })
            }, 1000);

            return () => abortCont.abort();// aborts whatever is associated with it. This case it is fetch.
        }, [url]); //using square brackets ensure that the useEffect hook only happens after the first initial render. When the state changes, it wont run it again.
    
        return{data, isPending, error};
 }

export default useFetch;