import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../../environment';

function Redirect() {

    let param = useParams();

    const [isPageOpened, setIsPageOpened] = useState(false);

    useEffect(() => {
        if (!isPageOpened) {
            fetch(env['base-api'] + '/getUrlFromSurl?surl=' + window.location.href, {
                'method': 'POST'
            })
                .then(data => {
                    return data.json();
                }).then(urlData => {
                    console.log(urlData);
                    setIsPageOpened(true);
                    window.open(urlData['url'])
                }).catch(error => {
                    console.log(error);
                })
        }
    }, [param, isPageOpened])
    return (
        <>code</>
    )
}

export default Redirect