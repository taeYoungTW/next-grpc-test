import styles from './Title.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
// import { GreeterClient } from 'grpc/HelloworldServiceClientPb';
// import { HelloRequest } from 'grpc/helloworld_pb';

const cx = classNames.bind(styles);

interface Props {
    ssr?: string;
}

const Title = ({ ssr }: Props) => {
    // const client = new GreeterClient('http://sungchul.xyz:8080', null, null);

    const [name, setName] = useState(ssr ?? 'none');
    const [input, setInput] = useState('');

    // useEffect(() => {
    //     const request = new HelloRequest();
    //     request.setName(input);
    //     client.sayHello(
    //         request,
    //         { 'custom-header-1': 'value1' },
    //         (err, response) => {
    //             if (err) return console.error(err);
    //             setName(response.getMessage());
    //         }
    //     );
    // }, [input]);

    return (
        <>
            <div className={cx('title')}>
                Test Title Component With Classnames, module scss
                <h4>SayHello : {name}</h4>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </div>
        </>
    );
};

export default Title;
