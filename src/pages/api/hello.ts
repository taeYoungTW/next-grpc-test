// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { GreeterClient } from 'grpc/node/proto/helloworld_grpc_pb';
import { credentials } from '@grpc/grpc-js';
import { HelloRequest } from 'grpc/node/proto/helloworld_pb';
type Data =
    | {
          message: string;
      }
    | { error: unknown };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { body } = req;
    try {
        const client = new GreeterClient(
            '0.0.0.0:9090',
            credentials.createInsecure()
        );
        const request = new HelloRequest();
        request.setName(body.data);
        const result = await new Promise((resolve, reject) =>
            client.sayHello(request, {}, async (err, response) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                const result = response.getMessage();
                resolve(result);
            })
        );
        if (typeof result !== 'string') return;
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(400).json({ error });
    }
}
