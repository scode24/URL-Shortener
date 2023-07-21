import React, { useState, useEffect } from 'react';
import UrlInfoCard from './UrlInfoCard';
import env from '../../environment';

function Home(props) {

    const [surlList, setSurlList] = useState([]);
    const [surlBkpList, setSurlBkpList] = useState([]);
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [isValidUrlInput, setIsValidUrlInput] = useState(true);

    useEffect(() => {
        loadSurlList();
    }, [])

    const generateSurl = () => {
        const url = document.getElementById('generateSurlTxt').value;
        if (url === '') {
            return;
        }
        const re = /^(http|https):\/\/([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
        if (re.test(url)) {
            setIsValidUrlInput(true);
            fetch(env['base-api'] + "/generateShortUrl?url=" + url, {
                method: 'POST'
            })
                .then(data => {
                    return data.json()
                }).then(result => {
                    loadSurlList();
                    props.openCloseDialog('open', 'success', result['surl']);
                }).catch(error => {
                    console.log(error);
                    props.openCloseDialog('close', 'error', error);
                })
        } else {
            setIsValidUrlInput(false);
        }
    }

    const loadSurlList = () => {
        fetch(env['base-api'] + "/getAllSurls")
            .then(data => {
                return data.json()
            }).then(list => {
                setSurlList(list);
                setSurlBkpList(list);
            }).catch(error => {
                console.log(error);
            })
    }

    const onSearchClearAction = () => {
        if (!isSearchClicked) {
            const value = document.getElementById('searchTxt').value.toLowerCase();
            if (value === '') {
                return;
            }
            const result = surlList.filter(o => o['url'].toLowerCase().includes(value) || o['surl'].toLowerCase().includes(value));
            setSurlList(result);
            setIsSearchClicked(true);
        } else {
            document.getElementById('searchTxt').value = '';
            setSurlList(surlBkpList);
            setIsSearchClicked(false);
        }
    }

    return (
        <>
            <div className='flex-1 flex flex-col justify-center border-r-2 h-full px-20 max-md:px-10 max-md:p-7 max-md:border-r-0 border-b-2'>
                <div className='flex flex-col'>
                    <span className='text-5xl max-md:text-2xl'>Welcome User</span>
                    <span className='text-5xl font-bold  max-md:text-2xl'>Link it, shrink it, funky quick! Get snappy with our URL magic!</span>
                </div>

                <div className='flex flex-row mt-7 max-md:flex-col'>
                    <input id='generateSurlTxt' className='p-5 w-full border-2 max-md:p-3' placeholder='Enter your URL and click on generate' />
                    <button className='p-5 bg-black text-white active:bg-gray-700  max-md:p-3' onClick={() => generateSurl()}>Generate</button>
                </div>
                {!isValidUrlInput
                    ? <label className='mt-3 text-red-700'>Please provide valid URL</label>
                    : <></>
                }

            </div>

            <div className='flex-1 flex flex-col justify-start h-full'>
                <div className='flex flex-row w-full'>
                    <input id='searchTxt' className='p-5 w-full border-dashed border-2 max-md:p-3' placeholder='Search by full / short URL' />
                    <button className='p-5 bg-black text-white active:bg-gray-700  max-md:p-3' onClick={() => onSearchClearAction()}>
                        {isSearchClicked ? 'Clear' : 'Search'}
                    </button>
                </div>

                <div className='h-85v overflow-auto max-md:h-50v'>
                    {
                        surlList.map((item, index) => (
                            <UrlInfoCard urlInfo={{
                                'longUrl': item['url'],
                                'shortUrl': item['surl']
                            }}></UrlInfoCard>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Home