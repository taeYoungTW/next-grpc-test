import { HelloReply, HelloRequest } from 'grpc/node/proto/helloworld_pb';
import { GreeterClient } from 'grpc/node/proto/helloworld_grpc_pb';
import { credentials, Client } from '@grpc/grpc-js';

export const nodeHello = async (request: HelloRequest): Promise<HelloReply> => {
    const client = new GreeterClient(
        '0.0.0.0:9090',
        credentials.createInsecure()
    );

    return new Promise((resolve, reject) =>
        client.sayHello(request, (err, response) => {
            err ? reject(err) : resolve(response);
        })
    );
};

// export const nodeGRPC = async <Request, Reply, _Client extends any>(client: _Client, method: string ,request: Request): Promise<Reply> => {
//   const _client = new client('0.0.0.0:9090', credentials.createInsecure());
//   return new Promise((resolve, reject) =>
//         _client(request, (err, response) => {
//             err ? reject(err) : resolve(response);
//         })
//     );
// }
