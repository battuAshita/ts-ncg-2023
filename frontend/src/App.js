import React, {useEffect, useState} from 'react';
import ViewsTable from "./ViewsTable";
import AddViewFrom from "./AddViewForm";

const App = () => {

    const [ViewList, setViewList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(0);


    useEffect(() => {
        setLoading(true);

        fetch('all')
            .then(response => response.json())
            .then(data => {
                setViewList(data);
                setLoading(false);

            })

    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (

        <div className="container">
            <div>
                <AddViewFrom vList={setViewList}/>
            </div>
        
            <h3>List of views</h3>

            <ViewsTable setId={setId} view={ViewList} setViewList={setViewList}/>
        </div>
    );
}

export default App;