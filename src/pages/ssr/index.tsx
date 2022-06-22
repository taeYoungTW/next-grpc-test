import type { GetServerSideProps, NextPage } from 'next';
// import { GreeterClient } from 'grpc/node/proto/helloworld_grpc_pb';
// import { HelloRequest } from 'grpc/node/proto/helloworld_pb';
import { credentials } from '@grpc/grpc-js';
import Link from 'next/link';
import protoLoader from '@grpc/proto-loader';
import grpcLibrary from '@grpc/grpc-js';
import { ProtoGrpcType } from 'grpc/helloworld';

export const getServerSideProps: GetServerSideProps = async () => {
    const packageDefinition = protoLoader.loadSync(
        '../../../proto/helloworld.proto',
        {}
    );
    const proto = grpcLibrary.loadPackageDefinition(
        packageDefinition
    ) as unknown as ProtoGrpcType;

    const client = new proto.helloworld.Greeter(
        '0.0.0.0:9090',
        credentials.createInsecure()
    );
    const time = new Date().toLocaleString('ko');
    console.log(`Run SSR! : ${time}`);
    console.log(typeof window === 'undefined' ? 'Server!' : 'Client');

    const res = await new Promise((resolve, reject) =>
        client.sayHello({ name: 'hi' }, {}, async (err, response) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            if (!response) return;
            const result = response;
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
