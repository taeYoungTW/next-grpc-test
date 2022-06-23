import { HelloReply, HelloRequest } from 'grpc/web/helloworld_pb';
import { GreeterClient } from 'grpc/web/HelloworldServiceClientPb';

export const webHello = async (request: HelloRequest) => {
    const client = new GreeterClient('http://sungchul.xyz:8080', null);
    return await client.sayHello(request, null);
};
