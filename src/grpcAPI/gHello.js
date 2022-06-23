import {
    HelloReply as _HelloReply,
    HelloRequest as _HelloRequest,
} from 'grpc/web/helloworld_pb';
import { HelloReply, HelloRequest } from 'grpc/node/proto/helloworld_pb';
import { GreeterClient } from 'grpc/node/proto/helloworld_grpc_pb';
import { credentials } from '@grpc/grpc-js';
import { GreeterClient as _GreeterClient } from 'grpc/web/HelloworldServiceClientPb';

export const gHello = async ({ name, isServer }) => {
    // const isServer = typeof window === 'undefined';
    let res = null;
    // console.log(isServer);
    try {
        if (isServer) {
            const client = new GreeterClient(
                '0.0.0.0:9090',
                credentials.createInsecure()
            );
            const request = new HelloRequest();
            request.setName(name);
            const hello = async () => {
                return new Promise((resolve, reject) =>
                    client.sayHello(request, async (err, response) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        }
                        const result = response.getMessage();
                        resolve(response);
                    })
                );
            };
            return await hello();
        } else {
            const client = new _GreeterClient('http://sungchul.xyz:8080', null);
            const request = new _HelloRequest();
            request.setName(name);
            res = await client.sayHello(request, null);
            return res;
        }
    } catch (error) {
        console.log(error);
    }
};
