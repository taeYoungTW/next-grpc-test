import { GrpcWebClientBase } from 'grpc-web';
import { HelloRequest } from 'grpc/web/helloworld_pb';

import { rest } from 'msw';

export const handlers = [
    rest.post(
        'http://sungchul.xyz:8080/helloworld.Greeter/SayHello',
        (req, res, ctx) => {
            const { body } = req;

            return res(
                ctx.status(200),
                ctx.set('Content-Type', 'application/grpc-web-text+proto'),
                ctx.body(
                    'AAAAACYKJEhlbGxvLCAyMDIyLiA2LiAyMy4g7Jik7KCEIDEwOjUyOjMwIQ==gAAAAA9ncnBjLXN0YXR1czowDQo='
                )
            );
        }
    ),
];
