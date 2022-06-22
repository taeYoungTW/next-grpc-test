import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HelloRequest } from 'grpc/web/helloworld_pb';
import { GreeterClient } from 'grpc/web/HelloworldServiceClientPb';
import axios from 'axios';

const CSR: NextPage = () => {
    const [csr, setCsr] = useState('');
    useEffect(() => {
        (async () => {
            const res = await axios.post('/api/hello', {
                data: 'test',
            });
            setCsr(res.data?.message);
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
