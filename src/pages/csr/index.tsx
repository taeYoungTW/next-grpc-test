import { HelloRequest } from 'grpc/web/helloworld_pb';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { webHello } from 'src/grpcAPI/webHello';

const CSR: NextPage = () => {
    const [csr, setCsr] = useState('');
    useEffect(() => {
        const fetch = async () => {
            const helloRequest = new HelloRequest();
            const time = new Date().toLocaleString();
            helloRequest.setName(`csr: ${time}`);
            const res = await webHello(helloRequest);
            setCsr(res.getMessage());
        };
        fetch();
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
