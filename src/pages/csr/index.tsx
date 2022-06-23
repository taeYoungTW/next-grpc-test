import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HelloRequest } from 'grpc/web/helloworld_pb';
import { GreeterClient } from 'grpc/web/HelloworldServiceClientPb';

const CSR: NextPage = () => {
    const [csr, setCsr] = useState('');
    useEffect(() => {
        (async () => {
            const client = new GreeterClient('http://sungchul.xyz:8080', null);
            const request = new HelloRequest();
            request.setName('msw');
            const res = await client.sayHello(request, {});
            setCsr(res.getMessage());
        })();
    }, []);
    return (
        <div style={{ padding: '50px' }}>
            <h1>CSR: {csr}</h1>
            <Link href={'/'}>
                <h1 style={{ color: 'orange' }}>Home</h1>
            </Link>
        </div>
    );
};

export default CSR;
