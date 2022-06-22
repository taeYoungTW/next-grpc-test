import type { GetServerSideProps, NextPage } from 'next';
import { GreeterClient } from 'grpc/node/proto/helloworld_grpc_pb';
import { HelloRequest } from 'grpc/node/proto/helloworld_pb';
import { credentials } from '@grpc/grpc-js';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async () => {
    const client = new GreeterClient(
        '0.0.0.0:9090',
        credentials.createInsecure()
    );
    const request = new HelloRequest();
    const time = new Date().toLocaleString('ko');

    console.log(`Run SSR! : ${time}`);
    console.log(typeof window === 'undefined' ? 'Server!' : 'Client');

    request.setName(time);
    const res = await new Promise((resolve, reject) =>
        client.sayHello(request, {}, async (err, response) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            if (!response) return;
            const result = response.getMessage();
            resolve(result);
        })
    );
    return {
        props: { ssr: res },
    };
};

interface Props {
    ssr?: string;
}

const SSR: NextPage = ({ ssr }: Props) => {
    return (
        <div style={{ padding: '50px' }}>
            <h1>SSR: {ssr}</h1>
            <Link href={'/'}>
                <h1 style={{ color: 'orange' }}>Home</h1>
            </Link>
        </div>
    );
};

export default SSR;
