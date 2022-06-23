import { HelloRequest } from 'grpc/node/proto/helloworld_pb';
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { nodeHello } from 'src/grpcAPI/nodeHello';

export const getServerSideProps: GetServerSideProps = async () => {
    const time = new Date().toLocaleString('ko');
    const helloRequest = new HelloRequest();
    helloRequest.setName(time);
    const res = await nodeHello(helloRequest);
    console.log(`Run SSR!: ${time}`);
    return {
        props: { ssr: res.getMessage() },
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
